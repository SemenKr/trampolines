/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Navigation, Lazy, EffectFade, Autoplay, Pagination, Thumbs } from 'swiper';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders()
{
	// Список слайдеров
	// Check if the slider is on the page
	if (document.querySelector('.swiper'))
	{ // Указываем класс нужного слайдера
		// Создаем слайдер
		const thumbsSwiper = new Swiper('.training__slider-thumbs', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay, Thumbs, EffectFade],
			// effect: 'fade',
			observer: true,
			watchOverflow: true,
			observeParents: true,
			slidesPerView: 2,
			spaceBetween: 25,
			// parallax: true,
			direction: 'vertical',
			//autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			// preloadImages: false,
			// lazy: true,

			breakpoints: {

				1330: {
					slidesPerView: 2,
					spaceBetween: 16,
					direction: 'horizontal',
				},
			},
			on: {
				init: function (swiper)
				{

				}
			}
		});
		new Swiper('.training__slider', { // Указываем класс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Thumbs, Lazy, Autoplay, EffectFade],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			preloadImages: false,
			lazy: true,


			// Эффекты
			effect: 'fade',
			// autoplay: {
			// 	delay: 6000,
			// 	disableOnInteraction: false,
			// },


			// Пагінація

			pagination: {
				el: '.swiper-paginations',
				clickable: true,
			},
			thumbs: {
				swiper: thumbsSwiper
			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.slider-button-next',
			},
			/*
			//Брейкпоинта
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
		new Swiper('.feedback__slider', { // Указываем класс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination, Lazy],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 20,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			preloadImages: false,
			lazy: true,


			// Эффекты
			// effect: 'fade',
			// autoplay: {
			// 	delay: 6000,
			// 	disableOnInteraction: false,
			// },


			// Пагінація

			pagination: {
				el: '.feedback__swiper-pagination',
				clickable: true,
			},



			// Скроллбар

			// scrollbar: {
			// 	el: '.swiper-scrollbar',
			// 	draggable: true,
			// },


			// Кнопки "влево/вправо"
			// navigation: {
			// 	prevEl: '.swiper-button-prev',
			// 	nextEl: '.slider-button-next',
			// },

			//Брейкпоинта
			breakpoints: {
				600: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 25,
				},
			},

			// События
			on: {

			}
		});


	}
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll()
{
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0)
	{
		for (let index = 0; index < sliderScrollItems.length; index++)
		{
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e)
{
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролл на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});