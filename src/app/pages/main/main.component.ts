import { Component } from '@angular/core';
import {SwiperOptions} from "swiper";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor() {}
  panelOpenState = false;
  public onClickSlide(item: any):void {
    try {
      let array = item.srcElement.parentNode.parentNode.children;
      for (let i = 0; i < array.length; i++) {
        array[i].classList.remove('_active');
      }
      item.srcElement.parentNode.classList.add('_active');
      item.srcElement.parentNode.parentNode.parentNode.children[0].children[0].setAttribute('src', item.srcElement.getAttribute('src'));
    } catch (ex) {
      console.log("Error: " + (ex as Error).message);
    }
  }
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
      nextEl: '.example-of-work__slider_right', // Вывод стрелки следующего элемента
      prevEl: '.example-of-work__slider_left', // Вывод стрелки предыдущего элемента
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
    grabCursor: false , // Курсор перетаскивания?
    autoplay: false,
    /*autoplay: {
      pauseOnMouseEnter: false, // Останавливаться при наведении мыши?
      stopOnLastSlide: false, // Останавливаться на последнем слайде?
      waitForTransition: true, // Дожидаться окончании анимации перехода?
      disableOnInteraction: false, // Выключать автовоспроизведение при первом взаимодействии?
      delay: 5800,
    },*/
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
