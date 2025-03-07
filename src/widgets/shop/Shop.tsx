import React from "react"
import style from './Shop.module.css'
import { Card } from "../../features/shoppingСardItem"
import { useGetProductsQuery } from "../../shared/api/getProducts";

export const Shop = () => {
    const { data, error, isLoading } = useGetProductsQuery(['id1', 'id2']); // Передайте массив ID дилеров или undefined
    console.log('test ', data)
    return(
        <div className={style.shopContainer}>
            {data && data.map((item,index)=>(<Card data={item} key={index}/>))}
        </div>
    )
}