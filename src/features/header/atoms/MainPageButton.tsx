import { Typography } from 'antd'
import { NavLink } from 'react-router-dom'


export const MainPageButton = () => {
  return (
    <NavLink to={'/'}>
      <Typography>Главная страница</Typography>
    </NavLink>
  )
}
