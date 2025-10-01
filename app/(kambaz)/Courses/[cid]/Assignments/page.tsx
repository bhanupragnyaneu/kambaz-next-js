"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Button, Form, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { FaCheckCircle, FaRegFileAlt, FaGripVertical, FaPlus, FaFileAlt } from "react-icons/fa";
import { IoChevronDown, IoEllipsisVertical } from "react-icons/io5";

export default function Assignments() {
  const params = useParams();
  const courseId = params.cid as string;

  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Form.Control
          type="text"
          placeholder="Search for Assignments"
          id="wd-search-assignment"
          className="me-2 fs-6"
          style={{ maxWidth: "300px" }}
        />
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
            <ListGroupItem className="wd-assignment-item p-3 ps-1 d-flex align-items-start">
              <BsGripVertical className="me-2 fs-3 mt-1" />
              <FaFileAlt className="me-2 mt-1 text-success" />
              <div className="flex-grow-1">
                <Link href="/Courses/1234/Assignments/123" className="text-decoration-none">
                  <strong className="text-dark">A1 - ENV + HTML</strong>
                </Link>
                <div className="text-muted small mt-1">
                  <span className="text-danger">Multiple Modules</span>
                  <span className="mx-1">|</span>
                  <span><strong>Not available until</strong> May 6 at 12:00am</span>
                  <span className="mx-1">|</span>
                  <br />
                  <span><strong>Due</strong> May 20 at 11:59pm</span>
                  <span className="mx-1">|</span>
                  <span>100 pts</span>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="text-success me-2" />
                <IoEllipsisVertical className="fs-4" />
              </div>
            </ListGroupItem>
            
            <ListGroupItem className="wd-assignment-item p-3 ps-1 d-flex align-items-start">
              <BsGripVertical className="me-2 fs-3 mt-1" />
              <FaFileAlt className="me-2 mt-1 text-success" />
              <div className="flex-grow-1">
                <Link href="/Courses/1234/Assignments/124" className="text-decoration-none">
                  <strong className="text-dark">A2 - CSS + BOOTSTRAP</strong>
                </Link>
                <div className="text-muted small mt-1">
                  <span className="text-danger">Multiple Modules</span>
                  <span className="mx-1">|</span>
                  <span><strong>Not available until</strong> May 13 at 12:00am</span>
                  <span className="mx-1">|</span>
                  <br />
                  <span><strong>Due</strong> May 20 at 11:59pm</span>
                  <span className="mx-1">|</span>
                  <span>100 pts</span>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="text-success me-2" />
                <IoEllipsisVertical className="fs-4" />
              </div>
            </ListGroupItem>
            
            <ListGroupItem className="wd-assignment-item p-3 ps-1 d-flex align-items-start">
              <BsGripVertical className="me-2 fs-3 mt-1" />
              <FaFileAlt className="me-2 mt-1 text-success" />
              <div className="flex-grow-1">
                <Link href="/Courses/1234/Assignments/125" className="text-decoration-none">
                  <strong className="text-dark">A3 - JAVASCRIPT + REACT</strong>
                </Link>
                <div className="text-muted small mt-1">
                  <span className="text-danger">Multiple Modules</span>
                  <span className="mx-1">|</span>
                  <span><strong>Not available until</strong> May 20 at 12:00am</span>
                  <span className="mx-1">|</span>
                  <br />
                  <span><strong>Due</strong> May 27 at 11:59pm</span>
                  <span className="mx-1">|</span>
                  <span>100 pts</span>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="text-success me-2" />
                <IoEllipsisVertical className="fs-4" />
              </div>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
