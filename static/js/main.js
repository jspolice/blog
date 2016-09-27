$(function() {
  highlightActiveNavItem();
});

function highlightActiveNavItem() {
  var $items = $('.nav__link');
  var activeSection = window.location.pathname;

  if(activeSection === '/') {
    return;
  }

  $items.removeClass('nav__link--active').filter(function(index, el) {
    var nav = $(el).data('nav');
    return nav && activeSection.match(new RegExp(nav));
  }).addClass('nav__link--active');
}