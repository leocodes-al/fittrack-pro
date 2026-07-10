import { NavLink } from "react-router-dom"
import { LayoutDashboard, Dumbbell, Footprints, LineChart, Wallet, User } from "../../assets/icons/lucideIcons"
import Logo from "../../assets/images/logo.svg"

import "./Sidebar.css";

function Sidebar() {

  const sidebarItems = [
    {
      nome: "Dashboard",
      rota: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      nome: "Meu Treino",
      rota: "/meu-treino",
      icon: Dumbbell,
    },
    {
      nome: "Corridas",
      rota: "/corridas",
      icon: Footprints,
    },
    {
      nome: "Evolução",
      rota: "/evolucao",
      icon: LineChart,
    },
    {
      nome: "Financeiro",
      rota: "/financeiro",
      icon: Wallet,
    },
    {
      nome: "Perfil",
      rota: "/perfil",
      icon: User,
    },
  ]

  return (
    <aside className="sidebar">

      <div className="sidebar__logo">
        <img src={Logo} alt="Logo FitTrack Pro" />
        <h4>FitTrack <span>Pro</span></h4>
      </div>

      <nav className="sidebar__nav">
        <ul className="sidebar__list">

          {sidebarItems.map((item) => (
            <li key={item.rota} className="sidebar__item">

              <NavLink to={item.rota} className={({ isActive }) => isActive ? "sidebar__link sidebar__link--active" : "sidebar__link"} >
                <item.icon className="sidebar__icon" />
                {item.nome}
              </NavLink>

            </li>
          ))}

        </ul>
      </nav>

      <div className="sidebar__avatar">
        <h4>Leonardo</h4>
        <p>Student</p>
      </div>

    </aside>
  );
}

export default Sidebar;