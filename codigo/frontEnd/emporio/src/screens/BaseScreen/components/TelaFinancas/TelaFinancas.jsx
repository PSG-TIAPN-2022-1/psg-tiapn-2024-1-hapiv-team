import React, { useState, useRef, useEffect } from "react";
import {
  Cabecalho,
  ContainerBase,
  SecaoTabela,
  TelaBase,
  Titulo,
} from "./TelaFinancas.style";
import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import { ptBR } from "gridjs/l10n";
import { obterVendasAsync } from "./TelaFinancas.js";
import { BarraLateral } from "../BarraLateral/BarraLateral";
import {
  adicionarPontoACadaTresDigitos,
  formatarValoresDecimaisComPontoEComVirgula,
  formatarData,
} from "../../../../utils/utils.js";

export const TelaFinancas = () => {
  const [vendas, setVendas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const wrapperRef = useRef(null);
  const gridRef = useRef(null);

  const atualizarVendas = async () => {
    try {
      setCarregando(true);
      const vendasObtidas = await obterVendasAsync();
      setVendas(vendasObtidas);
    } catch (error) {
      console.error("Erro ao obter vendas:", error);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    const carregarVendas = async () => {
      await atualizarVendas();
    };

    carregarVendas();
  }, []);

  const configurarGrid = () => {
    return new Grid({
      columns: [
        { name: "DESCRIÇÃO", width: "20%", sort: true },
        { name: "QUANTIDADE", width: "13%", sort: true },
        { name: "FATURAMENTO", width: "13%", sort: true },
        { name: "LUCRO", width: "12%", sort: true },
        { name: "DATA", width: "14%", sort: true },
      ],
      data: vendas.map((venda) => [
        venda.nomes,
        adicionarPontoACadaTresDigitos(venda.quantidade),
        "R$ " + formatarValoresDecimaisComPontoEComVirgula(venda.faturamento),
        formatarValoresDecimaisComPontoEComVirgula(venda.lucro) + "%",
        formatarData(venda.dataDeVenda),
      ]),
      style: {
        table: {
          fontFamily: "Cambria",
          fontSize: "14px",
          color: "black",
          textAlign: "center",
          wordWrap: "break-word",
          width: "100%",
        },
        th: {
          backgroundColor: "rgb(245, 245, 220)",
          fontWeight: "600",
          fontSize: "10px",
          color: "black",
          textAlign: "center",
          wordWrap: "break-word",
        },
      },
      fixedHeader: true,
      search: true,
      pagination: { enabled: true, limit: 10, summary: true },
      language: ptBR,
    });
  };

  const destruirGrid = () => {
    if (gridRef.current) {
      gridRef.current.destroy();
    }
  };

  useEffect(() => {
    if (!carregando) {
      destruirGrid();

      gridRef.current = configurarGrid();

      if (wrapperRef.current) {
        gridRef.current.render(wrapperRef.current);
      }

      return destruirGrid;
    }
  }, [vendas, carregando]);

  return (
    <TelaBase>
      <BarraLateral />
      <ContainerBase>
        <Cabecalho>
          <Titulo>Vendas</Titulo>
        </Cabecalho>
        <SecaoTabela>
          {carregando ? <div>Carregando...</div> : <div ref={wrapperRef}></div>}
        </SecaoTabela>
      </ContainerBase>
    </TelaBase>
  );
};

export default TelaFinancas;
