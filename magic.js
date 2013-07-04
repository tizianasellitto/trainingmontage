function findContainer(elem) {
  while (!$(elem).hasClass('step')) {
    elem = elem.parentNode;
  }
  return elem;
}


$(document).ready(function() {
  var toUnhide;
  $('.button').click(function(ev) {
    var next = ev.target.getAttribute('next');
    if (next) {
      $(findContainer(ev.target)).hide();
      $('#' + next).show();
      if(typeof toUnhide !== 'undefined'){
         $('#' + toUnhide).hide();
       }
    } else {
      toUnhide = ev.target.getAttribute('unhide');
      $('#' + toUnhide).fadeIn();
    }
  });
});
