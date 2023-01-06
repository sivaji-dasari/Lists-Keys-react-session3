import UserProfile from './components/UserProfile'
import './App.css'

const userDetailsList = [
  {
    uniqueKey: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueKey: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueKey: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueKey: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">users List</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails={eachItem} key={eachItem.uniqueKey} />
      ))}
    </ul>
  </div>
)

export default App
