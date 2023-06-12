// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    condition: true,
    first: '',
    last: '',
    condition1: false,
    condition2: false,
  }

  changeFirstname = event => {
    this.setState({first: event.target.value})
  }

  changeLastname = event => {
    this.setState({last: event.target.value})
  }

  Blur = event => {
    if (event.target.value === '') {
      this.setState({condition1: true})
    } else {
      this.setState({condition1: false})
    }
  }

  Blur1 = event => {
    if (event.target.value === '') {
      this.setState({condition2: true})
    } else {
      this.setState({condition2: false})
    }
  }

  submitForm = event => {
    event.preventDefault()
    this.setState(prevState => ({condition: !prevState.condition,first:'',last:''}))
  }

  registrationComponent = () => {
    const {first, last, condition1, condition2} = this.state
    return (
      <div className="form-main-container">
        <form className="form" onSubmit={this.submitForm}>
          <div>
            <label htmlFor="first" className="label">
              FIRST NAME
            </label>
            <input
              type="text"
              value={first}
              placeholder="First name"
              id="first"
              onChange={this.changeFirstname}
              onBlur={this.Blur}
            />
            {condition1 ? <p className="error-msg">Required</p> : ''}
          </div>
          <div>
            <label htmlFor="last" className="label">
              LAST NAME
            </label>
            <input
              type="text"
              value={last}
              placeholder="Last name"
              id="last"
              onBlur={this.Blur1}
              onChange={this.changeLastname}
            />
            {condition2 ? <p className="error-msg">Required</p> : ''}
          </div>
          <button type="submut" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    )
  }
  changeComponent=()=>{
      this.setState(prevState=>({condition:!prevState.condition}))
  }

  feedbackComponent = () => {
    return (
      <div className="feedback-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
          className="tick-mark-img"
          <button type="button" className="response-button" onClick={this.changeComponent}>Submit Another Response</button>
        />
      </div>
    )
  }

  render() {
    const {condition} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">Registration</h1>
        {condition ? this.registrationComponent() : this.feedbackComponent()}
      </div>
    )
  }
}
export default RegistrationForm
