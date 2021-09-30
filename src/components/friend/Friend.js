import React, { Component } from 'react';
import './friend.scss'
import Friends from '../../assets/friends.png'
import More from '../../assets/more.png'
import Loupe from '../../assets/loupe.png'
import Gather from '../../assets/gather.png'
import Boy from '../../assets/boy.png'
import Girl from '../../assets/girl.png'
import Boys from '../../assets/boys.png'

class Friend extends Component {
  render() {
    return (
      <div class="friend__container">
        <div className="friend__title">
          <h4>Người liên hệ</h4>
          <img src={Gather} alt="hinhanh" />
          <img src={Loupe} alt="hinhanh" />
          <img src={More} alt="hinhanh" />
        </div>
        <ul className="list__friend">
          <li className="friend__item">
            <img src={Friends} alt="hinhanh" />
            <span>Minh Chính</span>
          </li>
          <li className="friend__item">
            <img src={Boy} alt="hinhanh" />
            <span>Hà Huy Hoàng</span>
          </li>
          <li className="friend__item">
            <img src={Girl} alt="hinhanh" />
            <span>Hoa Thanh</span>
          </li>
          <li className="friend__item">
            <img src={Boys} alt="hinhanh" />
            <span>Minh Chính</span>
          </li>
          <li className="friend__item">
            <img src={Friends} alt="hinhanh" />
            <span>Lê Gia Công</span>
          </li>
          <li className="friend__item">
            <img src={Boy} alt="hinhanh" />
            <span>Hà Huy Hoàng</span>
          </li>
          <li className="friend__item">
            <img src={Girl} alt="hinhanh" />
            <span>Lương Công Khanh</span>
          </li>
          <li className="friend__item">
            <img src={Boys} alt="hinhanh" />
            <span>Trần Thị Linh</span>
          </li>
          <li className="friend__item">
            <img src={Friends} alt="hinhanh" />
            <span>Hà Văn Hữu</span>
          </li>
          <li className="friend__item">
            <img src={Boy} alt="hinhanh" />
            <span>Hà Huy Hoàng</span>
          </li>
          <li className="friend__item">
            <img src={Girl} alt="hinhanh" />
            <span>Hoa Thanh</span>
          </li>
          <li className="friend__item">
            <img src={Boys} alt="hinhanh" />
            <span>Minh Chính</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Friend;