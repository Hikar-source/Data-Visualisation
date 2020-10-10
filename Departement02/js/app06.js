/********************************************************************** */
/*JS GRAPHIQUE FICHIER DATA */
/********************************************************************** */
chartIt02501();
chartIt02502();
chartIt02503();
chartIt02504();
chartIt02505();
chartIt02506();
chartIt02507();
chartIt02508();
chartIt02509();
chartIt02510();
chartIt02511();
chartIt02512();
chartIt02513();
chartIt02514();
chartIt02515();
chartIt02516();
chartIt02517();
chartIt02518();
chartIt02519();
chartIt02520();
chartIt02521();
chartIt02522();
chartIt02523();
chartIt02524();
chartIt02525();
chartIt02526();
chartIt02527();
chartIt02528();
chartIt02529();
chartIt02530();
chartIt02531();
chartIt02532();
chartIt02533();
chartIt02534();
chartIt02535();
chartIt02536();
chartIt02537();
chartIt02538();
chartIt02539();
chartIt02540();
chartIt02541();
chartIt02542();
chartIt02543();
chartIt02544();
chartIt02545();
chartIt02546();
chartIt02547();
chartIt02548();
chartIt02549();
chartIt02550();
chartIt02551();
chartIt02552();
chartIt02553();
chartIt02554();
chartIt02555();
chartIt02556();
chartIt02557();
chartIt02558();
chartIt02559();
chartIt02560();
chartIt02561();
chartIt02562();
chartIt02563();
chartIt02564();
chartIt02565();
chartIt02566();
chartIt02567();
chartIt02568();
chartIt02569();
chartIt02570();
chartIt02571();
chartIt02572();
chartIt02573();
chartIt02574();
chartIt02575();
chartIt02576();
chartIt02577();
chartIt02578();
chartIt02579();
chartIt02580();
chartIt02581();
chartIt02582();
chartIt02583();
chartIt02584();
chartIt02585();
chartIt02586();
chartIt02587();
chartIt02588();
chartIt02589();
chartIt02590();
chartIt02591();
chartIt02592();
chartIt02593();
chartIt02594();
chartIt02595();
chartIt02596();
chartIt02597();
chartIt02598();
chartIt02599();
/*------------------------------------------------------------------ */
/*COMMUNE 02501*/
/*------------------------------------------------------------------ */
async function GraphDATA02501() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[500];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02501.push(vote_macron); 
    vote_lepen_02501.push(vote_lepen);
    vote_rejet_02501.push(vote_rejet);
    vote_macronpop_02501.push(vote_macronMediane);
    vote_lepenpop_02501.push(vote_lepenMediane);
    vote_rejetpop_02501.push(vote_rejetMediane);
    name_Commune_02501.push(nameCommune);
    Pourcentage_02501.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02501.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02501.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02501.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02501.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02501 = [];
const vote_lepen_02501 = [];
const vote_rejet_02501 = [];
const vote_macronpop_02501 = [];
const vote_lepenpop_02501 = [];
const vote_rejetpop_02501 = [];
const name_Commune_02501 = [];
const Pourcentage_02501 = [];
const Pourcentage_rejet_02501 = [];
const vote_gene_macron_02501 = [];
const vote_gene_lepen_02501 = [];
const vote_gene_rejet_02501 = [];

async function chartIt02501(){
    await GraphDATA02501();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02501-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02501
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02501
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02501-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02501,vote_lepen_02501,vote_rejet_02501]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02501-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02501,vote_lepenpop_02501,vote_rejetpop_02501]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02501"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02501
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02501
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02501
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02502*/
/*------------------------------------------------------------------ */
async function GraphDATA02502() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[501];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02502.push(vote_macron); 
    vote_lepen_02502.push(vote_lepen);
    vote_rejet_02502.push(vote_rejet);
    vote_macronpop_02502.push(vote_macronMediane);
    vote_lepenpop_02502.push(vote_lepenMediane);
    vote_rejetpop_02502.push(vote_rejetMediane);
    name_Commune_02502.push(nameCommune);
    Pourcentage_02502.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02502.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02502.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02502.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02502.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02502 = [];
const vote_lepen_02502 = [];
const vote_rejet_02502 = [];
const vote_macronpop_02502 = [];
const vote_lepenpop_02502 = [];
const vote_rejetpop_02502 = [];
const name_Commune_02502 = [];
const Pourcentage_02502 = [];
const Pourcentage_rejet_02502 = [];
const vote_gene_macron_02502 = [];
const vote_gene_lepen_02502 = [];
const vote_gene_rejet_02502 = [];

async function chartIt02502(){
    await GraphDATA02502();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02502-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02502
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02502
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02502-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02502,vote_lepen_02502,vote_rejet_02502]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02502-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02502,vote_lepenpop_02502,vote_rejetpop_02502]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02502"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02502
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02502
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02502
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02503*/
/*------------------------------------------------------------------ */
async function GraphDATA02503() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[502];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02503.push(vote_macron); 
    vote_lepen_02503.push(vote_lepen);
    vote_rejet_02503.push(vote_rejet);
    vote_macronpop_02503.push(vote_macronMediane);
    vote_lepenpop_02503.push(vote_lepenMediane);
    vote_rejetpop_02503.push(vote_rejetMediane);
    name_Commune_02503.push(nameCommune);
    Pourcentage_02503.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02503.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02503.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02503.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02503.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02503 = [];
const vote_lepen_02503 = [];
const vote_rejet_02503 = [];
const vote_macronpop_02503 = [];
const vote_lepenpop_02503 = [];
const vote_rejetpop_02503 = [];
const name_Commune_02503 = [];
const Pourcentage_02503 = [];
const Pourcentage_rejet_02503 = [];
const vote_gene_macron_02503 = [];
const vote_gene_lepen_02503 = [];
const vote_gene_rejet_02503 = [];

async function chartIt02503(){
    await GraphDATA02503();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02503-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02503
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02503
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02503-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02503,vote_lepen_02503,vote_rejet_02503]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02503-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02503,vote_lepenpop_02503,vote_rejetpop_02503]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02503"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02503
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02503
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02503
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02504*/
/*------------------------------------------------------------------ */
async function GraphDATA02504() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[503];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02504.push(vote_macron); 
    vote_lepen_02504.push(vote_lepen);
    vote_rejet_02504.push(vote_rejet);
    vote_macronpop_02504.push(vote_macronMediane);
    vote_lepenpop_02504.push(vote_lepenMediane);
    vote_rejetpop_02504.push(vote_rejetMediane);
    name_Commune_02504.push(nameCommune);
    Pourcentage_02504.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02504.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02504.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02504.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02504.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02504 = [];
const vote_lepen_02504 = [];
const vote_rejet_02504 = [];
const vote_macronpop_02504 = [];
const vote_lepenpop_02504 = [];
const vote_rejetpop_02504 = [];
const name_Commune_02504 = [];
const Pourcentage_02504 = [];
const Pourcentage_rejet_02504 = [];
const vote_gene_macron_02504 = [];
const vote_gene_lepen_02504 = [];
const vote_gene_rejet_02504 = [];

async function chartIt02504(){
    await GraphDATA02504();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02504-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02504
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02504
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02504-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02504,vote_lepen_02504,vote_rejet_02504]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02504-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02504,vote_lepenpop_02504,vote_rejetpop_02504]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02504"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02504
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02504
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02504
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02505*/
/*------------------------------------------------------------------ */
async function GraphDATA02505() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[504];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02505.push(vote_macron); 
    vote_lepen_02505.push(vote_lepen);
    vote_rejet_02505.push(vote_rejet);
    vote_macronpop_02505.push(vote_macronMediane);
    vote_lepenpop_02505.push(vote_lepenMediane);
    vote_rejetpop_02505.push(vote_rejetMediane);
    name_Commune_02505.push(nameCommune);
    Pourcentage_02505.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02505.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02505.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02505.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02505.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02505 = [];
const vote_lepen_02505 = [];
const vote_rejet_02505 = [];
const vote_macronpop_02505 = [];
const vote_lepenpop_02505 = [];
const vote_rejetpop_02505 = [];
const name_Commune_02505 = [];
const Pourcentage_02505 = [];
const Pourcentage_rejet_02505 = [];
const vote_gene_macron_02505 = [];
const vote_gene_lepen_02505 = [];
const vote_gene_rejet_02505 = [];

async function chartIt02505(){
    await GraphDATA02505();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02505-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02505
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02505
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02505-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02505,vote_lepen_02505,vote_rejet_02505]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02505-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02505,vote_lepenpop_02505,vote_rejetpop_02505]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02505"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02505
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02505
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02505
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02506*/
/*------------------------------------------------------------------ */
async function GraphDATA02506() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[505];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02506.push(vote_macron); 
    vote_lepen_02506.push(vote_lepen);
    vote_rejet_02506.push(vote_rejet);
    vote_macronpop_02506.push(vote_macronMediane);
    vote_lepenpop_02506.push(vote_lepenMediane);
    vote_rejetpop_02506.push(vote_rejetMediane);
    name_Commune_02506.push(nameCommune);
    Pourcentage_02506.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02506.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02506.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02506.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02506.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02506 = [];
const vote_lepen_02506 = [];
const vote_rejet_02506 = [];
const vote_macronpop_02506 = [];
const vote_lepenpop_02506 = [];
const vote_rejetpop_02506 = [];
const name_Commune_02506 = [];
const Pourcentage_02506 = [];
const Pourcentage_rejet_02506 = [];
const vote_gene_macron_02506 = [];
const vote_gene_lepen_02506 = [];
const vote_gene_rejet_02506 = [];

async function chartIt02506(){
    await GraphDATA02506();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02506-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02506
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02506
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02506-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02506,vote_lepen_02506,vote_rejet_02506]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02506-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02506,vote_lepenpop_02506,vote_rejetpop_02506]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02506"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02506
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02506
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02506
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02507*/
/*------------------------------------------------------------------ */
async function GraphDATA02507() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[506];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02507.push(vote_macron); 
    vote_lepen_02507.push(vote_lepen);
    vote_rejet_02507.push(vote_rejet);
    vote_macronpop_02507.push(vote_macronMediane);
    vote_lepenpop_02507.push(vote_lepenMediane);
    vote_rejetpop_02507.push(vote_rejetMediane);
    name_Commune_02507.push(nameCommune);
    Pourcentage_02507.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02507.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02507.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02507.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02507.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02507 = [];
const vote_lepen_02507 = [];
const vote_rejet_02507 = [];
const vote_macronpop_02507 = [];
const vote_lepenpop_02507 = [];
const vote_rejetpop_02507 = [];
const name_Commune_02507 = [];
const Pourcentage_02507 = [];
const Pourcentage_rejet_02507 = [];
const vote_gene_macron_02507 = [];
const vote_gene_lepen_02507 = [];
const vote_gene_rejet_02507 = [];

async function chartIt02507(){
    await GraphDATA02507();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02507-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02507
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02507
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02507-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02507,vote_lepen_02507,vote_rejet_02507]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02507-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02507,vote_lepenpop_02507,vote_rejetpop_02507]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02507"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02507
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02507
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02507
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02508*/
/*------------------------------------------------------------------ */
async function GraphDATA02508() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[507];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02508.push(vote_macron); 
    vote_lepen_02508.push(vote_lepen);
    vote_rejet_02508.push(vote_rejet);
    vote_macronpop_02508.push(vote_macronMediane);
    vote_lepenpop_02508.push(vote_lepenMediane);
    vote_rejetpop_02508.push(vote_rejetMediane);
    name_Commune_02508.push(nameCommune);
    Pourcentage_02508.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02508.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02508.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02508.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02508.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02508 = [];
const vote_lepen_02508 = [];
const vote_rejet_02508 = [];
const vote_macronpop_02508 = [];
const vote_lepenpop_02508 = [];
const vote_rejetpop_02508 = [];
const name_Commune_02508 = [];
const Pourcentage_02508 = [];
const Pourcentage_rejet_02508 = [];
const vote_gene_macron_02508 = [];
const vote_gene_lepen_02508 = [];
const vote_gene_rejet_02508 = [];

async function chartIt02508(){
    await GraphDATA02508();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02508-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02508
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02508
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02508-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02508,vote_lepen_02508,vote_rejet_02508]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02508-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02508,vote_lepenpop_02508,vote_rejetpop_02508]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02508"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02508
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02508
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02508
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02509*/
/*------------------------------------------------------------------ */
async function GraphDATA02509() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[508];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02509.push(vote_macron); 
    vote_lepen_02509.push(vote_lepen);
    vote_rejet_02509.push(vote_rejet);
    vote_macronpop_02509.push(vote_macronMediane);
    vote_lepenpop_02509.push(vote_lepenMediane);
    vote_rejetpop_02509.push(vote_rejetMediane);
    name_Commune_02509.push(nameCommune);
    Pourcentage_02509.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02509.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02509.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02509.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02509.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02509 = [];
const vote_lepen_02509 = [];
const vote_rejet_02509 = [];
const vote_macronpop_02509 = [];
const vote_lepenpop_02509 = [];
const vote_rejetpop_02509 = [];
const name_Commune_02509 = [];
const Pourcentage_02509 = [];
const Pourcentage_rejet_02509 = [];
const vote_gene_macron_02509 = [];
const vote_gene_lepen_02509 = [];
const vote_gene_rejet_02509 = [];

async function chartIt02509(){
    await GraphDATA02509();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02509-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02509
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02509
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02509-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02509,vote_lepen_02509,vote_rejet_02509]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02509-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02509,vote_lepenpop_02509,vote_rejetpop_02509]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02509"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02509
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02509
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02509
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02510*/
/*------------------------------------------------------------------ */
async function GraphDATA02510() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[509];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02510.push(vote_macron); 
    vote_lepen_02510.push(vote_lepen);
    vote_rejet_02510.push(vote_rejet);
    vote_macronpop_02510.push(vote_macronMediane);
    vote_lepenpop_02510.push(vote_lepenMediane);
    vote_rejetpop_02510.push(vote_rejetMediane);
    name_Commune_02510.push(nameCommune);
    Pourcentage_02510.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02510.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02510.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02510.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02510.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02510 = [];
const vote_lepen_02510 = [];
const vote_rejet_02510 = [];
const vote_macronpop_02510 = [];
const vote_lepenpop_02510 = [];
const vote_rejetpop_02510 = [];
const name_Commune_02510 = [];
const Pourcentage_02510 = [];
const Pourcentage_rejet_02510 = [];
const vote_gene_macron_02510 = [];
const vote_gene_lepen_02510 = [];
const vote_gene_rejet_02510 = [];

async function chartIt02510(){
    await GraphDATA02510();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02510-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02510
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02510
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02510-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02510,vote_lepen_02510,vote_rejet_02510]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02510-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02510,vote_lepenpop_02510,vote_rejetpop_02510]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02510"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02510
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02510
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02510
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02511*/
/*------------------------------------------------------------------ */
async function GraphDATA02511() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[510];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02511.push(vote_macron); 
    vote_lepen_02511.push(vote_lepen);
    vote_rejet_02511.push(vote_rejet);
    vote_macronpop_02511.push(vote_macronMediane);
    vote_lepenpop_02511.push(vote_lepenMediane);
    vote_rejetpop_02511.push(vote_rejetMediane);
    name_Commune_02511.push(nameCommune);
    Pourcentage_02511.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02511.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02511.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02511.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02511.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02511 = [];
const vote_lepen_02511 = [];
const vote_rejet_02511 = [];
const vote_macronpop_02511 = [];
const vote_lepenpop_02511 = [];
const vote_rejetpop_02511 = [];
const name_Commune_02511 = [];
const Pourcentage_02511 = [];
const Pourcentage_rejet_02511 = [];
const vote_gene_macron_02511 = [];
const vote_gene_lepen_02511 = [];
const vote_gene_rejet_02511 = [];

async function chartIt02511(){
    await GraphDATA02511();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02511-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02511
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02511
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02511-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02511,vote_lepen_02511,vote_rejet_02511]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02511-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02511,vote_lepenpop_02511,vote_rejetpop_02511]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02511"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02511
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02511
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02511
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02512*/
/*------------------------------------------------------------------ */
async function GraphDATA02512() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[511];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02512.push(vote_macron); 
    vote_lepen_02512.push(vote_lepen);
    vote_rejet_02512.push(vote_rejet);
    vote_macronpop_02512.push(vote_macronMediane);
    vote_lepenpop_02512.push(vote_lepenMediane);
    vote_rejetpop_02512.push(vote_rejetMediane);
    name_Commune_02512.push(nameCommune);
    Pourcentage_02512.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02512.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02512.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02512.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02512.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02512 = [];
const vote_lepen_02512 = [];
const vote_rejet_02512 = [];
const vote_macronpop_02512 = [];
const vote_lepenpop_02512 = [];
const vote_rejetpop_02512 = [];
const name_Commune_02512 = [];
const Pourcentage_02512 = [];
const Pourcentage_rejet_02512 = [];
const vote_gene_macron_02512 = [];
const vote_gene_lepen_02512 = [];
const vote_gene_rejet_02512 = [];

async function chartIt02512(){
    await GraphDATA02512();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02512-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02512
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02512
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02512-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02512,vote_lepen_02512,vote_rejet_02512]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02512-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02512,vote_lepenpop_02512,vote_rejetpop_02512]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02512"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02512
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02512
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02512
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02513*/
/*------------------------------------------------------------------ */
async function GraphDATA02513() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[512];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02513.push(vote_macron); 
    vote_lepen_02513.push(vote_lepen);
    vote_rejet_02513.push(vote_rejet);
    vote_macronpop_02513.push(vote_macronMediane);
    vote_lepenpop_02513.push(vote_lepenMediane);
    vote_rejetpop_02513.push(vote_rejetMediane);
    name_Commune_02513.push(nameCommune);
    Pourcentage_02513.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02513.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02513.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02513.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02513.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02513 = [];
const vote_lepen_02513 = [];
const vote_rejet_02513 = [];
const vote_macronpop_02513 = [];
const vote_lepenpop_02513 = [];
const vote_rejetpop_02513 = [];
const name_Commune_02513 = [];
const Pourcentage_02513 = [];
const Pourcentage_rejet_02513 = [];
const vote_gene_macron_02513 = [];
const vote_gene_lepen_02513 = [];
const vote_gene_rejet_02513 = [];

async function chartIt02513(){
    await GraphDATA02513();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02513-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02513
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02513
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02513-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02513,vote_lepen_02513,vote_rejet_02513]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02513-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02513,vote_lepenpop_02513,vote_rejetpop_02513]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02513"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02513
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02513
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02513
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02514*/
/*------------------------------------------------------------------ */
async function GraphDATA02514() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[513];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02514.push(vote_macron); 
    vote_lepen_02514.push(vote_lepen);
    vote_rejet_02514.push(vote_rejet);
    vote_macronpop_02514.push(vote_macronMediane);
    vote_lepenpop_02514.push(vote_lepenMediane);
    vote_rejetpop_02514.push(vote_rejetMediane);
    name_Commune_02514.push(nameCommune);
    Pourcentage_02514.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02514.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02514.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02514.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02514.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02514 = [];
const vote_lepen_02514 = [];
const vote_rejet_02514 = [];
const vote_macronpop_02514 = [];
const vote_lepenpop_02514 = [];
const vote_rejetpop_02514 = [];
const name_Commune_02514 = [];
const Pourcentage_02514 = [];
const Pourcentage_rejet_02514 = [];
const vote_gene_macron_02514 = [];
const vote_gene_lepen_02514 = [];
const vote_gene_rejet_02514 = [];

async function chartIt02514(){
    await GraphDATA02514();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02514-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02514
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02514
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02514-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02514,vote_lepen_02514,vote_rejet_02514]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02514-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02514,vote_lepenpop_02514,vote_rejetpop_02514]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02514"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02514
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02514
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02514
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02515*/
/*------------------------------------------------------------------ */
async function GraphDATA02515() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[514];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02515.push(vote_macron); 
    vote_lepen_02515.push(vote_lepen);
    vote_rejet_02515.push(vote_rejet);
    vote_macronpop_02515.push(vote_macronMediane);
    vote_lepenpop_02515.push(vote_lepenMediane);
    vote_rejetpop_02515.push(vote_rejetMediane);
    name_Commune_02515.push(nameCommune);
    Pourcentage_02515.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02515.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02515.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02515.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02515.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02515 = [];
const vote_lepen_02515 = [];
const vote_rejet_02515 = [];
const vote_macronpop_02515 = [];
const vote_lepenpop_02515 = [];
const vote_rejetpop_02515 = [];
const name_Commune_02515 = [];
const Pourcentage_02515 = [];
const Pourcentage_rejet_02515 = [];
const vote_gene_macron_02515 = [];
const vote_gene_lepen_02515 = [];
const vote_gene_rejet_02515 = [];

async function chartIt02515(){
    await GraphDATA02515();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02515-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02515
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02515
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02515-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02515,vote_lepen_02515,vote_rejet_02515]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02515-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02515,vote_lepenpop_02515,vote_rejetpop_02515]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02515"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02515
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02515
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02515
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02516*/
/*------------------------------------------------------------------ */
async function GraphDATA02516() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[515];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02516.push(vote_macron); 
    vote_lepen_02516.push(vote_lepen);
    vote_rejet_02516.push(vote_rejet);
    vote_macronpop_02516.push(vote_macronMediane);
    vote_lepenpop_02516.push(vote_lepenMediane);
    vote_rejetpop_02516.push(vote_rejetMediane);
    name_Commune_02516.push(nameCommune);
    Pourcentage_02516.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02516.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02516.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02516.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02516.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02516 = [];
const vote_lepen_02516 = [];
const vote_rejet_02516 = [];
const vote_macronpop_02516 = [];
const vote_lepenpop_02516 = [];
const vote_rejetpop_02516 = [];
const name_Commune_02516 = [];
const Pourcentage_02516 = [];
const Pourcentage_rejet_02516 = [];
const vote_gene_macron_02516 = [];
const vote_gene_lepen_02516 = [];
const vote_gene_rejet_02516 = [];

async function chartIt02516(){
    await GraphDATA02516();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02516-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02516
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02516
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02516-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02516,vote_lepen_02516,vote_rejet_02516]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02516-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02516,vote_lepenpop_02516,vote_rejetpop_02516]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02516"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02516
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02516
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02516
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02517*/
/*------------------------------------------------------------------ */
async function GraphDATA02517() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[516];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02517.push(vote_macron); 
    vote_lepen_02517.push(vote_lepen);
    vote_rejet_02517.push(vote_rejet);
    vote_macronpop_02517.push(vote_macronMediane);
    vote_lepenpop_02517.push(vote_lepenMediane);
    vote_rejetpop_02517.push(vote_rejetMediane);
    name_Commune_02517.push(nameCommune);
    Pourcentage_02517.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02517.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02517.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02517.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02517.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02517 = [];
const vote_lepen_02517 = [];
const vote_rejet_02517 = [];
const vote_macronpop_02517 = [];
const vote_lepenpop_02517 = [];
const vote_rejetpop_02517 = [];
const name_Commune_02517 = [];
const Pourcentage_02517 = [];
const Pourcentage_rejet_02517 = [];
const vote_gene_macron_02517 = [];
const vote_gene_lepen_02517 = [];
const vote_gene_rejet_02517 = [];

async function chartIt02517(){
    await GraphDATA02517();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02517-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02517
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02517
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02517-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02517,vote_lepen_02517,vote_rejet_02517]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02517-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02517,vote_lepenpop_02517,vote_rejetpop_02517]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02517"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02517
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02517
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02517
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02518*/
/*------------------------------------------------------------------ */
async function GraphDATA02518() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[517];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02518.push(vote_macron); 
    vote_lepen_02518.push(vote_lepen);
    vote_rejet_02518.push(vote_rejet);
    vote_macronpop_02518.push(vote_macronMediane);
    vote_lepenpop_02518.push(vote_lepenMediane);
    vote_rejetpop_02518.push(vote_rejetMediane);
    name_Commune_02518.push(nameCommune);
    Pourcentage_02518.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02518.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02518.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02518.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02518.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02518 = [];
const vote_lepen_02518 = [];
const vote_rejet_02518 = [];
const vote_macronpop_02518 = [];
const vote_lepenpop_02518 = [];
const vote_rejetpop_02518 = [];
const name_Commune_02518 = [];
const Pourcentage_02518 = [];
const Pourcentage_rejet_02518 = [];
const vote_gene_macron_02518 = [];
const vote_gene_lepen_02518 = [];
const vote_gene_rejet_02518 = [];

async function chartIt02518(){
    await GraphDATA02518();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02518-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02518
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02518
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02518-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02518,vote_lepen_02518,vote_rejet_02518]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02518-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02518,vote_lepenpop_02518,vote_rejetpop_02518]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02518"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02518
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02518
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02518
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02519*/
/*------------------------------------------------------------------ */
async function GraphDATA02519() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[518];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02519.push(vote_macron); 
    vote_lepen_02519.push(vote_lepen);
    vote_rejet_02519.push(vote_rejet);
    vote_macronpop_02519.push(vote_macronMediane);
    vote_lepenpop_02519.push(vote_lepenMediane);
    vote_rejetpop_02519.push(vote_rejetMediane);
    name_Commune_02519.push(nameCommune);
    Pourcentage_02519.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02519.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02519.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02519.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02519.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02519 = [];
const vote_lepen_02519 = [];
const vote_rejet_02519 = [];
const vote_macronpop_02519 = [];
const vote_lepenpop_02519 = [];
const vote_rejetpop_02519 = [];
const name_Commune_02519 = [];
const Pourcentage_02519 = [];
const Pourcentage_rejet_02519 = [];
const vote_gene_macron_02519 = [];
const vote_gene_lepen_02519 = [];
const vote_gene_rejet_02519 = [];

async function chartIt02519(){
    await GraphDATA02519();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02519-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02519
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02519
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02519-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02519,vote_lepen_02519,vote_rejet_02519]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02519-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02519,vote_lepenpop_02519,vote_rejetpop_02519]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02519"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02519
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02519
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02519
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02520*/
/*------------------------------------------------------------------ */
async function GraphDATA02520() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[519];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02520.push(vote_macron); 
    vote_lepen_02520.push(vote_lepen);
    vote_rejet_02520.push(vote_rejet);
    vote_macronpop_02520.push(vote_macronMediane);
    vote_lepenpop_02520.push(vote_lepenMediane);
    vote_rejetpop_02520.push(vote_rejetMediane);
    name_Commune_02520.push(nameCommune);
    Pourcentage_02520.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02520.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02520.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02520.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02520.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02520 = [];
const vote_lepen_02520 = [];
const vote_rejet_02520 = [];
const vote_macronpop_02520 = [];
const vote_lepenpop_02520 = [];
const vote_rejetpop_02520 = [];
const name_Commune_02520 = [];
const Pourcentage_02520 = [];
const Pourcentage_rejet_02520 = [];
const vote_gene_macron_02520 = [];
const vote_gene_lepen_02520 = [];
const vote_gene_rejet_02520 = [];

async function chartIt02520(){
    await GraphDATA02520();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02520-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02520
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02520
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02520-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02520,vote_lepen_02520,vote_rejet_02520]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02520-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02520,vote_lepenpop_02520,vote_rejetpop_02520]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02520"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02520
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02520
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02520
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02521*/
/*------------------------------------------------------------------ */
async function GraphDATA02521() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[520];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02521.push(vote_macron); 
    vote_lepen_02521.push(vote_lepen);
    vote_rejet_02521.push(vote_rejet);
    vote_macronpop_02521.push(vote_macronMediane);
    vote_lepenpop_02521.push(vote_lepenMediane);
    vote_rejetpop_02521.push(vote_rejetMediane);
    name_Commune_02521.push(nameCommune);
    Pourcentage_02521.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02521.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02521.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02521.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02521.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02521 = [];
const vote_lepen_02521 = [];
const vote_rejet_02521 = [];
const vote_macronpop_02521 = [];
const vote_lepenpop_02521 = [];
const vote_rejetpop_02521 = [];
const name_Commune_02521 = [];
const Pourcentage_02521 = [];
const Pourcentage_rejet_02521 = [];
const vote_gene_macron_02521 = [];
const vote_gene_lepen_02521 = [];
const vote_gene_rejet_02521 = [];

async function chartIt02521(){
    await GraphDATA02521();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02521-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02521
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02521
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02521-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02521,vote_lepen_02521,vote_rejet_02521]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02521-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02521,vote_lepenpop_02521,vote_rejetpop_02521]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02521"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02521
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02521
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02521
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02522*/
/*------------------------------------------------------------------ */
async function GraphDATA02522() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[521];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02522.push(vote_macron); 
    vote_lepen_02522.push(vote_lepen);
    vote_rejet_02522.push(vote_rejet);
    vote_macronpop_02522.push(vote_macronMediane);
    vote_lepenpop_02522.push(vote_lepenMediane);
    vote_rejetpop_02522.push(vote_rejetMediane);
    name_Commune_02522.push(nameCommune);
    Pourcentage_02522.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02522.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02522.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02522.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02522.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02522 = [];
const vote_lepen_02522 = [];
const vote_rejet_02522 = [];
const vote_macronpop_02522 = [];
const vote_lepenpop_02522 = [];
const vote_rejetpop_02522 = [];
const name_Commune_02522 = [];
const Pourcentage_02522 = [];
const Pourcentage_rejet_02522 = [];
const vote_gene_macron_02522 = [];
const vote_gene_lepen_02522 = [];
const vote_gene_rejet_02522 = [];

async function chartIt02522(){
    await GraphDATA02522();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02522-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02522
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02522
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02522-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02522,vote_lepen_02522,vote_rejet_02522]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02522-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02522,vote_lepenpop_02522,vote_rejetpop_02522]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02522"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02522
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02522
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02522
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02523*/
/*------------------------------------------------------------------ */
async function GraphDATA02523() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[522];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02523.push(vote_macron); 
    vote_lepen_02523.push(vote_lepen);
    vote_rejet_02523.push(vote_rejet);
    vote_macronpop_02523.push(vote_macronMediane);
    vote_lepenpop_02523.push(vote_lepenMediane);
    vote_rejetpop_02523.push(vote_rejetMediane);
    name_Commune_02523.push(nameCommune);
    Pourcentage_02523.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02523.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02523.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02523.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02523.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02523 = [];
const vote_lepen_02523 = [];
const vote_rejet_02523 = [];
const vote_macronpop_02523 = [];
const vote_lepenpop_02523 = [];
const vote_rejetpop_02523 = [];
const name_Commune_02523 = [];
const Pourcentage_02523 = [];
const Pourcentage_rejet_02523 = [];
const vote_gene_macron_02523 = [];
const vote_gene_lepen_02523 = [];
const vote_gene_rejet_02523 = [];

async function chartIt02523(){
    await GraphDATA02523();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02523-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02523
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02523
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02523-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02523,vote_lepen_02523,vote_rejet_02523]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02523-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02523,vote_lepenpop_02523,vote_rejetpop_02523]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02523"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02523
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02523
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02523
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02524*/
/*------------------------------------------------------------------ */
async function GraphDATA02524() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[523];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02524.push(vote_macron); 
    vote_lepen_02524.push(vote_lepen);
    vote_rejet_02524.push(vote_rejet);
    vote_macronpop_02524.push(vote_macronMediane);
    vote_lepenpop_02524.push(vote_lepenMediane);
    vote_rejetpop_02524.push(vote_rejetMediane);
    name_Commune_02524.push(nameCommune);
    Pourcentage_02524.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02524.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02524.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02524.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02524.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02524 = [];
const vote_lepen_02524 = [];
const vote_rejet_02524 = [];
const vote_macronpop_02524 = [];
const vote_lepenpop_02524 = [];
const vote_rejetpop_02524 = [];
const name_Commune_02524 = [];
const Pourcentage_02524 = [];
const Pourcentage_rejet_02524 = [];
const vote_gene_macron_02524 = [];
const vote_gene_lepen_02524 = [];
const vote_gene_rejet_02524 = [];

async function chartIt02524(){
    await GraphDATA02524();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02524-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02524
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02524
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02524-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02524,vote_lepen_02524,vote_rejet_02524]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02524-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02524,vote_lepenpop_02524,vote_rejetpop_02524]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02524"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02524
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02524
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02524
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02525*/
/*------------------------------------------------------------------ */
async function GraphDATA02525() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[524];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02525.push(vote_macron); 
    vote_lepen_02525.push(vote_lepen);
    vote_rejet_02525.push(vote_rejet);
    vote_macronpop_02525.push(vote_macronMediane);
    vote_lepenpop_02525.push(vote_lepenMediane);
    vote_rejetpop_02525.push(vote_rejetMediane);
    name_Commune_02525.push(nameCommune);
    Pourcentage_02525.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02525.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02525.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02525.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02525.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02525 = [];
const vote_lepen_02525 = [];
const vote_rejet_02525 = [];
const vote_macronpop_02525 = [];
const vote_lepenpop_02525 = [];
const vote_rejetpop_02525 = [];
const name_Commune_02525 = [];
const Pourcentage_02525 = [];
const Pourcentage_rejet_02525 = [];
const vote_gene_macron_02525 = [];
const vote_gene_lepen_02525 = [];
const vote_gene_rejet_02525 = [];

async function chartIt02525(){
    await GraphDATA02525();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02525-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02525
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02525
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02525-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02525,vote_lepen_02525,vote_rejet_02525]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02525-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02525,vote_lepenpop_02525,vote_rejetpop_02525]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02525"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02525
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02525
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02525
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02526*/
/*------------------------------------------------------------------ */
async function GraphDATA02526() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[525];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02526.push(vote_macron); 
    vote_lepen_02526.push(vote_lepen);
    vote_rejet_02526.push(vote_rejet);
    vote_macronpop_02526.push(vote_macronMediane);
    vote_lepenpop_02526.push(vote_lepenMediane);
    vote_rejetpop_02526.push(vote_rejetMediane);
    name_Commune_02526.push(nameCommune);
    Pourcentage_02526.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02526.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02526.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02526.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02526.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02526 = [];
const vote_lepen_02526 = [];
const vote_rejet_02526 = [];
const vote_macronpop_02526 = [];
const vote_lepenpop_02526 = [];
const vote_rejetpop_02526 = [];
const name_Commune_02526 = [];
const Pourcentage_02526 = [];
const Pourcentage_rejet_02526 = [];
const vote_gene_macron_02526 = [];
const vote_gene_lepen_02526 = [];
const vote_gene_rejet_02526 = [];

async function chartIt02526(){
    await GraphDATA02526();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02526-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02526
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02526
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02526-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02526,vote_lepen_02526,vote_rejet_02526]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02526-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02526,vote_lepenpop_02526,vote_rejetpop_02526]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02526"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02526
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02526
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02526
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02527*/
/*------------------------------------------------------------------ */
async function GraphDATA02527() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[526];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02527.push(vote_macron); 
    vote_lepen_02527.push(vote_lepen);
    vote_rejet_02527.push(vote_rejet);
    vote_macronpop_02527.push(vote_macronMediane);
    vote_lepenpop_02527.push(vote_lepenMediane);
    vote_rejetpop_02527.push(vote_rejetMediane);
    name_Commune_02527.push(nameCommune);
    Pourcentage_02527.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02527.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02527.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02527.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02527.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02527 = [];
const vote_lepen_02527 = [];
const vote_rejet_02527 = [];
const vote_macronpop_02527 = [];
const vote_lepenpop_02527 = [];
const vote_rejetpop_02527 = [];
const name_Commune_02527 = [];
const Pourcentage_02527 = [];
const Pourcentage_rejet_02527 = [];
const vote_gene_macron_02527 = [];
const vote_gene_lepen_02527 = [];
const vote_gene_rejet_02527 = [];

async function chartIt02527(){
    await GraphDATA02527();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02527-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02527
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02527
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02527-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02527,vote_lepen_02527,vote_rejet_02527]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02527-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02527,vote_lepenpop_02527,vote_rejetpop_02527]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02527"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02527
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02527
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02527
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02528*/
/*------------------------------------------------------------------ */
async function GraphDATA02528() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[527];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02528.push(vote_macron); 
    vote_lepen_02528.push(vote_lepen);
    vote_rejet_02528.push(vote_rejet);
    vote_macronpop_02528.push(vote_macronMediane);
    vote_lepenpop_02528.push(vote_lepenMediane);
    vote_rejetpop_02528.push(vote_rejetMediane);
    name_Commune_02528.push(nameCommune);
    Pourcentage_02528.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02528.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02528.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02528.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02528.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02528 = [];
const vote_lepen_02528 = [];
const vote_rejet_02528 = [];
const vote_macronpop_02528 = [];
const vote_lepenpop_02528 = [];
const vote_rejetpop_02528 = [];
const name_Commune_02528 = [];
const Pourcentage_02528 = [];
const Pourcentage_rejet_02528 = [];
const vote_gene_macron_02528 = [];
const vote_gene_lepen_02528 = [];
const vote_gene_rejet_02528 = [];

async function chartIt02528(){
    await GraphDATA02528();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02528-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02528
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02528
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02528-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02528,vote_lepen_02528,vote_rejet_02528]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02528-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02528,vote_lepenpop_02528,vote_rejetpop_02528]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02528"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02528
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02528
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02528
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02529*/
/*------------------------------------------------------------------ */
async function GraphDATA02529() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[528];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02529.push(vote_macron); 
    vote_lepen_02529.push(vote_lepen);
    vote_rejet_02529.push(vote_rejet);
    vote_macronpop_02529.push(vote_macronMediane);
    vote_lepenpop_02529.push(vote_lepenMediane);
    vote_rejetpop_02529.push(vote_rejetMediane);
    name_Commune_02529.push(nameCommune);
    Pourcentage_02529.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02529.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02529.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02529.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02529.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02529 = [];
const vote_lepen_02529 = [];
const vote_rejet_02529 = [];
const vote_macronpop_02529 = [];
const vote_lepenpop_02529 = [];
const vote_rejetpop_02529 = [];
const name_Commune_02529 = [];
const Pourcentage_02529 = [];
const Pourcentage_rejet_02529 = [];
const vote_gene_macron_02529 = [];
const vote_gene_lepen_02529 = [];
const vote_gene_rejet_02529 = [];

async function chartIt02529(){
    await GraphDATA02529();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02529-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02529
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02529
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02529-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02529,vote_lepen_02529,vote_rejet_02529]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02529-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02529,vote_lepenpop_02529,vote_rejetpop_02529]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02529"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02529
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02529
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02529
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02530*/
/*------------------------------------------------------------------ */
async function GraphDATA02530() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[529];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02530.push(vote_macron); 
    vote_lepen_02530.push(vote_lepen);
    vote_rejet_02530.push(vote_rejet);
    vote_macronpop_02530.push(vote_macronMediane);
    vote_lepenpop_02530.push(vote_lepenMediane);
    vote_rejetpop_02530.push(vote_rejetMediane);
    name_Commune_02530.push(nameCommune);
    Pourcentage_02530.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02530.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02530.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02530.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02530.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02530 = [];
const vote_lepen_02530 = [];
const vote_rejet_02530 = [];
const vote_macronpop_02530 = [];
const vote_lepenpop_02530 = [];
const vote_rejetpop_02530 = [];
const name_Commune_02530 = [];
const Pourcentage_02530 = [];
const Pourcentage_rejet_02530 = [];
const vote_gene_macron_02530 = [];
const vote_gene_lepen_02530 = [];
const vote_gene_rejet_02530 = [];

async function chartIt02530(){
    await GraphDATA02530();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02530-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02530
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02530
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02530-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02530,vote_lepen_02530,vote_rejet_02530]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02530-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02530,vote_lepenpop_02530,vote_rejetpop_02530]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02530"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02530
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02530
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02530
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02531*/
/*------------------------------------------------------------------ */
async function GraphDATA02531() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[530];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02531.push(vote_macron); 
    vote_lepen_02531.push(vote_lepen);
    vote_rejet_02531.push(vote_rejet);
    vote_macronpop_02531.push(vote_macronMediane);
    vote_lepenpop_02531.push(vote_lepenMediane);
    vote_rejetpop_02531.push(vote_rejetMediane);
    name_Commune_02531.push(nameCommune);
    Pourcentage_02531.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02531.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02531.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02531.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02531.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02531 = [];
const vote_lepen_02531 = [];
const vote_rejet_02531 = [];
const vote_macronpop_02531 = [];
const vote_lepenpop_02531 = [];
const vote_rejetpop_02531 = [];
const name_Commune_02531 = [];
const Pourcentage_02531 = [];
const Pourcentage_rejet_02531 = [];
const vote_gene_macron_02531 = [];
const vote_gene_lepen_02531 = [];
const vote_gene_rejet_02531 = [];

async function chartIt02531(){
    await GraphDATA02531();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02531-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02531
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02531
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02531-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02531,vote_lepen_02531,vote_rejet_02531]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02531-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02531,vote_lepenpop_02531,vote_rejetpop_02531]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02531"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02531
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02531
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02531
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02532*/
/*------------------------------------------------------------------ */
async function GraphDATA02532() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[531];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02532.push(vote_macron); 
    vote_lepen_02532.push(vote_lepen);
    vote_rejet_02532.push(vote_rejet);
    vote_macronpop_02532.push(vote_macronMediane);
    vote_lepenpop_02532.push(vote_lepenMediane);
    vote_rejetpop_02532.push(vote_rejetMediane);
    name_Commune_02532.push(nameCommune);
    Pourcentage_02532.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02532.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02532.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02532.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02532.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02532 = [];
const vote_lepen_02532 = [];
const vote_rejet_02532 = [];
const vote_macronpop_02532 = [];
const vote_lepenpop_02532 = [];
const vote_rejetpop_02532 = [];
const name_Commune_02532 = [];
const Pourcentage_02532 = [];
const Pourcentage_rejet_02532 = [];
const vote_gene_macron_02532 = [];
const vote_gene_lepen_02532 = [];
const vote_gene_rejet_02532 = [];

async function chartIt02532(){
    await GraphDATA02532();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02532-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02532
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02532
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02532-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02532,vote_lepen_02532,vote_rejet_02532]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02532-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02532,vote_lepenpop_02532,vote_rejetpop_02532]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02532"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02532
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02532
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02532
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02533*/
/*------------------------------------------------------------------ */
async function GraphDATA02533() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[532];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02533.push(vote_macron); 
    vote_lepen_02533.push(vote_lepen);
    vote_rejet_02533.push(vote_rejet);
    vote_macronpop_02533.push(vote_macronMediane);
    vote_lepenpop_02533.push(vote_lepenMediane);
    vote_rejetpop_02533.push(vote_rejetMediane);
    name_Commune_02533.push(nameCommune);
    Pourcentage_02533.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02533.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02533.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02533.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02533.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02533 = [];
const vote_lepen_02533 = [];
const vote_rejet_02533 = [];
const vote_macronpop_02533 = [];
const vote_lepenpop_02533 = [];
const vote_rejetpop_02533 = [];
const name_Commune_02533 = [];
const Pourcentage_02533 = [];
const Pourcentage_rejet_02533 = [];
const vote_gene_macron_02533 = [];
const vote_gene_lepen_02533 = [];
const vote_gene_rejet_02533 = [];

async function chartIt02533(){
    await GraphDATA02533();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02533-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02533
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02533
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02533-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02533,vote_lepen_02533,vote_rejet_02533]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02533-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02533,vote_lepenpop_02533,vote_rejetpop_02533]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02533"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02533
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02533
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02533
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02534*/
/*------------------------------------------------------------------ */
async function GraphDATA02534() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[533];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02534.push(vote_macron); 
    vote_lepen_02534.push(vote_lepen);
    vote_rejet_02534.push(vote_rejet);
    vote_macronpop_02534.push(vote_macronMediane);
    vote_lepenpop_02534.push(vote_lepenMediane);
    vote_rejetpop_02534.push(vote_rejetMediane);
    name_Commune_02534.push(nameCommune);
    Pourcentage_02534.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02534.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02534.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02534.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02534.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02534 = [];
const vote_lepen_02534 = [];
const vote_rejet_02534 = [];
const vote_macronpop_02534 = [];
const vote_lepenpop_02534 = [];
const vote_rejetpop_02534 = [];
const name_Commune_02534 = [];
const Pourcentage_02534 = [];
const Pourcentage_rejet_02534 = [];
const vote_gene_macron_02534 = [];
const vote_gene_lepen_02534 = [];
const vote_gene_rejet_02534 = [];

async function chartIt02534(){
    await GraphDATA02534();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02534-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02534
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02534
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02534-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02534,vote_lepen_02534,vote_rejet_02534]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02534-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02534,vote_lepenpop_02534,vote_rejetpop_02534]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02534"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02534
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02534
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02534
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02535*/
/*------------------------------------------------------------------ */
async function GraphDATA02535() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[534];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02535.push(vote_macron); 
    vote_lepen_02535.push(vote_lepen);
    vote_rejet_02535.push(vote_rejet);
    vote_macronpop_02535.push(vote_macronMediane);
    vote_lepenpop_02535.push(vote_lepenMediane);
    vote_rejetpop_02535.push(vote_rejetMediane);
    name_Commune_02535.push(nameCommune);
    Pourcentage_02535.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02535.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02535.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02535.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02535.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02535 = [];
const vote_lepen_02535 = [];
const vote_rejet_02535 = [];
const vote_macronpop_02535 = [];
const vote_lepenpop_02535 = [];
const vote_rejetpop_02535 = [];
const name_Commune_02535 = [];
const Pourcentage_02535 = [];
const Pourcentage_rejet_02535 = [];
const vote_gene_macron_02535 = [];
const vote_gene_lepen_02535 = [];
const vote_gene_rejet_02535 = [];

async function chartIt02535(){
    await GraphDATA02535();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02535-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02535
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02535
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02535-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02535,vote_lepen_02535,vote_rejet_02535]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02535-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02535,vote_lepenpop_02535,vote_rejetpop_02535]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02535"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02535
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02535
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02535
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02536*/
/*------------------------------------------------------------------ */
async function GraphDATA02536() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[535];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02536.push(vote_macron); 
    vote_lepen_02536.push(vote_lepen);
    vote_rejet_02536.push(vote_rejet);
    vote_macronpop_02536.push(vote_macronMediane);
    vote_lepenpop_02536.push(vote_lepenMediane);
    vote_rejetpop_02536.push(vote_rejetMediane);
    name_Commune_02536.push(nameCommune);
    Pourcentage_02536.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02536.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02536.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02536.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02536.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02536 = [];
const vote_lepen_02536 = [];
const vote_rejet_02536 = [];
const vote_macronpop_02536 = [];
const vote_lepenpop_02536 = [];
const vote_rejetpop_02536 = [];
const name_Commune_02536 = [];
const Pourcentage_02536 = [];
const Pourcentage_rejet_02536 = [];
const vote_gene_macron_02536 = [];
const vote_gene_lepen_02536 = [];
const vote_gene_rejet_02536 = [];

async function chartIt02536(){
    await GraphDATA02536();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02536-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02536
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02536
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02536-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02536,vote_lepen_02536,vote_rejet_02536]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02536-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02536,vote_lepenpop_02536,vote_rejetpop_02536]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02536"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02536
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02536
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02536
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02537*/
/*------------------------------------------------------------------ */
async function GraphDATA02537() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[536];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02537.push(vote_macron); 
    vote_lepen_02537.push(vote_lepen);
    vote_rejet_02537.push(vote_rejet);
    vote_macronpop_02537.push(vote_macronMediane);
    vote_lepenpop_02537.push(vote_lepenMediane);
    vote_rejetpop_02537.push(vote_rejetMediane);
    name_Commune_02537.push(nameCommune);
    Pourcentage_02537.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02537.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02537.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02537.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02537.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02537 = [];
const vote_lepen_02537 = [];
const vote_rejet_02537 = [];
const vote_macronpop_02537 = [];
const vote_lepenpop_02537 = [];
const vote_rejetpop_02537 = [];
const name_Commune_02537 = [];
const Pourcentage_02537 = [];
const Pourcentage_rejet_02537 = [];
const vote_gene_macron_02537 = [];
const vote_gene_lepen_02537 = [];
const vote_gene_rejet_02537 = [];

async function chartIt02537(){
    await GraphDATA02537();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02537-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02537
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02537
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02537-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02537,vote_lepen_02537,vote_rejet_02537]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02537-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02537,vote_lepenpop_02537,vote_rejetpop_02537]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02537"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02537
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02537
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02537
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02538*/
/*------------------------------------------------------------------ */
async function GraphDATA02538() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[537];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02538.push(vote_macron); 
    vote_lepen_02538.push(vote_lepen);
    vote_rejet_02538.push(vote_rejet);
    vote_macronpop_02538.push(vote_macronMediane);
    vote_lepenpop_02538.push(vote_lepenMediane);
    vote_rejetpop_02538.push(vote_rejetMediane);
    name_Commune_02538.push(nameCommune);
    Pourcentage_02538.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02538.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02538.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02538.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02538.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02538 = [];
const vote_lepen_02538 = [];
const vote_rejet_02538 = [];
const vote_macronpop_02538 = [];
const vote_lepenpop_02538 = [];
const vote_rejetpop_02538 = [];
const name_Commune_02538 = [];
const Pourcentage_02538 = [];
const Pourcentage_rejet_02538 = [];
const vote_gene_macron_02538 = [];
const vote_gene_lepen_02538 = [];
const vote_gene_rejet_02538 = [];

async function chartIt02538(){
    await GraphDATA02538();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02538-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02538
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02538
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02538-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02538,vote_lepen_02538,vote_rejet_02538]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02538-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02538,vote_lepenpop_02538,vote_rejetpop_02538]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02538"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02538
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02538
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02538
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02539*/
/*------------------------------------------------------------------ */
async function GraphDATA02539() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[538];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02539.push(vote_macron); 
    vote_lepen_02539.push(vote_lepen);
    vote_rejet_02539.push(vote_rejet);
    vote_macronpop_02539.push(vote_macronMediane);
    vote_lepenpop_02539.push(vote_lepenMediane);
    vote_rejetpop_02539.push(vote_rejetMediane);
    name_Commune_02539.push(nameCommune);
    Pourcentage_02539.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02539.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02539.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02539.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02539.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02539 = [];
const vote_lepen_02539 = [];
const vote_rejet_02539 = [];
const vote_macronpop_02539 = [];
const vote_lepenpop_02539 = [];
const vote_rejetpop_02539 = [];
const name_Commune_02539 = [];
const Pourcentage_02539 = [];
const Pourcentage_rejet_02539 = [];
const vote_gene_macron_02539 = [];
const vote_gene_lepen_02539 = [];
const vote_gene_rejet_02539 = [];

async function chartIt02539(){
    await GraphDATA02539();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02539-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02539
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02539
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02539-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02539,vote_lepen_02539,vote_rejet_02539]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02539-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02539,vote_lepenpop_02539,vote_rejetpop_02539]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02539"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02539
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02539
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02539
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02540*/
/*------------------------------------------------------------------ */
async function GraphDATA02540() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[539];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02540.push(vote_macron); 
    vote_lepen_02540.push(vote_lepen);
    vote_rejet_02540.push(vote_rejet);
    vote_macronpop_02540.push(vote_macronMediane);
    vote_lepenpop_02540.push(vote_lepenMediane);
    vote_rejetpop_02540.push(vote_rejetMediane);
    name_Commune_02540.push(nameCommune);
    Pourcentage_02540.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02540.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02540.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02540.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02540.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02540 = [];
const vote_lepen_02540 = [];
const vote_rejet_02540 = [];
const vote_macronpop_02540 = [];
const vote_lepenpop_02540 = [];
const vote_rejetpop_02540 = [];
const name_Commune_02540 = [];
const Pourcentage_02540 = [];
const Pourcentage_rejet_02540 = [];
const vote_gene_macron_02540 = [];
const vote_gene_lepen_02540 = [];
const vote_gene_rejet_02540 = [];

async function chartIt02540(){
    await GraphDATA02540();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02540-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02540
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02540
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02540-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02540,vote_lepen_02540,vote_rejet_02540]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02540-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02540,vote_lepenpop_02540,vote_rejetpop_02540]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02540"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02540
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02540
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02540
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02541*/
/*------------------------------------------------------------------ */
async function GraphDATA02541() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[540];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02541.push(vote_macron); 
    vote_lepen_02541.push(vote_lepen);
    vote_rejet_02541.push(vote_rejet);
    vote_macronpop_02541.push(vote_macronMediane);
    vote_lepenpop_02541.push(vote_lepenMediane);
    vote_rejetpop_02541.push(vote_rejetMediane);
    name_Commune_02541.push(nameCommune);
    Pourcentage_02541.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02541.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02541.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02541.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02541.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02541 = [];
const vote_lepen_02541 = [];
const vote_rejet_02541 = [];
const vote_macronpop_02541 = [];
const vote_lepenpop_02541 = [];
const vote_rejetpop_02541 = [];
const name_Commune_02541 = [];
const Pourcentage_02541 = [];
const Pourcentage_rejet_02541 = [];
const vote_gene_macron_02541 = [];
const vote_gene_lepen_02541 = [];
const vote_gene_rejet_02541 = [];

async function chartIt02541(){
    await GraphDATA02541();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02541-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02541
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02541
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02541-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02541,vote_lepen_02541,vote_rejet_02541]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02541-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02541,vote_lepenpop_02541,vote_rejetpop_02541]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02541"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02541
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02541
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02541
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02542*/
/*------------------------------------------------------------------ */
async function GraphDATA02542() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[541];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02542.push(vote_macron); 
    vote_lepen_02542.push(vote_lepen);
    vote_rejet_02542.push(vote_rejet);
    vote_macronpop_02542.push(vote_macronMediane);
    vote_lepenpop_02542.push(vote_lepenMediane);
    vote_rejetpop_02542.push(vote_rejetMediane);
    name_Commune_02542.push(nameCommune);
    Pourcentage_02542.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02542.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02542.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02542.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02542.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02542 = [];
const vote_lepen_02542 = [];
const vote_rejet_02542 = [];
const vote_macronpop_02542 = [];
const vote_lepenpop_02542 = [];
const vote_rejetpop_02542 = [];
const name_Commune_02542 = [];
const Pourcentage_02542 = [];
const Pourcentage_rejet_02542 = [];
const vote_gene_macron_02542 = [];
const vote_gene_lepen_02542 = [];
const vote_gene_rejet_02542 = [];

async function chartIt02542(){
    await GraphDATA02542();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02542-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02542
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02542
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02542-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02542,vote_lepen_02542,vote_rejet_02542]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02542-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02542,vote_lepenpop_02542,vote_rejetpop_02542]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02542"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02542
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02542
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02542
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02543*/
/*------------------------------------------------------------------ */
async function GraphDATA02543() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[542];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02543.push(vote_macron); 
    vote_lepen_02543.push(vote_lepen);
    vote_rejet_02543.push(vote_rejet);
    vote_macronpop_02543.push(vote_macronMediane);
    vote_lepenpop_02543.push(vote_lepenMediane);
    vote_rejetpop_02543.push(vote_rejetMediane);
    name_Commune_02543.push(nameCommune);
    Pourcentage_02543.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02543.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02543.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02543.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02543.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02543 = [];
const vote_lepen_02543 = [];
const vote_rejet_02543 = [];
const vote_macronpop_02543 = [];
const vote_lepenpop_02543 = [];
const vote_rejetpop_02543 = [];
const name_Commune_02543 = [];
const Pourcentage_02543 = [];
const Pourcentage_rejet_02543 = [];
const vote_gene_macron_02543 = [];
const vote_gene_lepen_02543 = [];
const vote_gene_rejet_02543 = [];

async function chartIt02543(){
    await GraphDATA02543();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02543-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02543
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02543
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02543-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02543,vote_lepen_02543,vote_rejet_02543]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02543-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02543,vote_lepenpop_02543,vote_rejetpop_02543]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02543"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02543
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02543
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02543
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02544*/
/*------------------------------------------------------------------ */
async function GraphDATA02544() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[543];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02544.push(vote_macron); 
    vote_lepen_02544.push(vote_lepen);
    vote_rejet_02544.push(vote_rejet);
    vote_macronpop_02544.push(vote_macronMediane);
    vote_lepenpop_02544.push(vote_lepenMediane);
    vote_rejetpop_02544.push(vote_rejetMediane);
    name_Commune_02544.push(nameCommune);
    Pourcentage_02544.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02544.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02544.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02544.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02544.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02544 = [];
const vote_lepen_02544 = [];
const vote_rejet_02544 = [];
const vote_macronpop_02544 = [];
const vote_lepenpop_02544 = [];
const vote_rejetpop_02544 = [];
const name_Commune_02544 = [];
const Pourcentage_02544 = [];
const Pourcentage_rejet_02544 = [];
const vote_gene_macron_02544 = [];
const vote_gene_lepen_02544 = [];
const vote_gene_rejet_02544 = [];

async function chartIt02544(){
    await GraphDATA02544();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02544-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02544
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02544
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02544-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02544,vote_lepen_02544,vote_rejet_02544]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02544-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02544,vote_lepenpop_02544,vote_rejetpop_02544]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02544"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02544
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02544
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02544
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02545*/
/*------------------------------------------------------------------ */
async function GraphDATA02545() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[544];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02545.push(vote_macron); 
    vote_lepen_02545.push(vote_lepen);
    vote_rejet_02545.push(vote_rejet);
    vote_macronpop_02545.push(vote_macronMediane);
    vote_lepenpop_02545.push(vote_lepenMediane);
    vote_rejetpop_02545.push(vote_rejetMediane);
    name_Commune_02545.push(nameCommune);
    Pourcentage_02545.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02545.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02545.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02545.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02545.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02545 = [];
const vote_lepen_02545 = [];
const vote_rejet_02545 = [];
const vote_macronpop_02545 = [];
const vote_lepenpop_02545 = [];
const vote_rejetpop_02545 = [];
const name_Commune_02545 = [];
const Pourcentage_02545 = [];
const Pourcentage_rejet_02545 = [];
const vote_gene_macron_02545 = [];
const vote_gene_lepen_02545 = [];
const vote_gene_rejet_02545 = [];

async function chartIt02545(){
    await GraphDATA02545();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02545-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02545
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02545
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02545-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02545,vote_lepen_02545,vote_rejet_02545]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02545-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02545,vote_lepenpop_02545,vote_rejetpop_02545]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02545"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02545
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02545
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02545
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02546*/
/*------------------------------------------------------------------ */
async function GraphDATA02546() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[545];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02546.push(vote_macron); 
    vote_lepen_02546.push(vote_lepen);
    vote_rejet_02546.push(vote_rejet);
    vote_macronpop_02546.push(vote_macronMediane);
    vote_lepenpop_02546.push(vote_lepenMediane);
    vote_rejetpop_02546.push(vote_rejetMediane);
    name_Commune_02546.push(nameCommune);
    Pourcentage_02546.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02546.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02546.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02546.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02546.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02546 = [];
const vote_lepen_02546 = [];
const vote_rejet_02546 = [];
const vote_macronpop_02546 = [];
const vote_lepenpop_02546 = [];
const vote_rejetpop_02546 = [];
const name_Commune_02546 = [];
const Pourcentage_02546 = [];
const Pourcentage_rejet_02546 = [];
const vote_gene_macron_02546 = [];
const vote_gene_lepen_02546 = [];
const vote_gene_rejet_02546 = [];

async function chartIt02546(){
    await GraphDATA02546();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02546-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02546
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02546
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02546-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02546,vote_lepen_02546,vote_rejet_02546]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02546-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02546,vote_lepenpop_02546,vote_rejetpop_02546]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02546"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02546
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02546
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02546
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02547*/
/*------------------------------------------------------------------ */
async function GraphDATA02547() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[546];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02547.push(vote_macron); 
    vote_lepen_02547.push(vote_lepen);
    vote_rejet_02547.push(vote_rejet);
    vote_macronpop_02547.push(vote_macronMediane);
    vote_lepenpop_02547.push(vote_lepenMediane);
    vote_rejetpop_02547.push(vote_rejetMediane);
    name_Commune_02547.push(nameCommune);
    Pourcentage_02547.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02547.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02547.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02547.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02547.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02547 = [];
const vote_lepen_02547 = [];
const vote_rejet_02547 = [];
const vote_macronpop_02547 = [];
const vote_lepenpop_02547 = [];
const vote_rejetpop_02547 = [];
const name_Commune_02547 = [];
const Pourcentage_02547 = [];
const Pourcentage_rejet_02547 = [];
const vote_gene_macron_02547 = [];
const vote_gene_lepen_02547 = [];
const vote_gene_rejet_02547 = [];

async function chartIt02547(){
    await GraphDATA02547();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02547-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02547
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02547
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02547-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02547,vote_lepen_02547,vote_rejet_02547]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02547-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02547,vote_lepenpop_02547,vote_rejetpop_02547]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02547"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02547
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02547
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02547
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02548*/
/*------------------------------------------------------------------ */
async function GraphDATA02548() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[547];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02548.push(vote_macron); 
    vote_lepen_02548.push(vote_lepen);
    vote_rejet_02548.push(vote_rejet);
    vote_macronpop_02548.push(vote_macronMediane);
    vote_lepenpop_02548.push(vote_lepenMediane);
    vote_rejetpop_02548.push(vote_rejetMediane);
    name_Commune_02548.push(nameCommune);
    Pourcentage_02548.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02548.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02548.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02548.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02548.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02548 = [];
const vote_lepen_02548 = [];
const vote_rejet_02548 = [];
const vote_macronpop_02548 = [];
const vote_lepenpop_02548 = [];
const vote_rejetpop_02548 = [];
const name_Commune_02548 = [];
const Pourcentage_02548 = [];
const Pourcentage_rejet_02548 = [];
const vote_gene_macron_02548 = [];
const vote_gene_lepen_02548 = [];
const vote_gene_rejet_02548 = [];

async function chartIt02548(){
    await GraphDATA02548();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02548-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02548
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02548
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02548-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02548,vote_lepen_02548,vote_rejet_02548]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02548-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02548,vote_lepenpop_02548,vote_rejetpop_02548]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02548"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02548
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02548
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02548
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02549*/
/*------------------------------------------------------------------ */
async function GraphDATA02549() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[548];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02549.push(vote_macron); 
    vote_lepen_02549.push(vote_lepen);
    vote_rejet_02549.push(vote_rejet);
    vote_macronpop_02549.push(vote_macronMediane);
    vote_lepenpop_02549.push(vote_lepenMediane);
    vote_rejetpop_02549.push(vote_rejetMediane);
    name_Commune_02549.push(nameCommune);
    Pourcentage_02549.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02549.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02549.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02549.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02549.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02549 = [];
const vote_lepen_02549 = [];
const vote_rejet_02549 = [];
const vote_macronpop_02549 = [];
const vote_lepenpop_02549 = [];
const vote_rejetpop_02549 = [];
const name_Commune_02549 = [];
const Pourcentage_02549 = [];
const Pourcentage_rejet_02549 = [];
const vote_gene_macron_02549 = [];
const vote_gene_lepen_02549 = [];
const vote_gene_rejet_02549 = [];

async function chartIt02549(){
    await GraphDATA02549();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02549-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02549
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02549
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02549-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02549,vote_lepen_02549,vote_rejet_02549]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02549-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02549,vote_lepenpop_02549,vote_rejetpop_02549]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02549"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02549
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02549
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02549
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02550*/
/*------------------------------------------------------------------ */
async function GraphDATA02550() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[549];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02550.push(vote_macron); 
    vote_lepen_02550.push(vote_lepen);
    vote_rejet_02550.push(vote_rejet);
    vote_macronpop_02550.push(vote_macronMediane);
    vote_lepenpop_02550.push(vote_lepenMediane);
    vote_rejetpop_02550.push(vote_rejetMediane);
    name_Commune_02550.push(nameCommune);
    Pourcentage_02550.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02550.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02550.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02550.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02550.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02550 = [];
const vote_lepen_02550 = [];
const vote_rejet_02550 = [];
const vote_macronpop_02550 = [];
const vote_lepenpop_02550 = [];
const vote_rejetpop_02550 = [];
const name_Commune_02550 = [];
const Pourcentage_02550 = [];
const Pourcentage_rejet_02550 = [];
const vote_gene_macron_02550 = [];
const vote_gene_lepen_02550 = [];
const vote_gene_rejet_02550 = [];

async function chartIt02550(){
    await GraphDATA02550();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02550-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02550
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02550
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02550-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02550,vote_lepen_02550,vote_rejet_02550]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02550-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02550,vote_lepenpop_02550,vote_rejetpop_02550]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02550"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02550
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02550
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02550
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02551*/
/*------------------------------------------------------------------ */
async function GraphDATA02551() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[550];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02551.push(vote_macron); 
    vote_lepen_02551.push(vote_lepen);
    vote_rejet_02551.push(vote_rejet);
    vote_macronpop_02551.push(vote_macronMediane);
    vote_lepenpop_02551.push(vote_lepenMediane);
    vote_rejetpop_02551.push(vote_rejetMediane);
    name_Commune_02551.push(nameCommune);
    Pourcentage_02551.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02551.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02551.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02551.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02551.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02551 = [];
const vote_lepen_02551 = [];
const vote_rejet_02551 = [];
const vote_macronpop_02551 = [];
const vote_lepenpop_02551 = [];
const vote_rejetpop_02551 = [];
const name_Commune_02551 = [];
const Pourcentage_02551 = [];
const Pourcentage_rejet_02551 = [];
const vote_gene_macron_02551 = [];
const vote_gene_lepen_02551 = [];
const vote_gene_rejet_02551 = [];

async function chartIt02551(){
    await GraphDATA02551();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02551-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02551
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02551
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02551-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02551,vote_lepen_02551,vote_rejet_02551]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02551-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02551,vote_lepenpop_02551,vote_rejetpop_02551]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02551"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02551
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02551
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02551
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02552*/
/*------------------------------------------------------------------ */
async function GraphDATA02552() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[551];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02552.push(vote_macron); 
    vote_lepen_02552.push(vote_lepen);
    vote_rejet_02552.push(vote_rejet);
    vote_macronpop_02552.push(vote_macronMediane);
    vote_lepenpop_02552.push(vote_lepenMediane);
    vote_rejetpop_02552.push(vote_rejetMediane);
    name_Commune_02552.push(nameCommune);
    Pourcentage_02552.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02552.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02552.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02552.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02552.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02552 = [];
const vote_lepen_02552 = [];
const vote_rejet_02552 = [];
const vote_macronpop_02552 = [];
const vote_lepenpop_02552 = [];
const vote_rejetpop_02552 = [];
const name_Commune_02552 = [];
const Pourcentage_02552 = [];
const Pourcentage_rejet_02552 = [];
const vote_gene_macron_02552 = [];
const vote_gene_lepen_02552 = [];
const vote_gene_rejet_02552 = [];

async function chartIt02552(){
    await GraphDATA02552();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02552-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02552
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02552
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02552-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02552,vote_lepen_02552,vote_rejet_02552]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02552-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02552,vote_lepenpop_02552,vote_rejetpop_02552]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02552"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02552
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02552
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02552
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02553*/
/*------------------------------------------------------------------ */
async function GraphDATA02553() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[552];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02553.push(vote_macron); 
    vote_lepen_02553.push(vote_lepen);
    vote_rejet_02553.push(vote_rejet);
    vote_macronpop_02553.push(vote_macronMediane);
    vote_lepenpop_02553.push(vote_lepenMediane);
    vote_rejetpop_02553.push(vote_rejetMediane);
    name_Commune_02553.push(nameCommune);
    Pourcentage_02553.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02553.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02553.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02553.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02553.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02553 = [];
const vote_lepen_02553 = [];
const vote_rejet_02553 = [];
const vote_macronpop_02553 = [];
const vote_lepenpop_02553 = [];
const vote_rejetpop_02553 = [];
const name_Commune_02553 = [];
const Pourcentage_02553 = [];
const Pourcentage_rejet_02553 = [];
const vote_gene_macron_02553 = [];
const vote_gene_lepen_02553 = [];
const vote_gene_rejet_02553 = [];

async function chartIt02553(){
    await GraphDATA02553();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02553-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02553
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02553
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02553-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02553,vote_lepen_02553,vote_rejet_02553]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02553-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02553,vote_lepenpop_02553,vote_rejetpop_02553]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02553"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02553
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02553
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02553
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02554*/
/*------------------------------------------------------------------ */
async function GraphDATA02554() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[553];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02554.push(vote_macron); 
    vote_lepen_02554.push(vote_lepen);
    vote_rejet_02554.push(vote_rejet);
    vote_macronpop_02554.push(vote_macronMediane);
    vote_lepenpop_02554.push(vote_lepenMediane);
    vote_rejetpop_02554.push(vote_rejetMediane);
    name_Commune_02554.push(nameCommune);
    Pourcentage_02554.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02554.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02554.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02554.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02554.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02554 = [];
const vote_lepen_02554 = [];
const vote_rejet_02554 = [];
const vote_macronpop_02554 = [];
const vote_lepenpop_02554 = [];
const vote_rejetpop_02554 = [];
const name_Commune_02554 = [];
const Pourcentage_02554 = [];
const Pourcentage_rejet_02554 = [];
const vote_gene_macron_02554 = [];
const vote_gene_lepen_02554 = [];
const vote_gene_rejet_02554 = [];

async function chartIt02554(){
    await GraphDATA02554();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02554-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02554
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02554
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02554-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02554,vote_lepen_02554,vote_rejet_02554]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02554-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02554,vote_lepenpop_02554,vote_rejetpop_02554]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02554"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02554
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02554
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02554
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02555*/
/*------------------------------------------------------------------ */
async function GraphDATA02555() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[554];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02555.push(vote_macron); 
    vote_lepen_02555.push(vote_lepen);
    vote_rejet_02555.push(vote_rejet);
    vote_macronpop_02555.push(vote_macronMediane);
    vote_lepenpop_02555.push(vote_lepenMediane);
    vote_rejetpop_02555.push(vote_rejetMediane);
    name_Commune_02555.push(nameCommune);
    Pourcentage_02555.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02555.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02555.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02555.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02555.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02555 = [];
const vote_lepen_02555 = [];
const vote_rejet_02555 = [];
const vote_macronpop_02555 = [];
const vote_lepenpop_02555 = [];
const vote_rejetpop_02555 = [];
const name_Commune_02555 = [];
const Pourcentage_02555 = [];
const Pourcentage_rejet_02555 = [];
const vote_gene_macron_02555 = [];
const vote_gene_lepen_02555 = [];
const vote_gene_rejet_02555 = [];

async function chartIt02555(){
    await GraphDATA02555();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02555-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02555
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02555
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02555-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02555,vote_lepen_02555,vote_rejet_02555]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02555-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02555,vote_lepenpop_02555,vote_rejetpop_02555]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02555"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02555
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02555
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02555
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02556*/
/*------------------------------------------------------------------ */
async function GraphDATA02556() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[555];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02556.push(vote_macron); 
    vote_lepen_02556.push(vote_lepen);
    vote_rejet_02556.push(vote_rejet);
    vote_macronpop_02556.push(vote_macronMediane);
    vote_lepenpop_02556.push(vote_lepenMediane);
    vote_rejetpop_02556.push(vote_rejetMediane);
    name_Commune_02556.push(nameCommune);
    Pourcentage_02556.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02556.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02556.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02556.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02556.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02556 = [];
const vote_lepen_02556 = [];
const vote_rejet_02556 = [];
const vote_macronpop_02556 = [];
const vote_lepenpop_02556 = [];
const vote_rejetpop_02556 = [];
const name_Commune_02556 = [];
const Pourcentage_02556 = [];
const Pourcentage_rejet_02556 = [];
const vote_gene_macron_02556 = [];
const vote_gene_lepen_02556 = [];
const vote_gene_rejet_02556 = [];

async function chartIt02556(){
    await GraphDATA02556();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02556-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02556
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02556
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02556-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02556,vote_lepen_02556,vote_rejet_02556]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02556-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02556,vote_lepenpop_02556,vote_rejetpop_02556]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02556"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02556
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02556
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02556
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02557*/
/*------------------------------------------------------------------ */
async function GraphDATA02557() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[556];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02557.push(vote_macron); 
    vote_lepen_02557.push(vote_lepen);
    vote_rejet_02557.push(vote_rejet);
    vote_macronpop_02557.push(vote_macronMediane);
    vote_lepenpop_02557.push(vote_lepenMediane);
    vote_rejetpop_02557.push(vote_rejetMediane);
    name_Commune_02557.push(nameCommune);
    Pourcentage_02557.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02557.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02557.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02557.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02557.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02557 = [];
const vote_lepen_02557 = [];
const vote_rejet_02557 = [];
const vote_macronpop_02557 = [];
const vote_lepenpop_02557 = [];
const vote_rejetpop_02557 = [];
const name_Commune_02557 = [];
const Pourcentage_02557 = [];
const Pourcentage_rejet_02557 = [];
const vote_gene_macron_02557 = [];
const vote_gene_lepen_02557 = [];
const vote_gene_rejet_02557 = [];

async function chartIt02557(){
    await GraphDATA02557();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02557-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02557
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02557
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02557-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02557,vote_lepen_02557,vote_rejet_02557]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02557-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02557,vote_lepenpop_02557,vote_rejetpop_02557]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02557"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02557
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02557
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02557
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02558*/
/*------------------------------------------------------------------ */
async function GraphDATA02558() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[557];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02558.push(vote_macron); 
    vote_lepen_02558.push(vote_lepen);
    vote_rejet_02558.push(vote_rejet);
    vote_macronpop_02558.push(vote_macronMediane);
    vote_lepenpop_02558.push(vote_lepenMediane);
    vote_rejetpop_02558.push(vote_rejetMediane);
    name_Commune_02558.push(nameCommune);
    Pourcentage_02558.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02558.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02558.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02558.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02558.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02558 = [];
const vote_lepen_02558 = [];
const vote_rejet_02558 = [];
const vote_macronpop_02558 = [];
const vote_lepenpop_02558 = [];
const vote_rejetpop_02558 = [];
const name_Commune_02558 = [];
const Pourcentage_02558 = [];
const Pourcentage_rejet_02558 = [];
const vote_gene_macron_02558 = [];
const vote_gene_lepen_02558 = [];
const vote_gene_rejet_02558 = [];

async function chartIt02558(){
    await GraphDATA02558();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02558-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02558
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02558
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02558-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02558,vote_lepen_02558,vote_rejet_02558]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02558-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02558,vote_lepenpop_02558,vote_rejetpop_02558]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02558"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02558
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02558
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02558
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02559*/
/*------------------------------------------------------------------ */
async function GraphDATA02559() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[558];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02559.push(vote_macron); 
    vote_lepen_02559.push(vote_lepen);
    vote_rejet_02559.push(vote_rejet);
    vote_macronpop_02559.push(vote_macronMediane);
    vote_lepenpop_02559.push(vote_lepenMediane);
    vote_rejetpop_02559.push(vote_rejetMediane);
    name_Commune_02559.push(nameCommune);
    Pourcentage_02559.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02559.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02559.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02559.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02559.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02559 = [];
const vote_lepen_02559 = [];
const vote_rejet_02559 = [];
const vote_macronpop_02559 = [];
const vote_lepenpop_02559 = [];
const vote_rejetpop_02559 = [];
const name_Commune_02559 = [];
const Pourcentage_02559 = [];
const Pourcentage_rejet_02559 = [];
const vote_gene_macron_02559 = [];
const vote_gene_lepen_02559 = [];
const vote_gene_rejet_02559 = [];

async function chartIt02559(){
    await GraphDATA02559();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02559-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02559
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02559
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02559-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02559,vote_lepen_02559,vote_rejet_02559]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02559-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02559,vote_lepenpop_02559,vote_rejetpop_02559]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02559"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02559
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02559
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02559
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02560*/
/*------------------------------------------------------------------ */
async function GraphDATA02560() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[559];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02560.push(vote_macron); 
    vote_lepen_02560.push(vote_lepen);
    vote_rejet_02560.push(vote_rejet);
    vote_macronpop_02560.push(vote_macronMediane);
    vote_lepenpop_02560.push(vote_lepenMediane);
    vote_rejetpop_02560.push(vote_rejetMediane);
    name_Commune_02560.push(nameCommune);
    Pourcentage_02560.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02560.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02560.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02560.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02560.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02560 = [];
const vote_lepen_02560 = [];
const vote_rejet_02560 = [];
const vote_macronpop_02560 = [];
const vote_lepenpop_02560 = [];
const vote_rejetpop_02560 = [];
const name_Commune_02560 = [];
const Pourcentage_02560 = [];
const Pourcentage_rejet_02560 = [];
const vote_gene_macron_02560 = [];
const vote_gene_lepen_02560 = [];
const vote_gene_rejet_02560 = [];

async function chartIt02560(){
    await GraphDATA02560();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02560-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02560
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02560
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02560-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02560,vote_lepen_02560,vote_rejet_02560]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02560-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02560,vote_lepenpop_02560,vote_rejetpop_02560]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02560"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02560
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02560
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02560
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02561*/
/*------------------------------------------------------------------ */
async function GraphDATA02561() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[560];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02561.push(vote_macron); 
    vote_lepen_02561.push(vote_lepen);
    vote_rejet_02561.push(vote_rejet);
    vote_macronpop_02561.push(vote_macronMediane);
    vote_lepenpop_02561.push(vote_lepenMediane);
    vote_rejetpop_02561.push(vote_rejetMediane);
    name_Commune_02561.push(nameCommune);
    Pourcentage_02561.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02561.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02561.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02561.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02561.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02561 = [];
const vote_lepen_02561 = [];
const vote_rejet_02561 = [];
const vote_macronpop_02561 = [];
const vote_lepenpop_02561 = [];
const vote_rejetpop_02561 = [];
const name_Commune_02561 = [];
const Pourcentage_02561 = [];
const Pourcentage_rejet_02561 = [];
const vote_gene_macron_02561 = [];
const vote_gene_lepen_02561 = [];
const vote_gene_rejet_02561 = [];

async function chartIt02561(){
    await GraphDATA02561();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02561-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02561
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02561
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02561-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02561,vote_lepen_02561,vote_rejet_02561]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02561-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02561,vote_lepenpop_02561,vote_rejetpop_02561]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02561"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02561
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02561
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02561
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02562*/
/*------------------------------------------------------------------ */
async function GraphDATA02562() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[561];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02562.push(vote_macron); 
    vote_lepen_02562.push(vote_lepen);
    vote_rejet_02562.push(vote_rejet);
    vote_macronpop_02562.push(vote_macronMediane);
    vote_lepenpop_02562.push(vote_lepenMediane);
    vote_rejetpop_02562.push(vote_rejetMediane);
    name_Commune_02562.push(nameCommune);
    Pourcentage_02562.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02562.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02562.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02562.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02562.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02562 = [];
const vote_lepen_02562 = [];
const vote_rejet_02562 = [];
const vote_macronpop_02562 = [];
const vote_lepenpop_02562 = [];
const vote_rejetpop_02562 = [];
const name_Commune_02562 = [];
const Pourcentage_02562 = [];
const Pourcentage_rejet_02562 = [];
const vote_gene_macron_02562 = [];
const vote_gene_lepen_02562 = [];
const vote_gene_rejet_02562 = [];

async function chartIt02562(){
    await GraphDATA02562();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02562-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02562
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02562
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02562-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02562,vote_lepen_02562,vote_rejet_02562]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02562-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02562,vote_lepenpop_02562,vote_rejetpop_02562]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02562"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02562
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02562
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02562
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02563*/
/*------------------------------------------------------------------ */
async function GraphDATA02563() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[562];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02563.push(vote_macron); 
    vote_lepen_02563.push(vote_lepen);
    vote_rejet_02563.push(vote_rejet);
    vote_macronpop_02563.push(vote_macronMediane);
    vote_lepenpop_02563.push(vote_lepenMediane);
    vote_rejetpop_02563.push(vote_rejetMediane);
    name_Commune_02563.push(nameCommune);
    Pourcentage_02563.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02563.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02563.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02563.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02563.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02563 = [];
const vote_lepen_02563 = [];
const vote_rejet_02563 = [];
const vote_macronpop_02563 = [];
const vote_lepenpop_02563 = [];
const vote_rejetpop_02563 = [];
const name_Commune_02563 = [];
const Pourcentage_02563 = [];
const Pourcentage_rejet_02563 = [];
const vote_gene_macron_02563 = [];
const vote_gene_lepen_02563 = [];
const vote_gene_rejet_02563 = [];

async function chartIt02563(){
    await GraphDATA02563();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02563-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02563
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02563
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02563-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02563,vote_lepen_02563,vote_rejet_02563]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02563-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02563,vote_lepenpop_02563,vote_rejetpop_02563]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02563"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02563
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02563
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02563
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02564*/
/*------------------------------------------------------------------ */
async function GraphDATA02564() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[563];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02564.push(vote_macron); 
    vote_lepen_02564.push(vote_lepen);
    vote_rejet_02564.push(vote_rejet);
    vote_macronpop_02564.push(vote_macronMediane);
    vote_lepenpop_02564.push(vote_lepenMediane);
    vote_rejetpop_02564.push(vote_rejetMediane);
    name_Commune_02564.push(nameCommune);
    Pourcentage_02564.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02564.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02564.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02564.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02564.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02564 = [];
const vote_lepen_02564 = [];
const vote_rejet_02564 = [];
const vote_macronpop_02564 = [];
const vote_lepenpop_02564 = [];
const vote_rejetpop_02564 = [];
const name_Commune_02564 = [];
const Pourcentage_02564 = [];
const Pourcentage_rejet_02564 = [];
const vote_gene_macron_02564 = [];
const vote_gene_lepen_02564 = [];
const vote_gene_rejet_02564 = [];

async function chartIt02564(){
    await GraphDATA02564();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02564-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02564
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02564
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02564-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02564,vote_lepen_02564,vote_rejet_02564]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02564-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02564,vote_lepenpop_02564,vote_rejetpop_02564]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02564"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02564
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02564
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02564
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02565*/
/*------------------------------------------------------------------ */
async function GraphDATA02565() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[564];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02565.push(vote_macron); 
    vote_lepen_02565.push(vote_lepen);
    vote_rejet_02565.push(vote_rejet);
    vote_macronpop_02565.push(vote_macronMediane);
    vote_lepenpop_02565.push(vote_lepenMediane);
    vote_rejetpop_02565.push(vote_rejetMediane);
    name_Commune_02565.push(nameCommune);
    Pourcentage_02565.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02565.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02565.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02565.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02565.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02565 = [];
const vote_lepen_02565 = [];
const vote_rejet_02565 = [];
const vote_macronpop_02565 = [];
const vote_lepenpop_02565 = [];
const vote_rejetpop_02565 = [];
const name_Commune_02565 = [];
const Pourcentage_02565 = [];
const Pourcentage_rejet_02565 = [];
const vote_gene_macron_02565 = [];
const vote_gene_lepen_02565 = [];
const vote_gene_rejet_02565 = [];

async function chartIt02565(){
    await GraphDATA02565();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02565-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02565
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02565
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02565-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02565,vote_lepen_02565,vote_rejet_02565]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02565-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02565,vote_lepenpop_02565,vote_rejetpop_02565]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02565"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02565
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02565
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02565
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02566*/
/*------------------------------------------------------------------ */
async function GraphDATA02566() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[565];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02566.push(vote_macron); 
    vote_lepen_02566.push(vote_lepen);
    vote_rejet_02566.push(vote_rejet);
    vote_macronpop_02566.push(vote_macronMediane);
    vote_lepenpop_02566.push(vote_lepenMediane);
    vote_rejetpop_02566.push(vote_rejetMediane);
    name_Commune_02566.push(nameCommune);
    Pourcentage_02566.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02566.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02566.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02566.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02566.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02566 = [];
const vote_lepen_02566 = [];
const vote_rejet_02566 = [];
const vote_macronpop_02566 = [];
const vote_lepenpop_02566 = [];
const vote_rejetpop_02566 = [];
const name_Commune_02566 = [];
const Pourcentage_02566 = [];
const Pourcentage_rejet_02566 = [];
const vote_gene_macron_02566 = [];
const vote_gene_lepen_02566 = [];
const vote_gene_rejet_02566 = [];

async function chartIt02566(){
    await GraphDATA02566();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02566-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02566
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02566
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02566-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02566,vote_lepen_02566,vote_rejet_02566]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02566-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02566,vote_lepenpop_02566,vote_rejetpop_02566]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02566"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02566
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02566
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02566
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02567*/
/*------------------------------------------------------------------ */
async function GraphDATA02567() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[566];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02567.push(vote_macron); 
    vote_lepen_02567.push(vote_lepen);
    vote_rejet_02567.push(vote_rejet);
    vote_macronpop_02567.push(vote_macronMediane);
    vote_lepenpop_02567.push(vote_lepenMediane);
    vote_rejetpop_02567.push(vote_rejetMediane);
    name_Commune_02567.push(nameCommune);
    Pourcentage_02567.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02567.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02567.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02567.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02567.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02567 = [];
const vote_lepen_02567 = [];
const vote_rejet_02567 = [];
const vote_macronpop_02567 = [];
const vote_lepenpop_02567 = [];
const vote_rejetpop_02567 = [];
const name_Commune_02567 = [];
const Pourcentage_02567 = [];
const Pourcentage_rejet_02567 = [];
const vote_gene_macron_02567 = [];
const vote_gene_lepen_02567 = [];
const vote_gene_rejet_02567 = [];

async function chartIt02567(){
    await GraphDATA02567();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02567-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02567
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02567
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02567-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02567,vote_lepen_02567,vote_rejet_02567]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02567-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02567,vote_lepenpop_02567,vote_rejetpop_02567]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02567"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02567
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02567
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02567
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02568*/
/*------------------------------------------------------------------ */
async function GraphDATA02568() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[567];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02568.push(vote_macron); 
    vote_lepen_02568.push(vote_lepen);
    vote_rejet_02568.push(vote_rejet);
    vote_macronpop_02568.push(vote_macronMediane);
    vote_lepenpop_02568.push(vote_lepenMediane);
    vote_rejetpop_02568.push(vote_rejetMediane);
    name_Commune_02568.push(nameCommune);
    Pourcentage_02568.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02568.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02568.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02568.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02568.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02568 = [];
const vote_lepen_02568 = [];
const vote_rejet_02568 = [];
const vote_macronpop_02568 = [];
const vote_lepenpop_02568 = [];
const vote_rejetpop_02568 = [];
const name_Commune_02568 = [];
const Pourcentage_02568 = [];
const Pourcentage_rejet_02568 = [];
const vote_gene_macron_02568 = [];
const vote_gene_lepen_02568 = [];
const vote_gene_rejet_02568 = [];

async function chartIt02568(){
    await GraphDATA02568();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02568-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02568
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02568
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02568-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02568,vote_lepen_02568,vote_rejet_02568]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02568-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02568,vote_lepenpop_02568,vote_rejetpop_02568]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02568"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02568
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02568
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02568
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02569*/
/*------------------------------------------------------------------ */
async function GraphDATA02569() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[568];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02569.push(vote_macron); 
    vote_lepen_02569.push(vote_lepen);
    vote_rejet_02569.push(vote_rejet);
    vote_macronpop_02569.push(vote_macronMediane);
    vote_lepenpop_02569.push(vote_lepenMediane);
    vote_rejetpop_02569.push(vote_rejetMediane);
    name_Commune_02569.push(nameCommune);
    Pourcentage_02569.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02569.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02569.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02569.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02569.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02569 = [];
const vote_lepen_02569 = [];
const vote_rejet_02569 = [];
const vote_macronpop_02569 = [];
const vote_lepenpop_02569 = [];
const vote_rejetpop_02569 = [];
const name_Commune_02569 = [];
const Pourcentage_02569 = [];
const Pourcentage_rejet_02569 = [];
const vote_gene_macron_02569 = [];
const vote_gene_lepen_02569 = [];
const vote_gene_rejet_02569 = [];

async function chartIt02569(){
    await GraphDATA02569();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02569-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02569
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02569
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02569-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02569,vote_lepen_02569,vote_rejet_02569]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02569-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02569,vote_lepenpop_02569,vote_rejetpop_02569]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02569"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02569
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02569
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02569
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02570*/
/*------------------------------------------------------------------ */
async function GraphDATA02570() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[569];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02570.push(vote_macron); 
    vote_lepen_02570.push(vote_lepen);
    vote_rejet_02570.push(vote_rejet);
    vote_macronpop_02570.push(vote_macronMediane);
    vote_lepenpop_02570.push(vote_lepenMediane);
    vote_rejetpop_02570.push(vote_rejetMediane);
    name_Commune_02570.push(nameCommune);
    Pourcentage_02570.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02570.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02570.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02570.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02570.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02570 = [];
const vote_lepen_02570 = [];
const vote_rejet_02570 = [];
const vote_macronpop_02570 = [];
const vote_lepenpop_02570 = [];
const vote_rejetpop_02570 = [];
const name_Commune_02570 = [];
const Pourcentage_02570 = [];
const Pourcentage_rejet_02570 = [];
const vote_gene_macron_02570 = [];
const vote_gene_lepen_02570 = [];
const vote_gene_rejet_02570 = [];

async function chartIt02570(){
    await GraphDATA02570();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02570-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02570
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02570
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02570-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02570,vote_lepen_02570,vote_rejet_02570]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02570-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02570,vote_lepenpop_02570,vote_rejetpop_02570]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02570"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02570
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02570
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02570
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02571*/
/*------------------------------------------------------------------ */
async function GraphDATA02571() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[570];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02571.push(vote_macron); 
    vote_lepen_02571.push(vote_lepen);
    vote_rejet_02571.push(vote_rejet);
    vote_macronpop_02571.push(vote_macronMediane);
    vote_lepenpop_02571.push(vote_lepenMediane);
    vote_rejetpop_02571.push(vote_rejetMediane);
    name_Commune_02571.push(nameCommune);
    Pourcentage_02571.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02571.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02571.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02571.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02571.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02571 = [];
const vote_lepen_02571 = [];
const vote_rejet_02571 = [];
const vote_macronpop_02571 = [];
const vote_lepenpop_02571 = [];
const vote_rejetpop_02571 = [];
const name_Commune_02571 = [];
const Pourcentage_02571 = [];
const Pourcentage_rejet_02571 = [];
const vote_gene_macron_02571 = [];
const vote_gene_lepen_02571 = [];
const vote_gene_rejet_02571 = [];

async function chartIt02571(){
    await GraphDATA02571();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02571-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02571
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02571
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02571-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02571,vote_lepen_02571,vote_rejet_02571]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02571-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02571,vote_lepenpop_02571,vote_rejetpop_02571]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02571"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02571
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02571
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02571
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02572*/
/*------------------------------------------------------------------ */
async function GraphDATA02572() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[571];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02572.push(vote_macron); 
    vote_lepen_02572.push(vote_lepen);
    vote_rejet_02572.push(vote_rejet);
    vote_macronpop_02572.push(vote_macronMediane);
    vote_lepenpop_02572.push(vote_lepenMediane);
    vote_rejetpop_02572.push(vote_rejetMediane);
    name_Commune_02572.push(nameCommune);
    Pourcentage_02572.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02572.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02572.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02572.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02572.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02572 = [];
const vote_lepen_02572 = [];
const vote_rejet_02572 = [];
const vote_macronpop_02572 = [];
const vote_lepenpop_02572 = [];
const vote_rejetpop_02572 = [];
const name_Commune_02572 = [];
const Pourcentage_02572 = [];
const Pourcentage_rejet_02572 = [];
const vote_gene_macron_02572 = [];
const vote_gene_lepen_02572 = [];
const vote_gene_rejet_02572 = [];

async function chartIt02572(){
    await GraphDATA02572();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02572-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02572
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02572
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02572-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02572,vote_lepen_02572,vote_rejet_02572]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02572-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02572,vote_lepenpop_02572,vote_rejetpop_02572]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02572"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02572
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02572
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02572
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02573*/
/*------------------------------------------------------------------ */
async function GraphDATA02573() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[572];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02573.push(vote_macron); 
    vote_lepen_02573.push(vote_lepen);
    vote_rejet_02573.push(vote_rejet);
    vote_macronpop_02573.push(vote_macronMediane);
    vote_lepenpop_02573.push(vote_lepenMediane);
    vote_rejetpop_02573.push(vote_rejetMediane);
    name_Commune_02573.push(nameCommune);
    Pourcentage_02573.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02573.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02573.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02573.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02573.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02573 = [];
const vote_lepen_02573 = [];
const vote_rejet_02573 = [];
const vote_macronpop_02573 = [];
const vote_lepenpop_02573 = [];
const vote_rejetpop_02573 = [];
const name_Commune_02573 = [];
const Pourcentage_02573 = [];
const Pourcentage_rejet_02573 = [];
const vote_gene_macron_02573 = [];
const vote_gene_lepen_02573 = [];
const vote_gene_rejet_02573 = [];

async function chartIt02573(){
    await GraphDATA02573();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02573-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02573
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02573
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02573-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02573,vote_lepen_02573,vote_rejet_02573]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02573-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02573,vote_lepenpop_02573,vote_rejetpop_02573]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02573"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02573
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02573
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02573
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02574*/
/*------------------------------------------------------------------ */
async function GraphDATA02574() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[573];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02574.push(vote_macron); 
    vote_lepen_02574.push(vote_lepen);
    vote_rejet_02574.push(vote_rejet);
    vote_macronpop_02574.push(vote_macronMediane);
    vote_lepenpop_02574.push(vote_lepenMediane);
    vote_rejetpop_02574.push(vote_rejetMediane);
    name_Commune_02574.push(nameCommune);
    Pourcentage_02574.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02574.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02574.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02574.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02574.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02574 = [];
const vote_lepen_02574 = [];
const vote_rejet_02574 = [];
const vote_macronpop_02574 = [];
const vote_lepenpop_02574 = [];
const vote_rejetpop_02574 = [];
const name_Commune_02574 = [];
const Pourcentage_02574 = [];
const Pourcentage_rejet_02574 = [];
const vote_gene_macron_02574 = [];
const vote_gene_lepen_02574 = [];
const vote_gene_rejet_02574 = [];

async function chartIt02574(){
    await GraphDATA02574();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02574-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02574
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02574
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02574-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02574,vote_lepen_02574,vote_rejet_02574]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02574-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02574,vote_lepenpop_02574,vote_rejetpop_02574]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02574"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02574
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02574
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02574
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02575*/
/*------------------------------------------------------------------ */
async function GraphDATA02575() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[574];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02575.push(vote_macron); 
    vote_lepen_02575.push(vote_lepen);
    vote_rejet_02575.push(vote_rejet);
    vote_macronpop_02575.push(vote_macronMediane);
    vote_lepenpop_02575.push(vote_lepenMediane);
    vote_rejetpop_02575.push(vote_rejetMediane);
    name_Commune_02575.push(nameCommune);
    Pourcentage_02575.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02575.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02575.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02575.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02575.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02575 = [];
const vote_lepen_02575 = [];
const vote_rejet_02575 = [];
const vote_macronpop_02575 = [];
const vote_lepenpop_02575 = [];
const vote_rejetpop_02575 = [];
const name_Commune_02575 = [];
const Pourcentage_02575 = [];
const Pourcentage_rejet_02575 = [];
const vote_gene_macron_02575 = [];
const vote_gene_lepen_02575 = [];
const vote_gene_rejet_02575 = [];

async function chartIt02575(){
    await GraphDATA02575();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02575-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02575
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02575
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02575-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02575,vote_lepen_02575,vote_rejet_02575]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02575-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02575,vote_lepenpop_02575,vote_rejetpop_02575]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02575"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02575
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02575
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02575
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02576*/
/*------------------------------------------------------------------ */
async function GraphDATA02576() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[575];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02576.push(vote_macron); 
    vote_lepen_02576.push(vote_lepen);
    vote_rejet_02576.push(vote_rejet);
    vote_macronpop_02576.push(vote_macronMediane);
    vote_lepenpop_02576.push(vote_lepenMediane);
    vote_rejetpop_02576.push(vote_rejetMediane);
    name_Commune_02576.push(nameCommune);
    Pourcentage_02576.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02576.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02576.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02576.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02576.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02576 = [];
const vote_lepen_02576 = [];
const vote_rejet_02576 = [];
const vote_macronpop_02576 = [];
const vote_lepenpop_02576 = [];
const vote_rejetpop_02576 = [];
const name_Commune_02576 = [];
const Pourcentage_02576 = [];
const Pourcentage_rejet_02576 = [];
const vote_gene_macron_02576 = [];
const vote_gene_lepen_02576 = [];
const vote_gene_rejet_02576 = [];

async function chartIt02576(){
    await GraphDATA02576();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02576-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02576
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02576
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02576-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02576,vote_lepen_02576,vote_rejet_02576]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02576-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02576,vote_lepenpop_02576,vote_rejetpop_02576]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02576"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02576
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02576
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02576
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02577*/
/*------------------------------------------------------------------ */
async function GraphDATA02577() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[576];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02577.push(vote_macron); 
    vote_lepen_02577.push(vote_lepen);
    vote_rejet_02577.push(vote_rejet);
    vote_macronpop_02577.push(vote_macronMediane);
    vote_lepenpop_02577.push(vote_lepenMediane);
    vote_rejetpop_02577.push(vote_rejetMediane);
    name_Commune_02577.push(nameCommune);
    Pourcentage_02577.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02577.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02577.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02577.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02577.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02577 = [];
const vote_lepen_02577 = [];
const vote_rejet_02577 = [];
const vote_macronpop_02577 = [];
const vote_lepenpop_02577 = [];
const vote_rejetpop_02577 = [];
const name_Commune_02577 = [];
const Pourcentage_02577 = [];
const Pourcentage_rejet_02577 = [];
const vote_gene_macron_02577 = [];
const vote_gene_lepen_02577 = [];
const vote_gene_rejet_02577 = [];

async function chartIt02577(){
    await GraphDATA02577();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02577-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02577
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02577
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02577-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02577,vote_lepen_02577,vote_rejet_02577]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02577-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02577,vote_lepenpop_02577,vote_rejetpop_02577]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02577"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02577
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02577
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02577
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02578*/
/*------------------------------------------------------------------ */
async function GraphDATA02578() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[577];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02578.push(vote_macron); 
    vote_lepen_02578.push(vote_lepen);
    vote_rejet_02578.push(vote_rejet);
    vote_macronpop_02578.push(vote_macronMediane);
    vote_lepenpop_02578.push(vote_lepenMediane);
    vote_rejetpop_02578.push(vote_rejetMediane);
    name_Commune_02578.push(nameCommune);
    Pourcentage_02578.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02578.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02578.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02578.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02578.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02578 = [];
const vote_lepen_02578 = [];
const vote_rejet_02578 = [];
const vote_macronpop_02578 = [];
const vote_lepenpop_02578 = [];
const vote_rejetpop_02578 = [];
const name_Commune_02578 = [];
const Pourcentage_02578 = [];
const Pourcentage_rejet_02578 = [];
const vote_gene_macron_02578 = [];
const vote_gene_lepen_02578 = [];
const vote_gene_rejet_02578 = [];

async function chartIt02578(){
    await GraphDATA02578();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02578-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02578
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02578
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02578-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02578,vote_lepen_02578,vote_rejet_02578]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02578-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02578,vote_lepenpop_02578,vote_rejetpop_02578]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02578"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02578
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02578
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02578
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02579*/
/*------------------------------------------------------------------ */
async function GraphDATA02579() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[578];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02579.push(vote_macron); 
    vote_lepen_02579.push(vote_lepen);
    vote_rejet_02579.push(vote_rejet);
    vote_macronpop_02579.push(vote_macronMediane);
    vote_lepenpop_02579.push(vote_lepenMediane);
    vote_rejetpop_02579.push(vote_rejetMediane);
    name_Commune_02579.push(nameCommune);
    Pourcentage_02579.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02579.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02579.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02579.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02579.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02579 = [];
const vote_lepen_02579 = [];
const vote_rejet_02579 = [];
const vote_macronpop_02579 = [];
const vote_lepenpop_02579 = [];
const vote_rejetpop_02579 = [];
const name_Commune_02579 = [];
const Pourcentage_02579 = [];
const Pourcentage_rejet_02579 = [];
const vote_gene_macron_02579 = [];
const vote_gene_lepen_02579 = [];
const vote_gene_rejet_02579 = [];

async function chartIt02579(){
    await GraphDATA02579();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02579-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02579
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02579
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02579-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02579,vote_lepen_02579,vote_rejet_02579]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02579-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02579,vote_lepenpop_02579,vote_rejetpop_02579]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02579"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02579
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02579
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02579
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02580*/
/*------------------------------------------------------------------ */
async function GraphDATA02580() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[579];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02580.push(vote_macron); 
    vote_lepen_02580.push(vote_lepen);
    vote_rejet_02580.push(vote_rejet);
    vote_macronpop_02580.push(vote_macronMediane);
    vote_lepenpop_02580.push(vote_lepenMediane);
    vote_rejetpop_02580.push(vote_rejetMediane);
    name_Commune_02580.push(nameCommune);
    Pourcentage_02580.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02580.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02580.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02580.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02580.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02580 = [];
const vote_lepen_02580 = [];
const vote_rejet_02580 = [];
const vote_macronpop_02580 = [];
const vote_lepenpop_02580 = [];
const vote_rejetpop_02580 = [];
const name_Commune_02580 = [];
const Pourcentage_02580 = [];
const Pourcentage_rejet_02580 = [];
const vote_gene_macron_02580 = [];
const vote_gene_lepen_02580 = [];
const vote_gene_rejet_02580 = [];

async function chartIt02580(){
    await GraphDATA02580();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02580-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02580
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02580
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02580-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02580,vote_lepen_02580,vote_rejet_02580]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02580-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02580,vote_lepenpop_02580,vote_rejetpop_02580]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02580"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02580
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02580
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02580
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02581*/
/*------------------------------------------------------------------ */
async function GraphDATA02581() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[580];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02581.push(vote_macron); 
    vote_lepen_02581.push(vote_lepen);
    vote_rejet_02581.push(vote_rejet);
    vote_macronpop_02581.push(vote_macronMediane);
    vote_lepenpop_02581.push(vote_lepenMediane);
    vote_rejetpop_02581.push(vote_rejetMediane);
    name_Commune_02581.push(nameCommune);
    Pourcentage_02581.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02581.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02581.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02581.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02581.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02581 = [];
const vote_lepen_02581 = [];
const vote_rejet_02581 = [];
const vote_macronpop_02581 = [];
const vote_lepenpop_02581 = [];
const vote_rejetpop_02581 = [];
const name_Commune_02581 = [];
const Pourcentage_02581 = [];
const Pourcentage_rejet_02581 = [];
const vote_gene_macron_02581 = [];
const vote_gene_lepen_02581 = [];
const vote_gene_rejet_02581 = [];

async function chartIt02581(){
    await GraphDATA02581();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02581-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02581
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02581
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02581-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02581,vote_lepen_02581,vote_rejet_02581]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02581-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02581,vote_lepenpop_02581,vote_rejetpop_02581]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02581"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02581
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02581
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02581
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02582*/
/*------------------------------------------------------------------ */
async function GraphDATA02582() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[581];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02582.push(vote_macron); 
    vote_lepen_02582.push(vote_lepen);
    vote_rejet_02582.push(vote_rejet);
    vote_macronpop_02582.push(vote_macronMediane);
    vote_lepenpop_02582.push(vote_lepenMediane);
    vote_rejetpop_02582.push(vote_rejetMediane);
    name_Commune_02582.push(nameCommune);
    Pourcentage_02582.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02582.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02582.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02582.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02582.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02582 = [];
const vote_lepen_02582 = [];
const vote_rejet_02582 = [];
const vote_macronpop_02582 = [];
const vote_lepenpop_02582 = [];
const vote_rejetpop_02582 = [];
const name_Commune_02582 = [];
const Pourcentage_02582 = [];
const Pourcentage_rejet_02582 = [];
const vote_gene_macron_02582 = [];
const vote_gene_lepen_02582 = [];
const vote_gene_rejet_02582 = [];

async function chartIt02582(){
    await GraphDATA02582();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02582-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02582
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02582
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02582-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02582,vote_lepen_02582,vote_rejet_02582]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02582-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02582,vote_lepenpop_02582,vote_rejetpop_02582]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02582"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02582
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02582
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02582
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02583*/
/*------------------------------------------------------------------ */
async function GraphDATA02583() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[582];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02583.push(vote_macron); 
    vote_lepen_02583.push(vote_lepen);
    vote_rejet_02583.push(vote_rejet);
    vote_macronpop_02583.push(vote_macronMediane);
    vote_lepenpop_02583.push(vote_lepenMediane);
    vote_rejetpop_02583.push(vote_rejetMediane);
    name_Commune_02583.push(nameCommune);
    Pourcentage_02583.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02583.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02583.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02583.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02583.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02583 = [];
const vote_lepen_02583 = [];
const vote_rejet_02583 = [];
const vote_macronpop_02583 = [];
const vote_lepenpop_02583 = [];
const vote_rejetpop_02583 = [];
const name_Commune_02583 = [];
const Pourcentage_02583 = [];
const Pourcentage_rejet_02583 = [];
const vote_gene_macron_02583 = [];
const vote_gene_lepen_02583 = [];
const vote_gene_rejet_02583 = [];

async function chartIt02583(){
    await GraphDATA02583();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02583-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02583
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02583
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02583-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02583,vote_lepen_02583,vote_rejet_02583]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02583-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02583,vote_lepenpop_02583,vote_rejetpop_02583]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02583"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02583
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02583
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02583
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02584*/
/*------------------------------------------------------------------ */
async function GraphDATA02584() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[583];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02584.push(vote_macron); 
    vote_lepen_02584.push(vote_lepen);
    vote_rejet_02584.push(vote_rejet);
    vote_macronpop_02584.push(vote_macronMediane);
    vote_lepenpop_02584.push(vote_lepenMediane);
    vote_rejetpop_02584.push(vote_rejetMediane);
    name_Commune_02584.push(nameCommune);
    Pourcentage_02584.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02584.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02584.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02584.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02584.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02584 = [];
const vote_lepen_02584 = [];
const vote_rejet_02584 = [];
const vote_macronpop_02584 = [];
const vote_lepenpop_02584 = [];
const vote_rejetpop_02584 = [];
const name_Commune_02584 = [];
const Pourcentage_02584 = [];
const Pourcentage_rejet_02584 = [];
const vote_gene_macron_02584 = [];
const vote_gene_lepen_02584 = [];
const vote_gene_rejet_02584 = [];

async function chartIt02584(){
    await GraphDATA02584();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02584-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02584
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02584
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02584-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02584,vote_lepen_02584,vote_rejet_02584]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02584-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02584,vote_lepenpop_02584,vote_rejetpop_02584]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02584"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02584
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02584
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02584
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02585*/
/*------------------------------------------------------------------ */
async function GraphDATA02585() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[584];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02585.push(vote_macron); 
    vote_lepen_02585.push(vote_lepen);
    vote_rejet_02585.push(vote_rejet);
    vote_macronpop_02585.push(vote_macronMediane);
    vote_lepenpop_02585.push(vote_lepenMediane);
    vote_rejetpop_02585.push(vote_rejetMediane);
    name_Commune_02585.push(nameCommune);
    Pourcentage_02585.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02585.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02585.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02585.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02585.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02585 = [];
const vote_lepen_02585 = [];
const vote_rejet_02585 = [];
const vote_macronpop_02585 = [];
const vote_lepenpop_02585 = [];
const vote_rejetpop_02585 = [];
const name_Commune_02585 = [];
const Pourcentage_02585 = [];
const Pourcentage_rejet_02585 = [];
const vote_gene_macron_02585 = [];
const vote_gene_lepen_02585 = [];
const vote_gene_rejet_02585 = [];

async function chartIt02585(){
    await GraphDATA02585();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02585-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02585
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02585
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02585-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02585,vote_lepen_02585,vote_rejet_02585]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02585-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02585,vote_lepenpop_02585,vote_rejetpop_02585]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02585"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02585
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02585
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02585
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02586*/
/*------------------------------------------------------------------ */
async function GraphDATA02586() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[585];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02586.push(vote_macron); 
    vote_lepen_02586.push(vote_lepen);
    vote_rejet_02586.push(vote_rejet);
    vote_macronpop_02586.push(vote_macronMediane);
    vote_lepenpop_02586.push(vote_lepenMediane);
    vote_rejetpop_02586.push(vote_rejetMediane);
    name_Commune_02586.push(nameCommune);
    Pourcentage_02586.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02586.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02586.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02586.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02586.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02586 = [];
const vote_lepen_02586 = [];
const vote_rejet_02586 = [];
const vote_macronpop_02586 = [];
const vote_lepenpop_02586 = [];
const vote_rejetpop_02586 = [];
const name_Commune_02586 = [];
const Pourcentage_02586 = [];
const Pourcentage_rejet_02586 = [];
const vote_gene_macron_02586 = [];
const vote_gene_lepen_02586 = [];
const vote_gene_rejet_02586 = [];

async function chartIt02586(){
    await GraphDATA02586();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02586-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02586
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02586
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02586-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02586,vote_lepen_02586,vote_rejet_02586]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02586-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02586,vote_lepenpop_02586,vote_rejetpop_02586]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02586"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02586
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02586
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02586
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02587*/
/*------------------------------------------------------------------ */
async function GraphDATA02587() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[586];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02587.push(vote_macron); 
    vote_lepen_02587.push(vote_lepen);
    vote_rejet_02587.push(vote_rejet);
    vote_macronpop_02587.push(vote_macronMediane);
    vote_lepenpop_02587.push(vote_lepenMediane);
    vote_rejetpop_02587.push(vote_rejetMediane);
    name_Commune_02587.push(nameCommune);
    Pourcentage_02587.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02587.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02587.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02587.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02587.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02587 = [];
const vote_lepen_02587 = [];
const vote_rejet_02587 = [];
const vote_macronpop_02587 = [];
const vote_lepenpop_02587 = [];
const vote_rejetpop_02587 = [];
const name_Commune_02587 = [];
const Pourcentage_02587 = [];
const Pourcentage_rejet_02587 = [];
const vote_gene_macron_02587 = [];
const vote_gene_lepen_02587 = [];
const vote_gene_rejet_02587 = [];

async function chartIt02587(){
    await GraphDATA02587();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02587-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02587
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02587
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02587-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02587,vote_lepen_02587,vote_rejet_02587]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02587-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02587,vote_lepenpop_02587,vote_rejetpop_02587]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02587"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02587
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02587
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02587
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02588*/
/*------------------------------------------------------------------ */
async function GraphDATA02588() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[587];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02588.push(vote_macron); 
    vote_lepen_02588.push(vote_lepen);
    vote_rejet_02588.push(vote_rejet);
    vote_macronpop_02588.push(vote_macronMediane);
    vote_lepenpop_02588.push(vote_lepenMediane);
    vote_rejetpop_02588.push(vote_rejetMediane);
    name_Commune_02588.push(nameCommune);
    Pourcentage_02588.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02588.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02588.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02588.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02588.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02588 = [];
const vote_lepen_02588 = [];
const vote_rejet_02588 = [];
const vote_macronpop_02588 = [];
const vote_lepenpop_02588 = [];
const vote_rejetpop_02588 = [];
const name_Commune_02588 = [];
const Pourcentage_02588 = [];
const Pourcentage_rejet_02588 = [];
const vote_gene_macron_02588 = [];
const vote_gene_lepen_02588 = [];
const vote_gene_rejet_02588 = [];

async function chartIt02588(){
    await GraphDATA02588();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02588-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02588
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02588
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02588-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02588,vote_lepen_02588,vote_rejet_02588]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02588-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02588,vote_lepenpop_02588,vote_rejetpop_02588]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02588"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02588
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02588
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02588
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02589*/
/*------------------------------------------------------------------ */
async function GraphDATA02589() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[588];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02589.push(vote_macron); 
    vote_lepen_02589.push(vote_lepen);
    vote_rejet_02589.push(vote_rejet);
    vote_macronpop_02589.push(vote_macronMediane);
    vote_lepenpop_02589.push(vote_lepenMediane);
    vote_rejetpop_02589.push(vote_rejetMediane);
    name_Commune_02589.push(nameCommune);
    Pourcentage_02589.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02589.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02589.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02589.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02589.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02589 = [];
const vote_lepen_02589 = [];
const vote_rejet_02589 = [];
const vote_macronpop_02589 = [];
const vote_lepenpop_02589 = [];
const vote_rejetpop_02589 = [];
const name_Commune_02589 = [];
const Pourcentage_02589 = [];
const Pourcentage_rejet_02589 = [];
const vote_gene_macron_02589 = [];
const vote_gene_lepen_02589 = [];
const vote_gene_rejet_02589 = [];

async function chartIt02589(){
    await GraphDATA02589();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02589-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02589
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02589
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02589-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02589,vote_lepen_02589,vote_rejet_02589]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02589-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02589,vote_lepenpop_02589,vote_rejetpop_02589]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02589"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02589
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02589
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02589
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02590*/
/*------------------------------------------------------------------ */
async function GraphDATA02590() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[589];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02590.push(vote_macron); 
    vote_lepen_02590.push(vote_lepen);
    vote_rejet_02590.push(vote_rejet);
    vote_macronpop_02590.push(vote_macronMediane);
    vote_lepenpop_02590.push(vote_lepenMediane);
    vote_rejetpop_02590.push(vote_rejetMediane);
    name_Commune_02590.push(nameCommune);
    Pourcentage_02590.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02590.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02590.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02590.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02590.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02590 = [];
const vote_lepen_02590 = [];
const vote_rejet_02590 = [];
const vote_macronpop_02590 = [];
const vote_lepenpop_02590 = [];
const vote_rejetpop_02590 = [];
const name_Commune_02590 = [];
const Pourcentage_02590 = [];
const Pourcentage_rejet_02590 = [];
const vote_gene_macron_02590 = [];
const vote_gene_lepen_02590 = [];
const vote_gene_rejet_02590 = [];

async function chartIt02590(){
    await GraphDATA02590();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02590-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02590
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02590
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02590-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02590,vote_lepen_02590,vote_rejet_02590]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02590-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02590,vote_lepenpop_02590,vote_rejetpop_02590]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02590"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02590
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02590
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02590
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02591*/
/*------------------------------------------------------------------ */
async function GraphDATA02591() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[590];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02591.push(vote_macron); 
    vote_lepen_02591.push(vote_lepen);
    vote_rejet_02591.push(vote_rejet);
    vote_macronpop_02591.push(vote_macronMediane);
    vote_lepenpop_02591.push(vote_lepenMediane);
    vote_rejetpop_02591.push(vote_rejetMediane);
    name_Commune_02591.push(nameCommune);
    Pourcentage_02591.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02591.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02591.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02591.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02591.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02591 = [];
const vote_lepen_02591 = [];
const vote_rejet_02591 = [];
const vote_macronpop_02591 = [];
const vote_lepenpop_02591 = [];
const vote_rejetpop_02591 = [];
const name_Commune_02591 = [];
const Pourcentage_02591 = [];
const Pourcentage_rejet_02591 = [];
const vote_gene_macron_02591 = [];
const vote_gene_lepen_02591 = [];
const vote_gene_rejet_02591 = [];

async function chartIt02591(){
    await GraphDATA02591();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02591-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02591
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02591
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02591-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02591,vote_lepen_02591,vote_rejet_02591]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02591-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02591,vote_lepenpop_02591,vote_rejetpop_02591]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02591"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02591
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02591
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02591
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02592*/
/*------------------------------------------------------------------ */
async function GraphDATA02592() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[591];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02592.push(vote_macron); 
    vote_lepen_02592.push(vote_lepen);
    vote_rejet_02592.push(vote_rejet);
    vote_macronpop_02592.push(vote_macronMediane);
    vote_lepenpop_02592.push(vote_lepenMediane);
    vote_rejetpop_02592.push(vote_rejetMediane);
    name_Commune_02592.push(nameCommune);
    Pourcentage_02592.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02592.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02592.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02592.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02592.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02592 = [];
const vote_lepen_02592 = [];
const vote_rejet_02592 = [];
const vote_macronpop_02592 = [];
const vote_lepenpop_02592 = [];
const vote_rejetpop_02592 = [];
const name_Commune_02592 = [];
const Pourcentage_02592 = [];
const Pourcentage_rejet_02592 = [];
const vote_gene_macron_02592 = [];
const vote_gene_lepen_02592 = [];
const vote_gene_rejet_02592 = [];

async function chartIt02592(){
    await GraphDATA02592();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02592-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02592
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02592
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02592-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02592,vote_lepen_02592,vote_rejet_02592]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02592-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02592,vote_lepenpop_02592,vote_rejetpop_02592]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02592"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02592
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02592
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02592
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02593*/
/*------------------------------------------------------------------ */
async function GraphDATA02593() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[592];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02593.push(vote_macron); 
    vote_lepen_02593.push(vote_lepen);
    vote_rejet_02593.push(vote_rejet);
    vote_macronpop_02593.push(vote_macronMediane);
    vote_lepenpop_02593.push(vote_lepenMediane);
    vote_rejetpop_02593.push(vote_rejetMediane);
    name_Commune_02593.push(nameCommune);
    Pourcentage_02593.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02593.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02593.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02593.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02593.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02593 = [];
const vote_lepen_02593 = [];
const vote_rejet_02593 = [];
const vote_macronpop_02593 = [];
const vote_lepenpop_02593 = [];
const vote_rejetpop_02593 = [];
const name_Commune_02593 = [];
const Pourcentage_02593 = [];
const Pourcentage_rejet_02593 = [];
const vote_gene_macron_02593 = [];
const vote_gene_lepen_02593 = [];
const vote_gene_rejet_02593 = [];

async function chartIt02593(){
    await GraphDATA02593();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02593-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02593
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02593
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02593-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02593,vote_lepen_02593,vote_rejet_02593]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02593-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02593,vote_lepenpop_02593,vote_rejetpop_02593]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02593"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02593
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02593
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02593
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02594*/
/*------------------------------------------------------------------ */
async function GraphDATA02594() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[593];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02594.push(vote_macron); 
    vote_lepen_02594.push(vote_lepen);
    vote_rejet_02594.push(vote_rejet);
    vote_macronpop_02594.push(vote_macronMediane);
    vote_lepenpop_02594.push(vote_lepenMediane);
    vote_rejetpop_02594.push(vote_rejetMediane);
    name_Commune_02594.push(nameCommune);
    Pourcentage_02594.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02594.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02594.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02594.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02594.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02594 = [];
const vote_lepen_02594 = [];
const vote_rejet_02594 = [];
const vote_macronpop_02594 = [];
const vote_lepenpop_02594 = [];
const vote_rejetpop_02594 = [];
const name_Commune_02594 = [];
const Pourcentage_02594 = [];
const Pourcentage_rejet_02594 = [];
const vote_gene_macron_02594 = [];
const vote_gene_lepen_02594 = [];
const vote_gene_rejet_02594 = [];

async function chartIt02594(){
    await GraphDATA02594();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02594-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02594
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02594
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02594-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02594,vote_lepen_02594,vote_rejet_02594]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02594-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02594,vote_lepenpop_02594,vote_rejetpop_02594]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02594"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02594
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02594
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02594
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02595*/
/*------------------------------------------------------------------ */
async function GraphDATA02595() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[594];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02595.push(vote_macron); 
    vote_lepen_02595.push(vote_lepen);
    vote_rejet_02595.push(vote_rejet);
    vote_macronpop_02595.push(vote_macronMediane);
    vote_lepenpop_02595.push(vote_lepenMediane);
    vote_rejetpop_02595.push(vote_rejetMediane);
    name_Commune_02595.push(nameCommune);
    Pourcentage_02595.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02595.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02595.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02595.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02595.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02595 = [];
const vote_lepen_02595 = [];
const vote_rejet_02595 = [];
const vote_macronpop_02595 = [];
const vote_lepenpop_02595 = [];
const vote_rejetpop_02595 = [];
const name_Commune_02595 = [];
const Pourcentage_02595 = [];
const Pourcentage_rejet_02595 = [];
const vote_gene_macron_02595 = [];
const vote_gene_lepen_02595 = [];
const vote_gene_rejet_02595 = [];

async function chartIt02595(){
    await GraphDATA02595();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02595-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02595
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02595
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02595-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02595,vote_lepen_02595,vote_rejet_02595]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02595-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02595,vote_lepenpop_02595,vote_rejetpop_02595]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02595"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02595
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02595
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02595
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02596*/
/*------------------------------------------------------------------ */
async function GraphDATA02596() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[595];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02596.push(vote_macron); 
    vote_lepen_02596.push(vote_lepen);
    vote_rejet_02596.push(vote_rejet);
    vote_macronpop_02596.push(vote_macronMediane);
    vote_lepenpop_02596.push(vote_lepenMediane);
    vote_rejetpop_02596.push(vote_rejetMediane);
    name_Commune_02596.push(nameCommune);
    Pourcentage_02596.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02596.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02596.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02596.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02596.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02596 = [];
const vote_lepen_02596 = [];
const vote_rejet_02596 = [];
const vote_macronpop_02596 = [];
const vote_lepenpop_02596 = [];
const vote_rejetpop_02596 = [];
const name_Commune_02596 = [];
const Pourcentage_02596 = [];
const Pourcentage_rejet_02596 = [];
const vote_gene_macron_02596 = [];
const vote_gene_lepen_02596 = [];
const vote_gene_rejet_02596 = [];

async function chartIt02596(){
    await GraphDATA02596();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02596-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02596
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02596
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02596-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02596,vote_lepen_02596,vote_rejet_02596]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02596-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02596,vote_lepenpop_02596,vote_rejetpop_02596]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02596"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02596
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02596
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02596
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02597*/
/*------------------------------------------------------------------ */
async function GraphDATA02597() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[596];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02597.push(vote_macron); 
    vote_lepen_02597.push(vote_lepen);
    vote_rejet_02597.push(vote_rejet);
    vote_macronpop_02597.push(vote_macronMediane);
    vote_lepenpop_02597.push(vote_lepenMediane);
    vote_rejetpop_02597.push(vote_rejetMediane);
    name_Commune_02597.push(nameCommune);
    Pourcentage_02597.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02597.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02597.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02597.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02597.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02597 = [];
const vote_lepen_02597 = [];
const vote_rejet_02597 = [];
const vote_macronpop_02597 = [];
const vote_lepenpop_02597 = [];
const vote_rejetpop_02597 = [];
const name_Commune_02597 = [];
const Pourcentage_02597 = [];
const Pourcentage_rejet_02597 = [];
const vote_gene_macron_02597 = [];
const vote_gene_lepen_02597 = [];
const vote_gene_rejet_02597 = [];

async function chartIt02597(){
    await GraphDATA02597();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02597-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02597
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02597
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02597-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02597,vote_lepen_02597,vote_rejet_02597]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02597-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02597,vote_lepenpop_02597,vote_rejetpop_02597]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02597"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02597
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02597
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02597
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02598*/
/*------------------------------------------------------------------ */
async function GraphDATA02598() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[597];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02598.push(vote_macron); 
    vote_lepen_02598.push(vote_lepen);
    vote_rejet_02598.push(vote_rejet);
    vote_macronpop_02598.push(vote_macronMediane);
    vote_lepenpop_02598.push(vote_lepenMediane);
    vote_rejetpop_02598.push(vote_rejetMediane);
    name_Commune_02598.push(nameCommune);
    Pourcentage_02598.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02598.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02598.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02598.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02598.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02598 = [];
const vote_lepen_02598 = [];
const vote_rejet_02598 = [];
const vote_macronpop_02598 = [];
const vote_lepenpop_02598 = [];
const vote_rejetpop_02598 = [];
const name_Commune_02598 = [];
const Pourcentage_02598 = [];
const Pourcentage_rejet_02598 = [];
const vote_gene_macron_02598 = [];
const vote_gene_lepen_02598 = [];
const vote_gene_rejet_02598 = [];

async function chartIt02598(){
    await GraphDATA02598();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02598-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02598
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02598
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02598-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02598,vote_lepen_02598,vote_rejet_02598]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02598-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02598,vote_lepenpop_02598,vote_rejetpop_02598]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02598"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02598
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02598
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02598
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02599*/
/*------------------------------------------------------------------ */
async function GraphDATA02599() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[598];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02599.push(vote_macron); 
    vote_lepen_02599.push(vote_lepen);
    vote_rejet_02599.push(vote_rejet);
    vote_macronpop_02599.push(vote_macronMediane);
    vote_lepenpop_02599.push(vote_lepenMediane);
    vote_rejetpop_02599.push(vote_rejetMediane);
    name_Commune_02599.push(nameCommune);
    Pourcentage_02599.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02599.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02599.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02599.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02599.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02599 = [];
const vote_lepen_02599 = [];
const vote_rejet_02599 = [];
const vote_macronpop_02599 = [];
const vote_lepenpop_02599 = [];
const vote_rejetpop_02599 = [];
const name_Commune_02599 = [];
const Pourcentage_02599 = [];
const Pourcentage_rejet_02599 = [];
const vote_gene_macron_02599 = [];
const vote_gene_lepen_02599 = [];
const vote_gene_rejet_02599 = [];

async function chartIt02599(){
    await GraphDATA02599();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02599-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02599
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02599
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02599-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02599,vote_lepen_02599,vote_rejet_02599]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02599-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02599,vote_lepenpop_02599,vote_rejetpop_02599]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02599"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02599
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02599
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02599
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}