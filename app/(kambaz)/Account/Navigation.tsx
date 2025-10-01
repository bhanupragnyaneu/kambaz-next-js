"use client";
import Link from "next/link";
import { ListGroup } from "react-bootstrap";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation">
      <ListGroup className="rounded-0" style={{ width: 120 }}>
        <ListGroup.Item className="border-0 border-start border-3 fs-5 border-dark text-black fw-semibold">
          <Link href="/Account/Signin" className="text-decoration-none text-black">
            Signin
          </Link>
        </ListGroup.Item>

        <ListGroup.Item className="border-0">
          <Link href="/Account/Signup" className="text-decoration-none fs-5 text-danger">
            Signup
          </Link>
        </ListGroup.Item>

        <ListGroup.Item className="border-0">
          <Link href="/Account/Profile" className="text-decoration-none fs-5 text-danger">
            Profile
          </Link>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
