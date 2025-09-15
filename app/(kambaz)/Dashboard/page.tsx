import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/file.svg" alt="course logo" width={200} height={150} />
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
            <Image src="/file.svg" alt="Node.js" width={200} height={150} />
            <div>
              <h5>CS5678 Node.js</h5>
              <p className="wd-dashboard-course-title">Backend API development</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/9101" className="wd-dashboard-course-link">
            <Image src="/file.svg" width={200} alt="course logo" height={150} alt="Database Systems" />
            <div>
              <h5>CS9101 Database Systems</h5>
              <p className="wd-dashboard-course-title">SQL and NoSQL databases</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}

