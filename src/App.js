import React, { Component } from "react"
import { render } from "@testing-library/react"
import { CardList } from "./components/card-list/card-list.component"
import { SearchBox } from "./components/search-box/search-box.component"
import "./App.css"

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: "",
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
  }

  handleChange(e) {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    // the 2 lines below are the same as the desctructuring above
    // const monsters = this.state.monsters
    // const searchField = this.state.searchField

    return (
      <div className="App">
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
