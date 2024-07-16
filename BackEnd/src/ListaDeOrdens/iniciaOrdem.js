const adicionarOrdensIniciais = () => {
  const ordensIniciais = [
    {
      cliente: 'José Silva',
      contato: '(054)996075822',
      descricaoDoProblema: 'Problema com inicialização do sistema operacional',
      dataAbertura: '2024-03-30T12:35',
      status: 'Em aberto',
      tecnicoResponsavel: 'Técnico de Suporte 1',
      descricaoDoServico: 'Realização de diagnóstico e solução do problema de inicialização',
      dataFechamento: null,
      ValorTotal: 100.00
    },
    {
      cliente: 'Ana Santos',
      contato: '(054)987654321',
      descricaoDoProblema: 'Problema de conexão de rede sem fio',
      dataAbertura: '2024-03-28T08:00',
      status: 'Finalizado',
      tecnicoResponsavel: 'Técnico de Suporte 2',
      descricaoDoServico: 'Reconfiguração do roteador e teste de conectividade',
      dataFechamento: '2024-03-29T17:30',
      ValorTotal: 150.00
    },
    {
      cliente: 'Carlos Ferreira',
      contato: '(054)111112222',
      descricaoDoProblema: 'Problema de lentidão no sistema',
      dataAbertura: '2024-03-25T10:15',
      status: 'Em aberto',
      tecnicoResponsavel: 'Técnico de Suporte 3',
      descricaoDoServico: 'Otimização do sistema e limpeza de arquivos temporários',
      dataFechamento: null,
      ValorTotal: 120.00
    },
    {
      cliente: 'Maria Oliveira',
      contato: '(054)333334444',
      descricaoDoProblema: 'Problema de congelamento aleatório',
      dataAbertura: '2024-03-20T14:20',
      status: 'Em aberto',
      tecnicoResponsavel: 'Técnico de Suporte 1',
      descricaoDoServico: 'Verificação de drivers e atualização do sistema operacional',
      dataFechamento: null,
      ValorTotal: 200.00
    },
    {
      cliente: 'Luiz Costa',
      contato: '(054)555556666',
      descricaoDoProblema: 'Problema de travamento ao executar aplicativos',
      dataAbertura: '2024-03-15T11:30',
      status: 'Finalizado',
      tecnicoResponsavel: 'Técnico de Suporte 2',
      descricaoDoServico: 'Atualização de drivers e verificação de integridade do disco',
      dataFechamento: '2024-03-17T16:45',
      ValorTotal: 180.00
    },
    {
      cliente: 'Fernanda Almeida',
      contato: '(054)777778888',
      descricaoDoProblema: 'Problema de falha na inicialização do sistema',
      dataAbertura: '2024-03-10T09:45',
      status: 'Em aberto',
      tecnicoResponsavel: 'Técnico de Suporte 3',
      descricaoDoServico: 'Correção de erros no registro do sistema',
      dataFechamento: null,
      ValorTotal: 90.00
    },
    {
      cliente: 'Paulo Lima',
      contato: '(054)999990000',
      descricaoDoProblema: 'Problema de perda de conexão com a internet',
      dataAbertura: '2024-03-05T13:00',
      status: 'Em aberto',
      tecnicoResponsavel: 'Técnico de Suporte 1',
      descricaoDoServico: 'Reconfiguração do modem e teste de conectividade',
      dataFechamento: null,
      ValorTotal: 250.00
    },
    {
      cliente: 'Camila Gomes',
      contato: '(054)222223333',
      descricaoDoProblema: 'Problema de desligamento repentino',
      dataAbertura: '2024-03-01T09:30',
      status: 'Finalizado',
      tecnicoResponsavel: 'Técnico de Suporte 2',
      descricaoDoServico: 'Verificação de temperatura e limpeza interna',
      dataFechamento: '2024-03-03T18:20',
      ValorTotal: 300.00
    },
    {
      cliente: 'Lúcia Carvalho',
      contato: '(054)444445555',
      descricaoDoProblema: 'Problema de tela azul frequente',
      dataAbertura: '2024-02-25T15:10',
      status: 'Finalizado',
      tecnicoResponsavel: 'Técnico de Suporte 3',
      descricaoDoServico: 'Atualização de drivers e análise de logs de erro',
      dataFechamento: '2024-02-27T14:45',
      ValorTotal: 170.00
    },
    {
      cliente: 'Ricardo Santos',
      contato: '(054)666667777',
      descricaoDoProblema: 'Problema de lentidão na inicialização',
      dataAbertura: '2024-02-20T14:30',
      status: 'Em aberto',
      tecnicoResponsavel: 'Técnico de Suporte 1',
      descricaoDoServico: 'Verificação de programas iniciados com o sistema',
      dataFechamento: null,
      ValorTotal: 220.00
    }
  ];

  return ordensIniciais;
};

module.exports = adicionarOrdensIniciais;
