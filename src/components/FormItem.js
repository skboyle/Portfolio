import React from 'react';

const FormItem = props => {
  return(

    <div className="form-group">
      <label htmlFor={props.name}>{props.formText}</label>
      <input type="email" className="form-control" id={props.name}
        value={props.content}
        onChange={props.handler} aria-describedby="emailHelp" />
      </div>
  )
}

export default FormItem;
