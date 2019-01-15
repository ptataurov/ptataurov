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

document.addEventListener("DOMContentLoaded", () => {
  new FullPage('#fullpage', {
    dragAndMove: true
  });

  const start = () => {

    follower = document.querySelector('.cursor-follower');
    cursor = document.querySelector('.cursor');

    cursorfollow();

    document.addEventListener('mousemove', e => {
      mouseX = e.pageX;
      mouseY = e.pageY;
    });
  }

  const cursorfollow = () => {

    let e = 0, s = 0;

    setInterval(() => {

      e += (mouseX - e) / 9;
      s += (mouseY - s) / 9;

      follower.style.left = `${e - 12}px`;
      follower.style.top = `${s - 12}px`;



      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;

    }, 16);

    const cur = document.querySelectorAll('.cur');
    const hover = document.querySelectorAll('.hover');


    cur.forEach(el => {
      el.addEventListener('mouseenter', function(e) {

        follower.classList.add('active');
        cursor.classList.add('active');
        hover.forEach(el => el.classList.add('hovered'));
        this.classList.remove('hovered');
      });

      el.addEventListener('mouseleave', function() {
        follower.classList.remove('active');
        cursor.classList.remove('active');
        hover.forEach(el => el.classList.remove('hovered'));
      });
    });
  }

  let mouseX = 0,
    mouseY = 0,
    follower,
    cursor = !1;

  start();
});