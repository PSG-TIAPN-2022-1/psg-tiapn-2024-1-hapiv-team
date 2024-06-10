import { apiConfig } from "../../config/api";

export const efetuarLogin = async (email, senha) => {
  const response = await fetch("http://localhost:7209/api/1/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, senha }),
  });
  return response.json();
};
