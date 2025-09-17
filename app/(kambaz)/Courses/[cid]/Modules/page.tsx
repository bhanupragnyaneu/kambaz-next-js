"use client";
import { useParams } from "next/navigation";
import Course1234Modules from "./courses/1234";
import Course5678Modules from "./courses/5678";
import Course9101Modules from "./courses/9101";
import DefaultModules from "./courses/default";

export default function Modules() {
  const params = useParams();
  const courseId = params.cid as string;

  // Module actions component - remains the same for all courses
  const ModuleActions = () => (
    <div className="wd-module-actions" style={{
      display: "flex",
      gap: "10px",
      marginBottom: "15px",
      alignItems: "center"
    }}>
      <button className="wd-button">Collapse All</button>
      <button className="wd-button">View Progress</button>
      
      <select name="publishOptions" style={{ height: "24px" }}>
        <option value="publish">Publish All</option>
        <option value="unpublish">Publish modules</option>
        <option value="publishAll">Unpublish Modules</option>
      </select>
      
      <button className="wd-button">+Module</button>
    </div>
  );

  // Render different module content based on course ID
  const renderModuleContent = () => {
    switch(courseId) {
      case "1234":
        return <Course1234Modules />;
      case "5678":
        return <Course5678Modules />;
      case "9101":
        return <Course9101Modules />;
      default:
        return <DefaultModules />;
    }
  };

  return (
    <div>
      <ModuleActions />
      {renderModuleContent()}
    </div>
  );
}

