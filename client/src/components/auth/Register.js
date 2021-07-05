import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom' 


const Register = () => {
  const history = useHistory()
  const [formdata, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const handleChange = (event) => {
    const newFormData = { ...formdata, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      await axios.post('/api/register', formdata)
      history.push('/login')
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
    <div className="row justify-content-center">
      <div className="col-sm-12 col-md-3">
        <form className="px-4 py-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleDropdownFormEmail1" className="form-label">Username</label>
            <input 
              onChange={handleChange} 
              type="username" 
              name="username" 
              className="form-control" 
              id="exampleDropdownFormEmail1.2"
              placeholder="Username" 
              value={formdata.username}/>
            
            <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email address</label>
            <input 
              onChange={handleChange} 
              type="email" 
              name="email"
              className="form-control" 
              id="exampleDropdownFormEmail1" 
              placeholder="email@example.com" 
              value={formdata.email}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleDropdownFormPassword1" className="form-label">Password</label>
            <input onChange={handleChange} type="password" name="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" value={formdata.password}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleDropdownFormPassword1" className="form-label">Password Confirmation</label>
            <input onChange={handleChange} type="password" name="passwordConfirmation" className="form-control" id="exampleDropdownFormPassword1.1" placeholder="Password Confirmation" value={formdata.passwordConfirmation}
            />
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="dropdownCheck"/>
              <label className="form-check-label" htmlFor="dropdownCheck">Remember me</label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary" id="buttonSignIn">Register</button>
        </form>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="/Register">New around here? Sign up</a>
        <a className="dropdown-item" href="#">Forgot password?</a>
      </div>
    </div>
  )
}

export default Register