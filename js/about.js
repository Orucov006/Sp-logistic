var arrLang = {
	"az": {
        "home": "Əsas",
        "about": "Haqqımızda",
        "contact": "Əlaqə",      
        "services": "Xidmətlərimiz",
        "pages": "Səhifələr",
        "languages": "Dil",
        "slider-title": "S.P Logistika Şirkəti",
        "slider-body": "daxili və beynəlxalq çatdırılma xidməti",
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
        "slider-title": "S.P Logistika Company",
        "slider-body": "internal and international delivery service",
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
        "slider-body": "внутренняя и международная служба доставки",
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

  window.onload = function() {
    Particles.init({
      selector: '.background'
    });
  };