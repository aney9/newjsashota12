import React from "react";

class Header extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.films}>
        <input type="text" name="query" className="input" placeholder="Введите название фильма"/>
        <button className="button">Найти</button>
      </form>
    );
  }
}

export default Header;