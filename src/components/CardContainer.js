import React, { Component } from "react";
import Card from "./Card";
const images = [{id: 1, src: "https://wonderopolis.org/wp-content/uploads/2016/04/dreamstime_xl_23229351_(Custom).jpg" }
    , {id: 2, src: "https://cdn.shopify.com/s/files/1/2836/2982/products/mozzarella-cheese_grande.jpg?v=1529434174" }
    , {id: 3, src:"https://upload.wikimedia.org/wikipedia/commons/d/dc/Coulommiers_lait_cru.jpg"}];

class CardContainer extends Component {
    state = {
        clickedIds:[]
    }
    checkValidAndDone(id){
        console.log(id);
        if (this.state.clickedIds.includes(id)){
            alert("Already Chosen");
        }
        else{
            this.state.clickedIds.push(id);
        }
    }
    onClick = event => {
        console.log(event.target);
        this.checkValidAndDone(event.target.id);
    };
    render() {
        return images.map(cheese => <Card key={cheese.id} id = {cheese.id} source={cheese.src} onClick={this.onClick} />);
    }
}

export default CardContainer;