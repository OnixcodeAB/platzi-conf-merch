import React from 'react'
import"../style/home.css"
import initialState from '../initialState'
import { Products } from '../components/Products'

export const Home = () => {
  return (
    <Products products = {initialState.products} />
  )
}
