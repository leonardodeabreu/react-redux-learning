import React from 'react'
import ReactDOM from 'react-dom'
import Component from './component'
import {Primeiro, Segundo} from './component'

//app renderizado no index.html
ReactDOM.render(
    <div>
        <Primeiro/>
        <Segundo/>
    </div>

    , document.getElementById('app'))
