import React from 'react'
import { childrenWithProps } from '../utils/reactUtils'

//importar filhos o props.children
export default props => (
    <div> 
        <h1>Fammilia</h1>
        { childrenWithProps(props.children, props) }
    </div>
)

// suporta 1 elemento só
// {React.cloneElement(props.children, {...props})}