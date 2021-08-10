function stickyElem(elem) {
  var win = $(window);
  var docElem = $('html, body');
  var docElemScrTop;
  var stickyElem = elem;
  var stickyElemOffset = stickyElem.offset().top;
  var stickyElemOuterHeight = stickyElem.outerHeight();
  win.on('scroll', function(){
    docElemScrTop = docElem.scrollTop();
    if(docElemScrTop >= stickyElemOffset) {
      if(!(stickyElem.hasClass('sticky'))) {
        stickyElem.addClass('sticky');
        stickyElem.before('<div class="sticky-dummy" style="height:' + stickyElemOuterHeight + 'px;"></div>');
      }
    } else {
      if(stickyElem.hasClass('sticky')) {
        stickyElem.removeClass('sticky');
        stickyElem.prev().remove();
      }
    }
  });
}