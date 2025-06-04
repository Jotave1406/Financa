import { Card, Container, Row, Col } from "react-bootstrap";

const InicioPage = () => {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Bem-vindo ao BANKEEP</h1>
      <p className="text-center mb-5">
        Este sistema foi desenvolvido para ajudar você a controlar suas finanças pessoais de forma prática e eficiente.
        Aqui você pode lançar receitas e despesas, visualizar relatórios no dashboard e gerenciar suas dívidas com facilidade.
      </p>

      <Row className="g-4">
        <Col md={4}>
          <Card text="dark">
            <Card.Body>
              <Card.Title>Controle de Receitas</Card.Title>
              <Card.Text>
                Registre suas fontes de renda e acompanhe seu crescimento financeiro ao longo do tempo.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card text="dark">
            <Card.Body>
              <Card.Title>Controle de Despesas</Card.Title>
              <Card.Text>
                Tenha controle total sobre seus gastos e tome decisões mais conscientes sobre suas finanças.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card text="dark">
            <Card.Body>
              <Card.Title>Dashboard Inteligente</Card.Title>
              <Card.Text>
                Visualize seu saldo atual, totais e últimos lançamentos de maneira clara e objetiva.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default InicioPage;
