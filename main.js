"use strict";

const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const fourth = document.querySelector(".fourth");
const randomBtn = document.querySelector(".random-btn");

//랜덤버튼 이벤트 리스너
randomBtn.addEventListener("click", () => {
  getRandomNum();
});

//랜덤넘버 가져오는 함수
function getRandomNum() {
  let num1 = Math.floor(Math.random() * 500);
  let num2 = Math.floor(Math.random() * 500);
  let num3 = Math.floor(Math.random() * 500);
  let num4 = Math.floor(Math.random() * 500);
  getNum(num1, num2, num3, num4);
}

//랜덤넘버 비교하는 함수
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

//카운터 애니메이션
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
  setTimeout(() => counter(first, num1), 1000);
  setTimeout(() => counter(second, num2), 2500);
  setTimeout(() => counter(third, num3), 3500);
  setTimeout(() => counter(fourth, num4), 4500);
}
