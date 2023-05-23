import React from 'react'
import { CardList } from './CardList'
import { robots } from './robots'
import { SearchBox } from './SearchBox'
import { Grid, Box } from '@mui/material'

interface IRobot {
  id: number
  name: string
  email: string
  username: string
}

export const App = () => {
  const [searchField, setSearchField] = React.useState<string>('')

  const filteredRobots = () => {
    return robots.filter((robot: IRobot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
  }

  return (
    <Box className='tc AppContainer'>
      <Box>
        <h1>RoboFriends!</h1>
        <Grid>
          <SearchBox searchField={searchField} setSearchField={setSearchField} />
          <CardList robots={filteredRobots()} />
        </Grid>
      </Box>
    </Box>
  )
}