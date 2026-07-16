import { Outlet } from "react-router-dom"

import Sidebar from "../../components/Sidebar/Sidebar"
import Header from "../../components/Header/Header"

import "./StudentLayout.css"

function StudentLayout() {
  return (
    <div className="student-layout">

      <Sidebar />

      <div className="student-layout__content">
        <Header />

        <main className="student-layout__main">
          <div className="container">
            <Outlet />
          </div>
        </main>

      </div>

    </div>
  );
}

export default StudentLayout