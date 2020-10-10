/********************************************************************** */
/*JS GRAPHIQUE FICHIER DATA */
/********************************************************************** */
chartIt02601();
chartIt02602();
chartIt02603();
chartIt02604();
chartIt02605();
chartIt02606();
chartIt02607();
chartIt02608();
chartIt02609();
chartIt02610();
chartIt02611();
chartIt02612();
chartIt02613();
chartIt02614();
chartIt02615();
chartIt02616();
chartIt02617();
chartIt02618();
chartIt02619();
chartIt02620();
chartIt02621();
chartIt02622();
chartIt02623();
chartIt02624();
chartIt02625();
chartIt02626();
chartIt02627();
chartIt02628();
chartIt02629();
chartIt02630();
chartIt02631();
chartIt02632();
chartIt02633();
chartIt02634();
chartIt02635();
chartIt02636();
chartIt02637();
chartIt02638();
chartIt02639();
chartIt02640();
chartIt02641();
chartIt02642();
chartIt02643();
chartIt02644();
chartIt02645();
chartIt02646();
chartIt02647();
chartIt02648();
chartIt02649();
chartIt02650();
chartIt02651();
chartIt02652();
chartIt02653();
chartIt02654();
chartIt02655();
chartIt02656();
chartIt02657();
chartIt02658();
chartIt02659();
chartIt02660();
chartIt02661();
chartIt02662();
chartIt02663();
chartIt02664();
chartIt02665();
chartIt02666();
chartIt02667();
chartIt02668();
chartIt02669();
chartIt02670();
chartIt02671();
chartIt02672();
chartIt02673();
chartIt02674();
chartIt02675();
chartIt02676();
chartIt02677();
chartIt02678();
chartIt02679();
chartIt02680();
chartIt02681();
chartIt02682();
chartIt02683();
chartIt02684();
chartIt02685();
chartIt02686();
chartIt02687();
chartIt02688();
chartIt02689();
chartIt02690();
chartIt02691();
chartIt02692();
chartIt02693();
chartIt02694();
chartIt02695();
chartIt02696();
chartIt02697();
chartIt02698();
chartIt02699();
/*------------------------------------------------------------------ */
/*COMMUNE 02601*/
/*------------------------------------------------------------------ */
async function GraphDATA02601() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[600];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02601.push(vote_macron); 
    vote_lepen_02601.push(vote_lepen);
    vote_rejet_02601.push(vote_rejet);
    vote_macronpop_02601.push(vote_macronMediane);
    vote_lepenpop_02601.push(vote_lepenMediane);
    vote_rejetpop_02601.push(vote_rejetMediane);
    name_Commune_02601.push(nameCommune);
    Pourcentage_02601.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02601.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02601.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02601.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02601.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02601 = [];
const vote_lepen_02601 = [];
const vote_rejet_02601 = [];
const vote_macronpop_02601 = [];
const vote_lepenpop_02601 = [];
const vote_rejetpop_02601 = [];
const name_Commune_02601 = [];
const Pourcentage_02601 = [];
const Pourcentage_rejet_02601 = [];
const vote_gene_macron_02601 = [];
const vote_gene_lepen_02601 = [];
const vote_gene_rejet_02601 = [];

async function chartIt02601(){
    await GraphDATA02601();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02601-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02601
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02601
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02601-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02601,vote_lepen_02601,vote_rejet_02601]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02601-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02601,vote_lepenpop_02601,vote_rejetpop_02601]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02601"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02601
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02601
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02601
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02602*/
/*------------------------------------------------------------------ */
async function GraphDATA02602() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[601];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02602.push(vote_macron); 
    vote_lepen_02602.push(vote_lepen);
    vote_rejet_02602.push(vote_rejet);
    vote_macronpop_02602.push(vote_macronMediane);
    vote_lepenpop_02602.push(vote_lepenMediane);
    vote_rejetpop_02602.push(vote_rejetMediane);
    name_Commune_02602.push(nameCommune);
    Pourcentage_02602.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02602.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02602.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02602.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02602.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02602 = [];
const vote_lepen_02602 = [];
const vote_rejet_02602 = [];
const vote_macronpop_02602 = [];
const vote_lepenpop_02602 = [];
const vote_rejetpop_02602 = [];
const name_Commune_02602 = [];
const Pourcentage_02602 = [];
const Pourcentage_rejet_02602 = [];
const vote_gene_macron_02602 = [];
const vote_gene_lepen_02602 = [];
const vote_gene_rejet_02602 = [];

async function chartIt02602(){
    await GraphDATA02602();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02602-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02602
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02602
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02602-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02602,vote_lepen_02602,vote_rejet_02602]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02602-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02602,vote_lepenpop_02602,vote_rejetpop_02602]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02602"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02602
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02602
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02602
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02603*/
/*------------------------------------------------------------------ */
async function GraphDATA02603() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[602];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02603.push(vote_macron); 
    vote_lepen_02603.push(vote_lepen);
    vote_rejet_02603.push(vote_rejet);
    vote_macronpop_02603.push(vote_macronMediane);
    vote_lepenpop_02603.push(vote_lepenMediane);
    vote_rejetpop_02603.push(vote_rejetMediane);
    name_Commune_02603.push(nameCommune);
    Pourcentage_02603.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02603.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02603.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02603.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02603.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02603 = [];
const vote_lepen_02603 = [];
const vote_rejet_02603 = [];
const vote_macronpop_02603 = [];
const vote_lepenpop_02603 = [];
const vote_rejetpop_02603 = [];
const name_Commune_02603 = [];
const Pourcentage_02603 = [];
const Pourcentage_rejet_02603 = [];
const vote_gene_macron_02603 = [];
const vote_gene_lepen_02603 = [];
const vote_gene_rejet_02603 = [];

async function chartIt02603(){
    await GraphDATA02603();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02603-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02603
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02603
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02603-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02603,vote_lepen_02603,vote_rejet_02603]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02603-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02603,vote_lepenpop_02603,vote_rejetpop_02603]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02603"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02603
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02603
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02603
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02604*/
/*------------------------------------------------------------------ */
async function GraphDATA02604() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[603];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02604.push(vote_macron); 
    vote_lepen_02604.push(vote_lepen);
    vote_rejet_02604.push(vote_rejet);
    vote_macronpop_02604.push(vote_macronMediane);
    vote_lepenpop_02604.push(vote_lepenMediane);
    vote_rejetpop_02604.push(vote_rejetMediane);
    name_Commune_02604.push(nameCommune);
    Pourcentage_02604.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02604.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02604.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02604.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02604.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02604 = [];
const vote_lepen_02604 = [];
const vote_rejet_02604 = [];
const vote_macronpop_02604 = [];
const vote_lepenpop_02604 = [];
const vote_rejetpop_02604 = [];
const name_Commune_02604 = [];
const Pourcentage_02604 = [];
const Pourcentage_rejet_02604 = [];
const vote_gene_macron_02604 = [];
const vote_gene_lepen_02604 = [];
const vote_gene_rejet_02604 = [];

async function chartIt02604(){
    await GraphDATA02604();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02604-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02604
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02604
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02604-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02604,vote_lepen_02604,vote_rejet_02604]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02604-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02604,vote_lepenpop_02604,vote_rejetpop_02604]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02604"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02604
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02604
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02604
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02605*/
/*------------------------------------------------------------------ */
async function GraphDATA02605() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[604];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02605.push(vote_macron); 
    vote_lepen_02605.push(vote_lepen);
    vote_rejet_02605.push(vote_rejet);
    vote_macronpop_02605.push(vote_macronMediane);
    vote_lepenpop_02605.push(vote_lepenMediane);
    vote_rejetpop_02605.push(vote_rejetMediane);
    name_Commune_02605.push(nameCommune);
    Pourcentage_02605.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02605.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02605.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02605.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02605.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02605 = [];
const vote_lepen_02605 = [];
const vote_rejet_02605 = [];
const vote_macronpop_02605 = [];
const vote_lepenpop_02605 = [];
const vote_rejetpop_02605 = [];
const name_Commune_02605 = [];
const Pourcentage_02605 = [];
const Pourcentage_rejet_02605 = [];
const vote_gene_macron_02605 = [];
const vote_gene_lepen_02605 = [];
const vote_gene_rejet_02605 = [];

async function chartIt02605(){
    await GraphDATA02605();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02605-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02605
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02605
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02605-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02605,vote_lepen_02605,vote_rejet_02605]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02605-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02605,vote_lepenpop_02605,vote_rejetpop_02605]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02605"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02605
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02605
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02605
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02606*/
/*------------------------------------------------------------------ */
async function GraphDATA02606() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[605];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02606.push(vote_macron); 
    vote_lepen_02606.push(vote_lepen);
    vote_rejet_02606.push(vote_rejet);
    vote_macronpop_02606.push(vote_macronMediane);
    vote_lepenpop_02606.push(vote_lepenMediane);
    vote_rejetpop_02606.push(vote_rejetMediane);
    name_Commune_02606.push(nameCommune);
    Pourcentage_02606.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02606.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02606.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02606.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02606.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02606 = [];
const vote_lepen_02606 = [];
const vote_rejet_02606 = [];
const vote_macronpop_02606 = [];
const vote_lepenpop_02606 = [];
const vote_rejetpop_02606 = [];
const name_Commune_02606 = [];
const Pourcentage_02606 = [];
const Pourcentage_rejet_02606 = [];
const vote_gene_macron_02606 = [];
const vote_gene_lepen_02606 = [];
const vote_gene_rejet_02606 = [];

async function chartIt02606(){
    await GraphDATA02606();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02606-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02606
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02606
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02606-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02606,vote_lepen_02606,vote_rejet_02606]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02606-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02606,vote_lepenpop_02606,vote_rejetpop_02606]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02606"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02606
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02606
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02606
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02607*/
/*------------------------------------------------------------------ */
async function GraphDATA02607() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[606];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02607.push(vote_macron); 
    vote_lepen_02607.push(vote_lepen);
    vote_rejet_02607.push(vote_rejet);
    vote_macronpop_02607.push(vote_macronMediane);
    vote_lepenpop_02607.push(vote_lepenMediane);
    vote_rejetpop_02607.push(vote_rejetMediane);
    name_Commune_02607.push(nameCommune);
    Pourcentage_02607.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02607.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02607.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02607.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02607.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02607 = [];
const vote_lepen_02607 = [];
const vote_rejet_02607 = [];
const vote_macronpop_02607 = [];
const vote_lepenpop_02607 = [];
const vote_rejetpop_02607 = [];
const name_Commune_02607 = [];
const Pourcentage_02607 = [];
const Pourcentage_rejet_02607 = [];
const vote_gene_macron_02607 = [];
const vote_gene_lepen_02607 = [];
const vote_gene_rejet_02607 = [];

async function chartIt02607(){
    await GraphDATA02607();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02607-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02607
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02607
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02607-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02607,vote_lepen_02607,vote_rejet_02607]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02607-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02607,vote_lepenpop_02607,vote_rejetpop_02607]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02607"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02607
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02607
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02607
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02608*/
/*------------------------------------------------------------------ */
async function GraphDATA02608() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[607];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02608.push(vote_macron); 
    vote_lepen_02608.push(vote_lepen);
    vote_rejet_02608.push(vote_rejet);
    vote_macronpop_02608.push(vote_macronMediane);
    vote_lepenpop_02608.push(vote_lepenMediane);
    vote_rejetpop_02608.push(vote_rejetMediane);
    name_Commune_02608.push(nameCommune);
    Pourcentage_02608.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02608.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02608.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02608.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02608.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02608 = [];
const vote_lepen_02608 = [];
const vote_rejet_02608 = [];
const vote_macronpop_02608 = [];
const vote_lepenpop_02608 = [];
const vote_rejetpop_02608 = [];
const name_Commune_02608 = [];
const Pourcentage_02608 = [];
const Pourcentage_rejet_02608 = [];
const vote_gene_macron_02608 = [];
const vote_gene_lepen_02608 = [];
const vote_gene_rejet_02608 = [];

async function chartIt02608(){
    await GraphDATA02608();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02608-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02608
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02608
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02608-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02608,vote_lepen_02608,vote_rejet_02608]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02608-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02608,vote_lepenpop_02608,vote_rejetpop_02608]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02608"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02608
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02608
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02608
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02609*/
/*------------------------------------------------------------------ */
async function GraphDATA02609() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[608];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02609.push(vote_macron); 
    vote_lepen_02609.push(vote_lepen);
    vote_rejet_02609.push(vote_rejet);
    vote_macronpop_02609.push(vote_macronMediane);
    vote_lepenpop_02609.push(vote_lepenMediane);
    vote_rejetpop_02609.push(vote_rejetMediane);
    name_Commune_02609.push(nameCommune);
    Pourcentage_02609.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02609.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02609.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02609.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02609.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02609 = [];
const vote_lepen_02609 = [];
const vote_rejet_02609 = [];
const vote_macronpop_02609 = [];
const vote_lepenpop_02609 = [];
const vote_rejetpop_02609 = [];
const name_Commune_02609 = [];
const Pourcentage_02609 = [];
const Pourcentage_rejet_02609 = [];
const vote_gene_macron_02609 = [];
const vote_gene_lepen_02609 = [];
const vote_gene_rejet_02609 = [];

async function chartIt02609(){
    await GraphDATA02609();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02609-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02609
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02609
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02609-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02609,vote_lepen_02609,vote_rejet_02609]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02609-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02609,vote_lepenpop_02609,vote_rejetpop_02609]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02609"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02609
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02609
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02609
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02610*/
/*------------------------------------------------------------------ */
async function GraphDATA02610() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[609];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02610.push(vote_macron); 
    vote_lepen_02610.push(vote_lepen);
    vote_rejet_02610.push(vote_rejet);
    vote_macronpop_02610.push(vote_macronMediane);
    vote_lepenpop_02610.push(vote_lepenMediane);
    vote_rejetpop_02610.push(vote_rejetMediane);
    name_Commune_02610.push(nameCommune);
    Pourcentage_02610.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02610.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02610.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02610.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02610.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02610 = [];
const vote_lepen_02610 = [];
const vote_rejet_02610 = [];
const vote_macronpop_02610 = [];
const vote_lepenpop_02610 = [];
const vote_rejetpop_02610 = [];
const name_Commune_02610 = [];
const Pourcentage_02610 = [];
const Pourcentage_rejet_02610 = [];
const vote_gene_macron_02610 = [];
const vote_gene_lepen_02610 = [];
const vote_gene_rejet_02610 = [];

async function chartIt02610(){
    await GraphDATA02610();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02610-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02610
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02610
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02610-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02610,vote_lepen_02610,vote_rejet_02610]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02610-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02610,vote_lepenpop_02610,vote_rejetpop_02610]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02610"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02610
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02610
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02610
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02611*/
/*------------------------------------------------------------------ */
async function GraphDATA02611() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[610];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02611.push(vote_macron); 
    vote_lepen_02611.push(vote_lepen);
    vote_rejet_02611.push(vote_rejet);
    vote_macronpop_02611.push(vote_macronMediane);
    vote_lepenpop_02611.push(vote_lepenMediane);
    vote_rejetpop_02611.push(vote_rejetMediane);
    name_Commune_02611.push(nameCommune);
    Pourcentage_02611.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02611.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02611.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02611.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02611.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02611 = [];
const vote_lepen_02611 = [];
const vote_rejet_02611 = [];
const vote_macronpop_02611 = [];
const vote_lepenpop_02611 = [];
const vote_rejetpop_02611 = [];
const name_Commune_02611 = [];
const Pourcentage_02611 = [];
const Pourcentage_rejet_02611 = [];
const vote_gene_macron_02611 = [];
const vote_gene_lepen_02611 = [];
const vote_gene_rejet_02611 = [];

async function chartIt02611(){
    await GraphDATA02611();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02611-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02611
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02611
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02611-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02611,vote_lepen_02611,vote_rejet_02611]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02611-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02611,vote_lepenpop_02611,vote_rejetpop_02611]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02611"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02611
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02611
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02611
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02612*/
/*------------------------------------------------------------------ */
async function GraphDATA02612() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[611];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02612.push(vote_macron); 
    vote_lepen_02612.push(vote_lepen);
    vote_rejet_02612.push(vote_rejet);
    vote_macronpop_02612.push(vote_macronMediane);
    vote_lepenpop_02612.push(vote_lepenMediane);
    vote_rejetpop_02612.push(vote_rejetMediane);
    name_Commune_02612.push(nameCommune);
    Pourcentage_02612.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02612.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02612.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02612.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02612.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02612 = [];
const vote_lepen_02612 = [];
const vote_rejet_02612 = [];
const vote_macronpop_02612 = [];
const vote_lepenpop_02612 = [];
const vote_rejetpop_02612 = [];
const name_Commune_02612 = [];
const Pourcentage_02612 = [];
const Pourcentage_rejet_02612 = [];
const vote_gene_macron_02612 = [];
const vote_gene_lepen_02612 = [];
const vote_gene_rejet_02612 = [];

async function chartIt02612(){
    await GraphDATA02612();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02612-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02612
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02612
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02612-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02612,vote_lepen_02612,vote_rejet_02612]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02612-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02612,vote_lepenpop_02612,vote_rejetpop_02612]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02612"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02612
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02612
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02612
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02613*/
/*------------------------------------------------------------------ */
async function GraphDATA02613() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[612];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02613.push(vote_macron); 
    vote_lepen_02613.push(vote_lepen);
    vote_rejet_02613.push(vote_rejet);
    vote_macronpop_02613.push(vote_macronMediane);
    vote_lepenpop_02613.push(vote_lepenMediane);
    vote_rejetpop_02613.push(vote_rejetMediane);
    name_Commune_02613.push(nameCommune);
    Pourcentage_02613.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02613.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02613.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02613.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02613.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02613 = [];
const vote_lepen_02613 = [];
const vote_rejet_02613 = [];
const vote_macronpop_02613 = [];
const vote_lepenpop_02613 = [];
const vote_rejetpop_02613 = [];
const name_Commune_02613 = [];
const Pourcentage_02613 = [];
const Pourcentage_rejet_02613 = [];
const vote_gene_macron_02613 = [];
const vote_gene_lepen_02613 = [];
const vote_gene_rejet_02613 = [];

async function chartIt02613(){
    await GraphDATA02613();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02613-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02613
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02613
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02613-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02613,vote_lepen_02613,vote_rejet_02613]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02613-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02613,vote_lepenpop_02613,vote_rejetpop_02613]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02613"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02613
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02613
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02613
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02614*/
/*------------------------------------------------------------------ */
async function GraphDATA02614() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[613];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02614.push(vote_macron); 
    vote_lepen_02614.push(vote_lepen);
    vote_rejet_02614.push(vote_rejet);
    vote_macronpop_02614.push(vote_macronMediane);
    vote_lepenpop_02614.push(vote_lepenMediane);
    vote_rejetpop_02614.push(vote_rejetMediane);
    name_Commune_02614.push(nameCommune);
    Pourcentage_02614.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02614.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02614.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02614.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02614.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02614 = [];
const vote_lepen_02614 = [];
const vote_rejet_02614 = [];
const vote_macronpop_02614 = [];
const vote_lepenpop_02614 = [];
const vote_rejetpop_02614 = [];
const name_Commune_02614 = [];
const Pourcentage_02614 = [];
const Pourcentage_rejet_02614 = [];
const vote_gene_macron_02614 = [];
const vote_gene_lepen_02614 = [];
const vote_gene_rejet_02614 = [];

async function chartIt02614(){
    await GraphDATA02614();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02614-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02614
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02614
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02614-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02614,vote_lepen_02614,vote_rejet_02614]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02614-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02614,vote_lepenpop_02614,vote_rejetpop_02614]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02614"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02614
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02614
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02614
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02615*/
/*------------------------------------------------------------------ */
async function GraphDATA02615() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[614];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02615.push(vote_macron); 
    vote_lepen_02615.push(vote_lepen);
    vote_rejet_02615.push(vote_rejet);
    vote_macronpop_02615.push(vote_macronMediane);
    vote_lepenpop_02615.push(vote_lepenMediane);
    vote_rejetpop_02615.push(vote_rejetMediane);
    name_Commune_02615.push(nameCommune);
    Pourcentage_02615.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02615.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02615.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02615.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02615.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02615 = [];
const vote_lepen_02615 = [];
const vote_rejet_02615 = [];
const vote_macronpop_02615 = [];
const vote_lepenpop_02615 = [];
const vote_rejetpop_02615 = [];
const name_Commune_02615 = [];
const Pourcentage_02615 = [];
const Pourcentage_rejet_02615 = [];
const vote_gene_macron_02615 = [];
const vote_gene_lepen_02615 = [];
const vote_gene_rejet_02615 = [];

async function chartIt02615(){
    await GraphDATA02615();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02615-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02615
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02615
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02615-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02615,vote_lepen_02615,vote_rejet_02615]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02615-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02615,vote_lepenpop_02615,vote_rejetpop_02615]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02615"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02615
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02615
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02615
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02616*/
/*------------------------------------------------------------------ */
async function GraphDATA02616() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[615];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02616.push(vote_macron); 
    vote_lepen_02616.push(vote_lepen);
    vote_rejet_02616.push(vote_rejet);
    vote_macronpop_02616.push(vote_macronMediane);
    vote_lepenpop_02616.push(vote_lepenMediane);
    vote_rejetpop_02616.push(vote_rejetMediane);
    name_Commune_02616.push(nameCommune);
    Pourcentage_02616.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02616.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02616.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02616.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02616.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02616 = [];
const vote_lepen_02616 = [];
const vote_rejet_02616 = [];
const vote_macronpop_02616 = [];
const vote_lepenpop_02616 = [];
const vote_rejetpop_02616 = [];
const name_Commune_02616 = [];
const Pourcentage_02616 = [];
const Pourcentage_rejet_02616 = [];
const vote_gene_macron_02616 = [];
const vote_gene_lepen_02616 = [];
const vote_gene_rejet_02616 = [];

async function chartIt02616(){
    await GraphDATA02616();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02616-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02616
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02616
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02616-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02616,vote_lepen_02616,vote_rejet_02616]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02616-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02616,vote_lepenpop_02616,vote_rejetpop_02616]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02616"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02616
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02616
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02616
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02617*/
/*------------------------------------------------------------------ */
async function GraphDATA02617() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[616];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02617.push(vote_macron); 
    vote_lepen_02617.push(vote_lepen);
    vote_rejet_02617.push(vote_rejet);
    vote_macronpop_02617.push(vote_macronMediane);
    vote_lepenpop_02617.push(vote_lepenMediane);
    vote_rejetpop_02617.push(vote_rejetMediane);
    name_Commune_02617.push(nameCommune);
    Pourcentage_02617.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02617.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02617.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02617.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02617.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02617 = [];
const vote_lepen_02617 = [];
const vote_rejet_02617 = [];
const vote_macronpop_02617 = [];
const vote_lepenpop_02617 = [];
const vote_rejetpop_02617 = [];
const name_Commune_02617 = [];
const Pourcentage_02617 = [];
const Pourcentage_rejet_02617 = [];
const vote_gene_macron_02617 = [];
const vote_gene_lepen_02617 = [];
const vote_gene_rejet_02617 = [];

async function chartIt02617(){
    await GraphDATA02617();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02617-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02617
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02617
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02617-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02617,vote_lepen_02617,vote_rejet_02617]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02617-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02617,vote_lepenpop_02617,vote_rejetpop_02617]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02617"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02617
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02617
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02617
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02618*/
/*------------------------------------------------------------------ */
async function GraphDATA02618() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[617];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02618.push(vote_macron); 
    vote_lepen_02618.push(vote_lepen);
    vote_rejet_02618.push(vote_rejet);
    vote_macronpop_02618.push(vote_macronMediane);
    vote_lepenpop_02618.push(vote_lepenMediane);
    vote_rejetpop_02618.push(vote_rejetMediane);
    name_Commune_02618.push(nameCommune);
    Pourcentage_02618.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02618.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02618.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02618.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02618.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02618 = [];
const vote_lepen_02618 = [];
const vote_rejet_02618 = [];
const vote_macronpop_02618 = [];
const vote_lepenpop_02618 = [];
const vote_rejetpop_02618 = [];
const name_Commune_02618 = [];
const Pourcentage_02618 = [];
const Pourcentage_rejet_02618 = [];
const vote_gene_macron_02618 = [];
const vote_gene_lepen_02618 = [];
const vote_gene_rejet_02618 = [];

async function chartIt02618(){
    await GraphDATA02618();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02618-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02618
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02618
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02618-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02618,vote_lepen_02618,vote_rejet_02618]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02618-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02618,vote_lepenpop_02618,vote_rejetpop_02618]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02618"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02618
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02618
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02618
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02619*/
/*------------------------------------------------------------------ */
async function GraphDATA02619() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[618];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02619.push(vote_macron); 
    vote_lepen_02619.push(vote_lepen);
    vote_rejet_02619.push(vote_rejet);
    vote_macronpop_02619.push(vote_macronMediane);
    vote_lepenpop_02619.push(vote_lepenMediane);
    vote_rejetpop_02619.push(vote_rejetMediane);
    name_Commune_02619.push(nameCommune);
    Pourcentage_02619.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02619.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02619.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02619.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02619.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02619 = [];
const vote_lepen_02619 = [];
const vote_rejet_02619 = [];
const vote_macronpop_02619 = [];
const vote_lepenpop_02619 = [];
const vote_rejetpop_02619 = [];
const name_Commune_02619 = [];
const Pourcentage_02619 = [];
const Pourcentage_rejet_02619 = [];
const vote_gene_macron_02619 = [];
const vote_gene_lepen_02619 = [];
const vote_gene_rejet_02619 = [];

async function chartIt02619(){
    await GraphDATA02619();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02619-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02619
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02619
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02619-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02619,vote_lepen_02619,vote_rejet_02619]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02619-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02619,vote_lepenpop_02619,vote_rejetpop_02619]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02619"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02619
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02619
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02619
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02620*/
/*------------------------------------------------------------------ */
async function GraphDATA02620() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[619];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02620.push(vote_macron); 
    vote_lepen_02620.push(vote_lepen);
    vote_rejet_02620.push(vote_rejet);
    vote_macronpop_02620.push(vote_macronMediane);
    vote_lepenpop_02620.push(vote_lepenMediane);
    vote_rejetpop_02620.push(vote_rejetMediane);
    name_Commune_02620.push(nameCommune);
    Pourcentage_02620.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02620.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02620.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02620.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02620.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02620 = [];
const vote_lepen_02620 = [];
const vote_rejet_02620 = [];
const vote_macronpop_02620 = [];
const vote_lepenpop_02620 = [];
const vote_rejetpop_02620 = [];
const name_Commune_02620 = [];
const Pourcentage_02620 = [];
const Pourcentage_rejet_02620 = [];
const vote_gene_macron_02620 = [];
const vote_gene_lepen_02620 = [];
const vote_gene_rejet_02620 = [];

async function chartIt02620(){
    await GraphDATA02620();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02620-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02620
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02620
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02620-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02620,vote_lepen_02620,vote_rejet_02620]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02620-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02620,vote_lepenpop_02620,vote_rejetpop_02620]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02620"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02620
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02620
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02620
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02621*/
/*------------------------------------------------------------------ */
async function GraphDATA02621() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[620];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02621.push(vote_macron); 
    vote_lepen_02621.push(vote_lepen);
    vote_rejet_02621.push(vote_rejet);
    vote_macronpop_02621.push(vote_macronMediane);
    vote_lepenpop_02621.push(vote_lepenMediane);
    vote_rejetpop_02621.push(vote_rejetMediane);
    name_Commune_02621.push(nameCommune);
    Pourcentage_02621.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02621.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02621.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02621.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02621.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02621 = [];
const vote_lepen_02621 = [];
const vote_rejet_02621 = [];
const vote_macronpop_02621 = [];
const vote_lepenpop_02621 = [];
const vote_rejetpop_02621 = [];
const name_Commune_02621 = [];
const Pourcentage_02621 = [];
const Pourcentage_rejet_02621 = [];
const vote_gene_macron_02621 = [];
const vote_gene_lepen_02621 = [];
const vote_gene_rejet_02621 = [];

async function chartIt02621(){
    await GraphDATA02621();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02621-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02621
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02621
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02621-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02621,vote_lepen_02621,vote_rejet_02621]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02621-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02621,vote_lepenpop_02621,vote_rejetpop_02621]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02621"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02621
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02621
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02621
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02622*/
/*------------------------------------------------------------------ */
async function GraphDATA02622() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[621];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02622.push(vote_macron); 
    vote_lepen_02622.push(vote_lepen);
    vote_rejet_02622.push(vote_rejet);
    vote_macronpop_02622.push(vote_macronMediane);
    vote_lepenpop_02622.push(vote_lepenMediane);
    vote_rejetpop_02622.push(vote_rejetMediane);
    name_Commune_02622.push(nameCommune);
    Pourcentage_02622.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02622.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02622.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02622.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02622.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02622 = [];
const vote_lepen_02622 = [];
const vote_rejet_02622 = [];
const vote_macronpop_02622 = [];
const vote_lepenpop_02622 = [];
const vote_rejetpop_02622 = [];
const name_Commune_02622 = [];
const Pourcentage_02622 = [];
const Pourcentage_rejet_02622 = [];
const vote_gene_macron_02622 = [];
const vote_gene_lepen_02622 = [];
const vote_gene_rejet_02622 = [];

async function chartIt02622(){
    await GraphDATA02622();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02622-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02622
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02622
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02622-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02622,vote_lepen_02622,vote_rejet_02622]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02622-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02622,vote_lepenpop_02622,vote_rejetpop_02622]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02622"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02622
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02622
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02622
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02623*/
/*------------------------------------------------------------------ */
async function GraphDATA02623() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[622];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02623.push(vote_macron); 
    vote_lepen_02623.push(vote_lepen);
    vote_rejet_02623.push(vote_rejet);
    vote_macronpop_02623.push(vote_macronMediane);
    vote_lepenpop_02623.push(vote_lepenMediane);
    vote_rejetpop_02623.push(vote_rejetMediane);
    name_Commune_02623.push(nameCommune);
    Pourcentage_02623.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02623.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02623.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02623.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02623.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02623 = [];
const vote_lepen_02623 = [];
const vote_rejet_02623 = [];
const vote_macronpop_02623 = [];
const vote_lepenpop_02623 = [];
const vote_rejetpop_02623 = [];
const name_Commune_02623 = [];
const Pourcentage_02623 = [];
const Pourcentage_rejet_02623 = [];
const vote_gene_macron_02623 = [];
const vote_gene_lepen_02623 = [];
const vote_gene_rejet_02623 = [];

async function chartIt02623(){
    await GraphDATA02623();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02623-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02623
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02623
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02623-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02623,vote_lepen_02623,vote_rejet_02623]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02623-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02623,vote_lepenpop_02623,vote_rejetpop_02623]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02623"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02623
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02623
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02623
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02624*/
/*------------------------------------------------------------------ */
async function GraphDATA02624() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[623];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02624.push(vote_macron); 
    vote_lepen_02624.push(vote_lepen);
    vote_rejet_02624.push(vote_rejet);
    vote_macronpop_02624.push(vote_macronMediane);
    vote_lepenpop_02624.push(vote_lepenMediane);
    vote_rejetpop_02624.push(vote_rejetMediane);
    name_Commune_02624.push(nameCommune);
    Pourcentage_02624.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02624.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02624.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02624.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02624.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02624 = [];
const vote_lepen_02624 = [];
const vote_rejet_02624 = [];
const vote_macronpop_02624 = [];
const vote_lepenpop_02624 = [];
const vote_rejetpop_02624 = [];
const name_Commune_02624 = [];
const Pourcentage_02624 = [];
const Pourcentage_rejet_02624 = [];
const vote_gene_macron_02624 = [];
const vote_gene_lepen_02624 = [];
const vote_gene_rejet_02624 = [];

async function chartIt02624(){
    await GraphDATA02624();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02624-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02624
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02624
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02624-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02624,vote_lepen_02624,vote_rejet_02624]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02624-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02624,vote_lepenpop_02624,vote_rejetpop_02624]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02624"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02624
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02624
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02624
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02625*/
/*------------------------------------------------------------------ */
async function GraphDATA02625() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[624];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02625.push(vote_macron); 
    vote_lepen_02625.push(vote_lepen);
    vote_rejet_02625.push(vote_rejet);
    vote_macronpop_02625.push(vote_macronMediane);
    vote_lepenpop_02625.push(vote_lepenMediane);
    vote_rejetpop_02625.push(vote_rejetMediane);
    name_Commune_02625.push(nameCommune);
    Pourcentage_02625.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02625.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02625.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02625.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02625.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02625 = [];
const vote_lepen_02625 = [];
const vote_rejet_02625 = [];
const vote_macronpop_02625 = [];
const vote_lepenpop_02625 = [];
const vote_rejetpop_02625 = [];
const name_Commune_02625 = [];
const Pourcentage_02625 = [];
const Pourcentage_rejet_02625 = [];
const vote_gene_macron_02625 = [];
const vote_gene_lepen_02625 = [];
const vote_gene_rejet_02625 = [];

async function chartIt02625(){
    await GraphDATA02625();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02625-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02625
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02625
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02625-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02625,vote_lepen_02625,vote_rejet_02625]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02625-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02625,vote_lepenpop_02625,vote_rejetpop_02625]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02625"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02625
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02625
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02625
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02626*/
/*------------------------------------------------------------------ */
async function GraphDATA02626() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[625];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02626.push(vote_macron); 
    vote_lepen_02626.push(vote_lepen);
    vote_rejet_02626.push(vote_rejet);
    vote_macronpop_02626.push(vote_macronMediane);
    vote_lepenpop_02626.push(vote_lepenMediane);
    vote_rejetpop_02626.push(vote_rejetMediane);
    name_Commune_02626.push(nameCommune);
    Pourcentage_02626.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02626.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02626.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02626.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02626.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02626 = [];
const vote_lepen_02626 = [];
const vote_rejet_02626 = [];
const vote_macronpop_02626 = [];
const vote_lepenpop_02626 = [];
const vote_rejetpop_02626 = [];
const name_Commune_02626 = [];
const Pourcentage_02626 = [];
const Pourcentage_rejet_02626 = [];
const vote_gene_macron_02626 = [];
const vote_gene_lepen_02626 = [];
const vote_gene_rejet_02626 = [];

async function chartIt02626(){
    await GraphDATA02626();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02626-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02626
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02626
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02626-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02626,vote_lepen_02626,vote_rejet_02626]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02626-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02626,vote_lepenpop_02626,vote_rejetpop_02626]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02626"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02626
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02626
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02626
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02627*/
/*------------------------------------------------------------------ */
async function GraphDATA02627() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[626];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02627.push(vote_macron); 
    vote_lepen_02627.push(vote_lepen);
    vote_rejet_02627.push(vote_rejet);
    vote_macronpop_02627.push(vote_macronMediane);
    vote_lepenpop_02627.push(vote_lepenMediane);
    vote_rejetpop_02627.push(vote_rejetMediane);
    name_Commune_02627.push(nameCommune);
    Pourcentage_02627.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02627.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02627.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02627.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02627.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02627 = [];
const vote_lepen_02627 = [];
const vote_rejet_02627 = [];
const vote_macronpop_02627 = [];
const vote_lepenpop_02627 = [];
const vote_rejetpop_02627 = [];
const name_Commune_02627 = [];
const Pourcentage_02627 = [];
const Pourcentage_rejet_02627 = [];
const vote_gene_macron_02627 = [];
const vote_gene_lepen_02627 = [];
const vote_gene_rejet_02627 = [];

async function chartIt02627(){
    await GraphDATA02627();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02627-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02627
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02627
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02627-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02627,vote_lepen_02627,vote_rejet_02627]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02627-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02627,vote_lepenpop_02627,vote_rejetpop_02627]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02627"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02627
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02627
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02627
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02628*/
/*------------------------------------------------------------------ */
async function GraphDATA02628() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[627];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02628.push(vote_macron); 
    vote_lepen_02628.push(vote_lepen);
    vote_rejet_02628.push(vote_rejet);
    vote_macronpop_02628.push(vote_macronMediane);
    vote_lepenpop_02628.push(vote_lepenMediane);
    vote_rejetpop_02628.push(vote_rejetMediane);
    name_Commune_02628.push(nameCommune);
    Pourcentage_02628.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02628.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02628.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02628.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02628.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02628 = [];
const vote_lepen_02628 = [];
const vote_rejet_02628 = [];
const vote_macronpop_02628 = [];
const vote_lepenpop_02628 = [];
const vote_rejetpop_02628 = [];
const name_Commune_02628 = [];
const Pourcentage_02628 = [];
const Pourcentage_rejet_02628 = [];
const vote_gene_macron_02628 = [];
const vote_gene_lepen_02628 = [];
const vote_gene_rejet_02628 = [];

async function chartIt02628(){
    await GraphDATA02628();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02628-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02628
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02628
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02628-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02628,vote_lepen_02628,vote_rejet_02628]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02628-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02628,vote_lepenpop_02628,vote_rejetpop_02628]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02628"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02628
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02628
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02628
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02629*/
/*------------------------------------------------------------------ */
async function GraphDATA02629() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[628];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02629.push(vote_macron); 
    vote_lepen_02629.push(vote_lepen);
    vote_rejet_02629.push(vote_rejet);
    vote_macronpop_02629.push(vote_macronMediane);
    vote_lepenpop_02629.push(vote_lepenMediane);
    vote_rejetpop_02629.push(vote_rejetMediane);
    name_Commune_02629.push(nameCommune);
    Pourcentage_02629.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02629.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02629.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02629.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02629.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02629 = [];
const vote_lepen_02629 = [];
const vote_rejet_02629 = [];
const vote_macronpop_02629 = [];
const vote_lepenpop_02629 = [];
const vote_rejetpop_02629 = [];
const name_Commune_02629 = [];
const Pourcentage_02629 = [];
const Pourcentage_rejet_02629 = [];
const vote_gene_macron_02629 = [];
const vote_gene_lepen_02629 = [];
const vote_gene_rejet_02629 = [];

async function chartIt02629(){
    await GraphDATA02629();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02629-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02629
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02629
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02629-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02629,vote_lepen_02629,vote_rejet_02629]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02629-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02629,vote_lepenpop_02629,vote_rejetpop_02629]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02629"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02629
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02629
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02629
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02630*/
/*------------------------------------------------------------------ */
async function GraphDATA02630() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[629];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02630.push(vote_macron); 
    vote_lepen_02630.push(vote_lepen);
    vote_rejet_02630.push(vote_rejet);
    vote_macronpop_02630.push(vote_macronMediane);
    vote_lepenpop_02630.push(vote_lepenMediane);
    vote_rejetpop_02630.push(vote_rejetMediane);
    name_Commune_02630.push(nameCommune);
    Pourcentage_02630.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02630.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02630.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02630.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02630.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02630 = [];
const vote_lepen_02630 = [];
const vote_rejet_02630 = [];
const vote_macronpop_02630 = [];
const vote_lepenpop_02630 = [];
const vote_rejetpop_02630 = [];
const name_Commune_02630 = [];
const Pourcentage_02630 = [];
const Pourcentage_rejet_02630 = [];
const vote_gene_macron_02630 = [];
const vote_gene_lepen_02630 = [];
const vote_gene_rejet_02630 = [];

async function chartIt02630(){
    await GraphDATA02630();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02630-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02630
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02630
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02630-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02630,vote_lepen_02630,vote_rejet_02630]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02630-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02630,vote_lepenpop_02630,vote_rejetpop_02630]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02630"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02630
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02630
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02630
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02631*/
/*------------------------------------------------------------------ */
async function GraphDATA02631() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[630];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02631.push(vote_macron); 
    vote_lepen_02631.push(vote_lepen);
    vote_rejet_02631.push(vote_rejet);
    vote_macronpop_02631.push(vote_macronMediane);
    vote_lepenpop_02631.push(vote_lepenMediane);
    vote_rejetpop_02631.push(vote_rejetMediane);
    name_Commune_02631.push(nameCommune);
    Pourcentage_02631.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02631.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02631.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02631.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02631.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02631 = [];
const vote_lepen_02631 = [];
const vote_rejet_02631 = [];
const vote_macronpop_02631 = [];
const vote_lepenpop_02631 = [];
const vote_rejetpop_02631 = [];
const name_Commune_02631 = [];
const Pourcentage_02631 = [];
const Pourcentage_rejet_02631 = [];
const vote_gene_macron_02631 = [];
const vote_gene_lepen_02631 = [];
const vote_gene_rejet_02631 = [];

async function chartIt02631(){
    await GraphDATA02631();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02631-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02631
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02631
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02631-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02631,vote_lepen_02631,vote_rejet_02631]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02631-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02631,vote_lepenpop_02631,vote_rejetpop_02631]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02631"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02631
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02631
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02631
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02632*/
/*------------------------------------------------------------------ */
async function GraphDATA02632() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[631];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02632.push(vote_macron); 
    vote_lepen_02632.push(vote_lepen);
    vote_rejet_02632.push(vote_rejet);
    vote_macronpop_02632.push(vote_macronMediane);
    vote_lepenpop_02632.push(vote_lepenMediane);
    vote_rejetpop_02632.push(vote_rejetMediane);
    name_Commune_02632.push(nameCommune);
    Pourcentage_02632.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02632.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02632.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02632.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02632.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02632 = [];
const vote_lepen_02632 = [];
const vote_rejet_02632 = [];
const vote_macronpop_02632 = [];
const vote_lepenpop_02632 = [];
const vote_rejetpop_02632 = [];
const name_Commune_02632 = [];
const Pourcentage_02632 = [];
const Pourcentage_rejet_02632 = [];
const vote_gene_macron_02632 = [];
const vote_gene_lepen_02632 = [];
const vote_gene_rejet_02632 = [];

async function chartIt02632(){
    await GraphDATA02632();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02632-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02632
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02632
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02632-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02632,vote_lepen_02632,vote_rejet_02632]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02632-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02632,vote_lepenpop_02632,vote_rejetpop_02632]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02632"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02632
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02632
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02632
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02633*/
/*------------------------------------------------------------------ */
async function GraphDATA02633() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[632];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02633.push(vote_macron); 
    vote_lepen_02633.push(vote_lepen);
    vote_rejet_02633.push(vote_rejet);
    vote_macronpop_02633.push(vote_macronMediane);
    vote_lepenpop_02633.push(vote_lepenMediane);
    vote_rejetpop_02633.push(vote_rejetMediane);
    name_Commune_02633.push(nameCommune);
    Pourcentage_02633.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02633.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02633.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02633.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02633.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02633 = [];
const vote_lepen_02633 = [];
const vote_rejet_02633 = [];
const vote_macronpop_02633 = [];
const vote_lepenpop_02633 = [];
const vote_rejetpop_02633 = [];
const name_Commune_02633 = [];
const Pourcentage_02633 = [];
const Pourcentage_rejet_02633 = [];
const vote_gene_macron_02633 = [];
const vote_gene_lepen_02633 = [];
const vote_gene_rejet_02633 = [];

async function chartIt02633(){
    await GraphDATA02633();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02633-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02633
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02633
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02633-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02633,vote_lepen_02633,vote_rejet_02633]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02633-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02633,vote_lepenpop_02633,vote_rejetpop_02633]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02633"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02633
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02633
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02633
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02634*/
/*------------------------------------------------------------------ */
async function GraphDATA02634() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[633];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02634.push(vote_macron); 
    vote_lepen_02634.push(vote_lepen);
    vote_rejet_02634.push(vote_rejet);
    vote_macronpop_02634.push(vote_macronMediane);
    vote_lepenpop_02634.push(vote_lepenMediane);
    vote_rejetpop_02634.push(vote_rejetMediane);
    name_Commune_02634.push(nameCommune);
    Pourcentage_02634.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02634.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02634.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02634.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02634.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02634 = [];
const vote_lepen_02634 = [];
const vote_rejet_02634 = [];
const vote_macronpop_02634 = [];
const vote_lepenpop_02634 = [];
const vote_rejetpop_02634 = [];
const name_Commune_02634 = [];
const Pourcentage_02634 = [];
const Pourcentage_rejet_02634 = [];
const vote_gene_macron_02634 = [];
const vote_gene_lepen_02634 = [];
const vote_gene_rejet_02634 = [];

async function chartIt02634(){
    await GraphDATA02634();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02634-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02634
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02634
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02634-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02634,vote_lepen_02634,vote_rejet_02634]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02634-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02634,vote_lepenpop_02634,vote_rejetpop_02634]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02634"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02634
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02634
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02634
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02635*/
/*------------------------------------------------------------------ */
async function GraphDATA02635() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[634];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02635.push(vote_macron); 
    vote_lepen_02635.push(vote_lepen);
    vote_rejet_02635.push(vote_rejet);
    vote_macronpop_02635.push(vote_macronMediane);
    vote_lepenpop_02635.push(vote_lepenMediane);
    vote_rejetpop_02635.push(vote_rejetMediane);
    name_Commune_02635.push(nameCommune);
    Pourcentage_02635.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02635.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02635.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02635.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02635.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02635 = [];
const vote_lepen_02635 = [];
const vote_rejet_02635 = [];
const vote_macronpop_02635 = [];
const vote_lepenpop_02635 = [];
const vote_rejetpop_02635 = [];
const name_Commune_02635 = [];
const Pourcentage_02635 = [];
const Pourcentage_rejet_02635 = [];
const vote_gene_macron_02635 = [];
const vote_gene_lepen_02635 = [];
const vote_gene_rejet_02635 = [];

async function chartIt02635(){
    await GraphDATA02635();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02635-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02635
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02635
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02635-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02635,vote_lepen_02635,vote_rejet_02635]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02635-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02635,vote_lepenpop_02635,vote_rejetpop_02635]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02635"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02635
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02635
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02635
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02636*/
/*------------------------------------------------------------------ */
async function GraphDATA02636() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[635];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02636.push(vote_macron); 
    vote_lepen_02636.push(vote_lepen);
    vote_rejet_02636.push(vote_rejet);
    vote_macronpop_02636.push(vote_macronMediane);
    vote_lepenpop_02636.push(vote_lepenMediane);
    vote_rejetpop_02636.push(vote_rejetMediane);
    name_Commune_02636.push(nameCommune);
    Pourcentage_02636.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02636.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02636.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02636.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02636.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02636 = [];
const vote_lepen_02636 = [];
const vote_rejet_02636 = [];
const vote_macronpop_02636 = [];
const vote_lepenpop_02636 = [];
const vote_rejetpop_02636 = [];
const name_Commune_02636 = [];
const Pourcentage_02636 = [];
const Pourcentage_rejet_02636 = [];
const vote_gene_macron_02636 = [];
const vote_gene_lepen_02636 = [];
const vote_gene_rejet_02636 = [];

async function chartIt02636(){
    await GraphDATA02636();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02636-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02636
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02636
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02636-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02636,vote_lepen_02636,vote_rejet_02636]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02636-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02636,vote_lepenpop_02636,vote_rejetpop_02636]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02636"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02636
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02636
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02636
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02637*/
/*------------------------------------------------------------------ */
async function GraphDATA02637() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[636];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02637.push(vote_macron); 
    vote_lepen_02637.push(vote_lepen);
    vote_rejet_02637.push(vote_rejet);
    vote_macronpop_02637.push(vote_macronMediane);
    vote_lepenpop_02637.push(vote_lepenMediane);
    vote_rejetpop_02637.push(vote_rejetMediane);
    name_Commune_02637.push(nameCommune);
    Pourcentage_02637.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02637.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02637.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02637.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02637.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02637 = [];
const vote_lepen_02637 = [];
const vote_rejet_02637 = [];
const vote_macronpop_02637 = [];
const vote_lepenpop_02637 = [];
const vote_rejetpop_02637 = [];
const name_Commune_02637 = [];
const Pourcentage_02637 = [];
const Pourcentage_rejet_02637 = [];
const vote_gene_macron_02637 = [];
const vote_gene_lepen_02637 = [];
const vote_gene_rejet_02637 = [];

async function chartIt02637(){
    await GraphDATA02637();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02637-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02637
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02637
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02637-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02637,vote_lepen_02637,vote_rejet_02637]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02637-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02637,vote_lepenpop_02637,vote_rejetpop_02637]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02637"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02637
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02637
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02637
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02638*/
/*------------------------------------------------------------------ */
async function GraphDATA02638() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[637];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02638.push(vote_macron); 
    vote_lepen_02638.push(vote_lepen);
    vote_rejet_02638.push(vote_rejet);
    vote_macronpop_02638.push(vote_macronMediane);
    vote_lepenpop_02638.push(vote_lepenMediane);
    vote_rejetpop_02638.push(vote_rejetMediane);
    name_Commune_02638.push(nameCommune);
    Pourcentage_02638.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02638.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02638.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02638.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02638.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02638 = [];
const vote_lepen_02638 = [];
const vote_rejet_02638 = [];
const vote_macronpop_02638 = [];
const vote_lepenpop_02638 = [];
const vote_rejetpop_02638 = [];
const name_Commune_02638 = [];
const Pourcentage_02638 = [];
const Pourcentage_rejet_02638 = [];
const vote_gene_macron_02638 = [];
const vote_gene_lepen_02638 = [];
const vote_gene_rejet_02638 = [];

async function chartIt02638(){
    await GraphDATA02638();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02638-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02638
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02638
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02638-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02638,vote_lepen_02638,vote_rejet_02638]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02638-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02638,vote_lepenpop_02638,vote_rejetpop_02638]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02638"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02638
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02638
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02638
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02639*/
/*------------------------------------------------------------------ */
async function GraphDATA02639() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[638];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02639.push(vote_macron); 
    vote_lepen_02639.push(vote_lepen);
    vote_rejet_02639.push(vote_rejet);
    vote_macronpop_02639.push(vote_macronMediane);
    vote_lepenpop_02639.push(vote_lepenMediane);
    vote_rejetpop_02639.push(vote_rejetMediane);
    name_Commune_02639.push(nameCommune);
    Pourcentage_02639.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02639.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02639.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02639.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02639.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02639 = [];
const vote_lepen_02639 = [];
const vote_rejet_02639 = [];
const vote_macronpop_02639 = [];
const vote_lepenpop_02639 = [];
const vote_rejetpop_02639 = [];
const name_Commune_02639 = [];
const Pourcentage_02639 = [];
const Pourcentage_rejet_02639 = [];
const vote_gene_macron_02639 = [];
const vote_gene_lepen_02639 = [];
const vote_gene_rejet_02639 = [];

async function chartIt02639(){
    await GraphDATA02639();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02639-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02639
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02639
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02639-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02639,vote_lepen_02639,vote_rejet_02639]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02639-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02639,vote_lepenpop_02639,vote_rejetpop_02639]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02639"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02639
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02639
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02639
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02640*/
/*------------------------------------------------------------------ */
async function GraphDATA02640() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[639];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02640.push(vote_macron); 
    vote_lepen_02640.push(vote_lepen);
    vote_rejet_02640.push(vote_rejet);
    vote_macronpop_02640.push(vote_macronMediane);
    vote_lepenpop_02640.push(vote_lepenMediane);
    vote_rejetpop_02640.push(vote_rejetMediane);
    name_Commune_02640.push(nameCommune);
    Pourcentage_02640.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02640.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02640.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02640.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02640.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02640 = [];
const vote_lepen_02640 = [];
const vote_rejet_02640 = [];
const vote_macronpop_02640 = [];
const vote_lepenpop_02640 = [];
const vote_rejetpop_02640 = [];
const name_Commune_02640 = [];
const Pourcentage_02640 = [];
const Pourcentage_rejet_02640 = [];
const vote_gene_macron_02640 = [];
const vote_gene_lepen_02640 = [];
const vote_gene_rejet_02640 = [];

async function chartIt02640(){
    await GraphDATA02640();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02640-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02640
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02640
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02640-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02640,vote_lepen_02640,vote_rejet_02640]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02640-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02640,vote_lepenpop_02640,vote_rejetpop_02640]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02640"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02640
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02640
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02640
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02641*/
/*------------------------------------------------------------------ */
async function GraphDATA02641() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[640];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02641.push(vote_macron); 
    vote_lepen_02641.push(vote_lepen);
    vote_rejet_02641.push(vote_rejet);
    vote_macronpop_02641.push(vote_macronMediane);
    vote_lepenpop_02641.push(vote_lepenMediane);
    vote_rejetpop_02641.push(vote_rejetMediane);
    name_Commune_02641.push(nameCommune);
    Pourcentage_02641.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02641.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02641.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02641.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02641.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02641 = [];
const vote_lepen_02641 = [];
const vote_rejet_02641 = [];
const vote_macronpop_02641 = [];
const vote_lepenpop_02641 = [];
const vote_rejetpop_02641 = [];
const name_Commune_02641 = [];
const Pourcentage_02641 = [];
const Pourcentage_rejet_02641 = [];
const vote_gene_macron_02641 = [];
const vote_gene_lepen_02641 = [];
const vote_gene_rejet_02641 = [];

async function chartIt02641(){
    await GraphDATA02641();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02641-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02641
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02641
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02641-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02641,vote_lepen_02641,vote_rejet_02641]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02641-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02641,vote_lepenpop_02641,vote_rejetpop_02641]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02641"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02641
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02641
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02641
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02642*/
/*------------------------------------------------------------------ */
async function GraphDATA02642() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[641];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02642.push(vote_macron); 
    vote_lepen_02642.push(vote_lepen);
    vote_rejet_02642.push(vote_rejet);
    vote_macronpop_02642.push(vote_macronMediane);
    vote_lepenpop_02642.push(vote_lepenMediane);
    vote_rejetpop_02642.push(vote_rejetMediane);
    name_Commune_02642.push(nameCommune);
    Pourcentage_02642.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02642.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02642.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02642.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02642.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02642 = [];
const vote_lepen_02642 = [];
const vote_rejet_02642 = [];
const vote_macronpop_02642 = [];
const vote_lepenpop_02642 = [];
const vote_rejetpop_02642 = [];
const name_Commune_02642 = [];
const Pourcentage_02642 = [];
const Pourcentage_rejet_02642 = [];
const vote_gene_macron_02642 = [];
const vote_gene_lepen_02642 = [];
const vote_gene_rejet_02642 = [];

async function chartIt02642(){
    await GraphDATA02642();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02642-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02642
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02642
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02642-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02642,vote_lepen_02642,vote_rejet_02642]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02642-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02642,vote_lepenpop_02642,vote_rejetpop_02642]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02642"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02642
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02642
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02642
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02643*/
/*------------------------------------------------------------------ */
async function GraphDATA02643() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[642];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02643.push(vote_macron); 
    vote_lepen_02643.push(vote_lepen);
    vote_rejet_02643.push(vote_rejet);
    vote_macronpop_02643.push(vote_macronMediane);
    vote_lepenpop_02643.push(vote_lepenMediane);
    vote_rejetpop_02643.push(vote_rejetMediane);
    name_Commune_02643.push(nameCommune);
    Pourcentage_02643.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02643.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02643.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02643.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02643.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02643 = [];
const vote_lepen_02643 = [];
const vote_rejet_02643 = [];
const vote_macronpop_02643 = [];
const vote_lepenpop_02643 = [];
const vote_rejetpop_02643 = [];
const name_Commune_02643 = [];
const Pourcentage_02643 = [];
const Pourcentage_rejet_02643 = [];
const vote_gene_macron_02643 = [];
const vote_gene_lepen_02643 = [];
const vote_gene_rejet_02643 = [];

async function chartIt02643(){
    await GraphDATA02643();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02643-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02643
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02643
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02643-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02643,vote_lepen_02643,vote_rejet_02643]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02643-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02643,vote_lepenpop_02643,vote_rejetpop_02643]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02643"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02643
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02643
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02643
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02644*/
/*------------------------------------------------------------------ */
async function GraphDATA02644() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[643];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02644.push(vote_macron); 
    vote_lepen_02644.push(vote_lepen);
    vote_rejet_02644.push(vote_rejet);
    vote_macronpop_02644.push(vote_macronMediane);
    vote_lepenpop_02644.push(vote_lepenMediane);
    vote_rejetpop_02644.push(vote_rejetMediane);
    name_Commune_02644.push(nameCommune);
    Pourcentage_02644.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02644.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02644.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02644.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02644.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02644 = [];
const vote_lepen_02644 = [];
const vote_rejet_02644 = [];
const vote_macronpop_02644 = [];
const vote_lepenpop_02644 = [];
const vote_rejetpop_02644 = [];
const name_Commune_02644 = [];
const Pourcentage_02644 = [];
const Pourcentage_rejet_02644 = [];
const vote_gene_macron_02644 = [];
const vote_gene_lepen_02644 = [];
const vote_gene_rejet_02644 = [];

async function chartIt02644(){
    await GraphDATA02644();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02644-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02644
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02644
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02644-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02644,vote_lepen_02644,vote_rejet_02644]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02644-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02644,vote_lepenpop_02644,vote_rejetpop_02644]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02644"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02644
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02644
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02644
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02645*/
/*------------------------------------------------------------------ */
async function GraphDATA02645() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[644];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02645.push(vote_macron); 
    vote_lepen_02645.push(vote_lepen);
    vote_rejet_02645.push(vote_rejet);
    vote_macronpop_02645.push(vote_macronMediane);
    vote_lepenpop_02645.push(vote_lepenMediane);
    vote_rejetpop_02645.push(vote_rejetMediane);
    name_Commune_02645.push(nameCommune);
    Pourcentage_02645.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02645.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02645.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02645.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02645.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02645 = [];
const vote_lepen_02645 = [];
const vote_rejet_02645 = [];
const vote_macronpop_02645 = [];
const vote_lepenpop_02645 = [];
const vote_rejetpop_02645 = [];
const name_Commune_02645 = [];
const Pourcentage_02645 = [];
const Pourcentage_rejet_02645 = [];
const vote_gene_macron_02645 = [];
const vote_gene_lepen_02645 = [];
const vote_gene_rejet_02645 = [];

async function chartIt02645(){
    await GraphDATA02645();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02645-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02645
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02645
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02645-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02645,vote_lepen_02645,vote_rejet_02645]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02645-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02645,vote_lepenpop_02645,vote_rejetpop_02645]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02645"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02645
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02645
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02645
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02646*/
/*------------------------------------------------------------------ */
async function GraphDATA02646() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[645];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02646.push(vote_macron); 
    vote_lepen_02646.push(vote_lepen);
    vote_rejet_02646.push(vote_rejet);
    vote_macronpop_02646.push(vote_macronMediane);
    vote_lepenpop_02646.push(vote_lepenMediane);
    vote_rejetpop_02646.push(vote_rejetMediane);
    name_Commune_02646.push(nameCommune);
    Pourcentage_02646.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02646.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02646.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02646.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02646.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02646 = [];
const vote_lepen_02646 = [];
const vote_rejet_02646 = [];
const vote_macronpop_02646 = [];
const vote_lepenpop_02646 = [];
const vote_rejetpop_02646 = [];
const name_Commune_02646 = [];
const Pourcentage_02646 = [];
const Pourcentage_rejet_02646 = [];
const vote_gene_macron_02646 = [];
const vote_gene_lepen_02646 = [];
const vote_gene_rejet_02646 = [];

async function chartIt02646(){
    await GraphDATA02646();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02646-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02646
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02646
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02646-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02646,vote_lepen_02646,vote_rejet_02646]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02646-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02646,vote_lepenpop_02646,vote_rejetpop_02646]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02646"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02646
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02646
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02646
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02647*/
/*------------------------------------------------------------------ */
async function GraphDATA02647() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[646];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02647.push(vote_macron); 
    vote_lepen_02647.push(vote_lepen);
    vote_rejet_02647.push(vote_rejet);
    vote_macronpop_02647.push(vote_macronMediane);
    vote_lepenpop_02647.push(vote_lepenMediane);
    vote_rejetpop_02647.push(vote_rejetMediane);
    name_Commune_02647.push(nameCommune);
    Pourcentage_02647.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02647.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02647.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02647.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02647.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02647 = [];
const vote_lepen_02647 = [];
const vote_rejet_02647 = [];
const vote_macronpop_02647 = [];
const vote_lepenpop_02647 = [];
const vote_rejetpop_02647 = [];
const name_Commune_02647 = [];
const Pourcentage_02647 = [];
const Pourcentage_rejet_02647 = [];
const vote_gene_macron_02647 = [];
const vote_gene_lepen_02647 = [];
const vote_gene_rejet_02647 = [];

async function chartIt02647(){
    await GraphDATA02647();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02647-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02647
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02647
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02647-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02647,vote_lepen_02647,vote_rejet_02647]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02647-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02647,vote_lepenpop_02647,vote_rejetpop_02647]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02647"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02647
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02647
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02647
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02648*/
/*------------------------------------------------------------------ */
async function GraphDATA02648() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[647];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02648.push(vote_macron); 
    vote_lepen_02648.push(vote_lepen);
    vote_rejet_02648.push(vote_rejet);
    vote_macronpop_02648.push(vote_macronMediane);
    vote_lepenpop_02648.push(vote_lepenMediane);
    vote_rejetpop_02648.push(vote_rejetMediane);
    name_Commune_02648.push(nameCommune);
    Pourcentage_02648.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02648.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02648.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02648.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02648.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02648 = [];
const vote_lepen_02648 = [];
const vote_rejet_02648 = [];
const vote_macronpop_02648 = [];
const vote_lepenpop_02648 = [];
const vote_rejetpop_02648 = [];
const name_Commune_02648 = [];
const Pourcentage_02648 = [];
const Pourcentage_rejet_02648 = [];
const vote_gene_macron_02648 = [];
const vote_gene_lepen_02648 = [];
const vote_gene_rejet_02648 = [];

async function chartIt02648(){
    await GraphDATA02648();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02648-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02648
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02648
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02648-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02648,vote_lepen_02648,vote_rejet_02648]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02648-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02648,vote_lepenpop_02648,vote_rejetpop_02648]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02648"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02648
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02648
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02648
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02649*/
/*------------------------------------------------------------------ */
async function GraphDATA02649() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[648];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02649.push(vote_macron); 
    vote_lepen_02649.push(vote_lepen);
    vote_rejet_02649.push(vote_rejet);
    vote_macronpop_02649.push(vote_macronMediane);
    vote_lepenpop_02649.push(vote_lepenMediane);
    vote_rejetpop_02649.push(vote_rejetMediane);
    name_Commune_02649.push(nameCommune);
    Pourcentage_02649.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02649.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02649.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02649.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02649.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02649 = [];
const vote_lepen_02649 = [];
const vote_rejet_02649 = [];
const vote_macronpop_02649 = [];
const vote_lepenpop_02649 = [];
const vote_rejetpop_02649 = [];
const name_Commune_02649 = [];
const Pourcentage_02649 = [];
const Pourcentage_rejet_02649 = [];
const vote_gene_macron_02649 = [];
const vote_gene_lepen_02649 = [];
const vote_gene_rejet_02649 = [];

async function chartIt02649(){
    await GraphDATA02649();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02649-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02649
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02649
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02649-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02649,vote_lepen_02649,vote_rejet_02649]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02649-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02649,vote_lepenpop_02649,vote_rejetpop_02649]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02649"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02649
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02649
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02649
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02650*/
/*------------------------------------------------------------------ */
async function GraphDATA02650() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[649];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02650.push(vote_macron); 
    vote_lepen_02650.push(vote_lepen);
    vote_rejet_02650.push(vote_rejet);
    vote_macronpop_02650.push(vote_macronMediane);
    vote_lepenpop_02650.push(vote_lepenMediane);
    vote_rejetpop_02650.push(vote_rejetMediane);
    name_Commune_02650.push(nameCommune);
    Pourcentage_02650.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02650.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02650.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02650.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02650.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02650 = [];
const vote_lepen_02650 = [];
const vote_rejet_02650 = [];
const vote_macronpop_02650 = [];
const vote_lepenpop_02650 = [];
const vote_rejetpop_02650 = [];
const name_Commune_02650 = [];
const Pourcentage_02650 = [];
const Pourcentage_rejet_02650 = [];
const vote_gene_macron_02650 = [];
const vote_gene_lepen_02650 = [];
const vote_gene_rejet_02650 = [];

async function chartIt02650(){
    await GraphDATA02650();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02650-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02650
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02650
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02650-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02650,vote_lepen_02650,vote_rejet_02650]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02650-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02650,vote_lepenpop_02650,vote_rejetpop_02650]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02650"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02650
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02650
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02650
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02651*/
/*------------------------------------------------------------------ */
async function GraphDATA02651() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[650];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02651.push(vote_macron); 
    vote_lepen_02651.push(vote_lepen);
    vote_rejet_02651.push(vote_rejet);
    vote_macronpop_02651.push(vote_macronMediane);
    vote_lepenpop_02651.push(vote_lepenMediane);
    vote_rejetpop_02651.push(vote_rejetMediane);
    name_Commune_02651.push(nameCommune);
    Pourcentage_02651.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02651.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02651.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02651.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02651.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02651 = [];
const vote_lepen_02651 = [];
const vote_rejet_02651 = [];
const vote_macronpop_02651 = [];
const vote_lepenpop_02651 = [];
const vote_rejetpop_02651 = [];
const name_Commune_02651 = [];
const Pourcentage_02651 = [];
const Pourcentage_rejet_02651 = [];
const vote_gene_macron_02651 = [];
const vote_gene_lepen_02651 = [];
const vote_gene_rejet_02651 = [];

async function chartIt02651(){
    await GraphDATA02651();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02651-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02651
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02651
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02651-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02651,vote_lepen_02651,vote_rejet_02651]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02651-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02651,vote_lepenpop_02651,vote_rejetpop_02651]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02651"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02651
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02651
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02651
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02652*/
/*------------------------------------------------------------------ */
async function GraphDATA02652() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[651];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02652.push(vote_macron); 
    vote_lepen_02652.push(vote_lepen);
    vote_rejet_02652.push(vote_rejet);
    vote_macronpop_02652.push(vote_macronMediane);
    vote_lepenpop_02652.push(vote_lepenMediane);
    vote_rejetpop_02652.push(vote_rejetMediane);
    name_Commune_02652.push(nameCommune);
    Pourcentage_02652.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02652.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02652.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02652.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02652.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02652 = [];
const vote_lepen_02652 = [];
const vote_rejet_02652 = [];
const vote_macronpop_02652 = [];
const vote_lepenpop_02652 = [];
const vote_rejetpop_02652 = [];
const name_Commune_02652 = [];
const Pourcentage_02652 = [];
const Pourcentage_rejet_02652 = [];
const vote_gene_macron_02652 = [];
const vote_gene_lepen_02652 = [];
const vote_gene_rejet_02652 = [];

async function chartIt02652(){
    await GraphDATA02652();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02652-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02652
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02652
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02652-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02652,vote_lepen_02652,vote_rejet_02652]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02652-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02652,vote_lepenpop_02652,vote_rejetpop_02652]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02652"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02652
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02652
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02652
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02653*/
/*------------------------------------------------------------------ */
async function GraphDATA02653() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[652];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02653.push(vote_macron); 
    vote_lepen_02653.push(vote_lepen);
    vote_rejet_02653.push(vote_rejet);
    vote_macronpop_02653.push(vote_macronMediane);
    vote_lepenpop_02653.push(vote_lepenMediane);
    vote_rejetpop_02653.push(vote_rejetMediane);
    name_Commune_02653.push(nameCommune);
    Pourcentage_02653.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02653.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02653.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02653.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02653.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02653 = [];
const vote_lepen_02653 = [];
const vote_rejet_02653 = [];
const vote_macronpop_02653 = [];
const vote_lepenpop_02653 = [];
const vote_rejetpop_02653 = [];
const name_Commune_02653 = [];
const Pourcentage_02653 = [];
const Pourcentage_rejet_02653 = [];
const vote_gene_macron_02653 = [];
const vote_gene_lepen_02653 = [];
const vote_gene_rejet_02653 = [];

async function chartIt02653(){
    await GraphDATA02653();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02653-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02653
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02653
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02653-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02653,vote_lepen_02653,vote_rejet_02653]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02653-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02653,vote_lepenpop_02653,vote_rejetpop_02653]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02653"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02653
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02653
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02653
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02654*/
/*------------------------------------------------------------------ */
async function GraphDATA02654() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[653];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02654.push(vote_macron); 
    vote_lepen_02654.push(vote_lepen);
    vote_rejet_02654.push(vote_rejet);
    vote_macronpop_02654.push(vote_macronMediane);
    vote_lepenpop_02654.push(vote_lepenMediane);
    vote_rejetpop_02654.push(vote_rejetMediane);
    name_Commune_02654.push(nameCommune);
    Pourcentage_02654.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02654.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02654.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02654.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02654.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02654 = [];
const vote_lepen_02654 = [];
const vote_rejet_02654 = [];
const vote_macronpop_02654 = [];
const vote_lepenpop_02654 = [];
const vote_rejetpop_02654 = [];
const name_Commune_02654 = [];
const Pourcentage_02654 = [];
const Pourcentage_rejet_02654 = [];
const vote_gene_macron_02654 = [];
const vote_gene_lepen_02654 = [];
const vote_gene_rejet_02654 = [];

async function chartIt02654(){
    await GraphDATA02654();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02654-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02654
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02654
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02654-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02654,vote_lepen_02654,vote_rejet_02654]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02654-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02654,vote_lepenpop_02654,vote_rejetpop_02654]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02654"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02654
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02654
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02654
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02655*/
/*------------------------------------------------------------------ */
async function GraphDATA02655() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[654];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02655.push(vote_macron); 
    vote_lepen_02655.push(vote_lepen);
    vote_rejet_02655.push(vote_rejet);
    vote_macronpop_02655.push(vote_macronMediane);
    vote_lepenpop_02655.push(vote_lepenMediane);
    vote_rejetpop_02655.push(vote_rejetMediane);
    name_Commune_02655.push(nameCommune);
    Pourcentage_02655.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02655.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02655.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02655.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02655.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02655 = [];
const vote_lepen_02655 = [];
const vote_rejet_02655 = [];
const vote_macronpop_02655 = [];
const vote_lepenpop_02655 = [];
const vote_rejetpop_02655 = [];
const name_Commune_02655 = [];
const Pourcentage_02655 = [];
const Pourcentage_rejet_02655 = [];
const vote_gene_macron_02655 = [];
const vote_gene_lepen_02655 = [];
const vote_gene_rejet_02655 = [];

async function chartIt02655(){
    await GraphDATA02655();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02655-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02655
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02655
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02655-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02655,vote_lepen_02655,vote_rejet_02655]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02655-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02655,vote_lepenpop_02655,vote_rejetpop_02655]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02655"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02655
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02655
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02655
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02656*/
/*------------------------------------------------------------------ */
async function GraphDATA02656() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[655];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02656.push(vote_macron); 
    vote_lepen_02656.push(vote_lepen);
    vote_rejet_02656.push(vote_rejet);
    vote_macronpop_02656.push(vote_macronMediane);
    vote_lepenpop_02656.push(vote_lepenMediane);
    vote_rejetpop_02656.push(vote_rejetMediane);
    name_Commune_02656.push(nameCommune);
    Pourcentage_02656.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02656.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02656.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02656.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02656.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02656 = [];
const vote_lepen_02656 = [];
const vote_rejet_02656 = [];
const vote_macronpop_02656 = [];
const vote_lepenpop_02656 = [];
const vote_rejetpop_02656 = [];
const name_Commune_02656 = [];
const Pourcentage_02656 = [];
const Pourcentage_rejet_02656 = [];
const vote_gene_macron_02656 = [];
const vote_gene_lepen_02656 = [];
const vote_gene_rejet_02656 = [];

async function chartIt02656(){
    await GraphDATA02656();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02656-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02656
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02656
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02656-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02656,vote_lepen_02656,vote_rejet_02656]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02656-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02656,vote_lepenpop_02656,vote_rejetpop_02656]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02656"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02656
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02656
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02656
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02657*/
/*------------------------------------------------------------------ */
async function GraphDATA02657() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[656];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02657.push(vote_macron); 
    vote_lepen_02657.push(vote_lepen);
    vote_rejet_02657.push(vote_rejet);
    vote_macronpop_02657.push(vote_macronMediane);
    vote_lepenpop_02657.push(vote_lepenMediane);
    vote_rejetpop_02657.push(vote_rejetMediane);
    name_Commune_02657.push(nameCommune);
    Pourcentage_02657.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02657.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02657.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02657.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02657.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02657 = [];
const vote_lepen_02657 = [];
const vote_rejet_02657 = [];
const vote_macronpop_02657 = [];
const vote_lepenpop_02657 = [];
const vote_rejetpop_02657 = [];
const name_Commune_02657 = [];
const Pourcentage_02657 = [];
const Pourcentage_rejet_02657 = [];
const vote_gene_macron_02657 = [];
const vote_gene_lepen_02657 = [];
const vote_gene_rejet_02657 = [];

async function chartIt02657(){
    await GraphDATA02657();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02657-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02657
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02657
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02657-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02657,vote_lepen_02657,vote_rejet_02657]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02657-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02657,vote_lepenpop_02657,vote_rejetpop_02657]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02657"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02657
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02657
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02657
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02658*/
/*------------------------------------------------------------------ */
async function GraphDATA02658() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[657];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02658.push(vote_macron); 
    vote_lepen_02658.push(vote_lepen);
    vote_rejet_02658.push(vote_rejet);
    vote_macronpop_02658.push(vote_macronMediane);
    vote_lepenpop_02658.push(vote_lepenMediane);
    vote_rejetpop_02658.push(vote_rejetMediane);
    name_Commune_02658.push(nameCommune);
    Pourcentage_02658.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02658.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02658.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02658.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02658.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02658 = [];
const vote_lepen_02658 = [];
const vote_rejet_02658 = [];
const vote_macronpop_02658 = [];
const vote_lepenpop_02658 = [];
const vote_rejetpop_02658 = [];
const name_Commune_02658 = [];
const Pourcentage_02658 = [];
const Pourcentage_rejet_02658 = [];
const vote_gene_macron_02658 = [];
const vote_gene_lepen_02658 = [];
const vote_gene_rejet_02658 = [];

async function chartIt02658(){
    await GraphDATA02658();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02658-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02658
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02658
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02658-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02658,vote_lepen_02658,vote_rejet_02658]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02658-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02658,vote_lepenpop_02658,vote_rejetpop_02658]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02658"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02658
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02658
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02658
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02659*/
/*------------------------------------------------------------------ */
async function GraphDATA02659() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[658];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02659.push(vote_macron); 
    vote_lepen_02659.push(vote_lepen);
    vote_rejet_02659.push(vote_rejet);
    vote_macronpop_02659.push(vote_macronMediane);
    vote_lepenpop_02659.push(vote_lepenMediane);
    vote_rejetpop_02659.push(vote_rejetMediane);
    name_Commune_02659.push(nameCommune);
    Pourcentage_02659.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02659.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02659.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02659.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02659.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02659 = [];
const vote_lepen_02659 = [];
const vote_rejet_02659 = [];
const vote_macronpop_02659 = [];
const vote_lepenpop_02659 = [];
const vote_rejetpop_02659 = [];
const name_Commune_02659 = [];
const Pourcentage_02659 = [];
const Pourcentage_rejet_02659 = [];
const vote_gene_macron_02659 = [];
const vote_gene_lepen_02659 = [];
const vote_gene_rejet_02659 = [];

async function chartIt02659(){
    await GraphDATA02659();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02659-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02659
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02659
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02659-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02659,vote_lepen_02659,vote_rejet_02659]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02659-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02659,vote_lepenpop_02659,vote_rejetpop_02659]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02659"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02659
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02659
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02659
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02660*/
/*------------------------------------------------------------------ */
async function GraphDATA02660() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[659];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02660.push(vote_macron); 
    vote_lepen_02660.push(vote_lepen);
    vote_rejet_02660.push(vote_rejet);
    vote_macronpop_02660.push(vote_macronMediane);
    vote_lepenpop_02660.push(vote_lepenMediane);
    vote_rejetpop_02660.push(vote_rejetMediane);
    name_Commune_02660.push(nameCommune);
    Pourcentage_02660.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02660.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02660.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02660.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02660.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02660 = [];
const vote_lepen_02660 = [];
const vote_rejet_02660 = [];
const vote_macronpop_02660 = [];
const vote_lepenpop_02660 = [];
const vote_rejetpop_02660 = [];
const name_Commune_02660 = [];
const Pourcentage_02660 = [];
const Pourcentage_rejet_02660 = [];
const vote_gene_macron_02660 = [];
const vote_gene_lepen_02660 = [];
const vote_gene_rejet_02660 = [];

async function chartIt02660(){
    await GraphDATA02660();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02660-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02660
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02660
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02660-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02660,vote_lepen_02660,vote_rejet_02660]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02660-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02660,vote_lepenpop_02660,vote_rejetpop_02660]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02660"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02660
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02660
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02660
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02661*/
/*------------------------------------------------------------------ */
async function GraphDATA02661() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[660];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02661.push(vote_macron); 
    vote_lepen_02661.push(vote_lepen);
    vote_rejet_02661.push(vote_rejet);
    vote_macronpop_02661.push(vote_macronMediane);
    vote_lepenpop_02661.push(vote_lepenMediane);
    vote_rejetpop_02661.push(vote_rejetMediane);
    name_Commune_02661.push(nameCommune);
    Pourcentage_02661.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02661.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02661.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02661.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02661.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02661 = [];
const vote_lepen_02661 = [];
const vote_rejet_02661 = [];
const vote_macronpop_02661 = [];
const vote_lepenpop_02661 = [];
const vote_rejetpop_02661 = [];
const name_Commune_02661 = [];
const Pourcentage_02661 = [];
const Pourcentage_rejet_02661 = [];
const vote_gene_macron_02661 = [];
const vote_gene_lepen_02661 = [];
const vote_gene_rejet_02661 = [];

async function chartIt02661(){
    await GraphDATA02661();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02661-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02661
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02661
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02661-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02661,vote_lepen_02661,vote_rejet_02661]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02661-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02661,vote_lepenpop_02661,vote_rejetpop_02661]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02661"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02661
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02661
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02661
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02662*/
/*------------------------------------------------------------------ */
async function GraphDATA02662() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[661];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02662.push(vote_macron); 
    vote_lepen_02662.push(vote_lepen);
    vote_rejet_02662.push(vote_rejet);
    vote_macronpop_02662.push(vote_macronMediane);
    vote_lepenpop_02662.push(vote_lepenMediane);
    vote_rejetpop_02662.push(vote_rejetMediane);
    name_Commune_02662.push(nameCommune);
    Pourcentage_02662.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02662.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02662.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02662.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02662.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02662 = [];
const vote_lepen_02662 = [];
const vote_rejet_02662 = [];
const vote_macronpop_02662 = [];
const vote_lepenpop_02662 = [];
const vote_rejetpop_02662 = [];
const name_Commune_02662 = [];
const Pourcentage_02662 = [];
const Pourcentage_rejet_02662 = [];
const vote_gene_macron_02662 = [];
const vote_gene_lepen_02662 = [];
const vote_gene_rejet_02662 = [];

async function chartIt02662(){
    await GraphDATA02662();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02662-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02662
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02662
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02662-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02662,vote_lepen_02662,vote_rejet_02662]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02662-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02662,vote_lepenpop_02662,vote_rejetpop_02662]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02662"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02662
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02662
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02662
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02663*/
/*------------------------------------------------------------------ */
async function GraphDATA02663() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[662];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02663.push(vote_macron); 
    vote_lepen_02663.push(vote_lepen);
    vote_rejet_02663.push(vote_rejet);
    vote_macronpop_02663.push(vote_macronMediane);
    vote_lepenpop_02663.push(vote_lepenMediane);
    vote_rejetpop_02663.push(vote_rejetMediane);
    name_Commune_02663.push(nameCommune);
    Pourcentage_02663.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02663.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02663.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02663.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02663.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02663 = [];
const vote_lepen_02663 = [];
const vote_rejet_02663 = [];
const vote_macronpop_02663 = [];
const vote_lepenpop_02663 = [];
const vote_rejetpop_02663 = [];
const name_Commune_02663 = [];
const Pourcentage_02663 = [];
const Pourcentage_rejet_02663 = [];
const vote_gene_macron_02663 = [];
const vote_gene_lepen_02663 = [];
const vote_gene_rejet_02663 = [];

async function chartIt02663(){
    await GraphDATA02663();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02663-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02663
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02663
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02663-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02663,vote_lepen_02663,vote_rejet_02663]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02663-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02663,vote_lepenpop_02663,vote_rejetpop_02663]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02663"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02663
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02663
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02663
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02664*/
/*------------------------------------------------------------------ */
async function GraphDATA02664() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[663];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02664.push(vote_macron); 
    vote_lepen_02664.push(vote_lepen);
    vote_rejet_02664.push(vote_rejet);
    vote_macronpop_02664.push(vote_macronMediane);
    vote_lepenpop_02664.push(vote_lepenMediane);
    vote_rejetpop_02664.push(vote_rejetMediane);
    name_Commune_02664.push(nameCommune);
    Pourcentage_02664.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02664.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02664.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02664.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02664.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02664 = [];
const vote_lepen_02664 = [];
const vote_rejet_02664 = [];
const vote_macronpop_02664 = [];
const vote_lepenpop_02664 = [];
const vote_rejetpop_02664 = [];
const name_Commune_02664 = [];
const Pourcentage_02664 = [];
const Pourcentage_rejet_02664 = [];
const vote_gene_macron_02664 = [];
const vote_gene_lepen_02664 = [];
const vote_gene_rejet_02664 = [];

async function chartIt02664(){
    await GraphDATA02664();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02664-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02664
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02664
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02664-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02664,vote_lepen_02664,vote_rejet_02664]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02664-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02664,vote_lepenpop_02664,vote_rejetpop_02664]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02664"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02664
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02664
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02664
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02665*/
/*------------------------------------------------------------------ */
async function GraphDATA02665() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[664];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02665.push(vote_macron); 
    vote_lepen_02665.push(vote_lepen);
    vote_rejet_02665.push(vote_rejet);
    vote_macronpop_02665.push(vote_macronMediane);
    vote_lepenpop_02665.push(vote_lepenMediane);
    vote_rejetpop_02665.push(vote_rejetMediane);
    name_Commune_02665.push(nameCommune);
    Pourcentage_02665.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02665.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02665.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02665.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02665.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02665 = [];
const vote_lepen_02665 = [];
const vote_rejet_02665 = [];
const vote_macronpop_02665 = [];
const vote_lepenpop_02665 = [];
const vote_rejetpop_02665 = [];
const name_Commune_02665 = [];
const Pourcentage_02665 = [];
const Pourcentage_rejet_02665 = [];
const vote_gene_macron_02665 = [];
const vote_gene_lepen_02665 = [];
const vote_gene_rejet_02665 = [];

async function chartIt02665(){
    await GraphDATA02665();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02665-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02665
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02665
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02665-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02665,vote_lepen_02665,vote_rejet_02665]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02665-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02665,vote_lepenpop_02665,vote_rejetpop_02665]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02665"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02665
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02665
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02665
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02666*/
/*------------------------------------------------------------------ */
async function GraphDATA02666() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[665];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02666.push(vote_macron); 
    vote_lepen_02666.push(vote_lepen);
    vote_rejet_02666.push(vote_rejet);
    vote_macronpop_02666.push(vote_macronMediane);
    vote_lepenpop_02666.push(vote_lepenMediane);
    vote_rejetpop_02666.push(vote_rejetMediane);
    name_Commune_02666.push(nameCommune);
    Pourcentage_02666.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02666.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02666.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02666.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02666.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02666 = [];
const vote_lepen_02666 = [];
const vote_rejet_02666 = [];
const vote_macronpop_02666 = [];
const vote_lepenpop_02666 = [];
const vote_rejetpop_02666 = [];
const name_Commune_02666 = [];
const Pourcentage_02666 = [];
const Pourcentage_rejet_02666 = [];
const vote_gene_macron_02666 = [];
const vote_gene_lepen_02666 = [];
const vote_gene_rejet_02666 = [];

async function chartIt02666(){
    await GraphDATA02666();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02666-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02666
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02666
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02666-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02666,vote_lepen_02666,vote_rejet_02666]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02666-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02666,vote_lepenpop_02666,vote_rejetpop_02666]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02666"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02666
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02666
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02666
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02667*/
/*------------------------------------------------------------------ */
async function GraphDATA02667() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[666];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02667.push(vote_macron); 
    vote_lepen_02667.push(vote_lepen);
    vote_rejet_02667.push(vote_rejet);
    vote_macronpop_02667.push(vote_macronMediane);
    vote_lepenpop_02667.push(vote_lepenMediane);
    vote_rejetpop_02667.push(vote_rejetMediane);
    name_Commune_02667.push(nameCommune);
    Pourcentage_02667.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02667.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02667.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02667.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02667.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02667 = [];
const vote_lepen_02667 = [];
const vote_rejet_02667 = [];
const vote_macronpop_02667 = [];
const vote_lepenpop_02667 = [];
const vote_rejetpop_02667 = [];
const name_Commune_02667 = [];
const Pourcentage_02667 = [];
const Pourcentage_rejet_02667 = [];
const vote_gene_macron_02667 = [];
const vote_gene_lepen_02667 = [];
const vote_gene_rejet_02667 = [];

async function chartIt02667(){
    await GraphDATA02667();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02667-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02667
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02667
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02667-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02667,vote_lepen_02667,vote_rejet_02667]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02667-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02667,vote_lepenpop_02667,vote_rejetpop_02667]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02667"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02667
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02667
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02667
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02668*/
/*------------------------------------------------------------------ */
async function GraphDATA02668() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[667];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02668.push(vote_macron); 
    vote_lepen_02668.push(vote_lepen);
    vote_rejet_02668.push(vote_rejet);
    vote_macronpop_02668.push(vote_macronMediane);
    vote_lepenpop_02668.push(vote_lepenMediane);
    vote_rejetpop_02668.push(vote_rejetMediane);
    name_Commune_02668.push(nameCommune);
    Pourcentage_02668.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02668.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02668.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02668.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02668.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02668 = [];
const vote_lepen_02668 = [];
const vote_rejet_02668 = [];
const vote_macronpop_02668 = [];
const vote_lepenpop_02668 = [];
const vote_rejetpop_02668 = [];
const name_Commune_02668 = [];
const Pourcentage_02668 = [];
const Pourcentage_rejet_02668 = [];
const vote_gene_macron_02668 = [];
const vote_gene_lepen_02668 = [];
const vote_gene_rejet_02668 = [];

async function chartIt02668(){
    await GraphDATA02668();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02668-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02668
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02668
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02668-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02668,vote_lepen_02668,vote_rejet_02668]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02668-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02668,vote_lepenpop_02668,vote_rejetpop_02668]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02668"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02668
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02668
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02668
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02669*/
/*------------------------------------------------------------------ */
async function GraphDATA02669() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[668];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02669.push(vote_macron); 
    vote_lepen_02669.push(vote_lepen);
    vote_rejet_02669.push(vote_rejet);
    vote_macronpop_02669.push(vote_macronMediane);
    vote_lepenpop_02669.push(vote_lepenMediane);
    vote_rejetpop_02669.push(vote_rejetMediane);
    name_Commune_02669.push(nameCommune);
    Pourcentage_02669.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02669.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02669.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02669.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02669.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02669 = [];
const vote_lepen_02669 = [];
const vote_rejet_02669 = [];
const vote_macronpop_02669 = [];
const vote_lepenpop_02669 = [];
const vote_rejetpop_02669 = [];
const name_Commune_02669 = [];
const Pourcentage_02669 = [];
const Pourcentage_rejet_02669 = [];
const vote_gene_macron_02669 = [];
const vote_gene_lepen_02669 = [];
const vote_gene_rejet_02669 = [];

async function chartIt02669(){
    await GraphDATA02669();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02669-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02669
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02669
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02669-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02669,vote_lepen_02669,vote_rejet_02669]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02669-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02669,vote_lepenpop_02669,vote_rejetpop_02669]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02669"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02669
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02669
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02669
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02670*/
/*------------------------------------------------------------------ */
async function GraphDATA02670() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[669];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02670.push(vote_macron); 
    vote_lepen_02670.push(vote_lepen);
    vote_rejet_02670.push(vote_rejet);
    vote_macronpop_02670.push(vote_macronMediane);
    vote_lepenpop_02670.push(vote_lepenMediane);
    vote_rejetpop_02670.push(vote_rejetMediane);
    name_Commune_02670.push(nameCommune);
    Pourcentage_02670.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02670.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02670.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02670.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02670.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02670 = [];
const vote_lepen_02670 = [];
const vote_rejet_02670 = [];
const vote_macronpop_02670 = [];
const vote_lepenpop_02670 = [];
const vote_rejetpop_02670 = [];
const name_Commune_02670 = [];
const Pourcentage_02670 = [];
const Pourcentage_rejet_02670 = [];
const vote_gene_macron_02670 = [];
const vote_gene_lepen_02670 = [];
const vote_gene_rejet_02670 = [];

async function chartIt02670(){
    await GraphDATA02670();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02670-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02670
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02670
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02670-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02670,vote_lepen_02670,vote_rejet_02670]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02670-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02670,vote_lepenpop_02670,vote_rejetpop_02670]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02670"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02670
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02670
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02670
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02671*/
/*------------------------------------------------------------------ */
async function GraphDATA02671() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[670];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02671.push(vote_macron); 
    vote_lepen_02671.push(vote_lepen);
    vote_rejet_02671.push(vote_rejet);
    vote_macronpop_02671.push(vote_macronMediane);
    vote_lepenpop_02671.push(vote_lepenMediane);
    vote_rejetpop_02671.push(vote_rejetMediane);
    name_Commune_02671.push(nameCommune);
    Pourcentage_02671.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02671.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02671.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02671.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02671.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02671 = [];
const vote_lepen_02671 = [];
const vote_rejet_02671 = [];
const vote_macronpop_02671 = [];
const vote_lepenpop_02671 = [];
const vote_rejetpop_02671 = [];
const name_Commune_02671 = [];
const Pourcentage_02671 = [];
const Pourcentage_rejet_02671 = [];
const vote_gene_macron_02671 = [];
const vote_gene_lepen_02671 = [];
const vote_gene_rejet_02671 = [];

async function chartIt02671(){
    await GraphDATA02671();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02671-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02671
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02671
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02671-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02671,vote_lepen_02671,vote_rejet_02671]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02671-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02671,vote_lepenpop_02671,vote_rejetpop_02671]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02671"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02671
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02671
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02671
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02672*/
/*------------------------------------------------------------------ */
async function GraphDATA02672() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[671];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02672.push(vote_macron); 
    vote_lepen_02672.push(vote_lepen);
    vote_rejet_02672.push(vote_rejet);
    vote_macronpop_02672.push(vote_macronMediane);
    vote_lepenpop_02672.push(vote_lepenMediane);
    vote_rejetpop_02672.push(vote_rejetMediane);
    name_Commune_02672.push(nameCommune);
    Pourcentage_02672.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02672.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02672.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02672.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02672.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02672 = [];
const vote_lepen_02672 = [];
const vote_rejet_02672 = [];
const vote_macronpop_02672 = [];
const vote_lepenpop_02672 = [];
const vote_rejetpop_02672 = [];
const name_Commune_02672 = [];
const Pourcentage_02672 = [];
const Pourcentage_rejet_02672 = [];
const vote_gene_macron_02672 = [];
const vote_gene_lepen_02672 = [];
const vote_gene_rejet_02672 = [];

async function chartIt02672(){
    await GraphDATA02672();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02672-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02672
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02672
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02672-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02672,vote_lepen_02672,vote_rejet_02672]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02672-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02672,vote_lepenpop_02672,vote_rejetpop_02672]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02672"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02672
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02672
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02672
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02673*/
/*------------------------------------------------------------------ */
async function GraphDATA02673() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[672];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02673.push(vote_macron); 
    vote_lepen_02673.push(vote_lepen);
    vote_rejet_02673.push(vote_rejet);
    vote_macronpop_02673.push(vote_macronMediane);
    vote_lepenpop_02673.push(vote_lepenMediane);
    vote_rejetpop_02673.push(vote_rejetMediane);
    name_Commune_02673.push(nameCommune);
    Pourcentage_02673.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02673.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02673.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02673.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02673.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02673 = [];
const vote_lepen_02673 = [];
const vote_rejet_02673 = [];
const vote_macronpop_02673 = [];
const vote_lepenpop_02673 = [];
const vote_rejetpop_02673 = [];
const name_Commune_02673 = [];
const Pourcentage_02673 = [];
const Pourcentage_rejet_02673 = [];
const vote_gene_macron_02673 = [];
const vote_gene_lepen_02673 = [];
const vote_gene_rejet_02673 = [];

async function chartIt02673(){
    await GraphDATA02673();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02673-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02673
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02673
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02673-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02673,vote_lepen_02673,vote_rejet_02673]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02673-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02673,vote_lepenpop_02673,vote_rejetpop_02673]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02673"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02673
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02673
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02673
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02674*/
/*------------------------------------------------------------------ */
async function GraphDATA02674() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[673];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02674.push(vote_macron); 
    vote_lepen_02674.push(vote_lepen);
    vote_rejet_02674.push(vote_rejet);
    vote_macronpop_02674.push(vote_macronMediane);
    vote_lepenpop_02674.push(vote_lepenMediane);
    vote_rejetpop_02674.push(vote_rejetMediane);
    name_Commune_02674.push(nameCommune);
    Pourcentage_02674.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02674.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02674.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02674.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02674.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02674 = [];
const vote_lepen_02674 = [];
const vote_rejet_02674 = [];
const vote_macronpop_02674 = [];
const vote_lepenpop_02674 = [];
const vote_rejetpop_02674 = [];
const name_Commune_02674 = [];
const Pourcentage_02674 = [];
const Pourcentage_rejet_02674 = [];
const vote_gene_macron_02674 = [];
const vote_gene_lepen_02674 = [];
const vote_gene_rejet_02674 = [];

async function chartIt02674(){
    await GraphDATA02674();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02674-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02674
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02674
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02674-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02674,vote_lepen_02674,vote_rejet_02674]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02674-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02674,vote_lepenpop_02674,vote_rejetpop_02674]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02674"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02674
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02674
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02674
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02675*/
/*------------------------------------------------------------------ */
async function GraphDATA02675() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[674];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02675.push(vote_macron); 
    vote_lepen_02675.push(vote_lepen);
    vote_rejet_02675.push(vote_rejet);
    vote_macronpop_02675.push(vote_macronMediane);
    vote_lepenpop_02675.push(vote_lepenMediane);
    vote_rejetpop_02675.push(vote_rejetMediane);
    name_Commune_02675.push(nameCommune);
    Pourcentage_02675.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02675.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02675.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02675.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02675.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02675 = [];
const vote_lepen_02675 = [];
const vote_rejet_02675 = [];
const vote_macronpop_02675 = [];
const vote_lepenpop_02675 = [];
const vote_rejetpop_02675 = [];
const name_Commune_02675 = [];
const Pourcentage_02675 = [];
const Pourcentage_rejet_02675 = [];
const vote_gene_macron_02675 = [];
const vote_gene_lepen_02675 = [];
const vote_gene_rejet_02675 = [];

async function chartIt02675(){
    await GraphDATA02675();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02675-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02675
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02675
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02675-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02675,vote_lepen_02675,vote_rejet_02675]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02675-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02675,vote_lepenpop_02675,vote_rejetpop_02675]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02675"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02675
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02675
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02675
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02676*/
/*------------------------------------------------------------------ */
async function GraphDATA02676() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[675];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02676.push(vote_macron); 
    vote_lepen_02676.push(vote_lepen);
    vote_rejet_02676.push(vote_rejet);
    vote_macronpop_02676.push(vote_macronMediane);
    vote_lepenpop_02676.push(vote_lepenMediane);
    vote_rejetpop_02676.push(vote_rejetMediane);
    name_Commune_02676.push(nameCommune);
    Pourcentage_02676.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02676.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02676.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02676.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02676.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02676 = [];
const vote_lepen_02676 = [];
const vote_rejet_02676 = [];
const vote_macronpop_02676 = [];
const vote_lepenpop_02676 = [];
const vote_rejetpop_02676 = [];
const name_Commune_02676 = [];
const Pourcentage_02676 = [];
const Pourcentage_rejet_02676 = [];
const vote_gene_macron_02676 = [];
const vote_gene_lepen_02676 = [];
const vote_gene_rejet_02676 = [];

async function chartIt02676(){
    await GraphDATA02676();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02676-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02676
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02676
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02676-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02676,vote_lepen_02676,vote_rejet_02676]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02676-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02676,vote_lepenpop_02676,vote_rejetpop_02676]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02676"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02676
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02676
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02676
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02677*/
/*------------------------------------------------------------------ */
async function GraphDATA02677() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[676];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02677.push(vote_macron); 
    vote_lepen_02677.push(vote_lepen);
    vote_rejet_02677.push(vote_rejet);
    vote_macronpop_02677.push(vote_macronMediane);
    vote_lepenpop_02677.push(vote_lepenMediane);
    vote_rejetpop_02677.push(vote_rejetMediane);
    name_Commune_02677.push(nameCommune);
    Pourcentage_02677.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02677.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02677.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02677.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02677.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02677 = [];
const vote_lepen_02677 = [];
const vote_rejet_02677 = [];
const vote_macronpop_02677 = [];
const vote_lepenpop_02677 = [];
const vote_rejetpop_02677 = [];
const name_Commune_02677 = [];
const Pourcentage_02677 = [];
const Pourcentage_rejet_02677 = [];
const vote_gene_macron_02677 = [];
const vote_gene_lepen_02677 = [];
const vote_gene_rejet_02677 = [];

async function chartIt02677(){
    await GraphDATA02677();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02677-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02677
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02677
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02677-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02677,vote_lepen_02677,vote_rejet_02677]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02677-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02677,vote_lepenpop_02677,vote_rejetpop_02677]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02677"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02677
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02677
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02677
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02678*/
/*------------------------------------------------------------------ */
async function GraphDATA02678() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[677];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02678.push(vote_macron); 
    vote_lepen_02678.push(vote_lepen);
    vote_rejet_02678.push(vote_rejet);
    vote_macronpop_02678.push(vote_macronMediane);
    vote_lepenpop_02678.push(vote_lepenMediane);
    vote_rejetpop_02678.push(vote_rejetMediane);
    name_Commune_02678.push(nameCommune);
    Pourcentage_02678.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02678.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02678.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02678.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02678.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02678 = [];
const vote_lepen_02678 = [];
const vote_rejet_02678 = [];
const vote_macronpop_02678 = [];
const vote_lepenpop_02678 = [];
const vote_rejetpop_02678 = [];
const name_Commune_02678 = [];
const Pourcentage_02678 = [];
const Pourcentage_rejet_02678 = [];
const vote_gene_macron_02678 = [];
const vote_gene_lepen_02678 = [];
const vote_gene_rejet_02678 = [];

async function chartIt02678(){
    await GraphDATA02678();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02678-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02678
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02678
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02678-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02678,vote_lepen_02678,vote_rejet_02678]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02678-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02678,vote_lepenpop_02678,vote_rejetpop_02678]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02678"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02678
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02678
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02678
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02679*/
/*------------------------------------------------------------------ */
async function GraphDATA02679() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[678];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02679.push(vote_macron); 
    vote_lepen_02679.push(vote_lepen);
    vote_rejet_02679.push(vote_rejet);
    vote_macronpop_02679.push(vote_macronMediane);
    vote_lepenpop_02679.push(vote_lepenMediane);
    vote_rejetpop_02679.push(vote_rejetMediane);
    name_Commune_02679.push(nameCommune);
    Pourcentage_02679.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02679.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02679.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02679.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02679.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02679 = [];
const vote_lepen_02679 = [];
const vote_rejet_02679 = [];
const vote_macronpop_02679 = [];
const vote_lepenpop_02679 = [];
const vote_rejetpop_02679 = [];
const name_Commune_02679 = [];
const Pourcentage_02679 = [];
const Pourcentage_rejet_02679 = [];
const vote_gene_macron_02679 = [];
const vote_gene_lepen_02679 = [];
const vote_gene_rejet_02679 = [];

async function chartIt02679(){
    await GraphDATA02679();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02679-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02679
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02679
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02679-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02679,vote_lepen_02679,vote_rejet_02679]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02679-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02679,vote_lepenpop_02679,vote_rejetpop_02679]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02679"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02679
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02679
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02679
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02680*/
/*------------------------------------------------------------------ */
async function GraphDATA02680() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[679];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02680.push(vote_macron); 
    vote_lepen_02680.push(vote_lepen);
    vote_rejet_02680.push(vote_rejet);
    vote_macronpop_02680.push(vote_macronMediane);
    vote_lepenpop_02680.push(vote_lepenMediane);
    vote_rejetpop_02680.push(vote_rejetMediane);
    name_Commune_02680.push(nameCommune);
    Pourcentage_02680.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02680.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02680.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02680.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02680.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02680 = [];
const vote_lepen_02680 = [];
const vote_rejet_02680 = [];
const vote_macronpop_02680 = [];
const vote_lepenpop_02680 = [];
const vote_rejetpop_02680 = [];
const name_Commune_02680 = [];
const Pourcentage_02680 = [];
const Pourcentage_rejet_02680 = [];
const vote_gene_macron_02680 = [];
const vote_gene_lepen_02680 = [];
const vote_gene_rejet_02680 = [];

async function chartIt02680(){
    await GraphDATA02680();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02680-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02680
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02680
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02680-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02680,vote_lepen_02680,vote_rejet_02680]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02680-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02680,vote_lepenpop_02680,vote_rejetpop_02680]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02680"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02680
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02680
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02680
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02681*/
/*------------------------------------------------------------------ */
async function GraphDATA02681() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[680];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02681.push(vote_macron); 
    vote_lepen_02681.push(vote_lepen);
    vote_rejet_02681.push(vote_rejet);
    vote_macronpop_02681.push(vote_macronMediane);
    vote_lepenpop_02681.push(vote_lepenMediane);
    vote_rejetpop_02681.push(vote_rejetMediane);
    name_Commune_02681.push(nameCommune);
    Pourcentage_02681.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02681.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02681.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02681.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02681.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02681 = [];
const vote_lepen_02681 = [];
const vote_rejet_02681 = [];
const vote_macronpop_02681 = [];
const vote_lepenpop_02681 = [];
const vote_rejetpop_02681 = [];
const name_Commune_02681 = [];
const Pourcentage_02681 = [];
const Pourcentage_rejet_02681 = [];
const vote_gene_macron_02681 = [];
const vote_gene_lepen_02681 = [];
const vote_gene_rejet_02681 = [];

async function chartIt02681(){
    await GraphDATA02681();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02681-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02681
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02681
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02681-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02681,vote_lepen_02681,vote_rejet_02681]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02681-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02681,vote_lepenpop_02681,vote_rejetpop_02681]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02681"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02681
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02681
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02681
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02682*/
/*------------------------------------------------------------------ */
async function GraphDATA02682() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[681];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02682.push(vote_macron); 
    vote_lepen_02682.push(vote_lepen);
    vote_rejet_02682.push(vote_rejet);
    vote_macronpop_02682.push(vote_macronMediane);
    vote_lepenpop_02682.push(vote_lepenMediane);
    vote_rejetpop_02682.push(vote_rejetMediane);
    name_Commune_02682.push(nameCommune);
    Pourcentage_02682.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02682.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02682.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02682.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02682.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02682 = [];
const vote_lepen_02682 = [];
const vote_rejet_02682 = [];
const vote_macronpop_02682 = [];
const vote_lepenpop_02682 = [];
const vote_rejetpop_02682 = [];
const name_Commune_02682 = [];
const Pourcentage_02682 = [];
const Pourcentage_rejet_02682 = [];
const vote_gene_macron_02682 = [];
const vote_gene_lepen_02682 = [];
const vote_gene_rejet_02682 = [];

async function chartIt02682(){
    await GraphDATA02682();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02682-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02682
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02682
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02682-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02682,vote_lepen_02682,vote_rejet_02682]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02682-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02682,vote_lepenpop_02682,vote_rejetpop_02682]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02682"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02682
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02682
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02682
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02683*/
/*------------------------------------------------------------------ */
async function GraphDATA02683() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[682];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02683.push(vote_macron); 
    vote_lepen_02683.push(vote_lepen);
    vote_rejet_02683.push(vote_rejet);
    vote_macronpop_02683.push(vote_macronMediane);
    vote_lepenpop_02683.push(vote_lepenMediane);
    vote_rejetpop_02683.push(vote_rejetMediane);
    name_Commune_02683.push(nameCommune);
    Pourcentage_02683.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02683.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02683.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02683.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02683.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02683 = [];
const vote_lepen_02683 = [];
const vote_rejet_02683 = [];
const vote_macronpop_02683 = [];
const vote_lepenpop_02683 = [];
const vote_rejetpop_02683 = [];
const name_Commune_02683 = [];
const Pourcentage_02683 = [];
const Pourcentage_rejet_02683 = [];
const vote_gene_macron_02683 = [];
const vote_gene_lepen_02683 = [];
const vote_gene_rejet_02683 = [];

async function chartIt02683(){
    await GraphDATA02683();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02683-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02683
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02683
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02683-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02683,vote_lepen_02683,vote_rejet_02683]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02683-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02683,vote_lepenpop_02683,vote_rejetpop_02683]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02683"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02683
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02683
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02683
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02684*/
/*------------------------------------------------------------------ */
async function GraphDATA02684() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[683];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02684.push(vote_macron); 
    vote_lepen_02684.push(vote_lepen);
    vote_rejet_02684.push(vote_rejet);
    vote_macronpop_02684.push(vote_macronMediane);
    vote_lepenpop_02684.push(vote_lepenMediane);
    vote_rejetpop_02684.push(vote_rejetMediane);
    name_Commune_02684.push(nameCommune);
    Pourcentage_02684.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02684.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02684.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02684.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02684.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02684 = [];
const vote_lepen_02684 = [];
const vote_rejet_02684 = [];
const vote_macronpop_02684 = [];
const vote_lepenpop_02684 = [];
const vote_rejetpop_02684 = [];
const name_Commune_02684 = [];
const Pourcentage_02684 = [];
const Pourcentage_rejet_02684 = [];
const vote_gene_macron_02684 = [];
const vote_gene_lepen_02684 = [];
const vote_gene_rejet_02684 = [];

async function chartIt02684(){
    await GraphDATA02684();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02684-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02684
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02684
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02684-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02684,vote_lepen_02684,vote_rejet_02684]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02684-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02684,vote_lepenpop_02684,vote_rejetpop_02684]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02684"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02684
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02684
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02684
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02685*/
/*------------------------------------------------------------------ */
async function GraphDATA02685() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[684];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02685.push(vote_macron); 
    vote_lepen_02685.push(vote_lepen);
    vote_rejet_02685.push(vote_rejet);
    vote_macronpop_02685.push(vote_macronMediane);
    vote_lepenpop_02685.push(vote_lepenMediane);
    vote_rejetpop_02685.push(vote_rejetMediane);
    name_Commune_02685.push(nameCommune);
    Pourcentage_02685.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02685.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02685.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02685.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02685.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02685 = [];
const vote_lepen_02685 = [];
const vote_rejet_02685 = [];
const vote_macronpop_02685 = [];
const vote_lepenpop_02685 = [];
const vote_rejetpop_02685 = [];
const name_Commune_02685 = [];
const Pourcentage_02685 = [];
const Pourcentage_rejet_02685 = [];
const vote_gene_macron_02685 = [];
const vote_gene_lepen_02685 = [];
const vote_gene_rejet_02685 = [];

async function chartIt02685(){
    await GraphDATA02685();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02685-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02685
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02685
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02685-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02685,vote_lepen_02685,vote_rejet_02685]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02685-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02685,vote_lepenpop_02685,vote_rejetpop_02685]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02685"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02685
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02685
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02685
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02686*/
/*------------------------------------------------------------------ */
async function GraphDATA02686() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[685];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02686.push(vote_macron); 
    vote_lepen_02686.push(vote_lepen);
    vote_rejet_02686.push(vote_rejet);
    vote_macronpop_02686.push(vote_macronMediane);
    vote_lepenpop_02686.push(vote_lepenMediane);
    vote_rejetpop_02686.push(vote_rejetMediane);
    name_Commune_02686.push(nameCommune);
    Pourcentage_02686.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02686.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02686.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02686.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02686.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02686 = [];
const vote_lepen_02686 = [];
const vote_rejet_02686 = [];
const vote_macronpop_02686 = [];
const vote_lepenpop_02686 = [];
const vote_rejetpop_02686 = [];
const name_Commune_02686 = [];
const Pourcentage_02686 = [];
const Pourcentage_rejet_02686 = [];
const vote_gene_macron_02686 = [];
const vote_gene_lepen_02686 = [];
const vote_gene_rejet_02686 = [];

async function chartIt02686(){
    await GraphDATA02686();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02686-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02686
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02686
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02686-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02686,vote_lepen_02686,vote_rejet_02686]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02686-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02686,vote_lepenpop_02686,vote_rejetpop_02686]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02686"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02686
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02686
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02686
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02687*/
/*------------------------------------------------------------------ */
async function GraphDATA02687() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[686];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02687.push(vote_macron); 
    vote_lepen_02687.push(vote_lepen);
    vote_rejet_02687.push(vote_rejet);
    vote_macronpop_02687.push(vote_macronMediane);
    vote_lepenpop_02687.push(vote_lepenMediane);
    vote_rejetpop_02687.push(vote_rejetMediane);
    name_Commune_02687.push(nameCommune);
    Pourcentage_02687.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02687.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02687.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02687.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02687.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02687 = [];
const vote_lepen_02687 = [];
const vote_rejet_02687 = [];
const vote_macronpop_02687 = [];
const vote_lepenpop_02687 = [];
const vote_rejetpop_02687 = [];
const name_Commune_02687 = [];
const Pourcentage_02687 = [];
const Pourcentage_rejet_02687 = [];
const vote_gene_macron_02687 = [];
const vote_gene_lepen_02687 = [];
const vote_gene_rejet_02687 = [];

async function chartIt02687(){
    await GraphDATA02687();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02687-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02687
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02687
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02687-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02687,vote_lepen_02687,vote_rejet_02687]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02687-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02687,vote_lepenpop_02687,vote_rejetpop_02687]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02687"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02687
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02687
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02687
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02688*/
/*------------------------------------------------------------------ */
async function GraphDATA02688() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[687];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02688.push(vote_macron); 
    vote_lepen_02688.push(vote_lepen);
    vote_rejet_02688.push(vote_rejet);
    vote_macronpop_02688.push(vote_macronMediane);
    vote_lepenpop_02688.push(vote_lepenMediane);
    vote_rejetpop_02688.push(vote_rejetMediane);
    name_Commune_02688.push(nameCommune);
    Pourcentage_02688.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02688.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02688.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02688.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02688.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02688 = [];
const vote_lepen_02688 = [];
const vote_rejet_02688 = [];
const vote_macronpop_02688 = [];
const vote_lepenpop_02688 = [];
const vote_rejetpop_02688 = [];
const name_Commune_02688 = [];
const Pourcentage_02688 = [];
const Pourcentage_rejet_02688 = [];
const vote_gene_macron_02688 = [];
const vote_gene_lepen_02688 = [];
const vote_gene_rejet_02688 = [];

async function chartIt02688(){
    await GraphDATA02688();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02688-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02688
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02688
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02688-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02688,vote_lepen_02688,vote_rejet_02688]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02688-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02688,vote_lepenpop_02688,vote_rejetpop_02688]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02688"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02688
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02688
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02688
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02689*/
/*------------------------------------------------------------------ */
async function GraphDATA02689() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[688];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02689.push(vote_macron); 
    vote_lepen_02689.push(vote_lepen);
    vote_rejet_02689.push(vote_rejet);
    vote_macronpop_02689.push(vote_macronMediane);
    vote_lepenpop_02689.push(vote_lepenMediane);
    vote_rejetpop_02689.push(vote_rejetMediane);
    name_Commune_02689.push(nameCommune);
    Pourcentage_02689.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02689.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02689.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02689.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02689.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02689 = [];
const vote_lepen_02689 = [];
const vote_rejet_02689 = [];
const vote_macronpop_02689 = [];
const vote_lepenpop_02689 = [];
const vote_rejetpop_02689 = [];
const name_Commune_02689 = [];
const Pourcentage_02689 = [];
const Pourcentage_rejet_02689 = [];
const vote_gene_macron_02689 = [];
const vote_gene_lepen_02689 = [];
const vote_gene_rejet_02689 = [];

async function chartIt02689(){
    await GraphDATA02689();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02689-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02689
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02689
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02689-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02689,vote_lepen_02689,vote_rejet_02689]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02689-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02689,vote_lepenpop_02689,vote_rejetpop_02689]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02689"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02689
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02689
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02689
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02690*/
/*------------------------------------------------------------------ */
async function GraphDATA02690() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[689];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02690.push(vote_macron); 
    vote_lepen_02690.push(vote_lepen);
    vote_rejet_02690.push(vote_rejet);
    vote_macronpop_02690.push(vote_macronMediane);
    vote_lepenpop_02690.push(vote_lepenMediane);
    vote_rejetpop_02690.push(vote_rejetMediane);
    name_Commune_02690.push(nameCommune);
    Pourcentage_02690.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02690.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02690.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02690.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02690.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02690 = [];
const vote_lepen_02690 = [];
const vote_rejet_02690 = [];
const vote_macronpop_02690 = [];
const vote_lepenpop_02690 = [];
const vote_rejetpop_02690 = [];
const name_Commune_02690 = [];
const Pourcentage_02690 = [];
const Pourcentage_rejet_02690 = [];
const vote_gene_macron_02690 = [];
const vote_gene_lepen_02690 = [];
const vote_gene_rejet_02690 = [];

async function chartIt02690(){
    await GraphDATA02690();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02690-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02690
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02690
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02690-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02690,vote_lepen_02690,vote_rejet_02690]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02690-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02690,vote_lepenpop_02690,vote_rejetpop_02690]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02690"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02690
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02690
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02690
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02691*/
/*------------------------------------------------------------------ */
async function GraphDATA02691() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[690];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02691.push(vote_macron); 
    vote_lepen_02691.push(vote_lepen);
    vote_rejet_02691.push(vote_rejet);
    vote_macronpop_02691.push(vote_macronMediane);
    vote_lepenpop_02691.push(vote_lepenMediane);
    vote_rejetpop_02691.push(vote_rejetMediane);
    name_Commune_02691.push(nameCommune);
    Pourcentage_02691.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02691.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02691.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02691.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02691.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02691 = [];
const vote_lepen_02691 = [];
const vote_rejet_02691 = [];
const vote_macronpop_02691 = [];
const vote_lepenpop_02691 = [];
const vote_rejetpop_02691 = [];
const name_Commune_02691 = [];
const Pourcentage_02691 = [];
const Pourcentage_rejet_02691 = [];
const vote_gene_macron_02691 = [];
const vote_gene_lepen_02691 = [];
const vote_gene_rejet_02691 = [];

async function chartIt02691(){
    await GraphDATA02691();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02691-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02691
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02691
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02691-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02691,vote_lepen_02691,vote_rejet_02691]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02691-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02691,vote_lepenpop_02691,vote_rejetpop_02691]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02691"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02691
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02691
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02691
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02692*/
/*------------------------------------------------------------------ */
async function GraphDATA02692() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[691];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02692.push(vote_macron); 
    vote_lepen_02692.push(vote_lepen);
    vote_rejet_02692.push(vote_rejet);
    vote_macronpop_02692.push(vote_macronMediane);
    vote_lepenpop_02692.push(vote_lepenMediane);
    vote_rejetpop_02692.push(vote_rejetMediane);
    name_Commune_02692.push(nameCommune);
    Pourcentage_02692.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02692.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02692.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02692.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02692.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02692 = [];
const vote_lepen_02692 = [];
const vote_rejet_02692 = [];
const vote_macronpop_02692 = [];
const vote_lepenpop_02692 = [];
const vote_rejetpop_02692 = [];
const name_Commune_02692 = [];
const Pourcentage_02692 = [];
const Pourcentage_rejet_02692 = [];
const vote_gene_macron_02692 = [];
const vote_gene_lepen_02692 = [];
const vote_gene_rejet_02692 = [];

async function chartIt02692(){
    await GraphDATA02692();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02692-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02692
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02692
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02692-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02692,vote_lepen_02692,vote_rejet_02692]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02692-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02692,vote_lepenpop_02692,vote_rejetpop_02692]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02692"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02692
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02692
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02692
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02693*/
/*------------------------------------------------------------------ */
async function GraphDATA02693() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[692];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02693.push(vote_macron); 
    vote_lepen_02693.push(vote_lepen);
    vote_rejet_02693.push(vote_rejet);
    vote_macronpop_02693.push(vote_macronMediane);
    vote_lepenpop_02693.push(vote_lepenMediane);
    vote_rejetpop_02693.push(vote_rejetMediane);
    name_Commune_02693.push(nameCommune);
    Pourcentage_02693.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02693.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02693.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02693.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02693.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02693 = [];
const vote_lepen_02693 = [];
const vote_rejet_02693 = [];
const vote_macronpop_02693 = [];
const vote_lepenpop_02693 = [];
const vote_rejetpop_02693 = [];
const name_Commune_02693 = [];
const Pourcentage_02693 = [];
const Pourcentage_rejet_02693 = [];
const vote_gene_macron_02693 = [];
const vote_gene_lepen_02693 = [];
const vote_gene_rejet_02693 = [];

async function chartIt02693(){
    await GraphDATA02693();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02693-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02693
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02693
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02693-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02693,vote_lepen_02693,vote_rejet_02693]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02693-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02693,vote_lepenpop_02693,vote_rejetpop_02693]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02693"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02693
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02693
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02693
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02694*/
/*------------------------------------------------------------------ */
async function GraphDATA02694() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[693];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02694.push(vote_macron); 
    vote_lepen_02694.push(vote_lepen);
    vote_rejet_02694.push(vote_rejet);
    vote_macronpop_02694.push(vote_macronMediane);
    vote_lepenpop_02694.push(vote_lepenMediane);
    vote_rejetpop_02694.push(vote_rejetMediane);
    name_Commune_02694.push(nameCommune);
    Pourcentage_02694.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02694.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02694.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02694.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02694.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02694 = [];
const vote_lepen_02694 = [];
const vote_rejet_02694 = [];
const vote_macronpop_02694 = [];
const vote_lepenpop_02694 = [];
const vote_rejetpop_02694 = [];
const name_Commune_02694 = [];
const Pourcentage_02694 = [];
const Pourcentage_rejet_02694 = [];
const vote_gene_macron_02694 = [];
const vote_gene_lepen_02694 = [];
const vote_gene_rejet_02694 = [];

async function chartIt02694(){
    await GraphDATA02694();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02694-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02694
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02694
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02694-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02694,vote_lepen_02694,vote_rejet_02694]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02694-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02694,vote_lepenpop_02694,vote_rejetpop_02694]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02694"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02694
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02694
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02694
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02695*/
/*------------------------------------------------------------------ */
async function GraphDATA02695() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[694];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02695.push(vote_macron); 
    vote_lepen_02695.push(vote_lepen);
    vote_rejet_02695.push(vote_rejet);
    vote_macronpop_02695.push(vote_macronMediane);
    vote_lepenpop_02695.push(vote_lepenMediane);
    vote_rejetpop_02695.push(vote_rejetMediane);
    name_Commune_02695.push(nameCommune);
    Pourcentage_02695.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02695.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02695.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02695.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02695.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02695 = [];
const vote_lepen_02695 = [];
const vote_rejet_02695 = [];
const vote_macronpop_02695 = [];
const vote_lepenpop_02695 = [];
const vote_rejetpop_02695 = [];
const name_Commune_02695 = [];
const Pourcentage_02695 = [];
const Pourcentage_rejet_02695 = [];
const vote_gene_macron_02695 = [];
const vote_gene_lepen_02695 = [];
const vote_gene_rejet_02695 = [];

async function chartIt02695(){
    await GraphDATA02695();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02695-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02695
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02695
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02695-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02695,vote_lepen_02695,vote_rejet_02695]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02695-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02695,vote_lepenpop_02695,vote_rejetpop_02695]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02695"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02695
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02695
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02695
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02696*/
/*------------------------------------------------------------------ */
async function GraphDATA02696() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[695];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02696.push(vote_macron); 
    vote_lepen_02696.push(vote_lepen);
    vote_rejet_02696.push(vote_rejet);
    vote_macronpop_02696.push(vote_macronMediane);
    vote_lepenpop_02696.push(vote_lepenMediane);
    vote_rejetpop_02696.push(vote_rejetMediane);
    name_Commune_02696.push(nameCommune);
    Pourcentage_02696.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02696.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02696.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02696.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02696.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02696 = [];
const vote_lepen_02696 = [];
const vote_rejet_02696 = [];
const vote_macronpop_02696 = [];
const vote_lepenpop_02696 = [];
const vote_rejetpop_02696 = [];
const name_Commune_02696 = [];
const Pourcentage_02696 = [];
const Pourcentage_rejet_02696 = [];
const vote_gene_macron_02696 = [];
const vote_gene_lepen_02696 = [];
const vote_gene_rejet_02696 = [];

async function chartIt02696(){
    await GraphDATA02696();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02696-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02696
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02696
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02696-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02696,vote_lepen_02696,vote_rejet_02696]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02696-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02696,vote_lepenpop_02696,vote_rejetpop_02696]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02696"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02696
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02696
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02696
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02697*/
/*------------------------------------------------------------------ */
async function GraphDATA02697() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[696];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02697.push(vote_macron); 
    vote_lepen_02697.push(vote_lepen);
    vote_rejet_02697.push(vote_rejet);
    vote_macronpop_02697.push(vote_macronMediane);
    vote_lepenpop_02697.push(vote_lepenMediane);
    vote_rejetpop_02697.push(vote_rejetMediane);
    name_Commune_02697.push(nameCommune);
    Pourcentage_02697.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02697.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02697.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02697.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02697.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02697 = [];
const vote_lepen_02697 = [];
const vote_rejet_02697 = [];
const vote_macronpop_02697 = [];
const vote_lepenpop_02697 = [];
const vote_rejetpop_02697 = [];
const name_Commune_02697 = [];
const Pourcentage_02697 = [];
const Pourcentage_rejet_02697 = [];
const vote_gene_macron_02697 = [];
const vote_gene_lepen_02697 = [];
const vote_gene_rejet_02697 = [];

async function chartIt02697(){
    await GraphDATA02697();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02697-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02697
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02697
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02697-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02697,vote_lepen_02697,vote_rejet_02697]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02697-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02697,vote_lepenpop_02697,vote_rejetpop_02697]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02697"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02697
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02697
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02697
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02698*/
/*------------------------------------------------------------------ */
async function GraphDATA02698() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[697];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02698.push(vote_macron); 
    vote_lepen_02698.push(vote_lepen);
    vote_rejet_02698.push(vote_rejet);
    vote_macronpop_02698.push(vote_macronMediane);
    vote_lepenpop_02698.push(vote_lepenMediane);
    vote_rejetpop_02698.push(vote_rejetMediane);
    name_Commune_02698.push(nameCommune);
    Pourcentage_02698.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02698.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02698.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02698.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02698.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02698 = [];
const vote_lepen_02698 = [];
const vote_rejet_02698 = [];
const vote_macronpop_02698 = [];
const vote_lepenpop_02698 = [];
const vote_rejetpop_02698 = [];
const name_Commune_02698 = [];
const Pourcentage_02698 = [];
const Pourcentage_rejet_02698 = [];
const vote_gene_macron_02698 = [];
const vote_gene_lepen_02698 = [];
const vote_gene_rejet_02698 = [];

async function chartIt02698(){
    await GraphDATA02698();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02698-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02698
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02698
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02698-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02698,vote_lepen_02698,vote_rejet_02698]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02698-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02698,vote_lepenpop_02698,vote_rejetpop_02698]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02698"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02698
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02698
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02698
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02699*/
/*------------------------------------------------------------------ */
async function GraphDATA02699() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[698];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02699.push(vote_macron); 
    vote_lepen_02699.push(vote_lepen);
    vote_rejet_02699.push(vote_rejet);
    vote_macronpop_02699.push(vote_macronMediane);
    vote_lepenpop_02699.push(vote_lepenMediane);
    vote_rejetpop_02699.push(vote_rejetMediane);
    name_Commune_02699.push(nameCommune);
    Pourcentage_02699.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02699.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02699.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02699.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02699.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02699 = [];
const vote_lepen_02699 = [];
const vote_rejet_02699 = [];
const vote_macronpop_02699 = [];
const vote_lepenpop_02699 = [];
const vote_rejetpop_02699 = [];
const name_Commune_02699 = [];
const Pourcentage_02699 = [];
const Pourcentage_rejet_02699 = [];
const vote_gene_macron_02699 = [];
const vote_gene_lepen_02699 = [];
const vote_gene_rejet_02699 = [];

async function chartIt02699(){
    await GraphDATA02699();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02699-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02699
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02699
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02699-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02699,vote_lepen_02699,vote_rejet_02699]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02699-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02699,vote_lepenpop_02699,vote_rejetpop_02699]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02699"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02699
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02699
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02699
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}