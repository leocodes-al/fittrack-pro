import "./Running.css"

function Running() {

  return (

    <section className="running">
      <div className="running__main">

        <div className="running__tilte">
          <div className="running__label">
            <h3>Resumo Geral</h3>
            <p>Suas estatísticas de corrida em um só lugar.</p>
          </div>
          <button className="add__running">+ Corrida</button>
        </div>

        <div className="running_stats">
          <div className="run__stats">
            <p>TOTAL DE CORRIDAS</p>
            <h4>32</h4>
            <p>este ano</p>
          </div>

          <div className="run__stats">
            <p>TOTAL DE CORRIDAS</p>
            <h4>32</h4>
            <p>este ano</p>
          </div>

          <div className="run__stats">
            <p>TOTAL DE CORRIDAS</p>
            <h4>32</h4>
            <p>este ano</p>
          </div>

          <div className="run__stats">
            <p>TOTAL DE CORRIDAS</p>
            <h4>32</h4>
            <p>este ano</p>
          </div>

        </div>

        <div className="history__running">
          <div className="label__history">
            <h4>Histórico de corridas</h4>
            <p>Últimas 5 sessões</p>
          </div>

          <div className="running__day">
            <div className="day__one">
              <div className="day__tilte">
                <h4>Corrida no Parque Ibirapuera</h4>
                <p>14 de julho de 2026</p>
              </div>

              <div className="running__distance">
                <div>
                  <p>DISTÂNCIA</p>
                  <h4>8,2 km</h4>
                </div>

                <div>
                  <p>TEMPO</p>
                  <h4>42:15</h4>
                </div>

                <div>
                  <p>RITMO</p>
                  <h4>5:09/km</h4>
                </div>
              </div>

              <hr></hr>

              <p>Série de 400m em ritmo forte.</p>

            </div>
          </div>
        </div>

        <div className="objective">
          <div className="objective__label">
            <h4>Meta Mensal</h4>
            <p>Julho de 2026</p>
          </div>

          <div className="objective__distance">
            <h4>32 <span>/ 50 km</span></h4>
            <progress></progress>
            <p>Progresso atual</p>
          </div>

          <div className="objective__finish">
            <p>Faltam</p>
            <h4>18 km</h4>
            <p>para bater sua meta do mês.</p>
          </div>

        </div>

      </div>
    </section>
  )

}

export default Running;