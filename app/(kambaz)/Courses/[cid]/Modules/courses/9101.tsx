// Database Systems course modules
export default function DatabaseModules() {
  return (
    <ul id="wd-modules">
      <li className="wd-module">
        <div className="wd-title">Week 1, Lecture 1 - Database Fundamentals, SQL Basics</div>
        <ul className="wd-lessons">
          <li className="wd-lesson">
            <span className="wd-title">LEARNING OBJECTIVES</span>
            <ul className="wd-content">
              <li className="wd-content-item">Introduction to database concepts</li>
              <li className="wd-content-item">Relational database design</li>
              <li className="wd-content-item">SQL basics: SELECT, INSERT, UPDATE, DELETE</li>
            </ul>
          </li>
          <li className="wd-lesson">
            <span className="wd-title">READINGS</span>
            <ul className="wd-content">
              <li className="wd-content-item">Database Design Fundamentals</li>
              <li className="wd-content-item">Introduction to SQL</li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="wd-module">
        <div className="wd-title">Week 2, Lecture 2 - Advanced SQL, Optimization</div>
        <ul className="wd-lessons">
          <li className="wd-lesson">
            <span className="wd-title">LEARNING OBJECTIVES</span>
            <ul className="wd-content">
              <li className="wd-content-item">Joins and relationships</li>
              <li className="wd-content-item">Subqueries and views</li>
              <li className="wd-content-item">Indexing and optimization</li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="wd-module">
        <div className="wd-title">Week 3, Lecture 3 - NoSQL Databases, Document Stores</div>
        <ul className="wd-lessons">
          <li className="wd-lesson">
            <span className="wd-title">LEARNING OBJECTIVES</span>
            <ul className="wd-content">
              <li className="wd-content-item">Document databases (MongoDB)</li>
              <li className="wd-content-item">Key-value stores (Redis)</li>
              <li className="wd-content-item">Graph databases (Neo4j)</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  );
}