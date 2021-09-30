import React, { Component } from 'react';
import './user.scss'
import Friends from '../../assets/friends.png'

class User extends Component {
  render() {
    return (
      <div className="user__container">
        <ul className="list__options">
          <li className="options__item">
            <img src={Friends} alt="hinhanh"/>
            <span>Minh Chính</span>
          </li>
          <li className="options__item">
            <img src="https://www.facebook.com/rsrc.php/v3/y8/r/S0U5ECzYUSu.png" alt="hinhanh"/>
            <span>Bạn bè</span>
          </li>
          <li className="options__item">
            <img src="https://www.facebook.com/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" alt="hinhanh"/>
            <span>Nhóm</span>
          </li>
          <li className="options__item">
            <img src="https://www.facebook.com/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png" alt="hinhanh"/>
            <span>Minh Chính</span>
          </li>
          <li className="options__item">
            <img src="https://www.facebook.com/rsrc.php/v3/y5/r/duk32h44Y31.png" alt="hinhanh"/>
            <span>Martketplace</span>
          </li>
          <li className="options__item">
            <img src="https://www.facebook.com/rsrc.php/v3/yD/r/lVijPkTeN-r.png" alt="hinhanh"/>
            <span>Kỷ niệm</span>
          </li>
          <li className="options__item">
            <img src="https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.6435-9/cp0/c18.0.50.50a/p50x50/71662112_2289882007991759_5835116901621039104_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ac9ee4&_nc_ohc=nsW7MyM_sioAX-ielND&_nc_ht=scontent.fsgn8-2.fna&oh=9257e0b049c4dbb3be0d80ac53d63842&oe=617B1371" alt="hinhanh"/>
            <span>Đã lưu</span>
          </li>
          <li className="options__item">
            <img src={Friends} alt="hinhanh"/>
            <span>Xem thêm</span>
          </li>
          <p>Lỗí tắt của bạn</p>
          <li className="options__item">
            <img src={Friends} alt="hinhanh"/>
            <span>Minh Chính</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default User;