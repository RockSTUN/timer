const INITIAL_STATE = {
    breakLength: [5,0],
    sessionLength: [25,0],
    timeLeft: [25,0],
    timer: 'Session',
    paused: false
};
const MAGNITUDE = 1;

function reducer(state = INITIAL_STATE, action){
        switch(action.type){
            case 'INCREMENT_SESSION':
                return {...state, sessionLength: [state.sessionLength[0]+MAGNITUDE,state.sessionLength[1]],timeLeft: (state.timer == 'Session') ? [state.timeLeft[0]+MAGNITUDE, state.timeLeft[1]] : state.timeLeft}
            case 'INCREMENT_BREAK':
                return {...state, breakLength: [state.breakLength[0]+MAGNITUDE,state.breakLength[1]],timeLeft: (state.timer == 'Break') ? [state.timeLeft[0]+MAGNITUDE, state.timeLeft[1]] : state.timeLeft}
            case 'DECREMENT_SESSION':
                return {...state, sessionLength: [state.sessionLength[0]-MAGNITUDE,state.sessionLength[1]],timeLeft: (state.timer == 'Session') ? [state.timeLeft[0]-MAGNITUDE, state.timeLeft[1]] : state.timeLeft}
            case 'DECREMENT_BREAK':
                return {...state, breakLength: [state.breakLength[0]-MAGNITUDE,state.breakLength[1]],timeLeft: (state.timer == 'Break') ? [state.timeLeft[0]-MAGNITUDE, state.timeLeft[1]] : state.timeLeft}
            case 'PROC':
                return {...state, timeLeft: action.passTime}
            case 'START':
                return {...state, paused: state.paused ? false : true}
            case 'CHANGE_TIMER':
                return {...state, timeLeft: state.breakLength, timer: 'Break'}
            case 'RESET':
                return INITIAL_STATE
        default:
            return state
        }
};

const breakMap = {
    mapStateToProps: function(state){
        return {
            breakLength: state.breakLength
        }
    },
    mapDispatchToProps: function(dispatch){
    return{
        inc : () => dispatch({type: 'INCREMENT_BREAK'}),
        dec: () => dispatch({type: 'DECREMENT_BREAK'})
    }
    }
}
const sessionMap = {
    mapStateToProps: function(state){
        return {
            sessionLength: state.sessionLength
        }
    },
    mapDispatchToProps: function(dispatch){
        return {
        inc : () => dispatch({type: 'INCREMENT_SESSION'}),
        dec: () => dispatch({type: 'DECREMENT_SESSION'})
        }
        }
}

const displayerMap = {
    mapStateToProps: function(state){
        return {
            breakLength: state.breakLength,
            sessionLength: state.sessionLength,
            timeLeft: state.timeLeft,
            timer: state.timer,
            paused: state.paused
        }
    },
    mapDispatchToProps: function(dispatch){
        return {
            ticToc: (newTime) => dispatch({type: 'PROC', passTime: newTime}),
            stst: () => dispatch({type: 'START'}),
            reset: () => dispatch({type: 'RESET'}),
            changeTimer: ()=>dispatch({type: 'CHANGE_TIMER'})
        }
    }
}



export { reducer, displayerMap, sessionMap, breakMap };
