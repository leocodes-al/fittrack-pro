import { Bell, Menu, Clock, ListChecks, Target, Play, Trophy, Droplets, Plus, Footprints, StickyNote, ChevronRight, X } from "../../assets/icons/lucideIcons"

import "./Dashboard.css"

function Dashboard() {
  return (
    <section className="dashboard">

      <div className="dashboard__main">

        <main className="main">

          <div className="dashboard__title">
            <p><span>•</span> TREINO DE HOJE</p>
            <h2>A Superior</h2>
            <p>Peito • Triceps • Ombros</p>
          </div>

          <div className="dashboard__stats">
            <div className="duration">
              <div className="label">
                <Clock className="icon" />
                <p>DURAÇÃO</p>
              </div>
              <span>45 minutos</span>
            </div>

            <div className="exercises">
              <div className="label">
                <ListChecks className="icon" />
                <p>EXERCÍCIOS</p>
              </div>
              <span>12</span>
            </div>

            <div className="focus">
              <div className="label">
                <Target className="icon" />
                <p>FOCO</p>
              </div>
              <span>Parte superior do corpo</span>
            </div>
          </div>

          <button className="button__view"><ChevronRight />Ver Treino</button>
        </main>

        <div className="dashboard__info">

          <div className="dashboard_week">
            <p>Meta semanal</p>
            <p>3 / 5 treinos</p>
            <p>Faltam 2 esta semana</p>
          </div>

          <div className="dashboard__water">
            <p>Ingetão de água</p>
            <p>1,5 L hoje</p>
            <p>+ 250 ml</p>
          </div>

          <div className="dashboard__last-run">
            <p>Última corrida</p>
            <p>5.0 km</p>
            <p>31:12 • 6:14/km</p>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Dashboard
