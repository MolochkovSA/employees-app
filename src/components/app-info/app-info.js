import './app-info.css'

const AppInfo = ({ data }) => {
  return (
    <div className="app-info">
      <h1>Учет стотрудников в компании N</h1>
      <h2>Общее число сотрудников: {data.length}</h2>
      <h2>Премию получат {data.filter((item) => item.increase).length}:</h2>
    </div>
  )
}

export default AppInfo
