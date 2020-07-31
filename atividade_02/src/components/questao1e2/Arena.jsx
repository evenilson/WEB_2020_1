import React from 'react'
import { URL_HERO, URL_ENEMY } from '../../constants'

function Hero(props){
    return(
        <div>
            <div class="card">
                <div class="card-header">
                    {props.name}
                </div>
                <div class="card-body">
                    <img src={props.img} alt="Lutador Hero" width="200" height="200"/>
                </div>
            </div>
        </div>
    )
}

function Enemy(props){
    return(
        <div>
            <div class="card">
                <div class="card-header">
                    {props.name}
                </div>
                <div class="card-body">
                    <img src={props.img} alt="Lutador Edemy" width="200" height="200"/>
                </div>
            </div>
        </div>
    )
}

function Arena(){
    return(
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-3">
                <Hero name = "Baku" img={URL_HERO}/>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-3">
                <Enemy name = "Yujiro" img={URL_ENEMY}/>
            </div>
            <div className="col-md-2"></div>
        </div>
    ) 
}

export default Arena