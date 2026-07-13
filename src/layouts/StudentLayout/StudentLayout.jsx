import Sidebar from "../../components/Sidebar/Sidebar"
import Header from "../../components/Header/Header"
import Dashboard from "../../pages/Dashboard/Dashboard"

import "./StudentLayout.css"

function StudentLayout() {
  return (
    <div className="student-layout">

      <Sidebar />

      <div className="student-layout__content">

        <main className="student-layout__main">
          <div className="container">
            <Dashboard />
          </div>

        </main>
      </div>
    </div>
  );
}

export default StudentLayout