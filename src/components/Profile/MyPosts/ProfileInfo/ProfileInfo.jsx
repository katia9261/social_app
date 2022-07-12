import React from "react";
import s from "./ProfileInfo.module.css";


const ProfileInfo = () => {
  return (
    <div className={s.headerKitty}>
      <img src="https://news.harvard.edu/wp-content/uploads/2014/10/hello-kitty-wallpaper-37_605.jpg"></img>
      <div className={s.descriptionBlock}>Ava + description</div>
    </div>
  );
};

export default ProfileInfo;