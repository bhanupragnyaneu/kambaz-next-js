import Link from "next/link";
import Image from "next/image";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from "react-bootstrap";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
      <div id="wd-dashboard-courses">
  <Row xs={1} md={5} className="g-4">
   <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link href="/Courses/1234/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/react.png" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Full Stack software developer</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
   </Col>
   <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
   <Card>
     <Link href="/Courses/5678/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/node.jpeg" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5678 Node.js</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Backend API development</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
   
    </Col>
   <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
   <Card>
     <Link href="/Courses/2468/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/webdev.png" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS2468 Web Development</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        HTML, CSS, and JavaScript</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
    </Col>
    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link href="/Courses/9101/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/dbms.png" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS9101 Database Systems</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        SQL and NoSQL databases</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
      </Col>
    
    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link href="/Courses/3679/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/ml.png" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS3579 Machine Learning</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        AI and Neural Networks</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
      </Col>
    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link href="/Courses/4567/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/teslabot.jpg" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS4567 Robotics</CardTitle>
       <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Advanced robotics and automation systems</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
    </Col>
    
    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link href="/Courses/7890/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/webdev.png" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS7890 Advanced Web</CardTitle>
       <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Progressive Web Applications and Modern Frameworks</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
    </Col>
    
    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link href="/Courses/6543/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/react.png" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS6543 UI/UX Design</CardTitle>
       <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        User Interface and Experience Design Principles</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
    </Col>
  </Row>
</div>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
   
);}
