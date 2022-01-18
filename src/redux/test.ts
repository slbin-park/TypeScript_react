import React from 'react';
import {createStore} from 'redux';
import Actions from './actions';
// createStore는 스토어를 만들어주는 함수
// 리액트 프로젝트에서는 단 하나의 스토어를 만든다.

const initialState={
    counter:0,
    text:'',
    list:[],
};

// 액션 타입정의
// 액션 타입은 주로 대문자로 작성한다.
const INCREASE = 'INCREASE';
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST ="ADD_TO_LIST";

// 액션 생성함수 정의
const increase = () =>({
    type:INCREASE
})

const decrease = () =>({
    type:DECREASE
})

const changeText = text =>({
    type:CHANGE_TEXT,
    text
})

const addToList = item =>({
    type:ADD_TO_LIST,
    item
})

// 리듀서 만들기
// 액션 생서어 함수들을 통해 만들어진 객체들을 참조
// 리듀서에서는 불변성을 지켜줘야함


function reducer(state = initialState,action){
    switch (action.type){
        case INCREASE:
            return{
                ...state,
                counter : state.counter+1
            };
        case DECREASE:
            return{
                ...state,
                counter:state.counter-1
            };
        case CHANGE_TEXT:
            return{
                ...state,
                text:action.text
            };
        case ADD_TO_LIST:
            return{
                ...state,
                list:state.list.concat(action.imte)
            };
        default:
            return state;
    }
}

// 스토어 생성
const store = createStore(reducer);

console.log(store.getState());

// 스토어 안에 들어있는 상태가 바뀔때 마다 호출되는 함수
const listener = () =>{
    const state = store.getState();
    console.log(state);
}

const unsubscribe = store.subscribe(listener);

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({ id: 1, text: '와우' }));