import React from "react";


function Card(props) {
    const divStyle = {width:"12rem", margin:"1rem 1rem"};
    const imgStyle = {height:"8rem"};
    return (
        <div className="card col-4 float-left" style ={divStyle} >
            <img onClick = {props.onClick} className="card-img-top" src={props.source} id = {props.id} alt="Dags" style={imgStyle}></img>
        </div>
    );
}

export default Card;