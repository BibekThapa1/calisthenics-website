import React from 'react'
import Slider from './slider';
import skillOfTheDayImg from "../images/skill.png"
import quoteImg from "../images/quote.png"
import Search from './Search';
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import logo from "../images/logo.png"
import "../App.css"


const LandingPage: React.FC = () => {

    const images = [
        skillOfTheDayImg,
        skillOfTheDayImg,
        quoteImg    
      ];

  return (
    <div>
    <div className='landing-page'>
    <div className="upper-container">
        <p>
        Calisthenics are exercises that rely on body weight for resistance. They allow for the development of strength, endurance, flexibility, and coordination. Follow the guide in this article for a basic routine. Calisthenics are performed with differing levels of intensity and rhythm.
        </p>
    </div>
    <div className="input-container">
    <Search/>
    </div>
    <div className="slider-container">
        <Slider images={images} />
    </div>
    </div>

    {/* Second Container */}
    <div className="second-container">
      <h1 className='info'>Information</h1>
      <div className='section-container'>
        <h1>Skills</h1>
        <p>Learn Cool calisthenics skill and shape your body.Some skills includes: PushUps, HandStand, PullUps, Crow Pose Hold,etc. It helps to gain overall balance between body parts and shape body.</p>
        <button>More..</button>
      </div>
      <div className='section-container'>
        <h1>Benefits</h1>
        <p>There are many benefits of doing calisthenics. As it uses body weight it helps one master their own body weight and increase strength and stamina.</p>
        <button>More..</button>
      </div>
      <div className='section-container'>
        <h1>Skills</h1>
        <p>Learn Cool calisthenics skill and shape your body.Some skills includes: PushUps, HandStand, PullUps, Crow Pose Hold,etc. It helps to gain overall balance between body parts and shape body.</p>
        <button>More..</button>
      </div>
    </div>

    {/* Third Container */}
    <div className="third-container">
      <div className="hire-btn">
        <button className='flex'><MdOutlineConnectWithoutContact />Hire Trainer</button>
      </div>
    </div>
    <div className="footer">
      <div className="upper-footer">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      <ul className="links">
        <li>Skills</li>
        <li>Benefits</li>
        <li>Hire</li>
        <li></li>
      </ul>
      </div>
      <p><span>&copy;Copyright rights reserved.</span><span>Created by Bibek</span></p>
    </div>
    </div>
  )
}

export default LandingPage