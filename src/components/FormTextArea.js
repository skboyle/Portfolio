import React from 'react';

const FormTextArea = props => {
  return(
    <div className="form-group">
      {props.formText}<label htmlFor={props.name}></label>
      <textarea className="form-control"         id={props.name}
        value={props.content}
        name={props.name}
        onChange={props.handler}
        rows="3"></textarea>
    </div>
  )
}

export default FormTextArea;
