import React from 'react'
import { CardList } from './Components/CardList'
import { robots as myRobots } from './Components/robots'
import { SearchBox } from './Components/SearchBox'
import { Grid, Box } from '@mui/material'
import { Scroll } from './Components/scroll'

interface IRobot {
  id: number
  name: string
  email: string
  username: string
}

export const App = () => {
  const [robots, setRobots] = React.useState<Array<IRobot>>(myRobots)
  const [searchField, setSearchField] = React.useState<string>('')

  React.useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => { setRobots([...robots, ...users]) })

  }, [])


  const filteredRobots = () => {
    return robots.filter((robot: IRobot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
  }

  return (
    <Box className='tc AppContainer'>
      <Box>
        <h1 className='f1'>Find your RoboFriends!</h1>
        <Grid>
          <SearchBox searchField={searchField} setSearchField={setSearchField} />
          <Scroll>
            <CardList robots={filteredRobots()} />
          </Scroll>
        </Grid>
      </Box>
    </Box>
  )
}

