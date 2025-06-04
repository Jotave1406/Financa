import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useAuth } from "../AutToken/AutToken";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login } = useAuth();
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const clickBtn = () => {
    if (login(nome, senha)) {
      setMessage("");
      setNome("");
      setSenha("");
      navigate("/");
    } else {
      setMessage("Usuário ou senha inválida!");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #f6f9fc, #d3e0ea)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container style={{ maxWidth: "400px" }}>
        <Card className="shadow rounded-4 border-0">
          <Card.Body>
            <h3 className="text-center mb-4">Login</h3>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Usuário</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </Form.Group>

              {message && (
                <div className="text-danger text-center mb-3">{message}</div>
              )}

              <Button
                variant="warning"
                className="w-100"
                onClick={clickBtn}
              >
                Entrar
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default LoginPage;
