"use strict";
document.addEventListener("DOMContentLoaded", function () {

  $(function ($) {

    /* niceSelect */
    $("select").niceSelect();

    /* Magnific Popup video */
    if (document.querySelector('.popupvideo') !== null) {
      $('.popupvideo').magnificPopup({
        disableOn: 300,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
      });
    }
    
    // wedding-listing-slider
    let weddingSlider = document.querySelectorAll('.single-box .wedding-listing-slider');
    weddingSlider.forEach(function(weddingSlider) {
      var swiper = new Swiper(weddingSlider, {
        loop: true,
        slidesPerView: 1,
        slidesToShow: 1,
        paginationClickable: true,
        spaceBetween: 12,
        navigation: {
          nextEl: weddingSlider.querySelector('.ara-next'),
          prevEl: weddingSlider.querySelector('.ara-prev'),
        },
        pagination: {
          el: weddingSlider.querySelector('.slider-pagination'),
          clickable: true,
        },
      });
    });
    
    // wedding-sidebar-slider
    let weddingSidebarSlider = document.querySelectorAll('.wedding-sidebar-slider');
    weddingSidebarSlider.forEach(function(weddingSidebarSlider) {
      var swiper = new Swiper(weddingSidebarSlider, {
        loop: true,
        slidesPerView: 1,
        slidesToShow: 1,
        paginationClickable: true,
        spaceBetween: 12,
        navigation: {
          nextEl: weddingSidebarSlider.querySelector('.ara-next'),
          prevEl: weddingSidebarSlider.querySelector('.ara-prev'),
        },
      });
    });

    // planning-carousel-slider 
    let planningCarousel = document.querySelector('.wedding-planning-carousel');
    let planningSlider = document.querySelector('.wedding-planning-slider');
    if(planningSlider){
      var swiper = new Swiper(planningCarousel, {
        slidesPerView: 5,
        watchSlidesProgress: true,
        direction: "vertical",
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
      });
      var swiper = new Swiper(planningSlider, {
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        thumbs: {
          swiper: swiper,
        },
      });
    }
    
    // planning-carousel-slider 
    let shopDetailCarousel = document.querySelector('.shop-details-carousel');
    let shopDetailSlider = document.querySelector('.shop-details-slider');
    if(shopDetailSlider){
      var swiper = new Swiper(shopDetailCarousel, {
        slidesPerView: 8,
        loop: true,
        spaceBetween: 12,

        watchSlidesProgress: true,
        direction: "vertical",
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
      });
      var swiper = new Swiper(shopDetailSlider, {
        loop: true,
        direction: "vertical",
        watchSlidesProgress: true,
        
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        thumbs: {
          swiper: swiper,
        },
      });
    }

    // testimonial-slider
    let testimonialSlider = document.querySelector('.testimonial-slider');
    let testimonialString = document.querySelector('.testimonial-head');
    if(testimonialSlider){
      const swiper = new Swiper(testimonialSlider, {
        loop: true,
        autoplay: 1000,
        slidesPerView: 1,
        slidesToShow: 1,
        paginationClickable: true,
        spaceBetween: 5,
        navigation: {
          nextEl: testimonialString.querySelector('.ara-next'),
          prevEl: testimonialString.querySelector('.ara-prev'),
        },
        pagination: {
          el: testimonialString.querySelector('.slider-pagination'),
          type: 'custom',
          clickable: true,
          renderCustom: function (swiper, current, total) {
              testimonialString.querySelector('.curString').innerHTML = ('0' + (current + 0)).slice(-2);
              testimonialString.querySelector('.totalString').innerHTML = total;
          }
        }
      });
    }

    // completedProjects-slider
    let completedProjectsSlider = document.querySelector('.completed-projects-slider');
    let completedProjectsString = document.querySelector('.completed-projects-head');
    if(completedProjectsSlider){
      const swiper = new Swiper(completedProjectsSlider, {
        loop: true,
        autoplay: 1000,
        slidesPerView: 1,
        slidesToShow: 1,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 24,
        navigation: {
          nextEl: completedProjectsString.querySelector('.ara-next'),
          prevEl: completedProjectsString.querySelector('.ara-prev'),
        },
        pagination: {
          el: completedProjectsString.querySelector('.slider-pagination'),
          type: 'custom',
          clickable: true,
          renderCustom: function (swiper, current, total) {
              completedProjectsString.querySelector('.curString').innerHTML = ('0' + (current + 0)).slice(-2);
              completedProjectsString.querySelector('.totalString').innerHTML = total;
          }
        },
        breakpoints: {
          1200: {
              slidesPerView: 2.005,
          },
          768: {
            slidesPerView: 1.5,
          },
          575: {
              slidesPerView: 1.3,
          },
        }
      });
    }

    // testimonialSecond-slider
    let testimonialSecondSlider = document.querySelector('.testimonial-second-slider');
    let testimonialSecondString = document.querySelector('.testimonial-second-head');
    if(testimonialSecondSlider){
      const swiper = new Swiper(testimonialSecondSlider, {
        loop: true,
        autoplay: 1000,
        slidesPerView: 1,
        slidesToShow: 1,
        paginationClickable: true,
        spaceBetween: 5,
        navigation: {
          nextEl: testimonialSecondString.querySelector('.ara-next'),
          prevEl: testimonialSecondString.querySelector('.ara-prev'),
        },
        pagination: {
          el: testimonialSecondSlider.querySelector('.slider-pagination'),
          type: 'custom',
          clickable: true,
          renderCustom: function (swiper, current, total) {
              const allNode = testimonialSecondSlider.querySelectorAll(".customPagination");
              allNode.forEach((singleElement, index) => {
                singleElement.querySelector('.curString').innerHTML = '0'+current;
                singleElement.querySelector('.totalString').innerHTML = '0'+total;
              });
          }
        },
      });
      const nextButtons = document.querySelectorAll('.ara-slide-next');
      const prevButtons = document.querySelectorAll('.ara-slide-prev');
      nextButtons.forEach((button) => {
        button.addEventListener('click', function () {
          testimonialSecondString.querySelector('.ara-next').click();
        });
      });
      prevButtons.forEach((button) => {
        button.addEventListener('click', function () {
          testimonialSecondString.querySelector('.ara-prev').click();
        });
      });
    }

    // trending-destinations-carousel
    let trendingDestinationsCarousel = document.querySelector('.trending-destinations-carousel');
    if(trendingDestinationsCarousel){
      const swiper = new Swiper(trendingDestinationsCarousel, {
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        spaceBetween: 24,
        slidesPerView: 1,
        paginationClickable: true,
        centeredSlides: true,
        clickable: true,
        breakpoints: {
          1400: {
              slidesPerView: 5.4,
          },
          1200: {
              slidesPerView: 4,
          },
          768: {
              slidesPerView: 3,
          },
          480: {
              slidesPerView: 2,
          },
        }
      });
    }

    // footer-carousel
    let footerCarousel = document.querySelector('.footer-carousel');
    if(footerCarousel){
      const swiper = new Swiper(footerCarousel, {
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        spaceBetween: 24,
        slidesPerView: 1,
        paginationClickable: true,
        centeredSlides: true,
        clickable: true,
        breakpoints: {
          1400: {
              slidesPerView: 5.5,
          },
          1200: {
              slidesPerView: 4,
          },
          768: {
              slidesPerView: 3,
          },
          480: {
              slidesPerView: 2,
          },
        }
      });
    }

    // deal-wedding-carousel
    let dealWeddingCarousel = document.querySelector('.deal-wedding-carousel');
    let dealWeddingBtn = document.querySelector('.deal-wedding-btn');
    if(dealWeddingCarousel){
      const swiper = new Swiper(dealWeddingCarousel, {
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        spaceBetween: 24,
        slidesPerView: 1,
        paginationClickable: true,
        navigation: {
          nextEl: dealWeddingBtn.querySelector('.ara-next'),
          prevEl: dealWeddingBtn.querySelector('.ara-prev'),
        },
        breakpoints: {
          1200: {
              slidesPerView: 3,
          },
          480: {
              slidesPerView: 2,
          },
        }
      });
    }

    // browse-category-carousel
    let browseCategoryCarousel = document.querySelector('.browse-category-carousel');
    let browseCategoryBtn = document.querySelector('.browse-category-btn');
    if(browseCategoryCarousel){
      const swiper = new Swiper(browseCategoryCarousel, {
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        spaceBetween: 24,
        slidesPerView: 1,
        paginationClickable: true,
        navigation: {
          nextEl: browseCategoryBtn.querySelector('.ara-next'),
          prevEl: browseCategoryBtn.querySelector('.ara-prev'),
        },
        breakpoints: {
          1400: {
              slidesPerView: 6,
          },
          1200: {
              slidesPerView: 4,
          },
          768: {
              slidesPerView: 3,
          },
          480: {
              slidesPerView: 2,
          },
        }
      });
    }

    // venues-area-carousel
    let venuesAreaCarousel = document.querySelector('.venues-area-carousel');
    let venuesAreaBtn = document.querySelector('.venues-area-btn');
    if(venuesAreaCarousel){
      const swiper = new Swiper(venuesAreaCarousel, {
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        spaceBetween: 24,
        slidesPerView: 1,
        paginationClickable: true,
        navigation: {
          nextEl: venuesAreaBtn.querySelector('.ara-next'),
          prevEl: venuesAreaBtn.querySelector('.ara-prev'),
        },
        breakpoints: {
          1200: {
              slidesPerView: 4,
          },
          992: {
              slidesPerView: 3,
          },
          480: {
              slidesPerView: 2,
          },
        }
      });
    }

    // your-wedding-carousel
    let yourWeddingCarousel = document.querySelector('.your-wedding-carousel');
    let yourWeddingBtn = document.querySelector('.your-wedding-btn');
    if(yourWeddingCarousel){
      const swiper = new Swiper(yourWeddingCarousel, {
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        spaceBetween: 24,
        slidesPerView: 1,
        paginationClickable: true,
        navigation: {
          nextEl: yourWeddingBtn.querySelector('.ara-next'),
          prevEl: yourWeddingBtn.querySelector('.ara-prev'),
        },
        breakpoints: {
          1400: {
              slidesPerView: 4,
          },
          992: {
              slidesPerView: 3,
          },
          480: {
              slidesPerView: 2,
          },
        }
      });
    }

    // wedding-vendors-carousel
    let weddingVendorsCarousel = document.querySelector('.wedding-vendors-carousel');
    let weddingVendorsBtn = document.querySelector('.wedding-vendors-btn');
    if(weddingVendorsCarousel){
      const swiper = new Swiper(weddingVendorsCarousel, {
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        spaceBetween: 24,
        slidesPerView: 1,
        paginationClickable: true,
        navigation: {
          nextEl: weddingVendorsBtn.querySelector('.ara-next'),
          prevEl: weddingVendorsBtn.querySelector('.ara-prev'),
        },
        breakpoints: {
          1200: {
              slidesPerView: 4,
          },
          992: {
              slidesPerView: 3,
          },
          480: {
              slidesPerView: 2,
          },
        }
      });
    }

    // personalize-gifts-carousel
    let personalizeGiftsCarousel = document.querySelector('.personalize-gifts-carousel');
    let personalizeGiftsBtn = document.querySelector('.personalize-gifts-btn');
    if(personalizeGiftsCarousel){
      const swiper = new Swiper(personalizeGiftsCarousel, {
        loop: false,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        spaceBetween: 24,
        slidesPerView: 1,
        paginationClickable: true,
        navigation: {
          nextEl: personalizeGiftsBtn.querySelector('.ara-next'),
          prevEl: personalizeGiftsBtn.querySelector('.ara-prev'),
        },
        scrollbar: {
          el: personalizeGiftsCarousel.querySelector('.swiper-scrollbar'),
          hide: true,
        },
        breakpoints: {
          1200: {
              slidesPerView: 4,
          },
          992: {
              slidesPerView: 3,
          },
          480: {
              slidesPerView: 2,
          },
        }
      });
    }

    // personalize-gifts-carousel
    let personalizeGiftsSecCarousel = document.querySelector('.personalize-gifts-sec-carousel');
    let personalizeGiftsSecBtn = document.querySelector('.personalize-gifts-sec-btn');
    if(personalizeGiftsSecCarousel){
      const swiper = new Swiper(personalizeGiftsSecCarousel, {
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        spaceBetween: 24,
        slidesPerView: 1,
        paginationClickable: true,
        navigation: {
          nextEl: personalizeGiftsSecBtn.querySelector('.ara-next'),
          prevEl: personalizeGiftsSecBtn.querySelector('.ara-prev'),
        },
        breakpoints: {
          1400: {
              slidesPerView: 6,
          },
          1200: {
              slidesPerView: 4,
          },
          768: {
              slidesPerView: 3,
          },
          480: {
              slidesPerView: 2,
          },
        }
      });
    }

    // happy-couple-carousel
    let happyCoupleCarousel = document.querySelector('.happy-couple-carousel');
    let happyCoupleBtn = document.querySelector('.happy-couple-btn');
    if(happyCoupleCarousel){
      const swiper = new Swiper(happyCoupleCarousel, {
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        spaceBetween: 24,
        slidesPerView: 1,
        paginationClickable: true,
        navigation: {
          nextEl: happyCoupleBtn.querySelector('.ara-next'),
          prevEl: happyCoupleBtn.querySelector('.ara-prev'),
        },
        breakpoints: {
          768: {
              slidesPerView: 2,
          },
        }
      });
    }

    // active-users-carousel
    let activeUsersCarousel = document.querySelector('.active-users-carousel');
    let activeUsersBtn = document.querySelector('.active-users-btn');
    if(activeUsersCarousel){
      const swiper = new Swiper(activeUsersCarousel, {
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        spaceBetween: 24,
        slidesPerView: 1,
        paginationClickable: true,
        navigation: {
          nextEl: activeUsersBtn.querySelector('.ara-next'),
          prevEl: activeUsersBtn.querySelector('.ara-prev'),
        },
        breakpoints: {
          1200: {
              slidesPerView: 4,
          },
          992: {
              slidesPerView: 3,
          },
          480: {
              slidesPerView: 2,
          },
        }
      });
    }

    // banner-category-carousel
    let bannerCategoryCarousel = document.querySelector('.banner-category-carousel');
    if(bannerCategoryCarousel){
      const swiper = new Swiper(bannerCategoryCarousel, {
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        spaceBetween: 24,
        slidesPerView: 1,
        paginationClickable: true,
        breakpoints: {
          1400: {
              slidesPerView: 6,
          },
          1200: {
              slidesPerView: 4,
          },
          768: {
              slidesPerView: 3,
          },
          480: {
              slidesPerView: 2,
          },
        }
      });
    }

    // history-love-carousel
    let historyLoveBtn = document.querySelector('.history-love-btn');
    let historyLoveCarousel = document.querySelector('.history-love-carousel');
    if(historyLoveCarousel){
      const swiper = new Swiper(historyLoveCarousel, {
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        spaceBetween: 24,
        slidesPerView: 1,
        paginationClickable: true,
        navigation: {
          nextEl: historyLoveBtn.querySelector('.ara-next'),
          prevEl: historyLoveBtn.querySelector('.ara-prev'),
        },
        breakpoints: {
          1700: {
              slidesPerView: 6,
          },
          1400: {
              slidesPerView: 5,
          },
          1200: {
              slidesPerView: 4,
          },
          768: {
              slidesPerView: 3,
          },
          480: {
              slidesPerView: 2,
          },
        }
      });
    }

    // partners-carousel
    let partnersCarousel = document.querySelector('.partners-carousel');
    if(partnersCarousel){
      const swiper = new Swiper(partnersCarousel, {
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        spaceBetween: 24,
        slidesPerView: 2,
        paginationClickable: true,
        breakpoints: {
          1400: {
            spaceBetween: 80,
            slidesPerView: 7,
          },
          1200: {
            spaceBetween: 60,
            slidesPerView: 6,
          },
          768: {
            spaceBetween: 40,
            slidesPerView: 5,
          },
          480: {
            spaceBetween: 32,
            slidesPerView: 3,
          },
        }
      });
    }

    // trending-wedding-carousel
    let trendingWeddingCarousel = document.querySelector('.trending-wedding-carousel');
    if(trendingWeddingCarousel){
      const swiper = new Swiper(trendingWeddingCarousel, {
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        spaceBetween: 24,
        slidesPerView: 1,
        paginationClickable: true,
        breakpoints: {
          1400: {
              slidesPerView: 6,
          },
          1200: {
              slidesPerView: 4,
          },
          768: {
              slidesPerView: 3,
          },
          480: {
              slidesPerView: 2,
          },
        }
      });
    }

    // luxury-wedding-carousel-slider 
    let luxuryWeddingCarousel = document.querySelector('.luxury-wedding-carousel');
    let luxuryWeddingSlider = document.querySelector('.luxury-wedding-slider');
    let luxuryWeddingString = document.querySelector('.luxury-wedding-head');
    if(luxuryWeddingSlider){
      var swiper = new Swiper(luxuryWeddingCarousel, {
        slidesPerView: 1,
        spaceBetween: 24,
        pagination: {
          el: luxuryWeddingString.querySelector('.slider-pagination'),
          type: 'custom',
          clickable: true,
          renderCustom: function (swiper, current, total) {
              luxuryWeddingString.querySelector('.curString').innerHTML = ('0' + (current + 0)).slice(-2);
              luxuryWeddingString.querySelector('.totalString').innerHTML = ('0' + total);
          }
        },
        breakpoints: {
          480: {
              slidesPerView: 2,
          },
        }
      });
      var swiper = new Swiper(luxuryWeddingSlider, {
        loop: false,
        slidesPerView: 1,
        thumbs: {
          swiper: swiper,
        },
      });
    }

    /* Countdown js */
    if (document.querySelector('.countdown') !== null) {
      $('.countdown').downCount({
        date: '12/31/2029 11:59:59',
        offset: +10
      });
    }

    /* price-range */
    if (document.querySelector('#price-range') !== null) {
      $("#price-range").slider({
        step: 1,
        range: true,
        min: 0,
        max: 2000,
        values: [20, 1500],
        slide: function (event, ui)
        {$("#priceRange").val(ui.values[0] + " - " + ui.values[1]);} 
      });
      $("#priceRange").val($("#price-range").slider("values", 0) + " - " + $("#price-range").slider("values", 1));
    }

    // datepicker init 
    $('.datepicker input').datepicker({
      dateFormat: 'yy-mm-dd',
      showButtonPanel: true,
      changeMonth: true,
      changeYear: true,
      defaultDate: +0,
      showAnim: "fold"
    });
    $('.datepicker.availability').datepicker({
      dateFormat: 'yy-mm-dd',
      showButtonPanel: true,
      changeMonth: true,
      changeYear: true,
      defaultDate: +0,
      showAnim: "fold"
    });

    // header-carousel
    let headerCarousel = document.querySelector('.header-carousel');
    if(headerCarousel){
      const swiper = new Swiper(headerCarousel, {
        loop: true,
        autoplay: 1000,
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 20,
        navigation: {
          nextEl: headerCarousel.querySelector('.ara-next'),
          prevEl: headerCarousel.querySelector('.ara-prev'),
        },
        pagination: {
          el: headerCarousel.querySelector('.slider-pagination'),
          type: 'custom',
          clickable: true,
          renderCustom: function (swiper, current, total) {
            const allNode = headerCarousel.querySelectorAll(".customPagination");
            allNode.forEach((singleElement, index) => {
              singleElement.querySelector('.curString').innerHTML = '0'+current;
              singleElement.querySelector('.totalString').innerHTML = '0'+total;
            });
          }
        },
        breakpoints: {
          480: {
              slidesPerView: 1,
              spaceBetween: 10
          }
        }
      });
    }

    // review-carousel
    let reviewCarousel = document.querySelector('.review-carousel');
    if(reviewCarousel){
      const swiper = new Swiper(reviewCarousel, {
        loop: true,
        autoplay: 1000,
        slidesPerView: 1,
        slidesToShow: 1,
        paginationClickable: true,
        spaceBetween: 15,
        breakpoints: {
          575: {
              slidesPerView: 1,
              spaceBetween: 30
          }
        }
      });
    }

    // about-carousel
    let aboutCarousel = document.querySelector('.about-carousel');
    if(aboutCarousel){
      const swiper = new Swiper(aboutCarousel, {
        loop: true,
        autoplay: 1000,
        slidesPerView: 1,
        slidesToShow: 1,
        paginationClickable: true,
        spaceBetween: 15,
        navigation: {
          nextEl: document.querySelector('.about-section .ara-next'),
          prevEl: document.querySelector('.about-section .ara-prev'),
        },
        breakpoints: {
          575: {
              slidesPerView: 1,
              spaceBetween: 30
          }
        }
      });
    }

    // team-carousel
    let teamCarousel = document.querySelector('.team-carousel');
    if(teamCarousel){
      const swiper = new Swiper(teamCarousel, {
        loop: true,
        autoplay: 1000,
        slidesPerView: 1,
        slidesToShow: 1,
        paginationClickable: true,
        spaceBetween: 20,
        navigation: {
          nextEl: document.querySelector('.team-section .ara-next'),
          prevEl: document.querySelector('.team-section .ara-prev'),
        },
        breakpoints: {
          1500: {
              slidesPerView: 4,
              spaceBetween: 20
          },
          1200: {
              slidesPerView: 3,
              spaceBetween: 20
          },
          1000: {
              slidesPerView: 4,
              spaceBetween: 20
          },
          768: {
              slidesPerView: 3,
              spaceBetween: 20
          },
          480: {
              slidesPerView: 2,
              spaceBetween: 20
          },
        }
      });
    }

    // blog-carousel
    let blogCarousel = document.querySelector('.blog-carousel');
    if(blogCarousel){
      const swiper = new Swiper(blogCarousel, {
        loop: true,
        autoplay: 1000,
        slidesPerView: 1,
        slidesToShow: 1,
        paginationClickable: true,
        spaceBetween: 20,
        navigation: {
          nextEl: document.querySelector('.blog-section .ara-next'),
          prevEl: document.querySelector('.blog-section .ara-prev'),
        },
        breakpoints: {
          1530: {
              slidesPerView: 2,
              spaceBetween: 20
          },
          1200: {
              slidesPerView: 1,
              spaceBetween: 20
          },
          991: {
              slidesPerView: 2,
              spaceBetween: 20
          },
        }
      });
    }

    // gallery-carousel
    let galleryCarousel = document.querySelector('.gallery-carousel');
    if(galleryCarousel){
      const swiper = new Swiper(galleryCarousel, {
        loop: true,
        autoplay: 1000,
        slidesPerView: 1,
        slidesToShow: 1,
        paginationClickable: true,
        spaceBetween: 0,
        pagination: {
          el: document.querySelector('.gallery-carousel .swiper-pagination'),
        },
        breakpoints: {
          575: {
              slidesPerView: 1,
              spaceBetween: 20
          }
        }
      });
    }

    // product-carousel
    let productCarousel = document.querySelector('.product-carousel');
    if(productCarousel){
      const swiper = new Swiper(productCarousel, {
        loop: true,
        autoplay: 1000,
        slidesPerView: 1,
        slidesToShow: 1,
        paginationClickable: true,
        spaceBetween: 0,
        breakpoints: {
          575: {
              slidesPerView: 1,
              spaceBetween: 20
          }
        }
      });
    }

    /* Wow js */
    new WOW().init();

  });
});