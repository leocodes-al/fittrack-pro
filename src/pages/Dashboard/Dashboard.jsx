import { Bell, Menu, Clock, ListChecks, Target, Play, Trophy, Droplets, Plus, Footprints, StickyNote, ChevronRight, X } from "../../assets/icons/lucideIcons"

import "./Dashboard.css"

function Dashboard() {
  return (
    <section className="dashboard">

      <main className="main">

        <div className="dashboard__title">
          <p><span>•</span> TREINO DE HOJE</p>
          <h2>A Superior</h2>
          <p>Peito • Triceps • Ombros</p>
        </div>

        <div className="dashboard__stats">
          <div className="stats">
            <div className="label">
              <Clock className="icon__stats" />
              <p>DURAÇÃO</p>
            </div>
            <span>45 minutos</span>
          </div>

          <div className="stats">
            <div className="label">
              <ListChecks className="icon__stats" />
              <p>EXERCÍCIOS</p>
            </div>
            <span>12</span>
          </div>

          <div className="stats">
            <div className="label">
              <Target className="icon__stats" />
              <p>FOCO</p>
            </div>
            <span>Parte superior do corpo</span>
          </div>
        </div>

        <button className="button__view"><ChevronRight />Ver Treino</button>
      </main>

      <div className="dashboard__info">
        <div className="info">
          <div className="dashboard__card-title">
            <div className="dashboard__card-icon">
              <Trophy className="card-icon" />
            </div>
            <h4>Meta semanal</h4>
          </div>

          <p><span>3</span> / 5 treinos</p>
          <p>Faltam 2 está semana</p>
        </div>

        <div className="info">
          <div className="dashboard__card-title">
            <div className="dashboard__card-icon">
              <Droplets className="card-icon" />
            </div>
            <h4>Ingestão de água</h4>
          </div>

          <p><span>1.5</span> L hoje</p>
          <button className="button__water">+ 250 ml</button>
        </div>

        <div className="info">
          <div className="dashboard__card-title">
            <div className="dashboard__card-icon">
              <Footprints className="card-icon" />
            </div>
            <h4>Última corrida</h4>
          </div>

          <p><span>5.0</span> km</p>
          <p>31:12 • 6:14/km</p>
        </div>

      </div>

    </section>
  );
}

export default Dashboard
