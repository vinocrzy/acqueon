import "owl.carousel/dist/assets/owl.carousel.css";
import "./../scss/style.scss";
import "./carousel";

$(document).ready(function () {
  $(".pop-close").click(function () {
    $(".alert-strip").addClass("hide");
  });
  $(".burger-menu").click(function () {
    $(".head-menu-nav").addClass("open");
  });
  $(".head-menu-nav").click(function () {
    $(".head-menu-nav").removeClass("open");
  });
});
