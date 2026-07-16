import { Clock, ListChecks, Target, StickyNote, Gauge } from "../../assets/icons/lucideIcons"

import "./MyWorkout.css"

function MyWorkout() {

  return (

    <section className="myworkout">
      <div className="title">
        <h2>Meu Treino</h2>
        <p>Confira seu plano de treino atual antes de começar.</p>
      </div>

      <div className="exercise">
        <div className="exercise__title">
          <p>TREINO ATUAL</p>
          <h2>Superior</h2>
          <p>Peito • Ombros • Tríceps</p>
        </div>

        <div className="exercise__stats">

          <div className="exer__stats">
            <div className="label">
              <Clock className="icon__stats" />
              <p>DURAÇÃO</p>
            </div>
            <span>45 minutos</span>
          </div>

          <div className="exer__stats">
            <div className="label">
              <ListChecks className="icon__stats" />
              <p>EXERCÍCIOS</p>
            </div>
            <span>12</span>
          </div>

          <div className="exer__stats">
            <div className="label">
              <Target className="icon__stats" />
              <p>FOCO</p>
            </div>
            <span>Hipertofria</span>
          </div>

          <div className="exer__stats">
            <div className="label">
              <Gauge className="icon__stats" />
              <p>DIFICULDADE</p>
            </div>
            <span>Intermediário</span>
          </div>

        </div>
      </div>

      <div className="list">
        <div className="list__title">
          <h4>Lista de exercícios</h4>
          <p>8 exercícios</p>
        </div>

        <div className="list__exercise">
          <ul>
            <li>
              <p>Supino</p>
              <span>4 x 10</span>
            </li>

            <li>
              <p>Supino inclinado com halteres</p>
              <span>3 x 12</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="annotation">
        <StickyNote className="icon__annotation" />
        <p>Anotações de Treino</p>
        <p>Concentra-se na técnica correta e no movimento controlado.</p>
      </div>

    </section>
  );
}

export default MyWorkout