import React from 'react'
import "./child.css"

const Child1 = ({name,age,fct}) => {
 
    return (
        <div className="child1"><div className="card-container">
            <img className="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
            <h3>{name }// {age}</h3>
            <h6>New York</h6>
            <p>User interface designer and <br /> front-end developer</p>
            <div className="buttons">
                <button className="primary" onClick={()=>fct()}>
                    Message
                </button>
                <button className="primary ghost">
                    Following
                </button>
            </div>
            <div className="skills">
                <h6>Skills</h6>
                <ul>
                    <li>UI / UX</li>
                    <li>Front End Development</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node</li>
                </ul>
            </div>
        </div>

            <footer>
                <p>
                    Created with <i className="fa fa-heart"></i> by
                    <a target="_blank" href="https://florin-pop.com">Florin Pop</a>
                    - Read how I created this
                    <a target="_blank" href="https://florin-pop.com/blog/2019/04/profile-card-design">here</a>
                    - Design made by
                    <a target="_blank" href="https://dribbble.com/shots/6276930-Profile-Card-UI-Design">Ildiesign</a>
                </p>
            </footer>
        </div>
    )
}
export default Child1







