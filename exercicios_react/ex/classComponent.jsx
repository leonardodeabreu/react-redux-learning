import React, {Component} from 'react'

//props e state sao default de henranca
export default class ClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {value: props.initialValue}
    }

    sum(valor) {
        this.setState( { value: this.state.value + valor })
    }

    render() {
        return (
            <div>
                <h1>{this.props.label}</h1>
                <h2>{this.state.value}</h2>
                <button onClick={() => this.sum(-1)}>Menos</button>
                <button onClick={() => this.sum(1)}>Mais</button>
            </div>
        )
    }
}