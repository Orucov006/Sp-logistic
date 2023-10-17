//Languge//
var arrLang = {
	"az": {
        "home": "Əsas",
        "about": "Haqqımızda",
        "contact": "Əlaqə",      
        "services": "Xidmətlərimiz",
        "pages": "Səhifələr",
        "languages": "Dil",
        "slider-title": "S.P Logistika Şirkəti",
        "contact-us": "Bizimlə əlaqə",
        "quality": "KEYFİYYƏT",
        "quality-body": "Beynəlxalq yükdaşımalar üzrə yüksək xidmət",
        "response": "MƏSULİYYƏT",
        "response-body": "Biz Məsuliyyət Daşıyırıq!",
        "delivery": "Daşınacaq yükün danışılan zamanda təhvil və təslimi",
        "delivery-body": "Daşınacaq yükün danışılan zamanda təhvil və təslimi",
        "article1": "Artikle 1",
        "article1-body": "Artikle 1 metn",
        "article2-body": "Artikle 1 metn",
        "article2": "Artikle 2",
        "article3": "Artikle 2 metn",
        "article3-body": "Artikle 3",
        "article4": "Artikle 4",
        "article4-body": "Artikle 4 metn",
        "about-body": "About metn",
	},
	"en": {
        "home": "Home",
        "about": "About",
        "contact": "Contact",      
        "services": "Services",
        "languages": "Languages",
        "slider-title": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, ut?",
        "contact-us": "Contact US",
        "quality": "Quality",
        "quality-body": "Superior service for international cargo transportation",
        "response": "Response",
        "response-body": "We Are Responsible!",
        "delivery": "Delivery",
        "delivery-body": "Delivery and delivery of the cargo to be transported at the agreed time",
        "article1": "Article 1",
        "article1-body": "Article 1 body",
        "article2": "Article 2",
        "article2-body": "Article 2 body",
        "article3": "Article 3",
        "article3-body": "Article 3 body",
        "article4": "Article 4",
        "article4-body": "Article 4 body",
        "about-body": "About body",
	},
    "ru": {
        "home": "Главная страница",
        "about": "О нас",
        "contact": "Контакт",      
        "services": "Наши услуги",
        "pages": "Страницы",
        "sanguages": "Языки",
        "slider-title": "Логистическая компания С.П.",
        "contact-us": "Контакт",
        "quality": "КАЧЕСТВО",
        "quality-body": "Превосходный сервис для международных грузоперевозок",
        "response": "ОТВЕТСТВЕННОСТЬ",
        "response-body": "Мы несем ответственность!",
        "delivery": "Передача и доставка груза к перевозке в оговоренное время",
        "delivery-body": "Передача и выдача груза к перевозке в согласованное время",
        "article1": "Статья 1",
        "article1-body": "Основная часть статьи",
        "article2": "Cтатьи 2",
        "article2-body": "Текст 2 статьи",
        "article3": "Текст 3",
        "article3-body": "Текст 3 статьи",
        "article4": "Текст 4",
        "article4-body": "Текст статьи 4 ",
        "about-body": "О тексте",
    }
  };

  $(document).ready(function() {
	var lang = "az";
	$(".lang").each(function(index, element) {
	  $(this).text(arrLang[lang][$(this).attr("key")]);
	});
  });

  $(".translate").click(function() {
	var lang = $(this).attr("id");

	$(".lang").each(function(index, element) {
	  $(this).text(arrLang[lang][$(this).attr("key")]);
	});
  });

  //Slider//
  if ($.fn.owlCarousel) {
    var welcomeSlide = $('.hero-post-slides');
    var testiSlides = $('.testimonials-slides');
    var portfolioSlides = $('.portfolio-slides');

    welcomeSlide.owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        center: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000
    });

    testiSlides.owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 700,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut'
    });

    portfolioSlides.owlCarousel({
        items: 2,
        margin: 30,
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: true,
        autoplay: false,
        autoplayTimeout: 5000,
        smartSpeed: 700,
        center: true
    });
}

