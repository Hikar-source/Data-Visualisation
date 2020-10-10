/********************************************************************** */
/*JS GRAPHIQUE FICHIER DATA */
/********************************************************************** */
chartIt05101();
chartIt05102();
chartIt05103();
chartIt05104();
chartIt05105();
chartIt05106();
chartIt05107();
chartIt05108();
chartIt05109();
chartIt05110();
chartIt05111();
chartIt05112();
chartIt05113();
chartIt05114();
chartIt05115();
chartIt05116();
chartIt05117();
chartIt05118();
chartIt05119();
chartIt05120();
chartIt05121();
chartIt05122();
chartIt05123();
chartIt05124();
chartIt05125();
chartIt05126();
chartIt05127();
chartIt05128();
chartIt05129();
chartIt05130();
chartIt05131();
chartIt05132();
chartIt05133();
chartIt05134();
chartIt05135();
chartIt05136();
chartIt05137();
chartIt05138();
chartIt05139();
chartIt05140();
chartIt05141();
chartIt05142();
chartIt05143();
chartIt05144();
chartIt05145();
chartIt05146();
chartIt05147();
chartIt05148();
chartIt05149();
chartIt05150();
chartIt05151();
chartIt05152();
chartIt05153();
chartIt05154();
chartIt05155();
chartIt05156();
chartIt05157();
chartIt05158();
chartIt05159();
chartIt05160();
chartIt05161();
chartIt05162();
/*------------------------------------------------------------------ */
/*COMMUNE 05101*/
/*------------------------------------------------------------------ */
async function GraphDATA05101() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[100];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05101.push(vote_macron); 
    vote_lepen_05101.push(vote_lepen);
    vote_rejet_05101.push(vote_rejet);
    vote_macronpop_05101.push(vote_macronMediane);
    vote_lepenpop_05101.push(vote_lepenMediane);
    vote_rejetpop_05101.push(vote_rejetMediane);
    name_Commune_05101.push(nameCommune);
    Pourcentage_05101.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05101.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05101.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05101.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05101.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05101 = [];
const vote_lepen_05101 = [];
const vote_rejet_05101 = [];
const vote_macronpop_05101 = [];
const vote_lepenpop_05101 = [];
const vote_rejetpop_05101 = [];
const name_Commune_05101 = [];
const Pourcentage_05101 = [];
const Pourcentage_rejet_05101 = [];
const vote_gene_macron_05101 = [];
const vote_gene_lepen_05101 = [];
const vote_gene_rejet_05101 = [];

async function chartIt05101(){
    await GraphDATA05101();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05101-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05101
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05101
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05101-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05101,vote_lepen_05101,vote_rejet_05101]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05101-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05101,vote_lepenpop_05101,vote_rejetpop_05101]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05101"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05101
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05101
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05101
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05102*/
/*------------------------------------------------------------------ */
async function GraphDATA05102() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[101];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05102.push(vote_macron); 
    vote_lepen_05102.push(vote_lepen);
    vote_rejet_05102.push(vote_rejet);
    vote_macronpop_05102.push(vote_macronMediane);
    vote_lepenpop_05102.push(vote_lepenMediane);
    vote_rejetpop_05102.push(vote_rejetMediane);
    name_Commune_05102.push(nameCommune);
    Pourcentage_05102.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05102.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05102.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05102.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05102.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05102 = [];
const vote_lepen_05102 = [];
const vote_rejet_05102 = [];
const vote_macronpop_05102 = [];
const vote_lepenpop_05102 = [];
const vote_rejetpop_05102 = [];
const name_Commune_05102 = [];
const Pourcentage_05102 = [];
const Pourcentage_rejet_05102 = [];
const vote_gene_macron_05102 = [];
const vote_gene_lepen_05102 = [];
const vote_gene_rejet_05102 = [];

async function chartIt05102(){
    await GraphDATA05102();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05102-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05102
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05102
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05102-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05102,vote_lepen_05102,vote_rejet_05102]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05102-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05102,vote_lepenpop_05102,vote_rejetpop_05102]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05102"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05102
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05102
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05102
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05103*/
/*------------------------------------------------------------------ */
async function GraphDATA05103() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[102];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05103.push(vote_macron); 
    vote_lepen_05103.push(vote_lepen);
    vote_rejet_05103.push(vote_rejet);
    vote_macronpop_05103.push(vote_macronMediane);
    vote_lepenpop_05103.push(vote_lepenMediane);
    vote_rejetpop_05103.push(vote_rejetMediane);
    name_Commune_05103.push(nameCommune);
    Pourcentage_05103.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05103.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05103.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05103.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05103.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05103 = [];
const vote_lepen_05103 = [];
const vote_rejet_05103 = [];
const vote_macronpop_05103 = [];
const vote_lepenpop_05103 = [];
const vote_rejetpop_05103 = [];
const name_Commune_05103 = [];
const Pourcentage_05103 = [];
const Pourcentage_rejet_05103 = [];
const vote_gene_macron_05103 = [];
const vote_gene_lepen_05103 = [];
const vote_gene_rejet_05103 = [];

async function chartIt05103(){
    await GraphDATA05103();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05103-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05103
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05103
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05103-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05103,vote_lepen_05103,vote_rejet_05103]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05103-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05103,vote_lepenpop_05103,vote_rejetpop_05103]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05103"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05103
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05103
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05103
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05104*/
/*------------------------------------------------------------------ */
async function GraphDATA05104() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[103];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05104.push(vote_macron); 
    vote_lepen_05104.push(vote_lepen);
    vote_rejet_05104.push(vote_rejet);
    vote_macronpop_05104.push(vote_macronMediane);
    vote_lepenpop_05104.push(vote_lepenMediane);
    vote_rejetpop_05104.push(vote_rejetMediane);
    name_Commune_05104.push(nameCommune);
    Pourcentage_05104.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05104.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05104.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05104.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05104.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05104 = [];
const vote_lepen_05104 = [];
const vote_rejet_05104 = [];
const vote_macronpop_05104 = [];
const vote_lepenpop_05104 = [];
const vote_rejetpop_05104 = [];
const name_Commune_05104 = [];
const Pourcentage_05104 = [];
const Pourcentage_rejet_05104 = [];
const vote_gene_macron_05104 = [];
const vote_gene_lepen_05104 = [];
const vote_gene_rejet_05104 = [];

async function chartIt05104(){
    await GraphDATA05104();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05104-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05104
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05104
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05104-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05104,vote_lepen_05104,vote_rejet_05104]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05104-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05104,vote_lepenpop_05104,vote_rejetpop_05104]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05104"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05104
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05104
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05104
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05105*/
/*------------------------------------------------------------------ */
async function GraphDATA05105() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[104];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05105.push(vote_macron); 
    vote_lepen_05105.push(vote_lepen);
    vote_rejet_05105.push(vote_rejet);
    vote_macronpop_05105.push(vote_macronMediane);
    vote_lepenpop_05105.push(vote_lepenMediane);
    vote_rejetpop_05105.push(vote_rejetMediane);
    name_Commune_05105.push(nameCommune);
    Pourcentage_05105.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05105.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05105.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05105.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05105.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05105 = [];
const vote_lepen_05105 = [];
const vote_rejet_05105 = [];
const vote_macronpop_05105 = [];
const vote_lepenpop_05105 = [];
const vote_rejetpop_05105 = [];
const name_Commune_05105 = [];
const Pourcentage_05105 = [];
const Pourcentage_rejet_05105 = [];
const vote_gene_macron_05105 = [];
const vote_gene_lepen_05105 = [];
const vote_gene_rejet_05105 = [];

async function chartIt05105(){
    await GraphDATA05105();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05105-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05105
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05105
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05105-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05105,vote_lepen_05105,vote_rejet_05105]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05105-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05105,vote_lepenpop_05105,vote_rejetpop_05105]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05105"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05105
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05105
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05105
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05106*/
/*------------------------------------------------------------------ */
async function GraphDATA05106() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[105];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05106.push(vote_macron); 
    vote_lepen_05106.push(vote_lepen);
    vote_rejet_05106.push(vote_rejet);
    vote_macronpop_05106.push(vote_macronMediane);
    vote_lepenpop_05106.push(vote_lepenMediane);
    vote_rejetpop_05106.push(vote_rejetMediane);
    name_Commune_05106.push(nameCommune);
    Pourcentage_05106.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05106.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05106.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05106.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05106.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05106 = [];
const vote_lepen_05106 = [];
const vote_rejet_05106 = [];
const vote_macronpop_05106 = [];
const vote_lepenpop_05106 = [];
const vote_rejetpop_05106 = [];
const name_Commune_05106 = [];
const Pourcentage_05106 = [];
const Pourcentage_rejet_05106 = [];
const vote_gene_macron_05106 = [];
const vote_gene_lepen_05106 = [];
const vote_gene_rejet_05106 = [];

async function chartIt05106(){
    await GraphDATA05106();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05106-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05106
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05106
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05106-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05106,vote_lepen_05106,vote_rejet_05106]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05106-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05106,vote_lepenpop_05106,vote_rejetpop_05106]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05106"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05106
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05106
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05106
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05107*/
/*------------------------------------------------------------------ */
async function GraphDATA05107() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[106];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05107.push(vote_macron); 
    vote_lepen_05107.push(vote_lepen);
    vote_rejet_05107.push(vote_rejet);
    vote_macronpop_05107.push(vote_macronMediane);
    vote_lepenpop_05107.push(vote_lepenMediane);
    vote_rejetpop_05107.push(vote_rejetMediane);
    name_Commune_05107.push(nameCommune);
    Pourcentage_05107.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05107.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05107.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05107.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05107.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05107 = [];
const vote_lepen_05107 = [];
const vote_rejet_05107 = [];
const vote_macronpop_05107 = [];
const vote_lepenpop_05107 = [];
const vote_rejetpop_05107 = [];
const name_Commune_05107 = [];
const Pourcentage_05107 = [];
const Pourcentage_rejet_05107 = [];
const vote_gene_macron_05107 = [];
const vote_gene_lepen_05107 = [];
const vote_gene_rejet_05107 = [];

async function chartIt05107(){
    await GraphDATA05107();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05107-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05107
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05107
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05107-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05107,vote_lepen_05107,vote_rejet_05107]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05107-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05107,vote_lepenpop_05107,vote_rejetpop_05107]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05107"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05107
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05107
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05107
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05108*/
/*------------------------------------------------------------------ */
async function GraphDATA05108() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[107];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05108.push(vote_macron); 
    vote_lepen_05108.push(vote_lepen);
    vote_rejet_05108.push(vote_rejet);
    vote_macronpop_05108.push(vote_macronMediane);
    vote_lepenpop_05108.push(vote_lepenMediane);
    vote_rejetpop_05108.push(vote_rejetMediane);
    name_Commune_05108.push(nameCommune);
    Pourcentage_05108.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05108.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05108.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05108.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05108.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05108 = [];
const vote_lepen_05108 = [];
const vote_rejet_05108 = [];
const vote_macronpop_05108 = [];
const vote_lepenpop_05108 = [];
const vote_rejetpop_05108 = [];
const name_Commune_05108 = [];
const Pourcentage_05108 = [];
const Pourcentage_rejet_05108 = [];
const vote_gene_macron_05108 = [];
const vote_gene_lepen_05108 = [];
const vote_gene_rejet_05108 = [];

async function chartIt05108(){
    await GraphDATA05108();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05108-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05108
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05108
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05108-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05108,vote_lepen_05108,vote_rejet_05108]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05108-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05108,vote_lepenpop_05108,vote_rejetpop_05108]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05108"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05108
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05108
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05108
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05109*/
/*------------------------------------------------------------------ */
async function GraphDATA05109() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[108];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05109.push(vote_macron); 
    vote_lepen_05109.push(vote_lepen);
    vote_rejet_05109.push(vote_rejet);
    vote_macronpop_05109.push(vote_macronMediane);
    vote_lepenpop_05109.push(vote_lepenMediane);
    vote_rejetpop_05109.push(vote_rejetMediane);
    name_Commune_05109.push(nameCommune);
    Pourcentage_05109.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05109.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05109.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05109.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05109.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05109 = [];
const vote_lepen_05109 = [];
const vote_rejet_05109 = [];
const vote_macronpop_05109 = [];
const vote_lepenpop_05109 = [];
const vote_rejetpop_05109 = [];
const name_Commune_05109 = [];
const Pourcentage_05109 = [];
const Pourcentage_rejet_05109 = [];
const vote_gene_macron_05109 = [];
const vote_gene_lepen_05109 = [];
const vote_gene_rejet_05109 = [];

async function chartIt05109(){
    await GraphDATA05109();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05109-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05109
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05109
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05109-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05109,vote_lepen_05109,vote_rejet_05109]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05109-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05109,vote_lepenpop_05109,vote_rejetpop_05109]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05109"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05109
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05109
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05109
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05110*/
/*------------------------------------------------------------------ */
async function GraphDATA05110() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[109];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05110.push(vote_macron); 
    vote_lepen_05110.push(vote_lepen);
    vote_rejet_05110.push(vote_rejet);
    vote_macronpop_05110.push(vote_macronMediane);
    vote_lepenpop_05110.push(vote_lepenMediane);
    vote_rejetpop_05110.push(vote_rejetMediane);
    name_Commune_05110.push(nameCommune);
    Pourcentage_05110.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05110.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05110.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05110.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05110.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05110 = [];
const vote_lepen_05110 = [];
const vote_rejet_05110 = [];
const vote_macronpop_05110 = [];
const vote_lepenpop_05110 = [];
const vote_rejetpop_05110 = [];
const name_Commune_05110 = [];
const Pourcentage_05110 = [];
const Pourcentage_rejet_05110 = [];
const vote_gene_macron_05110 = [];
const vote_gene_lepen_05110 = [];
const vote_gene_rejet_05110 = [];

async function chartIt05110(){
    await GraphDATA05110();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05110-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05110
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05110
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05110-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05110,vote_lepen_05110,vote_rejet_05110]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05110-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05110,vote_lepenpop_05110,vote_rejetpop_05110]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05110"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05110
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05110
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05110
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05111*/
/*------------------------------------------------------------------ */
async function GraphDATA05111() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[110];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05111.push(vote_macron); 
    vote_lepen_05111.push(vote_lepen);
    vote_rejet_05111.push(vote_rejet);
    vote_macronpop_05111.push(vote_macronMediane);
    vote_lepenpop_05111.push(vote_lepenMediane);
    vote_rejetpop_05111.push(vote_rejetMediane);
    name_Commune_05111.push(nameCommune);
    Pourcentage_05111.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05111.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05111.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05111.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05111.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05111 = [];
const vote_lepen_05111 = [];
const vote_rejet_05111 = [];
const vote_macronpop_05111 = [];
const vote_lepenpop_05111 = [];
const vote_rejetpop_05111 = [];
const name_Commune_05111 = [];
const Pourcentage_05111 = [];
const Pourcentage_rejet_05111 = [];
const vote_gene_macron_05111 = [];
const vote_gene_lepen_05111 = [];
const vote_gene_rejet_05111 = [];

async function chartIt05111(){
    await GraphDATA05111();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05111-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05111
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05111
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05111-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05111,vote_lepen_05111,vote_rejet_05111]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05111-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05111,vote_lepenpop_05111,vote_rejetpop_05111]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05111"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05111
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05111
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05111
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05112*/
/*------------------------------------------------------------------ */
async function GraphDATA05112() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[111];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05112.push(vote_macron); 
    vote_lepen_05112.push(vote_lepen);
    vote_rejet_05112.push(vote_rejet);
    vote_macronpop_05112.push(vote_macronMediane);
    vote_lepenpop_05112.push(vote_lepenMediane);
    vote_rejetpop_05112.push(vote_rejetMediane);
    name_Commune_05112.push(nameCommune);
    Pourcentage_05112.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05112.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05112.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05112.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05112.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05112 = [];
const vote_lepen_05112 = [];
const vote_rejet_05112 = [];
const vote_macronpop_05112 = [];
const vote_lepenpop_05112 = [];
const vote_rejetpop_05112 = [];
const name_Commune_05112 = [];
const Pourcentage_05112 = [];
const Pourcentage_rejet_05112 = [];
const vote_gene_macron_05112 = [];
const vote_gene_lepen_05112 = [];
const vote_gene_rejet_05112 = [];

async function chartIt05112(){
    await GraphDATA05112();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05112-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05112
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05112
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05112-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05112,vote_lepen_05112,vote_rejet_05112]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05112-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05112,vote_lepenpop_05112,vote_rejetpop_05112]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05112"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05112
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05112
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05112
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05113*/
/*------------------------------------------------------------------ */
async function GraphDATA05113() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[112];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05113.push(vote_macron); 
    vote_lepen_05113.push(vote_lepen);
    vote_rejet_05113.push(vote_rejet);
    vote_macronpop_05113.push(vote_macronMediane);
    vote_lepenpop_05113.push(vote_lepenMediane);
    vote_rejetpop_05113.push(vote_rejetMediane);
    name_Commune_05113.push(nameCommune);
    Pourcentage_05113.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05113.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05113.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05113.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05113.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05113 = [];
const vote_lepen_05113 = [];
const vote_rejet_05113 = [];
const vote_macronpop_05113 = [];
const vote_lepenpop_05113 = [];
const vote_rejetpop_05113 = [];
const name_Commune_05113 = [];
const Pourcentage_05113 = [];
const Pourcentage_rejet_05113 = [];
const vote_gene_macron_05113 = [];
const vote_gene_lepen_05113 = [];
const vote_gene_rejet_05113 = [];

async function chartIt05113(){
    await GraphDATA05113();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05113-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05113
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05113
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05113-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05113,vote_lepen_05113,vote_rejet_05113]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05113-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05113,vote_lepenpop_05113,vote_rejetpop_05113]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05113"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05113
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05113
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05113
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05114*/
/*------------------------------------------------------------------ */
async function GraphDATA05114() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[113];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05114.push(vote_macron); 
    vote_lepen_05114.push(vote_lepen);
    vote_rejet_05114.push(vote_rejet);
    vote_macronpop_05114.push(vote_macronMediane);
    vote_lepenpop_05114.push(vote_lepenMediane);
    vote_rejetpop_05114.push(vote_rejetMediane);
    name_Commune_05114.push(nameCommune);
    Pourcentage_05114.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05114.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05114.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05114.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05114.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05114 = [];
const vote_lepen_05114 = [];
const vote_rejet_05114 = [];
const vote_macronpop_05114 = [];
const vote_lepenpop_05114 = [];
const vote_rejetpop_05114 = [];
const name_Commune_05114 = [];
const Pourcentage_05114 = [];
const Pourcentage_rejet_05114 = [];
const vote_gene_macron_05114 = [];
const vote_gene_lepen_05114 = [];
const vote_gene_rejet_05114 = [];

async function chartIt05114(){
    await GraphDATA05114();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05114-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05114
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05114
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05114-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05114,vote_lepen_05114,vote_rejet_05114]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05114-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05114,vote_lepenpop_05114,vote_rejetpop_05114]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05114"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05114
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05114
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05114
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05115*/
/*------------------------------------------------------------------ */
async function GraphDATA05115() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[114];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05115.push(vote_macron); 
    vote_lepen_05115.push(vote_lepen);
    vote_rejet_05115.push(vote_rejet);
    vote_macronpop_05115.push(vote_macronMediane);
    vote_lepenpop_05115.push(vote_lepenMediane);
    vote_rejetpop_05115.push(vote_rejetMediane);
    name_Commune_05115.push(nameCommune);
    Pourcentage_05115.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05115.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05115.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05115.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05115.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05115 = [];
const vote_lepen_05115 = [];
const vote_rejet_05115 = [];
const vote_macronpop_05115 = [];
const vote_lepenpop_05115 = [];
const vote_rejetpop_05115 = [];
const name_Commune_05115 = [];
const Pourcentage_05115 = [];
const Pourcentage_rejet_05115 = [];
const vote_gene_macron_05115 = [];
const vote_gene_lepen_05115 = [];
const vote_gene_rejet_05115 = [];

async function chartIt05115(){
    await GraphDATA05115();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05115-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05115
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05115
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05115-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05115,vote_lepen_05115,vote_rejet_05115]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05115-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05115,vote_lepenpop_05115,vote_rejetpop_05115]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05115"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05115
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05115
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05115
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05116*/
/*------------------------------------------------------------------ */
async function GraphDATA05116() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[115];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05116.push(vote_macron); 
    vote_lepen_05116.push(vote_lepen);
    vote_rejet_05116.push(vote_rejet);
    vote_macronpop_05116.push(vote_macronMediane);
    vote_lepenpop_05116.push(vote_lepenMediane);
    vote_rejetpop_05116.push(vote_rejetMediane);
    name_Commune_05116.push(nameCommune);
    Pourcentage_05116.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05116.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05116.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05116.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05116.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05116 = [];
const vote_lepen_05116 = [];
const vote_rejet_05116 = [];
const vote_macronpop_05116 = [];
const vote_lepenpop_05116 = [];
const vote_rejetpop_05116 = [];
const name_Commune_05116 = [];
const Pourcentage_05116 = [];
const Pourcentage_rejet_05116 = [];
const vote_gene_macron_05116 = [];
const vote_gene_lepen_05116 = [];
const vote_gene_rejet_05116 = [];

async function chartIt05116(){
    await GraphDATA05116();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05116-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05116
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05116
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05116-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05116,vote_lepen_05116,vote_rejet_05116]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05116-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05116,vote_lepenpop_05116,vote_rejetpop_05116]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05116"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05116
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05116
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05116
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05117*/
/*------------------------------------------------------------------ */
async function GraphDATA05117() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[116];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05117.push(vote_macron); 
    vote_lepen_05117.push(vote_lepen);
    vote_rejet_05117.push(vote_rejet);
    vote_macronpop_05117.push(vote_macronMediane);
    vote_lepenpop_05117.push(vote_lepenMediane);
    vote_rejetpop_05117.push(vote_rejetMediane);
    name_Commune_05117.push(nameCommune);
    Pourcentage_05117.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05117.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05117.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05117.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05117.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05117 = [];
const vote_lepen_05117 = [];
const vote_rejet_05117 = [];
const vote_macronpop_05117 = [];
const vote_lepenpop_05117 = [];
const vote_rejetpop_05117 = [];
const name_Commune_05117 = [];
const Pourcentage_05117 = [];
const Pourcentage_rejet_05117 = [];
const vote_gene_macron_05117 = [];
const vote_gene_lepen_05117 = [];
const vote_gene_rejet_05117 = [];

async function chartIt05117(){
    await GraphDATA05117();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05117-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05117
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05117
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05117-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05117,vote_lepen_05117,vote_rejet_05117]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05117-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05117,vote_lepenpop_05117,vote_rejetpop_05117]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05117"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05117
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05117
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05117
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05118*/
/*------------------------------------------------------------------ */
async function GraphDATA05118() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[117];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05118.push(vote_macron); 
    vote_lepen_05118.push(vote_lepen);
    vote_rejet_05118.push(vote_rejet);
    vote_macronpop_05118.push(vote_macronMediane);
    vote_lepenpop_05118.push(vote_lepenMediane);
    vote_rejetpop_05118.push(vote_rejetMediane);
    name_Commune_05118.push(nameCommune);
    Pourcentage_05118.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05118.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05118.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05118.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05118.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05118 = [];
const vote_lepen_05118 = [];
const vote_rejet_05118 = [];
const vote_macronpop_05118 = [];
const vote_lepenpop_05118 = [];
const vote_rejetpop_05118 = [];
const name_Commune_05118 = [];
const Pourcentage_05118 = [];
const Pourcentage_rejet_05118 = [];
const vote_gene_macron_05118 = [];
const vote_gene_lepen_05118 = [];
const vote_gene_rejet_05118 = [];

async function chartIt05118(){
    await GraphDATA05118();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05118-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05118
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05118
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05118-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05118,vote_lepen_05118,vote_rejet_05118]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05118-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05118,vote_lepenpop_05118,vote_rejetpop_05118]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05118"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05118
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05118
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05118
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05119*/
/*------------------------------------------------------------------ */
async function GraphDATA05119() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[118];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05119.push(vote_macron); 
    vote_lepen_05119.push(vote_lepen);
    vote_rejet_05119.push(vote_rejet);
    vote_macronpop_05119.push(vote_macronMediane);
    vote_lepenpop_05119.push(vote_lepenMediane);
    vote_rejetpop_05119.push(vote_rejetMediane);
    name_Commune_05119.push(nameCommune);
    Pourcentage_05119.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05119.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05119.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05119.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05119.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05119 = [];
const vote_lepen_05119 = [];
const vote_rejet_05119 = [];
const vote_macronpop_05119 = [];
const vote_lepenpop_05119 = [];
const vote_rejetpop_05119 = [];
const name_Commune_05119 = [];
const Pourcentage_05119 = [];
const Pourcentage_rejet_05119 = [];
const vote_gene_macron_05119 = [];
const vote_gene_lepen_05119 = [];
const vote_gene_rejet_05119 = [];

async function chartIt05119(){
    await GraphDATA05119();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05119-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05119
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05119
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05119-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05119,vote_lepen_05119,vote_rejet_05119]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05119-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05119,vote_lepenpop_05119,vote_rejetpop_05119]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05119"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05119
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05119
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05119
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05120*/
/*------------------------------------------------------------------ */
async function GraphDATA05120() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[119];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05120.push(vote_macron); 
    vote_lepen_05120.push(vote_lepen);
    vote_rejet_05120.push(vote_rejet);
    vote_macronpop_05120.push(vote_macronMediane);
    vote_lepenpop_05120.push(vote_lepenMediane);
    vote_rejetpop_05120.push(vote_rejetMediane);
    name_Commune_05120.push(nameCommune);
    Pourcentage_05120.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05120.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05120.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05120.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05120.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05120 = [];
const vote_lepen_05120 = [];
const vote_rejet_05120 = [];
const vote_macronpop_05120 = [];
const vote_lepenpop_05120 = [];
const vote_rejetpop_05120 = [];
const name_Commune_05120 = [];
const Pourcentage_05120 = [];
const Pourcentage_rejet_05120 = [];
const vote_gene_macron_05120 = [];
const vote_gene_lepen_05120 = [];
const vote_gene_rejet_05120 = [];

async function chartIt05120(){
    await GraphDATA05120();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05120-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05120
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05120
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05120-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05120,vote_lepen_05120,vote_rejet_05120]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05120-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05120,vote_lepenpop_05120,vote_rejetpop_05120]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05120"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05120
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05120
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05120
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05121*/
/*------------------------------------------------------------------ */
async function GraphDATA05121() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[120];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05121.push(vote_macron); 
    vote_lepen_05121.push(vote_lepen);
    vote_rejet_05121.push(vote_rejet);
    vote_macronpop_05121.push(vote_macronMediane);
    vote_lepenpop_05121.push(vote_lepenMediane);
    vote_rejetpop_05121.push(vote_rejetMediane);
    name_Commune_05121.push(nameCommune);
    Pourcentage_05121.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05121.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05121.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05121.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05121.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05121 = [];
const vote_lepen_05121 = [];
const vote_rejet_05121 = [];
const vote_macronpop_05121 = [];
const vote_lepenpop_05121 = [];
const vote_rejetpop_05121 = [];
const name_Commune_05121 = [];
const Pourcentage_05121 = [];
const Pourcentage_rejet_05121 = [];
const vote_gene_macron_05121 = [];
const vote_gene_lepen_05121 = [];
const vote_gene_rejet_05121 = [];

async function chartIt05121(){
    await GraphDATA05121();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05121-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05121
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05121
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05121-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05121,vote_lepen_05121,vote_rejet_05121]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05121-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05121,vote_lepenpop_05121,vote_rejetpop_05121]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05121"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05121
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05121
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05121
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05122*/
/*------------------------------------------------------------------ */
async function GraphDATA05122() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[121];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05122.push(vote_macron); 
    vote_lepen_05122.push(vote_lepen);
    vote_rejet_05122.push(vote_rejet);
    vote_macronpop_05122.push(vote_macronMediane);
    vote_lepenpop_05122.push(vote_lepenMediane);
    vote_rejetpop_05122.push(vote_rejetMediane);
    name_Commune_05122.push(nameCommune);
    Pourcentage_05122.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05122.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05122.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05122.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05122.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05122 = [];
const vote_lepen_05122 = [];
const vote_rejet_05122 = [];
const vote_macronpop_05122 = [];
const vote_lepenpop_05122 = [];
const vote_rejetpop_05122 = [];
const name_Commune_05122 = [];
const Pourcentage_05122 = [];
const Pourcentage_rejet_05122 = [];
const vote_gene_macron_05122 = [];
const vote_gene_lepen_05122 = [];
const vote_gene_rejet_05122 = [];

async function chartIt05122(){
    await GraphDATA05122();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05122-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05122
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05122
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05122-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05122,vote_lepen_05122,vote_rejet_05122]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05122-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05122,vote_lepenpop_05122,vote_rejetpop_05122]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05122"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05122
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05122
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05122
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05123*/
/*------------------------------------------------------------------ */
async function GraphDATA05123() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[122];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05123.push(vote_macron); 
    vote_lepen_05123.push(vote_lepen);
    vote_rejet_05123.push(vote_rejet);
    vote_macronpop_05123.push(vote_macronMediane);
    vote_lepenpop_05123.push(vote_lepenMediane);
    vote_rejetpop_05123.push(vote_rejetMediane);
    name_Commune_05123.push(nameCommune);
    Pourcentage_05123.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05123.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05123.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05123.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05123.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05123 = [];
const vote_lepen_05123 = [];
const vote_rejet_05123 = [];
const vote_macronpop_05123 = [];
const vote_lepenpop_05123 = [];
const vote_rejetpop_05123 = [];
const name_Commune_05123 = [];
const Pourcentage_05123 = [];
const Pourcentage_rejet_05123 = [];
const vote_gene_macron_05123 = [];
const vote_gene_lepen_05123 = [];
const vote_gene_rejet_05123 = [];

async function chartIt05123(){
    await GraphDATA05123();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05123-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05123
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05123
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05123-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05123,vote_lepen_05123,vote_rejet_05123]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05123-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05123,vote_lepenpop_05123,vote_rejetpop_05123]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05123"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05123
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05123
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05123
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05124*/
/*------------------------------------------------------------------ */
async function GraphDATA05124() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[123];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05124.push(vote_macron); 
    vote_lepen_05124.push(vote_lepen);
    vote_rejet_05124.push(vote_rejet);
    vote_macronpop_05124.push(vote_macronMediane);
    vote_lepenpop_05124.push(vote_lepenMediane);
    vote_rejetpop_05124.push(vote_rejetMediane);
    name_Commune_05124.push(nameCommune);
    Pourcentage_05124.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05124.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05124.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05124.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05124.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05124 = [];
const vote_lepen_05124 = [];
const vote_rejet_05124 = [];
const vote_macronpop_05124 = [];
const vote_lepenpop_05124 = [];
const vote_rejetpop_05124 = [];
const name_Commune_05124 = [];
const Pourcentage_05124 = [];
const Pourcentage_rejet_05124 = [];
const vote_gene_macron_05124 = [];
const vote_gene_lepen_05124 = [];
const vote_gene_rejet_05124 = [];

async function chartIt05124(){
    await GraphDATA05124();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05124-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05124
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05124
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05124-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05124,vote_lepen_05124,vote_rejet_05124]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05124-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05124,vote_lepenpop_05124,vote_rejetpop_05124]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05124"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05124
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05124
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05124
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05125*/
/*------------------------------------------------------------------ */
async function GraphDATA05125() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[124];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05125.push(vote_macron); 
    vote_lepen_05125.push(vote_lepen);
    vote_rejet_05125.push(vote_rejet);
    vote_macronpop_05125.push(vote_macronMediane);
    vote_lepenpop_05125.push(vote_lepenMediane);
    vote_rejetpop_05125.push(vote_rejetMediane);
    name_Commune_05125.push(nameCommune);
    Pourcentage_05125.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05125.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05125.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05125.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05125.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05125 = [];
const vote_lepen_05125 = [];
const vote_rejet_05125 = [];
const vote_macronpop_05125 = [];
const vote_lepenpop_05125 = [];
const vote_rejetpop_05125 = [];
const name_Commune_05125 = [];
const Pourcentage_05125 = [];
const Pourcentage_rejet_05125 = [];
const vote_gene_macron_05125 = [];
const vote_gene_lepen_05125 = [];
const vote_gene_rejet_05125 = [];

async function chartIt05125(){
    await GraphDATA05125();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05125-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05125
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05125
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05125-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05125,vote_lepen_05125,vote_rejet_05125]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05125-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05125,vote_lepenpop_05125,vote_rejetpop_05125]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05125"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05125
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05125
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05125
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05126*/
/*------------------------------------------------------------------ */
async function GraphDATA05126() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[125];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05126.push(vote_macron); 
    vote_lepen_05126.push(vote_lepen);
    vote_rejet_05126.push(vote_rejet);
    vote_macronpop_05126.push(vote_macronMediane);
    vote_lepenpop_05126.push(vote_lepenMediane);
    vote_rejetpop_05126.push(vote_rejetMediane);
    name_Commune_05126.push(nameCommune);
    Pourcentage_05126.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05126.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05126.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05126.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05126.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05126 = [];
const vote_lepen_05126 = [];
const vote_rejet_05126 = [];
const vote_macronpop_05126 = [];
const vote_lepenpop_05126 = [];
const vote_rejetpop_05126 = [];
const name_Commune_05126 = [];
const Pourcentage_05126 = [];
const Pourcentage_rejet_05126 = [];
const vote_gene_macron_05126 = [];
const vote_gene_lepen_05126 = [];
const vote_gene_rejet_05126 = [];

async function chartIt05126(){
    await GraphDATA05126();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05126-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05126
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05126
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05126-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05126,vote_lepen_05126,vote_rejet_05126]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05126-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05126,vote_lepenpop_05126,vote_rejetpop_05126]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05126"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05126
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05126
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05126
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05127*/
/*------------------------------------------------------------------ */
async function GraphDATA05127() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[126];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05127.push(vote_macron); 
    vote_lepen_05127.push(vote_lepen);
    vote_rejet_05127.push(vote_rejet);
    vote_macronpop_05127.push(vote_macronMediane);
    vote_lepenpop_05127.push(vote_lepenMediane);
    vote_rejetpop_05127.push(vote_rejetMediane);
    name_Commune_05127.push(nameCommune);
    Pourcentage_05127.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05127.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05127.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05127.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05127.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05127 = [];
const vote_lepen_05127 = [];
const vote_rejet_05127 = [];
const vote_macronpop_05127 = [];
const vote_lepenpop_05127 = [];
const vote_rejetpop_05127 = [];
const name_Commune_05127 = [];
const Pourcentage_05127 = [];
const Pourcentage_rejet_05127 = [];
const vote_gene_macron_05127 = [];
const vote_gene_lepen_05127 = [];
const vote_gene_rejet_05127 = [];

async function chartIt05127(){
    await GraphDATA05127();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05127-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05127
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05127
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05127-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05127,vote_lepen_05127,vote_rejet_05127]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05127-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05127,vote_lepenpop_05127,vote_rejetpop_05127]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05127"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05127
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05127
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05127
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05128*/
/*------------------------------------------------------------------ */
async function GraphDATA05128() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[127];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05128.push(vote_macron); 
    vote_lepen_05128.push(vote_lepen);
    vote_rejet_05128.push(vote_rejet);
    vote_macronpop_05128.push(vote_macronMediane);
    vote_lepenpop_05128.push(vote_lepenMediane);
    vote_rejetpop_05128.push(vote_rejetMediane);
    name_Commune_05128.push(nameCommune);
    Pourcentage_05128.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05128.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05128.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05128.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05128.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05128 = [];
const vote_lepen_05128 = [];
const vote_rejet_05128 = [];
const vote_macronpop_05128 = [];
const vote_lepenpop_05128 = [];
const vote_rejetpop_05128 = [];
const name_Commune_05128 = [];
const Pourcentage_05128 = [];
const Pourcentage_rejet_05128 = [];
const vote_gene_macron_05128 = [];
const vote_gene_lepen_05128 = [];
const vote_gene_rejet_05128 = [];

async function chartIt05128(){
    await GraphDATA05128();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05128-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05128
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05128
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05128-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05128,vote_lepen_05128,vote_rejet_05128]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05128-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05128,vote_lepenpop_05128,vote_rejetpop_05128]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05128"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05128
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05128
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05128
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05129*/
/*------------------------------------------------------------------ */
async function GraphDATA05129() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[128];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05129.push(vote_macron); 
    vote_lepen_05129.push(vote_lepen);
    vote_rejet_05129.push(vote_rejet);
    vote_macronpop_05129.push(vote_macronMediane);
    vote_lepenpop_05129.push(vote_lepenMediane);
    vote_rejetpop_05129.push(vote_rejetMediane);
    name_Commune_05129.push(nameCommune);
    Pourcentage_05129.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05129.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05129.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05129.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05129.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05129 = [];
const vote_lepen_05129 = [];
const vote_rejet_05129 = [];
const vote_macronpop_05129 = [];
const vote_lepenpop_05129 = [];
const vote_rejetpop_05129 = [];
const name_Commune_05129 = [];
const Pourcentage_05129 = [];
const Pourcentage_rejet_05129 = [];
const vote_gene_macron_05129 = [];
const vote_gene_lepen_05129 = [];
const vote_gene_rejet_05129 = [];

async function chartIt05129(){
    await GraphDATA05129();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05129-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05129
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05129
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05129-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05129,vote_lepen_05129,vote_rejet_05129]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05129-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05129,vote_lepenpop_05129,vote_rejetpop_05129]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05129"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05129
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05129
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05129
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05130*/
/*------------------------------------------------------------------ */
async function GraphDATA05130() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[129];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05130.push(vote_macron); 
    vote_lepen_05130.push(vote_lepen);
    vote_rejet_05130.push(vote_rejet);
    vote_macronpop_05130.push(vote_macronMediane);
    vote_lepenpop_05130.push(vote_lepenMediane);
    vote_rejetpop_05130.push(vote_rejetMediane);
    name_Commune_05130.push(nameCommune);
    Pourcentage_05130.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05130.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05130.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05130.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05130.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05130 = [];
const vote_lepen_05130 = [];
const vote_rejet_05130 = [];
const vote_macronpop_05130 = [];
const vote_lepenpop_05130 = [];
const vote_rejetpop_05130 = [];
const name_Commune_05130 = [];
const Pourcentage_05130 = [];
const Pourcentage_rejet_05130 = [];
const vote_gene_macron_05130 = [];
const vote_gene_lepen_05130 = [];
const vote_gene_rejet_05130 = [];

async function chartIt05130(){
    await GraphDATA05130();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05130-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05130
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05130
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05130-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05130,vote_lepen_05130,vote_rejet_05130]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05130-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05130,vote_lepenpop_05130,vote_rejetpop_05130]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05130"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05130
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05130
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05130
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05131*/
/*------------------------------------------------------------------ */
async function GraphDATA05131() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[130];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05131.push(vote_macron); 
    vote_lepen_05131.push(vote_lepen);
    vote_rejet_05131.push(vote_rejet);
    vote_macronpop_05131.push(vote_macronMediane);
    vote_lepenpop_05131.push(vote_lepenMediane);
    vote_rejetpop_05131.push(vote_rejetMediane);
    name_Commune_05131.push(nameCommune);
    Pourcentage_05131.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05131.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05131.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05131.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05131.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05131 = [];
const vote_lepen_05131 = [];
const vote_rejet_05131 = [];
const vote_macronpop_05131 = [];
const vote_lepenpop_05131 = [];
const vote_rejetpop_05131 = [];
const name_Commune_05131 = [];
const Pourcentage_05131 = [];
const Pourcentage_rejet_05131 = [];
const vote_gene_macron_05131 = [];
const vote_gene_lepen_05131 = [];
const vote_gene_rejet_05131 = [];

async function chartIt05131(){
    await GraphDATA05131();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05131-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05131
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05131
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05131-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05131,vote_lepen_05131,vote_rejet_05131]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05131-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05131,vote_lepenpop_05131,vote_rejetpop_05131]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05131"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05131
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05131
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05131
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05132*/
/*------------------------------------------------------------------ */
async function GraphDATA05132() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[131];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05132.push(vote_macron); 
    vote_lepen_05132.push(vote_lepen);
    vote_rejet_05132.push(vote_rejet);
    vote_macronpop_05132.push(vote_macronMediane);
    vote_lepenpop_05132.push(vote_lepenMediane);
    vote_rejetpop_05132.push(vote_rejetMediane);
    name_Commune_05132.push(nameCommune);
    Pourcentage_05132.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05132.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05132.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05132.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05132.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05132 = [];
const vote_lepen_05132 = [];
const vote_rejet_05132 = [];
const vote_macronpop_05132 = [];
const vote_lepenpop_05132 = [];
const vote_rejetpop_05132 = [];
const name_Commune_05132 = [];
const Pourcentage_05132 = [];
const Pourcentage_rejet_05132 = [];
const vote_gene_macron_05132 = [];
const vote_gene_lepen_05132 = [];
const vote_gene_rejet_05132 = [];

async function chartIt05132(){
    await GraphDATA05132();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05132-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05132
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05132
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05132-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05132,vote_lepen_05132,vote_rejet_05132]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05132-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05132,vote_lepenpop_05132,vote_rejetpop_05132]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05132"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05132
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05132
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05132
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05133*/
/*------------------------------------------------------------------ */
async function GraphDATA05133() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[132];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05133.push(vote_macron); 
    vote_lepen_05133.push(vote_lepen);
    vote_rejet_05133.push(vote_rejet);
    vote_macronpop_05133.push(vote_macronMediane);
    vote_lepenpop_05133.push(vote_lepenMediane);
    vote_rejetpop_05133.push(vote_rejetMediane);
    name_Commune_05133.push(nameCommune);
    Pourcentage_05133.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05133.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05133.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05133.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05133.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05133 = [];
const vote_lepen_05133 = [];
const vote_rejet_05133 = [];
const vote_macronpop_05133 = [];
const vote_lepenpop_05133 = [];
const vote_rejetpop_05133 = [];
const name_Commune_05133 = [];
const Pourcentage_05133 = [];
const Pourcentage_rejet_05133 = [];
const vote_gene_macron_05133 = [];
const vote_gene_lepen_05133 = [];
const vote_gene_rejet_05133 = [];

async function chartIt05133(){
    await GraphDATA05133();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05133-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05133
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05133
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05133-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05133,vote_lepen_05133,vote_rejet_05133]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05133-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05133,vote_lepenpop_05133,vote_rejetpop_05133]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05133"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05133
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05133
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05133
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05134*/
/*------------------------------------------------------------------ */
async function GraphDATA05134() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[133];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05134.push(vote_macron); 
    vote_lepen_05134.push(vote_lepen);
    vote_rejet_05134.push(vote_rejet);
    vote_macronpop_05134.push(vote_macronMediane);
    vote_lepenpop_05134.push(vote_lepenMediane);
    vote_rejetpop_05134.push(vote_rejetMediane);
    name_Commune_05134.push(nameCommune);
    Pourcentage_05134.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05134.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05134.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05134.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05134.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05134 = [];
const vote_lepen_05134 = [];
const vote_rejet_05134 = [];
const vote_macronpop_05134 = [];
const vote_lepenpop_05134 = [];
const vote_rejetpop_05134 = [];
const name_Commune_05134 = [];
const Pourcentage_05134 = [];
const Pourcentage_rejet_05134 = [];
const vote_gene_macron_05134 = [];
const vote_gene_lepen_05134 = [];
const vote_gene_rejet_05134 = [];

async function chartIt05134(){
    await GraphDATA05134();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05134-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05134
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05134
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05134-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05134,vote_lepen_05134,vote_rejet_05134]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05134-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05134,vote_lepenpop_05134,vote_rejetpop_05134]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05134"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05134
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05134
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05134
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05135*/
/*------------------------------------------------------------------ */
async function GraphDATA05135() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[134];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05135.push(vote_macron); 
    vote_lepen_05135.push(vote_lepen);
    vote_rejet_05135.push(vote_rejet);
    vote_macronpop_05135.push(vote_macronMediane);
    vote_lepenpop_05135.push(vote_lepenMediane);
    vote_rejetpop_05135.push(vote_rejetMediane);
    name_Commune_05135.push(nameCommune);
    Pourcentage_05135.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05135.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05135.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05135.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05135.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05135 = [];
const vote_lepen_05135 = [];
const vote_rejet_05135 = [];
const vote_macronpop_05135 = [];
const vote_lepenpop_05135 = [];
const vote_rejetpop_05135 = [];
const name_Commune_05135 = [];
const Pourcentage_05135 = [];
const Pourcentage_rejet_05135 = [];
const vote_gene_macron_05135 = [];
const vote_gene_lepen_05135 = [];
const vote_gene_rejet_05135 = [];

async function chartIt05135(){
    await GraphDATA05135();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05135-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05135
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05135
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05135-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05135,vote_lepen_05135,vote_rejet_05135]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05135-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05135,vote_lepenpop_05135,vote_rejetpop_05135]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05135"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05135
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05135
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05135
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05136*/
/*------------------------------------------------------------------ */
async function GraphDATA05136() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[135];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05136.push(vote_macron); 
    vote_lepen_05136.push(vote_lepen);
    vote_rejet_05136.push(vote_rejet);
    vote_macronpop_05136.push(vote_macronMediane);
    vote_lepenpop_05136.push(vote_lepenMediane);
    vote_rejetpop_05136.push(vote_rejetMediane);
    name_Commune_05136.push(nameCommune);
    Pourcentage_05136.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05136.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05136.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05136.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05136.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05136 = [];
const vote_lepen_05136 = [];
const vote_rejet_05136 = [];
const vote_macronpop_05136 = [];
const vote_lepenpop_05136 = [];
const vote_rejetpop_05136 = [];
const name_Commune_05136 = [];
const Pourcentage_05136 = [];
const Pourcentage_rejet_05136 = [];
const vote_gene_macron_05136 = [];
const vote_gene_lepen_05136 = [];
const vote_gene_rejet_05136 = [];

async function chartIt05136(){
    await GraphDATA05136();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05136-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05136
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05136
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05136-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05136,vote_lepen_05136,vote_rejet_05136]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05136-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05136,vote_lepenpop_05136,vote_rejetpop_05136]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05136"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05136
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05136
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05136
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05137*/
/*------------------------------------------------------------------ */
async function GraphDATA05137() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[136];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05137.push(vote_macron); 
    vote_lepen_05137.push(vote_lepen);
    vote_rejet_05137.push(vote_rejet);
    vote_macronpop_05137.push(vote_macronMediane);
    vote_lepenpop_05137.push(vote_lepenMediane);
    vote_rejetpop_05137.push(vote_rejetMediane);
    name_Commune_05137.push(nameCommune);
    Pourcentage_05137.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05137.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05137.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05137.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05137.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05137 = [];
const vote_lepen_05137 = [];
const vote_rejet_05137 = [];
const vote_macronpop_05137 = [];
const vote_lepenpop_05137 = [];
const vote_rejetpop_05137 = [];
const name_Commune_05137 = [];
const Pourcentage_05137 = [];
const Pourcentage_rejet_05137 = [];
const vote_gene_macron_05137 = [];
const vote_gene_lepen_05137 = [];
const vote_gene_rejet_05137 = [];

async function chartIt05137(){
    await GraphDATA05137();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05137-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05137
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05137
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05137-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05137,vote_lepen_05137,vote_rejet_05137]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05137-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05137,vote_lepenpop_05137,vote_rejetpop_05137]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05137"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05137
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05137
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05137
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05138*/
/*------------------------------------------------------------------ */
async function GraphDATA05138() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[137];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05138.push(vote_macron); 
    vote_lepen_05138.push(vote_lepen);
    vote_rejet_05138.push(vote_rejet);
    vote_macronpop_05138.push(vote_macronMediane);
    vote_lepenpop_05138.push(vote_lepenMediane);
    vote_rejetpop_05138.push(vote_rejetMediane);
    name_Commune_05138.push(nameCommune);
    Pourcentage_05138.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05138.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05138.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05138.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05138.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05138 = [];
const vote_lepen_05138 = [];
const vote_rejet_05138 = [];
const vote_macronpop_05138 = [];
const vote_lepenpop_05138 = [];
const vote_rejetpop_05138 = [];
const name_Commune_05138 = [];
const Pourcentage_05138 = [];
const Pourcentage_rejet_05138 = [];
const vote_gene_macron_05138 = [];
const vote_gene_lepen_05138 = [];
const vote_gene_rejet_05138 = [];

async function chartIt05138(){
    await GraphDATA05138();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05138-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05138
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05138
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05138-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05138,vote_lepen_05138,vote_rejet_05138]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05138-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05138,vote_lepenpop_05138,vote_rejetpop_05138]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05138"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05138
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05138
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05138
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05139*/
/*------------------------------------------------------------------ */
async function GraphDATA05139() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[138];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05139.push(vote_macron); 
    vote_lepen_05139.push(vote_lepen);
    vote_rejet_05139.push(vote_rejet);
    vote_macronpop_05139.push(vote_macronMediane);
    vote_lepenpop_05139.push(vote_lepenMediane);
    vote_rejetpop_05139.push(vote_rejetMediane);
    name_Commune_05139.push(nameCommune);
    Pourcentage_05139.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05139.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05139.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05139.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05139.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05139 = [];
const vote_lepen_05139 = [];
const vote_rejet_05139 = [];
const vote_macronpop_05139 = [];
const vote_lepenpop_05139 = [];
const vote_rejetpop_05139 = [];
const name_Commune_05139 = [];
const Pourcentage_05139 = [];
const Pourcentage_rejet_05139 = [];
const vote_gene_macron_05139 = [];
const vote_gene_lepen_05139 = [];
const vote_gene_rejet_05139 = [];

async function chartIt05139(){
    await GraphDATA05139();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05139-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05139
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05139
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05139-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05139,vote_lepen_05139,vote_rejet_05139]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05139-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05139,vote_lepenpop_05139,vote_rejetpop_05139]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05139"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05139
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05139
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05139
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05140*/
/*------------------------------------------------------------------ */
async function GraphDATA05140() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[139];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05140.push(vote_macron); 
    vote_lepen_05140.push(vote_lepen);
    vote_rejet_05140.push(vote_rejet);
    vote_macronpop_05140.push(vote_macronMediane);
    vote_lepenpop_05140.push(vote_lepenMediane);
    vote_rejetpop_05140.push(vote_rejetMediane);
    name_Commune_05140.push(nameCommune);
    Pourcentage_05140.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05140.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05140.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05140.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05140.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05140 = [];
const vote_lepen_05140 = [];
const vote_rejet_05140 = [];
const vote_macronpop_05140 = [];
const vote_lepenpop_05140 = [];
const vote_rejetpop_05140 = [];
const name_Commune_05140 = [];
const Pourcentage_05140 = [];
const Pourcentage_rejet_05140 = [];
const vote_gene_macron_05140 = [];
const vote_gene_lepen_05140 = [];
const vote_gene_rejet_05140 = [];

async function chartIt05140(){
    await GraphDATA05140();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05140-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05140
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05140
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05140-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05140,vote_lepen_05140,vote_rejet_05140]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05140-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05140,vote_lepenpop_05140,vote_rejetpop_05140]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05140"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05140
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05140
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05140
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05141*/
/*------------------------------------------------------------------ */
async function GraphDATA05141() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[140];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05141.push(vote_macron); 
    vote_lepen_05141.push(vote_lepen);
    vote_rejet_05141.push(vote_rejet);
    vote_macronpop_05141.push(vote_macronMediane);
    vote_lepenpop_05141.push(vote_lepenMediane);
    vote_rejetpop_05141.push(vote_rejetMediane);
    name_Commune_05141.push(nameCommune);
    Pourcentage_05141.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05141.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05141.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05141.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05141.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05141 = [];
const vote_lepen_05141 = [];
const vote_rejet_05141 = [];
const vote_macronpop_05141 = [];
const vote_lepenpop_05141 = [];
const vote_rejetpop_05141 = [];
const name_Commune_05141 = [];
const Pourcentage_05141 = [];
const Pourcentage_rejet_05141 = [];
const vote_gene_macron_05141 = [];
const vote_gene_lepen_05141 = [];
const vote_gene_rejet_05141 = [];

async function chartIt05141(){
    await GraphDATA05141();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05141-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05141
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05141
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05141-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05141,vote_lepen_05141,vote_rejet_05141]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05141-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05141,vote_lepenpop_05141,vote_rejetpop_05141]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05141"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05141
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05141
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05141
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05142*/
/*------------------------------------------------------------------ */
async function GraphDATA05142() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[141];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05142.push(vote_macron); 
    vote_lepen_05142.push(vote_lepen);
    vote_rejet_05142.push(vote_rejet);
    vote_macronpop_05142.push(vote_macronMediane);
    vote_lepenpop_05142.push(vote_lepenMediane);
    vote_rejetpop_05142.push(vote_rejetMediane);
    name_Commune_05142.push(nameCommune);
    Pourcentage_05142.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05142.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05142.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05142.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05142.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05142 = [];
const vote_lepen_05142 = [];
const vote_rejet_05142 = [];
const vote_macronpop_05142 = [];
const vote_lepenpop_05142 = [];
const vote_rejetpop_05142 = [];
const name_Commune_05142 = [];
const Pourcentage_05142 = [];
const Pourcentage_rejet_05142 = [];
const vote_gene_macron_05142 = [];
const vote_gene_lepen_05142 = [];
const vote_gene_rejet_05142 = [];

async function chartIt05142(){
    await GraphDATA05142();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05142-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05142
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05142
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05142-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05142,vote_lepen_05142,vote_rejet_05142]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05142-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05142,vote_lepenpop_05142,vote_rejetpop_05142]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05142"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05142
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05142
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05142
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05143*/
/*------------------------------------------------------------------ */
async function GraphDATA05143() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[142];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05143.push(vote_macron); 
    vote_lepen_05143.push(vote_lepen);
    vote_rejet_05143.push(vote_rejet);
    vote_macronpop_05143.push(vote_macronMediane);
    vote_lepenpop_05143.push(vote_lepenMediane);
    vote_rejetpop_05143.push(vote_rejetMediane);
    name_Commune_05143.push(nameCommune);
    Pourcentage_05143.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05143.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05143.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05143.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05143.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05143 = [];
const vote_lepen_05143 = [];
const vote_rejet_05143 = [];
const vote_macronpop_05143 = [];
const vote_lepenpop_05143 = [];
const vote_rejetpop_05143 = [];
const name_Commune_05143 = [];
const Pourcentage_05143 = [];
const Pourcentage_rejet_05143 = [];
const vote_gene_macron_05143 = [];
const vote_gene_lepen_05143 = [];
const vote_gene_rejet_05143 = [];

async function chartIt05143(){
    await GraphDATA05143();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05143-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05143
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05143
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05143-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05143,vote_lepen_05143,vote_rejet_05143]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05143-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05143,vote_lepenpop_05143,vote_rejetpop_05143]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05143"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05143
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05143
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05143
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05144*/
/*------------------------------------------------------------------ */
async function GraphDATA05144() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[143];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05144.push(vote_macron); 
    vote_lepen_05144.push(vote_lepen);
    vote_rejet_05144.push(vote_rejet);
    vote_macronpop_05144.push(vote_macronMediane);
    vote_lepenpop_05144.push(vote_lepenMediane);
    vote_rejetpop_05144.push(vote_rejetMediane);
    name_Commune_05144.push(nameCommune);
    Pourcentage_05144.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05144.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05144.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05144.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05144.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05144 = [];
const vote_lepen_05144 = [];
const vote_rejet_05144 = [];
const vote_macronpop_05144 = [];
const vote_lepenpop_05144 = [];
const vote_rejetpop_05144 = [];
const name_Commune_05144 = [];
const Pourcentage_05144 = [];
const Pourcentage_rejet_05144 = [];
const vote_gene_macron_05144 = [];
const vote_gene_lepen_05144 = [];
const vote_gene_rejet_05144 = [];

async function chartIt05144(){
    await GraphDATA05144();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05144-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05144
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05144
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05144-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05144,vote_lepen_05144,vote_rejet_05144]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05144-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05144,vote_lepenpop_05144,vote_rejetpop_05144]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05144"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05144
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05144
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05144
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05145*/
/*------------------------------------------------------------------ */
async function GraphDATA05145() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[144];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05145.push(vote_macron); 
    vote_lepen_05145.push(vote_lepen);
    vote_rejet_05145.push(vote_rejet);
    vote_macronpop_05145.push(vote_macronMediane);
    vote_lepenpop_05145.push(vote_lepenMediane);
    vote_rejetpop_05145.push(vote_rejetMediane);
    name_Commune_05145.push(nameCommune);
    Pourcentage_05145.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05145.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05145.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05145.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05145.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05145 = [];
const vote_lepen_05145 = [];
const vote_rejet_05145 = [];
const vote_macronpop_05145 = [];
const vote_lepenpop_05145 = [];
const vote_rejetpop_05145 = [];
const name_Commune_05145 = [];
const Pourcentage_05145 = [];
const Pourcentage_rejet_05145 = [];
const vote_gene_macron_05145 = [];
const vote_gene_lepen_05145 = [];
const vote_gene_rejet_05145 = [];

async function chartIt05145(){
    await GraphDATA05145();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05145-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05145
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05145
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05145-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05145,vote_lepen_05145,vote_rejet_05145]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05145-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05145,vote_lepenpop_05145,vote_rejetpop_05145]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05145"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05145
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05145
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05145
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05146*/
/*------------------------------------------------------------------ */
async function GraphDATA05146() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[145];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05146.push(vote_macron); 
    vote_lepen_05146.push(vote_lepen);
    vote_rejet_05146.push(vote_rejet);
    vote_macronpop_05146.push(vote_macronMediane);
    vote_lepenpop_05146.push(vote_lepenMediane);
    vote_rejetpop_05146.push(vote_rejetMediane);
    name_Commune_05146.push(nameCommune);
    Pourcentage_05146.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05146.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05146.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05146.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05146.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05146 = [];
const vote_lepen_05146 = [];
const vote_rejet_05146 = [];
const vote_macronpop_05146 = [];
const vote_lepenpop_05146 = [];
const vote_rejetpop_05146 = [];
const name_Commune_05146 = [];
const Pourcentage_05146 = [];
const Pourcentage_rejet_05146 = [];
const vote_gene_macron_05146 = [];
const vote_gene_lepen_05146 = [];
const vote_gene_rejet_05146 = [];

async function chartIt05146(){
    await GraphDATA05146();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05146-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05146
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05146
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05146-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05146,vote_lepen_05146,vote_rejet_05146]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05146-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05146,vote_lepenpop_05146,vote_rejetpop_05146]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05146"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05146
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05146
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05146
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05147*/
/*------------------------------------------------------------------ */
async function GraphDATA05147() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[146];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05147.push(vote_macron); 
    vote_lepen_05147.push(vote_lepen);
    vote_rejet_05147.push(vote_rejet);
    vote_macronpop_05147.push(vote_macronMediane);
    vote_lepenpop_05147.push(vote_lepenMediane);
    vote_rejetpop_05147.push(vote_rejetMediane);
    name_Commune_05147.push(nameCommune);
    Pourcentage_05147.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05147.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05147.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05147.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05147.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05147 = [];
const vote_lepen_05147 = [];
const vote_rejet_05147 = [];
const vote_macronpop_05147 = [];
const vote_lepenpop_05147 = [];
const vote_rejetpop_05147 = [];
const name_Commune_05147 = [];
const Pourcentage_05147 = [];
const Pourcentage_rejet_05147 = [];
const vote_gene_macron_05147 = [];
const vote_gene_lepen_05147 = [];
const vote_gene_rejet_05147 = [];

async function chartIt05147(){
    await GraphDATA05147();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05147-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05147
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05147
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05147-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05147,vote_lepen_05147,vote_rejet_05147]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05147-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05147,vote_lepenpop_05147,vote_rejetpop_05147]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05147"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05147
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05147
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05147
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05148*/
/*------------------------------------------------------------------ */
async function GraphDATA05148() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[147];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05148.push(vote_macron); 
    vote_lepen_05148.push(vote_lepen);
    vote_rejet_05148.push(vote_rejet);
    vote_macronpop_05148.push(vote_macronMediane);
    vote_lepenpop_05148.push(vote_lepenMediane);
    vote_rejetpop_05148.push(vote_rejetMediane);
    name_Commune_05148.push(nameCommune);
    Pourcentage_05148.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05148.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05148.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05148.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05148.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05148 = [];
const vote_lepen_05148 = [];
const vote_rejet_05148 = [];
const vote_macronpop_05148 = [];
const vote_lepenpop_05148 = [];
const vote_rejetpop_05148 = [];
const name_Commune_05148 = [];
const Pourcentage_05148 = [];
const Pourcentage_rejet_05148 = [];
const vote_gene_macron_05148 = [];
const vote_gene_lepen_05148 = [];
const vote_gene_rejet_05148 = [];

async function chartIt05148(){
    await GraphDATA05148();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05148-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05148
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05148
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05148-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05148,vote_lepen_05148,vote_rejet_05148]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05148-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05148,vote_lepenpop_05148,vote_rejetpop_05148]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05148"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05148
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05148
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05148
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05149*/
/*------------------------------------------------------------------ */
async function GraphDATA05149() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[148];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05149.push(vote_macron); 
    vote_lepen_05149.push(vote_lepen);
    vote_rejet_05149.push(vote_rejet);
    vote_macronpop_05149.push(vote_macronMediane);
    vote_lepenpop_05149.push(vote_lepenMediane);
    vote_rejetpop_05149.push(vote_rejetMediane);
    name_Commune_05149.push(nameCommune);
    Pourcentage_05149.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05149.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05149.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05149.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05149.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05149 = [];
const vote_lepen_05149 = [];
const vote_rejet_05149 = [];
const vote_macronpop_05149 = [];
const vote_lepenpop_05149 = [];
const vote_rejetpop_05149 = [];
const name_Commune_05149 = [];
const Pourcentage_05149 = [];
const Pourcentage_rejet_05149 = [];
const vote_gene_macron_05149 = [];
const vote_gene_lepen_05149 = [];
const vote_gene_rejet_05149 = [];

async function chartIt05149(){
    await GraphDATA05149();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05149-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05149
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05149
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05149-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05149,vote_lepen_05149,vote_rejet_05149]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05149-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05149,vote_lepenpop_05149,vote_rejetpop_05149]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05149"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05149
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05149
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05149
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05150*/
/*------------------------------------------------------------------ */
async function GraphDATA05150() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[149];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05150.push(vote_macron); 
    vote_lepen_05150.push(vote_lepen);
    vote_rejet_05150.push(vote_rejet);
    vote_macronpop_05150.push(vote_macronMediane);
    vote_lepenpop_05150.push(vote_lepenMediane);
    vote_rejetpop_05150.push(vote_rejetMediane);
    name_Commune_05150.push(nameCommune);
    Pourcentage_05150.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05150.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05150.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05150.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05150.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05150 = [];
const vote_lepen_05150 = [];
const vote_rejet_05150 = [];
const vote_macronpop_05150 = [];
const vote_lepenpop_05150 = [];
const vote_rejetpop_05150 = [];
const name_Commune_05150 = [];
const Pourcentage_05150 = [];
const Pourcentage_rejet_05150 = [];
const vote_gene_macron_05150 = [];
const vote_gene_lepen_05150 = [];
const vote_gene_rejet_05150 = [];

async function chartIt05150(){
    await GraphDATA05150();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05150-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05150
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05150
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05150-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05150,vote_lepen_05150,vote_rejet_05150]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05150-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05150,vote_lepenpop_05150,vote_rejetpop_05150]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05150"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05150
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05150
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05150
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05151*/
/*------------------------------------------------------------------ */
async function GraphDATA05151() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[150];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05151.push(vote_macron); 
    vote_lepen_05151.push(vote_lepen);
    vote_rejet_05151.push(vote_rejet);
    vote_macronpop_05151.push(vote_macronMediane);
    vote_lepenpop_05151.push(vote_lepenMediane);
    vote_rejetpop_05151.push(vote_rejetMediane);
    name_Commune_05151.push(nameCommune);
    Pourcentage_05151.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05151.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05151.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05151.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05151.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05151 = [];
const vote_lepen_05151 = [];
const vote_rejet_05151 = [];
const vote_macronpop_05151 = [];
const vote_lepenpop_05151 = [];
const vote_rejetpop_05151 = [];
const name_Commune_05151 = [];
const Pourcentage_05151 = [];
const Pourcentage_rejet_05151 = [];
const vote_gene_macron_05151 = [];
const vote_gene_lepen_05151 = [];
const vote_gene_rejet_05151 = [];

async function chartIt05151(){
    await GraphDATA05151();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05151-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05151
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05151
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05151-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05151,vote_lepen_05151,vote_rejet_05151]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05151-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05151,vote_lepenpop_05151,vote_rejetpop_05151]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05151"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05151
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05151
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05151
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05152*/
/*------------------------------------------------------------------ */
async function GraphDATA05152() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[151];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05152.push(vote_macron); 
    vote_lepen_05152.push(vote_lepen);
    vote_rejet_05152.push(vote_rejet);
    vote_macronpop_05152.push(vote_macronMediane);
    vote_lepenpop_05152.push(vote_lepenMediane);
    vote_rejetpop_05152.push(vote_rejetMediane);
    name_Commune_05152.push(nameCommune);
    Pourcentage_05152.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05152.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05152.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05152.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05152.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05152 = [];
const vote_lepen_05152 = [];
const vote_rejet_05152 = [];
const vote_macronpop_05152 = [];
const vote_lepenpop_05152 = [];
const vote_rejetpop_05152 = [];
const name_Commune_05152 = [];
const Pourcentage_05152 = [];
const Pourcentage_rejet_05152 = [];
const vote_gene_macron_05152 = [];
const vote_gene_lepen_05152 = [];
const vote_gene_rejet_05152 = [];

async function chartIt05152(){
    await GraphDATA05152();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05152-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05152
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05152
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05152-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05152,vote_lepen_05152,vote_rejet_05152]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05152-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05152,vote_lepenpop_05152,vote_rejetpop_05152]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05152"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05152
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05152
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05152
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05153*/
/*------------------------------------------------------------------ */
async function GraphDATA05153() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[152];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05153.push(vote_macron); 
    vote_lepen_05153.push(vote_lepen);
    vote_rejet_05153.push(vote_rejet);
    vote_macronpop_05153.push(vote_macronMediane);
    vote_lepenpop_05153.push(vote_lepenMediane);
    vote_rejetpop_05153.push(vote_rejetMediane);
    name_Commune_05153.push(nameCommune);
    Pourcentage_05153.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05153.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05153.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05153.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05153.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05153 = [];
const vote_lepen_05153 = [];
const vote_rejet_05153 = [];
const vote_macronpop_05153 = [];
const vote_lepenpop_05153 = [];
const vote_rejetpop_05153 = [];
const name_Commune_05153 = [];
const Pourcentage_05153 = [];
const Pourcentage_rejet_05153 = [];
const vote_gene_macron_05153 = [];
const vote_gene_lepen_05153 = [];
const vote_gene_rejet_05153 = [];

async function chartIt05153(){
    await GraphDATA05153();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05153-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05153
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05153
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05153-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05153,vote_lepen_05153,vote_rejet_05153]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05153-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05153,vote_lepenpop_05153,vote_rejetpop_05153]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05153"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05153
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05153
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05153
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05154*/
/*------------------------------------------------------------------ */
async function GraphDATA05154() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[153];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05154.push(vote_macron); 
    vote_lepen_05154.push(vote_lepen);
    vote_rejet_05154.push(vote_rejet);
    vote_macronpop_05154.push(vote_macronMediane);
    vote_lepenpop_05154.push(vote_lepenMediane);
    vote_rejetpop_05154.push(vote_rejetMediane);
    name_Commune_05154.push(nameCommune);
    Pourcentage_05154.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05154.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05154.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05154.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05154.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05154 = [];
const vote_lepen_05154 = [];
const vote_rejet_05154 = [];
const vote_macronpop_05154 = [];
const vote_lepenpop_05154 = [];
const vote_rejetpop_05154 = [];
const name_Commune_05154 = [];
const Pourcentage_05154 = [];
const Pourcentage_rejet_05154 = [];
const vote_gene_macron_05154 = [];
const vote_gene_lepen_05154 = [];
const vote_gene_rejet_05154 = [];

async function chartIt05154(){
    await GraphDATA05154();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05154-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05154
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05154
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05154-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05154,vote_lepen_05154,vote_rejet_05154]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05154-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05154,vote_lepenpop_05154,vote_rejetpop_05154]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05154"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05154
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05154
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05154
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05155*/
/*------------------------------------------------------------------ */
async function GraphDATA05155() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[154];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05155.push(vote_macron); 
    vote_lepen_05155.push(vote_lepen);
    vote_rejet_05155.push(vote_rejet);
    vote_macronpop_05155.push(vote_macronMediane);
    vote_lepenpop_05155.push(vote_lepenMediane);
    vote_rejetpop_05155.push(vote_rejetMediane);
    name_Commune_05155.push(nameCommune);
    Pourcentage_05155.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05155.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05155.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05155.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05155.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05155 = [];
const vote_lepen_05155 = [];
const vote_rejet_05155 = [];
const vote_macronpop_05155 = [];
const vote_lepenpop_05155 = [];
const vote_rejetpop_05155 = [];
const name_Commune_05155 = [];
const Pourcentage_05155 = [];
const Pourcentage_rejet_05155 = [];
const vote_gene_macron_05155 = [];
const vote_gene_lepen_05155 = [];
const vote_gene_rejet_05155 = [];

async function chartIt05155(){
    await GraphDATA05155();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05155-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05155
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05155
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05155-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05155,vote_lepen_05155,vote_rejet_05155]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05155-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05155,vote_lepenpop_05155,vote_rejetpop_05155]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05155"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05155
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05155
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05155
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05156*/
/*------------------------------------------------------------------ */
async function GraphDATA05156() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[155];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05156.push(vote_macron); 
    vote_lepen_05156.push(vote_lepen);
    vote_rejet_05156.push(vote_rejet);
    vote_macronpop_05156.push(vote_macronMediane);
    vote_lepenpop_05156.push(vote_lepenMediane);
    vote_rejetpop_05156.push(vote_rejetMediane);
    name_Commune_05156.push(nameCommune);
    Pourcentage_05156.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05156.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05156.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05156.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05156.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05156 = [];
const vote_lepen_05156 = [];
const vote_rejet_05156 = [];
const vote_macronpop_05156 = [];
const vote_lepenpop_05156 = [];
const vote_rejetpop_05156 = [];
const name_Commune_05156 = [];
const Pourcentage_05156 = [];
const Pourcentage_rejet_05156 = [];
const vote_gene_macron_05156 = [];
const vote_gene_lepen_05156 = [];
const vote_gene_rejet_05156 = [];

async function chartIt05156(){
    await GraphDATA05156();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05156-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05156
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05156
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05156-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05156,vote_lepen_05156,vote_rejet_05156]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05156-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05156,vote_lepenpop_05156,vote_rejetpop_05156]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05156"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05156
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05156
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05156
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05157*/
/*------------------------------------------------------------------ */
async function GraphDATA05157() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[156];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05157.push(vote_macron); 
    vote_lepen_05157.push(vote_lepen);
    vote_rejet_05157.push(vote_rejet);
    vote_macronpop_05157.push(vote_macronMediane);
    vote_lepenpop_05157.push(vote_lepenMediane);
    vote_rejetpop_05157.push(vote_rejetMediane);
    name_Commune_05157.push(nameCommune);
    Pourcentage_05157.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05157.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05157.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05157.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05157.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05157 = [];
const vote_lepen_05157 = [];
const vote_rejet_05157 = [];
const vote_macronpop_05157 = [];
const vote_lepenpop_05157 = [];
const vote_rejetpop_05157 = [];
const name_Commune_05157 = [];
const Pourcentage_05157 = [];
const Pourcentage_rejet_05157 = [];
const vote_gene_macron_05157 = [];
const vote_gene_lepen_05157 = [];
const vote_gene_rejet_05157 = [];

async function chartIt05157(){
    await GraphDATA05157();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05157-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05157
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05157
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05157-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05157,vote_lepen_05157,vote_rejet_05157]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05157-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05157,vote_lepenpop_05157,vote_rejetpop_05157]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05157"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05157
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05157
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05157
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05158*/
/*------------------------------------------------------------------ */
async function GraphDATA05158() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[157];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05158.push(vote_macron); 
    vote_lepen_05158.push(vote_lepen);
    vote_rejet_05158.push(vote_rejet);
    vote_macronpop_05158.push(vote_macronMediane);
    vote_lepenpop_05158.push(vote_lepenMediane);
    vote_rejetpop_05158.push(vote_rejetMediane);
    name_Commune_05158.push(nameCommune);
    Pourcentage_05158.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05158.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05158.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05158.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05158.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05158 = [];
const vote_lepen_05158 = [];
const vote_rejet_05158 = [];
const vote_macronpop_05158 = [];
const vote_lepenpop_05158 = [];
const vote_rejetpop_05158 = [];
const name_Commune_05158 = [];
const Pourcentage_05158 = [];
const Pourcentage_rejet_05158 = [];
const vote_gene_macron_05158 = [];
const vote_gene_lepen_05158 = [];
const vote_gene_rejet_05158 = [];

async function chartIt05158(){
    await GraphDATA05158();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05158-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05158
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05158
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05158-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05158,vote_lepen_05158,vote_rejet_05158]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05158-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05158,vote_lepenpop_05158,vote_rejetpop_05158]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05158"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05158
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05158
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05158
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05159*/
/*------------------------------------------------------------------ */
async function GraphDATA05159() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[158];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05159.push(vote_macron); 
    vote_lepen_05159.push(vote_lepen);
    vote_rejet_05159.push(vote_rejet);
    vote_macronpop_05159.push(vote_macronMediane);
    vote_lepenpop_05159.push(vote_lepenMediane);
    vote_rejetpop_05159.push(vote_rejetMediane);
    name_Commune_05159.push(nameCommune);
    Pourcentage_05159.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05159.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05159.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05159.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05159.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05159 = [];
const vote_lepen_05159 = [];
const vote_rejet_05159 = [];
const vote_macronpop_05159 = [];
const vote_lepenpop_05159 = [];
const vote_rejetpop_05159 = [];
const name_Commune_05159 = [];
const Pourcentage_05159 = [];
const Pourcentage_rejet_05159 = [];
const vote_gene_macron_05159 = [];
const vote_gene_lepen_05159 = [];
const vote_gene_rejet_05159 = [];

async function chartIt05159(){
    await GraphDATA05159();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05159-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05159
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05159
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05159-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05159,vote_lepen_05159,vote_rejet_05159]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05159-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05159,vote_lepenpop_05159,vote_rejetpop_05159]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05159"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05159
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05159
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05159
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05160*/
/*------------------------------------------------------------------ */
async function GraphDATA05160() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[159];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05160.push(vote_macron); 
    vote_lepen_05160.push(vote_lepen);
    vote_rejet_05160.push(vote_rejet);
    vote_macronpop_05160.push(vote_macronMediane);
    vote_lepenpop_05160.push(vote_lepenMediane);
    vote_rejetpop_05160.push(vote_rejetMediane);
    name_Commune_05160.push(nameCommune);
    Pourcentage_05160.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05160.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05160.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05160.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05160.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05160 = [];
const vote_lepen_05160 = [];
const vote_rejet_05160 = [];
const vote_macronpop_05160 = [];
const vote_lepenpop_05160 = [];
const vote_rejetpop_05160 = [];
const name_Commune_05160 = [];
const Pourcentage_05160 = [];
const Pourcentage_rejet_05160 = [];
const vote_gene_macron_05160 = [];
const vote_gene_lepen_05160 = [];
const vote_gene_rejet_05160 = [];

async function chartIt05160(){
    await GraphDATA05160();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05160-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05160
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05160
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05160-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05160,vote_lepen_05160,vote_rejet_05160]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05160-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05160,vote_lepenpop_05160,vote_rejetpop_05160]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05160"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05160
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05160
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05160
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05161*/
/*------------------------------------------------------------------ */
async function GraphDATA05161() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[160];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05161.push(vote_macron); 
    vote_lepen_05161.push(vote_lepen);
    vote_rejet_05161.push(vote_rejet);
    vote_macronpop_05161.push(vote_macronMediane);
    vote_lepenpop_05161.push(vote_lepenMediane);
    vote_rejetpop_05161.push(vote_rejetMediane);
    name_Commune_05161.push(nameCommune);
    Pourcentage_05161.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05161.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05161.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05161.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05161.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05161 = [];
const vote_lepen_05161 = [];
const vote_rejet_05161 = [];
const vote_macronpop_05161 = [];
const vote_lepenpop_05161 = [];
const vote_rejetpop_05161 = [];
const name_Commune_05161 = [];
const Pourcentage_05161 = [];
const Pourcentage_rejet_05161 = [];
const vote_gene_macron_05161 = [];
const vote_gene_lepen_05161 = [];
const vote_gene_rejet_05161 = [];

async function chartIt05161(){
    await GraphDATA05161();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05161-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05161
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05161
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05161-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05161,vote_lepen_05161,vote_rejet_05161]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05161-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05161,vote_lepenpop_05161,vote_rejetpop_05161]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05161"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05161
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05161
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05161
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 05162*/
/*------------------------------------------------------------------ */
async function GraphDATA05162() {
    const response = await fetch('../Departement05/Json/Data_dep05.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[161];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_05162.push(vote_macron); 
    vote_lepen_05162.push(vote_lepen);
    vote_rejet_05162.push(vote_rejet);
    vote_macronpop_05162.push(vote_macronMediane);
    vote_lepenpop_05162.push(vote_lepenMediane);
    vote_rejetpop_05162.push(vote_rejetMediane);
    name_Commune_05162.push(nameCommune);
    Pourcentage_05162.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_05162.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_05162.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_05162.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_05162.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_05162 = [];
const vote_lepen_05162 = [];
const vote_rejet_05162 = [];
const vote_macronpop_05162 = [];
const vote_lepenpop_05162 = [];
const vote_rejetpop_05162 = [];
const name_Commune_05162 = [];
const Pourcentage_05162 = [];
const Pourcentage_rejet_05162 = [];
const vote_gene_macron_05162 = [];
const vote_gene_lepen_05162 = [];
const vote_gene_rejet_05162 = [];

async function chartIt05162(){
    await GraphDATA05162();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_05162-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_05162
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_05162
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_05162-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_05162,vote_lepen_05162,vote_rejet_05162]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_05162-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_05162,vote_lepenpop_05162,vote_rejetpop_05162]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_05162"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_05162
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_05162
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_05162
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
