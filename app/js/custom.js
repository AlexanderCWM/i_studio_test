$('.goods_slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed:500,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.user_btn').on('click', function(){
    if($(this).hasClass('active')){
      $('.register_block').toggleClass('active');
    }
      else{
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
        $('.register_block').addClass('active');
      }
  });

  $('.cart_btn').on('click', function(e){
    if($(this).hasClass('active')){
      $('.cart_block').toggleClass('active');
    }
      else{
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
        $('.cart_block').addClass('active');
      }
  });

//   var btn_up = $('.quantity_up');
//   var btn_down = $('.quantity_down');
// // var quantity_value = $('.quantity_value').attr('value');
//   $(btn_up).click(function() {
//     var quantity_value = parseInt($(this).siblings('.quantity_value').val());
//     quantity_value ++;
//     console.log(quantity_value)
//   });

$('.login_btn').click(function(e){
e.preventDefault;
$('.register_block').toggleClass('active');
$('.login').toggleClass('active');
});


$('.register_btn').click(function(e){
  e.preventDefault();
  $('.register_block').toggleClass('active');
  $('.login').toggleClass('active');
  });

  $(document).ready(function(e){

    $('.slider_img').on('click','.scroll' , function(event){
      event.preventDefault();
        var id = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    })
  })
    

$(document).ready(function(){
    var tab = $('ul.tab_list li'),
    tabContent = $('.main_slider .slider_img');
    

    $(tab).click(function(event){
      event.preventDefault();
      var tabIndex = $(this).index();
      $(tab).removeClass('active');
      $(this).addClass('active');
      $(tabContent).removeClass('active');
      $(tabContent).eq(tabIndex).addClass('active');
      console.log(tabIndex);
    })

})

$('.left_header_btns .burger_btn').click(function(){
  $('.mobile_menu').show();
});
$('.mobile_menu .close_btn').click(function(){
   $('.mobile_menu').hide();
});

$('.mobile_field .placeholder').click(function(){
  $(this).hide();
  $('.mobile_field').children('input').focus();
})