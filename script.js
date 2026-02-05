// Lightweight script: nav toggle + smooth scrolling
document.addEventListener('DOMContentLoaded', function(){
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('site-nav');
  toggle.addEventListener('click', function(){
    nav.classList.toggle('open');
  });

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      var targetId = this.getAttribute('href');
      if(targetId.length > 1){
        var el = document.querySelector(targetId);
        if(el){
          e.preventDefault();
          el.scrollIntoView({behavior:'smooth',block:'start'});
          // close nav on mobile
          nav.classList.remove('open');
        }
      }
    });
  });
});
