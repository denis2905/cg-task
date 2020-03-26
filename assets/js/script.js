$(document).ready(function() {
  $('li.cg-dropdown > a').click(function(e) {
    e.preventDefault();
    $(this).next('ul').toggleClass('active');
  });
  $('.cg-toggle').click(function(){
    $('nav.cg-main').toggleClass('active');
  });
});
