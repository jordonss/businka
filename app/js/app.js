// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import AOS from "aos";
import Glide from "@glidejs/glide";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger.js";

document.addEventListener("DOMContentLoaded", () => {
  var love = setInterval(function () {
    var r_num = Math.floor(Math.random() * 40) + 1;
    var r_size = Math.floor(Math.random() * 65) + 10;
    var r_left = Math.floor(Math.random() * 100) + 1;
    var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;

    $(".bg_heart").append(
      "<div class='heart' style='width:" +
        r_size +
        "px;height:" +
        r_size +
        "px;left:" +
        r_left +
        "%;background:rgba(255," +
        (r_bg - 25) +
        "," +
        r_bg +
        ",1);-webkit-animation:love " +
        r_time +
        "s ease;-moz-animation:love " +
        r_time +
        "s ease;-ms-animation:love " +
        r_time +
        "s ease;animation:love " +
        r_time +
        "s ease'></div>"
    );

    $(".bg_heart").append(
      "<div class='heart' style='width:" +
        (r_size - 10) +
        "px;height:" +
        (r_size - 10) +
        "px;left:" +
        (r_left + r_num) +
        "%;background:rgba(255," +
        (r_bg - 25) +
        "," +
        (r_bg + 25) +
        ",1);-webkit-animation:love " +
        (r_time + 5) +
        "s ease;-moz-animation:love " +
        (r_time + 5) +
        "s ease;-ms-animation:love " +
        (r_time + 5) +
        "s ease;animation:love " +
        (r_time + 5) +
        "s ease'></div>"
    );

    $(".heart").each(function () {
      var top = $(this)
        .css("top")
        .replace(/[^-\d\.]/g, "");
      var width = $(this)
        .css("width")
        .replace(/[^-\d\.]/g, "");
      if (top <= -100 || width >= 150) {
        $(this).detach();
      }
    });
  }, 500);

  AOS.init();

  new Glide(".glide", {
    type: "carousel",
    autoplay: 2000,
    perView: 3,
    gap: 30,
    hoverpause: true,
    animationDuration: 3100,
    breakpoints: {
      767: { perView: 1 },
      1200: { perView: 3 },
    },
  }).mount();

  gsap.registerPlugin(ScrollTrigger);

  gsap.to("#car", {
    scrollTrigger: {
      scrub: true,
    },
    y: -300,
    x: 250,
  });

  let mm = gsap.matchMedia();

  mm.add("(max-width: 414px)", () => {
    gsap.to("#car", {
      scrollTrigger: {
        scrub: true,
      },
      y: -220,
      x: 220,
    });
  });

  mm.add("(max-width: 575.98px)", () => {
    gsap.to("#car", {
      scrollTrigger: {
        scrub: true,
      },
      y: -220,
      x: 220,
    });
  });

  mm.add("(max-width: 767.98px)", () => {
    gsap.to("#car", {
      scrollTrigger: {
        scrub: true,
      },
      y: -220,
      x: 220,
    });
  });

  mm.add("(max-width: 992px)", () => {
    gsap.to("#car", {
      scrollTrigger: {
        scrub: true,
      },
      y: -220,
      x: 220,
    });
  });

  mm.add("(max-width: 1200px)", () => {
    gsap.to("#car", {
      scrollTrigger: {
        scrub: true,
      },
      y: -220,
      x: 220,
    });
  });

  mm.add("(max-width: 1900px)", () => {
    gsap.to("#car", {
      scrollTrigger: {
        scrub: true,
      },
      y: -220,
      x: 320,
    });
  });

  mm.revert();

  window.onload = function () {
    document.body.classList.add("loaded_hiding");
    window.setTimeout(function () {
      document.body.classList.add("loaded");
      document.body.classList.remove("loaded_hiding");
    }, 6500);
  };

  let welcome = document.getElementById("wrap");
  let navigation = document.getElementById("navi");
  let fpContent = document.getElementById("fp-content");
  let start = document.getElementById("startt");
  let push = document.getElementById("pbw");

  welcome.addEventListener("click", function () {
    welcome.classList.add("welcome-animate");
    push.classList.add("roll-out-left");
    setTimeout(function () {
      navigation.classList.add("navig");
      fpContent.classList.add("fp-opacity");
    }, 4000);
    setTimeout(function () {
      start.classList.add("start-loaded");
    }, 4500);
  });
});

const btnScrollToTop = document.querySelector(".btn");

btnScrollToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const MagicBtn = document.querySelector(".btn_moments");

MagicBtn.addEventListener("click", function () {
  document.getElementById("gallery-id").scrollIntoView();
});

const GalleryBtn = document.querySelector(".btn_gallery");

GalleryBtn.addEventListener("click", function () {
  document.getElementById("nest-id").scrollIntoView();
});

const progressBar = document.getElementById("progressbar");
progressBar.style.height = 1 + "%";

window.onscroll = () => {
	const scroll = document.documentElement.scrollTop;
	const height =
		document.documentElement.scrollHeight - document.documentElement.clientHeight;
	let scrolled = (scroll / height) * 100;

	if (scrolled <= 1) {
		progressBar.style.height = 1 + "%";
	} else if (scrolled >= 2 && scrolled <= 99.9) {
		progressBar.style.height = scrolled + "%";
	} else if (scrolled === 100) {
		progressBar.style.height = scrolled + "%";
	}
};
