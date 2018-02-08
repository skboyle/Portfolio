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
            <h5>Need custom work?</h5>
            <h5><a href="mailto:skboylework@gmail.com">✉ email me</a></h5>
            <h5>I'll get back to you within 48 hours.</h5>
            <br/>
            <h5>
              <a href="https://github.com/skboyle">GitHub</a></h5>
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
