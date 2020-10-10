/********************************************************************** */
/*JS GRAPHIQUE FICHIER DATA */
/********************************************************************** */
chartIt03201();
chartIt03202();
chartIt03203();
chartIt03204();
chartIt03205();
chartIt03206();
chartIt03207();
chartIt03208();
chartIt03209();
chartIt03210();
chartIt03211();
chartIt03212();
chartIt03213();
chartIt03214();
chartIt03215();
chartIt03216();
chartIt03217();
chartIt03218();
chartIt03219();
chartIt03220();
chartIt03221();
chartIt03222();
chartIt03223();
chartIt03224();
chartIt03225();
chartIt03226();
chartIt03227();
chartIt03228();
chartIt03229();
chartIt03230();
chartIt03231();
chartIt03232();
chartIt03233();
chartIt03234();
chartIt03235();
chartIt03236();
chartIt03237();
chartIt03238();
chartIt03239();
chartIt03240();
chartIt03241();
chartIt03242();
chartIt03243();
chartIt03244();
chartIt03245();
chartIt03246();
chartIt03247();
chartIt03248();
chartIt03249();
chartIt03250();
chartIt03251();
chartIt03252();
chartIt03253();
chartIt03254();
chartIt03255();
chartIt03256();
chartIt03257();
chartIt03258();
chartIt03259();
chartIt03260();
chartIt03261();
chartIt03262();
chartIt03263();
chartIt03264();
chartIt03265();
chartIt03266();
chartIt03267();
chartIt03268();
chartIt03269();
chartIt03270();
chartIt03271();
chartIt03272();
chartIt03273();
chartIt03274();
chartIt03275();
chartIt03276();
chartIt03277();
chartIt03278();
chartIt03279();
chartIt03280();
chartIt03281();
chartIt03282();
chartIt03283();
chartIt03284();
chartIt03285();
chartIt03286();
chartIt03287();
chartIt03288();
chartIt03289();
chartIt03290();
chartIt03291();
chartIt03292();
chartIt03293();
chartIt03294();
chartIt03295();
chartIt03296();
chartIt03297();
chartIt03298();
chartIt03299();
/*------------------------------------------------------------------ */
/*COMMUNE 03201*/
/*------------------------------------------------------------------ */
async function GraphDATA03201() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03201.push(vote_macron); 
    vote_lepen_03201.push(vote_lepen);
    vote_rejet_03201.push(vote_rejet);
    vote_macronpop_03201.push(vote_macronMediane);
    vote_lepenpop_03201.push(vote_lepenMediane);
    vote_rejetpop_03201.push(vote_rejetMediane);
    name_Commune_03201.push(nameCommune);
    Pourcentage_03201.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03201.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03201.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03201.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03201.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03201 = [];
const vote_lepen_03201 = [];
const vote_rejet_03201 = [];
const vote_macronpop_03201 = [];
const vote_lepenpop_03201 = [];
const vote_rejetpop_03201 = [];
const name_Commune_03201 = [];
const Pourcentage_03201 = [];
const Pourcentage_rejet_03201 = [];
const vote_gene_macron_03201 = [];
const vote_gene_lepen_03201 = [];
const vote_gene_rejet_03201 = [];

async function chartIt03201(){
    await GraphDATA03201();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03201-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03201
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03201
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03201-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03201,vote_lepen_03201,vote_rejet_03201]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03201-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03201,vote_lepenpop_03201,vote_rejetpop_03201]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03201"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03201
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03201
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03201
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
/*COMMUNE 03202*/
/*------------------------------------------------------------------ */
async function GraphDATA03202() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03202.push(vote_macron); 
    vote_lepen_03202.push(vote_lepen);
    vote_rejet_03202.push(vote_rejet);
    vote_macronpop_03202.push(vote_macronMediane);
    vote_lepenpop_03202.push(vote_lepenMediane);
    vote_rejetpop_03202.push(vote_rejetMediane);
    name_Commune_03202.push(nameCommune);
    Pourcentage_03202.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03202.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03202.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03202.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03202.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03202 = [];
const vote_lepen_03202 = [];
const vote_rejet_03202 = [];
const vote_macronpop_03202 = [];
const vote_lepenpop_03202 = [];
const vote_rejetpop_03202 = [];
const name_Commune_03202 = [];
const Pourcentage_03202 = [];
const Pourcentage_rejet_03202 = [];
const vote_gene_macron_03202 = [];
const vote_gene_lepen_03202 = [];
const vote_gene_rejet_03202 = [];

async function chartIt03202(){
    await GraphDATA03202();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03202-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03202
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03202
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03202-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03202,vote_lepen_03202,vote_rejet_03202]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03202-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03202,vote_lepenpop_03202,vote_rejetpop_03202]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03202"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03202
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03202
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03202
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
/*COMMUNE 03203*/
/*------------------------------------------------------------------ */
async function GraphDATA03203() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03203.push(vote_macron); 
    vote_lepen_03203.push(vote_lepen);
    vote_rejet_03203.push(vote_rejet);
    vote_macronpop_03203.push(vote_macronMediane);
    vote_lepenpop_03203.push(vote_lepenMediane);
    vote_rejetpop_03203.push(vote_rejetMediane);
    name_Commune_03203.push(nameCommune);
    Pourcentage_03203.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03203.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03203.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03203.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03203.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03203 = [];
const vote_lepen_03203 = [];
const vote_rejet_03203 = [];
const vote_macronpop_03203 = [];
const vote_lepenpop_03203 = [];
const vote_rejetpop_03203 = [];
const name_Commune_03203 = [];
const Pourcentage_03203 = [];
const Pourcentage_rejet_03203 = [];
const vote_gene_macron_03203 = [];
const vote_gene_lepen_03203 = [];
const vote_gene_rejet_03203 = [];

async function chartIt03203(){
    await GraphDATA03203();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03203-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03203
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03203
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03203-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03203,vote_lepen_03203,vote_rejet_03203]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03203-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03203,vote_lepenpop_03203,vote_rejetpop_03203]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03203"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03203
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03203
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03203
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
/*COMMUNE 03204*/
/*------------------------------------------------------------------ */
async function GraphDATA03204() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03204.push(vote_macron); 
    vote_lepen_03204.push(vote_lepen);
    vote_rejet_03204.push(vote_rejet);
    vote_macronpop_03204.push(vote_macronMediane);
    vote_lepenpop_03204.push(vote_lepenMediane);
    vote_rejetpop_03204.push(vote_rejetMediane);
    name_Commune_03204.push(nameCommune);
    Pourcentage_03204.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03204.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03204.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03204.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03204.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03204 = [];
const vote_lepen_03204 = [];
const vote_rejet_03204 = [];
const vote_macronpop_03204 = [];
const vote_lepenpop_03204 = [];
const vote_rejetpop_03204 = [];
const name_Commune_03204 = [];
const Pourcentage_03204 = [];
const Pourcentage_rejet_03204 = [];
const vote_gene_macron_03204 = [];
const vote_gene_lepen_03204 = [];
const vote_gene_rejet_03204 = [];

async function chartIt03204(){
    await GraphDATA03204();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03204-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03204
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03204
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03204-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03204,vote_lepen_03204,vote_rejet_03204]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03204-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03204,vote_lepenpop_03204,vote_rejetpop_03204]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03204"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03204
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03204
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03204
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
/*COMMUNE 03205*/
/*------------------------------------------------------------------ */
async function GraphDATA03205() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03205.push(vote_macron); 
    vote_lepen_03205.push(vote_lepen);
    vote_rejet_03205.push(vote_rejet);
    vote_macronpop_03205.push(vote_macronMediane);
    vote_lepenpop_03205.push(vote_lepenMediane);
    vote_rejetpop_03205.push(vote_rejetMediane);
    name_Commune_03205.push(nameCommune);
    Pourcentage_03205.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03205.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03205.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03205.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03205.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03205 = [];
const vote_lepen_03205 = [];
const vote_rejet_03205 = [];
const vote_macronpop_03205 = [];
const vote_lepenpop_03205 = [];
const vote_rejetpop_03205 = [];
const name_Commune_03205 = [];
const Pourcentage_03205 = [];
const Pourcentage_rejet_03205 = [];
const vote_gene_macron_03205 = [];
const vote_gene_lepen_03205 = [];
const vote_gene_rejet_03205 = [];

async function chartIt03205(){
    await GraphDATA03205();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03205-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03205
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03205
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03205-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03205,vote_lepen_03205,vote_rejet_03205]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03205-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03205,vote_lepenpop_03205,vote_rejetpop_03205]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03205"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03205
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03205
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03205
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
/*COMMUNE 03206*/
/*------------------------------------------------------------------ */
async function GraphDATA03206() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03206.push(vote_macron); 
    vote_lepen_03206.push(vote_lepen);
    vote_rejet_03206.push(vote_rejet);
    vote_macronpop_03206.push(vote_macronMediane);
    vote_lepenpop_03206.push(vote_lepenMediane);
    vote_rejetpop_03206.push(vote_rejetMediane);
    name_Commune_03206.push(nameCommune);
    Pourcentage_03206.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03206.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03206.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03206.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03206.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03206 = [];
const vote_lepen_03206 = [];
const vote_rejet_03206 = [];
const vote_macronpop_03206 = [];
const vote_lepenpop_03206 = [];
const vote_rejetpop_03206 = [];
const name_Commune_03206 = [];
const Pourcentage_03206 = [];
const Pourcentage_rejet_03206 = [];
const vote_gene_macron_03206 = [];
const vote_gene_lepen_03206 = [];
const vote_gene_rejet_03206 = [];

async function chartIt03206(){
    await GraphDATA03206();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03206-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03206
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03206
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03206-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03206,vote_lepen_03206,vote_rejet_03206]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03206-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03206,vote_lepenpop_03206,vote_rejetpop_03206]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03206"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03206
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03206
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03206
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
/*COMMUNE 03207*/
/*------------------------------------------------------------------ */
async function GraphDATA03207() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03207.push(vote_macron); 
    vote_lepen_03207.push(vote_lepen);
    vote_rejet_03207.push(vote_rejet);
    vote_macronpop_03207.push(vote_macronMediane);
    vote_lepenpop_03207.push(vote_lepenMediane);
    vote_rejetpop_03207.push(vote_rejetMediane);
    name_Commune_03207.push(nameCommune);
    Pourcentage_03207.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03207.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03207.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03207.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03207.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03207 = [];
const vote_lepen_03207 = [];
const vote_rejet_03207 = [];
const vote_macronpop_03207 = [];
const vote_lepenpop_03207 = [];
const vote_rejetpop_03207 = [];
const name_Commune_03207 = [];
const Pourcentage_03207 = [];
const Pourcentage_rejet_03207 = [];
const vote_gene_macron_03207 = [];
const vote_gene_lepen_03207 = [];
const vote_gene_rejet_03207 = [];

async function chartIt03207(){
    await GraphDATA03207();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03207-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03207
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03207
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03207-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03207,vote_lepen_03207,vote_rejet_03207]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03207-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03207,vote_lepenpop_03207,vote_rejetpop_03207]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03207"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03207
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03207
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03207
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
/*COMMUNE 03208*/
/*------------------------------------------------------------------ */
async function GraphDATA03208() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03208.push(vote_macron); 
    vote_lepen_03208.push(vote_lepen);
    vote_rejet_03208.push(vote_rejet);
    vote_macronpop_03208.push(vote_macronMediane);
    vote_lepenpop_03208.push(vote_lepenMediane);
    vote_rejetpop_03208.push(vote_rejetMediane);
    name_Commune_03208.push(nameCommune);
    Pourcentage_03208.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03208.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03208.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03208.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03208.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03208 = [];
const vote_lepen_03208 = [];
const vote_rejet_03208 = [];
const vote_macronpop_03208 = [];
const vote_lepenpop_03208 = [];
const vote_rejetpop_03208 = [];
const name_Commune_03208 = [];
const Pourcentage_03208 = [];
const Pourcentage_rejet_03208 = [];
const vote_gene_macron_03208 = [];
const vote_gene_lepen_03208 = [];
const vote_gene_rejet_03208 = [];

async function chartIt03208(){
    await GraphDATA03208();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03208-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03208
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03208
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03208-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03208,vote_lepen_03208,vote_rejet_03208]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03208-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03208,vote_lepenpop_03208,vote_rejetpop_03208]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03208"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03208
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03208
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03208
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
/*COMMUNE 03209*/
/*------------------------------------------------------------------ */
async function GraphDATA03209() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03209.push(vote_macron); 
    vote_lepen_03209.push(vote_lepen);
    vote_rejet_03209.push(vote_rejet);
    vote_macronpop_03209.push(vote_macronMediane);
    vote_lepenpop_03209.push(vote_lepenMediane);
    vote_rejetpop_03209.push(vote_rejetMediane);
    name_Commune_03209.push(nameCommune);
    Pourcentage_03209.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03209.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03209.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03209.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03209.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03209 = [];
const vote_lepen_03209 = [];
const vote_rejet_03209 = [];
const vote_macronpop_03209 = [];
const vote_lepenpop_03209 = [];
const vote_rejetpop_03209 = [];
const name_Commune_03209 = [];
const Pourcentage_03209 = [];
const Pourcentage_rejet_03209 = [];
const vote_gene_macron_03209 = [];
const vote_gene_lepen_03209 = [];
const vote_gene_rejet_03209 = [];

async function chartIt03209(){
    await GraphDATA03209();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03209-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03209
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03209
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03209-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03209,vote_lepen_03209,vote_rejet_03209]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03209-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03209,vote_lepenpop_03209,vote_rejetpop_03209]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03209"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03209
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03209
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03209
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
/*COMMUNE 03210*/
/*------------------------------------------------------------------ */
async function GraphDATA03210() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03210.push(vote_macron); 
    vote_lepen_03210.push(vote_lepen);
    vote_rejet_03210.push(vote_rejet);
    vote_macronpop_03210.push(vote_macronMediane);
    vote_lepenpop_03210.push(vote_lepenMediane);
    vote_rejetpop_03210.push(vote_rejetMediane);
    name_Commune_03210.push(nameCommune);
    Pourcentage_03210.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03210.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03210.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03210.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03210.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03210 = [];
const vote_lepen_03210 = [];
const vote_rejet_03210 = [];
const vote_macronpop_03210 = [];
const vote_lepenpop_03210 = [];
const vote_rejetpop_03210 = [];
const name_Commune_03210 = [];
const Pourcentage_03210 = [];
const Pourcentage_rejet_03210 = [];
const vote_gene_macron_03210 = [];
const vote_gene_lepen_03210 = [];
const vote_gene_rejet_03210 = [];

async function chartIt03210(){
    await GraphDATA03210();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03210-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03210
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03210
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03210-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03210,vote_lepen_03210,vote_rejet_03210]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03210-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03210,vote_lepenpop_03210,vote_rejetpop_03210]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03210"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03210
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03210
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03210
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
/*COMMUNE 03211*/
/*------------------------------------------------------------------ */
async function GraphDATA03211() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03211.push(vote_macron); 
    vote_lepen_03211.push(vote_lepen);
    vote_rejet_03211.push(vote_rejet);
    vote_macronpop_03211.push(vote_macronMediane);
    vote_lepenpop_03211.push(vote_lepenMediane);
    vote_rejetpop_03211.push(vote_rejetMediane);
    name_Commune_03211.push(nameCommune);
    Pourcentage_03211.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03211.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03211.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03211.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03211.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03211 = [];
const vote_lepen_03211 = [];
const vote_rejet_03211 = [];
const vote_macronpop_03211 = [];
const vote_lepenpop_03211 = [];
const vote_rejetpop_03211 = [];
const name_Commune_03211 = [];
const Pourcentage_03211 = [];
const Pourcentage_rejet_03211 = [];
const vote_gene_macron_03211 = [];
const vote_gene_lepen_03211 = [];
const vote_gene_rejet_03211 = [];

async function chartIt03211(){
    await GraphDATA03211();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03211-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03211
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03211
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03211-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03211,vote_lepen_03211,vote_rejet_03211]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03211-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03211,vote_lepenpop_03211,vote_rejetpop_03211]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03211"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03211
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03211
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03211
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
/*COMMUNE 03212*/
/*------------------------------------------------------------------ */
async function GraphDATA03212() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03212.push(vote_macron); 
    vote_lepen_03212.push(vote_lepen);
    vote_rejet_03212.push(vote_rejet);
    vote_macronpop_03212.push(vote_macronMediane);
    vote_lepenpop_03212.push(vote_lepenMediane);
    vote_rejetpop_03212.push(vote_rejetMediane);
    name_Commune_03212.push(nameCommune);
    Pourcentage_03212.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03212.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03212.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03212.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03212.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03212 = [];
const vote_lepen_03212 = [];
const vote_rejet_03212 = [];
const vote_macronpop_03212 = [];
const vote_lepenpop_03212 = [];
const vote_rejetpop_03212 = [];
const name_Commune_03212 = [];
const Pourcentage_03212 = [];
const Pourcentage_rejet_03212 = [];
const vote_gene_macron_03212 = [];
const vote_gene_lepen_03212 = [];
const vote_gene_rejet_03212 = [];

async function chartIt03212(){
    await GraphDATA03212();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03212-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03212
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03212
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03212-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03212,vote_lepen_03212,vote_rejet_03212]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03212-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03212,vote_lepenpop_03212,vote_rejetpop_03212]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03212"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03212
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03212
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03212
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
/*COMMUNE 03213*/
/*------------------------------------------------------------------ */
async function GraphDATA03213() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03213.push(vote_macron); 
    vote_lepen_03213.push(vote_lepen);
    vote_rejet_03213.push(vote_rejet);
    vote_macronpop_03213.push(vote_macronMediane);
    vote_lepenpop_03213.push(vote_lepenMediane);
    vote_rejetpop_03213.push(vote_rejetMediane);
    name_Commune_03213.push(nameCommune);
    Pourcentage_03213.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03213.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03213.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03213.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03213.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03213 = [];
const vote_lepen_03213 = [];
const vote_rejet_03213 = [];
const vote_macronpop_03213 = [];
const vote_lepenpop_03213 = [];
const vote_rejetpop_03213 = [];
const name_Commune_03213 = [];
const Pourcentage_03213 = [];
const Pourcentage_rejet_03213 = [];
const vote_gene_macron_03213 = [];
const vote_gene_lepen_03213 = [];
const vote_gene_rejet_03213 = [];

async function chartIt03213(){
    await GraphDATA03213();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03213-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03213
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03213
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03213-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03213,vote_lepen_03213,vote_rejet_03213]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03213-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03213,vote_lepenpop_03213,vote_rejetpop_03213]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03213"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03213
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03213
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03213
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
/*COMMUNE 03214*/
/*------------------------------------------------------------------ */
async function GraphDATA03214() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03214.push(vote_macron); 
    vote_lepen_03214.push(vote_lepen);
    vote_rejet_03214.push(vote_rejet);
    vote_macronpop_03214.push(vote_macronMediane);
    vote_lepenpop_03214.push(vote_lepenMediane);
    vote_rejetpop_03214.push(vote_rejetMediane);
    name_Commune_03214.push(nameCommune);
    Pourcentage_03214.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03214.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03214.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03214.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03214.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03214 = [];
const vote_lepen_03214 = [];
const vote_rejet_03214 = [];
const vote_macronpop_03214 = [];
const vote_lepenpop_03214 = [];
const vote_rejetpop_03214 = [];
const name_Commune_03214 = [];
const Pourcentage_03214 = [];
const Pourcentage_rejet_03214 = [];
const vote_gene_macron_03214 = [];
const vote_gene_lepen_03214 = [];
const vote_gene_rejet_03214 = [];

async function chartIt03214(){
    await GraphDATA03214();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03214-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03214
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03214
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03214-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03214,vote_lepen_03214,vote_rejet_03214]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03214-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03214,vote_lepenpop_03214,vote_rejetpop_03214]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03214"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03214
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03214
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03214
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
/*COMMUNE 03215*/
/*------------------------------------------------------------------ */
async function GraphDATA03215() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03215.push(vote_macron); 
    vote_lepen_03215.push(vote_lepen);
    vote_rejet_03215.push(vote_rejet);
    vote_macronpop_03215.push(vote_macronMediane);
    vote_lepenpop_03215.push(vote_lepenMediane);
    vote_rejetpop_03215.push(vote_rejetMediane);
    name_Commune_03215.push(nameCommune);
    Pourcentage_03215.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03215.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03215.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03215.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03215.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03215 = [];
const vote_lepen_03215 = [];
const vote_rejet_03215 = [];
const vote_macronpop_03215 = [];
const vote_lepenpop_03215 = [];
const vote_rejetpop_03215 = [];
const name_Commune_03215 = [];
const Pourcentage_03215 = [];
const Pourcentage_rejet_03215 = [];
const vote_gene_macron_03215 = [];
const vote_gene_lepen_03215 = [];
const vote_gene_rejet_03215 = [];

async function chartIt03215(){
    await GraphDATA03215();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03215-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03215
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03215
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03215-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03215,vote_lepen_03215,vote_rejet_03215]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03215-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03215,vote_lepenpop_03215,vote_rejetpop_03215]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03215"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03215
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03215
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03215
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
/*COMMUNE 03216*/
/*------------------------------------------------------------------ */
async function GraphDATA03216() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03216.push(vote_macron); 
    vote_lepen_03216.push(vote_lepen);
    vote_rejet_03216.push(vote_rejet);
    vote_macronpop_03216.push(vote_macronMediane);
    vote_lepenpop_03216.push(vote_lepenMediane);
    vote_rejetpop_03216.push(vote_rejetMediane);
    name_Commune_03216.push(nameCommune);
    Pourcentage_03216.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03216.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03216.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03216.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03216.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03216 = [];
const vote_lepen_03216 = [];
const vote_rejet_03216 = [];
const vote_macronpop_03216 = [];
const vote_lepenpop_03216 = [];
const vote_rejetpop_03216 = [];
const name_Commune_03216 = [];
const Pourcentage_03216 = [];
const Pourcentage_rejet_03216 = [];
const vote_gene_macron_03216 = [];
const vote_gene_lepen_03216 = [];
const vote_gene_rejet_03216 = [];

async function chartIt03216(){
    await GraphDATA03216();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03216-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03216
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03216
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03216-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03216,vote_lepen_03216,vote_rejet_03216]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03216-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03216,vote_lepenpop_03216,vote_rejetpop_03216]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03216"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03216
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03216
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03216
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
/*COMMUNE 03217*/
/*------------------------------------------------------------------ */
async function GraphDATA03217() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03217.push(vote_macron); 
    vote_lepen_03217.push(vote_lepen);
    vote_rejet_03217.push(vote_rejet);
    vote_macronpop_03217.push(vote_macronMediane);
    vote_lepenpop_03217.push(vote_lepenMediane);
    vote_rejetpop_03217.push(vote_rejetMediane);
    name_Commune_03217.push(nameCommune);
    Pourcentage_03217.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03217.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03217.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03217.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03217.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03217 = [];
const vote_lepen_03217 = [];
const vote_rejet_03217 = [];
const vote_macronpop_03217 = [];
const vote_lepenpop_03217 = [];
const vote_rejetpop_03217 = [];
const name_Commune_03217 = [];
const Pourcentage_03217 = [];
const Pourcentage_rejet_03217 = [];
const vote_gene_macron_03217 = [];
const vote_gene_lepen_03217 = [];
const vote_gene_rejet_03217 = [];

async function chartIt03217(){
    await GraphDATA03217();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03217-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03217
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03217
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03217-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03217,vote_lepen_03217,vote_rejet_03217]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03217-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03217,vote_lepenpop_03217,vote_rejetpop_03217]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03217"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03217
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03217
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03217
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
/*COMMUNE 03218*/
/*------------------------------------------------------------------ */
async function GraphDATA03218() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03218.push(vote_macron); 
    vote_lepen_03218.push(vote_lepen);
    vote_rejet_03218.push(vote_rejet);
    vote_macronpop_03218.push(vote_macronMediane);
    vote_lepenpop_03218.push(vote_lepenMediane);
    vote_rejetpop_03218.push(vote_rejetMediane);
    name_Commune_03218.push(nameCommune);
    Pourcentage_03218.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03218.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03218.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03218.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03218.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03218 = [];
const vote_lepen_03218 = [];
const vote_rejet_03218 = [];
const vote_macronpop_03218 = [];
const vote_lepenpop_03218 = [];
const vote_rejetpop_03218 = [];
const name_Commune_03218 = [];
const Pourcentage_03218 = [];
const Pourcentage_rejet_03218 = [];
const vote_gene_macron_03218 = [];
const vote_gene_lepen_03218 = [];
const vote_gene_rejet_03218 = [];

async function chartIt03218(){
    await GraphDATA03218();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03218-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03218
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03218
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03218-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03218,vote_lepen_03218,vote_rejet_03218]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03218-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03218,vote_lepenpop_03218,vote_rejetpop_03218]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03218"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03218
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03218
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03218
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
/*COMMUNE 03219*/
/*------------------------------------------------------------------ */
async function GraphDATA03219() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03219.push(vote_macron); 
    vote_lepen_03219.push(vote_lepen);
    vote_rejet_03219.push(vote_rejet);
    vote_macronpop_03219.push(vote_macronMediane);
    vote_lepenpop_03219.push(vote_lepenMediane);
    vote_rejetpop_03219.push(vote_rejetMediane);
    name_Commune_03219.push(nameCommune);
    Pourcentage_03219.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03219.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03219.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03219.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03219.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03219 = [];
const vote_lepen_03219 = [];
const vote_rejet_03219 = [];
const vote_macronpop_03219 = [];
const vote_lepenpop_03219 = [];
const vote_rejetpop_03219 = [];
const name_Commune_03219 = [];
const Pourcentage_03219 = [];
const Pourcentage_rejet_03219 = [];
const vote_gene_macron_03219 = [];
const vote_gene_lepen_03219 = [];
const vote_gene_rejet_03219 = [];

async function chartIt03219(){
    await GraphDATA03219();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03219-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03219
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03219
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03219-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03219,vote_lepen_03219,vote_rejet_03219]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03219-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03219,vote_lepenpop_03219,vote_rejetpop_03219]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03219"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03219
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03219
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03219
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
/*COMMUNE 03220*/
/*------------------------------------------------------------------ */
async function GraphDATA03220() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03220.push(vote_macron); 
    vote_lepen_03220.push(vote_lepen);
    vote_rejet_03220.push(vote_rejet);
    vote_macronpop_03220.push(vote_macronMediane);
    vote_lepenpop_03220.push(vote_lepenMediane);
    vote_rejetpop_03220.push(vote_rejetMediane);
    name_Commune_03220.push(nameCommune);
    Pourcentage_03220.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03220.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03220.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03220.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03220.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03220 = [];
const vote_lepen_03220 = [];
const vote_rejet_03220 = [];
const vote_macronpop_03220 = [];
const vote_lepenpop_03220 = [];
const vote_rejetpop_03220 = [];
const name_Commune_03220 = [];
const Pourcentage_03220 = [];
const Pourcentage_rejet_03220 = [];
const vote_gene_macron_03220 = [];
const vote_gene_lepen_03220 = [];
const vote_gene_rejet_03220 = [];

async function chartIt03220(){
    await GraphDATA03220();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03220-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03220
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03220
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03220-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03220,vote_lepen_03220,vote_rejet_03220]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03220-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03220,vote_lepenpop_03220,vote_rejetpop_03220]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03220"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03220
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03220
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03220
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
/*COMMUNE 03221*/
/*------------------------------------------------------------------ */
async function GraphDATA03221() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03221.push(vote_macron); 
    vote_lepen_03221.push(vote_lepen);
    vote_rejet_03221.push(vote_rejet);
    vote_macronpop_03221.push(vote_macronMediane);
    vote_lepenpop_03221.push(vote_lepenMediane);
    vote_rejetpop_03221.push(vote_rejetMediane);
    name_Commune_03221.push(nameCommune);
    Pourcentage_03221.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03221.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03221.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03221.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03221.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03221 = [];
const vote_lepen_03221 = [];
const vote_rejet_03221 = [];
const vote_macronpop_03221 = [];
const vote_lepenpop_03221 = [];
const vote_rejetpop_03221 = [];
const name_Commune_03221 = [];
const Pourcentage_03221 = [];
const Pourcentage_rejet_03221 = [];
const vote_gene_macron_03221 = [];
const vote_gene_lepen_03221 = [];
const vote_gene_rejet_03221 = [];

async function chartIt03221(){
    await GraphDATA03221();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03221-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03221
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03221
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03221-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03221,vote_lepen_03221,vote_rejet_03221]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03221-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03221,vote_lepenpop_03221,vote_rejetpop_03221]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03221"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03221
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03221
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03221
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
/*COMMUNE 03222*/
/*------------------------------------------------------------------ */
async function GraphDATA03222() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03222.push(vote_macron); 
    vote_lepen_03222.push(vote_lepen);
    vote_rejet_03222.push(vote_rejet);
    vote_macronpop_03222.push(vote_macronMediane);
    vote_lepenpop_03222.push(vote_lepenMediane);
    vote_rejetpop_03222.push(vote_rejetMediane);
    name_Commune_03222.push(nameCommune);
    Pourcentage_03222.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03222.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03222.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03222.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03222.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03222 = [];
const vote_lepen_03222 = [];
const vote_rejet_03222 = [];
const vote_macronpop_03222 = [];
const vote_lepenpop_03222 = [];
const vote_rejetpop_03222 = [];
const name_Commune_03222 = [];
const Pourcentage_03222 = [];
const Pourcentage_rejet_03222 = [];
const vote_gene_macron_03222 = [];
const vote_gene_lepen_03222 = [];
const vote_gene_rejet_03222 = [];

async function chartIt03222(){
    await GraphDATA03222();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03222-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03222
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03222
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03222-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03222,vote_lepen_03222,vote_rejet_03222]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03222-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03222,vote_lepenpop_03222,vote_rejetpop_03222]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03222"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03222
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03222
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03222
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
/*COMMUNE 03223*/
/*------------------------------------------------------------------ */
async function GraphDATA03223() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03223.push(vote_macron); 
    vote_lepen_03223.push(vote_lepen);
    vote_rejet_03223.push(vote_rejet);
    vote_macronpop_03223.push(vote_macronMediane);
    vote_lepenpop_03223.push(vote_lepenMediane);
    vote_rejetpop_03223.push(vote_rejetMediane);
    name_Commune_03223.push(nameCommune);
    Pourcentage_03223.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03223.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03223.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03223.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03223.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03223 = [];
const vote_lepen_03223 = [];
const vote_rejet_03223 = [];
const vote_macronpop_03223 = [];
const vote_lepenpop_03223 = [];
const vote_rejetpop_03223 = [];
const name_Commune_03223 = [];
const Pourcentage_03223 = [];
const Pourcentage_rejet_03223 = [];
const vote_gene_macron_03223 = [];
const vote_gene_lepen_03223 = [];
const vote_gene_rejet_03223 = [];

async function chartIt03223(){
    await GraphDATA03223();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03223-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03223
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03223
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03223-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03223,vote_lepen_03223,vote_rejet_03223]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03223-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03223,vote_lepenpop_03223,vote_rejetpop_03223]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03223"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03223
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03223
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03223
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
/*COMMUNE 03224*/
/*------------------------------------------------------------------ */
async function GraphDATA03224() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03224.push(vote_macron); 
    vote_lepen_03224.push(vote_lepen);
    vote_rejet_03224.push(vote_rejet);
    vote_macronpop_03224.push(vote_macronMediane);
    vote_lepenpop_03224.push(vote_lepenMediane);
    vote_rejetpop_03224.push(vote_rejetMediane);
    name_Commune_03224.push(nameCommune);
    Pourcentage_03224.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03224.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03224.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03224.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03224.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03224 = [];
const vote_lepen_03224 = [];
const vote_rejet_03224 = [];
const vote_macronpop_03224 = [];
const vote_lepenpop_03224 = [];
const vote_rejetpop_03224 = [];
const name_Commune_03224 = [];
const Pourcentage_03224 = [];
const Pourcentage_rejet_03224 = [];
const vote_gene_macron_03224 = [];
const vote_gene_lepen_03224 = [];
const vote_gene_rejet_03224 = [];

async function chartIt03224(){
    await GraphDATA03224();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03224-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03224
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03224
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03224-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03224,vote_lepen_03224,vote_rejet_03224]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03224-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03224,vote_lepenpop_03224,vote_rejetpop_03224]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03224"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03224
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03224
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03224
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
/*COMMUNE 03225*/
/*------------------------------------------------------------------ */
async function GraphDATA03225() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03225.push(vote_macron); 
    vote_lepen_03225.push(vote_lepen);
    vote_rejet_03225.push(vote_rejet);
    vote_macronpop_03225.push(vote_macronMediane);
    vote_lepenpop_03225.push(vote_lepenMediane);
    vote_rejetpop_03225.push(vote_rejetMediane);
    name_Commune_03225.push(nameCommune);
    Pourcentage_03225.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03225.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03225.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03225.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03225.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03225 = [];
const vote_lepen_03225 = [];
const vote_rejet_03225 = [];
const vote_macronpop_03225 = [];
const vote_lepenpop_03225 = [];
const vote_rejetpop_03225 = [];
const name_Commune_03225 = [];
const Pourcentage_03225 = [];
const Pourcentage_rejet_03225 = [];
const vote_gene_macron_03225 = [];
const vote_gene_lepen_03225 = [];
const vote_gene_rejet_03225 = [];

async function chartIt03225(){
    await GraphDATA03225();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03225-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03225
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03225
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03225-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03225,vote_lepen_03225,vote_rejet_03225]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03225-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03225,vote_lepenpop_03225,vote_rejetpop_03225]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03225"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03225
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03225
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03225
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
/*COMMUNE 03226*/
/*------------------------------------------------------------------ */
async function GraphDATA03226() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03226.push(vote_macron); 
    vote_lepen_03226.push(vote_lepen);
    vote_rejet_03226.push(vote_rejet);
    vote_macronpop_03226.push(vote_macronMediane);
    vote_lepenpop_03226.push(vote_lepenMediane);
    vote_rejetpop_03226.push(vote_rejetMediane);
    name_Commune_03226.push(nameCommune);
    Pourcentage_03226.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03226.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03226.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03226.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03226.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03226 = [];
const vote_lepen_03226 = [];
const vote_rejet_03226 = [];
const vote_macronpop_03226 = [];
const vote_lepenpop_03226 = [];
const vote_rejetpop_03226 = [];
const name_Commune_03226 = [];
const Pourcentage_03226 = [];
const Pourcentage_rejet_03226 = [];
const vote_gene_macron_03226 = [];
const vote_gene_lepen_03226 = [];
const vote_gene_rejet_03226 = [];

async function chartIt03226(){
    await GraphDATA03226();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03226-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03226
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03226
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03226-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03226,vote_lepen_03226,vote_rejet_03226]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03226-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03226,vote_lepenpop_03226,vote_rejetpop_03226]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03226"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03226
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03226
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03226
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
/*COMMUNE 03227*/
/*------------------------------------------------------------------ */
async function GraphDATA03227() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03227.push(vote_macron); 
    vote_lepen_03227.push(vote_lepen);
    vote_rejet_03227.push(vote_rejet);
    vote_macronpop_03227.push(vote_macronMediane);
    vote_lepenpop_03227.push(vote_lepenMediane);
    vote_rejetpop_03227.push(vote_rejetMediane);
    name_Commune_03227.push(nameCommune);
    Pourcentage_03227.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03227.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03227.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03227.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03227.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03227 = [];
const vote_lepen_03227 = [];
const vote_rejet_03227 = [];
const vote_macronpop_03227 = [];
const vote_lepenpop_03227 = [];
const vote_rejetpop_03227 = [];
const name_Commune_03227 = [];
const Pourcentage_03227 = [];
const Pourcentage_rejet_03227 = [];
const vote_gene_macron_03227 = [];
const vote_gene_lepen_03227 = [];
const vote_gene_rejet_03227 = [];

async function chartIt03227(){
    await GraphDATA03227();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03227-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03227
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03227
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03227-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03227,vote_lepen_03227,vote_rejet_03227]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03227-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03227,vote_lepenpop_03227,vote_rejetpop_03227]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03227"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03227
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03227
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03227
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
/*COMMUNE 03228*/
/*------------------------------------------------------------------ */
async function GraphDATA03228() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03228.push(vote_macron); 
    vote_lepen_03228.push(vote_lepen);
    vote_rejet_03228.push(vote_rejet);
    vote_macronpop_03228.push(vote_macronMediane);
    vote_lepenpop_03228.push(vote_lepenMediane);
    vote_rejetpop_03228.push(vote_rejetMediane);
    name_Commune_03228.push(nameCommune);
    Pourcentage_03228.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03228.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03228.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03228.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03228.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03228 = [];
const vote_lepen_03228 = [];
const vote_rejet_03228 = [];
const vote_macronpop_03228 = [];
const vote_lepenpop_03228 = [];
const vote_rejetpop_03228 = [];
const name_Commune_03228 = [];
const Pourcentage_03228 = [];
const Pourcentage_rejet_03228 = [];
const vote_gene_macron_03228 = [];
const vote_gene_lepen_03228 = [];
const vote_gene_rejet_03228 = [];

async function chartIt03228(){
    await GraphDATA03228();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03228-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03228
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03228
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03228-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03228,vote_lepen_03228,vote_rejet_03228]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03228-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03228,vote_lepenpop_03228,vote_rejetpop_03228]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03228"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03228
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03228
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03228
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
/*COMMUNE 03229*/
/*------------------------------------------------------------------ */
async function GraphDATA03229() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03229.push(vote_macron); 
    vote_lepen_03229.push(vote_lepen);
    vote_rejet_03229.push(vote_rejet);
    vote_macronpop_03229.push(vote_macronMediane);
    vote_lepenpop_03229.push(vote_lepenMediane);
    vote_rejetpop_03229.push(vote_rejetMediane);
    name_Commune_03229.push(nameCommune);
    Pourcentage_03229.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03229.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03229.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03229.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03229.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03229 = [];
const vote_lepen_03229 = [];
const vote_rejet_03229 = [];
const vote_macronpop_03229 = [];
const vote_lepenpop_03229 = [];
const vote_rejetpop_03229 = [];
const name_Commune_03229 = [];
const Pourcentage_03229 = [];
const Pourcentage_rejet_03229 = [];
const vote_gene_macron_03229 = [];
const vote_gene_lepen_03229 = [];
const vote_gene_rejet_03229 = [];

async function chartIt03229(){
    await GraphDATA03229();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03229-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03229
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03229
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03229-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03229,vote_lepen_03229,vote_rejet_03229]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03229-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03229,vote_lepenpop_03229,vote_rejetpop_03229]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03229"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03229
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03229
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03229
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
/*COMMUNE 03230*/
/*------------------------------------------------------------------ */
async function GraphDATA03230() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03230.push(vote_macron); 
    vote_lepen_03230.push(vote_lepen);
    vote_rejet_03230.push(vote_rejet);
    vote_macronpop_03230.push(vote_macronMediane);
    vote_lepenpop_03230.push(vote_lepenMediane);
    vote_rejetpop_03230.push(vote_rejetMediane);
    name_Commune_03230.push(nameCommune);
    Pourcentage_03230.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03230.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03230.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03230.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03230.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03230 = [];
const vote_lepen_03230 = [];
const vote_rejet_03230 = [];
const vote_macronpop_03230 = [];
const vote_lepenpop_03230 = [];
const vote_rejetpop_03230 = [];
const name_Commune_03230 = [];
const Pourcentage_03230 = [];
const Pourcentage_rejet_03230 = [];
const vote_gene_macron_03230 = [];
const vote_gene_lepen_03230 = [];
const vote_gene_rejet_03230 = [];

async function chartIt03230(){
    await GraphDATA03230();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03230-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03230
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03230
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03230-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03230,vote_lepen_03230,vote_rejet_03230]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03230-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03230,vote_lepenpop_03230,vote_rejetpop_03230]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03230"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03230
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03230
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03230
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
/*COMMUNE 03231*/
/*------------------------------------------------------------------ */
async function GraphDATA03231() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03231.push(vote_macron); 
    vote_lepen_03231.push(vote_lepen);
    vote_rejet_03231.push(vote_rejet);
    vote_macronpop_03231.push(vote_macronMediane);
    vote_lepenpop_03231.push(vote_lepenMediane);
    vote_rejetpop_03231.push(vote_rejetMediane);
    name_Commune_03231.push(nameCommune);
    Pourcentage_03231.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03231.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03231.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03231.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03231.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03231 = [];
const vote_lepen_03231 = [];
const vote_rejet_03231 = [];
const vote_macronpop_03231 = [];
const vote_lepenpop_03231 = [];
const vote_rejetpop_03231 = [];
const name_Commune_03231 = [];
const Pourcentage_03231 = [];
const Pourcentage_rejet_03231 = [];
const vote_gene_macron_03231 = [];
const vote_gene_lepen_03231 = [];
const vote_gene_rejet_03231 = [];

async function chartIt03231(){
    await GraphDATA03231();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03231-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03231
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03231
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03231-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03231,vote_lepen_03231,vote_rejet_03231]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03231-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03231,vote_lepenpop_03231,vote_rejetpop_03231]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03231"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03231
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03231
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03231
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
/*COMMUNE 03232*/
/*------------------------------------------------------------------ */
async function GraphDATA03232() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03232.push(vote_macron); 
    vote_lepen_03232.push(vote_lepen);
    vote_rejet_03232.push(vote_rejet);
    vote_macronpop_03232.push(vote_macronMediane);
    vote_lepenpop_03232.push(vote_lepenMediane);
    vote_rejetpop_03232.push(vote_rejetMediane);
    name_Commune_03232.push(nameCommune);
    Pourcentage_03232.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03232.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03232.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03232.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03232.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03232 = [];
const vote_lepen_03232 = [];
const vote_rejet_03232 = [];
const vote_macronpop_03232 = [];
const vote_lepenpop_03232 = [];
const vote_rejetpop_03232 = [];
const name_Commune_03232 = [];
const Pourcentage_03232 = [];
const Pourcentage_rejet_03232 = [];
const vote_gene_macron_03232 = [];
const vote_gene_lepen_03232 = [];
const vote_gene_rejet_03232 = [];

async function chartIt03232(){
    await GraphDATA03232();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03232-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03232
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03232
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03232-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03232,vote_lepen_03232,vote_rejet_03232]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03232-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03232,vote_lepenpop_03232,vote_rejetpop_03232]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03232"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03232
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03232
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03232
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
/*COMMUNE 03233*/
/*------------------------------------------------------------------ */
async function GraphDATA03233() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03233.push(vote_macron); 
    vote_lepen_03233.push(vote_lepen);
    vote_rejet_03233.push(vote_rejet);
    vote_macronpop_03233.push(vote_macronMediane);
    vote_lepenpop_03233.push(vote_lepenMediane);
    vote_rejetpop_03233.push(vote_rejetMediane);
    name_Commune_03233.push(nameCommune);
    Pourcentage_03233.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03233.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03233.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03233.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03233.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03233 = [];
const vote_lepen_03233 = [];
const vote_rejet_03233 = [];
const vote_macronpop_03233 = [];
const vote_lepenpop_03233 = [];
const vote_rejetpop_03233 = [];
const name_Commune_03233 = [];
const Pourcentage_03233 = [];
const Pourcentage_rejet_03233 = [];
const vote_gene_macron_03233 = [];
const vote_gene_lepen_03233 = [];
const vote_gene_rejet_03233 = [];

async function chartIt03233(){
    await GraphDATA03233();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03233-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03233
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03233
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03233-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03233,vote_lepen_03233,vote_rejet_03233]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03233-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03233,vote_lepenpop_03233,vote_rejetpop_03233]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03233"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03233
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03233
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03233
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
/*COMMUNE 03234*/
/*------------------------------------------------------------------ */
async function GraphDATA03234() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03234.push(vote_macron); 
    vote_lepen_03234.push(vote_lepen);
    vote_rejet_03234.push(vote_rejet);
    vote_macronpop_03234.push(vote_macronMediane);
    vote_lepenpop_03234.push(vote_lepenMediane);
    vote_rejetpop_03234.push(vote_rejetMediane);
    name_Commune_03234.push(nameCommune);
    Pourcentage_03234.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03234.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03234.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03234.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03234.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03234 = [];
const vote_lepen_03234 = [];
const vote_rejet_03234 = [];
const vote_macronpop_03234 = [];
const vote_lepenpop_03234 = [];
const vote_rejetpop_03234 = [];
const name_Commune_03234 = [];
const Pourcentage_03234 = [];
const Pourcentage_rejet_03234 = [];
const vote_gene_macron_03234 = [];
const vote_gene_lepen_03234 = [];
const vote_gene_rejet_03234 = [];

async function chartIt03234(){
    await GraphDATA03234();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03234-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03234
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03234
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03234-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03234,vote_lepen_03234,vote_rejet_03234]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03234-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03234,vote_lepenpop_03234,vote_rejetpop_03234]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03234"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03234
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03234
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03234
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
/*COMMUNE 03235*/
/*------------------------------------------------------------------ */
async function GraphDATA03235() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03235.push(vote_macron); 
    vote_lepen_03235.push(vote_lepen);
    vote_rejet_03235.push(vote_rejet);
    vote_macronpop_03235.push(vote_macronMediane);
    vote_lepenpop_03235.push(vote_lepenMediane);
    vote_rejetpop_03235.push(vote_rejetMediane);
    name_Commune_03235.push(nameCommune);
    Pourcentage_03235.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03235.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03235.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03235.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03235.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03235 = [];
const vote_lepen_03235 = [];
const vote_rejet_03235 = [];
const vote_macronpop_03235 = [];
const vote_lepenpop_03235 = [];
const vote_rejetpop_03235 = [];
const name_Commune_03235 = [];
const Pourcentage_03235 = [];
const Pourcentage_rejet_03235 = [];
const vote_gene_macron_03235 = [];
const vote_gene_lepen_03235 = [];
const vote_gene_rejet_03235 = [];

async function chartIt03235(){
    await GraphDATA03235();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03235-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03235
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03235
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03235-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03235,vote_lepen_03235,vote_rejet_03235]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03235-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03235,vote_lepenpop_03235,vote_rejetpop_03235]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03235"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03235
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03235
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03235
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
/*COMMUNE 03236*/
/*------------------------------------------------------------------ */
async function GraphDATA03236() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03236.push(vote_macron); 
    vote_lepen_03236.push(vote_lepen);
    vote_rejet_03236.push(vote_rejet);
    vote_macronpop_03236.push(vote_macronMediane);
    vote_lepenpop_03236.push(vote_lepenMediane);
    vote_rejetpop_03236.push(vote_rejetMediane);
    name_Commune_03236.push(nameCommune);
    Pourcentage_03236.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03236.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03236.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03236.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03236.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03236 = [];
const vote_lepen_03236 = [];
const vote_rejet_03236 = [];
const vote_macronpop_03236 = [];
const vote_lepenpop_03236 = [];
const vote_rejetpop_03236 = [];
const name_Commune_03236 = [];
const Pourcentage_03236 = [];
const Pourcentage_rejet_03236 = [];
const vote_gene_macron_03236 = [];
const vote_gene_lepen_03236 = [];
const vote_gene_rejet_03236 = [];

async function chartIt03236(){
    await GraphDATA03236();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03236-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03236
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03236
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03236-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03236,vote_lepen_03236,vote_rejet_03236]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03236-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03236,vote_lepenpop_03236,vote_rejetpop_03236]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03236"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03236
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03236
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03236
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
/*COMMUNE 03237*/
/*------------------------------------------------------------------ */
async function GraphDATA03237() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03237.push(vote_macron); 
    vote_lepen_03237.push(vote_lepen);
    vote_rejet_03237.push(vote_rejet);
    vote_macronpop_03237.push(vote_macronMediane);
    vote_lepenpop_03237.push(vote_lepenMediane);
    vote_rejetpop_03237.push(vote_rejetMediane);
    name_Commune_03237.push(nameCommune);
    Pourcentage_03237.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03237.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03237.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03237.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03237.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03237 = [];
const vote_lepen_03237 = [];
const vote_rejet_03237 = [];
const vote_macronpop_03237 = [];
const vote_lepenpop_03237 = [];
const vote_rejetpop_03237 = [];
const name_Commune_03237 = [];
const Pourcentage_03237 = [];
const Pourcentage_rejet_03237 = [];
const vote_gene_macron_03237 = [];
const vote_gene_lepen_03237 = [];
const vote_gene_rejet_03237 = [];

async function chartIt03237(){
    await GraphDATA03237();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03237-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03237
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03237
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03237-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03237,vote_lepen_03237,vote_rejet_03237]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03237-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03237,vote_lepenpop_03237,vote_rejetpop_03237]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03237"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03237
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03237
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03237
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
/*COMMUNE 03238*/
/*------------------------------------------------------------------ */
async function GraphDATA03238() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03238.push(vote_macron); 
    vote_lepen_03238.push(vote_lepen);
    vote_rejet_03238.push(vote_rejet);
    vote_macronpop_03238.push(vote_macronMediane);
    vote_lepenpop_03238.push(vote_lepenMediane);
    vote_rejetpop_03238.push(vote_rejetMediane);
    name_Commune_03238.push(nameCommune);
    Pourcentage_03238.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03238.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03238.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03238.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03238.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03238 = [];
const vote_lepen_03238 = [];
const vote_rejet_03238 = [];
const vote_macronpop_03238 = [];
const vote_lepenpop_03238 = [];
const vote_rejetpop_03238 = [];
const name_Commune_03238 = [];
const Pourcentage_03238 = [];
const Pourcentage_rejet_03238 = [];
const vote_gene_macron_03238 = [];
const vote_gene_lepen_03238 = [];
const vote_gene_rejet_03238 = [];

async function chartIt03238(){
    await GraphDATA03238();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03238-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03238
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03238
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03238-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03238,vote_lepen_03238,vote_rejet_03238]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03238-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03238,vote_lepenpop_03238,vote_rejetpop_03238]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03238"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03238
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03238
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03238
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
/*COMMUNE 03239*/
/*------------------------------------------------------------------ */
async function GraphDATA03239() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03239.push(vote_macron); 
    vote_lepen_03239.push(vote_lepen);
    vote_rejet_03239.push(vote_rejet);
    vote_macronpop_03239.push(vote_macronMediane);
    vote_lepenpop_03239.push(vote_lepenMediane);
    vote_rejetpop_03239.push(vote_rejetMediane);
    name_Commune_03239.push(nameCommune);
    Pourcentage_03239.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03239.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03239.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03239.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03239.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03239 = [];
const vote_lepen_03239 = [];
const vote_rejet_03239 = [];
const vote_macronpop_03239 = [];
const vote_lepenpop_03239 = [];
const vote_rejetpop_03239 = [];
const name_Commune_03239 = [];
const Pourcentage_03239 = [];
const Pourcentage_rejet_03239 = [];
const vote_gene_macron_03239 = [];
const vote_gene_lepen_03239 = [];
const vote_gene_rejet_03239 = [];

async function chartIt03239(){
    await GraphDATA03239();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03239-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03239
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03239
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03239-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03239,vote_lepen_03239,vote_rejet_03239]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03239-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03239,vote_lepenpop_03239,vote_rejetpop_03239]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03239"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03239
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03239
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03239
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
/*COMMUNE 03240*/
/*------------------------------------------------------------------ */
async function GraphDATA03240() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03240.push(vote_macron); 
    vote_lepen_03240.push(vote_lepen);
    vote_rejet_03240.push(vote_rejet);
    vote_macronpop_03240.push(vote_macronMediane);
    vote_lepenpop_03240.push(vote_lepenMediane);
    vote_rejetpop_03240.push(vote_rejetMediane);
    name_Commune_03240.push(nameCommune);
    Pourcentage_03240.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03240.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03240.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03240.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03240.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03240 = [];
const vote_lepen_03240 = [];
const vote_rejet_03240 = [];
const vote_macronpop_03240 = [];
const vote_lepenpop_03240 = [];
const vote_rejetpop_03240 = [];
const name_Commune_03240 = [];
const Pourcentage_03240 = [];
const Pourcentage_rejet_03240 = [];
const vote_gene_macron_03240 = [];
const vote_gene_lepen_03240 = [];
const vote_gene_rejet_03240 = [];

async function chartIt03240(){
    await GraphDATA03240();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03240-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03240
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03240
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03240-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03240,vote_lepen_03240,vote_rejet_03240]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03240-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03240,vote_lepenpop_03240,vote_rejetpop_03240]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03240"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03240
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03240
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03240
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
/*COMMUNE 03241*/
/*------------------------------------------------------------------ */
async function GraphDATA03241() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03241.push(vote_macron); 
    vote_lepen_03241.push(vote_lepen);
    vote_rejet_03241.push(vote_rejet);
    vote_macronpop_03241.push(vote_macronMediane);
    vote_lepenpop_03241.push(vote_lepenMediane);
    vote_rejetpop_03241.push(vote_rejetMediane);
    name_Commune_03241.push(nameCommune);
    Pourcentage_03241.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03241.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03241.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03241.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03241.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03241 = [];
const vote_lepen_03241 = [];
const vote_rejet_03241 = [];
const vote_macronpop_03241 = [];
const vote_lepenpop_03241 = [];
const vote_rejetpop_03241 = [];
const name_Commune_03241 = [];
const Pourcentage_03241 = [];
const Pourcentage_rejet_03241 = [];
const vote_gene_macron_03241 = [];
const vote_gene_lepen_03241 = [];
const vote_gene_rejet_03241 = [];

async function chartIt03241(){
    await GraphDATA03241();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03241-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03241
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03241
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03241-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03241,vote_lepen_03241,vote_rejet_03241]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03241-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03241,vote_lepenpop_03241,vote_rejetpop_03241]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03241"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03241
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03241
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03241
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
/*COMMUNE 03242*/
/*------------------------------------------------------------------ */
async function GraphDATA03242() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03242.push(vote_macron); 
    vote_lepen_03242.push(vote_lepen);
    vote_rejet_03242.push(vote_rejet);
    vote_macronpop_03242.push(vote_macronMediane);
    vote_lepenpop_03242.push(vote_lepenMediane);
    vote_rejetpop_03242.push(vote_rejetMediane);
    name_Commune_03242.push(nameCommune);
    Pourcentage_03242.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03242.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03242.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03242.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03242.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03242 = [];
const vote_lepen_03242 = [];
const vote_rejet_03242 = [];
const vote_macronpop_03242 = [];
const vote_lepenpop_03242 = [];
const vote_rejetpop_03242 = [];
const name_Commune_03242 = [];
const Pourcentage_03242 = [];
const Pourcentage_rejet_03242 = [];
const vote_gene_macron_03242 = [];
const vote_gene_lepen_03242 = [];
const vote_gene_rejet_03242 = [];

async function chartIt03242(){
    await GraphDATA03242();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03242-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03242
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03242
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03242-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03242,vote_lepen_03242,vote_rejet_03242]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03242-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03242,vote_lepenpop_03242,vote_rejetpop_03242]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03242"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03242
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03242
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03242
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
/*COMMUNE 03243*/
/*------------------------------------------------------------------ */
async function GraphDATA03243() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03243.push(vote_macron); 
    vote_lepen_03243.push(vote_lepen);
    vote_rejet_03243.push(vote_rejet);
    vote_macronpop_03243.push(vote_macronMediane);
    vote_lepenpop_03243.push(vote_lepenMediane);
    vote_rejetpop_03243.push(vote_rejetMediane);
    name_Commune_03243.push(nameCommune);
    Pourcentage_03243.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03243.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03243.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03243.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03243.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03243 = [];
const vote_lepen_03243 = [];
const vote_rejet_03243 = [];
const vote_macronpop_03243 = [];
const vote_lepenpop_03243 = [];
const vote_rejetpop_03243 = [];
const name_Commune_03243 = [];
const Pourcentage_03243 = [];
const Pourcentage_rejet_03243 = [];
const vote_gene_macron_03243 = [];
const vote_gene_lepen_03243 = [];
const vote_gene_rejet_03243 = [];

async function chartIt03243(){
    await GraphDATA03243();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03243-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03243
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03243
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03243-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03243,vote_lepen_03243,vote_rejet_03243]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03243-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03243,vote_lepenpop_03243,vote_rejetpop_03243]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03243"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03243
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03243
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03243
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
/*COMMUNE 03244*/
/*------------------------------------------------------------------ */
async function GraphDATA03244() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03244.push(vote_macron); 
    vote_lepen_03244.push(vote_lepen);
    vote_rejet_03244.push(vote_rejet);
    vote_macronpop_03244.push(vote_macronMediane);
    vote_lepenpop_03244.push(vote_lepenMediane);
    vote_rejetpop_03244.push(vote_rejetMediane);
    name_Commune_03244.push(nameCommune);
    Pourcentage_03244.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03244.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03244.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03244.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03244.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03244 = [];
const vote_lepen_03244 = [];
const vote_rejet_03244 = [];
const vote_macronpop_03244 = [];
const vote_lepenpop_03244 = [];
const vote_rejetpop_03244 = [];
const name_Commune_03244 = [];
const Pourcentage_03244 = [];
const Pourcentage_rejet_03244 = [];
const vote_gene_macron_03244 = [];
const vote_gene_lepen_03244 = [];
const vote_gene_rejet_03244 = [];

async function chartIt03244(){
    await GraphDATA03244();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03244-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03244
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03244
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03244-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03244,vote_lepen_03244,vote_rejet_03244]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03244-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03244,vote_lepenpop_03244,vote_rejetpop_03244]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03244"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03244
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03244
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03244
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
/*COMMUNE 03245*/
/*------------------------------------------------------------------ */
async function GraphDATA03245() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03245.push(vote_macron); 
    vote_lepen_03245.push(vote_lepen);
    vote_rejet_03245.push(vote_rejet);
    vote_macronpop_03245.push(vote_macronMediane);
    vote_lepenpop_03245.push(vote_lepenMediane);
    vote_rejetpop_03245.push(vote_rejetMediane);
    name_Commune_03245.push(nameCommune);
    Pourcentage_03245.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03245.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03245.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03245.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03245.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03245 = [];
const vote_lepen_03245 = [];
const vote_rejet_03245 = [];
const vote_macronpop_03245 = [];
const vote_lepenpop_03245 = [];
const vote_rejetpop_03245 = [];
const name_Commune_03245 = [];
const Pourcentage_03245 = [];
const Pourcentage_rejet_03245 = [];
const vote_gene_macron_03245 = [];
const vote_gene_lepen_03245 = [];
const vote_gene_rejet_03245 = [];

async function chartIt03245(){
    await GraphDATA03245();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03245-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03245
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03245
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03245-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03245,vote_lepen_03245,vote_rejet_03245]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03245-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03245,vote_lepenpop_03245,vote_rejetpop_03245]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03245"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03245
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03245
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03245
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
/*COMMUNE 03246*/
/*------------------------------------------------------------------ */
async function GraphDATA03246() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03246.push(vote_macron); 
    vote_lepen_03246.push(vote_lepen);
    vote_rejet_03246.push(vote_rejet);
    vote_macronpop_03246.push(vote_macronMediane);
    vote_lepenpop_03246.push(vote_lepenMediane);
    vote_rejetpop_03246.push(vote_rejetMediane);
    name_Commune_03246.push(nameCommune);
    Pourcentage_03246.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03246.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03246.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03246.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03246.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03246 = [];
const vote_lepen_03246 = [];
const vote_rejet_03246 = [];
const vote_macronpop_03246 = [];
const vote_lepenpop_03246 = [];
const vote_rejetpop_03246 = [];
const name_Commune_03246 = [];
const Pourcentage_03246 = [];
const Pourcentage_rejet_03246 = [];
const vote_gene_macron_03246 = [];
const vote_gene_lepen_03246 = [];
const vote_gene_rejet_03246 = [];

async function chartIt03246(){
    await GraphDATA03246();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03246-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03246
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03246
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03246-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03246,vote_lepen_03246,vote_rejet_03246]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03246-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03246,vote_lepenpop_03246,vote_rejetpop_03246]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03246"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03246
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03246
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03246
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
/*COMMUNE 03247*/
/*------------------------------------------------------------------ */
async function GraphDATA03247() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03247.push(vote_macron); 
    vote_lepen_03247.push(vote_lepen);
    vote_rejet_03247.push(vote_rejet);
    vote_macronpop_03247.push(vote_macronMediane);
    vote_lepenpop_03247.push(vote_lepenMediane);
    vote_rejetpop_03247.push(vote_rejetMediane);
    name_Commune_03247.push(nameCommune);
    Pourcentage_03247.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03247.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03247.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03247.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03247.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03247 = [];
const vote_lepen_03247 = [];
const vote_rejet_03247 = [];
const vote_macronpop_03247 = [];
const vote_lepenpop_03247 = [];
const vote_rejetpop_03247 = [];
const name_Commune_03247 = [];
const Pourcentage_03247 = [];
const Pourcentage_rejet_03247 = [];
const vote_gene_macron_03247 = [];
const vote_gene_lepen_03247 = [];
const vote_gene_rejet_03247 = [];

async function chartIt03247(){
    await GraphDATA03247();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03247-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03247
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03247
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03247-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03247,vote_lepen_03247,vote_rejet_03247]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03247-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03247,vote_lepenpop_03247,vote_rejetpop_03247]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03247"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03247
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03247
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03247
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
/*COMMUNE 03248*/
/*------------------------------------------------------------------ */
async function GraphDATA03248() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03248.push(vote_macron); 
    vote_lepen_03248.push(vote_lepen);
    vote_rejet_03248.push(vote_rejet);
    vote_macronpop_03248.push(vote_macronMediane);
    vote_lepenpop_03248.push(vote_lepenMediane);
    vote_rejetpop_03248.push(vote_rejetMediane);
    name_Commune_03248.push(nameCommune);
    Pourcentage_03248.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03248.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03248.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03248.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03248.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03248 = [];
const vote_lepen_03248 = [];
const vote_rejet_03248 = [];
const vote_macronpop_03248 = [];
const vote_lepenpop_03248 = [];
const vote_rejetpop_03248 = [];
const name_Commune_03248 = [];
const Pourcentage_03248 = [];
const Pourcentage_rejet_03248 = [];
const vote_gene_macron_03248 = [];
const vote_gene_lepen_03248 = [];
const vote_gene_rejet_03248 = [];

async function chartIt03248(){
    await GraphDATA03248();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03248-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03248
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03248
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03248-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03248,vote_lepen_03248,vote_rejet_03248]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03248-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03248,vote_lepenpop_03248,vote_rejetpop_03248]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03248"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03248
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03248
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03248
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
/*COMMUNE 03249*/
/*------------------------------------------------------------------ */
async function GraphDATA03249() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03249.push(vote_macron); 
    vote_lepen_03249.push(vote_lepen);
    vote_rejet_03249.push(vote_rejet);
    vote_macronpop_03249.push(vote_macronMediane);
    vote_lepenpop_03249.push(vote_lepenMediane);
    vote_rejetpop_03249.push(vote_rejetMediane);
    name_Commune_03249.push(nameCommune);
    Pourcentage_03249.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03249.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03249.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03249.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03249.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03249 = [];
const vote_lepen_03249 = [];
const vote_rejet_03249 = [];
const vote_macronpop_03249 = [];
const vote_lepenpop_03249 = [];
const vote_rejetpop_03249 = [];
const name_Commune_03249 = [];
const Pourcentage_03249 = [];
const Pourcentage_rejet_03249 = [];
const vote_gene_macron_03249 = [];
const vote_gene_lepen_03249 = [];
const vote_gene_rejet_03249 = [];

async function chartIt03249(){
    await GraphDATA03249();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03249-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03249
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03249
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03249-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03249,vote_lepen_03249,vote_rejet_03249]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03249-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03249,vote_lepenpop_03249,vote_rejetpop_03249]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03249"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03249
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03249
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03249
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
/*COMMUNE 03250*/
/*------------------------------------------------------------------ */
async function GraphDATA03250() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03250.push(vote_macron); 
    vote_lepen_03250.push(vote_lepen);
    vote_rejet_03250.push(vote_rejet);
    vote_macronpop_03250.push(vote_macronMediane);
    vote_lepenpop_03250.push(vote_lepenMediane);
    vote_rejetpop_03250.push(vote_rejetMediane);
    name_Commune_03250.push(nameCommune);
    Pourcentage_03250.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03250.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03250.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03250.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03250.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03250 = [];
const vote_lepen_03250 = [];
const vote_rejet_03250 = [];
const vote_macronpop_03250 = [];
const vote_lepenpop_03250 = [];
const vote_rejetpop_03250 = [];
const name_Commune_03250 = [];
const Pourcentage_03250 = [];
const Pourcentage_rejet_03250 = [];
const vote_gene_macron_03250 = [];
const vote_gene_lepen_03250 = [];
const vote_gene_rejet_03250 = [];

async function chartIt03250(){
    await GraphDATA03250();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03250-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03250
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03250
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03250-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03250,vote_lepen_03250,vote_rejet_03250]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03250-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03250,vote_lepenpop_03250,vote_rejetpop_03250]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03250"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03250
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03250
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03250
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
/*COMMUNE 03251*/
/*------------------------------------------------------------------ */
async function GraphDATA03251() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03251.push(vote_macron); 
    vote_lepen_03251.push(vote_lepen);
    vote_rejet_03251.push(vote_rejet);
    vote_macronpop_03251.push(vote_macronMediane);
    vote_lepenpop_03251.push(vote_lepenMediane);
    vote_rejetpop_03251.push(vote_rejetMediane);
    name_Commune_03251.push(nameCommune);
    Pourcentage_03251.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03251.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03251.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03251.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03251.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03251 = [];
const vote_lepen_03251 = [];
const vote_rejet_03251 = [];
const vote_macronpop_03251 = [];
const vote_lepenpop_03251 = [];
const vote_rejetpop_03251 = [];
const name_Commune_03251 = [];
const Pourcentage_03251 = [];
const Pourcentage_rejet_03251 = [];
const vote_gene_macron_03251 = [];
const vote_gene_lepen_03251 = [];
const vote_gene_rejet_03251 = [];

async function chartIt03251(){
    await GraphDATA03251();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03251-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03251
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03251
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03251-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03251,vote_lepen_03251,vote_rejet_03251]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03251-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03251,vote_lepenpop_03251,vote_rejetpop_03251]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03251"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03251
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03251
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03251
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
/*COMMUNE 03252*/
/*------------------------------------------------------------------ */
async function GraphDATA03252() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03252.push(vote_macron); 
    vote_lepen_03252.push(vote_lepen);
    vote_rejet_03252.push(vote_rejet);
    vote_macronpop_03252.push(vote_macronMediane);
    vote_lepenpop_03252.push(vote_lepenMediane);
    vote_rejetpop_03252.push(vote_rejetMediane);
    name_Commune_03252.push(nameCommune);
    Pourcentage_03252.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03252.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03252.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03252.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03252.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03252 = [];
const vote_lepen_03252 = [];
const vote_rejet_03252 = [];
const vote_macronpop_03252 = [];
const vote_lepenpop_03252 = [];
const vote_rejetpop_03252 = [];
const name_Commune_03252 = [];
const Pourcentage_03252 = [];
const Pourcentage_rejet_03252 = [];
const vote_gene_macron_03252 = [];
const vote_gene_lepen_03252 = [];
const vote_gene_rejet_03252 = [];

async function chartIt03252(){
    await GraphDATA03252();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03252-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03252
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03252
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03252-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03252,vote_lepen_03252,vote_rejet_03252]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03252-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03252,vote_lepenpop_03252,vote_rejetpop_03252]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03252"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03252
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03252
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03252
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
/*COMMUNE 03253*/
/*------------------------------------------------------------------ */
async function GraphDATA03253() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03253.push(vote_macron); 
    vote_lepen_03253.push(vote_lepen);
    vote_rejet_03253.push(vote_rejet);
    vote_macronpop_03253.push(vote_macronMediane);
    vote_lepenpop_03253.push(vote_lepenMediane);
    vote_rejetpop_03253.push(vote_rejetMediane);
    name_Commune_03253.push(nameCommune);
    Pourcentage_03253.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03253.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03253.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03253.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03253.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03253 = [];
const vote_lepen_03253 = [];
const vote_rejet_03253 = [];
const vote_macronpop_03253 = [];
const vote_lepenpop_03253 = [];
const vote_rejetpop_03253 = [];
const name_Commune_03253 = [];
const Pourcentage_03253 = [];
const Pourcentage_rejet_03253 = [];
const vote_gene_macron_03253 = [];
const vote_gene_lepen_03253 = [];
const vote_gene_rejet_03253 = [];

async function chartIt03253(){
    await GraphDATA03253();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03253-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03253
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03253
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03253-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03253,vote_lepen_03253,vote_rejet_03253]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03253-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03253,vote_lepenpop_03253,vote_rejetpop_03253]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03253"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03253
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03253
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03253
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
/*COMMUNE 03254*/
/*------------------------------------------------------------------ */
async function GraphDATA03254() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03254.push(vote_macron); 
    vote_lepen_03254.push(vote_lepen);
    vote_rejet_03254.push(vote_rejet);
    vote_macronpop_03254.push(vote_macronMediane);
    vote_lepenpop_03254.push(vote_lepenMediane);
    vote_rejetpop_03254.push(vote_rejetMediane);
    name_Commune_03254.push(nameCommune);
    Pourcentage_03254.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03254.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03254.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03254.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03254.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03254 = [];
const vote_lepen_03254 = [];
const vote_rejet_03254 = [];
const vote_macronpop_03254 = [];
const vote_lepenpop_03254 = [];
const vote_rejetpop_03254 = [];
const name_Commune_03254 = [];
const Pourcentage_03254 = [];
const Pourcentage_rejet_03254 = [];
const vote_gene_macron_03254 = [];
const vote_gene_lepen_03254 = [];
const vote_gene_rejet_03254 = [];

async function chartIt03254(){
    await GraphDATA03254();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03254-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03254
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03254
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03254-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03254,vote_lepen_03254,vote_rejet_03254]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03254-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03254,vote_lepenpop_03254,vote_rejetpop_03254]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03254"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03254
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03254
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03254
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
/*COMMUNE 03255*/
/*------------------------------------------------------------------ */
async function GraphDATA03255() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03255.push(vote_macron); 
    vote_lepen_03255.push(vote_lepen);
    vote_rejet_03255.push(vote_rejet);
    vote_macronpop_03255.push(vote_macronMediane);
    vote_lepenpop_03255.push(vote_lepenMediane);
    vote_rejetpop_03255.push(vote_rejetMediane);
    name_Commune_03255.push(nameCommune);
    Pourcentage_03255.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03255.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03255.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03255.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03255.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03255 = [];
const vote_lepen_03255 = [];
const vote_rejet_03255 = [];
const vote_macronpop_03255 = [];
const vote_lepenpop_03255 = [];
const vote_rejetpop_03255 = [];
const name_Commune_03255 = [];
const Pourcentage_03255 = [];
const Pourcentage_rejet_03255 = [];
const vote_gene_macron_03255 = [];
const vote_gene_lepen_03255 = [];
const vote_gene_rejet_03255 = [];

async function chartIt03255(){
    await GraphDATA03255();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03255-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03255
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03255
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03255-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03255,vote_lepen_03255,vote_rejet_03255]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03255-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03255,vote_lepenpop_03255,vote_rejetpop_03255]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03255"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03255
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03255
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03255
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
/*COMMUNE 03256*/
/*------------------------------------------------------------------ */
async function GraphDATA03256() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03256.push(vote_macron); 
    vote_lepen_03256.push(vote_lepen);
    vote_rejet_03256.push(vote_rejet);
    vote_macronpop_03256.push(vote_macronMediane);
    vote_lepenpop_03256.push(vote_lepenMediane);
    vote_rejetpop_03256.push(vote_rejetMediane);
    name_Commune_03256.push(nameCommune);
    Pourcentage_03256.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03256.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03256.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03256.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03256.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03256 = [];
const vote_lepen_03256 = [];
const vote_rejet_03256 = [];
const vote_macronpop_03256 = [];
const vote_lepenpop_03256 = [];
const vote_rejetpop_03256 = [];
const name_Commune_03256 = [];
const Pourcentage_03256 = [];
const Pourcentage_rejet_03256 = [];
const vote_gene_macron_03256 = [];
const vote_gene_lepen_03256 = [];
const vote_gene_rejet_03256 = [];

async function chartIt03256(){
    await GraphDATA03256();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03256-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03256
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03256
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03256-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03256,vote_lepen_03256,vote_rejet_03256]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03256-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03256,vote_lepenpop_03256,vote_rejetpop_03256]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03256"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03256
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03256
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03256
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
/*COMMUNE 03257*/
/*------------------------------------------------------------------ */
async function GraphDATA03257() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03257.push(vote_macron); 
    vote_lepen_03257.push(vote_lepen);
    vote_rejet_03257.push(vote_rejet);
    vote_macronpop_03257.push(vote_macronMediane);
    vote_lepenpop_03257.push(vote_lepenMediane);
    vote_rejetpop_03257.push(vote_rejetMediane);
    name_Commune_03257.push(nameCommune);
    Pourcentage_03257.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03257.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03257.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03257.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03257.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03257 = [];
const vote_lepen_03257 = [];
const vote_rejet_03257 = [];
const vote_macronpop_03257 = [];
const vote_lepenpop_03257 = [];
const vote_rejetpop_03257 = [];
const name_Commune_03257 = [];
const Pourcentage_03257 = [];
const Pourcentage_rejet_03257 = [];
const vote_gene_macron_03257 = [];
const vote_gene_lepen_03257 = [];
const vote_gene_rejet_03257 = [];

async function chartIt03257(){
    await GraphDATA03257();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03257-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03257
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03257
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03257-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03257,vote_lepen_03257,vote_rejet_03257]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03257-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03257,vote_lepenpop_03257,vote_rejetpop_03257]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03257"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03257
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03257
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03257
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
/*COMMUNE 03258*/
/*------------------------------------------------------------------ */
async function GraphDATA03258() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03258.push(vote_macron); 
    vote_lepen_03258.push(vote_lepen);
    vote_rejet_03258.push(vote_rejet);
    vote_macronpop_03258.push(vote_macronMediane);
    vote_lepenpop_03258.push(vote_lepenMediane);
    vote_rejetpop_03258.push(vote_rejetMediane);
    name_Commune_03258.push(nameCommune);
    Pourcentage_03258.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03258.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03258.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03258.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03258.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03258 = [];
const vote_lepen_03258 = [];
const vote_rejet_03258 = [];
const vote_macronpop_03258 = [];
const vote_lepenpop_03258 = [];
const vote_rejetpop_03258 = [];
const name_Commune_03258 = [];
const Pourcentage_03258 = [];
const Pourcentage_rejet_03258 = [];
const vote_gene_macron_03258 = [];
const vote_gene_lepen_03258 = [];
const vote_gene_rejet_03258 = [];

async function chartIt03258(){
    await GraphDATA03258();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03258-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03258
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03258
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03258-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03258,vote_lepen_03258,vote_rejet_03258]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03258-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03258,vote_lepenpop_03258,vote_rejetpop_03258]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03258"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03258
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03258
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03258
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
/*COMMUNE 03259*/
/*------------------------------------------------------------------ */
async function GraphDATA03259() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03259.push(vote_macron); 
    vote_lepen_03259.push(vote_lepen);
    vote_rejet_03259.push(vote_rejet);
    vote_macronpop_03259.push(vote_macronMediane);
    vote_lepenpop_03259.push(vote_lepenMediane);
    vote_rejetpop_03259.push(vote_rejetMediane);
    name_Commune_03259.push(nameCommune);
    Pourcentage_03259.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03259.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03259.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03259.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03259.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03259 = [];
const vote_lepen_03259 = [];
const vote_rejet_03259 = [];
const vote_macronpop_03259 = [];
const vote_lepenpop_03259 = [];
const vote_rejetpop_03259 = [];
const name_Commune_03259 = [];
const Pourcentage_03259 = [];
const Pourcentage_rejet_03259 = [];
const vote_gene_macron_03259 = [];
const vote_gene_lepen_03259 = [];
const vote_gene_rejet_03259 = [];

async function chartIt03259(){
    await GraphDATA03259();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03259-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03259
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03259
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03259-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03259,vote_lepen_03259,vote_rejet_03259]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03259-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03259,vote_lepenpop_03259,vote_rejetpop_03259]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03259"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03259
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03259
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03259
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
/*COMMUNE 03260*/
/*------------------------------------------------------------------ */
async function GraphDATA03260() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03260.push(vote_macron); 
    vote_lepen_03260.push(vote_lepen);
    vote_rejet_03260.push(vote_rejet);
    vote_macronpop_03260.push(vote_macronMediane);
    vote_lepenpop_03260.push(vote_lepenMediane);
    vote_rejetpop_03260.push(vote_rejetMediane);
    name_Commune_03260.push(nameCommune);
    Pourcentage_03260.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03260.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03260.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03260.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03260.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03260 = [];
const vote_lepen_03260 = [];
const vote_rejet_03260 = [];
const vote_macronpop_03260 = [];
const vote_lepenpop_03260 = [];
const vote_rejetpop_03260 = [];
const name_Commune_03260 = [];
const Pourcentage_03260 = [];
const Pourcentage_rejet_03260 = [];
const vote_gene_macron_03260 = [];
const vote_gene_lepen_03260 = [];
const vote_gene_rejet_03260 = [];

async function chartIt03260(){
    await GraphDATA03260();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03260-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03260
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03260
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03260-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03260,vote_lepen_03260,vote_rejet_03260]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03260-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03260,vote_lepenpop_03260,vote_rejetpop_03260]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03260"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03260
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03260
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03260
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
/*COMMUNE 03261*/
/*------------------------------------------------------------------ */
async function GraphDATA03261() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03261.push(vote_macron); 
    vote_lepen_03261.push(vote_lepen);
    vote_rejet_03261.push(vote_rejet);
    vote_macronpop_03261.push(vote_macronMediane);
    vote_lepenpop_03261.push(vote_lepenMediane);
    vote_rejetpop_03261.push(vote_rejetMediane);
    name_Commune_03261.push(nameCommune);
    Pourcentage_03261.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03261.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03261.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03261.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03261.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03261 = [];
const vote_lepen_03261 = [];
const vote_rejet_03261 = [];
const vote_macronpop_03261 = [];
const vote_lepenpop_03261 = [];
const vote_rejetpop_03261 = [];
const name_Commune_03261 = [];
const Pourcentage_03261 = [];
const Pourcentage_rejet_03261 = [];
const vote_gene_macron_03261 = [];
const vote_gene_lepen_03261 = [];
const vote_gene_rejet_03261 = [];

async function chartIt03261(){
    await GraphDATA03261();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03261-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03261
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03261
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03261-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03261,vote_lepen_03261,vote_rejet_03261]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03261-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03261,vote_lepenpop_03261,vote_rejetpop_03261]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03261"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03261
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03261
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03261
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
/*COMMUNE 03262*/
/*------------------------------------------------------------------ */
async function GraphDATA03262() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03262.push(vote_macron); 
    vote_lepen_03262.push(vote_lepen);
    vote_rejet_03262.push(vote_rejet);
    vote_macronpop_03262.push(vote_macronMediane);
    vote_lepenpop_03262.push(vote_lepenMediane);
    vote_rejetpop_03262.push(vote_rejetMediane);
    name_Commune_03262.push(nameCommune);
    Pourcentage_03262.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03262.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03262.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03262.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03262.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03262 = [];
const vote_lepen_03262 = [];
const vote_rejet_03262 = [];
const vote_macronpop_03262 = [];
const vote_lepenpop_03262 = [];
const vote_rejetpop_03262 = [];
const name_Commune_03262 = [];
const Pourcentage_03262 = [];
const Pourcentage_rejet_03262 = [];
const vote_gene_macron_03262 = [];
const vote_gene_lepen_03262 = [];
const vote_gene_rejet_03262 = [];

async function chartIt03262(){
    await GraphDATA03262();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03262-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03262
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03262
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03262-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03262,vote_lepen_03262,vote_rejet_03262]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03262-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03262,vote_lepenpop_03262,vote_rejetpop_03262]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03262"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03262
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03262
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03262
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
/*COMMUNE 03263*/
/*------------------------------------------------------------------ */
async function GraphDATA03263() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03263.push(vote_macron); 
    vote_lepen_03263.push(vote_lepen);
    vote_rejet_03263.push(vote_rejet);
    vote_macronpop_03263.push(vote_macronMediane);
    vote_lepenpop_03263.push(vote_lepenMediane);
    vote_rejetpop_03263.push(vote_rejetMediane);
    name_Commune_03263.push(nameCommune);
    Pourcentage_03263.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03263.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03263.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03263.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03263.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03263 = [];
const vote_lepen_03263 = [];
const vote_rejet_03263 = [];
const vote_macronpop_03263 = [];
const vote_lepenpop_03263 = [];
const vote_rejetpop_03263 = [];
const name_Commune_03263 = [];
const Pourcentage_03263 = [];
const Pourcentage_rejet_03263 = [];
const vote_gene_macron_03263 = [];
const vote_gene_lepen_03263 = [];
const vote_gene_rejet_03263 = [];

async function chartIt03263(){
    await GraphDATA03263();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03263-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03263
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03263
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03263-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03263,vote_lepen_03263,vote_rejet_03263]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03263-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03263,vote_lepenpop_03263,vote_rejetpop_03263]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03263"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03263
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03263
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03263
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
/*COMMUNE 03264*/
/*------------------------------------------------------------------ */
async function GraphDATA03264() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03264.push(vote_macron); 
    vote_lepen_03264.push(vote_lepen);
    vote_rejet_03264.push(vote_rejet);
    vote_macronpop_03264.push(vote_macronMediane);
    vote_lepenpop_03264.push(vote_lepenMediane);
    vote_rejetpop_03264.push(vote_rejetMediane);
    name_Commune_03264.push(nameCommune);
    Pourcentage_03264.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03264.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03264.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03264.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03264.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03264 = [];
const vote_lepen_03264 = [];
const vote_rejet_03264 = [];
const vote_macronpop_03264 = [];
const vote_lepenpop_03264 = [];
const vote_rejetpop_03264 = [];
const name_Commune_03264 = [];
const Pourcentage_03264 = [];
const Pourcentage_rejet_03264 = [];
const vote_gene_macron_03264 = [];
const vote_gene_lepen_03264 = [];
const vote_gene_rejet_03264 = [];

async function chartIt03264(){
    await GraphDATA03264();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03264-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03264
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03264
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03264-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03264,vote_lepen_03264,vote_rejet_03264]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03264-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03264,vote_lepenpop_03264,vote_rejetpop_03264]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03264"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03264
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03264
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03264
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
/*COMMUNE 03265*/
/*------------------------------------------------------------------ */
async function GraphDATA03265() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03265.push(vote_macron); 
    vote_lepen_03265.push(vote_lepen);
    vote_rejet_03265.push(vote_rejet);
    vote_macronpop_03265.push(vote_macronMediane);
    vote_lepenpop_03265.push(vote_lepenMediane);
    vote_rejetpop_03265.push(vote_rejetMediane);
    name_Commune_03265.push(nameCommune);
    Pourcentage_03265.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03265.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03265.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03265.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03265.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03265 = [];
const vote_lepen_03265 = [];
const vote_rejet_03265 = [];
const vote_macronpop_03265 = [];
const vote_lepenpop_03265 = [];
const vote_rejetpop_03265 = [];
const name_Commune_03265 = [];
const Pourcentage_03265 = [];
const Pourcentage_rejet_03265 = [];
const vote_gene_macron_03265 = [];
const vote_gene_lepen_03265 = [];
const vote_gene_rejet_03265 = [];

async function chartIt03265(){
    await GraphDATA03265();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03265-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03265
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03265
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03265-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03265,vote_lepen_03265,vote_rejet_03265]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03265-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03265,vote_lepenpop_03265,vote_rejetpop_03265]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03265"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03265
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03265
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03265
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
/*COMMUNE 03266*/
/*------------------------------------------------------------------ */
async function GraphDATA03266() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03266.push(vote_macron); 
    vote_lepen_03266.push(vote_lepen);
    vote_rejet_03266.push(vote_rejet);
    vote_macronpop_03266.push(vote_macronMediane);
    vote_lepenpop_03266.push(vote_lepenMediane);
    vote_rejetpop_03266.push(vote_rejetMediane);
    name_Commune_03266.push(nameCommune);
    Pourcentage_03266.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03266.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03266.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03266.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03266.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03266 = [];
const vote_lepen_03266 = [];
const vote_rejet_03266 = [];
const vote_macronpop_03266 = [];
const vote_lepenpop_03266 = [];
const vote_rejetpop_03266 = [];
const name_Commune_03266 = [];
const Pourcentage_03266 = [];
const Pourcentage_rejet_03266 = [];
const vote_gene_macron_03266 = [];
const vote_gene_lepen_03266 = [];
const vote_gene_rejet_03266 = [];

async function chartIt03266(){
    await GraphDATA03266();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03266-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03266
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03266
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03266-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03266,vote_lepen_03266,vote_rejet_03266]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03266-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03266,vote_lepenpop_03266,vote_rejetpop_03266]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03266"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03266
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03266
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03266
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
/*COMMUNE 03267*/
/*------------------------------------------------------------------ */
async function GraphDATA03267() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03267.push(vote_macron); 
    vote_lepen_03267.push(vote_lepen);
    vote_rejet_03267.push(vote_rejet);
    vote_macronpop_03267.push(vote_macronMediane);
    vote_lepenpop_03267.push(vote_lepenMediane);
    vote_rejetpop_03267.push(vote_rejetMediane);
    name_Commune_03267.push(nameCommune);
    Pourcentage_03267.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03267.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03267.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03267.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03267.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03267 = [];
const vote_lepen_03267 = [];
const vote_rejet_03267 = [];
const vote_macronpop_03267 = [];
const vote_lepenpop_03267 = [];
const vote_rejetpop_03267 = [];
const name_Commune_03267 = [];
const Pourcentage_03267 = [];
const Pourcentage_rejet_03267 = [];
const vote_gene_macron_03267 = [];
const vote_gene_lepen_03267 = [];
const vote_gene_rejet_03267 = [];

async function chartIt03267(){
    await GraphDATA03267();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03267-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03267
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03267
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03267-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03267,vote_lepen_03267,vote_rejet_03267]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03267-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03267,vote_lepenpop_03267,vote_rejetpop_03267]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03267"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03267
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03267
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03267
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
/*COMMUNE 03268*/
/*------------------------------------------------------------------ */
async function GraphDATA03268() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03268.push(vote_macron); 
    vote_lepen_03268.push(vote_lepen);
    vote_rejet_03268.push(vote_rejet);
    vote_macronpop_03268.push(vote_macronMediane);
    vote_lepenpop_03268.push(vote_lepenMediane);
    vote_rejetpop_03268.push(vote_rejetMediane);
    name_Commune_03268.push(nameCommune);
    Pourcentage_03268.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03268.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03268.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03268.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03268.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03268 = [];
const vote_lepen_03268 = [];
const vote_rejet_03268 = [];
const vote_macronpop_03268 = [];
const vote_lepenpop_03268 = [];
const vote_rejetpop_03268 = [];
const name_Commune_03268 = [];
const Pourcentage_03268 = [];
const Pourcentage_rejet_03268 = [];
const vote_gene_macron_03268 = [];
const vote_gene_lepen_03268 = [];
const vote_gene_rejet_03268 = [];

async function chartIt03268(){
    await GraphDATA03268();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03268-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03268
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03268
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03268-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03268,vote_lepen_03268,vote_rejet_03268]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03268-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03268,vote_lepenpop_03268,vote_rejetpop_03268]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03268"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03268
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03268
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03268
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
/*COMMUNE 03269*/
/*------------------------------------------------------------------ */
async function GraphDATA03269() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03269.push(vote_macron); 
    vote_lepen_03269.push(vote_lepen);
    vote_rejet_03269.push(vote_rejet);
    vote_macronpop_03269.push(vote_macronMediane);
    vote_lepenpop_03269.push(vote_lepenMediane);
    vote_rejetpop_03269.push(vote_rejetMediane);
    name_Commune_03269.push(nameCommune);
    Pourcentage_03269.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03269.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03269.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03269.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03269.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03269 = [];
const vote_lepen_03269 = [];
const vote_rejet_03269 = [];
const vote_macronpop_03269 = [];
const vote_lepenpop_03269 = [];
const vote_rejetpop_03269 = [];
const name_Commune_03269 = [];
const Pourcentage_03269 = [];
const Pourcentage_rejet_03269 = [];
const vote_gene_macron_03269 = [];
const vote_gene_lepen_03269 = [];
const vote_gene_rejet_03269 = [];

async function chartIt03269(){
    await GraphDATA03269();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03269-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03269
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03269
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03269-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03269,vote_lepen_03269,vote_rejet_03269]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03269-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03269,vote_lepenpop_03269,vote_rejetpop_03269]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03269"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03269
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03269
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03269
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
/*COMMUNE 03270*/
/*------------------------------------------------------------------ */
async function GraphDATA03270() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03270.push(vote_macron); 
    vote_lepen_03270.push(vote_lepen);
    vote_rejet_03270.push(vote_rejet);
    vote_macronpop_03270.push(vote_macronMediane);
    vote_lepenpop_03270.push(vote_lepenMediane);
    vote_rejetpop_03270.push(vote_rejetMediane);
    name_Commune_03270.push(nameCommune);
    Pourcentage_03270.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03270.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03270.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03270.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03270.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03270 = [];
const vote_lepen_03270 = [];
const vote_rejet_03270 = [];
const vote_macronpop_03270 = [];
const vote_lepenpop_03270 = [];
const vote_rejetpop_03270 = [];
const name_Commune_03270 = [];
const Pourcentage_03270 = [];
const Pourcentage_rejet_03270 = [];
const vote_gene_macron_03270 = [];
const vote_gene_lepen_03270 = [];
const vote_gene_rejet_03270 = [];

async function chartIt03270(){
    await GraphDATA03270();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03270-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03270
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03270
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03270-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03270,vote_lepen_03270,vote_rejet_03270]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03270-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03270,vote_lepenpop_03270,vote_rejetpop_03270]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03270"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03270
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03270
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03270
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
/*COMMUNE 03271*/
/*------------------------------------------------------------------ */
async function GraphDATA03271() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03271.push(vote_macron); 
    vote_lepen_03271.push(vote_lepen);
    vote_rejet_03271.push(vote_rejet);
    vote_macronpop_03271.push(vote_macronMediane);
    vote_lepenpop_03271.push(vote_lepenMediane);
    vote_rejetpop_03271.push(vote_rejetMediane);
    name_Commune_03271.push(nameCommune);
    Pourcentage_03271.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03271.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03271.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03271.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03271.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03271 = [];
const vote_lepen_03271 = [];
const vote_rejet_03271 = [];
const vote_macronpop_03271 = [];
const vote_lepenpop_03271 = [];
const vote_rejetpop_03271 = [];
const name_Commune_03271 = [];
const Pourcentage_03271 = [];
const Pourcentage_rejet_03271 = [];
const vote_gene_macron_03271 = [];
const vote_gene_lepen_03271 = [];
const vote_gene_rejet_03271 = [];

async function chartIt03271(){
    await GraphDATA03271();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03271-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03271
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03271
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03271-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03271,vote_lepen_03271,vote_rejet_03271]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03271-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03271,vote_lepenpop_03271,vote_rejetpop_03271]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03271"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03271
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03271
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03271
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
/*COMMUNE 03272*/
/*------------------------------------------------------------------ */
async function GraphDATA03272() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03272.push(vote_macron); 
    vote_lepen_03272.push(vote_lepen);
    vote_rejet_03272.push(vote_rejet);
    vote_macronpop_03272.push(vote_macronMediane);
    vote_lepenpop_03272.push(vote_lepenMediane);
    vote_rejetpop_03272.push(vote_rejetMediane);
    name_Commune_03272.push(nameCommune);
    Pourcentage_03272.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03272.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03272.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03272.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03272.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03272 = [];
const vote_lepen_03272 = [];
const vote_rejet_03272 = [];
const vote_macronpop_03272 = [];
const vote_lepenpop_03272 = [];
const vote_rejetpop_03272 = [];
const name_Commune_03272 = [];
const Pourcentage_03272 = [];
const Pourcentage_rejet_03272 = [];
const vote_gene_macron_03272 = [];
const vote_gene_lepen_03272 = [];
const vote_gene_rejet_03272 = [];

async function chartIt03272(){
    await GraphDATA03272();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03272-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03272
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03272
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03272-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03272,vote_lepen_03272,vote_rejet_03272]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03272-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03272,vote_lepenpop_03272,vote_rejetpop_03272]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03272"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03272
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03272
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03272
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
/*COMMUNE 03273*/
/*------------------------------------------------------------------ */
async function GraphDATA03273() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03273.push(vote_macron); 
    vote_lepen_03273.push(vote_lepen);
    vote_rejet_03273.push(vote_rejet);
    vote_macronpop_03273.push(vote_macronMediane);
    vote_lepenpop_03273.push(vote_lepenMediane);
    vote_rejetpop_03273.push(vote_rejetMediane);
    name_Commune_03273.push(nameCommune);
    Pourcentage_03273.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03273.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03273.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03273.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03273.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03273 = [];
const vote_lepen_03273 = [];
const vote_rejet_03273 = [];
const vote_macronpop_03273 = [];
const vote_lepenpop_03273 = [];
const vote_rejetpop_03273 = [];
const name_Commune_03273 = [];
const Pourcentage_03273 = [];
const Pourcentage_rejet_03273 = [];
const vote_gene_macron_03273 = [];
const vote_gene_lepen_03273 = [];
const vote_gene_rejet_03273 = [];

async function chartIt03273(){
    await GraphDATA03273();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03273-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03273
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03273
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03273-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03273,vote_lepen_03273,vote_rejet_03273]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03273-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03273,vote_lepenpop_03273,vote_rejetpop_03273]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03273"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03273
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03273
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03273
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
/*COMMUNE 03274*/
/*------------------------------------------------------------------ */
async function GraphDATA03274() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03274.push(vote_macron); 
    vote_lepen_03274.push(vote_lepen);
    vote_rejet_03274.push(vote_rejet);
    vote_macronpop_03274.push(vote_macronMediane);
    vote_lepenpop_03274.push(vote_lepenMediane);
    vote_rejetpop_03274.push(vote_rejetMediane);
    name_Commune_03274.push(nameCommune);
    Pourcentage_03274.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03274.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03274.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03274.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03274.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03274 = [];
const vote_lepen_03274 = [];
const vote_rejet_03274 = [];
const vote_macronpop_03274 = [];
const vote_lepenpop_03274 = [];
const vote_rejetpop_03274 = [];
const name_Commune_03274 = [];
const Pourcentage_03274 = [];
const Pourcentage_rejet_03274 = [];
const vote_gene_macron_03274 = [];
const vote_gene_lepen_03274 = [];
const vote_gene_rejet_03274 = [];

async function chartIt03274(){
    await GraphDATA03274();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03274-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03274
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03274
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03274-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03274,vote_lepen_03274,vote_rejet_03274]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03274-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03274,vote_lepenpop_03274,vote_rejetpop_03274]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03274"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03274
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03274
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03274
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
/*COMMUNE 03275*/
/*------------------------------------------------------------------ */
async function GraphDATA03275() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03275.push(vote_macron); 
    vote_lepen_03275.push(vote_lepen);
    vote_rejet_03275.push(vote_rejet);
    vote_macronpop_03275.push(vote_macronMediane);
    vote_lepenpop_03275.push(vote_lepenMediane);
    vote_rejetpop_03275.push(vote_rejetMediane);
    name_Commune_03275.push(nameCommune);
    Pourcentage_03275.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03275.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03275.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03275.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03275.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03275 = [];
const vote_lepen_03275 = [];
const vote_rejet_03275 = [];
const vote_macronpop_03275 = [];
const vote_lepenpop_03275 = [];
const vote_rejetpop_03275 = [];
const name_Commune_03275 = [];
const Pourcentage_03275 = [];
const Pourcentage_rejet_03275 = [];
const vote_gene_macron_03275 = [];
const vote_gene_lepen_03275 = [];
const vote_gene_rejet_03275 = [];

async function chartIt03275(){
    await GraphDATA03275();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03275-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03275
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03275
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03275-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03275,vote_lepen_03275,vote_rejet_03275]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03275-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03275,vote_lepenpop_03275,vote_rejetpop_03275]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03275"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03275
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03275
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03275
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
/*COMMUNE 03276*/
/*------------------------------------------------------------------ */
async function GraphDATA03276() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03276.push(vote_macron); 
    vote_lepen_03276.push(vote_lepen);
    vote_rejet_03276.push(vote_rejet);
    vote_macronpop_03276.push(vote_macronMediane);
    vote_lepenpop_03276.push(vote_lepenMediane);
    vote_rejetpop_03276.push(vote_rejetMediane);
    name_Commune_03276.push(nameCommune);
    Pourcentage_03276.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03276.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03276.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03276.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03276.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03276 = [];
const vote_lepen_03276 = [];
const vote_rejet_03276 = [];
const vote_macronpop_03276 = [];
const vote_lepenpop_03276 = [];
const vote_rejetpop_03276 = [];
const name_Commune_03276 = [];
const Pourcentage_03276 = [];
const Pourcentage_rejet_03276 = [];
const vote_gene_macron_03276 = [];
const vote_gene_lepen_03276 = [];
const vote_gene_rejet_03276 = [];

async function chartIt03276(){
    await GraphDATA03276();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03276-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03276
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03276
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03276-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03276,vote_lepen_03276,vote_rejet_03276]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03276-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03276,vote_lepenpop_03276,vote_rejetpop_03276]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03276"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03276
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03276
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03276
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
/*COMMUNE 03277*/
/*------------------------------------------------------------------ */
async function GraphDATA03277() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03277.push(vote_macron); 
    vote_lepen_03277.push(vote_lepen);
    vote_rejet_03277.push(vote_rejet);
    vote_macronpop_03277.push(vote_macronMediane);
    vote_lepenpop_03277.push(vote_lepenMediane);
    vote_rejetpop_03277.push(vote_rejetMediane);
    name_Commune_03277.push(nameCommune);
    Pourcentage_03277.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03277.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03277.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03277.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03277.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03277 = [];
const vote_lepen_03277 = [];
const vote_rejet_03277 = [];
const vote_macronpop_03277 = [];
const vote_lepenpop_03277 = [];
const vote_rejetpop_03277 = [];
const name_Commune_03277 = [];
const Pourcentage_03277 = [];
const Pourcentage_rejet_03277 = [];
const vote_gene_macron_03277 = [];
const vote_gene_lepen_03277 = [];
const vote_gene_rejet_03277 = [];

async function chartIt03277(){
    await GraphDATA03277();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03277-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03277
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03277
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03277-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03277,vote_lepen_03277,vote_rejet_03277]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03277-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03277,vote_lepenpop_03277,vote_rejetpop_03277]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03277"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03277
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03277
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03277
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
/*COMMUNE 03278*/
/*------------------------------------------------------------------ */
async function GraphDATA03278() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03278.push(vote_macron); 
    vote_lepen_03278.push(vote_lepen);
    vote_rejet_03278.push(vote_rejet);
    vote_macronpop_03278.push(vote_macronMediane);
    vote_lepenpop_03278.push(vote_lepenMediane);
    vote_rejetpop_03278.push(vote_rejetMediane);
    name_Commune_03278.push(nameCommune);
    Pourcentage_03278.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03278.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03278.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03278.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03278.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03278 = [];
const vote_lepen_03278 = [];
const vote_rejet_03278 = [];
const vote_macronpop_03278 = [];
const vote_lepenpop_03278 = [];
const vote_rejetpop_03278 = [];
const name_Commune_03278 = [];
const Pourcentage_03278 = [];
const Pourcentage_rejet_03278 = [];
const vote_gene_macron_03278 = [];
const vote_gene_lepen_03278 = [];
const vote_gene_rejet_03278 = [];

async function chartIt03278(){
    await GraphDATA03278();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03278-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03278
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03278
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03278-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03278,vote_lepen_03278,vote_rejet_03278]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03278-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03278,vote_lepenpop_03278,vote_rejetpop_03278]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03278"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03278
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03278
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03278
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
/*COMMUNE 03279*/
/*------------------------------------------------------------------ */
async function GraphDATA03279() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03279.push(vote_macron); 
    vote_lepen_03279.push(vote_lepen);
    vote_rejet_03279.push(vote_rejet);
    vote_macronpop_03279.push(vote_macronMediane);
    vote_lepenpop_03279.push(vote_lepenMediane);
    vote_rejetpop_03279.push(vote_rejetMediane);
    name_Commune_03279.push(nameCommune);
    Pourcentage_03279.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03279.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03279.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03279.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03279.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03279 = [];
const vote_lepen_03279 = [];
const vote_rejet_03279 = [];
const vote_macronpop_03279 = [];
const vote_lepenpop_03279 = [];
const vote_rejetpop_03279 = [];
const name_Commune_03279 = [];
const Pourcentage_03279 = [];
const Pourcentage_rejet_03279 = [];
const vote_gene_macron_03279 = [];
const vote_gene_lepen_03279 = [];
const vote_gene_rejet_03279 = [];

async function chartIt03279(){
    await GraphDATA03279();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03279-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03279
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03279
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03279-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03279,vote_lepen_03279,vote_rejet_03279]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03279-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03279,vote_lepenpop_03279,vote_rejetpop_03279]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03279"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03279
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03279
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03279
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
/*COMMUNE 03280*/
/*------------------------------------------------------------------ */
async function GraphDATA03280() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03280.push(vote_macron); 
    vote_lepen_03280.push(vote_lepen);
    vote_rejet_03280.push(vote_rejet);
    vote_macronpop_03280.push(vote_macronMediane);
    vote_lepenpop_03280.push(vote_lepenMediane);
    vote_rejetpop_03280.push(vote_rejetMediane);
    name_Commune_03280.push(nameCommune);
    Pourcentage_03280.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03280.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03280.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03280.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03280.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03280 = [];
const vote_lepen_03280 = [];
const vote_rejet_03280 = [];
const vote_macronpop_03280 = [];
const vote_lepenpop_03280 = [];
const vote_rejetpop_03280 = [];
const name_Commune_03280 = [];
const Pourcentage_03280 = [];
const Pourcentage_rejet_03280 = [];
const vote_gene_macron_03280 = [];
const vote_gene_lepen_03280 = [];
const vote_gene_rejet_03280 = [];

async function chartIt03280(){
    await GraphDATA03280();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03280-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03280
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03280
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03280-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03280,vote_lepen_03280,vote_rejet_03280]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03280-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03280,vote_lepenpop_03280,vote_rejetpop_03280]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03280"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03280
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03280
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03280
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
/*COMMUNE 03281*/
/*------------------------------------------------------------------ */
async function GraphDATA03281() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03281.push(vote_macron); 
    vote_lepen_03281.push(vote_lepen);
    vote_rejet_03281.push(vote_rejet);
    vote_macronpop_03281.push(vote_macronMediane);
    vote_lepenpop_03281.push(vote_lepenMediane);
    vote_rejetpop_03281.push(vote_rejetMediane);
    name_Commune_03281.push(nameCommune);
    Pourcentage_03281.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03281.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03281.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03281.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03281.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03281 = [];
const vote_lepen_03281 = [];
const vote_rejet_03281 = [];
const vote_macronpop_03281 = [];
const vote_lepenpop_03281 = [];
const vote_rejetpop_03281 = [];
const name_Commune_03281 = [];
const Pourcentage_03281 = [];
const Pourcentage_rejet_03281 = [];
const vote_gene_macron_03281 = [];
const vote_gene_lepen_03281 = [];
const vote_gene_rejet_03281 = [];

async function chartIt03281(){
    await GraphDATA03281();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03281-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03281
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03281
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03281-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03281,vote_lepen_03281,vote_rejet_03281]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03281-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03281,vote_lepenpop_03281,vote_rejetpop_03281]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03281"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03281
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03281
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03281
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
/*COMMUNE 03282*/
/*------------------------------------------------------------------ */
async function GraphDATA03282() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03282.push(vote_macron); 
    vote_lepen_03282.push(vote_lepen);
    vote_rejet_03282.push(vote_rejet);
    vote_macronpop_03282.push(vote_macronMediane);
    vote_lepenpop_03282.push(vote_lepenMediane);
    vote_rejetpop_03282.push(vote_rejetMediane);
    name_Commune_03282.push(nameCommune);
    Pourcentage_03282.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03282.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03282.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03282.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03282.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03282 = [];
const vote_lepen_03282 = [];
const vote_rejet_03282 = [];
const vote_macronpop_03282 = [];
const vote_lepenpop_03282 = [];
const vote_rejetpop_03282 = [];
const name_Commune_03282 = [];
const Pourcentage_03282 = [];
const Pourcentage_rejet_03282 = [];
const vote_gene_macron_03282 = [];
const vote_gene_lepen_03282 = [];
const vote_gene_rejet_03282 = [];

async function chartIt03282(){
    await GraphDATA03282();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03282-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03282
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03282
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03282-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03282,vote_lepen_03282,vote_rejet_03282]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03282-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03282,vote_lepenpop_03282,vote_rejetpop_03282]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03282"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03282
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03282
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03282
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
/*COMMUNE 03283*/
/*------------------------------------------------------------------ */
async function GraphDATA03283() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03283.push(vote_macron); 
    vote_lepen_03283.push(vote_lepen);
    vote_rejet_03283.push(vote_rejet);
    vote_macronpop_03283.push(vote_macronMediane);
    vote_lepenpop_03283.push(vote_lepenMediane);
    vote_rejetpop_03283.push(vote_rejetMediane);
    name_Commune_03283.push(nameCommune);
    Pourcentage_03283.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03283.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03283.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03283.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03283.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03283 = [];
const vote_lepen_03283 = [];
const vote_rejet_03283 = [];
const vote_macronpop_03283 = [];
const vote_lepenpop_03283 = [];
const vote_rejetpop_03283 = [];
const name_Commune_03283 = [];
const Pourcentage_03283 = [];
const Pourcentage_rejet_03283 = [];
const vote_gene_macron_03283 = [];
const vote_gene_lepen_03283 = [];
const vote_gene_rejet_03283 = [];

async function chartIt03283(){
    await GraphDATA03283();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03283-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03283
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03283
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03283-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03283,vote_lepen_03283,vote_rejet_03283]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03283-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03283,vote_lepenpop_03283,vote_rejetpop_03283]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03283"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03283
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03283
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03283
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
/*COMMUNE 03284*/
/*------------------------------------------------------------------ */
async function GraphDATA03284() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03284.push(vote_macron); 
    vote_lepen_03284.push(vote_lepen);
    vote_rejet_03284.push(vote_rejet);
    vote_macronpop_03284.push(vote_macronMediane);
    vote_lepenpop_03284.push(vote_lepenMediane);
    vote_rejetpop_03284.push(vote_rejetMediane);
    name_Commune_03284.push(nameCommune);
    Pourcentage_03284.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03284.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03284.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03284.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03284.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03284 = [];
const vote_lepen_03284 = [];
const vote_rejet_03284 = [];
const vote_macronpop_03284 = [];
const vote_lepenpop_03284 = [];
const vote_rejetpop_03284 = [];
const name_Commune_03284 = [];
const Pourcentage_03284 = [];
const Pourcentage_rejet_03284 = [];
const vote_gene_macron_03284 = [];
const vote_gene_lepen_03284 = [];
const vote_gene_rejet_03284 = [];

async function chartIt03284(){
    await GraphDATA03284();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03284-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03284
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03284
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03284-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03284,vote_lepen_03284,vote_rejet_03284]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03284-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03284,vote_lepenpop_03284,vote_rejetpop_03284]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03284"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03284
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03284
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03284
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
/*COMMUNE 03285*/
/*------------------------------------------------------------------ */
async function GraphDATA03285() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03285.push(vote_macron); 
    vote_lepen_03285.push(vote_lepen);
    vote_rejet_03285.push(vote_rejet);
    vote_macronpop_03285.push(vote_macronMediane);
    vote_lepenpop_03285.push(vote_lepenMediane);
    vote_rejetpop_03285.push(vote_rejetMediane);
    name_Commune_03285.push(nameCommune);
    Pourcentage_03285.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03285.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03285.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03285.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03285.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03285 = [];
const vote_lepen_03285 = [];
const vote_rejet_03285 = [];
const vote_macronpop_03285 = [];
const vote_lepenpop_03285 = [];
const vote_rejetpop_03285 = [];
const name_Commune_03285 = [];
const Pourcentage_03285 = [];
const Pourcentage_rejet_03285 = [];
const vote_gene_macron_03285 = [];
const vote_gene_lepen_03285 = [];
const vote_gene_rejet_03285 = [];

async function chartIt03285(){
    await GraphDATA03285();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03285-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03285
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03285
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03285-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03285,vote_lepen_03285,vote_rejet_03285]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03285-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03285,vote_lepenpop_03285,vote_rejetpop_03285]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03285"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03285
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03285
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03285
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
/*COMMUNE 03286*/
/*------------------------------------------------------------------ */
async function GraphDATA03286() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03286.push(vote_macron); 
    vote_lepen_03286.push(vote_lepen);
    vote_rejet_03286.push(vote_rejet);
    vote_macronpop_03286.push(vote_macronMediane);
    vote_lepenpop_03286.push(vote_lepenMediane);
    vote_rejetpop_03286.push(vote_rejetMediane);
    name_Commune_03286.push(nameCommune);
    Pourcentage_03286.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03286.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03286.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03286.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03286.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03286 = [];
const vote_lepen_03286 = [];
const vote_rejet_03286 = [];
const vote_macronpop_03286 = [];
const vote_lepenpop_03286 = [];
const vote_rejetpop_03286 = [];
const name_Commune_03286 = [];
const Pourcentage_03286 = [];
const Pourcentage_rejet_03286 = [];
const vote_gene_macron_03286 = [];
const vote_gene_lepen_03286 = [];
const vote_gene_rejet_03286 = [];

async function chartIt03286(){
    await GraphDATA03286();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03286-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03286
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03286
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03286-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03286,vote_lepen_03286,vote_rejet_03286]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03286-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03286,vote_lepenpop_03286,vote_rejetpop_03286]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03286"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03286
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03286
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03286
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
/*COMMUNE 03287*/
/*------------------------------------------------------------------ */
async function GraphDATA03287() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03287.push(vote_macron); 
    vote_lepen_03287.push(vote_lepen);
    vote_rejet_03287.push(vote_rejet);
    vote_macronpop_03287.push(vote_macronMediane);
    vote_lepenpop_03287.push(vote_lepenMediane);
    vote_rejetpop_03287.push(vote_rejetMediane);
    name_Commune_03287.push(nameCommune);
    Pourcentage_03287.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03287.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03287.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03287.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03287.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03287 = [];
const vote_lepen_03287 = [];
const vote_rejet_03287 = [];
const vote_macronpop_03287 = [];
const vote_lepenpop_03287 = [];
const vote_rejetpop_03287 = [];
const name_Commune_03287 = [];
const Pourcentage_03287 = [];
const Pourcentage_rejet_03287 = [];
const vote_gene_macron_03287 = [];
const vote_gene_lepen_03287 = [];
const vote_gene_rejet_03287 = [];

async function chartIt03287(){
    await GraphDATA03287();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03287-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03287
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03287
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03287-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03287,vote_lepen_03287,vote_rejet_03287]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03287-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03287,vote_lepenpop_03287,vote_rejetpop_03287]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03287"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03287
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03287
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03287
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
/*COMMUNE 03288*/
/*------------------------------------------------------------------ */
async function GraphDATA03288() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03288.push(vote_macron); 
    vote_lepen_03288.push(vote_lepen);
    vote_rejet_03288.push(vote_rejet);
    vote_macronpop_03288.push(vote_macronMediane);
    vote_lepenpop_03288.push(vote_lepenMediane);
    vote_rejetpop_03288.push(vote_rejetMediane);
    name_Commune_03288.push(nameCommune);
    Pourcentage_03288.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03288.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03288.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03288.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03288.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03288 = [];
const vote_lepen_03288 = [];
const vote_rejet_03288 = [];
const vote_macronpop_03288 = [];
const vote_lepenpop_03288 = [];
const vote_rejetpop_03288 = [];
const name_Commune_03288 = [];
const Pourcentage_03288 = [];
const Pourcentage_rejet_03288 = [];
const vote_gene_macron_03288 = [];
const vote_gene_lepen_03288 = [];
const vote_gene_rejet_03288 = [];

async function chartIt03288(){
    await GraphDATA03288();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03288-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03288
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03288
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03288-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03288,vote_lepen_03288,vote_rejet_03288]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03288-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03288,vote_lepenpop_03288,vote_rejetpop_03288]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03288"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03288
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03288
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03288
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
/*COMMUNE 03289*/
/*------------------------------------------------------------------ */
async function GraphDATA03289() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03289.push(vote_macron); 
    vote_lepen_03289.push(vote_lepen);
    vote_rejet_03289.push(vote_rejet);
    vote_macronpop_03289.push(vote_macronMediane);
    vote_lepenpop_03289.push(vote_lepenMediane);
    vote_rejetpop_03289.push(vote_rejetMediane);
    name_Commune_03289.push(nameCommune);
    Pourcentage_03289.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03289.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03289.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03289.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03289.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03289 = [];
const vote_lepen_03289 = [];
const vote_rejet_03289 = [];
const vote_macronpop_03289 = [];
const vote_lepenpop_03289 = [];
const vote_rejetpop_03289 = [];
const name_Commune_03289 = [];
const Pourcentage_03289 = [];
const Pourcentage_rejet_03289 = [];
const vote_gene_macron_03289 = [];
const vote_gene_lepen_03289 = [];
const vote_gene_rejet_03289 = [];

async function chartIt03289(){
    await GraphDATA03289();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03289-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03289
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03289
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03289-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03289,vote_lepen_03289,vote_rejet_03289]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03289-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03289,vote_lepenpop_03289,vote_rejetpop_03289]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03289"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03289
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03289
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03289
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
/*COMMUNE 03290*/
/*------------------------------------------------------------------ */
async function GraphDATA03290() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03290.push(vote_macron); 
    vote_lepen_03290.push(vote_lepen);
    vote_rejet_03290.push(vote_rejet);
    vote_macronpop_03290.push(vote_macronMediane);
    vote_lepenpop_03290.push(vote_lepenMediane);
    vote_rejetpop_03290.push(vote_rejetMediane);
    name_Commune_03290.push(nameCommune);
    Pourcentage_03290.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03290.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03290.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03290.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03290.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03290 = [];
const vote_lepen_03290 = [];
const vote_rejet_03290 = [];
const vote_macronpop_03290 = [];
const vote_lepenpop_03290 = [];
const vote_rejetpop_03290 = [];
const name_Commune_03290 = [];
const Pourcentage_03290 = [];
const Pourcentage_rejet_03290 = [];
const vote_gene_macron_03290 = [];
const vote_gene_lepen_03290 = [];
const vote_gene_rejet_03290 = [];

async function chartIt03290(){
    await GraphDATA03290();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03290-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03290
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03290
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03290-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03290,vote_lepen_03290,vote_rejet_03290]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03290-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03290,vote_lepenpop_03290,vote_rejetpop_03290]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03290"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03290
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03290
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03290
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
/*COMMUNE 03291*/
/*------------------------------------------------------------------ */
async function GraphDATA03291() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03291.push(vote_macron); 
    vote_lepen_03291.push(vote_lepen);
    vote_rejet_03291.push(vote_rejet);
    vote_macronpop_03291.push(vote_macronMediane);
    vote_lepenpop_03291.push(vote_lepenMediane);
    vote_rejetpop_03291.push(vote_rejetMediane);
    name_Commune_03291.push(nameCommune);
    Pourcentage_03291.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03291.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03291.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03291.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03291.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03291 = [];
const vote_lepen_03291 = [];
const vote_rejet_03291 = [];
const vote_macronpop_03291 = [];
const vote_lepenpop_03291 = [];
const vote_rejetpop_03291 = [];
const name_Commune_03291 = [];
const Pourcentage_03291 = [];
const Pourcentage_rejet_03291 = [];
const vote_gene_macron_03291 = [];
const vote_gene_lepen_03291 = [];
const vote_gene_rejet_03291 = [];

async function chartIt03291(){
    await GraphDATA03291();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03291-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03291
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03291
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03291-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03291,vote_lepen_03291,vote_rejet_03291]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03291-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03291,vote_lepenpop_03291,vote_rejetpop_03291]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03291"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03291
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03291
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03291
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
/*COMMUNE 03292*/
/*------------------------------------------------------------------ */
async function GraphDATA03292() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03292.push(vote_macron); 
    vote_lepen_03292.push(vote_lepen);
    vote_rejet_03292.push(vote_rejet);
    vote_macronpop_03292.push(vote_macronMediane);
    vote_lepenpop_03292.push(vote_lepenMediane);
    vote_rejetpop_03292.push(vote_rejetMediane);
    name_Commune_03292.push(nameCommune);
    Pourcentage_03292.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03292.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03292.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03292.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03292.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03292 = [];
const vote_lepen_03292 = [];
const vote_rejet_03292 = [];
const vote_macronpop_03292 = [];
const vote_lepenpop_03292 = [];
const vote_rejetpop_03292 = [];
const name_Commune_03292 = [];
const Pourcentage_03292 = [];
const Pourcentage_rejet_03292 = [];
const vote_gene_macron_03292 = [];
const vote_gene_lepen_03292 = [];
const vote_gene_rejet_03292 = [];

async function chartIt03292(){
    await GraphDATA03292();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03292-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03292
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03292
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03292-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03292,vote_lepen_03292,vote_rejet_03292]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03292-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03292,vote_lepenpop_03292,vote_rejetpop_03292]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03292"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03292
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03292
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03292
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
/*COMMUNE 03293*/
/*------------------------------------------------------------------ */
async function GraphDATA03293() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03293.push(vote_macron); 
    vote_lepen_03293.push(vote_lepen);
    vote_rejet_03293.push(vote_rejet);
    vote_macronpop_03293.push(vote_macronMediane);
    vote_lepenpop_03293.push(vote_lepenMediane);
    vote_rejetpop_03293.push(vote_rejetMediane);
    name_Commune_03293.push(nameCommune);
    Pourcentage_03293.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03293.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03293.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03293.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03293.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03293 = [];
const vote_lepen_03293 = [];
const vote_rejet_03293 = [];
const vote_macronpop_03293 = [];
const vote_lepenpop_03293 = [];
const vote_rejetpop_03293 = [];
const name_Commune_03293 = [];
const Pourcentage_03293 = [];
const Pourcentage_rejet_03293 = [];
const vote_gene_macron_03293 = [];
const vote_gene_lepen_03293 = [];
const vote_gene_rejet_03293 = [];

async function chartIt03293(){
    await GraphDATA03293();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03293-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03293
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03293
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03293-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03293,vote_lepen_03293,vote_rejet_03293]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03293-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03293,vote_lepenpop_03293,vote_rejetpop_03293]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03293"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03293
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03293
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03293
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
/*COMMUNE 03294*/
/*------------------------------------------------------------------ */
async function GraphDATA03294() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03294.push(vote_macron); 
    vote_lepen_03294.push(vote_lepen);
    vote_rejet_03294.push(vote_rejet);
    vote_macronpop_03294.push(vote_macronMediane);
    vote_lepenpop_03294.push(vote_lepenMediane);
    vote_rejetpop_03294.push(vote_rejetMediane);
    name_Commune_03294.push(nameCommune);
    Pourcentage_03294.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03294.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03294.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03294.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03294.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03294 = [];
const vote_lepen_03294 = [];
const vote_rejet_03294 = [];
const vote_macronpop_03294 = [];
const vote_lepenpop_03294 = [];
const vote_rejetpop_03294 = [];
const name_Commune_03294 = [];
const Pourcentage_03294 = [];
const Pourcentage_rejet_03294 = [];
const vote_gene_macron_03294 = [];
const vote_gene_lepen_03294 = [];
const vote_gene_rejet_03294 = [];

async function chartIt03294(){
    await GraphDATA03294();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03294-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03294
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03294
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03294-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03294,vote_lepen_03294,vote_rejet_03294]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03294-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03294,vote_lepenpop_03294,vote_rejetpop_03294]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03294"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03294
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03294
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03294
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
/*COMMUNE 03295*/
/*------------------------------------------------------------------ */
async function GraphDATA03295() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03295.push(vote_macron); 
    vote_lepen_03295.push(vote_lepen);
    vote_rejet_03295.push(vote_rejet);
    vote_macronpop_03295.push(vote_macronMediane);
    vote_lepenpop_03295.push(vote_lepenMediane);
    vote_rejetpop_03295.push(vote_rejetMediane);
    name_Commune_03295.push(nameCommune);
    Pourcentage_03295.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03295.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03295.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03295.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03295.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03295 = [];
const vote_lepen_03295 = [];
const vote_rejet_03295 = [];
const vote_macronpop_03295 = [];
const vote_lepenpop_03295 = [];
const vote_rejetpop_03295 = [];
const name_Commune_03295 = [];
const Pourcentage_03295 = [];
const Pourcentage_rejet_03295 = [];
const vote_gene_macron_03295 = [];
const vote_gene_lepen_03295 = [];
const vote_gene_rejet_03295 = [];

async function chartIt03295(){
    await GraphDATA03295();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03295-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03295
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03295
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03295-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03295,vote_lepen_03295,vote_rejet_03295]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03295-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03295,vote_lepenpop_03295,vote_rejetpop_03295]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03295"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03295
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03295
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03295
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
/*COMMUNE 03296*/
/*------------------------------------------------------------------ */
async function GraphDATA03296() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03296.push(vote_macron); 
    vote_lepen_03296.push(vote_lepen);
    vote_rejet_03296.push(vote_rejet);
    vote_macronpop_03296.push(vote_macronMediane);
    vote_lepenpop_03296.push(vote_lepenMediane);
    vote_rejetpop_03296.push(vote_rejetMediane);
    name_Commune_03296.push(nameCommune);
    Pourcentage_03296.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03296.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03296.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03296.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03296.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03296 = [];
const vote_lepen_03296 = [];
const vote_rejet_03296 = [];
const vote_macronpop_03296 = [];
const vote_lepenpop_03296 = [];
const vote_rejetpop_03296 = [];
const name_Commune_03296 = [];
const Pourcentage_03296 = [];
const Pourcentage_rejet_03296 = [];
const vote_gene_macron_03296 = [];
const vote_gene_lepen_03296 = [];
const vote_gene_rejet_03296 = [];

async function chartIt03296(){
    await GraphDATA03296();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03296-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03296
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03296
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03296-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03296,vote_lepen_03296,vote_rejet_03296]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03296-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03296,vote_lepenpop_03296,vote_rejetpop_03296]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03296"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03296
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03296
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03296
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
/*COMMUNE 03297*/
/*------------------------------------------------------------------ */
async function GraphDATA03297() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03297.push(vote_macron); 
    vote_lepen_03297.push(vote_lepen);
    vote_rejet_03297.push(vote_rejet);
    vote_macronpop_03297.push(vote_macronMediane);
    vote_lepenpop_03297.push(vote_lepenMediane);
    vote_rejetpop_03297.push(vote_rejetMediane);
    name_Commune_03297.push(nameCommune);
    Pourcentage_03297.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03297.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03297.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03297.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03297.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03297 = [];
const vote_lepen_03297 = [];
const vote_rejet_03297 = [];
const vote_macronpop_03297 = [];
const vote_lepenpop_03297 = [];
const vote_rejetpop_03297 = [];
const name_Commune_03297 = [];
const Pourcentage_03297 = [];
const Pourcentage_rejet_03297 = [];
const vote_gene_macron_03297 = [];
const vote_gene_lepen_03297 = [];
const vote_gene_rejet_03297 = [];

async function chartIt03297(){
    await GraphDATA03297();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03297-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03297
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03297
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03297-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03297,vote_lepen_03297,vote_rejet_03297]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03297-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03297,vote_lepenpop_03297,vote_rejetpop_03297]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03297"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03297
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03297
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03297
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
/*COMMUNE 03298*/
/*------------------------------------------------------------------ */
async function GraphDATA03298() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03298.push(vote_macron); 
    vote_lepen_03298.push(vote_lepen);
    vote_rejet_03298.push(vote_rejet);
    vote_macronpop_03298.push(vote_macronMediane);
    vote_lepenpop_03298.push(vote_lepenMediane);
    vote_rejetpop_03298.push(vote_rejetMediane);
    name_Commune_03298.push(nameCommune);
    Pourcentage_03298.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03298.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03298.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03298.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03298.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03298 = [];
const vote_lepen_03298 = [];
const vote_rejet_03298 = [];
const vote_macronpop_03298 = [];
const vote_lepenpop_03298 = [];
const vote_rejetpop_03298 = [];
const name_Commune_03298 = [];
const Pourcentage_03298 = [];
const Pourcentage_rejet_03298 = [];
const vote_gene_macron_03298 = [];
const vote_gene_lepen_03298 = [];
const vote_gene_rejet_03298 = [];

async function chartIt03298(){
    await GraphDATA03298();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03298-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03298
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03298
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03298-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03298,vote_lepen_03298,vote_rejet_03298]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03298-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03298,vote_lepenpop_03298,vote_rejetpop_03298]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03298"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03298
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03298
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03298
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
/*COMMUNE 03299*/
/*------------------------------------------------------------------ */
async function GraphDATA03299() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_03299.push(vote_macron); 
    vote_lepen_03299.push(vote_lepen);
    vote_rejet_03299.push(vote_rejet);
    vote_macronpop_03299.push(vote_macronMediane);
    vote_lepenpop_03299.push(vote_lepenMediane);
    vote_rejetpop_03299.push(vote_rejetMediane);
    name_Commune_03299.push(nameCommune);
    Pourcentage_03299.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03299.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03299.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03299.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03299.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03299 = [];
const vote_lepen_03299 = [];
const vote_rejet_03299 = [];
const vote_macronpop_03299 = [];
const vote_lepenpop_03299 = [];
const vote_rejetpop_03299 = [];
const name_Commune_03299 = [];
const Pourcentage_03299 = [];
const Pourcentage_rejet_03299 = [];
const vote_gene_macron_03299 = [];
const vote_gene_lepen_03299 = [];
const vote_gene_rejet_03299 = [];

async function chartIt03299(){
    await GraphDATA03299();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03299-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03299
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
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03299
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03299-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03299,vote_lepen_03299,vote_rejet_03299]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03299-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03299,vote_lepenpop_03299,vote_rejetpop_03299]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03299"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03299
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03299
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03299
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