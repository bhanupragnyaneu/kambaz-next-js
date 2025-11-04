/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import * as db from "../../../Database";

const initialState = {
  assignments: db.assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment = {
        _id: new Date().getTime().toString(),
        ...assignment,
        course: assignment.course, // Ensure course ID is included
      };
      console.log("Adding assignment:", newAssignment); // Debug log
      state.assignments = [...state.assignments, newAssignment];
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      console.log("Deleting assignment:", assignmentId); // Debug log
      state.assignments = state.assignments.filter((a: any) => a._id !== assignmentId);
    },
    updateAssignment: (state, { payload: assignment }) => {
      console.log("Updating assignment:", assignment); // Debug log
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      );
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;