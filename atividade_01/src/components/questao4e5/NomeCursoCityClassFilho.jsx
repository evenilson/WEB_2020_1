import React, {Component} from 'react';
export default class NomeCursoCityClassFilho extends Component{
    render(){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}