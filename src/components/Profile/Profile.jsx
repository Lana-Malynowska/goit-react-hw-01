import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.user}>
      <div className={s.avatar}>
        <img className={s.image} src={image} alt="User avatar" width={200} />
        <p className={s.name}>{name}</p>
        <p className={s.text}>{tag}</p>
        <p className={s.text}>{location}</p>
      </div>

      <ul className={s.list}>
        <li className={s.stats}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>

        <li className={s.stats}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>

        <li className={s.stats}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
