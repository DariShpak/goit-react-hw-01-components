import { Profile} from 'components/Profile/profile';
import user from 'data/user.json';
// import { StatisticsTitle } from 'components/Statistics/StatTitle/StatisticsTitle'
import data from 'data/data.json'
import { StatList } from 'components/Statistics/StatList'

export const App = () => {
  return (
    <div>
{<Profile
avatar={user.avatar}
tag={user.tag}
username={user.username}
location={user.location}
stats={user.stats}
/>}
{<StatList title="Upload stats" stats={data} />}
    </div>
    )
}
