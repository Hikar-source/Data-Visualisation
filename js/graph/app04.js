/********************************************************************** */
/*JS GRAPHIQUE FICHIER DATA */
/********************************************************************** */
chartIt01201();
chartIt01202();
chartIt01203();
chartIt01204();
chartIt01205();
chartIt01206();
chartIt01207();
chartIt01208();
chartIt01209();
chartIt01210();
chartIt01211();
chartIt01212();
chartIt01213();
chartIt01214();
chartIt01215();
chartIt01216();
chartIt01217();
chartIt01218();
chartIt01219();
chartIt01220();
chartIt01221();
chartIt01222();
chartIt01223();
chartIt01224();
chartIt01225();
chartIt01226();
chartIt01227();
chartIt01228();
chartIt01229();
chartIt01230();
chartIt01231();
chartIt01232();
chartIt01233();
chartIt01234();
chartIt01235();
chartIt01236();
chartIt01237();
chartIt01238();
chartIt01239();
chartIt01240();
chartIt01241();
chartIt01242();
chartIt01243();
chartIt01244();
chartIt01245();
chartIt01246();
chartIt01247();
chartIt01248();
chartIt01249();
chartIt01250();
chartIt01251();
chartIt01252();
chartIt01253();
chartIt01254();
chartIt01255();
chartIt01256();
chartIt01257();
chartIt01258();
chartIt01259();
chartIt01260();
chartIt01261();
chartIt01262();
chartIt01263();
chartIt01264();
chartIt01265();
chartIt01266();
chartIt01267();
chartIt01268();
chartIt01269();
chartIt01270();
chartIt01271();
chartIt01272();
chartIt01273();
chartIt01274();
chartIt01275();
chartIt01276();
chartIt01277();
chartIt01278();
chartIt01279();
chartIt01280();
chartIt01281();
chartIt01282();
chartIt01283();
chartIt01284();
chartIt01285();
chartIt01286();
chartIt01287();
chartIt01288();
chartIt01289();
chartIt01290();
chartIt01291();
chartIt01292();
chartIt01293();
chartIt01294();
chartIt01295();
chartIt01296();
chartIt01297();
chartIt01298();
chartIt01299();
/*------------------------------------------------------------------ */
/*COMMUNE 01201*/
/*------------------------------------------------------------------ */
async function GraphDATA01201() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[200];
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
    vote_macron_01201.push(vote_macron); 
    vote_lepen_01201.push(vote_lepen);
    vote_rejet_01201.push(vote_rejet);
    vote_macronpop_01201.push(vote_macronMediane);
    vote_lepenpop_01201.push(vote_lepenMediane);
    vote_rejetpop_01201.push(vote_rejetMediane);
    name_Commune_01201.push(nameCommune);
    Pourcentage_01201.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01201.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01201.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01201.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01201.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01201 = [];
const vote_lepen_01201 = [];
const vote_rejet_01201 = [];
const vote_macronpop_01201 = [];
const vote_lepenpop_01201 = [];
const vote_rejetpop_01201 = [];
const name_Commune_01201 = [];
const Pourcentage_01201 = [];
const Pourcentage_rejet_01201 = [];
const vote_gene_macron_01201 = [];
const vote_gene_lepen_01201 = [];
const vote_gene_rejet_01201 = [];

async function chartIt01201(){
    await GraphDATA01201();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01201-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01201
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01201
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01201-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01201,vote_lepen_01201,vote_rejet_01201]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01201-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01201,vote_lepenpop_01201,vote_rejetpop_01201]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01201"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01201
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01201
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01201
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
/*COMMUNE 01202*/
/*------------------------------------------------------------------ */
async function GraphDATA01202() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[201];
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
    vote_macron_01202.push(vote_macron); 
    vote_lepen_01202.push(vote_lepen);
    vote_rejet_01202.push(vote_rejet);
    vote_macronpop_01202.push(vote_macronMediane);
    vote_lepenpop_01202.push(vote_lepenMediane);
    vote_rejetpop_01202.push(vote_rejetMediane);
    name_Commune_01202.push(nameCommune);
    Pourcentage_01202.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01202.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01202.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01202.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01202.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01202 = [];
const vote_lepen_01202 = [];
const vote_rejet_01202 = [];
const vote_macronpop_01202 = [];
const vote_lepenpop_01202 = [];
const vote_rejetpop_01202 = [];
const name_Commune_01202 = [];
const Pourcentage_01202 = [];
const Pourcentage_rejet_01202 = [];
const vote_gene_macron_01202 = [];
const vote_gene_lepen_01202 = [];
const vote_gene_rejet_01202 = [];

async function chartIt01202(){
    await GraphDATA01202();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01202-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01202
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01202
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01202-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01202,vote_lepen_01202,vote_rejet_01202]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01202-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01202,vote_lepenpop_01202,vote_rejetpop_01202]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01202"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01202
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01202
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01202
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
/*COMMUNE 01203*/
/*------------------------------------------------------------------ */
async function GraphDATA01203() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[202];
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
    vote_macron_01203.push(vote_macron); 
    vote_lepen_01203.push(vote_lepen);
    vote_rejet_01203.push(vote_rejet);
    vote_macronpop_01203.push(vote_macronMediane);
    vote_lepenpop_01203.push(vote_lepenMediane);
    vote_rejetpop_01203.push(vote_rejetMediane);
    name_Commune_01203.push(nameCommune);
    Pourcentage_01203.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01203.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01203.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01203.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01203.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01203 = [];
const vote_lepen_01203 = [];
const vote_rejet_01203 = [];
const vote_macronpop_01203 = [];
const vote_lepenpop_01203 = [];
const vote_rejetpop_01203 = [];
const name_Commune_01203 = [];
const Pourcentage_01203 = [];
const Pourcentage_rejet_01203 = [];
const vote_gene_macron_01203 = [];
const vote_gene_lepen_01203 = [];
const vote_gene_rejet_01203 = [];

async function chartIt01203(){
    await GraphDATA01203();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01203-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01203
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01203
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01203-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01203,vote_lepen_01203,vote_rejet_01203]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01203-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01203,vote_lepenpop_01203,vote_rejetpop_01203]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01203"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01203
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01203
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01203
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
/*COMMUNE 01204*/
/*------------------------------------------------------------------ */
async function GraphDATA01204() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[203];
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
    vote_macron_01204.push(vote_macron); 
    vote_lepen_01204.push(vote_lepen);
    vote_rejet_01204.push(vote_rejet);
    vote_macronpop_01204.push(vote_macronMediane);
    vote_lepenpop_01204.push(vote_lepenMediane);
    vote_rejetpop_01204.push(vote_rejetMediane);
    name_Commune_01204.push(nameCommune);
    Pourcentage_01204.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01204.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01204.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01204.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01204.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01204 = [];
const vote_lepen_01204 = [];
const vote_rejet_01204 = [];
const vote_macronpop_01204 = [];
const vote_lepenpop_01204 = [];
const vote_rejetpop_01204 = [];
const name_Commune_01204 = [];
const Pourcentage_01204 = [];
const Pourcentage_rejet_01204 = [];
const vote_gene_macron_01204 = [];
const vote_gene_lepen_01204 = [];
const vote_gene_rejet_01204 = [];

async function chartIt01204(){
    await GraphDATA01204();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01204-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01204
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01204
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01204-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01204,vote_lepen_01204,vote_rejet_01204]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01204-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01204,vote_lepenpop_01204,vote_rejetpop_01204]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01204"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01204
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01204
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01204
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
/*COMMUNE 01205*/
/*------------------------------------------------------------------ */
async function GraphDATA01205() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[204];
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
    vote_macron_01205.push(vote_macron); 
    vote_lepen_01205.push(vote_lepen);
    vote_rejet_01205.push(vote_rejet);
    vote_macronpop_01205.push(vote_macronMediane);
    vote_lepenpop_01205.push(vote_lepenMediane);
    vote_rejetpop_01205.push(vote_rejetMediane);
    name_Commune_01205.push(nameCommune);
    Pourcentage_01205.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01205.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01205.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01205.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01205.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01205 = [];
const vote_lepen_01205 = [];
const vote_rejet_01205 = [];
const vote_macronpop_01205 = [];
const vote_lepenpop_01205 = [];
const vote_rejetpop_01205 = [];
const name_Commune_01205 = [];
const Pourcentage_01205 = [];
const Pourcentage_rejet_01205 = [];
const vote_gene_macron_01205 = [];
const vote_gene_lepen_01205 = [];
const vote_gene_rejet_01205 = [];

async function chartIt01205(){
    await GraphDATA01205();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01205-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01205
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01205
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01205-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01205,vote_lepen_01205,vote_rejet_01205]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01205-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01205,vote_lepenpop_01205,vote_rejetpop_01205]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01205"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01205
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01205
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01205
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
/*COMMUNE 01206*/
/*------------------------------------------------------------------ */
async function GraphDATA01206() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[205];
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
    vote_macron_01206.push(vote_macron); 
    vote_lepen_01206.push(vote_lepen);
    vote_rejet_01206.push(vote_rejet);
    vote_macronpop_01206.push(vote_macronMediane);
    vote_lepenpop_01206.push(vote_lepenMediane);
    vote_rejetpop_01206.push(vote_rejetMediane);
    name_Commune_01206.push(nameCommune);
    Pourcentage_01206.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01206.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01206.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01206.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01206.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01206 = [];
const vote_lepen_01206 = [];
const vote_rejet_01206 = [];
const vote_macronpop_01206 = [];
const vote_lepenpop_01206 = [];
const vote_rejetpop_01206 = [];
const name_Commune_01206 = [];
const Pourcentage_01206 = [];
const Pourcentage_rejet_01206 = [];
const vote_gene_macron_01206 = [];
const vote_gene_lepen_01206 = [];
const vote_gene_rejet_01206 = [];

async function chartIt01206(){
    await GraphDATA01206();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01206-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01206
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01206
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01206-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01206,vote_lepen_01206,vote_rejet_01206]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01206-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01206,vote_lepenpop_01206,vote_rejetpop_01206]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01206"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01206
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01206
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01206
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
/*COMMUNE 01207*/
/*------------------------------------------------------------------ */
async function GraphDATA01207() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[206];
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
    vote_macron_01207.push(vote_macron); 
    vote_lepen_01207.push(vote_lepen);
    vote_rejet_01207.push(vote_rejet);
    vote_macronpop_01207.push(vote_macronMediane);
    vote_lepenpop_01207.push(vote_lepenMediane);
    vote_rejetpop_01207.push(vote_rejetMediane);
    name_Commune_01207.push(nameCommune);
    Pourcentage_01207.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01207.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01207.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01207.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01207.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01207 = [];
const vote_lepen_01207 = [];
const vote_rejet_01207 = [];
const vote_macronpop_01207 = [];
const vote_lepenpop_01207 = [];
const vote_rejetpop_01207 = [];
const name_Commune_01207 = [];
const Pourcentage_01207 = [];
const Pourcentage_rejet_01207 = [];
const vote_gene_macron_01207 = [];
const vote_gene_lepen_01207 = [];
const vote_gene_rejet_01207 = [];

async function chartIt01207(){
    await GraphDATA01207();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01207-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01207
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01207
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01207-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01207,vote_lepen_01207,vote_rejet_01207]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01207-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01207,vote_lepenpop_01207,vote_rejetpop_01207]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01207"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01207
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01207
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01207
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
/*COMMUNE 01208*/
/*------------------------------------------------------------------ */
async function GraphDATA01208() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[207];
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
    vote_macron_01208.push(vote_macron); 
    vote_lepen_01208.push(vote_lepen);
    vote_rejet_01208.push(vote_rejet);
    vote_macronpop_01208.push(vote_macronMediane);
    vote_lepenpop_01208.push(vote_lepenMediane);
    vote_rejetpop_01208.push(vote_rejetMediane);
    name_Commune_01208.push(nameCommune);
    Pourcentage_01208.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01208.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01208.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01208.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01208.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01208 = [];
const vote_lepen_01208 = [];
const vote_rejet_01208 = [];
const vote_macronpop_01208 = [];
const vote_lepenpop_01208 = [];
const vote_rejetpop_01208 = [];
const name_Commune_01208 = [];
const Pourcentage_01208 = [];
const Pourcentage_rejet_01208 = [];
const vote_gene_macron_01208 = [];
const vote_gene_lepen_01208 = [];
const vote_gene_rejet_01208 = [];

async function chartIt01208(){
    await GraphDATA01208();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01208-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01208
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01208
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01208-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01208,vote_lepen_01208,vote_rejet_01208]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01208-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01208,vote_lepenpop_01208,vote_rejetpop_01208]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01208"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01208
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01208
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01208
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
/*COMMUNE 01209*/
/*------------------------------------------------------------------ */
async function GraphDATA01209() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[208];
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
    vote_macron_01209.push(vote_macron); 
    vote_lepen_01209.push(vote_lepen);
    vote_rejet_01209.push(vote_rejet);
    vote_macronpop_01209.push(vote_macronMediane);
    vote_lepenpop_01209.push(vote_lepenMediane);
    vote_rejetpop_01209.push(vote_rejetMediane);
    name_Commune_01209.push(nameCommune);
    Pourcentage_01209.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01209.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01209.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01209.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01209.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01209 = [];
const vote_lepen_01209 = [];
const vote_rejet_01209 = [];
const vote_macronpop_01209 = [];
const vote_lepenpop_01209 = [];
const vote_rejetpop_01209 = [];
const name_Commune_01209 = [];
const Pourcentage_01209 = [];
const Pourcentage_rejet_01209 = [];
const vote_gene_macron_01209 = [];
const vote_gene_lepen_01209 = [];
const vote_gene_rejet_01209 = [];

async function chartIt01209(){
    await GraphDATA01209();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01209-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01209
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01209
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01209-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01209,vote_lepen_01209,vote_rejet_01209]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01209-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01209,vote_lepenpop_01209,vote_rejetpop_01209]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01209"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01209
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01209
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01209
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
/*COMMUNE 01210*/
/*------------------------------------------------------------------ */
async function GraphDATA01210() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[209];
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
    vote_macron_01210.push(vote_macron); 
    vote_lepen_01210.push(vote_lepen);
    vote_rejet_01210.push(vote_rejet);
    vote_macronpop_01210.push(vote_macronMediane);
    vote_lepenpop_01210.push(vote_lepenMediane);
    vote_rejetpop_01210.push(vote_rejetMediane);
    name_Commune_01210.push(nameCommune);
    Pourcentage_01210.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01210.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01210.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01210.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01210.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01210 = [];
const vote_lepen_01210 = [];
const vote_rejet_01210 = [];
const vote_macronpop_01210 = [];
const vote_lepenpop_01210 = [];
const vote_rejetpop_01210 = [];
const name_Commune_01210 = [];
const Pourcentage_01210 = [];
const Pourcentage_rejet_01210 = [];
const vote_gene_macron_01210 = [];
const vote_gene_lepen_01210 = [];
const vote_gene_rejet_01210 = [];

async function chartIt01210(){
    await GraphDATA01210();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01210-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01210
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01210
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01210-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01210,vote_lepen_01210,vote_rejet_01210]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01210-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01210,vote_lepenpop_01210,vote_rejetpop_01210]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01210"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01210
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01210
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01210
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
/*COMMUNE 01211*/
/*------------------------------------------------------------------ */
async function GraphDATA01211() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[210];
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
    vote_macron_01211.push(vote_macron); 
    vote_lepen_01211.push(vote_lepen);
    vote_rejet_01211.push(vote_rejet);
    vote_macronpop_01211.push(vote_macronMediane);
    vote_lepenpop_01211.push(vote_lepenMediane);
    vote_rejetpop_01211.push(vote_rejetMediane);
    name_Commune_01211.push(nameCommune);
    Pourcentage_01211.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01211.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01211.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01211.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01211.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01211 = [];
const vote_lepen_01211 = [];
const vote_rejet_01211 = [];
const vote_macronpop_01211 = [];
const vote_lepenpop_01211 = [];
const vote_rejetpop_01211 = [];
const name_Commune_01211 = [];
const Pourcentage_01211 = [];
const Pourcentage_rejet_01211 = [];
const vote_gene_macron_01211 = [];
const vote_gene_lepen_01211 = [];
const vote_gene_rejet_01211 = [];

async function chartIt01211(){
    await GraphDATA01211();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01211-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01211
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01211
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01211-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01211,vote_lepen_01211,vote_rejet_01211]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01211-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01211,vote_lepenpop_01211,vote_rejetpop_01211]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01211"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01211
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01211
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01211
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
/*COMMUNE 01212*/
/*------------------------------------------------------------------ */
async function GraphDATA01212() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[211];
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
    vote_macron_01212.push(vote_macron); 
    vote_lepen_01212.push(vote_lepen);
    vote_rejet_01212.push(vote_rejet);
    vote_macronpop_01212.push(vote_macronMediane);
    vote_lepenpop_01212.push(vote_lepenMediane);
    vote_rejetpop_01212.push(vote_rejetMediane);
    name_Commune_01212.push(nameCommune);
    Pourcentage_01212.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01212.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01212.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01212.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01212.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01212 = [];
const vote_lepen_01212 = [];
const vote_rejet_01212 = [];
const vote_macronpop_01212 = [];
const vote_lepenpop_01212 = [];
const vote_rejetpop_01212 = [];
const name_Commune_01212 = [];
const Pourcentage_01212 = [];
const Pourcentage_rejet_01212 = [];
const vote_gene_macron_01212 = [];
const vote_gene_lepen_01212 = [];
const vote_gene_rejet_01212 = [];

async function chartIt01212(){
    await GraphDATA01212();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01212-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01212
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01212
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01212-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01212,vote_lepen_01212,vote_rejet_01212]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01212-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01212,vote_lepenpop_01212,vote_rejetpop_01212]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01212"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01212
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01212
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01212
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
/*COMMUNE 01213*/
/*------------------------------------------------------------------ */
async function GraphDATA01213() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[212];
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
    vote_macron_01213.push(vote_macron); 
    vote_lepen_01213.push(vote_lepen);
    vote_rejet_01213.push(vote_rejet);
    vote_macronpop_01213.push(vote_macronMediane);
    vote_lepenpop_01213.push(vote_lepenMediane);
    vote_rejetpop_01213.push(vote_rejetMediane);
    name_Commune_01213.push(nameCommune);
    Pourcentage_01213.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01213.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01213.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01213.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01213.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01213 = [];
const vote_lepen_01213 = [];
const vote_rejet_01213 = [];
const vote_macronpop_01213 = [];
const vote_lepenpop_01213 = [];
const vote_rejetpop_01213 = [];
const name_Commune_01213 = [];
const Pourcentage_01213 = [];
const Pourcentage_rejet_01213 = [];
const vote_gene_macron_01213 = [];
const vote_gene_lepen_01213 = [];
const vote_gene_rejet_01213 = [];

async function chartIt01213(){
    await GraphDATA01213();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01213-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01213
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01213
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01213-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01213,vote_lepen_01213,vote_rejet_01213]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01213-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01213,vote_lepenpop_01213,vote_rejetpop_01213]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01213"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01213
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01213
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01213
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
/*COMMUNE 01214*/
/*------------------------------------------------------------------ */
async function GraphDATA01214() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[213];
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
    vote_macron_01214.push(vote_macron); 
    vote_lepen_01214.push(vote_lepen);
    vote_rejet_01214.push(vote_rejet);
    vote_macronpop_01214.push(vote_macronMediane);
    vote_lepenpop_01214.push(vote_lepenMediane);
    vote_rejetpop_01214.push(vote_rejetMediane);
    name_Commune_01214.push(nameCommune);
    Pourcentage_01214.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01214.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01214.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01214.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01214.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01214 = [];
const vote_lepen_01214 = [];
const vote_rejet_01214 = [];
const vote_macronpop_01214 = [];
const vote_lepenpop_01214 = [];
const vote_rejetpop_01214 = [];
const name_Commune_01214 = [];
const Pourcentage_01214 = [];
const Pourcentage_rejet_01214 = [];
const vote_gene_macron_01214 = [];
const vote_gene_lepen_01214 = [];
const vote_gene_rejet_01214 = [];

async function chartIt01214(){
    await GraphDATA01214();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01214-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01214
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01214
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01214-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01214,vote_lepen_01214,vote_rejet_01214]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01214-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01214,vote_lepenpop_01214,vote_rejetpop_01214]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01214"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01214
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01214
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01214
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
/*COMMUNE 01215*/
/*------------------------------------------------------------------ */
async function GraphDATA01215() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[214];
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
    vote_macron_01215.push(vote_macron); 
    vote_lepen_01215.push(vote_lepen);
    vote_rejet_01215.push(vote_rejet);
    vote_macronpop_01215.push(vote_macronMediane);
    vote_lepenpop_01215.push(vote_lepenMediane);
    vote_rejetpop_01215.push(vote_rejetMediane);
    name_Commune_01215.push(nameCommune);
    Pourcentage_01215.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01215.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01215.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01215.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01215.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01215 = [];
const vote_lepen_01215 = [];
const vote_rejet_01215 = [];
const vote_macronpop_01215 = [];
const vote_lepenpop_01215 = [];
const vote_rejetpop_01215 = [];
const name_Commune_01215 = [];
const Pourcentage_01215 = [];
const Pourcentage_rejet_01215 = [];
const vote_gene_macron_01215 = [];
const vote_gene_lepen_01215 = [];
const vote_gene_rejet_01215 = [];

async function chartIt01215(){
    await GraphDATA01215();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01215-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01215
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01215
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01215-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01215,vote_lepen_01215,vote_rejet_01215]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01215-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01215,vote_lepenpop_01215,vote_rejetpop_01215]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01215"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01215
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01215
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01215
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
/*COMMUNE 01216*/
/*------------------------------------------------------------------ */
async function GraphDATA01216() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[215];
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
    vote_macron_01216.push(vote_macron); 
    vote_lepen_01216.push(vote_lepen);
    vote_rejet_01216.push(vote_rejet);
    vote_macronpop_01216.push(vote_macronMediane);
    vote_lepenpop_01216.push(vote_lepenMediane);
    vote_rejetpop_01216.push(vote_rejetMediane);
    name_Commune_01216.push(nameCommune);
    Pourcentage_01216.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01216.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01216.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01216.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01216.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01216 = [];
const vote_lepen_01216 = [];
const vote_rejet_01216 = [];
const vote_macronpop_01216 = [];
const vote_lepenpop_01216 = [];
const vote_rejetpop_01216 = [];
const name_Commune_01216 = [];
const Pourcentage_01216 = [];
const Pourcentage_rejet_01216 = [];
const vote_gene_macron_01216 = [];
const vote_gene_lepen_01216 = [];
const vote_gene_rejet_01216 = [];

async function chartIt01216(){
    await GraphDATA01216();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01216-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01216
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01216
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01216-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01216,vote_lepen_01216,vote_rejet_01216]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01216-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01216,vote_lepenpop_01216,vote_rejetpop_01216]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01216"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01216
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01216
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01216
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
/*COMMUNE 01217*/
/*------------------------------------------------------------------ */
async function GraphDATA01217() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[216];
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
    vote_macron_01217.push(vote_macron); 
    vote_lepen_01217.push(vote_lepen);
    vote_rejet_01217.push(vote_rejet);
    vote_macronpop_01217.push(vote_macronMediane);
    vote_lepenpop_01217.push(vote_lepenMediane);
    vote_rejetpop_01217.push(vote_rejetMediane);
    name_Commune_01217.push(nameCommune);
    Pourcentage_01217.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01217.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01217.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01217.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01217.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01217 = [];
const vote_lepen_01217 = [];
const vote_rejet_01217 = [];
const vote_macronpop_01217 = [];
const vote_lepenpop_01217 = [];
const vote_rejetpop_01217 = [];
const name_Commune_01217 = [];
const Pourcentage_01217 = [];
const Pourcentage_rejet_01217 = [];
const vote_gene_macron_01217 = [];
const vote_gene_lepen_01217 = [];
const vote_gene_rejet_01217 = [];

async function chartIt01217(){
    await GraphDATA01217();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01217-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01217
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01217
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01217-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01217,vote_lepen_01217,vote_rejet_01217]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01217-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01217,vote_lepenpop_01217,vote_rejetpop_01217]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01217"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01217
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01217
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01217
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
/*COMMUNE 01218*/
/*------------------------------------------------------------------ */
async function GraphDATA01218() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[217];
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
    vote_macron_01218.push(vote_macron); 
    vote_lepen_01218.push(vote_lepen);
    vote_rejet_01218.push(vote_rejet);
    vote_macronpop_01218.push(vote_macronMediane);
    vote_lepenpop_01218.push(vote_lepenMediane);
    vote_rejetpop_01218.push(vote_rejetMediane);
    name_Commune_01218.push(nameCommune);
    Pourcentage_01218.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01218.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01218.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01218.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01218.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01218 = [];
const vote_lepen_01218 = [];
const vote_rejet_01218 = [];
const vote_macronpop_01218 = [];
const vote_lepenpop_01218 = [];
const vote_rejetpop_01218 = [];
const name_Commune_01218 = [];
const Pourcentage_01218 = [];
const Pourcentage_rejet_01218 = [];
const vote_gene_macron_01218 = [];
const vote_gene_lepen_01218 = [];
const vote_gene_rejet_01218 = [];

async function chartIt01218(){
    await GraphDATA01218();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01218-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01218
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01218
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01218-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01218,vote_lepen_01218,vote_rejet_01218]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01218-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01218,vote_lepenpop_01218,vote_rejetpop_01218]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01218"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01218
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01218
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01218
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
/*COMMUNE 01219*/
/*------------------------------------------------------------------ */
async function GraphDATA01219() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[218];
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
    vote_macron_01219.push(vote_macron); 
    vote_lepen_01219.push(vote_lepen);
    vote_rejet_01219.push(vote_rejet);
    vote_macronpop_01219.push(vote_macronMediane);
    vote_lepenpop_01219.push(vote_lepenMediane);
    vote_rejetpop_01219.push(vote_rejetMediane);
    name_Commune_01219.push(nameCommune);
    Pourcentage_01219.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01219.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01219.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01219.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01219.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01219 = [];
const vote_lepen_01219 = [];
const vote_rejet_01219 = [];
const vote_macronpop_01219 = [];
const vote_lepenpop_01219 = [];
const vote_rejetpop_01219 = [];
const name_Commune_01219 = [];
const Pourcentage_01219 = [];
const Pourcentage_rejet_01219 = [];
const vote_gene_macron_01219 = [];
const vote_gene_lepen_01219 = [];
const vote_gene_rejet_01219 = [];

async function chartIt01219(){
    await GraphDATA01219();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01219-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01219
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01219
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01219-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01219,vote_lepen_01219,vote_rejet_01219]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01219-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01219,vote_lepenpop_01219,vote_rejetpop_01219]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01219"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01219
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01219
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01219
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
/*COMMUNE 01220*/
/*------------------------------------------------------------------ */
async function GraphDATA01220() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[219];
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
    vote_macron_01220.push(vote_macron); 
    vote_lepen_01220.push(vote_lepen);
    vote_rejet_01220.push(vote_rejet);
    vote_macronpop_01220.push(vote_macronMediane);
    vote_lepenpop_01220.push(vote_lepenMediane);
    vote_rejetpop_01220.push(vote_rejetMediane);
    name_Commune_01220.push(nameCommune);
    Pourcentage_01220.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01220.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01220.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01220.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01220.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01220 = [];
const vote_lepen_01220 = [];
const vote_rejet_01220 = [];
const vote_macronpop_01220 = [];
const vote_lepenpop_01220 = [];
const vote_rejetpop_01220 = [];
const name_Commune_01220 = [];
const Pourcentage_01220 = [];
const Pourcentage_rejet_01220 = [];
const vote_gene_macron_01220 = [];
const vote_gene_lepen_01220 = [];
const vote_gene_rejet_01220 = [];

async function chartIt01220(){
    await GraphDATA01220();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01220-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01220
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01220
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01220-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01220,vote_lepen_01220,vote_rejet_01220]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01220-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01220,vote_lepenpop_01220,vote_rejetpop_01220]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01220"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01220
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01220
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01220
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
/*COMMUNE 01221*/
/*------------------------------------------------------------------ */
async function GraphDATA01221() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[220];
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
    vote_macron_01221.push(vote_macron); 
    vote_lepen_01221.push(vote_lepen);
    vote_rejet_01221.push(vote_rejet);
    vote_macronpop_01221.push(vote_macronMediane);
    vote_lepenpop_01221.push(vote_lepenMediane);
    vote_rejetpop_01221.push(vote_rejetMediane);
    name_Commune_01221.push(nameCommune);
    Pourcentage_01221.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01221.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01221.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01221.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01221.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01221 = [];
const vote_lepen_01221 = [];
const vote_rejet_01221 = [];
const vote_macronpop_01221 = [];
const vote_lepenpop_01221 = [];
const vote_rejetpop_01221 = [];
const name_Commune_01221 = [];
const Pourcentage_01221 = [];
const Pourcentage_rejet_01221 = [];
const vote_gene_macron_01221 = [];
const vote_gene_lepen_01221 = [];
const vote_gene_rejet_01221 = [];

async function chartIt01221(){
    await GraphDATA01221();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01221-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01221
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01221
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01221-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01221,vote_lepen_01221,vote_rejet_01221]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01221-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01221,vote_lepenpop_01221,vote_rejetpop_01221]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01221"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01221
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01221
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01221
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
/*COMMUNE 01222*/
/*------------------------------------------------------------------ */
async function GraphDATA01222() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[221];
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
    vote_macron_01222.push(vote_macron); 
    vote_lepen_01222.push(vote_lepen);
    vote_rejet_01222.push(vote_rejet);
    vote_macronpop_01222.push(vote_macronMediane);
    vote_lepenpop_01222.push(vote_lepenMediane);
    vote_rejetpop_01222.push(vote_rejetMediane);
    name_Commune_01222.push(nameCommune);
    Pourcentage_01222.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01222.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01222.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01222.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01222.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01222 = [];
const vote_lepen_01222 = [];
const vote_rejet_01222 = [];
const vote_macronpop_01222 = [];
const vote_lepenpop_01222 = [];
const vote_rejetpop_01222 = [];
const name_Commune_01222 = [];
const Pourcentage_01222 = [];
const Pourcentage_rejet_01222 = [];
const vote_gene_macron_01222 = [];
const vote_gene_lepen_01222 = [];
const vote_gene_rejet_01222 = [];

async function chartIt01222(){
    await GraphDATA01222();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01222-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01222
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01222
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01222-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01222,vote_lepen_01222,vote_rejet_01222]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01222-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01222,vote_lepenpop_01222,vote_rejetpop_01222]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01222"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01222
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01222
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01222
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
/*COMMUNE 01223*/
/*------------------------------------------------------------------ */
async function GraphDATA01223() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[222];
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
    vote_macron_01223.push(vote_macron); 
    vote_lepen_01223.push(vote_lepen);
    vote_rejet_01223.push(vote_rejet);
    vote_macronpop_01223.push(vote_macronMediane);
    vote_lepenpop_01223.push(vote_lepenMediane);
    vote_rejetpop_01223.push(vote_rejetMediane);
    name_Commune_01223.push(nameCommune);
    Pourcentage_01223.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01223.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01223.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01223.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01223.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01223 = [];
const vote_lepen_01223 = [];
const vote_rejet_01223 = [];
const vote_macronpop_01223 = [];
const vote_lepenpop_01223 = [];
const vote_rejetpop_01223 = [];
const name_Commune_01223 = [];
const Pourcentage_01223 = [];
const Pourcentage_rejet_01223 = [];
const vote_gene_macron_01223 = [];
const vote_gene_lepen_01223 = [];
const vote_gene_rejet_01223 = [];

async function chartIt01223(){
    await GraphDATA01223();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01223-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01223
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01223
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01223-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01223,vote_lepen_01223,vote_rejet_01223]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01223-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01223,vote_lepenpop_01223,vote_rejetpop_01223]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01223"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01223
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01223
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01223
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
/*COMMUNE 01224*/
/*------------------------------------------------------------------ */
async function GraphDATA01224() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[223];
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
    vote_macron_01224.push(vote_macron); 
    vote_lepen_01224.push(vote_lepen);
    vote_rejet_01224.push(vote_rejet);
    vote_macronpop_01224.push(vote_macronMediane);
    vote_lepenpop_01224.push(vote_lepenMediane);
    vote_rejetpop_01224.push(vote_rejetMediane);
    name_Commune_01224.push(nameCommune);
    Pourcentage_01224.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01224.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01224.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01224.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01224.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01224 = [];
const vote_lepen_01224 = [];
const vote_rejet_01224 = [];
const vote_macronpop_01224 = [];
const vote_lepenpop_01224 = [];
const vote_rejetpop_01224 = [];
const name_Commune_01224 = [];
const Pourcentage_01224 = [];
const Pourcentage_rejet_01224 = [];
const vote_gene_macron_01224 = [];
const vote_gene_lepen_01224 = [];
const vote_gene_rejet_01224 = [];

async function chartIt01224(){
    await GraphDATA01224();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01224-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01224
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01224
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01224-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01224,vote_lepen_01224,vote_rejet_01224]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01224-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01224,vote_lepenpop_01224,vote_rejetpop_01224]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01224"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01224
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01224
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01224
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
/*COMMUNE 01225*/
/*------------------------------------------------------------------ */
async function GraphDATA01225() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[224];
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
    vote_macron_01225.push(vote_macron); 
    vote_lepen_01225.push(vote_lepen);
    vote_rejet_01225.push(vote_rejet);
    vote_macronpop_01225.push(vote_macronMediane);
    vote_lepenpop_01225.push(vote_lepenMediane);
    vote_rejetpop_01225.push(vote_rejetMediane);
    name_Commune_01225.push(nameCommune);
    Pourcentage_01225.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01225.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01225.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01225.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01225.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01225 = [];
const vote_lepen_01225 = [];
const vote_rejet_01225 = [];
const vote_macronpop_01225 = [];
const vote_lepenpop_01225 = [];
const vote_rejetpop_01225 = [];
const name_Commune_01225 = [];
const Pourcentage_01225 = [];
const Pourcentage_rejet_01225 = [];
const vote_gene_macron_01225 = [];
const vote_gene_lepen_01225 = [];
const vote_gene_rejet_01225 = [];

async function chartIt01225(){
    await GraphDATA01225();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01225-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01225
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01225
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01225-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01225,vote_lepen_01225,vote_rejet_01225]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01225-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01225,vote_lepenpop_01225,vote_rejetpop_01225]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01225"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01225
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01225
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01225
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
/*COMMUNE 01226*/
/*------------------------------------------------------------------ */
async function GraphDATA01226() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[225];
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
    vote_macron_01226.push(vote_macron); 
    vote_lepen_01226.push(vote_lepen);
    vote_rejet_01226.push(vote_rejet);
    vote_macronpop_01226.push(vote_macronMediane);
    vote_lepenpop_01226.push(vote_lepenMediane);
    vote_rejetpop_01226.push(vote_rejetMediane);
    name_Commune_01226.push(nameCommune);
    Pourcentage_01226.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01226.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01226.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01226.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01226.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01226 = [];
const vote_lepen_01226 = [];
const vote_rejet_01226 = [];
const vote_macronpop_01226 = [];
const vote_lepenpop_01226 = [];
const vote_rejetpop_01226 = [];
const name_Commune_01226 = [];
const Pourcentage_01226 = [];
const Pourcentage_rejet_01226 = [];
const vote_gene_macron_01226 = [];
const vote_gene_lepen_01226 = [];
const vote_gene_rejet_01226 = [];

async function chartIt01226(){
    await GraphDATA01226();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01226-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01226
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01226
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01226-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01226,vote_lepen_01226,vote_rejet_01226]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01226-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01226,vote_lepenpop_01226,vote_rejetpop_01226]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01226"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01226
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01226
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01226
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
/*COMMUNE 01227*/
/*------------------------------------------------------------------ */
async function GraphDATA01227() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[226];
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
    vote_macron_01227.push(vote_macron); 
    vote_lepen_01227.push(vote_lepen);
    vote_rejet_01227.push(vote_rejet);
    vote_macronpop_01227.push(vote_macronMediane);
    vote_lepenpop_01227.push(vote_lepenMediane);
    vote_rejetpop_01227.push(vote_rejetMediane);
    name_Commune_01227.push(nameCommune);
    Pourcentage_01227.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01227.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01227.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01227.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01227.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01227 = [];
const vote_lepen_01227 = [];
const vote_rejet_01227 = [];
const vote_macronpop_01227 = [];
const vote_lepenpop_01227 = [];
const vote_rejetpop_01227 = [];
const name_Commune_01227 = [];
const Pourcentage_01227 = [];
const Pourcentage_rejet_01227 = [];
const vote_gene_macron_01227 = [];
const vote_gene_lepen_01227 = [];
const vote_gene_rejet_01227 = [];

async function chartIt01227(){
    await GraphDATA01227();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01227-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01227
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01227
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01227-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01227,vote_lepen_01227,vote_rejet_01227]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01227-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01227,vote_lepenpop_01227,vote_rejetpop_01227]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01227"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01227
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01227
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01227
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
/*COMMUNE 01228*/
/*------------------------------------------------------------------ */
async function GraphDATA01228() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[227];
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
    vote_macron_01228.push(vote_macron); 
    vote_lepen_01228.push(vote_lepen);
    vote_rejet_01228.push(vote_rejet);
    vote_macronpop_01228.push(vote_macronMediane);
    vote_lepenpop_01228.push(vote_lepenMediane);
    vote_rejetpop_01228.push(vote_rejetMediane);
    name_Commune_01228.push(nameCommune);
    Pourcentage_01228.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01228.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01228.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01228.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01228.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01228 = [];
const vote_lepen_01228 = [];
const vote_rejet_01228 = [];
const vote_macronpop_01228 = [];
const vote_lepenpop_01228 = [];
const vote_rejetpop_01228 = [];
const name_Commune_01228 = [];
const Pourcentage_01228 = [];
const Pourcentage_rejet_01228 = [];
const vote_gene_macron_01228 = [];
const vote_gene_lepen_01228 = [];
const vote_gene_rejet_01228 = [];

async function chartIt01228(){
    await GraphDATA01228();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01228-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01228
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01228
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01228-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01228,vote_lepen_01228,vote_rejet_01228]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01228-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01228,vote_lepenpop_01228,vote_rejetpop_01228]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01228"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01228
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01228
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01228
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
/*COMMUNE 01229*/
/*------------------------------------------------------------------ */
async function GraphDATA01229() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[228];
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
    vote_macron_01229.push(vote_macron); 
    vote_lepen_01229.push(vote_lepen);
    vote_rejet_01229.push(vote_rejet);
    vote_macronpop_01229.push(vote_macronMediane);
    vote_lepenpop_01229.push(vote_lepenMediane);
    vote_rejetpop_01229.push(vote_rejetMediane);
    name_Commune_01229.push(nameCommune);
    Pourcentage_01229.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01229.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01229.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01229.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01229.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01229 = [];
const vote_lepen_01229 = [];
const vote_rejet_01229 = [];
const vote_macronpop_01229 = [];
const vote_lepenpop_01229 = [];
const vote_rejetpop_01229 = [];
const name_Commune_01229 = [];
const Pourcentage_01229 = [];
const Pourcentage_rejet_01229 = [];
const vote_gene_macron_01229 = [];
const vote_gene_lepen_01229 = [];
const vote_gene_rejet_01229 = [];

async function chartIt01229(){
    await GraphDATA01229();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01229-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01229
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01229
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01229-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01229,vote_lepen_01229,vote_rejet_01229]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01229-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01229,vote_lepenpop_01229,vote_rejetpop_01229]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01229"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01229
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01229
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01229
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
/*COMMUNE 01230*/
/*------------------------------------------------------------------ */
async function GraphDATA01230() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[229];
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
    vote_macron_01230.push(vote_macron); 
    vote_lepen_01230.push(vote_lepen);
    vote_rejet_01230.push(vote_rejet);
    vote_macronpop_01230.push(vote_macronMediane);
    vote_lepenpop_01230.push(vote_lepenMediane);
    vote_rejetpop_01230.push(vote_rejetMediane);
    name_Commune_01230.push(nameCommune);
    Pourcentage_01230.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01230.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01230.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01230.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01230.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01230 = [];
const vote_lepen_01230 = [];
const vote_rejet_01230 = [];
const vote_macronpop_01230 = [];
const vote_lepenpop_01230 = [];
const vote_rejetpop_01230 = [];
const name_Commune_01230 = [];
const Pourcentage_01230 = [];
const Pourcentage_rejet_01230 = [];
const vote_gene_macron_01230 = [];
const vote_gene_lepen_01230 = [];
const vote_gene_rejet_01230 = [];

async function chartIt01230(){
    await GraphDATA01230();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01230-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01230
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01230
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01230-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01230,vote_lepen_01230,vote_rejet_01230]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01230-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01230,vote_lepenpop_01230,vote_rejetpop_01230]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01230"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01230
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01230
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01230
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
/*COMMUNE 01231*/
/*------------------------------------------------------------------ */
async function GraphDATA01231() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[230];
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
    vote_macron_01231.push(vote_macron); 
    vote_lepen_01231.push(vote_lepen);
    vote_rejet_01231.push(vote_rejet);
    vote_macronpop_01231.push(vote_macronMediane);
    vote_lepenpop_01231.push(vote_lepenMediane);
    vote_rejetpop_01231.push(vote_rejetMediane);
    name_Commune_01231.push(nameCommune);
    Pourcentage_01231.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01231.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01231.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01231.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01231.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01231 = [];
const vote_lepen_01231 = [];
const vote_rejet_01231 = [];
const vote_macronpop_01231 = [];
const vote_lepenpop_01231 = [];
const vote_rejetpop_01231 = [];
const name_Commune_01231 = [];
const Pourcentage_01231 = [];
const Pourcentage_rejet_01231 = [];
const vote_gene_macron_01231 = [];
const vote_gene_lepen_01231 = [];
const vote_gene_rejet_01231 = [];

async function chartIt01231(){
    await GraphDATA01231();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01231-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01231
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01231
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01231-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01231,vote_lepen_01231,vote_rejet_01231]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01231-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01231,vote_lepenpop_01231,vote_rejetpop_01231]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01231"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01231
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01231
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01231
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
/*COMMUNE 01232*/
/*------------------------------------------------------------------ */
async function GraphDATA01232() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[231];
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
    vote_macron_01232.push(vote_macron); 
    vote_lepen_01232.push(vote_lepen);
    vote_rejet_01232.push(vote_rejet);
    vote_macronpop_01232.push(vote_macronMediane);
    vote_lepenpop_01232.push(vote_lepenMediane);
    vote_rejetpop_01232.push(vote_rejetMediane);
    name_Commune_01232.push(nameCommune);
    Pourcentage_01232.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01232.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01232.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01232.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01232.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01232 = [];
const vote_lepen_01232 = [];
const vote_rejet_01232 = [];
const vote_macronpop_01232 = [];
const vote_lepenpop_01232 = [];
const vote_rejetpop_01232 = [];
const name_Commune_01232 = [];
const Pourcentage_01232 = [];
const Pourcentage_rejet_01232 = [];
const vote_gene_macron_01232 = [];
const vote_gene_lepen_01232 = [];
const vote_gene_rejet_01232 = [];

async function chartIt01232(){
    await GraphDATA01232();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01232-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01232
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01232
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01232-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01232,vote_lepen_01232,vote_rejet_01232]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01232-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01232,vote_lepenpop_01232,vote_rejetpop_01232]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01232"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01232
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01232
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01232
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
/*COMMUNE 01233*/
/*------------------------------------------------------------------ */
async function GraphDATA01233() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[232];
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
    vote_macron_01233.push(vote_macron); 
    vote_lepen_01233.push(vote_lepen);
    vote_rejet_01233.push(vote_rejet);
    vote_macronpop_01233.push(vote_macronMediane);
    vote_lepenpop_01233.push(vote_lepenMediane);
    vote_rejetpop_01233.push(vote_rejetMediane);
    name_Commune_01233.push(nameCommune);
    Pourcentage_01233.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01233.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01233.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01233.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01233.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01233 = [];
const vote_lepen_01233 = [];
const vote_rejet_01233 = [];
const vote_macronpop_01233 = [];
const vote_lepenpop_01233 = [];
const vote_rejetpop_01233 = [];
const name_Commune_01233 = [];
const Pourcentage_01233 = [];
const Pourcentage_rejet_01233 = [];
const vote_gene_macron_01233 = [];
const vote_gene_lepen_01233 = [];
const vote_gene_rejet_01233 = [];

async function chartIt01233(){
    await GraphDATA01233();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01233-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01233
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01233
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01233-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01233,vote_lepen_01233,vote_rejet_01233]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01233-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01233,vote_lepenpop_01233,vote_rejetpop_01233]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01233"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01233
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01233
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01233
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
/*COMMUNE 01234*/
/*------------------------------------------------------------------ */
async function GraphDATA01234() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[233];
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
    vote_macron_01234.push(vote_macron); 
    vote_lepen_01234.push(vote_lepen);
    vote_rejet_01234.push(vote_rejet);
    vote_macronpop_01234.push(vote_macronMediane);
    vote_lepenpop_01234.push(vote_lepenMediane);
    vote_rejetpop_01234.push(vote_rejetMediane);
    name_Commune_01234.push(nameCommune);
    Pourcentage_01234.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01234.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01234.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01234.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01234.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01234 = [];
const vote_lepen_01234 = [];
const vote_rejet_01234 = [];
const vote_macronpop_01234 = [];
const vote_lepenpop_01234 = [];
const vote_rejetpop_01234 = [];
const name_Commune_01234 = [];
const Pourcentage_01234 = [];
const Pourcentage_rejet_01234 = [];
const vote_gene_macron_01234 = [];
const vote_gene_lepen_01234 = [];
const vote_gene_rejet_01234 = [];

async function chartIt01234(){
    await GraphDATA01234();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01234-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01234
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01234
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01234-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01234,vote_lepen_01234,vote_rejet_01234]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01234-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01234,vote_lepenpop_01234,vote_rejetpop_01234]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01234"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01234
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01234
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01234
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
/*COMMUNE 01235*/
/*------------------------------------------------------------------ */
async function GraphDATA01235() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[234];
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
    vote_macron_01235.push(vote_macron); 
    vote_lepen_01235.push(vote_lepen);
    vote_rejet_01235.push(vote_rejet);
    vote_macronpop_01235.push(vote_macronMediane);
    vote_lepenpop_01235.push(vote_lepenMediane);
    vote_rejetpop_01235.push(vote_rejetMediane);
    name_Commune_01235.push(nameCommune);
    Pourcentage_01235.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01235.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01235.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01235.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01235.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01235 = [];
const vote_lepen_01235 = [];
const vote_rejet_01235 = [];
const vote_macronpop_01235 = [];
const vote_lepenpop_01235 = [];
const vote_rejetpop_01235 = [];
const name_Commune_01235 = [];
const Pourcentage_01235 = [];
const Pourcentage_rejet_01235 = [];
const vote_gene_macron_01235 = [];
const vote_gene_lepen_01235 = [];
const vote_gene_rejet_01235 = [];

async function chartIt01235(){
    await GraphDATA01235();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01235-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01235
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01235
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01235-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01235,vote_lepen_01235,vote_rejet_01235]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01235-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01235,vote_lepenpop_01235,vote_rejetpop_01235]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01235"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01235
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01235
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01235
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
/*COMMUNE 01236*/
/*------------------------------------------------------------------ */
async function GraphDATA01236() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[235];
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
    vote_macron_01236.push(vote_macron); 
    vote_lepen_01236.push(vote_lepen);
    vote_rejet_01236.push(vote_rejet);
    vote_macronpop_01236.push(vote_macronMediane);
    vote_lepenpop_01236.push(vote_lepenMediane);
    vote_rejetpop_01236.push(vote_rejetMediane);
    name_Commune_01236.push(nameCommune);
    Pourcentage_01236.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01236.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01236.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01236.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01236.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01236 = [];
const vote_lepen_01236 = [];
const vote_rejet_01236 = [];
const vote_macronpop_01236 = [];
const vote_lepenpop_01236 = [];
const vote_rejetpop_01236 = [];
const name_Commune_01236 = [];
const Pourcentage_01236 = [];
const Pourcentage_rejet_01236 = [];
const vote_gene_macron_01236 = [];
const vote_gene_lepen_01236 = [];
const vote_gene_rejet_01236 = [];

async function chartIt01236(){
    await GraphDATA01236();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01236-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01236
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01236
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01236-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01236,vote_lepen_01236,vote_rejet_01236]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01236-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01236,vote_lepenpop_01236,vote_rejetpop_01236]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01236"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01236
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01236
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01236
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
/*COMMUNE 01237*/
/*------------------------------------------------------------------ */
async function GraphDATA01237() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[236];
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
    vote_macron_01237.push(vote_macron); 
    vote_lepen_01237.push(vote_lepen);
    vote_rejet_01237.push(vote_rejet);
    vote_macronpop_01237.push(vote_macronMediane);
    vote_lepenpop_01237.push(vote_lepenMediane);
    vote_rejetpop_01237.push(vote_rejetMediane);
    name_Commune_01237.push(nameCommune);
    Pourcentage_01237.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01237.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01237.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01237.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01237.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01237 = [];
const vote_lepen_01237 = [];
const vote_rejet_01237 = [];
const vote_macronpop_01237 = [];
const vote_lepenpop_01237 = [];
const vote_rejetpop_01237 = [];
const name_Commune_01237 = [];
const Pourcentage_01237 = [];
const Pourcentage_rejet_01237 = [];
const vote_gene_macron_01237 = [];
const vote_gene_lepen_01237 = [];
const vote_gene_rejet_01237 = [];

async function chartIt01237(){
    await GraphDATA01237();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01237-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01237
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01237
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01237-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01237,vote_lepen_01237,vote_rejet_01237]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01237-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01237,vote_lepenpop_01237,vote_rejetpop_01237]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01237"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01237
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01237
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01237
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
/*COMMUNE 01238*/
/*------------------------------------------------------------------ */
async function GraphDATA01238() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[237];
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
    vote_macron_01238.push(vote_macron); 
    vote_lepen_01238.push(vote_lepen);
    vote_rejet_01238.push(vote_rejet);
    vote_macronpop_01238.push(vote_macronMediane);
    vote_lepenpop_01238.push(vote_lepenMediane);
    vote_rejetpop_01238.push(vote_rejetMediane);
    name_Commune_01238.push(nameCommune);
    Pourcentage_01238.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01238.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01238.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01238.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01238.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01238 = [];
const vote_lepen_01238 = [];
const vote_rejet_01238 = [];
const vote_macronpop_01238 = [];
const vote_lepenpop_01238 = [];
const vote_rejetpop_01238 = [];
const name_Commune_01238 = [];
const Pourcentage_01238 = [];
const Pourcentage_rejet_01238 = [];
const vote_gene_macron_01238 = [];
const vote_gene_lepen_01238 = [];
const vote_gene_rejet_01238 = [];

async function chartIt01238(){
    await GraphDATA01238();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01238-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01238
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01238
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01238-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01238,vote_lepen_01238,vote_rejet_01238]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01238-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01238,vote_lepenpop_01238,vote_rejetpop_01238]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01238"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01238
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01238
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01238
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
/*COMMUNE 01239*/
/*------------------------------------------------------------------ */
async function GraphDATA01239() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[238];
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
    vote_macron_01239.push(vote_macron); 
    vote_lepen_01239.push(vote_lepen);
    vote_rejet_01239.push(vote_rejet);
    vote_macronpop_01239.push(vote_macronMediane);
    vote_lepenpop_01239.push(vote_lepenMediane);
    vote_rejetpop_01239.push(vote_rejetMediane);
    name_Commune_01239.push(nameCommune);
    Pourcentage_01239.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01239.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01239.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01239.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01239.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01239 = [];
const vote_lepen_01239 = [];
const vote_rejet_01239 = [];
const vote_macronpop_01239 = [];
const vote_lepenpop_01239 = [];
const vote_rejetpop_01239 = [];
const name_Commune_01239 = [];
const Pourcentage_01239 = [];
const Pourcentage_rejet_01239 = [];
const vote_gene_macron_01239 = [];
const vote_gene_lepen_01239 = [];
const vote_gene_rejet_01239 = [];

async function chartIt01239(){
    await GraphDATA01239();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01239-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01239
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01239
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01239-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01239,vote_lepen_01239,vote_rejet_01239]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01239-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01239,vote_lepenpop_01239,vote_rejetpop_01239]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01239"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01239
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01239
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01239
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
/*COMMUNE 01240*/
/*------------------------------------------------------------------ */
async function GraphDATA01240() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[239];
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
    vote_macron_01240.push(vote_macron); 
    vote_lepen_01240.push(vote_lepen);
    vote_rejet_01240.push(vote_rejet);
    vote_macronpop_01240.push(vote_macronMediane);
    vote_lepenpop_01240.push(vote_lepenMediane);
    vote_rejetpop_01240.push(vote_rejetMediane);
    name_Commune_01240.push(nameCommune);
    Pourcentage_01240.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01240.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01240.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01240.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01240.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01240 = [];
const vote_lepen_01240 = [];
const vote_rejet_01240 = [];
const vote_macronpop_01240 = [];
const vote_lepenpop_01240 = [];
const vote_rejetpop_01240 = [];
const name_Commune_01240 = [];
const Pourcentage_01240 = [];
const Pourcentage_rejet_01240 = [];
const vote_gene_macron_01240 = [];
const vote_gene_lepen_01240 = [];
const vote_gene_rejet_01240 = [];

async function chartIt01240(){
    await GraphDATA01240();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01240-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01240
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01240
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01240-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01240,vote_lepen_01240,vote_rejet_01240]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01240-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01240,vote_lepenpop_01240,vote_rejetpop_01240]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01240"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01240
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01240
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01240
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
/*COMMUNE 01241*/
/*------------------------------------------------------------------ */
async function GraphDATA01241() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[240];
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
    vote_macron_01241.push(vote_macron); 
    vote_lepen_01241.push(vote_lepen);
    vote_rejet_01241.push(vote_rejet);
    vote_macronpop_01241.push(vote_macronMediane);
    vote_lepenpop_01241.push(vote_lepenMediane);
    vote_rejetpop_01241.push(vote_rejetMediane);
    name_Commune_01241.push(nameCommune);
    Pourcentage_01241.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01241.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01241.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01241.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01241.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01241 = [];
const vote_lepen_01241 = [];
const vote_rejet_01241 = [];
const vote_macronpop_01241 = [];
const vote_lepenpop_01241 = [];
const vote_rejetpop_01241 = [];
const name_Commune_01241 = [];
const Pourcentage_01241 = [];
const Pourcentage_rejet_01241 = [];
const vote_gene_macron_01241 = [];
const vote_gene_lepen_01241 = [];
const vote_gene_rejet_01241 = [];

async function chartIt01241(){
    await GraphDATA01241();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01241-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01241
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01241
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01241-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01241,vote_lepen_01241,vote_rejet_01241]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01241-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01241,vote_lepenpop_01241,vote_rejetpop_01241]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01241"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01241
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01241
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01241
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
/*COMMUNE 01242*/
/*------------------------------------------------------------------ */
async function GraphDATA01242() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[241];
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
    vote_macron_01242.push(vote_macron); 
    vote_lepen_01242.push(vote_lepen);
    vote_rejet_01242.push(vote_rejet);
    vote_macronpop_01242.push(vote_macronMediane);
    vote_lepenpop_01242.push(vote_lepenMediane);
    vote_rejetpop_01242.push(vote_rejetMediane);
    name_Commune_01242.push(nameCommune);
    Pourcentage_01242.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01242.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01242.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01242.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01242.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01242 = [];
const vote_lepen_01242 = [];
const vote_rejet_01242 = [];
const vote_macronpop_01242 = [];
const vote_lepenpop_01242 = [];
const vote_rejetpop_01242 = [];
const name_Commune_01242 = [];
const Pourcentage_01242 = [];
const Pourcentage_rejet_01242 = [];
const vote_gene_macron_01242 = [];
const vote_gene_lepen_01242 = [];
const vote_gene_rejet_01242 = [];

async function chartIt01242(){
    await GraphDATA01242();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01242-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01242
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01242
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01242-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01242,vote_lepen_01242,vote_rejet_01242]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01242-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01242,vote_lepenpop_01242,vote_rejetpop_01242]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01242"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01242
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01242
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01242
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
/*COMMUNE 01243*/
/*------------------------------------------------------------------ */
async function GraphDATA01243() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[242];
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
    vote_macron_01243.push(vote_macron); 
    vote_lepen_01243.push(vote_lepen);
    vote_rejet_01243.push(vote_rejet);
    vote_macronpop_01243.push(vote_macronMediane);
    vote_lepenpop_01243.push(vote_lepenMediane);
    vote_rejetpop_01243.push(vote_rejetMediane);
    name_Commune_01243.push(nameCommune);
    Pourcentage_01243.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01243.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01243.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01243.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01243.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01243 = [];
const vote_lepen_01243 = [];
const vote_rejet_01243 = [];
const vote_macronpop_01243 = [];
const vote_lepenpop_01243 = [];
const vote_rejetpop_01243 = [];
const name_Commune_01243 = [];
const Pourcentage_01243 = [];
const Pourcentage_rejet_01243 = [];
const vote_gene_macron_01243 = [];
const vote_gene_lepen_01243 = [];
const vote_gene_rejet_01243 = [];

async function chartIt01243(){
    await GraphDATA01243();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01243-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01243
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01243
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01243-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01243,vote_lepen_01243,vote_rejet_01243]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01243-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01243,vote_lepenpop_01243,vote_rejetpop_01243]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01243"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01243
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01243
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01243
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
/*COMMUNE 01244*/
/*------------------------------------------------------------------ */
async function GraphDATA01244() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[243];
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
    vote_macron_01244.push(vote_macron); 
    vote_lepen_01244.push(vote_lepen);
    vote_rejet_01244.push(vote_rejet);
    vote_macronpop_01244.push(vote_macronMediane);
    vote_lepenpop_01244.push(vote_lepenMediane);
    vote_rejetpop_01244.push(vote_rejetMediane);
    name_Commune_01244.push(nameCommune);
    Pourcentage_01244.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01244.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01244.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01244.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01244.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01244 = [];
const vote_lepen_01244 = [];
const vote_rejet_01244 = [];
const vote_macronpop_01244 = [];
const vote_lepenpop_01244 = [];
const vote_rejetpop_01244 = [];
const name_Commune_01244 = [];
const Pourcentage_01244 = [];
const Pourcentage_rejet_01244 = [];
const vote_gene_macron_01244 = [];
const vote_gene_lepen_01244 = [];
const vote_gene_rejet_01244 = [];

async function chartIt01244(){
    await GraphDATA01244();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01244-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01244
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01244
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01244-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01244,vote_lepen_01244,vote_rejet_01244]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01244-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01244,vote_lepenpop_01244,vote_rejetpop_01244]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01244"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01244
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01244
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01244
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
/*COMMUNE 01245*/
/*------------------------------------------------------------------ */
async function GraphDATA01245() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[244];
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
    vote_macron_01245.push(vote_macron); 
    vote_lepen_01245.push(vote_lepen);
    vote_rejet_01245.push(vote_rejet);
    vote_macronpop_01245.push(vote_macronMediane);
    vote_lepenpop_01245.push(vote_lepenMediane);
    vote_rejetpop_01245.push(vote_rejetMediane);
    name_Commune_01245.push(nameCommune);
    Pourcentage_01245.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01245.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01245.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01245.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01245.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01245 = [];
const vote_lepen_01245 = [];
const vote_rejet_01245 = [];
const vote_macronpop_01245 = [];
const vote_lepenpop_01245 = [];
const vote_rejetpop_01245 = [];
const name_Commune_01245 = [];
const Pourcentage_01245 = [];
const Pourcentage_rejet_01245 = [];
const vote_gene_macron_01245 = [];
const vote_gene_lepen_01245 = [];
const vote_gene_rejet_01245 = [];

async function chartIt01245(){
    await GraphDATA01245();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01245-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01245
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01245
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01245-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01245,vote_lepen_01245,vote_rejet_01245]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01245-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01245,vote_lepenpop_01245,vote_rejetpop_01245]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01245"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01245
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01245
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01245
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
/*COMMUNE 01246*/
/*------------------------------------------------------------------ */
async function GraphDATA01246() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[245];
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
    vote_macron_01246.push(vote_macron); 
    vote_lepen_01246.push(vote_lepen);
    vote_rejet_01246.push(vote_rejet);
    vote_macronpop_01246.push(vote_macronMediane);
    vote_lepenpop_01246.push(vote_lepenMediane);
    vote_rejetpop_01246.push(vote_rejetMediane);
    name_Commune_01246.push(nameCommune);
    Pourcentage_01246.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01246.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01246.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01246.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01246.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01246 = [];
const vote_lepen_01246 = [];
const vote_rejet_01246 = [];
const vote_macronpop_01246 = [];
const vote_lepenpop_01246 = [];
const vote_rejetpop_01246 = [];
const name_Commune_01246 = [];
const Pourcentage_01246 = [];
const Pourcentage_rejet_01246 = [];
const vote_gene_macron_01246 = [];
const vote_gene_lepen_01246 = [];
const vote_gene_rejet_01246 = [];

async function chartIt01246(){
    await GraphDATA01246();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01246-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01246
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01246
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01246-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01246,vote_lepen_01246,vote_rejet_01246]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01246-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01246,vote_lepenpop_01246,vote_rejetpop_01246]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01246"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01246
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01246
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01246
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
/*COMMUNE 01247*/
/*------------------------------------------------------------------ */
async function GraphDATA01247() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[246];
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
    vote_macron_01247.push(vote_macron); 
    vote_lepen_01247.push(vote_lepen);
    vote_rejet_01247.push(vote_rejet);
    vote_macronpop_01247.push(vote_macronMediane);
    vote_lepenpop_01247.push(vote_lepenMediane);
    vote_rejetpop_01247.push(vote_rejetMediane);
    name_Commune_01247.push(nameCommune);
    Pourcentage_01247.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01247.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01247.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01247.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01247.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01247 = [];
const vote_lepen_01247 = [];
const vote_rejet_01247 = [];
const vote_macronpop_01247 = [];
const vote_lepenpop_01247 = [];
const vote_rejetpop_01247 = [];
const name_Commune_01247 = [];
const Pourcentage_01247 = [];
const Pourcentage_rejet_01247 = [];
const vote_gene_macron_01247 = [];
const vote_gene_lepen_01247 = [];
const vote_gene_rejet_01247 = [];

async function chartIt01247(){
    await GraphDATA01247();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01247-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01247
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01247
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01247-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01247,vote_lepen_01247,vote_rejet_01247]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01247-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01247,vote_lepenpop_01247,vote_rejetpop_01247]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01247"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01247
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01247
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01247
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
/*COMMUNE 01248*/
/*------------------------------------------------------------------ */
async function GraphDATA01248() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[247];
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
    vote_macron_01248.push(vote_macron); 
    vote_lepen_01248.push(vote_lepen);
    vote_rejet_01248.push(vote_rejet);
    vote_macronpop_01248.push(vote_macronMediane);
    vote_lepenpop_01248.push(vote_lepenMediane);
    vote_rejetpop_01248.push(vote_rejetMediane);
    name_Commune_01248.push(nameCommune);
    Pourcentage_01248.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01248.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01248.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01248.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01248.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01248 = [];
const vote_lepen_01248 = [];
const vote_rejet_01248 = [];
const vote_macronpop_01248 = [];
const vote_lepenpop_01248 = [];
const vote_rejetpop_01248 = [];
const name_Commune_01248 = [];
const Pourcentage_01248 = [];
const Pourcentage_rejet_01248 = [];
const vote_gene_macron_01248 = [];
const vote_gene_lepen_01248 = [];
const vote_gene_rejet_01248 = [];

async function chartIt01248(){
    await GraphDATA01248();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01248-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01248
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01248
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01248-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01248,vote_lepen_01248,vote_rejet_01248]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01248-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01248,vote_lepenpop_01248,vote_rejetpop_01248]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01248"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01248
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01248
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01248
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
/*COMMUNE 01249*/
/*------------------------------------------------------------------ */
async function GraphDATA01249() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[248];
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
    vote_macron_01249.push(vote_macron); 
    vote_lepen_01249.push(vote_lepen);
    vote_rejet_01249.push(vote_rejet);
    vote_macronpop_01249.push(vote_macronMediane);
    vote_lepenpop_01249.push(vote_lepenMediane);
    vote_rejetpop_01249.push(vote_rejetMediane);
    name_Commune_01249.push(nameCommune);
    Pourcentage_01249.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01249.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01249.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01249.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01249.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01249 = [];
const vote_lepen_01249 = [];
const vote_rejet_01249 = [];
const vote_macronpop_01249 = [];
const vote_lepenpop_01249 = [];
const vote_rejetpop_01249 = [];
const name_Commune_01249 = [];
const Pourcentage_01249 = [];
const Pourcentage_rejet_01249 = [];
const vote_gene_macron_01249 = [];
const vote_gene_lepen_01249 = [];
const vote_gene_rejet_01249 = [];

async function chartIt01249(){
    await GraphDATA01249();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01249-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01249
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01249
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01249-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01249,vote_lepen_01249,vote_rejet_01249]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01249-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01249,vote_lepenpop_01249,vote_rejetpop_01249]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01249"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01249
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01249
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01249
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
/*COMMUNE 01250*/
/*------------------------------------------------------------------ */
async function GraphDATA01250() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[249];
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
    vote_macron_01250.push(vote_macron); 
    vote_lepen_01250.push(vote_lepen);
    vote_rejet_01250.push(vote_rejet);
    vote_macronpop_01250.push(vote_macronMediane);
    vote_lepenpop_01250.push(vote_lepenMediane);
    vote_rejetpop_01250.push(vote_rejetMediane);
    name_Commune_01250.push(nameCommune);
    Pourcentage_01250.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01250.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01250.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01250.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01250.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01250 = [];
const vote_lepen_01250 = [];
const vote_rejet_01250 = [];
const vote_macronpop_01250 = [];
const vote_lepenpop_01250 = [];
const vote_rejetpop_01250 = [];
const name_Commune_01250 = [];
const Pourcentage_01250 = [];
const Pourcentage_rejet_01250 = [];
const vote_gene_macron_01250 = [];
const vote_gene_lepen_01250 = [];
const vote_gene_rejet_01250 = [];

async function chartIt01250(){
    await GraphDATA01250();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01250-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01250
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01250
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01250-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01250,vote_lepen_01250,vote_rejet_01250]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01250-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01250,vote_lepenpop_01250,vote_rejetpop_01250]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01250"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01250
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01250
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01250
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
/*COMMUNE 01251*/
/*------------------------------------------------------------------ */
async function GraphDATA01251() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[250];
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
    vote_macron_01251.push(vote_macron); 
    vote_lepen_01251.push(vote_lepen);
    vote_rejet_01251.push(vote_rejet);
    vote_macronpop_01251.push(vote_macronMediane);
    vote_lepenpop_01251.push(vote_lepenMediane);
    vote_rejetpop_01251.push(vote_rejetMediane);
    name_Commune_01251.push(nameCommune);
    Pourcentage_01251.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01251.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01251.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01251.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01251.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01251 = [];
const vote_lepen_01251 = [];
const vote_rejet_01251 = [];
const vote_macronpop_01251 = [];
const vote_lepenpop_01251 = [];
const vote_rejetpop_01251 = [];
const name_Commune_01251 = [];
const Pourcentage_01251 = [];
const Pourcentage_rejet_01251 = [];
const vote_gene_macron_01251 = [];
const vote_gene_lepen_01251 = [];
const vote_gene_rejet_01251 = [];

async function chartIt01251(){
    await GraphDATA01251();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01251-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01251
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01251
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01251-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01251,vote_lepen_01251,vote_rejet_01251]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01251-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01251,vote_lepenpop_01251,vote_rejetpop_01251]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01251"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01251
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01251
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01251
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
/*COMMUNE 01252*/
/*------------------------------------------------------------------ */
async function GraphDATA01252() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[251];
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
    vote_macron_01252.push(vote_macron); 
    vote_lepen_01252.push(vote_lepen);
    vote_rejet_01252.push(vote_rejet);
    vote_macronpop_01252.push(vote_macronMediane);
    vote_lepenpop_01252.push(vote_lepenMediane);
    vote_rejetpop_01252.push(vote_rejetMediane);
    name_Commune_01252.push(nameCommune);
    Pourcentage_01252.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01252.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01252.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01252.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01252.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01252 = [];
const vote_lepen_01252 = [];
const vote_rejet_01252 = [];
const vote_macronpop_01252 = [];
const vote_lepenpop_01252 = [];
const vote_rejetpop_01252 = [];
const name_Commune_01252 = [];
const Pourcentage_01252 = [];
const Pourcentage_rejet_01252 = [];
const vote_gene_macron_01252 = [];
const vote_gene_lepen_01252 = [];
const vote_gene_rejet_01252 = [];

async function chartIt01252(){
    await GraphDATA01252();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01252-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01252
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01252
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01252-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01252,vote_lepen_01252,vote_rejet_01252]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01252-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01252,vote_lepenpop_01252,vote_rejetpop_01252]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01252"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01252
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01252
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01252
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
/*COMMUNE 01253*/
/*------------------------------------------------------------------ */
async function GraphDATA01253() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[252];
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
    vote_macron_01253.push(vote_macron); 
    vote_lepen_01253.push(vote_lepen);
    vote_rejet_01253.push(vote_rejet);
    vote_macronpop_01253.push(vote_macronMediane);
    vote_lepenpop_01253.push(vote_lepenMediane);
    vote_rejetpop_01253.push(vote_rejetMediane);
    name_Commune_01253.push(nameCommune);
    Pourcentage_01253.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01253.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01253.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01253.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01253.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01253 = [];
const vote_lepen_01253 = [];
const vote_rejet_01253 = [];
const vote_macronpop_01253 = [];
const vote_lepenpop_01253 = [];
const vote_rejetpop_01253 = [];
const name_Commune_01253 = [];
const Pourcentage_01253 = [];
const Pourcentage_rejet_01253 = [];
const vote_gene_macron_01253 = [];
const vote_gene_lepen_01253 = [];
const vote_gene_rejet_01253 = [];

async function chartIt01253(){
    await GraphDATA01253();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01253-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01253
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01253
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01253-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01253,vote_lepen_01253,vote_rejet_01253]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01253-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01253,vote_lepenpop_01253,vote_rejetpop_01253]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01253"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01253
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01253
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01253
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
/*COMMUNE 01254*/
/*------------------------------------------------------------------ */
async function GraphDATA01254() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[253];
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
    vote_macron_01254.push(vote_macron); 
    vote_lepen_01254.push(vote_lepen);
    vote_rejet_01254.push(vote_rejet);
    vote_macronpop_01254.push(vote_macronMediane);
    vote_lepenpop_01254.push(vote_lepenMediane);
    vote_rejetpop_01254.push(vote_rejetMediane);
    name_Commune_01254.push(nameCommune);
    Pourcentage_01254.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01254.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01254.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01254.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01254.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01254 = [];
const vote_lepen_01254 = [];
const vote_rejet_01254 = [];
const vote_macronpop_01254 = [];
const vote_lepenpop_01254 = [];
const vote_rejetpop_01254 = [];
const name_Commune_01254 = [];
const Pourcentage_01254 = [];
const Pourcentage_rejet_01254 = [];
const vote_gene_macron_01254 = [];
const vote_gene_lepen_01254 = [];
const vote_gene_rejet_01254 = [];

async function chartIt01254(){
    await GraphDATA01254();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01254-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01254
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01254
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01254-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01254,vote_lepen_01254,vote_rejet_01254]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01254-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01254,vote_lepenpop_01254,vote_rejetpop_01254]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01254"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01254
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01254
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01254
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
/*COMMUNE 01255*/
/*------------------------------------------------------------------ */
async function GraphDATA01255() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[254];
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
    vote_macron_01255.push(vote_macron); 
    vote_lepen_01255.push(vote_lepen);
    vote_rejet_01255.push(vote_rejet);
    vote_macronpop_01255.push(vote_macronMediane);
    vote_lepenpop_01255.push(vote_lepenMediane);
    vote_rejetpop_01255.push(vote_rejetMediane);
    name_Commune_01255.push(nameCommune);
    Pourcentage_01255.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01255.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01255.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01255.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01255.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01255 = [];
const vote_lepen_01255 = [];
const vote_rejet_01255 = [];
const vote_macronpop_01255 = [];
const vote_lepenpop_01255 = [];
const vote_rejetpop_01255 = [];
const name_Commune_01255 = [];
const Pourcentage_01255 = [];
const Pourcentage_rejet_01255 = [];
const vote_gene_macron_01255 = [];
const vote_gene_lepen_01255 = [];
const vote_gene_rejet_01255 = [];

async function chartIt01255(){
    await GraphDATA01255();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01255-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01255
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01255
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01255-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01255,vote_lepen_01255,vote_rejet_01255]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01255-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01255,vote_lepenpop_01255,vote_rejetpop_01255]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01255"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01255
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01255
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01255
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
/*COMMUNE 01256*/
/*------------------------------------------------------------------ */
async function GraphDATA01256() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[255];
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
    vote_macron_01256.push(vote_macron); 
    vote_lepen_01256.push(vote_lepen);
    vote_rejet_01256.push(vote_rejet);
    vote_macronpop_01256.push(vote_macronMediane);
    vote_lepenpop_01256.push(vote_lepenMediane);
    vote_rejetpop_01256.push(vote_rejetMediane);
    name_Commune_01256.push(nameCommune);
    Pourcentage_01256.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01256.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01256.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01256.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01256.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01256 = [];
const vote_lepen_01256 = [];
const vote_rejet_01256 = [];
const vote_macronpop_01256 = [];
const vote_lepenpop_01256 = [];
const vote_rejetpop_01256 = [];
const name_Commune_01256 = [];
const Pourcentage_01256 = [];
const Pourcentage_rejet_01256 = [];
const vote_gene_macron_01256 = [];
const vote_gene_lepen_01256 = [];
const vote_gene_rejet_01256 = [];

async function chartIt01256(){
    await GraphDATA01256();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01256-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01256
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01256
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01256-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01256,vote_lepen_01256,vote_rejet_01256]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01256-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01256,vote_lepenpop_01256,vote_rejetpop_01256]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01256"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01256
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01256
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01256
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
/*COMMUNE 01257*/
/*------------------------------------------------------------------ */
async function GraphDATA01257() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[256];
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
    vote_macron_01257.push(vote_macron); 
    vote_lepen_01257.push(vote_lepen);
    vote_rejet_01257.push(vote_rejet);
    vote_macronpop_01257.push(vote_macronMediane);
    vote_lepenpop_01257.push(vote_lepenMediane);
    vote_rejetpop_01257.push(vote_rejetMediane);
    name_Commune_01257.push(nameCommune);
    Pourcentage_01257.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01257.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01257.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01257.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01257.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01257 = [];
const vote_lepen_01257 = [];
const vote_rejet_01257 = [];
const vote_macronpop_01257 = [];
const vote_lepenpop_01257 = [];
const vote_rejetpop_01257 = [];
const name_Commune_01257 = [];
const Pourcentage_01257 = [];
const Pourcentage_rejet_01257 = [];
const vote_gene_macron_01257 = [];
const vote_gene_lepen_01257 = [];
const vote_gene_rejet_01257 = [];

async function chartIt01257(){
    await GraphDATA01257();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01257-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01257
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01257
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01257-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01257,vote_lepen_01257,vote_rejet_01257]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01257-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01257,vote_lepenpop_01257,vote_rejetpop_01257]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01257"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01257
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01257
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01257
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
/*COMMUNE 01258*/
/*------------------------------------------------------------------ */
async function GraphDATA01258() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[257];
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
    vote_macron_01258.push(vote_macron); 
    vote_lepen_01258.push(vote_lepen);
    vote_rejet_01258.push(vote_rejet);
    vote_macronpop_01258.push(vote_macronMediane);
    vote_lepenpop_01258.push(vote_lepenMediane);
    vote_rejetpop_01258.push(vote_rejetMediane);
    name_Commune_01258.push(nameCommune);
    Pourcentage_01258.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01258.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01258.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01258.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01258.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01258 = [];
const vote_lepen_01258 = [];
const vote_rejet_01258 = [];
const vote_macronpop_01258 = [];
const vote_lepenpop_01258 = [];
const vote_rejetpop_01258 = [];
const name_Commune_01258 = [];
const Pourcentage_01258 = [];
const Pourcentage_rejet_01258 = [];
const vote_gene_macron_01258 = [];
const vote_gene_lepen_01258 = [];
const vote_gene_rejet_01258 = [];

async function chartIt01258(){
    await GraphDATA01258();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01258-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01258
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01258
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01258-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01258,vote_lepen_01258,vote_rejet_01258]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01258-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01258,vote_lepenpop_01258,vote_rejetpop_01258]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01258"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01258
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01258
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01258
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
/*COMMUNE 01259*/
/*------------------------------------------------------------------ */
async function GraphDATA01259() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[258];
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
    vote_macron_01259.push(vote_macron); 
    vote_lepen_01259.push(vote_lepen);
    vote_rejet_01259.push(vote_rejet);
    vote_macronpop_01259.push(vote_macronMediane);
    vote_lepenpop_01259.push(vote_lepenMediane);
    vote_rejetpop_01259.push(vote_rejetMediane);
    name_Commune_01259.push(nameCommune);
    Pourcentage_01259.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01259.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01259.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01259.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01259.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01259 = [];
const vote_lepen_01259 = [];
const vote_rejet_01259 = [];
const vote_macronpop_01259 = [];
const vote_lepenpop_01259 = [];
const vote_rejetpop_01259 = [];
const name_Commune_01259 = [];
const Pourcentage_01259 = [];
const Pourcentage_rejet_01259 = [];
const vote_gene_macron_01259 = [];
const vote_gene_lepen_01259 = [];
const vote_gene_rejet_01259 = [];

async function chartIt01259(){
    await GraphDATA01259();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01259-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01259
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01259
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01259-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01259,vote_lepen_01259,vote_rejet_01259]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01259-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01259,vote_lepenpop_01259,vote_rejetpop_01259]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01259"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01259
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01259
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01259
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
/*COMMUNE 01260*/
/*------------------------------------------------------------------ */
async function GraphDATA01260() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[259];
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
    vote_macron_01260.push(vote_macron); 
    vote_lepen_01260.push(vote_lepen);
    vote_rejet_01260.push(vote_rejet);
    vote_macronpop_01260.push(vote_macronMediane);
    vote_lepenpop_01260.push(vote_lepenMediane);
    vote_rejetpop_01260.push(vote_rejetMediane);
    name_Commune_01260.push(nameCommune);
    Pourcentage_01260.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01260.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01260.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01260.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01260.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01260 = [];
const vote_lepen_01260 = [];
const vote_rejet_01260 = [];
const vote_macronpop_01260 = [];
const vote_lepenpop_01260 = [];
const vote_rejetpop_01260 = [];
const name_Commune_01260 = [];
const Pourcentage_01260 = [];
const Pourcentage_rejet_01260 = [];
const vote_gene_macron_01260 = [];
const vote_gene_lepen_01260 = [];
const vote_gene_rejet_01260 = [];

async function chartIt01260(){
    await GraphDATA01260();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01260-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01260
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01260
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01260-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01260,vote_lepen_01260,vote_rejet_01260]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01260-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01260,vote_lepenpop_01260,vote_rejetpop_01260]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01260"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01260
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01260
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01260
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
/*COMMUNE 01261*/
/*------------------------------------------------------------------ */
async function GraphDATA01261() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[260];
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
    vote_macron_01261.push(vote_macron); 
    vote_lepen_01261.push(vote_lepen);
    vote_rejet_01261.push(vote_rejet);
    vote_macronpop_01261.push(vote_macronMediane);
    vote_lepenpop_01261.push(vote_lepenMediane);
    vote_rejetpop_01261.push(vote_rejetMediane);
    name_Commune_01261.push(nameCommune);
    Pourcentage_01261.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01261.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01261.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01261.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01261.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01261 = [];
const vote_lepen_01261 = [];
const vote_rejet_01261 = [];
const vote_macronpop_01261 = [];
const vote_lepenpop_01261 = [];
const vote_rejetpop_01261 = [];
const name_Commune_01261 = [];
const Pourcentage_01261 = [];
const Pourcentage_rejet_01261 = [];
const vote_gene_macron_01261 = [];
const vote_gene_lepen_01261 = [];
const vote_gene_rejet_01261 = [];

async function chartIt01261(){
    await GraphDATA01261();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01261-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01261
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01261
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01261-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01261,vote_lepen_01261,vote_rejet_01261]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01261-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01261,vote_lepenpop_01261,vote_rejetpop_01261]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01261"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01261
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01261
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01261
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
/*COMMUNE 01262*/
/*------------------------------------------------------------------ */
async function GraphDATA01262() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[261];
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
    vote_macron_01262.push(vote_macron); 
    vote_lepen_01262.push(vote_lepen);
    vote_rejet_01262.push(vote_rejet);
    vote_macronpop_01262.push(vote_macronMediane);
    vote_lepenpop_01262.push(vote_lepenMediane);
    vote_rejetpop_01262.push(vote_rejetMediane);
    name_Commune_01262.push(nameCommune);
    Pourcentage_01262.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01262.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01262.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01262.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01262.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01262 = [];
const vote_lepen_01262 = [];
const vote_rejet_01262 = [];
const vote_macronpop_01262 = [];
const vote_lepenpop_01262 = [];
const vote_rejetpop_01262 = [];
const name_Commune_01262 = [];
const Pourcentage_01262 = [];
const Pourcentage_rejet_01262 = [];
const vote_gene_macron_01262 = [];
const vote_gene_lepen_01262 = [];
const vote_gene_rejet_01262 = [];

async function chartIt01262(){
    await GraphDATA01262();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01262-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01262
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01262
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01262-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01262,vote_lepen_01262,vote_rejet_01262]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01262-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01262,vote_lepenpop_01262,vote_rejetpop_01262]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01262"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01262
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01262
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01262
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
/*COMMUNE 01263*/
/*------------------------------------------------------------------ */
async function GraphDATA01263() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[262];
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
    vote_macron_01263.push(vote_macron); 
    vote_lepen_01263.push(vote_lepen);
    vote_rejet_01263.push(vote_rejet);
    vote_macronpop_01263.push(vote_macronMediane);
    vote_lepenpop_01263.push(vote_lepenMediane);
    vote_rejetpop_01263.push(vote_rejetMediane);
    name_Commune_01263.push(nameCommune);
    Pourcentage_01263.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01263.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01263.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01263.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01263.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01263 = [];
const vote_lepen_01263 = [];
const vote_rejet_01263 = [];
const vote_macronpop_01263 = [];
const vote_lepenpop_01263 = [];
const vote_rejetpop_01263 = [];
const name_Commune_01263 = [];
const Pourcentage_01263 = [];
const Pourcentage_rejet_01263 = [];
const vote_gene_macron_01263 = [];
const vote_gene_lepen_01263 = [];
const vote_gene_rejet_01263 = [];

async function chartIt01263(){
    await GraphDATA01263();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01263-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01263
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01263
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01263-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01263,vote_lepen_01263,vote_rejet_01263]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01263-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01263,vote_lepenpop_01263,vote_rejetpop_01263]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01263"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01263
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01263
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01263
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
/*COMMUNE 01264*/
/*------------------------------------------------------------------ */
async function GraphDATA01264() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[263];
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
    vote_macron_01264.push(vote_macron); 
    vote_lepen_01264.push(vote_lepen);
    vote_rejet_01264.push(vote_rejet);
    vote_macronpop_01264.push(vote_macronMediane);
    vote_lepenpop_01264.push(vote_lepenMediane);
    vote_rejetpop_01264.push(vote_rejetMediane);
    name_Commune_01264.push(nameCommune);
    Pourcentage_01264.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01264.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01264.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01264.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01264.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01264 = [];
const vote_lepen_01264 = [];
const vote_rejet_01264 = [];
const vote_macronpop_01264 = [];
const vote_lepenpop_01264 = [];
const vote_rejetpop_01264 = [];
const name_Commune_01264 = [];
const Pourcentage_01264 = [];
const Pourcentage_rejet_01264 = [];
const vote_gene_macron_01264 = [];
const vote_gene_lepen_01264 = [];
const vote_gene_rejet_01264 = [];

async function chartIt01264(){
    await GraphDATA01264();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01264-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01264
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01264
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01264-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01264,vote_lepen_01264,vote_rejet_01264]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01264-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01264,vote_lepenpop_01264,vote_rejetpop_01264]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01264"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01264
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01264
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01264
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
/*COMMUNE 01265*/
/*------------------------------------------------------------------ */
async function GraphDATA01265() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[264];
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
    vote_macron_01265.push(vote_macron); 
    vote_lepen_01265.push(vote_lepen);
    vote_rejet_01265.push(vote_rejet);
    vote_macronpop_01265.push(vote_macronMediane);
    vote_lepenpop_01265.push(vote_lepenMediane);
    vote_rejetpop_01265.push(vote_rejetMediane);
    name_Commune_01265.push(nameCommune);
    Pourcentage_01265.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01265.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01265.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01265.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01265.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01265 = [];
const vote_lepen_01265 = [];
const vote_rejet_01265 = [];
const vote_macronpop_01265 = [];
const vote_lepenpop_01265 = [];
const vote_rejetpop_01265 = [];
const name_Commune_01265 = [];
const Pourcentage_01265 = [];
const Pourcentage_rejet_01265 = [];
const vote_gene_macron_01265 = [];
const vote_gene_lepen_01265 = [];
const vote_gene_rejet_01265 = [];

async function chartIt01265(){
    await GraphDATA01265();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01265-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01265
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01265
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01265-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01265,vote_lepen_01265,vote_rejet_01265]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01265-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01265,vote_lepenpop_01265,vote_rejetpop_01265]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01265"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01265
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01265
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01265
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
/*COMMUNE 01266*/
/*------------------------------------------------------------------ */
async function GraphDATA01266() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[265];
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
    vote_macron_01266.push(vote_macron); 
    vote_lepen_01266.push(vote_lepen);
    vote_rejet_01266.push(vote_rejet);
    vote_macronpop_01266.push(vote_macronMediane);
    vote_lepenpop_01266.push(vote_lepenMediane);
    vote_rejetpop_01266.push(vote_rejetMediane);
    name_Commune_01266.push(nameCommune);
    Pourcentage_01266.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01266.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01266.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01266.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01266.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01266 = [];
const vote_lepen_01266 = [];
const vote_rejet_01266 = [];
const vote_macronpop_01266 = [];
const vote_lepenpop_01266 = [];
const vote_rejetpop_01266 = [];
const name_Commune_01266 = [];
const Pourcentage_01266 = [];
const Pourcentage_rejet_01266 = [];
const vote_gene_macron_01266 = [];
const vote_gene_lepen_01266 = [];
const vote_gene_rejet_01266 = [];

async function chartIt01266(){
    await GraphDATA01266();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01266-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01266
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01266
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01266-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01266,vote_lepen_01266,vote_rejet_01266]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01266-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01266,vote_lepenpop_01266,vote_rejetpop_01266]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01266"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01266
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01266
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01266
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
/*COMMUNE 01267*/
/*------------------------------------------------------------------ */
async function GraphDATA01267() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[266];
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
    vote_macron_01267.push(vote_macron); 
    vote_lepen_01267.push(vote_lepen);
    vote_rejet_01267.push(vote_rejet);
    vote_macronpop_01267.push(vote_macronMediane);
    vote_lepenpop_01267.push(vote_lepenMediane);
    vote_rejetpop_01267.push(vote_rejetMediane);
    name_Commune_01267.push(nameCommune);
    Pourcentage_01267.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01267.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01267.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01267.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01267.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01267 = [];
const vote_lepen_01267 = [];
const vote_rejet_01267 = [];
const vote_macronpop_01267 = [];
const vote_lepenpop_01267 = [];
const vote_rejetpop_01267 = [];
const name_Commune_01267 = [];
const Pourcentage_01267 = [];
const Pourcentage_rejet_01267 = [];
const vote_gene_macron_01267 = [];
const vote_gene_lepen_01267 = [];
const vote_gene_rejet_01267 = [];

async function chartIt01267(){
    await GraphDATA01267();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01267-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01267
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01267
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01267-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01267,vote_lepen_01267,vote_rejet_01267]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01267-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01267,vote_lepenpop_01267,vote_rejetpop_01267]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01267"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01267
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01267
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01267
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
/*COMMUNE 01268*/
/*------------------------------------------------------------------ */
async function GraphDATA01268() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[267];
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
    vote_macron_01268.push(vote_macron); 
    vote_lepen_01268.push(vote_lepen);
    vote_rejet_01268.push(vote_rejet);
    vote_macronpop_01268.push(vote_macronMediane);
    vote_lepenpop_01268.push(vote_lepenMediane);
    vote_rejetpop_01268.push(vote_rejetMediane);
    name_Commune_01268.push(nameCommune);
    Pourcentage_01268.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01268.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01268.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01268.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01268.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01268 = [];
const vote_lepen_01268 = [];
const vote_rejet_01268 = [];
const vote_macronpop_01268 = [];
const vote_lepenpop_01268 = [];
const vote_rejetpop_01268 = [];
const name_Commune_01268 = [];
const Pourcentage_01268 = [];
const Pourcentage_rejet_01268 = [];
const vote_gene_macron_01268 = [];
const vote_gene_lepen_01268 = [];
const vote_gene_rejet_01268 = [];

async function chartIt01268(){
    await GraphDATA01268();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01268-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01268
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01268
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01268-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01268,vote_lepen_01268,vote_rejet_01268]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01268-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01268,vote_lepenpop_01268,vote_rejetpop_01268]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01268"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01268
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01268
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01268
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
/*COMMUNE 01269*/
/*------------------------------------------------------------------ */
async function GraphDATA01269() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[268];
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
    vote_macron_01269.push(vote_macron); 
    vote_lepen_01269.push(vote_lepen);
    vote_rejet_01269.push(vote_rejet);
    vote_macronpop_01269.push(vote_macronMediane);
    vote_lepenpop_01269.push(vote_lepenMediane);
    vote_rejetpop_01269.push(vote_rejetMediane);
    name_Commune_01269.push(nameCommune);
    Pourcentage_01269.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01269.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01269.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01269.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01269.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01269 = [];
const vote_lepen_01269 = [];
const vote_rejet_01269 = [];
const vote_macronpop_01269 = [];
const vote_lepenpop_01269 = [];
const vote_rejetpop_01269 = [];
const name_Commune_01269 = [];
const Pourcentage_01269 = [];
const Pourcentage_rejet_01269 = [];
const vote_gene_macron_01269 = [];
const vote_gene_lepen_01269 = [];
const vote_gene_rejet_01269 = [];

async function chartIt01269(){
    await GraphDATA01269();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01269-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01269
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01269
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01269-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01269,vote_lepen_01269,vote_rejet_01269]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01269-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01269,vote_lepenpop_01269,vote_rejetpop_01269]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01269"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01269
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01269
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01269
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
/*COMMUNE 01270*/
/*------------------------------------------------------------------ */
async function GraphDATA01270() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[269];
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
    vote_macron_01270.push(vote_macron); 
    vote_lepen_01270.push(vote_lepen);
    vote_rejet_01270.push(vote_rejet);
    vote_macronpop_01270.push(vote_macronMediane);
    vote_lepenpop_01270.push(vote_lepenMediane);
    vote_rejetpop_01270.push(vote_rejetMediane);
    name_Commune_01270.push(nameCommune);
    Pourcentage_01270.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01270.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01270.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01270.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01270.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01270 = [];
const vote_lepen_01270 = [];
const vote_rejet_01270 = [];
const vote_macronpop_01270 = [];
const vote_lepenpop_01270 = [];
const vote_rejetpop_01270 = [];
const name_Commune_01270 = [];
const Pourcentage_01270 = [];
const Pourcentage_rejet_01270 = [];
const vote_gene_macron_01270 = [];
const vote_gene_lepen_01270 = [];
const vote_gene_rejet_01270 = [];

async function chartIt01270(){
    await GraphDATA01270();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01270-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01270
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01270
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01270-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01270,vote_lepen_01270,vote_rejet_01270]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01270-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01270,vote_lepenpop_01270,vote_rejetpop_01270]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01270"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01270
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01270
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01270
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
/*COMMUNE 01271*/
/*------------------------------------------------------------------ */
async function GraphDATA01271() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[270];
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
    vote_macron_01271.push(vote_macron); 
    vote_lepen_01271.push(vote_lepen);
    vote_rejet_01271.push(vote_rejet);
    vote_macronpop_01271.push(vote_macronMediane);
    vote_lepenpop_01271.push(vote_lepenMediane);
    vote_rejetpop_01271.push(vote_rejetMediane);
    name_Commune_01271.push(nameCommune);
    Pourcentage_01271.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01271.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01271.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01271.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01271.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01271 = [];
const vote_lepen_01271 = [];
const vote_rejet_01271 = [];
const vote_macronpop_01271 = [];
const vote_lepenpop_01271 = [];
const vote_rejetpop_01271 = [];
const name_Commune_01271 = [];
const Pourcentage_01271 = [];
const Pourcentage_rejet_01271 = [];
const vote_gene_macron_01271 = [];
const vote_gene_lepen_01271 = [];
const vote_gene_rejet_01271 = [];

async function chartIt01271(){
    await GraphDATA01271();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01271-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01271
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01271
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01271-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01271,vote_lepen_01271,vote_rejet_01271]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01271-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01271,vote_lepenpop_01271,vote_rejetpop_01271]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01271"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01271
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01271
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01271
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
/*COMMUNE 01272*/
/*------------------------------------------------------------------ */
async function GraphDATA01272() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[271];
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
    vote_macron_01272.push(vote_macron); 
    vote_lepen_01272.push(vote_lepen);
    vote_rejet_01272.push(vote_rejet);
    vote_macronpop_01272.push(vote_macronMediane);
    vote_lepenpop_01272.push(vote_lepenMediane);
    vote_rejetpop_01272.push(vote_rejetMediane);
    name_Commune_01272.push(nameCommune);
    Pourcentage_01272.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01272.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01272.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01272.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01272.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01272 = [];
const vote_lepen_01272 = [];
const vote_rejet_01272 = [];
const vote_macronpop_01272 = [];
const vote_lepenpop_01272 = [];
const vote_rejetpop_01272 = [];
const name_Commune_01272 = [];
const Pourcentage_01272 = [];
const Pourcentage_rejet_01272 = [];
const vote_gene_macron_01272 = [];
const vote_gene_lepen_01272 = [];
const vote_gene_rejet_01272 = [];

async function chartIt01272(){
    await GraphDATA01272();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01272-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01272
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01272
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01272-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01272,vote_lepen_01272,vote_rejet_01272]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01272-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01272,vote_lepenpop_01272,vote_rejetpop_01272]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01272"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01272
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01272
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01272
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
/*COMMUNE 01273*/
/*------------------------------------------------------------------ */
async function GraphDATA01273() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[272];
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
    vote_macron_01273.push(vote_macron); 
    vote_lepen_01273.push(vote_lepen);
    vote_rejet_01273.push(vote_rejet);
    vote_macronpop_01273.push(vote_macronMediane);
    vote_lepenpop_01273.push(vote_lepenMediane);
    vote_rejetpop_01273.push(vote_rejetMediane);
    name_Commune_01273.push(nameCommune);
    Pourcentage_01273.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01273.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01273.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01273.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01273.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01273 = [];
const vote_lepen_01273 = [];
const vote_rejet_01273 = [];
const vote_macronpop_01273 = [];
const vote_lepenpop_01273 = [];
const vote_rejetpop_01273 = [];
const name_Commune_01273 = [];
const Pourcentage_01273 = [];
const Pourcentage_rejet_01273 = [];
const vote_gene_macron_01273 = [];
const vote_gene_lepen_01273 = [];
const vote_gene_rejet_01273 = [];

async function chartIt01273(){
    await GraphDATA01273();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01273-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01273
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01273
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01273-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01273,vote_lepen_01273,vote_rejet_01273]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01273-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01273,vote_lepenpop_01273,vote_rejetpop_01273]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01273"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01273
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01273
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01273
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
/*COMMUNE 01274*/
/*------------------------------------------------------------------ */
async function GraphDATA01274() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[273];
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
    vote_macron_01274.push(vote_macron); 
    vote_lepen_01274.push(vote_lepen);
    vote_rejet_01274.push(vote_rejet);
    vote_macronpop_01274.push(vote_macronMediane);
    vote_lepenpop_01274.push(vote_lepenMediane);
    vote_rejetpop_01274.push(vote_rejetMediane);
    name_Commune_01274.push(nameCommune);
    Pourcentage_01274.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01274.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01274.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01274.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01274.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01274 = [];
const vote_lepen_01274 = [];
const vote_rejet_01274 = [];
const vote_macronpop_01274 = [];
const vote_lepenpop_01274 = [];
const vote_rejetpop_01274 = [];
const name_Commune_01274 = [];
const Pourcentage_01274 = [];
const Pourcentage_rejet_01274 = [];
const vote_gene_macron_01274 = [];
const vote_gene_lepen_01274 = [];
const vote_gene_rejet_01274 = [];

async function chartIt01274(){
    await GraphDATA01274();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01274-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01274
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01274
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01274-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01274,vote_lepen_01274,vote_rejet_01274]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01274-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01274,vote_lepenpop_01274,vote_rejetpop_01274]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01274"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01274
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01274
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01274
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
/*COMMUNE 01275*/
/*------------------------------------------------------------------ */
async function GraphDATA01275() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[274];
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
    vote_macron_01275.push(vote_macron); 
    vote_lepen_01275.push(vote_lepen);
    vote_rejet_01275.push(vote_rejet);
    vote_macronpop_01275.push(vote_macronMediane);
    vote_lepenpop_01275.push(vote_lepenMediane);
    vote_rejetpop_01275.push(vote_rejetMediane);
    name_Commune_01275.push(nameCommune);
    Pourcentage_01275.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01275.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01275.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01275.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01275.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01275 = [];
const vote_lepen_01275 = [];
const vote_rejet_01275 = [];
const vote_macronpop_01275 = [];
const vote_lepenpop_01275 = [];
const vote_rejetpop_01275 = [];
const name_Commune_01275 = [];
const Pourcentage_01275 = [];
const Pourcentage_rejet_01275 = [];
const vote_gene_macron_01275 = [];
const vote_gene_lepen_01275 = [];
const vote_gene_rejet_01275 = [];

async function chartIt01275(){
    await GraphDATA01275();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01275-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01275
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01275
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01275-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01275,vote_lepen_01275,vote_rejet_01275]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01275-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01275,vote_lepenpop_01275,vote_rejetpop_01275]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01275"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01275
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01275
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01275
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
/*COMMUNE 01276*/
/*------------------------------------------------------------------ */
async function GraphDATA01276() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[275];
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
    vote_macron_01276.push(vote_macron); 
    vote_lepen_01276.push(vote_lepen);
    vote_rejet_01276.push(vote_rejet);
    vote_macronpop_01276.push(vote_macronMediane);
    vote_lepenpop_01276.push(vote_lepenMediane);
    vote_rejetpop_01276.push(vote_rejetMediane);
    name_Commune_01276.push(nameCommune);
    Pourcentage_01276.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01276.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01276.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01276.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01276.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01276 = [];
const vote_lepen_01276 = [];
const vote_rejet_01276 = [];
const vote_macronpop_01276 = [];
const vote_lepenpop_01276 = [];
const vote_rejetpop_01276 = [];
const name_Commune_01276 = [];
const Pourcentage_01276 = [];
const Pourcentage_rejet_01276 = [];
const vote_gene_macron_01276 = [];
const vote_gene_lepen_01276 = [];
const vote_gene_rejet_01276 = [];

async function chartIt01276(){
    await GraphDATA01276();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01276-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01276
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01276
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01276-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01276,vote_lepen_01276,vote_rejet_01276]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01276-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01276,vote_lepenpop_01276,vote_rejetpop_01276]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01276"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01276
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01276
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01276
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
/*COMMUNE 01277*/
/*------------------------------------------------------------------ */
async function GraphDATA01277() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[276];
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
    vote_macron_01277.push(vote_macron); 
    vote_lepen_01277.push(vote_lepen);
    vote_rejet_01277.push(vote_rejet);
    vote_macronpop_01277.push(vote_macronMediane);
    vote_lepenpop_01277.push(vote_lepenMediane);
    vote_rejetpop_01277.push(vote_rejetMediane);
    name_Commune_01277.push(nameCommune);
    Pourcentage_01277.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01277.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01277.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01277.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01277.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01277 = [];
const vote_lepen_01277 = [];
const vote_rejet_01277 = [];
const vote_macronpop_01277 = [];
const vote_lepenpop_01277 = [];
const vote_rejetpop_01277 = [];
const name_Commune_01277 = [];
const Pourcentage_01277 = [];
const Pourcentage_rejet_01277 = [];
const vote_gene_macron_01277 = [];
const vote_gene_lepen_01277 = [];
const vote_gene_rejet_01277 = [];

async function chartIt01277(){
    await GraphDATA01277();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01277-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01277
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01277
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01277-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01277,vote_lepen_01277,vote_rejet_01277]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01277-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01277,vote_lepenpop_01277,vote_rejetpop_01277]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01277"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01277
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01277
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01277
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
/*COMMUNE 01278*/
/*------------------------------------------------------------------ */
async function GraphDATA01278() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[277];
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
    vote_macron_01278.push(vote_macron); 
    vote_lepen_01278.push(vote_lepen);
    vote_rejet_01278.push(vote_rejet);
    vote_macronpop_01278.push(vote_macronMediane);
    vote_lepenpop_01278.push(vote_lepenMediane);
    vote_rejetpop_01278.push(vote_rejetMediane);
    name_Commune_01278.push(nameCommune);
    Pourcentage_01278.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01278.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01278.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01278.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01278.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01278 = [];
const vote_lepen_01278 = [];
const vote_rejet_01278 = [];
const vote_macronpop_01278 = [];
const vote_lepenpop_01278 = [];
const vote_rejetpop_01278 = [];
const name_Commune_01278 = [];
const Pourcentage_01278 = [];
const Pourcentage_rejet_01278 = [];
const vote_gene_macron_01278 = [];
const vote_gene_lepen_01278 = [];
const vote_gene_rejet_01278 = [];

async function chartIt01278(){
    await GraphDATA01278();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01278-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01278
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01278
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01278-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01278,vote_lepen_01278,vote_rejet_01278]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01278-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01278,vote_lepenpop_01278,vote_rejetpop_01278]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01278"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01278
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01278
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01278
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
/*COMMUNE 01279*/
/*------------------------------------------------------------------ */
async function GraphDATA01279() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[278];
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
    vote_macron_01279.push(vote_macron); 
    vote_lepen_01279.push(vote_lepen);
    vote_rejet_01279.push(vote_rejet);
    vote_macronpop_01279.push(vote_macronMediane);
    vote_lepenpop_01279.push(vote_lepenMediane);
    vote_rejetpop_01279.push(vote_rejetMediane);
    name_Commune_01279.push(nameCommune);
    Pourcentage_01279.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01279.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01279.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01279.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01279.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01279 = [];
const vote_lepen_01279 = [];
const vote_rejet_01279 = [];
const vote_macronpop_01279 = [];
const vote_lepenpop_01279 = [];
const vote_rejetpop_01279 = [];
const name_Commune_01279 = [];
const Pourcentage_01279 = [];
const Pourcentage_rejet_01279 = [];
const vote_gene_macron_01279 = [];
const vote_gene_lepen_01279 = [];
const vote_gene_rejet_01279 = [];

async function chartIt01279(){
    await GraphDATA01279();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01279-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01279
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01279
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01279-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01279,vote_lepen_01279,vote_rejet_01279]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01279-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01279,vote_lepenpop_01279,vote_rejetpop_01279]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01279"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01279
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01279
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01279
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
/*COMMUNE 01280*/
/*------------------------------------------------------------------ */
async function GraphDATA01280() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[279];
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
    vote_macron_01280.push(vote_macron); 
    vote_lepen_01280.push(vote_lepen);
    vote_rejet_01280.push(vote_rejet);
    vote_macronpop_01280.push(vote_macronMediane);
    vote_lepenpop_01280.push(vote_lepenMediane);
    vote_rejetpop_01280.push(vote_rejetMediane);
    name_Commune_01280.push(nameCommune);
    Pourcentage_01280.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01280.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01280.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01280.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01280.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01280 = [];
const vote_lepen_01280 = [];
const vote_rejet_01280 = [];
const vote_macronpop_01280 = [];
const vote_lepenpop_01280 = [];
const vote_rejetpop_01280 = [];
const name_Commune_01280 = [];
const Pourcentage_01280 = [];
const Pourcentage_rejet_01280 = [];
const vote_gene_macron_01280 = [];
const vote_gene_lepen_01280 = [];
const vote_gene_rejet_01280 = [];

async function chartIt01280(){
    await GraphDATA01280();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01280-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01280
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01280
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01280-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01280,vote_lepen_01280,vote_rejet_01280]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01280-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01280,vote_lepenpop_01280,vote_rejetpop_01280]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01280"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01280
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01280
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01280
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
/*COMMUNE 01281*/
/*------------------------------------------------------------------ */
async function GraphDATA01281() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[280];
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
    vote_macron_01281.push(vote_macron); 
    vote_lepen_01281.push(vote_lepen);
    vote_rejet_01281.push(vote_rejet);
    vote_macronpop_01281.push(vote_macronMediane);
    vote_lepenpop_01281.push(vote_lepenMediane);
    vote_rejetpop_01281.push(vote_rejetMediane);
    name_Commune_01281.push(nameCommune);
    Pourcentage_01281.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01281.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01281.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01281.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01281.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01281 = [];
const vote_lepen_01281 = [];
const vote_rejet_01281 = [];
const vote_macronpop_01281 = [];
const vote_lepenpop_01281 = [];
const vote_rejetpop_01281 = [];
const name_Commune_01281 = [];
const Pourcentage_01281 = [];
const Pourcentage_rejet_01281 = [];
const vote_gene_macron_01281 = [];
const vote_gene_lepen_01281 = [];
const vote_gene_rejet_01281 = [];

async function chartIt01281(){
    await GraphDATA01281();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01281-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01281
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01281
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01281-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01281,vote_lepen_01281,vote_rejet_01281]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01281-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01281,vote_lepenpop_01281,vote_rejetpop_01281]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01281"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01281
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01281
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01281
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
/*COMMUNE 01282*/
/*------------------------------------------------------------------ */
async function GraphDATA01282() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[281];
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
    vote_macron_01282.push(vote_macron); 
    vote_lepen_01282.push(vote_lepen);
    vote_rejet_01282.push(vote_rejet);
    vote_macronpop_01282.push(vote_macronMediane);
    vote_lepenpop_01282.push(vote_lepenMediane);
    vote_rejetpop_01282.push(vote_rejetMediane);
    name_Commune_01282.push(nameCommune);
    Pourcentage_01282.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01282.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01282.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01282.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01282.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01282 = [];
const vote_lepen_01282 = [];
const vote_rejet_01282 = [];
const vote_macronpop_01282 = [];
const vote_lepenpop_01282 = [];
const vote_rejetpop_01282 = [];
const name_Commune_01282 = [];
const Pourcentage_01282 = [];
const Pourcentage_rejet_01282 = [];
const vote_gene_macron_01282 = [];
const vote_gene_lepen_01282 = [];
const vote_gene_rejet_01282 = [];

async function chartIt01282(){
    await GraphDATA01282();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01282-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01282
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01282
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01282-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01282,vote_lepen_01282,vote_rejet_01282]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01282-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01282,vote_lepenpop_01282,vote_rejetpop_01282]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01282"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01282
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01282
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01282
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
/*COMMUNE 01283*/
/*------------------------------------------------------------------ */
async function GraphDATA01283() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[282];
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
    vote_macron_01283.push(vote_macron); 
    vote_lepen_01283.push(vote_lepen);
    vote_rejet_01283.push(vote_rejet);
    vote_macronpop_01283.push(vote_macronMediane);
    vote_lepenpop_01283.push(vote_lepenMediane);
    vote_rejetpop_01283.push(vote_rejetMediane);
    name_Commune_01283.push(nameCommune);
    Pourcentage_01283.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01283.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01283.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01283.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01283.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01283 = [];
const vote_lepen_01283 = [];
const vote_rejet_01283 = [];
const vote_macronpop_01283 = [];
const vote_lepenpop_01283 = [];
const vote_rejetpop_01283 = [];
const name_Commune_01283 = [];
const Pourcentage_01283 = [];
const Pourcentage_rejet_01283 = [];
const vote_gene_macron_01283 = [];
const vote_gene_lepen_01283 = [];
const vote_gene_rejet_01283 = [];

async function chartIt01283(){
    await GraphDATA01283();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01283-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01283
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01283
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01283-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01283,vote_lepen_01283,vote_rejet_01283]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01283-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01283,vote_lepenpop_01283,vote_rejetpop_01283]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01283"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01283
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01283
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01283
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
/*COMMUNE 01284*/
/*------------------------------------------------------------------ */
async function GraphDATA01284() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[283];
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
    vote_macron_01284.push(vote_macron); 
    vote_lepen_01284.push(vote_lepen);
    vote_rejet_01284.push(vote_rejet);
    vote_macronpop_01284.push(vote_macronMediane);
    vote_lepenpop_01284.push(vote_lepenMediane);
    vote_rejetpop_01284.push(vote_rejetMediane);
    name_Commune_01284.push(nameCommune);
    Pourcentage_01284.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01284.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01284.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01284.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01284.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01284 = [];
const vote_lepen_01284 = [];
const vote_rejet_01284 = [];
const vote_macronpop_01284 = [];
const vote_lepenpop_01284 = [];
const vote_rejetpop_01284 = [];
const name_Commune_01284 = [];
const Pourcentage_01284 = [];
const Pourcentage_rejet_01284 = [];
const vote_gene_macron_01284 = [];
const vote_gene_lepen_01284 = [];
const vote_gene_rejet_01284 = [];

async function chartIt01284(){
    await GraphDATA01284();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01284-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01284
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01284
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01284-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01284,vote_lepen_01284,vote_rejet_01284]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01284-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01284,vote_lepenpop_01284,vote_rejetpop_01284]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01284"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01284
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01284
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01284
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
/*COMMUNE 01285*/
/*------------------------------------------------------------------ */
async function GraphDATA01285() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[284];
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
    vote_macron_01285.push(vote_macron); 
    vote_lepen_01285.push(vote_lepen);
    vote_rejet_01285.push(vote_rejet);
    vote_macronpop_01285.push(vote_macronMediane);
    vote_lepenpop_01285.push(vote_lepenMediane);
    vote_rejetpop_01285.push(vote_rejetMediane);
    name_Commune_01285.push(nameCommune);
    Pourcentage_01285.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01285.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01285.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01285.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01285.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01285 = [];
const vote_lepen_01285 = [];
const vote_rejet_01285 = [];
const vote_macronpop_01285 = [];
const vote_lepenpop_01285 = [];
const vote_rejetpop_01285 = [];
const name_Commune_01285 = [];
const Pourcentage_01285 = [];
const Pourcentage_rejet_01285 = [];
const vote_gene_macron_01285 = [];
const vote_gene_lepen_01285 = [];
const vote_gene_rejet_01285 = [];

async function chartIt01285(){
    await GraphDATA01285();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01285-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01285
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01285
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01285-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01285,vote_lepen_01285,vote_rejet_01285]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01285-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01285,vote_lepenpop_01285,vote_rejetpop_01285]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01285"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01285
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01285
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01285
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
/*COMMUNE 01286*/
/*------------------------------------------------------------------ */
async function GraphDATA01286() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[285];
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
    vote_macron_01286.push(vote_macron); 
    vote_lepen_01286.push(vote_lepen);
    vote_rejet_01286.push(vote_rejet);
    vote_macronpop_01286.push(vote_macronMediane);
    vote_lepenpop_01286.push(vote_lepenMediane);
    vote_rejetpop_01286.push(vote_rejetMediane);
    name_Commune_01286.push(nameCommune);
    Pourcentage_01286.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01286.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01286.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01286.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01286.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01286 = [];
const vote_lepen_01286 = [];
const vote_rejet_01286 = [];
const vote_macronpop_01286 = [];
const vote_lepenpop_01286 = [];
const vote_rejetpop_01286 = [];
const name_Commune_01286 = [];
const Pourcentage_01286 = [];
const Pourcentage_rejet_01286 = [];
const vote_gene_macron_01286 = [];
const vote_gene_lepen_01286 = [];
const vote_gene_rejet_01286 = [];

async function chartIt01286(){
    await GraphDATA01286();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01286-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01286
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01286
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01286-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01286,vote_lepen_01286,vote_rejet_01286]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01286-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01286,vote_lepenpop_01286,vote_rejetpop_01286]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01286"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01286
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01286
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01286
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
/*COMMUNE 01287*/
/*------------------------------------------------------------------ */
async function GraphDATA01287() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[286];
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
    vote_macron_01287.push(vote_macron); 
    vote_lepen_01287.push(vote_lepen);
    vote_rejet_01287.push(vote_rejet);
    vote_macronpop_01287.push(vote_macronMediane);
    vote_lepenpop_01287.push(vote_lepenMediane);
    vote_rejetpop_01287.push(vote_rejetMediane);
    name_Commune_01287.push(nameCommune);
    Pourcentage_01287.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01287.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01287.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01287.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01287.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01287 = [];
const vote_lepen_01287 = [];
const vote_rejet_01287 = [];
const vote_macronpop_01287 = [];
const vote_lepenpop_01287 = [];
const vote_rejetpop_01287 = [];
const name_Commune_01287 = [];
const Pourcentage_01287 = [];
const Pourcentage_rejet_01287 = [];
const vote_gene_macron_01287 = [];
const vote_gene_lepen_01287 = [];
const vote_gene_rejet_01287 = [];

async function chartIt01287(){
    await GraphDATA01287();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01287-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01287
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01287
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01287-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01287,vote_lepen_01287,vote_rejet_01287]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01287-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01287,vote_lepenpop_01287,vote_rejetpop_01287]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01287"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01287
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01287
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01287
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
/*COMMUNE 01288*/
/*------------------------------------------------------------------ */
async function GraphDATA01288() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[287];
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
    vote_macron_01288.push(vote_macron); 
    vote_lepen_01288.push(vote_lepen);
    vote_rejet_01288.push(vote_rejet);
    vote_macronpop_01288.push(vote_macronMediane);
    vote_lepenpop_01288.push(vote_lepenMediane);
    vote_rejetpop_01288.push(vote_rejetMediane);
    name_Commune_01288.push(nameCommune);
    Pourcentage_01288.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01288.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01288.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01288.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01288.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01288 = [];
const vote_lepen_01288 = [];
const vote_rejet_01288 = [];
const vote_macronpop_01288 = [];
const vote_lepenpop_01288 = [];
const vote_rejetpop_01288 = [];
const name_Commune_01288 = [];
const Pourcentage_01288 = [];
const Pourcentage_rejet_01288 = [];
const vote_gene_macron_01288 = [];
const vote_gene_lepen_01288 = [];
const vote_gene_rejet_01288 = [];

async function chartIt01288(){
    await GraphDATA01288();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01288-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01288
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01288
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01288-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01288,vote_lepen_01288,vote_rejet_01288]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01288-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01288,vote_lepenpop_01288,vote_rejetpop_01288]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01288"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01288
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01288
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01288
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
/*COMMUNE 01289*/
/*------------------------------------------------------------------ */
async function GraphDATA01289() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[288];
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
    vote_macron_01289.push(vote_macron); 
    vote_lepen_01289.push(vote_lepen);
    vote_rejet_01289.push(vote_rejet);
    vote_macronpop_01289.push(vote_macronMediane);
    vote_lepenpop_01289.push(vote_lepenMediane);
    vote_rejetpop_01289.push(vote_rejetMediane);
    name_Commune_01289.push(nameCommune);
    Pourcentage_01289.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01289.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01289.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01289.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01289.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01289 = [];
const vote_lepen_01289 = [];
const vote_rejet_01289 = [];
const vote_macronpop_01289 = [];
const vote_lepenpop_01289 = [];
const vote_rejetpop_01289 = [];
const name_Commune_01289 = [];
const Pourcentage_01289 = [];
const Pourcentage_rejet_01289 = [];
const vote_gene_macron_01289 = [];
const vote_gene_lepen_01289 = [];
const vote_gene_rejet_01289 = [];

async function chartIt01289(){
    await GraphDATA01289();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01289-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01289
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01289
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01289-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01289,vote_lepen_01289,vote_rejet_01289]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01289-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01289,vote_lepenpop_01289,vote_rejetpop_01289]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01289"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01289
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01289
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01289
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
/*COMMUNE 01290*/
/*------------------------------------------------------------------ */
async function GraphDATA01290() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[289];
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
    vote_macron_01290.push(vote_macron); 
    vote_lepen_01290.push(vote_lepen);
    vote_rejet_01290.push(vote_rejet);
    vote_macronpop_01290.push(vote_macronMediane);
    vote_lepenpop_01290.push(vote_lepenMediane);
    vote_rejetpop_01290.push(vote_rejetMediane);
    name_Commune_01290.push(nameCommune);
    Pourcentage_01290.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01290.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01290.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01290.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01290.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01290 = [];
const vote_lepen_01290 = [];
const vote_rejet_01290 = [];
const vote_macronpop_01290 = [];
const vote_lepenpop_01290 = [];
const vote_rejetpop_01290 = [];
const name_Commune_01290 = [];
const Pourcentage_01290 = [];
const Pourcentage_rejet_01290 = [];
const vote_gene_macron_01290 = [];
const vote_gene_lepen_01290 = [];
const vote_gene_rejet_01290 = [];

async function chartIt01290(){
    await GraphDATA01290();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01290-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01290
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01290
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01290-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01290,vote_lepen_01290,vote_rejet_01290]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01290-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01290,vote_lepenpop_01290,vote_rejetpop_01290]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01290"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01290
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01290
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01290
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
/*COMMUNE 01291*/
/*------------------------------------------------------------------ */
async function GraphDATA01291() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[290];
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
    vote_macron_01291.push(vote_macron); 
    vote_lepen_01291.push(vote_lepen);
    vote_rejet_01291.push(vote_rejet);
    vote_macronpop_01291.push(vote_macronMediane);
    vote_lepenpop_01291.push(vote_lepenMediane);
    vote_rejetpop_01291.push(vote_rejetMediane);
    name_Commune_01291.push(nameCommune);
    Pourcentage_01291.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01291.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01291.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01291.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01291.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01291 = [];
const vote_lepen_01291 = [];
const vote_rejet_01291 = [];
const vote_macronpop_01291 = [];
const vote_lepenpop_01291 = [];
const vote_rejetpop_01291 = [];
const name_Commune_01291 = [];
const Pourcentage_01291 = [];
const Pourcentage_rejet_01291 = [];
const vote_gene_macron_01291 = [];
const vote_gene_lepen_01291 = [];
const vote_gene_rejet_01291 = [];

async function chartIt01291(){
    await GraphDATA01291();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01291-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01291
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01291
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01291-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01291,vote_lepen_01291,vote_rejet_01291]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01291-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01291,vote_lepenpop_01291,vote_rejetpop_01291]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01291"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01291
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01291
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01291
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
/*COMMUNE 01292*/
/*------------------------------------------------------------------ */
async function GraphDATA01292() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[291];
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
    vote_macron_01292.push(vote_macron); 
    vote_lepen_01292.push(vote_lepen);
    vote_rejet_01292.push(vote_rejet);
    vote_macronpop_01292.push(vote_macronMediane);
    vote_lepenpop_01292.push(vote_lepenMediane);
    vote_rejetpop_01292.push(vote_rejetMediane);
    name_Commune_01292.push(nameCommune);
    Pourcentage_01292.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01292.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01292.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01292.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01292.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01292 = [];
const vote_lepen_01292 = [];
const vote_rejet_01292 = [];
const vote_macronpop_01292 = [];
const vote_lepenpop_01292 = [];
const vote_rejetpop_01292 = [];
const name_Commune_01292 = [];
const Pourcentage_01292 = [];
const Pourcentage_rejet_01292 = [];
const vote_gene_macron_01292 = [];
const vote_gene_lepen_01292 = [];
const vote_gene_rejet_01292 = [];

async function chartIt01292(){
    await GraphDATA01292();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01292-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01292
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01292
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01292-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01292,vote_lepen_01292,vote_rejet_01292]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01292-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01292,vote_lepenpop_01292,vote_rejetpop_01292]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01292"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01292
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01292
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01292
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
/*COMMUNE 01293*/
/*------------------------------------------------------------------ */
async function GraphDATA01293() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[292];
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
    vote_macron_01293.push(vote_macron); 
    vote_lepen_01293.push(vote_lepen);
    vote_rejet_01293.push(vote_rejet);
    vote_macronpop_01293.push(vote_macronMediane);
    vote_lepenpop_01293.push(vote_lepenMediane);
    vote_rejetpop_01293.push(vote_rejetMediane);
    name_Commune_01293.push(nameCommune);
    Pourcentage_01293.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01293.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01293.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01293.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01293.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01293 = [];
const vote_lepen_01293 = [];
const vote_rejet_01293 = [];
const vote_macronpop_01293 = [];
const vote_lepenpop_01293 = [];
const vote_rejetpop_01293 = [];
const name_Commune_01293 = [];
const Pourcentage_01293 = [];
const Pourcentage_rejet_01293 = [];
const vote_gene_macron_01293 = [];
const vote_gene_lepen_01293 = [];
const vote_gene_rejet_01293 = [];

async function chartIt01293(){
    await GraphDATA01293();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01293-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01293
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01293
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01293-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01293,vote_lepen_01293,vote_rejet_01293]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01293-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01293,vote_lepenpop_01293,vote_rejetpop_01293]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01293"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01293
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01293
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01293
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
/*COMMUNE 01294*/
/*------------------------------------------------------------------ */
async function GraphDATA01294() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[293];
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
    vote_macron_01294.push(vote_macron); 
    vote_lepen_01294.push(vote_lepen);
    vote_rejet_01294.push(vote_rejet);
    vote_macronpop_01294.push(vote_macronMediane);
    vote_lepenpop_01294.push(vote_lepenMediane);
    vote_rejetpop_01294.push(vote_rejetMediane);
    name_Commune_01294.push(nameCommune);
    Pourcentage_01294.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01294.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01294.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01294.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01294.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01294 = [];
const vote_lepen_01294 = [];
const vote_rejet_01294 = [];
const vote_macronpop_01294 = [];
const vote_lepenpop_01294 = [];
const vote_rejetpop_01294 = [];
const name_Commune_01294 = [];
const Pourcentage_01294 = [];
const Pourcentage_rejet_01294 = [];
const vote_gene_macron_01294 = [];
const vote_gene_lepen_01294 = [];
const vote_gene_rejet_01294 = [];

async function chartIt01294(){
    await GraphDATA01294();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01294-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01294
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01294
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01294-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01294,vote_lepen_01294,vote_rejet_01294]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01294-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01294,vote_lepenpop_01294,vote_rejetpop_01294]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01294"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01294
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01294
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01294
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
/*COMMUNE 01295*/
/*------------------------------------------------------------------ */
async function GraphDATA01295() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[294];
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
    vote_macron_01295.push(vote_macron); 
    vote_lepen_01295.push(vote_lepen);
    vote_rejet_01295.push(vote_rejet);
    vote_macronpop_01295.push(vote_macronMediane);
    vote_lepenpop_01295.push(vote_lepenMediane);
    vote_rejetpop_01295.push(vote_rejetMediane);
    name_Commune_01295.push(nameCommune);
    Pourcentage_01295.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01295.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01295.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01295.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01295.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01295 = [];
const vote_lepen_01295 = [];
const vote_rejet_01295 = [];
const vote_macronpop_01295 = [];
const vote_lepenpop_01295 = [];
const vote_rejetpop_01295 = [];
const name_Commune_01295 = [];
const Pourcentage_01295 = [];
const Pourcentage_rejet_01295 = [];
const vote_gene_macron_01295 = [];
const vote_gene_lepen_01295 = [];
const vote_gene_rejet_01295 = [];

async function chartIt01295(){
    await GraphDATA01295();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01295-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01295
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01295
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01295-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01295,vote_lepen_01295,vote_rejet_01295]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01295-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01295,vote_lepenpop_01295,vote_rejetpop_01295]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01295"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01295
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01295
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01295
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
/*COMMUNE 01296*/
/*------------------------------------------------------------------ */
async function GraphDATA01296() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[295];
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
    vote_macron_01296.push(vote_macron); 
    vote_lepen_01296.push(vote_lepen);
    vote_rejet_01296.push(vote_rejet);
    vote_macronpop_01296.push(vote_macronMediane);
    vote_lepenpop_01296.push(vote_lepenMediane);
    vote_rejetpop_01296.push(vote_rejetMediane);
    name_Commune_01296.push(nameCommune);
    Pourcentage_01296.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01296.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01296.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01296.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01296.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01296 = [];
const vote_lepen_01296 = [];
const vote_rejet_01296 = [];
const vote_macronpop_01296 = [];
const vote_lepenpop_01296 = [];
const vote_rejetpop_01296 = [];
const name_Commune_01296 = [];
const Pourcentage_01296 = [];
const Pourcentage_rejet_01296 = [];
const vote_gene_macron_01296 = [];
const vote_gene_lepen_01296 = [];
const vote_gene_rejet_01296 = [];

async function chartIt01296(){
    await GraphDATA01296();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01296-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01296
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01296
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01296-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01296,vote_lepen_01296,vote_rejet_01296]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01296-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01296,vote_lepenpop_01296,vote_rejetpop_01296]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01296"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01296
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01296
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01296
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
/*COMMUNE 01297*/
/*------------------------------------------------------------------ */
async function GraphDATA01297() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[296];
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
    vote_macron_01297.push(vote_macron); 
    vote_lepen_01297.push(vote_lepen);
    vote_rejet_01297.push(vote_rejet);
    vote_macronpop_01297.push(vote_macronMediane);
    vote_lepenpop_01297.push(vote_lepenMediane);
    vote_rejetpop_01297.push(vote_rejetMediane);
    name_Commune_01297.push(nameCommune);
    Pourcentage_01297.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01297.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01297.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01297.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01297.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01297 = [];
const vote_lepen_01297 = [];
const vote_rejet_01297 = [];
const vote_macronpop_01297 = [];
const vote_lepenpop_01297 = [];
const vote_rejetpop_01297 = [];
const name_Commune_01297 = [];
const Pourcentage_01297 = [];
const Pourcentage_rejet_01297 = [];
const vote_gene_macron_01297 = [];
const vote_gene_lepen_01297 = [];
const vote_gene_rejet_01297 = [];

async function chartIt01297(){
    await GraphDATA01297();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01297-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01297
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01297
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01297-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01297,vote_lepen_01297,vote_rejet_01297]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01297-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01297,vote_lepenpop_01297,vote_rejetpop_01297]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01297"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01297
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01297
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01297
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
/*COMMUNE 01298*/
/*------------------------------------------------------------------ */
async function GraphDATA01298() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[297];
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
    vote_macron_01298.push(vote_macron); 
    vote_lepen_01298.push(vote_lepen);
    vote_rejet_01298.push(vote_rejet);
    vote_macronpop_01298.push(vote_macronMediane);
    vote_lepenpop_01298.push(vote_lepenMediane);
    vote_rejetpop_01298.push(vote_rejetMediane);
    name_Commune_01298.push(nameCommune);
    Pourcentage_01298.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01298.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01298.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01298.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01298.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01298 = [];
const vote_lepen_01298 = [];
const vote_rejet_01298 = [];
const vote_macronpop_01298 = [];
const vote_lepenpop_01298 = [];
const vote_rejetpop_01298 = [];
const name_Commune_01298 = [];
const Pourcentage_01298 = [];
const Pourcentage_rejet_01298 = [];
const vote_gene_macron_01298 = [];
const vote_gene_lepen_01298 = [];
const vote_gene_rejet_01298 = [];

async function chartIt01298(){
    await GraphDATA01298();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01298-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01298
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01298
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01298-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01298,vote_lepen_01298,vote_rejet_01298]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01298-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01298,vote_lepenpop_01298,vote_rejetpop_01298]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01298"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01298
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01298
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01298
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
/*COMMUNE 01299*/
/*------------------------------------------------------------------ */
async function GraphDATA01299() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[298];
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
    vote_macron_01299.push(vote_macron); 
    vote_lepen_01299.push(vote_lepen);
    vote_rejet_01299.push(vote_rejet);
    vote_macronpop_01299.push(vote_macronMediane);
    vote_lepenpop_01299.push(vote_lepenMediane);
    vote_rejetpop_01299.push(vote_rejetMediane);
    name_Commune_01299.push(nameCommune);
    Pourcentage_01299.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01299.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01299.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01299.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01299.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01299 = [];
const vote_lepen_01299 = [];
const vote_rejet_01299 = [];
const vote_macronpop_01299 = [];
const vote_lepenpop_01299 = [];
const vote_rejetpop_01299 = [];
const name_Commune_01299 = [];
const Pourcentage_01299 = [];
const Pourcentage_rejet_01299 = [];
const vote_gene_macron_01299 = [];
const vote_gene_lepen_01299 = [];
const vote_gene_rejet_01299 = [];

async function chartIt01299(){
    await GraphDATA01299();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01299-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01299
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01299
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01299-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01299,vote_lepen_01299,vote_rejet_01299]
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
    const myChart04 = new Chart(document.getElementById("polar-chart_01299-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01299,vote_lepenpop_01299,vote_rejetpop_01299]
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
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01299"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01299
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01299
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01299
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