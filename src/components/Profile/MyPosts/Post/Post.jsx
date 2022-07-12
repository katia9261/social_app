import React from 'react'
import s from './Post.module.css';

const Post = (props) => {

  return (
      <div className={s.item}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1U9vdqSC3uE2ex7uoM8Nm5-9XCFVlV_DdvLnl1i1C4Ad3ufoBpxa559GzTZqJlv6IVuI&usqp=CAU'/>
        { props.message };
        <div>
          <span>like</span>
        </div>
      </div>
  )
}

export default Post;