export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2>Course Status</h2>
      <div className="wd-status-buttons" style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <div style={{ marginBottom: "5px" }}>
          <button className="wd-button">Unpublish</button>
          <button className="wd-button">Publish</button>
        </div>
        
        <button className="wd-button">Import Existing Content</button>
        <button className="wd-button">Import from Commons</button>
        <button className="wd-button">Choose Home Page</button>
        <button className="wd-button">View Course Stream</button>
        <button className="wd-button">New Announcement</button>
        <button className="wd-button">New Analytics</button>
        <button className="wd-button">View Course Notifications</button>
      </div>
    </div>
  );
}

