"use strict";$(document).ready(function(){console.log("start okok");var a=$("#main-form");$("#button");a.on("submit",function(a){a.preventDefault(),console.log("lolos");var t=$(".form--steap--active"),o=t.attr("data-id"),e=void 0;1===o?e=$(".form--steap-2"):2!==o&&3!==o||(e=$(".form--steap-3")),t.removeClass("form--steap--active"),e.addClass("form--steap--active"),console.log(o)}),$(".nav__tab-link").click(function(){var a=$(this).attr("data-tab");$(".nav__tab-link").removeClass("current"),$(".form").removeClass("form--active"),$(this).addClass("current"),$("#"+a).addClass("form--active")})});