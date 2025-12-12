/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import * as db from "../Database";

const initialState = {
  enrollments: db.enrollments,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
    },
    enrollCourse: (state, { payload: { userId, courseId } }) => {
      const alreadyEnrolled = state.enrollments.some(
        (enrollment: any) =>
          enrollment.user === userId && enrollment.course === courseId
      );

      if (!alreadyEnrolled) {
        const newEnrollment = {
          _id: `${userId}-${courseId}`,
          user: userId,
          course: courseId,
        };
        state.enrollments = [...state.enrollments, newEnrollment] as any;
      }
    },
    unenrollCourse: (state, { payload: { userId, courseId } }) => {
      state.enrollments = state.enrollments.filter(
        (enrollment: any) => 
          !(enrollment.user === userId && enrollment.course === courseId)
      ) as any;
    },
  },
});

export const { setEnrollments, enrollCourse, unenrollCourse } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;