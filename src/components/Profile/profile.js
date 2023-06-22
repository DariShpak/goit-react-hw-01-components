import PropTypes from 'prop-types'

function Profile({ avatar, tag, username, location, stats}) {
  return (
    <div>
    <div>
    <img src={avatar} alt={tag} width="200"/>
    <h2>{username}</h2>
    <p>@{tag}</p>
    <p>{location}</p>
    </div>
    <ul>
    <li>
    <span>Followers</span>
    <span>{stats.followers}</span>
 
    </li>
    <li>
     <span>Views</span>
     <span>{stats.views}</span>

    </li>
    <li>
    <span>Likes</span>
    <span>{stats.likes}</span>
    </li>
    </ul>
    </div>);
};

Profile.propTypes = {
avatar: PropTypes.string.isRequired,
tag: PropTypes.string.isRequired,
username: PropTypes.string.isRequired,
location: PropTypes.string.isRequired,
stats: PropTypes.object.isRequired,

}

export default Profile;
