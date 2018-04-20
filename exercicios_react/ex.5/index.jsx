import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

//app renderizado no index.html
ReactDOM.render(
    <Family lastName="Abreu">
        <Member name="Leo"/>
        <Member name="Lucas"/>
        <Member name="Leticia"/>
    </Family>

, document.getElementById('app'))
