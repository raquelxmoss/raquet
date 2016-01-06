import React, { Component, PropTypes } from 'react';

class ComposeMessage extends Component {

  onSubmitClick() {
    const message = {
      subject: this.refs.subject.value.trim(),
      body: this.refs.body.value.trim()
    }
    this.props.createMessage(message.subject, message.body)
  }

  render() {
    return(
      <div>
        <p>
          <label htmlFor='subject'>Subject:</label><br />
          <input type='text' name='subject' ref='subject' />
        </p>
        <p>
          <label htmlFor='body'>Message:</label><br />
          <textarea rows='10' cols='30' name='body' ref='body'></textarea>
        </p>
        <p>
          <input type='submit' value='Send message' ref='send-message' onClick={() => this.onSubmitClick()} />
        </p>
      </div>
    )
  }
}

export default ComposeMessage