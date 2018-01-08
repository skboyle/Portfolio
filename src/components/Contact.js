import React from 'react'
import ErrorBox from './ErrorBox'
import FormItem from './FormItem'
import FormTextArea from './FormTextArea'
import Nav from './Nav.js';


class Contact extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      errors: []
    }
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event){
    let field = event.target.name
    let newValue = event.target.value
    this.setState({[field]: newValue})
  }



  render() {

    return (
      <div>
        <Nav/>
        <div className="container">
          <div className="contact-info">
            <p>Need custom work?</p>
            <a href="mailto:skboylework@gmail.com">✉ email me</a>
            <p>I'll get back to you within 48 hours.</p>
            <br/>
            <p>
              <a href="https://github.com/skboyle">GitHub</a></p>
            </div>

            {/* <form>
              <FormItem
              name="name"
              content={this.state.name}
              formText="Name"
              handler={this.handleChange}
            />

            <FormItem
            type="email"
            name="email"
            content={this.state.name}
            formText="Email"
            handler={this.handleChange}
          />


          <FormTextArea
          name="message"
          content={this.state.description}
          formText="Message"
          handler={this.handleChange}

        />

        <input type="submit" className="btn btn-primary" value="Submit " onClick="" />
      </form> */}
    </div>
  </div>
)
}
}
export default Contact;
