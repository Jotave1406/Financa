import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const LancamentoPage = () => {
  const [tipo, setTipo] = useState("receita");
  const [categoria, setCategoria] = useState("");
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!categoria || !valor) {
      setMensagem("Preencha todos os campos obrigatórios.");
      return;
    }

    console.log({ tipo, categoria, valor, descricao });

    setMensagem("Lançamento salvo com sucesso!");
    setCategoria("");
    setValor("");
    setDescricao("");
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Header className="bg-warning text-white text-center">
              Novo Lançamento
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Tipo</Form.Label>
                  <Form.Select value={tipo} onChange={(e) => setTipo(e.target.value)}>
                    <option value="receita">Receita</option>
                    <option value="despesa">Despesa</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Categoria</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ex: Alimentação, Salário, Transporte"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Valor (R$)</Form.Label>
                  <Form.Control
                    type="number"
                    step="0.01"
                    placeholder="Ex: 30.00"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                  />
                </Form.Group>

                {mensagem && (
                  <div className="text-success text-center mb-3">{mensagem}</div>
                )}

                <Button type="submit" variant="warning" className="w-100">
                  Lançar
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LancamentoPage;
