import React from 'react'
import Swal from 'sweetalert2'

class Email extends React.Component{
    constructor(props) {
        super(props);
        this.state = { feedback: '',
                      name: '',
                      email: '' 
                     };
      }
      // saves the user's name entered to state
      nameChange = (event) => {
        this.setState({name: event.target.value})
      }
      
      // saves the user's email entered to state
      emailChange = (event) => {
        this.setState({email: event.target.value})
      }

      // saves the user's message entered to state
      messageChange = (event) => {
        this.setState({feedback: event.target.value})
      }

      //onSubmit of email form
      handleSubmit = (event) => {
        event.preventDefault();



        //This templateId is created in EmailJS.com
        const templateId = 'template_GVqxJa28';
    
        //This is a custom method from EmailJS that takes the information 
        //from the form and sends the email with the information gathered 
        //and formats the email based on the templateID provided.
        this.sendFeedback(templateId, {
                                        message_html: this.state.feedback, 
                                        from_name: this.state.name, 
                                        from_email: this.state.email
                                       }
                         )

      }
    
      //Custom EmailJS method
      sendFeedback = (templateId, variables) => {
        window.emailjs.send(
          "gmail", templateId,
          variables
          ).then(res => {
            // Email successfully sent alert
            Swal.fire({
              title: 'Email Successfully Sent',
              icon: 'success'
            })
          })
          // Email Failed to send Error alert
          .catch(err => {
            Swal.fire({
              title: 'Email Failed to Send',
              icon: 'error'
            })
            console.error('Email Error:', err)
          })
      }
    
      render() {
        return (
          
          //Form layout that requires a Name, Email, and message
          <form className="test-mailing" onSubmit={this.handleSubmit}>

            <br/>
            <div style={{fontSize: "1.2rem", marginLeft: "100px", marginRight: "100px"}}>

              <h2>MAIL US :)</h2>
              <div>
                  <label htmlFor="name">Name</label>
                  <input className="form-control email-inputs" name="user_name" type="text" 
                    id="name" onChange={this.nameChange} placeholder="Enter Name" required/>
              </div>

              <div>
                  <label htmlFor="email">Email</label>
                  <input className="form-control email-inputs" name="user_email" type="text"
                    id="email" onChange={this.emailChange} placeholder="Enter Email" required/>
              </div>

              <label htmlFor="message">
                  Message
              </label>
              <div>
                <textarea
                  id="message"
                  name="message"
                  onChange={this.messageChange}
                  placeholder="Put your message here"
                  required
                  className="email-text-area form-control"
                  rows="5"
                  cols="10"
                />
              </div>

            </div>

            <button type="submit" value="Submit" class="btn btn-success">Submit</button>
          </form>
        )
      }
}

export default Email