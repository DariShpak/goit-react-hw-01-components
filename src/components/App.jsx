import { Profile} from 'components/Profile/profile';
import user from 'data/user.json';
import { StatList } from 'components/Statistics/StatList/StatList';
import data from 'data/data.json';
import { FriendList } from 'components/FriendList/FriendList/FriendList'
import friends from 'data/friends.json';
import { TransactionHistory } from './TransactionHistory/History/transactionHistory';
import transactions from 'data/transactions.json'

export const App = () => {
  return (
    <div>
{<Profile
avatar={user.avatar}
tag={user.tag}
username={user.username}
location={user.location}
followers={user.stats.followers}
views={user.stats.views}
likes={user.stats.likes}
/>}

{<StatList title="Upload stats" stats={data} />}

{<FriendList friends={friends} />}

{<TransactionHistory items={transactions} />}
    </div>
    )
}
