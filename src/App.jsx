import React from "react";

import Profile from "./components/Profile/Profile";
import userData from "./assets/userData.json";

import FriendList from "./components/FriendList/FriendList";
import FriendListItem from "./components/FriendListItem/FriendListItem";

import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList />
      <FriendListItem />
      <TransactionHistory />
    </>
  );
};

export default App;
