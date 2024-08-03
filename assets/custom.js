/*
* Broadcast Theme
*
* Use this file to add custom Javascript to Broadcast.  Keeping your custom
* Javascript in this fill will make it easier to update Broadcast. In order
* to use this file you will need to open layout/theme.liquid and uncomment
* the custom.js script import line near the bottom of the file.
*/

jQuery.noConflict();

(function () {

    jQuery(document).ready(function ($) {

        const oneYear = 365;
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + oneYear);

        $(document).on( 'click', ".stockist-result-custom-fields", function () {
            $('#location-section').removeClass('active');
            $('#service-section').addClass('active');
            $('.breadcrumb-Location').addClass('complete');
            $('.breadcrumb-Services').addClass('active');
            $('.breadcrumbs-progress-bar').css('width', '40%');

            const mmStore = jQuery(this).closest('.stockist-result').find('.stockist-result-name').text();
            const mmStoreAddress1 = jQuery(this).closest('.stockist-result').find('.stockist-result-addr-1').text();
            const mmStoreAddress2 = jQuery(this).closest('.stockist-result').find('.stockist-result-addr-locality').text();
            const mmStoreAddress3 = jQuery(this).closest('.stockist-result').find('.stockist-result-addr-country').text();
            const mmStoreAddress4 = jQuery(this).closest('.stockist-result').find('.stockist-result-phone a').text();

            $.cookie('mm-store', mmStore, { expires: expirationDate });
            $.cookie('mm-store-address1', mmStoreAddress1, { expires: expirationDate });
            $.cookie('mm-store-address2', mmStoreAddress2, { expires: expirationDate });
            $.cookie('mm-store-address3', mmStoreAddress3, { expires: expirationDate });
            $.cookie('mm-store-address4', mmStoreAddress4, { expires: expirationDate });

        });

        $(document).on( 'click', ".select-button", function () {
            $('#service-section').removeClass('active');
            $('#availability-section').addClass('active');
            $('.breadcrumb-Services').addClass('complete');
            $('.breadcrumb-Availability').addClass('active');
            $('.breadcrumbs-progress-bar').css('width', '60%');

            const mmStoreAppointment = jQuery(this).data('appointment');
            const mmStoreAppointmentTime = jQuery(this).data('approx');
            $.cookie('mm-store-appointment', mmStoreAppointment, { expires: expirationDate });
            $.cookie('mm-store-approx-time', mmStoreAppointmentTime, { expires: expirationDate });
        });

        $(document).on( 'click', ".availability-section .btn-next", function () {
            $('#availability-section').removeClass('active');
            $('#details-section').addClass('active');
            $('.breadcrumb-Availability').addClass('complete');
            $('.breadcrumb-Details').addClass('active');
            $('.breadcrumbs-progress-bar').css('width', '80%');

            const mmStoreAppointmentDate = $('#datetimepicker').datetimepicker('getValue');
            const appointmentDate = new Date(mmStoreAppointmentDate);
            const months = [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ];

            const dayOfWeek = appointmentDate.toLocaleString('en-US', { weekday: 'long' });
            const month = months[appointmentDate.getMonth()];
            const date = appointmentDate.getDate();
            const hours = appointmentDate.getHours();
            const minutes = appointmentDate.getMinutes();
            const ampm = hours >= 12 ? 'am' : 'pm';

            const formattedDate = `${dayOfWeek} ${month} ${date}th ${hours}:${minutes.toString().padStart(2, '0')}${ampm}`;

            const formattedDateOnly = `${date}th ${month} ${dayOfWeek}`;
            const formattedTimeOnly = `${hours}:${minutes.toString().padStart(2, '0')}${ampm}`;
            $.cookie('mm-store-appointment-date', formattedDate, { expires: expirationDate });
            $.cookie('mm-store-date', formattedDateOnly, { expires: expirationDate });
            $.cookie('mm-store-time', formattedTimeOnly, { expires: expirationDate });

            $('.mmStoreAppointment').text($.cookie('mm-store-appointment'));
            $('.mmStoreAppointmentTime').text($.cookie('mm-store-approx-time'));
            $('.formattedDate').text($.cookie('mm-store-appointment-date'));
            $('.formattedDateOnly').text($.cookie('mm-store-date'));
            $('.formattedTimeOnly').text($.cookie('mm-store-time'));
            $('.mmStoreAddress').text($.cookie('mm-store'));
            $('.mmStoreAddress1').text($.cookie('mm-store-address1'));
            $('.mmStoreAddress2').text($.cookie('mm-store-address2'));
            $('.mmStoreAddress3').text($.cookie('mm-store-address3'));
            $('.mmStoreAddress4').text($.cookie('mm-store-address4'));

            $('#pick_a_service').val($.cookie('mm-store-appointment'));
            $('#service_when').val($.cookie('mm-store-date') + ', ' + $.cookie('mm-store-time'));
            $('#service_where').val($.cookie('mm-store')+'\n'+$.cookie('mm-store-address1')+'\n'+$.cookie('mm-store-address2')+'\n'+$.cookie('mm-store-address3')+'\n'+$.cookie('mm-store-address4'));

            if($.cookie('mm-store-appointment') == 'Request a Service') {
                $('.Consult__banner').hide();
                $('.service__banner').show();
                $('.additional-service').clone().insertAfter('.personal-information__form');
            } else {
                $('.Consult__banner').show();
                $('.service__banner').hide();
                $('.additional-consult').clone().insertAfter('.personal-information__form');
            }
        });

        

        $(document).on( 'click', "#availability-back-button", function () {
            $('#availability-section').removeClass('active');
            $('#service-section').addClass('active');
            $('.breadcrumb-Availability').removeClass('active');
            $('.breadcrumb-Location').addClass('complete');
            $('.breadcrumb-Services').addClass('active');
            $('.breadcrumbs-progress-bar').css('width', '40%');
        });

        $(document).on( 'click', ".breadcrumb-Location, .reset-button", function () {
            $('.location-container').removeClass('active');
            $('#location-section').addClass('active');
            $('.breadcrumbs button').removeClass('complete');
            $('.breadcrumbs button').removeClass('active');
            $('.breadcrumb-Location').addClass('active');
            $('.breadcrumbs-progress-bar').css('width', '20%');

            var newUrl = window.location.href.replace(/(\?|&)contact_posted=true/, '');
            history.replaceState({}, document.title, newUrl);

            $('.details-section .additional-information__form').remove();
            var engagedContentAdded = false;
            var marriedContentAdded = false;
            var bothContentAdded = false;
        });

        function saveInputValue(inputId, cookieName) {
            var inputValue = $.cookie(cookieName);
            if (inputValue) {
                $(inputId).val(inputValue);
            }

            $(inputId).on('input', function() {
                inputValue = $(this).val();
                $.cookie(cookieName, inputValue);
            });
        }

        saveInputValue('#first-name', 'mm-customer-fname');
        saveInputValue('#last-name', 'mm-customer-lname');
        saveInputValue('#email', 'mm-customer-email');
        saveInputValue('#mobile', 'mm-customer-mobile');

        const urlParams = new URLSearchParams(window.location.search);

        if (urlParams.has('contact_posted') && urlParams.get('contact_posted') === 'true') {
            $('.location-container').removeClass('active');
            $('#review-section').addClass('active');
            $('.breadcrumbs button').addClass('complete');
            $('.breadcrumbs button').addClass('active');
            $('.breadcrumbs-progress-bar').css('width', '100%');

            $('.mmStoreAppointment').text($.cookie('mm-store-appointment'));
            $('.mmStoreAppointmentTime').text($.cookie('mm-store-approx-time'));
            $('.formattedDate').text($.cookie('mm-store-appointment-date'));
            $('.formattedDateOnly').text($.cookie('mm-store-date'));
            $('.formattedTimeOnly').text($.cookie('mm-store-time'));
            $('.mmStoreAddress').text($.cookie('mm-store'));
            $('.mmStoreAddress1').text($.cookie('mm-store-address1'));
            $('.mmStoreAddress2').text($.cookie('mm-store-address2'));
            $('.mmStoreAddress3').text($.cookie('mm-store-address3'));
            $('.mmStoreAddress4').text($.cookie('mm-store-address4'));
            $('.mm-customer-name').text($.cookie('mm-customer-fname') + ' ' + $.cookie('mm-customer-lname'));
            $('.mm-customer-email').text($.cookie('mm-customer-email'));
            $('.mm-customer-mobile').text($.cookie('mm-customer-mobile'));

            const mapAddress = $.cookie('mm-store')+$.cookie('mm-store-address1');
            const mapUrl = `https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(mapAddress)}&key=AIzaSyBOkWD1GRC5Cr5ItA1uDtHt2HikAFvGi2I`;

            $('.review-maps iframe').attr('src', mapUrl);
        }

        // Define flags to track whether content has been added
        var engagedContentAdded = false;
        var marriedContentAdded = false;
        var bothContentAdded = false;

        function initializeDatepicker(selector) {
            jQuery(selector).datetimepicker({
                timepicker: false,
                scrollInput: false,
                scrollMonth: false,
                format: 'd.m.Y',
                yearStart: 1920,
                onGenerate: function (ct) {
                    jQuery(this).closest('.xdsoft_datetimepicker').addClass('engagement_datepicker');
                },
            });
        }

        $(document).on('click', ".details-section .engaged_or_married > label", function () {
            if (!bothContentAdded) {
                $(this).parent().addClass("active");
                $(".details-section .engaged_or_married").after("<div class='form-filed select-filed engaged_only checkbox-filed'><label>Engaged</label></div><div class='form-filed select-filed married_only checkbox-filed'><label>Married</label></div>");
                bothContentAdded = true;
            } else {
                $(this).parent().removeClass("active");
                $(".engaged_only").remove();
                $(".married_only").remove();
                engagedContentAdded = false;
                marriedContentAdded = false;
                bothContentAdded = false;
            }
        });

        $(document).on('click', ".engaged_only > label", function () {
            $(this).parent().addClass("active");
            if (!engagedContentAdded) {
                $(".engaged_only").append("<div class='form-filed input-filed'> <label for='engagement_date'>Please share your engagement date:</label> <input autocomplete='off' type='text' required name='contact[engagement_date]' id='engagement_date' class='input-group__field dtpicker'> </div>");

                initializeDatepicker('.dtpicker');
                engagedContentAdded = true;
            } else {
                $(this).parent().removeClass("active");
                $(".engaged_only .form-filed").remove();
                engagedContentAdded = false;
            }
        });

        $(document).on('click', ".married_only > label", function () {
            $(this).parent().addClass("active");
            if (!marriedContentAdded) {
                $(".married_only").append("<div class='form-filed input-filed'> <label for='wedding_date'>Please share your wedding date:</label> <input type='text' autocomplete='off' required name='contact[wedding_date]' id='wedding_date' class='input-group__field dtpicker'> </div>");

                initializeDatepicker('.dtpicker');
                marriedContentAdded = true;
            } else {
                $(this).parent().removeClass("active");
                $(".married_only .form-filed").remove();
                marriedContentAdded = false;
            }
        });

    });

    jQuery('#datetimepicker').datetimepicker({
        inline: true,
        defaultTime:'12:00',
        defaultDate:'+1970/01/02',
        minDate: 0,
        timepickerScrollbar: false,
        lang: 'en',
        format: 'd/m/Y',
        scrollMonth: false,
        scrollInput: false,
        allowTimes: [
            '11:00', '11:30', '12:00', '12:30',
            '1:00', '1:30', '2:00', '2:30',
            '3:00', '3:30', '4:00', '4:30', '5:00'
        ],
    });


})();


