import { Clock, ListChecks, Target, StickyNote, Gauge } from "../../assets/icons/lucideIcons"

import "./MyWorkout.css"

function MyWorkout() {

  const treiner = [
    {
      num: 1,
      name_exercice: "Supino",
      serie: "4 x 10"
    },

    {
      num: 2,
      name_exercice: "Supino inclinado com halteres",
      serie: "3 x 12"
    }
  ]

  return (

    <section className="myworkout">
      <div className="myworkout__content">

        <div className="myworkout__title">
          <h2>Meu Treino</h2>
          <p>Confira seu plano de treino atual antes de começar.</p>
        </div>

        <div className="exercise">
          <div className="exercise__title">
            <p> <span>•</span> TREINO ATUAL</p>
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
              {treiner.map((item) =>
                <li>
                  <p>
                    <span className="number">{item.num}</span>
                    {item.name_exercice}
                  </p>

                  <span>{item.serie}</span>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="annotation">
          <StickyNote className="icon__annotation" />
          <div className="title_annotation">
            <h4>Anotações de Treino</h4>
            <p>Concentra-se na técnica correta e no movimento controlado.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default MyWorkout