/********************************************************************** */
/*JS GRAPHIQUE FICHIER DATA */
/********************************************************************** */
chartIt06101();
chartIt06102();
chartIt06103();
chartIt06104();
chartIt06105();
chartIt06106();
chartIt06107();
chartIt06108();
chartIt06109();
chartIt06110();
chartIt06111();
chartIt06112();
chartIt06113();
chartIt06114();
chartIt06115();
chartIt06116();
chartIt06117();
chartIt06118();
chartIt06119();
chartIt06120();
chartIt06121();
chartIt06122();
chartIt06123();
chartIt06124();
chartIt06125();
chartIt06126();
chartIt06127();
chartIt06128();
chartIt06129();
chartIt06130();
chartIt06131();
chartIt06132();
chartIt06133();
chartIt06134();
chartIt06135();
chartIt06136();
chartIt06137();
chartIt06138();
chartIt06139();
chartIt06140();
chartIt06141();
chartIt06142();
chartIt06143();
chartIt06144();
chartIt06145();
chartIt06146();
chartIt06147();
chartIt06148();
chartIt06149();
chartIt06150();
chartIt06151();
chartIt06152();
chartIt06153();
chartIt06154();
chartIt06155();
chartIt06156();
chartIt06157();
chartIt06158();
chartIt06159();
chartIt06160();
chartIt06161();
chartIt06162();
chartIt06163();
/*------------------------------------------------------------------ */
/*COMMUNE 06101*/
/*------------------------------------------------------------------ */
async function GraphDATA06101() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06101.push(vote_macron); 
    vote_lepen_06101.push(vote_lepen);
    vote_rejet_06101.push(vote_rejet);
    vote_macronpop_06101.push(vote_macronMediane);
    vote_lepenpop_06101.push(vote_lepenMediane);
    vote_rejetpop_06101.push(vote_rejetMediane);
    name_Commune_06101.push(nameCommune);
    Pourcentage_06101.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06101.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06101.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06101.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06101.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06101 = [];
const vote_lepen_06101 = [];
const vote_rejet_06101 = [];
const vote_macronpop_06101 = [];
const vote_lepenpop_06101 = [];
const vote_rejetpop_06101 = [];
const name_Commune_06101 = [];
const Pourcentage_06101 = [];
const Pourcentage_rejet_06101 = [];
const vote_gene_macron_06101 = [];
const vote_gene_lepen_06101 = [];
const vote_gene_rejet_06101 = [];

async function chartIt06101(){
    await GraphDATA06101();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06101-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06101
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06101
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06101-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06101,vote_lepen_06101,vote_rejet_06101]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06101-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06101,vote_lepenpop_06101,vote_rejetpop_06101]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06101"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06101
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06101
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06101
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06102*/
/*------------------------------------------------------------------ */
async function GraphDATA06102() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06102.push(vote_macron); 
    vote_lepen_06102.push(vote_lepen);
    vote_rejet_06102.push(vote_rejet);
    vote_macronpop_06102.push(vote_macronMediane);
    vote_lepenpop_06102.push(vote_lepenMediane);
    vote_rejetpop_06102.push(vote_rejetMediane);
    name_Commune_06102.push(nameCommune);
    Pourcentage_06102.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06102.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06102.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06102.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06102.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06102 = [];
const vote_lepen_06102 = [];
const vote_rejet_06102 = [];
const vote_macronpop_06102 = [];
const vote_lepenpop_06102 = [];
const vote_rejetpop_06102 = [];
const name_Commune_06102 = [];
const Pourcentage_06102 = [];
const Pourcentage_rejet_06102 = [];
const vote_gene_macron_06102 = [];
const vote_gene_lepen_06102 = [];
const vote_gene_rejet_06102 = [];

async function chartIt06102(){
    await GraphDATA06102();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06102-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06102
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06102
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06102-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06102,vote_lepen_06102,vote_rejet_06102]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06102-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06102,vote_lepenpop_06102,vote_rejetpop_06102]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06102"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06102
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06102
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06102
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06103*/
/*------------------------------------------------------------------ */
async function GraphDATA06103() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06103.push(vote_macron); 
    vote_lepen_06103.push(vote_lepen);
    vote_rejet_06103.push(vote_rejet);
    vote_macronpop_06103.push(vote_macronMediane);
    vote_lepenpop_06103.push(vote_lepenMediane);
    vote_rejetpop_06103.push(vote_rejetMediane);
    name_Commune_06103.push(nameCommune);
    Pourcentage_06103.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06103.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06103.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06103.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06103.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06103 = [];
const vote_lepen_06103 = [];
const vote_rejet_06103 = [];
const vote_macronpop_06103 = [];
const vote_lepenpop_06103 = [];
const vote_rejetpop_06103 = [];
const name_Commune_06103 = [];
const Pourcentage_06103 = [];
const Pourcentage_rejet_06103 = [];
const vote_gene_macron_06103 = [];
const vote_gene_lepen_06103 = [];
const vote_gene_rejet_06103 = [];

async function chartIt06103(){
    await GraphDATA06103();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06103-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06103
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06103
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06103-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06103,vote_lepen_06103,vote_rejet_06103]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06103-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06103,vote_lepenpop_06103,vote_rejetpop_06103]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06103"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06103
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06103
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06103
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06104*/
/*------------------------------------------------------------------ */
async function GraphDATA06104() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06104.push(vote_macron); 
    vote_lepen_06104.push(vote_lepen);
    vote_rejet_06104.push(vote_rejet);
    vote_macronpop_06104.push(vote_macronMediane);
    vote_lepenpop_06104.push(vote_lepenMediane);
    vote_rejetpop_06104.push(vote_rejetMediane);
    name_Commune_06104.push(nameCommune);
    Pourcentage_06104.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06104.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06104.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06104.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06104.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06104 = [];
const vote_lepen_06104 = [];
const vote_rejet_06104 = [];
const vote_macronpop_06104 = [];
const vote_lepenpop_06104 = [];
const vote_rejetpop_06104 = [];
const name_Commune_06104 = [];
const Pourcentage_06104 = [];
const Pourcentage_rejet_06104 = [];
const vote_gene_macron_06104 = [];
const vote_gene_lepen_06104 = [];
const vote_gene_rejet_06104 = [];

async function chartIt06104(){
    await GraphDATA06104();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06104-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06104
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06104
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06104-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06104,vote_lepen_06104,vote_rejet_06104]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06104-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06104,vote_lepenpop_06104,vote_rejetpop_06104]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06104"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06104
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06104
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06104
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06105*/
/*------------------------------------------------------------------ */
async function GraphDATA06105() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06105.push(vote_macron); 
    vote_lepen_06105.push(vote_lepen);
    vote_rejet_06105.push(vote_rejet);
    vote_macronpop_06105.push(vote_macronMediane);
    vote_lepenpop_06105.push(vote_lepenMediane);
    vote_rejetpop_06105.push(vote_rejetMediane);
    name_Commune_06105.push(nameCommune);
    Pourcentage_06105.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06105.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06105.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06105.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06105.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06105 = [];
const vote_lepen_06105 = [];
const vote_rejet_06105 = [];
const vote_macronpop_06105 = [];
const vote_lepenpop_06105 = [];
const vote_rejetpop_06105 = [];
const name_Commune_06105 = [];
const Pourcentage_06105 = [];
const Pourcentage_rejet_06105 = [];
const vote_gene_macron_06105 = [];
const vote_gene_lepen_06105 = [];
const vote_gene_rejet_06105 = [];

async function chartIt06105(){
    await GraphDATA06105();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06105-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06105
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06105
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06105-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06105,vote_lepen_06105,vote_rejet_06105]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06105-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06105,vote_lepenpop_06105,vote_rejetpop_06105]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06105"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06105
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06105
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06105
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06106*/
/*------------------------------------------------------------------ */
async function GraphDATA06106() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06106.push(vote_macron); 
    vote_lepen_06106.push(vote_lepen);
    vote_rejet_06106.push(vote_rejet);
    vote_macronpop_06106.push(vote_macronMediane);
    vote_lepenpop_06106.push(vote_lepenMediane);
    vote_rejetpop_06106.push(vote_rejetMediane);
    name_Commune_06106.push(nameCommune);
    Pourcentage_06106.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06106.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06106.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06106.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06106.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06106 = [];
const vote_lepen_06106 = [];
const vote_rejet_06106 = [];
const vote_macronpop_06106 = [];
const vote_lepenpop_06106 = [];
const vote_rejetpop_06106 = [];
const name_Commune_06106 = [];
const Pourcentage_06106 = [];
const Pourcentage_rejet_06106 = [];
const vote_gene_macron_06106 = [];
const vote_gene_lepen_06106 = [];
const vote_gene_rejet_06106 = [];

async function chartIt06106(){
    await GraphDATA06106();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06106-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06106
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06106
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06106-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06106,vote_lepen_06106,vote_rejet_06106]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06106-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06106,vote_lepenpop_06106,vote_rejetpop_06106]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06106"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06106
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06106
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06106
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06107*/
/*------------------------------------------------------------------ */
async function GraphDATA06107() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06107.push(vote_macron); 
    vote_lepen_06107.push(vote_lepen);
    vote_rejet_06107.push(vote_rejet);
    vote_macronpop_06107.push(vote_macronMediane);
    vote_lepenpop_06107.push(vote_lepenMediane);
    vote_rejetpop_06107.push(vote_rejetMediane);
    name_Commune_06107.push(nameCommune);
    Pourcentage_06107.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06107.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06107.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06107.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06107.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06107 = [];
const vote_lepen_06107 = [];
const vote_rejet_06107 = [];
const vote_macronpop_06107 = [];
const vote_lepenpop_06107 = [];
const vote_rejetpop_06107 = [];
const name_Commune_06107 = [];
const Pourcentage_06107 = [];
const Pourcentage_rejet_06107 = [];
const vote_gene_macron_06107 = [];
const vote_gene_lepen_06107 = [];
const vote_gene_rejet_06107 = [];

async function chartIt06107(){
    await GraphDATA06107();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06107-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06107
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06107
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06107-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06107,vote_lepen_06107,vote_rejet_06107]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06107-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06107,vote_lepenpop_06107,vote_rejetpop_06107]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06107"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06107
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06107
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06107
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06108*/
/*------------------------------------------------------------------ */
async function GraphDATA06108() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06108.push(vote_macron); 
    vote_lepen_06108.push(vote_lepen);
    vote_rejet_06108.push(vote_rejet);
    vote_macronpop_06108.push(vote_macronMediane);
    vote_lepenpop_06108.push(vote_lepenMediane);
    vote_rejetpop_06108.push(vote_rejetMediane);
    name_Commune_06108.push(nameCommune);
    Pourcentage_06108.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06108.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06108.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06108.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06108.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06108 = [];
const vote_lepen_06108 = [];
const vote_rejet_06108 = [];
const vote_macronpop_06108 = [];
const vote_lepenpop_06108 = [];
const vote_rejetpop_06108 = [];
const name_Commune_06108 = [];
const Pourcentage_06108 = [];
const Pourcentage_rejet_06108 = [];
const vote_gene_macron_06108 = [];
const vote_gene_lepen_06108 = [];
const vote_gene_rejet_06108 = [];

async function chartIt06108(){
    await GraphDATA06108();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06108-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06108
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06108
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06108-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06108,vote_lepen_06108,vote_rejet_06108]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06108-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06108,vote_lepenpop_06108,vote_rejetpop_06108]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06108"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06108
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06108
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06108
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06109*/
/*------------------------------------------------------------------ */
async function GraphDATA06109() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06109.push(vote_macron); 
    vote_lepen_06109.push(vote_lepen);
    vote_rejet_06109.push(vote_rejet);
    vote_macronpop_06109.push(vote_macronMediane);
    vote_lepenpop_06109.push(vote_lepenMediane);
    vote_rejetpop_06109.push(vote_rejetMediane);
    name_Commune_06109.push(nameCommune);
    Pourcentage_06109.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06109.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06109.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06109.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06109.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06109 = [];
const vote_lepen_06109 = [];
const vote_rejet_06109 = [];
const vote_macronpop_06109 = [];
const vote_lepenpop_06109 = [];
const vote_rejetpop_06109 = [];
const name_Commune_06109 = [];
const Pourcentage_06109 = [];
const Pourcentage_rejet_06109 = [];
const vote_gene_macron_06109 = [];
const vote_gene_lepen_06109 = [];
const vote_gene_rejet_06109 = [];

async function chartIt06109(){
    await GraphDATA06109();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06109-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06109
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06109
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06109-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06109,vote_lepen_06109,vote_rejet_06109]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06109-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06109,vote_lepenpop_06109,vote_rejetpop_06109]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06109"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06109
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06109
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06109
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06110*/
/*------------------------------------------------------------------ */
async function GraphDATA06110() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06110.push(vote_macron); 
    vote_lepen_06110.push(vote_lepen);
    vote_rejet_06110.push(vote_rejet);
    vote_macronpop_06110.push(vote_macronMediane);
    vote_lepenpop_06110.push(vote_lepenMediane);
    vote_rejetpop_06110.push(vote_rejetMediane);
    name_Commune_06110.push(nameCommune);
    Pourcentage_06110.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06110.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06110.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06110.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06110.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06110 = [];
const vote_lepen_06110 = [];
const vote_rejet_06110 = [];
const vote_macronpop_06110 = [];
const vote_lepenpop_06110 = [];
const vote_rejetpop_06110 = [];
const name_Commune_06110 = [];
const Pourcentage_06110 = [];
const Pourcentage_rejet_06110 = [];
const vote_gene_macron_06110 = [];
const vote_gene_lepen_06110 = [];
const vote_gene_rejet_06110 = [];

async function chartIt06110(){
    await GraphDATA06110();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06110-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06110
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06110
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06110-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06110,vote_lepen_06110,vote_rejet_06110]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06110-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06110,vote_lepenpop_06110,vote_rejetpop_06110]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06110"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06110
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06110
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06110
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06111*/
/*------------------------------------------------------------------ */
async function GraphDATA06111() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06111.push(vote_macron); 
    vote_lepen_06111.push(vote_lepen);
    vote_rejet_06111.push(vote_rejet);
    vote_macronpop_06111.push(vote_macronMediane);
    vote_lepenpop_06111.push(vote_lepenMediane);
    vote_rejetpop_06111.push(vote_rejetMediane);
    name_Commune_06111.push(nameCommune);
    Pourcentage_06111.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06111.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06111.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06111.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06111.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06111 = [];
const vote_lepen_06111 = [];
const vote_rejet_06111 = [];
const vote_macronpop_06111 = [];
const vote_lepenpop_06111 = [];
const vote_rejetpop_06111 = [];
const name_Commune_06111 = [];
const Pourcentage_06111 = [];
const Pourcentage_rejet_06111 = [];
const vote_gene_macron_06111 = [];
const vote_gene_lepen_06111 = [];
const vote_gene_rejet_06111 = [];

async function chartIt06111(){
    await GraphDATA06111();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06111-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06111
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06111
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06111-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06111,vote_lepen_06111,vote_rejet_06111]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06111-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06111,vote_lepenpop_06111,vote_rejetpop_06111]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06111"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06111
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06111
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06111
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06112*/
/*------------------------------------------------------------------ */
async function GraphDATA06112() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06112.push(vote_macron); 
    vote_lepen_06112.push(vote_lepen);
    vote_rejet_06112.push(vote_rejet);
    vote_macronpop_06112.push(vote_macronMediane);
    vote_lepenpop_06112.push(vote_lepenMediane);
    vote_rejetpop_06112.push(vote_rejetMediane);
    name_Commune_06112.push(nameCommune);
    Pourcentage_06112.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06112.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06112.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06112.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06112.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06112 = [];
const vote_lepen_06112 = [];
const vote_rejet_06112 = [];
const vote_macronpop_06112 = [];
const vote_lepenpop_06112 = [];
const vote_rejetpop_06112 = [];
const name_Commune_06112 = [];
const Pourcentage_06112 = [];
const Pourcentage_rejet_06112 = [];
const vote_gene_macron_06112 = [];
const vote_gene_lepen_06112 = [];
const vote_gene_rejet_06112 = [];

async function chartIt06112(){
    await GraphDATA06112();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06112-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06112
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06112
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06112-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06112,vote_lepen_06112,vote_rejet_06112]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06112-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06112,vote_lepenpop_06112,vote_rejetpop_06112]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06112"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06112
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06112
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06112
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06113*/
/*------------------------------------------------------------------ */
async function GraphDATA06113() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06113.push(vote_macron); 
    vote_lepen_06113.push(vote_lepen);
    vote_rejet_06113.push(vote_rejet);
    vote_macronpop_06113.push(vote_macronMediane);
    vote_lepenpop_06113.push(vote_lepenMediane);
    vote_rejetpop_06113.push(vote_rejetMediane);
    name_Commune_06113.push(nameCommune);
    Pourcentage_06113.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06113.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06113.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06113.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06113.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06113 = [];
const vote_lepen_06113 = [];
const vote_rejet_06113 = [];
const vote_macronpop_06113 = [];
const vote_lepenpop_06113 = [];
const vote_rejetpop_06113 = [];
const name_Commune_06113 = [];
const Pourcentage_06113 = [];
const Pourcentage_rejet_06113 = [];
const vote_gene_macron_06113 = [];
const vote_gene_lepen_06113 = [];
const vote_gene_rejet_06113 = [];

async function chartIt06113(){
    await GraphDATA06113();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06113-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06113
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06113
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06113-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06113,vote_lepen_06113,vote_rejet_06113]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06113-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06113,vote_lepenpop_06113,vote_rejetpop_06113]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06113"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06113
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06113
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06113
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06114*/
/*------------------------------------------------------------------ */
async function GraphDATA06114() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06114.push(vote_macron); 
    vote_lepen_06114.push(vote_lepen);
    vote_rejet_06114.push(vote_rejet);
    vote_macronpop_06114.push(vote_macronMediane);
    vote_lepenpop_06114.push(vote_lepenMediane);
    vote_rejetpop_06114.push(vote_rejetMediane);
    name_Commune_06114.push(nameCommune);
    Pourcentage_06114.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06114.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06114.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06114.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06114.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06114 = [];
const vote_lepen_06114 = [];
const vote_rejet_06114 = [];
const vote_macronpop_06114 = [];
const vote_lepenpop_06114 = [];
const vote_rejetpop_06114 = [];
const name_Commune_06114 = [];
const Pourcentage_06114 = [];
const Pourcentage_rejet_06114 = [];
const vote_gene_macron_06114 = [];
const vote_gene_lepen_06114 = [];
const vote_gene_rejet_06114 = [];

async function chartIt06114(){
    await GraphDATA06114();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06114-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06114
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06114
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06114-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06114,vote_lepen_06114,vote_rejet_06114]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06114-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06114,vote_lepenpop_06114,vote_rejetpop_06114]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06114"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06114
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06114
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06114
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06115*/
/*------------------------------------------------------------------ */
async function GraphDATA06115() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06115.push(vote_macron); 
    vote_lepen_06115.push(vote_lepen);
    vote_rejet_06115.push(vote_rejet);
    vote_macronpop_06115.push(vote_macronMediane);
    vote_lepenpop_06115.push(vote_lepenMediane);
    vote_rejetpop_06115.push(vote_rejetMediane);
    name_Commune_06115.push(nameCommune);
    Pourcentage_06115.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06115.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06115.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06115.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06115.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06115 = [];
const vote_lepen_06115 = [];
const vote_rejet_06115 = [];
const vote_macronpop_06115 = [];
const vote_lepenpop_06115 = [];
const vote_rejetpop_06115 = [];
const name_Commune_06115 = [];
const Pourcentage_06115 = [];
const Pourcentage_rejet_06115 = [];
const vote_gene_macron_06115 = [];
const vote_gene_lepen_06115 = [];
const vote_gene_rejet_06115 = [];

async function chartIt06115(){
    await GraphDATA06115();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06115-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06115
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06115
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06115-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06115,vote_lepen_06115,vote_rejet_06115]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06115-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06115,vote_lepenpop_06115,vote_rejetpop_06115]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06115"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06115
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06115
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06115
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06116*/
/*------------------------------------------------------------------ */
async function GraphDATA06116() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06116.push(vote_macron); 
    vote_lepen_06116.push(vote_lepen);
    vote_rejet_06116.push(vote_rejet);
    vote_macronpop_06116.push(vote_macronMediane);
    vote_lepenpop_06116.push(vote_lepenMediane);
    vote_rejetpop_06116.push(vote_rejetMediane);
    name_Commune_06116.push(nameCommune);
    Pourcentage_06116.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06116.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06116.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06116.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06116.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06116 = [];
const vote_lepen_06116 = [];
const vote_rejet_06116 = [];
const vote_macronpop_06116 = [];
const vote_lepenpop_06116 = [];
const vote_rejetpop_06116 = [];
const name_Commune_06116 = [];
const Pourcentage_06116 = [];
const Pourcentage_rejet_06116 = [];
const vote_gene_macron_06116 = [];
const vote_gene_lepen_06116 = [];
const vote_gene_rejet_06116 = [];

async function chartIt06116(){
    await GraphDATA06116();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06116-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06116
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06116
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06116-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06116,vote_lepen_06116,vote_rejet_06116]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06116-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06116,vote_lepenpop_06116,vote_rejetpop_06116]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06116"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06116
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06116
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06116
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06117*/
/*------------------------------------------------------------------ */
async function GraphDATA06117() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06117.push(vote_macron); 
    vote_lepen_06117.push(vote_lepen);
    vote_rejet_06117.push(vote_rejet);
    vote_macronpop_06117.push(vote_macronMediane);
    vote_lepenpop_06117.push(vote_lepenMediane);
    vote_rejetpop_06117.push(vote_rejetMediane);
    name_Commune_06117.push(nameCommune);
    Pourcentage_06117.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06117.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06117.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06117.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06117.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06117 = [];
const vote_lepen_06117 = [];
const vote_rejet_06117 = [];
const vote_macronpop_06117 = [];
const vote_lepenpop_06117 = [];
const vote_rejetpop_06117 = [];
const name_Commune_06117 = [];
const Pourcentage_06117 = [];
const Pourcentage_rejet_06117 = [];
const vote_gene_macron_06117 = [];
const vote_gene_lepen_06117 = [];
const vote_gene_rejet_06117 = [];

async function chartIt06117(){
    await GraphDATA06117();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06117-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06117
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06117
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06117-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06117,vote_lepen_06117,vote_rejet_06117]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06117-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06117,vote_lepenpop_06117,vote_rejetpop_06117]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06117"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06117
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06117
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06117
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06118*/
/*------------------------------------------------------------------ */
async function GraphDATA06118() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06118.push(vote_macron); 
    vote_lepen_06118.push(vote_lepen);
    vote_rejet_06118.push(vote_rejet);
    vote_macronpop_06118.push(vote_macronMediane);
    vote_lepenpop_06118.push(vote_lepenMediane);
    vote_rejetpop_06118.push(vote_rejetMediane);
    name_Commune_06118.push(nameCommune);
    Pourcentage_06118.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06118.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06118.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06118.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06118.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06118 = [];
const vote_lepen_06118 = [];
const vote_rejet_06118 = [];
const vote_macronpop_06118 = [];
const vote_lepenpop_06118 = [];
const vote_rejetpop_06118 = [];
const name_Commune_06118 = [];
const Pourcentage_06118 = [];
const Pourcentage_rejet_06118 = [];
const vote_gene_macron_06118 = [];
const vote_gene_lepen_06118 = [];
const vote_gene_rejet_06118 = [];

async function chartIt06118(){
    await GraphDATA06118();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06118-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06118
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06118
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06118-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06118,vote_lepen_06118,vote_rejet_06118]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06118-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06118,vote_lepenpop_06118,vote_rejetpop_06118]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06118"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06118
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06118
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06118
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06119*/
/*------------------------------------------------------------------ */
async function GraphDATA06119() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06119.push(vote_macron); 
    vote_lepen_06119.push(vote_lepen);
    vote_rejet_06119.push(vote_rejet);
    vote_macronpop_06119.push(vote_macronMediane);
    vote_lepenpop_06119.push(vote_lepenMediane);
    vote_rejetpop_06119.push(vote_rejetMediane);
    name_Commune_06119.push(nameCommune);
    Pourcentage_06119.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06119.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06119.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06119.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06119.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06119 = [];
const vote_lepen_06119 = [];
const vote_rejet_06119 = [];
const vote_macronpop_06119 = [];
const vote_lepenpop_06119 = [];
const vote_rejetpop_06119 = [];
const name_Commune_06119 = [];
const Pourcentage_06119 = [];
const Pourcentage_rejet_06119 = [];
const vote_gene_macron_06119 = [];
const vote_gene_lepen_06119 = [];
const vote_gene_rejet_06119 = [];

async function chartIt06119(){
    await GraphDATA06119();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06119-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06119
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06119
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06119-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06119,vote_lepen_06119,vote_rejet_06119]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06119-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06119,vote_lepenpop_06119,vote_rejetpop_06119]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06119"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06119
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06119
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06119
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06120*/
/*------------------------------------------------------------------ */
async function GraphDATA06120() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06120.push(vote_macron); 
    vote_lepen_06120.push(vote_lepen);
    vote_rejet_06120.push(vote_rejet);
    vote_macronpop_06120.push(vote_macronMediane);
    vote_lepenpop_06120.push(vote_lepenMediane);
    vote_rejetpop_06120.push(vote_rejetMediane);
    name_Commune_06120.push(nameCommune);
    Pourcentage_06120.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06120.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06120.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06120.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06120.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06120 = [];
const vote_lepen_06120 = [];
const vote_rejet_06120 = [];
const vote_macronpop_06120 = [];
const vote_lepenpop_06120 = [];
const vote_rejetpop_06120 = [];
const name_Commune_06120 = [];
const Pourcentage_06120 = [];
const Pourcentage_rejet_06120 = [];
const vote_gene_macron_06120 = [];
const vote_gene_lepen_06120 = [];
const vote_gene_rejet_06120 = [];

async function chartIt06120(){
    await GraphDATA06120();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06120-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06120
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06120
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06120-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06120,vote_lepen_06120,vote_rejet_06120]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06120-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06120,vote_lepenpop_06120,vote_rejetpop_06120]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06120"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06120
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06120
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06120
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06121*/
/*------------------------------------------------------------------ */
async function GraphDATA06121() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06121.push(vote_macron); 
    vote_lepen_06121.push(vote_lepen);
    vote_rejet_06121.push(vote_rejet);
    vote_macronpop_06121.push(vote_macronMediane);
    vote_lepenpop_06121.push(vote_lepenMediane);
    vote_rejetpop_06121.push(vote_rejetMediane);
    name_Commune_06121.push(nameCommune);
    Pourcentage_06121.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06121.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06121.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06121.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06121.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06121 = [];
const vote_lepen_06121 = [];
const vote_rejet_06121 = [];
const vote_macronpop_06121 = [];
const vote_lepenpop_06121 = [];
const vote_rejetpop_06121 = [];
const name_Commune_06121 = [];
const Pourcentage_06121 = [];
const Pourcentage_rejet_06121 = [];
const vote_gene_macron_06121 = [];
const vote_gene_lepen_06121 = [];
const vote_gene_rejet_06121 = [];

async function chartIt06121(){
    await GraphDATA06121();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06121-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06121
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06121
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06121-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06121,vote_lepen_06121,vote_rejet_06121]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06121-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06121,vote_lepenpop_06121,vote_rejetpop_06121]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06121"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06121
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06121
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06121
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06122*/
/*------------------------------------------------------------------ */
async function GraphDATA06122() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06122.push(vote_macron); 
    vote_lepen_06122.push(vote_lepen);
    vote_rejet_06122.push(vote_rejet);
    vote_macronpop_06122.push(vote_macronMediane);
    vote_lepenpop_06122.push(vote_lepenMediane);
    vote_rejetpop_06122.push(vote_rejetMediane);
    name_Commune_06122.push(nameCommune);
    Pourcentage_06122.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06122.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06122.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06122.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06122.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06122 = [];
const vote_lepen_06122 = [];
const vote_rejet_06122 = [];
const vote_macronpop_06122 = [];
const vote_lepenpop_06122 = [];
const vote_rejetpop_06122 = [];
const name_Commune_06122 = [];
const Pourcentage_06122 = [];
const Pourcentage_rejet_06122 = [];
const vote_gene_macron_06122 = [];
const vote_gene_lepen_06122 = [];
const vote_gene_rejet_06122 = [];

async function chartIt06122(){
    await GraphDATA06122();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06122-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06122
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06122
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06122-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06122,vote_lepen_06122,vote_rejet_06122]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06122-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06122,vote_lepenpop_06122,vote_rejetpop_06122]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06122"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06122
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06122
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06122
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06123*/
/*------------------------------------------------------------------ */
async function GraphDATA06123() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06123.push(vote_macron); 
    vote_lepen_06123.push(vote_lepen);
    vote_rejet_06123.push(vote_rejet);
    vote_macronpop_06123.push(vote_macronMediane);
    vote_lepenpop_06123.push(vote_lepenMediane);
    vote_rejetpop_06123.push(vote_rejetMediane);
    name_Commune_06123.push(nameCommune);
    Pourcentage_06123.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06123.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06123.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06123.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06123.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06123 = [];
const vote_lepen_06123 = [];
const vote_rejet_06123 = [];
const vote_macronpop_06123 = [];
const vote_lepenpop_06123 = [];
const vote_rejetpop_06123 = [];
const name_Commune_06123 = [];
const Pourcentage_06123 = [];
const Pourcentage_rejet_06123 = [];
const vote_gene_macron_06123 = [];
const vote_gene_lepen_06123 = [];
const vote_gene_rejet_06123 = [];

async function chartIt06123(){
    await GraphDATA06123();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06123-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06123
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06123
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06123-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06123,vote_lepen_06123,vote_rejet_06123]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06123-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06123,vote_lepenpop_06123,vote_rejetpop_06123]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06123"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06123
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06123
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06123
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06124*/
/*------------------------------------------------------------------ */
async function GraphDATA06124() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06124.push(vote_macron); 
    vote_lepen_06124.push(vote_lepen);
    vote_rejet_06124.push(vote_rejet);
    vote_macronpop_06124.push(vote_macronMediane);
    vote_lepenpop_06124.push(vote_lepenMediane);
    vote_rejetpop_06124.push(vote_rejetMediane);
    name_Commune_06124.push(nameCommune);
    Pourcentage_06124.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06124.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06124.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06124.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06124.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06124 = [];
const vote_lepen_06124 = [];
const vote_rejet_06124 = [];
const vote_macronpop_06124 = [];
const vote_lepenpop_06124 = [];
const vote_rejetpop_06124 = [];
const name_Commune_06124 = [];
const Pourcentage_06124 = [];
const Pourcentage_rejet_06124 = [];
const vote_gene_macron_06124 = [];
const vote_gene_lepen_06124 = [];
const vote_gene_rejet_06124 = [];

async function chartIt06124(){
    await GraphDATA06124();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06124-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06124
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06124
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06124-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06124,vote_lepen_06124,vote_rejet_06124]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06124-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06124,vote_lepenpop_06124,vote_rejetpop_06124]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06124"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06124
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06124
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06124
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06125*/
/*------------------------------------------------------------------ */
async function GraphDATA06125() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06125.push(vote_macron); 
    vote_lepen_06125.push(vote_lepen);
    vote_rejet_06125.push(vote_rejet);
    vote_macronpop_06125.push(vote_macronMediane);
    vote_lepenpop_06125.push(vote_lepenMediane);
    vote_rejetpop_06125.push(vote_rejetMediane);
    name_Commune_06125.push(nameCommune);
    Pourcentage_06125.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06125.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06125.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06125.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06125.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06125 = [];
const vote_lepen_06125 = [];
const vote_rejet_06125 = [];
const vote_macronpop_06125 = [];
const vote_lepenpop_06125 = [];
const vote_rejetpop_06125 = [];
const name_Commune_06125 = [];
const Pourcentage_06125 = [];
const Pourcentage_rejet_06125 = [];
const vote_gene_macron_06125 = [];
const vote_gene_lepen_06125 = [];
const vote_gene_rejet_06125 = [];

async function chartIt06125(){
    await GraphDATA06125();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06125-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06125
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06125
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06125-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06125,vote_lepen_06125,vote_rejet_06125]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06125-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06125,vote_lepenpop_06125,vote_rejetpop_06125]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06125"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06125
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06125
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06125
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06126*/
/*------------------------------------------------------------------ */
async function GraphDATA06126() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06126.push(vote_macron); 
    vote_lepen_06126.push(vote_lepen);
    vote_rejet_06126.push(vote_rejet);
    vote_macronpop_06126.push(vote_macronMediane);
    vote_lepenpop_06126.push(vote_lepenMediane);
    vote_rejetpop_06126.push(vote_rejetMediane);
    name_Commune_06126.push(nameCommune);
    Pourcentage_06126.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06126.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06126.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06126.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06126.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06126 = [];
const vote_lepen_06126 = [];
const vote_rejet_06126 = [];
const vote_macronpop_06126 = [];
const vote_lepenpop_06126 = [];
const vote_rejetpop_06126 = [];
const name_Commune_06126 = [];
const Pourcentage_06126 = [];
const Pourcentage_rejet_06126 = [];
const vote_gene_macron_06126 = [];
const vote_gene_lepen_06126 = [];
const vote_gene_rejet_06126 = [];

async function chartIt06126(){
    await GraphDATA06126();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06126-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06126
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06126
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06126-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06126,vote_lepen_06126,vote_rejet_06126]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06126-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06126,vote_lepenpop_06126,vote_rejetpop_06126]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06126"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06126
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06126
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06126
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06127*/
/*------------------------------------------------------------------ */
async function GraphDATA06127() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06127.push(vote_macron); 
    vote_lepen_06127.push(vote_lepen);
    vote_rejet_06127.push(vote_rejet);
    vote_macronpop_06127.push(vote_macronMediane);
    vote_lepenpop_06127.push(vote_lepenMediane);
    vote_rejetpop_06127.push(vote_rejetMediane);
    name_Commune_06127.push(nameCommune);
    Pourcentage_06127.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06127.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06127.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06127.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06127.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06127 = [];
const vote_lepen_06127 = [];
const vote_rejet_06127 = [];
const vote_macronpop_06127 = [];
const vote_lepenpop_06127 = [];
const vote_rejetpop_06127 = [];
const name_Commune_06127 = [];
const Pourcentage_06127 = [];
const Pourcentage_rejet_06127 = [];
const vote_gene_macron_06127 = [];
const vote_gene_lepen_06127 = [];
const vote_gene_rejet_06127 = [];

async function chartIt06127(){
    await GraphDATA06127();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06127-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06127
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06127
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06127-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06127,vote_lepen_06127,vote_rejet_06127]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06127-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06127,vote_lepenpop_06127,vote_rejetpop_06127]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06127"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06127
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06127
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06127
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06128*/
/*------------------------------------------------------------------ */
async function GraphDATA06128() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06128.push(vote_macron); 
    vote_lepen_06128.push(vote_lepen);
    vote_rejet_06128.push(vote_rejet);
    vote_macronpop_06128.push(vote_macronMediane);
    vote_lepenpop_06128.push(vote_lepenMediane);
    vote_rejetpop_06128.push(vote_rejetMediane);
    name_Commune_06128.push(nameCommune);
    Pourcentage_06128.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06128.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06128.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06128.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06128.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06128 = [];
const vote_lepen_06128 = [];
const vote_rejet_06128 = [];
const vote_macronpop_06128 = [];
const vote_lepenpop_06128 = [];
const vote_rejetpop_06128 = [];
const name_Commune_06128 = [];
const Pourcentage_06128 = [];
const Pourcentage_rejet_06128 = [];
const vote_gene_macron_06128 = [];
const vote_gene_lepen_06128 = [];
const vote_gene_rejet_06128 = [];

async function chartIt06128(){
    await GraphDATA06128();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06128-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06128
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06128
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06128-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06128,vote_lepen_06128,vote_rejet_06128]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06128-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06128,vote_lepenpop_06128,vote_rejetpop_06128]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06128"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06128
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06128
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06128
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06129*/
/*------------------------------------------------------------------ */
async function GraphDATA06129() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06129.push(vote_macron); 
    vote_lepen_06129.push(vote_lepen);
    vote_rejet_06129.push(vote_rejet);
    vote_macronpop_06129.push(vote_macronMediane);
    vote_lepenpop_06129.push(vote_lepenMediane);
    vote_rejetpop_06129.push(vote_rejetMediane);
    name_Commune_06129.push(nameCommune);
    Pourcentage_06129.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06129.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06129.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06129.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06129.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06129 = [];
const vote_lepen_06129 = [];
const vote_rejet_06129 = [];
const vote_macronpop_06129 = [];
const vote_lepenpop_06129 = [];
const vote_rejetpop_06129 = [];
const name_Commune_06129 = [];
const Pourcentage_06129 = [];
const Pourcentage_rejet_06129 = [];
const vote_gene_macron_06129 = [];
const vote_gene_lepen_06129 = [];
const vote_gene_rejet_06129 = [];

async function chartIt06129(){
    await GraphDATA06129();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06129-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06129
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06129
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06129-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06129,vote_lepen_06129,vote_rejet_06129]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06129-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06129,vote_lepenpop_06129,vote_rejetpop_06129]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06129"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06129
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06129
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06129
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06130*/
/*------------------------------------------------------------------ */
async function GraphDATA06130() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06130.push(vote_macron); 
    vote_lepen_06130.push(vote_lepen);
    vote_rejet_06130.push(vote_rejet);
    vote_macronpop_06130.push(vote_macronMediane);
    vote_lepenpop_06130.push(vote_lepenMediane);
    vote_rejetpop_06130.push(vote_rejetMediane);
    name_Commune_06130.push(nameCommune);
    Pourcentage_06130.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06130.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06130.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06130.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06130.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06130 = [];
const vote_lepen_06130 = [];
const vote_rejet_06130 = [];
const vote_macronpop_06130 = [];
const vote_lepenpop_06130 = [];
const vote_rejetpop_06130 = [];
const name_Commune_06130 = [];
const Pourcentage_06130 = [];
const Pourcentage_rejet_06130 = [];
const vote_gene_macron_06130 = [];
const vote_gene_lepen_06130 = [];
const vote_gene_rejet_06130 = [];

async function chartIt06130(){
    await GraphDATA06130();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06130-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06130
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06130
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06130-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06130,vote_lepen_06130,vote_rejet_06130]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06130-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06130,vote_lepenpop_06130,vote_rejetpop_06130]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06130"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06130
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06130
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06130
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06131*/
/*------------------------------------------------------------------ */
async function GraphDATA06131() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06131.push(vote_macron); 
    vote_lepen_06131.push(vote_lepen);
    vote_rejet_06131.push(vote_rejet);
    vote_macronpop_06131.push(vote_macronMediane);
    vote_lepenpop_06131.push(vote_lepenMediane);
    vote_rejetpop_06131.push(vote_rejetMediane);
    name_Commune_06131.push(nameCommune);
    Pourcentage_06131.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06131.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06131.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06131.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06131.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06131 = [];
const vote_lepen_06131 = [];
const vote_rejet_06131 = [];
const vote_macronpop_06131 = [];
const vote_lepenpop_06131 = [];
const vote_rejetpop_06131 = [];
const name_Commune_06131 = [];
const Pourcentage_06131 = [];
const Pourcentage_rejet_06131 = [];
const vote_gene_macron_06131 = [];
const vote_gene_lepen_06131 = [];
const vote_gene_rejet_06131 = [];

async function chartIt06131(){
    await GraphDATA06131();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06131-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06131
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06131
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06131-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06131,vote_lepen_06131,vote_rejet_06131]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06131-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06131,vote_lepenpop_06131,vote_rejetpop_06131]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06131"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06131
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06131
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06131
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06132*/
/*------------------------------------------------------------------ */
async function GraphDATA06132() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06132.push(vote_macron); 
    vote_lepen_06132.push(vote_lepen);
    vote_rejet_06132.push(vote_rejet);
    vote_macronpop_06132.push(vote_macronMediane);
    vote_lepenpop_06132.push(vote_lepenMediane);
    vote_rejetpop_06132.push(vote_rejetMediane);
    name_Commune_06132.push(nameCommune);
    Pourcentage_06132.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06132.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06132.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06132.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06132.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06132 = [];
const vote_lepen_06132 = [];
const vote_rejet_06132 = [];
const vote_macronpop_06132 = [];
const vote_lepenpop_06132 = [];
const vote_rejetpop_06132 = [];
const name_Commune_06132 = [];
const Pourcentage_06132 = [];
const Pourcentage_rejet_06132 = [];
const vote_gene_macron_06132 = [];
const vote_gene_lepen_06132 = [];
const vote_gene_rejet_06132 = [];

async function chartIt06132(){
    await GraphDATA06132();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06132-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06132
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06132
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06132-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06132,vote_lepen_06132,vote_rejet_06132]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06132-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06132,vote_lepenpop_06132,vote_rejetpop_06132]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06132"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06132
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06132
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06132
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06133*/
/*------------------------------------------------------------------ */
async function GraphDATA06133() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06133.push(vote_macron); 
    vote_lepen_06133.push(vote_lepen);
    vote_rejet_06133.push(vote_rejet);
    vote_macronpop_06133.push(vote_macronMediane);
    vote_lepenpop_06133.push(vote_lepenMediane);
    vote_rejetpop_06133.push(vote_rejetMediane);
    name_Commune_06133.push(nameCommune);
    Pourcentage_06133.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06133.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06133.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06133.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06133.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06133 = [];
const vote_lepen_06133 = [];
const vote_rejet_06133 = [];
const vote_macronpop_06133 = [];
const vote_lepenpop_06133 = [];
const vote_rejetpop_06133 = [];
const name_Commune_06133 = [];
const Pourcentage_06133 = [];
const Pourcentage_rejet_06133 = [];
const vote_gene_macron_06133 = [];
const vote_gene_lepen_06133 = [];
const vote_gene_rejet_06133 = [];

async function chartIt06133(){
    await GraphDATA06133();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06133-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06133
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06133
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06133-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06133,vote_lepen_06133,vote_rejet_06133]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06133-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06133,vote_lepenpop_06133,vote_rejetpop_06133]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06133"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06133
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06133
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06133
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06134*/
/*------------------------------------------------------------------ */
async function GraphDATA06134() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06134.push(vote_macron); 
    vote_lepen_06134.push(vote_lepen);
    vote_rejet_06134.push(vote_rejet);
    vote_macronpop_06134.push(vote_macronMediane);
    vote_lepenpop_06134.push(vote_lepenMediane);
    vote_rejetpop_06134.push(vote_rejetMediane);
    name_Commune_06134.push(nameCommune);
    Pourcentage_06134.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06134.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06134.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06134.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06134.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06134 = [];
const vote_lepen_06134 = [];
const vote_rejet_06134 = [];
const vote_macronpop_06134 = [];
const vote_lepenpop_06134 = [];
const vote_rejetpop_06134 = [];
const name_Commune_06134 = [];
const Pourcentage_06134 = [];
const Pourcentage_rejet_06134 = [];
const vote_gene_macron_06134 = [];
const vote_gene_lepen_06134 = [];
const vote_gene_rejet_06134 = [];

async function chartIt06134(){
    await GraphDATA06134();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06134-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06134
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06134
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06134-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06134,vote_lepen_06134,vote_rejet_06134]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06134-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06134,vote_lepenpop_06134,vote_rejetpop_06134]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06134"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06134
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06134
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06134
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06135*/
/*------------------------------------------------------------------ */
async function GraphDATA06135() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06135.push(vote_macron); 
    vote_lepen_06135.push(vote_lepen);
    vote_rejet_06135.push(vote_rejet);
    vote_macronpop_06135.push(vote_macronMediane);
    vote_lepenpop_06135.push(vote_lepenMediane);
    vote_rejetpop_06135.push(vote_rejetMediane);
    name_Commune_06135.push(nameCommune);
    Pourcentage_06135.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06135.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06135.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06135.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06135.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06135 = [];
const vote_lepen_06135 = [];
const vote_rejet_06135 = [];
const vote_macronpop_06135 = [];
const vote_lepenpop_06135 = [];
const vote_rejetpop_06135 = [];
const name_Commune_06135 = [];
const Pourcentage_06135 = [];
const Pourcentage_rejet_06135 = [];
const vote_gene_macron_06135 = [];
const vote_gene_lepen_06135 = [];
const vote_gene_rejet_06135 = [];

async function chartIt06135(){
    await GraphDATA06135();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06135-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06135
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06135
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06135-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06135,vote_lepen_06135,vote_rejet_06135]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06135-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06135,vote_lepenpop_06135,vote_rejetpop_06135]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06135"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06135
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06135
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06135
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06136*/
/*------------------------------------------------------------------ */
async function GraphDATA06136() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06136.push(vote_macron); 
    vote_lepen_06136.push(vote_lepen);
    vote_rejet_06136.push(vote_rejet);
    vote_macronpop_06136.push(vote_macronMediane);
    vote_lepenpop_06136.push(vote_lepenMediane);
    vote_rejetpop_06136.push(vote_rejetMediane);
    name_Commune_06136.push(nameCommune);
    Pourcentage_06136.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06136.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06136.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06136.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06136.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06136 = [];
const vote_lepen_06136 = [];
const vote_rejet_06136 = [];
const vote_macronpop_06136 = [];
const vote_lepenpop_06136 = [];
const vote_rejetpop_06136 = [];
const name_Commune_06136 = [];
const Pourcentage_06136 = [];
const Pourcentage_rejet_06136 = [];
const vote_gene_macron_06136 = [];
const vote_gene_lepen_06136 = [];
const vote_gene_rejet_06136 = [];

async function chartIt06136(){
    await GraphDATA06136();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06136-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06136
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06136
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06136-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06136,vote_lepen_06136,vote_rejet_06136]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06136-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06136,vote_lepenpop_06136,vote_rejetpop_06136]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06136"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06136
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06136
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06136
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06137*/
/*------------------------------------------------------------------ */
async function GraphDATA06137() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06137.push(vote_macron); 
    vote_lepen_06137.push(vote_lepen);
    vote_rejet_06137.push(vote_rejet);
    vote_macronpop_06137.push(vote_macronMediane);
    vote_lepenpop_06137.push(vote_lepenMediane);
    vote_rejetpop_06137.push(vote_rejetMediane);
    name_Commune_06137.push(nameCommune);
    Pourcentage_06137.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06137.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06137.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06137.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06137.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06137 = [];
const vote_lepen_06137 = [];
const vote_rejet_06137 = [];
const vote_macronpop_06137 = [];
const vote_lepenpop_06137 = [];
const vote_rejetpop_06137 = [];
const name_Commune_06137 = [];
const Pourcentage_06137 = [];
const Pourcentage_rejet_06137 = [];
const vote_gene_macron_06137 = [];
const vote_gene_lepen_06137 = [];
const vote_gene_rejet_06137 = [];

async function chartIt06137(){
    await GraphDATA06137();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06137-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06137
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06137
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06137-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06137,vote_lepen_06137,vote_rejet_06137]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06137-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06137,vote_lepenpop_06137,vote_rejetpop_06137]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06137"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06137
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06137
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06137
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06138*/
/*------------------------------------------------------------------ */
async function GraphDATA06138() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06138.push(vote_macron); 
    vote_lepen_06138.push(vote_lepen);
    vote_rejet_06138.push(vote_rejet);
    vote_macronpop_06138.push(vote_macronMediane);
    vote_lepenpop_06138.push(vote_lepenMediane);
    vote_rejetpop_06138.push(vote_rejetMediane);
    name_Commune_06138.push(nameCommune);
    Pourcentage_06138.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06138.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06138.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06138.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06138.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06138 = [];
const vote_lepen_06138 = [];
const vote_rejet_06138 = [];
const vote_macronpop_06138 = [];
const vote_lepenpop_06138 = [];
const vote_rejetpop_06138 = [];
const name_Commune_06138 = [];
const Pourcentage_06138 = [];
const Pourcentage_rejet_06138 = [];
const vote_gene_macron_06138 = [];
const vote_gene_lepen_06138 = [];
const vote_gene_rejet_06138 = [];

async function chartIt06138(){
    await GraphDATA06138();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06138-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06138
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06138
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06138-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06138,vote_lepen_06138,vote_rejet_06138]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06138-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06138,vote_lepenpop_06138,vote_rejetpop_06138]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06138"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06138
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06138
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06138
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06139*/
/*------------------------------------------------------------------ */
async function GraphDATA06139() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06139.push(vote_macron); 
    vote_lepen_06139.push(vote_lepen);
    vote_rejet_06139.push(vote_rejet);
    vote_macronpop_06139.push(vote_macronMediane);
    vote_lepenpop_06139.push(vote_lepenMediane);
    vote_rejetpop_06139.push(vote_rejetMediane);
    name_Commune_06139.push(nameCommune);
    Pourcentage_06139.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06139.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06139.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06139.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06139.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06139 = [];
const vote_lepen_06139 = [];
const vote_rejet_06139 = [];
const vote_macronpop_06139 = [];
const vote_lepenpop_06139 = [];
const vote_rejetpop_06139 = [];
const name_Commune_06139 = [];
const Pourcentage_06139 = [];
const Pourcentage_rejet_06139 = [];
const vote_gene_macron_06139 = [];
const vote_gene_lepen_06139 = [];
const vote_gene_rejet_06139 = [];

async function chartIt06139(){
    await GraphDATA06139();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06139-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06139
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06139
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06139-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06139,vote_lepen_06139,vote_rejet_06139]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06139-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06139,vote_lepenpop_06139,vote_rejetpop_06139]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06139"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06139
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06139
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06139
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06140*/
/*------------------------------------------------------------------ */
async function GraphDATA06140() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06140.push(vote_macron); 
    vote_lepen_06140.push(vote_lepen);
    vote_rejet_06140.push(vote_rejet);
    vote_macronpop_06140.push(vote_macronMediane);
    vote_lepenpop_06140.push(vote_lepenMediane);
    vote_rejetpop_06140.push(vote_rejetMediane);
    name_Commune_06140.push(nameCommune);
    Pourcentage_06140.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06140.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06140.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06140.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06140.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06140 = [];
const vote_lepen_06140 = [];
const vote_rejet_06140 = [];
const vote_macronpop_06140 = [];
const vote_lepenpop_06140 = [];
const vote_rejetpop_06140 = [];
const name_Commune_06140 = [];
const Pourcentage_06140 = [];
const Pourcentage_rejet_06140 = [];
const vote_gene_macron_06140 = [];
const vote_gene_lepen_06140 = [];
const vote_gene_rejet_06140 = [];

async function chartIt06140(){
    await GraphDATA06140();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06140-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06140
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06140
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06140-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06140,vote_lepen_06140,vote_rejet_06140]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06140-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06140,vote_lepenpop_06140,vote_rejetpop_06140]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06140"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06140
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06140
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06140
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06141*/
/*------------------------------------------------------------------ */
async function GraphDATA06141() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06141.push(vote_macron); 
    vote_lepen_06141.push(vote_lepen);
    vote_rejet_06141.push(vote_rejet);
    vote_macronpop_06141.push(vote_macronMediane);
    vote_lepenpop_06141.push(vote_lepenMediane);
    vote_rejetpop_06141.push(vote_rejetMediane);
    name_Commune_06141.push(nameCommune);
    Pourcentage_06141.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06141.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06141.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06141.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06141.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06141 = [];
const vote_lepen_06141 = [];
const vote_rejet_06141 = [];
const vote_macronpop_06141 = [];
const vote_lepenpop_06141 = [];
const vote_rejetpop_06141 = [];
const name_Commune_06141 = [];
const Pourcentage_06141 = [];
const Pourcentage_rejet_06141 = [];
const vote_gene_macron_06141 = [];
const vote_gene_lepen_06141 = [];
const vote_gene_rejet_06141 = [];

async function chartIt06141(){
    await GraphDATA06141();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06141-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06141
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06141
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06141-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06141,vote_lepen_06141,vote_rejet_06141]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06141-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06141,vote_lepenpop_06141,vote_rejetpop_06141]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06141"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06141
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06141
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06141
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06142*/
/*------------------------------------------------------------------ */
async function GraphDATA06142() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06142.push(vote_macron); 
    vote_lepen_06142.push(vote_lepen);
    vote_rejet_06142.push(vote_rejet);
    vote_macronpop_06142.push(vote_macronMediane);
    vote_lepenpop_06142.push(vote_lepenMediane);
    vote_rejetpop_06142.push(vote_rejetMediane);
    name_Commune_06142.push(nameCommune);
    Pourcentage_06142.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06142.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06142.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06142.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06142.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06142 = [];
const vote_lepen_06142 = [];
const vote_rejet_06142 = [];
const vote_macronpop_06142 = [];
const vote_lepenpop_06142 = [];
const vote_rejetpop_06142 = [];
const name_Commune_06142 = [];
const Pourcentage_06142 = [];
const Pourcentage_rejet_06142 = [];
const vote_gene_macron_06142 = [];
const vote_gene_lepen_06142 = [];
const vote_gene_rejet_06142 = [];

async function chartIt06142(){
    await GraphDATA06142();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06142-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06142
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06142
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06142-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06142,vote_lepen_06142,vote_rejet_06142]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06142-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06142,vote_lepenpop_06142,vote_rejetpop_06142]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06142"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06142
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06142
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06142
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06143*/
/*------------------------------------------------------------------ */
async function GraphDATA06143() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06143.push(vote_macron); 
    vote_lepen_06143.push(vote_lepen);
    vote_rejet_06143.push(vote_rejet);
    vote_macronpop_06143.push(vote_macronMediane);
    vote_lepenpop_06143.push(vote_lepenMediane);
    vote_rejetpop_06143.push(vote_rejetMediane);
    name_Commune_06143.push(nameCommune);
    Pourcentage_06143.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06143.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06143.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06143.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06143.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06143 = [];
const vote_lepen_06143 = [];
const vote_rejet_06143 = [];
const vote_macronpop_06143 = [];
const vote_lepenpop_06143 = [];
const vote_rejetpop_06143 = [];
const name_Commune_06143 = [];
const Pourcentage_06143 = [];
const Pourcentage_rejet_06143 = [];
const vote_gene_macron_06143 = [];
const vote_gene_lepen_06143 = [];
const vote_gene_rejet_06143 = [];

async function chartIt06143(){
    await GraphDATA06143();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06143-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06143
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06143
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06143-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06143,vote_lepen_06143,vote_rejet_06143]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06143-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06143,vote_lepenpop_06143,vote_rejetpop_06143]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06143"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06143
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06143
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06143
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06144*/
/*------------------------------------------------------------------ */
async function GraphDATA06144() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06144.push(vote_macron); 
    vote_lepen_06144.push(vote_lepen);
    vote_rejet_06144.push(vote_rejet);
    vote_macronpop_06144.push(vote_macronMediane);
    vote_lepenpop_06144.push(vote_lepenMediane);
    vote_rejetpop_06144.push(vote_rejetMediane);
    name_Commune_06144.push(nameCommune);
    Pourcentage_06144.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06144.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06144.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06144.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06144.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06144 = [];
const vote_lepen_06144 = [];
const vote_rejet_06144 = [];
const vote_macronpop_06144 = [];
const vote_lepenpop_06144 = [];
const vote_rejetpop_06144 = [];
const name_Commune_06144 = [];
const Pourcentage_06144 = [];
const Pourcentage_rejet_06144 = [];
const vote_gene_macron_06144 = [];
const vote_gene_lepen_06144 = [];
const vote_gene_rejet_06144 = [];

async function chartIt06144(){
    await GraphDATA06144();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06144-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06144
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06144
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06144-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06144,vote_lepen_06144,vote_rejet_06144]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06144-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06144,vote_lepenpop_06144,vote_rejetpop_06144]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06144"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06144
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06144
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06144
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06145*/
/*------------------------------------------------------------------ */
async function GraphDATA06145() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06145.push(vote_macron); 
    vote_lepen_06145.push(vote_lepen);
    vote_rejet_06145.push(vote_rejet);
    vote_macronpop_06145.push(vote_macronMediane);
    vote_lepenpop_06145.push(vote_lepenMediane);
    vote_rejetpop_06145.push(vote_rejetMediane);
    name_Commune_06145.push(nameCommune);
    Pourcentage_06145.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06145.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06145.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06145.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06145.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06145 = [];
const vote_lepen_06145 = [];
const vote_rejet_06145 = [];
const vote_macronpop_06145 = [];
const vote_lepenpop_06145 = [];
const vote_rejetpop_06145 = [];
const name_Commune_06145 = [];
const Pourcentage_06145 = [];
const Pourcentage_rejet_06145 = [];
const vote_gene_macron_06145 = [];
const vote_gene_lepen_06145 = [];
const vote_gene_rejet_06145 = [];

async function chartIt06145(){
    await GraphDATA06145();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06145-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06145
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06145
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06145-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06145,vote_lepen_06145,vote_rejet_06145]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06145-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06145,vote_lepenpop_06145,vote_rejetpop_06145]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06145"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06145
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06145
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06145
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06146*/
/*------------------------------------------------------------------ */
async function GraphDATA06146() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06146.push(vote_macron); 
    vote_lepen_06146.push(vote_lepen);
    vote_rejet_06146.push(vote_rejet);
    vote_macronpop_06146.push(vote_macronMediane);
    vote_lepenpop_06146.push(vote_lepenMediane);
    vote_rejetpop_06146.push(vote_rejetMediane);
    name_Commune_06146.push(nameCommune);
    Pourcentage_06146.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06146.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06146.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06146.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06146.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06146 = [];
const vote_lepen_06146 = [];
const vote_rejet_06146 = [];
const vote_macronpop_06146 = [];
const vote_lepenpop_06146 = [];
const vote_rejetpop_06146 = [];
const name_Commune_06146 = [];
const Pourcentage_06146 = [];
const Pourcentage_rejet_06146 = [];
const vote_gene_macron_06146 = [];
const vote_gene_lepen_06146 = [];
const vote_gene_rejet_06146 = [];

async function chartIt06146(){
    await GraphDATA06146();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06146-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06146
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06146
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06146-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06146,vote_lepen_06146,vote_rejet_06146]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06146-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06146,vote_lepenpop_06146,vote_rejetpop_06146]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06146"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06146
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06146
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06146
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06147*/
/*------------------------------------------------------------------ */
async function GraphDATA06147() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06147.push(vote_macron); 
    vote_lepen_06147.push(vote_lepen);
    vote_rejet_06147.push(vote_rejet);
    vote_macronpop_06147.push(vote_macronMediane);
    vote_lepenpop_06147.push(vote_lepenMediane);
    vote_rejetpop_06147.push(vote_rejetMediane);
    name_Commune_06147.push(nameCommune);
    Pourcentage_06147.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06147.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06147.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06147.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06147.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06147 = [];
const vote_lepen_06147 = [];
const vote_rejet_06147 = [];
const vote_macronpop_06147 = [];
const vote_lepenpop_06147 = [];
const vote_rejetpop_06147 = [];
const name_Commune_06147 = [];
const Pourcentage_06147 = [];
const Pourcentage_rejet_06147 = [];
const vote_gene_macron_06147 = [];
const vote_gene_lepen_06147 = [];
const vote_gene_rejet_06147 = [];

async function chartIt06147(){
    await GraphDATA06147();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06147-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06147
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06147
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06147-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06147,vote_lepen_06147,vote_rejet_06147]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06147-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06147,vote_lepenpop_06147,vote_rejetpop_06147]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06147"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06147
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06147
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06147
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06148*/
/*------------------------------------------------------------------ */
async function GraphDATA06148() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06148.push(vote_macron); 
    vote_lepen_06148.push(vote_lepen);
    vote_rejet_06148.push(vote_rejet);
    vote_macronpop_06148.push(vote_macronMediane);
    vote_lepenpop_06148.push(vote_lepenMediane);
    vote_rejetpop_06148.push(vote_rejetMediane);
    name_Commune_06148.push(nameCommune);
    Pourcentage_06148.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06148.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06148.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06148.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06148.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06148 = [];
const vote_lepen_06148 = [];
const vote_rejet_06148 = [];
const vote_macronpop_06148 = [];
const vote_lepenpop_06148 = [];
const vote_rejetpop_06148 = [];
const name_Commune_06148 = [];
const Pourcentage_06148 = [];
const Pourcentage_rejet_06148 = [];
const vote_gene_macron_06148 = [];
const vote_gene_lepen_06148 = [];
const vote_gene_rejet_06148 = [];

async function chartIt06148(){
    await GraphDATA06148();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06148-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06148
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06148
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06148-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06148,vote_lepen_06148,vote_rejet_06148]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06148-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06148,vote_lepenpop_06148,vote_rejetpop_06148]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06148"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06148
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06148
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06148
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06149*/
/*------------------------------------------------------------------ */
async function GraphDATA06149() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06149.push(vote_macron); 
    vote_lepen_06149.push(vote_lepen);
    vote_rejet_06149.push(vote_rejet);
    vote_macronpop_06149.push(vote_macronMediane);
    vote_lepenpop_06149.push(vote_lepenMediane);
    vote_rejetpop_06149.push(vote_rejetMediane);
    name_Commune_06149.push(nameCommune);
    Pourcentage_06149.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06149.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06149.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06149.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06149.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06149 = [];
const vote_lepen_06149 = [];
const vote_rejet_06149 = [];
const vote_macronpop_06149 = [];
const vote_lepenpop_06149 = [];
const vote_rejetpop_06149 = [];
const name_Commune_06149 = [];
const Pourcentage_06149 = [];
const Pourcentage_rejet_06149 = [];
const vote_gene_macron_06149 = [];
const vote_gene_lepen_06149 = [];
const vote_gene_rejet_06149 = [];

async function chartIt06149(){
    await GraphDATA06149();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06149-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06149
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06149
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06149-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06149,vote_lepen_06149,vote_rejet_06149]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06149-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06149,vote_lepenpop_06149,vote_rejetpop_06149]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06149"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06149
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06149
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06149
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06150*/
/*------------------------------------------------------------------ */
async function GraphDATA06150() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06150.push(vote_macron); 
    vote_lepen_06150.push(vote_lepen);
    vote_rejet_06150.push(vote_rejet);
    vote_macronpop_06150.push(vote_macronMediane);
    vote_lepenpop_06150.push(vote_lepenMediane);
    vote_rejetpop_06150.push(vote_rejetMediane);
    name_Commune_06150.push(nameCommune);
    Pourcentage_06150.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06150.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06150.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06150.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06150.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06150 = [];
const vote_lepen_06150 = [];
const vote_rejet_06150 = [];
const vote_macronpop_06150 = [];
const vote_lepenpop_06150 = [];
const vote_rejetpop_06150 = [];
const name_Commune_06150 = [];
const Pourcentage_06150 = [];
const Pourcentage_rejet_06150 = [];
const vote_gene_macron_06150 = [];
const vote_gene_lepen_06150 = [];
const vote_gene_rejet_06150 = [];

async function chartIt06150(){
    await GraphDATA06150();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06150-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06150
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06150
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06150-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06150,vote_lepen_06150,vote_rejet_06150]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06150-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06150,vote_lepenpop_06150,vote_rejetpop_06150]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06150"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06150
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06150
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06150
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06151*/
/*------------------------------------------------------------------ */
async function GraphDATA06151() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06151.push(vote_macron); 
    vote_lepen_06151.push(vote_lepen);
    vote_rejet_06151.push(vote_rejet);
    vote_macronpop_06151.push(vote_macronMediane);
    vote_lepenpop_06151.push(vote_lepenMediane);
    vote_rejetpop_06151.push(vote_rejetMediane);
    name_Commune_06151.push(nameCommune);
    Pourcentage_06151.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06151.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06151.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06151.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06151.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06151 = [];
const vote_lepen_06151 = [];
const vote_rejet_06151 = [];
const vote_macronpop_06151 = [];
const vote_lepenpop_06151 = [];
const vote_rejetpop_06151 = [];
const name_Commune_06151 = [];
const Pourcentage_06151 = [];
const Pourcentage_rejet_06151 = [];
const vote_gene_macron_06151 = [];
const vote_gene_lepen_06151 = [];
const vote_gene_rejet_06151 = [];

async function chartIt06151(){
    await GraphDATA06151();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06151-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06151
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06151
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06151-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06151,vote_lepen_06151,vote_rejet_06151]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06151-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06151,vote_lepenpop_06151,vote_rejetpop_06151]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06151"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06151
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06151
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06151
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06152*/
/*------------------------------------------------------------------ */
async function GraphDATA06152() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06152.push(vote_macron); 
    vote_lepen_06152.push(vote_lepen);
    vote_rejet_06152.push(vote_rejet);
    vote_macronpop_06152.push(vote_macronMediane);
    vote_lepenpop_06152.push(vote_lepenMediane);
    vote_rejetpop_06152.push(vote_rejetMediane);
    name_Commune_06152.push(nameCommune);
    Pourcentage_06152.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06152.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06152.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06152.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06152.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06152 = [];
const vote_lepen_06152 = [];
const vote_rejet_06152 = [];
const vote_macronpop_06152 = [];
const vote_lepenpop_06152 = [];
const vote_rejetpop_06152 = [];
const name_Commune_06152 = [];
const Pourcentage_06152 = [];
const Pourcentage_rejet_06152 = [];
const vote_gene_macron_06152 = [];
const vote_gene_lepen_06152 = [];
const vote_gene_rejet_06152 = [];

async function chartIt06152(){
    await GraphDATA06152();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06152-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06152
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06152
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06152-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06152,vote_lepen_06152,vote_rejet_06152]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06152-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06152,vote_lepenpop_06152,vote_rejetpop_06152]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06152"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06152
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06152
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06152
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06153*/
/*------------------------------------------------------------------ */
async function GraphDATA06153() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06153.push(vote_macron); 
    vote_lepen_06153.push(vote_lepen);
    vote_rejet_06153.push(vote_rejet);
    vote_macronpop_06153.push(vote_macronMediane);
    vote_lepenpop_06153.push(vote_lepenMediane);
    vote_rejetpop_06153.push(vote_rejetMediane);
    name_Commune_06153.push(nameCommune);
    Pourcentage_06153.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06153.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06153.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06153.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06153.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06153 = [];
const vote_lepen_06153 = [];
const vote_rejet_06153 = [];
const vote_macronpop_06153 = [];
const vote_lepenpop_06153 = [];
const vote_rejetpop_06153 = [];
const name_Commune_06153 = [];
const Pourcentage_06153 = [];
const Pourcentage_rejet_06153 = [];
const vote_gene_macron_06153 = [];
const vote_gene_lepen_06153 = [];
const vote_gene_rejet_06153 = [];

async function chartIt06153(){
    await GraphDATA06153();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06153-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06153
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06153
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06153-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06153,vote_lepen_06153,vote_rejet_06153]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06153-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06153,vote_lepenpop_06153,vote_rejetpop_06153]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06153"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06153
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06153
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06153
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06154*/
/*------------------------------------------------------------------ */
async function GraphDATA06154() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06154.push(vote_macron); 
    vote_lepen_06154.push(vote_lepen);
    vote_rejet_06154.push(vote_rejet);
    vote_macronpop_06154.push(vote_macronMediane);
    vote_lepenpop_06154.push(vote_lepenMediane);
    vote_rejetpop_06154.push(vote_rejetMediane);
    name_Commune_06154.push(nameCommune);
    Pourcentage_06154.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06154.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06154.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06154.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06154.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06154 = [];
const vote_lepen_06154 = [];
const vote_rejet_06154 = [];
const vote_macronpop_06154 = [];
const vote_lepenpop_06154 = [];
const vote_rejetpop_06154 = [];
const name_Commune_06154 = [];
const Pourcentage_06154 = [];
const Pourcentage_rejet_06154 = [];
const vote_gene_macron_06154 = [];
const vote_gene_lepen_06154 = [];
const vote_gene_rejet_06154 = [];

async function chartIt06154(){
    await GraphDATA06154();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06154-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06154
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06154
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06154-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06154,vote_lepen_06154,vote_rejet_06154]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06154-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06154,vote_lepenpop_06154,vote_rejetpop_06154]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06154"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06154
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06154
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06154
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06155*/
/*------------------------------------------------------------------ */
async function GraphDATA06155() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06155.push(vote_macron); 
    vote_lepen_06155.push(vote_lepen);
    vote_rejet_06155.push(vote_rejet);
    vote_macronpop_06155.push(vote_macronMediane);
    vote_lepenpop_06155.push(vote_lepenMediane);
    vote_rejetpop_06155.push(vote_rejetMediane);
    name_Commune_06155.push(nameCommune);
    Pourcentage_06155.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06155.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06155.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06155.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06155.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06155 = [];
const vote_lepen_06155 = [];
const vote_rejet_06155 = [];
const vote_macronpop_06155 = [];
const vote_lepenpop_06155 = [];
const vote_rejetpop_06155 = [];
const name_Commune_06155 = [];
const Pourcentage_06155 = [];
const Pourcentage_rejet_06155 = [];
const vote_gene_macron_06155 = [];
const vote_gene_lepen_06155 = [];
const vote_gene_rejet_06155 = [];

async function chartIt06155(){
    await GraphDATA06155();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06155-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06155
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06155
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06155-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06155,vote_lepen_06155,vote_rejet_06155]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06155-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06155,vote_lepenpop_06155,vote_rejetpop_06155]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06155"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06155
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06155
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06155
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06156*/
/*------------------------------------------------------------------ */
async function GraphDATA06156() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06156.push(vote_macron); 
    vote_lepen_06156.push(vote_lepen);
    vote_rejet_06156.push(vote_rejet);
    vote_macronpop_06156.push(vote_macronMediane);
    vote_lepenpop_06156.push(vote_lepenMediane);
    vote_rejetpop_06156.push(vote_rejetMediane);
    name_Commune_06156.push(nameCommune);
    Pourcentage_06156.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06156.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06156.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06156.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06156.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06156 = [];
const vote_lepen_06156 = [];
const vote_rejet_06156 = [];
const vote_macronpop_06156 = [];
const vote_lepenpop_06156 = [];
const vote_rejetpop_06156 = [];
const name_Commune_06156 = [];
const Pourcentage_06156 = [];
const Pourcentage_rejet_06156 = [];
const vote_gene_macron_06156 = [];
const vote_gene_lepen_06156 = [];
const vote_gene_rejet_06156 = [];

async function chartIt06156(){
    await GraphDATA06156();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06156-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06156
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06156
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06156-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06156,vote_lepen_06156,vote_rejet_06156]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06156-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06156,vote_lepenpop_06156,vote_rejetpop_06156]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06156"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06156
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06156
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06156
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06157*/
/*------------------------------------------------------------------ */
async function GraphDATA06157() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06157.push(vote_macron); 
    vote_lepen_06157.push(vote_lepen);
    vote_rejet_06157.push(vote_rejet);
    vote_macronpop_06157.push(vote_macronMediane);
    vote_lepenpop_06157.push(vote_lepenMediane);
    vote_rejetpop_06157.push(vote_rejetMediane);
    name_Commune_06157.push(nameCommune);
    Pourcentage_06157.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06157.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06157.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06157.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06157.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06157 = [];
const vote_lepen_06157 = [];
const vote_rejet_06157 = [];
const vote_macronpop_06157 = [];
const vote_lepenpop_06157 = [];
const vote_rejetpop_06157 = [];
const name_Commune_06157 = [];
const Pourcentage_06157 = [];
const Pourcentage_rejet_06157 = [];
const vote_gene_macron_06157 = [];
const vote_gene_lepen_06157 = [];
const vote_gene_rejet_06157 = [];

async function chartIt06157(){
    await GraphDATA06157();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06157-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06157
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06157
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06157-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06157,vote_lepen_06157,vote_rejet_06157]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06157-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06157,vote_lepenpop_06157,vote_rejetpop_06157]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06157"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06157
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06157
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06157
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06158*/
/*------------------------------------------------------------------ */
async function GraphDATA06158() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06158.push(vote_macron); 
    vote_lepen_06158.push(vote_lepen);
    vote_rejet_06158.push(vote_rejet);
    vote_macronpop_06158.push(vote_macronMediane);
    vote_lepenpop_06158.push(vote_lepenMediane);
    vote_rejetpop_06158.push(vote_rejetMediane);
    name_Commune_06158.push(nameCommune);
    Pourcentage_06158.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06158.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06158.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06158.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06158.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06158 = [];
const vote_lepen_06158 = [];
const vote_rejet_06158 = [];
const vote_macronpop_06158 = [];
const vote_lepenpop_06158 = [];
const vote_rejetpop_06158 = [];
const name_Commune_06158 = [];
const Pourcentage_06158 = [];
const Pourcentage_rejet_06158 = [];
const vote_gene_macron_06158 = [];
const vote_gene_lepen_06158 = [];
const vote_gene_rejet_06158 = [];

async function chartIt06158(){
    await GraphDATA06158();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06158-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06158
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06158
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06158-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06158,vote_lepen_06158,vote_rejet_06158]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06158-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06158,vote_lepenpop_06158,vote_rejetpop_06158]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06158"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06158
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06158
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06158
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06159*/
/*------------------------------------------------------------------ */
async function GraphDATA06159() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06159.push(vote_macron); 
    vote_lepen_06159.push(vote_lepen);
    vote_rejet_06159.push(vote_rejet);
    vote_macronpop_06159.push(vote_macronMediane);
    vote_lepenpop_06159.push(vote_lepenMediane);
    vote_rejetpop_06159.push(vote_rejetMediane);
    name_Commune_06159.push(nameCommune);
    Pourcentage_06159.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06159.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06159.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06159.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06159.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06159 = [];
const vote_lepen_06159 = [];
const vote_rejet_06159 = [];
const vote_macronpop_06159 = [];
const vote_lepenpop_06159 = [];
const vote_rejetpop_06159 = [];
const name_Commune_06159 = [];
const Pourcentage_06159 = [];
const Pourcentage_rejet_06159 = [];
const vote_gene_macron_06159 = [];
const vote_gene_lepen_06159 = [];
const vote_gene_rejet_06159 = [];

async function chartIt06159(){
    await GraphDATA06159();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06159-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06159
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06159
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06159-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06159,vote_lepen_06159,vote_rejet_06159]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06159-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06159,vote_lepenpop_06159,vote_rejetpop_06159]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06159"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06159
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06159
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06159
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06160*/
/*------------------------------------------------------------------ */
async function GraphDATA06160() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06160.push(vote_macron); 
    vote_lepen_06160.push(vote_lepen);
    vote_rejet_06160.push(vote_rejet);
    vote_macronpop_06160.push(vote_macronMediane);
    vote_lepenpop_06160.push(vote_lepenMediane);
    vote_rejetpop_06160.push(vote_rejetMediane);
    name_Commune_06160.push(nameCommune);
    Pourcentage_06160.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06160.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06160.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06160.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06160.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06160 = [];
const vote_lepen_06160 = [];
const vote_rejet_06160 = [];
const vote_macronpop_06160 = [];
const vote_lepenpop_06160 = [];
const vote_rejetpop_06160 = [];
const name_Commune_06160 = [];
const Pourcentage_06160 = [];
const Pourcentage_rejet_06160 = [];
const vote_gene_macron_06160 = [];
const vote_gene_lepen_06160 = [];
const vote_gene_rejet_06160 = [];

async function chartIt06160(){
    await GraphDATA06160();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06160-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06160
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06160
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06160-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06160,vote_lepen_06160,vote_rejet_06160]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06160-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06160,vote_lepenpop_06160,vote_rejetpop_06160]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06160"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06160
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06160
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06160
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06161*/
/*------------------------------------------------------------------ */
async function GraphDATA06161() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06161.push(vote_macron); 
    vote_lepen_06161.push(vote_lepen);
    vote_rejet_06161.push(vote_rejet);
    vote_macronpop_06161.push(vote_macronMediane);
    vote_lepenpop_06161.push(vote_lepenMediane);
    vote_rejetpop_06161.push(vote_rejetMediane);
    name_Commune_06161.push(nameCommune);
    Pourcentage_06161.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06161.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06161.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06161.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06161.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06161 = [];
const vote_lepen_06161 = [];
const vote_rejet_06161 = [];
const vote_macronpop_06161 = [];
const vote_lepenpop_06161 = [];
const vote_rejetpop_06161 = [];
const name_Commune_06161 = [];
const Pourcentage_06161 = [];
const Pourcentage_rejet_06161 = [];
const vote_gene_macron_06161 = [];
const vote_gene_lepen_06161 = [];
const vote_gene_rejet_06161 = [];

async function chartIt06161(){
    await GraphDATA06161();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06161-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06161
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06161
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06161-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06161,vote_lepen_06161,vote_rejet_06161]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06161-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06161,vote_lepenpop_06161,vote_rejetpop_06161]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06161"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06161
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06161
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06161
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06162*/
/*------------------------------------------------------------------ */
async function GraphDATA06162() {
    const response = await fetch('../Departement06/Json/Data_dep06.json');
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
    vote_macron_06162.push(vote_macron); 
    vote_lepen_06162.push(vote_lepen);
    vote_rejet_06162.push(vote_rejet);
    vote_macronpop_06162.push(vote_macronMediane);
    vote_lepenpop_06162.push(vote_lepenMediane);
    vote_rejetpop_06162.push(vote_rejetMediane);
    name_Commune_06162.push(nameCommune);
    Pourcentage_06162.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_06162.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_06162.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_06162.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_06162.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06162 = [];
const vote_lepen_06162 = [];
const vote_rejet_06162 = [];
const vote_macronpop_06162 = [];
const vote_lepenpop_06162 = [];
const vote_rejetpop_06162 = [];
const name_Commune_06162 = [];
const Pourcentage_06162 = [];
const Pourcentage_rejet_06162 = [];
const vote_gene_macron_06162 = [];
const vote_gene_lepen_06162 = [];
const vote_gene_rejet_06162 = [];

async function chartIt06162(){
    await GraphDATA06162();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_06162-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_06162
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06162
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_06162-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_06162,vote_lepen_06162,vote_rejet_06162]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_06162-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_06162,vote_lepenpop_06162,vote_rejetpop_06162]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06162"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_06162
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_06162
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_06162
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 06163*/
/*------------------------------------------------------------------ */
async function GraphDATA06163() {
  const response = await fetch('../Departement06/Json/Data_dep06.json');
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
  vote_macron_06163.push(vote_macron); 
  vote_lepen_06163.push(vote_lepen);
  vote_rejet_06163.push(vote_rejet);
  vote_macronpop_06163.push(vote_macronMediane);
  vote_lepenpop_06163.push(vote_lepenMediane);
  vote_rejetpop_06163.push(vote_rejetMediane);
  name_Commune_06163.push(nameCommune);
  Pourcentage_06163.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
  Pourcentage_rejet_06163.push(vote_macron, vote_lepen, vote_rejet);
  vote_gene_macron_06163.push(vote_macron, vote_macronMediane);
  vote_gene_lepen_06163.push(vote_lepen, vote_lepenMediane);
  vote_gene_rejet_06163.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_06163 = [];
const vote_lepen_06163 = [];
const vote_rejet_06163 = [];
const vote_macronpop_06163 = [];
const vote_lepenpop_06163 = [];
const vote_rejetpop_06163 = [];
const name_Commune_06163 = [];
const Pourcentage_06163 = [];
const Pourcentage_rejet_06163 = [];
const vote_gene_macron_06163 = [];
const vote_gene_lepen_06163 = [];
const vote_gene_rejet_06163 = [];

async function chartIt06163(){
  await GraphDATA06163();
// Bar chart
  const myChart = new Chart(document.getElementById("bar-chart_06163-01"), {  
      type: 'bar',
      data: {
      labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
      datasets: [
          {
          label: "%",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: Pourcentage_06162
          }
       ]
      },
      options: {
        scales: { 
          yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
          }, 
        legend: { display: false },
        title: {
          display: true,
          text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_06162
      
      }
      }
  });
  const myChart02 = new Chart(document.getElementById("polar-chart_06163-01"), {
      type: 'polarArea',
      data: {
        labels: [name_macron, name_lepen, name_rejete],
        datasets: [
          {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
            data: [vote_macron_06162,vote_lepen_06162,vote_rejet_06162]
          }
        ]
      },
      options: {
        scale: {
          reverse: false,
          ticks: {
            min: 0,
            max: 100
          }
        }
      }
  });
  const myChart04 = new Chart(document.getElementById("polar-chart_06163-03"), {
      type: 'polarArea',
      data: {
        labels: [name_macron, name_lepen, name_rejete],
        datasets: [
          {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
            data: [vote_macronpop_06162,vote_lepenpop_06162,vote_rejetpop_06162]
          }
        ]
      },
      options: {
        scale: {
          reverse: false,
          ticks: {
            min: 0,
            max: 100
          }
        }
      }
  });
  const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_06163"), {
      type: 'bar',
      data: {
          labels: ["Officiel", "Moyenne Population"],
          datasets: [
          {
              label: name_macron,
              backgroundColor: "#3e95cd",
              data: vote_gene_macron_06162
          }, {
              label: name_lepen,
              backgroundColor: "#8e5ea2",
              data: vote_gene_lepen_06162
          },{
              label: name_rejete,
              backgroundColor: "#c45850",
              data: vote_gene_rejet_06162
              }
          ]
      },
      options: {
        scales: { 
          yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
          }, 
      }
  });
}
