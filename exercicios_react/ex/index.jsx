import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponent from './classComponent'

//app renderizado no index.html
ReactDOM.render(
    
    <ClassComponent label="Contador" initialValue={10} />

, document.getElementById('app'))
