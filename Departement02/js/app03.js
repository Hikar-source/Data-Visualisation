/********************************************************************** */
/*JS GRAPHIQUE FICHIER DATA */
/********************************************************************** */
chartIt02201();
chartIt02202();
chartIt02203();
chartIt02204();
chartIt02205();
chartIt02206();
chartIt02207();
chartIt02208();
chartIt02209();
chartIt02210();
chartIt02211();
chartIt02212();
chartIt02213();
chartIt02214();
chartIt02215();
chartIt02216();
chartIt02217();
chartIt02218();
chartIt02219();
chartIt02220();
chartIt02221();
chartIt02222();
chartIt02223();
chartIt02224();
chartIt02225();
chartIt02226();
chartIt02227();
chartIt02228();
chartIt02229();
chartIt02230();
chartIt02231();
chartIt02232();
chartIt02233();
chartIt02234();
chartIt02235();
chartIt02236();
chartIt02237();
chartIt02238();
chartIt02239();
chartIt02240();
chartIt02241();
chartIt02242();
chartIt02243();
chartIt02244();
chartIt02245();
chartIt02246();
chartIt02247();
chartIt02248();
chartIt02249();
chartIt02250();
chartIt02251();
chartIt02252();
chartIt02253();
chartIt02254();
chartIt02255();
chartIt02256();
chartIt02257();
chartIt02258();
chartIt02259();
chartIt02260();
chartIt02261();
chartIt02262();
chartIt02263();
chartIt02264();
chartIt02265();
chartIt02266();
chartIt02267();
chartIt02268();
chartIt02269();
chartIt02270();
chartIt02271();
chartIt02272();
chartIt02273();
chartIt02274();
chartIt02275();
chartIt02276();
chartIt02277();
chartIt02278();
chartIt02279();
chartIt02280();
chartIt02281();
chartIt02282();
chartIt02283();
chartIt02284();
chartIt02285();
chartIt02286();
chartIt02287();
chartIt02288();
chartIt02289();
chartIt02290();
chartIt02291();
chartIt02292();
chartIt02293();
chartIt02294();
chartIt02295();
chartIt02296();
chartIt02297();
chartIt02298();
chartIt02299();
/*------------------------------------------------------------------ */
/*COMMUNE 02201*/
/*------------------------------------------------------------------ */
async function GraphDATA02201() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02201.push(vote_macron); 
    vote_lepen_02201.push(vote_lepen);
    vote_rejet_02201.push(vote_rejet);
    vote_macronpop_02201.push(vote_macronMediane);
    vote_lepenpop_02201.push(vote_lepenMediane);
    vote_rejetpop_02201.push(vote_rejetMediane);
    name_Commune_02201.push(nameCommune);
    Pourcentage_02201.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02201.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02201.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02201.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02201.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02201 = [];
const vote_lepen_02201 = [];
const vote_rejet_02201 = [];
const vote_macronpop_02201 = [];
const vote_lepenpop_02201 = [];
const vote_rejetpop_02201 = [];
const name_Commune_02201 = [];
const Pourcentage_02201 = [];
const Pourcentage_rejet_02201 = [];
const vote_gene_macron_02201 = [];
const vote_gene_lepen_02201 = [];
const vote_gene_rejet_02201 = [];

async function chartIt02201(){
    await GraphDATA02201();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02201-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02201
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02201
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02201-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02201,vote_lepen_02201,vote_rejet_02201]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02201-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02201,vote_lepenpop_02201,vote_rejetpop_02201]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02201"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02201
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02201
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02201
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02202*/
/*------------------------------------------------------------------ */
async function GraphDATA02202() {
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
    vote_macron_02202.push(vote_macron); 
    vote_lepen_02202.push(vote_lepen);
    vote_rejet_02202.push(vote_rejet);
    vote_macronpop_02202.push(vote_macronMediane);
    vote_lepenpop_02202.push(vote_lepenMediane);
    vote_rejetpop_02202.push(vote_rejetMediane);
    name_Commune_02202.push(nameCommune);
    Pourcentage_02202.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02202.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02202.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02202.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02202.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02202 = [];
const vote_lepen_02202 = [];
const vote_rejet_02202 = [];
const vote_macronpop_02202 = [];
const vote_lepenpop_02202 = [];
const vote_rejetpop_02202 = [];
const name_Commune_02202 = [];
const Pourcentage_02202 = [];
const Pourcentage_rejet_02202 = [];
const vote_gene_macron_02202 = [];
const vote_gene_lepen_02202 = [];
const vote_gene_rejet_02202 = [];

async function chartIt02202(){
    await GraphDATA02202();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02202-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02202
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02202
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02202-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02202,vote_lepen_02202,vote_rejet_02202]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02202-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02202,vote_lepenpop_02202,vote_rejetpop_02202]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02202"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02202
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02202
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02202
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02203*/
/*------------------------------------------------------------------ */
async function GraphDATA02203() {
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
    vote_macron_02203.push(vote_macron); 
    vote_lepen_02203.push(vote_lepen);
    vote_rejet_02203.push(vote_rejet);
    vote_macronpop_02203.push(vote_macronMediane);
    vote_lepenpop_02203.push(vote_lepenMediane);
    vote_rejetpop_02203.push(vote_rejetMediane);
    name_Commune_02203.push(nameCommune);
    Pourcentage_02203.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02203.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02203.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02203.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02203.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02203 = [];
const vote_lepen_02203 = [];
const vote_rejet_02203 = [];
const vote_macronpop_02203 = [];
const vote_lepenpop_02203 = [];
const vote_rejetpop_02203 = [];
const name_Commune_02203 = [];
const Pourcentage_02203 = [];
const Pourcentage_rejet_02203 = [];
const vote_gene_macron_02203 = [];
const vote_gene_lepen_02203 = [];
const vote_gene_rejet_02203 = [];

async function chartIt02203(){
    await GraphDATA02203();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02203-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02203
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02203
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02203-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02203,vote_lepen_02203,vote_rejet_02203]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02203-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02203,vote_lepenpop_02203,vote_rejetpop_02203]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02203"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02203
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02203
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02203
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02204*/
/*------------------------------------------------------------------ */
async function GraphDATA02204() {
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
    vote_macron_02204.push(vote_macron); 
    vote_lepen_02204.push(vote_lepen);
    vote_rejet_02204.push(vote_rejet);
    vote_macronpop_02204.push(vote_macronMediane);
    vote_lepenpop_02204.push(vote_lepenMediane);
    vote_rejetpop_02204.push(vote_rejetMediane);
    name_Commune_02204.push(nameCommune);
    Pourcentage_02204.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02204.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02204.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02204.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02204.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02204 = [];
const vote_lepen_02204 = [];
const vote_rejet_02204 = [];
const vote_macronpop_02204 = [];
const vote_lepenpop_02204 = [];
const vote_rejetpop_02204 = [];
const name_Commune_02204 = [];
const Pourcentage_02204 = [];
const Pourcentage_rejet_02204 = [];
const vote_gene_macron_02204 = [];
const vote_gene_lepen_02204 = [];
const vote_gene_rejet_02204 = [];

async function chartIt02204(){
    await GraphDATA02204();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02204-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02204
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02204
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02204-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02204,vote_lepen_02204,vote_rejet_02204]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02204-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02204,vote_lepenpop_02204,vote_rejetpop_02204]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02204"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02204
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02204
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02204
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02205*/
/*------------------------------------------------------------------ */
async function GraphDATA02205() {
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
    vote_macron_02205.push(vote_macron); 
    vote_lepen_02205.push(vote_lepen);
    vote_rejet_02205.push(vote_rejet);
    vote_macronpop_02205.push(vote_macronMediane);
    vote_lepenpop_02205.push(vote_lepenMediane);
    vote_rejetpop_02205.push(vote_rejetMediane);
    name_Commune_02205.push(nameCommune);
    Pourcentage_02205.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02205.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02205.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02205.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02205.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02205 = [];
const vote_lepen_02205 = [];
const vote_rejet_02205 = [];
const vote_macronpop_02205 = [];
const vote_lepenpop_02205 = [];
const vote_rejetpop_02205 = [];
const name_Commune_02205 = [];
const Pourcentage_02205 = [];
const Pourcentage_rejet_02205 = [];
const vote_gene_macron_02205 = [];
const vote_gene_lepen_02205 = [];
const vote_gene_rejet_02205 = [];

async function chartIt02205(){
    await GraphDATA02205();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02205-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02205
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02205
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02205-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02205,vote_lepen_02205,vote_rejet_02205]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02205-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02205,vote_lepenpop_02205,vote_rejetpop_02205]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02205"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02205
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02205
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02205
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02206*/
/*------------------------------------------------------------------ */
async function GraphDATA02206() {
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
    vote_macron_02206.push(vote_macron); 
    vote_lepen_02206.push(vote_lepen);
    vote_rejet_02206.push(vote_rejet);
    vote_macronpop_02206.push(vote_macronMediane);
    vote_lepenpop_02206.push(vote_lepenMediane);
    vote_rejetpop_02206.push(vote_rejetMediane);
    name_Commune_02206.push(nameCommune);
    Pourcentage_02206.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02206.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02206.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02206.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02206.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02206 = [];
const vote_lepen_02206 = [];
const vote_rejet_02206 = [];
const vote_macronpop_02206 = [];
const vote_lepenpop_02206 = [];
const vote_rejetpop_02206 = [];
const name_Commune_02206 = [];
const Pourcentage_02206 = [];
const Pourcentage_rejet_02206 = [];
const vote_gene_macron_02206 = [];
const vote_gene_lepen_02206 = [];
const vote_gene_rejet_02206 = [];

async function chartIt02206(){
    await GraphDATA02206();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02206-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02206
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02206
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02206-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02206,vote_lepen_02206,vote_rejet_02206]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02206-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02206,vote_lepenpop_02206,vote_rejetpop_02206]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02206"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02206
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02206
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02206
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02207*/
/*------------------------------------------------------------------ */
async function GraphDATA02207() {
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
    vote_macron_02207.push(vote_macron); 
    vote_lepen_02207.push(vote_lepen);
    vote_rejet_02207.push(vote_rejet);
    vote_macronpop_02207.push(vote_macronMediane);
    vote_lepenpop_02207.push(vote_lepenMediane);
    vote_rejetpop_02207.push(vote_rejetMediane);
    name_Commune_02207.push(nameCommune);
    Pourcentage_02207.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02207.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02207.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02207.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02207.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02207 = [];
const vote_lepen_02207 = [];
const vote_rejet_02207 = [];
const vote_macronpop_02207 = [];
const vote_lepenpop_02207 = [];
const vote_rejetpop_02207 = [];
const name_Commune_02207 = [];
const Pourcentage_02207 = [];
const Pourcentage_rejet_02207 = [];
const vote_gene_macron_02207 = [];
const vote_gene_lepen_02207 = [];
const vote_gene_rejet_02207 = [];

async function chartIt02207(){
    await GraphDATA02207();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02207-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02207
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02207
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02207-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02207,vote_lepen_02207,vote_rejet_02207]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02207-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02207,vote_lepenpop_02207,vote_rejetpop_02207]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02207"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02207
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02207
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02207
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02208*/
/*------------------------------------------------------------------ */
async function GraphDATA02208() {
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
    vote_macron_02208.push(vote_macron); 
    vote_lepen_02208.push(vote_lepen);
    vote_rejet_02208.push(vote_rejet);
    vote_macronpop_02208.push(vote_macronMediane);
    vote_lepenpop_02208.push(vote_lepenMediane);
    vote_rejetpop_02208.push(vote_rejetMediane);
    name_Commune_02208.push(nameCommune);
    Pourcentage_02208.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02208.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02208.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02208.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02208.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02208 = [];
const vote_lepen_02208 = [];
const vote_rejet_02208 = [];
const vote_macronpop_02208 = [];
const vote_lepenpop_02208 = [];
const vote_rejetpop_02208 = [];
const name_Commune_02208 = [];
const Pourcentage_02208 = [];
const Pourcentage_rejet_02208 = [];
const vote_gene_macron_02208 = [];
const vote_gene_lepen_02208 = [];
const vote_gene_rejet_02208 = [];

async function chartIt02208(){
    await GraphDATA02208();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02208-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02208
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02208
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02208-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02208,vote_lepen_02208,vote_rejet_02208]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02208-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02208,vote_lepenpop_02208,vote_rejetpop_02208]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02208"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02208
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02208
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02208
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02209*/
/*------------------------------------------------------------------ */
async function GraphDATA02209() {
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
    vote_macron_02209.push(vote_macron); 
    vote_lepen_02209.push(vote_lepen);
    vote_rejet_02209.push(vote_rejet);
    vote_macronpop_02209.push(vote_macronMediane);
    vote_lepenpop_02209.push(vote_lepenMediane);
    vote_rejetpop_02209.push(vote_rejetMediane);
    name_Commune_02209.push(nameCommune);
    Pourcentage_02209.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02209.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02209.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02209.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02209.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02209 = [];
const vote_lepen_02209 = [];
const vote_rejet_02209 = [];
const vote_macronpop_02209 = [];
const vote_lepenpop_02209 = [];
const vote_rejetpop_02209 = [];
const name_Commune_02209 = [];
const Pourcentage_02209 = [];
const Pourcentage_rejet_02209 = [];
const vote_gene_macron_02209 = [];
const vote_gene_lepen_02209 = [];
const vote_gene_rejet_02209 = [];

async function chartIt02209(){
    await GraphDATA02209();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02209-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02209
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02209
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02209-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02209,vote_lepen_02209,vote_rejet_02209]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02209-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02209,vote_lepenpop_02209,vote_rejetpop_02209]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02209"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02209
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02209
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02209
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02210*/
/*------------------------------------------------------------------ */
async function GraphDATA02210() {
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
    vote_macron_02210.push(vote_macron); 
    vote_lepen_02210.push(vote_lepen);
    vote_rejet_02210.push(vote_rejet);
    vote_macronpop_02210.push(vote_macronMediane);
    vote_lepenpop_02210.push(vote_lepenMediane);
    vote_rejetpop_02210.push(vote_rejetMediane);
    name_Commune_02210.push(nameCommune);
    Pourcentage_02210.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02210.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02210.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02210.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02210.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02210 = [];
const vote_lepen_02210 = [];
const vote_rejet_02210 = [];
const vote_macronpop_02210 = [];
const vote_lepenpop_02210 = [];
const vote_rejetpop_02210 = [];
const name_Commune_02210 = [];
const Pourcentage_02210 = [];
const Pourcentage_rejet_02210 = [];
const vote_gene_macron_02210 = [];
const vote_gene_lepen_02210 = [];
const vote_gene_rejet_02210 = [];

async function chartIt02210(){
    await GraphDATA02210();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02210-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02210
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02210
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02210-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02210,vote_lepen_02210,vote_rejet_02210]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02210-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02210,vote_lepenpop_02210,vote_rejetpop_02210]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02210"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02210
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02210
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02210
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02211*/
/*------------------------------------------------------------------ */
async function GraphDATA02211() {
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
    vote_macron_02211.push(vote_macron); 
    vote_lepen_02211.push(vote_lepen);
    vote_rejet_02211.push(vote_rejet);
    vote_macronpop_02211.push(vote_macronMediane);
    vote_lepenpop_02211.push(vote_lepenMediane);
    vote_rejetpop_02211.push(vote_rejetMediane);
    name_Commune_02211.push(nameCommune);
    Pourcentage_02211.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02211.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02211.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02211.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02211.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02211 = [];
const vote_lepen_02211 = [];
const vote_rejet_02211 = [];
const vote_macronpop_02211 = [];
const vote_lepenpop_02211 = [];
const vote_rejetpop_02211 = [];
const name_Commune_02211 = [];
const Pourcentage_02211 = [];
const Pourcentage_rejet_02211 = [];
const vote_gene_macron_02211 = [];
const vote_gene_lepen_02211 = [];
const vote_gene_rejet_02211 = [];

async function chartIt02211(){
    await GraphDATA02211();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02211-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02211
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02211
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02211-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02211,vote_lepen_02211,vote_rejet_02211]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02211-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02211,vote_lepenpop_02211,vote_rejetpop_02211]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02211"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02211
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02211
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02211
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02212*/
/*------------------------------------------------------------------ */
async function GraphDATA02212() {
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
    vote_macron_02212.push(vote_macron); 
    vote_lepen_02212.push(vote_lepen);
    vote_rejet_02212.push(vote_rejet);
    vote_macronpop_02212.push(vote_macronMediane);
    vote_lepenpop_02212.push(vote_lepenMediane);
    vote_rejetpop_02212.push(vote_rejetMediane);
    name_Commune_02212.push(nameCommune);
    Pourcentage_02212.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02212.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02212.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02212.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02212.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02212 = [];
const vote_lepen_02212 = [];
const vote_rejet_02212 = [];
const vote_macronpop_02212 = [];
const vote_lepenpop_02212 = [];
const vote_rejetpop_02212 = [];
const name_Commune_02212 = [];
const Pourcentage_02212 = [];
const Pourcentage_rejet_02212 = [];
const vote_gene_macron_02212 = [];
const vote_gene_lepen_02212 = [];
const vote_gene_rejet_02212 = [];

async function chartIt02212(){
    await GraphDATA02212();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02212-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02212
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02212
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02212-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02212,vote_lepen_02212,vote_rejet_02212]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02212-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02212,vote_lepenpop_02212,vote_rejetpop_02212]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02212"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02212
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02212
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02212
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02213*/
/*------------------------------------------------------------------ */
async function GraphDATA02213() {
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
    vote_macron_02213.push(vote_macron); 
    vote_lepen_02213.push(vote_lepen);
    vote_rejet_02213.push(vote_rejet);
    vote_macronpop_02213.push(vote_macronMediane);
    vote_lepenpop_02213.push(vote_lepenMediane);
    vote_rejetpop_02213.push(vote_rejetMediane);
    name_Commune_02213.push(nameCommune);
    Pourcentage_02213.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02213.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02213.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02213.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02213.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02213 = [];
const vote_lepen_02213 = [];
const vote_rejet_02213 = [];
const vote_macronpop_02213 = [];
const vote_lepenpop_02213 = [];
const vote_rejetpop_02213 = [];
const name_Commune_02213 = [];
const Pourcentage_02213 = [];
const Pourcentage_rejet_02213 = [];
const vote_gene_macron_02213 = [];
const vote_gene_lepen_02213 = [];
const vote_gene_rejet_02213 = [];

async function chartIt02213(){
    await GraphDATA02213();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02213-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02213
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02213
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02213-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02213,vote_lepen_02213,vote_rejet_02213]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02213-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02213,vote_lepenpop_02213,vote_rejetpop_02213]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02213"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02213
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02213
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02213
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02214*/
/*------------------------------------------------------------------ */
async function GraphDATA02214() {
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
    vote_macron_02214.push(vote_macron); 
    vote_lepen_02214.push(vote_lepen);
    vote_rejet_02214.push(vote_rejet);
    vote_macronpop_02214.push(vote_macronMediane);
    vote_lepenpop_02214.push(vote_lepenMediane);
    vote_rejetpop_02214.push(vote_rejetMediane);
    name_Commune_02214.push(nameCommune);
    Pourcentage_02214.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02214.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02214.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02214.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02214.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02214 = [];
const vote_lepen_02214 = [];
const vote_rejet_02214 = [];
const vote_macronpop_02214 = [];
const vote_lepenpop_02214 = [];
const vote_rejetpop_02214 = [];
const name_Commune_02214 = [];
const Pourcentage_02214 = [];
const Pourcentage_rejet_02214 = [];
const vote_gene_macron_02214 = [];
const vote_gene_lepen_02214 = [];
const vote_gene_rejet_02214 = [];

async function chartIt02214(){
    await GraphDATA02214();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02214-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02214
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02214
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02214-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02214,vote_lepen_02214,vote_rejet_02214]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02214-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02214,vote_lepenpop_02214,vote_rejetpop_02214]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02214"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02214
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02214
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02214
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02215*/
/*------------------------------------------------------------------ */
async function GraphDATA02215() {
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
    vote_macron_02215.push(vote_macron); 
    vote_lepen_02215.push(vote_lepen);
    vote_rejet_02215.push(vote_rejet);
    vote_macronpop_02215.push(vote_macronMediane);
    vote_lepenpop_02215.push(vote_lepenMediane);
    vote_rejetpop_02215.push(vote_rejetMediane);
    name_Commune_02215.push(nameCommune);
    Pourcentage_02215.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02215.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02215.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02215.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02215.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02215 = [];
const vote_lepen_02215 = [];
const vote_rejet_02215 = [];
const vote_macronpop_02215 = [];
const vote_lepenpop_02215 = [];
const vote_rejetpop_02215 = [];
const name_Commune_02215 = [];
const Pourcentage_02215 = [];
const Pourcentage_rejet_02215 = [];
const vote_gene_macron_02215 = [];
const vote_gene_lepen_02215 = [];
const vote_gene_rejet_02215 = [];

async function chartIt02215(){
    await GraphDATA02215();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02215-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02215
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02215
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02215-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02215,vote_lepen_02215,vote_rejet_02215]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02215-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02215,vote_lepenpop_02215,vote_rejetpop_02215]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02215"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02215
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02215
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02215
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02216*/
/*------------------------------------------------------------------ */
async function GraphDATA02216() {
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
    vote_macron_02216.push(vote_macron); 
    vote_lepen_02216.push(vote_lepen);
    vote_rejet_02216.push(vote_rejet);
    vote_macronpop_02216.push(vote_macronMediane);
    vote_lepenpop_02216.push(vote_lepenMediane);
    vote_rejetpop_02216.push(vote_rejetMediane);
    name_Commune_02216.push(nameCommune);
    Pourcentage_02216.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02216.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02216.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02216.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02216.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02216 = [];
const vote_lepen_02216 = [];
const vote_rejet_02216 = [];
const vote_macronpop_02216 = [];
const vote_lepenpop_02216 = [];
const vote_rejetpop_02216 = [];
const name_Commune_02216 = [];
const Pourcentage_02216 = [];
const Pourcentage_rejet_02216 = [];
const vote_gene_macron_02216 = [];
const vote_gene_lepen_02216 = [];
const vote_gene_rejet_02216 = [];

async function chartIt02216(){
    await GraphDATA02216();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02216-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02216
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02216
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02216-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02216,vote_lepen_02216,vote_rejet_02216]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02216-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02216,vote_lepenpop_02216,vote_rejetpop_02216]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02216"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02216
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02216
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02216
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02217*/
/*------------------------------------------------------------------ */
async function GraphDATA02217() {
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
    vote_macron_02217.push(vote_macron); 
    vote_lepen_02217.push(vote_lepen);
    vote_rejet_02217.push(vote_rejet);
    vote_macronpop_02217.push(vote_macronMediane);
    vote_lepenpop_02217.push(vote_lepenMediane);
    vote_rejetpop_02217.push(vote_rejetMediane);
    name_Commune_02217.push(nameCommune);
    Pourcentage_02217.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02217.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02217.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02217.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02217.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02217 = [];
const vote_lepen_02217 = [];
const vote_rejet_02217 = [];
const vote_macronpop_02217 = [];
const vote_lepenpop_02217 = [];
const vote_rejetpop_02217 = [];
const name_Commune_02217 = [];
const Pourcentage_02217 = [];
const Pourcentage_rejet_02217 = [];
const vote_gene_macron_02217 = [];
const vote_gene_lepen_02217 = [];
const vote_gene_rejet_02217 = [];

async function chartIt02217(){
    await GraphDATA02217();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02217-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02217
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02217
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02217-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02217,vote_lepen_02217,vote_rejet_02217]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02217-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02217,vote_lepenpop_02217,vote_rejetpop_02217]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02217"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02217
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02217
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02217
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02218*/
/*------------------------------------------------------------------ */
async function GraphDATA02218() {
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
    vote_macron_02218.push(vote_macron); 
    vote_lepen_02218.push(vote_lepen);
    vote_rejet_02218.push(vote_rejet);
    vote_macronpop_02218.push(vote_macronMediane);
    vote_lepenpop_02218.push(vote_lepenMediane);
    vote_rejetpop_02218.push(vote_rejetMediane);
    name_Commune_02218.push(nameCommune);
    Pourcentage_02218.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02218.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02218.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02218.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02218.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02218 = [];
const vote_lepen_02218 = [];
const vote_rejet_02218 = [];
const vote_macronpop_02218 = [];
const vote_lepenpop_02218 = [];
const vote_rejetpop_02218 = [];
const name_Commune_02218 = [];
const Pourcentage_02218 = [];
const Pourcentage_rejet_02218 = [];
const vote_gene_macron_02218 = [];
const vote_gene_lepen_02218 = [];
const vote_gene_rejet_02218 = [];

async function chartIt02218(){
    await GraphDATA02218();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02218-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02218
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02218
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02218-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02218,vote_lepen_02218,vote_rejet_02218]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02218-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02218,vote_lepenpop_02218,vote_rejetpop_02218]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02218"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02218
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02218
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02218
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02219*/
/*------------------------------------------------------------------ */
async function GraphDATA02219() {
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
    vote_macron_02219.push(vote_macron); 
    vote_lepen_02219.push(vote_lepen);
    vote_rejet_02219.push(vote_rejet);
    vote_macronpop_02219.push(vote_macronMediane);
    vote_lepenpop_02219.push(vote_lepenMediane);
    vote_rejetpop_02219.push(vote_rejetMediane);
    name_Commune_02219.push(nameCommune);
    Pourcentage_02219.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02219.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02219.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02219.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02219.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02219 = [];
const vote_lepen_02219 = [];
const vote_rejet_02219 = [];
const vote_macronpop_02219 = [];
const vote_lepenpop_02219 = [];
const vote_rejetpop_02219 = [];
const name_Commune_02219 = [];
const Pourcentage_02219 = [];
const Pourcentage_rejet_02219 = [];
const vote_gene_macron_02219 = [];
const vote_gene_lepen_02219 = [];
const vote_gene_rejet_02219 = [];

async function chartIt02219(){
    await GraphDATA02219();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02219-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02219
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02219
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02219-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02219,vote_lepen_02219,vote_rejet_02219]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02219-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02219,vote_lepenpop_02219,vote_rejetpop_02219]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02219"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02219
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02219
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02219
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02220*/
/*------------------------------------------------------------------ */
async function GraphDATA02220() {
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
    vote_macron_02220.push(vote_macron); 
    vote_lepen_02220.push(vote_lepen);
    vote_rejet_02220.push(vote_rejet);
    vote_macronpop_02220.push(vote_macronMediane);
    vote_lepenpop_02220.push(vote_lepenMediane);
    vote_rejetpop_02220.push(vote_rejetMediane);
    name_Commune_02220.push(nameCommune);
    Pourcentage_02220.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02220.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02220.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02220.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02220.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02220 = [];
const vote_lepen_02220 = [];
const vote_rejet_02220 = [];
const vote_macronpop_02220 = [];
const vote_lepenpop_02220 = [];
const vote_rejetpop_02220 = [];
const name_Commune_02220 = [];
const Pourcentage_02220 = [];
const Pourcentage_rejet_02220 = [];
const vote_gene_macron_02220 = [];
const vote_gene_lepen_02220 = [];
const vote_gene_rejet_02220 = [];

async function chartIt02220(){
    await GraphDATA02220();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02220-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02220
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02220
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02220-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02220,vote_lepen_02220,vote_rejet_02220]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02220-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02220,vote_lepenpop_02220,vote_rejetpop_02220]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02220"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02220
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02220
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02220
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02221*/
/*------------------------------------------------------------------ */
async function GraphDATA02221() {
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
    vote_macron_02221.push(vote_macron); 
    vote_lepen_02221.push(vote_lepen);
    vote_rejet_02221.push(vote_rejet);
    vote_macronpop_02221.push(vote_macronMediane);
    vote_lepenpop_02221.push(vote_lepenMediane);
    vote_rejetpop_02221.push(vote_rejetMediane);
    name_Commune_02221.push(nameCommune);
    Pourcentage_02221.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02221.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02221.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02221.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02221.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02221 = [];
const vote_lepen_02221 = [];
const vote_rejet_02221 = [];
const vote_macronpop_02221 = [];
const vote_lepenpop_02221 = [];
const vote_rejetpop_02221 = [];
const name_Commune_02221 = [];
const Pourcentage_02221 = [];
const Pourcentage_rejet_02221 = [];
const vote_gene_macron_02221 = [];
const vote_gene_lepen_02221 = [];
const vote_gene_rejet_02221 = [];

async function chartIt02221(){
    await GraphDATA02221();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02221-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02221
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02221
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02221-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02221,vote_lepen_02221,vote_rejet_02221]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02221-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02221,vote_lepenpop_02221,vote_rejetpop_02221]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02221"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02221
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02221
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02221
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02222*/
/*------------------------------------------------------------------ */
async function GraphDATA02222() {
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
    vote_macron_02222.push(vote_macron); 
    vote_lepen_02222.push(vote_lepen);
    vote_rejet_02222.push(vote_rejet);
    vote_macronpop_02222.push(vote_macronMediane);
    vote_lepenpop_02222.push(vote_lepenMediane);
    vote_rejetpop_02222.push(vote_rejetMediane);
    name_Commune_02222.push(nameCommune);
    Pourcentage_02222.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02222.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02222.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02222.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02222.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02222 = [];
const vote_lepen_02222 = [];
const vote_rejet_02222 = [];
const vote_macronpop_02222 = [];
const vote_lepenpop_02222 = [];
const vote_rejetpop_02222 = [];
const name_Commune_02222 = [];
const Pourcentage_02222 = [];
const Pourcentage_rejet_02222 = [];
const vote_gene_macron_02222 = [];
const vote_gene_lepen_02222 = [];
const vote_gene_rejet_02222 = [];

async function chartIt02222(){
    await GraphDATA02222();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02222-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02222
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02222
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02222-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02222,vote_lepen_02222,vote_rejet_02222]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02222-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02222,vote_lepenpop_02222,vote_rejetpop_02222]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02222"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02222
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02222
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02222
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02223*/
/*------------------------------------------------------------------ */
async function GraphDATA02223() {
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
    vote_macron_02223.push(vote_macron); 
    vote_lepen_02223.push(vote_lepen);
    vote_rejet_02223.push(vote_rejet);
    vote_macronpop_02223.push(vote_macronMediane);
    vote_lepenpop_02223.push(vote_lepenMediane);
    vote_rejetpop_02223.push(vote_rejetMediane);
    name_Commune_02223.push(nameCommune);
    Pourcentage_02223.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02223.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02223.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02223.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02223.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02223 = [];
const vote_lepen_02223 = [];
const vote_rejet_02223 = [];
const vote_macronpop_02223 = [];
const vote_lepenpop_02223 = [];
const vote_rejetpop_02223 = [];
const name_Commune_02223 = [];
const Pourcentage_02223 = [];
const Pourcentage_rejet_02223 = [];
const vote_gene_macron_02223 = [];
const vote_gene_lepen_02223 = [];
const vote_gene_rejet_02223 = [];

async function chartIt02223(){
    await GraphDATA02223();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02223-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02223
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02223
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02223-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02223,vote_lepen_02223,vote_rejet_02223]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02223-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02223,vote_lepenpop_02223,vote_rejetpop_02223]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02223"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02223
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02223
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02223
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02224*/
/*------------------------------------------------------------------ */
async function GraphDATA02224() {
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
    vote_macron_02224.push(vote_macron); 
    vote_lepen_02224.push(vote_lepen);
    vote_rejet_02224.push(vote_rejet);
    vote_macronpop_02224.push(vote_macronMediane);
    vote_lepenpop_02224.push(vote_lepenMediane);
    vote_rejetpop_02224.push(vote_rejetMediane);
    name_Commune_02224.push(nameCommune);
    Pourcentage_02224.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02224.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02224.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02224.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02224.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02224 = [];
const vote_lepen_02224 = [];
const vote_rejet_02224 = [];
const vote_macronpop_02224 = [];
const vote_lepenpop_02224 = [];
const vote_rejetpop_02224 = [];
const name_Commune_02224 = [];
const Pourcentage_02224 = [];
const Pourcentage_rejet_02224 = [];
const vote_gene_macron_02224 = [];
const vote_gene_lepen_02224 = [];
const vote_gene_rejet_02224 = [];

async function chartIt02224(){
    await GraphDATA02224();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02224-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02224
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02224
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02224-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02224,vote_lepen_02224,vote_rejet_02224]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02224-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02224,vote_lepenpop_02224,vote_rejetpop_02224]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02224"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02224
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02224
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02224
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02225*/
/*------------------------------------------------------------------ */
async function GraphDATA02225() {
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
    vote_macron_02225.push(vote_macron); 
    vote_lepen_02225.push(vote_lepen);
    vote_rejet_02225.push(vote_rejet);
    vote_macronpop_02225.push(vote_macronMediane);
    vote_lepenpop_02225.push(vote_lepenMediane);
    vote_rejetpop_02225.push(vote_rejetMediane);
    name_Commune_02225.push(nameCommune);
    Pourcentage_02225.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02225.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02225.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02225.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02225.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02225 = [];
const vote_lepen_02225 = [];
const vote_rejet_02225 = [];
const vote_macronpop_02225 = [];
const vote_lepenpop_02225 = [];
const vote_rejetpop_02225 = [];
const name_Commune_02225 = [];
const Pourcentage_02225 = [];
const Pourcentage_rejet_02225 = [];
const vote_gene_macron_02225 = [];
const vote_gene_lepen_02225 = [];
const vote_gene_rejet_02225 = [];

async function chartIt02225(){
    await GraphDATA02225();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02225-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02225
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02225
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02225-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02225,vote_lepen_02225,vote_rejet_02225]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02225-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02225,vote_lepenpop_02225,vote_rejetpop_02225]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02225"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02225
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02225
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02225
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02226*/
/*------------------------------------------------------------------ */
async function GraphDATA02226() {
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
    vote_macron_02226.push(vote_macron); 
    vote_lepen_02226.push(vote_lepen);
    vote_rejet_02226.push(vote_rejet);
    vote_macronpop_02226.push(vote_macronMediane);
    vote_lepenpop_02226.push(vote_lepenMediane);
    vote_rejetpop_02226.push(vote_rejetMediane);
    name_Commune_02226.push(nameCommune);
    Pourcentage_02226.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02226.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02226.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02226.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02226.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02226 = [];
const vote_lepen_02226 = [];
const vote_rejet_02226 = [];
const vote_macronpop_02226 = [];
const vote_lepenpop_02226 = [];
const vote_rejetpop_02226 = [];
const name_Commune_02226 = [];
const Pourcentage_02226 = [];
const Pourcentage_rejet_02226 = [];
const vote_gene_macron_02226 = [];
const vote_gene_lepen_02226 = [];
const vote_gene_rejet_02226 = [];

async function chartIt02226(){
    await GraphDATA02226();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02226-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02226
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02226
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02226-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02226,vote_lepen_02226,vote_rejet_02226]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02226-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02226,vote_lepenpop_02226,vote_rejetpop_02226]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02226"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02226
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02226
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02226
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02227*/
/*------------------------------------------------------------------ */
async function GraphDATA02227() {
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
    vote_macron_02227.push(vote_macron); 
    vote_lepen_02227.push(vote_lepen);
    vote_rejet_02227.push(vote_rejet);
    vote_macronpop_02227.push(vote_macronMediane);
    vote_lepenpop_02227.push(vote_lepenMediane);
    vote_rejetpop_02227.push(vote_rejetMediane);
    name_Commune_02227.push(nameCommune);
    Pourcentage_02227.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02227.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02227.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02227.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02227.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02227 = [];
const vote_lepen_02227 = [];
const vote_rejet_02227 = [];
const vote_macronpop_02227 = [];
const vote_lepenpop_02227 = [];
const vote_rejetpop_02227 = [];
const name_Commune_02227 = [];
const Pourcentage_02227 = [];
const Pourcentage_rejet_02227 = [];
const vote_gene_macron_02227 = [];
const vote_gene_lepen_02227 = [];
const vote_gene_rejet_02227 = [];

async function chartIt02227(){
    await GraphDATA02227();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02227-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02227
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02227
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02227-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02227,vote_lepen_02227,vote_rejet_02227]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02227-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02227,vote_lepenpop_02227,vote_rejetpop_02227]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02227"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02227
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02227
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02227
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02228*/
/*------------------------------------------------------------------ */
async function GraphDATA02228() {
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
    vote_macron_02228.push(vote_macron); 
    vote_lepen_02228.push(vote_lepen);
    vote_rejet_02228.push(vote_rejet);
    vote_macronpop_02228.push(vote_macronMediane);
    vote_lepenpop_02228.push(vote_lepenMediane);
    vote_rejetpop_02228.push(vote_rejetMediane);
    name_Commune_02228.push(nameCommune);
    Pourcentage_02228.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02228.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02228.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02228.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02228.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02228 = [];
const vote_lepen_02228 = [];
const vote_rejet_02228 = [];
const vote_macronpop_02228 = [];
const vote_lepenpop_02228 = [];
const vote_rejetpop_02228 = [];
const name_Commune_02228 = [];
const Pourcentage_02228 = [];
const Pourcentage_rejet_02228 = [];
const vote_gene_macron_02228 = [];
const vote_gene_lepen_02228 = [];
const vote_gene_rejet_02228 = [];

async function chartIt02228(){
    await GraphDATA02228();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02228-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02228
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02228
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02228-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02228,vote_lepen_02228,vote_rejet_02228]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02228-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02228,vote_lepenpop_02228,vote_rejetpop_02228]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02228"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02228
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02228
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02228
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02229*/
/*------------------------------------------------------------------ */
async function GraphDATA02229() {
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
    vote_macron_02229.push(vote_macron); 
    vote_lepen_02229.push(vote_lepen);
    vote_rejet_02229.push(vote_rejet);
    vote_macronpop_02229.push(vote_macronMediane);
    vote_lepenpop_02229.push(vote_lepenMediane);
    vote_rejetpop_02229.push(vote_rejetMediane);
    name_Commune_02229.push(nameCommune);
    Pourcentage_02229.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02229.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02229.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02229.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02229.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02229 = [];
const vote_lepen_02229 = [];
const vote_rejet_02229 = [];
const vote_macronpop_02229 = [];
const vote_lepenpop_02229 = [];
const vote_rejetpop_02229 = [];
const name_Commune_02229 = [];
const Pourcentage_02229 = [];
const Pourcentage_rejet_02229 = [];
const vote_gene_macron_02229 = [];
const vote_gene_lepen_02229 = [];
const vote_gene_rejet_02229 = [];

async function chartIt02229(){
    await GraphDATA02229();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02229-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02229
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02229
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02229-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02229,vote_lepen_02229,vote_rejet_02229]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02229-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02229,vote_lepenpop_02229,vote_rejetpop_02229]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02229"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02229
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02229
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02229
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02230*/
/*------------------------------------------------------------------ */
async function GraphDATA02230() {
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
    vote_macron_02230.push(vote_macron); 
    vote_lepen_02230.push(vote_lepen);
    vote_rejet_02230.push(vote_rejet);
    vote_macronpop_02230.push(vote_macronMediane);
    vote_lepenpop_02230.push(vote_lepenMediane);
    vote_rejetpop_02230.push(vote_rejetMediane);
    name_Commune_02230.push(nameCommune);
    Pourcentage_02230.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02230.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02230.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02230.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02230.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02230 = [];
const vote_lepen_02230 = [];
const vote_rejet_02230 = [];
const vote_macronpop_02230 = [];
const vote_lepenpop_02230 = [];
const vote_rejetpop_02230 = [];
const name_Commune_02230 = [];
const Pourcentage_02230 = [];
const Pourcentage_rejet_02230 = [];
const vote_gene_macron_02230 = [];
const vote_gene_lepen_02230 = [];
const vote_gene_rejet_02230 = [];

async function chartIt02230(){
    await GraphDATA02230();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02230-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02230
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02230
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02230-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02230,vote_lepen_02230,vote_rejet_02230]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02230-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02230,vote_lepenpop_02230,vote_rejetpop_02230]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02230"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02230
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02230
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02230
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02231*/
/*------------------------------------------------------------------ */
async function GraphDATA02231() {
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
    vote_macron_02231.push(vote_macron); 
    vote_lepen_02231.push(vote_lepen);
    vote_rejet_02231.push(vote_rejet);
    vote_macronpop_02231.push(vote_macronMediane);
    vote_lepenpop_02231.push(vote_lepenMediane);
    vote_rejetpop_02231.push(vote_rejetMediane);
    name_Commune_02231.push(nameCommune);
    Pourcentage_02231.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02231.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02231.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02231.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02231.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02231 = [];
const vote_lepen_02231 = [];
const vote_rejet_02231 = [];
const vote_macronpop_02231 = [];
const vote_lepenpop_02231 = [];
const vote_rejetpop_02231 = [];
const name_Commune_02231 = [];
const Pourcentage_02231 = [];
const Pourcentage_rejet_02231 = [];
const vote_gene_macron_02231 = [];
const vote_gene_lepen_02231 = [];
const vote_gene_rejet_02231 = [];

async function chartIt02231(){
    await GraphDATA02231();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02231-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02231
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02231
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02231-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02231,vote_lepen_02231,vote_rejet_02231]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02231-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02231,vote_lepenpop_02231,vote_rejetpop_02231]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02231"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02231
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02231
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02231
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02232*/
/*------------------------------------------------------------------ */
async function GraphDATA02232() {
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
    vote_macron_02232.push(vote_macron); 
    vote_lepen_02232.push(vote_lepen);
    vote_rejet_02232.push(vote_rejet);
    vote_macronpop_02232.push(vote_macronMediane);
    vote_lepenpop_02232.push(vote_lepenMediane);
    vote_rejetpop_02232.push(vote_rejetMediane);
    name_Commune_02232.push(nameCommune);
    Pourcentage_02232.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02232.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02232.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02232.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02232.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02232 = [];
const vote_lepen_02232 = [];
const vote_rejet_02232 = [];
const vote_macronpop_02232 = [];
const vote_lepenpop_02232 = [];
const vote_rejetpop_02232 = [];
const name_Commune_02232 = [];
const Pourcentage_02232 = [];
const Pourcentage_rejet_02232 = [];
const vote_gene_macron_02232 = [];
const vote_gene_lepen_02232 = [];
const vote_gene_rejet_02232 = [];

async function chartIt02232(){
    await GraphDATA02232();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02232-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02232
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02232
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02232-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02232,vote_lepen_02232,vote_rejet_02232]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02232-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02232,vote_lepenpop_02232,vote_rejetpop_02232]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02232"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02232
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02232
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02232
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02233*/
/*------------------------------------------------------------------ */
async function GraphDATA02233() {
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
    vote_macron_02233.push(vote_macron); 
    vote_lepen_02233.push(vote_lepen);
    vote_rejet_02233.push(vote_rejet);
    vote_macronpop_02233.push(vote_macronMediane);
    vote_lepenpop_02233.push(vote_lepenMediane);
    vote_rejetpop_02233.push(vote_rejetMediane);
    name_Commune_02233.push(nameCommune);
    Pourcentage_02233.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02233.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02233.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02233.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02233.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02233 = [];
const vote_lepen_02233 = [];
const vote_rejet_02233 = [];
const vote_macronpop_02233 = [];
const vote_lepenpop_02233 = [];
const vote_rejetpop_02233 = [];
const name_Commune_02233 = [];
const Pourcentage_02233 = [];
const Pourcentage_rejet_02233 = [];
const vote_gene_macron_02233 = [];
const vote_gene_lepen_02233 = [];
const vote_gene_rejet_02233 = [];

async function chartIt02233(){
    await GraphDATA02233();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02233-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02233
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02233
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02233-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02233,vote_lepen_02233,vote_rejet_02233]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02233-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02233,vote_lepenpop_02233,vote_rejetpop_02233]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02233"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02233
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02233
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02233
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02234*/
/*------------------------------------------------------------------ */
async function GraphDATA02234() {
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
    vote_macron_02234.push(vote_macron); 
    vote_lepen_02234.push(vote_lepen);
    vote_rejet_02234.push(vote_rejet);
    vote_macronpop_02234.push(vote_macronMediane);
    vote_lepenpop_02234.push(vote_lepenMediane);
    vote_rejetpop_02234.push(vote_rejetMediane);
    name_Commune_02234.push(nameCommune);
    Pourcentage_02234.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02234.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02234.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02234.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02234.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02234 = [];
const vote_lepen_02234 = [];
const vote_rejet_02234 = [];
const vote_macronpop_02234 = [];
const vote_lepenpop_02234 = [];
const vote_rejetpop_02234 = [];
const name_Commune_02234 = [];
const Pourcentage_02234 = [];
const Pourcentage_rejet_02234 = [];
const vote_gene_macron_02234 = [];
const vote_gene_lepen_02234 = [];
const vote_gene_rejet_02234 = [];

async function chartIt02234(){
    await GraphDATA02234();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02234-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02234
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02234
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02234-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02234,vote_lepen_02234,vote_rejet_02234]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02234-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02234,vote_lepenpop_02234,vote_rejetpop_02234]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02234"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02234
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02234
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02234
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02235*/
/*------------------------------------------------------------------ */
async function GraphDATA02235() {
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
    vote_macron_02235.push(vote_macron); 
    vote_lepen_02235.push(vote_lepen);
    vote_rejet_02235.push(vote_rejet);
    vote_macronpop_02235.push(vote_macronMediane);
    vote_lepenpop_02235.push(vote_lepenMediane);
    vote_rejetpop_02235.push(vote_rejetMediane);
    name_Commune_02235.push(nameCommune);
    Pourcentage_02235.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02235.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02235.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02235.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02235.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02235 = [];
const vote_lepen_02235 = [];
const vote_rejet_02235 = [];
const vote_macronpop_02235 = [];
const vote_lepenpop_02235 = [];
const vote_rejetpop_02235 = [];
const name_Commune_02235 = [];
const Pourcentage_02235 = [];
const Pourcentage_rejet_02235 = [];
const vote_gene_macron_02235 = [];
const vote_gene_lepen_02235 = [];
const vote_gene_rejet_02235 = [];

async function chartIt02235(){
    await GraphDATA02235();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02235-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02235
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02235
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02235-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02235,vote_lepen_02235,vote_rejet_02235]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02235-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02235,vote_lepenpop_02235,vote_rejetpop_02235]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02235"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02235
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02235
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02235
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02236*/
/*------------------------------------------------------------------ */
async function GraphDATA02236() {
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
    vote_macron_02236.push(vote_macron); 
    vote_lepen_02236.push(vote_lepen);
    vote_rejet_02236.push(vote_rejet);
    vote_macronpop_02236.push(vote_macronMediane);
    vote_lepenpop_02236.push(vote_lepenMediane);
    vote_rejetpop_02236.push(vote_rejetMediane);
    name_Commune_02236.push(nameCommune);
    Pourcentage_02236.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02236.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02236.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02236.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02236.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02236 = [];
const vote_lepen_02236 = [];
const vote_rejet_02236 = [];
const vote_macronpop_02236 = [];
const vote_lepenpop_02236 = [];
const vote_rejetpop_02236 = [];
const name_Commune_02236 = [];
const Pourcentage_02236 = [];
const Pourcentage_rejet_02236 = [];
const vote_gene_macron_02236 = [];
const vote_gene_lepen_02236 = [];
const vote_gene_rejet_02236 = [];

async function chartIt02236(){
    await GraphDATA02236();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02236-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02236
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02236
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02236-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02236,vote_lepen_02236,vote_rejet_02236]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02236-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02236,vote_lepenpop_02236,vote_rejetpop_02236]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02236"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02236
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02236
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02236
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02237*/
/*------------------------------------------------------------------ */
async function GraphDATA02237() {
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
    vote_macron_02237.push(vote_macron); 
    vote_lepen_02237.push(vote_lepen);
    vote_rejet_02237.push(vote_rejet);
    vote_macronpop_02237.push(vote_macronMediane);
    vote_lepenpop_02237.push(vote_lepenMediane);
    vote_rejetpop_02237.push(vote_rejetMediane);
    name_Commune_02237.push(nameCommune);
    Pourcentage_02237.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02237.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02237.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02237.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02237.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02237 = [];
const vote_lepen_02237 = [];
const vote_rejet_02237 = [];
const vote_macronpop_02237 = [];
const vote_lepenpop_02237 = [];
const vote_rejetpop_02237 = [];
const name_Commune_02237 = [];
const Pourcentage_02237 = [];
const Pourcentage_rejet_02237 = [];
const vote_gene_macron_02237 = [];
const vote_gene_lepen_02237 = [];
const vote_gene_rejet_02237 = [];

async function chartIt02237(){
    await GraphDATA02237();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02237-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02237
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02237
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02237-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02237,vote_lepen_02237,vote_rejet_02237]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02237-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02237,vote_lepenpop_02237,vote_rejetpop_02237]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02237"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02237
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02237
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02237
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02238*/
/*------------------------------------------------------------------ */
async function GraphDATA02238() {
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
    vote_macron_02238.push(vote_macron); 
    vote_lepen_02238.push(vote_lepen);
    vote_rejet_02238.push(vote_rejet);
    vote_macronpop_02238.push(vote_macronMediane);
    vote_lepenpop_02238.push(vote_lepenMediane);
    vote_rejetpop_02238.push(vote_rejetMediane);
    name_Commune_02238.push(nameCommune);
    Pourcentage_02238.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02238.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02238.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02238.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02238.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02238 = [];
const vote_lepen_02238 = [];
const vote_rejet_02238 = [];
const vote_macronpop_02238 = [];
const vote_lepenpop_02238 = [];
const vote_rejetpop_02238 = [];
const name_Commune_02238 = [];
const Pourcentage_02238 = [];
const Pourcentage_rejet_02238 = [];
const vote_gene_macron_02238 = [];
const vote_gene_lepen_02238 = [];
const vote_gene_rejet_02238 = [];

async function chartIt02238(){
    await GraphDATA02238();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02238-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02238
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02238
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02238-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02238,vote_lepen_02238,vote_rejet_02238]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02238-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02238,vote_lepenpop_02238,vote_rejetpop_02238]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02238"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02238
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02238
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02238
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02239*/
/*------------------------------------------------------------------ */
async function GraphDATA02239() {
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
    vote_macron_02239.push(vote_macron); 
    vote_lepen_02239.push(vote_lepen);
    vote_rejet_02239.push(vote_rejet);
    vote_macronpop_02239.push(vote_macronMediane);
    vote_lepenpop_02239.push(vote_lepenMediane);
    vote_rejetpop_02239.push(vote_rejetMediane);
    name_Commune_02239.push(nameCommune);
    Pourcentage_02239.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02239.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02239.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02239.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02239.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02239 = [];
const vote_lepen_02239 = [];
const vote_rejet_02239 = [];
const vote_macronpop_02239 = [];
const vote_lepenpop_02239 = [];
const vote_rejetpop_02239 = [];
const name_Commune_02239 = [];
const Pourcentage_02239 = [];
const Pourcentage_rejet_02239 = [];
const vote_gene_macron_02239 = [];
const vote_gene_lepen_02239 = [];
const vote_gene_rejet_02239 = [];

async function chartIt02239(){
    await GraphDATA02239();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02239-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02239
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02239
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02239-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02239,vote_lepen_02239,vote_rejet_02239]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02239-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02239,vote_lepenpop_02239,vote_rejetpop_02239]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02239"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02239
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02239
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02239
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02240*/
/*------------------------------------------------------------------ */
async function GraphDATA02240() {
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
    vote_macron_02240.push(vote_macron); 
    vote_lepen_02240.push(vote_lepen);
    vote_rejet_02240.push(vote_rejet);
    vote_macronpop_02240.push(vote_macronMediane);
    vote_lepenpop_02240.push(vote_lepenMediane);
    vote_rejetpop_02240.push(vote_rejetMediane);
    name_Commune_02240.push(nameCommune);
    Pourcentage_02240.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02240.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02240.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02240.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02240.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02240 = [];
const vote_lepen_02240 = [];
const vote_rejet_02240 = [];
const vote_macronpop_02240 = [];
const vote_lepenpop_02240 = [];
const vote_rejetpop_02240 = [];
const name_Commune_02240 = [];
const Pourcentage_02240 = [];
const Pourcentage_rejet_02240 = [];
const vote_gene_macron_02240 = [];
const vote_gene_lepen_02240 = [];
const vote_gene_rejet_02240 = [];

async function chartIt02240(){
    await GraphDATA02240();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02240-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02240
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02240
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02240-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02240,vote_lepen_02240,vote_rejet_02240]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02240-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02240,vote_lepenpop_02240,vote_rejetpop_02240]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02240"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02240
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02240
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02240
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02241*/
/*------------------------------------------------------------------ */
async function GraphDATA02241() {
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
    vote_macron_02241.push(vote_macron); 
    vote_lepen_02241.push(vote_lepen);
    vote_rejet_02241.push(vote_rejet);
    vote_macronpop_02241.push(vote_macronMediane);
    vote_lepenpop_02241.push(vote_lepenMediane);
    vote_rejetpop_02241.push(vote_rejetMediane);
    name_Commune_02241.push(nameCommune);
    Pourcentage_02241.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02241.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02241.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02241.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02241.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02241 = [];
const vote_lepen_02241 = [];
const vote_rejet_02241 = [];
const vote_macronpop_02241 = [];
const vote_lepenpop_02241 = [];
const vote_rejetpop_02241 = [];
const name_Commune_02241 = [];
const Pourcentage_02241 = [];
const Pourcentage_rejet_02241 = [];
const vote_gene_macron_02241 = [];
const vote_gene_lepen_02241 = [];
const vote_gene_rejet_02241 = [];

async function chartIt02241(){
    await GraphDATA02241();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02241-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02241
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02241
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02241-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02241,vote_lepen_02241,vote_rejet_02241]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02241-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02241,vote_lepenpop_02241,vote_rejetpop_02241]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02241"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02241
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02241
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02241
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02242*/
/*------------------------------------------------------------------ */
async function GraphDATA02242() {
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
    vote_macron_02242.push(vote_macron); 
    vote_lepen_02242.push(vote_lepen);
    vote_rejet_02242.push(vote_rejet);
    vote_macronpop_02242.push(vote_macronMediane);
    vote_lepenpop_02242.push(vote_lepenMediane);
    vote_rejetpop_02242.push(vote_rejetMediane);
    name_Commune_02242.push(nameCommune);
    Pourcentage_02242.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02242.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02242.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02242.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02242.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02242 = [];
const vote_lepen_02242 = [];
const vote_rejet_02242 = [];
const vote_macronpop_02242 = [];
const vote_lepenpop_02242 = [];
const vote_rejetpop_02242 = [];
const name_Commune_02242 = [];
const Pourcentage_02242 = [];
const Pourcentage_rejet_02242 = [];
const vote_gene_macron_02242 = [];
const vote_gene_lepen_02242 = [];
const vote_gene_rejet_02242 = [];

async function chartIt02242(){
    await GraphDATA02242();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02242-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02242
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02242
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02242-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02242,vote_lepen_02242,vote_rejet_02242]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02242-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02242,vote_lepenpop_02242,vote_rejetpop_02242]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02242"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02242
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02242
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02242
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02243*/
/*------------------------------------------------------------------ */
async function GraphDATA02243() {
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
    vote_macron_02243.push(vote_macron); 
    vote_lepen_02243.push(vote_lepen);
    vote_rejet_02243.push(vote_rejet);
    vote_macronpop_02243.push(vote_macronMediane);
    vote_lepenpop_02243.push(vote_lepenMediane);
    vote_rejetpop_02243.push(vote_rejetMediane);
    name_Commune_02243.push(nameCommune);
    Pourcentage_02243.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02243.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02243.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02243.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02243.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02243 = [];
const vote_lepen_02243 = [];
const vote_rejet_02243 = [];
const vote_macronpop_02243 = [];
const vote_lepenpop_02243 = [];
const vote_rejetpop_02243 = [];
const name_Commune_02243 = [];
const Pourcentage_02243 = [];
const Pourcentage_rejet_02243 = [];
const vote_gene_macron_02243 = [];
const vote_gene_lepen_02243 = [];
const vote_gene_rejet_02243 = [];

async function chartIt02243(){
    await GraphDATA02243();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02243-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02243
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02243
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02243-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02243,vote_lepen_02243,vote_rejet_02243]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02243-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02243,vote_lepenpop_02243,vote_rejetpop_02243]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02243"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02243
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02243
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02243
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02244*/
/*------------------------------------------------------------------ */
async function GraphDATA02244() {
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
    vote_macron_02244.push(vote_macron); 
    vote_lepen_02244.push(vote_lepen);
    vote_rejet_02244.push(vote_rejet);
    vote_macronpop_02244.push(vote_macronMediane);
    vote_lepenpop_02244.push(vote_lepenMediane);
    vote_rejetpop_02244.push(vote_rejetMediane);
    name_Commune_02244.push(nameCommune);
    Pourcentage_02244.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02244.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02244.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02244.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02244.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02244 = [];
const vote_lepen_02244 = [];
const vote_rejet_02244 = [];
const vote_macronpop_02244 = [];
const vote_lepenpop_02244 = [];
const vote_rejetpop_02244 = [];
const name_Commune_02244 = [];
const Pourcentage_02244 = [];
const Pourcentage_rejet_02244 = [];
const vote_gene_macron_02244 = [];
const vote_gene_lepen_02244 = [];
const vote_gene_rejet_02244 = [];

async function chartIt02244(){
    await GraphDATA02244();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02244-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02244
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02244
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02244-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02244,vote_lepen_02244,vote_rejet_02244]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02244-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02244,vote_lepenpop_02244,vote_rejetpop_02244]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02244"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02244
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02244
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02244
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02245*/
/*------------------------------------------------------------------ */
async function GraphDATA02245() {
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
    vote_macron_02245.push(vote_macron); 
    vote_lepen_02245.push(vote_lepen);
    vote_rejet_02245.push(vote_rejet);
    vote_macronpop_02245.push(vote_macronMediane);
    vote_lepenpop_02245.push(vote_lepenMediane);
    vote_rejetpop_02245.push(vote_rejetMediane);
    name_Commune_02245.push(nameCommune);
    Pourcentage_02245.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02245.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02245.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02245.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02245.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02245 = [];
const vote_lepen_02245 = [];
const vote_rejet_02245 = [];
const vote_macronpop_02245 = [];
const vote_lepenpop_02245 = [];
const vote_rejetpop_02245 = [];
const name_Commune_02245 = [];
const Pourcentage_02245 = [];
const Pourcentage_rejet_02245 = [];
const vote_gene_macron_02245 = [];
const vote_gene_lepen_02245 = [];
const vote_gene_rejet_02245 = [];

async function chartIt02245(){
    await GraphDATA02245();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02245-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02245
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02245
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02245-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02245,vote_lepen_02245,vote_rejet_02245]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02245-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02245,vote_lepenpop_02245,vote_rejetpop_02245]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02245"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02245
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02245
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02245
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02246*/
/*------------------------------------------------------------------ */
async function GraphDATA02246() {
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
    vote_macron_02246.push(vote_macron); 
    vote_lepen_02246.push(vote_lepen);
    vote_rejet_02246.push(vote_rejet);
    vote_macronpop_02246.push(vote_macronMediane);
    vote_lepenpop_02246.push(vote_lepenMediane);
    vote_rejetpop_02246.push(vote_rejetMediane);
    name_Commune_02246.push(nameCommune);
    Pourcentage_02246.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02246.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02246.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02246.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02246.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02246 = [];
const vote_lepen_02246 = [];
const vote_rejet_02246 = [];
const vote_macronpop_02246 = [];
const vote_lepenpop_02246 = [];
const vote_rejetpop_02246 = [];
const name_Commune_02246 = [];
const Pourcentage_02246 = [];
const Pourcentage_rejet_02246 = [];
const vote_gene_macron_02246 = [];
const vote_gene_lepen_02246 = [];
const vote_gene_rejet_02246 = [];

async function chartIt02246(){
    await GraphDATA02246();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02246-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02246
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02246
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02246-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02246,vote_lepen_02246,vote_rejet_02246]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02246-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02246,vote_lepenpop_02246,vote_rejetpop_02246]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02246"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02246
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02246
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02246
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02247*/
/*------------------------------------------------------------------ */
async function GraphDATA02247() {
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
    vote_macron_02247.push(vote_macron); 
    vote_lepen_02247.push(vote_lepen);
    vote_rejet_02247.push(vote_rejet);
    vote_macronpop_02247.push(vote_macronMediane);
    vote_lepenpop_02247.push(vote_lepenMediane);
    vote_rejetpop_02247.push(vote_rejetMediane);
    name_Commune_02247.push(nameCommune);
    Pourcentage_02247.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02247.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02247.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02247.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02247.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02247 = [];
const vote_lepen_02247 = [];
const vote_rejet_02247 = [];
const vote_macronpop_02247 = [];
const vote_lepenpop_02247 = [];
const vote_rejetpop_02247 = [];
const name_Commune_02247 = [];
const Pourcentage_02247 = [];
const Pourcentage_rejet_02247 = [];
const vote_gene_macron_02247 = [];
const vote_gene_lepen_02247 = [];
const vote_gene_rejet_02247 = [];

async function chartIt02247(){
    await GraphDATA02247();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02247-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02247
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02247
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02247-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02247,vote_lepen_02247,vote_rejet_02247]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02247-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02247,vote_lepenpop_02247,vote_rejetpop_02247]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02247"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02247
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02247
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02247
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02248*/
/*------------------------------------------------------------------ */
async function GraphDATA02248() {
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
    vote_macron_02248.push(vote_macron); 
    vote_lepen_02248.push(vote_lepen);
    vote_rejet_02248.push(vote_rejet);
    vote_macronpop_02248.push(vote_macronMediane);
    vote_lepenpop_02248.push(vote_lepenMediane);
    vote_rejetpop_02248.push(vote_rejetMediane);
    name_Commune_02248.push(nameCommune);
    Pourcentage_02248.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02248.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02248.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02248.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02248.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02248 = [];
const vote_lepen_02248 = [];
const vote_rejet_02248 = [];
const vote_macronpop_02248 = [];
const vote_lepenpop_02248 = [];
const vote_rejetpop_02248 = [];
const name_Commune_02248 = [];
const Pourcentage_02248 = [];
const Pourcentage_rejet_02248 = [];
const vote_gene_macron_02248 = [];
const vote_gene_lepen_02248 = [];
const vote_gene_rejet_02248 = [];

async function chartIt02248(){
    await GraphDATA02248();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02248-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02248
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02248
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02248-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02248,vote_lepen_02248,vote_rejet_02248]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02248-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02248,vote_lepenpop_02248,vote_rejetpop_02248]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02248"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02248
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02248
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02248
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02249*/
/*------------------------------------------------------------------ */
async function GraphDATA02249() {
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
    vote_macron_02249.push(vote_macron); 
    vote_lepen_02249.push(vote_lepen);
    vote_rejet_02249.push(vote_rejet);
    vote_macronpop_02249.push(vote_macronMediane);
    vote_lepenpop_02249.push(vote_lepenMediane);
    vote_rejetpop_02249.push(vote_rejetMediane);
    name_Commune_02249.push(nameCommune);
    Pourcentage_02249.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02249.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02249.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02249.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02249.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02249 = [];
const vote_lepen_02249 = [];
const vote_rejet_02249 = [];
const vote_macronpop_02249 = [];
const vote_lepenpop_02249 = [];
const vote_rejetpop_02249 = [];
const name_Commune_02249 = [];
const Pourcentage_02249 = [];
const Pourcentage_rejet_02249 = [];
const vote_gene_macron_02249 = [];
const vote_gene_lepen_02249 = [];
const vote_gene_rejet_02249 = [];

async function chartIt02249(){
    await GraphDATA02249();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02249-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02249
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02249
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02249-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02249,vote_lepen_02249,vote_rejet_02249]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02249-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02249,vote_lepenpop_02249,vote_rejetpop_02249]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02249"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02249
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02249
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02249
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02250*/
/*------------------------------------------------------------------ */
async function GraphDATA02250() {
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
    vote_macron_02250.push(vote_macron); 
    vote_lepen_02250.push(vote_lepen);
    vote_rejet_02250.push(vote_rejet);
    vote_macronpop_02250.push(vote_macronMediane);
    vote_lepenpop_02250.push(vote_lepenMediane);
    vote_rejetpop_02250.push(vote_rejetMediane);
    name_Commune_02250.push(nameCommune);
    Pourcentage_02250.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02250.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02250.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02250.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02250.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02250 = [];
const vote_lepen_02250 = [];
const vote_rejet_02250 = [];
const vote_macronpop_02250 = [];
const vote_lepenpop_02250 = [];
const vote_rejetpop_02250 = [];
const name_Commune_02250 = [];
const Pourcentage_02250 = [];
const Pourcentage_rejet_02250 = [];
const vote_gene_macron_02250 = [];
const vote_gene_lepen_02250 = [];
const vote_gene_rejet_02250 = [];

async function chartIt02250(){
    await GraphDATA02250();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02250-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02250
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02250
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02250-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02250,vote_lepen_02250,vote_rejet_02250]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02250-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02250,vote_lepenpop_02250,vote_rejetpop_02250]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02250"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02250
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02250
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02250
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02251*/
/*------------------------------------------------------------------ */
async function GraphDATA02251() {
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
    vote_macron_02251.push(vote_macron); 
    vote_lepen_02251.push(vote_lepen);
    vote_rejet_02251.push(vote_rejet);
    vote_macronpop_02251.push(vote_macronMediane);
    vote_lepenpop_02251.push(vote_lepenMediane);
    vote_rejetpop_02251.push(vote_rejetMediane);
    name_Commune_02251.push(nameCommune);
    Pourcentage_02251.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02251.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02251.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02251.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02251.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02251 = [];
const vote_lepen_02251 = [];
const vote_rejet_02251 = [];
const vote_macronpop_02251 = [];
const vote_lepenpop_02251 = [];
const vote_rejetpop_02251 = [];
const name_Commune_02251 = [];
const Pourcentage_02251 = [];
const Pourcentage_rejet_02251 = [];
const vote_gene_macron_02251 = [];
const vote_gene_lepen_02251 = [];
const vote_gene_rejet_02251 = [];

async function chartIt02251(){
    await GraphDATA02251();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02251-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02251
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02251
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02251-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02251,vote_lepen_02251,vote_rejet_02251]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02251-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02251,vote_lepenpop_02251,vote_rejetpop_02251]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02251"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02251
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02251
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02251
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02252*/
/*------------------------------------------------------------------ */
async function GraphDATA02252() {
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
    vote_macron_02252.push(vote_macron); 
    vote_lepen_02252.push(vote_lepen);
    vote_rejet_02252.push(vote_rejet);
    vote_macronpop_02252.push(vote_macronMediane);
    vote_lepenpop_02252.push(vote_lepenMediane);
    vote_rejetpop_02252.push(vote_rejetMediane);
    name_Commune_02252.push(nameCommune);
    Pourcentage_02252.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02252.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02252.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02252.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02252.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02252 = [];
const vote_lepen_02252 = [];
const vote_rejet_02252 = [];
const vote_macronpop_02252 = [];
const vote_lepenpop_02252 = [];
const vote_rejetpop_02252 = [];
const name_Commune_02252 = [];
const Pourcentage_02252 = [];
const Pourcentage_rejet_02252 = [];
const vote_gene_macron_02252 = [];
const vote_gene_lepen_02252 = [];
const vote_gene_rejet_02252 = [];

async function chartIt02252(){
    await GraphDATA02252();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02252-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02252
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02252
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02252-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02252,vote_lepen_02252,vote_rejet_02252]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02252-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02252,vote_lepenpop_02252,vote_rejetpop_02252]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02252"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02252
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02252
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02252
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02253*/
/*------------------------------------------------------------------ */
async function GraphDATA02253() {
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
    vote_macron_02253.push(vote_macron); 
    vote_lepen_02253.push(vote_lepen);
    vote_rejet_02253.push(vote_rejet);
    vote_macronpop_02253.push(vote_macronMediane);
    vote_lepenpop_02253.push(vote_lepenMediane);
    vote_rejetpop_02253.push(vote_rejetMediane);
    name_Commune_02253.push(nameCommune);
    Pourcentage_02253.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02253.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02253.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02253.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02253.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02253 = [];
const vote_lepen_02253 = [];
const vote_rejet_02253 = [];
const vote_macronpop_02253 = [];
const vote_lepenpop_02253 = [];
const vote_rejetpop_02253 = [];
const name_Commune_02253 = [];
const Pourcentage_02253 = [];
const Pourcentage_rejet_02253 = [];
const vote_gene_macron_02253 = [];
const vote_gene_lepen_02253 = [];
const vote_gene_rejet_02253 = [];

async function chartIt02253(){
    await GraphDATA02253();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02253-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02253
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02253
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02253-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02253,vote_lepen_02253,vote_rejet_02253]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02253-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02253,vote_lepenpop_02253,vote_rejetpop_02253]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02253"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02253
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02253
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02253
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02254*/
/*------------------------------------------------------------------ */
async function GraphDATA02254() {
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
    vote_macron_02254.push(vote_macron); 
    vote_lepen_02254.push(vote_lepen);
    vote_rejet_02254.push(vote_rejet);
    vote_macronpop_02254.push(vote_macronMediane);
    vote_lepenpop_02254.push(vote_lepenMediane);
    vote_rejetpop_02254.push(vote_rejetMediane);
    name_Commune_02254.push(nameCommune);
    Pourcentage_02254.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02254.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02254.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02254.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02254.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02254 = [];
const vote_lepen_02254 = [];
const vote_rejet_02254 = [];
const vote_macronpop_02254 = [];
const vote_lepenpop_02254 = [];
const vote_rejetpop_02254 = [];
const name_Commune_02254 = [];
const Pourcentage_02254 = [];
const Pourcentage_rejet_02254 = [];
const vote_gene_macron_02254 = [];
const vote_gene_lepen_02254 = [];
const vote_gene_rejet_02254 = [];

async function chartIt02254(){
    await GraphDATA02254();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02254-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02254
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02254
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02254-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02254,vote_lepen_02254,vote_rejet_02254]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02254-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02254,vote_lepenpop_02254,vote_rejetpop_02254]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02254"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02254
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02254
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02254
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02255*/
/*------------------------------------------------------------------ */
async function GraphDATA02255() {
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
    vote_macron_02255.push(vote_macron); 
    vote_lepen_02255.push(vote_lepen);
    vote_rejet_02255.push(vote_rejet);
    vote_macronpop_02255.push(vote_macronMediane);
    vote_lepenpop_02255.push(vote_lepenMediane);
    vote_rejetpop_02255.push(vote_rejetMediane);
    name_Commune_02255.push(nameCommune);
    Pourcentage_02255.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02255.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02255.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02255.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02255.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02255 = [];
const vote_lepen_02255 = [];
const vote_rejet_02255 = [];
const vote_macronpop_02255 = [];
const vote_lepenpop_02255 = [];
const vote_rejetpop_02255 = [];
const name_Commune_02255 = [];
const Pourcentage_02255 = [];
const Pourcentage_rejet_02255 = [];
const vote_gene_macron_02255 = [];
const vote_gene_lepen_02255 = [];
const vote_gene_rejet_02255 = [];

async function chartIt02255(){
    await GraphDATA02255();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02255-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02255
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02255
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02255-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02255,vote_lepen_02255,vote_rejet_02255]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02255-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02255,vote_lepenpop_02255,vote_rejetpop_02255]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02255"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02255
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02255
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02255
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02256*/
/*------------------------------------------------------------------ */
async function GraphDATA02256() {
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
    vote_macron_02256.push(vote_macron); 
    vote_lepen_02256.push(vote_lepen);
    vote_rejet_02256.push(vote_rejet);
    vote_macronpop_02256.push(vote_macronMediane);
    vote_lepenpop_02256.push(vote_lepenMediane);
    vote_rejetpop_02256.push(vote_rejetMediane);
    name_Commune_02256.push(nameCommune);
    Pourcentage_02256.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02256.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02256.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02256.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02256.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02256 = [];
const vote_lepen_02256 = [];
const vote_rejet_02256 = [];
const vote_macronpop_02256 = [];
const vote_lepenpop_02256 = [];
const vote_rejetpop_02256 = [];
const name_Commune_02256 = [];
const Pourcentage_02256 = [];
const Pourcentage_rejet_02256 = [];
const vote_gene_macron_02256 = [];
const vote_gene_lepen_02256 = [];
const vote_gene_rejet_02256 = [];

async function chartIt02256(){
    await GraphDATA02256();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02256-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02256
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02256
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02256-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02256,vote_lepen_02256,vote_rejet_02256]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02256-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02256,vote_lepenpop_02256,vote_rejetpop_02256]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02256"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02256
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02256
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02256
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02257*/
/*------------------------------------------------------------------ */
async function GraphDATA02257() {
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
    vote_macron_02257.push(vote_macron); 
    vote_lepen_02257.push(vote_lepen);
    vote_rejet_02257.push(vote_rejet);
    vote_macronpop_02257.push(vote_macronMediane);
    vote_lepenpop_02257.push(vote_lepenMediane);
    vote_rejetpop_02257.push(vote_rejetMediane);
    name_Commune_02257.push(nameCommune);
    Pourcentage_02257.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02257.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02257.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02257.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02257.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02257 = [];
const vote_lepen_02257 = [];
const vote_rejet_02257 = [];
const vote_macronpop_02257 = [];
const vote_lepenpop_02257 = [];
const vote_rejetpop_02257 = [];
const name_Commune_02257 = [];
const Pourcentage_02257 = [];
const Pourcentage_rejet_02257 = [];
const vote_gene_macron_02257 = [];
const vote_gene_lepen_02257 = [];
const vote_gene_rejet_02257 = [];

async function chartIt02257(){
    await GraphDATA02257();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02257-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02257
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02257
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02257-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02257,vote_lepen_02257,vote_rejet_02257]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02257-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02257,vote_lepenpop_02257,vote_rejetpop_02257]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02257"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02257
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02257
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02257
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02258*/
/*------------------------------------------------------------------ */
async function GraphDATA02258() {
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
    vote_macron_02258.push(vote_macron); 
    vote_lepen_02258.push(vote_lepen);
    vote_rejet_02258.push(vote_rejet);
    vote_macronpop_02258.push(vote_macronMediane);
    vote_lepenpop_02258.push(vote_lepenMediane);
    vote_rejetpop_02258.push(vote_rejetMediane);
    name_Commune_02258.push(nameCommune);
    Pourcentage_02258.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02258.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02258.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02258.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02258.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02258 = [];
const vote_lepen_02258 = [];
const vote_rejet_02258 = [];
const vote_macronpop_02258 = [];
const vote_lepenpop_02258 = [];
const vote_rejetpop_02258 = [];
const name_Commune_02258 = [];
const Pourcentage_02258 = [];
const Pourcentage_rejet_02258 = [];
const vote_gene_macron_02258 = [];
const vote_gene_lepen_02258 = [];
const vote_gene_rejet_02258 = [];

async function chartIt02258(){
    await GraphDATA02258();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02258-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02258
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02258
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02258-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02258,vote_lepen_02258,vote_rejet_02258]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02258-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02258,vote_lepenpop_02258,vote_rejetpop_02258]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02258"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02258
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02258
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02258
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02259*/
/*------------------------------------------------------------------ */
async function GraphDATA02259() {
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
    vote_macron_02259.push(vote_macron); 
    vote_lepen_02259.push(vote_lepen);
    vote_rejet_02259.push(vote_rejet);
    vote_macronpop_02259.push(vote_macronMediane);
    vote_lepenpop_02259.push(vote_lepenMediane);
    vote_rejetpop_02259.push(vote_rejetMediane);
    name_Commune_02259.push(nameCommune);
    Pourcentage_02259.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02259.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02259.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02259.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02259.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02259 = [];
const vote_lepen_02259 = [];
const vote_rejet_02259 = [];
const vote_macronpop_02259 = [];
const vote_lepenpop_02259 = [];
const vote_rejetpop_02259 = [];
const name_Commune_02259 = [];
const Pourcentage_02259 = [];
const Pourcentage_rejet_02259 = [];
const vote_gene_macron_02259 = [];
const vote_gene_lepen_02259 = [];
const vote_gene_rejet_02259 = [];

async function chartIt02259(){
    await GraphDATA02259();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02259-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02259
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02259
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02259-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02259,vote_lepen_02259,vote_rejet_02259]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02259-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02259,vote_lepenpop_02259,vote_rejetpop_02259]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02259"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02259
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02259
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02259
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02260*/
/*------------------------------------------------------------------ */
async function GraphDATA02260() {
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
    vote_macron_02260.push(vote_macron); 
    vote_lepen_02260.push(vote_lepen);
    vote_rejet_02260.push(vote_rejet);
    vote_macronpop_02260.push(vote_macronMediane);
    vote_lepenpop_02260.push(vote_lepenMediane);
    vote_rejetpop_02260.push(vote_rejetMediane);
    name_Commune_02260.push(nameCommune);
    Pourcentage_02260.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02260.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02260.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02260.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02260.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02260 = [];
const vote_lepen_02260 = [];
const vote_rejet_02260 = [];
const vote_macronpop_02260 = [];
const vote_lepenpop_02260 = [];
const vote_rejetpop_02260 = [];
const name_Commune_02260 = [];
const Pourcentage_02260 = [];
const Pourcentage_rejet_02260 = [];
const vote_gene_macron_02260 = [];
const vote_gene_lepen_02260 = [];
const vote_gene_rejet_02260 = [];

async function chartIt02260(){
    await GraphDATA02260();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02260-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02260
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02260
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02260-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02260,vote_lepen_02260,vote_rejet_02260]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02260-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02260,vote_lepenpop_02260,vote_rejetpop_02260]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02260"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02260
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02260
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02260
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02261*/
/*------------------------------------------------------------------ */
async function GraphDATA02261() {
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
    vote_macron_02261.push(vote_macron); 
    vote_lepen_02261.push(vote_lepen);
    vote_rejet_02261.push(vote_rejet);
    vote_macronpop_02261.push(vote_macronMediane);
    vote_lepenpop_02261.push(vote_lepenMediane);
    vote_rejetpop_02261.push(vote_rejetMediane);
    name_Commune_02261.push(nameCommune);
    Pourcentage_02261.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02261.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02261.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02261.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02261.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02261 = [];
const vote_lepen_02261 = [];
const vote_rejet_02261 = [];
const vote_macronpop_02261 = [];
const vote_lepenpop_02261 = [];
const vote_rejetpop_02261 = [];
const name_Commune_02261 = [];
const Pourcentage_02261 = [];
const Pourcentage_rejet_02261 = [];
const vote_gene_macron_02261 = [];
const vote_gene_lepen_02261 = [];
const vote_gene_rejet_02261 = [];

async function chartIt02261(){
    await GraphDATA02261();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02261-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02261
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02261
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02261-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02261,vote_lepen_02261,vote_rejet_02261]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02261-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02261,vote_lepenpop_02261,vote_rejetpop_02261]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02261"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02261
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02261
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02261
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02262*/
/*------------------------------------------------------------------ */
async function GraphDATA02262() {
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
    vote_macron_02262.push(vote_macron); 
    vote_lepen_02262.push(vote_lepen);
    vote_rejet_02262.push(vote_rejet);
    vote_macronpop_02262.push(vote_macronMediane);
    vote_lepenpop_02262.push(vote_lepenMediane);
    vote_rejetpop_02262.push(vote_rejetMediane);
    name_Commune_02262.push(nameCommune);
    Pourcentage_02262.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02262.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02262.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02262.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02262.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02262 = [];
const vote_lepen_02262 = [];
const vote_rejet_02262 = [];
const vote_macronpop_02262 = [];
const vote_lepenpop_02262 = [];
const vote_rejetpop_02262 = [];
const name_Commune_02262 = [];
const Pourcentage_02262 = [];
const Pourcentage_rejet_02262 = [];
const vote_gene_macron_02262 = [];
const vote_gene_lepen_02262 = [];
const vote_gene_rejet_02262 = [];

async function chartIt02262(){
    await GraphDATA02262();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02262-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02262
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02262
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02262-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02262,vote_lepen_02262,vote_rejet_02262]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02262-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02262,vote_lepenpop_02262,vote_rejetpop_02262]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02262"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02262
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02262
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02262
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02263*/
/*------------------------------------------------------------------ */
async function GraphDATA02263() {
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
    vote_macron_02263.push(vote_macron); 
    vote_lepen_02263.push(vote_lepen);
    vote_rejet_02263.push(vote_rejet);
    vote_macronpop_02263.push(vote_macronMediane);
    vote_lepenpop_02263.push(vote_lepenMediane);
    vote_rejetpop_02263.push(vote_rejetMediane);
    name_Commune_02263.push(nameCommune);
    Pourcentage_02263.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02263.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02263.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02263.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02263.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02263 = [];
const vote_lepen_02263 = [];
const vote_rejet_02263 = [];
const vote_macronpop_02263 = [];
const vote_lepenpop_02263 = [];
const vote_rejetpop_02263 = [];
const name_Commune_02263 = [];
const Pourcentage_02263 = [];
const Pourcentage_rejet_02263 = [];
const vote_gene_macron_02263 = [];
const vote_gene_lepen_02263 = [];
const vote_gene_rejet_02263 = [];

async function chartIt02263(){
    await GraphDATA02263();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02263-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02263
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02263
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02263-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02263,vote_lepen_02263,vote_rejet_02263]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02263-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02263,vote_lepenpop_02263,vote_rejetpop_02263]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02263"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02263
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02263
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02263
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02264*/
/*------------------------------------------------------------------ */
async function GraphDATA02264() {
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
    vote_macron_02264.push(vote_macron); 
    vote_lepen_02264.push(vote_lepen);
    vote_rejet_02264.push(vote_rejet);
    vote_macronpop_02264.push(vote_macronMediane);
    vote_lepenpop_02264.push(vote_lepenMediane);
    vote_rejetpop_02264.push(vote_rejetMediane);
    name_Commune_02264.push(nameCommune);
    Pourcentage_02264.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02264.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02264.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02264.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02264.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02264 = [];
const vote_lepen_02264 = [];
const vote_rejet_02264 = [];
const vote_macronpop_02264 = [];
const vote_lepenpop_02264 = [];
const vote_rejetpop_02264 = [];
const name_Commune_02264 = [];
const Pourcentage_02264 = [];
const Pourcentage_rejet_02264 = [];
const vote_gene_macron_02264 = [];
const vote_gene_lepen_02264 = [];
const vote_gene_rejet_02264 = [];

async function chartIt02264(){
    await GraphDATA02264();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02264-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02264
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02264
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02264-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02264,vote_lepen_02264,vote_rejet_02264]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02264-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02264,vote_lepenpop_02264,vote_rejetpop_02264]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02264"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02264
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02264
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02264
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02265*/
/*------------------------------------------------------------------ */
async function GraphDATA02265() {
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
    vote_macron_02265.push(vote_macron); 
    vote_lepen_02265.push(vote_lepen);
    vote_rejet_02265.push(vote_rejet);
    vote_macronpop_02265.push(vote_macronMediane);
    vote_lepenpop_02265.push(vote_lepenMediane);
    vote_rejetpop_02265.push(vote_rejetMediane);
    name_Commune_02265.push(nameCommune);
    Pourcentage_02265.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02265.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02265.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02265.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02265.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02265 = [];
const vote_lepen_02265 = [];
const vote_rejet_02265 = [];
const vote_macronpop_02265 = [];
const vote_lepenpop_02265 = [];
const vote_rejetpop_02265 = [];
const name_Commune_02265 = [];
const Pourcentage_02265 = [];
const Pourcentage_rejet_02265 = [];
const vote_gene_macron_02265 = [];
const vote_gene_lepen_02265 = [];
const vote_gene_rejet_02265 = [];

async function chartIt02265(){
    await GraphDATA02265();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02265-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02265
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02265
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02265-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02265,vote_lepen_02265,vote_rejet_02265]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02265-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02265,vote_lepenpop_02265,vote_rejetpop_02265]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02265"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02265
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02265
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02265
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02266*/
/*------------------------------------------------------------------ */
async function GraphDATA02266() {
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
    vote_macron_02266.push(vote_macron); 
    vote_lepen_02266.push(vote_lepen);
    vote_rejet_02266.push(vote_rejet);
    vote_macronpop_02266.push(vote_macronMediane);
    vote_lepenpop_02266.push(vote_lepenMediane);
    vote_rejetpop_02266.push(vote_rejetMediane);
    name_Commune_02266.push(nameCommune);
    Pourcentage_02266.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02266.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02266.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02266.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02266.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02266 = [];
const vote_lepen_02266 = [];
const vote_rejet_02266 = [];
const vote_macronpop_02266 = [];
const vote_lepenpop_02266 = [];
const vote_rejetpop_02266 = [];
const name_Commune_02266 = [];
const Pourcentage_02266 = [];
const Pourcentage_rejet_02266 = [];
const vote_gene_macron_02266 = [];
const vote_gene_lepen_02266 = [];
const vote_gene_rejet_02266 = [];

async function chartIt02266(){
    await GraphDATA02266();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02266-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02266
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02266
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02266-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02266,vote_lepen_02266,vote_rejet_02266]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02266-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02266,vote_lepenpop_02266,vote_rejetpop_02266]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02266"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02266
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02266
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02266
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02267*/
/*------------------------------------------------------------------ */
async function GraphDATA02267() {
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
    vote_macron_02267.push(vote_macron); 
    vote_lepen_02267.push(vote_lepen);
    vote_rejet_02267.push(vote_rejet);
    vote_macronpop_02267.push(vote_macronMediane);
    vote_lepenpop_02267.push(vote_lepenMediane);
    vote_rejetpop_02267.push(vote_rejetMediane);
    name_Commune_02267.push(nameCommune);
    Pourcentage_02267.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02267.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02267.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02267.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02267.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02267 = [];
const vote_lepen_02267 = [];
const vote_rejet_02267 = [];
const vote_macronpop_02267 = [];
const vote_lepenpop_02267 = [];
const vote_rejetpop_02267 = [];
const name_Commune_02267 = [];
const Pourcentage_02267 = [];
const Pourcentage_rejet_02267 = [];
const vote_gene_macron_02267 = [];
const vote_gene_lepen_02267 = [];
const vote_gene_rejet_02267 = [];

async function chartIt02267(){
    await GraphDATA02267();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02267-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02267
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02267
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02267-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02267,vote_lepen_02267,vote_rejet_02267]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02267-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02267,vote_lepenpop_02267,vote_rejetpop_02267]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02267"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02267
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02267
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02267
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02268*/
/*------------------------------------------------------------------ */
async function GraphDATA02268() {
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
    vote_macron_02268.push(vote_macron); 
    vote_lepen_02268.push(vote_lepen);
    vote_rejet_02268.push(vote_rejet);
    vote_macronpop_02268.push(vote_macronMediane);
    vote_lepenpop_02268.push(vote_lepenMediane);
    vote_rejetpop_02268.push(vote_rejetMediane);
    name_Commune_02268.push(nameCommune);
    Pourcentage_02268.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02268.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02268.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02268.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02268.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02268 = [];
const vote_lepen_02268 = [];
const vote_rejet_02268 = [];
const vote_macronpop_02268 = [];
const vote_lepenpop_02268 = [];
const vote_rejetpop_02268 = [];
const name_Commune_02268 = [];
const Pourcentage_02268 = [];
const Pourcentage_rejet_02268 = [];
const vote_gene_macron_02268 = [];
const vote_gene_lepen_02268 = [];
const vote_gene_rejet_02268 = [];

async function chartIt02268(){
    await GraphDATA02268();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02268-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02268
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02268
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02268-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02268,vote_lepen_02268,vote_rejet_02268]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02268-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02268,vote_lepenpop_02268,vote_rejetpop_02268]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02268"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02268
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02268
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02268
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02269*/
/*------------------------------------------------------------------ */
async function GraphDATA02269() {
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
    vote_macron_02269.push(vote_macron); 
    vote_lepen_02269.push(vote_lepen);
    vote_rejet_02269.push(vote_rejet);
    vote_macronpop_02269.push(vote_macronMediane);
    vote_lepenpop_02269.push(vote_lepenMediane);
    vote_rejetpop_02269.push(vote_rejetMediane);
    name_Commune_02269.push(nameCommune);
    Pourcentage_02269.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02269.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02269.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02269.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02269.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02269 = [];
const vote_lepen_02269 = [];
const vote_rejet_02269 = [];
const vote_macronpop_02269 = [];
const vote_lepenpop_02269 = [];
const vote_rejetpop_02269 = [];
const name_Commune_02269 = [];
const Pourcentage_02269 = [];
const Pourcentage_rejet_02269 = [];
const vote_gene_macron_02269 = [];
const vote_gene_lepen_02269 = [];
const vote_gene_rejet_02269 = [];

async function chartIt02269(){
    await GraphDATA02269();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02269-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02269
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02269
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02269-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02269,vote_lepen_02269,vote_rejet_02269]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02269-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02269,vote_lepenpop_02269,vote_rejetpop_02269]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02269"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02269
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02269
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02269
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02270*/
/*------------------------------------------------------------------ */
async function GraphDATA02270() {
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
    vote_macron_02270.push(vote_macron); 
    vote_lepen_02270.push(vote_lepen);
    vote_rejet_02270.push(vote_rejet);
    vote_macronpop_02270.push(vote_macronMediane);
    vote_lepenpop_02270.push(vote_lepenMediane);
    vote_rejetpop_02270.push(vote_rejetMediane);
    name_Commune_02270.push(nameCommune);
    Pourcentage_02270.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02270.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02270.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02270.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02270.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02270 = [];
const vote_lepen_02270 = [];
const vote_rejet_02270 = [];
const vote_macronpop_02270 = [];
const vote_lepenpop_02270 = [];
const vote_rejetpop_02270 = [];
const name_Commune_02270 = [];
const Pourcentage_02270 = [];
const Pourcentage_rejet_02270 = [];
const vote_gene_macron_02270 = [];
const vote_gene_lepen_02270 = [];
const vote_gene_rejet_02270 = [];

async function chartIt02270(){
    await GraphDATA02270();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02270-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02270
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02270
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02270-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02270,vote_lepen_02270,vote_rejet_02270]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02270-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02270,vote_lepenpop_02270,vote_rejetpop_02270]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02270"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02270
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02270
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02270
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02271*/
/*------------------------------------------------------------------ */
async function GraphDATA02271() {
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
    vote_macron_02271.push(vote_macron); 
    vote_lepen_02271.push(vote_lepen);
    vote_rejet_02271.push(vote_rejet);
    vote_macronpop_02271.push(vote_macronMediane);
    vote_lepenpop_02271.push(vote_lepenMediane);
    vote_rejetpop_02271.push(vote_rejetMediane);
    name_Commune_02271.push(nameCommune);
    Pourcentage_02271.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02271.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02271.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02271.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02271.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02271 = [];
const vote_lepen_02271 = [];
const vote_rejet_02271 = [];
const vote_macronpop_02271 = [];
const vote_lepenpop_02271 = [];
const vote_rejetpop_02271 = [];
const name_Commune_02271 = [];
const Pourcentage_02271 = [];
const Pourcentage_rejet_02271 = [];
const vote_gene_macron_02271 = [];
const vote_gene_lepen_02271 = [];
const vote_gene_rejet_02271 = [];

async function chartIt02271(){
    await GraphDATA02271();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02271-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02271
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02271
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02271-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02271,vote_lepen_02271,vote_rejet_02271]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02271-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02271,vote_lepenpop_02271,vote_rejetpop_02271]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02271"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02271
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02271
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02271
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02272*/
/*------------------------------------------------------------------ */
async function GraphDATA02272() {
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
    vote_macron_02272.push(vote_macron); 
    vote_lepen_02272.push(vote_lepen);
    vote_rejet_02272.push(vote_rejet);
    vote_macronpop_02272.push(vote_macronMediane);
    vote_lepenpop_02272.push(vote_lepenMediane);
    vote_rejetpop_02272.push(vote_rejetMediane);
    name_Commune_02272.push(nameCommune);
    Pourcentage_02272.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02272.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02272.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02272.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02272.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02272 = [];
const vote_lepen_02272 = [];
const vote_rejet_02272 = [];
const vote_macronpop_02272 = [];
const vote_lepenpop_02272 = [];
const vote_rejetpop_02272 = [];
const name_Commune_02272 = [];
const Pourcentage_02272 = [];
const Pourcentage_rejet_02272 = [];
const vote_gene_macron_02272 = [];
const vote_gene_lepen_02272 = [];
const vote_gene_rejet_02272 = [];

async function chartIt02272(){
    await GraphDATA02272();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02272-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02272
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02272
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02272-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02272,vote_lepen_02272,vote_rejet_02272]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02272-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02272,vote_lepenpop_02272,vote_rejetpop_02272]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02272"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02272
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02272
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02272
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02273*/
/*------------------------------------------------------------------ */
async function GraphDATA02273() {
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
    vote_macron_02273.push(vote_macron); 
    vote_lepen_02273.push(vote_lepen);
    vote_rejet_02273.push(vote_rejet);
    vote_macronpop_02273.push(vote_macronMediane);
    vote_lepenpop_02273.push(vote_lepenMediane);
    vote_rejetpop_02273.push(vote_rejetMediane);
    name_Commune_02273.push(nameCommune);
    Pourcentage_02273.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02273.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02273.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02273.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02273.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02273 = [];
const vote_lepen_02273 = [];
const vote_rejet_02273 = [];
const vote_macronpop_02273 = [];
const vote_lepenpop_02273 = [];
const vote_rejetpop_02273 = [];
const name_Commune_02273 = [];
const Pourcentage_02273 = [];
const Pourcentage_rejet_02273 = [];
const vote_gene_macron_02273 = [];
const vote_gene_lepen_02273 = [];
const vote_gene_rejet_02273 = [];

async function chartIt02273(){
    await GraphDATA02273();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02273-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02273
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02273
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02273-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02273,vote_lepen_02273,vote_rejet_02273]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02273-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02273,vote_lepenpop_02273,vote_rejetpop_02273]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02273"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02273
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02273
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02273
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02274*/
/*------------------------------------------------------------------ */
async function GraphDATA02274() {
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
    vote_macron_02274.push(vote_macron); 
    vote_lepen_02274.push(vote_lepen);
    vote_rejet_02274.push(vote_rejet);
    vote_macronpop_02274.push(vote_macronMediane);
    vote_lepenpop_02274.push(vote_lepenMediane);
    vote_rejetpop_02274.push(vote_rejetMediane);
    name_Commune_02274.push(nameCommune);
    Pourcentage_02274.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02274.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02274.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02274.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02274.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02274 = [];
const vote_lepen_02274 = [];
const vote_rejet_02274 = [];
const vote_macronpop_02274 = [];
const vote_lepenpop_02274 = [];
const vote_rejetpop_02274 = [];
const name_Commune_02274 = [];
const Pourcentage_02274 = [];
const Pourcentage_rejet_02274 = [];
const vote_gene_macron_02274 = [];
const vote_gene_lepen_02274 = [];
const vote_gene_rejet_02274 = [];

async function chartIt02274(){
    await GraphDATA02274();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02274-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02274
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02274
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02274-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02274,vote_lepen_02274,vote_rejet_02274]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02274-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02274,vote_lepenpop_02274,vote_rejetpop_02274]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02274"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02274
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02274
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02274
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02275*/
/*------------------------------------------------------------------ */
async function GraphDATA02275() {
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
    vote_macron_02275.push(vote_macron); 
    vote_lepen_02275.push(vote_lepen);
    vote_rejet_02275.push(vote_rejet);
    vote_macronpop_02275.push(vote_macronMediane);
    vote_lepenpop_02275.push(vote_lepenMediane);
    vote_rejetpop_02275.push(vote_rejetMediane);
    name_Commune_02275.push(nameCommune);
    Pourcentage_02275.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02275.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02275.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02275.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02275.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02275 = [];
const vote_lepen_02275 = [];
const vote_rejet_02275 = [];
const vote_macronpop_02275 = [];
const vote_lepenpop_02275 = [];
const vote_rejetpop_02275 = [];
const name_Commune_02275 = [];
const Pourcentage_02275 = [];
const Pourcentage_rejet_02275 = [];
const vote_gene_macron_02275 = [];
const vote_gene_lepen_02275 = [];
const vote_gene_rejet_02275 = [];

async function chartIt02275(){
    await GraphDATA02275();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02275-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02275
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02275
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02275-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02275,vote_lepen_02275,vote_rejet_02275]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02275-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02275,vote_lepenpop_02275,vote_rejetpop_02275]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02275"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02275
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02275
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02275
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02276*/
/*------------------------------------------------------------------ */
async function GraphDATA02276() {
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
    vote_macron_02276.push(vote_macron); 
    vote_lepen_02276.push(vote_lepen);
    vote_rejet_02276.push(vote_rejet);
    vote_macronpop_02276.push(vote_macronMediane);
    vote_lepenpop_02276.push(vote_lepenMediane);
    vote_rejetpop_02276.push(vote_rejetMediane);
    name_Commune_02276.push(nameCommune);
    Pourcentage_02276.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02276.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02276.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02276.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02276.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02276 = [];
const vote_lepen_02276 = [];
const vote_rejet_02276 = [];
const vote_macronpop_02276 = [];
const vote_lepenpop_02276 = [];
const vote_rejetpop_02276 = [];
const name_Commune_02276 = [];
const Pourcentage_02276 = [];
const Pourcentage_rejet_02276 = [];
const vote_gene_macron_02276 = [];
const vote_gene_lepen_02276 = [];
const vote_gene_rejet_02276 = [];

async function chartIt02276(){
    await GraphDATA02276();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02276-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02276
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02276
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02276-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02276,vote_lepen_02276,vote_rejet_02276]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02276-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02276,vote_lepenpop_02276,vote_rejetpop_02276]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02276"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02276
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02276
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02276
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02277*/
/*------------------------------------------------------------------ */
async function GraphDATA02277() {
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
    vote_macron_02277.push(vote_macron); 
    vote_lepen_02277.push(vote_lepen);
    vote_rejet_02277.push(vote_rejet);
    vote_macronpop_02277.push(vote_macronMediane);
    vote_lepenpop_02277.push(vote_lepenMediane);
    vote_rejetpop_02277.push(vote_rejetMediane);
    name_Commune_02277.push(nameCommune);
    Pourcentage_02277.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02277.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02277.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02277.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02277.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02277 = [];
const vote_lepen_02277 = [];
const vote_rejet_02277 = [];
const vote_macronpop_02277 = [];
const vote_lepenpop_02277 = [];
const vote_rejetpop_02277 = [];
const name_Commune_02277 = [];
const Pourcentage_02277 = [];
const Pourcentage_rejet_02277 = [];
const vote_gene_macron_02277 = [];
const vote_gene_lepen_02277 = [];
const vote_gene_rejet_02277 = [];

async function chartIt02277(){
    await GraphDATA02277();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02277-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02277
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02277
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02277-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02277,vote_lepen_02277,vote_rejet_02277]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02277-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02277,vote_lepenpop_02277,vote_rejetpop_02277]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02277"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02277
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02277
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02277
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02278*/
/*------------------------------------------------------------------ */
async function GraphDATA02278() {
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
    vote_macron_02278.push(vote_macron); 
    vote_lepen_02278.push(vote_lepen);
    vote_rejet_02278.push(vote_rejet);
    vote_macronpop_02278.push(vote_macronMediane);
    vote_lepenpop_02278.push(vote_lepenMediane);
    vote_rejetpop_02278.push(vote_rejetMediane);
    name_Commune_02278.push(nameCommune);
    Pourcentage_02278.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02278.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02278.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02278.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02278.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02278 = [];
const vote_lepen_02278 = [];
const vote_rejet_02278 = [];
const vote_macronpop_02278 = [];
const vote_lepenpop_02278 = [];
const vote_rejetpop_02278 = [];
const name_Commune_02278 = [];
const Pourcentage_02278 = [];
const Pourcentage_rejet_02278 = [];
const vote_gene_macron_02278 = [];
const vote_gene_lepen_02278 = [];
const vote_gene_rejet_02278 = [];

async function chartIt02278(){
    await GraphDATA02278();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02278-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02278
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02278
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02278-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02278,vote_lepen_02278,vote_rejet_02278]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02278-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02278,vote_lepenpop_02278,vote_rejetpop_02278]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02278"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02278
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02278
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02278
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02279*/
/*------------------------------------------------------------------ */
async function GraphDATA02279() {
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
    vote_macron_02279.push(vote_macron); 
    vote_lepen_02279.push(vote_lepen);
    vote_rejet_02279.push(vote_rejet);
    vote_macronpop_02279.push(vote_macronMediane);
    vote_lepenpop_02279.push(vote_lepenMediane);
    vote_rejetpop_02279.push(vote_rejetMediane);
    name_Commune_02279.push(nameCommune);
    Pourcentage_02279.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02279.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02279.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02279.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02279.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02279 = [];
const vote_lepen_02279 = [];
const vote_rejet_02279 = [];
const vote_macronpop_02279 = [];
const vote_lepenpop_02279 = [];
const vote_rejetpop_02279 = [];
const name_Commune_02279 = [];
const Pourcentage_02279 = [];
const Pourcentage_rejet_02279 = [];
const vote_gene_macron_02279 = [];
const vote_gene_lepen_02279 = [];
const vote_gene_rejet_02279 = [];

async function chartIt02279(){
    await GraphDATA02279();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02279-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02279
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02279
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02279-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02279,vote_lepen_02279,vote_rejet_02279]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02279-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02279,vote_lepenpop_02279,vote_rejetpop_02279]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02279"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02279
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02279
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02279
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02280*/
/*------------------------------------------------------------------ */
async function GraphDATA02280() {
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
    vote_macron_02280.push(vote_macron); 
    vote_lepen_02280.push(vote_lepen);
    vote_rejet_02280.push(vote_rejet);
    vote_macronpop_02280.push(vote_macronMediane);
    vote_lepenpop_02280.push(vote_lepenMediane);
    vote_rejetpop_02280.push(vote_rejetMediane);
    name_Commune_02280.push(nameCommune);
    Pourcentage_02280.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02280.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02280.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02280.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02280.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02280 = [];
const vote_lepen_02280 = [];
const vote_rejet_02280 = [];
const vote_macronpop_02280 = [];
const vote_lepenpop_02280 = [];
const vote_rejetpop_02280 = [];
const name_Commune_02280 = [];
const Pourcentage_02280 = [];
const Pourcentage_rejet_02280 = [];
const vote_gene_macron_02280 = [];
const vote_gene_lepen_02280 = [];
const vote_gene_rejet_02280 = [];

async function chartIt02280(){
    await GraphDATA02280();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02280-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02280
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02280
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02280-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02280,vote_lepen_02280,vote_rejet_02280]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02280-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02280,vote_lepenpop_02280,vote_rejetpop_02280]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02280"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02280
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02280
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02280
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02281*/
/*------------------------------------------------------------------ */
async function GraphDATA02281() {
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
    vote_macron_02281.push(vote_macron); 
    vote_lepen_02281.push(vote_lepen);
    vote_rejet_02281.push(vote_rejet);
    vote_macronpop_02281.push(vote_macronMediane);
    vote_lepenpop_02281.push(vote_lepenMediane);
    vote_rejetpop_02281.push(vote_rejetMediane);
    name_Commune_02281.push(nameCommune);
    Pourcentage_02281.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02281.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02281.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02281.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02281.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02281 = [];
const vote_lepen_02281 = [];
const vote_rejet_02281 = [];
const vote_macronpop_02281 = [];
const vote_lepenpop_02281 = [];
const vote_rejetpop_02281 = [];
const name_Commune_02281 = [];
const Pourcentage_02281 = [];
const Pourcentage_rejet_02281 = [];
const vote_gene_macron_02281 = [];
const vote_gene_lepen_02281 = [];
const vote_gene_rejet_02281 = [];

async function chartIt02281(){
    await GraphDATA02281();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02281-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02281
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02281
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02281-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02281,vote_lepen_02281,vote_rejet_02281]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02281-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02281,vote_lepenpop_02281,vote_rejetpop_02281]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02281"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02281
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02281
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02281
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02282*/
/*------------------------------------------------------------------ */
async function GraphDATA02282() {
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
    vote_macron_02282.push(vote_macron); 
    vote_lepen_02282.push(vote_lepen);
    vote_rejet_02282.push(vote_rejet);
    vote_macronpop_02282.push(vote_macronMediane);
    vote_lepenpop_02282.push(vote_lepenMediane);
    vote_rejetpop_02282.push(vote_rejetMediane);
    name_Commune_02282.push(nameCommune);
    Pourcentage_02282.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02282.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02282.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02282.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02282.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02282 = [];
const vote_lepen_02282 = [];
const vote_rejet_02282 = [];
const vote_macronpop_02282 = [];
const vote_lepenpop_02282 = [];
const vote_rejetpop_02282 = [];
const name_Commune_02282 = [];
const Pourcentage_02282 = [];
const Pourcentage_rejet_02282 = [];
const vote_gene_macron_02282 = [];
const vote_gene_lepen_02282 = [];
const vote_gene_rejet_02282 = [];

async function chartIt02282(){
    await GraphDATA02282();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02282-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02282
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02282
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02282-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02282,vote_lepen_02282,vote_rejet_02282]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02282-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02282,vote_lepenpop_02282,vote_rejetpop_02282]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02282"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02282
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02282
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02282
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02283*/
/*------------------------------------------------------------------ */
async function GraphDATA02283() {
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
    vote_macron_02283.push(vote_macron); 
    vote_lepen_02283.push(vote_lepen);
    vote_rejet_02283.push(vote_rejet);
    vote_macronpop_02283.push(vote_macronMediane);
    vote_lepenpop_02283.push(vote_lepenMediane);
    vote_rejetpop_02283.push(vote_rejetMediane);
    name_Commune_02283.push(nameCommune);
    Pourcentage_02283.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02283.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02283.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02283.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02283.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02283 = [];
const vote_lepen_02283 = [];
const vote_rejet_02283 = [];
const vote_macronpop_02283 = [];
const vote_lepenpop_02283 = [];
const vote_rejetpop_02283 = [];
const name_Commune_02283 = [];
const Pourcentage_02283 = [];
const Pourcentage_rejet_02283 = [];
const vote_gene_macron_02283 = [];
const vote_gene_lepen_02283 = [];
const vote_gene_rejet_02283 = [];

async function chartIt02283(){
    await GraphDATA02283();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02283-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02283
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02283
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02283-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02283,vote_lepen_02283,vote_rejet_02283]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02283-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02283,vote_lepenpop_02283,vote_rejetpop_02283]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02283"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02283
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02283
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02283
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02284*/
/*------------------------------------------------------------------ */
async function GraphDATA02284() {
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
    vote_macron_02284.push(vote_macron); 
    vote_lepen_02284.push(vote_lepen);
    vote_rejet_02284.push(vote_rejet);
    vote_macronpop_02284.push(vote_macronMediane);
    vote_lepenpop_02284.push(vote_lepenMediane);
    vote_rejetpop_02284.push(vote_rejetMediane);
    name_Commune_02284.push(nameCommune);
    Pourcentage_02284.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02284.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02284.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02284.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02284.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02284 = [];
const vote_lepen_02284 = [];
const vote_rejet_02284 = [];
const vote_macronpop_02284 = [];
const vote_lepenpop_02284 = [];
const vote_rejetpop_02284 = [];
const name_Commune_02284 = [];
const Pourcentage_02284 = [];
const Pourcentage_rejet_02284 = [];
const vote_gene_macron_02284 = [];
const vote_gene_lepen_02284 = [];
const vote_gene_rejet_02284 = [];

async function chartIt02284(){
    await GraphDATA02284();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02284-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02284
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02284
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02284-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02284,vote_lepen_02284,vote_rejet_02284]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02284-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02284,vote_lepenpop_02284,vote_rejetpop_02284]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02284"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02284
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02284
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02284
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02285*/
/*------------------------------------------------------------------ */
async function GraphDATA02285() {
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
    vote_macron_02285.push(vote_macron); 
    vote_lepen_02285.push(vote_lepen);
    vote_rejet_02285.push(vote_rejet);
    vote_macronpop_02285.push(vote_macronMediane);
    vote_lepenpop_02285.push(vote_lepenMediane);
    vote_rejetpop_02285.push(vote_rejetMediane);
    name_Commune_02285.push(nameCommune);
    Pourcentage_02285.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02285.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02285.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02285.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02285.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02285 = [];
const vote_lepen_02285 = [];
const vote_rejet_02285 = [];
const vote_macronpop_02285 = [];
const vote_lepenpop_02285 = [];
const vote_rejetpop_02285 = [];
const name_Commune_02285 = [];
const Pourcentage_02285 = [];
const Pourcentage_rejet_02285 = [];
const vote_gene_macron_02285 = [];
const vote_gene_lepen_02285 = [];
const vote_gene_rejet_02285 = [];

async function chartIt02285(){
    await GraphDATA02285();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02285-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02285
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02285
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02285-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02285,vote_lepen_02285,vote_rejet_02285]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02285-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02285,vote_lepenpop_02285,vote_rejetpop_02285]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02285"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02285
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02285
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02285
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02286*/
/*------------------------------------------------------------------ */
async function GraphDATA02286() {
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
    vote_macron_02286.push(vote_macron); 
    vote_lepen_02286.push(vote_lepen);
    vote_rejet_02286.push(vote_rejet);
    vote_macronpop_02286.push(vote_macronMediane);
    vote_lepenpop_02286.push(vote_lepenMediane);
    vote_rejetpop_02286.push(vote_rejetMediane);
    name_Commune_02286.push(nameCommune);
    Pourcentage_02286.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02286.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02286.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02286.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02286.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02286 = [];
const vote_lepen_02286 = [];
const vote_rejet_02286 = [];
const vote_macronpop_02286 = [];
const vote_lepenpop_02286 = [];
const vote_rejetpop_02286 = [];
const name_Commune_02286 = [];
const Pourcentage_02286 = [];
const Pourcentage_rejet_02286 = [];
const vote_gene_macron_02286 = [];
const vote_gene_lepen_02286 = [];
const vote_gene_rejet_02286 = [];

async function chartIt02286(){
    await GraphDATA02286();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02286-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02286
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02286
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02286-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02286,vote_lepen_02286,vote_rejet_02286]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02286-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02286,vote_lepenpop_02286,vote_rejetpop_02286]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02286"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02286
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02286
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02286
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02287*/
/*------------------------------------------------------------------ */
async function GraphDATA02287() {
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
    vote_macron_02287.push(vote_macron); 
    vote_lepen_02287.push(vote_lepen);
    vote_rejet_02287.push(vote_rejet);
    vote_macronpop_02287.push(vote_macronMediane);
    vote_lepenpop_02287.push(vote_lepenMediane);
    vote_rejetpop_02287.push(vote_rejetMediane);
    name_Commune_02287.push(nameCommune);
    Pourcentage_02287.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02287.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02287.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02287.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02287.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02287 = [];
const vote_lepen_02287 = [];
const vote_rejet_02287 = [];
const vote_macronpop_02287 = [];
const vote_lepenpop_02287 = [];
const vote_rejetpop_02287 = [];
const name_Commune_02287 = [];
const Pourcentage_02287 = [];
const Pourcentage_rejet_02287 = [];
const vote_gene_macron_02287 = [];
const vote_gene_lepen_02287 = [];
const vote_gene_rejet_02287 = [];

async function chartIt02287(){
    await GraphDATA02287();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02287-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02287
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02287
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02287-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02287,vote_lepen_02287,vote_rejet_02287]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02287-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02287,vote_lepenpop_02287,vote_rejetpop_02287]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02287"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02287
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02287
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02287
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02288*/
/*------------------------------------------------------------------ */
async function GraphDATA02288() {
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
    vote_macron_02288.push(vote_macron); 
    vote_lepen_02288.push(vote_lepen);
    vote_rejet_02288.push(vote_rejet);
    vote_macronpop_02288.push(vote_macronMediane);
    vote_lepenpop_02288.push(vote_lepenMediane);
    vote_rejetpop_02288.push(vote_rejetMediane);
    name_Commune_02288.push(nameCommune);
    Pourcentage_02288.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02288.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02288.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02288.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02288.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02288 = [];
const vote_lepen_02288 = [];
const vote_rejet_02288 = [];
const vote_macronpop_02288 = [];
const vote_lepenpop_02288 = [];
const vote_rejetpop_02288 = [];
const name_Commune_02288 = [];
const Pourcentage_02288 = [];
const Pourcentage_rejet_02288 = [];
const vote_gene_macron_02288 = [];
const vote_gene_lepen_02288 = [];
const vote_gene_rejet_02288 = [];

async function chartIt02288(){
    await GraphDATA02288();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02288-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02288
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02288
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02288-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02288,vote_lepen_02288,vote_rejet_02288]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02288-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02288,vote_lepenpop_02288,vote_rejetpop_02288]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02288"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02288
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02288
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02288
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02289*/
/*------------------------------------------------------------------ */
async function GraphDATA02289() {
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
    vote_macron_02289.push(vote_macron); 
    vote_lepen_02289.push(vote_lepen);
    vote_rejet_02289.push(vote_rejet);
    vote_macronpop_02289.push(vote_macronMediane);
    vote_lepenpop_02289.push(vote_lepenMediane);
    vote_rejetpop_02289.push(vote_rejetMediane);
    name_Commune_02289.push(nameCommune);
    Pourcentage_02289.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02289.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02289.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02289.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02289.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02289 = [];
const vote_lepen_02289 = [];
const vote_rejet_02289 = [];
const vote_macronpop_02289 = [];
const vote_lepenpop_02289 = [];
const vote_rejetpop_02289 = [];
const name_Commune_02289 = [];
const Pourcentage_02289 = [];
const Pourcentage_rejet_02289 = [];
const vote_gene_macron_02289 = [];
const vote_gene_lepen_02289 = [];
const vote_gene_rejet_02289 = [];

async function chartIt02289(){
    await GraphDATA02289();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02289-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02289
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02289
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02289-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02289,vote_lepen_02289,vote_rejet_02289]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02289-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02289,vote_lepenpop_02289,vote_rejetpop_02289]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02289"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02289
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02289
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02289
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02290*/
/*------------------------------------------------------------------ */
async function GraphDATA02290() {
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
    vote_macron_02290.push(vote_macron); 
    vote_lepen_02290.push(vote_lepen);
    vote_rejet_02290.push(vote_rejet);
    vote_macronpop_02290.push(vote_macronMediane);
    vote_lepenpop_02290.push(vote_lepenMediane);
    vote_rejetpop_02290.push(vote_rejetMediane);
    name_Commune_02290.push(nameCommune);
    Pourcentage_02290.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02290.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02290.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02290.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02290.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02290 = [];
const vote_lepen_02290 = [];
const vote_rejet_02290 = [];
const vote_macronpop_02290 = [];
const vote_lepenpop_02290 = [];
const vote_rejetpop_02290 = [];
const name_Commune_02290 = [];
const Pourcentage_02290 = [];
const Pourcentage_rejet_02290 = [];
const vote_gene_macron_02290 = [];
const vote_gene_lepen_02290 = [];
const vote_gene_rejet_02290 = [];

async function chartIt02290(){
    await GraphDATA02290();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02290-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02290
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02290
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02290-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02290,vote_lepen_02290,vote_rejet_02290]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02290-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02290,vote_lepenpop_02290,vote_rejetpop_02290]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02290"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02290
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02290
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02290
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02291*/
/*------------------------------------------------------------------ */
async function GraphDATA02291() {
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
    vote_macron_02291.push(vote_macron); 
    vote_lepen_02291.push(vote_lepen);
    vote_rejet_02291.push(vote_rejet);
    vote_macronpop_02291.push(vote_macronMediane);
    vote_lepenpop_02291.push(vote_lepenMediane);
    vote_rejetpop_02291.push(vote_rejetMediane);
    name_Commune_02291.push(nameCommune);
    Pourcentage_02291.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02291.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02291.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02291.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02291.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02291 = [];
const vote_lepen_02291 = [];
const vote_rejet_02291 = [];
const vote_macronpop_02291 = [];
const vote_lepenpop_02291 = [];
const vote_rejetpop_02291 = [];
const name_Commune_02291 = [];
const Pourcentage_02291 = [];
const Pourcentage_rejet_02291 = [];
const vote_gene_macron_02291 = [];
const vote_gene_lepen_02291 = [];
const vote_gene_rejet_02291 = [];

async function chartIt02291(){
    await GraphDATA02291();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02291-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02291
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02291
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02291-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02291,vote_lepen_02291,vote_rejet_02291]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02291-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02291,vote_lepenpop_02291,vote_rejetpop_02291]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02291"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02291
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02291
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02291
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02292*/
/*------------------------------------------------------------------ */
async function GraphDATA02292() {
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
    vote_macron_02292.push(vote_macron); 
    vote_lepen_02292.push(vote_lepen);
    vote_rejet_02292.push(vote_rejet);
    vote_macronpop_02292.push(vote_macronMediane);
    vote_lepenpop_02292.push(vote_lepenMediane);
    vote_rejetpop_02292.push(vote_rejetMediane);
    name_Commune_02292.push(nameCommune);
    Pourcentage_02292.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02292.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02292.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02292.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02292.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02292 = [];
const vote_lepen_02292 = [];
const vote_rejet_02292 = [];
const vote_macronpop_02292 = [];
const vote_lepenpop_02292 = [];
const vote_rejetpop_02292 = [];
const name_Commune_02292 = [];
const Pourcentage_02292 = [];
const Pourcentage_rejet_02292 = [];
const vote_gene_macron_02292 = [];
const vote_gene_lepen_02292 = [];
const vote_gene_rejet_02292 = [];

async function chartIt02292(){
    await GraphDATA02292();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02292-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02292
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02292
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02292-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02292,vote_lepen_02292,vote_rejet_02292]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02292-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02292,vote_lepenpop_02292,vote_rejetpop_02292]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02292"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02292
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02292
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02292
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02293*/
/*------------------------------------------------------------------ */
async function GraphDATA02293() {
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
    vote_macron_02293.push(vote_macron); 
    vote_lepen_02293.push(vote_lepen);
    vote_rejet_02293.push(vote_rejet);
    vote_macronpop_02293.push(vote_macronMediane);
    vote_lepenpop_02293.push(vote_lepenMediane);
    vote_rejetpop_02293.push(vote_rejetMediane);
    name_Commune_02293.push(nameCommune);
    Pourcentage_02293.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02293.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02293.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02293.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02293.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02293 = [];
const vote_lepen_02293 = [];
const vote_rejet_02293 = [];
const vote_macronpop_02293 = [];
const vote_lepenpop_02293 = [];
const vote_rejetpop_02293 = [];
const name_Commune_02293 = [];
const Pourcentage_02293 = [];
const Pourcentage_rejet_02293 = [];
const vote_gene_macron_02293 = [];
const vote_gene_lepen_02293 = [];
const vote_gene_rejet_02293 = [];

async function chartIt02293(){
    await GraphDATA02293();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02293-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02293
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02293
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02293-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02293,vote_lepen_02293,vote_rejet_02293]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02293-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02293,vote_lepenpop_02293,vote_rejetpop_02293]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02293"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02293
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02293
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02293
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02294*/
/*------------------------------------------------------------------ */
async function GraphDATA02294() {
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
    vote_macron_02294.push(vote_macron); 
    vote_lepen_02294.push(vote_lepen);
    vote_rejet_02294.push(vote_rejet);
    vote_macronpop_02294.push(vote_macronMediane);
    vote_lepenpop_02294.push(vote_lepenMediane);
    vote_rejetpop_02294.push(vote_rejetMediane);
    name_Commune_02294.push(nameCommune);
    Pourcentage_02294.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02294.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02294.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02294.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02294.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02294 = [];
const vote_lepen_02294 = [];
const vote_rejet_02294 = [];
const vote_macronpop_02294 = [];
const vote_lepenpop_02294 = [];
const vote_rejetpop_02294 = [];
const name_Commune_02294 = [];
const Pourcentage_02294 = [];
const Pourcentage_rejet_02294 = [];
const vote_gene_macron_02294 = [];
const vote_gene_lepen_02294 = [];
const vote_gene_rejet_02294 = [];

async function chartIt02294(){
    await GraphDATA02294();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02294-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02294
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02294
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02294-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02294,vote_lepen_02294,vote_rejet_02294]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02294-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02294,vote_lepenpop_02294,vote_rejetpop_02294]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02294"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02294
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02294
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02294
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02295*/
/*------------------------------------------------------------------ */
async function GraphDATA02295() {
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
    vote_macron_02295.push(vote_macron); 
    vote_lepen_02295.push(vote_lepen);
    vote_rejet_02295.push(vote_rejet);
    vote_macronpop_02295.push(vote_macronMediane);
    vote_lepenpop_02295.push(vote_lepenMediane);
    vote_rejetpop_02295.push(vote_rejetMediane);
    name_Commune_02295.push(nameCommune);
    Pourcentage_02295.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02295.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02295.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02295.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02295.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02295 = [];
const vote_lepen_02295 = [];
const vote_rejet_02295 = [];
const vote_macronpop_02295 = [];
const vote_lepenpop_02295 = [];
const vote_rejetpop_02295 = [];
const name_Commune_02295 = [];
const Pourcentage_02295 = [];
const Pourcentage_rejet_02295 = [];
const vote_gene_macron_02295 = [];
const vote_gene_lepen_02295 = [];
const vote_gene_rejet_02295 = [];

async function chartIt02295(){
    await GraphDATA02295();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02295-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02295
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02295
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02295-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02295,vote_lepen_02295,vote_rejet_02295]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02295-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02295,vote_lepenpop_02295,vote_rejetpop_02295]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02295"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02295
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02295
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02295
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02296*/
/*------------------------------------------------------------------ */
async function GraphDATA02296() {
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
    vote_macron_02296.push(vote_macron); 
    vote_lepen_02296.push(vote_lepen);
    vote_rejet_02296.push(vote_rejet);
    vote_macronpop_02296.push(vote_macronMediane);
    vote_lepenpop_02296.push(vote_lepenMediane);
    vote_rejetpop_02296.push(vote_rejetMediane);
    name_Commune_02296.push(nameCommune);
    Pourcentage_02296.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02296.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02296.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02296.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02296.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02296 = [];
const vote_lepen_02296 = [];
const vote_rejet_02296 = [];
const vote_macronpop_02296 = [];
const vote_lepenpop_02296 = [];
const vote_rejetpop_02296 = [];
const name_Commune_02296 = [];
const Pourcentage_02296 = [];
const Pourcentage_rejet_02296 = [];
const vote_gene_macron_02296 = [];
const vote_gene_lepen_02296 = [];
const vote_gene_rejet_02296 = [];

async function chartIt02296(){
    await GraphDATA02296();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02296-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02296
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02296
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02296-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02296,vote_lepen_02296,vote_rejet_02296]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02296-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02296,vote_lepenpop_02296,vote_rejetpop_02296]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02296"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02296
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02296
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02296
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02297*/
/*------------------------------------------------------------------ */
async function GraphDATA02297() {
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
    vote_macron_02297.push(vote_macron); 
    vote_lepen_02297.push(vote_lepen);
    vote_rejet_02297.push(vote_rejet);
    vote_macronpop_02297.push(vote_macronMediane);
    vote_lepenpop_02297.push(vote_lepenMediane);
    vote_rejetpop_02297.push(vote_rejetMediane);
    name_Commune_02297.push(nameCommune);
    Pourcentage_02297.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02297.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02297.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02297.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02297.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02297 = [];
const vote_lepen_02297 = [];
const vote_rejet_02297 = [];
const vote_macronpop_02297 = [];
const vote_lepenpop_02297 = [];
const vote_rejetpop_02297 = [];
const name_Commune_02297 = [];
const Pourcentage_02297 = [];
const Pourcentage_rejet_02297 = [];
const vote_gene_macron_02297 = [];
const vote_gene_lepen_02297 = [];
const vote_gene_rejet_02297 = [];

async function chartIt02297(){
    await GraphDATA02297();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02297-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02297
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02297
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02297-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02297,vote_lepen_02297,vote_rejet_02297]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02297-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02297,vote_lepenpop_02297,vote_rejetpop_02297]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02297"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02297
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02297
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02297
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02298*/
/*------------------------------------------------------------------ */
async function GraphDATA02298() {
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
    vote_macron_02298.push(vote_macron); 
    vote_lepen_02298.push(vote_lepen);
    vote_rejet_02298.push(vote_rejet);
    vote_macronpop_02298.push(vote_macronMediane);
    vote_lepenpop_02298.push(vote_lepenMediane);
    vote_rejetpop_02298.push(vote_rejetMediane);
    name_Commune_02298.push(nameCommune);
    Pourcentage_02298.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02298.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02298.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02298.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02298.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02298 = [];
const vote_lepen_02298 = [];
const vote_rejet_02298 = [];
const vote_macronpop_02298 = [];
const vote_lepenpop_02298 = [];
const vote_rejetpop_02298 = [];
const name_Commune_02298 = [];
const Pourcentage_02298 = [];
const Pourcentage_rejet_02298 = [];
const vote_gene_macron_02298 = [];
const vote_gene_lepen_02298 = [];
const vote_gene_rejet_02298 = [];

async function chartIt02298(){
    await GraphDATA02298();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02298-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02298
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02298
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02298-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02298,vote_lepen_02298,vote_rejet_02298]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02298-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02298,vote_lepenpop_02298,vote_rejetpop_02298]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02298"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02298
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02298
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02298
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02299*/
/*------------------------------------------------------------------ */
async function GraphDATA02299() {
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
    vote_macron_02299.push(vote_macron); 
    vote_lepen_02299.push(vote_lepen);
    vote_rejet_02299.push(vote_rejet);
    vote_macronpop_02299.push(vote_macronMediane);
    vote_lepenpop_02299.push(vote_lepenMediane);
    vote_rejetpop_02299.push(vote_rejetMediane);
    name_Commune_02299.push(nameCommune);
    Pourcentage_02299.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02299.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02299.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02299.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02299.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02299 = [];
const vote_lepen_02299 = [];
const vote_rejet_02299 = [];
const vote_macronpop_02299 = [];
const vote_lepenpop_02299 = [];
const vote_rejetpop_02299 = [];
const name_Commune_02299 = [];
const Pourcentage_02299 = [];
const Pourcentage_rejet_02299 = [];
const vote_gene_macron_02299 = [];
const vote_gene_lepen_02299 = [];
const vote_gene_rejet_02299 = [];

async function chartIt02299(){
    await GraphDATA02299();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02299-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02299
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02299
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02299-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02299,vote_lepen_02299,vote_rejet_02299]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02299-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02299,vote_lepenpop_02299,vote_rejetpop_02299]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02299"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02299
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02299
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02299
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}