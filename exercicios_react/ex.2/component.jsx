import React from 'react'

//chave é o corpo do método
export default () => (
    <h1>teste componente</h1>
)

//msm coisa passando parametro
export default props => (
    <h1>{props.value}</h1>
)