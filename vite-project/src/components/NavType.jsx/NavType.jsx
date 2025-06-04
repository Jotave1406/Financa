import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { useAuth } from "../../AutToken/AutToken";

const NavType = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: '#D4AF37' }} data-bs-theme="dark">
      <Container>
        <Navbar.Brand style={{ flexGrow: 100 }} href="#home">
          <div className="text-white">
            <div className="fw-bold">BANKEEP</div>
            {user && (
              <small style={{ fontSize: 11 }}>
                <div>Usuário: {user.nome}</div>
                <div>Perfil: {user.perfil}</div>
                <div>ID: {user.id}</div>
              </small>
            )}
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              {user ? "Dasboard" : "Início"}
            </Nav.Link>

            {user && (
              <>
                <Nav.Link as={Link} to="/lancamento">Lançamentos</Nav.Link>
                <Nav.Link as={Link} to="/dividas">Dívidas</Nav.Link>
                <Nav.Link as={Link} to="/editar-dividas">Cadastro/Edição de Dívida</Nav.Link>
              </>
            )}
            {user ? (
              <Nav.Link onClick={logout}>Logout</Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavType;
