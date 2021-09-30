import React, { Component } from 'react';
import './home.scss'

import Ava from '../../assets/avatar.jpg'
import You from '../../assets/none.png'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="story">
          <div className="st story-content">
            <img src={Ava} alt="story your" />
            <div className="create">
            <span>Tạo tin</span>
            </div>
          </div>
          <div className="st story-you">
            <img src={Ava} alt="story your" className="main" />
            <img src={You} alt="friend" className="you" />
          </div>
        </div>
        <div className="posts">
          <div className="po">
            <img src={Ava} alt="avt" />
            <input type="text" placeholder="Bạn đang nghĩ gì thế ?"></input>
          </div>
          <dic className="video">
            <div className="items">
              <i className="fa fa-camera-retro" > </i>
              <span>Video trực tiếp</span>
            </div>
            <div className="items">
              <i className="fa fa-file-photo-o" > </i>
              <span>Ảnh / Video</span>
            </div>
            <div className="items">
              <i className="fa fa-smile-o" > </i>
              <span>Cảm xúc / Hoạt động</span>
            </div>
          </dic>
        </div>
        <div className="meeting">
          <div className="items-metting">
            <i className="fa fa-camera-retro" ></i>
            <span> Tạo phòng họp mặt</span>
          </div>
          <div className="nex">
            <i className="fa fa-angle-right"> </i>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;