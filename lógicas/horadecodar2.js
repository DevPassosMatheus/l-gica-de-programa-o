// Hora de codar 02 - atividade PROA. 

// Ex 10




function pesoideal() {
    var opções_sexo = document.querySelector(`input[name="sexo"]:checked`);
    var resultado_selecionado = opções_sexo.value;
    var resposta1 = document.querySelector(`p#respostaex10`);

    
    if (resultado_selecionado === `feminino`) {


      var altura = document.querySelector(`input#altura`);
      var calculo_altura = (altura.value);

        // aqui eu dividi a altura que o usuário digita por 100 caso ele escreva ela em CM, dessa forma, ela vai ser convertida em Metros
      if (calculo_altura > 99) {
        calculo_altura /= 100 
      }

      var res = (calculo_altura * 62.1) - 44.7;
      resposta1.innerHTML =`${res.toFixed(2)}<strong> KG</strong>`;


    } else if (resultado_selecionado === `masculino`){

        var altura = document.querySelector(`input#altura`);
        var calculo_altura = (altura.value);
  
          // aqui eu dividi a altura que o usuário digita por 100 caso ele escreva ela em CM, dessa forma, ela vai ser convertida em Metros
        if (calculo_altura > 99) {
          calculo_altura /= 100 
        }
  
        var res = (calculo_altura * 72.7) - 58;
        resposta1.innerHTML =`${res.toFixed(2)}<strong> KG</strong>`;
    } else if (resultado_selecionado === null) {
        resposta1.innerHTML = `Nenhuma opção selecionada!`
    }
  }
  

// 1. Escreva um programa em que o usuário informe dois números utilizando o "prompt". Então escreva em tela o maior deles.

function maiorNumero() {


var PrimeiroNumeroEx1 = document.querySelector(`input[name="PrimeiroNumeroEx1"]`)
var SegundoNumeroEx1 = document.querySelector(`input[name="SegundoNumeroEx1"]`)
let PrimeiroValor = PrimeiroNumeroEx1.value
let SegundoValor = SegundoNumeroEx1.value
const resultex1 = document.querySelector(`p#respostaex1`)

if (PrimeiroValor > SegundoValor) {
resultex1.innerHTML = `O valor ${PrimeiroValor} é o maior`
} else if (SegundoValor > PrimeiroValor) {
resultex1.innerHTML = `O valor ${SegundoValor} é o maior`
} else {
resultex1.innerHTML = `Os valores são iguais!`
}
}


// 2. Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero.

function TipoDeNumero() {
var TipoDeValorex2 = document.querySelector(`input[name="TipoDeValor"]`)
let ValorEx2 = TipoDeValorex2.value
var resultex2 = document.querySelector("p#respostaex2")

if (ValorEx2 > 0) {
resultex2.innerHTML = `${ValorEx2} é positivo`
} 
else if (ValorEx2 < 0) {
    resultex2.innerHTML = `${ValorEx2} é negativo`

} 
else {
    resultex2.innerHTML = `${ValorEx2} é zero`
}

}


// 3. Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.


function MaiorValorEx3() {
var Valor1Ex3 = document.querySelector('input[name="PrimeiroNumeroEx3"]')
var Valor2Ex3 = document.querySelector('input[name="SegundoNumeroEx3"]')
var Valor3Ex3 = document.querySelector('input[name="TerceiroNumeroEx3"]')

var Valor01Ex3 = Valor1Ex3.value
var Valor02Ex3 = Valor2Ex3.value
var Valor03Ex3 = Valor3Ex3.value



const respostaEx3 = document.querySelector('p#respostaex3')

if (Valor01Ex3 > Valor02Ex3 && Valor01Ex3 > Valor03Ex3) {
respostaEx3.innerHTML = `${Valor01Ex3} é o maior!`
} else if (Valor02Ex3 > Valor01Ex3 && Valor02Ex3 > Valor03Ex3) {
respostaEx3.innerHTML = `${Valor02Ex3} é o maior!`
} else if (Valor03Ex3 > Valor02Ex3 && Valor03Ex3 > Valor01Ex3) {
respostaEx3.innerHTML = `${Valor03Ex3} é o maior!`
} else {
respostaEx3.innerHTML = `Os números são iguais!`
}
}


// 4. Faça um programa que leia 3 valores informados pelo usuário (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.

function MaiorValorEx4() {
var Valor1Ex4 = document.querySelector('input[name="PrimeiroNumeroEx4"]')
var Valor2Ex4 = document.querySelector('input[name="SegundoNumeroEx4"]')
var Valor3Ex4 = document.querySelector('input[name="TerceiroNumeroEx4"]')

var Valor01Ex4 = Number(Valor1Ex4.value)
var Valor02Ex4 = Number(Valor2Ex4.value)
var Valor03Ex4 = Number(Valor3Ex4.value)
var SomaDosMaiores
const respostaEx4 = document.querySelector('p#respostaex4')

if (Valor01Ex4 > Valor02Ex4 && Valor01Ex4 > Valor03Ex4) {

        if (Valor02Ex4 > Valor03Ex4) {
    SomaDosMaiores = Valor01Ex4 + Valor02Ex4
    respostaEx4.innerHTML = `Os dois maiores números são ${Valor01Ex4} e ${Valor02Ex4} a soma entre eles é: ${SomaDosMaiores}`
    
    } else {SomaDosMaiores = Valor01Ex4 + Valor03Ex4
    respostaEx4.innerHTML = `Os dois maiores números são ${Valor01Ex4} e ${Valor03Ex4} a soma entre eles é: ${SomaDosMaiores}`
    }


} else if (Valor02Ex4 > Valor01Ex4 && Valor02Ex4 > Valor03Ex4) {

    if (Valor01Ex4 > Valor03Ex4) {
        SomaDosMaiores = Valor02Ex4 + Valor01Ex4
        respostaEx4.innerHTML = `Os dois maiores números são ${Valor02Ex4} e ${Valor01Ex4} a soma entre eles é: ${SomaDosMaiores}`
        
        } else {SomaDosMaiores = Valor02Ex4 + Valor03Ex4
        respostaEx4.innerHTML = `Os dois maiores números são ${Valor02Ex4} e ${Valor03Ex4} a soma entre eles é: ${SomaDosMaiores}`
        }



} else if (Valor03Ex4 > Valor02Ex4 && Valor03Ex4 > Valor01Ex4) {

    if (Valor02Ex4 > Valor01Ex4) {
        SomaDosMaiores = Valor03Ex4 + Valor02Ex4
        respostaEx4.innerHTML = `Os dois maiores números são ${Valor03Ex4} e ${Valor02Ex4} a soma entre eles é: ${SomaDosMaiores}`
        
        } else {SomaDosMaiores = Valor01Ex4 + Valor03Ex4
        respostaEx4.innerHTML = `Os dois maiores números são ${Valor03Ex4} e ${Valor01Ex4} a soma entre eles é: ${SomaDosMaiores}`
        }

} else {
respostaEx4.innerHTML = `Há números iguais!`
}
}

// 5.  Faça um programa que leia 6 valores informados pelo usuário, calcule, exiba os números informados e escreva a média aritmética desses valores lidos.

function MediaEx5() {
var Valor1Ex5 = document.querySelector('input[name="PrimeiroNumeroEx5"]')
var Valor2Ex5 = document.querySelector('input[name="SegundoNumeroEx5"]')
var Valor3Ex5 = document.querySelector('input[name="TerceiroNumeroEx5"]')
var Valor4Ex5 = document.querySelector('input[name="QuartoNumeroEx5"]')
var Valor5Ex5 = document.querySelector('input[name="QuintoNumeroEx5"]')
var Valor6Ex5 = document.querySelector('input[name="SextoNumeroEx5"]')

var Valor01Ex5 = Number(Valor1Ex5.value)
var Valor02Ex5 = Number(Valor2Ex5.value)
var Valor03Ex5 = Number(Valor3Ex5.value)
var Valor04Ex5 = Number(Valor4Ex5.value)
var Valor05Ex5 = Number(Valor5Ex5.value)
var Valor06Ex5 = Number(Valor6Ex5.value)
const respostaEx5 = document.querySelector('p#respostaex5')
const mediaTotal = (Valor01Ex5 + Valor02Ex5 + Valor03Ex5 + Valor04Ex5 + Valor05Ex5 + Valor06Ex5) / 6
const mediaTotalcomToFixed = mediaTotal.toFixed(2)
respostaEx5.innerHTML = `As notas informadas foram, respectivamente: ${Valor01Ex5}, ${Valor02Ex5}, ${Valor03Ex5}, ${Valor04Ex5}, ${Valor05Ex5}, ${Valor06Ex5}. Sua média é: ${mediaTotalcomToFixed}`
}

// 6. Faça um programa que receba quatro valores informados pelo usuário, mas informe somente o primeiro, o último e o maior de todos eles (considere que todos os números informados serão diferentes)

function MaiorEntre4() {
    var Valor1Ex6 = document.querySelector('input[name="PrimeiroNumeroEx6"]')
    var Valor2Ex6 = document.querySelector('input[name="SegundoNumeroEx6"]')
    var Valor3Ex6 = document.querySelector('input[name="TerceiroNumeroEx6"]')
    var Valor4Ex6 = document.querySelector('input[name="QuartoNumeroEx6"]')
    
    var Valor01Ex6 = Number(Valor1Ex6.value)
    var Valor02Ex6 = Number(Valor2Ex6.value)
    var Valor03Ex6 = Number(Valor3Ex6.value)
    var Valor04Ex6 = Number(Valor4Ex6.value)
    const respostaEx6 = document.querySelector('p#respostaex6')
    
    if (Valor01Ex6 > Valor02Ex6 && Valor01Ex6 > Valor03Ex6 && Valor01Ex6 > Valor04Ex6) {
    respostaEx6.innerHTML = `${Valor01Ex6} é o maior! O primeiro número é ${Valor01Ex6} e o último é ${Valor04Ex6}.`


    } else if (Valor02Ex6 > Valor01Ex6 && Valor02Ex6 > Valor03Ex6 && Valor02Ex6 > Valor04Ex6) {
    respostaEx6.innerHTML = `${Valor02Ex6} é o maior! O primeiro número é ${Valor01Ex6} e o último é ${Valor04Ex6}.`


    } else if (Valor03Ex6 > Valor02Ex6 && Valor03Ex6 > Valor04Ex6 && Valor03Ex6 > Valor01Ex6) {
    respostaEx6.innerHTML = `${Valor03Ex6} é o maior! O primeiro número é ${Valor01Ex6} e o último é ${Valor04Ex6}.`


    } else if (Valor04Ex6 > Valor01Ex6 && Valor04Ex6 > Valor02Ex6 && Valor04Ex6 > Valor03Ex6) {
    respostaEx6.innerHTML = `${Valor04Ex6} é o maior! O primeiro número é ${Valor01Ex6} e o último é ${Valor04Ex6}.`
   
    } else {
    respostaEx6.innerHTML = `Os números são iguais! Mas o primeiro número é ${Valor01Ex6} e o último é ${Valor04Ex6}.`
    }
    }

    // 7. Faça um programa que leia 6 números que o usuário vai informar. Todos os números lidos com valor inferior a 72 devem ser somados. Escreva o valor final da soma efetuada e também todos valores que o usuário informou.  

function SomadorEx7() {
var Valor1Ex7 = document.querySelector('input[name="PrimeiroNumeroEx7"]')
var Valor2Ex7 = document.querySelector('input[name="SegundoNumeroEx7"]')
var Valor3Ex7 = document.querySelector('input[name="TerceiroNumeroEx7"]')
var Valor4Ex7 = document.querySelector('input[name="QuartoNumeroEx7"]')
var Valor5Ex7 = document.querySelector('input[name="QuintoNumeroEx7"]')
var Valor6Ex7 = document.querySelector('input[name="SextoNumeroEx7"]')

var Valor01Ex7 = Number(Valor1Ex7.value)
var Valor02Ex7 = Number(Valor2Ex7.value)
var Valor03Ex7 = Number(Valor3Ex7.value)
var Valor04Ex7 = Number(Valor4Ex7.value)
var Valor05Ex7 = Number(Valor5Ex7.value)
var Valor06Ex7 = Number(Valor6Ex7.value)
const respostaEx7 = document.querySelector('p#respostaEx7')
let soma = 0

if (Valor01Ex7 < 72) {
  soma += Valor01Ex7
}
if (Valor02Ex7 < 72) {
  soma += Valor02Ex7
}
if (Valor03Ex7 < 72) {
  soma += Valor03Ex7
}
if (Valor04Ex7 < 72) {
  soma += Valor04Ex7
}
if (Valor05Ex7 < 72) {
  soma += Valor05Ex7
}
if (Valor06Ex7 < 72) {
  soma += Valor06Ex7
}

respostaEx7.innerHTML = `A soma dos valores menores que 72 é ${soma}.<br>
  Valores informados: ${Valor01Ex7}, ${Valor02Ex7}, ${Valor03Ex7}, ${Valor04Ex7}, ${Valor05Ex7}, ${Valor06Ex7}.`
}

// 8. Escreva um programa que calcule a média de quatro números informados pelo usuário, mas somente se esses números forem maiores que 0 e menores que 10. No final, se a média for maior que cinco o usuário receberá uma mensagem "Você passou no teste". Em qualquer outra situação, ele receberá uma mensagem de "tente novamente"

function MediaAprovadoReprovado() {
  var Valor1Ex8 = document.querySelector('input[name="PrimeiroNumeroEx8"]')
  var Valor2Ex8 = document.querySelector('input[name="SegundoNumeroEx8"]')
  var Valor3Ex8 = document.querySelector('input[name="TerceiroNumeroEx8"]')
  var Valor4Ex8 = document.querySelector('input[name="QuartoNumeroEx8"]')
  
  var Valor01Ex8 = Number(Valor1Ex8.value)
  var Valor02Ex8 = Number(Valor2Ex8.value)
  var Valor03Ex8 = Number(Valor3Ex8.value)
  var Valor04Ex8 = Number(Valor4Ex8.value)
  var soma = 0
  var divisaomedia = 0
  const respostaEx8 = document.querySelector('p#respostaEx8')
  var notas_resultado 

  if (Valor01Ex8 > 0 && Valor01Ex8 <= 10) {
    soma += Valor01Ex8
    divisaomedia += 1
  }
  if (Valor02Ex8 > 0 && Valor02Ex8 <= 10) {
    soma += Valor02Ex8
    divisaomedia += 1
  }
  if (Valor03Ex8 > 0 && Valor03Ex8 <= 10) {
    soma += Valor03Ex8
    divisaomedia += 1 
  }
  if (Valor04Ex8 > 0 && Valor04Ex8 <= 10) {
    soma += Valor04Ex8
    divisaomedia += 1
  }

  notas_resultado = soma / divisaomedia

  if (notas_resultado > 5) {
  respostaEx8.innerHTML = `Sua média é ${notas_resultado}. Você foi aprovado, parabéns!` 
  } else {
  respostaEx8.innerHTML = `Sua média é ${notas_resultado}. Você foi reprovado.` 
  }

}


// 9. Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu).

function PossoVotar() {
const DataDeNascimento = document.querySelector('input[name="AnoDeNascimentoEx9"]')
let Nascimento = Number(DataDeNascimento.value)
const respostaEx9 = document.querySelector('p#respostaEx9')
var idade = Number(2023 - Nascimento)
if (idade > 15) {
respostaEx9.innerHTML = `Você poderá votar esse ano!`
} else {
respostaEx9.innerHTML = `Você é muito novo, ainda não poderá votar.`
}
}


// 11. Uma micro calculadora
// Escreva um programa para ler 2 valores inteiros informados pelo usuário e uma das seguintes operações a serem
// executadas (codificada da seguinte forma: 1.Adição, 2.Subtração, 3.Divisão, 4.Multiplicação).
// O programa deve calcular e escrever o resultado dessa operação sobre os dois valores lidos. Observação: Considere
// que só serão lidos os valores 1, 2, 3 ou 4 para as operações




function Calculadora() {
  var Valor1Ex11 = document.querySelector('input[name="PrimeiroNumeroEx11"]')
  var Valor2Ex11 = document.querySelector('input[name="SegundoNumeroEx11"]')
  
  var Valor01Ex11 = Number(Valor1Ex11.value)
  var Valor02Ex11 = Number(Valor2Ex11.value)

  var operacao = document.querySelector('input[name="operacao"]:checked')
  var operacaoSelecionada = operacao.value

  var respostaEx11 = document.querySelector(`p#respostaEx11`)



if (operacaoSelecionada === `adição`) {
resultado = Valor01Ex11 + Valor02Ex11
} 

if (operacaoSelecionada === `subtração`) {
resultado = Valor01Ex11 - Valor02Ex11
} 

if (operacaoSelecionada === `divisão`) {
resultado = Valor01Ex11 / Valor02Ex11
} 

if (operacaoSelecionada === `multiplicação`) {
resultado = Valor01Ex11 * Valor02Ex11
} 

respostaEx11.innerHTML = `O resultado é ${resultado}`
}


// Hora de Codar 3: De volta ao Código

// 1 - Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo.  O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor.

function MaquinaDivisao() {
var Valor1Ex12 = document.querySelector('input[name="PrimeiroNumeroEx12"]')
var Valor01Ex12 = Number(Valor1Ex12.value)
var Valor2Ex12 = document.querySelector('input[name="SegundoNumeroEx12"]')
var Valor02Ex12 = Number(Valor2Ex12.value)
const respostaEx12 = document.querySelector('p#respostaEx12')
resultadoEx12 = Number(Valor01Ex12 / Valor02Ex12)

if (Valor02Ex12 <= 0) {
respostaEx12.innerHTML = `Você digitou ${Valor02Ex12} a divisão é invalida!`
alert(`Digite um número não negativo e maior que zero!`)
}

respostaEx12.innerHTML = `O resultado da divisão é ${resultadoEx12.toFixed(2)}`
}


// 2 - Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. Utilize "document.write" para escrever em tela e no final da repetição escreva "EXPLOSÃO".

function Bomba() {
  let ex13 = document.querySelector(`p#respostaEx13`);
  let cc = 1;
  let timer = setInterval(() => {
    ex13.innerHTML = `Contagem: ${cc}`;
    cc++;
    if (cc > 30) {
      clearInterval(timer);
      alert(`BOOOOM!!`);
    }
  }, 1000);
}


// 3 - Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.


function descrecente() {
  var ex14 = document.querySelector(`p#respostaEx14`);
  let d = 11;
  let timer = setInterval(() => {
    d--;
    ex14.innerHTML = `${d}`;
    if (d === 0) {
      clearInterval(timer);
    }
  }, 1000);
}


// 4 - Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).


function De15a100Media() {
  const respostaEx15 = document.querySelector(`p#respostaEx15`)
  let SomaDasMedias = 0

  for (let ex15 = 15; ex15 < 100; ex15++) {
    SomaDasMedias += ex15
  }

  const resultadoEx15 = SomaDasMedias / 85
  respostaEx15.innerHTML = `A média é: ${resultadoEx15}`
}


// 5 - Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.

function MediaEntreDoisValores() {
  var Valor1Ex16 = document.querySelector('input[name="PrimeiroNumeroEx16"]')
  var Valor01Ex16 = Number(Valor1Ex16.value)
  var Valor2Ex16 = document.querySelector('input[name="SegundoNumeroEx16"]')
  var Valor02Ex16 = Number(Valor2Ex16.value)
  const respostaEx16 = document.querySelector('p#respostaEx16')


  let SomaDasMedias = 0

  for (var ex16 = Valor01Ex16; ex16 < Valor02Ex16; ex16++) {
    SomaDasMedias += ex16
  }

  const resultadoEx16 = SomaDasMedias / (Valor02Ex16 - Valor01Ex16)
  respostaEx16.innerHTML = `A média é: ${resultadoEx16}`

}


// 6 - Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.

var TotalDeNotas = 0 
var TotalAprovados = 0
function MediaEx17() {
    var Valor1Ex17 = document.querySelector('input[name="PrimeiroNumeroEx17"]')
    var Valor2Ex17 = document.querySelector('input[name="SegundoNumeroEx17"]')

    var Valor01Ex17 = Number(Valor1Ex17.value)
    var Valor02Ex17 = Number(Valor2Ex17.value)

    const respostaEx17 = document.querySelector('p#respostaex17')
    const mediaTotal = (Valor01Ex17 + Valor02Ex17) / 2
    const mediaTotalcomToFixed = mediaTotal.toFixed(2)
    respostaEx17.innerHTML = `As notas informadas foram, respectivamente: ${Valor01Ex17}, ${Valor02Ex17}. Sua média é: ${mediaTotalcomToFixed}`

    if (mediaTotalcomToFixed >= 9.5) {
      TotalDeNotas++;
      TotalAprovados = Number(TotalDeNotas)
    }
    

    const respostaEx217 = document.querySelector('p#respostaex217') 
    respostaEx217.innerHTML = `Total de aprovados: ${TotalAprovados}`
}



function MediaEx19() {

  var nota1 = document.querySelector('input[name=nota1]')
  var nota01 = Number(nota1.value)
  
  var nota2 = document.querySelector('input[name=nota2]') 
  var nota02 = Number(nota2.value)
  
  var nota3 = document.querySelector('input[name=nota3]') 
  var nota03 = Number(nota3.value)
  
  var nota4 = document.querySelector('input[name=nota4]') 
  var nota04 = Number(nota4.value)
  
  var nota5 = document.querySelector('input[name=nota5]') 
  var nota05 = Number(nota5.value)
  
  var nota6 = document.querySelector('input[name=nota6]') 
  var nota06 = Number(nota6.value)
  
  var media = (nota01 + nota02 + nota03 + nota04 + nota05 + nota06) / 6
  var MediaFormatata = media.toFixed(2)
  
  resposta = document.querySelector('p#respostaex19')
  resposta.innerHTML = `${MediaFormatata}`
  
  
  if (nota01 < 0 || nota01 > 10) {
  alert("A primeira nota é invalida")
  }
  
  if (nota02 < 0 || nota02 > 10) {
      alert("A segunda nota é invalida")
      }
  
      if (nota03 < 0 || nota03 > 10) {
          alert("A terceira nota é invalida")
          }
  
          if (nota04 < 0 || nota04 > 10) {
              alert("A quarta nota é invalida");
              };
  
              if (nota05 < 0 || nota05 > 10) {
                  alert("A quinta nota é invalida");
                  };
  
                  if (nota06 < 0 || nota06 > 10) {
                      alert("A sexta nota é invalida");
                      };
  
  }


//   8 - Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO.


function contando() {
var valor1ex19 = document.querySelector(`input[name=valor]`)
valor1ex19 = Number(valor1ex19.value)
var respostaex19 = document.querySelector(`p#respostaex20`)

for (var cont = 0; valor1ex19 > cont; cont++) {
  respostaex19.innerHTML = `${cont}`
  if (cont == valor1ex19 - 1) {
  cont++
  }
} 

}

// 9 - Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100.

function contandoex21() {
  const respostaex21 = document.querySelector('p#respostaex21');
  var ex21 = 100
  var intervalo = setInterval(function() {
    if (ex21 > 110) {
      clearInterval(intervalo)
    } else {
      respostaex21.innerHTML = `${ex21}`
      ex21++
    };
  }, 1000);
};



// 10 - Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.


function TabuadasEx() {
  
  var N = document.querySelector('input[name="valorex22"]') ;
  N = Number(N.value);
  var respostaex22 = document.querySelector('p#respostaex22');

  for (var t = 1; t <= N; t++); {
    for (var j = 1; j <= 10; j++); {
      respostaex22.innerHTML += `${t} x ${j} = ${t*j}<br>`;
    };
    respostaex22.innerHTML += "<br>";
  };
};





// 11 - Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.

function N24e42() {

var dentro = 0;
var fora = 0;
var DentroArray = []
var ForaArray = []

var nota1n = Number(document.querySelector('input[name=nota1n]').value);
var nota2n = Number(document.querySelector('input[name=nota2n]').value);
var nota3n = Number(document.querySelector('input[name=nota3n]').value);
var nota4n = Number(document.querySelector('input[name=nota4n]').value);
var nota5n = Number(document.querySelector('input[name=nota5n]').value);
var nota6n = Number(document.querySelector('input[name=nota6n]').value);
var nota7n = Number(document.querySelector('input[name=nota7n]').value);
var nota8n = Number(document.querySelector('input[name=nota8n]').value);
var nota9n = Number(document.querySelector('input[name=nota9n]').value);
var nota10n = Number(document.querySelector('input[name=nota10n]').value);

if (nota1n >= 24 && nota1n <= 42) {
  dentro++;
  DentroArray.push(nota1n);
} else {
  fora++;
  ForaArray.push(nota1n);
}
if (nota2n >= 24 && nota2n <= 42) {
  dentro++;
  DentroArray.push(nota2n);
} else {
  fora++;
  ForaArray.push(nota2n);
}
if (nota3n >= 24 && nota3n <= 42) {
  dentro++;
  DentroArray.push(nota3n);
  ForaArray.push(nota1n);
} else {
  fora++;
  ForaArray.push(nota3n);
}
if (nota4n >= 24 && nota4n <= 42) {
  dentro++;
  DentroArray.push(nota4n);
} else {
  fora++;
  ForaArray.push(nota4n);
}
if (nota5n >= 24 && nota5n <= 42) {
  dentro++;
  DentroArray.push(nota5n);
} else {
  fora++;
  ForaArray.push(nota5n);
}
if (nota6n >= 24 && nota6n <= 42) {
  dentro++;
  DentroArray.push(nota6n);
} else {
  fora++;
  ForaArray.push(nota6n);
}
if (nota7n >= 24 && nota7n <= 42) {
  dentro++;
  DentroArray.push(nota7n);
} else {
  fora++;
  ForaArray.push(nota7n);
}
if (nota8n >= 24 && nota8n <= 42) {
  dentro++;
  DentroArray.push(nota8n);
} else {
  fora++;
  ForaArray.push(nota8n);
}
if (nota9n >= 24 && nota9n <= 42) {
  dentro++;
  DentroArray.push(nota9n);
} else {
  fora++;
  ForaArray.push(nota9n);
}
if (nota10n >= 24 && nota10n <= 42) {
  dentro++;
  DentroArray.push(nota10n);
} else {
  fora++;
  ForaArray.push(nota10n);
}

document.getElementById('resUltEx').innerHTML = `

Total de valores dentro do intervalo: ${dentro}. 
<br>
<br>
Valores dentro do intervalo: ${DentroArray}
<br>
<br>
Total de valores fora do intervalo: ${fora}
<br>
<br>
Valores fora do intervalo: ${ForaArray}
<br>
<br>
`
  
}