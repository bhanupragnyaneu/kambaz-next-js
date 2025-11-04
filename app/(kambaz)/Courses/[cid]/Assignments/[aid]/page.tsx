/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { use, useEffect, useState } from "react";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import { FaCalendarAlt, FaTimes } from "react-icons/fa";
import { assignments } from "../../../../Database";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { addAssignment, updateAssignment } from "../reducer";
import { useDispatch, useSelector } from "react-redux";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer || { assignments: [] });
  
  // Check if this is a new assignment or editing existing one
  const isNewAssignment = aid === "new";
  const existingAssignment = assignments.find((a: any) => a._id === aid);
  
  // State for the assignment form
  const [assignment, setAssignment] = useState({
    title: "",
    description: "",
    points: 100,
    dueDate: "",
    availableFromDate: "",
    availableUntilDate: "",
    course: cid,
  });

  // Populate form with existing assignment data when editing
  useEffect(() => {
    if (!isNewAssignment && existingAssignment) {
      setAssignment({
        title: existingAssignment.title || "",
        description: existingAssignment.description || "",
        points: existingAssignment.points || 100,
        dueDate: existingAssignment.dueDate || existingAssignment.due || "",
        availableFromDate: existingAssignment.availableFromDate || existingAssignment.available || "",
        availableUntilDate: existingAssignment.availableUntilDate || existingAssignment.until || "",
        course: cid as string,
      });
    }
  }, [isNewAssignment, existingAssignment, cid]);

  // Handle save - create new or update existing
  const handleSave = () => {
    if (!assignment.title.trim()) {
      console.log(assignment);
      alert("Assignment name is required");
      return;
    }

    if (isNewAssignment) {
      // Create new assignment
      dispatch(addAssignment(assignment));
    } else {
      // Update existing assignment
      dispatch(updateAssignment({ ...assignment, _id: aid }));
    }
    
    // Navigate back to assignments list
    router.push(`/Courses/${cid}/Assignments`);
  };

  // Handle cancel - navigate back without saving
  const handleCancel = () => {
    router.push(`/Courses/${cid}/Assignments`);
  };
  return (
    <div id="wd-assignments-editor" className="container my-4">
      <Row className="mb-3">
        <Col md={8} className="p-4 bg-white">
          <Form>
            {/* Assignment Name */}
            <Form.Group as={Row} className="mb-3" controlId="wd-name">
              <Form.Label column sm={4} className="text-start">
                Assignment Name
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  value={assignment.title}
                  onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
                  placeholder="Assignment Name"
                />
              </Col>
            </Form.Group>

            {/* Description */}
            <div className="mb-4 border rounded p-3 bg-light">
              <div className="text-danger mb-2">
                The assignment is{" "}
                <span className="text-decoration-underline">
                  available online
                </span>
              </div>
              <p>
                Submit a link to the landing page of your Web application
                running on Netlify. The landing page should include the
                following:
              </p>
              <ul>
                <li>Your full name and section</li>
                <li>Links to each of the lab assignments</li>
                <li>Link to the Kanbaz application</li>
                <li>Links to all relevant source code repositories</li>
              </ul>
              <p>
                The Kanbaz application should include a link to navigate back to
                the landing page.
              </p>
            </div>

            {/* Points */}
            <Form.Group as={Row} className="mb-3" controlId="wd-points">
              <Form.Label column sm={3} className="text-end">
                Points
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="number"
                  defaultValue={assignment ? assignment.points : 0}
                />
              </Col>
            </Form.Group>

            {/* Assignment Group */}
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="wd-assignment-group"
            >
              <Form.Label column sm={3} className="text-end">
                Assignment Group
              </Form.Label>
              <Col sm={9}>
                <Form.Select defaultValue="Assignments">
                  <option value="Assignments">Assignments</option>
                  <option value="Group A">Group A</option>
                  <option value="Group B">Group B</option>
                  <option value="Group C">Group C</option>
                </Form.Select>
              </Col>
            </Form.Group>

            {/* Display Grade As */}
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="wd-display-grade-as"
            >
              <Form.Label column sm={3} className="text-end">
                Display Grade As
              </Form.Label>
              <Col sm={9}>
                <Form.Select defaultValue="Percentage">
                  <option value="Points">Points</option>
                  <option value="Percentage">Percentage</option>
                </Form.Select>
              </Col>
            </Form.Group>

            {/* Submission Type */}
            <Form.Group
              as={Row}
              className="mb-4"
              controlId="wd-submission-type"
            >
              <Form.Label column sm={3} className="text-end">
                Submission Type
              </Form.Label>
              <Col sm={9}>
                <div className="border rounded">
                  {/* Online Entry Options */}
                  <div className="p-3">
                    <Form.Select className="border mb-3" defaultValue="Online">
                      <option>Online</option>
                      <option>Offline</option>
                    </Form.Select>
                    <Form.Label style={{ fontWeight: "bold" }}>
                      Online Entry Options
                    </Form.Label>
                    <Form.Check
                      type="checkbox"
                      label="Text Entry"
                      id="wd-text-entry"
                    />
                    <Form.Check
                      type="checkbox"
                      label="Website URL"
                      id="wd-website-url"
                      defaultChecked
                    />
                    <Form.Check
                      type="checkbox"
                      label="Media Recordings"
                      id="wd-media-recordings"
                    />
                    <Form.Check
                      type="checkbox"
                      label="Student Annotation"
                      id="wd-student-annotation"
                    />
                    <Form.Check
                      type="checkbox"
                      label="File Uploads"
                      id="wd-file-upload"
                    />
                  </div>
                </div>
              </Col>
            </Form.Group>

            {/* Assign Section */}
            <Form.Group as={Row} className="mb-4">
              <Form.Label column sm={3} className="text-end">
                Assign
              </Form.Label>
              <Col sm={9}>
                <div className="border rounded p-3">
                  {/* Assign to */}
                  <Form.Group className="mb-3">
                    <Form.Label style={{ fontWeight: "bold" }}>
                      Assign to
                    </Form.Label>
                    <div className="form-control d-flex align-items-center">
                      <span className="bg-light px-2 py-1 me-1 rounded d-inline-flex align-items-center">
                        Everyone{" "}
                        <FaTimes
                          className="ms-2"
                          style={{ cursor: "pointer" }}
                        />
                      </span>
                    </div>
                  </Form.Group>

                  {/* Due Date */}
                  <Form.Group className="mb-3">
                    <Form.Label style={{ fontWeight: "bold" }}>Due</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        defaultValue={assignment ? assignment.dueDate : ""}
                      />
                      <Button variant="outline-secondary">
                        <FaCalendarAlt />
                      </Button>
                    </InputGroup>
                  </Form.Group>

                  {/* Available From / Until */}
                  <Row>
                    <Col>
                      <Form.Group>
                        <Form.Label style={{ fontWeight: "bold" }}>
                          Available from
                        </Form.Label>
                        <InputGroup>
                          <Form.Control
                            type="text"
                            defaultValue={assignment ? assignment.dueDate : ""}
                          />
                          <Button variant="outline-secondary">
                            <FaCalendarAlt />
                          </Button>
                        </InputGroup>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label style={{ fontWeight: "bold" }}>
                          Until
                        </Form.Label>
                        <InputGroup>
                          <Form.Control
                            type="text"
                            placeholder="Enter date"
                            defaultValue={assignment ? assignment.dueDate : ""}
                          />
                          <Button variant="outline-secondary">
                            <FaCalendarAlt />
                          </Button>
                        </InputGroup>
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Form.Group>
            <hr></hr>
            {/* Footer Buttons */}
            <div className="d-flex justify-content-end">
              <Link href={`/Courses/${cid}/Assignments`}>
                <Button variant="light">Cancel</Button>
                <Button variant="danger" className="ms-2"  onClick={handleSave} >
                  Save
                </Button>
              </Link>
            </div>

            <br />
            <br />
            <br />
          </Form>
        </Col>
      </Row>
      <br />
      <br />
      <br />
    </div>
  );
}
