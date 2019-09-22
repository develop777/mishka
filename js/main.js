$(document).ready(function () {
  var $burgerBtn = $('.burger');
      $mainMenu = $('.nav__list');
  $burgerBtn.click(function () {
		$(".burger-open").toggleClass('hide');
    $(".burger-close").toggleClass('show');
    $mainMenu.slideToggle(700);
	});

  var $modalBlock = $('.modal');
  var $btn = $('.js-order__button');
  var $cover = $('.overlay');
  var $modalBtn = $('.js-modal__button');
  var $sizeBtn = $('.js-size__button');
  $btn.click(function(e){
    $modalBlock.show();
    $cover.show();
  })

  $modalBtn.click(function(e){
    $modalBlock.hide();
    $cover.hide();
  })

  $sizeBtn.click(function(e){
    e.preventDefault();
    $(this).toggleClass('selected');
  })

  $cover.click(function(e){
    $modalBlock.hide();
    $cover.hide();
  })

});
