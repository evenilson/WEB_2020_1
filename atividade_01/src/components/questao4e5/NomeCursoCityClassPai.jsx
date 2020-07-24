import React, {Component} from 'react';
export default class NomeCursoCityClassPai extends Component{
    render(){
        return (
            <div>
                <h1>Nome: {this.props.nome}</h1>
                <h1>Curso: {this.props.curso}</h1>
                <h1>Cidade de origem: {this.props.city}</h1>
            </div>
        )
    }
}