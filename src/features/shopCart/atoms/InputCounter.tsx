import { Button, InputNumber, Space } from 'antd'
import React from 'react'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'

type InputCounterPropsT = {
  count: number
  onPlus: (name: string) => void
  onMinus: (name: string) => void
  itemName: string
}
export const InputCounter = ({
  count,
  onPlus,
  onMinus,
  itemName,
}: InputCounterPropsT) => {
  return (
    <Space style={{gap: 0, border: '1px solid grey', borderRadius: '8px', width: '100px'}}>
      <Button onClick={() => onPlus(itemName)} icon={<PlusOutlined />} type='link' />
      <InputNumber value={count} controls={false} readOnly variant='borderless' style={{width: '40px'}} />
      <Button onClick={() => onMinus(itemName)} icon={<MinusOutlined />} type='link'/>
    </Space>
  )
}
