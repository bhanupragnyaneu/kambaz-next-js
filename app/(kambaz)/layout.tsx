import { ReactNode } from "react";
import KambazNavigation from "./Navigation";
import "./styles.css";
export default function KambazLayout({ children }: Readonly<{ children: ReactNode }>) {
 return (
  <div>
   <div id="wd-kambaz">
  <div className="d-flex">
    <div>
      <KambazNavigation />
    </div>
    <div className="wd-main-content-offset p-3 flex-fill">
      {children}
    </div>
  </div>
</div>

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
