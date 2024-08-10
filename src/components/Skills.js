import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-content">
        <h3>Technical Skills:</h3>
        <ul>
          <li><strong>Programming Languages:</strong> Python, SQL, C++</li>
          <li><strong>Tools:</strong> Power BI, Excel, Jupyter</li>
          <li><strong>Libraries/Frameworks:</strong> Pandas, NumPy, Matplotlib, Scikit-learn, Seaborn</li>
          <li><strong>Database Management:</strong> SQL, NoSQL</li>
          <li><strong>Machine Learning:</strong> Proficient in developing and evaluating machine learning models</li>
          <li><strong>Others:</strong> Data Cleaning, Data Visualization, Statistical Analysis</li>
        </ul>
        <h3>Soft Skills:</h3>
        <ul>
          <li>Problem-solving, critical thinking, communication, creativity, adaptability, and fast learning</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
