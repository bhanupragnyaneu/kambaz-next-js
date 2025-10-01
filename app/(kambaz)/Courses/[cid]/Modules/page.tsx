"use client";
import { useParams } from "next/navigation";
import Course1234Modules from "./courses/1234";
import Course5678Modules from "./courses/5678";
import Course9101Modules from "./courses/9101";
import DefaultModules from "./courses/default";
import GreenCheckmark from "./GreenCheckmark";

export default function Modules() {
  const params = useParams();
  const courseId = params.cid as string;

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
    <Course1234Modules />
  );
}

