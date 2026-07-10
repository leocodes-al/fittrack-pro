import Sidebar from "../../components/Sidebar/Sidebar"
import Header from "../../components/Header/Header"

import "./StudentLayout.css"

function StudentLayout() {
  return (
    <div className="student-layout">

      <Sidebar />

      <div className="student-layout__content">

        <header className="student-layout__header">
          <Header />
        </header>

        <main className="student-layout__main">
          <div className="container">
            <h1>Student Dashboard/Treino/Corridas</h1>
          </div>

        </main>

      </div>
    </div>
  );
}

export default StudentLayout