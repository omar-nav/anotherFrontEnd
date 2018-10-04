import React, { Component } from 'react'
import { Input, Button } from 'antd'
import toastr from 'toastr'
import axios from 'axios'
class Signup extends Component {

  state = {
    signup: { username: "pollollon" },
    loading: false
  }

  onChange = (e) => {
    const field = e.target.name
    const value = e.target.value
    const { signup } = this.state
    signup[field] = value
    this.setState({ signup })
  }

  createUser = (e) => {
    e.preventDefault()
    const { signup } = this.state
    if (signup.password !== signup.password2) {
      toastr.error('escribe bien hijo!')
    }
    axios.post('http://localhost:3000/signup', signup)
      .then(user => {
        console.log(user)
        toastr.success("hey, lo lograte!!")
      })
      .catch(e => toastr.error("no pitufa"))
  }

  render() {
    const { signup, loading } = this.state
    return (
      <form onSubmit={this.createUser} style={{ width: 600, margin: "0 auto", padding: "20px" }}>
        <p>
          <Input
            name="username"
            type="text"
            onChange={this.onChange}
            value={signup.username}
            placeholder="Tu nombre de usuario" >
          </Input>
        </p>
        <p>
          <Input
            name="email"
            type="email"
            onChange={this.onChange}
            value={signup.email}
            placeholder="Tu correo" >
          </Input>
        </p>
        <p>
          <Input
            name="password"
            type="password"
            onChange={this.onChange}
            value={signup.password}
            placeholder="Tu password" >
          </Input>
        </p>
        <p>
          <Input
            name="password2"
            type="password2"
            onChange={this.onChange}
            value={signup.password2}
            placeholder="Repite tu password" >
          </Input>
        </p>
        <Button loading={loading} type="primary" htmlType="submit">Registrarme</Button>
      </form>
    )
  }
}
export default Signup