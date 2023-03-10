document.getElementById('tabPadrao').click()

// Mudar de janelas

function abrirTab(event, idTab) {
  var conteudos = document.getElementsByClassName('conteudo')

  for (var i = 0; i < conteudos.length; i++) {
    conteudos[i].style.display = 'none'
  }

  var tabs = document.getElementsByClassName('tab-button')

  for (var i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace('ativo', '')
  }

  document.getElementById(idTab).style.display = 'block'
  event.currentTarget.className += ' ativo'
}

// Exercício 2

function verificaNumero() {
  let num = document.querySelector('#numInput2').value
  let a = 0
  let b = 1
  let c

  while (b < num) {
    c = a + b
    a = b
    b = c
  }

  if (b == num || num == 0) {
    document.querySelector('.Resp').innerText =
      'Pertence à sequência de Fibonacci.'
  } else {
    document.querySelector('.Resp').innerText =
      'Não pertence à sequência de Fibonacci.'
  }
}

// Exercício 3

function executar() {
  const faturamentoMensal = [
    {
      dia: 1,
      valor: 22174.1664
    },
    {
      dia: 2,
      valor: 24537.6698
    },
    {
      dia: 3,
      valor: 26139.6134
    },
    {
      dia: 4,
      valor: 0.0
    },
    {
      dia: 5,
      valor: 0.0
    },
    {
      dia: 6,
      valor: 26742.6612
    },
    {
      dia: 7,
      valor: 0.0
    },
    {
      dia: 8,
      valor: 42889.2258
    },
    {
      dia: 9,
      valor: 46251.174
    },
    {
      dia: 10,
      valor: 11191.4722
    },
    {
      dia: 11,
      valor: 0.0
    },
    {
      dia: 12,
      valor: 0.0
    },
    {
      dia: 13,
      valor: 3847.4823
    },
    {
      dia: 14,
      valor: 373.7838
    },
    {
      dia: 15,
      valor: 2659.7563
    },
    {
      dia: 16,
      valor: 48924.2448
    },
    {
      dia: 17,
      valor: 18419.2614
    },
    {
      dia: 18,
      valor: 0.0
    },
    {
      dia: 19,
      valor: 0.0
    },
    {
      dia: 20,
      valor: 35240.1826
    },
    {
      dia: 21,
      valor: 43829.1667
    },
    {
      dia: 22,
      valor: 18235.6852
    },
    {
      dia: 23,
      valor: 4355.0662
    },
    {
      dia: 24,
      valor: 13327.1025
    },
    {
      dia: 25,
      valor: 0.0
    },
    {
      dia: 26,
      valor: 0.0
    },
    {
      dia: 27,
      valor: 25681.8318
    },
    {
      dia: 28,
      valor: 1718.1221
    },
    {
      dia: 29,
      valor: 13220.495
    },
    {
      dia: 30,
      valor: 8414.61
    }
  ]

  let menorFaturamento = Infinity
  let maiorFaturamento = -Infinity

  let totalFaturamento = 0
  let numDiasAcimaMedia = 0

  const diasComFaturamento = faturamentoMensal.filter(dia => dia.valor > 0)
  const mediaMensal =
    diasComFaturamento.reduce((total, dia) => total + dia.valor, 0) /
    diasComFaturamento.length

  faturamentoMensal.forEach(dia => {
    if (dia.valor < menorFaturamento && dia.valor > 0) {
      menorFaturamento = dia.valor
    }
    if (dia.valor > maiorFaturamento) {
      maiorFaturamento = dia.valor
    }
    if (dia.valor > mediaMensal) {
      numDiasAcimaMedia++
    }
    totalFaturamento += dia.valor
  })
  document.querySelector('.menorFat').innerText =
    'O menor valor de faturamento ocorrido em um dia do mês: $ ' +
    menorFaturamento
  document.querySelector('.maiorFat').innerText =
    'O maior valor de faturamento ocorrido em um dia do mês: $ ' +
    maiorFaturamento
  document.querySelector('.numDiasFatAcMed').innerText =
    'Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ' +
    numDiasAcimaMedia
}

// Exercício 4

function faturamentoMensal() {
  // Definimos um objeto com os valores de faturamento de cada estado
  const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  }

  // Inicializamos uma variável com o valor total do faturamento, somando todos os valores do objeto de faturamento
  const totalFaturamento = Object.values(faturamento).reduce(
    (total, valor) => total + valor,
    0
  )

  // Criamos um objeto vazio para armazenar os percentuais de cada estado
  const percentuais = {}

  // Percorremos o objeto de faturamento, calculando o percentual de cada estado
  for (let estado in faturamento) {
    // Calculamos o percentual dividindo o valor do estado pelo valor total do faturamento, multiplicando por 100 e arredondando para 2 casas decimais
    percentuais[estado] = (
      (faturamento[estado] / totalFaturamento) *
      100
    ).toFixed(2)
  }
  document.querySelector('.persSP').innerText =
    'SP: ' + percentuais.SP + '%'
  document.querySelector('.persRJ').innerText =
    'RJ: ' + percentuais.RJ + '%'
  document.querySelector('.persMG').innerText =
    'MG: ' + percentuais.MG + '%'
  document.querySelector('.persES').innerText =
    'ES: ' + percentuais.ES + '%'
  document.querySelector('.persOUT').innerText =
    'Outros: ' + percentuais.Outros + '%'
  // Imprimimos o objeto de percentuais
}

// Exercício 5

function inverterString() {
  const str = document.getElementById('numInput5').value
  let strInvertida = ''
  for (let i = str.length - 1; i >= 0; i--) {
    strInvertida += str[i]
  }
  document.getElementById('Resp5').innerHTML = strInvertida
}
