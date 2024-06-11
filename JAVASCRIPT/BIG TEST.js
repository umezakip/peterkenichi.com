document.addEventListener('mousemove', showImgContent);

$(".color-wrap ul li").each(function(item){
  var color = $(this).attr("data-color");
  $(this).css("backgroundColor", color);
});

$(".color-wrap ul li").each(function(item){
  $(this).click(function(){
    $(this).parents(".product_item").find(".color-wrap ul li").removeClass("active");
    $(this).addClass("active");
    var img_src = $(this).attr("data-src");
    $(this).parents(".product_item").find("img").attr("src", img_src);
  });
})