function stickyElem(elem) {
  var win = $(window);
  var docElem = $('html, body');
  var docElemScrTop;
  var elem = elem;
  var elemOffset = elem.offset().top;
  var elemOuterHeight = elem.outerHeight();
  win.on('scroll', function(){
    docElemScrTop = docElem.scrollTop();
    if(docElemScrTop >= elemOffset) {
      if(!(elem.hasClass('sticky'))) {
        elem.addClass('sticky');
        elem.before('<div class="sticky-dummy" style="height:' + elemOuterHeight + 'px;"></div>');
      }
    } else {
      if(elem.hasClass('sticky')) {
        elem.removeClass('sticky');
        elem.prev().remove();
      }
    }
  });
}