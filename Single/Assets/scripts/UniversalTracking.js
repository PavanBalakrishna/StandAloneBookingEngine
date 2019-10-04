var UniversalTracking = {
    Constants: {
        Domain: "http://www.mystays.com",
        TrackingCode: null,
        SitecoreWhiteList: ["www.mystays", "dev.mystays", "mystays9.local", "mystays.local", "villagehouse", "solaniwa", "mspnarita", "osaka-baytower", "art-oita", "art-aomori"],
        SitecoreBookingWidgetAPI: '/ajax/core/UniversalTrackingSitecore/TrackEvent',
        ExternalBookingWidgetAPI: '/api/core/UniversalTrackingExternal/TrackEvent',
        UpdateConversionAPI: '/api/core/UniversalTrackingExternal/UpdateConversion',
        BookingWidgetAPI: null
    },
    HelperMethods: {
        //Function to make an ajax call
        AjaxCall: function (url, data, method, synchronous, successCallBack, failureCallBack) {
            if (window.XMLHttpRequest) {
                // code for modern browsers
                xmlhttpReq = new window.XMLHttpRequest();
            } else {
                // code for old IE browsers
                xmlhttpReq = new ActiveXObject("Microsoft.XMLHTTP");
            }


            //xmlhttpReq.addEventListener("load", successCallBack);
            //xmlhttpReq.addEventListener("error", failureCallBack);

            xmlhttpReq.onreadystatechange = function () {
                if (xmlhttpReq.readyState = XMLHttpRequest.DONE) {
                    
                    //Set tracker code for ajax calls
                    UniversalTracking.HelperMethods.SetTrackingCode(xmlhttpReq.responseText);
                    if (successCallBack != null) {
                        successCallBack();
                    }

                }
            };
            xmlhttpReq.open(method, url, !synchronous);

            if (data) {
                xmlhttpReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                xmlhttpReq.send(data);
            } else {
                xmlhttpReq.send();
            }

        },
        GetLocalDate: function GetLocalDate(localdate) {
            if ((localdate instanceof Date) != true) {
                return localdate;
            } else {
                return (localdate.getFullYear() + "-" + (localdate.getMonth() + 1) + "-" + localdate.getDate());
            }
        },
        GetCookie: function (cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) === ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) === 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        },
        GetMainDomain: function () {
            if (window.location.host.indexOf('local')>0) {
                return window.location.host;
            } else {
                var separate = window.location.host.split('.');
                separate.shift();
                var mainDomain = separate.join('.');
                return mainDomain;
            }
        },
        SetCookie: function SetCookie(cookiename, cvalue, days) {
            var d = new Date();
            d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = d.toUTCString();
            var mainDomain = UniversalTracking.HelperMethods.GetMainDomain();
            document.cookie = cookiename + "=" + cvalue + ";expires=" + expires + ";path=/" + ";domain=." + mainDomain;
        },
        SetTrackingCode: function (trackingCode) {
            if (trackingCode.toLowerCase().indexOf("universaltrackingcode") > 0) {
                var MystaysContact = JSON.parse(trackingCode);

                if (MystaysContact.UniversalTrackingCode != "00000000-0000-0000-0000-000000000000" && MystaysContact.universalTrackingCode != "00000000-0000-0000-0000-000000000000") {
                    if (MystaysContact.UniversalTrackingCode != null) {
                        UniversalTracking.HelperMethods.SetCookie("MystaysUniversalTrackingCode", MystaysContact.UniversalTrackingCode, 0.05);
                        UniversalTracking.Constants.TrackingCode = MystaysContact.UniversalTrackingCode;
                    } else {
                        UniversalTracking.HelperMethods.SetCookie("MystaysUniversalTrackingCode", MystaysContact.universalTrackingCode, 0.05);
                        UniversalTracking.Constants.TrackingCode = MystaysContact.universalTrackingCode;
                    }
                }

                

                //Only update the ContactID if the cookie isnt present
                
                    if (MystaysContact.ContactID != null) {
                        UniversalTracking.HelperMethods.SetCookie("MystaysUniversalExternalContact", MystaysContact.ContactID, 30);
                    } else {
                        UniversalTracking.HelperMethods.SetCookie("MystaysUniversalExternalContact", MystaysContact.contactID, 30);
                    }
                
                //Set variable used in other JS files to read the values
                if (MystaysContact.ContactID != null) {
                    UniversalTracking.Constants.ContactID = MystaysContact.ContactID;
                } else {
                    UniversalTracking.Constants.ContactID = MystaysContact.contactID;
                }
                
            }
        },
        
    },
    Tracking: {
        FireEvent: function (requestType, valueCallback, languageCode, successCallBack) {

            if (languageCode === 'en') {
                languageCode = 'en-us';
            }
            languageCode = languageCode.toLowerCase().replace('-', '_');
            var valueData = null;
            if (typeof valueCallback === 'function') {
                valueData = valueCallback();
            } else {
                valueData = valueCallback;
            }
            if (UniversalTracking.Constants.BookingWidgetAPI.indexOf("api") < 0) {
                var requestBody = {
                    "TrackRequest": {
                        "RequestType": requestType,
                        "EventValue": valueData,
                        "Domain": document.location.host,
                        "PageUrl": document.location.href,
                        "ReferrerUrl": document.referrer,
                        "LanguageCode": languageCode
                    }
                };
            } else {
                var requestBody = {
                        "RequestType": requestType,
                        "EventValue": valueData,
                        "Domain": document.location.host,
                        "PageUrl": document.location.href,
                        "ReferrerUrl": document.referrer,
                        "LanguageCode": languageCode
                };
            }
            

            UniversalTracking.HelperMethods.AjaxCall(UniversalTracking.Constants.Domain + UniversalTracking.Constants.BookingWidgetAPI + '?sc_lang=' + languageCode, JSON.stringify(requestBody), 'POST', false, successCallBack, null);
        },
        FireBookingWidgetClick: function (valueCallback, bookingwidgetObject, languageCode, requestType, successCallBack) {
            try {

                //Return if the search is not successful and the input text is blank
                if (!bookingwidgetObject.IsSuccessfulSearch && (bookingwidgetObject.BookingWidgetSearchText === '' || bookingwidgetObject.BookingWidgetSearchText === null)) {
                    return false;
                }

                if (languageCode === 'en') {
                    languageCode = 'en-us';
                }

                languageCode = languageCode.toLowerCase().replace('-', '_');

                var valueData = null;
                if (typeof valueCallback === 'function') {
                    valueData = valueCallback();
                } else {
                    valueData = valueCallback;
                }

                if (bookingwidgetObject === null) {
                    console.log('bookingwidgetObject not assigned');
                    throw 'bookingwidgetObject not assigned';
                }

                if (UniversalTracking.Constants.BookingWidgetAPI.indexOf("api") < 0) {
                    var requestBody = {
                        "TrackRequest": {
                            "RequestType": requestType,
                            "EventValue": valueData,
                            "Domain": document.location.host,
                            "PageUrl": document.location.href,
                            "ReferrerUrl": document.referrer,
                            "LanguageCode": languageCode,
                            "IsSuccessfulSearch": bookingwidgetObject.IsSuccessfulSearch,
                            "BookingWidgetItemID": bookingwidgetObject.BookingWidgetItemID,
                            "BookingWidgetSearchText": bookingwidgetObject.BookingWidgetSearchText,
                            "BookingWidgetStartDate": UniversalTracking.HelperMethods.GetLocalDate(bookingwidgetObject.BookingWidgetStartDate),
                            "BookingWidgetEndDate": UniversalTracking.HelperMethods.GetLocalDate(bookingwidgetObject.BookingWidgetEndDate),
                            "BookingWidgetRooms": bookingwidgetObject.BookingWidgetRooms,
                            "BookingWidgetAdults": bookingwidgetObject.BookingWidgetAdults,
                            "BookingWidgetChildren": bookingwidgetObject.BookingWidgetChildren,
                            "BookingWidgetChildrenHigher": bookingwidgetObject.BookingWidgetChildrenHigher,
                            "BookingWidgetChildrenLower": bookingwidgetObject.BookingWidgetChildrenLower,
                            "BookingWidgetChildrenInfant": bookingwidgetObject.BookingWidgetChildrenInfant,
                            "BookingWidgetPromoCode": bookingwidgetObject.BookingWidgetPromoCode,
                            "BookingWidgetRoomCode": bookingwidgetObject.BookingWidgetRoomCode,
                            "ContactExternal": bookingwidgetObject.ContactExternal
                        }
                    };
                } else {
                    var requestBody = {
                            "RequestType": requestType,
                            "EventValue": valueData,
                            "Domain": document.location.host,
                            "PageUrl": document.location.href,
                            "ReferrerUrl": document.referrer,
                            "LanguageCode": languageCode,
                            "IsSuccessfulSearch": bookingwidgetObject.IsSuccessfulSearch,
                            "BookingWidgetItemID": bookingwidgetObject.BookingWidgetItemID,
                            "BookingWidgetSearchText": bookingwidgetObject.BookingWidgetSearchText,
                            "BookingWidgetStartDate": UniversalTracking.HelperMethods.GetLocalDate(bookingwidgetObject.BookingWidgetStartDate),
                            "BookingWidgetEndDate": UniversalTracking.HelperMethods.GetLocalDate(bookingwidgetObject.BookingWidgetEndDate),
                            "BookingWidgetRooms": bookingwidgetObject.BookingWidgetRooms,
                            "BookingWidgetAdults": bookingwidgetObject.BookingWidgetAdults,
                            "BookingWidgetChildren": bookingwidgetObject.BookingWidgetChildren,
                            "BookingWidgetChildrenHigher": bookingwidgetObject.BookingWidgetChildrenHigher,
                            "BookingWidgetChildrenLower": bookingwidgetObject.BookingWidgetChildrenLower,
                            "BookingWidgetChildrenInfant": bookingwidgetObject.BookingWidgetChildrenInfant,
                            "BookingWidgetPromoCode": bookingwidgetObject.BookingWidgetPromoCode,
                        "BookingWidgetRoomCode": bookingwidgetObject.BookingWidgetRoomCode,
                        "ContactExternal": bookingwidgetObject.ContactExternal
                    };
                }

                

                UniversalTracking.HelperMethods.AjaxCall(UniversalTracking.Constants.Domain + UniversalTracking.Constants.BookingWidgetAPI + '?sc_lang=' + languageCode, JSON.stringify(requestBody), 'POST', true, successCallBack, null);
            } catch (e) {
                console.log(e);
            }

        },
        UpdateConversion: function UpdateConversion(requestData) {
            try {
                console.log(document.cookie);
                if (languageCode === 'en') {
                    languageCode = 'en-us';
                }
                UniversalTracking.HelperMethods.AjaxCall(UniversalTracking.Constants.Domain + UniversalTracking.Constants.Domain + UniversalTracking.Constants.UpdateConversionAPI + '?sc_lang=ja-jp', requestData, 'POST', true, null, null);
            } catch (e) {
                console.log(e);
            }
        }
    }

}


//Check sitecore domain
UniversalTracking.Constants.Domain =  'https://www.mystays.com';


UniversalTracking.Constants.BookingWidgetAPI = UniversalTracking.Constants.ExternalBookingWidgetAPI;
