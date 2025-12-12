/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */
"use client";
import { useDispatch, useSelector } from "react-redux";
import * as client from "../Courses/client";
import {
  addNewCourse,
  deleteCourse,
  updateCourse,
  setCourses,
} from "../Courses/reducer";
import { setEnrollments, enrollCourse, unenrollCourse } from "../Enrollments/reducer";
import Link from "next/link";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  FormControl,
  Row,
} from "react-bootstrap";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();

  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    src: "/images/react.png",
    description: "New Description",
  });

  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([...courses, newCourse]));
  };

  const onDeleteCourse = async (courseId: string) => {
    const status = await client.deleteCourse(courseId);
    dispatch(
      setCourses(
        courses.filter((course: { _id: string }) => course._id !== courseId)
      )
    );
  };

  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(
      setCourses(
        courses.map((c: { _id: any }) => {
          if (c._id === course._id) {
            return course;
          } else {
            return c;
          }
        })
      )
    );
  };

  const isFaculty = currentUser?.role === "FACULTY";
  const [showAllCourses, setShowAllCourses] = useState(isFaculty);

  const fetchCourses = async () => {
    try {
      const courses = await client.fetchAllCourses();
      dispatch(setCourses(courses));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchEnrollments = async () => {
    try {
      if (currentUser) {
        const userCourses = await client.findCoursesForUser(currentUser._id);
        const enrollments = userCourses.map((course: any) => ({
          _id: `${currentUser._id}-${course._id}`,
          user: currentUser._id,
          course: course._id,
        }));
        dispatch(setEnrollments(enrollments));
      }
    } catch (error) {
      console.error("Error fetching enrollments:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
    fetchEnrollments();
  }, [currentUser]);

  const isEnrolled = (courseId: string) => {
    return enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser?._id && enrollment.course === courseId
    );
  };

  const handleEnroll = async (courseId: string) => {
    try {
      await client.enrollIntoCourse(currentUser._id, courseId);
      dispatch(enrollCourse({ userId: currentUser._id, courseId }));
    } catch (error) {
      console.error("Error enrolling in course:", error);
    }
  };

  const handleUnenroll = async (courseId: string) => {
    try {
      await client.unenrollFromCourse(currentUser._id, courseId);
      dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
    } catch (error) {
      console.error("Error unenrolling from course:", error);
    }
  };

  const visibleCourses = showAllCourses
    ? courses
    : courses.filter((course: any) => isEnrolled(course._id));


  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {isFaculty && (
        <>
          <h5>
            New Course
            <button
              onClick={onAddNewCourse}
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={onUpdateCourse} 
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <hr />
          <br />
          <FormControl
            placeholder={course.name}
            value={course.name === "New Course" ? "" : course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            as="textarea"
            placeholder={course.description}
            value={
              course.description === "New Description" ? "" : course.description
            }
            rows={3}
            className="mb-3"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
        </>
      )}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 id="wd-dashboard-published">
          {showAllCourses ? "All Courses" : "Published Courses"} (
          {visibleCourses.length})
        </h2>
        {!isFaculty && (
          <Button
            variant="primary"
            id="wd-enrollments-button"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            {showAllCourses ? "My Courses" : "All Courses"}
          </Button>
        )}
      </div>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {visibleCourses.map((course: any) => {
            const enrolled = isEnrolled(course._id);

            return (
              <Col
                key={course._id}
                className="wd-dashboard-course"
                style={{ width: "300px" }}
              >
                <Card>
                  {enrolled || isFaculty ? (
                    <Link
                      href={`/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark"
                    >
                      <CardImg
                        src={course.src}
                        alt="course logo"
                        variant="top"
                        width="100%"
                        height={160}
                      />
                      <CardBody className="card-body">
                        <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                          {course.name}
                        </CardTitle>
                        <CardText
                          className="wd-dashboard-course-description overflow-hidden"
                          style={{ height: "100px" }}
                        >
                          {course.description}
                        </CardText>
                        <Button variant="primary"> Go </Button>
                      </CardBody>
                    </Link>
                  ) : (
                    <>
                      <CardImg
                        src={course.src}
                        alt="course logo"
                        variant="top"
                        width="100%"
                        height={160}
                      />
                      <CardBody className="card-body">
                        <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                          {course.name}
                        </CardTitle>
                        <CardText
                          className="wd-dashboard-course-description overflow-hidden"
                          style={{ height: "100px" }}
                        >
                          {course.description}
                        </CardText>
                      </CardBody>
                    </>
                  )}

                  <CardBody className="pt-0">
                    {currentUser?.role !== "FACULTY" && showAllCourses && (
                      <>
                        {enrolled ? (
                          <Button
                            variant="danger"
                            className="w-100 mb-2"
                            onClick={() => handleUnenroll(course._id)}
                          >
                            Unenroll
                          </Button>
                        ) : (
                          <Button
                            variant="success"
                            className="w-100 mb-2"
                            onClick={() => handleEnroll(course._id)}
                          >
                            Enroll
                          </Button>
                        )}
                      </>
                    )}

                    {isFaculty && (
                      <div className="d-flex gap-2">
                        <button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning flex-fill"
                        >
                          Edit
                        </button>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            onDeleteCourse(course._id);
                          }}
                          className="btn btn-danger flex-fill"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
