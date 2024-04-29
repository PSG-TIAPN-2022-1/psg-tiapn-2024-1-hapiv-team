# Relatório To-Be

- Processos

![Processos To-Be](images/To-Be.png)

## Processo de Registrar Entrada

###  Registrar entrada de produtos
> Quando chegar novos produtos a gestora e gerente da loja vai poder acessar a parte do Sistema de entrada de produtos, ela escreverá qual produto foi comprado, se tal produto já existir ela só ira inserir a quantidade, se não ela irá inserir o produto e as quantidades que foram compradas, logo em seguida a gestora poderá conferir se está registrando os produtos certos, se registrou errado ela retira a informação errada e refaz o registro, quando feito corretamente será verificado o registro das quantidades dos produtos, vendo se possui algum erro ou produto invalido, se possuir alguma informação invalida, aparecerá uma mensagem de erro e voltará para o registro inicial dos produtos, se estiver tudo correto o produto será inserido no banco de dados e em seguida depois para a tabela.

### Login

> A gerente da loja irá inserir o usuário e a senha, se não for válido a gerente terá mais 4 tentativas para acessar, se passar de 5 tentativas e errar em todas, o sistema será bloqueado por 5 minutos depois dos 5 minutos ela poderá tentar novamente com as 5 tentativas, se as informações de usuário e senha forem inseridos corretamente será autorizado a entrada e então a gestora será redirecionada para a página principal.

### Configuração de quantidade mínima

>A gerente irá escolher o produto e define a quantidade mínima desejada, então o sistema automaticamente atualiza a coluna de quantidade mínima no banco de dados.

### Gerar Tabela de estoque

> Quando a gerente acessar a página de estoque, o sistema carrega a tabela automaticamente.

### Gerar gráfico de vendas
>

### Atualizar gráfico trigger
>

### Atualizar gráfico manualemnte
>

## Processo de registrar saída

### Registrar venda de produtos

> Conforme descrito no processo AS-IS, o marido da gestora registra manualmente os produtos vendidos em um papel sempre que ocorre uma venda na loja. Ele anota o nome do produto e a quantidade vendida. Uma vez que as vendas do dia são registradas, o papel é repassado para a gestora. Ao entrar no sistema, ela poderá selecionar quais produtos foram vendidos e verificar se as informações foram registradas corretamente. Caso contrário, ela poderá retirar ou corrigir o registro. Quando estiver correto, ela confirmará o registro dos produtos.

Em seguida, será verificado se a quantidade vendida é válida. Se não for, será mostrado o produto com a quantidade inválida e o processo retornará à etapa de registro do produto. Se tudo estiver correto, será verificado se algum produto vendido está acabando. Se não houver escassez, nada acontecerá. Caso contrário, a gestora será notificada e poderá fazer novos pedidos dos produtos que estão acabando.

Além da verificação do estoque, o lucro líquido e o faturamento serão calculados. Os produtos vendidos serão subtraídos do estoque e o gráfico de vendas será atualizado. A tabela de produtos também será atualizada, seguida pela atualização do gráfico de vendas.