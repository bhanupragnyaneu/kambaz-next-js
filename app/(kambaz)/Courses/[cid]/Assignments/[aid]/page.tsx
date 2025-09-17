export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description" style={{ width: "400px", height: "150px" }} defaultValue="
        The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbaz application Links to all relevant source code repositories The Kanbaz application should include a link to navigate back to the landing page.
      "></textarea>
      <br /><br/>
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" defaultValue={100} />
          </td>
        </tr><br/>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assignment-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-assignment-group" defaultValue="Assignments">
              <option value="Assignments">Assignments</option>
              <option value="Group A">Group A</option>
              <option value="Group B">Group B</option>
              <option value="Group C">Group C</option>
            </select>
          </td>
        </tr><br/>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade As</label>
          </td>
          <td>
            <select id="wd-display-grade-as" defaultValue="Percentage">
              <option value="Points">Points</option>
              <option value="Percentage">Percentage</option>
            </select>
          </td>
        </tr><br/>
        <tr>
          <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option>Online</option>
                <option>Offline</option>
              </select>
            </td>
        </tr><br/>
        <tr>
            <td align="right" valign="top">
            </td>
            <td>
            <label>Online Entry Options</label><br/>
              <input type="checkbox" id="wd-text-entry"/>
              <label htmlFor="wd-text-entry"> Text Entry</label><br/>
              <input type="checkbox" id="wd-website-url"/>
              <label htmlFor="wd-website-url"> Website URL</label><br/>
              <input type="checkbox" id="wd-media-recordings"/>
              <label htmlFor="wd-media-recordings"> Media Recordings</label><br/>
              <input type="checkbox" id="wd-student-annotation"/>
              <label htmlFor="wd-student-annotation"> Student Annotation</label><br/>
              <input type="checkbox" id="wd-file-upload"/>
              <label htmlFor="wd-file-upload"> File Uploads</label>
            </td>
          </tr><br/>
          <tr>
            <td align="right" valign="top">Assign</td>
            <td>
                <label htmlFor="wd-assign-to">Assign to</label><br/>
                <input id="wd-assign-to" defaultValue="Everyone" />
            </td>
          </tr><br/>
          <tr>
            <td ></td>
            <td>
              <label htmlFor="wd-due-date">Due</label><br/>
              <input type="date" id="wd-due-date" defaultValue="2024-05-13" />
            </td>
          </tr><br/>
          <tr>
            <td ></td>
            <td>
            <label htmlFor="wd-available-from">Available from</label><br/>
              <input type="date" id="wd-available-from" defaultValue="2024-05-06" />
            </td>
            <td ></td>
            <td>
            <label htmlFor="wd-available-until">Until</label><br/>
              <input type="date" id="wd-available-until" defaultValue="2024-05-20" />
            </td>
          </tr>
      </table>
    </div>
);}
