import React, {Component} from 'react'
import './Card.css'
export default class Card extends Component{

    getColor(){
        if(this.props.azul) return 'bg-primary'
        if(this.props.vermelho) return 'bg-danger'
        if(this.props.verde) return 'bg-success'
        if(this.props.preto) return 'bg-dark'
        return 'bg-secondary'
    }

    render(){
        return(
            <div className={`card text-white ${this.getColor()}`}>
                <div className="card-header">
                    {this.props.title}
                </div>
                <div className="card-body">
                    {this.props.children}
                </div>
            </div>
        )
    }
}