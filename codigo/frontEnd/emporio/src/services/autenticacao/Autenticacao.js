import { apiConfig } from "../../config/api";

export const efetuarLogin = async (email, senha) => {
  const response = await fetch(apiConfig.HTTPS + "/Gerentes/Login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, senha }),
  });
  return response;
};
