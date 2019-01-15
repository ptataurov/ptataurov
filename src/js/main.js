import $ from 'jquery/dist/jquery';
import FullPage from 'fullpage.js/dist/fullpage';

window.onload = () => {
  const loader = document.querySelector('.spinner'),
      preloader = document.querySelector('.preloader');

  setTimeout(function() {
    fade(0, loader);
  }, 2000);

  const fade = (time, el) => {
     let op = 1;
     const timer = setInterval(() => {
         if (op <= 0.1){
             clearInterval(timer);
             el.style.display = 'none';
             if (preloader.style.display === 'none') {
               return false;
             }
             fade(20, preloader);
         }
         el.style.opacity = op;
         el.style.filter = 'alpha(opacity=' + op * 100 + ")";
         op -= op * 0.1;
     }, time);
  }
};

$(document).ready(function() {

  new FullPage('#fullpage', {
    dragAndMove: true
  });

  const home = () => {
    follower = $('.cursor-follower'), cursor = $('.cursor'), cursorfollow(), $(document).on("mousemove", e => {
        mouseX = e.pageX, mouseY = e.pageY;
    })
  }

  const cursorfollow = () => {
    let e = 0,
        s = 0;
    setInterval(() => {
      e += (mouseX - e) / 9, s += (mouseY - s) / 9, follower.css({
          left: e - 12,
          top: s - 12
      }), cursor.css({
          left: mouseX,
          top: mouseY
      })
    }, 16);

    $('.cur').on('mouseenter', function() {
      follower.addClass('active'), cursor.addClass('active'), $('.hover').addClass('hovered'), $(this).removeClass('hovered')
    }), $('.cur').on('mouseleave', function() {
      follower.removeClass('active'), cursor.removeClass('active'), $('.hover').removeClass('hovered')
    })
  }

  let mouseX = 0,
      mouseY = 0,
      follower, cursor = !1;

  home();
});
