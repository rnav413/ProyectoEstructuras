import React, { useState, useContext } from 'react';
import './main.css';
import { UserContext } from '../../UserContext';
import axios from 'axios';

export const NuevoComentario = () => {
    const [newCommentText, setNewCommentText] = useState('');
    const {userData} = useContext(UserContext)

    const handleNewCommentChange = (event) => {
      setNewCommentText(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const newComment =  newCommentText
     
      try {
        console.log(userData.token)
        const response = await axios.post('https://apiestructuras-production.up.railway.app/api/social/addPublication', {description: newComment}, {headers: {'x-token': userData.token }});
        console.log(response.data);
        window.location.reload()
      } catch (error) {
        console.error(error)
      }
      setNewCommentText('');
    };
    return (
        <div className="post-container">
            <div className="post">
                <div className="post-header">
                <img className="post-profile-image" src="https://via.placeholder.com/50" alt="Profile" />
                <span className="post-username">{userData.name}</span>
                </div>
                <form onSubmit={handleSubmit} className='form_agregar_comentario'>
                    <div className="post-textarea-container">
                        <div className="post-textarea">
                            <textarea placeholder="¿Qué estás pensando?"
                            value={newCommentText}
                            onChange={handleNewCommentChange}></textarea>
                        </div>
                    </div>
                    
                    <div className="post-button-container">
                        <button className="post-button" type='submit'>Publicar</button>
                    </div>
                </form>
            </div>
        </div>
      );
}
