import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getSingelProducts } from '../../features/Products/simgleProductSlice';

import { ShowProduct } from './ShowProduct';


export const SingelProduct = () => {
const list = useSelector((state)=> state.singleProducts.list)
const isLoading = useSelector((state)=> state.singleProducts.isLoading)
const { id } =useParams();
const dispatch  = useDispatch()
useEffect(()=>{ 
  dispatch(getSingelProducts(id));
},[]);

console.log(list.category);
  return !isLoading && list.length!==0? (
  <>
  <ShowProduct {...list}/>
 
  </>
  ):(
    'Загрузка')
  

  
}
