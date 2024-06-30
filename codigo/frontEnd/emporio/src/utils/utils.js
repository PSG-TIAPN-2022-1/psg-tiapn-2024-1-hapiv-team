export const verificarSeElementoEhNulo = (a) => {
  return a === null || a === undefined || a === "" || a.length === 0;
};

export const verificarSeElementoEhMenor = (a, b) => {
  return a.length < b;
};

export const compararElementos = (a, b) => {
  return a === b;
};

export const verificarSeEhNumero = (a) => {
  return !isNaN(a);
};

export const verificarSeEhPositivo = (a) => {
  return verificarSeEhNumero(a) && a > 0.0;
};

export const substituirPontoPorVirgula = (numero) => {
  let numeroComVirgula = numero.toString().replace(".", ",");
  return numeroComVirgula;
};

export const substituirVirgulaPorPonto = (numero) => {
  let numeroComPonto = numero.toString().replace(",", ".");
  return numeroComPonto;
};

export const formatarValoresDecimaisComVirgula = (
  numero,
  casasDecimais = 2
) => {
  numero = parseFloat(numero);
  let numeroDecimal = numero.toFixed(casasDecimais);
  let numeroDecimalComVirgula = substituirPontoPorVirgula(numeroDecimal);
  return numeroDecimalComVirgula;
};

export const adicionarPontoACadaTresDigitos = (numero) => {
  const adicionaPontoAposTresDigitos = /\B(?=(\d{3})+(?!\d))/g;
  let numeroComPontoTresDigitos = numero
    .toString()
    .replace(adicionaPontoAposTresDigitos, ".");
  return numeroComPontoTresDigitos;
};

export const formatarValoresDecimaisComPontoEComVirgula = (numero) => {
  let numeroDecimalComVirgula = formatarValoresDecimaisComVirgula(numero);
  let parts = numeroDecimalComVirgula.split(",");
  parts[0] = adicionarPontoACadaTresDigitos(parts[0]);
  return parts.join(",");
};

export const calcularPercentualLucroUnitario = (
  precoVenda,
  precoCompra,
  quantidade
) => {
  return formatarValoresDecimaisComPontoEComVirgula(
    ((precoVenda - precoCompra) * quantidade) / 100
  );
};
