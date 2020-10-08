import React, { Component } from 'react'
import Card from './Card'

import { connect  } from 'react-redux'


class Bigger extends Component {

    bigger(){
        if(this.props.numero1 > this.props.numero2){
            return this.props.numero1
        }
        else if(this.props.numero1 < this.props.numero2){
            return this.props.numero2
        }
        else{
            return 'Iguais'
        }
    }

    render() {
        return (
            <Card title='Maior'>
                <h3>
                    {this.bigger()}
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

export default connect(mapStateToProps)(Bigger)