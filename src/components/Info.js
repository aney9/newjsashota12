import React from "react";

class Info extends React.Component{
    render(){
        return(
            <div>
                <p><h3>Название фильма: {this.props.name}</h3></p>
                <p><h3>Возрастной рейтинг: {this.props.ageRating}+</h3></p>
                <img src={this.props.url} width="600px" height="400px" alt="" />
                <p><h3>Описание: {this.props.description}</h3></p>
                <p className="horizontal-line"></p>
            </div>
        )
    }
}
export default Info;