import { Space, Typography } from 'antd'
import React from 'react'

import styles from '../CartItem.module.scss'
type CardTitlePropsT = {
    name: string
    image: string
    price: number
}
export const CardTitle = ({name, image, price}: CardTitlePropsT) => {
  return (
    <Space className={styles.cartTitle}>
      <img src={image} />
      <Typography>{name}</Typography>
      <Typography>{`${price} $`}</Typography>
    </Space>
  )
}
