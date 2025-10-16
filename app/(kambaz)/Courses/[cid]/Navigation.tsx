"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function CourseNavigation() {
  const params = useParams();
  const courseId = params.cid as string;
  const pathname = usePathname();
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {
        links.map(link => (
          <Link href={`/Courses/${courseId}/${link}`} key={link} className={`list-group-item border-0 ${ link == pathname.split('/')[3] ? ' active bg-white text-black' : ' text-danger'}`}>
            {link}
          </Link>
        ))
      }
    </div>
    );
  }