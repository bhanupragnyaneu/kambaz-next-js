import Link from "next/link";
import { FormControl } from "react-bootstrap";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <FormControl id="wd-username"
               placeholder="username"
               defaultValue={"aliceJunk"}
               className="mb-2"/><br />
      <FormControl id="wd-password"
               placeholder="password" type="password"
               defaultValue={"password"}
               className="mb-2"/><br />
      <FormControl id="wd-first-name"
               placeholder="first-name"
               defaultValue={"Mad"}
               className="mb-2"/><br />
      <FormControl id="wd-last-name"
               placeholder="last-name"
               defaultValue={"Hatter"}
               className="mb-2"/><br />
      <FormControl id="wd-dob"
               placeholder="01/01/2000"
               defaultValue={"2000-01-01"}
               type="date"
               className="mb-2"/><br />
      <FormControl id="wd-email"
               placeholder="Alice@wonderland.com"
               type="email"
               className="mb-2"/><br />
      <FormControl id="wd-role"
               as="select"
               className="mb-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </FormControl><br />
      <Link href="Signin" > Sign out </Link>
    </div>
);
}
