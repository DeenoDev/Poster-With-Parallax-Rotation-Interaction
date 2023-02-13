/*
------------------HOVER------------------
*/

let x = 0;
let y = 0;
let lastX = 0;
let lastY = 0;

let x2 = 0;
let y2 = 0;
let lastX2 = 0;
let lastY2 = 0;

const speed = 0.1;

$("body").mousemove(function (e) {
  x = -($(window).innerWidth() / 2 - e.pageX) / 600;
  y = ($(window).innerHeight() / 2 - e.pageY) / 300;

  x2 = -($(window).innerWidth() / 2 - e.pageX) / 400;
  y2 = ($(window).innerHeight() / 2 - e.pageY) / 200;
});

$("body").mouseleave(function () {
  x = 0;
  y = 0;

  x2 = 0;
  y2 = 0;
});

function rotatePage() {
  lastX = lastX + (x * -10 - lastX) * speed;
  lastY = lastY + (y * -10 - lastY) * speed;
  $(".page").css("transform", `rotateX(${lastY}deg) rotateY(${lastX}deg)`);
}

function rotateText() {
  lastX2 = lastX2 + (x2 * -10 - lastX2) * speed;
  lastY2 = lastY2 + (y2 * -10 - lastY2) * speed;
  $(".center-text").css(
    "transform",
    `rotateX(${lastY2}deg) rotateY(${lastX2}deg)`
  );
}

setInterval(rotatePage, 30);
setInterval(rotateText, 50);

/*
------------------REVEAL------------------
*/

$(document).ready(function () {
  $(".title").html((i, html) => {
    return "<span><i>" + $.trim(html).split("").join("</i><i>") + "</i></span>";
  });
  $(".title").addClass("anim-go-down");
  setTimeout(() => {
    $(".title").css("visibility", "visible");
  }, 500);
  setTimeout(() => {
    $(".title").removeClass("anim-go-down");
  }, 1000);

  $(".page").addClass("anim");
  setTimeout(() => {
    $(".page").removeClass("anim");
    $(".page").css("transform", "translateY(0rem) scale(1)");
  }, 1000);

  setTimeout(() => {
    $(".center-left").css("visibility", "visible");
    $(".center-right").css("visibility", "visible");
  }, 500);

  $(".text-bg-left").addClass("anim");
  $(".text-bg-right").addClass("anim");
  setTimeout(() => {
    $(".text-bg-left").removeClass("anim");
    $(".text-bg-right").removeClass("anim");
  }, 500);

  setTimeout(() => {
    if (!$(".text-bg-left").hasClass("anim")) {
      $(".text-bg-left").addClass("anim-rev");
      $(".text-bg-right").addClass("anim-rev");
      setTimeout(() => {
        $(".text-bg-left").removeClass("anim-rev");
        $(".text-bg-right").removeClass("anim-rev");
        $(".text-bg-left").attr("style", "width: 0vmin");
        $(".text-bg-right").attr("style", "width: 0vmin");
      }, 500);
    }
  }, 500);
});
