import React, { Component } from 'react'
import axios from 'axios'

export default class CreateUsers extends Component {
  constructor(props) {
    super(props)

    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      username: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      username: this.state.username
    }

    console.log(user)
    //调用后端接口创建user
    axios
      .post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data))

    this.setState({
      username: ''
    })
  }
  render() {
    return (
      <div>
        <h3 class="mt-3 mb-5">新建用户</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>用户名: </label>
            <input
              type="text"
              required
              className="form-control mt-2 mb-4"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="新建用户" className="btn btn-info" />
          </div>
        </form>
      </div>
    )
  }
}
