import "./Header.css"

function Header() {
  return (
    <div className="content-header">

      <header className="header">

        <div className="header__info">
          <h4>Bom dia, Leonardo</h4>
          <p>Quinta-feira, 9 de julho</p>
        </div>

        <div className="header__actions">
          <button>Notificações</button>
          <button>Perfil</button>
        </div>

      </header>

    </div>
  );
}

export default Header;