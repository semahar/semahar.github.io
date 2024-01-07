"use strict";
document.addEventListener("DOMContentLoaded", function () {

  $(function ($) {

    // preloader
    $(".preloader").delay(300).animate({
      "opacity": "0"
    }, 500, function () {
      $(".preloader").css("display", "none");
    });

    // Click to Scroll Top
    var ScrollTop = $(".scrollToTop");
    $('.scrollToTop').on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    });

    // window on scroll function
    $(window).on("scroll", function () {

      // Sticky Header
      var fixed_top = $(".header-section");
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
          fixed_top.addClass("animated fadeInDown header-fixed");
        }
        else {
          fixed_top.removeClass("animated fadeInDown header-fixed");
        }
      });

      // Check Scroll 
      if ($(this).scrollTop() < 600) {
        ScrollTop.removeClass("active");
      } else {
        ScrollTop.addClass("active");
      }

      // Odometer Init 
      let windowHeight = $(window).height();
			$('.odometer').children().each(function() {
				if ($(this).isInViewport({"tolerance" :windowHeight,"toleranceForLast": windowHeight, "debug": false})){
          var section = $(this).closest(".counters");
          section.find(".odometer").each(function() {
            $(this).html($(this).attr("data-odometer-final"));
          });
        }
			});

      // circle img rotation
      var images = document.querySelectorAll(".circle-area img");
      images.forEach(function(image) {
        var rotation = window.scrollY / 4;
        image.style.transform = "rotate(" + rotation + "deg)";
      });

    });

    // mobile menubar
    const mobileSize = window.matchMedia("(max-width: 991px)");
    function handleMediaScreen(e) {
      if (e.matches) {
        $(".navbar-nav .sub").addClass("dropdown-menu");
        $(".navbar-nav .dropdown").removeClass("show-dropdown");
        $(".navbar-nav .sub").removeClass("sub-menu");
    
        $(".navbar-nav .dropdown-menu").parent("li").on('click', function (e) {
            if (e.target.className !== "dropdown-item") {
              $(this).find(">.dropdown-menu").toggle(300);
              e.stopPropagation();
            }
          });
      } else {
        $(".navbar-nav .dropdown-menu").parent("li").off("click");
        $("sub-dropdown").off("click");
    
        $(".navbar-nav .dropdown-menu").show();
        $(".navbar-nav .dropdown").addClass("show-dropdown");
        $(".navbar-nav .sub").addClass("sub-menu");
        $(".navbar-nav .sub").removeClass("dropdown-menu");
      }
    }
    handleMediaScreen(mobileSize);
    mobileSize.addEventListener("change", handleMediaScreen);

    // Navbar Custom Menu Button 
    $('.navbar-toggler').on('click', function () {
      $(this).toggleClass('open');
    });
    
    // Box Style 
    const targetBtn = document.querySelectorAll('.box-style')
    if (targetBtn) {
      targetBtn.forEach((element) => {
        element.addEventListener('mousemove', (e) => {
          const x = e.offsetX + 'px';
          const y = e.offsetY + 'px';
          element.style.setProperty('--x', x);
          element.style.setProperty('--y', y);
        })
      })
    }

    // Circle Text
    const text = document.querySelector(".circle-text.first p");
    const text2 = document.querySelector(".circle-text.second p");
    const text3 = document.querySelector(".circle-text.third p");
    if (text) {
      text.innerHTML = text.innerText.split('').map(
        (char, i) =>
          `<span style="transform:rotate(${i * 10}deg)">${char}</span>`
      ).join('');
    }
    if (text2) {
      text2.innerHTML = text2.innerText.split('').map(
        (char, i) =>
          `<span style="transform:rotate(${i * 14}deg)">${char}</span>`
      ).join('');
    }
    if (text3) {
      text3.innerHTML = text3.innerText.split('').map(
        (char, i) =>
          `<span style="transform:rotate(${i * 12}deg)">${char}</span>`
      ).join('');
    }

    // progress bar
    $('.progress-done').each(function() {
      var $progress = $(this);
      var donePercentage = $progress.data('done') + '%';
      $progress.css('width', donePercentage);
      $progress.css('opacity', 1);
    });

    // read-more-toggler
    var readMoreBtn = $('.read-more-btn');
    var readMoreContent = $('.read-more-content');
    $(readMoreBtn).on('click', function () {
      $(readMoreContent).toggleClass('active');
      $(this).parent().toggleClass('btn-overlay');
      if ($(this).parent().hasClass("btn-overlay")) {
        $(this).text("Read More");
      } else {
        $(this).text("Okay, I get the point");
      }
    });

    // sidebar-toggler
    var primarySidebar = $('.sidebar-toggler .sidebar-head');
    $('.sidebar-toggler .toggler-btn').on('click', function () {
      $(this).closest('.sidebar-head').toggleClass('active');
      if (!$('.sidebar-head').hasClass('active')) {
        setTimeout(function() {
          primarySidebar.css("height", "24px");
        }, 550);
      } else {
        primarySidebar.css("height", "100%");
      }
    });

    // sidebar-toggler
    $('.sidebar-wrapper .sidebar-item-head').on('click', function () {
      $(this).siblings('.sidebar-single-body').slideToggle();
      $(this).toggleClass('active');
    });

    // filters-area
    $('.filters-area li').on('click', function () {
      $(this).addClass('d-none');
    });
    $('.filters-area button').on('click', function () {
      $(this).siblings('ul').find('li').addClass('d-none');
    });

    // Social Item Remove
    $('.social-hide-btn').on('click', function () {
      $(this).parents(".single-box").toggleClass('active');
      if ($('.single-box').hasClass("active")) {
        $('.active .social-hide-btn i').html("remove");
      } else {
        $('.social-hide-btn i').html("add");
      }
    });

    // Cart Item Remove
    $('.shop-cart .btn-item button').on('click', function () {
      $(this).closest("tr").slideUp();
    });
    $('.shop-cart .empty-cart').on('click', function () {
      $(".shop-cart tbody tr").addClass('d-none');
    });
    $('.cart-area .remove').on('click', function () {
      $(this).closest(".single-box").slideUp();
    });

    // sidebar Close
    $('.sidebar-toggler .contact-close').on('click', function () {
      $('.sidebar-toggler .sidebar-head').removeClass('active');
    });

    // Profile Close
    $('.primary-close').on('click', function () {
      $('.primary-sidebar').removeClass('active');
    });

    // comments-area
    $('.comments-area .reply-btn').on('click', function () {
      $(this).closest(".info-area").find(".comment-form").slideToggle();
    });

    // fill strok text 
    $('.fill-stroke-text').on('mouseenter mouseleave', function () {
      $(this).toggleClass('dataContent');
      const strokeData = $('.fill-stroke-text.dataContent')[0].innerText;
      $(this).attr('data-content', strokeData);
    });

    // Current Year
    $(".currentYear").text(new Date().getFullYear());

    // Mouse Follower
    const follower = document.querySelector(".mouse-follower .cursor-outline");
    const dot = document.querySelector(".mouse-follower .cursor-dot");
    window.addEventListener("mousemove", (e) => {
      follower.animate(
        [
          {
            opacity: 1,
            left: `${e.clientX}px`,
            top: `${e.clientY}px`,
            easing: "ease-in-out"
          }
        ],
        {
          duration: 3000,
          fill: "forwards"
        }
      );
      dot.animate(
        [
          {
            opacity: 1,
            left: `${e.clientX}px`,
            top: `${e.clientY}px`,
            easing: "ease-in-out"
          }
        ],
        {
          duration: 1500,
          fill: "forwards"
        }
      );
    });
    
    // Mouse Follower Hide Function
    $("a, button").on('mouseenter mouseleave', function () {
      $('.mouse-follower').toggleClass('hide-cursor');
    });

    // Mouse Follower slider icon Function
    var newElement = $('<i class="material-symbols-outlined fs-four"> arrow_range </i>');
    $(".slider-icon-area").on('mouseleave', function () {
      $('.mouse-follower').removeClass('slider-icon-active');
      newElement.remove();
    });
    $(".slider-icon-area").on('mouseenter', function () {
      $('.mouse-follower').addClass('slider-icon-active');
      $('.slider-icon-active .cursor-outline').append(newElement);
    });

    // Header Active
    $('.single-item .cmn-head').on('click', function () {
      $(this).parents('.single-item').toggleClass('active');
      $(this).parents('.single-item').siblings().removeClass('active');
    });

    // Cart Item Remove
    $('.cart-section table .btn-item i').on('click', function () {
      $(this).parents('tr').slideToggle();
    });

    // Custom Tabs
    $(".tabLinks .nav-links").each(function () {
      var targetTab = $(this).closest(".singleTab");
      targetTab.find(".tabLinks .nav-links").each(function () {
        var navBtn = targetTab.find(".tabLinks .nav-links");
        navBtn.on('click', function () {
          navBtn.removeClass('active');
          $(this).addClass('active');
          var indexNum = $(this).closest("li").index();
          var tabContent = targetTab.find(".tabContents .tabItem");
          $(tabContent).removeClass('active');
          $(tabContent).eq(indexNum).addClass('active');
        });
      });
    });
    
    // tabLinks add active 
    $('.tabLinks .nav-links').on('mouseenter', function () {
        $(this).addClass('active');
        $('.tabLinks .nav-links').not(this).removeClass('active');
      }
    );

    // custom Accordion
    $('.accordion-single .header-area').on('click', function () {
      if ($(this).closest(".accordion-single").hasClass("active")) {
          $(this).closest(".accordion-single").removeClass("active");
          $(this).next(".content-area").slideUp();
      } else {
          $(".accordion-single").removeClass("active");
          $(this).closest(".accordion-single").addClass("active");
          $(".content-area").not($(this).next(".content-area")).slideUp();
          $(this).next(".content-area").slideToggle();
      }
    });

    // category-name-wrap
    $('.category-name-wrap li').on('mouseenter', function () {
      $(".category-name-wrap li a").removeClass("active");
      $(this).find("a").addClass("active");
      var catIndex = $(this).index();
      $(".gallery-left .category-gallery").removeClass("active");
      $(".gallery-left .category-gallery").eq(catIndex).addClass("active");
      $(".gallery-right .category-gallery").removeClass("active");
      $(".gallery-right .category-gallery").eq(catIndex).addClass("active");
    });

    // stay active 
    $('.item-single li').on('mouseenter', function () {
        $(this).addClass('active');
        $('.item-single li').not(this).removeClass('active');
      }
    );
    
    // product-size active 
    $('.product-size .available').on('mouseenter', function () {
        $(this).addClass('active');
        $('.product-size .available').not(this).removeClass('active');
      }
    );
    
    // bg-img-change
    $('.bg-img-change .single-box').on('mouseenter', function () {
      $(".bg-img-change .single-box").removeClass("active");
      $(this).addClass("active");
      var activeBoxNumber = $(".bg-img-change .single-box").index($(this)) + 1;
      var bgImg = $(".bg-img-change");
      if(activeBoxNumber == 1){
        var newImageUrl = "assets/images/features-bg-img-1.png";
      }else if(activeBoxNumber == 2){
        var newImageUrl = "assets/images/blog-img-17.png";
      }else if(activeBoxNumber == 3){
        var newImageUrl = "assets/images/blog-img-18.png";
      }else{
        var newImageUrl = "assets/images/blog-img-19.png";
      }
      bgImg.css("background-image", 'url("' + newImageUrl + '")');
    });

    // grid and list style
    $(".list-grid-toggler").on("click", "button", function() {
      $(this).addClass('active');
      $('.list-grid-toggler button').not(this).removeClass('active');
      $('.all-items .single-box').toggleClass('fadeOne');
      $('.all-items .single-box').toggleClass('fadeTwo');
      if ($(this).hasClass("grid-btn")) {
        $('.all-items .single-box').removeClass('list');
      } else if ($(this).hasClass("list-btn")) {
        $('.all-items .single-box').addClass('list');
      }
    });

    // Navbar Active Class Only for HTML
    var curUrl = $(location).attr('href');
    var terSegments = curUrl.split("/");
    var desired_segment = terSegments[terSegments.length - 1];
    var removeGarbage = desired_segment.split(".html")[0] + ".html";
    var checkLink = $('.navbar-nav a[href="' + removeGarbage + '"]');
    var targetClass = checkLink.addClass('active');
    targetClass.parents(".sub-dropdown").find("button").first().addClass('active');
    targetClass.parents(".show-dropdown").find("button").first().addClass('active');

    // Password Show Hide
    $('.show-hide-pass').on('click', function () {
      var passwordInput = $($(this).siblings(".pass-box input"));
      var icon = $(this);
      if (passwordInput.attr("type") == "password") {
          passwordInput.attr("type", "text");
          icon.html("visibility");
        } else {
          passwordInput.attr("type", "password");
          icon.html("visibility_off");
      }
    });

    // Dropdown Active Remove
    $("section, .close-btn").on('click', function(){
      $('.single-item').removeClass('active');
    });

    // Input Increase
    var minVal = 1, maxVal = 20;
    $(".increaseQty").on('click', function(){
      var $parentElm = $(this).parents(".qtySelector");
      $(this).addClass("clicked");
      setTimeout(function(){
          $(".clicked").removeClass("clicked");
      },100);
      var value = $parentElm.find(".qtyValue").val();
      if (value < maxVal) {
          value++;
      }
      $parentElm.find(".qtyValue").val(value);
    });
    $(".decreaseQty").on('click', function(){
      var $parentElm = $(this).parents(".qtySelector");
      $(this).addClass("clicked");
      setTimeout(function(){
          $(".clicked").removeClass("clicked");
      },100);
      var value = $parentElm.find(".qtyValue").val();
      if (value > 1) {
          value--;
      }
      $parentElm.find(".qtyValue").val(value);
    });

  });

});