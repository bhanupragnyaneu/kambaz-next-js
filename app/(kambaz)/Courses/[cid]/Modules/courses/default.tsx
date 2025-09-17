// Default modules for any other course
export default function DefaultModules() {
  return (
    <ul id="wd-modules">
      <li className="wd-module">
        <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus</div>
        <ul className="wd-lessons">
          <li className="wd-lesson">
            <span className="wd-title">LEARNING OBJECTIVES</span>
            <ul className="wd-content">
              <li className="wd-content-item">Introduction to the course</li>
              <li className="wd-content-item">Understanding course requirements</li>
              <li className="wd-content-item">Setting up development environment</li>
            </ul>
          </li>
          <li className="wd-lesson">
            <span className="wd-title">READINGS</span>
            <ul className="wd-content">
              <li className="wd-content-item">Course syllabus</li>
              <li className="wd-content-item">Getting started guide</li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="wd-module">
        <div className="wd-title">Week 2, Lecture 2 - Core Concepts</div>
        <ul className="wd-lessons">
          <li className="wd-lesson">
            <span className="wd-title">LEARNING OBJECTIVES</span>
            <ul className="wd-content">
              <li className="wd-content-item">Understanding fundamental concepts</li>
              <li className="wd-content-item">Practical applications</li>
              <li className="wd-content-item">Hands-on exercises</li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="wd-module">
        <div className="wd-title">Week 3, Lecture 3 - Advanced Topics</div>
        <ul className="wd-lessons">
          <li className="wd-lesson">
            <span className="wd-title">LEARNING OBJECTIVES</span>
            <ul className="wd-content">
              <li className="wd-content-item">Exploring advanced techniques</li>
              <li className="wd-content-item">Industry best practices</li>
              <li className="wd-content-item">Final project preparation</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  );
}