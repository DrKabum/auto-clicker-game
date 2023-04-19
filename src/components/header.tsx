import { AppBar, Stack, Toolbar, Typography } from '@mui/material'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'

export default function Header() {
  return (
    <AppBar>
      <Stack>
        <Toolbar>
          <ArrowCircleDownIcon />
          <Typography variant='h5' component='h1' pl={1}>
            Button Inc.
          </Typography>
        </Toolbar>
      </Stack>
    </AppBar>
  )
}
