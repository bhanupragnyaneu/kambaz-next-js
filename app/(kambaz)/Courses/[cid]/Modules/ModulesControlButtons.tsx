import { IoEllipsisVertical } from "react-icons/io5"; // Used in LessonControlButtons [6]
import { BsPlus } from "react-icons/bs";             // The required additional icon [3]
import GreenCheckmark from "./GreenCheckmark";       // Required status indicator [6]

export default function ModuleControlButtons() {
    
    return (
        // The 'float-end' class (a Bootstrap utility class) positions the controls to the right 
        // as demonstrated in the LessonControlButtons implementation [6].
        <div className="float-end"> 
            
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