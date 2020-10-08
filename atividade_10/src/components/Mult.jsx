import React, { Component } from 'react'
import Card from './Card'

import { connect  } from 'react-redux'

class Mult extends Component {

    mult(){
        return (this.props.numero1 * this.props.numero2)
    }

    render() {
        return (
            <Card title='Multiplicação'>
                <h3>
                    {this.mult()}
                </h3>
            </Card>
        )
    }
}

function mapStateToProps(state){
    return{
        numero1: state.Numero1.numero1,
        numero2: state.Numero2.numero2
    }
}

export default connect(mapStateToProps)(Mult)