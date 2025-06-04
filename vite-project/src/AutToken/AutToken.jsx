import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const usersList = [
  {
    nome: "Joao",
    senha: "123",
    id: "15",
    perfil: "cliente"
  },
  {
    nome: "admin",
    senha: "001",
    id: "001",
    perfil: "admin"
  }
];

export const AutToken = ({ children }) => {
  const [logado, setLogado] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    let u = localStorage.getItem("user");
    if (u) {
      setUser(JSON.parse(u));
      setLogado(true);
    }
  }, []);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    setLogado(false);
  };

  const login = (nome, senha) => {
    const foundUser = usersList.find(
      (u) => u.nome === nome && u.senha === senha
    );

    if (foundUser) {
      localStorage.setItem("user", JSON.stringify(foundUser));
      setUser(foundUser);
      setLogado(true);
      return true;
    } else {
      setUser(null);
      setLogado(false);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ user, logado, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
