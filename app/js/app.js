// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import AOS from "aos";
import Glide from "@glidejs/glide";

document.addEventListener("DOMContentLoaded", () => {
  // var love = setInterval(function () {
  //   var r_num = Math.floor(Math.random() * 40) + 1;
  //   var r_size = Math.floor(Math.random() * 65) + 10;
  //   var r_left = Math.floor(Math.random() * 100) + 1;
  //   var r_bg = Math.floor(Math.random() * 25) + 100;
  //   var r_time = Math.floor(Math.random() * 5) + 5;

  //   $(".bg_heart").append(
  //     "<div class='heart' style='width:" +
  //       r_size +
  //       "px;height:" +
  //       r_size +
  //       "px;left:" +
  //       r_left +
  //       "%;background:rgba(255," +
  //       (r_bg - 25) +
  //       "," +
  //       r_bg +
  //       ",1);-webkit-animation:love " +
  //       r_time +
  //       "s ease;-moz-animation:love " +
  //       r_time +
  //       "s ease;-ms-animation:love " +
  //       r_time +
  //       "s ease;animation:love " +
  //       r_time +
  //       "s ease'></div>"
  //   );

  //   $(".bg_heart").append(
  //     "<div class='heart' style='width:" +
  //       (r_size - 10) +
  //       "px;height:" +
  //       (r_size - 10) +
  //       "px;left:" +
  //       (r_left + r_num) +
  //       "%;background:rgba(255," +
  //       (r_bg - 25) +
  //       "," +
  //       (r_bg + 25) +
  //       ",1);-webkit-animation:love " +
  //       (r_time + 5) +
  //       "s ease;-moz-animation:love " +
  //       (r_time + 5) +
  //       "s ease;-ms-animation:love " +
  //       (r_time + 5) +
  //       "s ease;animation:love " +
  //       (r_time + 5) +
  //       "s ease'></div>"
  //   );

  //   $(".heart").each(function () {
  //     var top = $(this)
  //       .css("top")
  //       .replace(/[^-\d\.]/g, "");
  //     var width = $(this)
  //       .css("width")
  //       .replace(/[^-\d\.]/g, "");
  //     if (top <= -100 || width >= 150) {
  //       $(this).detach();
  //     }
  //   });
  // }, 500);

  AOS.init();

  new Glide(".glide", {
    perView: 3,
    startAt: 2,
    focusAt: "center",
  }).mount();

  // window.onload = function () {
  //   document.body.classList.add("loaded_hiding");
  //   window.setTimeout(function () {
  //     document.body.classList.add("loaded");
  //     document.body.classList.remove("loaded_hiding");
  //   }, 8000);
  // };

  let welcome = document.getElementById("wrap");
  let navigation = document.getElementById("navi");
  let fpContent = document.getElementById("fp-content");
  let start = document.getElementById("startt");
  // let car = document.getElementById("startCar");

  welcome.addEventListener("click", function () {
    welcome.classList.add("welcome-animate");
    setTimeout(function () {
      navigation.classList.add("navig");
      fpContent.classList.add("fp-opacity");
    }, 4000);
    setTimeout(function () {
      start.classList.add("start-loaded");
    }, 4500);
  });

  // window.addEventListener('scroll', function () {
  //   car.style.scale = 120 - +window.pageYOffset/30+'%';
  // })
});
