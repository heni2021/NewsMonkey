import React, { Component } from 'react'
import loading from './loading.gif'

const Spinner = () => {
  return (
    <div className='text-center'>
      <img className="my-3" src={loading} alt="Loading Image" />
    </div>
  )
}

export default Spinner
