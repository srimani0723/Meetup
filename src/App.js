import {useState} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Context from './components/Context'
import Register from './components/Register'
import Home from './components/Home'
import NotFound from './components/NotFound'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const App = () => {
  const [name, setName] = useState('')
  const [topic, setTopic] = useState(topicsList[0].id)
  const [register, setRegister] = useState(false)

  const onChangeName = prop => {
    setName(prop)
  }

  const onChangeTopic = prop => {
    setTopic(prop)
  }

  const onRegister = () => {
    setRegister(true)
  }

  return (
    <Context.Provider
      value={{
        name,
        topic,
        isRegistered: register,
        changeName: onChangeName,
        changeTopic: onChangeTopic,
        register: onRegister,
      }}
    >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </Context.Provider>
  )
}

export default App
