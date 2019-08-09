import React from 'react'
import './Main.css'
import logo from "../assets/logo.svg";
import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";
export default function Main({match}){
  return (
    <div className='main-container'>
      <img src={logo} alt="Tindev"/>
      <ul>
        <li>
          <img src="https://avatars2.githubusercontent.com/u/28990749?v=4" alt=""/>
          <footer>
            <strong>ismael</strong>
            <p>menino show</p>
          </footer>

          <div className="buttons">
            <button type='button'>
              <img src={like} alt=""/>
            </button>
            <button type='button'>
              <img src={dislike} alt=""/>
            </button>
          </div>
        </li>

        <li>
          <img src="https://avatars2.githubusercontent.com/u/28990749?v=4" alt=""/>
          <footer>
            <strong>ismael</strong>
            <p>menino show</p>
          </footer>

          <div className="buttons">
            <button type='button'>
              <img src={like} alt=""/>
            </button>
            <button type='button'>
              <img src={dislike} alt=""/>
            </button>
          </div>
        </li>
      </ul>

      
    </div>
  );
}