# language:pt

Funcionalidade: Busca de Veículo
  Sendo um interresado
  Quero fazer buscas por marca e modelo
  Para pesquisar um carro

  Esquema do Cenário: Buscar veículo com sucesso

    Dado que esteja na tela inicial da Webmotors
    Quando eu inserir as informações <marca> e <modelo>
    E clicar na opção exibida no drop down menu
    E o resultado da busca for exibido
    E selecionar a opção Concessionária
    E selecionar a opção Loja
    Então a listagem de estoque de uma determinada loja será exibida
    E a página será fechada

    Exemplos:

      |marca   |modelo|
      |"Honda "|"City"|