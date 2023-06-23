// import PropTypes from 'prop-types'
import css from 'components/FriendList/FriendList.module.css'

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return(
<li className={css.item}>
<span className={css.status}>
  { isOnline ? <p>🟢</p> : <p>🔴</p> } 
  </span>
<img className={css.avatar} src={avatar} 
alt="user avatar" width="48" />
<p className={css.name}>{name}</p>
</li>
  )
}