import React from 'react'
import ReactDOM from 'react-dom'
import Files from './Files'
import Stars from './components/stars'
import Logo from './components/Logo'
import Queue from './components/Queue'

import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
    <>
        <Provider store={store}>
            <Stars />
            <section className="w-full h-full flex flex-col items-center justify-center relative">
                <Logo />
                <Files />
                <Queue />
            </section>
        </Provider>
    </>,
    document.getElementById('root')
)
