/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция сладера */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    let dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//.............................. модальное окно заказа звонка

$(function(){
	function showModal(id){
		$(document.body).addClass('is-open-modal');
		$(id).addClass('is-open');
		console.log(id);
	}
	function hideModals(){
		$(document.body).removeClass('is-open-modal');
		$('.modal').removeClass('is-open');
	}

	$(".modal-open").on('click', function(e){
		console.log(e);
		showModal('#modal1');
 });
	
	$(document).on('click', function(e){
		if (!(
		($(e.target).parents('.dialog').length)
		||	($(e.target).hasClass('dialog'))
		||	($(e.target).hasClass('modal-open')))
		) {
			hideModals();
		}
	});
	
});


// ...........................меню бургер..............

$('.burger, .overlay').click(function(){
    $('.burger').toggleClass('clicked');
    $('.overlay').toggleClass('show');
    $('nav').toggleClass('show');
    $('body').toggleClass('overflow');
  });




