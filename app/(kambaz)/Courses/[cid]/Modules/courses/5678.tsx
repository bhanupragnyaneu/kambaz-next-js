// Node.js course modules
export default function NodeModules() {
  return (
    <ul id="wd-modules">
      <li className="wd-module">
        <div className="wd-title">Week 1, Lecture 1 - Node.js Fundamentals, Event Loop</div>
        <ul className="wd-lessons">
          <li className="wd-lesson">
            <span className="wd-title">LEARNING OBJECTIVES</span>
            <ul className="wd-content">
              <li className="wd-content-item">Introduction to Node.js</li>
              <li className="wd-content-item">Asynchronous programming with callbacks</li>
              <li className="wd-content-item">Understanding event loop</li>
            </ul>
          </li>
          <li className="wd-lesson">
            <span className="wd-title">READINGS</span>
            <ul className="wd-content">
              <li className="wd-content-item">Node.js documentation</li>
              <li className="wd-content-item">Asynchronous JavaScript</li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="wd-module">
        <div className="wd-title">Week 2, Lecture 2 - Express Framework, REST APIs</div>
        <ul className="wd-lessons">
          <li className="wd-lesson">
            <span className="wd-title">LEARNING OBJECTIVES</span>
            <ul className="wd-content">
              <li className="wd-content-item">Building RESTful APIs with Express</li>
              <li className="wd-content-item">Middleware in Express</li>
              <li className="wd-content-item">Route handling and controllers</li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="wd-module">
        <div className="wd-title">Week 3, Lecture 3 - Database Integration</div>
        <ul className="wd-lessons">
          <li className="wd-lesson">
            <span className="wd-title">LEARNING OBJECTIVES</span>
            <ul className="wd-content">
              <li className="wd-content-item">MongoDB with Mongoose</li>
              <li className="wd-content-item">SQL databases with Sequelize</li>
              <li className="wd-content-item">Data validation and error handling</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  );
}