"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function Assignments() {
  const params = useParams();
  const courseId = params.cid as string;
  
  return (
    <div id="wd-assignments">
      <div className="wd-assignments-header" style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <input placeholder="Search for Assignments"
               id="wd-search-assignment" style={{ height: "24px", padding: "0 8px" }} />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
      </div>
      
      <h3 id="wd-assignments-title" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        ASSIGNMENTS 40% of Total 
        <button style={{ width: "24px", height: "24px", padding: "0", lineHeight: "1" }}>+</button>
      </h3>
      
      <ul id="wd-assignment-list" style={{ listStyleType: "disc", paddingLeft: "20px" }}>
        <li className="wd-assignment-list-item">
          <div>
            <Link href={`/Courses/${courseId}/Assignments/a1`} className="wd-assignment-link">
              A1 - ENV + HTML
            </Link>
            <div style={{ fontSize: "0.9rem", color: "#555" }}>
              Multiple Modules | Not available until May 6 at 12:00am |<br/>
              Due May 13 at 11:59pm | 100 pts
            </div>
          </div>
        </li>
        
        <li className="wd-assignment-list-item" style={{ marginTop: "15px" }}>
          <div>
            <Link href={`/Courses/${courseId}/Assignments/a2`} className="wd-assignment-link">
              A2 - CSS + BOOTSTRAP
            </Link>
            <div style={{ fontSize: "0.9rem", color: "#555" }}>
              Multiple Modules | Not available until May 13 at 12:00am |<br/>
              Due May 20 at 11:59pm | 100 pts
            </div>
          </div>
        </li>
        
        <li className="wd-assignment-list-item" style={{ marginTop: "15px" }}>
          <div>
            <Link href={`/Courses/${courseId}/Assignments/a3`} className="wd-assignment-link">
              A3 - JAVASCRIPT + REACT
            </Link>
            <div style={{ fontSize: "0.9rem", color: "#555" }}>
              Multiple Modules | Not available until May 20 at 12:00am |<br/>
              Due May 27 at 11:59pm | 100 pts
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

