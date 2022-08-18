import AppInfo from '../app-info/app-info'
import SearchPannel from '../search-panel/search-pannel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css'

const App = () => {
  const data = [
    { name: 'Tom Tomas', salary: 800, increase: true, id: 1 },
    { name: 'Bob Bobus', salary: 3000, increase: false, id: 2 },
    { name: 'Fred Fredus', salary: 5000, increase: false, id: 3 },
  ]

  return (
    <div className="app">
      <AppInfo />
      <div className="search-pannel">
        <SearchPannel />
        <AppFilter />
      </div>
      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  )
}

export default App
