import React, { Component } from "react";
import Card from "./Card";
const images = [{id: 1, src: "https://wonderopolis.org/wp-content/uploads/2016/04/dreamstime_xl_23229351_(Custom).jpg" },
    {id: 2, src: "https://cdn.shopify.com/s/files/1/2836/2982/products/mozzarella-cheese_grande.jpg?v=1529434174" },
    {id: 3, src:"https://upload.wikimedia.org/wikipedia/commons/d/dc/Coulommiers_lait_cru.jpg"},
    {id: 4, src:"https://dairygood.org/~/media/shared/content/2016/blue.jpg?la=en&hash=6195C67A1A12C959639329AE4CAFAB7ABC08A4C7"},
    {id: 5, src:"https://static1.squarespace.com/static/5a1592ff0abd04e470d48744/t/5a27bbeeec212d905273a14c/1512996237223/Kaas.jpeg?format=1500w"},
    {id: 6, src:"https://cdn.shopify.com/s/files/1/2836/2982/products/gouda_hero_grande.jpg?v=1529434181"},
    {id: 7, src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnYdUe6JpSf2pdtvN8ADHUpNs2JQ4weZ6ABq1PoDnVuq1Y9JjwhA"},
    {id: 8, src:"https://www.seriouseats.com/recipes/images/2014/11/20141101-queso-fresco-final-slice-jennifer-latham.jpg"},
    {id: 9, src:"https://www.williams-sonoma.com/wsimgs/ab/images/dp/wcm/201849/0565/img99c.jpg"},
    {id: 10, src:"https://amp.thisisinsider.com/images/5c004e8ade34c40a2662ef52-750-563.jpg"},
    {id: 11, src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxFgaUWDSpSGCyPjcvPR9SrZ1f16mVhaCwcWX_Fmy-Hq1sh6bYIA"},
    {id: 12, src:"https://www.murrayscheese.com/site/images/items/20648500000.0.jpg?resizeid=6&resizeh=300&resizew=300"}];

class CardContainer extends Component {
    state = {
        clickedIds:[],
        imagesArr: images,
        highScore:0
    }

    scrambleImages(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    checkValidAndDone(id){
        if (this.state.clickedIds.includes(id)){
            alert("Already Chosen");
            const newImgArr = this.scrambleImages(images);
            const newScore = this.state.clickedIds.length;
            if(newScore > this.state.highScore){
                this.setState({clickedIds: [], imagesArr: newImgArr,highScore: newScore});
            }
            else{
                this.setState({clickedIds: [], imagesArr: newImgArr});

            }
        }
        else{
            const newArr = this.state.clickedIds;
            newArr.push(id);
            const newImgArr = this.scrambleImages(images)
            this.setState({clickedIds: newArr, imagesArr: newImgArr});
        }
    }
    onClick = event => {
        this.checkValidAndDone(event.target.id);
    };
    render() {
        return <div className = "container">
            <h2 className ="row justify-content-between">Dont click on an image twice!<p>Score: {this.state.clickedIds.length}</p> <p>High Score: {this.state.highScore}</p></h2>
            <div className="justify-content-between">{images.map(cheese => <Card key={cheese.id} id = {cheese.id} source={cheese.src} onClick={this.onClick} />)}</div>
            </div>;
    }
}

export default CardContainer;