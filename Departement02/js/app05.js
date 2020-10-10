/********************************************************************** */
/*JS GRAPHIQUE FICHIER DATA */
/********************************************************************** */
chartIt02401();
chartIt02402();
chartIt02403();
chartIt02404();
chartIt02405();
chartIt02406();
chartIt02407();
chartIt02408();
chartIt02409();
chartIt02410();
chartIt02411();
chartIt02412();
chartIt02413();
chartIt02414();
chartIt02415();
chartIt02416();
chartIt02417();
chartIt02418();
chartIt02419();
chartIt02420();
chartIt02421();
chartIt02422();
chartIt02423();
chartIt02424();
chartIt02425();
chartIt02426();
chartIt02427();
chartIt02428();
chartIt02429();
chartIt02430();
chartIt02431();
chartIt02432();
chartIt02433();
chartIt02434();
chartIt02435();
chartIt02436();
chartIt02437();
chartIt02438();
chartIt02439();
chartIt02440();
chartIt02441();
chartIt02442();
chartIt02443();
chartIt02444();
chartIt02445();
chartIt02446();
chartIt02447();
chartIt02448();
chartIt02449();
chartIt02450();
chartIt02451();
chartIt02452();
chartIt02453();
chartIt02454();
chartIt02455();
chartIt02456();
chartIt02457();
chartIt02458();
chartIt02459();
chartIt02460();
chartIt02461();
chartIt02462();
chartIt02463();
chartIt02464();
chartIt02465();
chartIt02466();
chartIt02467();
chartIt02468();
chartIt02469();
chartIt02470();
chartIt02471();
chartIt02472();
chartIt02473();
chartIt02474();
chartIt02475();
chartIt02476();
chartIt02477();
chartIt02478();
chartIt02479();
chartIt02480();
chartIt02481();
chartIt02482();
chartIt02483();
chartIt02484();
chartIt02485();
chartIt02486();
chartIt02487();
chartIt02488();
chartIt02489();
chartIt02490();
chartIt02491();
chartIt02492();
chartIt02493();
chartIt02494();
chartIt02495();
chartIt02496();
chartIt02497();
chartIt02498();
chartIt02499();
/*------------------------------------------------------------------ */
/*COMMUNE 02401*/
/*------------------------------------------------------------------ */
async function GraphDATA02401() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[400];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02401.push(vote_macron); 
    vote_lepen_02401.push(vote_lepen);
    vote_rejet_02401.push(vote_rejet);
    vote_macronpop_02401.push(vote_macronMediane);
    vote_lepenpop_02401.push(vote_lepenMediane);
    vote_rejetpop_02401.push(vote_rejetMediane);
    name_Commune_02401.push(nameCommune);
    Pourcentage_02401.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02401.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02401.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02401.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02401.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02401 = [];
const vote_lepen_02401 = [];
const vote_rejet_02401 = [];
const vote_macronpop_02401 = [];
const vote_lepenpop_02401 = [];
const vote_rejetpop_02401 = [];
const name_Commune_02401 = [];
const Pourcentage_02401 = [];
const Pourcentage_rejet_02401 = [];
const vote_gene_macron_02401 = [];
const vote_gene_lepen_02401 = [];
const vote_gene_rejet_02401 = [];

async function chartIt02401(){
    await GraphDATA02401();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02401-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02401
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02401
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02401-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02401,vote_lepen_02401,vote_rejet_02401]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02401-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02401,vote_lepenpop_02401,vote_rejetpop_02401]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02401"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02401
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02401
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02401
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02402*/
/*------------------------------------------------------------------ */
async function GraphDATA02402() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[401];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02402.push(vote_macron); 
    vote_lepen_02402.push(vote_lepen);
    vote_rejet_02402.push(vote_rejet);
    vote_macronpop_02402.push(vote_macronMediane);
    vote_lepenpop_02402.push(vote_lepenMediane);
    vote_rejetpop_02402.push(vote_rejetMediane);
    name_Commune_02402.push(nameCommune);
    Pourcentage_02402.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02402.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02402.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02402.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02402.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02402 = [];
const vote_lepen_02402 = [];
const vote_rejet_02402 = [];
const vote_macronpop_02402 = [];
const vote_lepenpop_02402 = [];
const vote_rejetpop_02402 = [];
const name_Commune_02402 = [];
const Pourcentage_02402 = [];
const Pourcentage_rejet_02402 = [];
const vote_gene_macron_02402 = [];
const vote_gene_lepen_02402 = [];
const vote_gene_rejet_02402 = [];

async function chartIt02402(){
    await GraphDATA02402();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02402-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02402
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02402
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02402-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02402,vote_lepen_02402,vote_rejet_02402]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02402-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02402,vote_lepenpop_02402,vote_rejetpop_02402]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02402"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02402
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02402
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02402
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02403*/
/*------------------------------------------------------------------ */
async function GraphDATA02403() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[402];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02403.push(vote_macron); 
    vote_lepen_02403.push(vote_lepen);
    vote_rejet_02403.push(vote_rejet);
    vote_macronpop_02403.push(vote_macronMediane);
    vote_lepenpop_02403.push(vote_lepenMediane);
    vote_rejetpop_02403.push(vote_rejetMediane);
    name_Commune_02403.push(nameCommune);
    Pourcentage_02403.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02403.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02403.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02403.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02403.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02403 = [];
const vote_lepen_02403 = [];
const vote_rejet_02403 = [];
const vote_macronpop_02403 = [];
const vote_lepenpop_02403 = [];
const vote_rejetpop_02403 = [];
const name_Commune_02403 = [];
const Pourcentage_02403 = [];
const Pourcentage_rejet_02403 = [];
const vote_gene_macron_02403 = [];
const vote_gene_lepen_02403 = [];
const vote_gene_rejet_02403 = [];

async function chartIt02403(){
    await GraphDATA02403();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02403-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02403
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02403
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02403-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02403,vote_lepen_02403,vote_rejet_02403]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02403-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02403,vote_lepenpop_02403,vote_rejetpop_02403]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02403"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02403
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02403
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02403
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02404*/
/*------------------------------------------------------------------ */
async function GraphDATA02404() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[403];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02404.push(vote_macron); 
    vote_lepen_02404.push(vote_lepen);
    vote_rejet_02404.push(vote_rejet);
    vote_macronpop_02404.push(vote_macronMediane);
    vote_lepenpop_02404.push(vote_lepenMediane);
    vote_rejetpop_02404.push(vote_rejetMediane);
    name_Commune_02404.push(nameCommune);
    Pourcentage_02404.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02404.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02404.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02404.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02404.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02404 = [];
const vote_lepen_02404 = [];
const vote_rejet_02404 = [];
const vote_macronpop_02404 = [];
const vote_lepenpop_02404 = [];
const vote_rejetpop_02404 = [];
const name_Commune_02404 = [];
const Pourcentage_02404 = [];
const Pourcentage_rejet_02404 = [];
const vote_gene_macron_02404 = [];
const vote_gene_lepen_02404 = [];
const vote_gene_rejet_02404 = [];

async function chartIt02404(){
    await GraphDATA02404();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02404-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02404
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02404
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02404-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02404,vote_lepen_02404,vote_rejet_02404]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02404-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02404,vote_lepenpop_02404,vote_rejetpop_02404]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02404"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02404
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02404
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02404
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02405*/
/*------------------------------------------------------------------ */
async function GraphDATA02405() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[404];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02405.push(vote_macron); 
    vote_lepen_02405.push(vote_lepen);
    vote_rejet_02405.push(vote_rejet);
    vote_macronpop_02405.push(vote_macronMediane);
    vote_lepenpop_02405.push(vote_lepenMediane);
    vote_rejetpop_02405.push(vote_rejetMediane);
    name_Commune_02405.push(nameCommune);
    Pourcentage_02405.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02405.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02405.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02405.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02405.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02405 = [];
const vote_lepen_02405 = [];
const vote_rejet_02405 = [];
const vote_macronpop_02405 = [];
const vote_lepenpop_02405 = [];
const vote_rejetpop_02405 = [];
const name_Commune_02405 = [];
const Pourcentage_02405 = [];
const Pourcentage_rejet_02405 = [];
const vote_gene_macron_02405 = [];
const vote_gene_lepen_02405 = [];
const vote_gene_rejet_02405 = [];

async function chartIt02405(){
    await GraphDATA02405();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02405-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02405
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02405
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02405-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02405,vote_lepen_02405,vote_rejet_02405]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02405-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02405,vote_lepenpop_02405,vote_rejetpop_02405]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02405"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02405
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02405
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02405
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02406*/
/*------------------------------------------------------------------ */
async function GraphDATA02406() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[405];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02406.push(vote_macron); 
    vote_lepen_02406.push(vote_lepen);
    vote_rejet_02406.push(vote_rejet);
    vote_macronpop_02406.push(vote_macronMediane);
    vote_lepenpop_02406.push(vote_lepenMediane);
    vote_rejetpop_02406.push(vote_rejetMediane);
    name_Commune_02406.push(nameCommune);
    Pourcentage_02406.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02406.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02406.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02406.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02406.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02406 = [];
const vote_lepen_02406 = [];
const vote_rejet_02406 = [];
const vote_macronpop_02406 = [];
const vote_lepenpop_02406 = [];
const vote_rejetpop_02406 = [];
const name_Commune_02406 = [];
const Pourcentage_02406 = [];
const Pourcentage_rejet_02406 = [];
const vote_gene_macron_02406 = [];
const vote_gene_lepen_02406 = [];
const vote_gene_rejet_02406 = [];

async function chartIt02406(){
    await GraphDATA02406();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02406-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02406
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02406
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02406-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02406,vote_lepen_02406,vote_rejet_02406]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02406-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02406,vote_lepenpop_02406,vote_rejetpop_02406]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02406"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02406
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02406
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02406
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02407*/
/*------------------------------------------------------------------ */
async function GraphDATA02407() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[406];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02407.push(vote_macron); 
    vote_lepen_02407.push(vote_lepen);
    vote_rejet_02407.push(vote_rejet);
    vote_macronpop_02407.push(vote_macronMediane);
    vote_lepenpop_02407.push(vote_lepenMediane);
    vote_rejetpop_02407.push(vote_rejetMediane);
    name_Commune_02407.push(nameCommune);
    Pourcentage_02407.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02407.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02407.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02407.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02407.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02407 = [];
const vote_lepen_02407 = [];
const vote_rejet_02407 = [];
const vote_macronpop_02407 = [];
const vote_lepenpop_02407 = [];
const vote_rejetpop_02407 = [];
const name_Commune_02407 = [];
const Pourcentage_02407 = [];
const Pourcentage_rejet_02407 = [];
const vote_gene_macron_02407 = [];
const vote_gene_lepen_02407 = [];
const vote_gene_rejet_02407 = [];

async function chartIt02407(){
    await GraphDATA02407();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02407-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02407
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02407
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02407-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02407,vote_lepen_02407,vote_rejet_02407]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02407-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02407,vote_lepenpop_02407,vote_rejetpop_02407]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02407"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02407
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02407
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02407
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02408*/
/*------------------------------------------------------------------ */
async function GraphDATA02408() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[407];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02408.push(vote_macron); 
    vote_lepen_02408.push(vote_lepen);
    vote_rejet_02408.push(vote_rejet);
    vote_macronpop_02408.push(vote_macronMediane);
    vote_lepenpop_02408.push(vote_lepenMediane);
    vote_rejetpop_02408.push(vote_rejetMediane);
    name_Commune_02408.push(nameCommune);
    Pourcentage_02408.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02408.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02408.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02408.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02408.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02408 = [];
const vote_lepen_02408 = [];
const vote_rejet_02408 = [];
const vote_macronpop_02408 = [];
const vote_lepenpop_02408 = [];
const vote_rejetpop_02408 = [];
const name_Commune_02408 = [];
const Pourcentage_02408 = [];
const Pourcentage_rejet_02408 = [];
const vote_gene_macron_02408 = [];
const vote_gene_lepen_02408 = [];
const vote_gene_rejet_02408 = [];

async function chartIt02408(){
    await GraphDATA02408();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02408-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02408
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02408
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02408-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02408,vote_lepen_02408,vote_rejet_02408]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02408-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02408,vote_lepenpop_02408,vote_rejetpop_02408]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02408"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02408
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02408
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02408
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02409*/
/*------------------------------------------------------------------ */
async function GraphDATA02409() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[408];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02409.push(vote_macron); 
    vote_lepen_02409.push(vote_lepen);
    vote_rejet_02409.push(vote_rejet);
    vote_macronpop_02409.push(vote_macronMediane);
    vote_lepenpop_02409.push(vote_lepenMediane);
    vote_rejetpop_02409.push(vote_rejetMediane);
    name_Commune_02409.push(nameCommune);
    Pourcentage_02409.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02409.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02409.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02409.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02409.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02409 = [];
const vote_lepen_02409 = [];
const vote_rejet_02409 = [];
const vote_macronpop_02409 = [];
const vote_lepenpop_02409 = [];
const vote_rejetpop_02409 = [];
const name_Commune_02409 = [];
const Pourcentage_02409 = [];
const Pourcentage_rejet_02409 = [];
const vote_gene_macron_02409 = [];
const vote_gene_lepen_02409 = [];
const vote_gene_rejet_02409 = [];

async function chartIt02409(){
    await GraphDATA02409();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02409-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02409
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02409
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02409-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02409,vote_lepen_02409,vote_rejet_02409]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02409-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02409,vote_lepenpop_02409,vote_rejetpop_02409]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02409"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02409
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02409
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02409
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02410*/
/*------------------------------------------------------------------ */
async function GraphDATA02410() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[409];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02410.push(vote_macron); 
    vote_lepen_02410.push(vote_lepen);
    vote_rejet_02410.push(vote_rejet);
    vote_macronpop_02410.push(vote_macronMediane);
    vote_lepenpop_02410.push(vote_lepenMediane);
    vote_rejetpop_02410.push(vote_rejetMediane);
    name_Commune_02410.push(nameCommune);
    Pourcentage_02410.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02410.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02410.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02410.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02410.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02410 = [];
const vote_lepen_02410 = [];
const vote_rejet_02410 = [];
const vote_macronpop_02410 = [];
const vote_lepenpop_02410 = [];
const vote_rejetpop_02410 = [];
const name_Commune_02410 = [];
const Pourcentage_02410 = [];
const Pourcentage_rejet_02410 = [];
const vote_gene_macron_02410 = [];
const vote_gene_lepen_02410 = [];
const vote_gene_rejet_02410 = [];

async function chartIt02410(){
    await GraphDATA02410();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02410-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02410
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02410
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02410-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02410,vote_lepen_02410,vote_rejet_02410]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02410-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02410,vote_lepenpop_02410,vote_rejetpop_02410]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02410"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02410
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02410
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02410
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02411*/
/*------------------------------------------------------------------ */
async function GraphDATA02411() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[410];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02411.push(vote_macron); 
    vote_lepen_02411.push(vote_lepen);
    vote_rejet_02411.push(vote_rejet);
    vote_macronpop_02411.push(vote_macronMediane);
    vote_lepenpop_02411.push(vote_lepenMediane);
    vote_rejetpop_02411.push(vote_rejetMediane);
    name_Commune_02411.push(nameCommune);
    Pourcentage_02411.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02411.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02411.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02411.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02411.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02411 = [];
const vote_lepen_02411 = [];
const vote_rejet_02411 = [];
const vote_macronpop_02411 = [];
const vote_lepenpop_02411 = [];
const vote_rejetpop_02411 = [];
const name_Commune_02411 = [];
const Pourcentage_02411 = [];
const Pourcentage_rejet_02411 = [];
const vote_gene_macron_02411 = [];
const vote_gene_lepen_02411 = [];
const vote_gene_rejet_02411 = [];

async function chartIt02411(){
    await GraphDATA02411();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02411-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02411
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02411
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02411-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02411,vote_lepen_02411,vote_rejet_02411]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02411-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02411,vote_lepenpop_02411,vote_rejetpop_02411]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02411"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02411
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02411
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02411
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02412*/
/*------------------------------------------------------------------ */
async function GraphDATA02412() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[411];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02412.push(vote_macron); 
    vote_lepen_02412.push(vote_lepen);
    vote_rejet_02412.push(vote_rejet);
    vote_macronpop_02412.push(vote_macronMediane);
    vote_lepenpop_02412.push(vote_lepenMediane);
    vote_rejetpop_02412.push(vote_rejetMediane);
    name_Commune_02412.push(nameCommune);
    Pourcentage_02412.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02412.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02412.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02412.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02412.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02412 = [];
const vote_lepen_02412 = [];
const vote_rejet_02412 = [];
const vote_macronpop_02412 = [];
const vote_lepenpop_02412 = [];
const vote_rejetpop_02412 = [];
const name_Commune_02412 = [];
const Pourcentage_02412 = [];
const Pourcentage_rejet_02412 = [];
const vote_gene_macron_02412 = [];
const vote_gene_lepen_02412 = [];
const vote_gene_rejet_02412 = [];

async function chartIt02412(){
    await GraphDATA02412();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02412-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02412
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02412
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02412-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02412,vote_lepen_02412,vote_rejet_02412]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02412-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02412,vote_lepenpop_02412,vote_rejetpop_02412]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02412"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02412
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02412
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02412
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02413*/
/*------------------------------------------------------------------ */
async function GraphDATA02413() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[412];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02413.push(vote_macron); 
    vote_lepen_02413.push(vote_lepen);
    vote_rejet_02413.push(vote_rejet);
    vote_macronpop_02413.push(vote_macronMediane);
    vote_lepenpop_02413.push(vote_lepenMediane);
    vote_rejetpop_02413.push(vote_rejetMediane);
    name_Commune_02413.push(nameCommune);
    Pourcentage_02413.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02413.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02413.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02413.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02413.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02413 = [];
const vote_lepen_02413 = [];
const vote_rejet_02413 = [];
const vote_macronpop_02413 = [];
const vote_lepenpop_02413 = [];
const vote_rejetpop_02413 = [];
const name_Commune_02413 = [];
const Pourcentage_02413 = [];
const Pourcentage_rejet_02413 = [];
const vote_gene_macron_02413 = [];
const vote_gene_lepen_02413 = [];
const vote_gene_rejet_02413 = [];

async function chartIt02413(){
    await GraphDATA02413();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02413-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02413
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02413
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02413-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02413,vote_lepen_02413,vote_rejet_02413]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02413-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02413,vote_lepenpop_02413,vote_rejetpop_02413]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02413"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02413
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02413
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02413
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02414*/
/*------------------------------------------------------------------ */
async function GraphDATA02414() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[413];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02414.push(vote_macron); 
    vote_lepen_02414.push(vote_lepen);
    vote_rejet_02414.push(vote_rejet);
    vote_macronpop_02414.push(vote_macronMediane);
    vote_lepenpop_02414.push(vote_lepenMediane);
    vote_rejetpop_02414.push(vote_rejetMediane);
    name_Commune_02414.push(nameCommune);
    Pourcentage_02414.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02414.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02414.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02414.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02414.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02414 = [];
const vote_lepen_02414 = [];
const vote_rejet_02414 = [];
const vote_macronpop_02414 = [];
const vote_lepenpop_02414 = [];
const vote_rejetpop_02414 = [];
const name_Commune_02414 = [];
const Pourcentage_02414 = [];
const Pourcentage_rejet_02414 = [];
const vote_gene_macron_02414 = [];
const vote_gene_lepen_02414 = [];
const vote_gene_rejet_02414 = [];

async function chartIt02414(){
    await GraphDATA02414();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02414-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02414
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02414
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02414-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02414,vote_lepen_02414,vote_rejet_02414]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02414-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02414,vote_lepenpop_02414,vote_rejetpop_02414]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02414"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02414
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02414
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02414
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02415*/
/*------------------------------------------------------------------ */
async function GraphDATA02415() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[414];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02415.push(vote_macron); 
    vote_lepen_02415.push(vote_lepen);
    vote_rejet_02415.push(vote_rejet);
    vote_macronpop_02415.push(vote_macronMediane);
    vote_lepenpop_02415.push(vote_lepenMediane);
    vote_rejetpop_02415.push(vote_rejetMediane);
    name_Commune_02415.push(nameCommune);
    Pourcentage_02415.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02415.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02415.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02415.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02415.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02415 = [];
const vote_lepen_02415 = [];
const vote_rejet_02415 = [];
const vote_macronpop_02415 = [];
const vote_lepenpop_02415 = [];
const vote_rejetpop_02415 = [];
const name_Commune_02415 = [];
const Pourcentage_02415 = [];
const Pourcentage_rejet_02415 = [];
const vote_gene_macron_02415 = [];
const vote_gene_lepen_02415 = [];
const vote_gene_rejet_02415 = [];

async function chartIt02415(){
    await GraphDATA02415();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02415-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02415
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02415
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02415-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02415,vote_lepen_02415,vote_rejet_02415]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02415-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02415,vote_lepenpop_02415,vote_rejetpop_02415]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02415"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02415
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02415
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02415
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02416*/
/*------------------------------------------------------------------ */
async function GraphDATA02416() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[415];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02416.push(vote_macron); 
    vote_lepen_02416.push(vote_lepen);
    vote_rejet_02416.push(vote_rejet);
    vote_macronpop_02416.push(vote_macronMediane);
    vote_lepenpop_02416.push(vote_lepenMediane);
    vote_rejetpop_02416.push(vote_rejetMediane);
    name_Commune_02416.push(nameCommune);
    Pourcentage_02416.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02416.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02416.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02416.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02416.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02416 = [];
const vote_lepen_02416 = [];
const vote_rejet_02416 = [];
const vote_macronpop_02416 = [];
const vote_lepenpop_02416 = [];
const vote_rejetpop_02416 = [];
const name_Commune_02416 = [];
const Pourcentage_02416 = [];
const Pourcentage_rejet_02416 = [];
const vote_gene_macron_02416 = [];
const vote_gene_lepen_02416 = [];
const vote_gene_rejet_02416 = [];

async function chartIt02416(){
    await GraphDATA02416();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02416-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02416
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02416
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02416-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02416,vote_lepen_02416,vote_rejet_02416]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02416-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02416,vote_lepenpop_02416,vote_rejetpop_02416]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02416"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02416
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02416
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02416
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02417*/
/*------------------------------------------------------------------ */
async function GraphDATA02417() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[416];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02417.push(vote_macron); 
    vote_lepen_02417.push(vote_lepen);
    vote_rejet_02417.push(vote_rejet);
    vote_macronpop_02417.push(vote_macronMediane);
    vote_lepenpop_02417.push(vote_lepenMediane);
    vote_rejetpop_02417.push(vote_rejetMediane);
    name_Commune_02417.push(nameCommune);
    Pourcentage_02417.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02417.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02417.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02417.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02417.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02417 = [];
const vote_lepen_02417 = [];
const vote_rejet_02417 = [];
const vote_macronpop_02417 = [];
const vote_lepenpop_02417 = [];
const vote_rejetpop_02417 = [];
const name_Commune_02417 = [];
const Pourcentage_02417 = [];
const Pourcentage_rejet_02417 = [];
const vote_gene_macron_02417 = [];
const vote_gene_lepen_02417 = [];
const vote_gene_rejet_02417 = [];

async function chartIt02417(){
    await GraphDATA02417();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02417-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02417
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02417
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02417-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02417,vote_lepen_02417,vote_rejet_02417]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02417-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02417,vote_lepenpop_02417,vote_rejetpop_02417]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02417"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02417
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02417
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02417
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02418*/
/*------------------------------------------------------------------ */
async function GraphDATA02418() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[417];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02418.push(vote_macron); 
    vote_lepen_02418.push(vote_lepen);
    vote_rejet_02418.push(vote_rejet);
    vote_macronpop_02418.push(vote_macronMediane);
    vote_lepenpop_02418.push(vote_lepenMediane);
    vote_rejetpop_02418.push(vote_rejetMediane);
    name_Commune_02418.push(nameCommune);
    Pourcentage_02418.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02418.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02418.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02418.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02418.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02418 = [];
const vote_lepen_02418 = [];
const vote_rejet_02418 = [];
const vote_macronpop_02418 = [];
const vote_lepenpop_02418 = [];
const vote_rejetpop_02418 = [];
const name_Commune_02418 = [];
const Pourcentage_02418 = [];
const Pourcentage_rejet_02418 = [];
const vote_gene_macron_02418 = [];
const vote_gene_lepen_02418 = [];
const vote_gene_rejet_02418 = [];

async function chartIt02418(){
    await GraphDATA02418();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02418-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02418
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02418
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02418-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02418,vote_lepen_02418,vote_rejet_02418]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02418-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02418,vote_lepenpop_02418,vote_rejetpop_02418]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02418"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02418
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02418
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02418
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02419*/
/*------------------------------------------------------------------ */
async function GraphDATA02419() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[418];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02419.push(vote_macron); 
    vote_lepen_02419.push(vote_lepen);
    vote_rejet_02419.push(vote_rejet);
    vote_macronpop_02419.push(vote_macronMediane);
    vote_lepenpop_02419.push(vote_lepenMediane);
    vote_rejetpop_02419.push(vote_rejetMediane);
    name_Commune_02419.push(nameCommune);
    Pourcentage_02419.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02419.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02419.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02419.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02419.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02419 = [];
const vote_lepen_02419 = [];
const vote_rejet_02419 = [];
const vote_macronpop_02419 = [];
const vote_lepenpop_02419 = [];
const vote_rejetpop_02419 = [];
const name_Commune_02419 = [];
const Pourcentage_02419 = [];
const Pourcentage_rejet_02419 = [];
const vote_gene_macron_02419 = [];
const vote_gene_lepen_02419 = [];
const vote_gene_rejet_02419 = [];

async function chartIt02419(){
    await GraphDATA02419();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02419-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02419
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02419
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02419-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02419,vote_lepen_02419,vote_rejet_02419]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02419-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02419,vote_lepenpop_02419,vote_rejetpop_02419]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02419"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02419
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02419
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02419
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02420*/
/*------------------------------------------------------------------ */
async function GraphDATA02420() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[419];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02420.push(vote_macron); 
    vote_lepen_02420.push(vote_lepen);
    vote_rejet_02420.push(vote_rejet);
    vote_macronpop_02420.push(vote_macronMediane);
    vote_lepenpop_02420.push(vote_lepenMediane);
    vote_rejetpop_02420.push(vote_rejetMediane);
    name_Commune_02420.push(nameCommune);
    Pourcentage_02420.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02420.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02420.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02420.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02420.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02420 = [];
const vote_lepen_02420 = [];
const vote_rejet_02420 = [];
const vote_macronpop_02420 = [];
const vote_lepenpop_02420 = [];
const vote_rejetpop_02420 = [];
const name_Commune_02420 = [];
const Pourcentage_02420 = [];
const Pourcentage_rejet_02420 = [];
const vote_gene_macron_02420 = [];
const vote_gene_lepen_02420 = [];
const vote_gene_rejet_02420 = [];

async function chartIt02420(){
    await GraphDATA02420();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02420-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02420
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02420
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02420-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02420,vote_lepen_02420,vote_rejet_02420]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02420-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02420,vote_lepenpop_02420,vote_rejetpop_02420]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02420"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02420
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02420
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02420
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02421*/
/*------------------------------------------------------------------ */
async function GraphDATA02421() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[420];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02421.push(vote_macron); 
    vote_lepen_02421.push(vote_lepen);
    vote_rejet_02421.push(vote_rejet);
    vote_macronpop_02421.push(vote_macronMediane);
    vote_lepenpop_02421.push(vote_lepenMediane);
    vote_rejetpop_02421.push(vote_rejetMediane);
    name_Commune_02421.push(nameCommune);
    Pourcentage_02421.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02421.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02421.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02421.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02421.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02421 = [];
const vote_lepen_02421 = [];
const vote_rejet_02421 = [];
const vote_macronpop_02421 = [];
const vote_lepenpop_02421 = [];
const vote_rejetpop_02421 = [];
const name_Commune_02421 = [];
const Pourcentage_02421 = [];
const Pourcentage_rejet_02421 = [];
const vote_gene_macron_02421 = [];
const vote_gene_lepen_02421 = [];
const vote_gene_rejet_02421 = [];

async function chartIt02421(){
    await GraphDATA02421();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02421-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02421
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02421
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02421-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02421,vote_lepen_02421,vote_rejet_02421]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02421-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02421,vote_lepenpop_02421,vote_rejetpop_02421]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02421"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02421
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02421
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02421
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02422*/
/*------------------------------------------------------------------ */
async function GraphDATA02422() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[421];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02422.push(vote_macron); 
    vote_lepen_02422.push(vote_lepen);
    vote_rejet_02422.push(vote_rejet);
    vote_macronpop_02422.push(vote_macronMediane);
    vote_lepenpop_02422.push(vote_lepenMediane);
    vote_rejetpop_02422.push(vote_rejetMediane);
    name_Commune_02422.push(nameCommune);
    Pourcentage_02422.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02422.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02422.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02422.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02422.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02422 = [];
const vote_lepen_02422 = [];
const vote_rejet_02422 = [];
const vote_macronpop_02422 = [];
const vote_lepenpop_02422 = [];
const vote_rejetpop_02422 = [];
const name_Commune_02422 = [];
const Pourcentage_02422 = [];
const Pourcentage_rejet_02422 = [];
const vote_gene_macron_02422 = [];
const vote_gene_lepen_02422 = [];
const vote_gene_rejet_02422 = [];

async function chartIt02422(){
    await GraphDATA02422();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02422-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02422
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02422
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02422-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02422,vote_lepen_02422,vote_rejet_02422]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02422-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02422,vote_lepenpop_02422,vote_rejetpop_02422]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02422"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02422
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02422
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02422
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02423*/
/*------------------------------------------------------------------ */
async function GraphDATA02423() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[422];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02423.push(vote_macron); 
    vote_lepen_02423.push(vote_lepen);
    vote_rejet_02423.push(vote_rejet);
    vote_macronpop_02423.push(vote_macronMediane);
    vote_lepenpop_02423.push(vote_lepenMediane);
    vote_rejetpop_02423.push(vote_rejetMediane);
    name_Commune_02423.push(nameCommune);
    Pourcentage_02423.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02423.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02423.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02423.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02423.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02423 = [];
const vote_lepen_02423 = [];
const vote_rejet_02423 = [];
const vote_macronpop_02423 = [];
const vote_lepenpop_02423 = [];
const vote_rejetpop_02423 = [];
const name_Commune_02423 = [];
const Pourcentage_02423 = [];
const Pourcentage_rejet_02423 = [];
const vote_gene_macron_02423 = [];
const vote_gene_lepen_02423 = [];
const vote_gene_rejet_02423 = [];

async function chartIt02423(){
    await GraphDATA02423();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02423-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02423
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02423
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02423-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02423,vote_lepen_02423,vote_rejet_02423]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02423-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02423,vote_lepenpop_02423,vote_rejetpop_02423]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02423"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02423
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02423
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02423
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02424*/
/*------------------------------------------------------------------ */
async function GraphDATA02424() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[423];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02424.push(vote_macron); 
    vote_lepen_02424.push(vote_lepen);
    vote_rejet_02424.push(vote_rejet);
    vote_macronpop_02424.push(vote_macronMediane);
    vote_lepenpop_02424.push(vote_lepenMediane);
    vote_rejetpop_02424.push(vote_rejetMediane);
    name_Commune_02424.push(nameCommune);
    Pourcentage_02424.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02424.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02424.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02424.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02424.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02424 = [];
const vote_lepen_02424 = [];
const vote_rejet_02424 = [];
const vote_macronpop_02424 = [];
const vote_lepenpop_02424 = [];
const vote_rejetpop_02424 = [];
const name_Commune_02424 = [];
const Pourcentage_02424 = [];
const Pourcentage_rejet_02424 = [];
const vote_gene_macron_02424 = [];
const vote_gene_lepen_02424 = [];
const vote_gene_rejet_02424 = [];

async function chartIt02424(){
    await GraphDATA02424();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02424-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02424
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02424
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02424-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02424,vote_lepen_02424,vote_rejet_02424]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02424-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02424,vote_lepenpop_02424,vote_rejetpop_02424]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02424"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02424
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02424
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02424
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02425*/
/*------------------------------------------------------------------ */
async function GraphDATA02425() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[424];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02425.push(vote_macron); 
    vote_lepen_02425.push(vote_lepen);
    vote_rejet_02425.push(vote_rejet);
    vote_macronpop_02425.push(vote_macronMediane);
    vote_lepenpop_02425.push(vote_lepenMediane);
    vote_rejetpop_02425.push(vote_rejetMediane);
    name_Commune_02425.push(nameCommune);
    Pourcentage_02425.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02425.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02425.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02425.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02425.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02425 = [];
const vote_lepen_02425 = [];
const vote_rejet_02425 = [];
const vote_macronpop_02425 = [];
const vote_lepenpop_02425 = [];
const vote_rejetpop_02425 = [];
const name_Commune_02425 = [];
const Pourcentage_02425 = [];
const Pourcentage_rejet_02425 = [];
const vote_gene_macron_02425 = [];
const vote_gene_lepen_02425 = [];
const vote_gene_rejet_02425 = [];

async function chartIt02425(){
    await GraphDATA02425();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02425-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02425
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02425
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02425-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02425,vote_lepen_02425,vote_rejet_02425]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02425-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02425,vote_lepenpop_02425,vote_rejetpop_02425]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02425"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02425
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02425
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02425
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02426*/
/*------------------------------------------------------------------ */
async function GraphDATA02426() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[425];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02426.push(vote_macron); 
    vote_lepen_02426.push(vote_lepen);
    vote_rejet_02426.push(vote_rejet);
    vote_macronpop_02426.push(vote_macronMediane);
    vote_lepenpop_02426.push(vote_lepenMediane);
    vote_rejetpop_02426.push(vote_rejetMediane);
    name_Commune_02426.push(nameCommune);
    Pourcentage_02426.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02426.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02426.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02426.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02426.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02426 = [];
const vote_lepen_02426 = [];
const vote_rejet_02426 = [];
const vote_macronpop_02426 = [];
const vote_lepenpop_02426 = [];
const vote_rejetpop_02426 = [];
const name_Commune_02426 = [];
const Pourcentage_02426 = [];
const Pourcentage_rejet_02426 = [];
const vote_gene_macron_02426 = [];
const vote_gene_lepen_02426 = [];
const vote_gene_rejet_02426 = [];

async function chartIt02426(){
    await GraphDATA02426();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02426-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02426
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02426
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02426-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02426,vote_lepen_02426,vote_rejet_02426]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02426-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02426,vote_lepenpop_02426,vote_rejetpop_02426]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02426"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02426
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02426
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02426
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02427*/
/*------------------------------------------------------------------ */
async function GraphDATA02427() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[426];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02427.push(vote_macron); 
    vote_lepen_02427.push(vote_lepen);
    vote_rejet_02427.push(vote_rejet);
    vote_macronpop_02427.push(vote_macronMediane);
    vote_lepenpop_02427.push(vote_lepenMediane);
    vote_rejetpop_02427.push(vote_rejetMediane);
    name_Commune_02427.push(nameCommune);
    Pourcentage_02427.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02427.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02427.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02427.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02427.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02427 = [];
const vote_lepen_02427 = [];
const vote_rejet_02427 = [];
const vote_macronpop_02427 = [];
const vote_lepenpop_02427 = [];
const vote_rejetpop_02427 = [];
const name_Commune_02427 = [];
const Pourcentage_02427 = [];
const Pourcentage_rejet_02427 = [];
const vote_gene_macron_02427 = [];
const vote_gene_lepen_02427 = [];
const vote_gene_rejet_02427 = [];

async function chartIt02427(){
    await GraphDATA02427();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02427-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02427
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02427
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02427-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02427,vote_lepen_02427,vote_rejet_02427]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02427-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02427,vote_lepenpop_02427,vote_rejetpop_02427]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02427"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02427
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02427
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02427
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02428*/
/*------------------------------------------------------------------ */
async function GraphDATA02428() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[427];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02428.push(vote_macron); 
    vote_lepen_02428.push(vote_lepen);
    vote_rejet_02428.push(vote_rejet);
    vote_macronpop_02428.push(vote_macronMediane);
    vote_lepenpop_02428.push(vote_lepenMediane);
    vote_rejetpop_02428.push(vote_rejetMediane);
    name_Commune_02428.push(nameCommune);
    Pourcentage_02428.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02428.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02428.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02428.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02428.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02428 = [];
const vote_lepen_02428 = [];
const vote_rejet_02428 = [];
const vote_macronpop_02428 = [];
const vote_lepenpop_02428 = [];
const vote_rejetpop_02428 = [];
const name_Commune_02428 = [];
const Pourcentage_02428 = [];
const Pourcentage_rejet_02428 = [];
const vote_gene_macron_02428 = [];
const vote_gene_lepen_02428 = [];
const vote_gene_rejet_02428 = [];

async function chartIt02428(){
    await GraphDATA02428();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02428-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02428
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02428
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02428-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02428,vote_lepen_02428,vote_rejet_02428]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02428-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02428,vote_lepenpop_02428,vote_rejetpop_02428]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02428"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02428
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02428
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02428
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02429*/
/*------------------------------------------------------------------ */
async function GraphDATA02429() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[428];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02429.push(vote_macron); 
    vote_lepen_02429.push(vote_lepen);
    vote_rejet_02429.push(vote_rejet);
    vote_macronpop_02429.push(vote_macronMediane);
    vote_lepenpop_02429.push(vote_lepenMediane);
    vote_rejetpop_02429.push(vote_rejetMediane);
    name_Commune_02429.push(nameCommune);
    Pourcentage_02429.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02429.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02429.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02429.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02429.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02429 = [];
const vote_lepen_02429 = [];
const vote_rejet_02429 = [];
const vote_macronpop_02429 = [];
const vote_lepenpop_02429 = [];
const vote_rejetpop_02429 = [];
const name_Commune_02429 = [];
const Pourcentage_02429 = [];
const Pourcentage_rejet_02429 = [];
const vote_gene_macron_02429 = [];
const vote_gene_lepen_02429 = [];
const vote_gene_rejet_02429 = [];

async function chartIt02429(){
    await GraphDATA02429();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02429-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02429
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02429
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02429-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02429,vote_lepen_02429,vote_rejet_02429]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02429-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02429,vote_lepenpop_02429,vote_rejetpop_02429]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02429"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02429
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02429
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02429
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02430*/
/*------------------------------------------------------------------ */
async function GraphDATA02430() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[429];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02430.push(vote_macron); 
    vote_lepen_02430.push(vote_lepen);
    vote_rejet_02430.push(vote_rejet);
    vote_macronpop_02430.push(vote_macronMediane);
    vote_lepenpop_02430.push(vote_lepenMediane);
    vote_rejetpop_02430.push(vote_rejetMediane);
    name_Commune_02430.push(nameCommune);
    Pourcentage_02430.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02430.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02430.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02430.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02430.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02430 = [];
const vote_lepen_02430 = [];
const vote_rejet_02430 = [];
const vote_macronpop_02430 = [];
const vote_lepenpop_02430 = [];
const vote_rejetpop_02430 = [];
const name_Commune_02430 = [];
const Pourcentage_02430 = [];
const Pourcentage_rejet_02430 = [];
const vote_gene_macron_02430 = [];
const vote_gene_lepen_02430 = [];
const vote_gene_rejet_02430 = [];

async function chartIt02430(){
    await GraphDATA02430();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02430-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02430
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02430
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02430-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02430,vote_lepen_02430,vote_rejet_02430]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02430-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02430,vote_lepenpop_02430,vote_rejetpop_02430]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02430"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02430
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02430
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02430
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02431*/
/*------------------------------------------------------------------ */
async function GraphDATA02431() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[430];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02431.push(vote_macron); 
    vote_lepen_02431.push(vote_lepen);
    vote_rejet_02431.push(vote_rejet);
    vote_macronpop_02431.push(vote_macronMediane);
    vote_lepenpop_02431.push(vote_lepenMediane);
    vote_rejetpop_02431.push(vote_rejetMediane);
    name_Commune_02431.push(nameCommune);
    Pourcentage_02431.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02431.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02431.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02431.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02431.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02431 = [];
const vote_lepen_02431 = [];
const vote_rejet_02431 = [];
const vote_macronpop_02431 = [];
const vote_lepenpop_02431 = [];
const vote_rejetpop_02431 = [];
const name_Commune_02431 = [];
const Pourcentage_02431 = [];
const Pourcentage_rejet_02431 = [];
const vote_gene_macron_02431 = [];
const vote_gene_lepen_02431 = [];
const vote_gene_rejet_02431 = [];

async function chartIt02431(){
    await GraphDATA02431();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02431-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02431
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02431
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02431-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02431,vote_lepen_02431,vote_rejet_02431]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02431-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02431,vote_lepenpop_02431,vote_rejetpop_02431]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02431"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02431
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02431
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02431
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02432*/
/*------------------------------------------------------------------ */
async function GraphDATA02432() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[431];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02432.push(vote_macron); 
    vote_lepen_02432.push(vote_lepen);
    vote_rejet_02432.push(vote_rejet);
    vote_macronpop_02432.push(vote_macronMediane);
    vote_lepenpop_02432.push(vote_lepenMediane);
    vote_rejetpop_02432.push(vote_rejetMediane);
    name_Commune_02432.push(nameCommune);
    Pourcentage_02432.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02432.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02432.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02432.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02432.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02432 = [];
const vote_lepen_02432 = [];
const vote_rejet_02432 = [];
const vote_macronpop_02432 = [];
const vote_lepenpop_02432 = [];
const vote_rejetpop_02432 = [];
const name_Commune_02432 = [];
const Pourcentage_02432 = [];
const Pourcentage_rejet_02432 = [];
const vote_gene_macron_02432 = [];
const vote_gene_lepen_02432 = [];
const vote_gene_rejet_02432 = [];

async function chartIt02432(){
    await GraphDATA02432();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02432-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02432
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02432
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02432-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02432,vote_lepen_02432,vote_rejet_02432]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02432-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02432,vote_lepenpop_02432,vote_rejetpop_02432]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02432"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02432
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02432
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02432
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02433*/
/*------------------------------------------------------------------ */
async function GraphDATA02433() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[432];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02433.push(vote_macron); 
    vote_lepen_02433.push(vote_lepen);
    vote_rejet_02433.push(vote_rejet);
    vote_macronpop_02433.push(vote_macronMediane);
    vote_lepenpop_02433.push(vote_lepenMediane);
    vote_rejetpop_02433.push(vote_rejetMediane);
    name_Commune_02433.push(nameCommune);
    Pourcentage_02433.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02433.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02433.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02433.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02433.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02433 = [];
const vote_lepen_02433 = [];
const vote_rejet_02433 = [];
const vote_macronpop_02433 = [];
const vote_lepenpop_02433 = [];
const vote_rejetpop_02433 = [];
const name_Commune_02433 = [];
const Pourcentage_02433 = [];
const Pourcentage_rejet_02433 = [];
const vote_gene_macron_02433 = [];
const vote_gene_lepen_02433 = [];
const vote_gene_rejet_02433 = [];

async function chartIt02433(){
    await GraphDATA02433();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02433-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02433
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02433
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02433-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02433,vote_lepen_02433,vote_rejet_02433]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02433-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02433,vote_lepenpop_02433,vote_rejetpop_02433]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02433"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02433
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02433
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02433
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02434*/
/*------------------------------------------------------------------ */
async function GraphDATA02434() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[433];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02434.push(vote_macron); 
    vote_lepen_02434.push(vote_lepen);
    vote_rejet_02434.push(vote_rejet);
    vote_macronpop_02434.push(vote_macronMediane);
    vote_lepenpop_02434.push(vote_lepenMediane);
    vote_rejetpop_02434.push(vote_rejetMediane);
    name_Commune_02434.push(nameCommune);
    Pourcentage_02434.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02434.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02434.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02434.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02434.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02434 = [];
const vote_lepen_02434 = [];
const vote_rejet_02434 = [];
const vote_macronpop_02434 = [];
const vote_lepenpop_02434 = [];
const vote_rejetpop_02434 = [];
const name_Commune_02434 = [];
const Pourcentage_02434 = [];
const Pourcentage_rejet_02434 = [];
const vote_gene_macron_02434 = [];
const vote_gene_lepen_02434 = [];
const vote_gene_rejet_02434 = [];

async function chartIt02434(){
    await GraphDATA02434();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02434-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02434
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02434
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02434-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02434,vote_lepen_02434,vote_rejet_02434]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02434-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02434,vote_lepenpop_02434,vote_rejetpop_02434]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02434"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02434
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02434
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02434
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02435*/
/*------------------------------------------------------------------ */
async function GraphDATA02435() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[434];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02435.push(vote_macron); 
    vote_lepen_02435.push(vote_lepen);
    vote_rejet_02435.push(vote_rejet);
    vote_macronpop_02435.push(vote_macronMediane);
    vote_lepenpop_02435.push(vote_lepenMediane);
    vote_rejetpop_02435.push(vote_rejetMediane);
    name_Commune_02435.push(nameCommune);
    Pourcentage_02435.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02435.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02435.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02435.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02435.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02435 = [];
const vote_lepen_02435 = [];
const vote_rejet_02435 = [];
const vote_macronpop_02435 = [];
const vote_lepenpop_02435 = [];
const vote_rejetpop_02435 = [];
const name_Commune_02435 = [];
const Pourcentage_02435 = [];
const Pourcentage_rejet_02435 = [];
const vote_gene_macron_02435 = [];
const vote_gene_lepen_02435 = [];
const vote_gene_rejet_02435 = [];

async function chartIt02435(){
    await GraphDATA02435();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02435-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02435
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02435
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02435-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02435,vote_lepen_02435,vote_rejet_02435]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02435-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02435,vote_lepenpop_02435,vote_rejetpop_02435]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02435"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02435
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02435
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02435
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02436*/
/*------------------------------------------------------------------ */
async function GraphDATA02436() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[435];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02436.push(vote_macron); 
    vote_lepen_02436.push(vote_lepen);
    vote_rejet_02436.push(vote_rejet);
    vote_macronpop_02436.push(vote_macronMediane);
    vote_lepenpop_02436.push(vote_lepenMediane);
    vote_rejetpop_02436.push(vote_rejetMediane);
    name_Commune_02436.push(nameCommune);
    Pourcentage_02436.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02436.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02436.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02436.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02436.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02436 = [];
const vote_lepen_02436 = [];
const vote_rejet_02436 = [];
const vote_macronpop_02436 = [];
const vote_lepenpop_02436 = [];
const vote_rejetpop_02436 = [];
const name_Commune_02436 = [];
const Pourcentage_02436 = [];
const Pourcentage_rejet_02436 = [];
const vote_gene_macron_02436 = [];
const vote_gene_lepen_02436 = [];
const vote_gene_rejet_02436 = [];

async function chartIt02436(){
    await GraphDATA02436();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02436-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02436
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02436
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02436-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02436,vote_lepen_02436,vote_rejet_02436]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02436-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02436,vote_lepenpop_02436,vote_rejetpop_02436]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02436"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02436
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02436
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02436
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02437*/
/*------------------------------------------------------------------ */
async function GraphDATA02437() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[436];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02437.push(vote_macron); 
    vote_lepen_02437.push(vote_lepen);
    vote_rejet_02437.push(vote_rejet);
    vote_macronpop_02437.push(vote_macronMediane);
    vote_lepenpop_02437.push(vote_lepenMediane);
    vote_rejetpop_02437.push(vote_rejetMediane);
    name_Commune_02437.push(nameCommune);
    Pourcentage_02437.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02437.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02437.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02437.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02437.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02437 = [];
const vote_lepen_02437 = [];
const vote_rejet_02437 = [];
const vote_macronpop_02437 = [];
const vote_lepenpop_02437 = [];
const vote_rejetpop_02437 = [];
const name_Commune_02437 = [];
const Pourcentage_02437 = [];
const Pourcentage_rejet_02437 = [];
const vote_gene_macron_02437 = [];
const vote_gene_lepen_02437 = [];
const vote_gene_rejet_02437 = [];

async function chartIt02437(){
    await GraphDATA02437();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02437-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02437
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02437
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02437-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02437,vote_lepen_02437,vote_rejet_02437]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02437-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02437,vote_lepenpop_02437,vote_rejetpop_02437]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02437"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02437
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02437
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02437
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02438*/
/*------------------------------------------------------------------ */
async function GraphDATA02438() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[437];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02438.push(vote_macron); 
    vote_lepen_02438.push(vote_lepen);
    vote_rejet_02438.push(vote_rejet);
    vote_macronpop_02438.push(vote_macronMediane);
    vote_lepenpop_02438.push(vote_lepenMediane);
    vote_rejetpop_02438.push(vote_rejetMediane);
    name_Commune_02438.push(nameCommune);
    Pourcentage_02438.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02438.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02438.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02438.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02438.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02438 = [];
const vote_lepen_02438 = [];
const vote_rejet_02438 = [];
const vote_macronpop_02438 = [];
const vote_lepenpop_02438 = [];
const vote_rejetpop_02438 = [];
const name_Commune_02438 = [];
const Pourcentage_02438 = [];
const Pourcentage_rejet_02438 = [];
const vote_gene_macron_02438 = [];
const vote_gene_lepen_02438 = [];
const vote_gene_rejet_02438 = [];

async function chartIt02438(){
    await GraphDATA02438();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02438-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02438
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02438
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02438-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02438,vote_lepen_02438,vote_rejet_02438]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02438-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02438,vote_lepenpop_02438,vote_rejetpop_02438]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02438"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02438
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02438
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02438
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02439*/
/*------------------------------------------------------------------ */
async function GraphDATA02439() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[438];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02439.push(vote_macron); 
    vote_lepen_02439.push(vote_lepen);
    vote_rejet_02439.push(vote_rejet);
    vote_macronpop_02439.push(vote_macronMediane);
    vote_lepenpop_02439.push(vote_lepenMediane);
    vote_rejetpop_02439.push(vote_rejetMediane);
    name_Commune_02439.push(nameCommune);
    Pourcentage_02439.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02439.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02439.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02439.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02439.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02439 = [];
const vote_lepen_02439 = [];
const vote_rejet_02439 = [];
const vote_macronpop_02439 = [];
const vote_lepenpop_02439 = [];
const vote_rejetpop_02439 = [];
const name_Commune_02439 = [];
const Pourcentage_02439 = [];
const Pourcentage_rejet_02439 = [];
const vote_gene_macron_02439 = [];
const vote_gene_lepen_02439 = [];
const vote_gene_rejet_02439 = [];

async function chartIt02439(){
    await GraphDATA02439();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02439-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02439
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02439
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02439-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02439,vote_lepen_02439,vote_rejet_02439]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02439-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02439,vote_lepenpop_02439,vote_rejetpop_02439]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02439"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02439
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02439
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02439
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02440*/
/*------------------------------------------------------------------ */
async function GraphDATA02440() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[439];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02440.push(vote_macron); 
    vote_lepen_02440.push(vote_lepen);
    vote_rejet_02440.push(vote_rejet);
    vote_macronpop_02440.push(vote_macronMediane);
    vote_lepenpop_02440.push(vote_lepenMediane);
    vote_rejetpop_02440.push(vote_rejetMediane);
    name_Commune_02440.push(nameCommune);
    Pourcentage_02440.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02440.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02440.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02440.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02440.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02440 = [];
const vote_lepen_02440 = [];
const vote_rejet_02440 = [];
const vote_macronpop_02440 = [];
const vote_lepenpop_02440 = [];
const vote_rejetpop_02440 = [];
const name_Commune_02440 = [];
const Pourcentage_02440 = [];
const Pourcentage_rejet_02440 = [];
const vote_gene_macron_02440 = [];
const vote_gene_lepen_02440 = [];
const vote_gene_rejet_02440 = [];

async function chartIt02440(){
    await GraphDATA02440();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02440-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02440
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02440
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02440-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02440,vote_lepen_02440,vote_rejet_02440]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02440-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02440,vote_lepenpop_02440,vote_rejetpop_02440]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02440"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02440
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02440
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02440
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02441*/
/*------------------------------------------------------------------ */
async function GraphDATA02441() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[440];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02441.push(vote_macron); 
    vote_lepen_02441.push(vote_lepen);
    vote_rejet_02441.push(vote_rejet);
    vote_macronpop_02441.push(vote_macronMediane);
    vote_lepenpop_02441.push(vote_lepenMediane);
    vote_rejetpop_02441.push(vote_rejetMediane);
    name_Commune_02441.push(nameCommune);
    Pourcentage_02441.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02441.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02441.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02441.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02441.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02441 = [];
const vote_lepen_02441 = [];
const vote_rejet_02441 = [];
const vote_macronpop_02441 = [];
const vote_lepenpop_02441 = [];
const vote_rejetpop_02441 = [];
const name_Commune_02441 = [];
const Pourcentage_02441 = [];
const Pourcentage_rejet_02441 = [];
const vote_gene_macron_02441 = [];
const vote_gene_lepen_02441 = [];
const vote_gene_rejet_02441 = [];

async function chartIt02441(){
    await GraphDATA02441();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02441-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02441
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02441
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02441-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02441,vote_lepen_02441,vote_rejet_02441]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02441-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02441,vote_lepenpop_02441,vote_rejetpop_02441]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02441"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02441
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02441
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02441
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02442*/
/*------------------------------------------------------------------ */
async function GraphDATA02442() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[441];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02442.push(vote_macron); 
    vote_lepen_02442.push(vote_lepen);
    vote_rejet_02442.push(vote_rejet);
    vote_macronpop_02442.push(vote_macronMediane);
    vote_lepenpop_02442.push(vote_lepenMediane);
    vote_rejetpop_02442.push(vote_rejetMediane);
    name_Commune_02442.push(nameCommune);
    Pourcentage_02442.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02442.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02442.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02442.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02442.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02442 = [];
const vote_lepen_02442 = [];
const vote_rejet_02442 = [];
const vote_macronpop_02442 = [];
const vote_lepenpop_02442 = [];
const vote_rejetpop_02442 = [];
const name_Commune_02442 = [];
const Pourcentage_02442 = [];
const Pourcentage_rejet_02442 = [];
const vote_gene_macron_02442 = [];
const vote_gene_lepen_02442 = [];
const vote_gene_rejet_02442 = [];

async function chartIt02442(){
    await GraphDATA02442();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02442-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02442
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02442
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02442-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02442,vote_lepen_02442,vote_rejet_02442]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02442-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02442,vote_lepenpop_02442,vote_rejetpop_02442]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02442"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02442
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02442
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02442
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02443*/
/*------------------------------------------------------------------ */
async function GraphDATA02443() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[442];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02443.push(vote_macron); 
    vote_lepen_02443.push(vote_lepen);
    vote_rejet_02443.push(vote_rejet);
    vote_macronpop_02443.push(vote_macronMediane);
    vote_lepenpop_02443.push(vote_lepenMediane);
    vote_rejetpop_02443.push(vote_rejetMediane);
    name_Commune_02443.push(nameCommune);
    Pourcentage_02443.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02443.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02443.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02443.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02443.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02443 = [];
const vote_lepen_02443 = [];
const vote_rejet_02443 = [];
const vote_macronpop_02443 = [];
const vote_lepenpop_02443 = [];
const vote_rejetpop_02443 = [];
const name_Commune_02443 = [];
const Pourcentage_02443 = [];
const Pourcentage_rejet_02443 = [];
const vote_gene_macron_02443 = [];
const vote_gene_lepen_02443 = [];
const vote_gene_rejet_02443 = [];

async function chartIt02443(){
    await GraphDATA02443();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02443-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02443
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02443
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02443-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02443,vote_lepen_02443,vote_rejet_02443]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02443-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02443,vote_lepenpop_02443,vote_rejetpop_02443]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02443"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02443
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02443
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02443
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02444*/
/*------------------------------------------------------------------ */
async function GraphDATA02444() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[443];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02444.push(vote_macron); 
    vote_lepen_02444.push(vote_lepen);
    vote_rejet_02444.push(vote_rejet);
    vote_macronpop_02444.push(vote_macronMediane);
    vote_lepenpop_02444.push(vote_lepenMediane);
    vote_rejetpop_02444.push(vote_rejetMediane);
    name_Commune_02444.push(nameCommune);
    Pourcentage_02444.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02444.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02444.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02444.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02444.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02444 = [];
const vote_lepen_02444 = [];
const vote_rejet_02444 = [];
const vote_macronpop_02444 = [];
const vote_lepenpop_02444 = [];
const vote_rejetpop_02444 = [];
const name_Commune_02444 = [];
const Pourcentage_02444 = [];
const Pourcentage_rejet_02444 = [];
const vote_gene_macron_02444 = [];
const vote_gene_lepen_02444 = [];
const vote_gene_rejet_02444 = [];

async function chartIt02444(){
    await GraphDATA02444();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02444-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02444
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02444
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02444-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02444,vote_lepen_02444,vote_rejet_02444]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02444-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02444,vote_lepenpop_02444,vote_rejetpop_02444]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02444"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02444
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02444
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02444
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02445*/
/*------------------------------------------------------------------ */
async function GraphDATA02445() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[444];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02445.push(vote_macron); 
    vote_lepen_02445.push(vote_lepen);
    vote_rejet_02445.push(vote_rejet);
    vote_macronpop_02445.push(vote_macronMediane);
    vote_lepenpop_02445.push(vote_lepenMediane);
    vote_rejetpop_02445.push(vote_rejetMediane);
    name_Commune_02445.push(nameCommune);
    Pourcentage_02445.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02445.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02445.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02445.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02445.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02445 = [];
const vote_lepen_02445 = [];
const vote_rejet_02445 = [];
const vote_macronpop_02445 = [];
const vote_lepenpop_02445 = [];
const vote_rejetpop_02445 = [];
const name_Commune_02445 = [];
const Pourcentage_02445 = [];
const Pourcentage_rejet_02445 = [];
const vote_gene_macron_02445 = [];
const vote_gene_lepen_02445 = [];
const vote_gene_rejet_02445 = [];

async function chartIt02445(){
    await GraphDATA02445();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02445-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02445
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02445
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02445-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02445,vote_lepen_02445,vote_rejet_02445]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02445-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02445,vote_lepenpop_02445,vote_rejetpop_02445]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02445"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02445
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02445
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02445
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02446*/
/*------------------------------------------------------------------ */
async function GraphDATA02446() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[445];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02446.push(vote_macron); 
    vote_lepen_02446.push(vote_lepen);
    vote_rejet_02446.push(vote_rejet);
    vote_macronpop_02446.push(vote_macronMediane);
    vote_lepenpop_02446.push(vote_lepenMediane);
    vote_rejetpop_02446.push(vote_rejetMediane);
    name_Commune_02446.push(nameCommune);
    Pourcentage_02446.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02446.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02446.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02446.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02446.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02446 = [];
const vote_lepen_02446 = [];
const vote_rejet_02446 = [];
const vote_macronpop_02446 = [];
const vote_lepenpop_02446 = [];
const vote_rejetpop_02446 = [];
const name_Commune_02446 = [];
const Pourcentage_02446 = [];
const Pourcentage_rejet_02446 = [];
const vote_gene_macron_02446 = [];
const vote_gene_lepen_02446 = [];
const vote_gene_rejet_02446 = [];

async function chartIt02446(){
    await GraphDATA02446();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02446-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02446
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02446
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02446-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02446,vote_lepen_02446,vote_rejet_02446]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02446-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02446,vote_lepenpop_02446,vote_rejetpop_02446]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02446"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02446
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02446
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02446
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02447*/
/*------------------------------------------------------------------ */
async function GraphDATA02447() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[446];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02447.push(vote_macron); 
    vote_lepen_02447.push(vote_lepen);
    vote_rejet_02447.push(vote_rejet);
    vote_macronpop_02447.push(vote_macronMediane);
    vote_lepenpop_02447.push(vote_lepenMediane);
    vote_rejetpop_02447.push(vote_rejetMediane);
    name_Commune_02447.push(nameCommune);
    Pourcentage_02447.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02447.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02447.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02447.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02447.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02447 = [];
const vote_lepen_02447 = [];
const vote_rejet_02447 = [];
const vote_macronpop_02447 = [];
const vote_lepenpop_02447 = [];
const vote_rejetpop_02447 = [];
const name_Commune_02447 = [];
const Pourcentage_02447 = [];
const Pourcentage_rejet_02447 = [];
const vote_gene_macron_02447 = [];
const vote_gene_lepen_02447 = [];
const vote_gene_rejet_02447 = [];

async function chartIt02447(){
    await GraphDATA02447();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02447-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02447
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02447
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02447-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02447,vote_lepen_02447,vote_rejet_02447]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02447-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02447,vote_lepenpop_02447,vote_rejetpop_02447]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02447"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02447
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02447
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02447
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02448*/
/*------------------------------------------------------------------ */
async function GraphDATA02448() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[447];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02448.push(vote_macron); 
    vote_lepen_02448.push(vote_lepen);
    vote_rejet_02448.push(vote_rejet);
    vote_macronpop_02448.push(vote_macronMediane);
    vote_lepenpop_02448.push(vote_lepenMediane);
    vote_rejetpop_02448.push(vote_rejetMediane);
    name_Commune_02448.push(nameCommune);
    Pourcentage_02448.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02448.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02448.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02448.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02448.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02448 = [];
const vote_lepen_02448 = [];
const vote_rejet_02448 = [];
const vote_macronpop_02448 = [];
const vote_lepenpop_02448 = [];
const vote_rejetpop_02448 = [];
const name_Commune_02448 = [];
const Pourcentage_02448 = [];
const Pourcentage_rejet_02448 = [];
const vote_gene_macron_02448 = [];
const vote_gene_lepen_02448 = [];
const vote_gene_rejet_02448 = [];

async function chartIt02448(){
    await GraphDATA02448();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02448-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02448
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02448
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02448-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02448,vote_lepen_02448,vote_rejet_02448]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02448-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02448,vote_lepenpop_02448,vote_rejetpop_02448]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02448"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02448
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02448
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02448
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02449*/
/*------------------------------------------------------------------ */
async function GraphDATA02449() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[448];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02449.push(vote_macron); 
    vote_lepen_02449.push(vote_lepen);
    vote_rejet_02449.push(vote_rejet);
    vote_macronpop_02449.push(vote_macronMediane);
    vote_lepenpop_02449.push(vote_lepenMediane);
    vote_rejetpop_02449.push(vote_rejetMediane);
    name_Commune_02449.push(nameCommune);
    Pourcentage_02449.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02449.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02449.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02449.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02449.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02449 = [];
const vote_lepen_02449 = [];
const vote_rejet_02449 = [];
const vote_macronpop_02449 = [];
const vote_lepenpop_02449 = [];
const vote_rejetpop_02449 = [];
const name_Commune_02449 = [];
const Pourcentage_02449 = [];
const Pourcentage_rejet_02449 = [];
const vote_gene_macron_02449 = [];
const vote_gene_lepen_02449 = [];
const vote_gene_rejet_02449 = [];

async function chartIt02449(){
    await GraphDATA02449();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02449-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02449
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02449
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02449-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02449,vote_lepen_02449,vote_rejet_02449]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02449-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02449,vote_lepenpop_02449,vote_rejetpop_02449]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02449"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02449
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02449
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02449
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02450*/
/*------------------------------------------------------------------ */
async function GraphDATA02450() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[449];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02450.push(vote_macron); 
    vote_lepen_02450.push(vote_lepen);
    vote_rejet_02450.push(vote_rejet);
    vote_macronpop_02450.push(vote_macronMediane);
    vote_lepenpop_02450.push(vote_lepenMediane);
    vote_rejetpop_02450.push(vote_rejetMediane);
    name_Commune_02450.push(nameCommune);
    Pourcentage_02450.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02450.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02450.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02450.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02450.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02450 = [];
const vote_lepen_02450 = [];
const vote_rejet_02450 = [];
const vote_macronpop_02450 = [];
const vote_lepenpop_02450 = [];
const vote_rejetpop_02450 = [];
const name_Commune_02450 = [];
const Pourcentage_02450 = [];
const Pourcentage_rejet_02450 = [];
const vote_gene_macron_02450 = [];
const vote_gene_lepen_02450 = [];
const vote_gene_rejet_02450 = [];

async function chartIt02450(){
    await GraphDATA02450();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02450-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02450
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02450
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02450-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02450,vote_lepen_02450,vote_rejet_02450]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02450-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02450,vote_lepenpop_02450,vote_rejetpop_02450]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02450"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02450
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02450
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02450
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02451*/
/*------------------------------------------------------------------ */
async function GraphDATA02451() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[450];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02451.push(vote_macron); 
    vote_lepen_02451.push(vote_lepen);
    vote_rejet_02451.push(vote_rejet);
    vote_macronpop_02451.push(vote_macronMediane);
    vote_lepenpop_02451.push(vote_lepenMediane);
    vote_rejetpop_02451.push(vote_rejetMediane);
    name_Commune_02451.push(nameCommune);
    Pourcentage_02451.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02451.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02451.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02451.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02451.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02451 = [];
const vote_lepen_02451 = [];
const vote_rejet_02451 = [];
const vote_macronpop_02451 = [];
const vote_lepenpop_02451 = [];
const vote_rejetpop_02451 = [];
const name_Commune_02451 = [];
const Pourcentage_02451 = [];
const Pourcentage_rejet_02451 = [];
const vote_gene_macron_02451 = [];
const vote_gene_lepen_02451 = [];
const vote_gene_rejet_02451 = [];

async function chartIt02451(){
    await GraphDATA02451();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02451-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02451
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02451
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02451-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02451,vote_lepen_02451,vote_rejet_02451]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02451-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02451,vote_lepenpop_02451,vote_rejetpop_02451]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02451"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02451
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02451
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02451
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02452*/
/*------------------------------------------------------------------ */
async function GraphDATA02452() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[451];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02452.push(vote_macron); 
    vote_lepen_02452.push(vote_lepen);
    vote_rejet_02452.push(vote_rejet);
    vote_macronpop_02452.push(vote_macronMediane);
    vote_lepenpop_02452.push(vote_lepenMediane);
    vote_rejetpop_02452.push(vote_rejetMediane);
    name_Commune_02452.push(nameCommune);
    Pourcentage_02452.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02452.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02452.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02452.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02452.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02452 = [];
const vote_lepen_02452 = [];
const vote_rejet_02452 = [];
const vote_macronpop_02452 = [];
const vote_lepenpop_02452 = [];
const vote_rejetpop_02452 = [];
const name_Commune_02452 = [];
const Pourcentage_02452 = [];
const Pourcentage_rejet_02452 = [];
const vote_gene_macron_02452 = [];
const vote_gene_lepen_02452 = [];
const vote_gene_rejet_02452 = [];

async function chartIt02452(){
    await GraphDATA02452();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02452-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02452
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02452
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02452-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02452,vote_lepen_02452,vote_rejet_02452]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02452-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02452,vote_lepenpop_02452,vote_rejetpop_02452]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02452"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02452
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02452
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02452
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02453*/
/*------------------------------------------------------------------ */
async function GraphDATA02453() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[452];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02453.push(vote_macron); 
    vote_lepen_02453.push(vote_lepen);
    vote_rejet_02453.push(vote_rejet);
    vote_macronpop_02453.push(vote_macronMediane);
    vote_lepenpop_02453.push(vote_lepenMediane);
    vote_rejetpop_02453.push(vote_rejetMediane);
    name_Commune_02453.push(nameCommune);
    Pourcentage_02453.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02453.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02453.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02453.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02453.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02453 = [];
const vote_lepen_02453 = [];
const vote_rejet_02453 = [];
const vote_macronpop_02453 = [];
const vote_lepenpop_02453 = [];
const vote_rejetpop_02453 = [];
const name_Commune_02453 = [];
const Pourcentage_02453 = [];
const Pourcentage_rejet_02453 = [];
const vote_gene_macron_02453 = [];
const vote_gene_lepen_02453 = [];
const vote_gene_rejet_02453 = [];

async function chartIt02453(){
    await GraphDATA02453();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02453-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02453
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02453
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02453-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02453,vote_lepen_02453,vote_rejet_02453]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02453-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02453,vote_lepenpop_02453,vote_rejetpop_02453]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02453"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02453
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02453
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02453
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02454*/
/*------------------------------------------------------------------ */
async function GraphDATA02454() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[453];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02454.push(vote_macron); 
    vote_lepen_02454.push(vote_lepen);
    vote_rejet_02454.push(vote_rejet);
    vote_macronpop_02454.push(vote_macronMediane);
    vote_lepenpop_02454.push(vote_lepenMediane);
    vote_rejetpop_02454.push(vote_rejetMediane);
    name_Commune_02454.push(nameCommune);
    Pourcentage_02454.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02454.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02454.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02454.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02454.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02454 = [];
const vote_lepen_02454 = [];
const vote_rejet_02454 = [];
const vote_macronpop_02454 = [];
const vote_lepenpop_02454 = [];
const vote_rejetpop_02454 = [];
const name_Commune_02454 = [];
const Pourcentage_02454 = [];
const Pourcentage_rejet_02454 = [];
const vote_gene_macron_02454 = [];
const vote_gene_lepen_02454 = [];
const vote_gene_rejet_02454 = [];

async function chartIt02454(){
    await GraphDATA02454();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02454-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02454
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02454
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02454-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02454,vote_lepen_02454,vote_rejet_02454]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02454-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02454,vote_lepenpop_02454,vote_rejetpop_02454]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02454"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02454
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02454
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02454
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02455*/
/*------------------------------------------------------------------ */
async function GraphDATA02455() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[454];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02455.push(vote_macron); 
    vote_lepen_02455.push(vote_lepen);
    vote_rejet_02455.push(vote_rejet);
    vote_macronpop_02455.push(vote_macronMediane);
    vote_lepenpop_02455.push(vote_lepenMediane);
    vote_rejetpop_02455.push(vote_rejetMediane);
    name_Commune_02455.push(nameCommune);
    Pourcentage_02455.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02455.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02455.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02455.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02455.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02455 = [];
const vote_lepen_02455 = [];
const vote_rejet_02455 = [];
const vote_macronpop_02455 = [];
const vote_lepenpop_02455 = [];
const vote_rejetpop_02455 = [];
const name_Commune_02455 = [];
const Pourcentage_02455 = [];
const Pourcentage_rejet_02455 = [];
const vote_gene_macron_02455 = [];
const vote_gene_lepen_02455 = [];
const vote_gene_rejet_02455 = [];

async function chartIt02455(){
    await GraphDATA02455();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02455-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02455
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02455
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02455-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02455,vote_lepen_02455,vote_rejet_02455]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02455-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02455,vote_lepenpop_02455,vote_rejetpop_02455]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02455"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02455
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02455
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02455
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02456*/
/*------------------------------------------------------------------ */
async function GraphDATA02456() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[455];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02456.push(vote_macron); 
    vote_lepen_02456.push(vote_lepen);
    vote_rejet_02456.push(vote_rejet);
    vote_macronpop_02456.push(vote_macronMediane);
    vote_lepenpop_02456.push(vote_lepenMediane);
    vote_rejetpop_02456.push(vote_rejetMediane);
    name_Commune_02456.push(nameCommune);
    Pourcentage_02456.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02456.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02456.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02456.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02456.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02456 = [];
const vote_lepen_02456 = [];
const vote_rejet_02456 = [];
const vote_macronpop_02456 = [];
const vote_lepenpop_02456 = [];
const vote_rejetpop_02456 = [];
const name_Commune_02456 = [];
const Pourcentage_02456 = [];
const Pourcentage_rejet_02456 = [];
const vote_gene_macron_02456 = [];
const vote_gene_lepen_02456 = [];
const vote_gene_rejet_02456 = [];

async function chartIt02456(){
    await GraphDATA02456();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02456-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02456
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02456
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02456-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02456,vote_lepen_02456,vote_rejet_02456]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02456-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02456,vote_lepenpop_02456,vote_rejetpop_02456]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02456"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02456
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02456
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02456
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02457*/
/*------------------------------------------------------------------ */
async function GraphDATA02457() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[456];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02457.push(vote_macron); 
    vote_lepen_02457.push(vote_lepen);
    vote_rejet_02457.push(vote_rejet);
    vote_macronpop_02457.push(vote_macronMediane);
    vote_lepenpop_02457.push(vote_lepenMediane);
    vote_rejetpop_02457.push(vote_rejetMediane);
    name_Commune_02457.push(nameCommune);
    Pourcentage_02457.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02457.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02457.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02457.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02457.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02457 = [];
const vote_lepen_02457 = [];
const vote_rejet_02457 = [];
const vote_macronpop_02457 = [];
const vote_lepenpop_02457 = [];
const vote_rejetpop_02457 = [];
const name_Commune_02457 = [];
const Pourcentage_02457 = [];
const Pourcentage_rejet_02457 = [];
const vote_gene_macron_02457 = [];
const vote_gene_lepen_02457 = [];
const vote_gene_rejet_02457 = [];

async function chartIt02457(){
    await GraphDATA02457();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02457-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02457
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02457
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02457-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02457,vote_lepen_02457,vote_rejet_02457]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02457-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02457,vote_lepenpop_02457,vote_rejetpop_02457]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02457"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02457
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02457
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02457
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02458*/
/*------------------------------------------------------------------ */
async function GraphDATA02458() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[457];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02458.push(vote_macron); 
    vote_lepen_02458.push(vote_lepen);
    vote_rejet_02458.push(vote_rejet);
    vote_macronpop_02458.push(vote_macronMediane);
    vote_lepenpop_02458.push(vote_lepenMediane);
    vote_rejetpop_02458.push(vote_rejetMediane);
    name_Commune_02458.push(nameCommune);
    Pourcentage_02458.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02458.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02458.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02458.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02458.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02458 = [];
const vote_lepen_02458 = [];
const vote_rejet_02458 = [];
const vote_macronpop_02458 = [];
const vote_lepenpop_02458 = [];
const vote_rejetpop_02458 = [];
const name_Commune_02458 = [];
const Pourcentage_02458 = [];
const Pourcentage_rejet_02458 = [];
const vote_gene_macron_02458 = [];
const vote_gene_lepen_02458 = [];
const vote_gene_rejet_02458 = [];

async function chartIt02458(){
    await GraphDATA02458();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02458-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02458
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02458
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02458-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02458,vote_lepen_02458,vote_rejet_02458]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02458-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02458,vote_lepenpop_02458,vote_rejetpop_02458]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02458"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02458
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02458
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02458
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02459*/
/*------------------------------------------------------------------ */
async function GraphDATA02459() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[458];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02459.push(vote_macron); 
    vote_lepen_02459.push(vote_lepen);
    vote_rejet_02459.push(vote_rejet);
    vote_macronpop_02459.push(vote_macronMediane);
    vote_lepenpop_02459.push(vote_lepenMediane);
    vote_rejetpop_02459.push(vote_rejetMediane);
    name_Commune_02459.push(nameCommune);
    Pourcentage_02459.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02459.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02459.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02459.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02459.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02459 = [];
const vote_lepen_02459 = [];
const vote_rejet_02459 = [];
const vote_macronpop_02459 = [];
const vote_lepenpop_02459 = [];
const vote_rejetpop_02459 = [];
const name_Commune_02459 = [];
const Pourcentage_02459 = [];
const Pourcentage_rejet_02459 = [];
const vote_gene_macron_02459 = [];
const vote_gene_lepen_02459 = [];
const vote_gene_rejet_02459 = [];

async function chartIt02459(){
    await GraphDATA02459();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02459-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02459
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02459
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02459-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02459,vote_lepen_02459,vote_rejet_02459]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02459-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02459,vote_lepenpop_02459,vote_rejetpop_02459]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02459"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02459
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02459
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02459
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02460*/
/*------------------------------------------------------------------ */
async function GraphDATA02460() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[459];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02460.push(vote_macron); 
    vote_lepen_02460.push(vote_lepen);
    vote_rejet_02460.push(vote_rejet);
    vote_macronpop_02460.push(vote_macronMediane);
    vote_lepenpop_02460.push(vote_lepenMediane);
    vote_rejetpop_02460.push(vote_rejetMediane);
    name_Commune_02460.push(nameCommune);
    Pourcentage_02460.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02460.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02460.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02460.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02460.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02460 = [];
const vote_lepen_02460 = [];
const vote_rejet_02460 = [];
const vote_macronpop_02460 = [];
const vote_lepenpop_02460 = [];
const vote_rejetpop_02460 = [];
const name_Commune_02460 = [];
const Pourcentage_02460 = [];
const Pourcentage_rejet_02460 = [];
const vote_gene_macron_02460 = [];
const vote_gene_lepen_02460 = [];
const vote_gene_rejet_02460 = [];

async function chartIt02460(){
    await GraphDATA02460();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02460-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02460
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02460
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02460-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02460,vote_lepen_02460,vote_rejet_02460]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02460-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02460,vote_lepenpop_02460,vote_rejetpop_02460]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02460"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02460
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02460
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02460
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02461*/
/*------------------------------------------------------------------ */
async function GraphDATA02461() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[460];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02461.push(vote_macron); 
    vote_lepen_02461.push(vote_lepen);
    vote_rejet_02461.push(vote_rejet);
    vote_macronpop_02461.push(vote_macronMediane);
    vote_lepenpop_02461.push(vote_lepenMediane);
    vote_rejetpop_02461.push(vote_rejetMediane);
    name_Commune_02461.push(nameCommune);
    Pourcentage_02461.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02461.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02461.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02461.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02461.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02461 = [];
const vote_lepen_02461 = [];
const vote_rejet_02461 = [];
const vote_macronpop_02461 = [];
const vote_lepenpop_02461 = [];
const vote_rejetpop_02461 = [];
const name_Commune_02461 = [];
const Pourcentage_02461 = [];
const Pourcentage_rejet_02461 = [];
const vote_gene_macron_02461 = [];
const vote_gene_lepen_02461 = [];
const vote_gene_rejet_02461 = [];

async function chartIt02461(){
    await GraphDATA02461();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02461-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02461
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02461
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02461-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02461,vote_lepen_02461,vote_rejet_02461]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02461-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02461,vote_lepenpop_02461,vote_rejetpop_02461]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02461"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02461
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02461
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02461
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02462*/
/*------------------------------------------------------------------ */
async function GraphDATA02462() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[461];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02462.push(vote_macron); 
    vote_lepen_02462.push(vote_lepen);
    vote_rejet_02462.push(vote_rejet);
    vote_macronpop_02462.push(vote_macronMediane);
    vote_lepenpop_02462.push(vote_lepenMediane);
    vote_rejetpop_02462.push(vote_rejetMediane);
    name_Commune_02462.push(nameCommune);
    Pourcentage_02462.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02462.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02462.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02462.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02462.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02462 = [];
const vote_lepen_02462 = [];
const vote_rejet_02462 = [];
const vote_macronpop_02462 = [];
const vote_lepenpop_02462 = [];
const vote_rejetpop_02462 = [];
const name_Commune_02462 = [];
const Pourcentage_02462 = [];
const Pourcentage_rejet_02462 = [];
const vote_gene_macron_02462 = [];
const vote_gene_lepen_02462 = [];
const vote_gene_rejet_02462 = [];

async function chartIt02462(){
    await GraphDATA02462();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02462-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02462
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02462
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02462-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02462,vote_lepen_02462,vote_rejet_02462]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02462-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02462,vote_lepenpop_02462,vote_rejetpop_02462]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02462"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02462
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02462
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02462
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02463*/
/*------------------------------------------------------------------ */
async function GraphDATA02463() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[462];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02463.push(vote_macron); 
    vote_lepen_02463.push(vote_lepen);
    vote_rejet_02463.push(vote_rejet);
    vote_macronpop_02463.push(vote_macronMediane);
    vote_lepenpop_02463.push(vote_lepenMediane);
    vote_rejetpop_02463.push(vote_rejetMediane);
    name_Commune_02463.push(nameCommune);
    Pourcentage_02463.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02463.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02463.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02463.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02463.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02463 = [];
const vote_lepen_02463 = [];
const vote_rejet_02463 = [];
const vote_macronpop_02463 = [];
const vote_lepenpop_02463 = [];
const vote_rejetpop_02463 = [];
const name_Commune_02463 = [];
const Pourcentage_02463 = [];
const Pourcentage_rejet_02463 = [];
const vote_gene_macron_02463 = [];
const vote_gene_lepen_02463 = [];
const vote_gene_rejet_02463 = [];

async function chartIt02463(){
    await GraphDATA02463();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02463-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02463
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02463
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02463-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02463,vote_lepen_02463,vote_rejet_02463]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02463-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02463,vote_lepenpop_02463,vote_rejetpop_02463]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02463"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02463
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02463
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02463
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02464*/
/*------------------------------------------------------------------ */
async function GraphDATA02464() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[463];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02464.push(vote_macron); 
    vote_lepen_02464.push(vote_lepen);
    vote_rejet_02464.push(vote_rejet);
    vote_macronpop_02464.push(vote_macronMediane);
    vote_lepenpop_02464.push(vote_lepenMediane);
    vote_rejetpop_02464.push(vote_rejetMediane);
    name_Commune_02464.push(nameCommune);
    Pourcentage_02464.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02464.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02464.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02464.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02464.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02464 = [];
const vote_lepen_02464 = [];
const vote_rejet_02464 = [];
const vote_macronpop_02464 = [];
const vote_lepenpop_02464 = [];
const vote_rejetpop_02464 = [];
const name_Commune_02464 = [];
const Pourcentage_02464 = [];
const Pourcentage_rejet_02464 = [];
const vote_gene_macron_02464 = [];
const vote_gene_lepen_02464 = [];
const vote_gene_rejet_02464 = [];

async function chartIt02464(){
    await GraphDATA02464();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02464-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02464
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02464
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02464-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02464,vote_lepen_02464,vote_rejet_02464]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02464-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02464,vote_lepenpop_02464,vote_rejetpop_02464]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02464"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02464
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02464
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02464
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02465*/
/*------------------------------------------------------------------ */
async function GraphDATA02465() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[464];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02465.push(vote_macron); 
    vote_lepen_02465.push(vote_lepen);
    vote_rejet_02465.push(vote_rejet);
    vote_macronpop_02465.push(vote_macronMediane);
    vote_lepenpop_02465.push(vote_lepenMediane);
    vote_rejetpop_02465.push(vote_rejetMediane);
    name_Commune_02465.push(nameCommune);
    Pourcentage_02465.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02465.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02465.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02465.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02465.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02465 = [];
const vote_lepen_02465 = [];
const vote_rejet_02465 = [];
const vote_macronpop_02465 = [];
const vote_lepenpop_02465 = [];
const vote_rejetpop_02465 = [];
const name_Commune_02465 = [];
const Pourcentage_02465 = [];
const Pourcentage_rejet_02465 = [];
const vote_gene_macron_02465 = [];
const vote_gene_lepen_02465 = [];
const vote_gene_rejet_02465 = [];

async function chartIt02465(){
    await GraphDATA02465();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02465-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02465
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02465
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02465-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02465,vote_lepen_02465,vote_rejet_02465]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02465-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02465,vote_lepenpop_02465,vote_rejetpop_02465]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02465"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02465
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02465
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02465
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02466*/
/*------------------------------------------------------------------ */
async function GraphDATA02466() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[465];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02466.push(vote_macron); 
    vote_lepen_02466.push(vote_lepen);
    vote_rejet_02466.push(vote_rejet);
    vote_macronpop_02466.push(vote_macronMediane);
    vote_lepenpop_02466.push(vote_lepenMediane);
    vote_rejetpop_02466.push(vote_rejetMediane);
    name_Commune_02466.push(nameCommune);
    Pourcentage_02466.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02466.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02466.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02466.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02466.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02466 = [];
const vote_lepen_02466 = [];
const vote_rejet_02466 = [];
const vote_macronpop_02466 = [];
const vote_lepenpop_02466 = [];
const vote_rejetpop_02466 = [];
const name_Commune_02466 = [];
const Pourcentage_02466 = [];
const Pourcentage_rejet_02466 = [];
const vote_gene_macron_02466 = [];
const vote_gene_lepen_02466 = [];
const vote_gene_rejet_02466 = [];

async function chartIt02466(){
    await GraphDATA02466();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02466-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02466
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02466
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02466-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02466,vote_lepen_02466,vote_rejet_02466]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02466-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02466,vote_lepenpop_02466,vote_rejetpop_02466]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02466"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02466
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02466
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02466
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02467*/
/*------------------------------------------------------------------ */
async function GraphDATA02467() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[466];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02467.push(vote_macron); 
    vote_lepen_02467.push(vote_lepen);
    vote_rejet_02467.push(vote_rejet);
    vote_macronpop_02467.push(vote_macronMediane);
    vote_lepenpop_02467.push(vote_lepenMediane);
    vote_rejetpop_02467.push(vote_rejetMediane);
    name_Commune_02467.push(nameCommune);
    Pourcentage_02467.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02467.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02467.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02467.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02467.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02467 = [];
const vote_lepen_02467 = [];
const vote_rejet_02467 = [];
const vote_macronpop_02467 = [];
const vote_lepenpop_02467 = [];
const vote_rejetpop_02467 = [];
const name_Commune_02467 = [];
const Pourcentage_02467 = [];
const Pourcentage_rejet_02467 = [];
const vote_gene_macron_02467 = [];
const vote_gene_lepen_02467 = [];
const vote_gene_rejet_02467 = [];

async function chartIt02467(){
    await GraphDATA02467();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02467-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02467
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02467
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02467-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02467,vote_lepen_02467,vote_rejet_02467]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02467-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02467,vote_lepenpop_02467,vote_rejetpop_02467]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02467"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02467
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02467
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02467
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02468*/
/*------------------------------------------------------------------ */
async function GraphDATA02468() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[467];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02468.push(vote_macron); 
    vote_lepen_02468.push(vote_lepen);
    vote_rejet_02468.push(vote_rejet);
    vote_macronpop_02468.push(vote_macronMediane);
    vote_lepenpop_02468.push(vote_lepenMediane);
    vote_rejetpop_02468.push(vote_rejetMediane);
    name_Commune_02468.push(nameCommune);
    Pourcentage_02468.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02468.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02468.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02468.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02468.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02468 = [];
const vote_lepen_02468 = [];
const vote_rejet_02468 = [];
const vote_macronpop_02468 = [];
const vote_lepenpop_02468 = [];
const vote_rejetpop_02468 = [];
const name_Commune_02468 = [];
const Pourcentage_02468 = [];
const Pourcentage_rejet_02468 = [];
const vote_gene_macron_02468 = [];
const vote_gene_lepen_02468 = [];
const vote_gene_rejet_02468 = [];

async function chartIt02468(){
    await GraphDATA02468();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02468-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02468
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02468
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02468-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02468,vote_lepen_02468,vote_rejet_02468]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02468-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02468,vote_lepenpop_02468,vote_rejetpop_02468]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02468"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02468
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02468
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02468
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02469*/
/*------------------------------------------------------------------ */
async function GraphDATA02469() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[468];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02469.push(vote_macron); 
    vote_lepen_02469.push(vote_lepen);
    vote_rejet_02469.push(vote_rejet);
    vote_macronpop_02469.push(vote_macronMediane);
    vote_lepenpop_02469.push(vote_lepenMediane);
    vote_rejetpop_02469.push(vote_rejetMediane);
    name_Commune_02469.push(nameCommune);
    Pourcentage_02469.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02469.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02469.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02469.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02469.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02469 = [];
const vote_lepen_02469 = [];
const vote_rejet_02469 = [];
const vote_macronpop_02469 = [];
const vote_lepenpop_02469 = [];
const vote_rejetpop_02469 = [];
const name_Commune_02469 = [];
const Pourcentage_02469 = [];
const Pourcentage_rejet_02469 = [];
const vote_gene_macron_02469 = [];
const vote_gene_lepen_02469 = [];
const vote_gene_rejet_02469 = [];

async function chartIt02469(){
    await GraphDATA02469();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02469-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02469
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02469
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02469-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02469,vote_lepen_02469,vote_rejet_02469]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02469-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02469,vote_lepenpop_02469,vote_rejetpop_02469]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02469"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02469
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02469
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02469
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02470*/
/*------------------------------------------------------------------ */
async function GraphDATA02470() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[469];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02470.push(vote_macron); 
    vote_lepen_02470.push(vote_lepen);
    vote_rejet_02470.push(vote_rejet);
    vote_macronpop_02470.push(vote_macronMediane);
    vote_lepenpop_02470.push(vote_lepenMediane);
    vote_rejetpop_02470.push(vote_rejetMediane);
    name_Commune_02470.push(nameCommune);
    Pourcentage_02470.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02470.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02470.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02470.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02470.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02470 = [];
const vote_lepen_02470 = [];
const vote_rejet_02470 = [];
const vote_macronpop_02470 = [];
const vote_lepenpop_02470 = [];
const vote_rejetpop_02470 = [];
const name_Commune_02470 = [];
const Pourcentage_02470 = [];
const Pourcentage_rejet_02470 = [];
const vote_gene_macron_02470 = [];
const vote_gene_lepen_02470 = [];
const vote_gene_rejet_02470 = [];

async function chartIt02470(){
    await GraphDATA02470();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02470-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02470
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02470
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02470-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02470,vote_lepen_02470,vote_rejet_02470]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02470-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02470,vote_lepenpop_02470,vote_rejetpop_02470]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02470"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02470
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02470
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02470
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02471*/
/*------------------------------------------------------------------ */
async function GraphDATA02471() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[470];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02471.push(vote_macron); 
    vote_lepen_02471.push(vote_lepen);
    vote_rejet_02471.push(vote_rejet);
    vote_macronpop_02471.push(vote_macronMediane);
    vote_lepenpop_02471.push(vote_lepenMediane);
    vote_rejetpop_02471.push(vote_rejetMediane);
    name_Commune_02471.push(nameCommune);
    Pourcentage_02471.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02471.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02471.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02471.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02471.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02471 = [];
const vote_lepen_02471 = [];
const vote_rejet_02471 = [];
const vote_macronpop_02471 = [];
const vote_lepenpop_02471 = [];
const vote_rejetpop_02471 = [];
const name_Commune_02471 = [];
const Pourcentage_02471 = [];
const Pourcentage_rejet_02471 = [];
const vote_gene_macron_02471 = [];
const vote_gene_lepen_02471 = [];
const vote_gene_rejet_02471 = [];

async function chartIt02471(){
    await GraphDATA02471();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02471-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02471
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02471
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02471-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02471,vote_lepen_02471,vote_rejet_02471]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02471-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02471,vote_lepenpop_02471,vote_rejetpop_02471]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02471"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02471
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02471
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02471
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02472*/
/*------------------------------------------------------------------ */
async function GraphDATA02472() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[471];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02472.push(vote_macron); 
    vote_lepen_02472.push(vote_lepen);
    vote_rejet_02472.push(vote_rejet);
    vote_macronpop_02472.push(vote_macronMediane);
    vote_lepenpop_02472.push(vote_lepenMediane);
    vote_rejetpop_02472.push(vote_rejetMediane);
    name_Commune_02472.push(nameCommune);
    Pourcentage_02472.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02472.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02472.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02472.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02472.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02472 = [];
const vote_lepen_02472 = [];
const vote_rejet_02472 = [];
const vote_macronpop_02472 = [];
const vote_lepenpop_02472 = [];
const vote_rejetpop_02472 = [];
const name_Commune_02472 = [];
const Pourcentage_02472 = [];
const Pourcentage_rejet_02472 = [];
const vote_gene_macron_02472 = [];
const vote_gene_lepen_02472 = [];
const vote_gene_rejet_02472 = [];

async function chartIt02472(){
    await GraphDATA02472();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02472-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02472
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02472
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02472-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02472,vote_lepen_02472,vote_rejet_02472]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02472-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02472,vote_lepenpop_02472,vote_rejetpop_02472]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02472"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02472
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02472
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02472
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02473*/
/*------------------------------------------------------------------ */
async function GraphDATA02473() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[472];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02473.push(vote_macron); 
    vote_lepen_02473.push(vote_lepen);
    vote_rejet_02473.push(vote_rejet);
    vote_macronpop_02473.push(vote_macronMediane);
    vote_lepenpop_02473.push(vote_lepenMediane);
    vote_rejetpop_02473.push(vote_rejetMediane);
    name_Commune_02473.push(nameCommune);
    Pourcentage_02473.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02473.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02473.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02473.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02473.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02473 = [];
const vote_lepen_02473 = [];
const vote_rejet_02473 = [];
const vote_macronpop_02473 = [];
const vote_lepenpop_02473 = [];
const vote_rejetpop_02473 = [];
const name_Commune_02473 = [];
const Pourcentage_02473 = [];
const Pourcentage_rejet_02473 = [];
const vote_gene_macron_02473 = [];
const vote_gene_lepen_02473 = [];
const vote_gene_rejet_02473 = [];

async function chartIt02473(){
    await GraphDATA02473();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02473-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02473
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02473
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02473-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02473,vote_lepen_02473,vote_rejet_02473]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02473-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02473,vote_lepenpop_02473,vote_rejetpop_02473]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02473"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02473
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02473
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02473
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02474*/
/*------------------------------------------------------------------ */
async function GraphDATA02474() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[473];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02474.push(vote_macron); 
    vote_lepen_02474.push(vote_lepen);
    vote_rejet_02474.push(vote_rejet);
    vote_macronpop_02474.push(vote_macronMediane);
    vote_lepenpop_02474.push(vote_lepenMediane);
    vote_rejetpop_02474.push(vote_rejetMediane);
    name_Commune_02474.push(nameCommune);
    Pourcentage_02474.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02474.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02474.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02474.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02474.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02474 = [];
const vote_lepen_02474 = [];
const vote_rejet_02474 = [];
const vote_macronpop_02474 = [];
const vote_lepenpop_02474 = [];
const vote_rejetpop_02474 = [];
const name_Commune_02474 = [];
const Pourcentage_02474 = [];
const Pourcentage_rejet_02474 = [];
const vote_gene_macron_02474 = [];
const vote_gene_lepen_02474 = [];
const vote_gene_rejet_02474 = [];

async function chartIt02474(){
    await GraphDATA02474();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02474-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02474
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02474
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02474-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02474,vote_lepen_02474,vote_rejet_02474]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02474-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02474,vote_lepenpop_02474,vote_rejetpop_02474]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02474"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02474
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02474
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02474
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02475*/
/*------------------------------------------------------------------ */
async function GraphDATA02475() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[474];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02475.push(vote_macron); 
    vote_lepen_02475.push(vote_lepen);
    vote_rejet_02475.push(vote_rejet);
    vote_macronpop_02475.push(vote_macronMediane);
    vote_lepenpop_02475.push(vote_lepenMediane);
    vote_rejetpop_02475.push(vote_rejetMediane);
    name_Commune_02475.push(nameCommune);
    Pourcentage_02475.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02475.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02475.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02475.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02475.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02475 = [];
const vote_lepen_02475 = [];
const vote_rejet_02475 = [];
const vote_macronpop_02475 = [];
const vote_lepenpop_02475 = [];
const vote_rejetpop_02475 = [];
const name_Commune_02475 = [];
const Pourcentage_02475 = [];
const Pourcentage_rejet_02475 = [];
const vote_gene_macron_02475 = [];
const vote_gene_lepen_02475 = [];
const vote_gene_rejet_02475 = [];

async function chartIt02475(){
    await GraphDATA02475();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02475-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02475
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02475
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02475-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02475,vote_lepen_02475,vote_rejet_02475]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02475-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02475,vote_lepenpop_02475,vote_rejetpop_02475]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02475"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02475
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02475
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02475
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02476*/
/*------------------------------------------------------------------ */
async function GraphDATA02476() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[475];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02476.push(vote_macron); 
    vote_lepen_02476.push(vote_lepen);
    vote_rejet_02476.push(vote_rejet);
    vote_macronpop_02476.push(vote_macronMediane);
    vote_lepenpop_02476.push(vote_lepenMediane);
    vote_rejetpop_02476.push(vote_rejetMediane);
    name_Commune_02476.push(nameCommune);
    Pourcentage_02476.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02476.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02476.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02476.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02476.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02476 = [];
const vote_lepen_02476 = [];
const vote_rejet_02476 = [];
const vote_macronpop_02476 = [];
const vote_lepenpop_02476 = [];
const vote_rejetpop_02476 = [];
const name_Commune_02476 = [];
const Pourcentage_02476 = [];
const Pourcentage_rejet_02476 = [];
const vote_gene_macron_02476 = [];
const vote_gene_lepen_02476 = [];
const vote_gene_rejet_02476 = [];

async function chartIt02476(){
    await GraphDATA02476();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02476-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02476
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02476
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02476-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02476,vote_lepen_02476,vote_rejet_02476]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02476-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02476,vote_lepenpop_02476,vote_rejetpop_02476]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02476"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02476
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02476
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02476
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02477*/
/*------------------------------------------------------------------ */
async function GraphDATA02477() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[476];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02477.push(vote_macron); 
    vote_lepen_02477.push(vote_lepen);
    vote_rejet_02477.push(vote_rejet);
    vote_macronpop_02477.push(vote_macronMediane);
    vote_lepenpop_02477.push(vote_lepenMediane);
    vote_rejetpop_02477.push(vote_rejetMediane);
    name_Commune_02477.push(nameCommune);
    Pourcentage_02477.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02477.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02477.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02477.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02477.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02477 = [];
const vote_lepen_02477 = [];
const vote_rejet_02477 = [];
const vote_macronpop_02477 = [];
const vote_lepenpop_02477 = [];
const vote_rejetpop_02477 = [];
const name_Commune_02477 = [];
const Pourcentage_02477 = [];
const Pourcentage_rejet_02477 = [];
const vote_gene_macron_02477 = [];
const vote_gene_lepen_02477 = [];
const vote_gene_rejet_02477 = [];

async function chartIt02477(){
    await GraphDATA02477();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02477-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02477
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02477
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02477-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02477,vote_lepen_02477,vote_rejet_02477]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02477-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02477,vote_lepenpop_02477,vote_rejetpop_02477]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02477"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02477
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02477
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02477
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02478*/
/*------------------------------------------------------------------ */
async function GraphDATA02478() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[477];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02478.push(vote_macron); 
    vote_lepen_02478.push(vote_lepen);
    vote_rejet_02478.push(vote_rejet);
    vote_macronpop_02478.push(vote_macronMediane);
    vote_lepenpop_02478.push(vote_lepenMediane);
    vote_rejetpop_02478.push(vote_rejetMediane);
    name_Commune_02478.push(nameCommune);
    Pourcentage_02478.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02478.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02478.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02478.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02478.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02478 = [];
const vote_lepen_02478 = [];
const vote_rejet_02478 = [];
const vote_macronpop_02478 = [];
const vote_lepenpop_02478 = [];
const vote_rejetpop_02478 = [];
const name_Commune_02478 = [];
const Pourcentage_02478 = [];
const Pourcentage_rejet_02478 = [];
const vote_gene_macron_02478 = [];
const vote_gene_lepen_02478 = [];
const vote_gene_rejet_02478 = [];

async function chartIt02478(){
    await GraphDATA02478();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02478-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02478
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02478
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02478-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02478,vote_lepen_02478,vote_rejet_02478]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02478-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02478,vote_lepenpop_02478,vote_rejetpop_02478]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02478"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02478
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02478
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02478
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02479*/
/*------------------------------------------------------------------ */
async function GraphDATA02479() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[478];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02479.push(vote_macron); 
    vote_lepen_02479.push(vote_lepen);
    vote_rejet_02479.push(vote_rejet);
    vote_macronpop_02479.push(vote_macronMediane);
    vote_lepenpop_02479.push(vote_lepenMediane);
    vote_rejetpop_02479.push(vote_rejetMediane);
    name_Commune_02479.push(nameCommune);
    Pourcentage_02479.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02479.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02479.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02479.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02479.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02479 = [];
const vote_lepen_02479 = [];
const vote_rejet_02479 = [];
const vote_macronpop_02479 = [];
const vote_lepenpop_02479 = [];
const vote_rejetpop_02479 = [];
const name_Commune_02479 = [];
const Pourcentage_02479 = [];
const Pourcentage_rejet_02479 = [];
const vote_gene_macron_02479 = [];
const vote_gene_lepen_02479 = [];
const vote_gene_rejet_02479 = [];

async function chartIt02479(){
    await GraphDATA02479();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02479-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02479
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02479
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02479-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02479,vote_lepen_02479,vote_rejet_02479]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02479-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02479,vote_lepenpop_02479,vote_rejetpop_02479]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02479"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02479
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02479
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02479
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02480*/
/*------------------------------------------------------------------ */
async function GraphDATA02480() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[479];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02480.push(vote_macron); 
    vote_lepen_02480.push(vote_lepen);
    vote_rejet_02480.push(vote_rejet);
    vote_macronpop_02480.push(vote_macronMediane);
    vote_lepenpop_02480.push(vote_lepenMediane);
    vote_rejetpop_02480.push(vote_rejetMediane);
    name_Commune_02480.push(nameCommune);
    Pourcentage_02480.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02480.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02480.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02480.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02480.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02480 = [];
const vote_lepen_02480 = [];
const vote_rejet_02480 = [];
const vote_macronpop_02480 = [];
const vote_lepenpop_02480 = [];
const vote_rejetpop_02480 = [];
const name_Commune_02480 = [];
const Pourcentage_02480 = [];
const Pourcentage_rejet_02480 = [];
const vote_gene_macron_02480 = [];
const vote_gene_lepen_02480 = [];
const vote_gene_rejet_02480 = [];

async function chartIt02480(){
    await GraphDATA02480();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02480-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02480
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02480
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02480-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02480,vote_lepen_02480,vote_rejet_02480]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02480-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02480,vote_lepenpop_02480,vote_rejetpop_02480]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02480"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02480
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02480
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02480
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02481*/
/*------------------------------------------------------------------ */
async function GraphDATA02481() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[480];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02481.push(vote_macron); 
    vote_lepen_02481.push(vote_lepen);
    vote_rejet_02481.push(vote_rejet);
    vote_macronpop_02481.push(vote_macronMediane);
    vote_lepenpop_02481.push(vote_lepenMediane);
    vote_rejetpop_02481.push(vote_rejetMediane);
    name_Commune_02481.push(nameCommune);
    Pourcentage_02481.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02481.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02481.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02481.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02481.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02481 = [];
const vote_lepen_02481 = [];
const vote_rejet_02481 = [];
const vote_macronpop_02481 = [];
const vote_lepenpop_02481 = [];
const vote_rejetpop_02481 = [];
const name_Commune_02481 = [];
const Pourcentage_02481 = [];
const Pourcentage_rejet_02481 = [];
const vote_gene_macron_02481 = [];
const vote_gene_lepen_02481 = [];
const vote_gene_rejet_02481 = [];

async function chartIt02481(){
    await GraphDATA02481();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02481-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02481
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02481
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02481-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02481,vote_lepen_02481,vote_rejet_02481]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02481-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02481,vote_lepenpop_02481,vote_rejetpop_02481]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02481"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02481
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02481
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02481
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02482*/
/*------------------------------------------------------------------ */
async function GraphDATA02482() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[481];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02482.push(vote_macron); 
    vote_lepen_02482.push(vote_lepen);
    vote_rejet_02482.push(vote_rejet);
    vote_macronpop_02482.push(vote_macronMediane);
    vote_lepenpop_02482.push(vote_lepenMediane);
    vote_rejetpop_02482.push(vote_rejetMediane);
    name_Commune_02482.push(nameCommune);
    Pourcentage_02482.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02482.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02482.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02482.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02482.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02482 = [];
const vote_lepen_02482 = [];
const vote_rejet_02482 = [];
const vote_macronpop_02482 = [];
const vote_lepenpop_02482 = [];
const vote_rejetpop_02482 = [];
const name_Commune_02482 = [];
const Pourcentage_02482 = [];
const Pourcentage_rejet_02482 = [];
const vote_gene_macron_02482 = [];
const vote_gene_lepen_02482 = [];
const vote_gene_rejet_02482 = [];

async function chartIt02482(){
    await GraphDATA02482();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02482-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02482
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02482
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02482-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02482,vote_lepen_02482,vote_rejet_02482]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02482-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02482,vote_lepenpop_02482,vote_rejetpop_02482]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02482"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02482
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02482
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02482
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02483*/
/*------------------------------------------------------------------ */
async function GraphDATA02483() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[482];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02483.push(vote_macron); 
    vote_lepen_02483.push(vote_lepen);
    vote_rejet_02483.push(vote_rejet);
    vote_macronpop_02483.push(vote_macronMediane);
    vote_lepenpop_02483.push(vote_lepenMediane);
    vote_rejetpop_02483.push(vote_rejetMediane);
    name_Commune_02483.push(nameCommune);
    Pourcentage_02483.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02483.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02483.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02483.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02483.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02483 = [];
const vote_lepen_02483 = [];
const vote_rejet_02483 = [];
const vote_macronpop_02483 = [];
const vote_lepenpop_02483 = [];
const vote_rejetpop_02483 = [];
const name_Commune_02483 = [];
const Pourcentage_02483 = [];
const Pourcentage_rejet_02483 = [];
const vote_gene_macron_02483 = [];
const vote_gene_lepen_02483 = [];
const vote_gene_rejet_02483 = [];

async function chartIt02483(){
    await GraphDATA02483();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02483-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02483
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02483
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02483-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02483,vote_lepen_02483,vote_rejet_02483]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02483-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02483,vote_lepenpop_02483,vote_rejetpop_02483]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02483"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02483
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02483
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02483
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02484*/
/*------------------------------------------------------------------ */
async function GraphDATA02484() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[483];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02484.push(vote_macron); 
    vote_lepen_02484.push(vote_lepen);
    vote_rejet_02484.push(vote_rejet);
    vote_macronpop_02484.push(vote_macronMediane);
    vote_lepenpop_02484.push(vote_lepenMediane);
    vote_rejetpop_02484.push(vote_rejetMediane);
    name_Commune_02484.push(nameCommune);
    Pourcentage_02484.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02484.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02484.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02484.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02484.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02484 = [];
const vote_lepen_02484 = [];
const vote_rejet_02484 = [];
const vote_macronpop_02484 = [];
const vote_lepenpop_02484 = [];
const vote_rejetpop_02484 = [];
const name_Commune_02484 = [];
const Pourcentage_02484 = [];
const Pourcentage_rejet_02484 = [];
const vote_gene_macron_02484 = [];
const vote_gene_lepen_02484 = [];
const vote_gene_rejet_02484 = [];

async function chartIt02484(){
    await GraphDATA02484();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02484-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02484
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02484
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02484-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02484,vote_lepen_02484,vote_rejet_02484]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02484-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02484,vote_lepenpop_02484,vote_rejetpop_02484]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02484"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02484
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02484
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02484
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02485*/
/*------------------------------------------------------------------ */
async function GraphDATA02485() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[484];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02485.push(vote_macron); 
    vote_lepen_02485.push(vote_lepen);
    vote_rejet_02485.push(vote_rejet);
    vote_macronpop_02485.push(vote_macronMediane);
    vote_lepenpop_02485.push(vote_lepenMediane);
    vote_rejetpop_02485.push(vote_rejetMediane);
    name_Commune_02485.push(nameCommune);
    Pourcentage_02485.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02485.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02485.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02485.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02485.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02485 = [];
const vote_lepen_02485 = [];
const vote_rejet_02485 = [];
const vote_macronpop_02485 = [];
const vote_lepenpop_02485 = [];
const vote_rejetpop_02485 = [];
const name_Commune_02485 = [];
const Pourcentage_02485 = [];
const Pourcentage_rejet_02485 = [];
const vote_gene_macron_02485 = [];
const vote_gene_lepen_02485 = [];
const vote_gene_rejet_02485 = [];

async function chartIt02485(){
    await GraphDATA02485();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02485-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02485
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02485
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02485-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02485,vote_lepen_02485,vote_rejet_02485]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02485-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02485,vote_lepenpop_02485,vote_rejetpop_02485]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02485"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02485
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02485
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02485
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02486*/
/*------------------------------------------------------------------ */
async function GraphDATA02486() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[485];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02486.push(vote_macron); 
    vote_lepen_02486.push(vote_lepen);
    vote_rejet_02486.push(vote_rejet);
    vote_macronpop_02486.push(vote_macronMediane);
    vote_lepenpop_02486.push(vote_lepenMediane);
    vote_rejetpop_02486.push(vote_rejetMediane);
    name_Commune_02486.push(nameCommune);
    Pourcentage_02486.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02486.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02486.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02486.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02486.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02486 = [];
const vote_lepen_02486 = [];
const vote_rejet_02486 = [];
const vote_macronpop_02486 = [];
const vote_lepenpop_02486 = [];
const vote_rejetpop_02486 = [];
const name_Commune_02486 = [];
const Pourcentage_02486 = [];
const Pourcentage_rejet_02486 = [];
const vote_gene_macron_02486 = [];
const vote_gene_lepen_02486 = [];
const vote_gene_rejet_02486 = [];

async function chartIt02486(){
    await GraphDATA02486();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02486-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02486
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02486
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02486-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02486,vote_lepen_02486,vote_rejet_02486]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02486-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02486,vote_lepenpop_02486,vote_rejetpop_02486]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02486"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02486
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02486
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02486
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02487*/
/*------------------------------------------------------------------ */
async function GraphDATA02487() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[486];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02487.push(vote_macron); 
    vote_lepen_02487.push(vote_lepen);
    vote_rejet_02487.push(vote_rejet);
    vote_macronpop_02487.push(vote_macronMediane);
    vote_lepenpop_02487.push(vote_lepenMediane);
    vote_rejetpop_02487.push(vote_rejetMediane);
    name_Commune_02487.push(nameCommune);
    Pourcentage_02487.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02487.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02487.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02487.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02487.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02487 = [];
const vote_lepen_02487 = [];
const vote_rejet_02487 = [];
const vote_macronpop_02487 = [];
const vote_lepenpop_02487 = [];
const vote_rejetpop_02487 = [];
const name_Commune_02487 = [];
const Pourcentage_02487 = [];
const Pourcentage_rejet_02487 = [];
const vote_gene_macron_02487 = [];
const vote_gene_lepen_02487 = [];
const vote_gene_rejet_02487 = [];

async function chartIt02487(){
    await GraphDATA02487();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02487-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02487
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02487
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02487-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02487,vote_lepen_02487,vote_rejet_02487]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02487-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02487,vote_lepenpop_02487,vote_rejetpop_02487]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02487"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02487
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02487
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02487
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02488*/
/*------------------------------------------------------------------ */
async function GraphDATA02488() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[487];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02488.push(vote_macron); 
    vote_lepen_02488.push(vote_lepen);
    vote_rejet_02488.push(vote_rejet);
    vote_macronpop_02488.push(vote_macronMediane);
    vote_lepenpop_02488.push(vote_lepenMediane);
    vote_rejetpop_02488.push(vote_rejetMediane);
    name_Commune_02488.push(nameCommune);
    Pourcentage_02488.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02488.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02488.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02488.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02488.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02488 = [];
const vote_lepen_02488 = [];
const vote_rejet_02488 = [];
const vote_macronpop_02488 = [];
const vote_lepenpop_02488 = [];
const vote_rejetpop_02488 = [];
const name_Commune_02488 = [];
const Pourcentage_02488 = [];
const Pourcentage_rejet_02488 = [];
const vote_gene_macron_02488 = [];
const vote_gene_lepen_02488 = [];
const vote_gene_rejet_02488 = [];

async function chartIt02488(){
    await GraphDATA02488();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02488-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02488
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02488
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02488-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02488,vote_lepen_02488,vote_rejet_02488]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02488-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02488,vote_lepenpop_02488,vote_rejetpop_02488]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02488"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02488
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02488
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02488
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02489*/
/*------------------------------------------------------------------ */
async function GraphDATA02489() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[488];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02489.push(vote_macron); 
    vote_lepen_02489.push(vote_lepen);
    vote_rejet_02489.push(vote_rejet);
    vote_macronpop_02489.push(vote_macronMediane);
    vote_lepenpop_02489.push(vote_lepenMediane);
    vote_rejetpop_02489.push(vote_rejetMediane);
    name_Commune_02489.push(nameCommune);
    Pourcentage_02489.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02489.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02489.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02489.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02489.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02489 = [];
const vote_lepen_02489 = [];
const vote_rejet_02489 = [];
const vote_macronpop_02489 = [];
const vote_lepenpop_02489 = [];
const vote_rejetpop_02489 = [];
const name_Commune_02489 = [];
const Pourcentage_02489 = [];
const Pourcentage_rejet_02489 = [];
const vote_gene_macron_02489 = [];
const vote_gene_lepen_02489 = [];
const vote_gene_rejet_02489 = [];

async function chartIt02489(){
    await GraphDATA02489();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02489-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02489
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02489
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02489-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02489,vote_lepen_02489,vote_rejet_02489]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02489-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02489,vote_lepenpop_02489,vote_rejetpop_02489]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02489"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02489
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02489
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02489
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02490*/
/*------------------------------------------------------------------ */
async function GraphDATA02490() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[489];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02490.push(vote_macron); 
    vote_lepen_02490.push(vote_lepen);
    vote_rejet_02490.push(vote_rejet);
    vote_macronpop_02490.push(vote_macronMediane);
    vote_lepenpop_02490.push(vote_lepenMediane);
    vote_rejetpop_02490.push(vote_rejetMediane);
    name_Commune_02490.push(nameCommune);
    Pourcentage_02490.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02490.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02490.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02490.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02490.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02490 = [];
const vote_lepen_02490 = [];
const vote_rejet_02490 = [];
const vote_macronpop_02490 = [];
const vote_lepenpop_02490 = [];
const vote_rejetpop_02490 = [];
const name_Commune_02490 = [];
const Pourcentage_02490 = [];
const Pourcentage_rejet_02490 = [];
const vote_gene_macron_02490 = [];
const vote_gene_lepen_02490 = [];
const vote_gene_rejet_02490 = [];

async function chartIt02490(){
    await GraphDATA02490();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02490-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02490
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02490
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02490-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02490,vote_lepen_02490,vote_rejet_02490]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02490-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02490,vote_lepenpop_02490,vote_rejetpop_02490]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02490"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02490
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02490
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02490
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02491*/
/*------------------------------------------------------------------ */
async function GraphDATA02491() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[490];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02491.push(vote_macron); 
    vote_lepen_02491.push(vote_lepen);
    vote_rejet_02491.push(vote_rejet);
    vote_macronpop_02491.push(vote_macronMediane);
    vote_lepenpop_02491.push(vote_lepenMediane);
    vote_rejetpop_02491.push(vote_rejetMediane);
    name_Commune_02491.push(nameCommune);
    Pourcentage_02491.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02491.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02491.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02491.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02491.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02491 = [];
const vote_lepen_02491 = [];
const vote_rejet_02491 = [];
const vote_macronpop_02491 = [];
const vote_lepenpop_02491 = [];
const vote_rejetpop_02491 = [];
const name_Commune_02491 = [];
const Pourcentage_02491 = [];
const Pourcentage_rejet_02491 = [];
const vote_gene_macron_02491 = [];
const vote_gene_lepen_02491 = [];
const vote_gene_rejet_02491 = [];

async function chartIt02491(){
    await GraphDATA02491();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02491-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02491
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02491
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02491-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02491,vote_lepen_02491,vote_rejet_02491]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02491-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02491,vote_lepenpop_02491,vote_rejetpop_02491]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02491"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02491
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02491
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02491
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02492*/
/*------------------------------------------------------------------ */
async function GraphDATA02492() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[491];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02492.push(vote_macron); 
    vote_lepen_02492.push(vote_lepen);
    vote_rejet_02492.push(vote_rejet);
    vote_macronpop_02492.push(vote_macronMediane);
    vote_lepenpop_02492.push(vote_lepenMediane);
    vote_rejetpop_02492.push(vote_rejetMediane);
    name_Commune_02492.push(nameCommune);
    Pourcentage_02492.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02492.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02492.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02492.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02492.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02492 = [];
const vote_lepen_02492 = [];
const vote_rejet_02492 = [];
const vote_macronpop_02492 = [];
const vote_lepenpop_02492 = [];
const vote_rejetpop_02492 = [];
const name_Commune_02492 = [];
const Pourcentage_02492 = [];
const Pourcentage_rejet_02492 = [];
const vote_gene_macron_02492 = [];
const vote_gene_lepen_02492 = [];
const vote_gene_rejet_02492 = [];

async function chartIt02492(){
    await GraphDATA02492();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02492-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02492
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02492
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02492-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02492,vote_lepen_02492,vote_rejet_02492]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02492-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02492,vote_lepenpop_02492,vote_rejetpop_02492]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02492"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02492
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02492
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02492
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02493*/
/*------------------------------------------------------------------ */
async function GraphDATA02493() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[492];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02493.push(vote_macron); 
    vote_lepen_02493.push(vote_lepen);
    vote_rejet_02493.push(vote_rejet);
    vote_macronpop_02493.push(vote_macronMediane);
    vote_lepenpop_02493.push(vote_lepenMediane);
    vote_rejetpop_02493.push(vote_rejetMediane);
    name_Commune_02493.push(nameCommune);
    Pourcentage_02493.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02493.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02493.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02493.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02493.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02493 = [];
const vote_lepen_02493 = [];
const vote_rejet_02493 = [];
const vote_macronpop_02493 = [];
const vote_lepenpop_02493 = [];
const vote_rejetpop_02493 = [];
const name_Commune_02493 = [];
const Pourcentage_02493 = [];
const Pourcentage_rejet_02493 = [];
const vote_gene_macron_02493 = [];
const vote_gene_lepen_02493 = [];
const vote_gene_rejet_02493 = [];

async function chartIt02493(){
    await GraphDATA02493();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02493-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02493
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02493
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02493-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02493,vote_lepen_02493,vote_rejet_02493]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02493-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02493,vote_lepenpop_02493,vote_rejetpop_02493]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02493"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02493
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02493
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02493
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02494*/
/*------------------------------------------------------------------ */
async function GraphDATA02494() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[493];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02494.push(vote_macron); 
    vote_lepen_02494.push(vote_lepen);
    vote_rejet_02494.push(vote_rejet);
    vote_macronpop_02494.push(vote_macronMediane);
    vote_lepenpop_02494.push(vote_lepenMediane);
    vote_rejetpop_02494.push(vote_rejetMediane);
    name_Commune_02494.push(nameCommune);
    Pourcentage_02494.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02494.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02494.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02494.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02494.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02494 = [];
const vote_lepen_02494 = [];
const vote_rejet_02494 = [];
const vote_macronpop_02494 = [];
const vote_lepenpop_02494 = [];
const vote_rejetpop_02494 = [];
const name_Commune_02494 = [];
const Pourcentage_02494 = [];
const Pourcentage_rejet_02494 = [];
const vote_gene_macron_02494 = [];
const vote_gene_lepen_02494 = [];
const vote_gene_rejet_02494 = [];

async function chartIt02494(){
    await GraphDATA02494();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02494-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02494
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02494
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02494-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02494,vote_lepen_02494,vote_rejet_02494]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02494-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02494,vote_lepenpop_02494,vote_rejetpop_02494]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02494"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02494
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02494
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02494
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02495*/
/*------------------------------------------------------------------ */
async function GraphDATA02495() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[494];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02495.push(vote_macron); 
    vote_lepen_02495.push(vote_lepen);
    vote_rejet_02495.push(vote_rejet);
    vote_macronpop_02495.push(vote_macronMediane);
    vote_lepenpop_02495.push(vote_lepenMediane);
    vote_rejetpop_02495.push(vote_rejetMediane);
    name_Commune_02495.push(nameCommune);
    Pourcentage_02495.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02495.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02495.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02495.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02495.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02495 = [];
const vote_lepen_02495 = [];
const vote_rejet_02495 = [];
const vote_macronpop_02495 = [];
const vote_lepenpop_02495 = [];
const vote_rejetpop_02495 = [];
const name_Commune_02495 = [];
const Pourcentage_02495 = [];
const Pourcentage_rejet_02495 = [];
const vote_gene_macron_02495 = [];
const vote_gene_lepen_02495 = [];
const vote_gene_rejet_02495 = [];

async function chartIt02495(){
    await GraphDATA02495();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02495-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02495
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02495
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02495-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02495,vote_lepen_02495,vote_rejet_02495]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02495-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02495,vote_lepenpop_02495,vote_rejetpop_02495]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02495"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02495
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02495
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02495
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02496*/
/*------------------------------------------------------------------ */
async function GraphDATA02496() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[495];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02496.push(vote_macron); 
    vote_lepen_02496.push(vote_lepen);
    vote_rejet_02496.push(vote_rejet);
    vote_macronpop_02496.push(vote_macronMediane);
    vote_lepenpop_02496.push(vote_lepenMediane);
    vote_rejetpop_02496.push(vote_rejetMediane);
    name_Commune_02496.push(nameCommune);
    Pourcentage_02496.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02496.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02496.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02496.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02496.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02496 = [];
const vote_lepen_02496 = [];
const vote_rejet_02496 = [];
const vote_macronpop_02496 = [];
const vote_lepenpop_02496 = [];
const vote_rejetpop_02496 = [];
const name_Commune_02496 = [];
const Pourcentage_02496 = [];
const Pourcentage_rejet_02496 = [];
const vote_gene_macron_02496 = [];
const vote_gene_lepen_02496 = [];
const vote_gene_rejet_02496 = [];

async function chartIt02496(){
    await GraphDATA02496();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02496-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02496
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02496
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02496-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02496,vote_lepen_02496,vote_rejet_02496]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02496-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02496,vote_lepenpop_02496,vote_rejetpop_02496]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02496"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02496
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02496
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02496
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02497*/
/*------------------------------------------------------------------ */
async function GraphDATA02497() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[496];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02497.push(vote_macron); 
    vote_lepen_02497.push(vote_lepen);
    vote_rejet_02497.push(vote_rejet);
    vote_macronpop_02497.push(vote_macronMediane);
    vote_lepenpop_02497.push(vote_lepenMediane);
    vote_rejetpop_02497.push(vote_rejetMediane);
    name_Commune_02497.push(nameCommune);
    Pourcentage_02497.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02497.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02497.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02497.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02497.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02497 = [];
const vote_lepen_02497 = [];
const vote_rejet_02497 = [];
const vote_macronpop_02497 = [];
const vote_lepenpop_02497 = [];
const vote_rejetpop_02497 = [];
const name_Commune_02497 = [];
const Pourcentage_02497 = [];
const Pourcentage_rejet_02497 = [];
const vote_gene_macron_02497 = [];
const vote_gene_lepen_02497 = [];
const vote_gene_rejet_02497 = [];

async function chartIt02497(){
    await GraphDATA02497();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02497-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02497
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02497
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02497-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02497,vote_lepen_02497,vote_rejet_02497]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02497-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02497,vote_lepenpop_02497,vote_rejetpop_02497]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02497"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02497
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02497
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02497
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02498*/
/*------------------------------------------------------------------ */
async function GraphDATA02498() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[497];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02498.push(vote_macron); 
    vote_lepen_02498.push(vote_lepen);
    vote_rejet_02498.push(vote_rejet);
    vote_macronpop_02498.push(vote_macronMediane);
    vote_lepenpop_02498.push(vote_lepenMediane);
    vote_rejetpop_02498.push(vote_rejetMediane);
    name_Commune_02498.push(nameCommune);
    Pourcentage_02498.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02498.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02498.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02498.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02498.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02498 = [];
const vote_lepen_02498 = [];
const vote_rejet_02498 = [];
const vote_macronpop_02498 = [];
const vote_lepenpop_02498 = [];
const vote_rejetpop_02498 = [];
const name_Commune_02498 = [];
const Pourcentage_02498 = [];
const Pourcentage_rejet_02498 = [];
const vote_gene_macron_02498 = [];
const vote_gene_lepen_02498 = [];
const vote_gene_rejet_02498 = [];

async function chartIt02498(){
    await GraphDATA02498();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02498-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02498
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02498
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02498-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02498,vote_lepen_02498,vote_rejet_02498]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02498-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02498,vote_lepenpop_02498,vote_rejetpop_02498]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02498"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02498
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02498
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02498
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02499*/
/*------------------------------------------------------------------ */
async function GraphDATA02499() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[498];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02499.push(vote_macron); 
    vote_lepen_02499.push(vote_lepen);
    vote_rejet_02499.push(vote_rejet);
    vote_macronpop_02499.push(vote_macronMediane);
    vote_lepenpop_02499.push(vote_lepenMediane);
    vote_rejetpop_02499.push(vote_rejetMediane);
    name_Commune_02499.push(nameCommune);
    Pourcentage_02499.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02499.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02499.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02499.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02499.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02499 = [];
const vote_lepen_02499 = [];
const vote_rejet_02499 = [];
const vote_macronpop_02499 = [];
const vote_lepenpop_02499 = [];
const vote_rejetpop_02499 = [];
const name_Commune_02499 = [];
const Pourcentage_02499 = [];
const Pourcentage_rejet_02499 = [];
const vote_gene_macron_02499 = [];
const vote_gene_lepen_02499 = [];
const vote_gene_rejet_02499 = [];

async function chartIt02499(){
    await GraphDATA02499();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02499-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02499
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02499
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02499-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02499,vote_lepen_02499,vote_rejet_02499]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02499-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02499,vote_lepenpop_02499,vote_rejetpop_02499]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02499"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02499
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02499
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02499
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}