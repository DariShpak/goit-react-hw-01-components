import Profile from './Profile/profile.js';
import user from '../user.json';

export const App = () => {
  return (
    <div>
<Profile
avatar={user.avatar}
tag={user.tag}
username={user.username}
location={user.location}
stats={user.stats}
/>
    </div>
);
};
