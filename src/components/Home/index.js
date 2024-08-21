import {Link} from 'react-router-dom'

import Context from '../Context'
import Header from '../Header'

import {Box, Heading, Para, Button, Name, TopicPara, Image} from './style'

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

const Home = props => (
  <Context.Consumer>
    {value => {
      const {isRegistered, name, topic} = value

      const onRegister = () => {
        const {history} = props
        history.replace('/register')
      }

      const displayTopic = topicsList.filter(each => each.id === topic)

      return (
        <>
          <Header />
          {isRegistered ? (
            <Box>
              <Name>Hello {name}</Name>
              <TopicPara>Welcome to {displayTopic[0].displayText}</TopicPara>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </Box>
          ) : (
            <Box>
              <Heading>Welcome to Meetup</Heading>
              <Para>Please register for the topic</Para>
              <Link to="/register">
                <Button type="button" onClick={onRegister}>
                  Register
                </Button>
              </Link>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </Box>
          )}
        </>
      )
    }}
  </Context.Consumer>
)

export default Home
