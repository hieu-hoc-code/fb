import React, { Component } from 'react';
import './friend.scss'

class Friend extends Component {
  render() {
    return (
      <div class="friend-container">
        <div className="title">
          <div>Người liên hệ</div>
          <span>Phòng họp</span>
          <span>Search</span>
          <span>Option</span>
        </div>
        <ul className="list-friend">
          <li>Minh Chính</li>
          <li>Minh Chính</li>
          <li>Minh Chính</li>
          <li>Minh Chính</li>
          <li>Minh Chính</li>
          <li>Minh Chính</li>
          <li>Minh Chính</li>
          <li>Minh Chính</li>
          <li>Minh Chính</li>
          <li>Minh Chính</li>
          <li>Minh Chính</li>
          <li>Minh Chính</li>
          <li>Minh Chính</li>
        </ul>
      </div>
    );
  }
}

export default Friend;