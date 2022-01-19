import {combineReducers} from 'redux';
import counter from './counter';
import todos from './todos'

const rootRedcuer = combineReducers({
    counter,
    todos
});

export default rootRedcuer;