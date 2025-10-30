/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */
"use client"
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import * as db from "../Database";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, FormControl, Row } from "react-bootstrap";
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from "react";
export default function Dashboard() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = db;
    const { courses } = useSelector((state: any) => state.coursesReducer);
  const dispatch = useDispatch();
  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description"
  });


  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5>New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={() => dispatch(addNewCourse(course))} > Add </button>        <button className="btn btn-warning float-end me-2"
                onClick={() => dispatch(updateCourse(course))} id="wd-update-course-click">
          Update </button>
      </h5><hr /><br />
      <FormControl value={course.name} className="mb-2"  onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <FormControl value={course.description} onChange={(e) => setCourse({ ...course, description: e.target.value }) } />


      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses
      //         .filter((course) =>
      // enrollments.some(
      //   (enrollment) =>
      //     enrollment.user === currentUser?._id &&
      //     enrollment.course === course._id
      //    ))

          .map((course: { _id: any; src: string | Blob | undefined; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; description: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link href={`/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <CardImg src={course.src} alt="course logo" variant="top" width="100%" height={160} />
                  <CardBody className="card-body">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name} </CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description} </CardText>
                    <Button variant="primary"> Go </Button>
                                <button onClick={(event) => {
                      event.preventDefault();
                      dispatch(deleteCourse(course._id));
                    }} className="btn btn-danger float-end"
                    id="wd-delete-course-click">
                    Delete
            </button>
            <button id="wd-edit-course-click"
  onClick={(event) => {
    event.preventDefault();
    setCourse(course);
  }}
  className="btn btn-warning me-2 float-end" >
  Edit
</button>

                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>);}































// /* eslint-disable react/jsx-key */
// "use client"
// import Link from "next/link";
// import * as db from "../Database";
// import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row, Form, Modal } from "react-bootstrap";
// import { useState } from "react";

// export default function Dashboard() {
//   const [courses, setCourses] = useState<any[]>(db.courses);
//   const [showModal, setShowModal] = useState(false);
//   const [newCourse, setNewCourse] = useState({
//     _id: "",
//     name: "",
//     number: "",
//     startDate: "",
//     endDate: "",
//     description: "",
//     department: "",
//     credits: 0,
//     src: "/images/react.png"
//   });

//   // CREATE - Add new course
//   const addCourse = () => {
//     const course = {
//       ...newCourse,
//       _id: Date.now().toString(), // Simple ID generation
//     };
//     setCourses([...courses, course]);
//     setNewCourse({
//       _id: "",
//       name: "",
//       number: "",
//       startDate: "",
//       endDate: "",
//       description: "",
//       department: "",
//       credits: 0,
//       src: "/images/react.png"
//     });
//     setShowModal(false);
//   };

//   // UPDATE - Update course title
//   const updateCourse = (courseId: string, newName: string) => {
//     setCourses(courses.map(course => 
//       course._id === courseId 
//         ? { ...course, name: newName }
//         : course
//     ));
//   };

//   // DELETE - Remove course
//   const deleteCourse = (courseId: string) => {
//     setCourses(courses.filter(course => course._id !== courseId));
//   };

//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      
//       {/* Add Course Button */}
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
//         <Button variant="success" onClick={() => setShowModal(true)}>
//           + Add Course
//         </Button>
//       </div>
//       <hr />

//       <div id="wd-dashboard-courses">
//         <Row xs={1} md={5} className="g-4">
//           {courses.map((course) => (
//             <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
//               <Card>
//                 <Link href={`/Courses/${course._id}/Home`}
//                       className="wd-dashboard-course-link text-decoration-none text-dark" >
//                   <CardImg src={course.src} alt="course logo" variant="top" width="100%" height={160} />
//                   <CardBody className="card-body">
//                     <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
//                       {course.name}
//                     </CardTitle>
//                     <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
//                       {course.description}
//                     </CardText>
//                     <Button variant="primary"> Go </Button>
//                   </CardBody>
//                 </Link>
                
//                 {/* CRUD Action Buttons */}
//                 <CardBody className="pt-0">
//                   <div className="d-flex justify-content-between">
//                     <Button 
//                       variant="warning" 
//                       size="sm"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         const newName = prompt("Enter new course name:", course.name);
//                         if (newName) updateCourse(course._id, newName);
//                       }}
//                     >
//                       Edit
//                     </Button>
//                     <Button 
//                       variant="danger" 
//                       size="sm"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         if (window.confirm(`Delete course "${course.name}"?`)) {
//                           deleteCourse(course._id);
//                         }
//                       }}
//                     >
//                       Delete
//                     </Button>
//                   </div>
//                 </CardBody>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </div>

//       {/* Add Course Modal */}
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Add New Course</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3">
//               <Form.Label>Course Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={newCourse.name}
//                 onChange={(e) => setNewCourse({...newCourse, name: e.target.value})}
//                 placeholder="Enter course name"
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Course Number</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={newCourse.number}
//                 onChange={(e) => setNewCourse({...newCourse, number: e.target.value})}
//                 placeholder="Enter course number"
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 value={newCourse.description}
//                 onChange={(e) => setNewCourse({...newCourse, description: e.target.value})}
//                 placeholder="Enter course description"
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Department</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={newCourse.department}
//                 onChange={(e) => setNewCourse({...newCourse, department: e.target.value})}
//                 placeholder="Enter department"
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Credits</Form.Label>
//               <Form.Control
//                 type="number"
//                 value={newCourse.credits}
//                 onChange={(e) => setNewCourse({...newCourse, credits: parseInt(e.target.value)})}
//                 placeholder="Enter credits"
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={addCourse}>
//             Add Course
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }