import { MODE } from '../utils/constants';

const globalReducer = (state = { mode: JSON.parse(localStorage.getItem("mode")) }, action) => {
    switch (action.type) {
        case MODE:
            localStorage.setItem('mode', JSON.stringify(action?.payload))
            return { ...state, mode: action?.payload };
        default:
            return state;
    }
};

export default globalReducer;