import React, { Component } from 'react'
import cl from './Loader.module.css'

export default class Loader extends Component {
    render() {
      return (
        <div className={cl.loader}></div>
      )
    }
  }