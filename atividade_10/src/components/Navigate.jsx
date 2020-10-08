import React, { Component } from 'react'
import Card from './Card'
import './Navigate.css'

import { connect } from 'react-redux'

class Navigate extends Component {

    render() {
        return (
            <Card title='VALORES' verde>
                <div className='navigate'>
                    <input type='number' value={this.props.numero1} />
                    <input type='number' value={this.props.numero2}  /> 
                </div>
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

export default connect(mapStateToProps) (Navigate)
