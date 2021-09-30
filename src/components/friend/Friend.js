import React, { Component } from 'react';
import './friend.scss'
import Friends from '../../assets/friends.png'

class Friend extends Component {
  render() {
    return (
      <div class="friend__container">
        <div className="friend__title">
          <h4>Người liên hệ</h4>
          <img src={Friends} alt="hinhanh" />
          <img src={Friends} alt="hinhanh" />
          <img src={Friends} alt="hinhanh" />
        </div>
        <ul className="list__friend">
          <li className="friend__item">
            <img src={Friends} alt="hinhanh" />
            <span>Minh Chính</span>
          </li>
          <li className="friend__item">
            <img src={Friends} alt="hinhanh" />
            <span>Minh Chính</span>
          </li>
          <li className="friend__item">
            <img src={Friends} alt="hinhanh" />
            <span>Minh Chính</span>
          </li>
          <li className="friend__item">
            <img src={Friends} alt="hinhanh" />
            <span>Minh Chính</span>
          </li>
          <li className="friend__item">
            <img src={Friends} alt="hinhanh" />
            <span>Minh Chính</span>
          </li>
          <li className="friend__item">
            <img src={Friends} alt="hinhanh" />
            <span>Minh Chính</span>
          </li>
          <li className="friend__item">
            <img src={Friends} alt="hinhanh" />
            <span>Minh Chính</span>
          </li>
          <li className="friend__item">
            <img src={Friends} alt="hinhanh" />
            <span>Minh Chính</span>
          </li>
          <li className="friend__item">
            <img src={Friends} alt="hinhanh" />
            <span>Minh Chính</span>
          </li>
          <li className="friend__item">
            <img src={Friends} alt="hinhanh" />
            <span>Minh Chính</span>
          </li>
          <li className="friend__item">
            <img src={Friends} alt="hinhanh" />
            <span>Minh Chính</span>
          </li>
          <li className="friend__item">
            <img src={Friends} alt="hinhanh" />
            <span>Minh Chính</span>
          </li>
          <li className="friend__item">
            <img src={Friends} alt="hinhanh" />
            <span>Minh Chính</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Friend;