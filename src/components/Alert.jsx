import React from 'react'

export default function Alert(props) {
    // console.log('I am in the alert', props.alert.message, props.alert.type);
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{ props.alert.type} -   {props.alert.message}</strong>
    </div>
   
  )
}
