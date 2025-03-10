import React from 'react'
import "./Vertigo.css";
import Breadcrumb from './Breadcrum.js'
import Form from '../vertigo-clinic/Form.js'
import Prices from './Prices.js'
import Images from './Images.js'

export default function index() {
  return (
    <div>
      <main>
         <Breadcrumb/>
         <Form/>
         <Prices/>
         <Images/>
      </main>
    </div>
  )
}
