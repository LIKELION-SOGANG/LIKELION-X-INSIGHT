import { atom } from 'recoil';

const defaultMyChatList = JSON.parse(localStorage.getItem('myChatList')) || [];
const defaultMyAnswerList =
  JSON.parse(localStorage.getItem('myAnswerList')) || [];

export const myChatListAtom = atom({
  key: 'myChatListAtom',
  default: defaultMyChatList,
});

export const myAnswerListAtom = atom({
  key: 'myAnswerListAtom',
  default: defaultMyAnswerList,
});
