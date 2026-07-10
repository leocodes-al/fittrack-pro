import "./Dashboard.css"

function Dashboard() {
  return (
    <section className="dashboard">

      <div className="dashboard__main">

        <div className="dashboard__title">
          <h4>• TREINO DE HOJE</h4>
          <h2>A Superior</h2>
          <p>Peito • Triceps • Ombros</p>
        </div>

        <div className="dashboard__stats">
          <div className="dashboard__duration">
            <p>DURAÇÃO</p>
            <p>45 minutos</p>
          </div>

          <div className="dashboard__exercises">
            <p>EXERCÍCIOS</p>
            <p>12</p>
          </div>

          <div className="dashboard__focus">
            <p>FOCO</p>
            <p>Parte superior do corpo</p>
          </div>
        </div>

        <button>Ver Treino</button>
      </div>

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

    </section>
  );
}

export default Dashboard
