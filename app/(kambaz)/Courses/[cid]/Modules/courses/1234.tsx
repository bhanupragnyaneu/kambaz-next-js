import { ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "../ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "../ModulesControlButtons";
import GreenCheckmark from "../GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import LessonControlButtons from "../LessonControlButtons";

export default function ReactModules() {
  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            {" "}
            <BsGripVertical className="me-2 fs-3" /> Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda{" "}
            <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES 
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />Introduction to the course{" "}
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />Learn what is Web Development{" "}
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />LESSON 1{" "}
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />LESSON 2{" "}
              <LessonControlButtons />
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"> Week 2 <ModuleControlButtons /></div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES 
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />LESSON 1{" "}
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />LESSON 2{" "}
              <LessonControlButtons />
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            {" "}
            <BsGripVertical className="me-2 fs-3" /> Week 3{" "}
            <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES 
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />Introduction to the course{" "}
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />Learn what is Web Development{" "}
              <LessonControlButtons />
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
      <br/><br/>
    </div>
  );
}









// import { ListGroup, ListGroupItem } from "react-bootstrap";
// import ModulesControls from "../ModulesControls";
// import { BsGripVertical } from "react-icons/bs";
// import GreenCheckmark from "../GreenCheckmark";
// import { IoEllipsisVertical } from "react-icons/io5";
// import { FaCheckCircle } from "react-icons/fa";

// export default function ReactModules() {
//   return (
//     <div>
//       <ModulesControls />
//       <div className="mt-3">
//         <ListGroup className="rounded-0" id="wd-modules">
//           <ListGroupItem className="p-0 mb-4 border">
//             <div className="d-flex align-items-center bg-light border-bottom p-2 ps-3">
//               <BsGripVertical className="me-2 text-secondary" />
//               <span className="fw-bold">
//                 Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda
//               </span>
//               <span className="ms-auto d-flex align-items-center">
//                 <FaCheckCircle className="text-success me-2" />
//                 <span className="me-2">3/6</span>
//                 <IoEllipsisVertical className="fs-5 text-secondary" />
//               </span>
//             </div>
//             <ListGroup className="rounded-0">
//               <ListGroupItem className="d-flex align-items-center border-0 border-bottom ps-4 py-2 bg-white">
//                 <span className="fw-bold text-secondary">LEARNING OBJECTIVES</span>
//                 <span className="ms-auto d-flex align-items-center">
//                   <FaCheckCircle className="text-success me-2" />
//                   <IoEllipsisVertical className="fs-5 text-secondary" />
//                 </span>
//               </ListGroupItem>
//               <ListGroupItem className="d-flex align-items-center border-0 border-bottom ps-5 py-2 bg-white">
//                 Introduction to the course
//                 <span className="ms-auto d-flex align-items-center">
//                   <FaCheckCircle className="text-success me-2" />
//                   <IoEllipsisVertical className="fs-5 text-secondary" />
//                 </span>
//               </ListGroupItem>
//               <ListGroupItem className="d-flex align-items-center border-0 border-bottom ps-5 py-2 bg-white">
//                 Learn what is Web Development
//                 <span className="ms-auto d-flex align-items-center">
//                   <FaCheckCircle className="text-success me-2" />
//                   <IoEllipsisVertical className="fs-5 text-secondary" />
//                 </span>
//               </ListGroupItem>
//               <ListGroupItem className="d-flex align-items-center border-0 border-bottom ps-4 py-2 bg-white">
//                 <span className="fw-bold text-secondary">READING</span>
//                 <span className="ms-auto d-flex align-items-center">
//                   <FaCheckCircle className="text-success me-2" />
//                   <IoEllipsisVertical className="fs-5 text-secondary" />
//                 </span>
//               </ListGroupItem>
//               <ListGroupItem className="d-flex align-items-center border-0 border-bottom ps-5 py-2 bg-white">
//                 Full Stack Developer - Chapter 1 - Introduction
//                 <span className="ms-auto d-flex align-items-center">
//                   <FaCheckCircle className="text-success me-2" />
//                   <IoEllipsisVertical className="fs-5 text-secondary" />
//                 </span>
//               </ListGroupItem>
//               <ListGroupItem className="d-flex align-items-center border-0 border-bottom ps-5 py-2 bg-white">
//                 Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML
//                 <span className="ms-auto d-flex align-items-center">
//                   <FaCheckCircle className="text-success me-2" />
//                   <IoEllipsisVertical className="fs-5 text-secondary" />
//                 </span>
//               </ListGroupItem>
//               <ListGroupItem className="d-flex align-items-center border-0 border-bottom ps-4 py-2 bg-white">
//                 <span className="fw-bold text-secondary">SLIDES</span>
//                 <span className="ms-auto d-flex align-items-center">
//                   <FaCheckCircle className="text-success me-2" />
//                   <IoEllipsisVertical className="fs-5 text-secondary" />
//                 </span>
//               </ListGroupItem>
//               <ListGroupItem className="d-flex align-items-center border-0 ps-5 py-2 bg-white">
//                 <span className="text-danger">
//                   Introduction to Web Development{" "}
//                   <i className="bi bi-box-arrow-up-right" />
//                 </span>
//                 <span className="ms-auto d-flex align-items-center">
//                   <FaCheckCircle className="text-success me-2" />
//                   <IoEllipsisVertical className="fs-5 text-secondary" />
//                 </span>
//               </ListGroupItem>
//             </ListGroup>
//           </ListGroupItem>
//         </ListGroup>
//       </div>
//     </div>
//   );
// }
