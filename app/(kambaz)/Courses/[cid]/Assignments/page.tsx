"use client";

import { assignments } from "@/app/(kambaz)/Database";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button, Form, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { FaCheckCircle, FaRegFileAlt, FaGripVertical, FaPlus, FaFileAlt, FaSearch } from "react-icons/fa";
import { IoChevronDown, IoEllipsisVertical } from "react-icons/io5";

export default function Assignments() {
  const cid = useParams().cid;

  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center text-secondary">
          <div className="position-relative" style={{ maxWidth: "300px" }}>
            <Form.Control
              type="text"
              placeholder="  Search..."
              id="wd-search-assignment"
              className="ps-4 fs-6"
            />
            <FaSearch className="position-absolute" style={{ left: "10px", top: "50%", transform: "translateY(-50%)" }} />
          </div>
        </div>
        <div>
          <Button variant="secondary" size="lg" className="me-2" id="wd-add-assignment-group">
            <BsPlus className="me-2 fs-2" />
            Group
          </Button>
          <Button variant="danger" size="lg" id="wd-add-assignment">
            <BsPlus className="me-2 fs-2" />
            Assignment
          </Button>
        </div>
      </div>

      <ListGroup className="rounded-0">
        <ListGroupItem className="wd-assignment-group p-0 mb-0 fs-5">
          <div className="wd-assignment-header p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <IoChevronDown className="me-2" />
              <span className="fw-bold">ASSIGNMENTS</span>
            </div>
            <div className="d-flex align-items-center">
              <span className="wd-assignment-percentage me-3">40% of Total</span>
              <BsPlus className="fs-2 me-2" />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
      <ListGroup className="rounded-0">
        {assignments.
            filter((assignment) => assignment.course === cid)
            .map((assignment) => (
              <ListGroupItem key={assignment._id} className="wd-assignment-item p-3 ps-1 d-flex align-items-start">
                <BsGripVertical className="me-2 fs-3 mt-1" />
                <FaFileAlt className="me-2 mt-1 text-success" />
                <div className="flex-grow-1"> 
                  <Link href={`/Courses/${cid}/Assignments/${assignment._id}`} className="text-decoration-none">
                    <strong className="text-dark">{assignment.title}</strong>
                  </Link>
                  <div className="text-muted small mt-1">
                    <span className="text-danger">Multiple Modules</span>
                    <span className="mx-1">|</span>
                    <span><strong>Not available until</strong> {assignment.until?.toLocaleString()}</span>
                    <span className="mx-1">|</span>
                    <span><strong>Due</strong> {assignment.due?.toLocaleString()}</span>
                    <span className="mx-1">|</span>
                    <span>{assignment.points} pts</span>
                    
                  </div>
                  
                </div>
                 <div className="d-flex align-items-center">
                <FaCheckCircle className="text-success me-2" />
                <IoEllipsisVertical className="fs-4" />
              </div>
              </ListGroupItem>
            ))
        }
      </ListGroup>
      </ListGroupItem>
      </ListGroup>
      
    </div>
  );
}
