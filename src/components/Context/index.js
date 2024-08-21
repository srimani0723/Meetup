import React from 'react'

const Context = React.createContext({
  name: '',
  topic: '',
  isRegistered: '',
  changeName: () => {},
  changeTopic: () => {},
  register: () => {},
})
export default Context
