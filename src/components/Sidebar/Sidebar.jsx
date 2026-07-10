import "./Sidebar.css";

function Sidebar() {

  const lista_sidebar = ["Dashboard", "Meu Treino", "Corridas", "Progresso Físico", "Finacias", "Perfil"]

  return (
    <aside className="sidebar">

      <div className="sidebar__logo">
        FitTrack Pro
      </div>

      <nav className="sidebar__nav">
        <ul>

          {lista_sidebar.map((item, index) => (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          ))}

        </ul>
      </nav>

    </aside>
  );
}

export default Sidebar;