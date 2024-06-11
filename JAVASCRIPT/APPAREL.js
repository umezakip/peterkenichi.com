// Light/Dark mode toggle script
$(document).ready(function() {
  // Check for saved theme in local storage
  const currentTheme = localStorage.getItem('theme') || 'light';
  if (currentTheme === 'dark') {
    $('body').addClass('dark-mode');
    $('.day-logo').hide();
    $('.night-logo').show();
  } else {
    $('body').removeClass('dark-mode');
    $('.day-logo').show();
    $('.night-logo').hide();
  }

  // Toggle theme on switch click
  $('.switch').on('click', function() {
    $('body').toggleClass('dark-mode');
    if ($('body').hasClass('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      $('.day-logo').hide();
      $('.night-logo').show();
    } else {
      localStorage.setItem('theme', 'light');
      $('.day-logo').show();
      $('.night-logo').hide();
    }
  });

  // Apparel specific JS
  $(".color-wrap ul li").each(function() {
    var color = $(this).attr("data-color");
    $(this).css("backgroundColor", color);
  });

  $(".color-wrap ul li").click(function() {
    $(this).parents(".product_item").find(".color-wrap ul li").removeClass("active");
    $(this).addClass("active");
    var img_src = $(this).attr("data-src");
    $(this).parents(".product_item").find("img").attr("src", img_src);
  });
});