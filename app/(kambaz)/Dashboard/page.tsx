import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (5)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/react.png" alt="course logo" width={200} height={150} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/5678"  className="wd-dashboard-course-link">
            <Image src="/images/node.jpeg" alt="Node.js" width={200} height={150} />
            <div>
              <h5>CS5678 Node.js</h5>
              <p className="wd-dashboard-course-title">Backend API development</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/9101" className="wd-dashboard-course-link">
            <Image src="/images/dbms.png" width={200} height={150} alt="Database Systems" />
            <div>
              <h5>CS9101 Database Systems</h5>
              <p className="wd-dashboard-course-title">SQL and NoSQL databases</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/2468" className="wd-dashboard-course-link">
            <Image src="/images/webdev.png" width={200} height={150} alt="Web Development" />
            <div>
              <h5>CS2468 Web Development</h5>
              <p className="wd-dashboard-course-title">HTML, CSS, and JavaScript</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/3579" className="wd-dashboard-course-link">
            <Image src="/images/ml.png" width={250} height={150} alt="Machine Learning" />
            <div>
              <h5>CS3579 Machine Learning</h5>
              <p className="wd-dashboard-course-title">AI and Neural Networks</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
   
);}
