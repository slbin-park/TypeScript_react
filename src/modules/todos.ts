// 액션 타입 선언
const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;

let nextId:number = 1;
// todo 데이터에 사용할 고유 id

export const addTodo = (text:string) => ({
    type: ADD_TODO,
    todo: {
      id: nextId++, // 새 항목을 추가하고 nextId 값에 1을 더해줍니다.
      text
    }
  });
  export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
  });

// 리듀서의 초기 상태는 꼭 객체타입일 필요는 없다.

const initialState = [];

export default function todos(state = initialState, action) {
    switch (action.type) {
      case ADD_TODO:
        return state.concat(action.todo);
      case TOGGLE_TODO:
        return state.map(
          todo =>
            todo.id === action.id // id 가 일치하면
              ? { ...todo, done: !todo.done } // done 값을 반전시키고
              : todo // 아니라면 그대로 둠
        );
      default:
        return state;
    }
  }