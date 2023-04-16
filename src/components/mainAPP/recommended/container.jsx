import { useState } from 'react';
import "./recomended.css";
import {Card} from './Recommended_cards';

export const Container = () => {

    const cardsData = [
        {
          profileImage: "https://via.placeholder.com/50",
          username: "Usuario1",
          origin: "Origen1"
        },
        {
          profileImage: "https://via.placeholder.com/50",
          username: "Usuario2",
          origin: "Origen2"
        },
        {
            profileImage: "https://via.placeholder.com/50",
            username: "Usuario3",
            origin: "Origen2"
          },
          {
            profileImage: "https://via.placeholder.com/50",
            username: "Usuario4",
            origin: "Origen2"
          },

        // ...
      ];

    const handleAccept = () => {
        console.log('Se aceptó la solicitud');
      }
    
      const handleReject = () => {
        console.log('Se rechazó la solicitud');
      }

      const [scrollPosition, setScrollPosition] = useState(0);
  return (
    <div className="post-recomended-container">
      <div className="recommended-container" onWheel={(e) => setScrollPosition(scrollPosition + e.deltaY)}>
         
      {cardsData.map((card, index) => (
            <Card
            key={index}
            profileImage={card.profileImage}
            username={card.username}
            origin={card.origin}
            onAccept={handleAccept}
            onReject={handleReject}
          />
            ))}
          
        
      </div>
    </div>
  );
}