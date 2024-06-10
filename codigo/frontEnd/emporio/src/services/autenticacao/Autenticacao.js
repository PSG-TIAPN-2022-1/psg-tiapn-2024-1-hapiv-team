import { apiConfig } from "../../config/api";

export const efetuarLogin = async (email, senha) => {
  const response = await fetch("https://localhost:7209/api/1/Gerentes/Login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, senha }),
  });
  return response.json();
};
