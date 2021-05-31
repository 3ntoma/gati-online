/*const selectElement = (element) => document.querySelector(element);

selectElement('.button-toggle').addEventListener('click', () => {
	selectElement('header').classList.toggle('active');
});*/

$(document).ready(function(){
  $('.sliderban').slick({
	dots: false,
	arrows: false,
	infinite: true,
	autoplay : true,
	autoplaySpeed: 2000,
	speed: 300,
	slidesToShow: 8,
	slidesToScroll: 1,
	edgeFriction: 0,
	centerMode: true,
	variableWidth: true,
	draggable: true,
	pauseOnHover: false,
	pauseOnFocus: false
  });
  $('.sliderban_1').slick({
	dots: true,
	arrows: true,
	infinite: true,
	autoplay : true,
	autoplaySpeed: 4000,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	edgeFriction: 0,
	centerMode: true,
	variableWidth: false,
	draggable: false,
	adaptiveHeight: true,
	pauseOnHover: true,
	pauseOnFocus: false
  });
  $('.sliderban_1.slide_two').slick({
	dots: true,
	arrows: true,
	infinite: true,
	autoplay : true,
	autoplaySpeed: 4000,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	edgeFriction: 0,
	centerMode: true,
	variableWidth: false,
	draggable: false,
	adaptiveHeight: true,
	pauseOnHover: true,
	pauseOnFocus: false
  });
});

window.onresize= function(){
	if ($(window).width() < 768) {
		let full_height = Number($(window).height());
		full_height += 200;
		$('.menu__body')[0].style.height = String(full_height) + 'px';
	}
}

var zoom=1;//Шаг
function zoompl(){
	zoom=zoom+0.1;
	//alert('pl '+zoom);
	document.body.style.MozTransform = "scale("+zoom+")";// для FireFox
	document.body.style.transformOrigin="0 0";// для FireFox
	document.body.style.OTransform = "scale("+zoom+")";// для Opera
	document.body.style.OTransformOrigin="0 0";// для Opera
	document.body.style.zoom = zoom;
	if (document.getElementsByTagName ('body')[0].className=='content-overflow') {document.getElementsByTagName ('body')[0].className='content-overflow';}
	else {document.getElementsByTagName ('body')[0].className='content-overflow';}
	return false;
}

function zoommn(){
	zoom=zoom-0.1;
	//alert('min '+zoom);
	document.body.style.MozTransform = "scale("+zoom+")";// для FireFox
	document.body.style.transformOrigin="0 0";// для FireFox
	document.body.style.OTransform = "scale("+zoom+")";// для Opera
	document.body.style.OTransformOrigin="0 0";// для Opera
	document.body.style.zoom = zoom;
	return false;
}

function gray(){
	if (document.getElementsByTagName ('html')[0].className=='grayscale') {document.getElementsByTagName ('html')[0].className='';}
	else {document.getElementsByTagName ('html')[0].className='grayscale';}
	return false;
}

function reset(){
	zoom = 1;
	document.getElementsByTagName ('html')[0].className='';
	document.body.style.MozTransform = "scale("+zoom+")";// для FireFox
	document.body.style.transformOrigin="0 0";// для FireFox
	document.body.style.OTransform = "scale("+zoom+")";// для Opera
	document.body.style.OTransformOrigin="0 0";// для Opera
	document.body.style.zoom = zoom;
	if (document.getElementsByTagName ('body')[0].className=='content-overflow') {document.getElementsByTagName ('body')[0].className='';}
	else {document.getElementsByTagName ('body')[0].className='';}
	return false;
}

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
                isMobile.Android()
                || isMobile.BlackBerry()
                || isMobile.iOS()
                || isMobile.Opera()
                || isMobile.Windows()
                );
    }
};

function mobileCheck(){
	if(isMobile.any()){
		
		if ($(window).width() < 768) {
			let full_height = Number($(window).height());
			full_height += 200;
			$('.menu__body')[0].style.height = String(full_height) + 'px';
		}

		document.body.classList.add('_touch');
		document.body.classList.remove('_pc');
		let menuArrows = document.querySelectorAll('.menu__arrow');
		if(menuArrows.length>0){
			for (let index = 0; index < menuArrows.length; index++) {
				const menuArrow = menuArrows[index];
				menuArrow.addEventListener("click", function(e){
					menuArrow.parentElement.classList.toggle('_active');
				});
			}
		}
		let menuDown = document.querySelectorAll('.drop__link');
			if(menuDown.length>0){
				for (let index = 0; index < menuDown.length; index++) {
					const menuArrow = menuDown[index];
					menuArrow.addEventListener("click", function(e){
						menuArrow.parentElement.classList.toggle('_active');
					});
				}
			}
	}else{
		document.body.classList.remove('_touch');
		document.body.classList.add('_pc');
	}
}
window.onload = mobileCheck();
window.addEventListener(`resize`, event => {
	mobileCheck();
  }, false);

const iconMenu = document.querySelector('.menu__icon');
if(iconMenu){
	const menuBody = document.querySelector('.menu__body');
	iconMenu.addEventListener("click", function(e){
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}
