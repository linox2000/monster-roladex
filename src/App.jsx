import React, { useState } from "react";
import { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");

  const [monsters, setMonsters] = useState([]);
  

  const filterdMonsters = monsters.filter((monster) =>
  monster.name.toLowerCase().includes(searchField.toLowerCase())
);

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value;
    setSearchField(searchFieldString)
  };

  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox
        placeholder="search monster"
        handleChange={onSearchChange}
      />
      
      <CardList monsters={filterdMonsters} /> 
    </div>
  );
};

/*class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFiled: "",
      title: "Monster Rolodax",
    };
  }
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }
  componentDidMount() {
    console.log('componentDidMount')
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  handleChange = (e) => {
    this.setState({ searchFiled: e.target.value, title: e.target.value });
  };
  onSearchChange = (e) => {
    this.setState({ searchFiled: e.target.value });
  };
  render() {
    const { monsters, searchFiled, title } = this.state;
    const filterdMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFiled.toLowerCase())
    );

    return (
      <div className="App">
        <h1>{title}</h1>
        <SearchBox
          placeholder="search monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filterdMonsters} />
      </div>
    );
  }
}*/

export default App;
