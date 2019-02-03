import FullPage from 'fullpage.js/dist/fullpage';

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
      el.addEventListener('mouseenter', function() {

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