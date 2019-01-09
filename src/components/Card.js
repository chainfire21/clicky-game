import React from "react";


function Card(props) {
    const divStyle = {width:"18rem"};
    return (
        <div className="card" style ={divStyle} >
            <button onClick = {props.onClick}><img className="card-img-top" src={props.source} id = {props.id} alt="Dags"></img></button>
        </div>
    );
}

export default Card;