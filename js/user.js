/*jslint browser: true*/
$(document).ready(function () {
  // Footer position
  var Windowheight = $(window).height();
  var footerTop = $("footer").offset().top;
  var footerHeight = $("footer").height();

  if (Windowheight > footerTop) {
    $("footer").offset({ top: Windowheight - footerHeight});
  } else {
    $("footer").offset({ top: 'auto'});
  }
});

