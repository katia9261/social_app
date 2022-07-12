import React from 'react'
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (<nav className={s.nav}>
  <div className={s.item}>
    <NavLink to="/profile" className = { Profile => Profile.isActive ? s.active : s.item }>Profile</NavLink>
  </div>
  <div className={s.item}>
    <NavLink to="/dialogs" className = { Messages => Messages.isActive ? s.active : s.item }>Messages</NavLink>
  </div>
  <div className={s.item}>
    <NavLink to="./news" className = { News => News.isActive ? s.active : s.item }>News</NavLink>
  <div className={s.item}>
    <NavLink to="./music" className = { Music => Music.isActive ? s.active : s.item }>Music</NavLink>
  <div className={s.item}>
    <NavLink to="./settings" className = { Settings => Settings.isActive ? s.active : s.item }>Settings</NavLink>
  </div>
  </div>
  </div>
</nav>
)
}

export default Navbar