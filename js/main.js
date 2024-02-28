jQuery("a.scrollto").click(function () {
  elementClick = jQuery(this).attr("href");
  destination = jQuery(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate(
    {
      scrollTop: destination,
    },
    500
  );
  return false;
});

$(".menu-btn").click(function () {
  if ($(".menu-btn").hasClass("menu-btn--active")) {
    $(".menu").addClass("fadeOut");
    $(".menu").removeClass("fadeIn");
    setTimeout(function () {
      $(".menu-btn").removeClass("menu-btn--active");
      $(".menu").removeClass("menu--active");
      $("html").removeClass("oh");
      $(".menu").removeClass("fadeOut");
    }, 350);
  } else {
    $(".menu").addClass("menu--active");
    $(".menu-btn").addClass("menu-btn--active");
    $("html").addClass("oh");
    $(".menu").addClass("animated fadeIn faster");
    $(".menu").removeClass("fadeOut");
  }
});

$(".menu__item, .menu__request-btn").click(function () {
  $(".menu").addClass("fadeOut");
  $(".menu").removeClass("fadeIn");
  setTimeout(function () {
    $(".menu-btn").removeClass("menu-btn--active");
    $(".menu").removeClass("menu--active");
    $("html").removeClass("oh");
    $(".menu").removeClass("fadeOut");
  }, 350);
});

$("#model").click(function () {
  $("#vacancy").val("model");
});

$("#operator").click(function () {
  $("#vacancy").val("operator");
});

$("#agent").click(function () {
  $("#vacancy").val("agent");
});

$("#manager").click(function () {
  $("#vacancy").val("manager");
});

$(window).scroll(function () {
  if ($(window).scrollTop() > $(".intro").height()) {
    $(".top__btn").addClass("active");
  } else {
    $(".top__btn").removeClass("active");
  }
});

setTimeout(function () {
  $(".about-us__ul li").addClass("o0");
  $(document.body).on("appear", ".about-us__ul li", function (e, $affected) {
    $(this).addClass("animated fadeIn");
    $(this).removeClass("o0");
  });
  $(".about-us__ul li").appear({
    force_process: true,
  });

  $(".intro__p").addClass("o0");
  $(document.body).on("appear", ".intro__p", function (e, $affected) {
    $(this).addClass("animated zoomIn");
    $(this).removeClass("o0");
  });
  $(".intro__p").appear({
    force_process: true,
  });

  $(".intro__p2").addClass("o0");
  $(document.body).on("appear", ".intro__p2", function (e, $affected) {
    $(this).addClass("animated fadeIn");
    $(this).removeClass("o0");
  });
  $(".intro__p2").appear({
    force_process: true,
  });

  $(".about-us__p2").addClass("o0");
  $(document.body).on("appear", ".about-us__p2", function (e, $affected) {
    $(this).addClass("animated fadeIn");
    $(this).removeClass("o0");
  });
  $(".about-us__p2").appear({
    force_process: true,
  });

  $(".about-us__p3").addClass("o0");
  $(document.body).on("appear", ".about-us__p3", function (e, $affected) {
    $(this).addClass("animated fadeIn");
    $(this).removeClass("o0");
  });
  $(".about-us__p3").appear({
    force_process: true,
  });

  // $(".conditions__item").addClass("o0");
  // $(document.body).on('appear', '.conditions__item', function(e, $affected) {
  //     $(this).addClass("animated fadeIn");
  //     $(this).removeClass("o0");
  // });
  // $('.conditions__item').appear({
  //     force_process: true
  // });

  // $(".vacancies__wrap").addClass("o0");
  // $(document.body).on('appear', '.vacancies__wrap', function(e, $affected) {
  //     $(this).addClass("animated bounceIn");
  //     $(this).removeClass("o0");
  // });
  // $('.vacancies__wrap').appear({
  //     force_process: true
  // });
}, 300);

$("#mainForm").submit(function () {
  //устанавливаем событие отправки для формы с id=form
  var form_data = $(this).serialize(); //собераем все данные из формы
  $.ajax({
    type: "POST", //Метод отправки
    url: "mailMain.php", //путь до php фаила отправителя
    data: form_data,
    success: function () {
      //код в этом блоке выполняется при успешной отправке сообщения
      alert("Мы скоро Вам позвоним!");
      //yaCounter44814274.reachGoal('mainFORM');
    },
  });
  return false;
});
// const svg = document.getElementById("svg-map");
// const info = document.querySelector(".info");
// const child = document.querySelectorAll("#svg-map path");

// svg.onmousemove = function (e) {
//   e = window.event;

//   child.forEach(function (el) {
//     info.style.opacity = 1;
//     info.innerHTML = e.target.getAttribute("title");
//   });

//   info.style.left = e.pageX - 100 + "px";
//   info.style.top = e.pageY - 1350 + "px";
// };

// svg.onmouseout = function () {
//   info.style.opacity = "0";
// };

document.addEventListener("DOMContentLoaded", function () {
  const activeRegions = document.querySelectorAll(".active-region");
  const tooltip = document.getElementById("tooltip");

  activeRegions.forEach((region) => {
    region.addEventListener("mouseover", function (event) {
      const { x, y, width, height } = region.getBBox(); // Получаем координаты и размеры элемента
      const tooltipX = x + width + 5;
      const tooltipY = y + 70;
      tooltip.innerHTML = event.target.getAttribute("title");
      tooltip.style.left = `${tooltipX}px`;
      tooltip.style.top = `${tooltipY}px`;

      tooltip.classList.add("active");
    });

    region.addEventListener("mouseout", function () {
      tooltip.classList.remove("active");
    });
  });
});

$.fn.commentCards = function () {
  return this.each(function () {
    var $this = $(this),
      $cards = $this.find(".card"),
      $current = $cards.filter(".card--current"),
      $next;

    $cards.on("click", function () {
      if (!$current.is(this)) {
        $cards.removeClass("card--current card--out card--next");
        $current.addClass("card--out");
        $current = $(this).addClass("card--current");
        $next = $current.next();
        $next = $next.length ? $next : $cards.first();
        $next.addClass("card--next");
      }
    });

    if (!$current.length) {
      $current = $cards.last();
      $cards.first().trigger("click");
    }

    $this.addClass("cards--active");
  });
};

$(".cards").commentCards();
