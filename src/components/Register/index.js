import {useState} from 'react'

import Context from '../Context'
import Header from '../Header'

import {
  Options,
  Option,
  Heading,
  MainBox,
  RegImg,
  Form,
  Label,
  Input,
  Btn,
  Main,
  ErrMsg,
} from './style'

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

const Register = props => {
  const [error, setError] = useState('')

  return (
    <Context.Consumer>
      {value => {
        const {name, topic, changeTopic, changeName, register} = value

        const onChangeTopic = e => {
          changeTopic(e.target.value)
        }

        const onChangeName = e => {
          changeName(e.target.value)
        }

        const onSubmitReg = e => {
          e.preventDefault()

          if (name === '') {
            setError('please enter your name')
          } else {
            const {history} = props
            history.replace('/')
            register()
          }
        }

        return (
          <>
            <Header />
            <Main>
              <MainBox>
                <RegImg
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
                <Form onSubmit={onSubmitReg}>
                  <Heading>Let us join</Heading>
                  <Label htmlFor="name">NAME</Label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    onChange={onChangeName}
                    id="name"
                  />
                  <Label htmlFor="topics">TOPICS</Label>
                  <Options id="topics" onChange={onChangeTopic} value={topic}>
                    {topicsList.map(each => (
                      <Option value={each.id} key={each.id}>
                        {each.displayText}
                      </Option>
                    ))}
                  </Options>
                  <Btn type="submit" onSubmit={onSubmitReg}>
                    Register Now
                  </Btn>
                  {error === '' ? null : <ErrMsg>{error}</ErrMsg>}
                </Form>
              </MainBox>
            </Main>
          </>
        )
      }}
    </Context.Consumer>
  )
}

export default Register
