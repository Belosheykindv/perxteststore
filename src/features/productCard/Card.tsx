import React from 'react'
import { Button, Card as CardItem, Typography } from 'antd'

import { PlusOutlined, MinusOutlined } from '@ant-design/icons'

import styles from './Card.module.scss'

type CardPropsT = {
  cardItem: ProductItem
  addItemToCart?: (item: ProductItem) => void
  decItemsCount: (name: string) => void
  count: number
}
const { Meta } = CardItem

export const Card = ({
  cardItem: data,
  addItemToCart,
  decItemsCount,
  count,
}: CardPropsT) => {
  const cardContainerClass =
    count > 0
      ? `${styles.cardContainer} ${styles.counted}`
      : styles.cardContainer
  return (
    <CardItem
      className={cardContainerClass}
      size="small"
      cover={
        <img
          alt="example"
          style={{ objectFit: 'contain', aspectRatio: '4/3', width: '220px' }}
          src={`https://test-frontend.dev.int.perx.ru${data.image}`}
        />
      }
    >
      <Meta
        className={styles.cardMeta}
        title={
          <Typography className={styles.metaTitle}>{data.name}</Typography>
        }
        description={
          <Typography
            className={styles.metaPrice}
          >{`${data.price} $`}</Typography>
        }
      />
      {count > 0 && (
        <>
          <div className={styles.countNumber}>
            <Typography>{count}</Typography>
          </div>
          <div className={styles.minusBtn}>
            <Button
              onClick={() => decItemsCount && decItemsCount(data.name)}
              icon={<MinusOutlined />}
            ></Button>
          </div>
        </>
      )}
      <div className={styles.plusBtn}>
        <Button
          onClick={() => addItemToCart && addItemToCart(data)}
          icon={<PlusOutlined />}
        ></Button>
      </div>
    </CardItem>
  )
}
