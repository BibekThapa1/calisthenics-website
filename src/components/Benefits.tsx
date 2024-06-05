import React from "react";
import "./benefits.css";
import Search from "./Search";

const Benefits = () => {
  return (
    <div id="benefit-container">
      <h1>
        There are many benefits for doing calisthenics. Some of the benefits
        are:
      </h1>
      <Search />
      <div>
        <ol className="benefits-section">
          <li>
            <h1>1. Improves Functional Strength</h1>
            Calisthenics exercises mimic natural movement patterns, enhancing
            functional strength useful for daily activities.{" "}
          </li>
          <li>
            <h1>2. Enhances Flexibility and Mobility</h1>
            Dynamic movements and full range of motion exercises in calisthenics
            improve flexibility and joint mobility.
          </li>
          <li>
            <h1>3. Builds Core Strength</h1>Many calisthenics exercises engage
            the core muscles, leading to better overall core strength and
            stability.
          </li>
          <li>
            <h1>4. Increases Endurance</h1>
            High-repetition and continuous movement patterns improve
            cardiovascular and muscular endurance.
          </li>
          <li>
            <h1>5. Cost-Effective</h1>
            No need for gym memberships or expensive equipment; calisthenics can
            be performed anywhere, using just your body weight.
          </li>
          <li>
            <h1>6. Boosts Mental Health</h1>
            Physical activity, including calisthenics, releases endorphins,
            reducing stress and improving mood.
          </li>
        </ol>
      </div>
      <div className="others">
        <div className="skills-btn">
          <button>Go to skills Section</button>
        </div>
        <div className="hire-btn">
          <button>Hire a personal trainer</button>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
