import {
  AppBar,
  Box,
  Button,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material'
import { FormEvent, useState } from 'react'

export function Footer({
  setTickContext,
}: {
  setTickContext: React.Dispatch<React.SetStateAction<number>>
}) {
  const [tickInput, setTickInput] = useState(100)

  const handleTickSubmit = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    setTickContext(tickInput)
  }

  return (
    <AppBar sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Stack justifyContent='space-between' direction='row'>
          <Typography variant='h5' component='p'>
            Footer
          </Typography>
          <form onSubmit={(e) => handleTickSubmit(e)}>
            <Stack direction='row'>
              <TextField
                id='tick-wait'
                label='Time between ticks in ms'
                variant='outlined'
                onChange={(e) => setTickInput(Number(e.target.value))}
                value={tickInput}
              />
              <Button onClick={(e) => handleTickSubmit(e)}>Submit</Button>
            </Stack>
          </form>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
