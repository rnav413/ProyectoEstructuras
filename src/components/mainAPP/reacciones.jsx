import { useState } from 'react';

export const Reacciones = () => {
  const [count1, setCount1] = useState(Math.floor(Math.random() * 100));
  const [count2, setCount2] = useState(Math.floor(Math.random() * 100));

  const handleIncrement1 = () => {
    setCount1(count1 + 1);
  };

  const handleIncrement2 = () => {
    setCount2(count2 + 1);
  };

  return (
    <div className='reacciones'>
      
      <button className='like-button' onClick={handleIncrement1}/>
      <label className='label_like_count'>{count1}</label>

      <br />
      
      <button className="post-dislike-button" onClick={handleIncrement2}/>
      <label className='label_dislike_count'>{count2}</label>

    </div>

  );
}