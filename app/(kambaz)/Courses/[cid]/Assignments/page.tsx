/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import { Button, Form, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaSearch, FaEllipsisV, FaTrash, FaEdit, FaCheckCircle, FaFileAlt } from "react-icons/fa";
import { deleteAssignment } from "./reducer";
import Link from "next/link";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { IoChevronDown, IoEllipsisVertical } from "react-icons/io5";

export default function Assignments() {
  const { cid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer || { assignments: [] });
  const { currentUser } = useSelector((state: any) => state.accountReducer || { currentUser: null });
  
  const courseAssignments = assignments.filter((assignment: any) => assignment.course === cid);
  
  const isFaculty = currentUser?.role === "FACULTY";

  const handleDeleteAssignment = (assignmentId: string, assignmentTitle: string) => {
    if (window.confirm(`Are you sure you want to remove "${assignmentTitle}"?`)) {
      dispatch(deleteAssignment(assignmentId));
    }
  };

  const handleAddAssignment = () => {
    router.push(`/Courses/${cid}/Assignments/new`);
  };

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
          <Button variant="danger" size="lg" id="wd-add-assignment" onClick={handleAddAssignment} >
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
          </ListGroupItem>
      </ListGroup>

      {/* Assignments List */}
      <div className="border rounded">

        {courseAssignments.length === 0 ? (
          <div className="p-4 text-center text-muted">
            No assignments found for this course.
            {isFaculty && (
              <div className="mt-2">
                <Button variant="primary" onClick={handleAddAssignment}>
                  Create Your First Assignment
                </Button>
              </div>
            )}
          </div>
        ) : (
          courseAssignments.map((assignment: any) => (
            <div key={assignment._id} className="p-2 border-bottom d-flex wd-assignment-item justify-content-between align-items-start">
              <div className="d-flex align-items-start">
                <BsGripVertical className="me-2 fs-3" />
                <FaFileAlt className="me-2 mt-1 text-success" />
                <div className="me-3">
                  <i className="fas fa-file-alt text-success fs-4"></i>
                </div>
                <div>
                  <Link 
                    href={`/Courses/${cid}/Assignments/${assignment._id}`}
                    className="text-decoration-none text-dark fw-bold"
                  >
                    {assignment.title}
                  </Link>
                  <div className="text-muted small">
                    <span className="text-danger">Multiple Modules</span> | 
                    <span className="ms-1">
                      <strong>Not available until</strong> {assignment.availableFromDate || assignment.available || "N/A"} |
                    </span>
                    <div>
                      <strong>Due</strong> {assignment.availableUntilDate || assignment.due || "N/A"} | {assignment.points || 0} pts
                    </div>
                  </div>
                </div>
              </div>
              
              
                <div className="d-flex align-items-center">
                  <Link href={`/Courses/${cid}/Assignments/${assignment._id}`}>
                    <Button variant="outline-secondary" size="sm" className="me-2">
                      <FaEdit />
                    </Button>
                  </Link>
                  <Button 
                    variant="outline-danger" 
                    size="sm"
                    onClick={() => handleDeleteAssignment(assignment._id, assignment.title)}
                  >
                    <FaTrash />
                  </Button>
                  <FaCheckCircle className="ms-3 text-success me-2" />
                  <FaEllipsisV className="ms-2 text-muted" />
                </div>
              
            </div>
          ))
        )}
      </div>
    </div>
  );
}