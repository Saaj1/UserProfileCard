import React from 'react';
import './UserProfileCard.css';

function UserProfileCard() {
  return (
    <div className="user-profile-card">
      <div className="heading">
        <img src="saajida.jpg" alt="Profile" />
        <div>
          <h2>Saajida Mathen </h2>
          <h5>Front-End Developer 💻</h5>
        </div>
      </div>
      <p>
        A dynamic Front-End Developer, a tech virtuoso skilled in crafting captivating user experiences with HTML, CSS, JavaScript, React, Node.js, and bringing boundless creativity to life with the power of Figma!
      </p>
      <div className="user-stats">
        <div>
          <h6>Followers</h6>
          <p>3256</p>
        </div>
        <div>
          <h6>Following</h6>
          <p>1250</p>
        </div>
        <div>
          <h6>Projects</h6>
          <p>20+</p>
        </div>
      </div>
      <button className = "contact-btn"type="submit">Contact</button>
      <button className = "profile-btn"type="submit">View Profile</button>
    </div>
  );
}

export default UserProfileCard;
