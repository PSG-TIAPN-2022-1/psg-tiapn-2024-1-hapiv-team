export const verificarSeElementoEhNulo = (a) => {
  return a === null || a === undefined || a === "" || a.length === 0;
};

export const verificarSeElementoEhMenor = (a, b) => {
  return a.length < b;
};

export const verificarSeNumeroEhMenor = (a, b) => {
  return a < b;
};

export const compararElementos = (a, b) => {
  return a === b;
};

export const verificarSeEhNumero = (a) => {
  return !isNaN(a);
};

export const verificarSeEhPositivo = (a) => {
  return verificarSeEhNumero(a) && a > 0;
};

export const verificarSeEhInteiroPositivo = (a) => {
  return Number.isInteger(a) && verificarSeEhPositivo(a);
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

export const calcularPercentualLucro = (precoVenda, precoCompra) => {
  return formatarValoresDecimaisComPontoEComVirgula(
    (precoVenda / precoCompra - 1) * 100
  );
};

export const formatarData = (data) => {
  let dataFormatada = new Date(data).toLocaleDateString("pt-BR");
  return dataFormatada;
};
