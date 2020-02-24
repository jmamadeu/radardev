import React from "react";

import "./styles.css";

export default function DevITem({ dev }) {
  return (
    <li className='dev-item'>
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div className='user-info'>
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(", ")}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/jmamadeu${dev.github_username}`}>
        Acessar Perfil no github
      </a>
    </li>
  );
}
