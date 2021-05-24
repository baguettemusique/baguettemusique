  $(document).ready(function() {
        $('.carousel').carousel({
            interval: 5000
        }); 
        $('.carousel').carousel('cycle');
    
   $('#top-nav').onePageNav({
                 currentClass: 'active',
                 changeHash: true,
                 scrollSpeed: 500
            });


});



  // animation
$(window).scroll(function() {
    $('#about,.album,.blogevent ul li').each(function(){
    var elementPos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (elementPos < topOfWindow+400) {
        $(this).addClass("animated fadeInUp");
      }
    });


    $('h3,h4').each(function(){
    var elementPos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (elementPos < topOfWindow+500) {
        $(this).addClass("animated fadeInUp");
      }
    });


  });


// méthode bourrin pour navbar liens externes
function overridePreventDefault(event) {
  window.open(event.target.href)
}
// Must be called after the load of bootstrap.js
$('.navbar a[target=_blank]').on("click", overridePreventDefault)

// fix links in navbar one by one
document.getElementById("idcreations").onclick = function () {
  location.href = "creations.html";
};
document.getElementById("idhome").onclick = function () {
  location.href = "index.html";
};
document.getElementById("idcours").onclick = function () {
  location.href = "cours_ateliers.html";
};
document.getElementById("youtubelogo").onclick = function () {
location.href = "https://www.youtube.com/channel/UCCgyfiQ5aF_u8WJtjWztUew";
};
document.getElementById("facebooklogo").onclick = function () {
  location.href = "https://www.facebook.com/baguette74";
  };
  document.getElementById("mastodonlogo").onclick = function () {
    location.href = "https://mastodon.social/web/accounts/921984";
    };
    document.getElementById("soundcloudlogo").onclick = function () {
      location.href = "https://soundcloud.com/baguette74/tracks";
      };





