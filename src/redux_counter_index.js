import React from 'react'
import ReactDOM from 'react-dom'
import { createStore ,combineReducers} from 'redux'
import Counter from './component/Counter'


import mathCounter from './reducers/math'
import visibilityFilter from './reducers/visibilityFilter'

import rootReducer from './reducers/rootReducer'



const store = createStore(mathCounter)

const rootEl = document.getElementById('root')
console.log(JSON.stringify(store.getState()))
// debugger;
const render = () => ReactDOM.render(

    <Counter
        store={store}

        value={store.getState()}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,

    rootEl
)

render()
store.subscribe(render)
