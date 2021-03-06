import React from 'react'

function Hero(props){
    return(
        <div>
            <div class="card " Style="margin: 0 250px 0 251px;">
                <div class="card-header">
                    {props.name} já está na arena {props.arena}
                </div>
                <div class="card-body">
                    <img src={props.img} alt="Lutador Hero" width="200" height="200"/>
                </div>
            </div>
            <br/>
        </div>
    )
}

export default Hero