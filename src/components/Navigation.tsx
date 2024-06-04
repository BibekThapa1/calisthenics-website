import React , {useRef} from "react";
import { FontAwesomeIcon ,  } from "@fortawesome/react-fontawesome";
import { faBars ,faX } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.png";

const Navigation: React.FC = () => {

const showNav = () =>{
  let sidebar = document.querySelector('#sidebar');
  let showIcon = document.querySelector('.show-icon');
  let hideIcon = document.querySelector('.hide-icon');
  if(sidebar?.classList.contains("hide")){
    showIcon?.classList.add("hidden")
    hideIcon?.classList.remove("hidden")
  }else{
    showIcon?.classList.remove("hidden")
    hideIcon?.classList.add("hidden")
  }
  sidebar?.classList.toggle("hide")
}

  return (
    <nav id="nav">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="text">
        <p>Be fit, Stay Strong</p>
      </div>
      <div className="icon cursor-pointer">
        <button onClick={showNav}>
          <FontAwesomeIcon   icon={faBars}  className="show-icon"/>
          <FontAwesomeIcon   icon={faX} className="hide-icon hidden"/>
          </button>
        <ul className="nav-links hide">
          <li>Skills</li>
          <li>Benefits</li>
          <li>Guide</li>
          <li>Hire</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
