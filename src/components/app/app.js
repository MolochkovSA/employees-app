import { Component } from 'react'

import AppInfo from '../app-info/app-info'
import SearchPannel from '../search-panel/search-pannel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { name: 'Tom Tomas', salary: 800, increase: true, rise: true, id: 1 },
        {
          name: 'Bob Bobus',
          salary: 3000,
          increase: false,
          rise: false,
          id: 2,
        },
        {
          name: 'Fred Fredus',
          salary: 5000,
          increase: false,
          rise: false,
          id: 3,
        },
      ],
      term: '',
      filter: 'all',
    }
  }
  maxIndex = (arr) => {
    arr.sort((a, b) => a.id - b.id)
    return arr[arr.length - 1].id
  }

  deleteItem = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((item) => {
        return item.id !== id
      }),
    }))
  }

  createItem = (item) => {
    item.increase = false
    item.rise = false
    item.id = this.maxIndex(this.state.data) + 1
    this.setState(({ data }) => {
      const newArr = [...data, item]
      return { data: newArr }
    })
  }

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] }
        }
        return item
      }),
    }))
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items
    }
    return items.filter((item) => item.name.includes(term))
  }

  onUpdateSearch = (term) => {
    this.setState({ term })
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter((item) => item.rise)
      case 'moreThen1000':
        return items.filter((item) => item.salary > 1000)
      default:
        return items
    }
  }

  onFilterSelect = (filter) => {
    this.setState({ filter })
  }

  render() {
    const { data, term, filter } = this.state
    const visibleData = this.filterPost(this.searchEmp(data, term), filter)
    return (
      <div className="app">
        <AppInfo data={data} />
        <div className="search-pannel">
          <SearchPannel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onCreate={this.createItem} />
      </div>
    )
  }
}

export default App
