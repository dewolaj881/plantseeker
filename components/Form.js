import React from 'react'
import Input from "./Input"

class Form extends React.Component {

  state = {
    value: "",
  }

  changeHandler = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <Input changeHandler={this.changeHandler} value={this.state.value} placeholder={this.props.placeholder} />
    )
  }
}

export default Form
