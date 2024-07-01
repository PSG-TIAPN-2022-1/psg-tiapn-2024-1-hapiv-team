# Sistema de Gerenciamento da Loja Empório Jeito Simples

O objetivo geral do trabalho é desenvolver um sistema de gestão financeira para a empresa Empório Jeito Simples, de forma que ela tenha um melhor controle sobre seus custos e lucros. O sistema deve permitir que a empresa faça o acompanhamento de suas receitas e despesas, bem como a análise de seus resultados financeiros.

## Alunos integrantes da equipe

- Abner Mateus de Oliveira Santos
- Hadassa Brenda Souza Santos
- Igor Lucas Assunção Ribas
- Pedro Henrique Marques Simões
- Victor de Castro Nakabayashi

## Professores responsáveis

- Leonardo Vilela Cardoso

## Instruções de utilização

Para Rodar o projeto siga o passo a passo a seguir:

## 1. Front

Para rodar o front:

- Abra a pasta do projeto e navegue até a pasta emporio

  > ![alt text](docs\relatorio\images\image.png)

- Rode o comando:

```sh
# Rode linha a linha
npm install
npm start
```

Dessa forma o projeto irá rodar e subir a tela do Frontend. (Lembrando que deve ter o Node instalado)

## 2. Back

- Abra a solução do projeto no visual studio

![alt text](docs\relatorio\images\Back.png)

### > Nisso o projeto será aberto, mas antes de rodar, deve-se configurar o banco

# - Navegue até o arquivo "appsettings.json"

![alt text](docs\relatorio\images\appsettings.png)

# - Crie uma instância do Banco de dados MYSQL

![alt text](docs\relatorio\images\image-1.png)

> Subtitua os dados da instância onde está marcado, dados como o database específico e a senha.

# - Abra o prompt do desenvolvedor no visual Studio

![alt text](docs\relatorio\images\promptDesenvolvedor.png)

- Rode os seguintes comandos:

```sh
# rode linha a linha
dotnet tool install --global dotnet-ef
dotnet ef database update
```

## - Depois disso tudo, com o front rodando, é só rodar a API e testar!
