import React from 'react'
import "./skills.css"
import Search from './Search'

const Skills = () => {
  return (
    <div id='skills-container'>
    The skill are classified in accordance to the difficulty level. The classification are as follows:
    <Search/>
    <div className="skills skills-begineer">
        <h1>Begineers</h1>
        <ul className="skills-list">
          <li>Push Ups</li>
          <li>Inclined Push Ups</li>
          <li>Pull Ups</li>
          <li>Plank</li>
          <li>Squats</li>
          <li>Crunches</li>
        </ul>
    </div>
    <div className="skills skills-intermediate">
        <h1>Intermediate</h1>
        <ul className='skills-list'>
            <li>Calf-raises</li>
            <li>Bridges</li>
            <li>Plank</li>
            <li>FrogStand hold</li>
            <li>Elbow lever</li>
            <li>L-sit hold</li>
            <li>Pistol-squats</li>
            <li>Handstand</li>
        </ul>
    </div>
    <div className="skills skills-extreme">
        <h1>Extreme</h1>
        <ul className="skills-list">
            <li>25 pullups</li>
            <li>One hand pushup</li>
            <li>One hand hanger</li>
            <li>Handstand push up</li>
            <li>Planche</li>
            <li>10min plank hold</li>
        </ul>
    </div>
    </div>
  )
}

export default Skills