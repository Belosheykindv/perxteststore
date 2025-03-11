import { Button, InputNumber, Space } from 'antd'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'

import styles from '../CartItem.module.scss'


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
    <Space className={styles.counter}>
      <Button
        onClick={() => onPlus(itemName)}
        icon={<PlusOutlined />}
        type="link"
      />
      <InputNumber
        value={count}
        controls={false}
        readOnly
        variant="borderless"
        style={{ width: '40px' }}
      />
      <Button
        onClick={() => onMinus(itemName)}
        icon={<MinusOutlined />}
        type="link"
      />
    </Space>
  )
}
