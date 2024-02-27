import { atom } from 'recoil';

const defaultMyChatList1 =
  JSON.parse(localStorage.getItem('myChatList1')) || [];
const defaultMyAnswerList1 =
  JSON.parse(localStorage.getItem('myAnswerList1')) || [];

export const myChatListAtom1 = atom({
  key: 'myChatListAtom1',
  default: defaultMyChatList1,
});

export const myAnswerListAtom1 = atom({
  key: 'myAnswerListAtom1',
  default: defaultMyAnswerList1,
});
const defaultMyChatList2 =
  JSON.parse(localStorage.getItem('myChatList2')) || [];
const defaultMyAnswerList2 =
  JSON.parse(localStorage.getItem('myAnswerList2')) || [];

export const myChatListAtom2 = atom({
  key: 'myChatListAtom2',
  default: defaultMyChatList2,
});

export const myAnswerListAtom2 = atom({
  key: 'myAnswerListAtom2',
  default: defaultMyAnswerList2,
});

const defaultMyChatList3 =
  JSON.parse(localStorage.getItem('myChatList3')) || [];
const defaultMyAnswerList3 =
  JSON.parse(localStorage.getItem('myAnswerList3')) || [];

export const myChatListAtom3 = atom({
  key: 'myChatListAtom3',
  default: defaultMyChatList3,
});

export const myAnswerListAtom3 = atom({
  key: 'myAnswerListAtom3',
  default: defaultMyAnswerList3,
});
