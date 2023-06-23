import css from 'components/FriendList/FriendList.module.css';
import { FriendListItem } from 'components/FriendList/FriendListItem/FriendListItem'
import PropTypes from 'prop-types'

export const FriendList = ({ friends }) => {
return(
<div className={css.wrapper}>
<ul className={css.friendlist}>

  {friends.map( ({ id, avatar, name, isOnline }) => (

  <FriendListItem 
  key={id} 
  avatar={avatar}
  name={name}
  isOnline={isOnline}
  />

  ))}
  </ul>
</div> 
)}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.exact({  
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired , 
    isOnline: PropTypes.bool.isRequired, 
  })
 )
}