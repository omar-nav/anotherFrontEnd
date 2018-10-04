import React, { Component } from 'react'
import { Input, Button } from 'antd'
import axios from 'axios'
import toastr from 'toastr'

const url = 'http://localhost:3000/login'

class Login extends Component {
  state = {
    auth: {},
    loading: false
  }
  login = (e) => {
    e.preventDefault()
    const { auth } = this.state
    this.setState({ loading: true })
    axios.post(url, auth)
      .then(res => {
        console.log(res)
        toastr.success("te logueaste!")
        this.setState({ loading: false })
      })
      .catch(e => {
        toastr.error("no quiero tu cochinada")
        this.setState({ loading: false })
      })
  }
  onChange = (e) => {
    const field = e.target.name
    const value = e.target.value
    const { signup } = this.state
    signup[field] = value
    this.setState({ signup })
  }
  render() {
    const { auth, loading } = this.state
    return (
      <form onSubmit={this.login} style={{ width: 600, margin: "0 auto", padding: "20px" }} >
        <p>
          <Input
            name="email"
            type="email"
            onChange={this.onChange}
            value={auth.email}
            placeholder="Tu correo" >
          </Input>
        </p>
        <p>
          <Input
            name="password"
            type="password"
            onChange={this.onChange}
            value={auth.password}
            placeholder="Tu password" >
          </Input>
        </p>
        <Button loading={loading} type="primary" htmlType="submit">inicia sesion</Button>
      </form>
    )
  }
}
export default Login