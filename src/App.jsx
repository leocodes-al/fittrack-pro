import { Routes, Route, Navigate } from "react-router-dom"

import StudentLayout from './layouts/StudentLayout/StudentLayout'

import Dashboard from "./pages/Dashboard/Dashboard"
import MyWorkout from "./pages/MyWorkout/MyWorkout"
import Running from "./pages/Running/Running"

function App() {
  return (
    <Routes>

      <Route path="/" element={<StudentLayout />}>
        <Route path="/" element={<Navigate to="/Dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="treino" element={<MyWorkout />} />
        <Route path="corrida" element={<Running />} />
      </Route>

    </Routes>
  )
}

export default App
