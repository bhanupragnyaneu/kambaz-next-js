import { IoEllipsisVertical } from "react-icons/io5"; // Used in LessonControlButtons [6]
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { BsPlus } from "react-icons/bs";             // The required additional icon [3]
import GreenCheckmark from "./GreenCheckmark";       // Required status indicator [6]

export default function ModuleControlButtons({ moduleId, deleteModule, editModule }: { moduleId: string; deleteModule: (moduleId: string) => void; editModule: (moduleId: string) => void; }) {
    
    return (
        // The 'float-end' class (a Bootstrap utility class) positions the controls to the right 
        // as demonstrated in the LessonControlButtons implementation [6].
        <div className="float-end">
          <FaPencil className="text-warning me-2 mb-1" onClick={() => editModule(moduleId)} />
          <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteModule(moduleId)} />

            {/* The GreenCheckmark component is included as a status indicator [6] */}
            <GreenCheckmark />
            
            {/* The BsPlus icon is required specifically for the module controls [3]. 
                We use the fs-1 class for styling/sizing. */}
            <BsPlus className="fs-1" />
            
            {/* The IoEllipsisVertical icon is included for more options, similar to LessonControlButtons [6] */}
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}