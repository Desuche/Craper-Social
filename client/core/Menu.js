import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import auth from './../auth/auth-helper'
import { Link, withRouter } from 'react-router-dom'

const isActive = (history, path) => {
  if (history.location.pathname == path)
    return { color: '#1d9bf0' }
  else
    return { color: '#ffffff' }
}



function MenuComponent ({ history }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return(
  <AppBar>
    <Toolbar>
      <Link to="/" style={{ color: '#ffffff' }}>
        <Typography variant="h6" color='inherit' >
          Craper Social
        </Typography>
        </Link>
        <Link to="/">
        <IconButton aria-label="Home" style={isActive(history, "/")}>
          <QuestionAnswerIcon />
        </IconButton>
      </Link>
      {
        !auth.isAuthenticated() && (<span>
          <Link to="/signup">
            <Button style={isActive(history, "/signup")}>Sign up
            </Button>
          </Link>
          <Link to="/signin">
            <Button style={isActive(history, "/signin")}>Sign In
            </Button>
          </Link>
        </span>)
      }
      {
        auth.isAuthenticated() && (<span>
          <Link to={"/user/" + auth.isAuthenticated().user._id}>
            <Button style={isActive(history, "/user/" + auth.isAuthenticated().user._id)}>My Profile</Button>
          </Link>
          <Button color="inherit" onClick={() => {
            auth.clearJWT(() => history.push('/'))
          }}>Sign out</Button>
        </span>)
      }
      <div style={{float:'right', marginRight:5, marginLeft:'auto' }}>
      <Button
        variant='contained'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={'float:right'}
      >
        Admin
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
        auth.isAuthenticated() && <div>
        <Link to={"/users/"}><MenuItem onClick={handleClose}>All Users</MenuItem></Link>
        <Link to={"/user/" + auth.isAuthenticated().user._id}><MenuItem onClick={handleClose}>Profile</MenuItem></Link>
        <MenuItem onClick={() => {
            auth.clearJWT(() => history.push('/')); handleClose
            }}>Logout</MenuItem>
        </div>
        }
        {
        !auth.isAuthenticated() && <div>
        <Link to={"/users/"}><MenuItem onClick={handleClose}>All Users</MenuItem></Link>
        </div>
        }
      </Menu>
    </div>
    </Toolbar>
  </AppBar >
)}
const Menuc = withRouter(MenuComponent)

export default Menuc
