"use client";
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import ProductSection from './ProductSection';

export default function Home() {

  const [title, setTitle] = useState('Celebration wear for Men');
  const [description, setDescription] = useState("Welcome to Bagtesh Fashion Buy Indian Men's Ethnic suits, Tuxedos, Sherwanis, Nehru jacket, Jodhpurs pants, Blazers, Shirts and much more.")

  const [womenTitle, setWomenTitle] = useState('Celebration wear for Women');
  const [womenDescription, setWomenDescription] = useState("Beautiful collection of Lehenga cholis, Sarees, Salwar suits for engagement, wedding and other ethnic occasions.")

  const [mensProducts, setMensProducts] = useState([]);
  const [womenProducts, setWomenProducts] = useState([]);


  useEffect(() => {
    axios.get('https://wscubetech.co/ecommerce-api/products.php', {
        params : {
          limit : 8,
          categories : 'mens-shirts,mens-shoes'
        }
    })
    .then((result) => {
      setMensProducts(result.data.data)
    })
    .catch(() => {
      toast.error('Something went wrong !!')
    })
  },[]);

  useEffect(() => {
    axios.get('https://wscubetech.co/ecommerce-api/products.php', {
        params : {
          limit : 8,
          categories : 'tops,womens-bags,womens-dresses,womens-shoes,womens-watches,womens-jewellery,skin-care'
        }
    })
    .then((result) => {
      setWomenProducts(result.data.data)
    })
    .catch(() => {
      toast.error('Something went wrong !!')
    })
  },[]);

  return (
    <>
      <ProductSection title={title} description={description} products={mensProducts}/>
      <ProductSection title={womenTitle} description={womenDescription} products={womenProducts}/>
    </>
  )
}
