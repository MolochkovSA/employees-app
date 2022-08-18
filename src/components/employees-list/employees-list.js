import EmployeesListItem from '../employees-list-item/employees-list-item'
import './employees-list.css'

const EmployeesList = ({ data }) => {
  const elements = data.map(({ id, ...item }) => {
    return <EmployeesListItem key={id} {...item} />
  })
  return <ul className="app-list list-group">{elements}</ul>
}

export default EmployeesList