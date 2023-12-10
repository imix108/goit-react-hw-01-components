import React from 'react';
import Profile  from './Profile/Profile'; 
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/Friendlist';
import TransactionHistory from './TransactionHistory/Transactionhistory';

import friendsData from 'friends';
import data from 'data';
import user from 'user';
import transactions from 'transactions';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </div>
  );
};


