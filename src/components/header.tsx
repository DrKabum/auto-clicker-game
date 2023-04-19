import {
  AppBar,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import { useState } from 'react'

export default function Header({
  handleResetGame,
}: {
  handleResetGame: () => void
}) {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev)
  }

  return (
    <AppBar>
      <Stack direction='row' justifyContent='space-between'>
        <Toolbar>
          <ArrowCircleDownIcon />
          <Typography variant='h5' component='h1' pl={1}>
            Button Inc.
          </Typography>
        </Toolbar>
        <Button onClick={toggleDrawer}>
          <SettingsIcon sx={{ color: 'white' }} />
        </Button>
        <Drawer anchor='right' open={drawerOpen} onClose={toggleDrawer}>
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={handleResetGame}>
                <ListItemIcon>
                  <RestartAltIcon />
                </ListItemIcon>
                <ListItemText primary='Reset save'></ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </Stack>
    </AppBar>
  )
}
