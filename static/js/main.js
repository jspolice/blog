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
    return activeSection.indexOf($(el).data('nav')) === 0;
  }).addClass('nav__link--active');
}