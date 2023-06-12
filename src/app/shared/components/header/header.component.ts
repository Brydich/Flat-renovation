import {Component, ViewEncapsulation} from '@angular/core';
import SwiperCore, {A11y, Navigation, Pagination, Scrollbar, Swiper, SwiperOptions, Autoplay} from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent  {
  constructor() {}
  public isMenuOpen: boolean = false;
  // Slider ==================================
  onSlideChange() {
  }
  config: SwiperOptions = {
    enabled: true, // Включен ли слайдер изначально
    slidesPerView: 1,
    spaceBetween: 10, // Расстояние между слайдами (тотал)
    speed: 1000, // Скорость пролистывания слайдов
    parallax: false, // Параллакс (не знаю как работает)
    navigation: { // Вывод стрелок
      nextEl: '.header-down_right', // Вывод стрелки следующего элемента
      prevEl: '.header-down_left', // Вывод стрелки предыдущего элемента
    },
    // slideActiveClass: '',
    pagination: false,
    /*pagination: { // Вывод кнопок
      clickable: true,
      type: 'bullets', //type?: 'bullets' | 'fraction'(цифры 1/6) | 'progressbar' | 'custom';
      el: '.block', // Сюда выводится блок с кнопками, отдельный класс кнопок можно вывести в саоим блоки (см. по коду, документации  )
    },*/
    autoHeight: true, //
    centeredSlides: true, // Центрирование активного слайдера
    slidesPerGroup: 1, // Сколько слайдеров листается за раз
    lazy: true, // Отложенная загрузка слайдов
    loop: true, // Бесконченый замкнутый слайдер
    scrollbar: {
      draggable: true // Перетаскиваемый?
    },
    grabCursor: false, // Курсор перетаскивания?
    //autoplay: true,
    autoplay: {
      pauseOnMouseEnter: false, // Останавливаться при наведении мыши?
      stopOnLastSlide: false, // Останавливаться на последнем слайде?
      waitForTransition: true, // Дожидаться окончании анимации перехода?
      disableOnInteraction: false, // Выключать автовоспроизведение при первом взаимодействии?
      delay: 5800,
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 480px
      480: {
      },
      // when window width is >= 640px
      640: {
      }
    }
  };
  // =========================================
}
