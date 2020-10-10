/********************************************************************** */
/*JS GRAPHIQUE FICHIER DATA */
/********************************************************************** */
chartIt01301();
chartIt01302();
chartIt01303();
chartIt01304();
chartIt01305();
chartIt01306();
chartIt01307();
chartIt01308();
chartIt01309();
chartIt01310();
chartIt01311();
chartIt01312();
chartIt01313();
chartIt01314();
chartIt01315();
chartIt01316();
chartIt01317();
chartIt01318();
chartIt01319();
chartIt01320();
chartIt01321();
chartIt01322();
chartIt01323();
chartIt01324();
chartIt01325();
chartIt01326();
chartIt01327();
chartIt01328();
chartIt01329();
chartIt01330();
chartIt01331();
chartIt01332();
chartIt01333();
chartIt01334();
chartIt01335();
chartIt01336();
chartIt01337();
chartIt01338();
chartIt01339();
chartIt01340();
chartIt01341();
chartIt01342();
chartIt01343();
chartIt01344();
chartIt01345();
chartIt01346();
chartIt01347();
chartIt01348();
chartIt01349();
chartIt01350();
chartIt01351();
chartIt01352();
chartIt01353();
chartIt01354();
chartIt01355();
chartIt01356();
chartIt01357();
chartIt01358();
chartIt01359();
chartIt01360();
chartIt01361();
chartIt01362();
chartIt01363();
chartIt01364();
chartIt01365();
chartIt01366();
chartIt01367();
chartIt01368();
chartIt01369();
chartIt01370();
chartIt01371();
chartIt01372();
chartIt01373();
chartIt01374();
chartIt01375();
chartIt01376();
chartIt01377();
chartIt01378();
chartIt01379();
chartIt01380();
chartIt01381();
chartIt01382();
chartIt01383();
chartIt01384();
chartIt01385();
chartIt01386();
chartIt01387();
chartIt01388();
chartIt01389();
chartIt01390();
chartIt01391();
chartIt01392();
chartIt01393();
/*------------------------------------------------------------------ */
/*COMMUNE 01301*/
/*------------------------------------------------------------------ */
async function GraphDATA01301() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[300];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01301.push(vote_macron); 
    vote_lepen_01301.push(vote_lepen);
    vote_rejet_01301.push(vote_rejet);
    vote_macronpop_01301.push(vote_macronMediane);
    vote_lepenpop_01301.push(vote_lepenMediane);
    vote_rejetpop_01301.push(vote_rejetMediane);
    name_Commune_01301.push(nameCommune);
    Pourcentage_01301.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01301.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01301.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01301.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01301.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01301 = [];
const vote_lepen_01301 = [];
const vote_rejet_01301 = [];
const vote_macronpop_01301 = [];
const vote_lepenpop_01301 = [];
const vote_rejetpop_01301 = [];
const name_Commune_01301 = [];
const Pourcentage_01301 = [];
const Pourcentage_rejet_01301 = [];
const vote_gene_macron_01301 = [];
const vote_gene_lepen_01301 = [];
const vote_gene_rejet_01301 = [];

async function chartIt01301(){
    await GraphDATA01301();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01301-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01301
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01301
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01301-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01301,vote_lepen_01301,vote_rejet_01301]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01301-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01301,vote_lepenpop_01301,vote_rejetpop_01301]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01301"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01301
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01301
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01301
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01302*/
/*------------------------------------------------------------------ */
async function GraphDATA01302() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[301];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01302.push(vote_macron); 
    vote_lepen_01302.push(vote_lepen);
    vote_rejet_01302.push(vote_rejet);
    vote_macronpop_01302.push(vote_macronMediane);
    vote_lepenpop_01302.push(vote_lepenMediane);
    vote_rejetpop_01302.push(vote_rejetMediane);
    name_Commune_01302.push(nameCommune);
    Pourcentage_01302.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01302.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01302.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01302.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01302.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01302 = [];
const vote_lepen_01302 = [];
const vote_rejet_01302 = [];
const vote_macronpop_01302 = [];
const vote_lepenpop_01302 = [];
const vote_rejetpop_01302 = [];
const name_Commune_01302 = [];
const Pourcentage_01302 = [];
const Pourcentage_rejet_01302 = [];
const vote_gene_macron_01302 = [];
const vote_gene_lepen_01302 = [];
const vote_gene_rejet_01302 = [];

async function chartIt01302(){
    await GraphDATA01302();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01302-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01302
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01302
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01302-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01302,vote_lepen_01302,vote_rejet_01302]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01302-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01302,vote_lepenpop_01302,vote_rejetpop_01302]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01302"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01302
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01302
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01302
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01303*/
/*------------------------------------------------------------------ */
async function GraphDATA01303() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[302];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01303.push(vote_macron); 
    vote_lepen_01303.push(vote_lepen);
    vote_rejet_01303.push(vote_rejet);
    vote_macronpop_01303.push(vote_macronMediane);
    vote_lepenpop_01303.push(vote_lepenMediane);
    vote_rejetpop_01303.push(vote_rejetMediane);
    name_Commune_01303.push(nameCommune);
    Pourcentage_01303.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01303.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01303.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01303.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01303.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01303 = [];
const vote_lepen_01303 = [];
const vote_rejet_01303 = [];
const vote_macronpop_01303 = [];
const vote_lepenpop_01303 = [];
const vote_rejetpop_01303 = [];
const name_Commune_01303 = [];
const Pourcentage_01303 = [];
const Pourcentage_rejet_01303 = [];
const vote_gene_macron_01303 = [];
const vote_gene_lepen_01303 = [];
const vote_gene_rejet_01303 = [];

async function chartIt01303(){
    await GraphDATA01303();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01303-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01303
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01303
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01303-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01303,vote_lepen_01303,vote_rejet_01303]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01303-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01303,vote_lepenpop_01303,vote_rejetpop_01303]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01303"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01303
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01303
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01303
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01304*/
/*------------------------------------------------------------------ */
async function GraphDATA01304() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[303];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01304.push(vote_macron); 
    vote_lepen_01304.push(vote_lepen);
    vote_rejet_01304.push(vote_rejet);
    vote_macronpop_01304.push(vote_macronMediane);
    vote_lepenpop_01304.push(vote_lepenMediane);
    vote_rejetpop_01304.push(vote_rejetMediane);
    name_Commune_01304.push(nameCommune);
    Pourcentage_01304.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01304.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01304.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01304.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01304.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01304 = [];
const vote_lepen_01304 = [];
const vote_rejet_01304 = [];
const vote_macronpop_01304 = [];
const vote_lepenpop_01304 = [];
const vote_rejetpop_01304 = [];
const name_Commune_01304 = [];
const Pourcentage_01304 = [];
const Pourcentage_rejet_01304 = [];
const vote_gene_macron_01304 = [];
const vote_gene_lepen_01304 = [];
const vote_gene_rejet_01304 = [];

async function chartIt01304(){
    await GraphDATA01304();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01304-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01304
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01304
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01304-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01304,vote_lepen_01304,vote_rejet_01304]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01304-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01304,vote_lepenpop_01304,vote_rejetpop_01304]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01304"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01304
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01304
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01304
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01305*/
/*------------------------------------------------------------------ */
async function GraphDATA01305() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[304];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01305.push(vote_macron); 
    vote_lepen_01305.push(vote_lepen);
    vote_rejet_01305.push(vote_rejet);
    vote_macronpop_01305.push(vote_macronMediane);
    vote_lepenpop_01305.push(vote_lepenMediane);
    vote_rejetpop_01305.push(vote_rejetMediane);
    name_Commune_01305.push(nameCommune);
    Pourcentage_01305.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01305.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01305.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01305.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01305.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01305 = [];
const vote_lepen_01305 = [];
const vote_rejet_01305 = [];
const vote_macronpop_01305 = [];
const vote_lepenpop_01305 = [];
const vote_rejetpop_01305 = [];
const name_Commune_01305 = [];
const Pourcentage_01305 = [];
const Pourcentage_rejet_01305 = [];
const vote_gene_macron_01305 = [];
const vote_gene_lepen_01305 = [];
const vote_gene_rejet_01305 = [];

async function chartIt01305(){
    await GraphDATA01305();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01305-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01305
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01305
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01305-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01305,vote_lepen_01305,vote_rejet_01305]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01305-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01305,vote_lepenpop_01305,vote_rejetpop_01305]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01305"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01305
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01305
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01305
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01306*/
/*------------------------------------------------------------------ */
async function GraphDATA01306() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[305];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01306.push(vote_macron); 
    vote_lepen_01306.push(vote_lepen);
    vote_rejet_01306.push(vote_rejet);
    vote_macronpop_01306.push(vote_macronMediane);
    vote_lepenpop_01306.push(vote_lepenMediane);
    vote_rejetpop_01306.push(vote_rejetMediane);
    name_Commune_01306.push(nameCommune);
    Pourcentage_01306.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01306.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01306.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01306.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01306.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01306 = [];
const vote_lepen_01306 = [];
const vote_rejet_01306 = [];
const vote_macronpop_01306 = [];
const vote_lepenpop_01306 = [];
const vote_rejetpop_01306 = [];
const name_Commune_01306 = [];
const Pourcentage_01306 = [];
const Pourcentage_rejet_01306 = [];
const vote_gene_macron_01306 = [];
const vote_gene_lepen_01306 = [];
const vote_gene_rejet_01306 = [];

async function chartIt01306(){
    await GraphDATA01306();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01306-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01306
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01306
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01306-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01306,vote_lepen_01306,vote_rejet_01306]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01306-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01306,vote_lepenpop_01306,vote_rejetpop_01306]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01306"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01306
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01306
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01306
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01307*/
/*------------------------------------------------------------------ */
async function GraphDATA01307() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[306];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01307.push(vote_macron); 
    vote_lepen_01307.push(vote_lepen);
    vote_rejet_01307.push(vote_rejet);
    vote_macronpop_01307.push(vote_macronMediane);
    vote_lepenpop_01307.push(vote_lepenMediane);
    vote_rejetpop_01307.push(vote_rejetMediane);
    name_Commune_01307.push(nameCommune);
    Pourcentage_01307.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01307.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01307.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01307.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01307.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01307 = [];
const vote_lepen_01307 = [];
const vote_rejet_01307 = [];
const vote_macronpop_01307 = [];
const vote_lepenpop_01307 = [];
const vote_rejetpop_01307 = [];
const name_Commune_01307 = [];
const Pourcentage_01307 = [];
const Pourcentage_rejet_01307 = [];
const vote_gene_macron_01307 = [];
const vote_gene_lepen_01307 = [];
const vote_gene_rejet_01307 = [];

async function chartIt01307(){
    await GraphDATA01307();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01307-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01307
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01307
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01307-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01307,vote_lepen_01307,vote_rejet_01307]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01307-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01307,vote_lepenpop_01307,vote_rejetpop_01307]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01307"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01307
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01307
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01307
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01308*/
/*------------------------------------------------------------------ */
async function GraphDATA01308() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[307];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01308.push(vote_macron); 
    vote_lepen_01308.push(vote_lepen);
    vote_rejet_01308.push(vote_rejet);
    vote_macronpop_01308.push(vote_macronMediane);
    vote_lepenpop_01308.push(vote_lepenMediane);
    vote_rejetpop_01308.push(vote_rejetMediane);
    name_Commune_01308.push(nameCommune);
    Pourcentage_01308.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01308.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01308.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01308.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01308.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01308 = [];
const vote_lepen_01308 = [];
const vote_rejet_01308 = [];
const vote_macronpop_01308 = [];
const vote_lepenpop_01308 = [];
const vote_rejetpop_01308 = [];
const name_Commune_01308 = [];
const Pourcentage_01308 = [];
const Pourcentage_rejet_01308 = [];
const vote_gene_macron_01308 = [];
const vote_gene_lepen_01308 = [];
const vote_gene_rejet_01308 = [];

async function chartIt01308(){
    await GraphDATA01308();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01308-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01308
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01308
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01308-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01308,vote_lepen_01308,vote_rejet_01308]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01308-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01308,vote_lepenpop_01308,vote_rejetpop_01308]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01308"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01308
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01308
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01308
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01309*/
/*------------------------------------------------------------------ */
async function GraphDATA01309() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[308];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01309.push(vote_macron); 
    vote_lepen_01309.push(vote_lepen);
    vote_rejet_01309.push(vote_rejet);
    vote_macronpop_01309.push(vote_macronMediane);
    vote_lepenpop_01309.push(vote_lepenMediane);
    vote_rejetpop_01309.push(vote_rejetMediane);
    name_Commune_01309.push(nameCommune);
    Pourcentage_01309.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01309.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01309.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01309.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01309.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01309 = [];
const vote_lepen_01309 = [];
const vote_rejet_01309 = [];
const vote_macronpop_01309 = [];
const vote_lepenpop_01309 = [];
const vote_rejetpop_01309 = [];
const name_Commune_01309 = [];
const Pourcentage_01309 = [];
const Pourcentage_rejet_01309 = [];
const vote_gene_macron_01309 = [];
const vote_gene_lepen_01309 = [];
const vote_gene_rejet_01309 = [];

async function chartIt01309(){
    await GraphDATA01309();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01309-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01309
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01309
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01309-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01309,vote_lepen_01309,vote_rejet_01309]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01309-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01309,vote_lepenpop_01309,vote_rejetpop_01309]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01309"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01309
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01309
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01309
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01310*/
/*------------------------------------------------------------------ */
async function GraphDATA01310() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[309];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01310.push(vote_macron); 
    vote_lepen_01310.push(vote_lepen);
    vote_rejet_01310.push(vote_rejet);
    vote_macronpop_01310.push(vote_macronMediane);
    vote_lepenpop_01310.push(vote_lepenMediane);
    vote_rejetpop_01310.push(vote_rejetMediane);
    name_Commune_01310.push(nameCommune);
    Pourcentage_01310.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01310.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01310.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01310.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01310.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01310 = [];
const vote_lepen_01310 = [];
const vote_rejet_01310 = [];
const vote_macronpop_01310 = [];
const vote_lepenpop_01310 = [];
const vote_rejetpop_01310 = [];
const name_Commune_01310 = [];
const Pourcentage_01310 = [];
const Pourcentage_rejet_01310 = [];
const vote_gene_macron_01310 = [];
const vote_gene_lepen_01310 = [];
const vote_gene_rejet_01310 = [];

async function chartIt01310(){
    await GraphDATA01310();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01310-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01310
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01310
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01310-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01310,vote_lepen_01310,vote_rejet_01310]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01310-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01310,vote_lepenpop_01310,vote_rejetpop_01310]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01310"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01310
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01310
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01310
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01311*/
/*------------------------------------------------------------------ */
async function GraphDATA01311() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[310];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01311.push(vote_macron); 
    vote_lepen_01311.push(vote_lepen);
    vote_rejet_01311.push(vote_rejet);
    vote_macronpop_01311.push(vote_macronMediane);
    vote_lepenpop_01311.push(vote_lepenMediane);
    vote_rejetpop_01311.push(vote_rejetMediane);
    name_Commune_01311.push(nameCommune);
    Pourcentage_01311.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01311.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01311.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01311.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01311.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01311 = [];
const vote_lepen_01311 = [];
const vote_rejet_01311 = [];
const vote_macronpop_01311 = [];
const vote_lepenpop_01311 = [];
const vote_rejetpop_01311 = [];
const name_Commune_01311 = [];
const Pourcentage_01311 = [];
const Pourcentage_rejet_01311 = [];
const vote_gene_macron_01311 = [];
const vote_gene_lepen_01311 = [];
const vote_gene_rejet_01311 = [];

async function chartIt01311(){
    await GraphDATA01311();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01311-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01311
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01311
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01311-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01311,vote_lepen_01311,vote_rejet_01311]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01311-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01311,vote_lepenpop_01311,vote_rejetpop_01311]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01311"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01311
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01311
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01311
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01312*/
/*------------------------------------------------------------------ */
async function GraphDATA01312() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[311];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01312.push(vote_macron); 
    vote_lepen_01312.push(vote_lepen);
    vote_rejet_01312.push(vote_rejet);
    vote_macronpop_01312.push(vote_macronMediane);
    vote_lepenpop_01312.push(vote_lepenMediane);
    vote_rejetpop_01312.push(vote_rejetMediane);
    name_Commune_01312.push(nameCommune);
    Pourcentage_01312.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01312.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01312.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01312.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01312.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01312 = [];
const vote_lepen_01312 = [];
const vote_rejet_01312 = [];
const vote_macronpop_01312 = [];
const vote_lepenpop_01312 = [];
const vote_rejetpop_01312 = [];
const name_Commune_01312 = [];
const Pourcentage_01312 = [];
const Pourcentage_rejet_01312 = [];
const vote_gene_macron_01312 = [];
const vote_gene_lepen_01312 = [];
const vote_gene_rejet_01312 = [];

async function chartIt01312(){
    await GraphDATA01312();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01312-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01312
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01312
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01312-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01312,vote_lepen_01312,vote_rejet_01312]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01312-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01312,vote_lepenpop_01312,vote_rejetpop_01312]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01312"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01312
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01312
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01312
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01313*/
/*------------------------------------------------------------------ */
async function GraphDATA01313() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[312];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01313.push(vote_macron); 
    vote_lepen_01313.push(vote_lepen);
    vote_rejet_01313.push(vote_rejet);
    vote_macronpop_01313.push(vote_macronMediane);
    vote_lepenpop_01313.push(vote_lepenMediane);
    vote_rejetpop_01313.push(vote_rejetMediane);
    name_Commune_01313.push(nameCommune);
    Pourcentage_01313.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01313.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01313.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01313.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01313.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01313 = [];
const vote_lepen_01313 = [];
const vote_rejet_01313 = [];
const vote_macronpop_01313 = [];
const vote_lepenpop_01313 = [];
const vote_rejetpop_01313 = [];
const name_Commune_01313 = [];
const Pourcentage_01313 = [];
const Pourcentage_rejet_01313 = [];
const vote_gene_macron_01313 = [];
const vote_gene_lepen_01313 = [];
const vote_gene_rejet_01313 = [];

async function chartIt01313(){
    await GraphDATA01313();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01313-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01313
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01313
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01313-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01313,vote_lepen_01313,vote_rejet_01313]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01313-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01313,vote_lepenpop_01313,vote_rejetpop_01313]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01313"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01313
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01313
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01313
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01314*/
/*------------------------------------------------------------------ */
async function GraphDATA01314() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[313];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01314.push(vote_macron); 
    vote_lepen_01314.push(vote_lepen);
    vote_rejet_01314.push(vote_rejet);
    vote_macronpop_01314.push(vote_macronMediane);
    vote_lepenpop_01314.push(vote_lepenMediane);
    vote_rejetpop_01314.push(vote_rejetMediane);
    name_Commune_01314.push(nameCommune);
    Pourcentage_01314.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01314.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01314.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01314.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01314.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01314 = [];
const vote_lepen_01314 = [];
const vote_rejet_01314 = [];
const vote_macronpop_01314 = [];
const vote_lepenpop_01314 = [];
const vote_rejetpop_01314 = [];
const name_Commune_01314 = [];
const Pourcentage_01314 = [];
const Pourcentage_rejet_01314 = [];
const vote_gene_macron_01314 = [];
const vote_gene_lepen_01314 = [];
const vote_gene_rejet_01314 = [];

async function chartIt01314(){
    await GraphDATA01314();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01314-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01314
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01314
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01314-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01314,vote_lepen_01314,vote_rejet_01314]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01314-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01314,vote_lepenpop_01314,vote_rejetpop_01314]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01314"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01314
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01314
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01314
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01315*/
/*------------------------------------------------------------------ */
async function GraphDATA01315() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[314];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01315.push(vote_macron); 
    vote_lepen_01315.push(vote_lepen);
    vote_rejet_01315.push(vote_rejet);
    vote_macronpop_01315.push(vote_macronMediane);
    vote_lepenpop_01315.push(vote_lepenMediane);
    vote_rejetpop_01315.push(vote_rejetMediane);
    name_Commune_01315.push(nameCommune);
    Pourcentage_01315.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01315.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01315.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01315.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01315.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01315 = [];
const vote_lepen_01315 = [];
const vote_rejet_01315 = [];
const vote_macronpop_01315 = [];
const vote_lepenpop_01315 = [];
const vote_rejetpop_01315 = [];
const name_Commune_01315 = [];
const Pourcentage_01315 = [];
const Pourcentage_rejet_01315 = [];
const vote_gene_macron_01315 = [];
const vote_gene_lepen_01315 = [];
const vote_gene_rejet_01315 = [];

async function chartIt01315(){
    await GraphDATA01315();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01315-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01315
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01315
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01315-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01315,vote_lepen_01315,vote_rejet_01315]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01315-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01315,vote_lepenpop_01315,vote_rejetpop_01315]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01315"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01315
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01315
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01315
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01316*/
/*------------------------------------------------------------------ */
async function GraphDATA01316() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[315];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01316.push(vote_macron); 
    vote_lepen_01316.push(vote_lepen);
    vote_rejet_01316.push(vote_rejet);
    vote_macronpop_01316.push(vote_macronMediane);
    vote_lepenpop_01316.push(vote_lepenMediane);
    vote_rejetpop_01316.push(vote_rejetMediane);
    name_Commune_01316.push(nameCommune);
    Pourcentage_01316.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01316.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01316.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01316.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01316.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01316 = [];
const vote_lepen_01316 = [];
const vote_rejet_01316 = [];
const vote_macronpop_01316 = [];
const vote_lepenpop_01316 = [];
const vote_rejetpop_01316 = [];
const name_Commune_01316 = [];
const Pourcentage_01316 = [];
const Pourcentage_rejet_01316 = [];
const vote_gene_macron_01316 = [];
const vote_gene_lepen_01316 = [];
const vote_gene_rejet_01316 = [];

async function chartIt01316(){
    await GraphDATA01316();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01316-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01316
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01316
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01316-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01316,vote_lepen_01316,vote_rejet_01316]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01316-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01316,vote_lepenpop_01316,vote_rejetpop_01316]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01316"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01316
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01316
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01316
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01317*/
/*------------------------------------------------------------------ */
async function GraphDATA01317() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[316];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01317.push(vote_macron); 
    vote_lepen_01317.push(vote_lepen);
    vote_rejet_01317.push(vote_rejet);
    vote_macronpop_01317.push(vote_macronMediane);
    vote_lepenpop_01317.push(vote_lepenMediane);
    vote_rejetpop_01317.push(vote_rejetMediane);
    name_Commune_01317.push(nameCommune);
    Pourcentage_01317.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01317.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01317.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01317.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01317.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01317 = [];
const vote_lepen_01317 = [];
const vote_rejet_01317 = [];
const vote_macronpop_01317 = [];
const vote_lepenpop_01317 = [];
const vote_rejetpop_01317 = [];
const name_Commune_01317 = [];
const Pourcentage_01317 = [];
const Pourcentage_rejet_01317 = [];
const vote_gene_macron_01317 = [];
const vote_gene_lepen_01317 = [];
const vote_gene_rejet_01317 = [];

async function chartIt01317(){
    await GraphDATA01317();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01317-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01317
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01317
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01317-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01317,vote_lepen_01317,vote_rejet_01317]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01317-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01317,vote_lepenpop_01317,vote_rejetpop_01317]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01317"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01317
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01317
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01317
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01318*/
/*------------------------------------------------------------------ */
async function GraphDATA01318() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[317];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01318.push(vote_macron); 
    vote_lepen_01318.push(vote_lepen);
    vote_rejet_01318.push(vote_rejet);
    vote_macronpop_01318.push(vote_macronMediane);
    vote_lepenpop_01318.push(vote_lepenMediane);
    vote_rejetpop_01318.push(vote_rejetMediane);
    name_Commune_01318.push(nameCommune);
    Pourcentage_01318.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01318.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01318.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01318.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01318.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01318 = [];
const vote_lepen_01318 = [];
const vote_rejet_01318 = [];
const vote_macronpop_01318 = [];
const vote_lepenpop_01318 = [];
const vote_rejetpop_01318 = [];
const name_Commune_01318 = [];
const Pourcentage_01318 = [];
const Pourcentage_rejet_01318 = [];
const vote_gene_macron_01318 = [];
const vote_gene_lepen_01318 = [];
const vote_gene_rejet_01318 = [];

async function chartIt01318(){
    await GraphDATA01318();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01318-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01318
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01318
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01318-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01318,vote_lepen_01318,vote_rejet_01318]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01318-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01318,vote_lepenpop_01318,vote_rejetpop_01318]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01318"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01318
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01318
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01318
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01319*/
/*------------------------------------------------------------------ */
async function GraphDATA01319() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[318];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01319.push(vote_macron); 
    vote_lepen_01319.push(vote_lepen);
    vote_rejet_01319.push(vote_rejet);
    vote_macronpop_01319.push(vote_macronMediane);
    vote_lepenpop_01319.push(vote_lepenMediane);
    vote_rejetpop_01319.push(vote_rejetMediane);
    name_Commune_01319.push(nameCommune);
    Pourcentage_01319.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01319.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01319.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01319.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01319.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01319 = [];
const vote_lepen_01319 = [];
const vote_rejet_01319 = [];
const vote_macronpop_01319 = [];
const vote_lepenpop_01319 = [];
const vote_rejetpop_01319 = [];
const name_Commune_01319 = [];
const Pourcentage_01319 = [];
const Pourcentage_rejet_01319 = [];
const vote_gene_macron_01319 = [];
const vote_gene_lepen_01319 = [];
const vote_gene_rejet_01319 = [];

async function chartIt01319(){
    await GraphDATA01319();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01319-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01319
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01319
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01319-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01319,vote_lepen_01319,vote_rejet_01319]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01319-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01319,vote_lepenpop_01319,vote_rejetpop_01319]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01319"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01319
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01319
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01319
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01320*/
/*------------------------------------------------------------------ */
async function GraphDATA01320() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[319];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01320.push(vote_macron); 
    vote_lepen_01320.push(vote_lepen);
    vote_rejet_01320.push(vote_rejet);
    vote_macronpop_01320.push(vote_macronMediane);
    vote_lepenpop_01320.push(vote_lepenMediane);
    vote_rejetpop_01320.push(vote_rejetMediane);
    name_Commune_01320.push(nameCommune);
    Pourcentage_01320.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01320.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01320.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01320.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01320.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01320 = [];
const vote_lepen_01320 = [];
const vote_rejet_01320 = [];
const vote_macronpop_01320 = [];
const vote_lepenpop_01320 = [];
const vote_rejetpop_01320 = [];
const name_Commune_01320 = [];
const Pourcentage_01320 = [];
const Pourcentage_rejet_01320 = [];
const vote_gene_macron_01320 = [];
const vote_gene_lepen_01320 = [];
const vote_gene_rejet_01320 = [];

async function chartIt01320(){
    await GraphDATA01320();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01320-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01320
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01320
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01320-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01320,vote_lepen_01320,vote_rejet_01320]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01320-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01320,vote_lepenpop_01320,vote_rejetpop_01320]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01320"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01320
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01320
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01320
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01321*/
/*------------------------------------------------------------------ */
async function GraphDATA01321() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[320];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01321.push(vote_macron); 
    vote_lepen_01321.push(vote_lepen);
    vote_rejet_01321.push(vote_rejet);
    vote_macronpop_01321.push(vote_macronMediane);
    vote_lepenpop_01321.push(vote_lepenMediane);
    vote_rejetpop_01321.push(vote_rejetMediane);
    name_Commune_01321.push(nameCommune);
    Pourcentage_01321.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01321.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01321.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01321.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01321.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01321 = [];
const vote_lepen_01321 = [];
const vote_rejet_01321 = [];
const vote_macronpop_01321 = [];
const vote_lepenpop_01321 = [];
const vote_rejetpop_01321 = [];
const name_Commune_01321 = [];
const Pourcentage_01321 = [];
const Pourcentage_rejet_01321 = [];
const vote_gene_macron_01321 = [];
const vote_gene_lepen_01321 = [];
const vote_gene_rejet_01321 = [];

async function chartIt01321(){
    await GraphDATA01321();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01321-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01321
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01321
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01321-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01321,vote_lepen_01321,vote_rejet_01321]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01321-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01321,vote_lepenpop_01321,vote_rejetpop_01321]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01321"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01321
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01321
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01321
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01322*/
/*------------------------------------------------------------------ */
async function GraphDATA01322() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[321];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01322.push(vote_macron); 
    vote_lepen_01322.push(vote_lepen);
    vote_rejet_01322.push(vote_rejet);
    vote_macronpop_01322.push(vote_macronMediane);
    vote_lepenpop_01322.push(vote_lepenMediane);
    vote_rejetpop_01322.push(vote_rejetMediane);
    name_Commune_01322.push(nameCommune);
    Pourcentage_01322.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01322.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01322.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01322.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01322.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01322 = [];
const vote_lepen_01322 = [];
const vote_rejet_01322 = [];
const vote_macronpop_01322 = [];
const vote_lepenpop_01322 = [];
const vote_rejetpop_01322 = [];
const name_Commune_01322 = [];
const Pourcentage_01322 = [];
const Pourcentage_rejet_01322 = [];
const vote_gene_macron_01322 = [];
const vote_gene_lepen_01322 = [];
const vote_gene_rejet_01322 = [];

async function chartIt01322(){
    await GraphDATA01322();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01322-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01322
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01322
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01322-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01322,vote_lepen_01322,vote_rejet_01322]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01322-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01322,vote_lepenpop_01322,vote_rejetpop_01322]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01322"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01322
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01322
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01322
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01323*/
/*------------------------------------------------------------------ */
async function GraphDATA01323() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[322];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01323.push(vote_macron); 
    vote_lepen_01323.push(vote_lepen);
    vote_rejet_01323.push(vote_rejet);
    vote_macronpop_01323.push(vote_macronMediane);
    vote_lepenpop_01323.push(vote_lepenMediane);
    vote_rejetpop_01323.push(vote_rejetMediane);
    name_Commune_01323.push(nameCommune);
    Pourcentage_01323.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01323.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01323.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01323.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01323.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01323 = [];
const vote_lepen_01323 = [];
const vote_rejet_01323 = [];
const vote_macronpop_01323 = [];
const vote_lepenpop_01323 = [];
const vote_rejetpop_01323 = [];
const name_Commune_01323 = [];
const Pourcentage_01323 = [];
const Pourcentage_rejet_01323 = [];
const vote_gene_macron_01323 = [];
const vote_gene_lepen_01323 = [];
const vote_gene_rejet_01323 = [];

async function chartIt01323(){
    await GraphDATA01323();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01323-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01323
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01323
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01323-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01323,vote_lepen_01323,vote_rejet_01323]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01323-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01323,vote_lepenpop_01323,vote_rejetpop_01323]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01323"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01323
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01323
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01323
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01324*/
/*------------------------------------------------------------------ */
async function GraphDATA01324() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[323];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01324.push(vote_macron); 
    vote_lepen_01324.push(vote_lepen);
    vote_rejet_01324.push(vote_rejet);
    vote_macronpop_01324.push(vote_macronMediane);
    vote_lepenpop_01324.push(vote_lepenMediane);
    vote_rejetpop_01324.push(vote_rejetMediane);
    name_Commune_01324.push(nameCommune);
    Pourcentage_01324.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01324.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01324.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01324.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01324.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01324 = [];
const vote_lepen_01324 = [];
const vote_rejet_01324 = [];
const vote_macronpop_01324 = [];
const vote_lepenpop_01324 = [];
const vote_rejetpop_01324 = [];
const name_Commune_01324 = [];
const Pourcentage_01324 = [];
const Pourcentage_rejet_01324 = [];
const vote_gene_macron_01324 = [];
const vote_gene_lepen_01324 = [];
const vote_gene_rejet_01324 = [];

async function chartIt01324(){
    await GraphDATA01324();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01324-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01324
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01324
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01324-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01324,vote_lepen_01324,vote_rejet_01324]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01324-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01324,vote_lepenpop_01324,vote_rejetpop_01324]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01324"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01324
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01324
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01324
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01325*/
/*------------------------------------------------------------------ */
async function GraphDATA01325() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[324];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01325.push(vote_macron); 
    vote_lepen_01325.push(vote_lepen);
    vote_rejet_01325.push(vote_rejet);
    vote_macronpop_01325.push(vote_macronMediane);
    vote_lepenpop_01325.push(vote_lepenMediane);
    vote_rejetpop_01325.push(vote_rejetMediane);
    name_Commune_01325.push(nameCommune);
    Pourcentage_01325.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01325.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01325.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01325.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01325.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01325 = [];
const vote_lepen_01325 = [];
const vote_rejet_01325 = [];
const vote_macronpop_01325 = [];
const vote_lepenpop_01325 = [];
const vote_rejetpop_01325 = [];
const name_Commune_01325 = [];
const Pourcentage_01325 = [];
const Pourcentage_rejet_01325 = [];
const vote_gene_macron_01325 = [];
const vote_gene_lepen_01325 = [];
const vote_gene_rejet_01325 = [];

async function chartIt01325(){
    await GraphDATA01325();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01325-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01325
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01325
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01325-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01325,vote_lepen_01325,vote_rejet_01325]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01325-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01325,vote_lepenpop_01325,vote_rejetpop_01325]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01325"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01325
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01325
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01325
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01326*/
/*------------------------------------------------------------------ */
async function GraphDATA01326() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[325];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01326.push(vote_macron); 
    vote_lepen_01326.push(vote_lepen);
    vote_rejet_01326.push(vote_rejet);
    vote_macronpop_01326.push(vote_macronMediane);
    vote_lepenpop_01326.push(vote_lepenMediane);
    vote_rejetpop_01326.push(vote_rejetMediane);
    name_Commune_01326.push(nameCommune);
    Pourcentage_01326.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01326.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01326.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01326.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01326.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01326 = [];
const vote_lepen_01326 = [];
const vote_rejet_01326 = [];
const vote_macronpop_01326 = [];
const vote_lepenpop_01326 = [];
const vote_rejetpop_01326 = [];
const name_Commune_01326 = [];
const Pourcentage_01326 = [];
const Pourcentage_rejet_01326 = [];
const vote_gene_macron_01326 = [];
const vote_gene_lepen_01326 = [];
const vote_gene_rejet_01326 = [];

async function chartIt01326(){
    await GraphDATA01326();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01326-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01326
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01326
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01326-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01326,vote_lepen_01326,vote_rejet_01326]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01326-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01326,vote_lepenpop_01326,vote_rejetpop_01326]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01326"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01326
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01326
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01326
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01327*/
/*------------------------------------------------------------------ */
async function GraphDATA01327() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[326];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01327.push(vote_macron); 
    vote_lepen_01327.push(vote_lepen);
    vote_rejet_01327.push(vote_rejet);
    vote_macronpop_01327.push(vote_macronMediane);
    vote_lepenpop_01327.push(vote_lepenMediane);
    vote_rejetpop_01327.push(vote_rejetMediane);
    name_Commune_01327.push(nameCommune);
    Pourcentage_01327.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01327.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01327.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01327.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01327.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01327 = [];
const vote_lepen_01327 = [];
const vote_rejet_01327 = [];
const vote_macronpop_01327 = [];
const vote_lepenpop_01327 = [];
const vote_rejetpop_01327 = [];
const name_Commune_01327 = [];
const Pourcentage_01327 = [];
const Pourcentage_rejet_01327 = [];
const vote_gene_macron_01327 = [];
const vote_gene_lepen_01327 = [];
const vote_gene_rejet_01327 = [];

async function chartIt01327(){
    await GraphDATA01327();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01327-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01327
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01327
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01327-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01327,vote_lepen_01327,vote_rejet_01327]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01327-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01327,vote_lepenpop_01327,vote_rejetpop_01327]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01327"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01327
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01327
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01327
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01328*/
/*------------------------------------------------------------------ */
async function GraphDATA01328() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[327];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01328.push(vote_macron); 
    vote_lepen_01328.push(vote_lepen);
    vote_rejet_01328.push(vote_rejet);
    vote_macronpop_01328.push(vote_macronMediane);
    vote_lepenpop_01328.push(vote_lepenMediane);
    vote_rejetpop_01328.push(vote_rejetMediane);
    name_Commune_01328.push(nameCommune);
    Pourcentage_01328.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01328.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01328.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01328.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01328.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01328 = [];
const vote_lepen_01328 = [];
const vote_rejet_01328 = [];
const vote_macronpop_01328 = [];
const vote_lepenpop_01328 = [];
const vote_rejetpop_01328 = [];
const name_Commune_01328 = [];
const Pourcentage_01328 = [];
const Pourcentage_rejet_01328 = [];
const vote_gene_macron_01328 = [];
const vote_gene_lepen_01328 = [];
const vote_gene_rejet_01328 = [];

async function chartIt01328(){
    await GraphDATA01328();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01328-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01328
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01328
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01328-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01328,vote_lepen_01328,vote_rejet_01328]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01328-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01328,vote_lepenpop_01328,vote_rejetpop_01328]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01328"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01328
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01328
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01328
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01329*/
/*------------------------------------------------------------------ */
async function GraphDATA01329() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[328];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01329.push(vote_macron); 
    vote_lepen_01329.push(vote_lepen);
    vote_rejet_01329.push(vote_rejet);
    vote_macronpop_01329.push(vote_macronMediane);
    vote_lepenpop_01329.push(vote_lepenMediane);
    vote_rejetpop_01329.push(vote_rejetMediane);
    name_Commune_01329.push(nameCommune);
    Pourcentage_01329.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01329.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01329.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01329.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01329.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01329 = [];
const vote_lepen_01329 = [];
const vote_rejet_01329 = [];
const vote_macronpop_01329 = [];
const vote_lepenpop_01329 = [];
const vote_rejetpop_01329 = [];
const name_Commune_01329 = [];
const Pourcentage_01329 = [];
const Pourcentage_rejet_01329 = [];
const vote_gene_macron_01329 = [];
const vote_gene_lepen_01329 = [];
const vote_gene_rejet_01329 = [];

async function chartIt01329(){
    await GraphDATA01329();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01329-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01329
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01329
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01329-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01329,vote_lepen_01329,vote_rejet_01329]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01329-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01329,vote_lepenpop_01329,vote_rejetpop_01329]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01329"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01329
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01329
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01329
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01330*/
/*------------------------------------------------------------------ */
async function GraphDATA01330() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[329];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01330.push(vote_macron); 
    vote_lepen_01330.push(vote_lepen);
    vote_rejet_01330.push(vote_rejet);
    vote_macronpop_01330.push(vote_macronMediane);
    vote_lepenpop_01330.push(vote_lepenMediane);
    vote_rejetpop_01330.push(vote_rejetMediane);
    name_Commune_01330.push(nameCommune);
    Pourcentage_01330.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01330.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01330.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01330.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01330.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01330 = [];
const vote_lepen_01330 = [];
const vote_rejet_01330 = [];
const vote_macronpop_01330 = [];
const vote_lepenpop_01330 = [];
const vote_rejetpop_01330 = [];
const name_Commune_01330 = [];
const Pourcentage_01330 = [];
const Pourcentage_rejet_01330 = [];
const vote_gene_macron_01330 = [];
const vote_gene_lepen_01330 = [];
const vote_gene_rejet_01330 = [];

async function chartIt01330(){
    await GraphDATA01330();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01330-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01330
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01330
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01330-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01330,vote_lepen_01330,vote_rejet_01330]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01330-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01330,vote_lepenpop_01330,vote_rejetpop_01330]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01330"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01330
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01330
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01330
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01331*/
/*------------------------------------------------------------------ */
async function GraphDATA01331() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[330];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01331.push(vote_macron); 
    vote_lepen_01331.push(vote_lepen);
    vote_rejet_01331.push(vote_rejet);
    vote_macronpop_01331.push(vote_macronMediane);
    vote_lepenpop_01331.push(vote_lepenMediane);
    vote_rejetpop_01331.push(vote_rejetMediane);
    name_Commune_01331.push(nameCommune);
    Pourcentage_01331.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01331.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01331.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01331.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01331.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01331 = [];
const vote_lepen_01331 = [];
const vote_rejet_01331 = [];
const vote_macronpop_01331 = [];
const vote_lepenpop_01331 = [];
const vote_rejetpop_01331 = [];
const name_Commune_01331 = [];
const Pourcentage_01331 = [];
const Pourcentage_rejet_01331 = [];
const vote_gene_macron_01331 = [];
const vote_gene_lepen_01331 = [];
const vote_gene_rejet_01331 = [];

async function chartIt01331(){
    await GraphDATA01331();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01331-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01331
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01331
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01331-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01331,vote_lepen_01331,vote_rejet_01331]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01331-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01331,vote_lepenpop_01331,vote_rejetpop_01331]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01331"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01331
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01331
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01331
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01332*/
/*------------------------------------------------------------------ */
async function GraphDATA01332() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[331];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01332.push(vote_macron); 
    vote_lepen_01332.push(vote_lepen);
    vote_rejet_01332.push(vote_rejet);
    vote_macronpop_01332.push(vote_macronMediane);
    vote_lepenpop_01332.push(vote_lepenMediane);
    vote_rejetpop_01332.push(vote_rejetMediane);
    name_Commune_01332.push(nameCommune);
    Pourcentage_01332.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01332.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01332.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01332.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01332.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01332 = [];
const vote_lepen_01332 = [];
const vote_rejet_01332 = [];
const vote_macronpop_01332 = [];
const vote_lepenpop_01332 = [];
const vote_rejetpop_01332 = [];
const name_Commune_01332 = [];
const Pourcentage_01332 = [];
const Pourcentage_rejet_01332 = [];
const vote_gene_macron_01332 = [];
const vote_gene_lepen_01332 = [];
const vote_gene_rejet_01332 = [];

async function chartIt01332(){
    await GraphDATA01332();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01332-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01332
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01332
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01332-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01332,vote_lepen_01332,vote_rejet_01332]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01332-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01332,vote_lepenpop_01332,vote_rejetpop_01332]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01332"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01332
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01332
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01332
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01333*/
/*------------------------------------------------------------------ */
async function GraphDATA01333() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[332];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01333.push(vote_macron); 
    vote_lepen_01333.push(vote_lepen);
    vote_rejet_01333.push(vote_rejet);
    vote_macronpop_01333.push(vote_macronMediane);
    vote_lepenpop_01333.push(vote_lepenMediane);
    vote_rejetpop_01333.push(vote_rejetMediane);
    name_Commune_01333.push(nameCommune);
    Pourcentage_01333.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01333.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01333.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01333.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01333.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01333 = [];
const vote_lepen_01333 = [];
const vote_rejet_01333 = [];
const vote_macronpop_01333 = [];
const vote_lepenpop_01333 = [];
const vote_rejetpop_01333 = [];
const name_Commune_01333 = [];
const Pourcentage_01333 = [];
const Pourcentage_rejet_01333 = [];
const vote_gene_macron_01333 = [];
const vote_gene_lepen_01333 = [];
const vote_gene_rejet_01333 = [];

async function chartIt01333(){
    await GraphDATA01333();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01333-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01333
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01333
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01333-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01333,vote_lepen_01333,vote_rejet_01333]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01333-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01333,vote_lepenpop_01333,vote_rejetpop_01333]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01333"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01333
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01333
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01333
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01334*/
/*------------------------------------------------------------------ */
async function GraphDATA01334() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[333];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01334.push(vote_macron); 
    vote_lepen_01334.push(vote_lepen);
    vote_rejet_01334.push(vote_rejet);
    vote_macronpop_01334.push(vote_macronMediane);
    vote_lepenpop_01334.push(vote_lepenMediane);
    vote_rejetpop_01334.push(vote_rejetMediane);
    name_Commune_01334.push(nameCommune);
    Pourcentage_01334.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01334.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01334.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01334.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01334.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01334 = [];
const vote_lepen_01334 = [];
const vote_rejet_01334 = [];
const vote_macronpop_01334 = [];
const vote_lepenpop_01334 = [];
const vote_rejetpop_01334 = [];
const name_Commune_01334 = [];
const Pourcentage_01334 = [];
const Pourcentage_rejet_01334 = [];
const vote_gene_macron_01334 = [];
const vote_gene_lepen_01334 = [];
const vote_gene_rejet_01334 = [];

async function chartIt01334(){
    await GraphDATA01334();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01334-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01334
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01334
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01334-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01334,vote_lepen_01334,vote_rejet_01334]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01334-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01334,vote_lepenpop_01334,vote_rejetpop_01334]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01334"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01334
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01334
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01334
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01335*/
/*------------------------------------------------------------------ */
async function GraphDATA01335() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[334];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01335.push(vote_macron); 
    vote_lepen_01335.push(vote_lepen);
    vote_rejet_01335.push(vote_rejet);
    vote_macronpop_01335.push(vote_macronMediane);
    vote_lepenpop_01335.push(vote_lepenMediane);
    vote_rejetpop_01335.push(vote_rejetMediane);
    name_Commune_01335.push(nameCommune);
    Pourcentage_01335.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01335.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01335.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01335.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01335.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01335 = [];
const vote_lepen_01335 = [];
const vote_rejet_01335 = [];
const vote_macronpop_01335 = [];
const vote_lepenpop_01335 = [];
const vote_rejetpop_01335 = [];
const name_Commune_01335 = [];
const Pourcentage_01335 = [];
const Pourcentage_rejet_01335 = [];
const vote_gene_macron_01335 = [];
const vote_gene_lepen_01335 = [];
const vote_gene_rejet_01335 = [];

async function chartIt01335(){
    await GraphDATA01335();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01335-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01335
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01335
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01335-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01335,vote_lepen_01335,vote_rejet_01335]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01335-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01335,vote_lepenpop_01335,vote_rejetpop_01335]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01335"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01335
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01335
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01335
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01336*/
/*------------------------------------------------------------------ */
async function GraphDATA01336() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[335];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01336.push(vote_macron); 
    vote_lepen_01336.push(vote_lepen);
    vote_rejet_01336.push(vote_rejet);
    vote_macronpop_01336.push(vote_macronMediane);
    vote_lepenpop_01336.push(vote_lepenMediane);
    vote_rejetpop_01336.push(vote_rejetMediane);
    name_Commune_01336.push(nameCommune);
    Pourcentage_01336.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01336.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01336.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01336.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01336.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01336 = [];
const vote_lepen_01336 = [];
const vote_rejet_01336 = [];
const vote_macronpop_01336 = [];
const vote_lepenpop_01336 = [];
const vote_rejetpop_01336 = [];
const name_Commune_01336 = [];
const Pourcentage_01336 = [];
const Pourcentage_rejet_01336 = [];
const vote_gene_macron_01336 = [];
const vote_gene_lepen_01336 = [];
const vote_gene_rejet_01336 = [];

async function chartIt01336(){
    await GraphDATA01336();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01336-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01336
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01336
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01336-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01336,vote_lepen_01336,vote_rejet_01336]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01336-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01336,vote_lepenpop_01336,vote_rejetpop_01336]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01336"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01336
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01336
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01336
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01337*/
/*------------------------------------------------------------------ */
async function GraphDATA01337() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[336];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01337.push(vote_macron); 
    vote_lepen_01337.push(vote_lepen);
    vote_rejet_01337.push(vote_rejet);
    vote_macronpop_01337.push(vote_macronMediane);
    vote_lepenpop_01337.push(vote_lepenMediane);
    vote_rejetpop_01337.push(vote_rejetMediane);
    name_Commune_01337.push(nameCommune);
    Pourcentage_01337.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01337.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01337.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01337.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01337.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01337 = [];
const vote_lepen_01337 = [];
const vote_rejet_01337 = [];
const vote_macronpop_01337 = [];
const vote_lepenpop_01337 = [];
const vote_rejetpop_01337 = [];
const name_Commune_01337 = [];
const Pourcentage_01337 = [];
const Pourcentage_rejet_01337 = [];
const vote_gene_macron_01337 = [];
const vote_gene_lepen_01337 = [];
const vote_gene_rejet_01337 = [];

async function chartIt01337(){
    await GraphDATA01337();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01337-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01337
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01337
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01337-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01337,vote_lepen_01337,vote_rejet_01337]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01337-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01337,vote_lepenpop_01337,vote_rejetpop_01337]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01337"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01337
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01337
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01337
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01338*/
/*------------------------------------------------------------------ */
async function GraphDATA01338() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[337];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01338.push(vote_macron); 
    vote_lepen_01338.push(vote_lepen);
    vote_rejet_01338.push(vote_rejet);
    vote_macronpop_01338.push(vote_macronMediane);
    vote_lepenpop_01338.push(vote_lepenMediane);
    vote_rejetpop_01338.push(vote_rejetMediane);
    name_Commune_01338.push(nameCommune);
    Pourcentage_01338.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01338.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01338.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01338.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01338.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01338 = [];
const vote_lepen_01338 = [];
const vote_rejet_01338 = [];
const vote_macronpop_01338 = [];
const vote_lepenpop_01338 = [];
const vote_rejetpop_01338 = [];
const name_Commune_01338 = [];
const Pourcentage_01338 = [];
const Pourcentage_rejet_01338 = [];
const vote_gene_macron_01338 = [];
const vote_gene_lepen_01338 = [];
const vote_gene_rejet_01338 = [];

async function chartIt01338(){
    await GraphDATA01338();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01338-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01338
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01338
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01338-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01338,vote_lepen_01338,vote_rejet_01338]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01338-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01338,vote_lepenpop_01338,vote_rejetpop_01338]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01338"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01338
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01338
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01338
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01339*/
/*------------------------------------------------------------------ */
async function GraphDATA01339() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[338];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01339.push(vote_macron); 
    vote_lepen_01339.push(vote_lepen);
    vote_rejet_01339.push(vote_rejet);
    vote_macronpop_01339.push(vote_macronMediane);
    vote_lepenpop_01339.push(vote_lepenMediane);
    vote_rejetpop_01339.push(vote_rejetMediane);
    name_Commune_01339.push(nameCommune);
    Pourcentage_01339.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01339.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01339.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01339.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01339.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01339 = [];
const vote_lepen_01339 = [];
const vote_rejet_01339 = [];
const vote_macronpop_01339 = [];
const vote_lepenpop_01339 = [];
const vote_rejetpop_01339 = [];
const name_Commune_01339 = [];
const Pourcentage_01339 = [];
const Pourcentage_rejet_01339 = [];
const vote_gene_macron_01339 = [];
const vote_gene_lepen_01339 = [];
const vote_gene_rejet_01339 = [];

async function chartIt01339(){
    await GraphDATA01339();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01339-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01339
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01339
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01339-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01339,vote_lepen_01339,vote_rejet_01339]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01339-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01339,vote_lepenpop_01339,vote_rejetpop_01339]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01339"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01339
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01339
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01339
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01340*/
/*------------------------------------------------------------------ */
async function GraphDATA01340() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[339];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01340.push(vote_macron); 
    vote_lepen_01340.push(vote_lepen);
    vote_rejet_01340.push(vote_rejet);
    vote_macronpop_01340.push(vote_macronMediane);
    vote_lepenpop_01340.push(vote_lepenMediane);
    vote_rejetpop_01340.push(vote_rejetMediane);
    name_Commune_01340.push(nameCommune);
    Pourcentage_01340.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01340.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01340.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01340.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01340.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01340 = [];
const vote_lepen_01340 = [];
const vote_rejet_01340 = [];
const vote_macronpop_01340 = [];
const vote_lepenpop_01340 = [];
const vote_rejetpop_01340 = [];
const name_Commune_01340 = [];
const Pourcentage_01340 = [];
const Pourcentage_rejet_01340 = [];
const vote_gene_macron_01340 = [];
const vote_gene_lepen_01340 = [];
const vote_gene_rejet_01340 = [];

async function chartIt01340(){
    await GraphDATA01340();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01340-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01340
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01340
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01340-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01340,vote_lepen_01340,vote_rejet_01340]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01340-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01340,vote_lepenpop_01340,vote_rejetpop_01340]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01340"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01340
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01340
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01340
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01341*/
/*------------------------------------------------------------------ */
async function GraphDATA01341() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[340];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01341.push(vote_macron); 
    vote_lepen_01341.push(vote_lepen);
    vote_rejet_01341.push(vote_rejet);
    vote_macronpop_01341.push(vote_macronMediane);
    vote_lepenpop_01341.push(vote_lepenMediane);
    vote_rejetpop_01341.push(vote_rejetMediane);
    name_Commune_01341.push(nameCommune);
    Pourcentage_01341.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01341.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01341.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01341.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01341.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01341 = [];
const vote_lepen_01341 = [];
const vote_rejet_01341 = [];
const vote_macronpop_01341 = [];
const vote_lepenpop_01341 = [];
const vote_rejetpop_01341 = [];
const name_Commune_01341 = [];
const Pourcentage_01341 = [];
const Pourcentage_rejet_01341 = [];
const vote_gene_macron_01341 = [];
const vote_gene_lepen_01341 = [];
const vote_gene_rejet_01341 = [];

async function chartIt01341(){
    await GraphDATA01341();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01341-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01341
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01341
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01341-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01341,vote_lepen_01341,vote_rejet_01341]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01341-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01341,vote_lepenpop_01341,vote_rejetpop_01341]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01341"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01341
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01341
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01341
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01342*/
/*------------------------------------------------------------------ */
async function GraphDATA01342() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[341];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01342.push(vote_macron); 
    vote_lepen_01342.push(vote_lepen);
    vote_rejet_01342.push(vote_rejet);
    vote_macronpop_01342.push(vote_macronMediane);
    vote_lepenpop_01342.push(vote_lepenMediane);
    vote_rejetpop_01342.push(vote_rejetMediane);
    name_Commune_01342.push(nameCommune);
    Pourcentage_01342.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01342.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01342.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01342.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01342.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01342 = [];
const vote_lepen_01342 = [];
const vote_rejet_01342 = [];
const vote_macronpop_01342 = [];
const vote_lepenpop_01342 = [];
const vote_rejetpop_01342 = [];
const name_Commune_01342 = [];
const Pourcentage_01342 = [];
const Pourcentage_rejet_01342 = [];
const vote_gene_macron_01342 = [];
const vote_gene_lepen_01342 = [];
const vote_gene_rejet_01342 = [];

async function chartIt01342(){
    await GraphDATA01342();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01342-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01342
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01342
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01342-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01342,vote_lepen_01342,vote_rejet_01342]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01342-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01342,vote_lepenpop_01342,vote_rejetpop_01342]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01342"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01342
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01342
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01342
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01343*/
/*------------------------------------------------------------------ */
async function GraphDATA01343() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[342];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01343.push(vote_macron); 
    vote_lepen_01343.push(vote_lepen);
    vote_rejet_01343.push(vote_rejet);
    vote_macronpop_01343.push(vote_macronMediane);
    vote_lepenpop_01343.push(vote_lepenMediane);
    vote_rejetpop_01343.push(vote_rejetMediane);
    name_Commune_01343.push(nameCommune);
    Pourcentage_01343.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01343.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01343.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01343.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01343.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01343 = [];
const vote_lepen_01343 = [];
const vote_rejet_01343 = [];
const vote_macronpop_01343 = [];
const vote_lepenpop_01343 = [];
const vote_rejetpop_01343 = [];
const name_Commune_01343 = [];
const Pourcentage_01343 = [];
const Pourcentage_rejet_01343 = [];
const vote_gene_macron_01343 = [];
const vote_gene_lepen_01343 = [];
const vote_gene_rejet_01343 = [];

async function chartIt01343(){
    await GraphDATA01343();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01343-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01343
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01343
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01343-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01343,vote_lepen_01343,vote_rejet_01343]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01343-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01343,vote_lepenpop_01343,vote_rejetpop_01343]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01343"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01343
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01343
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01343
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01344*/
/*------------------------------------------------------------------ */
async function GraphDATA01344() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[343];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01344.push(vote_macron); 
    vote_lepen_01344.push(vote_lepen);
    vote_rejet_01344.push(vote_rejet);
    vote_macronpop_01344.push(vote_macronMediane);
    vote_lepenpop_01344.push(vote_lepenMediane);
    vote_rejetpop_01344.push(vote_rejetMediane);
    name_Commune_01344.push(nameCommune);
    Pourcentage_01344.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01344.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01344.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01344.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01344.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01344 = [];
const vote_lepen_01344 = [];
const vote_rejet_01344 = [];
const vote_macronpop_01344 = [];
const vote_lepenpop_01344 = [];
const vote_rejetpop_01344 = [];
const name_Commune_01344 = [];
const Pourcentage_01344 = [];
const Pourcentage_rejet_01344 = [];
const vote_gene_macron_01344 = [];
const vote_gene_lepen_01344 = [];
const vote_gene_rejet_01344 = [];

async function chartIt01344(){
    await GraphDATA01344();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01344-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01344
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01344
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01344-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01344,vote_lepen_01344,vote_rejet_01344]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01344-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01344,vote_lepenpop_01344,vote_rejetpop_01344]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01344"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01344
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01344
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01344
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01345*/
/*------------------------------------------------------------------ */
async function GraphDATA01345() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[344];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01345.push(vote_macron); 
    vote_lepen_01345.push(vote_lepen);
    vote_rejet_01345.push(vote_rejet);
    vote_macronpop_01345.push(vote_macronMediane);
    vote_lepenpop_01345.push(vote_lepenMediane);
    vote_rejetpop_01345.push(vote_rejetMediane);
    name_Commune_01345.push(nameCommune);
    Pourcentage_01345.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01345.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01345.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01345.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01345.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01345 = [];
const vote_lepen_01345 = [];
const vote_rejet_01345 = [];
const vote_macronpop_01345 = [];
const vote_lepenpop_01345 = [];
const vote_rejetpop_01345 = [];
const name_Commune_01345 = [];
const Pourcentage_01345 = [];
const Pourcentage_rejet_01345 = [];
const vote_gene_macron_01345 = [];
const vote_gene_lepen_01345 = [];
const vote_gene_rejet_01345 = [];

async function chartIt01345(){
    await GraphDATA01345();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01345-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01345
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01345
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01345-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01345,vote_lepen_01345,vote_rejet_01345]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01345-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01345,vote_lepenpop_01345,vote_rejetpop_01345]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01345"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01345
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01345
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01345
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01346*/
/*------------------------------------------------------------------ */
async function GraphDATA01346() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[345];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01346.push(vote_macron); 
    vote_lepen_01346.push(vote_lepen);
    vote_rejet_01346.push(vote_rejet);
    vote_macronpop_01346.push(vote_macronMediane);
    vote_lepenpop_01346.push(vote_lepenMediane);
    vote_rejetpop_01346.push(vote_rejetMediane);
    name_Commune_01346.push(nameCommune);
    Pourcentage_01346.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01346.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01346.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01346.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01346.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01346 = [];
const vote_lepen_01346 = [];
const vote_rejet_01346 = [];
const vote_macronpop_01346 = [];
const vote_lepenpop_01346 = [];
const vote_rejetpop_01346 = [];
const name_Commune_01346 = [];
const Pourcentage_01346 = [];
const Pourcentage_rejet_01346 = [];
const vote_gene_macron_01346 = [];
const vote_gene_lepen_01346 = [];
const vote_gene_rejet_01346 = [];

async function chartIt01346(){
    await GraphDATA01346();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01346-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01346
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01346
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01346-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01346,vote_lepen_01346,vote_rejet_01346]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01346-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01346,vote_lepenpop_01346,vote_rejetpop_01346]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01346"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01346
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01346
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01346
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01347*/
/*------------------------------------------------------------------ */
async function GraphDATA01347() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[346];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01347.push(vote_macron); 
    vote_lepen_01347.push(vote_lepen);
    vote_rejet_01347.push(vote_rejet);
    vote_macronpop_01347.push(vote_macronMediane);
    vote_lepenpop_01347.push(vote_lepenMediane);
    vote_rejetpop_01347.push(vote_rejetMediane);
    name_Commune_01347.push(nameCommune);
    Pourcentage_01347.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01347.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01347.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01347.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01347.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01347 = [];
const vote_lepen_01347 = [];
const vote_rejet_01347 = [];
const vote_macronpop_01347 = [];
const vote_lepenpop_01347 = [];
const vote_rejetpop_01347 = [];
const name_Commune_01347 = [];
const Pourcentage_01347 = [];
const Pourcentage_rejet_01347 = [];
const vote_gene_macron_01347 = [];
const vote_gene_lepen_01347 = [];
const vote_gene_rejet_01347 = [];

async function chartIt01347(){
    await GraphDATA01347();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01347-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01347
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01347
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01347-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01347,vote_lepen_01347,vote_rejet_01347]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01347-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01347,vote_lepenpop_01347,vote_rejetpop_01347]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01347"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01347
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01347
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01347
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01348*/
/*------------------------------------------------------------------ */
async function GraphDATA01348() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[347];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01348.push(vote_macron); 
    vote_lepen_01348.push(vote_lepen);
    vote_rejet_01348.push(vote_rejet);
    vote_macronpop_01348.push(vote_macronMediane);
    vote_lepenpop_01348.push(vote_lepenMediane);
    vote_rejetpop_01348.push(vote_rejetMediane);
    name_Commune_01348.push(nameCommune);
    Pourcentage_01348.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01348.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01348.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01348.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01348.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01348 = [];
const vote_lepen_01348 = [];
const vote_rejet_01348 = [];
const vote_macronpop_01348 = [];
const vote_lepenpop_01348 = [];
const vote_rejetpop_01348 = [];
const name_Commune_01348 = [];
const Pourcentage_01348 = [];
const Pourcentage_rejet_01348 = [];
const vote_gene_macron_01348 = [];
const vote_gene_lepen_01348 = [];
const vote_gene_rejet_01348 = [];

async function chartIt01348(){
    await GraphDATA01348();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01348-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01348
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01348
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01348-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01348,vote_lepen_01348,vote_rejet_01348]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01348-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01348,vote_lepenpop_01348,vote_rejetpop_01348]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01348"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01348
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01348
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01348
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01349*/
/*------------------------------------------------------------------ */
async function GraphDATA01349() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[348];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01349.push(vote_macron); 
    vote_lepen_01349.push(vote_lepen);
    vote_rejet_01349.push(vote_rejet);
    vote_macronpop_01349.push(vote_macronMediane);
    vote_lepenpop_01349.push(vote_lepenMediane);
    vote_rejetpop_01349.push(vote_rejetMediane);
    name_Commune_01349.push(nameCommune);
    Pourcentage_01349.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01349.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01349.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01349.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01349.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01349 = [];
const vote_lepen_01349 = [];
const vote_rejet_01349 = [];
const vote_macronpop_01349 = [];
const vote_lepenpop_01349 = [];
const vote_rejetpop_01349 = [];
const name_Commune_01349 = [];
const Pourcentage_01349 = [];
const Pourcentage_rejet_01349 = [];
const vote_gene_macron_01349 = [];
const vote_gene_lepen_01349 = [];
const vote_gene_rejet_01349 = [];

async function chartIt01349(){
    await GraphDATA01349();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01349-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01349
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01349
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01349-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01349,vote_lepen_01349,vote_rejet_01349]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01349-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01349,vote_lepenpop_01349,vote_rejetpop_01349]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01349"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01349
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01349
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01349
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01350*/
/*------------------------------------------------------------------ */
async function GraphDATA01350() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[349];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01350.push(vote_macron); 
    vote_lepen_01350.push(vote_lepen);
    vote_rejet_01350.push(vote_rejet);
    vote_macronpop_01350.push(vote_macronMediane);
    vote_lepenpop_01350.push(vote_lepenMediane);
    vote_rejetpop_01350.push(vote_rejetMediane);
    name_Commune_01350.push(nameCommune);
    Pourcentage_01350.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01350.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01350.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01350.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01350.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01350 = [];
const vote_lepen_01350 = [];
const vote_rejet_01350 = [];
const vote_macronpop_01350 = [];
const vote_lepenpop_01350 = [];
const vote_rejetpop_01350 = [];
const name_Commune_01350 = [];
const Pourcentage_01350 = [];
const Pourcentage_rejet_01350 = [];
const vote_gene_macron_01350 = [];
const vote_gene_lepen_01350 = [];
const vote_gene_rejet_01350 = [];

async function chartIt01350(){
    await GraphDATA01350();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01350-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01350
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01350
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01350-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01350,vote_lepen_01350,vote_rejet_01350]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01350-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01350,vote_lepenpop_01350,vote_rejetpop_01350]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01350"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01350
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01350
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01350
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01351*/
/*------------------------------------------------------------------ */
async function GraphDATA01351() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[350];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01351.push(vote_macron); 
    vote_lepen_01351.push(vote_lepen);
    vote_rejet_01351.push(vote_rejet);
    vote_macronpop_01351.push(vote_macronMediane);
    vote_lepenpop_01351.push(vote_lepenMediane);
    vote_rejetpop_01351.push(vote_rejetMediane);
    name_Commune_01351.push(nameCommune);
    Pourcentage_01351.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01351.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01351.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01351.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01351.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01351 = [];
const vote_lepen_01351 = [];
const vote_rejet_01351 = [];
const vote_macronpop_01351 = [];
const vote_lepenpop_01351 = [];
const vote_rejetpop_01351 = [];
const name_Commune_01351 = [];
const Pourcentage_01351 = [];
const Pourcentage_rejet_01351 = [];
const vote_gene_macron_01351 = [];
const vote_gene_lepen_01351 = [];
const vote_gene_rejet_01351 = [];

async function chartIt01351(){
    await GraphDATA01351();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01351-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01351
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01351
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01351-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01351,vote_lepen_01351,vote_rejet_01351]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01351-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01351,vote_lepenpop_01351,vote_rejetpop_01351]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01351"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01351
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01351
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01351
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01352*/
/*------------------------------------------------------------------ */
async function GraphDATA01352() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[351];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01352.push(vote_macron); 
    vote_lepen_01352.push(vote_lepen);
    vote_rejet_01352.push(vote_rejet);
    vote_macronpop_01352.push(vote_macronMediane);
    vote_lepenpop_01352.push(vote_lepenMediane);
    vote_rejetpop_01352.push(vote_rejetMediane);
    name_Commune_01352.push(nameCommune);
    Pourcentage_01352.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01352.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01352.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01352.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01352.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01352 = [];
const vote_lepen_01352 = [];
const vote_rejet_01352 = [];
const vote_macronpop_01352 = [];
const vote_lepenpop_01352 = [];
const vote_rejetpop_01352 = [];
const name_Commune_01352 = [];
const Pourcentage_01352 = [];
const Pourcentage_rejet_01352 = [];
const vote_gene_macron_01352 = [];
const vote_gene_lepen_01352 = [];
const vote_gene_rejet_01352 = [];

async function chartIt01352(){
    await GraphDATA01352();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01352-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01352
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01352
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01352-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01352,vote_lepen_01352,vote_rejet_01352]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01352-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01352,vote_lepenpop_01352,vote_rejetpop_01352]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01352"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01352
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01352
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01352
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01353*/
/*------------------------------------------------------------------ */
async function GraphDATA01353() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[352];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01353.push(vote_macron); 
    vote_lepen_01353.push(vote_lepen);
    vote_rejet_01353.push(vote_rejet);
    vote_macronpop_01353.push(vote_macronMediane);
    vote_lepenpop_01353.push(vote_lepenMediane);
    vote_rejetpop_01353.push(vote_rejetMediane);
    name_Commune_01353.push(nameCommune);
    Pourcentage_01353.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01353.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01353.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01353.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01353.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01353 = [];
const vote_lepen_01353 = [];
const vote_rejet_01353 = [];
const vote_macronpop_01353 = [];
const vote_lepenpop_01353 = [];
const vote_rejetpop_01353 = [];
const name_Commune_01353 = [];
const Pourcentage_01353 = [];
const Pourcentage_rejet_01353 = [];
const vote_gene_macron_01353 = [];
const vote_gene_lepen_01353 = [];
const vote_gene_rejet_01353 = [];

async function chartIt01353(){
    await GraphDATA01353();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01353-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01353
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01353
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01353-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01353,vote_lepen_01353,vote_rejet_01353]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01353-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01353,vote_lepenpop_01353,vote_rejetpop_01353]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01353"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01353
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01353
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01353
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01354*/
/*------------------------------------------------------------------ */
async function GraphDATA01354() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[353];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01354.push(vote_macron); 
    vote_lepen_01354.push(vote_lepen);
    vote_rejet_01354.push(vote_rejet);
    vote_macronpop_01354.push(vote_macronMediane);
    vote_lepenpop_01354.push(vote_lepenMediane);
    vote_rejetpop_01354.push(vote_rejetMediane);
    name_Commune_01354.push(nameCommune);
    Pourcentage_01354.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01354.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01354.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01354.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01354.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01354 = [];
const vote_lepen_01354 = [];
const vote_rejet_01354 = [];
const vote_macronpop_01354 = [];
const vote_lepenpop_01354 = [];
const vote_rejetpop_01354 = [];
const name_Commune_01354 = [];
const Pourcentage_01354 = [];
const Pourcentage_rejet_01354 = [];
const vote_gene_macron_01354 = [];
const vote_gene_lepen_01354 = [];
const vote_gene_rejet_01354 = [];

async function chartIt01354(){
    await GraphDATA01354();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01354-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01354
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01354
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01354-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01354,vote_lepen_01354,vote_rejet_01354]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01354-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01354,vote_lepenpop_01354,vote_rejetpop_01354]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01354"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01354
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01354
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01354
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01355*/
/*------------------------------------------------------------------ */
async function GraphDATA01355() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[354];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01355.push(vote_macron); 
    vote_lepen_01355.push(vote_lepen);
    vote_rejet_01355.push(vote_rejet);
    vote_macronpop_01355.push(vote_macronMediane);
    vote_lepenpop_01355.push(vote_lepenMediane);
    vote_rejetpop_01355.push(vote_rejetMediane);
    name_Commune_01355.push(nameCommune);
    Pourcentage_01355.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01355.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01355.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01355.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01355.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01355 = [];
const vote_lepen_01355 = [];
const vote_rejet_01355 = [];
const vote_macronpop_01355 = [];
const vote_lepenpop_01355 = [];
const vote_rejetpop_01355 = [];
const name_Commune_01355 = [];
const Pourcentage_01355 = [];
const Pourcentage_rejet_01355 = [];
const vote_gene_macron_01355 = [];
const vote_gene_lepen_01355 = [];
const vote_gene_rejet_01355 = [];

async function chartIt01355(){
    await GraphDATA01355();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01355-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01355
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01355
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01355-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01355,vote_lepen_01355,vote_rejet_01355]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01355-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01355,vote_lepenpop_01355,vote_rejetpop_01355]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01355"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01355
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01355
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01355
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01356*/
/*------------------------------------------------------------------ */
async function GraphDATA01356() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[355];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01356.push(vote_macron); 
    vote_lepen_01356.push(vote_lepen);
    vote_rejet_01356.push(vote_rejet);
    vote_macronpop_01356.push(vote_macronMediane);
    vote_lepenpop_01356.push(vote_lepenMediane);
    vote_rejetpop_01356.push(vote_rejetMediane);
    name_Commune_01356.push(nameCommune);
    Pourcentage_01356.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01356.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01356.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01356.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01356.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01356 = [];
const vote_lepen_01356 = [];
const vote_rejet_01356 = [];
const vote_macronpop_01356 = [];
const vote_lepenpop_01356 = [];
const vote_rejetpop_01356 = [];
const name_Commune_01356 = [];
const Pourcentage_01356 = [];
const Pourcentage_rejet_01356 = [];
const vote_gene_macron_01356 = [];
const vote_gene_lepen_01356 = [];
const vote_gene_rejet_01356 = [];

async function chartIt01356(){
    await GraphDATA01356();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01356-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01356
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01356
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01356-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01356,vote_lepen_01356,vote_rejet_01356]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01356-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01356,vote_lepenpop_01356,vote_rejetpop_01356]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01356"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01356
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01356
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01356
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01357*/
/*------------------------------------------------------------------ */
async function GraphDATA01357() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[356];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01357.push(vote_macron); 
    vote_lepen_01357.push(vote_lepen);
    vote_rejet_01357.push(vote_rejet);
    vote_macronpop_01357.push(vote_macronMediane);
    vote_lepenpop_01357.push(vote_lepenMediane);
    vote_rejetpop_01357.push(vote_rejetMediane);
    name_Commune_01357.push(nameCommune);
    Pourcentage_01357.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01357.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01357.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01357.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01357.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01357 = [];
const vote_lepen_01357 = [];
const vote_rejet_01357 = [];
const vote_macronpop_01357 = [];
const vote_lepenpop_01357 = [];
const vote_rejetpop_01357 = [];
const name_Commune_01357 = [];
const Pourcentage_01357 = [];
const Pourcentage_rejet_01357 = [];
const vote_gene_macron_01357 = [];
const vote_gene_lepen_01357 = [];
const vote_gene_rejet_01357 = [];

async function chartIt01357(){
    await GraphDATA01357();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01357-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01357
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01357
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01357-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01357,vote_lepen_01357,vote_rejet_01357]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01357-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01357,vote_lepenpop_01357,vote_rejetpop_01357]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01357"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01357
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01357
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01357
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01358*/
/*------------------------------------------------------------------ */
async function GraphDATA01358() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[357];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01358.push(vote_macron); 
    vote_lepen_01358.push(vote_lepen);
    vote_rejet_01358.push(vote_rejet);
    vote_macronpop_01358.push(vote_macronMediane);
    vote_lepenpop_01358.push(vote_lepenMediane);
    vote_rejetpop_01358.push(vote_rejetMediane);
    name_Commune_01358.push(nameCommune);
    Pourcentage_01358.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01358.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01358.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01358.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01358.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01358 = [];
const vote_lepen_01358 = [];
const vote_rejet_01358 = [];
const vote_macronpop_01358 = [];
const vote_lepenpop_01358 = [];
const vote_rejetpop_01358 = [];
const name_Commune_01358 = [];
const Pourcentage_01358 = [];
const Pourcentage_rejet_01358 = [];
const vote_gene_macron_01358 = [];
const vote_gene_lepen_01358 = [];
const vote_gene_rejet_01358 = [];

async function chartIt01358(){
    await GraphDATA01358();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01358-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01358
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01358
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01358-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01358,vote_lepen_01358,vote_rejet_01358]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01358-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01358,vote_lepenpop_01358,vote_rejetpop_01358]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01358"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01358
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01358
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01358
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01359*/
/*------------------------------------------------------------------ */
async function GraphDATA01359() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[358];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01359.push(vote_macron); 
    vote_lepen_01359.push(vote_lepen);
    vote_rejet_01359.push(vote_rejet);
    vote_macronpop_01359.push(vote_macronMediane);
    vote_lepenpop_01359.push(vote_lepenMediane);
    vote_rejetpop_01359.push(vote_rejetMediane);
    name_Commune_01359.push(nameCommune);
    Pourcentage_01359.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01359.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01359.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01359.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01359.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01359 = [];
const vote_lepen_01359 = [];
const vote_rejet_01359 = [];
const vote_macronpop_01359 = [];
const vote_lepenpop_01359 = [];
const vote_rejetpop_01359 = [];
const name_Commune_01359 = [];
const Pourcentage_01359 = [];
const Pourcentage_rejet_01359 = [];
const vote_gene_macron_01359 = [];
const vote_gene_lepen_01359 = [];
const vote_gene_rejet_01359 = [];

async function chartIt01359(){
    await GraphDATA01359();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01359-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01359
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01359
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01359-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01359,vote_lepen_01359,vote_rejet_01359]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01359-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01359,vote_lepenpop_01359,vote_rejetpop_01359]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01359"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01359
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01359
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01359
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01360*/
/*------------------------------------------------------------------ */
async function GraphDATA01360() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[359];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01360.push(vote_macron); 
    vote_lepen_01360.push(vote_lepen);
    vote_rejet_01360.push(vote_rejet);
    vote_macronpop_01360.push(vote_macronMediane);
    vote_lepenpop_01360.push(vote_lepenMediane);
    vote_rejetpop_01360.push(vote_rejetMediane);
    name_Commune_01360.push(nameCommune);
    Pourcentage_01360.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01360.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01360.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01360.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01360.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01360 = [];
const vote_lepen_01360 = [];
const vote_rejet_01360 = [];
const vote_macronpop_01360 = [];
const vote_lepenpop_01360 = [];
const vote_rejetpop_01360 = [];
const name_Commune_01360 = [];
const Pourcentage_01360 = [];
const Pourcentage_rejet_01360 = [];
const vote_gene_macron_01360 = [];
const vote_gene_lepen_01360 = [];
const vote_gene_rejet_01360 = [];

async function chartIt01360(){
    await GraphDATA01360();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01360-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01360
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01360
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01360-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01360,vote_lepen_01360,vote_rejet_01360]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01360-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01360,vote_lepenpop_01360,vote_rejetpop_01360]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01360"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01360
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01360
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01360
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01361*/
/*------------------------------------------------------------------ */
async function GraphDATA01361() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[360];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01361.push(vote_macron); 
    vote_lepen_01361.push(vote_lepen);
    vote_rejet_01361.push(vote_rejet);
    vote_macronpop_01361.push(vote_macronMediane);
    vote_lepenpop_01361.push(vote_lepenMediane);
    vote_rejetpop_01361.push(vote_rejetMediane);
    name_Commune_01361.push(nameCommune);
    Pourcentage_01361.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01361.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01361.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01361.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01361.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01361 = [];
const vote_lepen_01361 = [];
const vote_rejet_01361 = [];
const vote_macronpop_01361 = [];
const vote_lepenpop_01361 = [];
const vote_rejetpop_01361 = [];
const name_Commune_01361 = [];
const Pourcentage_01361 = [];
const Pourcentage_rejet_01361 = [];
const vote_gene_macron_01361 = [];
const vote_gene_lepen_01361 = [];
const vote_gene_rejet_01361 = [];

async function chartIt01361(){
    await GraphDATA01361();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01361-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01361
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01361
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01361-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01361,vote_lepen_01361,vote_rejet_01361]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01361-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01361,vote_lepenpop_01361,vote_rejetpop_01361]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01361"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01361
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01361
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01361
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01362*/
/*------------------------------------------------------------------ */
async function GraphDATA01362() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[361];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01362.push(vote_macron); 
    vote_lepen_01362.push(vote_lepen);
    vote_rejet_01362.push(vote_rejet);
    vote_macronpop_01362.push(vote_macronMediane);
    vote_lepenpop_01362.push(vote_lepenMediane);
    vote_rejetpop_01362.push(vote_rejetMediane);
    name_Commune_01362.push(nameCommune);
    Pourcentage_01362.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01362.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01362.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01362.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01362.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01362 = [];
const vote_lepen_01362 = [];
const vote_rejet_01362 = [];
const vote_macronpop_01362 = [];
const vote_lepenpop_01362 = [];
const vote_rejetpop_01362 = [];
const name_Commune_01362 = [];
const Pourcentage_01362 = [];
const Pourcentage_rejet_01362 = [];
const vote_gene_macron_01362 = [];
const vote_gene_lepen_01362 = [];
const vote_gene_rejet_01362 = [];

async function chartIt01362(){
    await GraphDATA01362();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01362-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01362
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01362
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01362-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01362,vote_lepen_01362,vote_rejet_01362]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01362-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01362,vote_lepenpop_01362,vote_rejetpop_01362]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01362"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01362
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01362
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01362
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01363*/
/*------------------------------------------------------------------ */
async function GraphDATA01363() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[362];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01363.push(vote_macron); 
    vote_lepen_01363.push(vote_lepen);
    vote_rejet_01363.push(vote_rejet);
    vote_macronpop_01363.push(vote_macronMediane);
    vote_lepenpop_01363.push(vote_lepenMediane);
    vote_rejetpop_01363.push(vote_rejetMediane);
    name_Commune_01363.push(nameCommune);
    Pourcentage_01363.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01363.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01363.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01363.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01363.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01363 = [];
const vote_lepen_01363 = [];
const vote_rejet_01363 = [];
const vote_macronpop_01363 = [];
const vote_lepenpop_01363 = [];
const vote_rejetpop_01363 = [];
const name_Commune_01363 = [];
const Pourcentage_01363 = [];
const Pourcentage_rejet_01363 = [];
const vote_gene_macron_01363 = [];
const vote_gene_lepen_01363 = [];
const vote_gene_rejet_01363 = [];

async function chartIt01363(){
    await GraphDATA01363();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01363-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01363
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01363
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01363-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01363,vote_lepen_01363,vote_rejet_01363]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01363-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01363,vote_lepenpop_01363,vote_rejetpop_01363]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01363"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01363
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01363
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01363
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01364*/
/*------------------------------------------------------------------ */
async function GraphDATA01364() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[363];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01364.push(vote_macron); 
    vote_lepen_01364.push(vote_lepen);
    vote_rejet_01364.push(vote_rejet);
    vote_macronpop_01364.push(vote_macronMediane);
    vote_lepenpop_01364.push(vote_lepenMediane);
    vote_rejetpop_01364.push(vote_rejetMediane);
    name_Commune_01364.push(nameCommune);
    Pourcentage_01364.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01364.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01364.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01364.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01364.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01364 = [];
const vote_lepen_01364 = [];
const vote_rejet_01364 = [];
const vote_macronpop_01364 = [];
const vote_lepenpop_01364 = [];
const vote_rejetpop_01364 = [];
const name_Commune_01364 = [];
const Pourcentage_01364 = [];
const Pourcentage_rejet_01364 = [];
const vote_gene_macron_01364 = [];
const vote_gene_lepen_01364 = [];
const vote_gene_rejet_01364 = [];

async function chartIt01364(){
    await GraphDATA01364();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01364-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01364
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01364
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01364-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01364,vote_lepen_01364,vote_rejet_01364]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01364-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01364,vote_lepenpop_01364,vote_rejetpop_01364]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01364"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01364
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01364
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01364
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01365*/
/*------------------------------------------------------------------ */
async function GraphDATA01365() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[364];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01365.push(vote_macron); 
    vote_lepen_01365.push(vote_lepen);
    vote_rejet_01365.push(vote_rejet);
    vote_macronpop_01365.push(vote_macronMediane);
    vote_lepenpop_01365.push(vote_lepenMediane);
    vote_rejetpop_01365.push(vote_rejetMediane);
    name_Commune_01365.push(nameCommune);
    Pourcentage_01365.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01365.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01365.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01365.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01365.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01365 = [];
const vote_lepen_01365 = [];
const vote_rejet_01365 = [];
const vote_macronpop_01365 = [];
const vote_lepenpop_01365 = [];
const vote_rejetpop_01365 = [];
const name_Commune_01365 = [];
const Pourcentage_01365 = [];
const Pourcentage_rejet_01365 = [];
const vote_gene_macron_01365 = [];
const vote_gene_lepen_01365 = [];
const vote_gene_rejet_01365 = [];

async function chartIt01365(){
    await GraphDATA01365();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01365-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01365
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01365
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01365-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01365,vote_lepen_01365,vote_rejet_01365]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01365-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01365,vote_lepenpop_01365,vote_rejetpop_01365]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01365"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01365
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01365
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01365
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01366*/
/*------------------------------------------------------------------ */
async function GraphDATA01366() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[365];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01366.push(vote_macron); 
    vote_lepen_01366.push(vote_lepen);
    vote_rejet_01366.push(vote_rejet);
    vote_macronpop_01366.push(vote_macronMediane);
    vote_lepenpop_01366.push(vote_lepenMediane);
    vote_rejetpop_01366.push(vote_rejetMediane);
    name_Commune_01366.push(nameCommune);
    Pourcentage_01366.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01366.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01366.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01366.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01366.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01366 = [];
const vote_lepen_01366 = [];
const vote_rejet_01366 = [];
const vote_macronpop_01366 = [];
const vote_lepenpop_01366 = [];
const vote_rejetpop_01366 = [];
const name_Commune_01366 = [];
const Pourcentage_01366 = [];
const Pourcentage_rejet_01366 = [];
const vote_gene_macron_01366 = [];
const vote_gene_lepen_01366 = [];
const vote_gene_rejet_01366 = [];

async function chartIt01366(){
    await GraphDATA01366();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01366-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01366
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01366
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01366-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01366,vote_lepen_01366,vote_rejet_01366]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01366-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01366,vote_lepenpop_01366,vote_rejetpop_01366]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01366"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01366
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01366
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01366
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01367*/
/*------------------------------------------------------------------ */
async function GraphDATA01367() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[366];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01367.push(vote_macron); 
    vote_lepen_01367.push(vote_lepen);
    vote_rejet_01367.push(vote_rejet);
    vote_macronpop_01367.push(vote_macronMediane);
    vote_lepenpop_01367.push(vote_lepenMediane);
    vote_rejetpop_01367.push(vote_rejetMediane);
    name_Commune_01367.push(nameCommune);
    Pourcentage_01367.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01367.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01367.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01367.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01367.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01367 = [];
const vote_lepen_01367 = [];
const vote_rejet_01367 = [];
const vote_macronpop_01367 = [];
const vote_lepenpop_01367 = [];
const vote_rejetpop_01367 = [];
const name_Commune_01367 = [];
const Pourcentage_01367 = [];
const Pourcentage_rejet_01367 = [];
const vote_gene_macron_01367 = [];
const vote_gene_lepen_01367 = [];
const vote_gene_rejet_01367 = [];

async function chartIt01367(){
    await GraphDATA01367();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01367-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01367
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01367
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01367-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01367,vote_lepen_01367,vote_rejet_01367]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01367-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01367,vote_lepenpop_01367,vote_rejetpop_01367]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01367"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01367
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01367
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01367
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01368*/
/*------------------------------------------------------------------ */
async function GraphDATA01368() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[367];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01368.push(vote_macron); 
    vote_lepen_01368.push(vote_lepen);
    vote_rejet_01368.push(vote_rejet);
    vote_macronpop_01368.push(vote_macronMediane);
    vote_lepenpop_01368.push(vote_lepenMediane);
    vote_rejetpop_01368.push(vote_rejetMediane);
    name_Commune_01368.push(nameCommune);
    Pourcentage_01368.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01368.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01368.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01368.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01368.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01368 = [];
const vote_lepen_01368 = [];
const vote_rejet_01368 = [];
const vote_macronpop_01368 = [];
const vote_lepenpop_01368 = [];
const vote_rejetpop_01368 = [];
const name_Commune_01368 = [];
const Pourcentage_01368 = [];
const Pourcentage_rejet_01368 = [];
const vote_gene_macron_01368 = [];
const vote_gene_lepen_01368 = [];
const vote_gene_rejet_01368 = [];

async function chartIt01368(){
    await GraphDATA01368();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01368-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01368
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01368
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01368-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01368,vote_lepen_01368,vote_rejet_01368]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01368-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01368,vote_lepenpop_01368,vote_rejetpop_01368]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01368"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01368
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01368
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01368
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01369*/
/*------------------------------------------------------------------ */
async function GraphDATA01369() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[368];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01369.push(vote_macron); 
    vote_lepen_01369.push(vote_lepen);
    vote_rejet_01369.push(vote_rejet);
    vote_macronpop_01369.push(vote_macronMediane);
    vote_lepenpop_01369.push(vote_lepenMediane);
    vote_rejetpop_01369.push(vote_rejetMediane);
    name_Commune_01369.push(nameCommune);
    Pourcentage_01369.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01369.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01369.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01369.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01369.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01369 = [];
const vote_lepen_01369 = [];
const vote_rejet_01369 = [];
const vote_macronpop_01369 = [];
const vote_lepenpop_01369 = [];
const vote_rejetpop_01369 = [];
const name_Commune_01369 = [];
const Pourcentage_01369 = [];
const Pourcentage_rejet_01369 = [];
const vote_gene_macron_01369 = [];
const vote_gene_lepen_01369 = [];
const vote_gene_rejet_01369 = [];

async function chartIt01369(){
    await GraphDATA01369();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01369-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01369
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01369
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01369-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01369,vote_lepen_01369,vote_rejet_01369]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01369-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01369,vote_lepenpop_01369,vote_rejetpop_01369]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01369"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01369
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01369
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01369
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01370*/
/*------------------------------------------------------------------ */
async function GraphDATA01370() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[369];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01370.push(vote_macron); 
    vote_lepen_01370.push(vote_lepen);
    vote_rejet_01370.push(vote_rejet);
    vote_macronpop_01370.push(vote_macronMediane);
    vote_lepenpop_01370.push(vote_lepenMediane);
    vote_rejetpop_01370.push(vote_rejetMediane);
    name_Commune_01370.push(nameCommune);
    Pourcentage_01370.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01370.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01370.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01370.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01370.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01370 = [];
const vote_lepen_01370 = [];
const vote_rejet_01370 = [];
const vote_macronpop_01370 = [];
const vote_lepenpop_01370 = [];
const vote_rejetpop_01370 = [];
const name_Commune_01370 = [];
const Pourcentage_01370 = [];
const Pourcentage_rejet_01370 = [];
const vote_gene_macron_01370 = [];
const vote_gene_lepen_01370 = [];
const vote_gene_rejet_01370 = [];

async function chartIt01370(){
    await GraphDATA01370();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01370-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01370
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01370
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01370-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01370,vote_lepen_01370,vote_rejet_01370]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01370-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01370,vote_lepenpop_01370,vote_rejetpop_01370]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01370"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01370
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01370
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01370
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01371*/
/*------------------------------------------------------------------ */
async function GraphDATA01371() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[370];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01371.push(vote_macron); 
    vote_lepen_01371.push(vote_lepen);
    vote_rejet_01371.push(vote_rejet);
    vote_macronpop_01371.push(vote_macronMediane);
    vote_lepenpop_01371.push(vote_lepenMediane);
    vote_rejetpop_01371.push(vote_rejetMediane);
    name_Commune_01371.push(nameCommune);
    Pourcentage_01371.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01371.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01371.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01371.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01371.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01371 = [];
const vote_lepen_01371 = [];
const vote_rejet_01371 = [];
const vote_macronpop_01371 = [];
const vote_lepenpop_01371 = [];
const vote_rejetpop_01371 = [];
const name_Commune_01371 = [];
const Pourcentage_01371 = [];
const Pourcentage_rejet_01371 = [];
const vote_gene_macron_01371 = [];
const vote_gene_lepen_01371 = [];
const vote_gene_rejet_01371 = [];

async function chartIt01371(){
    await GraphDATA01371();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01371-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01371
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01371
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01371-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01371,vote_lepen_01371,vote_rejet_01371]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01371-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01371,vote_lepenpop_01371,vote_rejetpop_01371]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01371"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01371
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01371
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01371
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01372*/
/*------------------------------------------------------------------ */
async function GraphDATA01372() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[371];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01372.push(vote_macron); 
    vote_lepen_01372.push(vote_lepen);
    vote_rejet_01372.push(vote_rejet);
    vote_macronpop_01372.push(vote_macronMediane);
    vote_lepenpop_01372.push(vote_lepenMediane);
    vote_rejetpop_01372.push(vote_rejetMediane);
    name_Commune_01372.push(nameCommune);
    Pourcentage_01372.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01372.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01372.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01372.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01372.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01372 = [];
const vote_lepen_01372 = [];
const vote_rejet_01372 = [];
const vote_macronpop_01372 = [];
const vote_lepenpop_01372 = [];
const vote_rejetpop_01372 = [];
const name_Commune_01372 = [];
const Pourcentage_01372 = [];
const Pourcentage_rejet_01372 = [];
const vote_gene_macron_01372 = [];
const vote_gene_lepen_01372 = [];
const vote_gene_rejet_01372 = [];

async function chartIt01372(){
    await GraphDATA01372();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01372-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01372
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01372
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01372-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01372,vote_lepen_01372,vote_rejet_01372]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01372-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01372,vote_lepenpop_01372,vote_rejetpop_01372]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01372"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01372
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01372
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01372
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01373*/
/*------------------------------------------------------------------ */
async function GraphDATA01373() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[372];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01373.push(vote_macron); 
    vote_lepen_01373.push(vote_lepen);
    vote_rejet_01373.push(vote_rejet);
    vote_macronpop_01373.push(vote_macronMediane);
    vote_lepenpop_01373.push(vote_lepenMediane);
    vote_rejetpop_01373.push(vote_rejetMediane);
    name_Commune_01373.push(nameCommune);
    Pourcentage_01373.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01373.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01373.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01373.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01373.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01373 = [];
const vote_lepen_01373 = [];
const vote_rejet_01373 = [];
const vote_macronpop_01373 = [];
const vote_lepenpop_01373 = [];
const vote_rejetpop_01373 = [];
const name_Commune_01373 = [];
const Pourcentage_01373 = [];
const Pourcentage_rejet_01373 = [];
const vote_gene_macron_01373 = [];
const vote_gene_lepen_01373 = [];
const vote_gene_rejet_01373 = [];

async function chartIt01373(){
    await GraphDATA01373();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01373-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01373
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01373
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01373-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01373,vote_lepen_01373,vote_rejet_01373]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01373-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01373,vote_lepenpop_01373,vote_rejetpop_01373]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01373"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01373
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01373
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01373
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01374*/
/*------------------------------------------------------------------ */
async function GraphDATA01374() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[373];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01374.push(vote_macron); 
    vote_lepen_01374.push(vote_lepen);
    vote_rejet_01374.push(vote_rejet);
    vote_macronpop_01374.push(vote_macronMediane);
    vote_lepenpop_01374.push(vote_lepenMediane);
    vote_rejetpop_01374.push(vote_rejetMediane);
    name_Commune_01374.push(nameCommune);
    Pourcentage_01374.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01374.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01374.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01374.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01374.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01374 = [];
const vote_lepen_01374 = [];
const vote_rejet_01374 = [];
const vote_macronpop_01374 = [];
const vote_lepenpop_01374 = [];
const vote_rejetpop_01374 = [];
const name_Commune_01374 = [];
const Pourcentage_01374 = [];
const Pourcentage_rejet_01374 = [];
const vote_gene_macron_01374 = [];
const vote_gene_lepen_01374 = [];
const vote_gene_rejet_01374 = [];

async function chartIt01374(){
    await GraphDATA01374();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01374-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01374
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01374
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01374-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01374,vote_lepen_01374,vote_rejet_01374]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01374-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01374,vote_lepenpop_01374,vote_rejetpop_01374]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01374"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01374
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01374
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01374
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01375*/
/*------------------------------------------------------------------ */
async function GraphDATA01375() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[374];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01375.push(vote_macron); 
    vote_lepen_01375.push(vote_lepen);
    vote_rejet_01375.push(vote_rejet);
    vote_macronpop_01375.push(vote_macronMediane);
    vote_lepenpop_01375.push(vote_lepenMediane);
    vote_rejetpop_01375.push(vote_rejetMediane);
    name_Commune_01375.push(nameCommune);
    Pourcentage_01375.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01375.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01375.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01375.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01375.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01375 = [];
const vote_lepen_01375 = [];
const vote_rejet_01375 = [];
const vote_macronpop_01375 = [];
const vote_lepenpop_01375 = [];
const vote_rejetpop_01375 = [];
const name_Commune_01375 = [];
const Pourcentage_01375 = [];
const Pourcentage_rejet_01375 = [];
const vote_gene_macron_01375 = [];
const vote_gene_lepen_01375 = [];
const vote_gene_rejet_01375 = [];

async function chartIt01375(){
    await GraphDATA01375();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01375-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01375
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01375
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01375-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01375,vote_lepen_01375,vote_rejet_01375]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01375-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01375,vote_lepenpop_01375,vote_rejetpop_01375]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01375"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01375
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01375
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01375
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01376*/
/*------------------------------------------------------------------ */
async function GraphDATA01376() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[375];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01376.push(vote_macron); 
    vote_lepen_01376.push(vote_lepen);
    vote_rejet_01376.push(vote_rejet);
    vote_macronpop_01376.push(vote_macronMediane);
    vote_lepenpop_01376.push(vote_lepenMediane);
    vote_rejetpop_01376.push(vote_rejetMediane);
    name_Commune_01376.push(nameCommune);
    Pourcentage_01376.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01376.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01376.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01376.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01376.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01376 = [];
const vote_lepen_01376 = [];
const vote_rejet_01376 = [];
const vote_macronpop_01376 = [];
const vote_lepenpop_01376 = [];
const vote_rejetpop_01376 = [];
const name_Commune_01376 = [];
const Pourcentage_01376 = [];
const Pourcentage_rejet_01376 = [];
const vote_gene_macron_01376 = [];
const vote_gene_lepen_01376 = [];
const vote_gene_rejet_01376 = [];

async function chartIt01376(){
    await GraphDATA01376();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01376-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01376
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01376
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01376-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01376,vote_lepen_01376,vote_rejet_01376]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01376-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01376,vote_lepenpop_01376,vote_rejetpop_01376]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01376"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01376
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01376
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01376
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01377*/
/*------------------------------------------------------------------ */
async function GraphDATA01377() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[376];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01377.push(vote_macron); 
    vote_lepen_01377.push(vote_lepen);
    vote_rejet_01377.push(vote_rejet);
    vote_macronpop_01377.push(vote_macronMediane);
    vote_lepenpop_01377.push(vote_lepenMediane);
    vote_rejetpop_01377.push(vote_rejetMediane);
    name_Commune_01377.push(nameCommune);
    Pourcentage_01377.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01377.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01377.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01377.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01377.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01377 = [];
const vote_lepen_01377 = [];
const vote_rejet_01377 = [];
const vote_macronpop_01377 = [];
const vote_lepenpop_01377 = [];
const vote_rejetpop_01377 = [];
const name_Commune_01377 = [];
const Pourcentage_01377 = [];
const Pourcentage_rejet_01377 = [];
const vote_gene_macron_01377 = [];
const vote_gene_lepen_01377 = [];
const vote_gene_rejet_01377 = [];

async function chartIt01377(){
    await GraphDATA01377();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01377-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01377
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01377
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01377-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01377,vote_lepen_01377,vote_rejet_01377]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01377-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01377,vote_lepenpop_01377,vote_rejetpop_01377]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01377"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01377
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01377
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01377
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01378*/
/*------------------------------------------------------------------ */
async function GraphDATA01378() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[377];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01378.push(vote_macron); 
    vote_lepen_01378.push(vote_lepen);
    vote_rejet_01378.push(vote_rejet);
    vote_macronpop_01378.push(vote_macronMediane);
    vote_lepenpop_01378.push(vote_lepenMediane);
    vote_rejetpop_01378.push(vote_rejetMediane);
    name_Commune_01378.push(nameCommune);
    Pourcentage_01378.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01378.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01378.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01378.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01378.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01378 = [];
const vote_lepen_01378 = [];
const vote_rejet_01378 = [];
const vote_macronpop_01378 = [];
const vote_lepenpop_01378 = [];
const vote_rejetpop_01378 = [];
const name_Commune_01378 = [];
const Pourcentage_01378 = [];
const Pourcentage_rejet_01378 = [];
const vote_gene_macron_01378 = [];
const vote_gene_lepen_01378 = [];
const vote_gene_rejet_01378 = [];

async function chartIt01378(){
    await GraphDATA01378();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01378-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01378
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01378
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01378-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01378,vote_lepen_01378,vote_rejet_01378]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01378-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01378,vote_lepenpop_01378,vote_rejetpop_01378]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01378"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01378
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01378
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01378
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01379*/
/*------------------------------------------------------------------ */
async function GraphDATA01379() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[378];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01379.push(vote_macron); 
    vote_lepen_01379.push(vote_lepen);
    vote_rejet_01379.push(vote_rejet);
    vote_macronpop_01379.push(vote_macronMediane);
    vote_lepenpop_01379.push(vote_lepenMediane);
    vote_rejetpop_01379.push(vote_rejetMediane);
    name_Commune_01379.push(nameCommune);
    Pourcentage_01379.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01379.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01379.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01379.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01379.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01379 = [];
const vote_lepen_01379 = [];
const vote_rejet_01379 = [];
const vote_macronpop_01379 = [];
const vote_lepenpop_01379 = [];
const vote_rejetpop_01379 = [];
const name_Commune_01379 = [];
const Pourcentage_01379 = [];
const Pourcentage_rejet_01379 = [];
const vote_gene_macron_01379 = [];
const vote_gene_lepen_01379 = [];
const vote_gene_rejet_01379 = [];

async function chartIt01379(){
    await GraphDATA01379();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01379-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01379
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01379
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01379-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01379,vote_lepen_01379,vote_rejet_01379]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01379-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01379,vote_lepenpop_01379,vote_rejetpop_01379]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01379"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01379
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01379
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01379
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01380*/
/*------------------------------------------------------------------ */
async function GraphDATA01380() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[379];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01380.push(vote_macron); 
    vote_lepen_01380.push(vote_lepen);
    vote_rejet_01380.push(vote_rejet);
    vote_macronpop_01380.push(vote_macronMediane);
    vote_lepenpop_01380.push(vote_lepenMediane);
    vote_rejetpop_01380.push(vote_rejetMediane);
    name_Commune_01380.push(nameCommune);
    Pourcentage_01380.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01380.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01380.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01380.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01380.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01380 = [];
const vote_lepen_01380 = [];
const vote_rejet_01380 = [];
const vote_macronpop_01380 = [];
const vote_lepenpop_01380 = [];
const vote_rejetpop_01380 = [];
const name_Commune_01380 = [];
const Pourcentage_01380 = [];
const Pourcentage_rejet_01380 = [];
const vote_gene_macron_01380 = [];
const vote_gene_lepen_01380 = [];
const vote_gene_rejet_01380 = [];

async function chartIt01380(){
    await GraphDATA01380();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01380-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01380
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01380
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01380-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01380,vote_lepen_01380,vote_rejet_01380]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01380-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01380,vote_lepenpop_01380,vote_rejetpop_01380]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01380"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01380
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01380
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01380
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01381*/
/*------------------------------------------------------------------ */
async function GraphDATA01381() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[380];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01381.push(vote_macron); 
    vote_lepen_01381.push(vote_lepen);
    vote_rejet_01381.push(vote_rejet);
    vote_macronpop_01381.push(vote_macronMediane);
    vote_lepenpop_01381.push(vote_lepenMediane);
    vote_rejetpop_01381.push(vote_rejetMediane);
    name_Commune_01381.push(nameCommune);
    Pourcentage_01381.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01381.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01381.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01381.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01381.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01381 = [];
const vote_lepen_01381 = [];
const vote_rejet_01381 = [];
const vote_macronpop_01381 = [];
const vote_lepenpop_01381 = [];
const vote_rejetpop_01381 = [];
const name_Commune_01381 = [];
const Pourcentage_01381 = [];
const Pourcentage_rejet_01381 = [];
const vote_gene_macron_01381 = [];
const vote_gene_lepen_01381 = [];
const vote_gene_rejet_01381 = [];

async function chartIt01381(){
    await GraphDATA01381();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01381-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01381
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01381
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01381-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01381,vote_lepen_01381,vote_rejet_01381]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01381-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01381,vote_lepenpop_01381,vote_rejetpop_01381]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01381"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01381
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01381
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01381
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01382*/
/*------------------------------------------------------------------ */
async function GraphDATA01382() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[381];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01382.push(vote_macron); 
    vote_lepen_01382.push(vote_lepen);
    vote_rejet_01382.push(vote_rejet);
    vote_macronpop_01382.push(vote_macronMediane);
    vote_lepenpop_01382.push(vote_lepenMediane);
    vote_rejetpop_01382.push(vote_rejetMediane);
    name_Commune_01382.push(nameCommune);
    Pourcentage_01382.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01382.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01382.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01382.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01382.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01382 = [];
const vote_lepen_01382 = [];
const vote_rejet_01382 = [];
const vote_macronpop_01382 = [];
const vote_lepenpop_01382 = [];
const vote_rejetpop_01382 = [];
const name_Commune_01382 = [];
const Pourcentage_01382 = [];
const Pourcentage_rejet_01382 = [];
const vote_gene_macron_01382 = [];
const vote_gene_lepen_01382 = [];
const vote_gene_rejet_01382 = [];

async function chartIt01382(){
    await GraphDATA01382();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01382-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01382
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01382
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01382-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01382,vote_lepen_01382,vote_rejet_01382]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01382-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01382,vote_lepenpop_01382,vote_rejetpop_01382]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01382"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01382
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01382
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01382
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01383*/
/*------------------------------------------------------------------ */
async function GraphDATA01383() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[382];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01383.push(vote_macron); 
    vote_lepen_01383.push(vote_lepen);
    vote_rejet_01383.push(vote_rejet);
    vote_macronpop_01383.push(vote_macronMediane);
    vote_lepenpop_01383.push(vote_lepenMediane);
    vote_rejetpop_01383.push(vote_rejetMediane);
    name_Commune_01383.push(nameCommune);
    Pourcentage_01383.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01383.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01383.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01383.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01383.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01383 = [];
const vote_lepen_01383 = [];
const vote_rejet_01383 = [];
const vote_macronpop_01383 = [];
const vote_lepenpop_01383 = [];
const vote_rejetpop_01383 = [];
const name_Commune_01383 = [];
const Pourcentage_01383 = [];
const Pourcentage_rejet_01383 = [];
const vote_gene_macron_01383 = [];
const vote_gene_lepen_01383 = [];
const vote_gene_rejet_01383 = [];

async function chartIt01383(){
    await GraphDATA01383();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01383-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01383
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01383
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01383-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01383,vote_lepen_01383,vote_rejet_01383]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01383-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01383,vote_lepenpop_01383,vote_rejetpop_01383]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01383"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01383
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01383
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01383
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01384*/
/*------------------------------------------------------------------ */
async function GraphDATA01384() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[383];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01384.push(vote_macron); 
    vote_lepen_01384.push(vote_lepen);
    vote_rejet_01384.push(vote_rejet);
    vote_macronpop_01384.push(vote_macronMediane);
    vote_lepenpop_01384.push(vote_lepenMediane);
    vote_rejetpop_01384.push(vote_rejetMediane);
    name_Commune_01384.push(nameCommune);
    Pourcentage_01384.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01384.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01384.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01384.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01384.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01384 = [];
const vote_lepen_01384 = [];
const vote_rejet_01384 = [];
const vote_macronpop_01384 = [];
const vote_lepenpop_01384 = [];
const vote_rejetpop_01384 = [];
const name_Commune_01384 = [];
const Pourcentage_01384 = [];
const Pourcentage_rejet_01384 = [];
const vote_gene_macron_01384 = [];
const vote_gene_lepen_01384 = [];
const vote_gene_rejet_01384 = [];

async function chartIt01384(){
    await GraphDATA01384();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01384-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01384
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01384
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01384-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01384,vote_lepen_01384,vote_rejet_01384]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01384-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01384,vote_lepenpop_01384,vote_rejetpop_01384]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01384"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01384
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01384
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01384
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01385*/
/*------------------------------------------------------------------ */
async function GraphDATA01385() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[384];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01385.push(vote_macron); 
    vote_lepen_01385.push(vote_lepen);
    vote_rejet_01385.push(vote_rejet);
    vote_macronpop_01385.push(vote_macronMediane);
    vote_lepenpop_01385.push(vote_lepenMediane);
    vote_rejetpop_01385.push(vote_rejetMediane);
    name_Commune_01385.push(nameCommune);
    Pourcentage_01385.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01385.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01385.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01385.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01385.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01385 = [];
const vote_lepen_01385 = [];
const vote_rejet_01385 = [];
const vote_macronpop_01385 = [];
const vote_lepenpop_01385 = [];
const vote_rejetpop_01385 = [];
const name_Commune_01385 = [];
const Pourcentage_01385 = [];
const Pourcentage_rejet_01385 = [];
const vote_gene_macron_01385 = [];
const vote_gene_lepen_01385 = [];
const vote_gene_rejet_01385 = [];

async function chartIt01385(){
    await GraphDATA01385();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01385-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01385
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01385
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01385-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01385,vote_lepen_01385,vote_rejet_01385]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01385-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01385,vote_lepenpop_01385,vote_rejetpop_01385]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01385"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01385
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01385
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01385
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01386*/
/*------------------------------------------------------------------ */
async function GraphDATA01386() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[385];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01386.push(vote_macron); 
    vote_lepen_01386.push(vote_lepen);
    vote_rejet_01386.push(vote_rejet);
    vote_macronpop_01386.push(vote_macronMediane);
    vote_lepenpop_01386.push(vote_lepenMediane);
    vote_rejetpop_01386.push(vote_rejetMediane);
    name_Commune_01386.push(nameCommune);
    Pourcentage_01386.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01386.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01386.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01386.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01386.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01386 = [];
const vote_lepen_01386 = [];
const vote_rejet_01386 = [];
const vote_macronpop_01386 = [];
const vote_lepenpop_01386 = [];
const vote_rejetpop_01386 = [];
const name_Commune_01386 = [];
const Pourcentage_01386 = [];
const Pourcentage_rejet_01386 = [];
const vote_gene_macron_01386 = [];
const vote_gene_lepen_01386 = [];
const vote_gene_rejet_01386 = [];

async function chartIt01386(){
    await GraphDATA01386();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01386-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01386
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01386
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01386-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01386,vote_lepen_01386,vote_rejet_01386]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01386-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01386,vote_lepenpop_01386,vote_rejetpop_01386]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01386"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01386
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01386
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01386
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01387*/
/*------------------------------------------------------------------ */
async function GraphDATA01387() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[386];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01387.push(vote_macron); 
    vote_lepen_01387.push(vote_lepen);
    vote_rejet_01387.push(vote_rejet);
    vote_macronpop_01387.push(vote_macronMediane);
    vote_lepenpop_01387.push(vote_lepenMediane);
    vote_rejetpop_01387.push(vote_rejetMediane);
    name_Commune_01387.push(nameCommune);
    Pourcentage_01387.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01387.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01387.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01387.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01387.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01387 = [];
const vote_lepen_01387 = [];
const vote_rejet_01387 = [];
const vote_macronpop_01387 = [];
const vote_lepenpop_01387 = [];
const vote_rejetpop_01387 = [];
const name_Commune_01387 = [];
const Pourcentage_01387 = [];
const Pourcentage_rejet_01387 = [];
const vote_gene_macron_01387 = [];
const vote_gene_lepen_01387 = [];
const vote_gene_rejet_01387 = [];

async function chartIt01387(){
    await GraphDATA01387();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01387-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01387
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01387
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01387-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01387,vote_lepen_01387,vote_rejet_01387]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01387-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01387,vote_lepenpop_01387,vote_rejetpop_01387]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01387"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01387
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01387
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01387
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01388*/
/*------------------------------------------------------------------ */
async function GraphDATA01388() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[387];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01388.push(vote_macron); 
    vote_lepen_01388.push(vote_lepen);
    vote_rejet_01388.push(vote_rejet);
    vote_macronpop_01388.push(vote_macronMediane);
    vote_lepenpop_01388.push(vote_lepenMediane);
    vote_rejetpop_01388.push(vote_rejetMediane);
    name_Commune_01388.push(nameCommune);
    Pourcentage_01388.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01388.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01388.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01388.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01388.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01388 = [];
const vote_lepen_01388 = [];
const vote_rejet_01388 = [];
const vote_macronpop_01388 = [];
const vote_lepenpop_01388 = [];
const vote_rejetpop_01388 = [];
const name_Commune_01388 = [];
const Pourcentage_01388 = [];
const Pourcentage_rejet_01388 = [];
const vote_gene_macron_01388 = [];
const vote_gene_lepen_01388 = [];
const vote_gene_rejet_01388 = [];

async function chartIt01388(){
    await GraphDATA01388();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01388-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01388
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01388
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01388-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01388,vote_lepen_01388,vote_rejet_01388]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01388-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01388,vote_lepenpop_01388,vote_rejetpop_01388]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01388"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01388
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01388
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01388
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01389*/
/*------------------------------------------------------------------ */
async function GraphDATA01389() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[388];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01389.push(vote_macron); 
    vote_lepen_01389.push(vote_lepen);
    vote_rejet_01389.push(vote_rejet);
    vote_macronpop_01389.push(vote_macronMediane);
    vote_lepenpop_01389.push(vote_lepenMediane);
    vote_rejetpop_01389.push(vote_rejetMediane);
    name_Commune_01389.push(nameCommune);
    Pourcentage_01389.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01389.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01389.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01389.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01389.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01389 = [];
const vote_lepen_01389 = [];
const vote_rejet_01389 = [];
const vote_macronpop_01389 = [];
const vote_lepenpop_01389 = [];
const vote_rejetpop_01389 = [];
const name_Commune_01389 = [];
const Pourcentage_01389 = [];
const Pourcentage_rejet_01389 = [];
const vote_gene_macron_01389 = [];
const vote_gene_lepen_01389 = [];
const vote_gene_rejet_01389 = [];

async function chartIt01389(){
    await GraphDATA01389();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01389-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01389
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01389
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01389-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01389,vote_lepen_01389,vote_rejet_01389]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01389-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01389,vote_lepenpop_01389,vote_rejetpop_01389]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01389"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01389
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01389
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01389
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01390*/
/*------------------------------------------------------------------ */
async function GraphDATA01390() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[389];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01390.push(vote_macron); 
    vote_lepen_01390.push(vote_lepen);
    vote_rejet_01390.push(vote_rejet);
    vote_macronpop_01390.push(vote_macronMediane);
    vote_lepenpop_01390.push(vote_lepenMediane);
    vote_rejetpop_01390.push(vote_rejetMediane);
    name_Commune_01390.push(nameCommune);
    Pourcentage_01390.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01390.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01390.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01390.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01390.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01390 = [];
const vote_lepen_01390 = [];
const vote_rejet_01390 = [];
const vote_macronpop_01390 = [];
const vote_lepenpop_01390 = [];
const vote_rejetpop_01390 = [];
const name_Commune_01390 = [];
const Pourcentage_01390 = [];
const Pourcentage_rejet_01390 = [];
const vote_gene_macron_01390 = [];
const vote_gene_lepen_01390 = [];
const vote_gene_rejet_01390 = [];

async function chartIt01390(){
    await GraphDATA01390();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01390-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01390
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01390
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01390-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01390,vote_lepen_01390,vote_rejet_01390]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01390-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01390,vote_lepenpop_01390,vote_rejetpop_01390]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01390"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01390
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01390
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01390
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01391*/
/*------------------------------------------------------------------ */
async function GraphDATA01391() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[390];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01391.push(vote_macron); 
    vote_lepen_01391.push(vote_lepen);
    vote_rejet_01391.push(vote_rejet);
    vote_macronpop_01391.push(vote_macronMediane);
    vote_lepenpop_01391.push(vote_lepenMediane);
    vote_rejetpop_01391.push(vote_rejetMediane);
    name_Commune_01391.push(nameCommune);
    Pourcentage_01391.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01391.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01391.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01391.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01391.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01391 = [];
const vote_lepen_01391 = [];
const vote_rejet_01391 = [];
const vote_macronpop_01391 = [];
const vote_lepenpop_01391 = [];
const vote_rejetpop_01391 = [];
const name_Commune_01391 = [];
const Pourcentage_01391 = [];
const Pourcentage_rejet_01391 = [];
const vote_gene_macron_01391 = [];
const vote_gene_lepen_01391 = [];
const vote_gene_rejet_01391 = [];

async function chartIt01391(){
    await GraphDATA01391();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01391-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01391
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01391
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01391-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01391,vote_lepen_01391,vote_rejet_01391]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01391-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01391,vote_lepenpop_01391,vote_rejetpop_01391]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01391"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01391
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01391
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01391
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01392*/
/*------------------------------------------------------------------ */
async function GraphDATA01392() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[391];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01392.push(vote_macron); 
    vote_lepen_01392.push(vote_lepen);
    vote_rejet_01392.push(vote_rejet);
    vote_macronpop_01392.push(vote_macronMediane);
    vote_lepenpop_01392.push(vote_lepenMediane);
    vote_rejetpop_01392.push(vote_rejetMediane);
    name_Commune_01392.push(nameCommune);
    Pourcentage_01392.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01392.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01392.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01392.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01392.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01392 = [];
const vote_lepen_01392 = [];
const vote_rejet_01392 = [];
const vote_macronpop_01392 = [];
const vote_lepenpop_01392 = [];
const vote_rejetpop_01392 = [];
const name_Commune_01392 = [];
const Pourcentage_01392 = [];
const Pourcentage_rejet_01392 = [];
const vote_gene_macron_01392 = [];
const vote_gene_lepen_01392 = [];
const vote_gene_rejet_01392 = [];

async function chartIt01392(){
    await GraphDATA01392();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01392-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01392
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01392
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01392-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01392,vote_lepen_01392,vote_rejet_01392]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01392-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01392,vote_lepenpop_01392,vote_rejetpop_01392]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01392"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01392
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01392
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01392
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01393*/
/*------------------------------------------------------------------ */
async function GraphDATA01393() {
    const response = await fetch('../JSON/Data_dep01.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[392];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_01393.push(vote_macron); 
    vote_lepen_01393.push(vote_lepen);
    vote_rejet_01393.push(vote_rejet);
    vote_macronpop_01393.push(vote_macronMediane);
    vote_lepenpop_01393.push(vote_lepenMediane);
    vote_rejetpop_01393.push(vote_rejetMediane);
    name_Commune_01393.push(nameCommune);
    Pourcentage_01393.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01393.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01393.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01393.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01393.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01393 = [];
const vote_lepen_01393 = [];
const vote_rejet_01393 = [];
const vote_macronpop_01393 = [];
const vote_lepenpop_01393 = [];
const vote_rejetpop_01393 = [];
const name_Commune_01393 = [];
const Pourcentage_01393 = [];
const Pourcentage_rejet_01393 = [];
const vote_gene_macron_01393 = [];
const vote_gene_lepen_01393 = [];
const vote_gene_rejet_01393 = [];

async function chartIt01393(){
    await GraphDATA01393();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01393-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01393
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01393
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01393-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01393,vote_lepen_01393,vote_rejet_01393]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01393-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01393,vote_lepenpop_01393,vote_rejetpop_01393]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01393"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01393
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01393
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01393
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
