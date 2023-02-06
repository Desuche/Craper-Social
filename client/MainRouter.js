import React, {Component, useState} from 'react'
import {Route, Switch} from 'react-router-dom'
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
center:{
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  minHeight:"100vh"
      // position: 'absolute', 
      // left: '50%', 
      // top: '50%',
      // transform: 'translate(-50%, -50%)'
}
}))

const MainRouter = () => {
  const classes = useStyles()
  const [intro, setIntro] = useState(true)  
  setTimeout(() => {setIntro(false)}, 2000);
  
  return (
    <div >

    {intro && 
      <div className={classes.center}>
      <IntroScene/>
      </div>}

    {!intro &&
    <div>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/users" component={Users}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
        <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
        <Route path="/user/:userId" component={Profile}/>
      </Switch>
    </div>}
    </div>
    )
}

export default MainRouter
