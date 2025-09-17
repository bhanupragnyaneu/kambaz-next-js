export default function ReactModules() {
  return (
    <ul id="wd-modules">
      <li className="wd-module">
        <div className="wd-title">Week 1, Lecture 1 - React Introduction, Setup, Components</div>
        <ul className="wd-lessons">
          <li className="wd-lesson">
            <span className="wd-title">LEARNING OBJECTIVES</span>
            <ul className="wd-content">
              <li className="wd-content-item">Understanding React fundamentals</li>
              <li className="wd-content-item">Setting up React development environment</li>
              <li className="wd-content-item">Creating your first React component</li>
            </ul>
          </li>
          <li className="wd-lesson">
            <span className="wd-title">READINGS</span>
            <ul className="wd-content">
              <li className="wd-content-item">React official documentation</li>
              <li className="wd-content-item">Modern JavaScript for React developers</li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="wd-module">
        <div className="wd-title">Week 2, Lecture 2 - Components and Props</div>
        <ul className="wd-lessons">
          <li className="wd-lesson">
            <span className="wd-title">LEARNING OBJECTIVES</span>
            <ul className="wd-content">
              <li className="wd-content-item">Building reusable components</li>
              <li className="wd-content-item">Understanding props and state</li>
              <li className="wd-content-item">Component lifecycle methods</li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="wd-module">
        <div className="wd-title">Week 3, Lecture 3 - Hooks and State Management</div>
        <ul className="wd-lessons">
          <li className="wd-lesson">
            <span className="wd-title">LEARNING OBJECTIVES</span>
            <ul className="wd-content">
              <li className="wd-content-item">Using useState and useEffect</li>
              <li className="wd-content-item">Context API for state management</li>
              <li className="wd-content-item">Introduction to Redux</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  );
}