import s from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.friend}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={s.name}>{name}</p>
      {isOnline ? (
        <p className={s.status}>Online</p>
      ) : (
        <p className={s.status}>Offline</p>
      )}
    </li>
  );
};

export default FriendListItem;
