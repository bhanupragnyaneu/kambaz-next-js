import { ReactNode } from "react";
import KambazNavigation from "./Navigation";
export default function KambazLayout({ children }: Readonly<{ children: ReactNode }>) {
 return (
  <div>
   <table>
     <tbody>
       <tr>
         <td valign="top" width="200">  <KambazNavigation /> </td>
         <td valign="top" width="100%"> {children}           </td>
       </tr>
     </tbody>
   </table>
   <div className="student-info" style={{
        padding: "10px",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        borderTop: "1px solid #eaeaea",
        fontSize: "0.8rem",
        color: "#666",
        textAlign: "center",
        backgroundColor: "white",
        zIndex: 100
      }}>
        <p>Bhanu Pragnya Ravikiran, 002066718</p>
        <p>Section: 05 | CRN: 19730 | Online</p>
      </div>
   </div>
   
);}
