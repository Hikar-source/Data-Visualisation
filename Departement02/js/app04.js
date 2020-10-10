/********************************************************************** */
/*JS GRAPHIQUE FICHIER DATA */
/********************************************************************** */
chartIt02301();
chartIt02302();
chartIt02303();
chartIt02304();
chartIt02305();
chartIt02306();
chartIt02307();
chartIt02308();
chartIt02309();
chartIt02310();
chartIt02311();
chartIt02312();
chartIt02313();
chartIt02314();
chartIt02315();
chartIt02316();
chartIt02317();
chartIt02318();
chartIt02319();
chartIt02320();
chartIt02321();
chartIt02322();
chartIt02323();
chartIt02324();
chartIt02325();
chartIt02326();
chartIt02327();
chartIt02328();
chartIt02329();
chartIt02330();
chartIt02331();
chartIt02332();
chartIt02333();
chartIt02334();
chartIt02335();
chartIt02336();
chartIt02337();
chartIt02338();
chartIt02339();
chartIt02340();
chartIt02341();
chartIt02342();
chartIt02343();
chartIt02344();
chartIt02345();
chartIt02346();
chartIt02347();
chartIt02348();
chartIt02349();
chartIt02350();
chartIt02351();
chartIt02352();
chartIt02353();
chartIt02354();
chartIt02355();
chartIt02356();
chartIt02357();
chartIt02358();
chartIt02359();
chartIt02360();
chartIt02361();
chartIt02362();
chartIt02363();
chartIt02364();
chartIt02365();
chartIt02366();
chartIt02367();
chartIt02368();
chartIt02369();
chartIt02370();
chartIt02371();
chartIt02372();
chartIt02373();
chartIt02374();
chartIt02375();
chartIt02376();
chartIt02377();
chartIt02378();
chartIt02379();
chartIt02380();
chartIt02381();
chartIt02382();
chartIt02383();
chartIt02384();
chartIt02385();
chartIt02386();
chartIt02387();
chartIt02388();
chartIt02389();
chartIt02390();
chartIt02391();
chartIt02392();
chartIt02393();
chartIt02394();
chartIt02395();
chartIt02396();
chartIt02397();
chartIt02398();
chartIt02399();
/*------------------------------------------------------------------ */
/*COMMUNE 02301*/
/*------------------------------------------------------------------ */
async function GraphDATA02301() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02301.push(vote_macron); 
    vote_lepen_02301.push(vote_lepen);
    vote_rejet_02301.push(vote_rejet);
    vote_macronpop_02301.push(vote_macronMediane);
    vote_lepenpop_02301.push(vote_lepenMediane);
    vote_rejetpop_02301.push(vote_rejetMediane);
    name_Commune_02301.push(nameCommune);
    Pourcentage_02301.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02301.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02301.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02301.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02301.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02301 = [];
const vote_lepen_02301 = [];
const vote_rejet_02301 = [];
const vote_macronpop_02301 = [];
const vote_lepenpop_02301 = [];
const vote_rejetpop_02301 = [];
const name_Commune_02301 = [];
const Pourcentage_02301 = [];
const Pourcentage_rejet_02301 = [];
const vote_gene_macron_02301 = [];
const vote_gene_lepen_02301 = [];
const vote_gene_rejet_02301 = [];

async function chartIt02301(){
    await GraphDATA02301();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02301-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02301
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02301
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02301-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02301,vote_lepen_02301,vote_rejet_02301]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02301-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02301,vote_lepenpop_02301,vote_rejetpop_02301]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02301"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02301
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02301
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02301
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02302*/
/*------------------------------------------------------------------ */
async function GraphDATA02302() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02302.push(vote_macron); 
    vote_lepen_02302.push(vote_lepen);
    vote_rejet_02302.push(vote_rejet);
    vote_macronpop_02302.push(vote_macronMediane);
    vote_lepenpop_02302.push(vote_lepenMediane);
    vote_rejetpop_02302.push(vote_rejetMediane);
    name_Commune_02302.push(nameCommune);
    Pourcentage_02302.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02302.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02302.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02302.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02302.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02302 = [];
const vote_lepen_02302 = [];
const vote_rejet_02302 = [];
const vote_macronpop_02302 = [];
const vote_lepenpop_02302 = [];
const vote_rejetpop_02302 = [];
const name_Commune_02302 = [];
const Pourcentage_02302 = [];
const Pourcentage_rejet_02302 = [];
const vote_gene_macron_02302 = [];
const vote_gene_lepen_02302 = [];
const vote_gene_rejet_02302 = [];

async function chartIt02302(){
    await GraphDATA02302();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02302-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02302
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02302
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02302-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02302,vote_lepen_02302,vote_rejet_02302]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02302-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02302,vote_lepenpop_02302,vote_rejetpop_02302]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02302"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02302
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02302
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02302
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02303*/
/*------------------------------------------------------------------ */
async function GraphDATA02303() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02303.push(vote_macron); 
    vote_lepen_02303.push(vote_lepen);
    vote_rejet_02303.push(vote_rejet);
    vote_macronpop_02303.push(vote_macronMediane);
    vote_lepenpop_02303.push(vote_lepenMediane);
    vote_rejetpop_02303.push(vote_rejetMediane);
    name_Commune_02303.push(nameCommune);
    Pourcentage_02303.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02303.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02303.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02303.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02303.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02303 = [];
const vote_lepen_02303 = [];
const vote_rejet_02303 = [];
const vote_macronpop_02303 = [];
const vote_lepenpop_02303 = [];
const vote_rejetpop_02303 = [];
const name_Commune_02303 = [];
const Pourcentage_02303 = [];
const Pourcentage_rejet_02303 = [];
const vote_gene_macron_02303 = [];
const vote_gene_lepen_02303 = [];
const vote_gene_rejet_02303 = [];

async function chartIt02303(){
    await GraphDATA02303();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02303-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02303
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02303
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02303-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02303,vote_lepen_02303,vote_rejet_02303]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02303-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02303,vote_lepenpop_02303,vote_rejetpop_02303]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02303"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02303
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02303
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02303
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02304*/
/*------------------------------------------------------------------ */
async function GraphDATA02304() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02304.push(vote_macron); 
    vote_lepen_02304.push(vote_lepen);
    vote_rejet_02304.push(vote_rejet);
    vote_macronpop_02304.push(vote_macronMediane);
    vote_lepenpop_02304.push(vote_lepenMediane);
    vote_rejetpop_02304.push(vote_rejetMediane);
    name_Commune_02304.push(nameCommune);
    Pourcentage_02304.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02304.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02304.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02304.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02304.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02304 = [];
const vote_lepen_02304 = [];
const vote_rejet_02304 = [];
const vote_macronpop_02304 = [];
const vote_lepenpop_02304 = [];
const vote_rejetpop_02304 = [];
const name_Commune_02304 = [];
const Pourcentage_02304 = [];
const Pourcentage_rejet_02304 = [];
const vote_gene_macron_02304 = [];
const vote_gene_lepen_02304 = [];
const vote_gene_rejet_02304 = [];

async function chartIt02304(){
    await GraphDATA02304();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02304-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02304
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02304
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02304-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02304,vote_lepen_02304,vote_rejet_02304]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02304-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02304,vote_lepenpop_02304,vote_rejetpop_02304]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02304"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02304
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02304
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02304
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02305*/
/*------------------------------------------------------------------ */
async function GraphDATA02305() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02305.push(vote_macron); 
    vote_lepen_02305.push(vote_lepen);
    vote_rejet_02305.push(vote_rejet);
    vote_macronpop_02305.push(vote_macronMediane);
    vote_lepenpop_02305.push(vote_lepenMediane);
    vote_rejetpop_02305.push(vote_rejetMediane);
    name_Commune_02305.push(nameCommune);
    Pourcentage_02305.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02305.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02305.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02305.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02305.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02305 = [];
const vote_lepen_02305 = [];
const vote_rejet_02305 = [];
const vote_macronpop_02305 = [];
const vote_lepenpop_02305 = [];
const vote_rejetpop_02305 = [];
const name_Commune_02305 = [];
const Pourcentage_02305 = [];
const Pourcentage_rejet_02305 = [];
const vote_gene_macron_02305 = [];
const vote_gene_lepen_02305 = [];
const vote_gene_rejet_02305 = [];

async function chartIt02305(){
    await GraphDATA02305();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02305-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02305
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02305
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02305-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02305,vote_lepen_02305,vote_rejet_02305]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02305-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02305,vote_lepenpop_02305,vote_rejetpop_02305]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02305"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02305
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02305
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02305
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02306*/
/*------------------------------------------------------------------ */
async function GraphDATA02306() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02306.push(vote_macron); 
    vote_lepen_02306.push(vote_lepen);
    vote_rejet_02306.push(vote_rejet);
    vote_macronpop_02306.push(vote_macronMediane);
    vote_lepenpop_02306.push(vote_lepenMediane);
    vote_rejetpop_02306.push(vote_rejetMediane);
    name_Commune_02306.push(nameCommune);
    Pourcentage_02306.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02306.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02306.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02306.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02306.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02306 = [];
const vote_lepen_02306 = [];
const vote_rejet_02306 = [];
const vote_macronpop_02306 = [];
const vote_lepenpop_02306 = [];
const vote_rejetpop_02306 = [];
const name_Commune_02306 = [];
const Pourcentage_02306 = [];
const Pourcentage_rejet_02306 = [];
const vote_gene_macron_02306 = [];
const vote_gene_lepen_02306 = [];
const vote_gene_rejet_02306 = [];

async function chartIt02306(){
    await GraphDATA02306();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02306-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02306
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02306
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02306-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02306,vote_lepen_02306,vote_rejet_02306]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02306-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02306,vote_lepenpop_02306,vote_rejetpop_02306]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02306"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02306
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02306
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02306
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02307*/
/*------------------------------------------------------------------ */
async function GraphDATA02307() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02307.push(vote_macron); 
    vote_lepen_02307.push(vote_lepen);
    vote_rejet_02307.push(vote_rejet);
    vote_macronpop_02307.push(vote_macronMediane);
    vote_lepenpop_02307.push(vote_lepenMediane);
    vote_rejetpop_02307.push(vote_rejetMediane);
    name_Commune_02307.push(nameCommune);
    Pourcentage_02307.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02307.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02307.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02307.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02307.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02307 = [];
const vote_lepen_02307 = [];
const vote_rejet_02307 = [];
const vote_macronpop_02307 = [];
const vote_lepenpop_02307 = [];
const vote_rejetpop_02307 = [];
const name_Commune_02307 = [];
const Pourcentage_02307 = [];
const Pourcentage_rejet_02307 = [];
const vote_gene_macron_02307 = [];
const vote_gene_lepen_02307 = [];
const vote_gene_rejet_02307 = [];

async function chartIt02307(){
    await GraphDATA02307();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02307-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02307
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02307
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02307-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02307,vote_lepen_02307,vote_rejet_02307]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02307-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02307,vote_lepenpop_02307,vote_rejetpop_02307]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02307"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02307
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02307
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02307
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02308*/
/*------------------------------------------------------------------ */
async function GraphDATA02308() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02308.push(vote_macron); 
    vote_lepen_02308.push(vote_lepen);
    vote_rejet_02308.push(vote_rejet);
    vote_macronpop_02308.push(vote_macronMediane);
    vote_lepenpop_02308.push(vote_lepenMediane);
    vote_rejetpop_02308.push(vote_rejetMediane);
    name_Commune_02308.push(nameCommune);
    Pourcentage_02308.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02308.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02308.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02308.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02308.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02308 = [];
const vote_lepen_02308 = [];
const vote_rejet_02308 = [];
const vote_macronpop_02308 = [];
const vote_lepenpop_02308 = [];
const vote_rejetpop_02308 = [];
const name_Commune_02308 = [];
const Pourcentage_02308 = [];
const Pourcentage_rejet_02308 = [];
const vote_gene_macron_02308 = [];
const vote_gene_lepen_02308 = [];
const vote_gene_rejet_02308 = [];

async function chartIt02308(){
    await GraphDATA02308();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02308-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02308
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02308
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02308-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02308,vote_lepen_02308,vote_rejet_02308]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02308-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02308,vote_lepenpop_02308,vote_rejetpop_02308]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02308"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02308
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02308
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02308
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02309*/
/*------------------------------------------------------------------ */
async function GraphDATA02309() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02309.push(vote_macron); 
    vote_lepen_02309.push(vote_lepen);
    vote_rejet_02309.push(vote_rejet);
    vote_macronpop_02309.push(vote_macronMediane);
    vote_lepenpop_02309.push(vote_lepenMediane);
    vote_rejetpop_02309.push(vote_rejetMediane);
    name_Commune_02309.push(nameCommune);
    Pourcentage_02309.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02309.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02309.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02309.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02309.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02309 = [];
const vote_lepen_02309 = [];
const vote_rejet_02309 = [];
const vote_macronpop_02309 = [];
const vote_lepenpop_02309 = [];
const vote_rejetpop_02309 = [];
const name_Commune_02309 = [];
const Pourcentage_02309 = [];
const Pourcentage_rejet_02309 = [];
const vote_gene_macron_02309 = [];
const vote_gene_lepen_02309 = [];
const vote_gene_rejet_02309 = [];

async function chartIt02309(){
    await GraphDATA02309();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02309-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02309
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02309
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02309-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02309,vote_lepen_02309,vote_rejet_02309]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02309-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02309,vote_lepenpop_02309,vote_rejetpop_02309]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02309"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02309
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02309
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02309
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02310*/
/*------------------------------------------------------------------ */
async function GraphDATA02310() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02310.push(vote_macron); 
    vote_lepen_02310.push(vote_lepen);
    vote_rejet_02310.push(vote_rejet);
    vote_macronpop_02310.push(vote_macronMediane);
    vote_lepenpop_02310.push(vote_lepenMediane);
    vote_rejetpop_02310.push(vote_rejetMediane);
    name_Commune_02310.push(nameCommune);
    Pourcentage_02310.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02310.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02310.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02310.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02310.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02310 = [];
const vote_lepen_02310 = [];
const vote_rejet_02310 = [];
const vote_macronpop_02310 = [];
const vote_lepenpop_02310 = [];
const vote_rejetpop_02310 = [];
const name_Commune_02310 = [];
const Pourcentage_02310 = [];
const Pourcentage_rejet_02310 = [];
const vote_gene_macron_02310 = [];
const vote_gene_lepen_02310 = [];
const vote_gene_rejet_02310 = [];

async function chartIt02310(){
    await GraphDATA02310();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02310-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02310
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02310
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02310-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02310,vote_lepen_02310,vote_rejet_02310]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02310-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02310,vote_lepenpop_02310,vote_rejetpop_02310]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02310"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02310
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02310
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02310
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02311*/
/*------------------------------------------------------------------ */
async function GraphDATA02311() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02311.push(vote_macron); 
    vote_lepen_02311.push(vote_lepen);
    vote_rejet_02311.push(vote_rejet);
    vote_macronpop_02311.push(vote_macronMediane);
    vote_lepenpop_02311.push(vote_lepenMediane);
    vote_rejetpop_02311.push(vote_rejetMediane);
    name_Commune_02311.push(nameCommune);
    Pourcentage_02311.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02311.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02311.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02311.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02311.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02311 = [];
const vote_lepen_02311 = [];
const vote_rejet_02311 = [];
const vote_macronpop_02311 = [];
const vote_lepenpop_02311 = [];
const vote_rejetpop_02311 = [];
const name_Commune_02311 = [];
const Pourcentage_02311 = [];
const Pourcentage_rejet_02311 = [];
const vote_gene_macron_02311 = [];
const vote_gene_lepen_02311 = [];
const vote_gene_rejet_02311 = [];

async function chartIt02311(){
    await GraphDATA02311();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02311-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02311
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02311
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02311-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02311,vote_lepen_02311,vote_rejet_02311]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02311-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02311,vote_lepenpop_02311,vote_rejetpop_02311]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02311"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02311
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02311
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02311
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02312*/
/*------------------------------------------------------------------ */
async function GraphDATA02312() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02312.push(vote_macron); 
    vote_lepen_02312.push(vote_lepen);
    vote_rejet_02312.push(vote_rejet);
    vote_macronpop_02312.push(vote_macronMediane);
    vote_lepenpop_02312.push(vote_lepenMediane);
    vote_rejetpop_02312.push(vote_rejetMediane);
    name_Commune_02312.push(nameCommune);
    Pourcentage_02312.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02312.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02312.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02312.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02312.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02312 = [];
const vote_lepen_02312 = [];
const vote_rejet_02312 = [];
const vote_macronpop_02312 = [];
const vote_lepenpop_02312 = [];
const vote_rejetpop_02312 = [];
const name_Commune_02312 = [];
const Pourcentage_02312 = [];
const Pourcentage_rejet_02312 = [];
const vote_gene_macron_02312 = [];
const vote_gene_lepen_02312 = [];
const vote_gene_rejet_02312 = [];

async function chartIt02312(){
    await GraphDATA02312();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02312-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02312
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02312
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02312-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02312,vote_lepen_02312,vote_rejet_02312]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02312-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02312,vote_lepenpop_02312,vote_rejetpop_02312]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02312"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02312
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02312
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02312
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02313*/
/*------------------------------------------------------------------ */
async function GraphDATA02313() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02313.push(vote_macron); 
    vote_lepen_02313.push(vote_lepen);
    vote_rejet_02313.push(vote_rejet);
    vote_macronpop_02313.push(vote_macronMediane);
    vote_lepenpop_02313.push(vote_lepenMediane);
    vote_rejetpop_02313.push(vote_rejetMediane);
    name_Commune_02313.push(nameCommune);
    Pourcentage_02313.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02313.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02313.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02313.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02313.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02313 = [];
const vote_lepen_02313 = [];
const vote_rejet_02313 = [];
const vote_macronpop_02313 = [];
const vote_lepenpop_02313 = [];
const vote_rejetpop_02313 = [];
const name_Commune_02313 = [];
const Pourcentage_02313 = [];
const Pourcentage_rejet_02313 = [];
const vote_gene_macron_02313 = [];
const vote_gene_lepen_02313 = [];
const vote_gene_rejet_02313 = [];

async function chartIt02313(){
    await GraphDATA02313();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02313-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02313
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02313
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02313-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02313,vote_lepen_02313,vote_rejet_02313]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02313-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02313,vote_lepenpop_02313,vote_rejetpop_02313]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02313"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02313
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02313
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02313
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02314*/
/*------------------------------------------------------------------ */
async function GraphDATA02314() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02314.push(vote_macron); 
    vote_lepen_02314.push(vote_lepen);
    vote_rejet_02314.push(vote_rejet);
    vote_macronpop_02314.push(vote_macronMediane);
    vote_lepenpop_02314.push(vote_lepenMediane);
    vote_rejetpop_02314.push(vote_rejetMediane);
    name_Commune_02314.push(nameCommune);
    Pourcentage_02314.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02314.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02314.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02314.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02314.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02314 = [];
const vote_lepen_02314 = [];
const vote_rejet_02314 = [];
const vote_macronpop_02314 = [];
const vote_lepenpop_02314 = [];
const vote_rejetpop_02314 = [];
const name_Commune_02314 = [];
const Pourcentage_02314 = [];
const Pourcentage_rejet_02314 = [];
const vote_gene_macron_02314 = [];
const vote_gene_lepen_02314 = [];
const vote_gene_rejet_02314 = [];

async function chartIt02314(){
    await GraphDATA02314();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02314-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02314
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02314
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02314-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02314,vote_lepen_02314,vote_rejet_02314]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02314-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02314,vote_lepenpop_02314,vote_rejetpop_02314]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02314"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02314
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02314
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02314
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02315*/
/*------------------------------------------------------------------ */
async function GraphDATA02315() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02315.push(vote_macron); 
    vote_lepen_02315.push(vote_lepen);
    vote_rejet_02315.push(vote_rejet);
    vote_macronpop_02315.push(vote_macronMediane);
    vote_lepenpop_02315.push(vote_lepenMediane);
    vote_rejetpop_02315.push(vote_rejetMediane);
    name_Commune_02315.push(nameCommune);
    Pourcentage_02315.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02315.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02315.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02315.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02315.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02315 = [];
const vote_lepen_02315 = [];
const vote_rejet_02315 = [];
const vote_macronpop_02315 = [];
const vote_lepenpop_02315 = [];
const vote_rejetpop_02315 = [];
const name_Commune_02315 = [];
const Pourcentage_02315 = [];
const Pourcentage_rejet_02315 = [];
const vote_gene_macron_02315 = [];
const vote_gene_lepen_02315 = [];
const vote_gene_rejet_02315 = [];

async function chartIt02315(){
    await GraphDATA02315();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02315-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02315
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02315
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02315-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02315,vote_lepen_02315,vote_rejet_02315]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02315-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02315,vote_lepenpop_02315,vote_rejetpop_02315]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02315"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02315
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02315
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02315
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02316*/
/*------------------------------------------------------------------ */
async function GraphDATA02316() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02316.push(vote_macron); 
    vote_lepen_02316.push(vote_lepen);
    vote_rejet_02316.push(vote_rejet);
    vote_macronpop_02316.push(vote_macronMediane);
    vote_lepenpop_02316.push(vote_lepenMediane);
    vote_rejetpop_02316.push(vote_rejetMediane);
    name_Commune_02316.push(nameCommune);
    Pourcentage_02316.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02316.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02316.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02316.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02316.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02316 = [];
const vote_lepen_02316 = [];
const vote_rejet_02316 = [];
const vote_macronpop_02316 = [];
const vote_lepenpop_02316 = [];
const vote_rejetpop_02316 = [];
const name_Commune_02316 = [];
const Pourcentage_02316 = [];
const Pourcentage_rejet_02316 = [];
const vote_gene_macron_02316 = [];
const vote_gene_lepen_02316 = [];
const vote_gene_rejet_02316 = [];

async function chartIt02316(){
    await GraphDATA02316();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02316-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02316
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02316
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02316-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02316,vote_lepen_02316,vote_rejet_02316]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02316-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02316,vote_lepenpop_02316,vote_rejetpop_02316]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02316"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02316
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02316
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02316
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02317*/
/*------------------------------------------------------------------ */
async function GraphDATA02317() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02317.push(vote_macron); 
    vote_lepen_02317.push(vote_lepen);
    vote_rejet_02317.push(vote_rejet);
    vote_macronpop_02317.push(vote_macronMediane);
    vote_lepenpop_02317.push(vote_lepenMediane);
    vote_rejetpop_02317.push(vote_rejetMediane);
    name_Commune_02317.push(nameCommune);
    Pourcentage_02317.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02317.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02317.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02317.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02317.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02317 = [];
const vote_lepen_02317 = [];
const vote_rejet_02317 = [];
const vote_macronpop_02317 = [];
const vote_lepenpop_02317 = [];
const vote_rejetpop_02317 = [];
const name_Commune_02317 = [];
const Pourcentage_02317 = [];
const Pourcentage_rejet_02317 = [];
const vote_gene_macron_02317 = [];
const vote_gene_lepen_02317 = [];
const vote_gene_rejet_02317 = [];

async function chartIt02317(){
    await GraphDATA02317();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02317-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02317
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02317
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02317-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02317,vote_lepen_02317,vote_rejet_02317]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02317-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02317,vote_lepenpop_02317,vote_rejetpop_02317]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02317"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02317
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02317
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02317
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02318*/
/*------------------------------------------------------------------ */
async function GraphDATA02318() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02318.push(vote_macron); 
    vote_lepen_02318.push(vote_lepen);
    vote_rejet_02318.push(vote_rejet);
    vote_macronpop_02318.push(vote_macronMediane);
    vote_lepenpop_02318.push(vote_lepenMediane);
    vote_rejetpop_02318.push(vote_rejetMediane);
    name_Commune_02318.push(nameCommune);
    Pourcentage_02318.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02318.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02318.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02318.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02318.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02318 = [];
const vote_lepen_02318 = [];
const vote_rejet_02318 = [];
const vote_macronpop_02318 = [];
const vote_lepenpop_02318 = [];
const vote_rejetpop_02318 = [];
const name_Commune_02318 = [];
const Pourcentage_02318 = [];
const Pourcentage_rejet_02318 = [];
const vote_gene_macron_02318 = [];
const vote_gene_lepen_02318 = [];
const vote_gene_rejet_02318 = [];

async function chartIt02318(){
    await GraphDATA02318();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02318-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02318
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02318
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02318-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02318,vote_lepen_02318,vote_rejet_02318]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02318-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02318,vote_lepenpop_02318,vote_rejetpop_02318]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02318"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02318
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02318
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02318
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02319*/
/*------------------------------------------------------------------ */
async function GraphDATA02319() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02319.push(vote_macron); 
    vote_lepen_02319.push(vote_lepen);
    vote_rejet_02319.push(vote_rejet);
    vote_macronpop_02319.push(vote_macronMediane);
    vote_lepenpop_02319.push(vote_lepenMediane);
    vote_rejetpop_02319.push(vote_rejetMediane);
    name_Commune_02319.push(nameCommune);
    Pourcentage_02319.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02319.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02319.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02319.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02319.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02319 = [];
const vote_lepen_02319 = [];
const vote_rejet_02319 = [];
const vote_macronpop_02319 = [];
const vote_lepenpop_02319 = [];
const vote_rejetpop_02319 = [];
const name_Commune_02319 = [];
const Pourcentage_02319 = [];
const Pourcentage_rejet_02319 = [];
const vote_gene_macron_02319 = [];
const vote_gene_lepen_02319 = [];
const vote_gene_rejet_02319 = [];

async function chartIt02319(){
    await GraphDATA02319();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02319-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02319
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02319
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02319-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02319,vote_lepen_02319,vote_rejet_02319]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02319-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02319,vote_lepenpop_02319,vote_rejetpop_02319]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02319"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02319
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02319
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02319
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02320*/
/*------------------------------------------------------------------ */
async function GraphDATA02320() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02320.push(vote_macron); 
    vote_lepen_02320.push(vote_lepen);
    vote_rejet_02320.push(vote_rejet);
    vote_macronpop_02320.push(vote_macronMediane);
    vote_lepenpop_02320.push(vote_lepenMediane);
    vote_rejetpop_02320.push(vote_rejetMediane);
    name_Commune_02320.push(nameCommune);
    Pourcentage_02320.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02320.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02320.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02320.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02320.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02320 = [];
const vote_lepen_02320 = [];
const vote_rejet_02320 = [];
const vote_macronpop_02320 = [];
const vote_lepenpop_02320 = [];
const vote_rejetpop_02320 = [];
const name_Commune_02320 = [];
const Pourcentage_02320 = [];
const Pourcentage_rejet_02320 = [];
const vote_gene_macron_02320 = [];
const vote_gene_lepen_02320 = [];
const vote_gene_rejet_02320 = [];

async function chartIt02320(){
    await GraphDATA02320();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02320-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02320
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02320
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02320-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02320,vote_lepen_02320,vote_rejet_02320]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02320-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02320,vote_lepenpop_02320,vote_rejetpop_02320]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02320"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02320
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02320
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02320
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02321*/
/*------------------------------------------------------------------ */
async function GraphDATA02321() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02321.push(vote_macron); 
    vote_lepen_02321.push(vote_lepen);
    vote_rejet_02321.push(vote_rejet);
    vote_macronpop_02321.push(vote_macronMediane);
    vote_lepenpop_02321.push(vote_lepenMediane);
    vote_rejetpop_02321.push(vote_rejetMediane);
    name_Commune_02321.push(nameCommune);
    Pourcentage_02321.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02321.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02321.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02321.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02321.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02321 = [];
const vote_lepen_02321 = [];
const vote_rejet_02321 = [];
const vote_macronpop_02321 = [];
const vote_lepenpop_02321 = [];
const vote_rejetpop_02321 = [];
const name_Commune_02321 = [];
const Pourcentage_02321 = [];
const Pourcentage_rejet_02321 = [];
const vote_gene_macron_02321 = [];
const vote_gene_lepen_02321 = [];
const vote_gene_rejet_02321 = [];

async function chartIt02321(){
    await GraphDATA02321();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02321-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02321
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02321
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02321-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02321,vote_lepen_02321,vote_rejet_02321]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02321-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02321,vote_lepenpop_02321,vote_rejetpop_02321]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02321"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02321
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02321
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02321
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02322*/
/*------------------------------------------------------------------ */
async function GraphDATA02322() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02322.push(vote_macron); 
    vote_lepen_02322.push(vote_lepen);
    vote_rejet_02322.push(vote_rejet);
    vote_macronpop_02322.push(vote_macronMediane);
    vote_lepenpop_02322.push(vote_lepenMediane);
    vote_rejetpop_02322.push(vote_rejetMediane);
    name_Commune_02322.push(nameCommune);
    Pourcentage_02322.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02322.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02322.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02322.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02322.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02322 = [];
const vote_lepen_02322 = [];
const vote_rejet_02322 = [];
const vote_macronpop_02322 = [];
const vote_lepenpop_02322 = [];
const vote_rejetpop_02322 = [];
const name_Commune_02322 = [];
const Pourcentage_02322 = [];
const Pourcentage_rejet_02322 = [];
const vote_gene_macron_02322 = [];
const vote_gene_lepen_02322 = [];
const vote_gene_rejet_02322 = [];

async function chartIt02322(){
    await GraphDATA02322();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02322-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02322
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02322
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02322-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02322,vote_lepen_02322,vote_rejet_02322]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02322-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02322,vote_lepenpop_02322,vote_rejetpop_02322]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02322"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02322
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02322
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02322
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02323*/
/*------------------------------------------------------------------ */
async function GraphDATA02323() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02323.push(vote_macron); 
    vote_lepen_02323.push(vote_lepen);
    vote_rejet_02323.push(vote_rejet);
    vote_macronpop_02323.push(vote_macronMediane);
    vote_lepenpop_02323.push(vote_lepenMediane);
    vote_rejetpop_02323.push(vote_rejetMediane);
    name_Commune_02323.push(nameCommune);
    Pourcentage_02323.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02323.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02323.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02323.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02323.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02323 = [];
const vote_lepen_02323 = [];
const vote_rejet_02323 = [];
const vote_macronpop_02323 = [];
const vote_lepenpop_02323 = [];
const vote_rejetpop_02323 = [];
const name_Commune_02323 = [];
const Pourcentage_02323 = [];
const Pourcentage_rejet_02323 = [];
const vote_gene_macron_02323 = [];
const vote_gene_lepen_02323 = [];
const vote_gene_rejet_02323 = [];

async function chartIt02323(){
    await GraphDATA02323();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02323-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02323
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02323
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02323-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02323,vote_lepen_02323,vote_rejet_02323]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02323-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02323,vote_lepenpop_02323,vote_rejetpop_02323]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02323"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02323
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02323
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02323
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02324*/
/*------------------------------------------------------------------ */
async function GraphDATA02324() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02324.push(vote_macron); 
    vote_lepen_02324.push(vote_lepen);
    vote_rejet_02324.push(vote_rejet);
    vote_macronpop_02324.push(vote_macronMediane);
    vote_lepenpop_02324.push(vote_lepenMediane);
    vote_rejetpop_02324.push(vote_rejetMediane);
    name_Commune_02324.push(nameCommune);
    Pourcentage_02324.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02324.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02324.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02324.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02324.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02324 = [];
const vote_lepen_02324 = [];
const vote_rejet_02324 = [];
const vote_macronpop_02324 = [];
const vote_lepenpop_02324 = [];
const vote_rejetpop_02324 = [];
const name_Commune_02324 = [];
const Pourcentage_02324 = [];
const Pourcentage_rejet_02324 = [];
const vote_gene_macron_02324 = [];
const vote_gene_lepen_02324 = [];
const vote_gene_rejet_02324 = [];

async function chartIt02324(){
    await GraphDATA02324();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02324-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02324
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02324
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02324-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02324,vote_lepen_02324,vote_rejet_02324]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02324-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02324,vote_lepenpop_02324,vote_rejetpop_02324]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02324"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02324
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02324
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02324
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02325*/
/*------------------------------------------------------------------ */
async function GraphDATA02325() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02325.push(vote_macron); 
    vote_lepen_02325.push(vote_lepen);
    vote_rejet_02325.push(vote_rejet);
    vote_macronpop_02325.push(vote_macronMediane);
    vote_lepenpop_02325.push(vote_lepenMediane);
    vote_rejetpop_02325.push(vote_rejetMediane);
    name_Commune_02325.push(nameCommune);
    Pourcentage_02325.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02325.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02325.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02325.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02325.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02325 = [];
const vote_lepen_02325 = [];
const vote_rejet_02325 = [];
const vote_macronpop_02325 = [];
const vote_lepenpop_02325 = [];
const vote_rejetpop_02325 = [];
const name_Commune_02325 = [];
const Pourcentage_02325 = [];
const Pourcentage_rejet_02325 = [];
const vote_gene_macron_02325 = [];
const vote_gene_lepen_02325 = [];
const vote_gene_rejet_02325 = [];

async function chartIt02325(){
    await GraphDATA02325();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02325-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02325
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02325
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02325-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02325,vote_lepen_02325,vote_rejet_02325]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02325-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02325,vote_lepenpop_02325,vote_rejetpop_02325]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02325"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02325
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02325
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02325
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02326*/
/*------------------------------------------------------------------ */
async function GraphDATA02326() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02326.push(vote_macron); 
    vote_lepen_02326.push(vote_lepen);
    vote_rejet_02326.push(vote_rejet);
    vote_macronpop_02326.push(vote_macronMediane);
    vote_lepenpop_02326.push(vote_lepenMediane);
    vote_rejetpop_02326.push(vote_rejetMediane);
    name_Commune_02326.push(nameCommune);
    Pourcentage_02326.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02326.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02326.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02326.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02326.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02326 = [];
const vote_lepen_02326 = [];
const vote_rejet_02326 = [];
const vote_macronpop_02326 = [];
const vote_lepenpop_02326 = [];
const vote_rejetpop_02326 = [];
const name_Commune_02326 = [];
const Pourcentage_02326 = [];
const Pourcentage_rejet_02326 = [];
const vote_gene_macron_02326 = [];
const vote_gene_lepen_02326 = [];
const vote_gene_rejet_02326 = [];

async function chartIt02326(){
    await GraphDATA02326();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02326-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02326
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02326
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02326-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02326,vote_lepen_02326,vote_rejet_02326]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02326-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02326,vote_lepenpop_02326,vote_rejetpop_02326]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02326"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02326
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02326
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02326
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02327*/
/*------------------------------------------------------------------ */
async function GraphDATA02327() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02327.push(vote_macron); 
    vote_lepen_02327.push(vote_lepen);
    vote_rejet_02327.push(vote_rejet);
    vote_macronpop_02327.push(vote_macronMediane);
    vote_lepenpop_02327.push(vote_lepenMediane);
    vote_rejetpop_02327.push(vote_rejetMediane);
    name_Commune_02327.push(nameCommune);
    Pourcentage_02327.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02327.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02327.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02327.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02327.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02327 = [];
const vote_lepen_02327 = [];
const vote_rejet_02327 = [];
const vote_macronpop_02327 = [];
const vote_lepenpop_02327 = [];
const vote_rejetpop_02327 = [];
const name_Commune_02327 = [];
const Pourcentage_02327 = [];
const Pourcentage_rejet_02327 = [];
const vote_gene_macron_02327 = [];
const vote_gene_lepen_02327 = [];
const vote_gene_rejet_02327 = [];

async function chartIt02327(){
    await GraphDATA02327();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02327-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02327
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02327
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02327-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02327,vote_lepen_02327,vote_rejet_02327]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02327-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02327,vote_lepenpop_02327,vote_rejetpop_02327]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02327"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02327
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02327
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02327
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02328*/
/*------------------------------------------------------------------ */
async function GraphDATA02328() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02328.push(vote_macron); 
    vote_lepen_02328.push(vote_lepen);
    vote_rejet_02328.push(vote_rejet);
    vote_macronpop_02328.push(vote_macronMediane);
    vote_lepenpop_02328.push(vote_lepenMediane);
    vote_rejetpop_02328.push(vote_rejetMediane);
    name_Commune_02328.push(nameCommune);
    Pourcentage_02328.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02328.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02328.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02328.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02328.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02328 = [];
const vote_lepen_02328 = [];
const vote_rejet_02328 = [];
const vote_macronpop_02328 = [];
const vote_lepenpop_02328 = [];
const vote_rejetpop_02328 = [];
const name_Commune_02328 = [];
const Pourcentage_02328 = [];
const Pourcentage_rejet_02328 = [];
const vote_gene_macron_02328 = [];
const vote_gene_lepen_02328 = [];
const vote_gene_rejet_02328 = [];

async function chartIt02328(){
    await GraphDATA02328();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02328-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02328
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02328
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02328-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02328,vote_lepen_02328,vote_rejet_02328]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02328-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02328,vote_lepenpop_02328,vote_rejetpop_02328]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02328"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02328
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02328
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02328
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02329*/
/*------------------------------------------------------------------ */
async function GraphDATA02329() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02329.push(vote_macron); 
    vote_lepen_02329.push(vote_lepen);
    vote_rejet_02329.push(vote_rejet);
    vote_macronpop_02329.push(vote_macronMediane);
    vote_lepenpop_02329.push(vote_lepenMediane);
    vote_rejetpop_02329.push(vote_rejetMediane);
    name_Commune_02329.push(nameCommune);
    Pourcentage_02329.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02329.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02329.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02329.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02329.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02329 = [];
const vote_lepen_02329 = [];
const vote_rejet_02329 = [];
const vote_macronpop_02329 = [];
const vote_lepenpop_02329 = [];
const vote_rejetpop_02329 = [];
const name_Commune_02329 = [];
const Pourcentage_02329 = [];
const Pourcentage_rejet_02329 = [];
const vote_gene_macron_02329 = [];
const vote_gene_lepen_02329 = [];
const vote_gene_rejet_02329 = [];

async function chartIt02329(){
    await GraphDATA02329();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02329-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02329
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02329
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02329-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02329,vote_lepen_02329,vote_rejet_02329]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02329-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02329,vote_lepenpop_02329,vote_rejetpop_02329]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02329"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02329
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02329
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02329
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02330*/
/*------------------------------------------------------------------ */
async function GraphDATA02330() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02330.push(vote_macron); 
    vote_lepen_02330.push(vote_lepen);
    vote_rejet_02330.push(vote_rejet);
    vote_macronpop_02330.push(vote_macronMediane);
    vote_lepenpop_02330.push(vote_lepenMediane);
    vote_rejetpop_02330.push(vote_rejetMediane);
    name_Commune_02330.push(nameCommune);
    Pourcentage_02330.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02330.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02330.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02330.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02330.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02330 = [];
const vote_lepen_02330 = [];
const vote_rejet_02330 = [];
const vote_macronpop_02330 = [];
const vote_lepenpop_02330 = [];
const vote_rejetpop_02330 = [];
const name_Commune_02330 = [];
const Pourcentage_02330 = [];
const Pourcentage_rejet_02330 = [];
const vote_gene_macron_02330 = [];
const vote_gene_lepen_02330 = [];
const vote_gene_rejet_02330 = [];

async function chartIt02330(){
    await GraphDATA02330();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02330-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02330
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02330
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02330-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02330,vote_lepen_02330,vote_rejet_02330]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02330-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02330,vote_lepenpop_02330,vote_rejetpop_02330]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02330"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02330
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02330
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02330
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02331*/
/*------------------------------------------------------------------ */
async function GraphDATA02331() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02331.push(vote_macron); 
    vote_lepen_02331.push(vote_lepen);
    vote_rejet_02331.push(vote_rejet);
    vote_macronpop_02331.push(vote_macronMediane);
    vote_lepenpop_02331.push(vote_lepenMediane);
    vote_rejetpop_02331.push(vote_rejetMediane);
    name_Commune_02331.push(nameCommune);
    Pourcentage_02331.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02331.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02331.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02331.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02331.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02331 = [];
const vote_lepen_02331 = [];
const vote_rejet_02331 = [];
const vote_macronpop_02331 = [];
const vote_lepenpop_02331 = [];
const vote_rejetpop_02331 = [];
const name_Commune_02331 = [];
const Pourcentage_02331 = [];
const Pourcentage_rejet_02331 = [];
const vote_gene_macron_02331 = [];
const vote_gene_lepen_02331 = [];
const vote_gene_rejet_02331 = [];

async function chartIt02331(){
    await GraphDATA02331();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02331-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02331
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02331
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02331-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02331,vote_lepen_02331,vote_rejet_02331]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02331-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02331,vote_lepenpop_02331,vote_rejetpop_02331]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02331"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02331
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02331
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02331
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02332*/
/*------------------------------------------------------------------ */
async function GraphDATA02332() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02332.push(vote_macron); 
    vote_lepen_02332.push(vote_lepen);
    vote_rejet_02332.push(vote_rejet);
    vote_macronpop_02332.push(vote_macronMediane);
    vote_lepenpop_02332.push(vote_lepenMediane);
    vote_rejetpop_02332.push(vote_rejetMediane);
    name_Commune_02332.push(nameCommune);
    Pourcentage_02332.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02332.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02332.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02332.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02332.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02332 = [];
const vote_lepen_02332 = [];
const vote_rejet_02332 = [];
const vote_macronpop_02332 = [];
const vote_lepenpop_02332 = [];
const vote_rejetpop_02332 = [];
const name_Commune_02332 = [];
const Pourcentage_02332 = [];
const Pourcentage_rejet_02332 = [];
const vote_gene_macron_02332 = [];
const vote_gene_lepen_02332 = [];
const vote_gene_rejet_02332 = [];

async function chartIt02332(){
    await GraphDATA02332();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02332-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02332
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02332
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02332-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02332,vote_lepen_02332,vote_rejet_02332]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02332-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02332,vote_lepenpop_02332,vote_rejetpop_02332]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02332"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02332
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02332
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02332
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02333*/
/*------------------------------------------------------------------ */
async function GraphDATA02333() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02333.push(vote_macron); 
    vote_lepen_02333.push(vote_lepen);
    vote_rejet_02333.push(vote_rejet);
    vote_macronpop_02333.push(vote_macronMediane);
    vote_lepenpop_02333.push(vote_lepenMediane);
    vote_rejetpop_02333.push(vote_rejetMediane);
    name_Commune_02333.push(nameCommune);
    Pourcentage_02333.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02333.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02333.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02333.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02333.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02333 = [];
const vote_lepen_02333 = [];
const vote_rejet_02333 = [];
const vote_macronpop_02333 = [];
const vote_lepenpop_02333 = [];
const vote_rejetpop_02333 = [];
const name_Commune_02333 = [];
const Pourcentage_02333 = [];
const Pourcentage_rejet_02333 = [];
const vote_gene_macron_02333 = [];
const vote_gene_lepen_02333 = [];
const vote_gene_rejet_02333 = [];

async function chartIt02333(){
    await GraphDATA02333();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02333-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02333
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02333
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02333-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02333,vote_lepen_02333,vote_rejet_02333]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02333-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02333,vote_lepenpop_02333,vote_rejetpop_02333]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02333"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02333
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02333
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02333
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02334*/
/*------------------------------------------------------------------ */
async function GraphDATA02334() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02334.push(vote_macron); 
    vote_lepen_02334.push(vote_lepen);
    vote_rejet_02334.push(vote_rejet);
    vote_macronpop_02334.push(vote_macronMediane);
    vote_lepenpop_02334.push(vote_lepenMediane);
    vote_rejetpop_02334.push(vote_rejetMediane);
    name_Commune_02334.push(nameCommune);
    Pourcentage_02334.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02334.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02334.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02334.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02334.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02334 = [];
const vote_lepen_02334 = [];
const vote_rejet_02334 = [];
const vote_macronpop_02334 = [];
const vote_lepenpop_02334 = [];
const vote_rejetpop_02334 = [];
const name_Commune_02334 = [];
const Pourcentage_02334 = [];
const Pourcentage_rejet_02334 = [];
const vote_gene_macron_02334 = [];
const vote_gene_lepen_02334 = [];
const vote_gene_rejet_02334 = [];

async function chartIt02334(){
    await GraphDATA02334();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02334-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02334
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02334
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02334-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02334,vote_lepen_02334,vote_rejet_02334]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02334-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02334,vote_lepenpop_02334,vote_rejetpop_02334]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02334"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02334
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02334
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02334
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02335*/
/*------------------------------------------------------------------ */
async function GraphDATA02335() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02335.push(vote_macron); 
    vote_lepen_02335.push(vote_lepen);
    vote_rejet_02335.push(vote_rejet);
    vote_macronpop_02335.push(vote_macronMediane);
    vote_lepenpop_02335.push(vote_lepenMediane);
    vote_rejetpop_02335.push(vote_rejetMediane);
    name_Commune_02335.push(nameCommune);
    Pourcentage_02335.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02335.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02335.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02335.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02335.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02335 = [];
const vote_lepen_02335 = [];
const vote_rejet_02335 = [];
const vote_macronpop_02335 = [];
const vote_lepenpop_02335 = [];
const vote_rejetpop_02335 = [];
const name_Commune_02335 = [];
const Pourcentage_02335 = [];
const Pourcentage_rejet_02335 = [];
const vote_gene_macron_02335 = [];
const vote_gene_lepen_02335 = [];
const vote_gene_rejet_02335 = [];

async function chartIt02335(){
    await GraphDATA02335();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02335-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02335
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02335
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02335-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02335,vote_lepen_02335,vote_rejet_02335]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02335-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02335,vote_lepenpop_02335,vote_rejetpop_02335]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02335"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02335
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02335
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02335
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02336*/
/*------------------------------------------------------------------ */
async function GraphDATA02336() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02336.push(vote_macron); 
    vote_lepen_02336.push(vote_lepen);
    vote_rejet_02336.push(vote_rejet);
    vote_macronpop_02336.push(vote_macronMediane);
    vote_lepenpop_02336.push(vote_lepenMediane);
    vote_rejetpop_02336.push(vote_rejetMediane);
    name_Commune_02336.push(nameCommune);
    Pourcentage_02336.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02336.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02336.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02336.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02336.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02336 = [];
const vote_lepen_02336 = [];
const vote_rejet_02336 = [];
const vote_macronpop_02336 = [];
const vote_lepenpop_02336 = [];
const vote_rejetpop_02336 = [];
const name_Commune_02336 = [];
const Pourcentage_02336 = [];
const Pourcentage_rejet_02336 = [];
const vote_gene_macron_02336 = [];
const vote_gene_lepen_02336 = [];
const vote_gene_rejet_02336 = [];

async function chartIt02336(){
    await GraphDATA02336();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02336-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02336
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02336
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02336-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02336,vote_lepen_02336,vote_rejet_02336]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02336-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02336,vote_lepenpop_02336,vote_rejetpop_02336]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02336"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02336
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02336
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02336
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02337*/
/*------------------------------------------------------------------ */
async function GraphDATA02337() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02337.push(vote_macron); 
    vote_lepen_02337.push(vote_lepen);
    vote_rejet_02337.push(vote_rejet);
    vote_macronpop_02337.push(vote_macronMediane);
    vote_lepenpop_02337.push(vote_lepenMediane);
    vote_rejetpop_02337.push(vote_rejetMediane);
    name_Commune_02337.push(nameCommune);
    Pourcentage_02337.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02337.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02337.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02337.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02337.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02337 = [];
const vote_lepen_02337 = [];
const vote_rejet_02337 = [];
const vote_macronpop_02337 = [];
const vote_lepenpop_02337 = [];
const vote_rejetpop_02337 = [];
const name_Commune_02337 = [];
const Pourcentage_02337 = [];
const Pourcentage_rejet_02337 = [];
const vote_gene_macron_02337 = [];
const vote_gene_lepen_02337 = [];
const vote_gene_rejet_02337 = [];

async function chartIt02337(){
    await GraphDATA02337();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02337-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02337
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02337
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02337-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02337,vote_lepen_02337,vote_rejet_02337]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02337-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02337,vote_lepenpop_02337,vote_rejetpop_02337]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02337"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02337
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02337
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02337
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02338*/
/*------------------------------------------------------------------ */
async function GraphDATA02338() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02338.push(vote_macron); 
    vote_lepen_02338.push(vote_lepen);
    vote_rejet_02338.push(vote_rejet);
    vote_macronpop_02338.push(vote_macronMediane);
    vote_lepenpop_02338.push(vote_lepenMediane);
    vote_rejetpop_02338.push(vote_rejetMediane);
    name_Commune_02338.push(nameCommune);
    Pourcentage_02338.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02338.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02338.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02338.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02338.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02338 = [];
const vote_lepen_02338 = [];
const vote_rejet_02338 = [];
const vote_macronpop_02338 = [];
const vote_lepenpop_02338 = [];
const vote_rejetpop_02338 = [];
const name_Commune_02338 = [];
const Pourcentage_02338 = [];
const Pourcentage_rejet_02338 = [];
const vote_gene_macron_02338 = [];
const vote_gene_lepen_02338 = [];
const vote_gene_rejet_02338 = [];

async function chartIt02338(){
    await GraphDATA02338();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02338-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02338
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02338
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02338-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02338,vote_lepen_02338,vote_rejet_02338]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02338-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02338,vote_lepenpop_02338,vote_rejetpop_02338]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02338"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02338
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02338
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02338
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02339*/
/*------------------------------------------------------------------ */
async function GraphDATA02339() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02339.push(vote_macron); 
    vote_lepen_02339.push(vote_lepen);
    vote_rejet_02339.push(vote_rejet);
    vote_macronpop_02339.push(vote_macronMediane);
    vote_lepenpop_02339.push(vote_lepenMediane);
    vote_rejetpop_02339.push(vote_rejetMediane);
    name_Commune_02339.push(nameCommune);
    Pourcentage_02339.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02339.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02339.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02339.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02339.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02339 = [];
const vote_lepen_02339 = [];
const vote_rejet_02339 = [];
const vote_macronpop_02339 = [];
const vote_lepenpop_02339 = [];
const vote_rejetpop_02339 = [];
const name_Commune_02339 = [];
const Pourcentage_02339 = [];
const Pourcentage_rejet_02339 = [];
const vote_gene_macron_02339 = [];
const vote_gene_lepen_02339 = [];
const vote_gene_rejet_02339 = [];

async function chartIt02339(){
    await GraphDATA02339();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02339-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02339
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02339
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02339-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02339,vote_lepen_02339,vote_rejet_02339]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02339-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02339,vote_lepenpop_02339,vote_rejetpop_02339]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02339"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02339
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02339
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02339
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02340*/
/*------------------------------------------------------------------ */
async function GraphDATA02340() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02340.push(vote_macron); 
    vote_lepen_02340.push(vote_lepen);
    vote_rejet_02340.push(vote_rejet);
    vote_macronpop_02340.push(vote_macronMediane);
    vote_lepenpop_02340.push(vote_lepenMediane);
    vote_rejetpop_02340.push(vote_rejetMediane);
    name_Commune_02340.push(nameCommune);
    Pourcentage_02340.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02340.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02340.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02340.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02340.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02340 = [];
const vote_lepen_02340 = [];
const vote_rejet_02340 = [];
const vote_macronpop_02340 = [];
const vote_lepenpop_02340 = [];
const vote_rejetpop_02340 = [];
const name_Commune_02340 = [];
const Pourcentage_02340 = [];
const Pourcentage_rejet_02340 = [];
const vote_gene_macron_02340 = [];
const vote_gene_lepen_02340 = [];
const vote_gene_rejet_02340 = [];

async function chartIt02340(){
    await GraphDATA02340();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02340-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02340
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02340
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02340-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02340,vote_lepen_02340,vote_rejet_02340]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02340-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02340,vote_lepenpop_02340,vote_rejetpop_02340]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02340"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02340
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02340
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02340
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02341*/
/*------------------------------------------------------------------ */
async function GraphDATA02341() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02341.push(vote_macron); 
    vote_lepen_02341.push(vote_lepen);
    vote_rejet_02341.push(vote_rejet);
    vote_macronpop_02341.push(vote_macronMediane);
    vote_lepenpop_02341.push(vote_lepenMediane);
    vote_rejetpop_02341.push(vote_rejetMediane);
    name_Commune_02341.push(nameCommune);
    Pourcentage_02341.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02341.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02341.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02341.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02341.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02341 = [];
const vote_lepen_02341 = [];
const vote_rejet_02341 = [];
const vote_macronpop_02341 = [];
const vote_lepenpop_02341 = [];
const vote_rejetpop_02341 = [];
const name_Commune_02341 = [];
const Pourcentage_02341 = [];
const Pourcentage_rejet_02341 = [];
const vote_gene_macron_02341 = [];
const vote_gene_lepen_02341 = [];
const vote_gene_rejet_02341 = [];

async function chartIt02341(){
    await GraphDATA02341();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02341-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02341
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02341
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02341-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02341,vote_lepen_02341,vote_rejet_02341]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02341-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02341,vote_lepenpop_02341,vote_rejetpop_02341]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02341"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02341
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02341
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02341
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02342*/
/*------------------------------------------------------------------ */
async function GraphDATA02342() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02342.push(vote_macron); 
    vote_lepen_02342.push(vote_lepen);
    vote_rejet_02342.push(vote_rejet);
    vote_macronpop_02342.push(vote_macronMediane);
    vote_lepenpop_02342.push(vote_lepenMediane);
    vote_rejetpop_02342.push(vote_rejetMediane);
    name_Commune_02342.push(nameCommune);
    Pourcentage_02342.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02342.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02342.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02342.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02342.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02342 = [];
const vote_lepen_02342 = [];
const vote_rejet_02342 = [];
const vote_macronpop_02342 = [];
const vote_lepenpop_02342 = [];
const vote_rejetpop_02342 = [];
const name_Commune_02342 = [];
const Pourcentage_02342 = [];
const Pourcentage_rejet_02342 = [];
const vote_gene_macron_02342 = [];
const vote_gene_lepen_02342 = [];
const vote_gene_rejet_02342 = [];

async function chartIt02342(){
    await GraphDATA02342();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02342-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02342
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02342
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02342-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02342,vote_lepen_02342,vote_rejet_02342]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02342-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02342,vote_lepenpop_02342,vote_rejetpop_02342]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02342"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02342
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02342
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02342
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02343*/
/*------------------------------------------------------------------ */
async function GraphDATA02343() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02343.push(vote_macron); 
    vote_lepen_02343.push(vote_lepen);
    vote_rejet_02343.push(vote_rejet);
    vote_macronpop_02343.push(vote_macronMediane);
    vote_lepenpop_02343.push(vote_lepenMediane);
    vote_rejetpop_02343.push(vote_rejetMediane);
    name_Commune_02343.push(nameCommune);
    Pourcentage_02343.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02343.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02343.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02343.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02343.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02343 = [];
const vote_lepen_02343 = [];
const vote_rejet_02343 = [];
const vote_macronpop_02343 = [];
const vote_lepenpop_02343 = [];
const vote_rejetpop_02343 = [];
const name_Commune_02343 = [];
const Pourcentage_02343 = [];
const Pourcentage_rejet_02343 = [];
const vote_gene_macron_02343 = [];
const vote_gene_lepen_02343 = [];
const vote_gene_rejet_02343 = [];

async function chartIt02343(){
    await GraphDATA02343();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02343-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02343
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02343
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02343-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02343,vote_lepen_02343,vote_rejet_02343]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02343-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02343,vote_lepenpop_02343,vote_rejetpop_02343]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02343"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02343
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02343
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02343
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02344*/
/*------------------------------------------------------------------ */
async function GraphDATA02344() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02344.push(vote_macron); 
    vote_lepen_02344.push(vote_lepen);
    vote_rejet_02344.push(vote_rejet);
    vote_macronpop_02344.push(vote_macronMediane);
    vote_lepenpop_02344.push(vote_lepenMediane);
    vote_rejetpop_02344.push(vote_rejetMediane);
    name_Commune_02344.push(nameCommune);
    Pourcentage_02344.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02344.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02344.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02344.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02344.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02344 = [];
const vote_lepen_02344 = [];
const vote_rejet_02344 = [];
const vote_macronpop_02344 = [];
const vote_lepenpop_02344 = [];
const vote_rejetpop_02344 = [];
const name_Commune_02344 = [];
const Pourcentage_02344 = [];
const Pourcentage_rejet_02344 = [];
const vote_gene_macron_02344 = [];
const vote_gene_lepen_02344 = [];
const vote_gene_rejet_02344 = [];

async function chartIt02344(){
    await GraphDATA02344();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02344-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02344
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02344
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02344-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02344,vote_lepen_02344,vote_rejet_02344]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02344-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02344,vote_lepenpop_02344,vote_rejetpop_02344]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02344"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02344
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02344
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02344
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02345*/
/*------------------------------------------------------------------ */
async function GraphDATA02345() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02345.push(vote_macron); 
    vote_lepen_02345.push(vote_lepen);
    vote_rejet_02345.push(vote_rejet);
    vote_macronpop_02345.push(vote_macronMediane);
    vote_lepenpop_02345.push(vote_lepenMediane);
    vote_rejetpop_02345.push(vote_rejetMediane);
    name_Commune_02345.push(nameCommune);
    Pourcentage_02345.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02345.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02345.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02345.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02345.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02345 = [];
const vote_lepen_02345 = [];
const vote_rejet_02345 = [];
const vote_macronpop_02345 = [];
const vote_lepenpop_02345 = [];
const vote_rejetpop_02345 = [];
const name_Commune_02345 = [];
const Pourcentage_02345 = [];
const Pourcentage_rejet_02345 = [];
const vote_gene_macron_02345 = [];
const vote_gene_lepen_02345 = [];
const vote_gene_rejet_02345 = [];

async function chartIt02345(){
    await GraphDATA02345();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02345-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02345
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02345
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02345-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02345,vote_lepen_02345,vote_rejet_02345]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02345-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02345,vote_lepenpop_02345,vote_rejetpop_02345]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02345"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02345
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02345
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02345
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02346*/
/*------------------------------------------------------------------ */
async function GraphDATA02346() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02346.push(vote_macron); 
    vote_lepen_02346.push(vote_lepen);
    vote_rejet_02346.push(vote_rejet);
    vote_macronpop_02346.push(vote_macronMediane);
    vote_lepenpop_02346.push(vote_lepenMediane);
    vote_rejetpop_02346.push(vote_rejetMediane);
    name_Commune_02346.push(nameCommune);
    Pourcentage_02346.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02346.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02346.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02346.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02346.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02346 = [];
const vote_lepen_02346 = [];
const vote_rejet_02346 = [];
const vote_macronpop_02346 = [];
const vote_lepenpop_02346 = [];
const vote_rejetpop_02346 = [];
const name_Commune_02346 = [];
const Pourcentage_02346 = [];
const Pourcentage_rejet_02346 = [];
const vote_gene_macron_02346 = [];
const vote_gene_lepen_02346 = [];
const vote_gene_rejet_02346 = [];

async function chartIt02346(){
    await GraphDATA02346();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02346-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02346
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02346
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02346-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02346,vote_lepen_02346,vote_rejet_02346]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02346-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02346,vote_lepenpop_02346,vote_rejetpop_02346]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02346"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02346
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02346
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02346
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02347*/
/*------------------------------------------------------------------ */
async function GraphDATA02347() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02347.push(vote_macron); 
    vote_lepen_02347.push(vote_lepen);
    vote_rejet_02347.push(vote_rejet);
    vote_macronpop_02347.push(vote_macronMediane);
    vote_lepenpop_02347.push(vote_lepenMediane);
    vote_rejetpop_02347.push(vote_rejetMediane);
    name_Commune_02347.push(nameCommune);
    Pourcentage_02347.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02347.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02347.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02347.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02347.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02347 = [];
const vote_lepen_02347 = [];
const vote_rejet_02347 = [];
const vote_macronpop_02347 = [];
const vote_lepenpop_02347 = [];
const vote_rejetpop_02347 = [];
const name_Commune_02347 = [];
const Pourcentage_02347 = [];
const Pourcentage_rejet_02347 = [];
const vote_gene_macron_02347 = [];
const vote_gene_lepen_02347 = [];
const vote_gene_rejet_02347 = [];

async function chartIt02347(){
    await GraphDATA02347();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02347-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02347
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02347
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02347-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02347,vote_lepen_02347,vote_rejet_02347]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02347-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02347,vote_lepenpop_02347,vote_rejetpop_02347]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02347"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02347
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02347
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02347
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02348*/
/*------------------------------------------------------------------ */
async function GraphDATA02348() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02348.push(vote_macron); 
    vote_lepen_02348.push(vote_lepen);
    vote_rejet_02348.push(vote_rejet);
    vote_macronpop_02348.push(vote_macronMediane);
    vote_lepenpop_02348.push(vote_lepenMediane);
    vote_rejetpop_02348.push(vote_rejetMediane);
    name_Commune_02348.push(nameCommune);
    Pourcentage_02348.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02348.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02348.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02348.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02348.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02348 = [];
const vote_lepen_02348 = [];
const vote_rejet_02348 = [];
const vote_macronpop_02348 = [];
const vote_lepenpop_02348 = [];
const vote_rejetpop_02348 = [];
const name_Commune_02348 = [];
const Pourcentage_02348 = [];
const Pourcentage_rejet_02348 = [];
const vote_gene_macron_02348 = [];
const vote_gene_lepen_02348 = [];
const vote_gene_rejet_02348 = [];

async function chartIt02348(){
    await GraphDATA02348();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02348-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02348
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02348
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02348-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02348,vote_lepen_02348,vote_rejet_02348]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02348-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02348,vote_lepenpop_02348,vote_rejetpop_02348]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02348"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02348
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02348
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02348
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02349*/
/*------------------------------------------------------------------ */
async function GraphDATA02349() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02349.push(vote_macron); 
    vote_lepen_02349.push(vote_lepen);
    vote_rejet_02349.push(vote_rejet);
    vote_macronpop_02349.push(vote_macronMediane);
    vote_lepenpop_02349.push(vote_lepenMediane);
    vote_rejetpop_02349.push(vote_rejetMediane);
    name_Commune_02349.push(nameCommune);
    Pourcentage_02349.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02349.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02349.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02349.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02349.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02349 = [];
const vote_lepen_02349 = [];
const vote_rejet_02349 = [];
const vote_macronpop_02349 = [];
const vote_lepenpop_02349 = [];
const vote_rejetpop_02349 = [];
const name_Commune_02349 = [];
const Pourcentage_02349 = [];
const Pourcentage_rejet_02349 = [];
const vote_gene_macron_02349 = [];
const vote_gene_lepen_02349 = [];
const vote_gene_rejet_02349 = [];

async function chartIt02349(){
    await GraphDATA02349();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02349-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02349
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02349
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02349-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02349,vote_lepen_02349,vote_rejet_02349]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02349-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02349,vote_lepenpop_02349,vote_rejetpop_02349]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02349"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02349
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02349
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02349
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02350*/
/*------------------------------------------------------------------ */
async function GraphDATA02350() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02350.push(vote_macron); 
    vote_lepen_02350.push(vote_lepen);
    vote_rejet_02350.push(vote_rejet);
    vote_macronpop_02350.push(vote_macronMediane);
    vote_lepenpop_02350.push(vote_lepenMediane);
    vote_rejetpop_02350.push(vote_rejetMediane);
    name_Commune_02350.push(nameCommune);
    Pourcentage_02350.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02350.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02350.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02350.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02350.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02350 = [];
const vote_lepen_02350 = [];
const vote_rejet_02350 = [];
const vote_macronpop_02350 = [];
const vote_lepenpop_02350 = [];
const vote_rejetpop_02350 = [];
const name_Commune_02350 = [];
const Pourcentage_02350 = [];
const Pourcentage_rejet_02350 = [];
const vote_gene_macron_02350 = [];
const vote_gene_lepen_02350 = [];
const vote_gene_rejet_02350 = [];

async function chartIt02350(){
    await GraphDATA02350();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02350-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02350
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02350
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02350-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02350,vote_lepen_02350,vote_rejet_02350]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02350-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02350,vote_lepenpop_02350,vote_rejetpop_02350]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02350"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02350
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02350
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02350
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02351*/
/*------------------------------------------------------------------ */
async function GraphDATA02351() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02351.push(vote_macron); 
    vote_lepen_02351.push(vote_lepen);
    vote_rejet_02351.push(vote_rejet);
    vote_macronpop_02351.push(vote_macronMediane);
    vote_lepenpop_02351.push(vote_lepenMediane);
    vote_rejetpop_02351.push(vote_rejetMediane);
    name_Commune_02351.push(nameCommune);
    Pourcentage_02351.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02351.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02351.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02351.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02351.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02351 = [];
const vote_lepen_02351 = [];
const vote_rejet_02351 = [];
const vote_macronpop_02351 = [];
const vote_lepenpop_02351 = [];
const vote_rejetpop_02351 = [];
const name_Commune_02351 = [];
const Pourcentage_02351 = [];
const Pourcentage_rejet_02351 = [];
const vote_gene_macron_02351 = [];
const vote_gene_lepen_02351 = [];
const vote_gene_rejet_02351 = [];

async function chartIt02351(){
    await GraphDATA02351();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02351-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02351
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02351
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02351-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02351,vote_lepen_02351,vote_rejet_02351]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02351-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02351,vote_lepenpop_02351,vote_rejetpop_02351]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02351"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02351
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02351
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02351
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02352*/
/*------------------------------------------------------------------ */
async function GraphDATA02352() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02352.push(vote_macron); 
    vote_lepen_02352.push(vote_lepen);
    vote_rejet_02352.push(vote_rejet);
    vote_macronpop_02352.push(vote_macronMediane);
    vote_lepenpop_02352.push(vote_lepenMediane);
    vote_rejetpop_02352.push(vote_rejetMediane);
    name_Commune_02352.push(nameCommune);
    Pourcentage_02352.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02352.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02352.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02352.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02352.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02352 = [];
const vote_lepen_02352 = [];
const vote_rejet_02352 = [];
const vote_macronpop_02352 = [];
const vote_lepenpop_02352 = [];
const vote_rejetpop_02352 = [];
const name_Commune_02352 = [];
const Pourcentage_02352 = [];
const Pourcentage_rejet_02352 = [];
const vote_gene_macron_02352 = [];
const vote_gene_lepen_02352 = [];
const vote_gene_rejet_02352 = [];

async function chartIt02352(){
    await GraphDATA02352();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02352-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02352
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02352
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02352-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02352,vote_lepen_02352,vote_rejet_02352]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02352-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02352,vote_lepenpop_02352,vote_rejetpop_02352]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02352"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02352
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02352
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02352
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02353*/
/*------------------------------------------------------------------ */
async function GraphDATA02353() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02353.push(vote_macron); 
    vote_lepen_02353.push(vote_lepen);
    vote_rejet_02353.push(vote_rejet);
    vote_macronpop_02353.push(vote_macronMediane);
    vote_lepenpop_02353.push(vote_lepenMediane);
    vote_rejetpop_02353.push(vote_rejetMediane);
    name_Commune_02353.push(nameCommune);
    Pourcentage_02353.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02353.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02353.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02353.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02353.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02353 = [];
const vote_lepen_02353 = [];
const vote_rejet_02353 = [];
const vote_macronpop_02353 = [];
const vote_lepenpop_02353 = [];
const vote_rejetpop_02353 = [];
const name_Commune_02353 = [];
const Pourcentage_02353 = [];
const Pourcentage_rejet_02353 = [];
const vote_gene_macron_02353 = [];
const vote_gene_lepen_02353 = [];
const vote_gene_rejet_02353 = [];

async function chartIt02353(){
    await GraphDATA02353();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02353-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02353
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02353
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02353-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02353,vote_lepen_02353,vote_rejet_02353]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02353-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02353,vote_lepenpop_02353,vote_rejetpop_02353]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02353"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02353
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02353
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02353
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02354*/
/*------------------------------------------------------------------ */
async function GraphDATA02354() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02354.push(vote_macron); 
    vote_lepen_02354.push(vote_lepen);
    vote_rejet_02354.push(vote_rejet);
    vote_macronpop_02354.push(vote_macronMediane);
    vote_lepenpop_02354.push(vote_lepenMediane);
    vote_rejetpop_02354.push(vote_rejetMediane);
    name_Commune_02354.push(nameCommune);
    Pourcentage_02354.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02354.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02354.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02354.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02354.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02354 = [];
const vote_lepen_02354 = [];
const vote_rejet_02354 = [];
const vote_macronpop_02354 = [];
const vote_lepenpop_02354 = [];
const vote_rejetpop_02354 = [];
const name_Commune_02354 = [];
const Pourcentage_02354 = [];
const Pourcentage_rejet_02354 = [];
const vote_gene_macron_02354 = [];
const vote_gene_lepen_02354 = [];
const vote_gene_rejet_02354 = [];

async function chartIt02354(){
    await GraphDATA02354();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02354-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02354
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02354
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02354-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02354,vote_lepen_02354,vote_rejet_02354]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02354-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02354,vote_lepenpop_02354,vote_rejetpop_02354]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02354"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02354
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02354
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02354
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02355*/
/*------------------------------------------------------------------ */
async function GraphDATA02355() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02355.push(vote_macron); 
    vote_lepen_02355.push(vote_lepen);
    vote_rejet_02355.push(vote_rejet);
    vote_macronpop_02355.push(vote_macronMediane);
    vote_lepenpop_02355.push(vote_lepenMediane);
    vote_rejetpop_02355.push(vote_rejetMediane);
    name_Commune_02355.push(nameCommune);
    Pourcentage_02355.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02355.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02355.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02355.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02355.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02355 = [];
const vote_lepen_02355 = [];
const vote_rejet_02355 = [];
const vote_macronpop_02355 = [];
const vote_lepenpop_02355 = [];
const vote_rejetpop_02355 = [];
const name_Commune_02355 = [];
const Pourcentage_02355 = [];
const Pourcentage_rejet_02355 = [];
const vote_gene_macron_02355 = [];
const vote_gene_lepen_02355 = [];
const vote_gene_rejet_02355 = [];

async function chartIt02355(){
    await GraphDATA02355();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02355-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02355
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02355
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02355-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02355,vote_lepen_02355,vote_rejet_02355]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02355-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02355,vote_lepenpop_02355,vote_rejetpop_02355]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02355"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02355
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02355
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02355
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02356*/
/*------------------------------------------------------------------ */
async function GraphDATA02356() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02356.push(vote_macron); 
    vote_lepen_02356.push(vote_lepen);
    vote_rejet_02356.push(vote_rejet);
    vote_macronpop_02356.push(vote_macronMediane);
    vote_lepenpop_02356.push(vote_lepenMediane);
    vote_rejetpop_02356.push(vote_rejetMediane);
    name_Commune_02356.push(nameCommune);
    Pourcentage_02356.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02356.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02356.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02356.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02356.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02356 = [];
const vote_lepen_02356 = [];
const vote_rejet_02356 = [];
const vote_macronpop_02356 = [];
const vote_lepenpop_02356 = [];
const vote_rejetpop_02356 = [];
const name_Commune_02356 = [];
const Pourcentage_02356 = [];
const Pourcentage_rejet_02356 = [];
const vote_gene_macron_02356 = [];
const vote_gene_lepen_02356 = [];
const vote_gene_rejet_02356 = [];

async function chartIt02356(){
    await GraphDATA02356();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02356-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02356
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02356
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02356-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02356,vote_lepen_02356,vote_rejet_02356]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02356-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02356,vote_lepenpop_02356,vote_rejetpop_02356]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02356"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02356
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02356
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02356
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02357*/
/*------------------------------------------------------------------ */
async function GraphDATA02357() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02357.push(vote_macron); 
    vote_lepen_02357.push(vote_lepen);
    vote_rejet_02357.push(vote_rejet);
    vote_macronpop_02357.push(vote_macronMediane);
    vote_lepenpop_02357.push(vote_lepenMediane);
    vote_rejetpop_02357.push(vote_rejetMediane);
    name_Commune_02357.push(nameCommune);
    Pourcentage_02357.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02357.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02357.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02357.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02357.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02357 = [];
const vote_lepen_02357 = [];
const vote_rejet_02357 = [];
const vote_macronpop_02357 = [];
const vote_lepenpop_02357 = [];
const vote_rejetpop_02357 = [];
const name_Commune_02357 = [];
const Pourcentage_02357 = [];
const Pourcentage_rejet_02357 = [];
const vote_gene_macron_02357 = [];
const vote_gene_lepen_02357 = [];
const vote_gene_rejet_02357 = [];

async function chartIt02357(){
    await GraphDATA02357();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02357-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02357
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02357
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02357-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02357,vote_lepen_02357,vote_rejet_02357]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02357-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02357,vote_lepenpop_02357,vote_rejetpop_02357]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02357"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02357
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02357
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02357
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02358*/
/*------------------------------------------------------------------ */
async function GraphDATA02358() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02358.push(vote_macron); 
    vote_lepen_02358.push(vote_lepen);
    vote_rejet_02358.push(vote_rejet);
    vote_macronpop_02358.push(vote_macronMediane);
    vote_lepenpop_02358.push(vote_lepenMediane);
    vote_rejetpop_02358.push(vote_rejetMediane);
    name_Commune_02358.push(nameCommune);
    Pourcentage_02358.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02358.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02358.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02358.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02358.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02358 = [];
const vote_lepen_02358 = [];
const vote_rejet_02358 = [];
const vote_macronpop_02358 = [];
const vote_lepenpop_02358 = [];
const vote_rejetpop_02358 = [];
const name_Commune_02358 = [];
const Pourcentage_02358 = [];
const Pourcentage_rejet_02358 = [];
const vote_gene_macron_02358 = [];
const vote_gene_lepen_02358 = [];
const vote_gene_rejet_02358 = [];

async function chartIt02358(){
    await GraphDATA02358();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02358-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02358
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02358
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02358-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02358,vote_lepen_02358,vote_rejet_02358]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02358-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02358,vote_lepenpop_02358,vote_rejetpop_02358]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02358"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02358
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02358
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02358
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02359*/
/*------------------------------------------------------------------ */
async function GraphDATA02359() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02359.push(vote_macron); 
    vote_lepen_02359.push(vote_lepen);
    vote_rejet_02359.push(vote_rejet);
    vote_macronpop_02359.push(vote_macronMediane);
    vote_lepenpop_02359.push(vote_lepenMediane);
    vote_rejetpop_02359.push(vote_rejetMediane);
    name_Commune_02359.push(nameCommune);
    Pourcentage_02359.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02359.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02359.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02359.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02359.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02359 = [];
const vote_lepen_02359 = [];
const vote_rejet_02359 = [];
const vote_macronpop_02359 = [];
const vote_lepenpop_02359 = [];
const vote_rejetpop_02359 = [];
const name_Commune_02359 = [];
const Pourcentage_02359 = [];
const Pourcentage_rejet_02359 = [];
const vote_gene_macron_02359 = [];
const vote_gene_lepen_02359 = [];
const vote_gene_rejet_02359 = [];

async function chartIt02359(){
    await GraphDATA02359();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02359-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02359
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02359
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02359-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02359,vote_lepen_02359,vote_rejet_02359]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02359-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02359,vote_lepenpop_02359,vote_rejetpop_02359]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02359"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02359
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02359
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02359
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02360*/
/*------------------------------------------------------------------ */
async function GraphDATA02360() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02360.push(vote_macron); 
    vote_lepen_02360.push(vote_lepen);
    vote_rejet_02360.push(vote_rejet);
    vote_macronpop_02360.push(vote_macronMediane);
    vote_lepenpop_02360.push(vote_lepenMediane);
    vote_rejetpop_02360.push(vote_rejetMediane);
    name_Commune_02360.push(nameCommune);
    Pourcentage_02360.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02360.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02360.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02360.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02360.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02360 = [];
const vote_lepen_02360 = [];
const vote_rejet_02360 = [];
const vote_macronpop_02360 = [];
const vote_lepenpop_02360 = [];
const vote_rejetpop_02360 = [];
const name_Commune_02360 = [];
const Pourcentage_02360 = [];
const Pourcentage_rejet_02360 = [];
const vote_gene_macron_02360 = [];
const vote_gene_lepen_02360 = [];
const vote_gene_rejet_02360 = [];

async function chartIt02360(){
    await GraphDATA02360();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02360-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02360
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02360
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02360-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02360,vote_lepen_02360,vote_rejet_02360]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02360-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02360,vote_lepenpop_02360,vote_rejetpop_02360]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02360"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02360
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02360
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02360
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02361*/
/*------------------------------------------------------------------ */
async function GraphDATA02361() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02361.push(vote_macron); 
    vote_lepen_02361.push(vote_lepen);
    vote_rejet_02361.push(vote_rejet);
    vote_macronpop_02361.push(vote_macronMediane);
    vote_lepenpop_02361.push(vote_lepenMediane);
    vote_rejetpop_02361.push(vote_rejetMediane);
    name_Commune_02361.push(nameCommune);
    Pourcentage_02361.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02361.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02361.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02361.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02361.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02361 = [];
const vote_lepen_02361 = [];
const vote_rejet_02361 = [];
const vote_macronpop_02361 = [];
const vote_lepenpop_02361 = [];
const vote_rejetpop_02361 = [];
const name_Commune_02361 = [];
const Pourcentage_02361 = [];
const Pourcentage_rejet_02361 = [];
const vote_gene_macron_02361 = [];
const vote_gene_lepen_02361 = [];
const vote_gene_rejet_02361 = [];

async function chartIt02361(){
    await GraphDATA02361();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02361-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02361
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02361
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02361-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02361,vote_lepen_02361,vote_rejet_02361]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02361-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02361,vote_lepenpop_02361,vote_rejetpop_02361]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02361"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02361
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02361
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02361
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02362*/
/*------------------------------------------------------------------ */
async function GraphDATA02362() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02362.push(vote_macron); 
    vote_lepen_02362.push(vote_lepen);
    vote_rejet_02362.push(vote_rejet);
    vote_macronpop_02362.push(vote_macronMediane);
    vote_lepenpop_02362.push(vote_lepenMediane);
    vote_rejetpop_02362.push(vote_rejetMediane);
    name_Commune_02362.push(nameCommune);
    Pourcentage_02362.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02362.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02362.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02362.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02362.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02362 = [];
const vote_lepen_02362 = [];
const vote_rejet_02362 = [];
const vote_macronpop_02362 = [];
const vote_lepenpop_02362 = [];
const vote_rejetpop_02362 = [];
const name_Commune_02362 = [];
const Pourcentage_02362 = [];
const Pourcentage_rejet_02362 = [];
const vote_gene_macron_02362 = [];
const vote_gene_lepen_02362 = [];
const vote_gene_rejet_02362 = [];

async function chartIt02362(){
    await GraphDATA02362();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02362-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02362
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02362
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02362-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02362,vote_lepen_02362,vote_rejet_02362]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02362-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02362,vote_lepenpop_02362,vote_rejetpop_02362]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02362"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02362
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02362
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02362
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02363*/
/*------------------------------------------------------------------ */
async function GraphDATA02363() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02363.push(vote_macron); 
    vote_lepen_02363.push(vote_lepen);
    vote_rejet_02363.push(vote_rejet);
    vote_macronpop_02363.push(vote_macronMediane);
    vote_lepenpop_02363.push(vote_lepenMediane);
    vote_rejetpop_02363.push(vote_rejetMediane);
    name_Commune_02363.push(nameCommune);
    Pourcentage_02363.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02363.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02363.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02363.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02363.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02363 = [];
const vote_lepen_02363 = [];
const vote_rejet_02363 = [];
const vote_macronpop_02363 = [];
const vote_lepenpop_02363 = [];
const vote_rejetpop_02363 = [];
const name_Commune_02363 = [];
const Pourcentage_02363 = [];
const Pourcentage_rejet_02363 = [];
const vote_gene_macron_02363 = [];
const vote_gene_lepen_02363 = [];
const vote_gene_rejet_02363 = [];

async function chartIt02363(){
    await GraphDATA02363();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02363-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02363
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02363
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02363-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02363,vote_lepen_02363,vote_rejet_02363]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02363-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02363,vote_lepenpop_02363,vote_rejetpop_02363]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02363"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02363
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02363
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02363
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02364*/
/*------------------------------------------------------------------ */
async function GraphDATA02364() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02364.push(vote_macron); 
    vote_lepen_02364.push(vote_lepen);
    vote_rejet_02364.push(vote_rejet);
    vote_macronpop_02364.push(vote_macronMediane);
    vote_lepenpop_02364.push(vote_lepenMediane);
    vote_rejetpop_02364.push(vote_rejetMediane);
    name_Commune_02364.push(nameCommune);
    Pourcentage_02364.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02364.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02364.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02364.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02364.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02364 = [];
const vote_lepen_02364 = [];
const vote_rejet_02364 = [];
const vote_macronpop_02364 = [];
const vote_lepenpop_02364 = [];
const vote_rejetpop_02364 = [];
const name_Commune_02364 = [];
const Pourcentage_02364 = [];
const Pourcentage_rejet_02364 = [];
const vote_gene_macron_02364 = [];
const vote_gene_lepen_02364 = [];
const vote_gene_rejet_02364 = [];

async function chartIt02364(){
    await GraphDATA02364();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02364-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02364
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02364
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02364-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02364,vote_lepen_02364,vote_rejet_02364]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02364-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02364,vote_lepenpop_02364,vote_rejetpop_02364]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02364"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02364
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02364
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02364
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02365*/
/*------------------------------------------------------------------ */
async function GraphDATA02365() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02365.push(vote_macron); 
    vote_lepen_02365.push(vote_lepen);
    vote_rejet_02365.push(vote_rejet);
    vote_macronpop_02365.push(vote_macronMediane);
    vote_lepenpop_02365.push(vote_lepenMediane);
    vote_rejetpop_02365.push(vote_rejetMediane);
    name_Commune_02365.push(nameCommune);
    Pourcentage_02365.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02365.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02365.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02365.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02365.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02365 = [];
const vote_lepen_02365 = [];
const vote_rejet_02365 = [];
const vote_macronpop_02365 = [];
const vote_lepenpop_02365 = [];
const vote_rejetpop_02365 = [];
const name_Commune_02365 = [];
const Pourcentage_02365 = [];
const Pourcentage_rejet_02365 = [];
const vote_gene_macron_02365 = [];
const vote_gene_lepen_02365 = [];
const vote_gene_rejet_02365 = [];

async function chartIt02365(){
    await GraphDATA02365();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02365-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02365
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02365
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02365-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02365,vote_lepen_02365,vote_rejet_02365]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02365-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02365,vote_lepenpop_02365,vote_rejetpop_02365]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02365"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02365
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02365
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02365
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02366*/
/*------------------------------------------------------------------ */
async function GraphDATA02366() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02366.push(vote_macron); 
    vote_lepen_02366.push(vote_lepen);
    vote_rejet_02366.push(vote_rejet);
    vote_macronpop_02366.push(vote_macronMediane);
    vote_lepenpop_02366.push(vote_lepenMediane);
    vote_rejetpop_02366.push(vote_rejetMediane);
    name_Commune_02366.push(nameCommune);
    Pourcentage_02366.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02366.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02366.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02366.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02366.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02366 = [];
const vote_lepen_02366 = [];
const vote_rejet_02366 = [];
const vote_macronpop_02366 = [];
const vote_lepenpop_02366 = [];
const vote_rejetpop_02366 = [];
const name_Commune_02366 = [];
const Pourcentage_02366 = [];
const Pourcentage_rejet_02366 = [];
const vote_gene_macron_02366 = [];
const vote_gene_lepen_02366 = [];
const vote_gene_rejet_02366 = [];

async function chartIt02366(){
    await GraphDATA02366();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02366-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02366
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02366
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02366-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02366,vote_lepen_02366,vote_rejet_02366]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02366-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02366,vote_lepenpop_02366,vote_rejetpop_02366]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02366"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02366
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02366
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02366
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02367*/
/*------------------------------------------------------------------ */
async function GraphDATA02367() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02367.push(vote_macron); 
    vote_lepen_02367.push(vote_lepen);
    vote_rejet_02367.push(vote_rejet);
    vote_macronpop_02367.push(vote_macronMediane);
    vote_lepenpop_02367.push(vote_lepenMediane);
    vote_rejetpop_02367.push(vote_rejetMediane);
    name_Commune_02367.push(nameCommune);
    Pourcentage_02367.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02367.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02367.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02367.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02367.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02367 = [];
const vote_lepen_02367 = [];
const vote_rejet_02367 = [];
const vote_macronpop_02367 = [];
const vote_lepenpop_02367 = [];
const vote_rejetpop_02367 = [];
const name_Commune_02367 = [];
const Pourcentage_02367 = [];
const Pourcentage_rejet_02367 = [];
const vote_gene_macron_02367 = [];
const vote_gene_lepen_02367 = [];
const vote_gene_rejet_02367 = [];

async function chartIt02367(){
    await GraphDATA02367();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02367-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02367
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02367
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02367-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02367,vote_lepen_02367,vote_rejet_02367]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02367-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02367,vote_lepenpop_02367,vote_rejetpop_02367]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02367"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02367
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02367
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02367
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02368*/
/*------------------------------------------------------------------ */
async function GraphDATA02368() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02368.push(vote_macron); 
    vote_lepen_02368.push(vote_lepen);
    vote_rejet_02368.push(vote_rejet);
    vote_macronpop_02368.push(vote_macronMediane);
    vote_lepenpop_02368.push(vote_lepenMediane);
    vote_rejetpop_02368.push(vote_rejetMediane);
    name_Commune_02368.push(nameCommune);
    Pourcentage_02368.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02368.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02368.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02368.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02368.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02368 = [];
const vote_lepen_02368 = [];
const vote_rejet_02368 = [];
const vote_macronpop_02368 = [];
const vote_lepenpop_02368 = [];
const vote_rejetpop_02368 = [];
const name_Commune_02368 = [];
const Pourcentage_02368 = [];
const Pourcentage_rejet_02368 = [];
const vote_gene_macron_02368 = [];
const vote_gene_lepen_02368 = [];
const vote_gene_rejet_02368 = [];

async function chartIt02368(){
    await GraphDATA02368();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02368-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02368
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02368
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02368-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02368,vote_lepen_02368,vote_rejet_02368]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02368-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02368,vote_lepenpop_02368,vote_rejetpop_02368]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02368"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02368
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02368
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02368
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02369*/
/*------------------------------------------------------------------ */
async function GraphDATA02369() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02369.push(vote_macron); 
    vote_lepen_02369.push(vote_lepen);
    vote_rejet_02369.push(vote_rejet);
    vote_macronpop_02369.push(vote_macronMediane);
    vote_lepenpop_02369.push(vote_lepenMediane);
    vote_rejetpop_02369.push(vote_rejetMediane);
    name_Commune_02369.push(nameCommune);
    Pourcentage_02369.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02369.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02369.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02369.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02369.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02369 = [];
const vote_lepen_02369 = [];
const vote_rejet_02369 = [];
const vote_macronpop_02369 = [];
const vote_lepenpop_02369 = [];
const vote_rejetpop_02369 = [];
const name_Commune_02369 = [];
const Pourcentage_02369 = [];
const Pourcentage_rejet_02369 = [];
const vote_gene_macron_02369 = [];
const vote_gene_lepen_02369 = [];
const vote_gene_rejet_02369 = [];

async function chartIt02369(){
    await GraphDATA02369();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02369-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02369
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02369
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02369-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02369,vote_lepen_02369,vote_rejet_02369]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02369-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02369,vote_lepenpop_02369,vote_rejetpop_02369]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02369"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02369
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02369
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02369
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02370*/
/*------------------------------------------------------------------ */
async function GraphDATA02370() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02370.push(vote_macron); 
    vote_lepen_02370.push(vote_lepen);
    vote_rejet_02370.push(vote_rejet);
    vote_macronpop_02370.push(vote_macronMediane);
    vote_lepenpop_02370.push(vote_lepenMediane);
    vote_rejetpop_02370.push(vote_rejetMediane);
    name_Commune_02370.push(nameCommune);
    Pourcentage_02370.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02370.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02370.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02370.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02370.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02370 = [];
const vote_lepen_02370 = [];
const vote_rejet_02370 = [];
const vote_macronpop_02370 = [];
const vote_lepenpop_02370 = [];
const vote_rejetpop_02370 = [];
const name_Commune_02370 = [];
const Pourcentage_02370 = [];
const Pourcentage_rejet_02370 = [];
const vote_gene_macron_02370 = [];
const vote_gene_lepen_02370 = [];
const vote_gene_rejet_02370 = [];

async function chartIt02370(){
    await GraphDATA02370();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02370-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02370
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02370
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02370-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02370,vote_lepen_02370,vote_rejet_02370]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02370-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02370,vote_lepenpop_02370,vote_rejetpop_02370]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02370"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02370
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02370
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02370
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02371*/
/*------------------------------------------------------------------ */
async function GraphDATA02371() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02371.push(vote_macron); 
    vote_lepen_02371.push(vote_lepen);
    vote_rejet_02371.push(vote_rejet);
    vote_macronpop_02371.push(vote_macronMediane);
    vote_lepenpop_02371.push(vote_lepenMediane);
    vote_rejetpop_02371.push(vote_rejetMediane);
    name_Commune_02371.push(nameCommune);
    Pourcentage_02371.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02371.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02371.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02371.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02371.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02371 = [];
const vote_lepen_02371 = [];
const vote_rejet_02371 = [];
const vote_macronpop_02371 = [];
const vote_lepenpop_02371 = [];
const vote_rejetpop_02371 = [];
const name_Commune_02371 = [];
const Pourcentage_02371 = [];
const Pourcentage_rejet_02371 = [];
const vote_gene_macron_02371 = [];
const vote_gene_lepen_02371 = [];
const vote_gene_rejet_02371 = [];

async function chartIt02371(){
    await GraphDATA02371();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02371-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02371
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02371
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02371-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02371,vote_lepen_02371,vote_rejet_02371]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02371-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02371,vote_lepenpop_02371,vote_rejetpop_02371]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02371"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02371
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02371
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02371
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02372*/
/*------------------------------------------------------------------ */
async function GraphDATA02372() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02372.push(vote_macron); 
    vote_lepen_02372.push(vote_lepen);
    vote_rejet_02372.push(vote_rejet);
    vote_macronpop_02372.push(vote_macronMediane);
    vote_lepenpop_02372.push(vote_lepenMediane);
    vote_rejetpop_02372.push(vote_rejetMediane);
    name_Commune_02372.push(nameCommune);
    Pourcentage_02372.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02372.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02372.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02372.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02372.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02372 = [];
const vote_lepen_02372 = [];
const vote_rejet_02372 = [];
const vote_macronpop_02372 = [];
const vote_lepenpop_02372 = [];
const vote_rejetpop_02372 = [];
const name_Commune_02372 = [];
const Pourcentage_02372 = [];
const Pourcentage_rejet_02372 = [];
const vote_gene_macron_02372 = [];
const vote_gene_lepen_02372 = [];
const vote_gene_rejet_02372 = [];

async function chartIt02372(){
    await GraphDATA02372();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02372-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02372
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02372
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02372-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02372,vote_lepen_02372,vote_rejet_02372]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02372-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02372,vote_lepenpop_02372,vote_rejetpop_02372]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02372"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02372
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02372
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02372
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02373*/
/*------------------------------------------------------------------ */
async function GraphDATA02373() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02373.push(vote_macron); 
    vote_lepen_02373.push(vote_lepen);
    vote_rejet_02373.push(vote_rejet);
    vote_macronpop_02373.push(vote_macronMediane);
    vote_lepenpop_02373.push(vote_lepenMediane);
    vote_rejetpop_02373.push(vote_rejetMediane);
    name_Commune_02373.push(nameCommune);
    Pourcentage_02373.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02373.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02373.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02373.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02373.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02373 = [];
const vote_lepen_02373 = [];
const vote_rejet_02373 = [];
const vote_macronpop_02373 = [];
const vote_lepenpop_02373 = [];
const vote_rejetpop_02373 = [];
const name_Commune_02373 = [];
const Pourcentage_02373 = [];
const Pourcentage_rejet_02373 = [];
const vote_gene_macron_02373 = [];
const vote_gene_lepen_02373 = [];
const vote_gene_rejet_02373 = [];

async function chartIt02373(){
    await GraphDATA02373();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02373-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02373
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02373
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02373-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02373,vote_lepen_02373,vote_rejet_02373]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02373-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02373,vote_lepenpop_02373,vote_rejetpop_02373]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02373"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02373
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02373
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02373
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02374*/
/*------------------------------------------------------------------ */
async function GraphDATA02374() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02374.push(vote_macron); 
    vote_lepen_02374.push(vote_lepen);
    vote_rejet_02374.push(vote_rejet);
    vote_macronpop_02374.push(vote_macronMediane);
    vote_lepenpop_02374.push(vote_lepenMediane);
    vote_rejetpop_02374.push(vote_rejetMediane);
    name_Commune_02374.push(nameCommune);
    Pourcentage_02374.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02374.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02374.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02374.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02374.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02374 = [];
const vote_lepen_02374 = [];
const vote_rejet_02374 = [];
const vote_macronpop_02374 = [];
const vote_lepenpop_02374 = [];
const vote_rejetpop_02374 = [];
const name_Commune_02374 = [];
const Pourcentage_02374 = [];
const Pourcentage_rejet_02374 = [];
const vote_gene_macron_02374 = [];
const vote_gene_lepen_02374 = [];
const vote_gene_rejet_02374 = [];

async function chartIt02374(){
    await GraphDATA02374();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02374-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02374
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02374
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02374-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02374,vote_lepen_02374,vote_rejet_02374]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02374-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02374,vote_lepenpop_02374,vote_rejetpop_02374]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02374"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02374
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02374
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02374
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02375*/
/*------------------------------------------------------------------ */
async function GraphDATA02375() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02375.push(vote_macron); 
    vote_lepen_02375.push(vote_lepen);
    vote_rejet_02375.push(vote_rejet);
    vote_macronpop_02375.push(vote_macronMediane);
    vote_lepenpop_02375.push(vote_lepenMediane);
    vote_rejetpop_02375.push(vote_rejetMediane);
    name_Commune_02375.push(nameCommune);
    Pourcentage_02375.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02375.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02375.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02375.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02375.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02375 = [];
const vote_lepen_02375 = [];
const vote_rejet_02375 = [];
const vote_macronpop_02375 = [];
const vote_lepenpop_02375 = [];
const vote_rejetpop_02375 = [];
const name_Commune_02375 = [];
const Pourcentage_02375 = [];
const Pourcentage_rejet_02375 = [];
const vote_gene_macron_02375 = [];
const vote_gene_lepen_02375 = [];
const vote_gene_rejet_02375 = [];

async function chartIt02375(){
    await GraphDATA02375();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02375-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02375
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02375
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02375-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02375,vote_lepen_02375,vote_rejet_02375]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02375-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02375,vote_lepenpop_02375,vote_rejetpop_02375]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02375"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02375
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02375
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02375
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02376*/
/*------------------------------------------------------------------ */
async function GraphDATA02376() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02376.push(vote_macron); 
    vote_lepen_02376.push(vote_lepen);
    vote_rejet_02376.push(vote_rejet);
    vote_macronpop_02376.push(vote_macronMediane);
    vote_lepenpop_02376.push(vote_lepenMediane);
    vote_rejetpop_02376.push(vote_rejetMediane);
    name_Commune_02376.push(nameCommune);
    Pourcentage_02376.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02376.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02376.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02376.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02376.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02376 = [];
const vote_lepen_02376 = [];
const vote_rejet_02376 = [];
const vote_macronpop_02376 = [];
const vote_lepenpop_02376 = [];
const vote_rejetpop_02376 = [];
const name_Commune_02376 = [];
const Pourcentage_02376 = [];
const Pourcentage_rejet_02376 = [];
const vote_gene_macron_02376 = [];
const vote_gene_lepen_02376 = [];
const vote_gene_rejet_02376 = [];

async function chartIt02376(){
    await GraphDATA02376();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02376-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02376
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02376
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02376-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02376,vote_lepen_02376,vote_rejet_02376]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02376-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02376,vote_lepenpop_02376,vote_rejetpop_02376]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02376"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02376
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02376
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02376
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02377*/
/*------------------------------------------------------------------ */
async function GraphDATA02377() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02377.push(vote_macron); 
    vote_lepen_02377.push(vote_lepen);
    vote_rejet_02377.push(vote_rejet);
    vote_macronpop_02377.push(vote_macronMediane);
    vote_lepenpop_02377.push(vote_lepenMediane);
    vote_rejetpop_02377.push(vote_rejetMediane);
    name_Commune_02377.push(nameCommune);
    Pourcentage_02377.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02377.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02377.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02377.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02377.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02377 = [];
const vote_lepen_02377 = [];
const vote_rejet_02377 = [];
const vote_macronpop_02377 = [];
const vote_lepenpop_02377 = [];
const vote_rejetpop_02377 = [];
const name_Commune_02377 = [];
const Pourcentage_02377 = [];
const Pourcentage_rejet_02377 = [];
const vote_gene_macron_02377 = [];
const vote_gene_lepen_02377 = [];
const vote_gene_rejet_02377 = [];

async function chartIt02377(){
    await GraphDATA02377();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02377-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02377
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02377
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02377-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02377,vote_lepen_02377,vote_rejet_02377]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02377-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02377,vote_lepenpop_02377,vote_rejetpop_02377]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02377"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02377
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02377
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02377
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02378*/
/*------------------------------------------------------------------ */
async function GraphDATA02378() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02378.push(vote_macron); 
    vote_lepen_02378.push(vote_lepen);
    vote_rejet_02378.push(vote_rejet);
    vote_macronpop_02378.push(vote_macronMediane);
    vote_lepenpop_02378.push(vote_lepenMediane);
    vote_rejetpop_02378.push(vote_rejetMediane);
    name_Commune_02378.push(nameCommune);
    Pourcentage_02378.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02378.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02378.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02378.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02378.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02378 = [];
const vote_lepen_02378 = [];
const vote_rejet_02378 = [];
const vote_macronpop_02378 = [];
const vote_lepenpop_02378 = [];
const vote_rejetpop_02378 = [];
const name_Commune_02378 = [];
const Pourcentage_02378 = [];
const Pourcentage_rejet_02378 = [];
const vote_gene_macron_02378 = [];
const vote_gene_lepen_02378 = [];
const vote_gene_rejet_02378 = [];

async function chartIt02378(){
    await GraphDATA02378();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02378-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02378
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02378
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02378-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02378,vote_lepen_02378,vote_rejet_02378]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02378-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02378,vote_lepenpop_02378,vote_rejetpop_02378]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02378"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02378
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02378
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02378
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02379*/
/*------------------------------------------------------------------ */
async function GraphDATA02379() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02379.push(vote_macron); 
    vote_lepen_02379.push(vote_lepen);
    vote_rejet_02379.push(vote_rejet);
    vote_macronpop_02379.push(vote_macronMediane);
    vote_lepenpop_02379.push(vote_lepenMediane);
    vote_rejetpop_02379.push(vote_rejetMediane);
    name_Commune_02379.push(nameCommune);
    Pourcentage_02379.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02379.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02379.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02379.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02379.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02379 = [];
const vote_lepen_02379 = [];
const vote_rejet_02379 = [];
const vote_macronpop_02379 = [];
const vote_lepenpop_02379 = [];
const vote_rejetpop_02379 = [];
const name_Commune_02379 = [];
const Pourcentage_02379 = [];
const Pourcentage_rejet_02379 = [];
const vote_gene_macron_02379 = [];
const vote_gene_lepen_02379 = [];
const vote_gene_rejet_02379 = [];

async function chartIt02379(){
    await GraphDATA02379();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02379-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02379
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02379
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02379-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02379,vote_lepen_02379,vote_rejet_02379]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02379-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02379,vote_lepenpop_02379,vote_rejetpop_02379]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02379"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02379
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02379
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02379
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02380*/
/*------------------------------------------------------------------ */
async function GraphDATA02380() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02380.push(vote_macron); 
    vote_lepen_02380.push(vote_lepen);
    vote_rejet_02380.push(vote_rejet);
    vote_macronpop_02380.push(vote_macronMediane);
    vote_lepenpop_02380.push(vote_lepenMediane);
    vote_rejetpop_02380.push(vote_rejetMediane);
    name_Commune_02380.push(nameCommune);
    Pourcentage_02380.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02380.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02380.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02380.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02380.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02380 = [];
const vote_lepen_02380 = [];
const vote_rejet_02380 = [];
const vote_macronpop_02380 = [];
const vote_lepenpop_02380 = [];
const vote_rejetpop_02380 = [];
const name_Commune_02380 = [];
const Pourcentage_02380 = [];
const Pourcentage_rejet_02380 = [];
const vote_gene_macron_02380 = [];
const vote_gene_lepen_02380 = [];
const vote_gene_rejet_02380 = [];

async function chartIt02380(){
    await GraphDATA02380();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02380-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02380
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02380
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02380-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02380,vote_lepen_02380,vote_rejet_02380]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02380-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02380,vote_lepenpop_02380,vote_rejetpop_02380]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02380"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02380
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02380
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02380
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02381*/
/*------------------------------------------------------------------ */
async function GraphDATA02381() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02381.push(vote_macron); 
    vote_lepen_02381.push(vote_lepen);
    vote_rejet_02381.push(vote_rejet);
    vote_macronpop_02381.push(vote_macronMediane);
    vote_lepenpop_02381.push(vote_lepenMediane);
    vote_rejetpop_02381.push(vote_rejetMediane);
    name_Commune_02381.push(nameCommune);
    Pourcentage_02381.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02381.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02381.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02381.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02381.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02381 = [];
const vote_lepen_02381 = [];
const vote_rejet_02381 = [];
const vote_macronpop_02381 = [];
const vote_lepenpop_02381 = [];
const vote_rejetpop_02381 = [];
const name_Commune_02381 = [];
const Pourcentage_02381 = [];
const Pourcentage_rejet_02381 = [];
const vote_gene_macron_02381 = [];
const vote_gene_lepen_02381 = [];
const vote_gene_rejet_02381 = [];

async function chartIt02381(){
    await GraphDATA02381();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02381-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02381
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02381
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02381-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02381,vote_lepen_02381,vote_rejet_02381]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02381-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02381,vote_lepenpop_02381,vote_rejetpop_02381]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02381"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02381
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02381
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02381
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02382*/
/*------------------------------------------------------------------ */
async function GraphDATA02382() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02382.push(vote_macron); 
    vote_lepen_02382.push(vote_lepen);
    vote_rejet_02382.push(vote_rejet);
    vote_macronpop_02382.push(vote_macronMediane);
    vote_lepenpop_02382.push(vote_lepenMediane);
    vote_rejetpop_02382.push(vote_rejetMediane);
    name_Commune_02382.push(nameCommune);
    Pourcentage_02382.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02382.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02382.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02382.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02382.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02382 = [];
const vote_lepen_02382 = [];
const vote_rejet_02382 = [];
const vote_macronpop_02382 = [];
const vote_lepenpop_02382 = [];
const vote_rejetpop_02382 = [];
const name_Commune_02382 = [];
const Pourcentage_02382 = [];
const Pourcentage_rejet_02382 = [];
const vote_gene_macron_02382 = [];
const vote_gene_lepen_02382 = [];
const vote_gene_rejet_02382 = [];

async function chartIt02382(){
    await GraphDATA02382();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02382-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02382
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02382
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02382-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02382,vote_lepen_02382,vote_rejet_02382]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02382-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02382,vote_lepenpop_02382,vote_rejetpop_02382]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02382"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02382
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02382
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02382
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02383*/
/*------------------------------------------------------------------ */
async function GraphDATA02383() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02383.push(vote_macron); 
    vote_lepen_02383.push(vote_lepen);
    vote_rejet_02383.push(vote_rejet);
    vote_macronpop_02383.push(vote_macronMediane);
    vote_lepenpop_02383.push(vote_lepenMediane);
    vote_rejetpop_02383.push(vote_rejetMediane);
    name_Commune_02383.push(nameCommune);
    Pourcentage_02383.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02383.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02383.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02383.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02383.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02383 = [];
const vote_lepen_02383 = [];
const vote_rejet_02383 = [];
const vote_macronpop_02383 = [];
const vote_lepenpop_02383 = [];
const vote_rejetpop_02383 = [];
const name_Commune_02383 = [];
const Pourcentage_02383 = [];
const Pourcentage_rejet_02383 = [];
const vote_gene_macron_02383 = [];
const vote_gene_lepen_02383 = [];
const vote_gene_rejet_02383 = [];

async function chartIt02383(){
    await GraphDATA02383();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02383-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02383
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02383
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02383-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02383,vote_lepen_02383,vote_rejet_02383]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02383-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02383,vote_lepenpop_02383,vote_rejetpop_02383]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02383"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02383
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02383
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02383
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02384*/
/*------------------------------------------------------------------ */
async function GraphDATA02384() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02384.push(vote_macron); 
    vote_lepen_02384.push(vote_lepen);
    vote_rejet_02384.push(vote_rejet);
    vote_macronpop_02384.push(vote_macronMediane);
    vote_lepenpop_02384.push(vote_lepenMediane);
    vote_rejetpop_02384.push(vote_rejetMediane);
    name_Commune_02384.push(nameCommune);
    Pourcentage_02384.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02384.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02384.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02384.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02384.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02384 = [];
const vote_lepen_02384 = [];
const vote_rejet_02384 = [];
const vote_macronpop_02384 = [];
const vote_lepenpop_02384 = [];
const vote_rejetpop_02384 = [];
const name_Commune_02384 = [];
const Pourcentage_02384 = [];
const Pourcentage_rejet_02384 = [];
const vote_gene_macron_02384 = [];
const vote_gene_lepen_02384 = [];
const vote_gene_rejet_02384 = [];

async function chartIt02384(){
    await GraphDATA02384();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02384-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02384
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02384
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02384-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02384,vote_lepen_02384,vote_rejet_02384]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02384-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02384,vote_lepenpop_02384,vote_rejetpop_02384]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02384"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02384
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02384
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02384
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02385*/
/*------------------------------------------------------------------ */
async function GraphDATA02385() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02385.push(vote_macron); 
    vote_lepen_02385.push(vote_lepen);
    vote_rejet_02385.push(vote_rejet);
    vote_macronpop_02385.push(vote_macronMediane);
    vote_lepenpop_02385.push(vote_lepenMediane);
    vote_rejetpop_02385.push(vote_rejetMediane);
    name_Commune_02385.push(nameCommune);
    Pourcentage_02385.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02385.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02385.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02385.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02385.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02385 = [];
const vote_lepen_02385 = [];
const vote_rejet_02385 = [];
const vote_macronpop_02385 = [];
const vote_lepenpop_02385 = [];
const vote_rejetpop_02385 = [];
const name_Commune_02385 = [];
const Pourcentage_02385 = [];
const Pourcentage_rejet_02385 = [];
const vote_gene_macron_02385 = [];
const vote_gene_lepen_02385 = [];
const vote_gene_rejet_02385 = [];

async function chartIt02385(){
    await GraphDATA02385();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02385-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02385
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02385
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02385-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02385,vote_lepen_02385,vote_rejet_02385]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02385-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02385,vote_lepenpop_02385,vote_rejetpop_02385]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02385"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02385
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02385
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02385
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02386*/
/*------------------------------------------------------------------ */
async function GraphDATA02386() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02386.push(vote_macron); 
    vote_lepen_02386.push(vote_lepen);
    vote_rejet_02386.push(vote_rejet);
    vote_macronpop_02386.push(vote_macronMediane);
    vote_lepenpop_02386.push(vote_lepenMediane);
    vote_rejetpop_02386.push(vote_rejetMediane);
    name_Commune_02386.push(nameCommune);
    Pourcentage_02386.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02386.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02386.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02386.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02386.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02386 = [];
const vote_lepen_02386 = [];
const vote_rejet_02386 = [];
const vote_macronpop_02386 = [];
const vote_lepenpop_02386 = [];
const vote_rejetpop_02386 = [];
const name_Commune_02386 = [];
const Pourcentage_02386 = [];
const Pourcentage_rejet_02386 = [];
const vote_gene_macron_02386 = [];
const vote_gene_lepen_02386 = [];
const vote_gene_rejet_02386 = [];

async function chartIt02386(){
    await GraphDATA02386();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02386-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02386
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02386
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02386-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02386,vote_lepen_02386,vote_rejet_02386]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02386-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02386,vote_lepenpop_02386,vote_rejetpop_02386]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02386"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02386
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02386
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02386
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02387*/
/*------------------------------------------------------------------ */
async function GraphDATA02387() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02387.push(vote_macron); 
    vote_lepen_02387.push(vote_lepen);
    vote_rejet_02387.push(vote_rejet);
    vote_macronpop_02387.push(vote_macronMediane);
    vote_lepenpop_02387.push(vote_lepenMediane);
    vote_rejetpop_02387.push(vote_rejetMediane);
    name_Commune_02387.push(nameCommune);
    Pourcentage_02387.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02387.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02387.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02387.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02387.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02387 = [];
const vote_lepen_02387 = [];
const vote_rejet_02387 = [];
const vote_macronpop_02387 = [];
const vote_lepenpop_02387 = [];
const vote_rejetpop_02387 = [];
const name_Commune_02387 = [];
const Pourcentage_02387 = [];
const Pourcentage_rejet_02387 = [];
const vote_gene_macron_02387 = [];
const vote_gene_lepen_02387 = [];
const vote_gene_rejet_02387 = [];

async function chartIt02387(){
    await GraphDATA02387();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02387-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02387
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02387
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02387-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02387,vote_lepen_02387,vote_rejet_02387]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02387-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02387,vote_lepenpop_02387,vote_rejetpop_02387]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02387"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02387
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02387
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02387
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02388*/
/*------------------------------------------------------------------ */
async function GraphDATA02388() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02388.push(vote_macron); 
    vote_lepen_02388.push(vote_lepen);
    vote_rejet_02388.push(vote_rejet);
    vote_macronpop_02388.push(vote_macronMediane);
    vote_lepenpop_02388.push(vote_lepenMediane);
    vote_rejetpop_02388.push(vote_rejetMediane);
    name_Commune_02388.push(nameCommune);
    Pourcentage_02388.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02388.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02388.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02388.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02388.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02388 = [];
const vote_lepen_02388 = [];
const vote_rejet_02388 = [];
const vote_macronpop_02388 = [];
const vote_lepenpop_02388 = [];
const vote_rejetpop_02388 = [];
const name_Commune_02388 = [];
const Pourcentage_02388 = [];
const Pourcentage_rejet_02388 = [];
const vote_gene_macron_02388 = [];
const vote_gene_lepen_02388 = [];
const vote_gene_rejet_02388 = [];

async function chartIt02388(){
    await GraphDATA02388();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02388-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02388
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02388
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02388-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02388,vote_lepen_02388,vote_rejet_02388]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02388-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02388,vote_lepenpop_02388,vote_rejetpop_02388]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02388"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02388
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02388
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02388
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02389*/
/*------------------------------------------------------------------ */
async function GraphDATA02389() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02389.push(vote_macron); 
    vote_lepen_02389.push(vote_lepen);
    vote_rejet_02389.push(vote_rejet);
    vote_macronpop_02389.push(vote_macronMediane);
    vote_lepenpop_02389.push(vote_lepenMediane);
    vote_rejetpop_02389.push(vote_rejetMediane);
    name_Commune_02389.push(nameCommune);
    Pourcentage_02389.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02389.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02389.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02389.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02389.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02389 = [];
const vote_lepen_02389 = [];
const vote_rejet_02389 = [];
const vote_macronpop_02389 = [];
const vote_lepenpop_02389 = [];
const vote_rejetpop_02389 = [];
const name_Commune_02389 = [];
const Pourcentage_02389 = [];
const Pourcentage_rejet_02389 = [];
const vote_gene_macron_02389 = [];
const vote_gene_lepen_02389 = [];
const vote_gene_rejet_02389 = [];

async function chartIt02389(){
    await GraphDATA02389();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02389-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02389
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02389
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02389-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02389,vote_lepen_02389,vote_rejet_02389]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02389-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02389,vote_lepenpop_02389,vote_rejetpop_02389]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02389"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02389
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02389
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02389
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02390*/
/*------------------------------------------------------------------ */
async function GraphDATA02390() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02390.push(vote_macron); 
    vote_lepen_02390.push(vote_lepen);
    vote_rejet_02390.push(vote_rejet);
    vote_macronpop_02390.push(vote_macronMediane);
    vote_lepenpop_02390.push(vote_lepenMediane);
    vote_rejetpop_02390.push(vote_rejetMediane);
    name_Commune_02390.push(nameCommune);
    Pourcentage_02390.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02390.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02390.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02390.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02390.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02390 = [];
const vote_lepen_02390 = [];
const vote_rejet_02390 = [];
const vote_macronpop_02390 = [];
const vote_lepenpop_02390 = [];
const vote_rejetpop_02390 = [];
const name_Commune_02390 = [];
const Pourcentage_02390 = [];
const Pourcentage_rejet_02390 = [];
const vote_gene_macron_02390 = [];
const vote_gene_lepen_02390 = [];
const vote_gene_rejet_02390 = [];

async function chartIt02390(){
    await GraphDATA02390();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02390-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02390
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02390
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02390-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02390,vote_lepen_02390,vote_rejet_02390]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02390-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02390,vote_lepenpop_02390,vote_rejetpop_02390]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02390"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02390
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02390
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02390
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02391*/
/*------------------------------------------------------------------ */
async function GraphDATA02391() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02391.push(vote_macron); 
    vote_lepen_02391.push(vote_lepen);
    vote_rejet_02391.push(vote_rejet);
    vote_macronpop_02391.push(vote_macronMediane);
    vote_lepenpop_02391.push(vote_lepenMediane);
    vote_rejetpop_02391.push(vote_rejetMediane);
    name_Commune_02391.push(nameCommune);
    Pourcentage_02391.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02391.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02391.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02391.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02391.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02391 = [];
const vote_lepen_02391 = [];
const vote_rejet_02391 = [];
const vote_macronpop_02391 = [];
const vote_lepenpop_02391 = [];
const vote_rejetpop_02391 = [];
const name_Commune_02391 = [];
const Pourcentage_02391 = [];
const Pourcentage_rejet_02391 = [];
const vote_gene_macron_02391 = [];
const vote_gene_lepen_02391 = [];
const vote_gene_rejet_02391 = [];

async function chartIt02391(){
    await GraphDATA02391();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02391-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02391
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02391
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02391-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02391,vote_lepen_02391,vote_rejet_02391]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02391-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02391,vote_lepenpop_02391,vote_rejetpop_02391]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02391"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02391
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02391
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02391
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02392*/
/*------------------------------------------------------------------ */
async function GraphDATA02392() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02392.push(vote_macron); 
    vote_lepen_02392.push(vote_lepen);
    vote_rejet_02392.push(vote_rejet);
    vote_macronpop_02392.push(vote_macronMediane);
    vote_lepenpop_02392.push(vote_lepenMediane);
    vote_rejetpop_02392.push(vote_rejetMediane);
    name_Commune_02392.push(nameCommune);
    Pourcentage_02392.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02392.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02392.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02392.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02392.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02392 = [];
const vote_lepen_02392 = [];
const vote_rejet_02392 = [];
const vote_macronpop_02392 = [];
const vote_lepenpop_02392 = [];
const vote_rejetpop_02392 = [];
const name_Commune_02392 = [];
const Pourcentage_02392 = [];
const Pourcentage_rejet_02392 = [];
const vote_gene_macron_02392 = [];
const vote_gene_lepen_02392 = [];
const vote_gene_rejet_02392 = [];

async function chartIt02392(){
    await GraphDATA02392();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02392-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02392
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02392
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02392-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02392,vote_lepen_02392,vote_rejet_02392]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02392-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02392,vote_lepenpop_02392,vote_rejetpop_02392]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02392"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02392
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02392
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02392
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02393*/
/*------------------------------------------------------------------ */
async function GraphDATA02393() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02393.push(vote_macron); 
    vote_lepen_02393.push(vote_lepen);
    vote_rejet_02393.push(vote_rejet);
    vote_macronpop_02393.push(vote_macronMediane);
    vote_lepenpop_02393.push(vote_lepenMediane);
    vote_rejetpop_02393.push(vote_rejetMediane);
    name_Commune_02393.push(nameCommune);
    Pourcentage_02393.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02393.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02393.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02393.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02393.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02393 = [];
const vote_lepen_02393 = [];
const vote_rejet_02393 = [];
const vote_macronpop_02393 = [];
const vote_lepenpop_02393 = [];
const vote_rejetpop_02393 = [];
const name_Commune_02393 = [];
const Pourcentage_02393 = [];
const Pourcentage_rejet_02393 = [];
const vote_gene_macron_02393 = [];
const vote_gene_lepen_02393 = [];
const vote_gene_rejet_02393 = [];

async function chartIt02393(){
    await GraphDATA02393();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02393-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02393
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02393
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02393-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02393,vote_lepen_02393,vote_rejet_02393]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02393-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02393,vote_lepenpop_02393,vote_rejetpop_02393]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02393"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02393
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02393
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02393
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02394*/
/*------------------------------------------------------------------ */
async function GraphDATA02394() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[393];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02394.push(vote_macron); 
    vote_lepen_02394.push(vote_lepen);
    vote_rejet_02394.push(vote_rejet);
    vote_macronpop_02394.push(vote_macronMediane);
    vote_lepenpop_02394.push(vote_lepenMediane);
    vote_rejetpop_02394.push(vote_rejetMediane);
    name_Commune_02394.push(nameCommune);
    Pourcentage_02394.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02394.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02394.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02394.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02394.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02394 = [];
const vote_lepen_02394 = [];
const vote_rejet_02394 = [];
const vote_macronpop_02394 = [];
const vote_lepenpop_02394 = [];
const vote_rejetpop_02394 = [];
const name_Commune_02394 = [];
const Pourcentage_02394 = [];
const Pourcentage_rejet_02394 = [];
const vote_gene_macron_02394 = [];
const vote_gene_lepen_02394 = [];
const vote_gene_rejet_02394 = [];

async function chartIt02394(){
    await GraphDATA02394();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02394-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02394
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02394
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02394-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02394,vote_lepen_02394,vote_rejet_02394]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02394-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02394,vote_lepenpop_02394,vote_rejetpop_02394]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02394"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02394
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02394
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02394
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02395*/
/*------------------------------------------------------------------ */
async function GraphDATA02395() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[394];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02395.push(vote_macron); 
    vote_lepen_02395.push(vote_lepen);
    vote_rejet_02395.push(vote_rejet);
    vote_macronpop_02395.push(vote_macronMediane);
    vote_lepenpop_02395.push(vote_lepenMediane);
    vote_rejetpop_02395.push(vote_rejetMediane);
    name_Commune_02395.push(nameCommune);
    Pourcentage_02395.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02395.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02395.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02395.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02395.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02395 = [];
const vote_lepen_02395 = [];
const vote_rejet_02395 = [];
const vote_macronpop_02395 = [];
const vote_lepenpop_02395 = [];
const vote_rejetpop_02395 = [];
const name_Commune_02395 = [];
const Pourcentage_02395 = [];
const Pourcentage_rejet_02395 = [];
const vote_gene_macron_02395 = [];
const vote_gene_lepen_02395 = [];
const vote_gene_rejet_02395 = [];

async function chartIt02395(){
    await GraphDATA02395();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02395-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02395
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02395
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02395-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02395,vote_lepen_02395,vote_rejet_02395]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02395-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02395,vote_lepenpop_02395,vote_rejetpop_02395]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02395"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02395
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02395
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02395
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02396*/
/*------------------------------------------------------------------ */
async function GraphDATA02396() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[395];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02396.push(vote_macron); 
    vote_lepen_02396.push(vote_lepen);
    vote_rejet_02396.push(vote_rejet);
    vote_macronpop_02396.push(vote_macronMediane);
    vote_lepenpop_02396.push(vote_lepenMediane);
    vote_rejetpop_02396.push(vote_rejetMediane);
    name_Commune_02396.push(nameCommune);
    Pourcentage_02396.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02396.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02396.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02396.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02396.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02396 = [];
const vote_lepen_02396 = [];
const vote_rejet_02396 = [];
const vote_macronpop_02396 = [];
const vote_lepenpop_02396 = [];
const vote_rejetpop_02396 = [];
const name_Commune_02396 = [];
const Pourcentage_02396 = [];
const Pourcentage_rejet_02396 = [];
const vote_gene_macron_02396 = [];
const vote_gene_lepen_02396 = [];
const vote_gene_rejet_02396 = [];

async function chartIt02396(){
    await GraphDATA02396();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02396-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02396
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02396
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02396-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02396,vote_lepen_02396,vote_rejet_02396]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02396-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02396,vote_lepenpop_02396,vote_rejetpop_02396]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02396"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02396
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02396
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02396
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02397*/
/*------------------------------------------------------------------ */
async function GraphDATA02397() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[396];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02397.push(vote_macron); 
    vote_lepen_02397.push(vote_lepen);
    vote_rejet_02397.push(vote_rejet);
    vote_macronpop_02397.push(vote_macronMediane);
    vote_lepenpop_02397.push(vote_lepenMediane);
    vote_rejetpop_02397.push(vote_rejetMediane);
    name_Commune_02397.push(nameCommune);
    Pourcentage_02397.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02397.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02397.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02397.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02397.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02397 = [];
const vote_lepen_02397 = [];
const vote_rejet_02397 = [];
const vote_macronpop_02397 = [];
const vote_lepenpop_02397 = [];
const vote_rejetpop_02397 = [];
const name_Commune_02397 = [];
const Pourcentage_02397 = [];
const Pourcentage_rejet_02397 = [];
const vote_gene_macron_02397 = [];
const vote_gene_lepen_02397 = [];
const vote_gene_rejet_02397 = [];

async function chartIt02397(){
    await GraphDATA02397();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02397-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02397
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02397
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02397-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02397,vote_lepen_02397,vote_rejet_02397]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02397-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02397,vote_lepenpop_02397,vote_rejetpop_02397]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02397"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02397
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02397
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02397
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02398*/
/*------------------------------------------------------------------ */
async function GraphDATA02398() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[397];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02398.push(vote_macron); 
    vote_lepen_02398.push(vote_lepen);
    vote_rejet_02398.push(vote_rejet);
    vote_macronpop_02398.push(vote_macronMediane);
    vote_lepenpop_02398.push(vote_lepenMediane);
    vote_rejetpop_02398.push(vote_rejetMediane);
    name_Commune_02398.push(nameCommune);
    Pourcentage_02398.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02398.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02398.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02398.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02398.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02398 = [];
const vote_lepen_02398 = [];
const vote_rejet_02398 = [];
const vote_macronpop_02398 = [];
const vote_lepenpop_02398 = [];
const vote_rejetpop_02398 = [];
const name_Commune_02398 = [];
const Pourcentage_02398 = [];
const Pourcentage_rejet_02398 = [];
const vote_gene_macron_02398 = [];
const vote_gene_lepen_02398 = [];
const vote_gene_rejet_02398 = [];

async function chartIt02398(){
    await GraphDATA02398();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02398-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02398
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02398
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02398-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02398,vote_lepen_02398,vote_rejet_02398]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02398-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02398,vote_lepenpop_02398,vote_rejetpop_02398]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02398"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02398
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02398
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02398
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02399*/
/*------------------------------------------------------------------ */
async function GraphDATA02399() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[398];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02399.push(vote_macron); 
    vote_lepen_02399.push(vote_lepen);
    vote_rejet_02399.push(vote_rejet);
    vote_macronpop_02399.push(vote_macronMediane);
    vote_lepenpop_02399.push(vote_lepenMediane);
    vote_rejetpop_02399.push(vote_rejetMediane);
    name_Commune_02399.push(nameCommune);
    Pourcentage_02399.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02399.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02399.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02399.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02399.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02399 = [];
const vote_lepen_02399 = [];
const vote_rejet_02399 = [];
const vote_macronpop_02399 = [];
const vote_lepenpop_02399 = [];
const vote_rejetpop_02399 = [];
const name_Commune_02399 = [];
const Pourcentage_02399 = [];
const Pourcentage_rejet_02399 = [];
const vote_gene_macron_02399 = [];
const vote_gene_lepen_02399 = [];
const vote_gene_rejet_02399 = [];

async function chartIt02399(){
    await GraphDATA02399();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02399-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02399
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02399
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02399-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02399,vote_lepen_02399,vote_rejet_02399]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02399-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02399,vote_lepenpop_02399,vote_rejetpop_02399]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02399"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02399
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02399
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02399
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}