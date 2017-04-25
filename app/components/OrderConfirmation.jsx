import React, { Component } from 'react'
import { Link } from 'react-router'

export default function ConfirmationPage() {
  return (
    <div>
        <br/>
        <br/>
        <h1 style={{textAlign: 'center'}}>Thank you for your order!</h1>
        <p className="heading" style={{textAlign: 'center'}}> Click <Link to={`catalog/`}> here </Link> to continue shopping. </p>
    </div>
  )
}

// super dumb component for now
