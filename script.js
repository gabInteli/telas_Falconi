const canva = document.getElementById("myChart");
const config = {
  type: "radar",
  data: data,
  options: {
    elements: {
      line: {
        borderWidth: 3,
      },
    },
  },
};

var data = {
  labels: [
    "Ensino",
    "Equidade",
    "Pessoas",
    "Fluxo",
    "Gestão para Resultados",
    "Infra e TI",
    "Incentivos",
  ],
  datasets: [
    (item1 = {
      label: "Valores Ideais",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: [5, 5, 5, 5, 5, 5, 5],
    }),
    (item2 = {
      label: "Status Atual",
      fillColor: "rgba(151,187,205,0.2)",
      strokeColor: "rgba(151,187,205,1)",
      pointColor: "rgba(151,187,205,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(151,187,205,1)",
      data: [2, 3, 4, 1, 3, 2, 5],
    }),
  ],
};

var myRadarChart = new Chart(canva.getContext("2d"), {
  type: "radar",
  data: data,
});

function updateTabela() {
  document.getElementById("valor1").innerHTML = data.datasets[1].data[0];
  document.getElementById("valor2").innerHTML = data.datasets[1].data[1];
  document.getElementById("valor3").innerHTML = data.datasets[1].data[2];
  document.getElementById("valor4").innerHTML = data.datasets[1].data[3];
  document.getElementById("valor5").innerHTML = data.datasets[1].data[4];
  document.getElementById("valor6").innerHTML = data.datasets[1].data[5];
  document.getElementById("valor7").innerHTML = data.datasets[1].data[6];

  var op1 = 5 - data.datasets[1].data[0];
  var op2 = 5 - data.datasets[1].data[1];
  var op3 = 5 - data.datasets[1].data[2];
  var op4 = 5 - data.datasets[1].data[3];
  var op5 = 5 - data.datasets[1].data[4];
  var op6 = 5 - data.datasets[1].data[5];
  var op7 = 5 - data.datasets[1].data[6];

  document.getElementById("oportunidade1").innerHTML = op1;
  document.getElementById("oportunidade2").innerHTML = op2;
  document.getElementById("oportunidade3").innerHTML = op3;
  document.getElementById("oportunidade4").innerHTML = op4;
  document.getElementById("oportunidade5").innerHTML = op5;
  document.getElementById("oportunidade6").innerHTML = op6;
  document.getElementById("oportunidade7").innerHTML = op7;


  //Resultados Referentes ao Eixo de Ensino para Agenda Educacional
  if (op1 == 1){
    document.getElementById("diag1").innerHTML = "1. Ensino: Resultado1";
  }

  else if (op1 == 2) {
    document.getElementById("diag1").innerHTML = "1. Ensino: Resultado2";
  }

  else if (op1 == 3) {
    document.getElementById("diag1").innerHTML = "1. Ensino: Resultado3";
    }
  else if (op1 == 4) {
    document.getElementById("diag1").innerHTML = "1. Ensino: Resultado4";
    }

    else if (op1 == 5) {
        document.getElementById("diag1").innerHTML = "1. Ensino: Resultado5";
        }
    else if (op1 == 6) {
        document.getElementById("diag1").innerHTML = "1. Ensino: Resultado6";
        }

  else{
        document.getElementById("diag1").innerHTML = "1. Ensino: Resultado7";
    }



  //Resultados Referentes ao Eixo de Equidade para Agenda Educacional
    if (op2 === 1){
        document.getElementById("diag2").innerHTML = "2. Equidade: Resultado1";
      }
    
      else if (op2 === 2) {
        document.getElementById("diag2").innerHTML = "2. Equidade: Resultado2";
      }
    
      else if (op2 === 3) {
        document.getElementById("diag2").innerHTML = "2. Equidade: Resultado3";
        }
      else if (op2 === 4) {
        document.getElementById("diag2").innerHTML = "2. Equidade: Resultado4";
        }
    
        else if (op2 === 5) {
            document.getElementById("diag2").innerHTML = "2. Equidade: Resultado5";
            }
        else if (op2 === 6) {
            document.getElementById("diag2").innerHTML = "2. Equidade: Resultado6";
            }
    
      else{
            document.getElementById("diag2").innerHTML = "2. Equidade: Resultado7";
        }


}
