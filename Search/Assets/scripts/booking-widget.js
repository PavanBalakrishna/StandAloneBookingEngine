﻿//This javascript file contains methods used by the booking widget
var MystaysBookingWidget = {

    //Contains all the methods that are used throughout the module
    Common: {
        //Array to hold all the booking widgets
        MystaysRangeArray: [],
		
		LanguageTranslation : [],

        //A variable used to hold the event target when user performs any event(This variable  is used to distingish if the event occured in the first or the second booking widget)
        CurrentEventTarget: null,


        //The language used in the widget
        SelectedLanguage: null,

        //Used to store the original ID of the container for the booking widget
        BookingWidgetContainerID: null,

        Constants: {
            HotelPageContainer: function HotelPageContainer() {
                return '.mys-be-inner-page';
            },

            //Function to identify if the first widget has been selected on the hotel page
            HotelPageFirstWidget: function HotelPageFirstWidget() {
                return MystaysBookingWidget.Helper.ClosestElement(MystaysBookingWidget.Common.CurrentEventTarget, 'mys-be-inner-page');
            },
            CheckinDateCookie: 'datecheckinsearch',
            CheckoutDateCookie: 'datecheckoutsearch',
        },

        //**This method is used to identify the correct container or booking widget by using the value in the 'MystaysBookingWidget.Common.CurrentEventTarget
        BookingWidgetContainer: function () {
            if (MystaysBookingWidget.Common.CurrentEventTarget != null) {
                var bookingWidget = MystaysBookingWidget.Helper.ClosestElement(MystaysBookingWidget.Common.CurrentEventTarget, 'booking-widget-container');
                if (bookingWidget) {
                    return '#' + bookingWidget.id + ' ';
                } else {
                    return 'body ';
                }
            } else {
                return MystaysBookingWidget.Common.BookingWidgetContainerID;
            }
        },

        //Identifying the correct range object based on the MystaysBookingWidget.Common.BookingWidgetContainer()
        CurrentRangeObject: function CurrentRangeObject() {
            var container = MystaysBookingWidget.Common.BookingWidgetContainer();

            for (var i = 0; i < MystaysBookingWidget.Common.MystaysRangeArray.length; i++) {
                if (MystaysBookingWidget.Common.MystaysRangeArray[i].settings.context.indexOf(MystaysBookingWidget.Common.BookingWidgetContainer()) > -1) {
                    return MystaysBookingWidget.Common.MystaysRangeArray[i];
                }
            }
        },

        //Method to identify the container element
        BookingWidgetContainerElement: function BookingWidgetContainerElement() {
            if (MystaysBookingWidget.Common.BookingWidgetContainer() === '') {
                return document;
            }
            return document.getElementById(MystaysBookingWidget.Common.BookingWidgetContainer().replace('#', '').replace(' ', ''));
        },

        //Method to identify distance to be moved based on element position
        GetPositionToTop: function GetPositionToTop(element) {
            var currentPosition = element.getBoundingClientRect().y;
            return currentPosition + window.pageYOffset - 20;
        },

        

        


        //Function to make an ajax call
        AjaxCall: function AjaxCall(url, data, method, synchronous, successCallBack, failureCallBack) {
            if (window.XMLHttpRequest) {
                // code for modern browsers
                xmlhttpReq = new XMLHttpRequest();
            } else {
                // code for old IE browsers
                xmlhttpReq = new ActiveXObject("Microsoft.XMLHTTP");
            }


            //xmlhttpReq.addEventListener("load", successCallBack);
            xmlhttpReq.addEventListener("error", failureCallBack);

            xmlhttpReq.onreadystatechange = function () {
                if (xmlhttpReq.readyState == XMLHttpRequest.DONE) {
                    //alert(xhr.responseText);
                    successCallBack(xmlhttpReq.responseText)
                }
            }
            xmlhttpReq.open(method, url, !synchronous);

            if (data) {
                xmlhttpReq.send(data);
            } else {
                xmlhttpReq.send();
            }

        },
        
        //Function to update all the booking widgets with a start and end date
        UpdateAllBookingWidgetsOnPage: function UpdateAllBookingWidgetsOnPage(startDate, endDate, existingTarget) {
            //Only update if there is anor widget on the page
            if (MystaysBookingWidget.Common.MystaysRangeArray.length > 1) {
                var range = [startDate, endDate];
                for (var i = 0; i < MystaysBookingWidget.Common.MystaysRangeArray.length; i++) {
                    MystaysBookingWidget.Common.CurrentEventTarget = MystaysBookingWidget.Common.MystaysRangeArray[i].element;
                    MystaysBookingWidget.Common.MystaysRangeArray[i].setVal(range, true, true, false);
                    MystaysBookingWidget.BookingCalendar.CustomHTML.SetDateValues(MystaysBookingWidget.Common.MystaysRangeArray[i], true);
                }

                //Resetting the target back to the original
                MystaysBookingWidget.Common.CurrentEventTarget = existingTarget;
            }

        },

        

        //Function to change the responsiveness of the range (Which varies for the popup calendar on the meeting room)
        GetRangeResponsive: function GetRangeResponsive() {
            if (MystaysBookingWidget.Common.RangeResponsive == null) {

                
                    MystaysBookingWidget.Common.RangeResponsive = {
                        BreakPoint: 768,
                        Month: 2,
                        CalendarWidth: 654
                    }
                
            }

            return MystaysBookingWidget.Common.RangeResponsive;
        },
        //Set the format for the 'dateWheels' property of the range Object
        GetDateWheelFormat: function () {
            if (MystaysBookingWidget.Common.SelectedLanguage != 'en') {
                return 'yymmdd';
            } else {
                return 'mmyydd';
            }
        },
        //Set the format for the 'weekDays' property of the range Object
        GetweekDaysFormatMobile: function () {
            if (MystaysBookingWidget.Common.SelectedLanguage == 'zh' || MystaysBookingWidget.Common.SelectedLanguage == 'tw') {
                return 'full';
            } else {
                return 'short';
            }
        },

        //Function to check what is the boking engine that has to be used(Based on certain flags like AB test and UseTravelClickInJapan)
        UseTravelClickBookingEngine: function (HotelABTestBookingEnabled, HotelUseTravelClickInJapan) {
            //AB Test Logic(If the page and hotel has this AB test enabled then check for the AB test value)
            if (HotelABTestBookingEnabled != null && HotelABTestBookingEnabled == "true") {
                var abTestField = document.getElementById('hdnABTest');
                if (abTestField && ABTestBookingEnabled == 'true') {
                    if (abTestField.value == 'ABTestUseRwith') {
                        return false;
                    } else if (abTestField.value == 'ABTestUseTravelClick') {
                        return true;
                    }
                }
            }
            //UseTravelClickInJapan Logic(If the hotel has this flag enabled then always use TC)
            else if (HotelUseTravelClickInJapan != null && HotelUseTravelClickInJapan == "true") {
                return true;
            }
            //Default logic
            else {
                //Use RWith
                if (MystaysBookingWidget.Common.SelectedLanguage === 'ja') {
                    return false;
                } else {
                    return true;
                }
            }
        },
		
		//Function to update all static labels on the HTML
		UpdateStaticLabels:function UpdateStaticLabels(){
			
			MystaysBookingWidget.Common.AjaxCall(MystaysBookingWidget.Common.Constants.TranslationsPath, null, 'GET', true, function (response) {
                var translatedData = JSON.parse(response);
				
				
				
				//Getting the translation for the language
				for(var i=0; i < translatedData.MystaysLanguages.length; i++){
					if(MystaysBookingWidget.Common.SelectedLanguage == translatedData.MystaysLanguages[i].LanguageCode){
						MystaysBookingWidget.Common.LanguageTranslation = translatedData.MystaysLanguages[i];
					}
				}
				
				
				//Looping through each key and replacing the placeholders with the value
				for(var i=0; i < MystaysBookingWidget.Common.LanguageTranslation.StaticContent.length; i++){
					document.getElementsByClassName('booking-widget-container-main')[0].innerHTML = document.getElementsByClassName('booking-widget-container-main')[0].innerHTML.replace('{{'+MystaysBookingWidget.Common.LanguageTranslation.StaticContent[i].Key+'}}', MystaysBookingWidget.Common.LanguageTranslation.StaticContent[i].Value);
				}
            })
			
		}
    },
    //All generic helper methods
    Helper: {
        isIE11: function () {
            return !!(navigator.userAgent.match(/Trident/) && navigator.userAgent.match(/rv[ :]11/));
        },
        IsMicrosoftEdge: function () {
            return window.navigator.userAgent.indexOf("Edge") > -1;
        },
        Loaded: function Loaded() {
            MystaysBookingWidget.Helper.LoadExtensions();
            
            MystaysBookingWidget.Helper.ClickOutside();

        },

        
        //Method to get the querystring 
        GetQueryString: function GetQueryString(name) {
            var url = window.location.href;
            name = name.replace(/[\[\]]/g, '\\$&');
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        },

        SetCookie: function SetCookie(name, value) {
            
                document.cookie = name + '=' + value + ';path=/';
            
        },
        GetCookie: function GetCookie(name) {
            var value = '; ' + document.cookie;
            var parts = value.split('; ' + name + '=');
            if (parts.length === 2) {
                return parts.pop().split(';').shift();
            } else {
                return '';
            }
        },

        ///Method to save the date in the form of a cookie
        FormatDateToString: function FormatDateToString(date) {

            if (date) {
                month = '' + (date.getMonth() + 1),
                    day = '' + date.getDate(),
                    year = date.getFullYear();

                if (month.length < 2) month = '0' + month;
                if (day.length < 2) day = '0' + day;

                return [year, month, day].join('-');
            }

        },


        //Function to close the calendar when the user clicks outside
        ClickOutside: function ClickOutside() {

            //This check is to make sure that the ClickOutside event is not attached twice(When two booking widgets are present)
            if (MystaysBookingWidget.Common.AttachClickOutside == null) {


                document.addEventListener('click', function (e) {

                    var container = document.querySelector(MystaysBookingWidget.Common.BookingWidgetContainer());
                    //var bookingBoxes = document.querySelectorAll(MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-box');
                    var promocontainer = document.querySelector(MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-box.promocode');
                    var booknowbuttoncontainer = document.querySelector(MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-box.search-button');

                    //Click secondary menu button and check availability button(mobile) and on 
                    var secondaryMenu = document.querySelector('.show-booking-widget');
                    var checkAvailabilityMobile = document.querySelector('.mobile-detail-availability .avilability');
                    var hoteldetailsStrip = document.querySelector('#secondar-menu');

                    //Check if user selected promobox or button click
                    var IsPromoCodeContainer = ((((promocontainer === e.target) || MystaysBookingWidget.Helper.IsDescendant(promocontainer, e.target))));

                    var IsBooknowContainer = ((((booknowbuttoncontainer === e.target) || MystaysBookingWidget.Helper.IsDescendant(booknowbuttoncontainer, e.target))));

                    if (((!(container === e.target) && !MystaysBookingWidget.Helper.IsDescendant(container, e.target))
                        && (!(secondaryMenu === e.target) && !MystaysBookingWidget.Helper.IsDescendant(secondaryMenu, e.target))
                        && (!(checkAvailabilityMobile === e.target) && !MystaysBookingWidget.Helper.IsDescendant(checkAvailabilityMobile, e.target))
                        && (!(hoteldetailsStrip === e.target)))
                        || IsPromoCodeContainer || IsBooknowContainer) {
                        if (MystaysBookingWidget.Common.CurrentRangeObject()) {
                            MystaysBookingWidget.Common.CurrentRangeObject().hide();
                        }
                        MystaysBookingWidget.GuestsWidget.ShowGuestSection(false);
                        MystaysBookingWidget.HotelSearch.ShowHotelList(false);
                       
                    }

                    MystaysBookingWidget.Common.AttachClickOutside = false;
                })
            }
        },
        //Method to add extension methods
        LoadExtensions: function LoadExtensions() {
            HTMLElement.prototype.ShowElement = function () {

                this.classList.add('show');
                this.classList.remove('hide');

            };
            HTMLElement.prototype.HideElement = function () {
                this.classList.add('hide');
                this.classList.remove('show');

            };
            //Method to change the date format (IOS cannot read default format)
            String.prototype.ChangeDateFormat = function () {
                //If it is already a date then ignore
                if (!Date.parse(this)) {
                    return this.replace(/-/g, '/');
                }

                return this;
            };


            //Method to change the date format (IOS cannot read default format)
            Date.prototype.ChangeDateFormat = function () {
                //If it is already a date then ignore
                if (!Date.parse(this)) {
                    return this.replace(/-/g, '/');
                }

                return this;
            };

            NodeList.prototype.ShowElement = function () {

                var nodelist = this;
                for (var i = 0; i < nodelist.length; i++) {
                    nodelist[i].ShowElement();
                }
            };
            NodeList.prototype.HideElement = function () {

                var nodelist = this;
                for (var i = 0; i < nodelist.length; i++) {
                    nodelist[i].HideElement();
                }
            };
        },

        //Function to get the closest parent element with a class
        ClosestElement: function ClosestElement(element, cls) {
            // Traverse the DOM up with a while loop
            while (!element.classList.contains(cls)) {
                // Increment the loop to the parent node
                element = element.parentNode;
                if (!element || !element.classList) {
                    return null;
                }
            }
            return element;
        },

        //Method to check if the device is a mobile or not
        IsMobile: function IsMobile() {
            return window.innerWidth <= 767;
        },
        //Check if element is visible
        IsVisiable: function (element) {
            return (element.offsetParent != null)
        },
        //Method to check if an element is a Descendant of an item
        IsDescendant: function IsDescendant(parent, child) {
            var node = child.parentNode;
            while (node != null) {
                if (node == parent) {
                    return true;
                }
                node = node.parentNode;
            }
            return false;
        },
        GetDays: function GetDays(startval, endval) {
            var dateDifference = Math.floor((Date.parse(endval) - Date.parse(startval)) / 86400000);
            return dateDifference
        },
        //Method to get the corresponding language item from an array
        //0 - Japanese
        //1 - English
        //2 - Chinese
        //3 - Taiwanese
        //4 - Korean
        GetCustomText: function GetCustomText(typeOfConstant) {
            //try to get translation from the HTML/Sitecore
            var translatedLabel = MystaysBookingWidget.Helper.GetTranslation(typeOfConstant[5])

            if (translatedLabel) {
                return translatedLabel;
            }

            if (MystaysBookingWidget.Common.SelectedLanguage === 'ja') {
                return typeOfConstant[0];
            }
            else if (MystaysBookingWidget.Common.SelectedLanguage === 'en') {
                return typeOfConstant[1];

            } else if (MystaysBookingWidget.Common.SelectedLanguage === 'zh') {
                return typeOfConstant[2];

            } else if (MystaysBookingWidget.Common.SelectedLanguage === 'tw') {
                return typeOfConstant[3];
            }
            else if (MystaysBookingWidget.Common.SelectedLanguage === 'ko') {
                return typeOfConstant[4];
            }
            else if (MystaysBookingWidget.Common.SelectedLanguage === 'th') {
                return typeOfConstant[6];

            }
        },

        //Get translation from hidden field
        GetTranslation: function GetTranslation(name) {

            for(var i=0; i< MystaysBookingWidget.Common.LanguageTranslation.DynamicContent.length; i++){
				if(MystaysBookingWidget.Common.LanguageTranslation.DynamicContent[i].Key == name){
					return MystaysBookingWidget.Common.LanguageTranslation.DynamicContent[i].Value;
				}
			}
        },

        //Method to check if a node has a class
        HasClass: function HasClass(elem, cls) {
            var str = " " + elem.className + " ";
            var testCls = " " + cls + " ";
            return (str.indexOf(testCls) != -1);
        },

        //Method to get a next or previous sibling by class name
        GetSiblingByClass: function GetSiblingByClass(node, cls, isprevious) {
            if (isprevious) {
                while (node = node.previousSibling) {
                    if (MystaysBookingWidget.Helper.HasClass(node, cls)) {
                        return node;
                    }
                }
            } else {
                while (node = node.nextSibling) {
                    if (MystaysBookingWidget.Helper.HasClass(node, cls)) {
                        return node;
                    }
                }
            }

            return null;
        }

    },


    //All functionalities related to the booking widget calendar/range
    BookingCalendar: {

        Constants: {
            //Variable used to store the current active button
            CurrentStatus: '',
            //Variable used to identify if the checkout date is manually set to the next day
            CheckNextDaySetManually: false,
            EnglishMonthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            EnglishMonthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            EnglishDayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            CalendarHeader: ['カレンダー', 'Calendar', '月历', '月曆', '캘린더', 'CalendarHeader'],
            NightsOfStayDesktop: ['({days} 泊)', '({days} Nights)', '({days} 晚)', '({days} 晚)', '({days} 박)', 'NightsOfStayDesktop'],
            NightsOfStayOneNightDesktop: ['(1 泊)', '(1 Night)', '(1 晚)', '(1 晚)', '(1 박)', 'NightsOfStayOneNightDesktop'],
            NightsOfStayMobile: ['{days} 泊の予約へすすむ', 'Ok ({days} Nights)', '预约 {days} 晚住宿', '預約 {days} 晚住宿', '{days} 박 예약에', 'NightsOfStayMobile'],
            NightsOfStayOneNightMobile: ['1 泊の予約へすすむ', 'Ok (1 Night)', '预约 1 晚住宿', '預約 1 晚住宿', '1 박 예약에 ', 'NightsOfStayOneNightMobile'],
            YearText: ['年', '', '年', '年', '년', 'YearText'],
            DateText: ['日', '', '日', '日', '일', 'DateText'],
            MonthText: ['月', '', '月', '月', '월', 'MonthText'],
            DayPrependText: ['', '', '周', '週', '', 'DayPrependText'],
            CheckinLabel: ['チェックイン', 'Check In', 'Check in', 'Check in', 'Check in', 'CheckinLabel'],
            CheckoutLabel: ['チェックアウト', 'Check Out', 'Check Out', 'Check Out', 'Check Out', 'CheckoutLabel'],
            //Selectors
            RangeBubbleContainer: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .mbsc-fr-bubble-bottom';
            },
            IndicatorIcon: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .mbsc-fr-arr';
            },
            CheckinCheckoutContainer: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-checkin-checkout';
            },
            DatePickerContainer: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .date-picker';
            },
            SetButtonContainer: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .mbsc-fr-btn0';
            },
            CalendarInnerContainer: function () {
                return ' .mbsc-fr-w';
            },
            RangeContainerClass: function () {
                return '.mbsc-fr-persp';
            },
            SetButtonInnerContainer: function () {
                return '.mbsc-fr-btn-cont';
            },
            MystaysSelectedDate: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .mystays-selected-date';
            },
            HoverIntermediate: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .mystays-hover-intermediate';
            },
            DateDisabled: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .mystays-bookingengine-disabled';
            },
            CheckinContainer: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .calendar-checkindate';
            },
            CheckoutContainer: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .calendar-checkoutdate';
            },
            CalendarFooter: function () {
                return ' .mystays-calendar-footer';
            },
            CalendarBody: function () {
                return ' .mbsc-cal-body';
            },

            CheckinButton: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .bookingwidget-checkin';
            },


            CheckinButtonTitle: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .bookingwidget-checkin .title';
            },
            CheckinButtonDesc: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .bookingwidget-checkin .desc';
            },

            CheckoutButton: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .bookingwidget-checkout';
            },
            CheckoutButtonTitle: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .bookingwidget-checkout .title';
            },
            CheckoutButtonDesc: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .bookingwidget-checkout .desc';
            },


            DefaultCalendarSelector: function () {
                return ' .mbsc-range-btn-start';
            },
            CustomCalendarSelector: function () {
                return 'mystays-range-selector-header';
            },






        },
        //Contains methods that alter the HTML of the calendar
        CustomHTML: {
            //Method to reposition the indicator icon based on user selection of start or end date
            RepositionSelectorIndicator: function RepositionSelectorIndicator(IsCheckin) {
                var rangeBubbleContainer = document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.RangeBubbleContainer());
                if (rangeBubbleContainer) {

                    //Ask Vinay the logic
                    var bookingWidgetModule = MystaysBookingWidget.Common.BookingWidgetContainerElement().getElementsByClassName('booking-widget-module')[0];
                    var bookingWidgetModuleOffsetLeft = bookingWidgetModule.offsetLeft;
                    var parentLeftProperty = parseInt(window.getComputedStyle(bookingWidgetModule.parentNode).getPropertyValue('padding-left').replace("px", ""));
                    var datePickerContainer = document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.DatePickerContainer());
                    var datePickerContainerOffset = datePickerContainer.offsetLeft;
                    var datePickerContainerWidth = datePickerContainer.offsetWidth;
                    var rangeBubbleContainerLeft = rangeBubbleContainer.style.left;
                    var currentRangeLeftPropertyValue = parseInt(rangeBubbleContainerLeft.replace('px', ''));

                    var updateLeftValue = bookingWidgetModuleOffsetLeft - parentLeftProperty + datePickerContainerOffset + (datePickerContainerWidth / 4) - currentRangeLeftPropertyValue;





                    var indicator = document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.IndicatorIcon());
                    var indicatorLeftProperty = indicator.style.left;
                    var currentLeftPropertyValue = parseInt(indicatorLeftProperty.replace('px', ''));

                    var btncontainer = document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.CheckinCheckoutContainer());



                    //Ensuring that the calendar is always static(To override default mobiscroll logic)
                    //if (currentRangeLeftPropertyValue > updateLeftValue) {
                    //    rangeBubbleContainer.style.left = (currentRangeLeftPropertyValue - (btncontainer.offsetWidth / 2)) + "px";
                    //}

                    //When checkin button is clicked
                    if (IsCheckin) {
                        //Move indicator to checkin if necessary
                        if (currentLeftPropertyValue > updateLeftValue) {
                            indicator.style.left = (currentLeftPropertyValue - (btncontainer.offsetWidth / 2)) + "px";
                        }

                    } else {

                        //Move indicator to checkout if necessary
                        if (currentLeftPropertyValue < updateLeftValue) {
                            indicator.style.left = (currentLeftPropertyValue + (btncontainer.offsetWidth / 2)) + "px";
                        }

                    }
                    //If element is visiable then add class to allow animation on slide
                    if (MystaysBookingWidget.Helper.IsVisiable(rangeBubbleContainer)) {
                        indicator.classList.add('mystays-bookingwidget-animate-slide');
                    }

                }
            },
            //Function to reposition the SetButtonInnerContainer from inside the CalendarInnerContainer to after the CalendarInnerContainer
            AdjustSetButtonContainerPosition: function AdjustSetButtonContainerPosition(calendarElement) {
                if (MystaysBookingWidget.Helper.IsMobile()) {
                    var setButtonContainer = calendarElement.querySelector(MystaysBookingWidget.BookingCalendar.Constants.SetButtonInnerContainer());

                    //Updating the CalenderInnerContainer
                    if (setButtonContainer) {
                        var calendarInnerContainer = calendarElement.querySelector(MystaysBookingWidget.BookingCalendar.Constants.CalendarInnerContainer());
                        calendarInnerContainer.removeChild(setButtonContainer);
                        calendarInnerContainer.insertAdjacentHTML('afterend', setButtonContainer.outerHTML);
                    }



                }
            },
            //Work around to manually update the Set button bottom in order to show the SET button(Issue - The set button was not showing)
            SetBottomForSetButton: function SetBottomForSetButton(bottomValue, calendarElement) {
                if (MystaysBookingWidget.Helper.IsMobile()) {

                    if (calendarElement) {
                        var setButtonContainer = calendarElement.querySelector(MystaysBookingWidget.BookingCalendar.Constants.SetButtonInnerContainer());
                    } else {
                        var setButtonContainer = document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.SetButtonInnerContainer());
                    }


                    //Updating the CalenderInnerContainer
                    if (setButtonContainer) {
                        setButtonContainer.style.bottom = bottomValue + "px";
                    }



                }
            },

            UpdateSetButton: function (startdate, enddate) {
                if (MystaysBookingWidget.Helper.IsMobile() && document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.SetButtonContainer())) {

                    var dateDifference = MystaysBookingWidget.Helper.GetDays(startdate, enddate);
                    if (dateDifference > 1) {
                        document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.SetButtonContainer()).innerHTML = MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.NightsOfStayMobile).replace('{days}', dateDifference);
                    } else {
                        document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.SetButtonContainer()).innerHTML = MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.NightsOfStayOneNightMobile);
                    }

                }
            },
            //Method to disable previous dates after start date is selected
            DisablePreviousDates: function DisablePreviousDates(dateToCheck) {
                MystaysBookingWidget.BookingCalendar.CustomHTML.EnableAllDates();
                var dateItemList = document.querySelectorAll(MystaysBookingWidget.BookingCalendar.Constants.MystaysSelectedDate());

                for (var i = 0; i < dateItemList.length; i++) {
                    if (new Date(dateItemList[i].getAttribute('data-full').ChangeDateFormat()) < new Date(dateToCheck)) {
                        dateItemList[i].classList.add('mystays-bookingengine-disabled');
                        dateItemList[i].classList.add('mbsc-disabled');
                        dateItemList[i].classList.add('mbsc-sc-itm-inv');

                    }
                }



            },
            //Method to reenable all the dates again
            EnableAllDates: function EnableAllDates() {
                var dateItemList = document.querySelectorAll(MystaysBookingWidget.BookingCalendar.Constants.DateDisabled());

                for (var i = 0; i < dateItemList.length; i++) {
                    dateItemList[i].classList.remove('mystays-bookingengine-disabled');
                    dateItemList[i].classList.remove('mbsc-disabled');
                    dateItemList[i].classList.remove('mbsc-sc-itm-inv');
                }
            },
            //Method to set the date to the mystays check in and check out buttons
            SetDateValues: function SetDateValues(mobiScrollInstance, IgnoreUpdates) {

                startval = mobiScrollInstance.startVal;
                endval = mobiScrollInstance.endVal;

                document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.CheckinContainer()).setAttribute('data-value', startval);
                document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.CheckoutContainer()).setAttribute('data-value', endval);

                if (startval !== "" && startval) {
                    var startDate = startval.split('|')[0];

                    //To display short name for english
                    if (MystaysBookingWidget.Common.SelectedLanguage != 'en') {
                        var startMonth = (new Date(startval.split('|')[4]).getMonth() + 1) + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.MonthText);
                    } else {
                        var startMonth = MystaysBookingWidget.BookingCalendar.Constants.EnglishMonthNamesShort[new Date(startval.split('|')[4]).getMonth()];
                    }

                    var startYear = startval.split('|')[2];

                    var checkinTitle = document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.CheckinButtonTitle());
                    if (MystaysBookingWidget.Helper.IsMobile()) {
                        checkinTitle.innerHTML = startDate;
                    } else {
                        checkinTitle.innerHTML = startDate + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DateText);;
                    }


                    var checkinDesc = document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.CheckinButtonDesc());
                    checkinDesc.innerHTML = startMonth + " " + startYear + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.YearText);

                    if (!IgnoreUpdates ) {
                        MystaysBookingWidget.Helper.SetCookie(MystaysBookingWidget.Common.Constants.CheckinDateCookie, MystaysBookingWidget.Helper.FormatDateToString(new Date(startval.split('|')[4])));
                    }



                }

                if (endval !== "" && endval) {
                    var endDate = endval.split('|')[0];


                    //To display short name for english
                    if (MystaysBookingWidget.Common.SelectedLanguage != 'en') {
                        var endMonth = (new Date(endval.split('|')[4]).getMonth() + 1) + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.MonthText);
                    } else {
                        var endMonth = MystaysBookingWidget.BookingCalendar.Constants.EnglishMonthNamesShort[new Date(endval.split('|')[4]).getMonth()];
                    }


                    var endYear = endval.split('|')[2];

                    var checkoutTitle = document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.CheckoutButtonTitle());

                    if (MystaysBookingWidget.Helper.IsMobile()) {
                        checkoutTitle.innerHTML = endDate;
                    } else {
                        checkoutTitle.innerHTML = endDate + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DateText);
                    }


                    var checkoutDesc = document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.CheckoutButtonDesc());
                    checkoutDesc.innerHTML = endMonth + " " + endYear + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.YearText);

                    if (!IgnoreUpdates ) {
                        MystaysBookingWidget.Helper.SetCookie(MystaysBookingWidget.Common.Constants.CheckoutDateCookie, MystaysBookingWidget.Helper.FormatDateToString(new Date(endval.split('|')[4])));
                    }

                }
                //Updating other booking widgets
                if (!IgnoreUpdates) {
                    MystaysBookingWidget.Common.UpdateAllBookingWidgetsOnPage(new Date(startval.split('|')[4]), new Date(endval.split('|')[4]), MystaysBookingWidget.Common.CurrentEventTarget);
                }

                
                
            },
            //Method to render the text on the footer
            SetFooterText: function SetFooterText(startval, endval, RenderedElement, IsEndDateADate) {
                if (!MystaysBookingWidget.Helper.IsMobile()) {

                    var calendarContainer = '';

                    if (RenderedElement) {
                        var documentElement = RenderedElement;
                    } else {
                        //Only append MystaysBookingWidget.Common.BookingWidgetContainer() if the documentElelment is the document object and not mobiscroll object
                        calendarContainer = MystaysBookingWidget.Common.BookingWidgetContainer();
                        var documentElement = document;
                    }

                    //Removing the footer if it is already present
                    var customcalendarfooter = documentElement.querySelector(calendarContainer + MystaysBookingWidget.BookingCalendar.Constants.CalendarFooter());
                    if (customcalendarfooter) {
                        customcalendarfooter.parentNode.removeChild(customcalendarfooter);
                    }


                    var calendarbody = documentElement.querySelector(calendarContainer + MystaysBookingWidget.BookingCalendar.Constants.CalendarBody());

                    if (!IsEndDateADate) {
                        var dateDifference = MystaysBookingWidget.Helper.GetDays(startval.split('|')[4], endval.split('|')[4]);
                    } else {
                        var dateDifference = MystaysBookingWidget.Helper.GetDays(startval.split('|')[4], endval);
                    }

                    if (MystaysBookingWidget.Common.SelectedLanguage != 'en') {
                        var htmlString = '<p class="mystays-calendar-footer" >{startyear} {startmonth} {startdate} ({startday}) - {endyear} {endmonth} {enddate} ({endday}) - {NightsOfStay}</p>';
                    } else {
                        var htmlString = '<p class="mystays-calendar-footer" >{startday}, {startdate} {startmonth} {startyear} - {endday}, {enddate} {endmonth} {endyear} - {NightsOfStay}</p>';
                    }



                    htmlString = htmlString.replace('{startday}', MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DayPrependText) + startval.split('|')[5]);
                    htmlString = htmlString.replace('{startdate}', startval.split('|')[0] + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DateText));
                    htmlString = htmlString.replace('{startmonth}', (new Date(startval.split('|')[4]).getMonth() + 1) + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.MonthText));
                    htmlString = htmlString.replace('{startyear}', startval.split('|')[2] + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.YearText));

                    //Not a date (When range end date is passed)
                    if (!IsEndDateADate) {


                        htmlString = htmlString.replace('{endday}', MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DayPrependText) + endval.split('|')[5]);
                        htmlString = htmlString.replace('{enddate}', endval.split('|')[0] + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DateText));
                        htmlString = htmlString.replace('{endmonth}', (new Date(endval.split('|')[4]).getMonth() + 1) + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.MonthText));
                        htmlString = htmlString.replace('{endyear}', endval.split('|')[2] + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.YearText));
                    }
                    //When a date is passed for endval(When hovering over dates in desktop)
                    else {

                        var endDate = new Date(endval);


                        if (MystaysBookingWidget.Common.SelectedLanguage === 'ja') {
                            htmlString = htmlString.replace('{endday}', MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DayPrependText) + mobiscroll.i18n.ja.dayNamesShort[endDate.getDay()]);
                            htmlString = htmlString.replace('{enddate}', ('0' + endDate.getDate()).slice(-2) + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DateText));
                            htmlString = htmlString.replace('{endmonth}', (endDate.getMonth() + 1) + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.MonthText));
                            htmlString = htmlString.replace('{endyear}', endDate.getFullYear() + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.YearText));
                        }
                        else if (MystaysBookingWidget.Common.SelectedLanguage === 'en') {
                            htmlString = htmlString.replace('{endday}', MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DayPrependText) + MystaysBookingWidget.BookingCalendar.Constants.EnglishDayNamesShort[endDate.getDay()]);
                            htmlString = htmlString.replace('{enddate}', ('0' + endDate.getDate()).slice(-2) + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DateText));
                            htmlString = htmlString.replace('{endmonth}', (endDate.getMonth() + 1) + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.MonthText));
                            htmlString = htmlString.replace('{endyear}', endDate.getFullYear());
                        } else if (MystaysBookingWidget.Common.SelectedLanguage === 'zh') {
                            htmlString = htmlString.replace('{endday}', MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DayPrependText) + mobiscroll.i18n.zh.dayNamesShort[endDate.getDay()]);
                            htmlString = htmlString.replace('{enddate}', ('0' + endDate.getDate()).slice(-2) + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DateText));
                            htmlString = htmlString.replace('{endmonth}', (endDate.getMonth() + 1) + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.MonthText));
                            htmlString = htmlString.replace('{endyear}', endDate.getFullYear() + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.YearText));
                        } else if (MystaysBookingWidget.Common.SelectedLanguage === 'tw') {
                            htmlString = htmlString.replace('{endday}', MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DayPrependText) + mobiscroll.i18n.zh.dayNamesShort[endDate.getDay()]);
                            htmlString = htmlString.replace('{enddate}', ('0' + endDate.getDate()).slice(-2) + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DateText));
                            htmlString = htmlString.replace('{endmonth}', (endDate.getMonth() + 1) + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.MonthText));
                            htmlString = htmlString.replace('{endyear}', endDate.getFullYear() + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.YearText));
                        }
                        else if (MystaysBookingWidget.Common.SelectedLanguage === 'ko') {
                            htmlString = htmlString.replace('{endday}', MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DayPrependText) + mobiscroll.i18n.ko.dayNamesShort[endDate.getDay()]);
                            htmlString = htmlString.replace('{enddate}', ('0' + endDate.getDate()).slice(-2) + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DateText));
                            htmlString = htmlString.replace('{endmonth}', (endDate.getMonth() + 1) + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.MonthText));
                            htmlString = htmlString.replace('{endyear}', endDate.getFullYear() + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.YearText));
                        }
                        else {
                            htmlString = htmlString.replace('{endday}', MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DayPrependText) + endval.split('|')[5]);
                            htmlString = htmlString.replace('{enddate}', endval.split('|')[0]);
                            htmlString = htmlString.replace('{endmonth}', endval.split('|')[1]);
                            htmlString = htmlString.replace('{endyear}', endval.split('|')[2]);
                        }

                    }
                    if (dateDifference > 1) {
                        htmlString = htmlString.replace('{NightsOfStay}', MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.NightsOfStayDesktop).replace('{days}', dateDifference));
                    } else {
                        htmlString = htmlString.replace('{NightsOfStay}', MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.NightsOfStayOneNightDesktop));
                    }


                    calendarbody.insertAdjacentHTML('afterend', htmlString);
                }
            },

            //Method to remove all the intermediate classes
            RemoveIntermediateHoverLogic: function RemoveIntermediateHoverLogic() {

                var dateListWithInterMediate = document.querySelectorAll(MystaysBookingWidget.BookingCalendar.Constants.HoverIntermediate());

                //Remove class from existing elements
                for (var f = 0; f < dateListWithInterMediate.length; f++) {
                    dateListWithInterMediate[f].classList.remove('mystays-hover-intermediate');
                }

            },

            //Method to add a custom class on all dates in between a start and end date
            CheckHover: function CheckHover(element, dateList, rangeObject) {
                MystaysBookingWidget.BookingCalendar.CustomHTML.RemoveIntermediateHoverLogic();


                //Adding class from existing elements(rangeObject.endVal === "")
                for (var i = 0; i < dateList.length; i++) {
                    if ((MystaysBookingWidget.BookingCalendar.Constants.CheckNextDaySetManually || MystaysBookingWidget.BookingCalendar.Constants.CurrentStatus === 'end') && new Date(dateList[i].getAttribute('data-full').ChangeDateFormat()) >= new Date(rangeObject.startVal.split('|')[4]) && new Date(dateList[i].getAttribute('data-full').ChangeDateFormat()) <= new Date(element.getAttribute('data-full').ChangeDateFormat())) {
                        dateList[i].classList.add('mystays-hover-intermediate');

                    }
                }

                //Changing footer only when element date is greater than the start date
                if ((MystaysBookingWidget.BookingCalendar.Constants.CheckNextDaySetManually || MystaysBookingWidget.BookingCalendar.Constants.CurrentStatus === 'end') && new Date(rangeObject.startVal.split('|')[4]) < new Date(element.getAttribute('data-full').ChangeDateFormat())) {
                    MystaysBookingWidget.BookingCalendar.CustomHTML.SetFooterText(rangeObject.startVal, element.getAttribute('data-full').ChangeDateFormat(), null, true);
                }
                //Else setting it to start and end date
                else {
                    MystaysBookingWidget.BookingCalendar.CustomHTML.SetFooterText(rangeObject.startVal, rangeObject.endVal, null, false);
                }
            },
            //Set Z index for calendar and Guest widget
            SetContainerZIndex: function SetContainerZIndex(HigherZIndex) {
                if (HigherZIndex) {
                    MystaysBookingWidget.Common.BookingWidgetContainerElement().style.zIndex = "100002";
                } else {
                    MystaysBookingWidget.Common.BookingWidgetContainerElement().style.zIndex = "9";
                }
            },
            //Method to create custom selectors for start and end date(Only mobile)
            SetCustomMobileDateSelector: function SetCustomMobileDateSelector(calendarElement, startval, endval) {
                var calendarContainer = '';
                if (calendarElement) {
                    var updateContainer = calendarElement;
                } else {
                    calendarContainer = MystaysBookingWidget.Common.BookingWidgetContainer();
                    var updateContainer = document;
                }

                //Write logic only when selector is present
                if (updateContainer.querySelector(calendarContainer + MystaysBookingWidget.BookingCalendar.Constants.DefaultCalendarSelector())) {
                    //Removing existing elemtn
                    if (updateContainer.querySelectorAll(calendarContainer + MystaysBookingWidget.BookingCalendar.Constants.DefaultCalendarSelector()).length > 0) {
                        var customSelector = updateContainer.getElementsByClassName(MystaysBookingWidget.BookingCalendar.Constants.CustomCalendarSelector());

                        while (customSelector[0]) {
                            customSelector[0].parentNode.removeChild(customSelector[0]);
                        }
                    }


                    //Start date
                    var startdate = startval.split('|')[0];
                    var startday = MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DayPrependText) + startval.split('|')[5];


                    //To display short name for english
                    if (MystaysBookingWidget.Common.SelectedLanguage != 'en') {
                        var startmonth = (new Date(startval.split('|')[4]).getMonth() + 1) + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.MonthText);
                    } else {
                        var startmonth = MystaysBookingWidget.BookingCalendar.Constants.EnglishMonthNamesShort[new Date(startval.split('|')[4]).getMonth()];
                    }



                    var checkinDateElement = document.createElement('div');
                    checkinDateElement.className = MystaysBookingWidget.BookingCalendar.Constants.CustomCalendarSelector();
                    checkinDateElement.innerHTML = '<div class="mystays-range-btn-heading">' + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.CheckinLabel) + '</div><div class="mystays-range-btn-date"><div class="mystays-bookingwidget-selector-date"><span>{date}</span></div><p><span>{day}</span><span>{month}</span></p></div>'.replace('{date}', startdate).replace('{day}', startday).replace('{month}', startmonth);
                    updateContainer.querySelector(calendarContainer + '.mbsc-range-btn-start .mbsc-range-btn').appendChild(checkinDateElement);


                    //End date
                    if (endval === '') {
                        var enddate = '';
                        var endday = '';
                        var endmonth = '';
                    } else {
                        var enddate = endval.split('|')[0];
                        var endday = MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DayPrependText) + endval.split('|')[5];

                        //To display short name for english
                        if (MystaysBookingWidget.Common.SelectedLanguage != 'en') {
                            var endmonth = (new Date(endval.split('|')[4]).getMonth() + 1) + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.MonthText);
                        } else {
                            var endmonth = MystaysBookingWidget.BookingCalendar.Constants.EnglishMonthNamesShort[new Date(endval.split('|')[4]).getMonth()];
                        }

                    }

                    var checkoutDateElement = document.createElement('div');
                    checkoutDateElement.className = 'mystays-range-selector-header';
                    checkoutDateElement.innerHTML = '<div class="mystays-range-btn-heading">' + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.CheckoutLabel) + '</div><div class="mystays-range-btn-date"><div class="mystays-bookingwidget-selector-date"><span>{date}</span></div><p><span>{day}</span><span>{month}</span></p></div>'.replace('{date}', enddate).replace('{day}', endday).replace('{month}', endmonth);;
                    updateContainer.querySelector(calendarContainer + ' .mbsc-range-btn-end .mbsc-range-btn').appendChild(checkoutDateElement);
                }
            },

            //TODO add seperate language file for taiwanese
            UpdateTaiwaneseDayText: function (calendarElement) {
                if (MystaysBookingWidget.Common.SelectedLanguage == 'tw' && MystaysBookingWidget.Helper.IsMobile()) {
                    var daysArray = calendarElement.querySelectorAll('.mbsc-cal-days div');
                    for (var i = 0; i < daysArray.length; i++) {
                        daysArray[i].innerHTML = daysArray[i].innerHTML.replace('周', '週');
                    }
                }
            },

            //Added a custom header section to the calendar (Mobile)
            CustomizeCalendarHTML: function CustomizeCalendarHTML(calendarElement) {

                var calendarContainer = '';
                if (calendarElement) {
                    var updateContainer = calendarElement;
                } else {
                    calendarContainer = MystaysBookingWidget.Common.BookingWidgetContainer();
                    var updateContainer = document;
                }

                var calendarheadersection = updateContainer.querySelector('.mbsc-fr-focus');

                //Write logic only when calendar selector is present
                if (calendarheadersection && MystaysBookingWidget.Helper.IsMobile()) {



                    var calendarHeader = document.createElement('div');

                    var clearButton = document.createElement('span');
                    clearButton.className = 'mystays-bookingwidget-clr-btn';
                    clearButton.classList.add('mbsc-ic-arrow-left5');
                    clearButton.classList.add('mbsc-ic');
                    calendarHeader.appendChild(clearButton);


                    var calendarHeaderElement = document.createElement('span');

                    calendarHeader.classList = 'mystays-bookingwidget-calendarheader';

                    calendarHeaderElement.innerHTML = MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.CalendarHeader);


                    calendarHeader.appendChild(calendarHeaderElement);

                    calendarheadersection.insertAdjacentHTML('beforebegin', calendarHeader.outerHTML);

                    var calendarbackbutton = updateContainer.querySelector(calendarContainer + ' .mystays-bookingwidget-clr-btn');

                    calendarbackbutton.addEventListener('click', function (e) {
                        //MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                        MystaysBookingWidget.BookingCalendar.CustomHTMLEvents.AddHideEvent();
                    });
                }
            },
            //Method to set custom header for each month(On mobile when the user scrolls)
            SetCustomMonthHeader: function SetCustomMonthHeader(calendarElement) {

                if (MystaysBookingWidget.Helper.IsMobile()) {
                    var calendarContainer = '';
                    if (calendarElement) {
                        var updateContainer = calendarElement;
                    } else {
                        calendarContainer = MystaysBookingWidget.Common.BookingWidgetContainer();
                        var updateContainer = document;
                    }

                    //Removing the header before adding again
                    if (updateContainer.querySelectorAll(calendarContainer + ' .mystays-bookingwidget-header-month').length > 0) {
                        var customSelector = updateContainer.getElementsByClassName('mystays-bookingwidget-header-month');

                        while (customSelector[0]) {
                            customSelector[0].parentNode.removeChild(customSelector[0]);
                        }
                    }

                    //Looping through each month and adding the custom header
                    for (var i = 0; i < updateContainer.querySelectorAll(calendarContainer + ' .mbsc-cal-day-picker .mbsc-cal-table').length; i++) {
                        //Get the date for the section
                        var sectionContainer = updateContainer.querySelectorAll(calendarContainer + ' .mbsc-cal-day-picker .mbsc-cal-table')[i];
                        var sectionStartDate = sectionContainer.querySelector('[data-full]').getAttribute('data-full').ChangeDateFormat();

                        var sectionStartMonth = new Date(sectionStartDate).getMonth();
                        var sectionStartYear = new Date(sectionStartDate).getFullYear();
                        var headerText = '';

                        if (MystaysBookingWidget.Common.SelectedLanguage === 'en') {
                            headerText = MystaysBookingWidget.BookingCalendar.Constants.EnglishMonthNames[sectionStartMonth] + ' ' + sectionStartYear;
                        } else {
                            headerText = sectionStartYear + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.YearText) + ' ' + (sectionStartMonth + 1) + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.MonthText);
                        }

                        var sectionheader = document.createElement('div');
                        sectionheader.className = 'mystays-bookingwidget-header-month';
                        sectionheader.innerHTML = headerText;
                        sectionContainer.insertAdjacentHTML('beforebegin', sectionheader.outerHTML);


                    }

                }
            },


        },
        CustomHTMLEvents: {

            CalendarCustomFunctions: function CalendarCustomFunctions(inst) {
                document.querySelector(MystaysBookingWidget.Common.BookingWidgetContainer() + MystaysBookingWidget.BookingCalendar.Constants.CalendarBody()).addEventListener('mouseout', function (e) {

                    MystaysBookingWidget.BookingCalendar.CustomHTML.RemoveIntermediateHoverLogic();
                    MystaysBookingWidget.BookingCalendar.CustomHTML.SetFooterText(inst.startVal, inst.endVal, null, false);
                });
            },
            //Hiding the calendar on back button press
            AddHideEvent: function () {
                MystaysBookingWidget.Common.CurrentRangeObject().hide();
                document.querySelector(MystaysBookingWidget.Common.BookingWidgetContainer()).classList.remove('mystays-bookingwidget-active');
            },
            //Method to add a hover event to each date which will add an intermediate class('mystays-hover-intermediate') in the 'MystaysBookingWidget.BookingCalendar.CustomHTML.CheckHover' method
            AddIntermediateHoverLogic: function (inst) {


                var dateList = document.querySelectorAll(MystaysBookingWidget.Common.BookingWidgetContainer() + ' .mbsc-cal-slide .mbsc-cal-day:not(.mystays-selected-date):not(.mbsc-disabled):not([aria-hidden="true"])');
                for (var i = 0; i < dateList.length; i++) {
                    dateList[i].classList.add('mystays-selected-date');
                    if (!MystaysBookingWidget.Helper.IsMobile()) {
                        dateList[i].addEventListener('mouseover', function (e, args) {

                            MystaysBookingWidget.BookingCalendar.CustomHTML.CheckHover(this, document.querySelectorAll(MystaysBookingWidget.BookingCalendar.Constants.MystaysSelectedDate()), inst);
                        });
                    }
                }

            }
        },

       
        //method to manually set start and end date for rangeobject
        SetManualStartAndEnddate: function (inst, startdate, enddate) {
            inst.setVal([startdate, enddate], true, true, false);
        },
        //method to override mobiscrolls default functionality to set the checkout date to the next day when user selects a checkin day
        ValidateStartEndDate: function (event, inst) {

            var startvalue = inst.startVal;
            var endvalue = inst.endVal;
            MystaysBookingWidget.BookingCalendar.Constants.CheckNextDaySetManually = false;

            //If start date is equal to end date then set end date as next day
            if (inst.endVal === "" || (new Date(endvalue.split('|')[4]) <= new Date(startvalue.split('|')[4]))) {
                MystaysBookingWidget.BookingCalendar.Constants.CheckNextDaySetManually = true;
                var startDate = new Date(inst.startVal.split('|')[4]);
                
                    var nextDay = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 1, 0, 0);
                    inst.setVal([startDate, nextDay], true, true, false);
                
            }

        },
        ///Click Event Handler for the Check in section(The section on the booking widget)
        CheckInButtonHandler: function CheckInButtonHandler(element, args) {
            MystaysBookingWidget.BookingCalendar.Constants.CurrentStatus = 'start';
            MystaysBookingWidget.BookingCalendar.Constants.CheckNextDaySetManually = false;
            MystaysBookingWidget.BookingCalendar.CustomHTML.RepositionSelectorIndicator(true);


            //Enabling all dates when user selects checkin date
            MystaysBookingWidget.BookingCalendar.CustomHTML.EnableAllDates();
            //Removing all intermediate hover classes
            MystaysBookingWidget.BookingCalendar.CustomHTML.RemoveIntermediateHoverLogic();


        },
        ///Click Event Handler for the Check out section(The section on the booking widget)
        CheckOutButtonHandler: function CheckOutButtonHandler(element, args) {
            MystaysBookingWidget.BookingCalendar.Constants.CurrentStatus = 'end';
            MystaysBookingWidget.BookingCalendar.CustomHTML.RepositionSelectorIndicator(false);

            //Disabling all dates previous to check in date when user selects checkout date
            MystaysBookingWidget.BookingCalendar.CustomHTML.DisablePreviousDates(MystaysBookingWidget.Common.CurrentRangeObject().startVal.split('|')[4]);

        },
        CheckInOutButtonHandlers: function () {
            var checkinbtn = document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.CheckinButton());
            var checkoutbtn = document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.CheckoutButton());

            checkinbtn.addEventListener("click", function (e) {
                MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                MystaysBookingWidget.BookingCalendar.CheckInButtonHandler();
            });
            checkoutbtn.addEventListener("click", function (e) {
                MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                MystaysBookingWidget.BookingCalendar.CheckOutButtonHandler();
            });

        },
        //Method to load the mobiscrol range object
        LoadRange: function LoadRange(rangeContainer) {
            var selectedLanguage = MystaysBookingWidget.Common.SelectedLanguage;
            if (selectedLanguage === 'tw') {
                selectedLanguage = 'zh';
            }

            var rangeObject = mobiscroll.range(rangeContainer + ' .range-container', {
                theme: 'mobiscroll',
                lang: selectedLanguage,
                display: 'center',
                cssClass: 'mystays-bookingwidget',
                fromText: '',
                toText: '',
                weekDays: MystaysBookingWidget.Common.GetweekDaysFormatMobile(),
                context: rangeContainer + ' .calender-render-container',
                dateFormat: 'dd|M|yy|mm/dd/yy|yy/m/d|D',
                dateWheels: MystaysBookingWidget.Common.GetDateWheelFormat(),
                controls: ['calendar'],
                startInput: rangeContainer + " .bookingwidget-checkin",
                endInput: rangeContainer + ' .bookingwidget-checkout',
                buttons: [
                    'set'
                ],
                months: 1,
                minRange: 86400000,
                outerMonthChange: false,
                calendarScroll: 'vertical',
                min: new Date(),
                layout: 'liquid',
                showSelector: true,
                animate: 'slidehorizontal',
                closeOnOverlayTap: true,
                responsive: {
                    custom: {
                        breakpoint: MystaysBookingWidget.Common.GetRangeResponsive().BreakPoint,
                        months: MystaysBookingWidget.Common.GetRangeResponsive().Month,
                        showSelector: false,
                        animate: 'pop',
                        display: 'bubble',
                        layout: 'fixed',
                        calendarScroll: 'horizontal',
                        buttons: [],
                        weekDays: 'short',
                        calendarWidth: MystaysBookingWidget.Common.GetRangeResponsive().CalendarWidth
                    }
                },
                yearChange: false,

                //Events
                onInit: function (event, inst) {
                    

                    var cookieCheckinDate = MystaysBookingWidget.Helper.GetCookie(MystaysBookingWidget.Common.Constants.CheckinDateCookie);
                    //Cookie not present or is meeting room
                    if (cookieCheckinDate) {
                        
                        var incookieDate = new Date(cookieCheckinDate);
                        
                        var checkinDate = incookieDate;
                        
                      
                    }
                    //Set the start date
                    else {
                        var today = new Date();
						var nextSunday = today.getDate() + (7 - today.getDay()) + 7;
						var nextSun = today;
						nextSun.setDate(nextSunday);
						var checkinDate = nextSun;

                    }

                    var cookieCheckoutDate = MystaysBookingWidget.Helper.GetCookie(MystaysBookingWidget.Common.Constants.CheckoutDateCookie);
                    //Cookie not present or is meeting room
                    if (cookieCheckoutDate ) {
                        var outcookieDate = new Date(cookieCheckoutDate);
                        if (outcookieDate > checkinDate) {
                            var checkoutDate = outcookieDate;
                        } else {
                            var checkoutDate = new Date(checkinDate.getFullYear(), checkinDate.getMonth(), checkinDate.getDate() + 1, 0, 0);
                        }
                    } else {
                        
                            var checkoutDate = new Date(checkinDate.getFullYear(), checkinDate.getMonth(), checkinDate.getDate() + 1, 0, 0);
                        

                    }

                    range = [checkinDate, checkoutDate];
                    inst.setVal(range, true, true, false);



                    MystaysBookingWidget.BookingCalendar.CustomHTML.SetDateValues(inst);
                    //MystaysBookingWidget.BookingCalendar.CheckInOutButtonHandlers();

                    var checkInBtn = document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.CheckinButton()),
                        checkOutBtn = document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.CheckoutButton());

                    inst.tap(checkInBtn, function (e) {
                        MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                        MystaysBookingWidget.BookingCalendar.CheckInButtonHandler();

                        var promocontainer = document.querySelector(MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-box.promocode');
                        var IsPromoCodeContainer = ((promocontainer === e.target) || MystaysBookingWidget.Helper.IsDescendant(promocontainer, e.target));

                        

                        


                    });

                    inst.tap(checkOutBtn, function (e) {
                        MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                        MystaysBookingWidget.BookingCalendar.CheckOutButtonHandler();

                        var promocontainer = document.querySelector(MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-box.promocode');
                        var IsPromoCodeContainer = ((promocontainer === e.target) || MystaysBookingWidget.Helper.IsDescendant(promocontainer, e.target));

                        


                    });
                },
                onDayChange: function (event, inst) {
                    if (event.active === 'end') {

                        //Logic to check only if that end date that is lesser than start date cannot be selected
                        if (event.date < new Date(inst.startVal.split('|')[4])) {
                            inst.setVal([event.date, inst.endVal], true);
                            return true;
                        }
                        //Automatically hide widget on selection of end date for non mobile devices
                        if (!MystaysBookingWidget.Helper.IsMobile()) {
                            inst.hide();
                            MystaysBookingWidget.GuestsWidget.ShowGuestSection(true);

                        } else {
                            MystaysBookingWidget.BookingCalendar.CustomHTML.EnableAllDates();
                            MystaysBookingWidget.BookingCalendar.CustomHTML.UpdateSetButton(inst.startVal.split('|')[4], event.date);
                        }
                    }

                    if (event.active === 'start') {

                        MystaysBookingWidget.BookingCalendar.CustomHTML.DisablePreviousDates(event.target.getAttribute('data-full').ChangeDateFormat());
                        MystaysBookingWidget.BookingCalendar.CustomHTML.RepositionSelectorIndicator(false);
                    }
                    MystaysBookingWidget.BookingCalendar.CustomHTML.SetBottomForSetButton(0);

                },
                onMarkupReady: function (event, inst) {
                    MystaysBookingWidget.BookingCalendar.CustomHTML.UpdateTaiwaneseDayText(event.target);
                    MystaysBookingWidget.BookingCalendar.CustomHTML.CustomizeCalendarHTML(event.target);
                    MystaysBookingWidget.BookingCalendar.CustomHTML.SetCustomMobileDateSelector(event.target, inst.startVal, inst.endVal);
                    MystaysBookingWidget.BookingCalendar.CustomHTML.AdjustSetButtonContainerPosition(event.target);
                    MystaysBookingWidget.BookingCalendar.CustomHTML.SetFooterText(inst.startVal, inst.endVal, event.target);
                    MystaysBookingWidget.BookingCalendar.CustomHTML.SetCustomMonthHeader(event.target);
                    MystaysBookingWidget.BookingCalendar.CustomHTML.SetBottomForSetButton(1, event.target);
                },
                onSet: function (event, inst) {
                    MystaysBookingWidget.BookingCalendar.ValidateStartEndDate(event, inst);
                    MystaysBookingWidget.BookingCalendar.CustomHTML.SetDateValues(inst);

                },
                onBeforeShow: function () {
                    MystaysBookingWidget.GuestsWidget.ShowGuestSection(false);
                    MystaysBookingWidget.HotelSearch.ShowHotelList(false);

                },
                onShow: function (event, inst) {
                    MystaysBookingWidget.Common.CurrentEventTarget = inst.element;

                    if (MystaysBookingWidget.Helper.IsMobile()) {
                        MystaysBookingWidget.BookingCalendar.CustomHTML.SetContainerZIndex(true);
                        document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.RangeContainerClass()).scrollTop = 0;

                    }

                    MystaysBookingWidget.BookingCalendar.Constants.CheckNextDaySetManually = false;
                    MystaysBookingWidget.BookingCalendar.CustomHTMLEvents.AddIntermediateHoverLogic(inst);
                    MystaysBookingWidget.BookingCalendar.CustomHTMLEvents.CalendarCustomFunctions(inst);
                    MystaysBookingWidget.BookingCalendar.CustomHTML.UpdateSetButton(inst.startVal.split('|')[4], inst.endVal.split('|')[4]);

                    //Calling this method after a timeout as to wait for the DOM to be ready
                    window.setTimeout(
                        function () {
                            MystaysBookingWidget.BookingCalendar.CustomHTML.SetBottomForSetButton(0);
                        }, 1000);


                },
                onClose: function (event, inst) {
                    if (MystaysBookingWidget.Helper.IsMobile()) {
                        MystaysBookingWidget.BookingCalendar.CustomHTML.SetContainerZIndex(false);
                    }
                    MystaysBookingWidget.BookingCalendar.ValidateStartEndDate(event, inst);


                },
                onPageChange: function (event, inst) {
                    MystaysBookingWidget.BookingCalendar.CustomHTMLEvents.AddIntermediateHoverLogic(inst);
                },
                onPageLoaded: function (event, inst) {
                    MystaysBookingWidget.BookingCalendar.CustomHTML.SetCustomMonthHeader();
                },
                onSetDate: function (event, inst) {


                    MystaysBookingWidget.BookingCalendar.Constants.CurrentStatus = event.active;

                    if (event.active === 'start') {

                        
                        MystaysBookingWidget.BookingCalendar.CustomHTML.RemoveIntermediateHoverLogic();
                    }

                    if (inst!=null) {
                        var startval = inst.startVal;
                        var endval = inst.endVal;

                        MystaysBookingWidget.BookingCalendar.CustomHTML.SetCustomMobileDateSelector(null, startval, endval);
                    }
                    
                }
            });



            return rangeObject;
        },
        //Initial method for booking calendar
        Loaded: function Loaded(BookingWidgetContainer) {


            return MystaysBookingWidget.BookingCalendar.LoadRange(BookingWidgetContainer);
        }

    },


    //Functionalities related to the guests section
    GuestsWidget: {
        Constants: {
            GuestSectionClass: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-guestselect-wrap';
            },
            GuestSectionClassAll: function () {
                return ' .booking-guestselect-wrap';
            },
            GuestButtonContainer: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-box.guests .booking-box-wrap';
            },
            GuestButtonClose: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-box.guests .booking-guestselect-close';
            },
            ButtonAdd: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .guest-row .plus';
            },
            ButtonRemove: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .guest-row .minus';
            },
            RoomElement: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-guestselect p.room';
            },
            AdultElement: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-guestselect p.adult';
            },
            ChildElement: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-guestselect p.child';
            },
            ChildElementHigher: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-guestselect p.childhighergrade';
            },
            ChildElementLower: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-guestselect p.childlowergrade';
            },
            ChildElementInfant: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-guestselect p.childinfant';
            },
            RoomElementAll: function () {
                //Adding this check to not update all widgets on hotel meeting tab
                
                    return ' .booking-guestselect p.room';
                
               
            },
            AdultElementAll: function () {


                //Adding this check to not update all widgets on hotel meeting tab
                
                    return ' .booking-guestselect p.adult';
                
            },
            ChildElementAll: function () {
                //Adding this check to not update all widgets on hotel meeting tab
                
                    return ' .booking-guestselect p.child';
                
            },
            ChildHigherElementAll: function () {
                //Adding this check to not update all widgets on hotel meeting tab
                
                    return ' .booking-guestselect p.childhighergrade';
                
            },

            ChildLowerElementAll: function () {
                
                    return ' .booking-guestselect p.childlowergrade';
                
            },

            ChildInfantElementAll: function () {
                //Adding this check to not update all widgets on hotel meeting tab
                
                    return ' .booking-guestselect p.childinfant';
                
            },
            MainGuestsButtonTitle: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-box.guests .input-top-wrap .title';
            },
            MainGuestsButtonTitleAll: function () {
                
                    return ' .booking-box.guests .input-top-wrap .title';
                

            },
            SingleGuestPlaceholder: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .guest-placeholder';
            },
            MultiGuestPlaceholder: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .guests-placeholder';
            },
            SingleGuestPlaceholderAll: function () {
                return ' .guest-placeholder';
            },
            MultiGuestPlaceholderAll: function () {
                return ' .guests-placeholder';
            },
			TravelClickChildrenSection: function () {
                return ' .guestsection-tc';
            },
			RWithChildrenSection: function () {
                return ' .guestsection-rwith';
            },
            MaximumRooms: function () {
                var maxRooms = MystaysBookingWidget.Helper.GetTranslation('MaximumRooms')

                if (!maxRooms) {
                    maxRooms = 9;
                }
                return maxRooms
            },
            MaximumAdults: function () {
                var maxAdults = MystaysBookingWidget.Helper.GetTranslation('MaximumAdults')

                if (!maxAdults) {
                    maxAdults = 15;
                }
                return maxAdults
            },
            MaximumChildren: function () {
                var maxChildren = MystaysBookingWidget.Helper.GetTranslation('MaximumChildren')

                if (!maxChildren) {
                    maxChildren = 9;
                }
                return maxChildren;
            },
            MaximumChildAge: function () {

                var maxAge = MystaysBookingWidget.GuestsWidget.GetMaximumHotelChildAge();

                if (!maxAge) {
                    maxAge = MystaysBookingWidget.Helper.GetTranslation('MaximumChildAge');
                }
                if (!maxAge) {
                    maxAge = 12;
                }
                return maxAge;
            },
            ChildAgeList: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .chidren-ages-dropndown';
            },
            ChildAgeListAll: function () {

                //Adding this check to not update all widgets on hotel meeting tab
                
                    return ' .chidren-ages-dropndown';
                
            },
            ChildAgeInfo: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .child-age-info';
            },
            ChildAgeInfoAll: function () {

                
                    return ' .child-age-info';
                
            },


            GuestWidgetBackButton: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-guestselect-heading span';
            },
            //ChildAgeSection='<li><select class="mystays-bookingengine-age"></select></li>'
            ChildAgeContainerClass: 'mystays-bookingengine-child-age',
            ChildAgeSelects: function () {
                
                    return ' .chidren-ages-dropndown:not(.mystays-bw-notrigger) .mystays-bookingengine-child-age select'
                


            }
        },

        CustomHTMLEvents: function CustomHTMLEvents() {
            MystaysBookingWidget.GuestsWidget.GuestButtonContainerClick();
            MystaysBookingWidget.GuestsWidget.GuestButtonCloseClick();
        },

        //This method is specifically for child age selects loaded by cookies
        //If the max child age for hotel is lesser than the preloaded values then update these selects to the max age of that hotel
        ResetExistingChildAgeSelects: function ResetExistingChildAgeSelects(hotelMaxChildAge) {
            var allChildAgeSelects = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildAgeSelects());

            for (var i = 0; i < allChildAgeSelects.length; i++) {

                //Removing all options from select if the options length is not equal to max child age length
                //Subtracting two as the first 2 options('Please select and <1) can be ignored
                if (allChildAgeSelects[i].options.length - 2 != parseInt(hotelMaxChildAge)) {
                    allChildAgeSelects[i].options.length = 0;

                    MystaysBookingWidget.GuestsWidget.AddingChildOptions(allChildAgeSelects[i]);
                }
                //for (var j = 0; j < allChildAgeSelects[i].options.length; j++) {
                //    var option = allChildAgeSelects[i].options[j];
                //    if (parseInt(option.value) >= parseInt(hotelMaxChildAge)) {
                //        option = null;
                //    }
                //}
            }

            
        },
        //Setting the child age from values
        SetChildAgeFromValues: function SetChildAgeFromValues(totalChildren, childAge, hotelMaxChildAge) {
            if (totalChildren != '' && totalChildren != '0' && childAge != '' && MystaysBookingWidget.Common.UseTravelClickBookingEngine()) {
                totalChildren = parseInt(totalChildren);
                var childAgeSelect = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildAgeSelects());
                var childAgeArray = childAge.split(',');
                var totalGuestsWidgets = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.GuestSectionClassAll()).length;

                //Looping through all the children
                for (var i = 0; i < parseInt(totalChildren); i++) {

                    //Set the index to -1(default value) if the childs age is greater than maximum child age for the hotel
                    if (childAgeArray[i] > parseInt(hotelMaxChildAge)) {
                        childAgeArray[i] = -1;
                    }

                    ////If there is one guest widget then set the age of the corresponding child index to the value from the cookie at the same position
                    //Exception case on hotel meeting tab
                    if (totalGuestsWidgets > 0) {

                        childAgeSelect[i].selectedIndex = parseInt(childAgeArray[i]) + 1;


                        //Setting the border color to red if the default value is selected
                        if (childAgeSelect[i].selectedIndex === 0) {
                            childAgeSelect[i].style.borderColor = "red";
                        } else {
                            childAgeSelect[i].style.borderColor = null;
                        }
                    }

                    //For more than one widget check if there is a select
                    if (childAgeSelect[(i + totalChildren)]) {
                        childAgeSelect[(i + totalChildren)].selectedIndex = parseInt(childAgeArray[i]) + 1;

                        //Setting the border color to red if the default value is selected
                        if (childAgeSelect[(i + totalChildren)].selectedIndex === 0) {
                            childAgeSelect[i].style.borderColor = "red";
                        } else {
                            childAgeSelect[i].style.borderColor = null;
                        }
                    }

                }
            }
        },
        //To load the guest details from cookies or to set the cookies(if they are not present)
        LoadGuestWidgetFromCookies: function LoadGuestWidgetFromCookies() {
            var totalRooms = MystaysBookingWidget.Helper.GetCookie('TotalRoom');
            var totalAdults = MystaysBookingWidget.Helper.GetCookie('TotalAdult');
            var totalChildren = MystaysBookingWidget.Helper.GetCookie('TotalChild');
            var totalChildrenHigher = MystaysBookingWidget.Helper.GetCookie('TotalChildHigher');
            var totalChildrenLower = MystaysBookingWidget.Helper.GetCookie('TotalChildLower');
            var totalChildrenInfant = MystaysBookingWidget.Helper.GetCookie('TotalChildInfant');
            var childAge = MystaysBookingWidget.Helper.GetCookie('TotalChildAge');
            var totalGuests = 0;
            var hidhotelMaxChildAge = document.getElementById('hidhotelmaxchildage');
            var hotelMaxChildAge = MystaysBookingWidget.Helper.GetTranslation('MaximumChildAge');




            //If cookie is not present get value from html
            if (totalRooms == '') {
                totalRooms = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.RoomElement()).children[0].innerHTML;
            }


            //If cookie is not present get value from html
            if (totalAdults == '') {
                totalAdults = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.AdultElement()).children[0].innerHTML;
            }


            //If cookie is not present get value from html
            if (totalChildren == '') {
                totalChildren = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.ChildElement()).children[0].innerHTML;
            }

            //If cookie is not present get value from html
            if (totalChildrenHigher == '') {
                totalChildrenHigher = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.ChildElementHigher()).children[0].innerHTML;
            }

            //If cookie is not present get value from html
            if (totalChildrenLower == '') {
                totalChildrenLower = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.ChildElementLower()).children[0].innerHTML;
            }

            //If cookie is not present get value from html
            if (totalChildrenInfant == '') {
                totalChildrenInfant = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.ChildElementInfant()).children[0].innerHTML;
            }

            if (MystaysBookingWidget.Common.UseTravelClickBookingEngine()) {
                totalGuests = parseInt(totalAdults) + parseInt(totalChildren);
                MystaysBookingWidget.GuestsWidget.ChildButtonAddorSet(null, parseInt(totalChildren), totalGuests);
            } else {
                totalGuests = parseInt(totalAdults) + parseInt(totalChildrenHigher) + parseInt(totalChildrenLower) + parseInt(totalChildrenInfant);
                MystaysBookingWidget.GuestsWidget.ChildHigherButtonAddorSet(null, parseInt(totalChildrenHigher), totalGuests);
                MystaysBookingWidget.GuestsWidget.ChildLowerButtonAddorSet(null, parseInt(totalChildrenLower), totalGuests);
                MystaysBookingWidget.GuestsWidget.ChildInfantButtonAddorSet(null, parseInt(totalChildrenInfant), totalGuests);
            }
            


            MystaysBookingWidget.GuestsWidget.RoomsButtonAddorSet(null, parseInt(totalRooms));
            MystaysBookingWidget.GuestsWidget.AdultButtonAddorSet(null, parseInt(totalAdults), totalGuests);
            



            if (hidhotelMaxChildAge && hidhotelMaxChildAge.value != "-1") {
                hotelMaxChildAge = hidhotelMaxChildAge.value;
            }
            

            //Setting child age values
            MystaysBookingWidget.GuestsWidget.SetChildAgeFromValues(totalChildren, childAge, hotelMaxChildAge);
        },
        //Method to show and hide the guest widget
        ShowGuestSection: function ShowGuestSection(ShowSection) {
            var guestSection = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.GuestSectionClass());

            if (ShowSection === true) {
                if (MystaysBookingWidget.Helper.IsMobile()) {
                    MystaysBookingWidget.BookingCalendar.CustomHTML.SetContainerZIndex(true);
                    guestSection.style.transform = "translateX(0)";
                }
                guestSection.ShowElement();

            } else {

                if (MystaysBookingWidget.Helper.IsMobile()) {
                    MystaysBookingWidget.BookingCalendar.CustomHTML.SetContainerZIndex(false);
                    guestSection.style.transform = "translateX(100%)";
                }

                guestSection.HideElement();
            }

        },

        //function to update the label of all guests based on singular or prural guests
        CheckGuestsLabel: function (number) {
            var singleGuestsSelector = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.SingleGuestPlaceholderAll());
            var multiGuestsSelector = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.MultiGuestPlaceholderAll());

            for (var i = 0; i < singleGuestsSelector.length; i++) {
                if (number <= 1) {
                    singleGuestsSelector[i].ShowElement();
                    multiGuestsSelector[i].HideElement();
                } else {
                    singleGuestsSelector[i].HideElement();
                    multiGuestsSelector[i].ShowElement();
                }
            }

        },

        //Function to check the adults based on the number of rooms(There should be as many adults as rooms)
        ValidateAdults: function ValidateAdults(numberOfRooms) {
            
                var adultNodeList = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.AdultElementAll());
                currentAdults = parseInt(adultNodeList[0].children[0].innerHTML);

                if (MystaysBookingWidget.Common.UseTravelClickBookingEngine()) {
                    var childrenNodeList = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildElementAll());

                    currentChildren = parseInt(childrenNodeList[0].children[0].innerHTML);
                } else {
                    var childrenHigherNodeList = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildHigherElementAll());
                    var childrenLowerNodeList = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildLowerElementAll());
                    var childrenInfantNodeList = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildInfantElementAll());

                    currentChildren = parseInt(childrenHigherNodeList[0].children[0].innerHTML) + parseInt(childrenLowerNodeList[0].children[0].innerHTML) + parseInt(childrenInfantNodeList[0].children[0].innerHTML);;
                }
                

                totalGuests = currentAdults + currentChildren;

                if (numberOfRooms > currentAdults) {
                    var newGuests = numberOfRooms;
                    MystaysBookingWidget.GuestsWidget.AdultButtonAddorSet(null, newGuests, totalGuests + 1, true)
                } else {
                    MystaysBookingWidget.GuestsWidget.AdultButtonAddorSet(null, currentAdults, totalGuests, false)
                }
            

        },

        //Add new room or set the room section on load
        RoomsButtonAddorSet: function RoomsButtonAddorSet(event, newNumberOfRooms) {


            
            var nodeList = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.RoomElementAll());
            


            //Fired on click event
            if (newNumberOfRooms == null) {
                newNumberOfRooms = parseInt(nodeList[0].children[0].innerHTML) + 1;
            }

            if (newNumberOfRooms - 1 < MystaysBookingWidget.GuestsWidget.Constants.MaximumRooms()) {
                for (var i = 0; i < nodeList.length; i++) {
                    nodeList[i].children[0].innerHTML = newNumberOfRooms;
                    nodeList[i].children[0].setAttribute("data-count", (newNumberOfRooms));

                    //Adding disabled class to not allow more button click
                    if (newNumberOfRooms == MystaysBookingWidget.GuestsWidget.Constants.MaximumRooms()) {
                        nodeList[i].parentElement.querySelector('.plus').classList.add('disabled');
                        nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                    } else {
                        nodeList[i].parentElement.querySelector('.plus').classList.remove('disabled');
                        nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                    }
                    //If the number of rooms is 1 disable minus button
                    if (newNumberOfRooms == 1)
                        nodeList[i].parentElement.querySelector('.minus').classList.add('disabled');
                    }
			
                }

                
                    MystaysBookingWidget.Helper.SetCookie('TotalRoom', newNumberOfRooms);
                



                

                //Validate on button click
                MystaysBookingWidget.GuestsWidget.ValidateAdults(newNumberOfRooms);

            
        },

        //Remove room
        RoomsButtonRemove: function RoomsButtonRemove(event) {

            
            var nodeList = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.RoomElementAll());
            
            var removebuttons = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ButtonRemove());
            var newNumberOfRooms = parseInt(nodeList[0].children[0].innerHTML) - 1;
            if (parseInt(nodeList[0].children[0].innerHTML) > 1 ) {

                for (var i = 0; i < nodeList.length; i++) {


                    nodeList[i].children[0].innerHTML = newNumberOfRooms;
                    nodeList[i].children[0].setAttribute("data-count", newNumberOfRooms);

                    //Adding disabled class to not allow more button click
                    if (parseInt(nodeList[i].children[0].innerHTML) == 1) {
                        nodeList[i].parentElement.querySelector('.minus').classList.add('disabled');
                        nodeList[i].parentElement.querySelector('.plus').classList.remove('disabled');
                    } else {
                        nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                        nodeList[i].parentElement.querySelector('.plus').classList.remove('disabled');
                    }

                    
                    MystaysBookingWidget.Helper.SetCookie('TotalRoom', newNumberOfRooms);
                    

                }

                

                //Validate adults based on rooms count
                MystaysBookingWidget.GuestsWidget.ValidateAdults(newNumberOfRooms);
            }
        },

        //Add new adult(newNumberAdults and newTotalGuests are passed when the function is triggered from LoadGuestWidgetFromCookies) or ValidateAdults
        AdultButtonAddorSet: function AdultButtonAddorSet(event, newNumberAdults, newTotalGuests, updateAdultsPerRoom) {
            var nodeList = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.AdultElementAll());
            var roomCount = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.RoomElement()).children[0].innerHTML;
            var disableAdults;


            //Fired on click event
            if (newNumberAdults == null) {
                newNumberAdults = parseInt(nodeList[0].children[0].innerHTML) + 1;
            }

            if (roomCount == newNumberAdults) {
                disableAdults = true;
            }

            if (newTotalGuests == null) {
                newTotalGuests = parseInt(document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.MainGuestsButtonTitleAll()).getAttribute("data-count")) + 1;
            }


            if (newNumberAdults - 1 < MystaysBookingWidget.GuestsWidget.Constants.MaximumAdults() || updateAdultsPerRoom) {
                for (var i = 0; i < nodeList.length; i++) {
                    nodeList[i].children[0].innerHTML = newNumberAdults;
                    nodeList[i].children[0].setAttribute("data-count", newNumberAdults);

                    //Adding disabled class to not allow more button click
                    if (newNumberAdults == MystaysBookingWidget.GuestsWidget.Constants.MaximumAdults()) {
                        nodeList[i].parentElement.querySelector('.plus').classList.add('disabled');
                        nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                    } else {
                        nodeList[i].parentElement.querySelector('.plus').classList.remove('disabled');
                        nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                    }



                    //If disableAdults is passed(from ValidateAdults method) set minus to disabled else set it to enabled
                    //OR If the number of adults is 1 disable minus button
                    if (disableAdults || newNumberAdults == 1) {
                        nodeList[i].parentElement.querySelector('.minus').classList.add('disabled');
                    } else {
                        nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                    }
                }

                var mainGuestTitleAll = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.MainGuestsButtonTitleAll());
                var newCount = 0;
                //Updating main guests section
                for (var i = 0; i < mainGuestTitleAll.length; i++) {

                    mainGuestTitleAll[i].innerHTML = newTotalGuests;
                    mainGuestTitleAll[i].setAttribute("data-count", newTotalGuests);
                }
                MystaysBookingWidget.GuestsWidget.CheckGuestsLabel(newTotalGuests);

                MystaysBookingWidget.Helper.SetCookie('TotalAdult', newNumberAdults);

                
                
                
            }
        },

        //Remove adult
        AdultButtonRemove: function AdultButtonRemove(event) {
            var nodeList = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.AdultElementAll());
            var currentRoomCount = parseInt(document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.RoomElement()).children[0].innerHTML);

            if (parseInt(nodeList[0].children[0].innerHTML) > currentRoomCount) {
                for (var i = 0; i < nodeList.length; i++) {
                    nodeList[i].children[0].innerHTML = parseInt(nodeList[i].children[0].innerHTML) - 1;
                    nodeList[i].children[0].setAttribute("data-count", (parseInt(nodeList[i].children[0].getAttribute("data-count")) - 1));

                    //Adding disabled class to not allow more button click
                    if (parseInt(nodeList[i].children[0].innerHTML) == 1 || parseInt(nodeList[i].children[0].innerHTML) == currentRoomCount) {
                        nodeList[i].parentElement.querySelector('.minus').classList.add('disabled');
                        nodeList[i].parentElement.querySelector('.plus').classList.remove('disabled');
                    } else {
                        nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                        nodeList[i].parentElement.querySelector('.plus').classList.remove('disabled');
                    }



                    MystaysBookingWidget.Helper.SetCookie('TotalAdult', nodeList[i].children[0].innerHTML);
                }
                var mainGuestTitleAll = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.MainGuestsButtonTitleAll());
                var newCount = 0;
                //Updating main guests section
                for (var i = 0; i < mainGuestTitleAll.length; i++) {
                    newCount = parseInt(mainGuestTitleAll[i].getAttribute("data-count")) - 1;
                    mainGuestTitleAll[i].innerHTML = newCount;
                    mainGuestTitleAll[i].setAttribute("data-count", newCount);
                }
                MystaysBookingWidget.GuestsWidget.CheckGuestsLabel(newCount);

                
                
                
            }
        },

        //Add child
        ChildButtonAddorSet: function ChildButtonAddorSet(event, newNumberChildren, newTotalGuests) {
            var nodeList = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildElementAll());

            //Fired on click event
            if (newNumberChildren == null) {
                newNumberChildren = parseInt(nodeList[0].children[0].innerHTML) + 1;
            }

            if (newTotalGuests == null) {
                newTotalGuests = parseInt(document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.MainGuestsButtonTitleAll()).getAttribute("data-count")) + 1;
            }

            if (newNumberChildren - 1 < MystaysBookingWidget.GuestsWidget.Constants.MaximumChildren()) {
                for (var i = 0; i < nodeList.length; i++) {
                    nodeList[i].children[0].innerHTML = newNumberChildren;
                    nodeList[i].children[0].setAttribute("data-count", newNumberChildren);

                    //Adding disabled class to not allow more button click
                    if (newNumberChildren == MystaysBookingWidget.GuestsWidget.Constants.MaximumChildren()) {
                        nodeList[i].parentElement.querySelector('.plus').classList.add('disabled');
                        nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                    } else {
                        nodeList[i].parentElement.querySelector('.plus').classList.remove('disabled');
                        nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                    }

                    //If the number of children is 0 disable minus button
                    if (newNumberChildren == 0) {
                        nodeList[i].parentElement.querySelector('.minus').classList.add('disabled');
                    }

                    //Add a single child age element when event is fired by click of add child button
                    if (event != null) {
                        MystaysBookingWidget.GuestsWidget.AddChildAge(i, true);
                    }
                    //Render number of child age sections as per number of children(When fired by LoadGuestWidgetFromCookies)
                    else {
                        for (var j = 0; j < newNumberChildren; j++) {
                            MystaysBookingWidget.GuestsWidget.AddChildAge(i, false);
                        }
                    }


                }

                var mainGuestTitleAll = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.MainGuestsButtonTitleAll());
                var newCount = 0;
                //Updating main guests section
                for (var i = 0; i < mainGuestTitleAll.length; i++) {

                    mainGuestTitleAll[i].innerHTML = newTotalGuests;
                    mainGuestTitleAll[i].setAttribute("data-count", newTotalGuests);

                }
                MystaysBookingWidget.GuestsWidget.CheckGuestsLabel(newTotalGuests);
                MystaysBookingWidget.Helper.SetCookie('TotalChild', newNumberChildren);
               
            }
        },

        //Remove child
        ChildButtonRemove: function ChildButtonRemove(event) {
            var nodeList = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildElementAll());


            if (parseInt(nodeList[0].children[0].innerHTML) > 0) {
                for (var i = 0; i < nodeList.length; i++) {
                    nodeList[i].children[0].innerHTML = parseInt(nodeList[i].children[0].innerHTML) - 1;
                    nodeList[i].children[0].setAttribute("data-count", (parseInt(nodeList[i].children[0].getAttribute("data-count")) - 1));

                    //Adding disabled class to not allow more button click
                    if (parseInt(nodeList[i].children[0].innerHTML) == 0) {
                        nodeList[i].parentElement.querySelector('.minus').classList.add('disabled');
                        nodeList[i].parentElement.querySelector('.plus').classList.remove('disabled');
                    } else {
                        nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                        nodeList[i].parentElement.querySelector('.plus').classList.remove('disabled');
                    }



                    MystaysBookingWidget.Helper.SetCookie('TotalChild', nodeList[i].children[0].innerHTML);
                }
                var mainGuestTitleAll = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.MainGuestsButtonTitleAll());
                var newCount = 0;
                //Updating main guests section
                for (var i = 0; i < mainGuestTitleAll.length; i++) {
                    newCount = parseInt(mainGuestTitleAll[i].getAttribute("data-count")) - 1;
                    mainGuestTitleAll[i].innerHTML = newCount;
                    mainGuestTitleAll[i].setAttribute("data-count", newCount);
                    MystaysBookingWidget.GuestsWidget.RemoveChildAge(i);
                }
                MystaysBookingWidget.GuestsWidget.CheckGuestsLabel(newCount);
                
            }
        },

        //Add child high school
        ChildHigherButtonAddorSet: function ChildButtonAddorSet(event, newNumberChildren, newTotalGuests) {
            var nodeList = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildHigherElementAll());
            
            //Fired on click event
            if (newNumberChildren == null) {
                newNumberChildren = parseInt(nodeList[0].children[0].innerHTML) + 1;
            }


            if (newTotalGuests == null) {
                newTotalGuests = parseInt(document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.MainGuestsButtonTitleAll()).getAttribute("data-count")) + 1;
            }

            if (newNumberChildren - 1 < MystaysBookingWidget.GuestsWidget.Constants.MaximumChildren()) {
                for (var i = 0; i < nodeList.length; i++) {
                    nodeList[i].children[0].innerHTML = newNumberChildren;
                    nodeList[i].children[0].setAttribute("data-count", newNumberChildren);

                    //Adding disabled class to not allow more button click
                    if (newNumberChildren == MystaysBookingWidget.GuestsWidget.Constants.MaximumChildren()) {
                        nodeList[i].parentElement.querySelector('.plus').classList.add('disabled');
                        nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                    } else {
                    nodeList[i].parentElement.querySelector('.plus').classList.remove('disabled');
                    nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                    }

                    //If the number of children is 0 disable minus button
                    if (newNumberChildren == 0) {
                        nodeList[i].parentElement.querySelector('.minus').classList.add('disabled');
                    }
                }

                var mainGuestTitleAll = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.MainGuestsButtonTitleAll());
                var newCount = 0;
                //Updating main guests section
                for (var i = 0; i < mainGuestTitleAll.length; i++) {

                    mainGuestTitleAll[i].innerHTML = newTotalGuests;
                    mainGuestTitleAll[i].setAttribute("data-count", newTotalGuests);

                }
                MystaysBookingWidget.GuestsWidget.CheckGuestsLabel(newTotalGuests);
                MystaysBookingWidget.Helper.SetCookie('TotalChildHigher', newNumberChildren);
                
            }
        },

        //Remove child high school
        ChildHigherButtonRemove: function ChildHigherButtonRemove(event) {
            var nodeList = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildHigherElementAll());


            if (parseInt(nodeList[0].children[0].innerHTML) > 0) {
                for (var i = 0; i < nodeList.length; i++) {
                    nodeList[i].children[0].innerHTML = parseInt(nodeList[i].children[0].innerHTML) - 1;
                    nodeList[i].children[0].setAttribute("data-count", (parseInt(nodeList[i].children[0].getAttribute("data-count")) - 1));

                    //Adding disabled class to not allow more button click
                    if (parseInt(nodeList[i].children[0].innerHTML) == 0) {
                        nodeList[i].parentElement.querySelector('.minus').classList.add('disabled');
                        nodeList[i].parentElement.querySelector('.plus').classList.remove('disabled');
                    } else {
                        nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                        nodeList[i].parentElement.querySelector('.plus').classList.remove('disabled');
                    }



                    MystaysBookingWidget.Helper.SetCookie('TotalChildHigher', nodeList[i].children[0].innerHTML);
                }
                var mainGuestTitleAll = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.MainGuestsButtonTitleAll());
                var newCount = 0;
                //Updating main guests section
                for (var i = 0; i < mainGuestTitleAll.length; i++) {
                    newCount = parseInt(mainGuestTitleAll[i].getAttribute("data-count")) - 1;
                    mainGuestTitleAll[i].innerHTML = newCount;
                    mainGuestTitleAll[i].setAttribute("data-count", newCount);
                    
                }
                MystaysBookingWidget.GuestsWidget.CheckGuestsLabel(newCount);
                
            }
        },

        //Add child lower school
        ChildLowerButtonAddorSet: function ChildButtonAddorSet(event, newNumberChildren, newTotalGuests) {
            var nodeList = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildLowerElementAll());

            //Fired on click event
            if (newNumberChildren == null) {
                newNumberChildren = parseInt(nodeList[0].children[0].innerHTML) + 1;
            }


            if (newTotalGuests == null) {
                newTotalGuests = parseInt(document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.MainGuestsButtonTitleAll()).getAttribute("data-count")) + 1;
            }

            if (newNumberChildren - 1 < MystaysBookingWidget.GuestsWidget.Constants.MaximumChildren()) {
                for (var i = 0; i < nodeList.length; i++) {
                    nodeList[i].children[0].innerHTML = newNumberChildren;
                    nodeList[i].children[0].setAttribute("data-count", newNumberChildren);

                    //Adding disabled class to not allow more button click
                    if (newNumberChildren == MystaysBookingWidget.GuestsWidget.Constants.MaximumChildren()) {
                        nodeList[i].parentElement.querySelector('.plus').classList.add('disabled');
                        nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                    } else {
                        nodeList[i].parentElement.querySelector('.plus').classList.remove('disabled');
                        nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                        }

                        //If the number of children is 0 disable minus button
                        if (newNumberChildren == 0) {
                            nodeList[i].parentElement.querySelector('.minus').classList.add('disabled');
                        }
                    }

                    var mainGuestTitleAll = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.MainGuestsButtonTitleAll());
                    var newCount = 0;
                    //Updating main guests section
                    for (var i = 0; i < mainGuestTitleAll.length; i++) {

                        mainGuestTitleAll[i].innerHTML = newTotalGuests;
                        mainGuestTitleAll[i].setAttribute("data-count", newTotalGuests);

                    }
                    MystaysBookingWidget.GuestsWidget.CheckGuestsLabel(newTotalGuests);
                    MystaysBookingWidget.Helper.SetCookie('TotalChildLower', newNumberChildren);

                }
            
        },

        //Remove child lower school
        ChildLowerButtonRemove: function ChildLowerButtonRemove(event) {
            var nodeList = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildLowerElementAll());


            if (parseInt(nodeList[0].children[0].innerHTML) > 0) {
                for (var i = 0; i < nodeList.length; i++) {
                    nodeList[i].children[0].innerHTML = parseInt(nodeList[i].children[0].innerHTML) - 1;
                    nodeList[i].children[0].setAttribute("data-count", (parseInt(nodeList[i].children[0].getAttribute("data-count")) - 1));

                    //Adding disabled class to not allow more button click
                    if (parseInt(nodeList[i].children[0].innerHTML) == 0) {
                        nodeList[i].parentElement.querySelector('.minus').classList.add('disabled');
                        nodeList[i].parentElement.querySelector('.plus').classList.remove('disabled');
                    } else {
                        nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                        nodeList[i].parentElement.querySelector('.plus').classList.remove('disabled');
                    }



                    MystaysBookingWidget.Helper.SetCookie('TotalChildLower', nodeList[i].children[0].innerHTML);
                }
                var mainGuestTitleAll = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.MainGuestsButtonTitleAll());
                var newCount = 0;
                //Updating main guests section
                for (var i = 0; i < mainGuestTitleAll.length; i++) {
                    newCount = parseInt(mainGuestTitleAll[i].getAttribute("data-count")) - 1;
                    mainGuestTitleAll[i].innerHTML = newCount;
                    mainGuestTitleAll[i].setAttribute("data-count", newCount);

                }
                MystaysBookingWidget.GuestsWidget.CheckGuestsLabel(newCount);
                
            }
        },

        //Add child infant school
        ChildInfantButtonAddorSet: function ChildButtonAddorSet(event, newNumberChildren, newTotalGuests) {
            var nodeList = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildInfantElementAll());

            //Fired on click event
            if (newNumberChildren == null) {
                newNumberChildren = parseInt(nodeList[0].children[0].innerHTML) + 1;
            }


            if (newTotalGuests == null) {
                newTotalGuests = parseInt(document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.MainGuestsButtonTitleAll()).getAttribute("data-count")) + 1;
            }

            if (newNumberChildren - 1 < MystaysBookingWidget.GuestsWidget.Constants.MaximumChildren()) {
                for (var i = 0; i < nodeList.length; i++) {
                    nodeList[i].children[0].innerHTML = newNumberChildren;
                    nodeList[i].children[0].setAttribute("data-count", newNumberChildren);

                    //Adding disabled class to not allow more button click
                    if (newNumberChildren == MystaysBookingWidget.GuestsWidget.Constants.MaximumChildren()) {
                        nodeList[i].parentElement.querySelector('.plus').classList.add('disabled');
                        nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                    } else {
                    nodeList[i].parentElement.querySelector('.plus').classList.remove('disabled');
                    nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                    }

                    //If the number of children is 0 disable minus button
                    if (newNumberChildren == 0) {
                        nodeList[i].parentElement.querySelector('.minus').classList.add('disabled');
                    }
                }

                var mainGuestTitleAll = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.MainGuestsButtonTitleAll());
                var newCount = 0;
                //Updating main guests section
                for (var i = 0; i < mainGuestTitleAll.length; i++) {

                    mainGuestTitleAll[i].innerHTML = newTotalGuests;
                    mainGuestTitleAll[i].setAttribute("data-count", newTotalGuests);

                }
                MystaysBookingWidget.GuestsWidget.CheckGuestsLabel(newTotalGuests);
                MystaysBookingWidget.Helper.SetCookie('TotalChildInfant', newNumberChildren);

            }
        },

        //Remove child infant
        ChildInfantButtonRemove: function ChildInfantButtonRemove(event) {
            var nodeList = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildInfantElementAll());


            if (parseInt(nodeList[0].children[0].innerHTML) > 0) {
                for (var i = 0; i < nodeList.length; i++) {
                    nodeList[i].children[0].innerHTML = parseInt(nodeList[i].children[0].innerHTML) - 1;
                    nodeList[i].children[0].setAttribute("data-count", (parseInt(nodeList[i].children[0].getAttribute("data-count")) - 1));

                    //Adding disabled class to not allow more button click
                    if (parseInt(nodeList[i].children[0].innerHTML) == 0) {
                        nodeList[i].parentElement.querySelector('.minus').classList.add('disabled');
                        nodeList[i].parentElement.querySelector('.plus').classList.remove('disabled');
                    } else {
                        nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                        nodeList[i].parentElement.querySelector('.plus').classList.remove('disabled');
                    }



                    MystaysBookingWidget.Helper.SetCookie('TotalChildInfant', nodeList[i].children[0].innerHTML);
                }
                var mainGuestTitleAll = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.MainGuestsButtonTitleAll());
                var newCount = 0;
                //Updating main guests section
                for (var i = 0; i < mainGuestTitleAll.length; i++) {
                    newCount = parseInt(mainGuestTitleAll[i].getAttribute("data-count")) - 1;
                    mainGuestTitleAll[i].innerHTML = newCount;
                    mainGuestTitleAll[i].setAttribute("data-count", newCount);

                }
                MystaysBookingWidget.GuestsWidget.CheckGuestsLabel(newCount);
                
            }
        },



        //Method to dynamically generate child age selector for guest widget based on index passed
        AddChildAge: function AddChildAge(index, updateCookie) {

            
                var ageContainerAll = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildAgeListAll());

                var ageListItem = document.createElement('li');
                ageListItem.className = MystaysBookingWidget.GuestsWidget.Constants.ChildAgeContainerClass;
                var ageSelectContainer = document.createElement('div');
                var ageSelect = document.createElement('select');
                var ageSelectInfo = document.createElement('i');
                ageSelect.style.borderColor = "red";

                MystaysBookingWidget.GuestsWidget.AddingChildOptions(ageSelect);

                ageSelectContainer.appendChild(ageSelect);
                ageSelectContainer.appendChild(ageSelectInfo);

                ageListItem.appendChild(ageSelectContainer);
                ageContainerAll[index].appendChild(ageListItem);

                if (updateCookie) {
                    MystaysBookingWidget.GuestsWidget.SetChildAgeCookie();
                }

            
                    //Show age info box
                    document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildAgeInfoAll())[index].ShowElement();
            
            
        },
        //Method to generate all child age options
        AddingChildOptions: function AddingChildOptions(ageSelect) {
            //Appending please select
            var ageOption = document.createElement('option');
            ageOption.setAttribute('value', '');
            ageOption.innerHTML = "";
            ageSelect.appendChild(ageOption);


            //Appending less than 1
            var ageOption = document.createElement('option');
            ageOption.setAttribute('value', 0);
            ageOption.innerHTML = "< 1";
            ageSelect.appendChild(ageOption);

            //Apending value more than one
            for (var i = 1; i <= MystaysBookingWidget.GuestsWidget.Constants.MaximumChildAge(); i++) {
                var ageOption = document.createElement('option');
                ageOption.setAttribute('value', i);
                ageOption.innerHTML = i;
                ageSelect.appendChild(ageOption);
            }
        },

        //Method to remove child when child count is reduced for guest widget based on index passed
        RemoveChildAge: function RemoveChildAge(index) {
            var ageContainerAll = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildAgeListAll());
            ageContainerAll[index].removeChild(ageContainerAll[index].lastChild);

            //Updating cookie
            var childAgeCookie = MystaysBookingWidget.Helper.GetCookie('TotalChildAge');
            var childAgeCookieArray = childAgeCookie.split(',');


            //Appending the slash at the end as this is how the value is originally set
            var newChildAgeCookie = childAgeCookieArray.splice(0, childAgeCookieArray.length - 2).join(',') + ",";
            MystaysBookingWidget.Helper.SetCookie('TotalChildAge', newChildAgeCookie);


            //Hide age info box
            if (ageContainerAll[index].children.length === 0) {
                document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildAgeInfoAll())[index].HideElement();
            }
        },

        //Method to get the selected hotels maximum child age
        GetMaximumHotelChildAge: function GetMaximumHotelChildAge() {
            var inputElement = document.querySelector(MystaysBookingWidget.HotelSearch.Constants.SearchInputClass());
            var hotelcity = JSON.parse(inputElement.getAttribute('data-HotelCity'));

            if (hotelcity && hotelcity.HotelMaxChildAge != null) {
                return parseInt(hotelcity.HotelMaxChildAge);
            }

            //Hotel page
            if (document.getElementById('hidhotelmaxchildage') && document.getElementById('hidhotelmaxchildage').value != "-1") {
                return document.getElementById('hidhotelmaxchildage').value;
            }
        },

        //Function to clear all hotel child age when a user selects a new hotel
        CheckChildAge: function CheckChildAge(hotelItem) {

            //For RWith Child Age Is not needed
            if (MystaysBookingWidget.Common.UseTravelClickBookingEngine()) {
                var totalChildren = MystaysBookingWidget.Helper.GetCookie('TotalChild');
                var childAge = MystaysBookingWidget.Helper.GetCookie('TotalChildAge');
                var hotelMaxChildAge = hotelItem.getAttribute('data-hotelmaxchildage');

                //Reseting already loaded selects
                MystaysBookingWidget.GuestsWidget.ResetExistingChildAgeSelects(hotelMaxChildAge);
                //Setting child age values
                MystaysBookingWidget.GuestsWidget.SetChildAgeFromValues(totalChildren, childAge, hotelMaxChildAge);

                //Updating child age cookie
                MystaysBookingWidget.GuestsWidget.SetChildAgeCookie();
            }
        },
        

        //Function to set the MystaysChildAge cookie
        SetChildAgeCookie: function SetChildAgeCookie() {
            var childAgeString = '';
            //Looping through each child age selector to get the value
            for (var i = 0; i < MystaysBookingWidget.Common.BookingWidgetContainerElement().getElementsByClassName(MystaysBookingWidget.GuestsWidget.Constants.ChildAgeContainerClass).length; i++) {

                childAgeString += MystaysBookingWidget.Common.BookingWidgetContainerElement().getElementsByClassName(MystaysBookingWidget.GuestsWidget.Constants.ChildAgeContainerClass)[i].getElementsByTagName('select')[0].value + ',';
            }

            MystaysBookingWidget.Helper.SetCookie('TotalChildAge', childAgeString);
        },

        //function fired when used changes child age(The corresponding child age item should be updated on all the widgets on the page)
        ChildAgeChange: function ChildAgeChange() {

            document.addEventListener('change', function (e) {

                var totalGuestsWidgets = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.GuestSectionClassAll()).length;
                var childAgeSelect = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildAgeSelects());
                var totalSelects = childAgeSelect.length;

                //Setting the border color to red if the default value is selected
                if (e.target.selectedIndex === 0) {
                    e.target.style.borderColor = "red";
                } else {
                    e.target.style.borderColor = null;
                }

                for (var i = 0; i < childAgeSelect.length; i++) {
                    if (e.target && childAgeSelect[i] == e.target) {

                        //This is for hotel page (Although 3 widgets are present the meeting widget should NOT be updated)
                        if (totalGuestsWidgets == 3 ) {

                            //Select from first item is changed
                            if (i < totalSelects / 2) {
                                //get index of corresponding age in other widget
                                var indexOfSecSelect = (totalSelects / 2) + i;
                            }
                            //If the select is from the second widget
                            else {
                                //get index of corresponding age in other widget
                                var indexOfSecSelect = Math.abs((totalSelects / 2) - i);
                            }

                            childAgeSelect[indexOfSecSelect].selectedIndex = e.target.selectedIndex;

                            //Setting the border color to red if the default value is selected
                            if (childAgeSelect[indexOfSecSelect].selectedIndex === 0) {
                                childAgeSelect[indexOfSecSelect].style.borderColor = "red";
                            } else {
                                childAgeSelect[indexOfSecSelect].style.borderColor = null;
                            }
                        }
                        MystaysBookingWidget.GuestsWidget.SetChildAgeCookie();
                    }
                }
            })
        },


        //Method to bind all the add and remove buttons
        ButtonClick: function ButtonClick() {

            //Attaching the child age select listener
            MystaysBookingWidget.GuestsWidget.ChildAgeChange();

            var addbuttons = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ButtonAdd());
            var removebuttons = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ButtonRemove());

            var roomsElement = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.RoomElement());
            var AdultElement = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.AdultElement());
            var ChildElement = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.ChildElement());
            var ChildElementHigher = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.ChildElementHigher());
            var ChildElementLower = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.ChildElementLower());
            var ChildElementInfant = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.ChildElementInfant());

            for (var i = 0; i < addbuttons.length; i++) {

                if (addbuttons[i].parentElement.contains(roomsElement)) {
                    addbuttons[i].addEventListener('click', function (e) {
                        MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                        MystaysBookingWidget.GuestsWidget.RoomsButtonAddorSet(e);
                    });
                } else if (addbuttons[i].parentElement.contains(AdultElement)) {
                    addbuttons[i].addEventListener('click', function (e) {
                        MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                        MystaysBookingWidget.GuestsWidget.AdultButtonAddorSet(e);
                    });
                } else if (addbuttons[i].parentElement.contains(ChildElement)) {
                    addbuttons[i].addEventListener('click', function (e) {
                        MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                        MystaysBookingWidget.GuestsWidget.ChildButtonAddorSet(e);
                    });
                } else if (addbuttons[i].parentElement.contains(ChildElementHigher)) {
                    addbuttons[i].addEventListener('click', function (e) {
                        MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                        MystaysBookingWidget.GuestsWidget.ChildHigherButtonAddorSet(e);
                    });
                } else if (addbuttons[i].parentElement.contains(ChildElementLower)) {
                    addbuttons[i].addEventListener('click', function (e) {
                        MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                        MystaysBookingWidget.GuestsWidget.ChildLowerButtonAddorSet(e);
                    });
                } else if (addbuttons[i].parentElement.contains(ChildElementInfant)) {
                    addbuttons[i].addEventListener('click', function (e) {
                        MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                        MystaysBookingWidget.GuestsWidget.ChildInfantButtonAddorSet(e);
                    });
                }
            }

            for (var i = 0; i < removebuttons.length; i++) {
                if (removebuttons[i].parentElement.contains(roomsElement)) {
                    removebuttons[i].addEventListener('click', function (e) {
                        MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                        MystaysBookingWidget.GuestsWidget.RoomsButtonRemove(e);
                    });
                } else if (removebuttons[i].parentElement.contains(AdultElement)) {
                    removebuttons[i].addEventListener('click', function (e) {
                        MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                        MystaysBookingWidget.GuestsWidget.AdultButtonRemove(e);
                    });
                } else if (removebuttons[i].parentElement.contains(ChildElement)) {
                    removebuttons[i].addEventListener('click', function (e) {
                        MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                        MystaysBookingWidget.GuestsWidget.ChildButtonRemove(e)
                    });
                } else if (removebuttons[i].parentElement.contains(ChildElementHigher)) {
                    removebuttons[i].addEventListener('click', function (e) {
                        MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                        MystaysBookingWidget.GuestsWidget.ChildHigherButtonRemove(e)
                    });
                } else if (removebuttons[i].parentElement.contains(ChildElementLower)) {
                    removebuttons[i].addEventListener('click', function (e) {
                        MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                        MystaysBookingWidget.GuestsWidget.ChildLowerButtonRemove(e)
                    });
                } else if (removebuttons[i].parentElement.contains(ChildElementInfant)) {
                    removebuttons[i].addEventListener('click', function (e) {
                        MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                        MystaysBookingWidget.GuestsWidget.ChildInfantButtonRemove(e)
                    });
                }
            }

            var guestWidgetbackButton = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.GuestWidgetBackButton());

            guestWidgetbackButton.addEventListener('click', function (e) {
                MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                MystaysBookingWidget.GuestsWidget.ShowGuestSection(false);
                document.querySelector(MystaysBookingWidget.Common.BookingWidgetContainer()).classList.remove('mystays-bookingwidget-active');

            })
        },



        //Method invoked when user clicks on the guest button
        GuestButtonContainerClick: function GuestButtonContainerClick() {
            document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.GuestButtonContainer()).addEventListener('click', function (e) {
                MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                //Hide calendar
                if (MystaysBookingWidget.Common.CurrentRangeObject()) {
                    MystaysBookingWidget.Common.CurrentRangeObject().hide();
                    MystaysBookingWidget.HotelSearch.ShowHotelList(false);
                }
                MystaysBookingWidget.GuestsWidget.ShowGuestSection(true);

            })
        },

        //Close or back button to close the guest widget
        GuestButtonCloseClick: function () {
            document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.GuestButtonClose()).addEventListener('click', function (e) {
                MystaysBookingWidget.Common.CurrentEventTarget = e.target;

                MystaysBookingWidget.GuestsWidget.ShowGuestSection(false);

                document.querySelector(MystaysBookingWidget.Common.BookingWidgetContainer()).classList.remove('mystays-bookingwidget-active');
            })
        },
		
		//Function to show and hide the child section based on the booking wngine
		UpdateChildSection:function UpdateChildSection(){
			var childSections=null;
			if(MystaysBookingWidget.Common.UseTravelClickBookingEngine()){
				childSections = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.TravelClickChildrenSection());
			}
			else{
				childSections = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.RWithChildrenSection());
			}
			
			for(var i=0; i< childSections.length; i++){
					childSections[i].ShowElement();
			}
			
		},
        //Method called on document ready to invoke guest wigdget functionality
        Loaded: function Loaded() {

            MystaysBookingWidget.GuestsWidget.CustomHTMLEvents();

            MystaysBookingWidget.GuestsWidget.ButtonClick();

            if (MystaysBookingWidget.GuestsWidget.LoadWidgetOnce == null) {
                MystaysBookingWidget.GuestsWidget.LoadGuestWidgetFromCookies();
                MystaysBookingWidget.GuestsWidget.LoadWidgetOnce = false;
            }

        }
    },


    //Hotel Search
    HotelSearch: {
        Constants: {
            //Flag to check whether cities are to be rendered or not
            FilterCities: false,


            MasterSearchList: [],

            SearchInputClass: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .hotel-search-input';
            },

            ClearButton: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .reset-search-list';
            },
            HotelBindListDefault: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .hotel-search-list-default';
            },
            HotelBindList: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .hotel-search-list';
            },
            HotelBindListActiveElement: function () {
                return '.hotel-search-list .active';
            },
            //Each hotel or city item generated on autocomplete
            HotelSelectItem: function () {
                return 'hotel-sel-item';
            },

            HotelSearchError: function () {
                return 'bookingwidget-search-error';
            },

            HotelSearchStartDateError: function () {
                return 'bookingwidget-startdate-error';
            },

            //Footer section
            FooterCityList: function () {
                return 'city-list';
            },

            FooterCityItemSelector: function () {
                return 'span';
            },

            FooterHotelList: function () {
                return 'hotel-list';
            },

            FooterHotelItemSelector: function () {
                return '.hotel-search-item span';
            },

            APITargetLanguage: function APITargetLanguage() {
                if (MystaysBookingWidget.Common.SelectedLanguage === 'en') {
                    return 'en';
                }
                else if (MystaysBookingWidget.Common.SelectedLanguage === 'ja') {
                    return 'ja-jp';
                } else if (MystaysBookingWidget.Common.SelectedLanguage === 'ko') {
                    return 'ko-kr';
                } else if (MystaysBookingWidget.Common.SelectedLanguage === 'zh') {
                    return 'zh-cn';
                } else if (MystaysBookingWidget.Common.SelectedLanguage === 'tw') {
                    return 'zh-tw';
                }


            },

            //Footer section ends
            SearchMessageContainer: function SearchMessageContainer() {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-search-msg-wrap';
            },
            SearchMessageAnchor: function SearchMessageAnchor() {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-search-msg-wrap a';
            },
            SearchMessagePlaceholder: function SearchMessagePlaceholder(hotelCity) {
                if (hotelCity.Type == 'Hotel') {
                    return MystaysBookingWidget.Helper.GetTranslation('SearchMessageHotelPlaceholder');
                } else {
                    return MystaysBookingWidget.Helper.GetTranslation('SearchMessageCityPlaceholder');
                }
            },
            CityLabel: ['Japanese Cities', 'Cities', 'Chinese Cities', 'Taiwanese Cities', 'Korean Cities', 'CityLabel'],
            HotelLabel: ['Japanese Hotels', 'Hotels', 'Chinese Hotels', 'Taiwanese Hotels', 'Korean Hotels', 'HotelLabel'],

        },

        //Removing all hotels from list
        RemoveHotelList: function RemoveHotelList() {
            //Removing all child items
            var bindList = document.querySelector(MystaysBookingWidget.HotelSearch.Constants.HotelBindList());
            while (bindList.children[0]) {
                bindList.children[0].remove();
            }
        },

        //Method to show and hide hotel list
        ShowHotelList: function ShowHotelList(showHotelList) {

            var hotelList = document.querySelector(MystaysBookingWidget.HotelSearch.Constants.HotelBindList());

            if (hotelList) {
                if (showHotelList === true) {
                    document.querySelector(MystaysBookingWidget.HotelSearch.Constants.HotelBindList()).parentElement.ShowElement();
                } else {
                    document.querySelector(MystaysBookingWidget.HotelSearch.Constants.HotelBindList()).parentElement.HideElement();
                }
            }
        },

        CustomHTMLEvents: {

            HotelSearchFocus: function HotelSearchFocus() {
                document.querySelector(MystaysBookingWidget.HotelSearch.Constants.SearchInputClass()).addEventListener('focus', function (e, args) {
                    MystaysBookingWidget.Common.CurrentEventTarget = e.target;

                    //Removing the error class
                    this.parentNode.classList.remove(MystaysBookingWidget.HotelSearch.Constants.HotelSearchError());
                    MystaysBookingWidget.HotelSearch.ShowHotelList(true);

                    //Hiding search message
                    MystaysBookingWidget.HotelSearch.ShowSearchMessage(false);

                    //Hiding calendar object if it is shown
                    MystaysBookingWidget.Common.CurrentRangeObject().hide();

                    //Hiding guests section if it is shown
                    MystaysBookingWidget.GuestsWidget.ShowGuestSection(false);

                   
                    var filteredHotelsList = MystaysBookingWidget.HotelSearch.LoadSearchResults(e.target.value);
                    MystaysBookingWidget.HotelSearch.BindHotelsCityData(filteredHotelsList);

                })


            },
            HotelSearchKeyUp: function HotelSearchKeyUp() {
                document.querySelector(MystaysBookingWidget.HotelSearch.Constants.SearchInputClass()).addEventListener('keyup', function (e, args) {
                    MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                    var filteredHotelsList = MystaysBookingWidget.HotelSearch.LoadSearchResults(e.target.value);

                    MystaysBookingWidget.HotelSearch.BindHotelsCityData(filteredHotelsList);


                    //Showing the reset link when a value is present
                    if (e.which != 40 && e.which != 13 && e.target.value !== '') {
                        document.querySelector(MystaysBookingWidget.HotelSearch.Constants.ClearButton()).ShowElement();
                    }
                    //Hiding the reset button on keyup
                    else if (e.target.value == '') {
                        document.querySelector(MystaysBookingWidget.HotelSearch.Constants.ClearButton()).HideElement();
                    }
                })
            },

            HotelSearchKeyDown: function HotelSearchKeyDown() {
                document.querySelector(MystaysBookingWidget.HotelSearch.Constants.SearchInputClass()).addEventListener('keydown', function (e, args) {
                    MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                    if (e.which === 13) {
                        //Get current active elemnt
                        var activeElement = MystaysBookingWidget.Common.BookingWidgetContainerElement().getElementsByClassName('active')[0];

                        //Triggering hotel select
                        MystaysBookingWidget.HotelSearch.TriggerHotelCitySelect(activeElement, false);

                        e.stopPropagation();
                        return;
                    }

                    if (e.which == 40) {
                        e.preventDefault();
                        e.target.blur();

                        //Getting current active element
                        var activeElement = MystaysBookingWidget.Common.BookingWidgetContainerElement().getElementsByClassName('active')[0];

                        //Removing active class
                        activeElement.classList.remove('active');

                        //Getting next sibling
                        var siblingHotelItem = MystaysBookingWidget.Helper.GetSiblingByClass(activeElement, MystaysBookingWidget.HotelSearch.Constants.HotelSelectItem(), false);

                        //Focusing on sibling and adding 'active' class
                        siblingHotelItem.classList.add('active');
                        activeElement.blur();
                        siblingHotelItem.focus();
                    }




                })
            },

            //Method to fire when user scrolls down on each hotel
            HotelItemKeyDown: function HotelItemKeyDown() {

                for (var i = 0; i < MystaysBookingWidget.Common.BookingWidgetContainerElement().querySelectorAll(MystaysBookingWidget.HotelSearch.Constants.HotelBindList() + ' .' + MystaysBookingWidget.HotelSearch.Constants.HotelSelectItem()).length; i++) {
                    var listItem = MystaysBookingWidget.Common.BookingWidgetContainerElement().querySelectorAll(MystaysBookingWidget.HotelSearch.Constants.HotelBindList() + ' .' + MystaysBookingWidget.HotelSearch.Constants.HotelSelectItem())[i];

                    listItem.addEventListener('keydown', function (e, args) {
                        //MystaysBookingWidget.Common.CurrentEventTarget = e.target;

                        e.preventDefault();
                        e.target.classList.remove('active');

                        //User clicks enter/selects 
                        if (e.which === 13) {
                            MystaysBookingWidget.HotelSearch.TriggerHotelCitySelect(e.target, false)
                            e.stopPropagation();
                            return;
                        }

                        //Tab and keydown
                        if (e.which == 9 || e.which == 40) {
                            e.target.classList.remove('active');
                            var siblingHotelItem = MystaysBookingWidget.Helper.GetSiblingByClass(e.target, MystaysBookingWidget.HotelSearch.Constants.HotelSelectItem(), false);

                        }

                        //Key up
                        if (e.which == 38) {
                            var siblingHotelItem = MystaysBookingWidget.Helper.GetSiblingByClass(e.target, MystaysBookingWidget.HotelSearch.Constants.HotelSelectItem(), true);

                        }

                        if (siblingHotelItem && siblingHotelItem.tagName === 'LI') {
                            siblingHotelItem.classList.add('active');
                            e.target.blur();
                            siblingHotelItem.focus();
                        } else {
                            MystaysBookingWidget.Common.BookingWidgetContainerElement().querySelector(MystaysBookingWidget.HotelSearch.Constants.SearchInputClass()).focus();
                        }
                    })
                }

            },

            ClearButtonClick: function ClearButtonClick() {
                if (document.querySelector(MystaysBookingWidget.HotelSearch.Constants.ClearButton())) {
                    document.querySelector(MystaysBookingWidget.HotelSearch.Constants.ClearButton()).addEventListener('click', function () {
                        document.querySelector(MystaysBookingWidget.HotelSearch.Constants.SearchInputClass()).value = "";
                        document.querySelector(MystaysBookingWidget.HotelSearch.Constants.SearchInputClass()).focus();
                        document.querySelector(MystaysBookingWidget.HotelSearch.Constants.ClearButton()).HideElement();
                    })
                }


            },

            //When user selects a hotel item attach event for list item and also the default list item which will be present in hotel page
            HotelItemClick: function HotelItemClick(AttachDefaultItemTrigger, KeepCalendarClosed) {

                for (var i = 0; i < MystaysBookingWidget.Common.BookingWidgetContainerElement().querySelectorAll(MystaysBookingWidget.HotelSearch.Constants.HotelBindList() + ' .' + MystaysBookingWidget.HotelSearch.Constants.HotelSelectItem()).length; i++) {
                    var listItem = MystaysBookingWidget.Common.BookingWidgetContainerElement().querySelectorAll(MystaysBookingWidget.HotelSearch.Constants.HotelBindList() + ' .' + MystaysBookingWidget.HotelSearch.Constants.HotelSelectItem())[i];

                    listItem.addEventListener('click', function (e, args) {
                        //MystaysBookingWidget.Common.CurrentEventTarget = e.target;

                        e.preventDefault();
                        e.target.classList.remove('active');

                        MystaysBookingWidget.HotelSearch.TriggerHotelCitySelect(e.target, false);
                        e.stopPropagation();
                    })
                }

                //Triggering default hotel bind list in case of hotel inner pages
                if (AttachDefaultItemTrigger) {
                    for (var i = 0; i < MystaysBookingWidget.Common.BookingWidgetContainerElement().querySelectorAll(MystaysBookingWidget.HotelSearch.Constants.HotelBindListDefault() + ' .' + MystaysBookingWidget.HotelSearch.Constants.HotelSelectItem()).length; i++) {
                        var listItem = MystaysBookingWidget.Common.BookingWidgetContainerElement().querySelectorAll(MystaysBookingWidget.HotelSearch.Constants.HotelBindListDefault() + ' .' + MystaysBookingWidget.HotelSearch.Constants.HotelSelectItem())[i];

                        listItem.addEventListener('click', function (e, args) {
                            MystaysBookingWidget.Common.CurrentEventTarget = e.target;

                            e.preventDefault();


                            MystaysBookingWidget.HotelSearch.TriggerHotelCitySelect(e.target, KeepCalendarClosed);
                            e.stopPropagation();
                        })
                    }

                }


            },
            //Function to set the first element to active
            SetActiveHotelItem: function SetActiveHotelItem() {
                var firstHotelItem = MystaysBookingWidget.Common.BookingWidgetContainerElement().querySelector(MystaysBookingWidget.HotelSearch.Constants.HotelBindList() + ' .' + MystaysBookingWidget.HotelSearch.Constants.HotelSelectItem());

                if (firstHotelItem) {
                    firstHotelItem.classList.add('active');
                }
            }


        },

        //Method used to show or hide search message and also populate link and text
        ShowSearchMessage: function ShowSearchMessage(showsearchMessage, hotelCity) {
            if (!showsearchMessage) {
                document.querySelector(MystaysBookingWidget.HotelSearch.Constants.SearchMessageContainer()).HideElement();
            } else {
                var msgPlaceholder = MystaysBookingWidget.HotelSearch.Constants.SearchMessagePlaceholder(hotelCity);
                var showAnchorTag = document.querySelector(MystaysBookingWidget.HotelSearch.Constants.SearchMessageAnchor());
                msgPlaceholder = msgPlaceholder.replace('{0}', hotelCity.Name);
                showAnchorTag.href = hotelCity.Link;
                showAnchorTag.innerHTML = msgPlaceholder;

                document.querySelector(MystaysBookingWidget.HotelSearch.Constants.SearchMessageContainer()).ShowElement();
            }
        },

        ////Selection Start
        //Method fired when used selects a hotel or city
        TriggerHotelCitySelect: function TriggerHotelCitySelect(hotelItem, KeepCalendarClosed) {
            //Showing the clear button
            if (document.querySelector(MystaysBookingWidget.HotelSearch.Constants.ClearButton())) {
                document.querySelector(MystaysBookingWidget.HotelSearch.Constants.ClearButton()).ShowElement();
            }
            MystaysBookingWidget.HotelSearch.GetSelectedHotelCity(hotelItem);
            MystaysBookingWidget.GuestsWidget.CheckChildAge(hotelItem);
            

            if (!KeepCalendarClosed) {
                //Trigger calendar checkin button click
                MystaysBookingWidget.Common.BookingWidgetContainerElement().querySelector(MystaysBookingWidget.BookingCalendar.Constants.CheckinButton()).click();
            }


           

            return;
        },



        //Method to create hotel/city object from LI item
        GetSelectedHotelCity: function GetSelectedHotelCity(listItem) {

            //For data list
            var selectedHotel = {};
            selectedHotel.Type = listItem.getAttribute('data-Type');
            selectedHotel.TargetCities = listItem.getAttribute('data-TargetCities');
            selectedHotel.Name = listItem.getAttribute('data-Name');
            selectedHotel.HotelSearchNames = listItem.getAttribute('data-HotelSearchNames');
            selectedHotel.Link = listItem.getAttribute('data-Link');
            selectedHotel.UseTravelClick = listItem.getAttribute('data-UseTravelClick');
            selectedHotel.UseTravelClickInJapan = listItem.getAttribute('data-UseTravelClickInJapan');
            selectedHotel.TravelClickBookingID = listItem.getAttribute('data-TravelClickBookingID');
            selectedHotel.RWIthCode = listItem.getAttribute('data-RWIthCode');
            selectedHotel.HotelCity = listItem.getAttribute('data-HotelCity');
            selectedHotel.ItemID = listItem.getAttribute('data-ItemID');

            selectedHotel.IsBookable = listItem.getAttribute('data-IsBookable');
            selectedHotel.HasMeetingRoom = listItem.getAttribute('data-HasMeetingRoom');
            selectedHotel.StartDateForBooking = listItem.getAttribute('data-StartDateForBooking');
            selectedHotel.GroupNames = listItem.getAttribute('data-GroupNames');
            selectedHotel.FastBookingAreaName = listItem.getAttribute('data-FastBookingAreaName');
            selectedHotel.ABTestBookingEnabled = listItem.getAttribute('data-ABTestBookingEnabled');
            selectedHotel.HotelMaxChildAge = listItem.getAttribute('data-HotelMaxChildAge');

            MystaysBookingWidget.HotelSearch.UpdateSerachField(selectedHotel);

        },


        //Used to bind hotel data to input element
        UpdateSerachField: function UpdateSerachField(selectedHotelCity) {
            var inputElement = document.querySelector(MystaysBookingWidget.HotelSearch.Constants.SearchInputClass());
            inputElement.setAttribute('data-HotelCity', JSON.stringify(selectedHotelCity));
            inputElement.value = selectedHotelCity.Name;

            

            MystaysBookingWidget.HotelSearch.ShowSearchMessage(true, selectedHotelCity);
        },


        ////Selection End


        ////Binding Start
        //Method to initialize autocomplete
        InitializeAutocomplete: function () {
            //Attaching focus event
            MystaysBookingWidget.HotelSearch.CustomHTMLEvents.HotelSearchFocus();
            //Bind autocomplete to input search
            MystaysBookingWidget.HotelSearch.CustomHTMLEvents.HotelSearchKeyUp();
            MystaysBookingWidget.HotelSearch.CustomHTMLEvents.HotelSearchKeyDown();

            MystaysBookingWidget.HotelSearch.CustomHTMLEvents.ClearButtonClick()



        },

        //Function to load all hotels or hotels(and cities) based on a searched text
        LoadSearchResults: function (userInputText) {
            var masterHotelList = MystaysBookingWidget.HotelSearch.GetSearchList();



            //Filter text passed
            if (userInputText && userInputText != '') {
                var filteredHotelList = [];
                for (var i = 0; i < masterHotelList.length; i++) {

                    if ((masterHotelList[i].HotelSearchNames.toLowerCase().indexOf(userInputText.toLowerCase()) > -1) || (MystaysBookingWidget.HotelSearch.Constants.FilterCities ? (masterHotelList[i].HotelCity == null ? '' : masterHotelList[i].HotelCity).toLowerCase().indexOf(userInputText.toLowerCase()) > -1 : false)) {
                        filteredHotelList.push(masterHotelList[i]);
                    }
                }
                return filteredHotelList;

            }
            //Load all hotels and cities
            else {
                return masterHotelList;
            }
        },

        //Binding hotels/city to DOM
        BindHotelsCityData: function BindHotelsCityData(hotelList) {
            //Removing all child items
            MystaysBookingWidget.HotelSearch.RemoveHotelList();

            var cityList = hotelList.filter(function (item) {
                return item.Type === 'City';
            })

            var hotelList = hotelList.filter(function (item) {
                return item.Type === 'Hotel';
            })

            var bindList = document.querySelector(MystaysBookingWidget.HotelSearch.Constants.HotelBindList());




            if (cityList.length > 0) {
                //Create header item
                var headerListItem = document.createElement('li');
                headerListItem.className = 'mystyas-hotellist-heading';
                headerListItem.innerHTML = MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.HotelSearch.Constants.CityLabel);
                bindList.appendChild(headerListItem);
                for (var i = 0; i < cityList.length; i++) {
                    var bindListItem = document.createElement('li');
                    bindListItem.setAttribute('tabindex', i);

                    bindListItem.setAttribute('data-Type', cityList[i].Type);
                    bindListItem.setAttribute('data-Name', cityList[i].Name);
                    bindListItem.setAttribute('data-TargetCities', cityList[i].Target);
                    bindListItem.setAttribute('data-Link', cityList[i].Link);
                    bindListItem.setAttribute('data-HotelSearchNames', cityList[i].HotelSearchNames);
                    bindListItem.setAttribute('data-UseTravelClick', cityList[i].UseTravelClick);
                    bindListItem.setAttribute('data-TravelClickBookingID', cityList[i].TravelClickBookingID);
                    bindListItem.setAttribute('data-RWIthCode', cityList[i].RWIthCode);
                    bindListItem.setAttribute('data-HotelCity', cityList[i].HotelCity);
                    bindListItem.setAttribute('data-ItemID', cityList[i].ItemID);

                    bindListItem.setAttribute('data-IsBookable', cityList[i].IsBookable);
                    bindListItem.setAttribute('data-HasMeetingRoom', cityList[i].HasMeetingRoom);
                    bindListItem.setAttribute('data-StartDateForBooking', cityList[i].StartDateForBooking);
                    bindListItem.setAttribute('data-ListHotelGroupNameAllLang', cityList[i].ListHotelGroupNameAllLang);
                    bindListItem.setAttribute('data-FastBookingAreaName', cityList[i].FastBookingAreaName);


                    bindListItem.classList.add(MystaysBookingWidget.HotelSearch.Constants.HotelSelectItem());


                    bindListItem.innerHTML = cityList[i].Name;

                    bindList.appendChild(bindListItem);
                }
            }


            if (hotelList.length > 0) {
                //Create header item
                var headerListItem = document.createElement('li');
                headerListItem.className = 'mystyas-hotellist-heading';
                headerListItem.innerHTML = MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.HotelSearch.Constants.HotelLabel);
                bindList.appendChild(headerListItem);

                for (var i = 0; i < hotelList.length; i++) {
                    var bindListItem = document.createElement('li');
                    bindListItem.setAttribute('tabindex', i);
                    bindListItem.setAttribute('data-Type', hotelList[i].Type);
                    bindListItem.setAttribute('data-Name', hotelList[i].Name);
                    bindListItem.setAttribute('data-Link', hotelList[i].Link);
                    bindListItem.setAttribute('data-HotelSearchNames', hotelList[i].HotelSearchNames);
                    bindListItem.setAttribute('data-UseTravelClick', hotelList[i].UseTravelClick);
                    bindListItem.setAttribute('data-UseTravelClickInJapan', hotelList[i].UseTravelClickInJapan);
                    bindListItem.setAttribute('data-TravelClickBookingID', hotelList[i].TravelClickBookingID);
                    bindListItem.setAttribute('data-RWIthCode', hotelList[i].RWIthCode);
                    bindListItem.setAttribute('data-HotelCity', hotelList[i].HotelCity);
                    bindListItem.setAttribute('data-ItemID', hotelList[i].ItemID);
                    bindListItem.classList.add(MystaysBookingWidget.HotelSearch.Constants.HotelSelectItem());


                    bindListItem.setAttribute('data-IsBookable', hotelList[i].IsBookable);
                    bindListItem.setAttribute('data-HasMeetingRoom', hotelList[i].HasMeetingRoom);
                    bindListItem.setAttribute('data-StartDateForBooking', hotelList[i].StartDateForBooking);
                    bindListItem.setAttribute('data-ListHotelGroupNameAllLang', hotelList[i].ListHotelGroupNameAllLang);
                    bindListItem.setAttribute('data-ABTestBookingEnabled', hotelList[i].ABTestBookingEnabled);
                    bindListItem.setAttribute('data-HotelMaxChildAge', hotelList[i].HotelMaxChildAge);

                    bindListItem.innerHTML = hotelList[i].Name;

                    bindList.appendChild(bindListItem);
                }
            }
            MystaysBookingWidget.HotelSearch.CustomHTMLEvents.HotelItemKeyDown();
            MystaysBookingWidget.HotelSearch.CustomHTMLEvents.HotelItemClick(false, false);
            MystaysBookingWidget.HotelSearch.CustomHTMLEvents.SetActiveHotelItem();
            bindList.parentNode.ShowElement();


        },

        //Fetch hotel and city details from API
        GetHotelDetailsAPI: function GetHotelDetailsAPI() {

            var HotelCityList = [];

            var jsonData = {
                "Target-Language": MystaysBookingWidget.HotelSearch.Constants.APITargetLanguage(),
                "Authorization": MystaysBookingWidget.Helper.GetTranslation("MystaysAPIKey")
            }

            var apiDomain = MystaysBookingWidget.Helper.GetTranslation("MystaysAPIDomain");


            MystaysBookingWidget.Common.AjaxCall(apiDomain + '/api/Mystays/Data/GetHotels?Target-Language=' + jsonData["Target-Language"] + '&Authorization=' + jsonData.Authorization, jsonData, 'GET', true, function (response) {
                var hotelList = JSON.parse(response);

                for (var i = 0; i < hotelList.length; i++) {
                    if (hotelList[i].isBookable === true) {
                        var hotel = {
                            Type: 'Hotel',
                            Name: hotelList[i].name,
                            IsBookable: hotelList[i].isBookable,
                            HotelSearchNames: hotelList[i].listHotelNameAllLang,
                            HasMeetingRoom: hotelList[i].hasMeetingRoom,
                            HasWeddingRoom: hotelList[i].hasWeddingRoom,
                            Link: hotelList[i].publicHotelUrl,
                            UseTravelClick: hotelList[i].useTravelClick,
                            TravelClickBookingID: hotelList[i].travelClickBookingId,
                            UseTravelClickInJapan: hotelList[i].useTravelClickInJapan,
                            RWIthCode: hotelList[i].rWithBookingId,
                            HotelCity: hotelList[i].listCityNameAllLang,
                            ItemID: hotelList[i].itemId,
                            StartDateForBooking: hotelList[i].startDateForBooking,
                            GroupNames: hotelList[i].listHotelGroupNameAllLang,
                            ABTestBookingEnabled: hotelList[i].ABTestBookingEnabled,
                            HotelMaxChildAge: hotelList[i].HotelMaxChildAge
                        };

                        HotelCityList.push(hotel);
                    }

                }
            })
            
                if (MystaysBookingWidget.HotelSearch.Constants.FilterCities) {
                    MystaysBookingWidget.Common.AjaxCall(apiDomain + '/api/Mystays/Data/GetAreas?Target-Language=' + jsonData["Target-Language"] + '&Authorization=' + jsonData.Authorization, jsonData, 'GET', true, function (response) {
                        var cityList = JSON.parse(response);

                        for (var i = 0; i < cityList.length; i++) {
                            var city = {
                                Type: 'City',
                                Name: cityList[i].name,
                                IsBookable: true,
                                HotelSearchNames: '',
                                HasMeetingRoom: cityList[i].hasMeetingRoom,
                                Link: cityList[i].hotelUrl,
                                FastBookingAreaName: cityList[i].fastBookingAreaName,
                                UseTravelClick: cityList[i].useTravelClick,
                                TravelClickBookingID: cityList[i].travelClickBookingId,
                                RWIthCode: cityList[i].rWithBookingId,
                                HotelCity: cityList[i].listCityNameAllLang,
                                ItemID: cityList[i].itemId,
                                StartDateForBooking: cityList[i].startDateForBooking,
                                GroupNames: cityList[i].listHotelGroupNameAllLang

                            };

                            HotelCityList.push(city);
                        }
                    })
                }
            

            return HotelCityList;
        },

        //Function to get all the hotel details from either and api or from another element on the DOM
        //and convert it into a single format
        GetSearchList: function GetSearchList() {

            if (MystaysBookingWidget.HotelSearch.Constants.MasterSearchList.length > 0) {

                return MystaysBookingWidget.HotelSearch.Constants.MasterSearchList;

            } else {


                var searchList = [];
                var footerHotelListContainer = document.getElementById(MystaysBookingWidget.HotelSearch.Constants.FooterHotelList());
                if (footerHotelListContainer) {

                    
                        //Add cities
                        var footerCityListContainer = document.getElementById(MystaysBookingWidget.HotelSearch.Constants.FooterCityList());
                        if (MystaysBookingWidget.HotelSearch.Constants.FilterCities && footerCityListContainer) {

                            var cityList = footerCityListContainer.querySelectorAll(MystaysBookingWidget.HotelSearch.Constants.FooterCityItemSelector())
                            for (var i = 0; i < cityList.length; i++) {
                                selectedCity = {};

                                selectedCity.Type = 'City';
                                selectedCity.Name = cityList[i].innerHTML;
                                selectedCity.Target = cityList[i].getAttribute('target');
                                selectedCity.HotelSearchNames = cityList[i].getAttribute('names');
                                selectedCity.Link = cityList[i].getAttribute('hotel-url');
                                selectedCity.HotelCity = cityList[i].getAttribute('target-city');
                                selectedCity.ItemID = cityList[i].getAttribute('item-id');

                                selectedCity.IsBookable = true;
                                if (cityList[i].parentNode.getAttribute('show-in-meeting') === "true") {
                                    selectedCity.HasMeetingRoom = true;
                                } else {
                                    selectedCity.HasMeetingRoom = false;
                                }
                                selectedCity.StartDateForBooking = cityList[i].getAttribute('start-date');
                                selectedCity.GroupNames = cityList[i].getAttribute('groups');

                                searchList.push(selectedCity);
                            }
                        }
                    

                    //Add hotels
                    var hotelList = footerHotelListContainer.querySelectorAll(MystaysBookingWidget.HotelSearch.Constants.FooterHotelItemSelector())
                    for (var i = 0; i < hotelList.length; i++) {


                        selectedHotel = {};
                        selectedHotel.Name = hotelList[i].innerHTML.trim();
                        selectedHotel.Type = 'Hotel';
                        selectedHotel.HotelSearchNames = hotelList[i].getAttribute('names');
                        selectedHotel.Link = hotelList[i].getAttribute('hotel-url');
                        selectedHotel.UseTravelClick = hotelList[i].getAttribute('use-travel-click');
                        if (hotelList[i].getAttribute('use-travel-click') === "true") {
                            selectedHotel.UseTravelClick = true;
                        } else {
                            selectedHotel.UseTravelClick = false;
                        }
                        selectedHotel.TravelClickBookingID = hotelList[i].getAttribute('travel-click_booking_id');
                        selectedHotel.RWIthCode = hotelList[i].getAttribute('target');
                        selectedHotel.HotelCity = hotelList[i].getAttribute('city');
                        selectedHotel.ItemID = hotelList[i].getAttribute('item-id');
                        if (hotelList[i].parentNode.getAttribute('hotel-residence') === "true") {
                            selectedHotel.IsBookable = false;
                        } else {
                            selectedHotel.IsBookable = true;
                        }

                        if (hotelList[i].getAttribute('use-travel-click-in-japan') === "true") {
                            selectedHotel.UseTravelClickInJapan = true;
                        } else {
                            selectedHotel.UseTravelClickInJapan = false;
                        }

                        if (hotelList[i].parentNode.getAttribute('show-in-meeting') === "true") {
                            selectedHotel.HasMeetingRoom = true;
                        } else {
                            selectedHotel.HasMeetingRoom = false;
                        }

                        if (hotelList[i].getAttribute('HasWeddingRoom') === "true") {
                            selectedHotel.HasWeddingRoom = true;
                        } else {
                            selectedHotel.HasWeddingRoom = false;
                        }

                        if (hotelList[i].getAttribute('abtestbookingenabled') === "True") {
                            selectedHotel.ABTestBookingEnabled = true;
                        } else {
                            selectedHotel.ABTestBookingEnabled = false;
                        }
                        selectedHotel.HotelMaxChildAge = hotelList[i].getAttribute('HotelMaxChildAge');
                        selectedHotel.StartDateForBooking = hotelList[i].getAttribute('start-date');
                        selectedHotel.GroupNames = hotelList[i].getAttribute('groups');



                        searchList.push(selectedHotel);


                    }
                } else {
                    //Call API

                    searchList = MystaysBookingWidget.HotelSearch.GetHotelDetailsAPI();


                }


                //Writing logic for booking engine
                

                    var bookableList = [];

                    for (var i = 0; i < searchList.length; i++) {
                        if (searchList[i].IsBookable === true) {
                            bookableList.push(searchList[i]);
                        }
                    }
                    searchList = bookableList;
                
                


                MystaysBookingWidget.HotelSearch.Constants.MasterSearchList = searchList;

                return MystaysBookingWidget.HotelSearch.Constants.MasterSearchList;
            }
        },
        ////Binding End

        Loaded: function () {
            MystaysBookingWidget.HotelSearch.InitializeAutocomplete();
        }
    },


    //The functionality related to the book now buttons
    BookNowButton: {
        Constants: {
            BooknowButton: function BooknowButton() {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + '.search-button button';
            },
            PromoCodeField: function PromoCodeField() {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + '.promocode input';
            },
            RWithURL: 'https://mystays.rwiths.net/r-withs/tfs0020a.do?&hotelNo={rwithbookingid}&ciDateY={checkinyear}&ciDateM={checkinmonth}&ciDateD={checkinday}&coDateY={checkoutyear}&coDateM={checkoutmonth}&coDateD={checkoutday}&otona={adults}&s1={childrenHigher}&s2={childrenLower}&y4={childrenInfant}&room={rooms}',
            TravelClickHotelURL: 'https://reservations.mystays.com/{travelclickbookingid}?hotelid={travelclickbookingid}&rooms={rooms}&datein={checkindate}&dateout={checkoutdate}&currency=JPY&adults={adults}&children={children}&languageid={language}&discount={promocode}&childage={childage}',
            TravelClickAreaURL: 'https://search.mystays.com/MYS?destination={areas}&rooms={rooms}&datein={checkindate}&dateout={checkoutdate}&currency=JPY&adults={adults}&children={children}&languageid={language}&discount={promocode}&childage={childage}',
            TravelClickLanguage: function () {
                if (MystaysBookingWidget.Common.SelectedLanguage === 'ja') {
                    return 6;
                }
                if (MystaysBookingWidget.Common.SelectedLanguage === 'en') {
                    return 1;
                }
                else if (MystaysBookingWidget.Common.SelectedLanguage === 'zh') {
                    return 5;
                }
                else if (MystaysBookingWidget.Common.SelectedLanguage === 'tw') {
                    return 12;
                }
                else if (MystaysBookingWidget.Common.SelectedLanguage === 'ko') {
                    return 26;
                }
            }


        },
        //Method to retrieve the new hotel rates with promocode
        FirePromocodeAPI: function FirePromocodeAPI(promocode) {
            try {
                mystays.booking.updatePrice(promocode);
            } catch (e) {

            }
        },

        FireUniversalTracker: function FireUniversalTracker(eventValue) {
            try {
                var bookingWidgetObject = {};

                var inputElement = document.querySelector(MystaysBookingWidget.HotelSearch.Constants.SearchInputClass());
                var adultElement = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.AdultElement()).children[0];
                var childrenElement = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.ChildElement()).children[0];
                var childrenElementHigher = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.ChildElementHigher()).children[0];
                var childrenElementLower = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.ChildElementLower()).children[0];
                var childrenElementInfant = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.ChildElementInfant()).children[0];
                var roomsElement = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.RoomElement()).children[0];
                var hotelcity = JSON.parse(inputElement.getAttribute('data-HotelCity'));
                
                var promoCodeValue = document.querySelector(MystaysBookingWidget.BookNowButton.Constants.PromoCodeField()).value;





                //Not successful search
                if (hotelcity === null) {
                    bookingWidgetObject = {
                        IsSuccessfulSearch: false,
                        BookingWidgetItemID: null
                    };

                    if (MystaysBookingWidget.Common.SelectedLanguage.toLowerCase() === 'ja') {
                        bookingWidgetObject.BookingWidgetAdults = adultElement.getAttribute('data-count');
                        bookingWidgetObject.BookingWidgetChildrenHigher = childrenElementHigher.getAttribute('data-count');
                        bookingWidgetObject.BookingWidgetChildrenLower = childrenElementLower.getAttribute('data-count');
                        bookingWidgetObject.BookingWidgetChildrenInfant = childrenElementInfant.getAttribute('data-count');
                    } else {
                        bookingWidgetObject.BookingWidgetAdults = adultElement.getAttribute('data-count');
                        bookingWidgetObject.BookingWidgetChildren = childrenElement.getAttribute('data-count');
                    }

                } else {

                    bookingWidgetObject = {
                        IsSuccessfulSearch: true
                    };

                    if (!MystaysBookingWidget.Common.UseTravelClickBookingEngine()) {
                        bookingWidgetObject.BookingWidgetItemID = hotelcity.RWIthCode;
                        bookingWidgetObject.BookingWidgetAdults = adultElement.getAttribute('data-count');
                        bookingWidgetObject.BookingWidgetChildrenHigher = childrenElementHigher.getAttribute('data-count');
                        bookingWidgetObject.BookingWidgetChildrenLower = childrenElementLower.getAttribute('data-count');
                        bookingWidgetObject.BookingWidgetChildrenInfant = childrenElementInfant.getAttribute('data-count');
                    } else {
                        bookingWidgetObject.BookingWidgetItemID = hotelcity.TravelClickBookingID;
                        bookingWidgetObject.BookingWidgetAdults = adultElement.getAttribute('data-count');
                        bookingWidgetObject.BookingWidgetChildren = childrenElement.getAttribute('data-count');
                    }

                    if (hotelcity.Type === 'City') {
                        bookingWidgetObject.BookingWidgetItemID = 'undefined';
                    }

                }

                bookingWidgetObject.BookingWidgetSearchText = document.querySelector(MystaysBookingWidget.HotelSearch.Constants.SearchInputClass()).value;
                bookingWidgetObject.BookingWidgetStartDate = MystaysBookingWidget.Common.CurrentRangeObject()._startDate;
                bookingWidgetObject.BookingWidgetEndDate = MystaysBookingWidget.Common.CurrentRangeObject()._endDate;
                bookingWidgetObject.BookingWidgetRooms = roomsElement.getAttribute('data-count');

                bookingWidgetObject.BookingWidgetPromoCode = promoCodeValue;
                UniversalTracking.Tracking.FireBookingWidgetClick(eventValue, bookingWidgetObject, MystaysBookingWidget.HotelSearch.Constants.APITargetLanguage().toLowerCase(), 2);
            } catch (e) {
                console.log(e);
            }
        },

        CustomHTMLEvents: {
            //Event fired when user clicks the book now button
            BooknowButtonClick: function BooknowButtonClick() {
                document.querySelector(MystaysBookingWidget.BookNowButton.Constants.BooknowButton()).addEventListener('click', function (e) {
                    MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                    if (MystaysBookingWidget.BookNowButton.ValidateBooknowForm()) {
                        MystaysBookingWidget.BookNowButton.BookNow();
                    }
                })
            },

            //When user focus promocode
            PromoCodeFocus: function PromoCodeFocus() {

                if (document.querySelector(MystaysBookingWidget.BookNowButton.Constants.PromoCodeField())) {
                    document.querySelector(MystaysBookingWidget.BookNowButton.Constants.PromoCodeField()).addEventListener('focus', function (e) {
                        MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                        if (MystaysBookingWidget.Helper.IsMobile()) {
                            MystaysBookingWidget.Common.ScrollTop(MystaysBookingWidget.BookNowButton.Constants.PromoCodeField());
                        }
                    })
                }

            },

            //When user eneters promocode
            PromoCodeInput: function PromoCodeInput() {
                if (document.querySelector(MystaysBookingWidget.BookNowButton.Constants.PromoCodeField())) {
                    document.querySelector(MystaysBookingWidget.BookNowButton.Constants.PromoCodeField()).addEventListener('input', function (e) {
                        MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                        
                            MystaysBookingWidget.Helper.SetCookie('promocode', e.target.value);
                            MystaysBookingWidget.BookNowButton.FirePromocodeAPI(e.target.value);
                        
                    })
                }

            }


        },

        //Method to load promocode from 
        LoadPromoCode: function LoadPromoCode() {

            
            var promocode = MystaysBookingWidget.Helper.GetQueryString('promo');

            if (!promocode) {
                var promocode = MystaysBookingWidget.Helper.GetCookie('promocode');
            }

            if (promocode) {
                document.querySelector(MystaysBookingWidget.BookNowButton.Constants.PromoCodeField()).value = promocode;
                MystaysBookingWidget.BookNowButton.FirePromocodeAPI(promocode);
            }
        },

        //Validation to check if the form data is present
        ValidateBooknowForm: function ValidateBooknowForm() {
            var formOk = true;
            var eventValue = null;
            var hotelSearchInput = document.querySelector(MystaysBookingWidget.HotelSearch.Constants.SearchInputClass());

            var hotel = JSON.parse(hotelSearchInput.getAttribute('data-HotelCity'));

            var selectedRangeObject = MystaysBookingWidget.Common.CurrentRangeObject()

            //Fire Universal tracker
            MystaysBookingWidget.BookNowButton.FireUniversalTracker(eventValue);

            if (hotel == null || hotelSearchInput.value === '') {
                hotelSearchInput.parentNode.classList.add(MystaysBookingWidget.HotelSearch.Constants.HotelSearchError());
                formOk = false;
                return formOk;
            }
            if (selectedRangeObject == null) {
                formOk = false;
                return formOk;
            }

            ////If hotel start date is greater than checkin date show error
            //if (hotel.StartDateForBooking.indexOf('0001-01-01') === -1 && hotel.StartDateForBooking != "null" && hotel.StartDateForBooking != "undefined" && (new Date(hotel.StartDateForBooking.substr(0, 10).replace("-", "/").replace("-","/")) > new Date(selectedRangeObject.startVal.split('|')[4]))) {
            //    var checkinButton = document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.CheckinButton());

            //    checkinButton.classList.add(MystaysBookingWidget.HotelSearch.Constants.HotelSearchStartDateError());

            //    var hotelstartDate = hotel.StartDateForBooking.substr(0, 10);
            //    var checkinDate = selectedRangeObject.startVal.split('|')[4];
            //    var errorMessage = MystaysBookingWidget.Helper.GetTranslation('StartDateError');

            //    checkinButton.setAttribute("title", (errorMessage.replace('{0}', hotel.Name).replace('{1}', hotelstartDate)));

            //    formOk = false;
            //} else {
            //    var checkinButton = document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.CheckinButton());

            //    checkinButton.classList.remove(MystaysBookingWidget.HotelSearch.Constants.HotelSearchStartDateError());

            //    checkinButton.removeAttribute("title");

            //}

            //Adding analytics call
            if (formOk && typeof (mystays) != 'undefined' && mystays.analytics && mystays.analytics.addBookingRecord) {
                mystays.analytics.addBookingRecord(hotel.ItemID, $.datepicker.formatDate('yy-mm-dd', selectedRangeObject._startDate), $.datepicker.formatDate('yy-mm-dd', selectedRangeObject._endDate));
            }

            return formOk;
        },

        //Function to reorder child age string to append all blanks in the end (As if the blanks are in the middle then travel click breaks)
        ReorderChildAgeString: function ReorderChildAgeString(childAgeString){
            var reorderedString = '';
            var sortedArray = childAgeString.split(',').sort(function (a, b) {
                if (a=="") {
                    return +1;
                } else if (b=="") {
                    return -1;
                } else {
                    return b - a;
                }
                
            });
            reorderedString = sortedArray.join(',');
            return reorderedString;

        },

        GenerateBookingEngineURL: function GenerateBookingEngineURL() {
            var inputElement = document.querySelector(MystaysBookingWidget.HotelSearch.Constants.SearchInputClass());

            var adultElement = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.AdultElement()).children[0];
            var childrenElement = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.ChildElement()).children[0];
            var childrenElementHigher = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.ChildElementHigher()).children[0];
            var childrenElementLower = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.ChildElementLower()).children[0];
            var childrenElementInfant = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.ChildElementInfant()).children[0];
            var roomsElement = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.RoomElement()).children[0];

            var promoCodeValue = document.querySelector(MystaysBookingWidget.BookNowButton.Constants.PromoCodeField()).value;


            var hotelcity = JSON.parse(inputElement.getAttribute('data-HotelCity'));

            

            //RWith
            if (!MystaysBookingWidget.Common.UseTravelClickBookingEngine(hotelcity.ABTestBookingEnabled, hotelcity.UseTravelClickInJapan)) {
                var bookingengineurl = MystaysBookingWidget.BookNowButton.Constants.RWithURL;

                bookingengineurl = bookingengineurl.replace('{rwithbookingid}', hotelcity.RWIthCode);
                bookingengineurl = bookingengineurl.replace('{checkinyear}', MystaysBookingWidget.Common.CurrentRangeObject()._startDate.getFullYear());
                bookingengineurl = bookingengineurl.replace('{checkinmonth}', MystaysBookingWidget.Common.CurrentRangeObject()._startDate.getMonth() + 1);
                bookingengineurl = bookingengineurl.replace('{checkinday}', MystaysBookingWidget.Common.CurrentRangeObject()._startDate.getDate());
                bookingengineurl = bookingengineurl.replace('{checkoutyear}', MystaysBookingWidget.Common.CurrentRangeObject()._endDate.getFullYear());
                bookingengineurl = bookingengineurl.replace('{checkoutmonth}', MystaysBookingWidget.Common.CurrentRangeObject()._endDate.getMonth() + 1);
                bookingengineurl = bookingengineurl.replace('{checkoutday}', MystaysBookingWidget.Common.CurrentRangeObject()._endDate.getDate());
                bookingengineurl = bookingengineurl.replace('{adults}', adultElement.getAttribute('data-count'));
                bookingengineurl = bookingengineurl.replace('{childrenHigher}', childrenElementHigher.getAttribute('data-count'));
                bookingengineurl = bookingengineurl.replace('{childrenLower}', childrenElementLower.getAttribute('data-count'));
                bookingengineurl = bookingengineurl.replace('{childrenInfant}', childrenElementInfant.getAttribute('data-count'));
                bookingengineurl = bookingengineurl.replace('{rooms}', roomsElement.getAttribute('data-count'));

                if (promoCodeValue.toLowerCase() == 'sol10') {
                    promoCodeValue = '';
                }

                if (promoCodeValue != null && promoCodeValue != "") {
                    bookingengineurl = bookingengineurl + '&vipCode=' + promoCodeValue;
                }

            } else {

                //If the page is japanese and the request is going to TC (Through AB test or UserTravelClickForJapan) then calculate children as total of higher, lower and infants
                var isJapaneseTC = false;
                var children = childrenElement.getAttribute('data-count')
                if (MystaysBookingWidget.Common.SelectedLanguage == "ja") {
                    var isJapaneseTC = true;
                }

                if (isJapaneseTC) {
                    children = parseInt(childrenElementHigher.getAttribute('data-count')) + parseInt(childrenElementLower.getAttribute('data-count')) + parseInt(childrenElementInfant.getAttribute('data-count'));
                }


                if (hotelcity.Type === 'Hotel') {
                    var bookingengineurl = MystaysBookingWidget.BookNowButton.Constants.TravelClickHotelURL;

                    bookingengineurl = bookingengineurl.replace('{travelclickbookingid}', hotelcity.TravelClickBookingID);
                    bookingengineurl = bookingengineurl.replace('{travelclickbookingid}', hotelcity.TravelClickBookingID);
                    bookingengineurl = bookingengineurl.replace('{checkindate}', MystaysBookingWidget.Common.CurrentRangeObject().startVal.split('|')[3]);
                    bookingengineurl = bookingengineurl.replace('{checkoutdate}', MystaysBookingWidget.Common.CurrentRangeObject().endVal.split('|')[3]);
                    bookingengineurl = bookingengineurl.replace('{adults}', adultElement.getAttribute('data-count'));
                    bookingengineurl = bookingengineurl.replace('{children}', children);
                    bookingengineurl = bookingengineurl.replace('{rooms}', roomsElement.getAttribute('data-count'));
                } else if (hotelcity.Type === 'City') {
                    var bookingengineurl = MystaysBookingWidget.BookNowButton.Constants.TravelClickAreaURL;
                    bookingengineurl = bookingengineurl.replace('{areas}', hotelcity.TargetCities);
                    bookingengineurl = bookingengineurl.replace('{checkindate}', MystaysBookingWidget.Common.CurrentRangeObject().startVal.split('|')[3]);
                    bookingengineurl = bookingengineurl.replace('{checkoutdate}', MystaysBookingWidget.Common.CurrentRangeObject().endVal.split('|')[3]);
                    bookingengineurl = bookingengineurl.replace('{adults}', adultElement.getAttribute('data-count'));
                    bookingengineurl = bookingengineurl.replace('{children}', children);
                    bookingengineurl = bookingengineurl.replace('{rooms}', roomsElement.getAttribute('data-count'));
                }


                //If chldren are present then append  age of child
                if (childrenElement.getAttribute('data-count') > 0 && !isJapaneseTC ) {

                    var childAgeString = '';

                    //Looping through each child age selector to get the value
                    for (var i = 0; i < MystaysBookingWidget.Common.BookingWidgetContainerElement().getElementsByClassName(MystaysBookingWidget.GuestsWidget.Constants.ChildAgeContainerClass).length; i++) {

                        childAgeString += MystaysBookingWidget.Common.BookingWidgetContainerElement().getElementsByClassName(MystaysBookingWidget.GuestsWidget.Constants.ChildAgeContainerClass)[i].getElementsByTagName('select')[0].value + ',';
                    }
                    bookingengineurl = bookingengineurl.replace('{childage}', MystaysBookingWidget.BookNowButton.ReorderChildAgeString(childAgeString));
                } else {
                    bookingengineurl = bookingengineurl.replace('&childage={childage}', '');
                }

                bookingengineurl = bookingengineurl.replace('{language}', MystaysBookingWidget.BookNowButton.Constants.TravelClickLanguage());

                if (promoCodeValue != null && promoCodeValue != "") {
                    bookingengineurl = bookingengineurl.replace('{promocode}', promoCodeValue);
                } else {
                    bookingengineurl = bookingengineurl.replace('&discount={promocode}', '');
                }
            }
            //Appending CID(For tracking)
            if (MystaysBookingWidget.Helper.GetQueryString('cid')) {
                bookingengineurl = bookingengineurl + "&cid=" + MystaysBookingWidget.Helper.GetQueryString('cid');
            }

            if (UniversalTracking.Constants.TrackingCode != null) {
                bookingengineurl = bookingengineurl + "&UTCode=" + UniversalTracking.Constants.TrackingCode;
            }
            if (UniversalTracking.Constants.ContactID != null) {
                bookingengineurl = bookingengineurl + "&UTContact=" + UniversalTracking.Constants.ContactID;
            }

            return bookingengineurl;
        },


        //Load booking engine page
        BookNow: function BookNow() {


            //For IE11 or Edge open in self(Work around)
            if (MystaysBookingWidget.Helper.isIE11() || MystaysBookingWidget.Helper.IsMicrosoftEdge()) {
                window.open(MystaysBookingWidget.BookNowButton.GenerateBookingEngineURL(), '_self');
            } else {
                if (MystaysBookingWidget.Common.CurrentRangeObject()) {
                    MystaysBookingWidget.Common.CurrentRangeObject().hide();
                }
                

                //Firing with a slight delay to counter the mobiscrll animate out class issue
                window.setTimeout(function () {
                    window.open(MystaysBookingWidget.BookNowButton.GenerateBookingEngineURL(), '_blank');
                }, 300);

              
            }
        },


        Loaded: function Loaded() {

            //Firing these events only when it is not the meetin or wedding page
            
            MystaysBookingWidget.BookNowButton.LoadPromoCode();
            MystaysBookingWidget.BookNowButton.CustomHTMLEvents.BooknowButtonClick();
            MystaysBookingWidget.BookNowButton.CustomHTMLEvents.PromoCodeInput();
            

            MystaysBookingWidget.BookNowButton.CustomHTMLEvents.PromoCodeFocus();

        }
    },

    //This function is to be used when loading a booking widget with a preselected hotel
    LoadedWithPreselectedHotel: function LoadedWithPreselectedHotel(selectedLanguage, FilterCities, SearchHotels, BookingWidgetContainer) {
        MystaysBookingWidget.Common.CurrentEventTarget = document.querySelector(BookingWidgetContainer);

        
        MystaysBookingWidget.Loaded(selectedLanguage, FilterCities, SearchHotels, BookingWidgetContainer);
        //Attaching the event to fire hotel select
        MystaysBookingWidget.HotelSearch.CustomHTMLEvents.HotelItemClick(true, KeepCalendarClosed);
        


        var activeElement = document.querySelector(MystaysBookingWidget.HotelSearch.Constants.HotelBindListDefault() + ' .active');
        activeElement.click();
    },

    //Main initialization function
    Loaded: function Loaded(selectedLanguage, FilterCities, SearchHotels, BookingWidgetContainer, TranslationsPath) {
        if (document.querySelector(BookingWidgetContainer)) {

            selectedLanguage = selectedLanguage.toLowerCase();
            if (selectedLanguage == 'ja-jp') {
                MystaysBookingWidget.Common.SelectedLanguage = 'ja';
            } else if (selectedLanguage == 'en-us' || selectedLanguage == 'en') {
                MystaysBookingWidget.Common.SelectedLanguage = 'en';
            } else if (selectedLanguage == 'zh-cn') {
                MystaysBookingWidget.Common.SelectedLanguage = 'zh';
            } else if (selectedLanguage == 'zh-tw') {
                MystaysBookingWidget.Common.SelectedLanguage = 'tw';
            } else if (selectedLanguage == 'ko-kr') {
                MystaysBookingWidget.Common.SelectedLanguage = 'ko';
            }
			
			MystaysBookingWidget.Common.Constants.TranslationsPath=TranslationsPath;
			
			MystaysBookingWidget.Common.UpdateStaticLabels();
			
			


            //Adding additional space(' ') just for safety
            MystaysBookingWidget.Common.BookingWidgetContainerID = BookingWidgetContainer + ' ';
            MystaysBookingWidget.HotelSearch.Constants.FilterCities = FilterCities;

            
            MystaysBookingWidget.Common.RangeResponsive = null;
            
            

            if (SearchHotels) {
                MystaysBookingWidget.Common.SearchHotels = true;
                
            } else {
                MystaysBookingWidget.Common.SearchHotels = false;
            }

            MystaysBookingWidget.Helper.Loaded();
			MystaysBookingWidget.GuestsWidget.UpdateChildSection();
            MystaysRangeObj = MystaysBookingWidget.BookingCalendar.Loaded(BookingWidgetContainer);
            MystaysBookingWidget.Common.MystaysRangeArray.push(MystaysRangeObj);
            MystaysBookingWidget.GuestsWidget.Loaded();
            if (SearchHotels) {
                MystaysBookingWidget.HotelSearch.Loaded();
            }

            MystaysBookingWidget.BookNowButton.Loaded();


        }

    }
};