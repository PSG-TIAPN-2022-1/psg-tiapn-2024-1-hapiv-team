import {
  BarraLateralBox,
  BarraLateralCabecalho,
  BarraLateralLogo,
  SecaoBotoes,
  SecaoInferior,
} from "./BarraLateral.style";
import logo from "../../../../Assets/img/logo-emporio-jeito-simples.png";
import Button from "./components/Button/Button";
import { useNavigate } from "react-router-dom";

export const BarraLateral = () => {
  const navigate = useNavigate();

  return (
    <BarraLateralBox>
      <BarraLateralCabecalho>
        <BarraLateralLogo src={logo} />
      </BarraLateralCabecalho>
      <SecaoBotoes>
        <Button
          icon="store"
          title="Estoque"
          onClick={() => {
            navigate("/estoque");
          }}
        />
        <Button
          icon="payments"
          title="Vendas"
          onClick={() => {
            navigate("/financas");
          }}
        />
      </SecaoBotoes>
      <SecaoInferior>
        <Button
          icon="logout"
          title="Sair"
          onClick={() => {
            navigate("/login");
          }}
        />
      </SecaoInferior>
    </BarraLateralBox>
  );
};
