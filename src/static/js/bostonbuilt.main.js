(function($){
  $(document).ready(function(){

    $('.archive-company').addClass('is-visible');

    $('.archive-company__expand-toggle').click(function(){
      $(this).parents('.archive-company').toggleClass('expanded');
    });

    $('.archive-company__collapse-toggle').click(function(){
      $(this).parents('.archive-company').toggleClass('expanded');
    });

    $('.list-expand__toggle--more').click(function(){
      $(this).addClass('active');
      $('.list-expand__toggle--less').removeClass('active');
      $('.list-expand__toggle--label').text("Expanded View");
      $('.archive-company').addClass('expanded');
    });

    $('.list-expand__toggle--less').click(function(){
      $(this).addClass('active');
      $('.list-expand__toggle--more').removeClass('active');
      $('.list-expand__toggle--label').text("Condensed View");
      $('.archive-company').removeClass('expanded');
    });

    $(".categories__list--category:contains('Uncategorized')").remove();

    var pathname = window.location.pathname; // Returns path only

    $('[href="' + pathname + '"]').addClass("is-active");

    function truncateURL() {
      $(this).html($(this).html().split("http://www.").join(""));
    };

    $('.archive-company__site').each(truncateURL);
    $('.contact-info').children('a').each(truncateURL);
  });

  // $(document).ready(collapseCategories);
  // $(window).resize(collapseCategories);
  // $(document).ready(showCategories);
  // $(window).resize(showCategories);


  // function collapseCategories() {
  //   if ($(window).width() <= 768){  
  //     // do something here
  //     $('.categories__list').children('li').each(function (i)
  //       {
  //         if (i > 3) {
  //           $(this).hide();   
  //         }
  //       });

  //     var categories__more = $('<li class="categories__list--category more"><a href="">More...</a></li>');
      
  //     $('.categories__list').append(categories__more);

  //     categories__more.find('a').on('click', function (){
  //       if ($(this).hasClass('expanded')) {
  //         $(this).removeClass('expanded');
  //         $(this).text("More...");
  //         $(this).parent().siblings('li').each(function (i) {
  //           if (i > 5) {
  //             $(this).fadeOut();   
  //           }
  //         });
  //       } else {
  //         $(this).addClass('expanded'); 
  //         $(this).parent().siblings('li').fadeIn();
  //         $(this).text('Less...');
  //       }

  //       return false; 
  //     });
  //   }
  // }

  // function showCategories() {
  //   if ($(window).width() > 768) {
  //     $('.categories__list').children('.more').each(function() {
  //       $(this).remove();
  //     });
  //     $('.categories__list').children('li').each(function (i) {
  //       $(this).show();   
  //     });
  //   }
  // }
})(jQuery);
