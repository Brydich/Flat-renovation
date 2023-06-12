Для подключения слайдера используется "Swiper". 
Для установки нужно выпонить следующую команду в терминале: "npm i swiper".
Следующим шагом добавляется модуль Слайдера (SwiperModule) в нужный модуль приложения в массив imports.
В файл компонента добавляются:
#  import SwiperCore, {A11y, Navigation, Pagination, Scrollbar, Swiper, SwiperOptions, Autoplay} from 'swiper';
#  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
#  encapsulation: ViewEncapsulation.None (В @Component)
В файле шаблона используется следующая конструкция:
<swiper class="swiper" [config]="config" (slideChange)="onSlideChange()">
  <ng-template swiperSlide><img src="../../../../assets/img/flat1.jpg" alt=""></ng-template>
</swiper>
Используются следующие классы для изменения стилей для элементов:
  .swiper { // Оболочка
    background-color: #333333;
  }
  .swiper-scrollbar { // Лента со слайдами (пустая)
  }
  .swiper-wrapper { // Внутренняя оболочка со всеми слайдами
  }
  .swiper-slide { // Оболочка слайда (item)
    background-color: #666;
    padding: 10px;
  }
  .swiper-slide-duplicate { // Оболочка для дублированного слайда
  }
  .swiper-slide-active { // Активный слайд
    background-color: greenyellow;
  }
  .swiper-slide-prev { // Предыдущий слайд от активного
  }
  .swiper-slide-next { // Следующий слайд от активного
  }
Рекомендуется использовать следующий конфиг в файле компонента
# config: SwiperOptions = {
  enabled: true, // Включен ли слайдер изначально
  slidesPerView: 2,
  spaceBetween: 10, // Расстояние между слайдами (тотал)
  speed: 1000, // Скорость пролистывания слайдов
  parallax: false, // Параллакс (не знаю как работает)
  /*navigation: { // Вывод стрелок
    nextEl: '.block', // Вывод стрелки следующего элемента
    prevEl: '.block', // Вывод стрелки предыдущего элемента
  },*/
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
  grabCursor: true, // Курсор перетаскивания?
  autoplay: true,
  /*autoplay: {
    pauseOnMouseEnter: false,
    stopOnLastSlide: false,
    waitForTransition: false,
    disableOnInteraction: false,
    delay: 1000,
  },*/
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    640: {
     slidesPerView: 2,
    }
  }
};
Документация https://swiperjs.com/angular
