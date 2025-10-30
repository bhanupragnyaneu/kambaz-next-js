// "use client"
// import { ReactNode } from "react";
// import CourseNavigation from "./Navigation";
// import { FaAlignJustify } from "react-icons/fa6";
// import { courses } from "../../Database";

// import { useSelector } from "react-redux";
// import { useParams } from "next/navigation";
// import  Breadcrumb  from "./Breadcrumb";
// export default async function CoursesLayout({ children }: { children: ReactNode }) {
//  const { cid } = useParams();
//  const { courses } = useSelector((state: any) => state.coursesReducer);
//  const course = courses.find((course: any) => course._id === cid);
//  return (
//    <div id="wd-courses">
//   <h2 className="text-danger">
//       <FaAlignJustify className="me-4 fs-4 mb-1" />
//       <Breadcrumb course={course?.name} /> </h2> <hr />
//   <div className="d-flex">
//     <div className="d-none d-md-block">
//       <CourseNavigation />
//     </div>
//     <div className="flex-fill">
//       {children}
//     </div></div>
// </div>

// );}


































"use client"
import { ReactNode, useState } from "react";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa6";
import { courses } from "../../Database";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import Breadcrumb from "./Breadcrumb";

export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams();
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const course = courses.find((course: any) => course._id === cid);
  
  // State to manage sidebar visibility
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  
  // Toggle function
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify 
          className="me-4 fs-4 mb-1" 
          onClick={toggleSidebar}
          style={{ cursor: 'pointer' }}
          title={isSidebarVisible ? 'Hide Navigation' : 'Show Navigation'}
        />
        <Breadcrumb course={course?.name} />
      </h2> 
      <hr />
      
      <div className="d-flex">
        {/* Conditionally render sidebar based on state */}
        <div className={`d-none d-md-block ${isSidebarVisible ? '' : 'd-md-none'}`}>
          <CourseNavigation />
        </div>
        
        {/* Main content area - adjust width based on sidebar visibility */}
        <div className={`flex-fill ${!isSidebarVisible ? 'ms-0' : ''}`}>
          {children}
        </div>
      </div>
    </div>
  );
}