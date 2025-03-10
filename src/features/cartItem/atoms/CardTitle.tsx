import { Space, Typography } from 'antd'
import React from 'react'

import styles from '../CartItem.module.scss'

type CardTitlePropsT = {
    name: string
    image: string
}
export const CardTitle = ({name, image}: CardTitlePropsT) => {
  return (
    <Space className={styles.cartTitle}>
      <img src={image} alt='item'/>
      <Typography>{name}</Typography>
    </Space>
  )
}
