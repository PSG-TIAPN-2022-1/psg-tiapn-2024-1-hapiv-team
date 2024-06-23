import {
  BarraLateralBox,
  BarraLateralCabecalho,
  BarraLateralLogo,
  SecaoBotoes,
  SecaoInferior,
  Link
} from "./BarraLateral.style";
import logo from "../../../../Assets/img/logo-emporio-jeito-simples.png";
import Button from "./components/Button/Button";


export const BarraLateral = () => {
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
       <Link to="/login">
        <Button icon="logout" title="Sair" />
      </Link>
      </SecaoInferior>
    </BarraLateralBox>
  );
};
