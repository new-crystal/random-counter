"use strict";

const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const fourth = document.querySelector(".fourth");
const randomBtn = document.querySelector(".random-btn");

randomBtn.addEventListener("click", () => {
  getRandomNum();
});

function getRandomNum() {
  let num1 = Math.floor(Math.random() * 500);
  let num2 = Math.floor(Math.random() * 500);
  let num3 = Math.floor(Math.random() * 500);
  let num4 = Math.floor(Math.random() * 500);
  getNum(num1, num2, num3, num4);
}
function getNum(num1, num2, num3, num4) {
  if (
    num1 !== num2 &&
    num1 !== num3 &&
    num1 !== num4 &&
    num2 !== num3 &&
    num2 !== num4 &&
    num3 !== num4
  ) {
    innerHtml(num1, num2, num3, num4);
  } else {
    getRandomNum();
  }
}

function counter(counter, num) {
  let now = num;
  const handle = setInterval(() => {
    counter.innerHTML = Math.ceil(num - now);
    if (now < 1) {
      clearInterval(handle);
    }
    const step = now / 10;
    now -= step;
  }, 50);
}

function innerHtml(num1, num2, num3, num4) {
  setTimeout(() => counter(first, num1), 2000);
  setTimeout(() => counter(second, num2), 3000);
  setTimeout(() => counter(third, num3), 4000);
  setTimeout(() => counter(fourth, num4), 5000);
}
