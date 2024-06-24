import {
  BarraLateralBox,
  BarraLateralCabecalho,
  BarraLateralLogo,
  SecaoBotoes,
  SecaoInferior,
  Link,
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
        <Button icon="store" title="Estoque" />
        <Button icon="payments" title="Finanças" />
      </SecaoBotoes>
      <SecaoInferior>
        <Button
          icon="logout"
          title="Sair"
          onClick={() => {
            // Aqui você pode colocar a lógica para fazer logout, se necessário
            // Exemplo de navegação para a página de login:
            console.log("Fazer logout");
            navigate("/login");
          }}
        />
      </SecaoInferior>
    </BarraLateralBox>
  );
};
