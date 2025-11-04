import Link from "next/link";
export default function Labs() {
 return (
   <div id="wd-labs">
     <h1>Labs</h1>
     <ul>
       <li>
         <Link href="/Labs/Lab1" id="wd-lab1-link">
           Lab 1: HTML Examples </Link>
       </li>
       <li>
         <Link href="/Labs/Lab2" id="wd-lab2-link">
           Lab 2: CSS Basics </Link>
       </li>
       <li>
         <Link href="/Labs/Lab3" id="wd-lab3-link">
           Lab 3: JavaScript Fundamentals </Link>
       </li>
       <li>
          <Link href="/Labs/Lab4" id="wd-lab4-link">
           Lab 4: Maintaining State in React Applications
          </Link>
       </li>
      </ul>
     
        <div id="student-info">
            <h3>Student Information</h3>
            Name: Bhanu Pragnya Ravikiran <br />
            Email: 05 | CRN: 19730 | Online  <br />
            <a href="/Account/Signin">kambaz</a><br />
            <a href="https://github.com/bhanupragnyaneu/kambaz-next-js/tree/a3">My GitHub</a>
        </div>
   </div>
);}