import { useState } from 'react';

export const Reacciones = (props) => {
  const [likes, setLikes] = useState(props.likes);
  const [dislikes, setDislikes] = useState(props.dislikes);

  const handleIncrement1 = () => {
    setLikes(likes + 1);
  };

  const handleIncrement2 = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div className='reacciones'>
      
      <button className='like-button' onClick={handleIncrement1}/>
      <label className='label_like_count'>{likes}</label>

      <br />
      
      <button className="post-dislike-button" onClick={handleIncrement2}/>
      <label className='label_dislike_count'>{dislikes}</label>

    </div>

  );
}