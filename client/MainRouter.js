import React, { Component, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import EditProfile from './user/EditProfile'
import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
import Menu from './core/Menu'
import IntroScene from './core/Intro'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  paper: {
    bgcolor: '#000000',
    margin: 'auto',
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2)
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    colour: "#000000"
    // position: 'absolute', 
    // left: '50%', 
    // top: '50%',
    // transform: 'translate(-50%, -50%)'
  },
  main: {
    display: 'flex',
    m: 1,
    p: theme,
    bgcolor: '#000000',
    color: '#000000',
    marginTop: 80,
    justifyContent: 'center'

  }
}))

const MainRouter = () => {
  const classes = useStyles()
  const [intro, setIntro] = useState(true)
  setTimeout(() => { setIntro(false); console.log('intro out') }, 700);



  return (
    <div >

      {intro &&
        <div className={classes.center}>
          <IntroScene />
        </div>}

      {
        <div >
          <div className={classes.main}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/users" component={Users} />
              <Route path="/signup" component={Signup} />
              <Route path="/signin" component={Signin} />
              <PrivateRoute path="/user/edit/:userId" component={EditProfile} />
              <Route path="/user/:userId" component={Profile} />
            </Switch>
          </div>


          {!intro &&
          <div style={{ position: 'static' }}>
            <Menu />
          </div>}

        </div>
      }
    </div>
  )
}

export default MainRouter
