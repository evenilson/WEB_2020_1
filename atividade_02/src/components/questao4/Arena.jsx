import React from 'react'

export default(props) =>
    <div >
        Nome da Arena: {props.arena}
        {React.Children.map(props.children, personagem => {
            return React.cloneElement(personagem, { ...props });
        })}
    </div>
     

