var min_id = 0;

$( document ).ready(function() {

    $('.ccore-header-menu_button').on('click',function () {

        if ($('.ccore-menu').css('display') == 'none'){
            $("#ccore-header-menu_button-button-opened").show();
            $("#ccore-header-menu_button-button-closed").hide();
        } else{
            $("#ccore-header-menu_button-button-opened").hide();
            $("#ccore-header-menu_button-button-closed").show();
        }

        $( '.ccore-menu' ).slideToggle( "slow", function() {

        });
    });

    $('.ccore-header-username').on('click',function () {

        $( '.ccore-header-personal_menu' ).slideToggle( "slow", function() {

        });
    });



    //---------------------------------------------------------------------------------------

    //---------------------------------------------------------------------------------------
    $(".ccore-create_account-form-personal_span").on('click',function () {

        $('.ccore-create_account-form-blue').css('min-height', '510px');
        $(".ccore-create_account-form-business-input").hide();

        $(".ccore-create_account-h2-business").addClass("ccore-create_account-h2-opacity");
        $(".ccore-create_account-h2-pesonal").removeClass("ccore-create_account-h2-opacity");

        $(".ccore-create_account-text-business").addClass("ccore-create_account-hidden");
        $(".ccore-create_account-text-personal").removeClass("ccore-create_account-hidden");

        $(".ccore-create_account-form-personal_span").addClass("ccore-create_account-active");
        $(".ccore-create_account-form-business_span").removeClass("ccore-create_account-active");
    });

    //---------------------------------------------------------------------------------------
    $(".ccore-create_account-form-business_span").on('click',function () {

        $('.ccore-create_account-form-blue').css('min-height', '640px');

        $(".ccore-create_account-form-business-input").show();

        $(".ccore-create_account-h2-pesonal").addClass("ccore-create_account-h2-opacity");
        $(".ccore-create_account-h2-business").removeClass("ccore-create_account-h2-opacity");

        $(".ccore-create_account-text-personal").addClass("ccore-create_account-hidden");
        $(".ccore-create_account-text-business").removeClass("ccore-create_account-hidden");

        $(".ccore-create_account-form-business_span").addClass("ccore-create_account-active");
        $(".ccore-create_account-form-personal_span").removeClass("ccore-create_account-active");
    });

    //---------------------------------------------------------------------------------------
    $(".ccore-personal_panel-inner_menu-item").on('click',function () {
        $(".ccore-personal_panel-inner_menu-item").removeClass("ccore-personal_panel-inner_menu-item-active");
        $(this).addClass("ccore-personal_panel-inner_menu-item-active");
    });
    //---------------------------------------------------------------------------------------
    $(".ccore-personal_panel-inner_menu-balance").on('click',function () {
        $(".ccore-personal_panel-block").hide();
        $(".ccore-personal_panel-balance-block").show();

    });
    $(".ccore-personal_panel-inner_menu-deposit").on('click',function () {
        $(".ccore-personal_panel-block").hide();
        $(".ccore-personal_panel-deposit-block").show();

    });
    $(".ccore-personal_panel-inner_menu-pay").on('click',function () {
        $(".ccore-personal_panel-block").hide();
        $(".ccore-personal_panel-pay-block").show();

    });
    $(".ccore-personal_panel-inner_menu-send").on('click',function () {
        $(".ccore-personal_panel-block").hide();
        $(".ccore-personal_panel-send-block").show();

    });
    $(".ccore-personal_panel-inner_menu-history").on('click',function () {
        $(".ccore-personal_panel-block").hide();
        $(".ccore-personal_panel-history-block").show();

    });

    //-----------------------------------------------------------------------------------------------



    $('.biolab-home-news-new').on('click',function () {
        if ($( this ).find('i').hasClass( "fa-chevron-right" )){
            $( this ).find('i').removeClass( "fa-chevron-right" );  
            $( this ).find('i').addClass( "fa-chevron-down" );
        }
        else {
            $( this ).find('i').removeClass( "fa-chevron-down" );    
            $( this ).find('i').addClass( "fa-chevron-right" );            
        }
        
        $( this ).find('p').slideToggle( "slow", function() {
          // Animation complete.
        });
    });	
  
    //-------------------------------------------------------------------------------------------    
    $('.biolab-labortiries-search-items p').on('click',function () {
        
        $( this ).addClass('.biolab-labortiries-search-item-active');
        $('.biolab-labortiries-search-box-select').text($( this ).text());
        $('.biolab-labortiries-search-items').hide();
        
        var code = parseInt($(this).attr("id"));
        
        $('.biolab-laboratirie').each(function() {
            if ($(this).hasClass("biolab-laboratirie-region-" + code)) {
                $(this).show();
            }	else 	$(this).hide();
        });
  
    });


    //---------------------------------------------------------------------------------------
    $(".Services-and-payments-tab").on('click',function () {
        $(".Invoices-tab").removeClass("ccore-personal_panel-block-inner-tab-active");
        $(this).addClass("ccore-personal_panel-block-inner-tab-active");
        $(".Invoices").hide();
        $(".Services-and-payments").show();
    });
    $(".Invoices-tab").on('click',function () {
        $(".Services-and-payments-tab").removeClass("ccore-personal_panel-block-inner-tab-active");
        $(this).addClass("ccore-personal_panel-block-inner-tab-active");
        $(".Services-and-payments").hide();
        $(".Invoices").show();
    });

    $(".All-tab").on('click',function () {
        $(".Sent-tab").removeClass("ccore-personal_panel-block-inner-tab-active");
        $(".Received-tab").removeClass("ccore-personal_panel-block-inner-tab-active");
        $(".Transferred-tab").removeClass("ccore-personal_panel-block-inner-tab-active");
        $(this).addClass("ccore-personal_panel-block-inner-tab-active");
        $(".Sent").hide();
        $(".Received").hide();
        $(".Transferred").hide();
        $(".All").show();
    });
    $(".Sent-tab").on('click',function () {
        $(".All-tab").removeClass("ccore-personal_panel-block-inner-tab-active");
        $(".Received-tab").removeClass("ccore-personal_panel-block-inner-tab-active");
        $(".Transferred-tab").removeClass("ccore-personal_panel-block-inner-tab-active");
        $(this).addClass("ccore-personal_panel-block-inner-tab-active");
        $(".All").hide();
        $(".Received").hide();
        $(".Transferred").hide();
        $(".Sent").show();
    });
    $(".Received-tab").on('click',function () {
        $(".Sent-tab").removeClass("ccore-personal_panel-block-inner-tab-active");
        $(".All-tab").removeClass("ccore-personal_panel-block-inner-tab-active");
        $(".Transferred-tab").removeClass("ccore-personal_panel-block-inner-tab-active");
        $(this).addClass("ccore-personal_panel-block-inner-tab-active");
        $(".Sent").hide();
        $(".All").hide();
        $(".Transferred").hide();
        $(".Received").show();
    });
    $(".Transferred-tab").on('click',function () {
        $(".Sent-tab").removeClass("ccore-personal_panel-block-inner-tab-active");
        $(".Received-tab").removeClass("ccore-personal_panel-block-inner-tab-active");
        $(".All-tab").removeClass("ccore-personal_panel-block-inner-tab-active");
        $(this).addClass("ccore-personal_panel-block-inner-tab-active");
        $(".Sent").hide();
        $(".Received").hide();
        $(".All").hide();
        $(".Transferred").show();
    });
    //-------------------------------------------------------------------------------------------

    $('.ccore-demo-Store-img').on('click',function () {

        href_temp =$('.ccore-demo-Store-main_img').find('img').attr('src');
        href_temp_2 =$( this ).find('img').attr('src');

        $( this ).find('img').attr("src", href_temp);
        $('.ccore-demo-Store-main_img').find('img').attr("src", href_temp_2);

    });

    $('.ccore-demo-Store-checkout-pay_with-item').on('click',function () {
        $(".ccore-demo-Store-checkout-pay_with-item").removeClass("ccore-demo-Store-checkout-pay_with-item-active");
        $(this).addClass("ccore-demo-Store-checkout-pay_with-item-active");
    });

});

//---------------------------------------------------------------

	
