import { createAction, createAsyncAction } from 'typesafe-actions';



// inc,dec number
export const INCREMENT = 'counter/INCREMENT' as const;
export const DECREMENT = 'counter/DECREMENT' as const;
export const  increment = createAction(INCREMENT)<number>();
export const  decrement = createAction(DECREMENT)<number>();

const constants = {
    INCREMENT,
    DECREMENT
}

const testACtion ={
    increment,
    decrement
}


export default testACtion;
