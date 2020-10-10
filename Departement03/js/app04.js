/********************************************************************** */
/*JS GRAPHIQUE FICHIER DATA */
/********************************************************************** */
chartIt03301();
chartIt03302();
chartIt03303();
chartIt03304();
chartIt03305();
chartIt03306();
chartIt03307();
chartIt03308();
chartIt03309();
chartIt03310();
chartIt03311();
chartIt03312();
chartIt03313();
chartIt03314();
chartIt03315();
chartIt03316();
chartIt03317();
chartIt03318();
/*------------------------------------------------------------------ */
/*COMMUNE 03301*/
/*------------------------------------------------------------------ */
async function GraphDATA03301() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03301.push(vote_macron); 
    vote_lepen_03301.push(vote_lepen);
    vote_rejet_03301.push(vote_rejet);
    vote_macronpop_03301.push(vote_macronMediane);
    vote_lepenpop_03301.push(vote_lepenMediane);
    vote_rejetpop_03301.push(vote_rejetMediane);
    name_Commune_03301.push(nameCommune);
    Pourcentage_03301.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03301.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03301.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03301.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03301.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03301 = [];
const vote_lepen_03301 = [];
const vote_rejet_03301 = [];
const vote_macronpop_03301 = [];
const vote_lepenpop_03301 = [];
const vote_rejetpop_03301 = [];
const name_Commune_03301 = [];
const Pourcentage_03301 = [];
const Pourcentage_rejet_03301 = [];
const vote_gene_macron_03301 = [];
const vote_gene_lepen_03301 = [];
const vote_gene_rejet_03301 = [];

async function chartIt03301(){
    await GraphDATA03301();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03301-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03301
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03301
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03301-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03301,vote_lepen_03301,vote_rejet_03301]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03301-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03301,vote_lepenpop_03301,vote_rejetpop_03301]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03301"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03301
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03301
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03301
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03302*/
/*------------------------------------------------------------------ */
async function GraphDATA03302() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03302.push(vote_macron); 
    vote_lepen_03302.push(vote_lepen);
    vote_rejet_03302.push(vote_rejet);
    vote_macronpop_03302.push(vote_macronMediane);
    vote_lepenpop_03302.push(vote_lepenMediane);
    vote_rejetpop_03302.push(vote_rejetMediane);
    name_Commune_03302.push(nameCommune);
    Pourcentage_03302.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03302.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03302.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03302.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03302.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03302 = [];
const vote_lepen_03302 = [];
const vote_rejet_03302 = [];
const vote_macronpop_03302 = [];
const vote_lepenpop_03302 = [];
const vote_rejetpop_03302 = [];
const name_Commune_03302 = [];
const Pourcentage_03302 = [];
const Pourcentage_rejet_03302 = [];
const vote_gene_macron_03302 = [];
const vote_gene_lepen_03302 = [];
const vote_gene_rejet_03302 = [];

async function chartIt03302(){
    await GraphDATA03302();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03302-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03302
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03302
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03302-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03302,vote_lepen_03302,vote_rejet_03302]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03302-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03302,vote_lepenpop_03302,vote_rejetpop_03302]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03302"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03302
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03302
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03302
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03303*/
/*------------------------------------------------------------------ */
async function GraphDATA03303() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03303.push(vote_macron); 
    vote_lepen_03303.push(vote_lepen);
    vote_rejet_03303.push(vote_rejet);
    vote_macronpop_03303.push(vote_macronMediane);
    vote_lepenpop_03303.push(vote_lepenMediane);
    vote_rejetpop_03303.push(vote_rejetMediane);
    name_Commune_03303.push(nameCommune);
    Pourcentage_03303.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03303.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03303.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03303.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03303.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03303 = [];
const vote_lepen_03303 = [];
const vote_rejet_03303 = [];
const vote_macronpop_03303 = [];
const vote_lepenpop_03303 = [];
const vote_rejetpop_03303 = [];
const name_Commune_03303 = [];
const Pourcentage_03303 = [];
const Pourcentage_rejet_03303 = [];
const vote_gene_macron_03303 = [];
const vote_gene_lepen_03303 = [];
const vote_gene_rejet_03303 = [];

async function chartIt03303(){
    await GraphDATA03303();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03303-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03303
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03303
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03303-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03303,vote_lepen_03303,vote_rejet_03303]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03303-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03303,vote_lepenpop_03303,vote_rejetpop_03303]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03303"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03303
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03303
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03303
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03304*/
/*------------------------------------------------------------------ */
async function GraphDATA03304() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03304.push(vote_macron); 
    vote_lepen_03304.push(vote_lepen);
    vote_rejet_03304.push(vote_rejet);
    vote_macronpop_03304.push(vote_macronMediane);
    vote_lepenpop_03304.push(vote_lepenMediane);
    vote_rejetpop_03304.push(vote_rejetMediane);
    name_Commune_03304.push(nameCommune);
    Pourcentage_03304.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03304.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03304.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03304.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03304.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03304 = [];
const vote_lepen_03304 = [];
const vote_rejet_03304 = [];
const vote_macronpop_03304 = [];
const vote_lepenpop_03304 = [];
const vote_rejetpop_03304 = [];
const name_Commune_03304 = [];
const Pourcentage_03304 = [];
const Pourcentage_rejet_03304 = [];
const vote_gene_macron_03304 = [];
const vote_gene_lepen_03304 = [];
const vote_gene_rejet_03304 = [];

async function chartIt03304(){
    await GraphDATA03304();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03304-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03304
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03304
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03304-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03304,vote_lepen_03304,vote_rejet_03304]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03304-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03304,vote_lepenpop_03304,vote_rejetpop_03304]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03304"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03304
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03304
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03304
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03305*/
/*------------------------------------------------------------------ */
async function GraphDATA03305() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03305.push(vote_macron); 
    vote_lepen_03305.push(vote_lepen);
    vote_rejet_03305.push(vote_rejet);
    vote_macronpop_03305.push(vote_macronMediane);
    vote_lepenpop_03305.push(vote_lepenMediane);
    vote_rejetpop_03305.push(vote_rejetMediane);
    name_Commune_03305.push(nameCommune);
    Pourcentage_03305.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03305.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03305.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03305.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03305.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03305 = [];
const vote_lepen_03305 = [];
const vote_rejet_03305 = [];
const vote_macronpop_03305 = [];
const vote_lepenpop_03305 = [];
const vote_rejetpop_03305 = [];
const name_Commune_03305 = [];
const Pourcentage_03305 = [];
const Pourcentage_rejet_03305 = [];
const vote_gene_macron_03305 = [];
const vote_gene_lepen_03305 = [];
const vote_gene_rejet_03305 = [];

async function chartIt03305(){
    await GraphDATA03305();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03305-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03305
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03305
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03305-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03305,vote_lepen_03305,vote_rejet_03305]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03305-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03305,vote_lepenpop_03305,vote_rejetpop_03305]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03305"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03305
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03305
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03305
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03306*/
/*------------------------------------------------------------------ */
async function GraphDATA03306() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03306.push(vote_macron); 
    vote_lepen_03306.push(vote_lepen);
    vote_rejet_03306.push(vote_rejet);
    vote_macronpop_03306.push(vote_macronMediane);
    vote_lepenpop_03306.push(vote_lepenMediane);
    vote_rejetpop_03306.push(vote_rejetMediane);
    name_Commune_03306.push(nameCommune);
    Pourcentage_03306.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03306.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03306.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03306.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03306.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03306 = [];
const vote_lepen_03306 = [];
const vote_rejet_03306 = [];
const vote_macronpop_03306 = [];
const vote_lepenpop_03306 = [];
const vote_rejetpop_03306 = [];
const name_Commune_03306 = [];
const Pourcentage_03306 = [];
const Pourcentage_rejet_03306 = [];
const vote_gene_macron_03306 = [];
const vote_gene_lepen_03306 = [];
const vote_gene_rejet_03306 = [];

async function chartIt03306(){
    await GraphDATA03306();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03306-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03306
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03306
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03306-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03306,vote_lepen_03306,vote_rejet_03306]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03306-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03306,vote_lepenpop_03306,vote_rejetpop_03306]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03306"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03306
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03306
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03306
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03307*/
/*------------------------------------------------------------------ */
async function GraphDATA03307() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03307.push(vote_macron); 
    vote_lepen_03307.push(vote_lepen);
    vote_rejet_03307.push(vote_rejet);
    vote_macronpop_03307.push(vote_macronMediane);
    vote_lepenpop_03307.push(vote_lepenMediane);
    vote_rejetpop_03307.push(vote_rejetMediane);
    name_Commune_03307.push(nameCommune);
    Pourcentage_03307.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03307.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03307.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03307.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03307.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03307 = [];
const vote_lepen_03307 = [];
const vote_rejet_03307 = [];
const vote_macronpop_03307 = [];
const vote_lepenpop_03307 = [];
const vote_rejetpop_03307 = [];
const name_Commune_03307 = [];
const Pourcentage_03307 = [];
const Pourcentage_rejet_03307 = [];
const vote_gene_macron_03307 = [];
const vote_gene_lepen_03307 = [];
const vote_gene_rejet_03307 = [];

async function chartIt03307(){
    await GraphDATA03307();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03307-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03307
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03307
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03307-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03307,vote_lepen_03307,vote_rejet_03307]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03307-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03307,vote_lepenpop_03307,vote_rejetpop_03307]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03307"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03307
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03307
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03307
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03308*/
/*------------------------------------------------------------------ */
async function GraphDATA03308() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03308.push(vote_macron); 
    vote_lepen_03308.push(vote_lepen);
    vote_rejet_03308.push(vote_rejet);
    vote_macronpop_03308.push(vote_macronMediane);
    vote_lepenpop_03308.push(vote_lepenMediane);
    vote_rejetpop_03308.push(vote_rejetMediane);
    name_Commune_03308.push(nameCommune);
    Pourcentage_03308.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03308.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03308.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03308.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03308.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03308 = [];
const vote_lepen_03308 = [];
const vote_rejet_03308 = [];
const vote_macronpop_03308 = [];
const vote_lepenpop_03308 = [];
const vote_rejetpop_03308 = [];
const name_Commune_03308 = [];
const Pourcentage_03308 = [];
const Pourcentage_rejet_03308 = [];
const vote_gene_macron_03308 = [];
const vote_gene_lepen_03308 = [];
const vote_gene_rejet_03308 = [];

async function chartIt03308(){
    await GraphDATA03308();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03308-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03308
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03308
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03308-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03308,vote_lepen_03308,vote_rejet_03308]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03308-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03308,vote_lepenpop_03308,vote_rejetpop_03308]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03308"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03308
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03308
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03308
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03309*/
/*------------------------------------------------------------------ */
async function GraphDATA03309() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03309.push(vote_macron); 
    vote_lepen_03309.push(vote_lepen);
    vote_rejet_03309.push(vote_rejet);
    vote_macronpop_03309.push(vote_macronMediane);
    vote_lepenpop_03309.push(vote_lepenMediane);
    vote_rejetpop_03309.push(vote_rejetMediane);
    name_Commune_03309.push(nameCommune);
    Pourcentage_03309.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03309.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03309.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03309.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03309.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03309 = [];
const vote_lepen_03309 = [];
const vote_rejet_03309 = [];
const vote_macronpop_03309 = [];
const vote_lepenpop_03309 = [];
const vote_rejetpop_03309 = [];
const name_Commune_03309 = [];
const Pourcentage_03309 = [];
const Pourcentage_rejet_03309 = [];
const vote_gene_macron_03309 = [];
const vote_gene_lepen_03309 = [];
const vote_gene_rejet_03309 = [];

async function chartIt03309(){
    await GraphDATA03309();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03309-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03309
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03309
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03309-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03309,vote_lepen_03309,vote_rejet_03309]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03309-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03309,vote_lepenpop_03309,vote_rejetpop_03309]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03309"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03309
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03309
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03309
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03310*/
/*------------------------------------------------------------------ */
async function GraphDATA03310() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03310.push(vote_macron); 
    vote_lepen_03310.push(vote_lepen);
    vote_rejet_03310.push(vote_rejet);
    vote_macronpop_03310.push(vote_macronMediane);
    vote_lepenpop_03310.push(vote_lepenMediane);
    vote_rejetpop_03310.push(vote_rejetMediane);
    name_Commune_03310.push(nameCommune);
    Pourcentage_03310.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03310.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03310.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03310.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03310.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03310 = [];
const vote_lepen_03310 = [];
const vote_rejet_03310 = [];
const vote_macronpop_03310 = [];
const vote_lepenpop_03310 = [];
const vote_rejetpop_03310 = [];
const name_Commune_03310 = [];
const Pourcentage_03310 = [];
const Pourcentage_rejet_03310 = [];
const vote_gene_macron_03310 = [];
const vote_gene_lepen_03310 = [];
const vote_gene_rejet_03310 = [];

async function chartIt03310(){
    await GraphDATA03310();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03310-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03310
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03310
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03310-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03310,vote_lepen_03310,vote_rejet_03310]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03310-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03310,vote_lepenpop_03310,vote_rejetpop_03310]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03310"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03310
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03310
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03310
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03311*/
/*------------------------------------------------------------------ */
async function GraphDATA03311() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03311.push(vote_macron); 
    vote_lepen_03311.push(vote_lepen);
    vote_rejet_03311.push(vote_rejet);
    vote_macronpop_03311.push(vote_macronMediane);
    vote_lepenpop_03311.push(vote_lepenMediane);
    vote_rejetpop_03311.push(vote_rejetMediane);
    name_Commune_03311.push(nameCommune);
    Pourcentage_03311.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03311.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03311.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03311.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03311.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03311 = [];
const vote_lepen_03311 = [];
const vote_rejet_03311 = [];
const vote_macronpop_03311 = [];
const vote_lepenpop_03311 = [];
const vote_rejetpop_03311 = [];
const name_Commune_03311 = [];
const Pourcentage_03311 = [];
const Pourcentage_rejet_03311 = [];
const vote_gene_macron_03311 = [];
const vote_gene_lepen_03311 = [];
const vote_gene_rejet_03311 = [];

async function chartIt03311(){
    await GraphDATA03311();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03311-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03311
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03311
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03311-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03311,vote_lepen_03311,vote_rejet_03311]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03311-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03311,vote_lepenpop_03311,vote_rejetpop_03311]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03311"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03311
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03311
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03311
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03312*/
/*------------------------------------------------------------------ */
async function GraphDATA03312() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03312.push(vote_macron); 
    vote_lepen_03312.push(vote_lepen);
    vote_rejet_03312.push(vote_rejet);
    vote_macronpop_03312.push(vote_macronMediane);
    vote_lepenpop_03312.push(vote_lepenMediane);
    vote_rejetpop_03312.push(vote_rejetMediane);
    name_Commune_03312.push(nameCommune);
    Pourcentage_03312.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03312.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03312.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03312.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03312.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03312 = [];
const vote_lepen_03312 = [];
const vote_rejet_03312 = [];
const vote_macronpop_03312 = [];
const vote_lepenpop_03312 = [];
const vote_rejetpop_03312 = [];
const name_Commune_03312 = [];
const Pourcentage_03312 = [];
const Pourcentage_rejet_03312 = [];
const vote_gene_macron_03312 = [];
const vote_gene_lepen_03312 = [];
const vote_gene_rejet_03312 = [];

async function chartIt03312(){
    await GraphDATA03312();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03312-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03312
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03312
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03312-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03312,vote_lepen_03312,vote_rejet_03312]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03312-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03312,vote_lepenpop_03312,vote_rejetpop_03312]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03312"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03312
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03312
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03312
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03313*/
/*------------------------------------------------------------------ */
async function GraphDATA03313() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03313.push(vote_macron); 
    vote_lepen_03313.push(vote_lepen);
    vote_rejet_03313.push(vote_rejet);
    vote_macronpop_03313.push(vote_macronMediane);
    vote_lepenpop_03313.push(vote_lepenMediane);
    vote_rejetpop_03313.push(vote_rejetMediane);
    name_Commune_03313.push(nameCommune);
    Pourcentage_03313.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03313.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03313.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03313.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03313.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03313 = [];
const vote_lepen_03313 = [];
const vote_rejet_03313 = [];
const vote_macronpop_03313 = [];
const vote_lepenpop_03313 = [];
const vote_rejetpop_03313 = [];
const name_Commune_03313 = [];
const Pourcentage_03313 = [];
const Pourcentage_rejet_03313 = [];
const vote_gene_macron_03313 = [];
const vote_gene_lepen_03313 = [];
const vote_gene_rejet_03313 = [];

async function chartIt03313(){
    await GraphDATA03313();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03313-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03313
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03313
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03313-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03313,vote_lepen_03313,vote_rejet_03313]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03313-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03313,vote_lepenpop_03313,vote_rejetpop_03313]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03313"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03313
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03313
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03313
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03314*/
/*------------------------------------------------------------------ */
async function GraphDATA03314() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03314.push(vote_macron); 
    vote_lepen_03314.push(vote_lepen);
    vote_rejet_03314.push(vote_rejet);
    vote_macronpop_03314.push(vote_macronMediane);
    vote_lepenpop_03314.push(vote_lepenMediane);
    vote_rejetpop_03314.push(vote_rejetMediane);
    name_Commune_03314.push(nameCommune);
    Pourcentage_03314.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03314.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03314.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03314.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03314.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03314 = [];
const vote_lepen_03314 = [];
const vote_rejet_03314 = [];
const vote_macronpop_03314 = [];
const vote_lepenpop_03314 = [];
const vote_rejetpop_03314 = [];
const name_Commune_03314 = [];
const Pourcentage_03314 = [];
const Pourcentage_rejet_03314 = [];
const vote_gene_macron_03314 = [];
const vote_gene_lepen_03314 = [];
const vote_gene_rejet_03314 = [];

async function chartIt03314(){
    await GraphDATA03314();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03314-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03314
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03314
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03314-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03314,vote_lepen_03314,vote_rejet_03314]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03314-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03314,vote_lepenpop_03314,vote_rejetpop_03314]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03314"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03314
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03314
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03314
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03315*/
/*------------------------------------------------------------------ */
async function GraphDATA03315() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03315.push(vote_macron); 
    vote_lepen_03315.push(vote_lepen);
    vote_rejet_03315.push(vote_rejet);
    vote_macronpop_03315.push(vote_macronMediane);
    vote_lepenpop_03315.push(vote_lepenMediane);
    vote_rejetpop_03315.push(vote_rejetMediane);
    name_Commune_03315.push(nameCommune);
    Pourcentage_03315.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03315.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03315.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03315.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03315.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03315 = [];
const vote_lepen_03315 = [];
const vote_rejet_03315 = [];
const vote_macronpop_03315 = [];
const vote_lepenpop_03315 = [];
const vote_rejetpop_03315 = [];
const name_Commune_03315 = [];
const Pourcentage_03315 = [];
const Pourcentage_rejet_03315 = [];
const vote_gene_macron_03315 = [];
const vote_gene_lepen_03315 = [];
const vote_gene_rejet_03315 = [];

async function chartIt03315(){
    await GraphDATA03315();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03315-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03315
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03315
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03315-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03315,vote_lepen_03315,vote_rejet_03315]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03315-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03315,vote_lepenpop_03315,vote_rejetpop_03315]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03315"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03315
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03315
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03315
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03316*/
/*------------------------------------------------------------------ */
async function GraphDATA03316() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03316.push(vote_macron); 
    vote_lepen_03316.push(vote_lepen);
    vote_rejet_03316.push(vote_rejet);
    vote_macronpop_03316.push(vote_macronMediane);
    vote_lepenpop_03316.push(vote_lepenMediane);
    vote_rejetpop_03316.push(vote_rejetMediane);
    name_Commune_03316.push(nameCommune);
    Pourcentage_03316.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03316.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03316.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03316.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03316.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03316 = [];
const vote_lepen_03316 = [];
const vote_rejet_03316 = [];
const vote_macronpop_03316 = [];
const vote_lepenpop_03316 = [];
const vote_rejetpop_03316 = [];
const name_Commune_03316 = [];
const Pourcentage_03316 = [];
const Pourcentage_rejet_03316 = [];
const vote_gene_macron_03316 = [];
const vote_gene_lepen_03316 = [];
const vote_gene_rejet_03316 = [];

async function chartIt03316(){
    await GraphDATA03316();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03316-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03316
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03316
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03316-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03316,vote_lepen_03316,vote_rejet_03316]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03316-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03316,vote_lepenpop_03316,vote_rejetpop_03316]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03316"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03316
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03316
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03316
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03317*/
/*------------------------------------------------------------------ */
async function GraphDATA03317() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03317.push(vote_macron); 
    vote_lepen_03317.push(vote_lepen);
    vote_rejet_03317.push(vote_rejet);
    vote_macronpop_03317.push(vote_macronMediane);
    vote_lepenpop_03317.push(vote_lepenMediane);
    vote_rejetpop_03317.push(vote_rejetMediane);
    name_Commune_03317.push(nameCommune);
    Pourcentage_03317.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03317.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03317.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03317.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03317.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03317 = [];
const vote_lepen_03317 = [];
const vote_rejet_03317 = [];
const vote_macronpop_03317 = [];
const vote_lepenpop_03317 = [];
const vote_rejetpop_03317 = [];
const name_Commune_03317 = [];
const Pourcentage_03317 = [];
const Pourcentage_rejet_03317 = [];
const vote_gene_macron_03317 = [];
const vote_gene_lepen_03317 = [];
const vote_gene_rejet_03317 = [];

async function chartIt03317(){
    await GraphDATA03317();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03317-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03317
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03317
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03317-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03317,vote_lepen_03317,vote_rejet_03317]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03317-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03317,vote_lepenpop_03317,vote_rejetpop_03317]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03317"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03317
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03317
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03317
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 03318*/
/*------------------------------------------------------------------ */
async function GraphDATA03318() {
    const response = await fetch('../Departement03/Json/Data_dep03.json');
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
    vote_macron_03318.push(vote_macron); 
    vote_lepen_03318.push(vote_lepen);
    vote_rejet_03318.push(vote_rejet);
    vote_macronpop_03318.push(vote_macronMediane);
    vote_lepenpop_03318.push(vote_lepenMediane);
    vote_rejetpop_03318.push(vote_rejetMediane);
    name_Commune_03318.push(nameCommune);
    Pourcentage_03318.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_03318.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_03318.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_03318.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_03318.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_03318 = [];
const vote_lepen_03318 = [];
const vote_rejet_03318 = [];
const vote_macronpop_03318 = [];
const vote_lepenpop_03318 = [];
const vote_rejetpop_03318 = [];
const name_Commune_03318 = [];
const Pourcentage_03318 = [];
const Pourcentage_rejet_03318 = [];
const vote_gene_macron_03318 = [];
const vote_gene_lepen_03318 = [];
const vote_gene_rejet_03318 = [];

async function chartIt03318(){
    await GraphDATA03318();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_03318-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_03318
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_03318
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_03318-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_03318,vote_lepen_03318,vote_rejet_03318]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_03318-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_03318,vote_lepenpop_03318,vote_rejetpop_03318]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_03318"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_03318
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_03318
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_03318
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
