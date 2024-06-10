import {
  BarraLateralBox,
  BarraLateralCabecalho,
  BarraLateralLogo,
  SecaoBotoes,
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
        <Button icon="home" title="Home" />
        <Button icon="store" title="Estoque" />
        <Button icon="payments" title="Finanças" />
      </SecaoBotoes>
      <SecaoBotoes>
        <Button icon="logout" title="Sair" />
      </SecaoBotoes>
    </BarraLateralBox>
  );
};
