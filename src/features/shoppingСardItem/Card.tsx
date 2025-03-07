import React from 'react'
import { Card as CardItem } from 'antd'
import style from './Card.module.css'

type CardPropsT = {
  data: ProductItem
}
const { Meta } = CardItem

export const Card = ({ data }: CardPropsT) => {
  return (
    <div >
      <CardItem
        hoverable
        style={{padding: '4px'}}
        cover={
          <img
            alt="example"
            src={`https://test-frontend.dev.int.perx.ru${data.image}`}
          />
        }
      >
        <Meta title={data.name} description={`${data.price} $`} />
      </CardItem>
    </div>
  )
}
