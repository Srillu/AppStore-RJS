// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {imageUrl, category, appName} = appDetails

  return (
    <li className="project-item-container">
      <img className="project-item-image" alt={appName} src={imageUrl} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
