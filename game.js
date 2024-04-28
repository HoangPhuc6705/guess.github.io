import { Welcome, Yes, Intro, StoryList, Cont } from "./story.js";

const _createElement = (_ele, _Classes, _Insert) => {
  const New = document.createElement(_ele);
  New.className = _Classes;
  document.querySelector(`.${_Insert}`).appendChild(New);
}

const _deleteElement = (_classes) => {
  document.querySelector(`.${_classes}`).remove();
}

const text = document.querySelector('.ques');
text.innerHTML = Welcome;
const choose = document.querySelectorAll('.ans');
choose[0].innerHTML = Yes;
choose[1].innerHTML = Yes;

var story = 0;
var _intro = 0;

var left = document.querySelectorAll('.ans')[0];
var right = document.querySelectorAll('.ans')[1];

left.remove();
right.onclick = () => {
  choose[1].innerHTML = Cont;
  if (_intro > Intro.length - 1) {
    story++;
    _deleteElement('ans');
    _1stQuestion();
    return;
  }
  text.innerHTML = StoryList[story][_intro];
  _intro++;
}

const reset = () => {
  _createElement('div', 'ans', 'answers');
  _createElement('div', 'ans', 'answers');
  left = document.querySelectorAll('.ans')[0];
  right = document.querySelectorAll('.ans')[1];
}

const _1stQuestion = () => {
  if (story == 1) {
    reset();
  }
}