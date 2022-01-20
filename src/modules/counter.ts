// Ducks 패턴을 따를땐 액션의 이름에 접두사를 넣어줌

import { action } from "typesafe-actions";

// 액션 이름이 중복되는 것을 방지함
// 뒤에 as const 를 붙여줌으로써 나중에 액션 객체를 만들게 
// action.type 의 값을 추론하는 과정에서
// action.type 이 string 으로 추론되지 않고 'counter/INCREASE' 와 같이
// 실제문자열 값으로 추로 되도록 해준다.
const SET_DIFF = 'counter/SET_DIFF' as const;
const INCREASE = 'counter/INCREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;
const DECREASE = 'counter/DECREASE' as const;

// 액션 생성함수 만들기
// export해서 내보내준다.
export const setDiff = (diff:number) =>({type:SET_DIFF,diff});
export const increase = () =>({type:INCREASE});
export const decrease = () =>({type:DECREASE});
export const increseBy = (diff:number) =>({
  type : INCREASE_BY,
  // 액션에 부가적으로 필요한 값을 payload라는 이름으로 통이라
  // FSA 라는 규칙
  // 이 규칙을 적용하면 액션들이 모두 비슷한 구조로 이루어져있게 되어
  // 추루 다룰 때도 편함
  // 읽기 쉽고 , 액션 구조를 일반화함 액션에서 관련된 라이브러리를 사용 할 수 있게 해줌
  // 무조건 따를 필요는 없음
  payload : diff
})


// 모든 액션 객체들에 대한 타입을 준비
// ReturnType<typeof __> 는 특정 함수의 반환값을 추론해준다.
// 상단부에 액션타입을 선언 할 때 as const 를 하지 않으면 이부분이 제대로 작동하지 않는다.
type CounterAction = 
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increseBy>
  | ReturnType<typeof setDiff>;

type CounterState = {
  number:number,
  diff:number
}

const initialState : CounterState = {
    number:0,
    diff:1
};

// 리듀서 선언
// 리듀서는 export default로 내보냄

// 리듀서에서는 state 와ㅏ 함수 반환값이 일치하도록 작성
// 액션에서는 방금 만든 CounterAction을 사용

export default function counter(state:CounterState = initialState, action : CounterAction) {
    switch (action.type) {
      case SET_DIFF:
        return {
          ...state,
          diff: action.diff
        };
      case INCREASE:
        return {
          ...state,
          number: state.number + state.diff
        };
      case DECREASE:
        return {
          ...state,
          number: state.number - state.diff
        };
      default:
        return state;
    }
  }