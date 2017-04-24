import React from 'react'

export const Login = ({ login }) => (
  <form
    onSubmit={ evt => {
      evt.preventDefault()
      login(evt.target.username.value, evt.target.password.value)
    } } >

    <input className="login" name="username" placeholder="email" />
    <input className="login" name="password" type="password" placeholder="password" />
    <button type="submit">login</button>

  </form>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect(
  state => ({}),
  {login},
)(Login)
