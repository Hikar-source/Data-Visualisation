/********************************************************************** */
/*JS GRAPHIQUE FICHIER DATA */
/********************************************************************** */
chartIt02701();
chartIt02702();
chartIt02703();
chartIt02704();
chartIt02705();
chartIt02706();
chartIt02707();
chartIt02708();
chartIt02709();
chartIt02710();
chartIt02711();
chartIt02712();
chartIt02713();
chartIt02714();
chartIt02715();
chartIt02716();
chartIt02717();
chartIt02718();
chartIt02719();
chartIt02720();
chartIt02721();
chartIt02722();
chartIt02723();
chartIt02724();
chartIt02725();
chartIt02726();
chartIt02727();
chartIt02728();
chartIt02729();
chartIt02730();
chartIt02731();
chartIt02732();
chartIt02733();
chartIt02734();
chartIt02735();
chartIt02736();
chartIt02737();
chartIt02738();
chartIt02739();
chartIt02740();
chartIt02741();
chartIt02742();
chartIt02743();
chartIt02744();
chartIt02745();
chartIt02746();
chartIt02747();
chartIt02748();
chartIt02749();
chartIt02750();
chartIt02751();
chartIt02752();
chartIt02753();
chartIt02754();
chartIt02755();
chartIt02756();
chartIt02757();
chartIt02758();
chartIt02759();
chartIt02760();
chartIt02761();
chartIt02762();
chartIt02763();
chartIt02764();
chartIt02765();
chartIt02766();
chartIt02767();
chartIt02768();
chartIt02769();
chartIt02770();
chartIt02771();
chartIt02772();
chartIt02773();
chartIt02774();
chartIt02775();
chartIt02776();
chartIt02777();
chartIt02778();
chartIt02779();
chartIt02780();
chartIt02781();
chartIt02782();
chartIt02783();
chartIt02784();
chartIt02785();
chartIt02786();
chartIt02787();
chartIt02788();
chartIt02789();
chartIt02790();
chartIt02791();
chartIt02792();
chartIt02793();
chartIt02794();
chartIt02795();
chartIt02796();
chartIt02797();
chartIt02798();
chartIt02799();
chartIt02800();
/*------------------------------------------------------------------ */
/*COMMUNE 02701*/
/*------------------------------------------------------------------ */
async function GraphDATA02701() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[700];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02701.push(vote_macron); 
    vote_lepen_02701.push(vote_lepen);
    vote_rejet_02701.push(vote_rejet);
    vote_macronpop_02701.push(vote_macronMediane);
    vote_lepenpop_02701.push(vote_lepenMediane);
    vote_rejetpop_02701.push(vote_rejetMediane);
    name_Commune_02701.push(nameCommune);
    Pourcentage_02701.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02701.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02701.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02701.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02701.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02701 = [];
const vote_lepen_02701 = [];
const vote_rejet_02701 = [];
const vote_macronpop_02701 = [];
const vote_lepenpop_02701 = [];
const vote_rejetpop_02701 = [];
const name_Commune_02701 = [];
const Pourcentage_02701 = [];
const Pourcentage_rejet_02701 = [];
const vote_gene_macron_02701 = [];
const vote_gene_lepen_02701 = [];
const vote_gene_rejet_02701 = [];

async function chartIt02701(){
    await GraphDATA02701();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02701-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02701
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02701
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02701-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02701,vote_lepen_02701,vote_rejet_02701]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02701-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02701,vote_lepenpop_02701,vote_rejetpop_02701]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02701"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02701
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02701
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02701
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02702*/
/*------------------------------------------------------------------ */
async function GraphDATA02702() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[701];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02702.push(vote_macron); 
    vote_lepen_02702.push(vote_lepen);
    vote_rejet_02702.push(vote_rejet);
    vote_macronpop_02702.push(vote_macronMediane);
    vote_lepenpop_02702.push(vote_lepenMediane);
    vote_rejetpop_02702.push(vote_rejetMediane);
    name_Commune_02702.push(nameCommune);
    Pourcentage_02702.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02702.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02702.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02702.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02702.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02702 = [];
const vote_lepen_02702 = [];
const vote_rejet_02702 = [];
const vote_macronpop_02702 = [];
const vote_lepenpop_02702 = [];
const vote_rejetpop_02702 = [];
const name_Commune_02702 = [];
const Pourcentage_02702 = [];
const Pourcentage_rejet_02702 = [];
const vote_gene_macron_02702 = [];
const vote_gene_lepen_02702 = [];
const vote_gene_rejet_02702 = [];

async function chartIt02702(){
    await GraphDATA02702();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02702-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02702
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02702
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02702-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02702,vote_lepen_02702,vote_rejet_02702]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02702-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02702,vote_lepenpop_02702,vote_rejetpop_02702]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02702"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02702
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02702
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02702
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02703*/
/*------------------------------------------------------------------ */
async function GraphDATA02703() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[702];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02703.push(vote_macron); 
    vote_lepen_02703.push(vote_lepen);
    vote_rejet_02703.push(vote_rejet);
    vote_macronpop_02703.push(vote_macronMediane);
    vote_lepenpop_02703.push(vote_lepenMediane);
    vote_rejetpop_02703.push(vote_rejetMediane);
    name_Commune_02703.push(nameCommune);
    Pourcentage_02703.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02703.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02703.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02703.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02703.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02703 = [];
const vote_lepen_02703 = [];
const vote_rejet_02703 = [];
const vote_macronpop_02703 = [];
const vote_lepenpop_02703 = [];
const vote_rejetpop_02703 = [];
const name_Commune_02703 = [];
const Pourcentage_02703 = [];
const Pourcentage_rejet_02703 = [];
const vote_gene_macron_02703 = [];
const vote_gene_lepen_02703 = [];
const vote_gene_rejet_02703 = [];

async function chartIt02703(){
    await GraphDATA02703();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02703-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02703
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02703
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02703-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02703,vote_lepen_02703,vote_rejet_02703]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02703-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02703,vote_lepenpop_02703,vote_rejetpop_02703]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02703"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02703
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02703
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02703
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02704*/
/*------------------------------------------------------------------ */
async function GraphDATA02704() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[703];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02704.push(vote_macron); 
    vote_lepen_02704.push(vote_lepen);
    vote_rejet_02704.push(vote_rejet);
    vote_macronpop_02704.push(vote_macronMediane);
    vote_lepenpop_02704.push(vote_lepenMediane);
    vote_rejetpop_02704.push(vote_rejetMediane);
    name_Commune_02704.push(nameCommune);
    Pourcentage_02704.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02704.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02704.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02704.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02704.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02704 = [];
const vote_lepen_02704 = [];
const vote_rejet_02704 = [];
const vote_macronpop_02704 = [];
const vote_lepenpop_02704 = [];
const vote_rejetpop_02704 = [];
const name_Commune_02704 = [];
const Pourcentage_02704 = [];
const Pourcentage_rejet_02704 = [];
const vote_gene_macron_02704 = [];
const vote_gene_lepen_02704 = [];
const vote_gene_rejet_02704 = [];

async function chartIt02704(){
    await GraphDATA02704();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02704-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02704
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02704
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02704-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02704,vote_lepen_02704,vote_rejet_02704]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02704-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02704,vote_lepenpop_02704,vote_rejetpop_02704]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02704"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02704
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02704
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02704
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02705*/
/*------------------------------------------------------------------ */
async function GraphDATA02705() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[704];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02705.push(vote_macron); 
    vote_lepen_02705.push(vote_lepen);
    vote_rejet_02705.push(vote_rejet);
    vote_macronpop_02705.push(vote_macronMediane);
    vote_lepenpop_02705.push(vote_lepenMediane);
    vote_rejetpop_02705.push(vote_rejetMediane);
    name_Commune_02705.push(nameCommune);
    Pourcentage_02705.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02705.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02705.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02705.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02705.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02705 = [];
const vote_lepen_02705 = [];
const vote_rejet_02705 = [];
const vote_macronpop_02705 = [];
const vote_lepenpop_02705 = [];
const vote_rejetpop_02705 = [];
const name_Commune_02705 = [];
const Pourcentage_02705 = [];
const Pourcentage_rejet_02705 = [];
const vote_gene_macron_02705 = [];
const vote_gene_lepen_02705 = [];
const vote_gene_rejet_02705 = [];

async function chartIt02705(){
    await GraphDATA02705();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02705-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02705
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02705
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02705-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02705,vote_lepen_02705,vote_rejet_02705]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02705-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02705,vote_lepenpop_02705,vote_rejetpop_02705]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02705"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02705
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02705
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02705
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02706*/
/*------------------------------------------------------------------ */
async function GraphDATA02706() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[705];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02706.push(vote_macron); 
    vote_lepen_02706.push(vote_lepen);
    vote_rejet_02706.push(vote_rejet);
    vote_macronpop_02706.push(vote_macronMediane);
    vote_lepenpop_02706.push(vote_lepenMediane);
    vote_rejetpop_02706.push(vote_rejetMediane);
    name_Commune_02706.push(nameCommune);
    Pourcentage_02706.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02706.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02706.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02706.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02706.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02706 = [];
const vote_lepen_02706 = [];
const vote_rejet_02706 = [];
const vote_macronpop_02706 = [];
const vote_lepenpop_02706 = [];
const vote_rejetpop_02706 = [];
const name_Commune_02706 = [];
const Pourcentage_02706 = [];
const Pourcentage_rejet_02706 = [];
const vote_gene_macron_02706 = [];
const vote_gene_lepen_02706 = [];
const vote_gene_rejet_02706 = [];

async function chartIt02706(){
    await GraphDATA02706();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02706-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02706
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02706
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02706-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02706,vote_lepen_02706,vote_rejet_02706]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02706-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02706,vote_lepenpop_02706,vote_rejetpop_02706]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02706"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02706
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02706
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02706
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02707*/
/*------------------------------------------------------------------ */
async function GraphDATA02707() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[706];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02707.push(vote_macron); 
    vote_lepen_02707.push(vote_lepen);
    vote_rejet_02707.push(vote_rejet);
    vote_macronpop_02707.push(vote_macronMediane);
    vote_lepenpop_02707.push(vote_lepenMediane);
    vote_rejetpop_02707.push(vote_rejetMediane);
    name_Commune_02707.push(nameCommune);
    Pourcentage_02707.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02707.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02707.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02707.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02707.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02707 = [];
const vote_lepen_02707 = [];
const vote_rejet_02707 = [];
const vote_macronpop_02707 = [];
const vote_lepenpop_02707 = [];
const vote_rejetpop_02707 = [];
const name_Commune_02707 = [];
const Pourcentage_02707 = [];
const Pourcentage_rejet_02707 = [];
const vote_gene_macron_02707 = [];
const vote_gene_lepen_02707 = [];
const vote_gene_rejet_02707 = [];

async function chartIt02707(){
    await GraphDATA02707();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02707-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02707
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02707
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02707-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02707,vote_lepen_02707,vote_rejet_02707]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02707-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02707,vote_lepenpop_02707,vote_rejetpop_02707]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02707"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02707
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02707
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02707
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02708*/
/*------------------------------------------------------------------ */
async function GraphDATA02708() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[707];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02708.push(vote_macron); 
    vote_lepen_02708.push(vote_lepen);
    vote_rejet_02708.push(vote_rejet);
    vote_macronpop_02708.push(vote_macronMediane);
    vote_lepenpop_02708.push(vote_lepenMediane);
    vote_rejetpop_02708.push(vote_rejetMediane);
    name_Commune_02708.push(nameCommune);
    Pourcentage_02708.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02708.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02708.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02708.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02708.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02708 = [];
const vote_lepen_02708 = [];
const vote_rejet_02708 = [];
const vote_macronpop_02708 = [];
const vote_lepenpop_02708 = [];
const vote_rejetpop_02708 = [];
const name_Commune_02708 = [];
const Pourcentage_02708 = [];
const Pourcentage_rejet_02708 = [];
const vote_gene_macron_02708 = [];
const vote_gene_lepen_02708 = [];
const vote_gene_rejet_02708 = [];

async function chartIt02708(){
    await GraphDATA02708();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02708-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02708
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02708
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02708-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02708,vote_lepen_02708,vote_rejet_02708]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02708-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02708,vote_lepenpop_02708,vote_rejetpop_02708]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02708"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02708
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02708
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02708
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02709*/
/*------------------------------------------------------------------ */
async function GraphDATA02709() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[708];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02709.push(vote_macron); 
    vote_lepen_02709.push(vote_lepen);
    vote_rejet_02709.push(vote_rejet);
    vote_macronpop_02709.push(vote_macronMediane);
    vote_lepenpop_02709.push(vote_lepenMediane);
    vote_rejetpop_02709.push(vote_rejetMediane);
    name_Commune_02709.push(nameCommune);
    Pourcentage_02709.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02709.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02709.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02709.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02709.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02709 = [];
const vote_lepen_02709 = [];
const vote_rejet_02709 = [];
const vote_macronpop_02709 = [];
const vote_lepenpop_02709 = [];
const vote_rejetpop_02709 = [];
const name_Commune_02709 = [];
const Pourcentage_02709 = [];
const Pourcentage_rejet_02709 = [];
const vote_gene_macron_02709 = [];
const vote_gene_lepen_02709 = [];
const vote_gene_rejet_02709 = [];

async function chartIt02709(){
    await GraphDATA02709();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02709-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02709
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02709
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02709-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02709,vote_lepen_02709,vote_rejet_02709]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02709-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02709,vote_lepenpop_02709,vote_rejetpop_02709]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02709"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02709
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02709
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02709
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02710*/
/*------------------------------------------------------------------ */
async function GraphDATA02710() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[709];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02710.push(vote_macron); 
    vote_lepen_02710.push(vote_lepen);
    vote_rejet_02710.push(vote_rejet);
    vote_macronpop_02710.push(vote_macronMediane);
    vote_lepenpop_02710.push(vote_lepenMediane);
    vote_rejetpop_02710.push(vote_rejetMediane);
    name_Commune_02710.push(nameCommune);
    Pourcentage_02710.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02710.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02710.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02710.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02710.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02710 = [];
const vote_lepen_02710 = [];
const vote_rejet_02710 = [];
const vote_macronpop_02710 = [];
const vote_lepenpop_02710 = [];
const vote_rejetpop_02710 = [];
const name_Commune_02710 = [];
const Pourcentage_02710 = [];
const Pourcentage_rejet_02710 = [];
const vote_gene_macron_02710 = [];
const vote_gene_lepen_02710 = [];
const vote_gene_rejet_02710 = [];

async function chartIt02710(){
    await GraphDATA02710();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02710-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02710
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02710
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02710-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02710,vote_lepen_02710,vote_rejet_02710]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02710-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02710,vote_lepenpop_02710,vote_rejetpop_02710]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02710"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02710
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02710
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02710
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02711*/
/*------------------------------------------------------------------ */
async function GraphDATA02711() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[710];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02711.push(vote_macron); 
    vote_lepen_02711.push(vote_lepen);
    vote_rejet_02711.push(vote_rejet);
    vote_macronpop_02711.push(vote_macronMediane);
    vote_lepenpop_02711.push(vote_lepenMediane);
    vote_rejetpop_02711.push(vote_rejetMediane);
    name_Commune_02711.push(nameCommune);
    Pourcentage_02711.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02711.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02711.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02711.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02711.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02711 = [];
const vote_lepen_02711 = [];
const vote_rejet_02711 = [];
const vote_macronpop_02711 = [];
const vote_lepenpop_02711 = [];
const vote_rejetpop_02711 = [];
const name_Commune_02711 = [];
const Pourcentage_02711 = [];
const Pourcentage_rejet_02711 = [];
const vote_gene_macron_02711 = [];
const vote_gene_lepen_02711 = [];
const vote_gene_rejet_02711 = [];

async function chartIt02711(){
    await GraphDATA02711();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02711-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02711
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02711
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02711-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02711,vote_lepen_02711,vote_rejet_02711]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02711-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02711,vote_lepenpop_02711,vote_rejetpop_02711]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02711"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02711
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02711
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02711
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02712*/
/*------------------------------------------------------------------ */
async function GraphDATA02712() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[711];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02712.push(vote_macron); 
    vote_lepen_02712.push(vote_lepen);
    vote_rejet_02712.push(vote_rejet);
    vote_macronpop_02712.push(vote_macronMediane);
    vote_lepenpop_02712.push(vote_lepenMediane);
    vote_rejetpop_02712.push(vote_rejetMediane);
    name_Commune_02712.push(nameCommune);
    Pourcentage_02712.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02712.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02712.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02712.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02712.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02712 = [];
const vote_lepen_02712 = [];
const vote_rejet_02712 = [];
const vote_macronpop_02712 = [];
const vote_lepenpop_02712 = [];
const vote_rejetpop_02712 = [];
const name_Commune_02712 = [];
const Pourcentage_02712 = [];
const Pourcentage_rejet_02712 = [];
const vote_gene_macron_02712 = [];
const vote_gene_lepen_02712 = [];
const vote_gene_rejet_02712 = [];

async function chartIt02712(){
    await GraphDATA02712();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02712-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02712
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02712
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02712-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02712,vote_lepen_02712,vote_rejet_02712]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02712-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02712,vote_lepenpop_02712,vote_rejetpop_02712]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02712"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02712
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02712
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02712
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02713*/
/*------------------------------------------------------------------ */
async function GraphDATA02713() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[712];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02713.push(vote_macron); 
    vote_lepen_02713.push(vote_lepen);
    vote_rejet_02713.push(vote_rejet);
    vote_macronpop_02713.push(vote_macronMediane);
    vote_lepenpop_02713.push(vote_lepenMediane);
    vote_rejetpop_02713.push(vote_rejetMediane);
    name_Commune_02713.push(nameCommune);
    Pourcentage_02713.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02713.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02713.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02713.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02713.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02713 = [];
const vote_lepen_02713 = [];
const vote_rejet_02713 = [];
const vote_macronpop_02713 = [];
const vote_lepenpop_02713 = [];
const vote_rejetpop_02713 = [];
const name_Commune_02713 = [];
const Pourcentage_02713 = [];
const Pourcentage_rejet_02713 = [];
const vote_gene_macron_02713 = [];
const vote_gene_lepen_02713 = [];
const vote_gene_rejet_02713 = [];

async function chartIt02713(){
    await GraphDATA02713();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02713-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02713
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02713
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02713-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02713,vote_lepen_02713,vote_rejet_02713]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02713-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02713,vote_lepenpop_02713,vote_rejetpop_02713]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02713"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02713
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02713
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02713
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02714*/
/*------------------------------------------------------------------ */
async function GraphDATA02714() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[713];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02714.push(vote_macron); 
    vote_lepen_02714.push(vote_lepen);
    vote_rejet_02714.push(vote_rejet);
    vote_macronpop_02714.push(vote_macronMediane);
    vote_lepenpop_02714.push(vote_lepenMediane);
    vote_rejetpop_02714.push(vote_rejetMediane);
    name_Commune_02714.push(nameCommune);
    Pourcentage_02714.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02714.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02714.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02714.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02714.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02714 = [];
const vote_lepen_02714 = [];
const vote_rejet_02714 = [];
const vote_macronpop_02714 = [];
const vote_lepenpop_02714 = [];
const vote_rejetpop_02714 = [];
const name_Commune_02714 = [];
const Pourcentage_02714 = [];
const Pourcentage_rejet_02714 = [];
const vote_gene_macron_02714 = [];
const vote_gene_lepen_02714 = [];
const vote_gene_rejet_02714 = [];

async function chartIt02714(){
    await GraphDATA02714();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02714-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02714
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02714
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02714-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02714,vote_lepen_02714,vote_rejet_02714]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02714-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02714,vote_lepenpop_02714,vote_rejetpop_02714]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02714"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02714
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02714
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02714
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02715*/
/*------------------------------------------------------------------ */
async function GraphDATA02715() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[714];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02715.push(vote_macron); 
    vote_lepen_02715.push(vote_lepen);
    vote_rejet_02715.push(vote_rejet);
    vote_macronpop_02715.push(vote_macronMediane);
    vote_lepenpop_02715.push(vote_lepenMediane);
    vote_rejetpop_02715.push(vote_rejetMediane);
    name_Commune_02715.push(nameCommune);
    Pourcentage_02715.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02715.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02715.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02715.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02715.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02715 = [];
const vote_lepen_02715 = [];
const vote_rejet_02715 = [];
const vote_macronpop_02715 = [];
const vote_lepenpop_02715 = [];
const vote_rejetpop_02715 = [];
const name_Commune_02715 = [];
const Pourcentage_02715 = [];
const Pourcentage_rejet_02715 = [];
const vote_gene_macron_02715 = [];
const vote_gene_lepen_02715 = [];
const vote_gene_rejet_02715 = [];

async function chartIt02715(){
    await GraphDATA02715();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02715-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02715
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02715
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02715-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02715,vote_lepen_02715,vote_rejet_02715]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02715-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02715,vote_lepenpop_02715,vote_rejetpop_02715]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02715"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02715
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02715
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02715
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02716*/
/*------------------------------------------------------------------ */
async function GraphDATA02716() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[715];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02716.push(vote_macron); 
    vote_lepen_02716.push(vote_lepen);
    vote_rejet_02716.push(vote_rejet);
    vote_macronpop_02716.push(vote_macronMediane);
    vote_lepenpop_02716.push(vote_lepenMediane);
    vote_rejetpop_02716.push(vote_rejetMediane);
    name_Commune_02716.push(nameCommune);
    Pourcentage_02716.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02716.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02716.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02716.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02716.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02716 = [];
const vote_lepen_02716 = [];
const vote_rejet_02716 = [];
const vote_macronpop_02716 = [];
const vote_lepenpop_02716 = [];
const vote_rejetpop_02716 = [];
const name_Commune_02716 = [];
const Pourcentage_02716 = [];
const Pourcentage_rejet_02716 = [];
const vote_gene_macron_02716 = [];
const vote_gene_lepen_02716 = [];
const vote_gene_rejet_02716 = [];

async function chartIt02716(){
    await GraphDATA02716();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02716-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02716
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02716
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02716-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02716,vote_lepen_02716,vote_rejet_02716]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02716-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02716,vote_lepenpop_02716,vote_rejetpop_02716]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02716"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02716
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02716
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02716
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02717*/
/*------------------------------------------------------------------ */
async function GraphDATA02717() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[716];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02717.push(vote_macron); 
    vote_lepen_02717.push(vote_lepen);
    vote_rejet_02717.push(vote_rejet);
    vote_macronpop_02717.push(vote_macronMediane);
    vote_lepenpop_02717.push(vote_lepenMediane);
    vote_rejetpop_02717.push(vote_rejetMediane);
    name_Commune_02717.push(nameCommune);
    Pourcentage_02717.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02717.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02717.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02717.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02717.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02717 = [];
const vote_lepen_02717 = [];
const vote_rejet_02717 = [];
const vote_macronpop_02717 = [];
const vote_lepenpop_02717 = [];
const vote_rejetpop_02717 = [];
const name_Commune_02717 = [];
const Pourcentage_02717 = [];
const Pourcentage_rejet_02717 = [];
const vote_gene_macron_02717 = [];
const vote_gene_lepen_02717 = [];
const vote_gene_rejet_02717 = [];

async function chartIt02717(){
    await GraphDATA02717();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02717-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02717
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02717
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02717-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02717,vote_lepen_02717,vote_rejet_02717]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02717-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02717,vote_lepenpop_02717,vote_rejetpop_02717]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02717"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02717
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02717
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02717
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02718*/
/*------------------------------------------------------------------ */
async function GraphDATA02718() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[717];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02718.push(vote_macron); 
    vote_lepen_02718.push(vote_lepen);
    vote_rejet_02718.push(vote_rejet);
    vote_macronpop_02718.push(vote_macronMediane);
    vote_lepenpop_02718.push(vote_lepenMediane);
    vote_rejetpop_02718.push(vote_rejetMediane);
    name_Commune_02718.push(nameCommune);
    Pourcentage_02718.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02718.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02718.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02718.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02718.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02718 = [];
const vote_lepen_02718 = [];
const vote_rejet_02718 = [];
const vote_macronpop_02718 = [];
const vote_lepenpop_02718 = [];
const vote_rejetpop_02718 = [];
const name_Commune_02718 = [];
const Pourcentage_02718 = [];
const Pourcentage_rejet_02718 = [];
const vote_gene_macron_02718 = [];
const vote_gene_lepen_02718 = [];
const vote_gene_rejet_02718 = [];

async function chartIt02718(){
    await GraphDATA02718();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02718-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02718
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02718
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02718-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02718,vote_lepen_02718,vote_rejet_02718]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02718-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02718,vote_lepenpop_02718,vote_rejetpop_02718]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02718"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02718
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02718
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02718
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02719*/
/*------------------------------------------------------------------ */
async function GraphDATA02719() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[718];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02719.push(vote_macron); 
    vote_lepen_02719.push(vote_lepen);
    vote_rejet_02719.push(vote_rejet);
    vote_macronpop_02719.push(vote_macronMediane);
    vote_lepenpop_02719.push(vote_lepenMediane);
    vote_rejetpop_02719.push(vote_rejetMediane);
    name_Commune_02719.push(nameCommune);
    Pourcentage_02719.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02719.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02719.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02719.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02719.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02719 = [];
const vote_lepen_02719 = [];
const vote_rejet_02719 = [];
const vote_macronpop_02719 = [];
const vote_lepenpop_02719 = [];
const vote_rejetpop_02719 = [];
const name_Commune_02719 = [];
const Pourcentage_02719 = [];
const Pourcentage_rejet_02719 = [];
const vote_gene_macron_02719 = [];
const vote_gene_lepen_02719 = [];
const vote_gene_rejet_02719 = [];

async function chartIt02719(){
    await GraphDATA02719();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02719-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02719
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02719
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02719-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02719,vote_lepen_02719,vote_rejet_02719]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02719-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02719,vote_lepenpop_02719,vote_rejetpop_02719]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02719"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02719
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02719
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02719
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02720*/
/*------------------------------------------------------------------ */
async function GraphDATA02720() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[719];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02720.push(vote_macron); 
    vote_lepen_02720.push(vote_lepen);
    vote_rejet_02720.push(vote_rejet);
    vote_macronpop_02720.push(vote_macronMediane);
    vote_lepenpop_02720.push(vote_lepenMediane);
    vote_rejetpop_02720.push(vote_rejetMediane);
    name_Commune_02720.push(nameCommune);
    Pourcentage_02720.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02720.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02720.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02720.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02720.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02720 = [];
const vote_lepen_02720 = [];
const vote_rejet_02720 = [];
const vote_macronpop_02720 = [];
const vote_lepenpop_02720 = [];
const vote_rejetpop_02720 = [];
const name_Commune_02720 = [];
const Pourcentage_02720 = [];
const Pourcentage_rejet_02720 = [];
const vote_gene_macron_02720 = [];
const vote_gene_lepen_02720 = [];
const vote_gene_rejet_02720 = [];

async function chartIt02720(){
    await GraphDATA02720();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02720-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02720
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02720
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02720-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02720,vote_lepen_02720,vote_rejet_02720]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02720-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02720,vote_lepenpop_02720,vote_rejetpop_02720]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02720"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02720
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02720
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02720
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02721*/
/*------------------------------------------------------------------ */
async function GraphDATA02721() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[720];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02721.push(vote_macron); 
    vote_lepen_02721.push(vote_lepen);
    vote_rejet_02721.push(vote_rejet);
    vote_macronpop_02721.push(vote_macronMediane);
    vote_lepenpop_02721.push(vote_lepenMediane);
    vote_rejetpop_02721.push(vote_rejetMediane);
    name_Commune_02721.push(nameCommune);
    Pourcentage_02721.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02721.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02721.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02721.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02721.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02721 = [];
const vote_lepen_02721 = [];
const vote_rejet_02721 = [];
const vote_macronpop_02721 = [];
const vote_lepenpop_02721 = [];
const vote_rejetpop_02721 = [];
const name_Commune_02721 = [];
const Pourcentage_02721 = [];
const Pourcentage_rejet_02721 = [];
const vote_gene_macron_02721 = [];
const vote_gene_lepen_02721 = [];
const vote_gene_rejet_02721 = [];

async function chartIt02721(){
    await GraphDATA02721();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02721-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02721
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02721
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02721-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02721,vote_lepen_02721,vote_rejet_02721]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02721-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02721,vote_lepenpop_02721,vote_rejetpop_02721]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02721"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02721
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02721
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02721
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02722*/
/*------------------------------------------------------------------ */
async function GraphDATA02722() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[721];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02722.push(vote_macron); 
    vote_lepen_02722.push(vote_lepen);
    vote_rejet_02722.push(vote_rejet);
    vote_macronpop_02722.push(vote_macronMediane);
    vote_lepenpop_02722.push(vote_lepenMediane);
    vote_rejetpop_02722.push(vote_rejetMediane);
    name_Commune_02722.push(nameCommune);
    Pourcentage_02722.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02722.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02722.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02722.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02722.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02722 = [];
const vote_lepen_02722 = [];
const vote_rejet_02722 = [];
const vote_macronpop_02722 = [];
const vote_lepenpop_02722 = [];
const vote_rejetpop_02722 = [];
const name_Commune_02722 = [];
const Pourcentage_02722 = [];
const Pourcentage_rejet_02722 = [];
const vote_gene_macron_02722 = [];
const vote_gene_lepen_02722 = [];
const vote_gene_rejet_02722 = [];

async function chartIt02722(){
    await GraphDATA02722();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02722-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02722
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02722
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02722-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02722,vote_lepen_02722,vote_rejet_02722]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02722-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02722,vote_lepenpop_02722,vote_rejetpop_02722]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02722"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02722
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02722
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02722
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02723*/
/*------------------------------------------------------------------ */
async function GraphDATA02723() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[722];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02723.push(vote_macron); 
    vote_lepen_02723.push(vote_lepen);
    vote_rejet_02723.push(vote_rejet);
    vote_macronpop_02723.push(vote_macronMediane);
    vote_lepenpop_02723.push(vote_lepenMediane);
    vote_rejetpop_02723.push(vote_rejetMediane);
    name_Commune_02723.push(nameCommune);
    Pourcentage_02723.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02723.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02723.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02723.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02723.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02723 = [];
const vote_lepen_02723 = [];
const vote_rejet_02723 = [];
const vote_macronpop_02723 = [];
const vote_lepenpop_02723 = [];
const vote_rejetpop_02723 = [];
const name_Commune_02723 = [];
const Pourcentage_02723 = [];
const Pourcentage_rejet_02723 = [];
const vote_gene_macron_02723 = [];
const vote_gene_lepen_02723 = [];
const vote_gene_rejet_02723 = [];

async function chartIt02723(){
    await GraphDATA02723();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02723-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02723
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02723
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02723-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02723,vote_lepen_02723,vote_rejet_02723]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02723-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02723,vote_lepenpop_02723,vote_rejetpop_02723]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02723"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02723
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02723
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02723
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02724*/
/*------------------------------------------------------------------ */
async function GraphDATA02724() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[723];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02724.push(vote_macron); 
    vote_lepen_02724.push(vote_lepen);
    vote_rejet_02724.push(vote_rejet);
    vote_macronpop_02724.push(vote_macronMediane);
    vote_lepenpop_02724.push(vote_lepenMediane);
    vote_rejetpop_02724.push(vote_rejetMediane);
    name_Commune_02724.push(nameCommune);
    Pourcentage_02724.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02724.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02724.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02724.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02724.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02724 = [];
const vote_lepen_02724 = [];
const vote_rejet_02724 = [];
const vote_macronpop_02724 = [];
const vote_lepenpop_02724 = [];
const vote_rejetpop_02724 = [];
const name_Commune_02724 = [];
const Pourcentage_02724 = [];
const Pourcentage_rejet_02724 = [];
const vote_gene_macron_02724 = [];
const vote_gene_lepen_02724 = [];
const vote_gene_rejet_02724 = [];

async function chartIt02724(){
    await GraphDATA02724();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02724-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02724
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02724
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02724-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02724,vote_lepen_02724,vote_rejet_02724]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02724-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02724,vote_lepenpop_02724,vote_rejetpop_02724]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02724"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02724
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02724
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02724
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02725*/
/*------------------------------------------------------------------ */
async function GraphDATA02725() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[724];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02725.push(vote_macron); 
    vote_lepen_02725.push(vote_lepen);
    vote_rejet_02725.push(vote_rejet);
    vote_macronpop_02725.push(vote_macronMediane);
    vote_lepenpop_02725.push(vote_lepenMediane);
    vote_rejetpop_02725.push(vote_rejetMediane);
    name_Commune_02725.push(nameCommune);
    Pourcentage_02725.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02725.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02725.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02725.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02725.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02725 = [];
const vote_lepen_02725 = [];
const vote_rejet_02725 = [];
const vote_macronpop_02725 = [];
const vote_lepenpop_02725 = [];
const vote_rejetpop_02725 = [];
const name_Commune_02725 = [];
const Pourcentage_02725 = [];
const Pourcentage_rejet_02725 = [];
const vote_gene_macron_02725 = [];
const vote_gene_lepen_02725 = [];
const vote_gene_rejet_02725 = [];

async function chartIt02725(){
    await GraphDATA02725();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02725-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02725
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02725
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02725-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02725,vote_lepen_02725,vote_rejet_02725]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02725-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02725,vote_lepenpop_02725,vote_rejetpop_02725]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02725"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02725
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02725
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02725
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02726*/
/*------------------------------------------------------------------ */
async function GraphDATA02726() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[725];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02726.push(vote_macron); 
    vote_lepen_02726.push(vote_lepen);
    vote_rejet_02726.push(vote_rejet);
    vote_macronpop_02726.push(vote_macronMediane);
    vote_lepenpop_02726.push(vote_lepenMediane);
    vote_rejetpop_02726.push(vote_rejetMediane);
    name_Commune_02726.push(nameCommune);
    Pourcentage_02726.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02726.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02726.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02726.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02726.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02726 = [];
const vote_lepen_02726 = [];
const vote_rejet_02726 = [];
const vote_macronpop_02726 = [];
const vote_lepenpop_02726 = [];
const vote_rejetpop_02726 = [];
const name_Commune_02726 = [];
const Pourcentage_02726 = [];
const Pourcentage_rejet_02726 = [];
const vote_gene_macron_02726 = [];
const vote_gene_lepen_02726 = [];
const vote_gene_rejet_02726 = [];

async function chartIt02726(){
    await GraphDATA02726();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02726-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02726
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02726
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02726-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02726,vote_lepen_02726,vote_rejet_02726]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02726-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02726,vote_lepenpop_02726,vote_rejetpop_02726]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02726"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02726
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02726
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02726
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02727*/
/*------------------------------------------------------------------ */
async function GraphDATA02727() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[726];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02727.push(vote_macron); 
    vote_lepen_02727.push(vote_lepen);
    vote_rejet_02727.push(vote_rejet);
    vote_macronpop_02727.push(vote_macronMediane);
    vote_lepenpop_02727.push(vote_lepenMediane);
    vote_rejetpop_02727.push(vote_rejetMediane);
    name_Commune_02727.push(nameCommune);
    Pourcentage_02727.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02727.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02727.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02727.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02727.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02727 = [];
const vote_lepen_02727 = [];
const vote_rejet_02727 = [];
const vote_macronpop_02727 = [];
const vote_lepenpop_02727 = [];
const vote_rejetpop_02727 = [];
const name_Commune_02727 = [];
const Pourcentage_02727 = [];
const Pourcentage_rejet_02727 = [];
const vote_gene_macron_02727 = [];
const vote_gene_lepen_02727 = [];
const vote_gene_rejet_02727 = [];

async function chartIt02727(){
    await GraphDATA02727();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02727-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02727
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02727
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02727-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02727,vote_lepen_02727,vote_rejet_02727]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02727-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02727,vote_lepenpop_02727,vote_rejetpop_02727]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02727"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02727
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02727
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02727
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02728*/
/*------------------------------------------------------------------ */
async function GraphDATA02728() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[727];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02728.push(vote_macron); 
    vote_lepen_02728.push(vote_lepen);
    vote_rejet_02728.push(vote_rejet);
    vote_macronpop_02728.push(vote_macronMediane);
    vote_lepenpop_02728.push(vote_lepenMediane);
    vote_rejetpop_02728.push(vote_rejetMediane);
    name_Commune_02728.push(nameCommune);
    Pourcentage_02728.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02728.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02728.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02728.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02728.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02728 = [];
const vote_lepen_02728 = [];
const vote_rejet_02728 = [];
const vote_macronpop_02728 = [];
const vote_lepenpop_02728 = [];
const vote_rejetpop_02728 = [];
const name_Commune_02728 = [];
const Pourcentage_02728 = [];
const Pourcentage_rejet_02728 = [];
const vote_gene_macron_02728 = [];
const vote_gene_lepen_02728 = [];
const vote_gene_rejet_02728 = [];

async function chartIt02728(){
    await GraphDATA02728();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02728-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02728
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02728
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02728-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02728,vote_lepen_02728,vote_rejet_02728]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02728-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02728,vote_lepenpop_02728,vote_rejetpop_02728]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02728"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02728
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02728
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02728
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02729*/
/*------------------------------------------------------------------ */
async function GraphDATA02729() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[728];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02729.push(vote_macron); 
    vote_lepen_02729.push(vote_lepen);
    vote_rejet_02729.push(vote_rejet);
    vote_macronpop_02729.push(vote_macronMediane);
    vote_lepenpop_02729.push(vote_lepenMediane);
    vote_rejetpop_02729.push(vote_rejetMediane);
    name_Commune_02729.push(nameCommune);
    Pourcentage_02729.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02729.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02729.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02729.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02729.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02729 = [];
const vote_lepen_02729 = [];
const vote_rejet_02729 = [];
const vote_macronpop_02729 = [];
const vote_lepenpop_02729 = [];
const vote_rejetpop_02729 = [];
const name_Commune_02729 = [];
const Pourcentage_02729 = [];
const Pourcentage_rejet_02729 = [];
const vote_gene_macron_02729 = [];
const vote_gene_lepen_02729 = [];
const vote_gene_rejet_02729 = [];

async function chartIt02729(){
    await GraphDATA02729();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02729-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02729
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02729
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02729-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02729,vote_lepen_02729,vote_rejet_02729]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02729-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02729,vote_lepenpop_02729,vote_rejetpop_02729]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02729"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02729
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02729
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02729
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02730*/
/*------------------------------------------------------------------ */
async function GraphDATA02730() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[729];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02730.push(vote_macron); 
    vote_lepen_02730.push(vote_lepen);
    vote_rejet_02730.push(vote_rejet);
    vote_macronpop_02730.push(vote_macronMediane);
    vote_lepenpop_02730.push(vote_lepenMediane);
    vote_rejetpop_02730.push(vote_rejetMediane);
    name_Commune_02730.push(nameCommune);
    Pourcentage_02730.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02730.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02730.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02730.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02730.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02730 = [];
const vote_lepen_02730 = [];
const vote_rejet_02730 = [];
const vote_macronpop_02730 = [];
const vote_lepenpop_02730 = [];
const vote_rejetpop_02730 = [];
const name_Commune_02730 = [];
const Pourcentage_02730 = [];
const Pourcentage_rejet_02730 = [];
const vote_gene_macron_02730 = [];
const vote_gene_lepen_02730 = [];
const vote_gene_rejet_02730 = [];

async function chartIt02730(){
    await GraphDATA02730();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02730-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02730
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02730
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02730-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02730,vote_lepen_02730,vote_rejet_02730]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02730-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02730,vote_lepenpop_02730,vote_rejetpop_02730]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02730"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02730
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02730
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02730
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02731*/
/*------------------------------------------------------------------ */
async function GraphDATA02731() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[730];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02731.push(vote_macron); 
    vote_lepen_02731.push(vote_lepen);
    vote_rejet_02731.push(vote_rejet);
    vote_macronpop_02731.push(vote_macronMediane);
    vote_lepenpop_02731.push(vote_lepenMediane);
    vote_rejetpop_02731.push(vote_rejetMediane);
    name_Commune_02731.push(nameCommune);
    Pourcentage_02731.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02731.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02731.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02731.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02731.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02731 = [];
const vote_lepen_02731 = [];
const vote_rejet_02731 = [];
const vote_macronpop_02731 = [];
const vote_lepenpop_02731 = [];
const vote_rejetpop_02731 = [];
const name_Commune_02731 = [];
const Pourcentage_02731 = [];
const Pourcentage_rejet_02731 = [];
const vote_gene_macron_02731 = [];
const vote_gene_lepen_02731 = [];
const vote_gene_rejet_02731 = [];

async function chartIt02731(){
    await GraphDATA02731();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02731-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02731
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02731
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02731-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02731,vote_lepen_02731,vote_rejet_02731]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02731-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02731,vote_lepenpop_02731,vote_rejetpop_02731]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02731"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02731
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02731
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02731
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02732*/
/*------------------------------------------------------------------ */
async function GraphDATA02732() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[731];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02732.push(vote_macron); 
    vote_lepen_02732.push(vote_lepen);
    vote_rejet_02732.push(vote_rejet);
    vote_macronpop_02732.push(vote_macronMediane);
    vote_lepenpop_02732.push(vote_lepenMediane);
    vote_rejetpop_02732.push(vote_rejetMediane);
    name_Commune_02732.push(nameCommune);
    Pourcentage_02732.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02732.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02732.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02732.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02732.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02732 = [];
const vote_lepen_02732 = [];
const vote_rejet_02732 = [];
const vote_macronpop_02732 = [];
const vote_lepenpop_02732 = [];
const vote_rejetpop_02732 = [];
const name_Commune_02732 = [];
const Pourcentage_02732 = [];
const Pourcentage_rejet_02732 = [];
const vote_gene_macron_02732 = [];
const vote_gene_lepen_02732 = [];
const vote_gene_rejet_02732 = [];

async function chartIt02732(){
    await GraphDATA02732();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02732-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02732
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02732
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02732-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02732,vote_lepen_02732,vote_rejet_02732]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02732-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02732,vote_lepenpop_02732,vote_rejetpop_02732]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02732"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02732
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02732
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02732
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02733*/
/*------------------------------------------------------------------ */
async function GraphDATA02733() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[732];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02733.push(vote_macron); 
    vote_lepen_02733.push(vote_lepen);
    vote_rejet_02733.push(vote_rejet);
    vote_macronpop_02733.push(vote_macronMediane);
    vote_lepenpop_02733.push(vote_lepenMediane);
    vote_rejetpop_02733.push(vote_rejetMediane);
    name_Commune_02733.push(nameCommune);
    Pourcentage_02733.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02733.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02733.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02733.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02733.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02733 = [];
const vote_lepen_02733 = [];
const vote_rejet_02733 = [];
const vote_macronpop_02733 = [];
const vote_lepenpop_02733 = [];
const vote_rejetpop_02733 = [];
const name_Commune_02733 = [];
const Pourcentage_02733 = [];
const Pourcentage_rejet_02733 = [];
const vote_gene_macron_02733 = [];
const vote_gene_lepen_02733 = [];
const vote_gene_rejet_02733 = [];

async function chartIt02733(){
    await GraphDATA02733();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02733-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02733
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02733
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02733-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02733,vote_lepen_02733,vote_rejet_02733]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02733-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02733,vote_lepenpop_02733,vote_rejetpop_02733]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02733"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02733
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02733
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02733
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02734*/
/*------------------------------------------------------------------ */
async function GraphDATA02734() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[733];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02734.push(vote_macron); 
    vote_lepen_02734.push(vote_lepen);
    vote_rejet_02734.push(vote_rejet);
    vote_macronpop_02734.push(vote_macronMediane);
    vote_lepenpop_02734.push(vote_lepenMediane);
    vote_rejetpop_02734.push(vote_rejetMediane);
    name_Commune_02734.push(nameCommune);
    Pourcentage_02734.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02734.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02734.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02734.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02734.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02734 = [];
const vote_lepen_02734 = [];
const vote_rejet_02734 = [];
const vote_macronpop_02734 = [];
const vote_lepenpop_02734 = [];
const vote_rejetpop_02734 = [];
const name_Commune_02734 = [];
const Pourcentage_02734 = [];
const Pourcentage_rejet_02734 = [];
const vote_gene_macron_02734 = [];
const vote_gene_lepen_02734 = [];
const vote_gene_rejet_02734 = [];

async function chartIt02734(){
    await GraphDATA02734();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02734-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02734
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02734
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02734-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02734,vote_lepen_02734,vote_rejet_02734]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02734-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02734,vote_lepenpop_02734,vote_rejetpop_02734]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02734"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02734
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02734
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02734
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02735*/
/*------------------------------------------------------------------ */
async function GraphDATA02735() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[734];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02735.push(vote_macron); 
    vote_lepen_02735.push(vote_lepen);
    vote_rejet_02735.push(vote_rejet);
    vote_macronpop_02735.push(vote_macronMediane);
    vote_lepenpop_02735.push(vote_lepenMediane);
    vote_rejetpop_02735.push(vote_rejetMediane);
    name_Commune_02735.push(nameCommune);
    Pourcentage_02735.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02735.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02735.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02735.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02735.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02735 = [];
const vote_lepen_02735 = [];
const vote_rejet_02735 = [];
const vote_macronpop_02735 = [];
const vote_lepenpop_02735 = [];
const vote_rejetpop_02735 = [];
const name_Commune_02735 = [];
const Pourcentage_02735 = [];
const Pourcentage_rejet_02735 = [];
const vote_gene_macron_02735 = [];
const vote_gene_lepen_02735 = [];
const vote_gene_rejet_02735 = [];

async function chartIt02735(){
    await GraphDATA02735();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02735-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02735
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02735
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02735-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02735,vote_lepen_02735,vote_rejet_02735]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02735-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02735,vote_lepenpop_02735,vote_rejetpop_02735]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02735"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02735
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02735
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02735
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02736*/
/*------------------------------------------------------------------ */
async function GraphDATA02736() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[735];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02736.push(vote_macron); 
    vote_lepen_02736.push(vote_lepen);
    vote_rejet_02736.push(vote_rejet);
    vote_macronpop_02736.push(vote_macronMediane);
    vote_lepenpop_02736.push(vote_lepenMediane);
    vote_rejetpop_02736.push(vote_rejetMediane);
    name_Commune_02736.push(nameCommune);
    Pourcentage_02736.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02736.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02736.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02736.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02736.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02736 = [];
const vote_lepen_02736 = [];
const vote_rejet_02736 = [];
const vote_macronpop_02736 = [];
const vote_lepenpop_02736 = [];
const vote_rejetpop_02736 = [];
const name_Commune_02736 = [];
const Pourcentage_02736 = [];
const Pourcentage_rejet_02736 = [];
const vote_gene_macron_02736 = [];
const vote_gene_lepen_02736 = [];
const vote_gene_rejet_02736 = [];

async function chartIt02736(){
    await GraphDATA02736();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02736-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02736
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02736
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02736-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02736,vote_lepen_02736,vote_rejet_02736]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02736-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02736,vote_lepenpop_02736,vote_rejetpop_02736]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02736"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02736
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02736
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02736
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02737*/
/*------------------------------------------------------------------ */
async function GraphDATA02737() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[736];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02737.push(vote_macron); 
    vote_lepen_02737.push(vote_lepen);
    vote_rejet_02737.push(vote_rejet);
    vote_macronpop_02737.push(vote_macronMediane);
    vote_lepenpop_02737.push(vote_lepenMediane);
    vote_rejetpop_02737.push(vote_rejetMediane);
    name_Commune_02737.push(nameCommune);
    Pourcentage_02737.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02737.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02737.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02737.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02737.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02737 = [];
const vote_lepen_02737 = [];
const vote_rejet_02737 = [];
const vote_macronpop_02737 = [];
const vote_lepenpop_02737 = [];
const vote_rejetpop_02737 = [];
const name_Commune_02737 = [];
const Pourcentage_02737 = [];
const Pourcentage_rejet_02737 = [];
const vote_gene_macron_02737 = [];
const vote_gene_lepen_02737 = [];
const vote_gene_rejet_02737 = [];

async function chartIt02737(){
    await GraphDATA02737();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02737-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02737
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02737
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02737-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02737,vote_lepen_02737,vote_rejet_02737]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02737-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02737,vote_lepenpop_02737,vote_rejetpop_02737]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02737"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02737
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02737
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02737
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02738*/
/*------------------------------------------------------------------ */
async function GraphDATA02738() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[737];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02738.push(vote_macron); 
    vote_lepen_02738.push(vote_lepen);
    vote_rejet_02738.push(vote_rejet);
    vote_macronpop_02738.push(vote_macronMediane);
    vote_lepenpop_02738.push(vote_lepenMediane);
    vote_rejetpop_02738.push(vote_rejetMediane);
    name_Commune_02738.push(nameCommune);
    Pourcentage_02738.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02738.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02738.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02738.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02738.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02738 = [];
const vote_lepen_02738 = [];
const vote_rejet_02738 = [];
const vote_macronpop_02738 = [];
const vote_lepenpop_02738 = [];
const vote_rejetpop_02738 = [];
const name_Commune_02738 = [];
const Pourcentage_02738 = [];
const Pourcentage_rejet_02738 = [];
const vote_gene_macron_02738 = [];
const vote_gene_lepen_02738 = [];
const vote_gene_rejet_02738 = [];

async function chartIt02738(){
    await GraphDATA02738();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02738-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02738
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02738
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02738-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02738,vote_lepen_02738,vote_rejet_02738]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02738-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02738,vote_lepenpop_02738,vote_rejetpop_02738]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02738"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02738
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02738
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02738
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02739*/
/*------------------------------------------------------------------ */
async function GraphDATA02739() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[738];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02739.push(vote_macron); 
    vote_lepen_02739.push(vote_lepen);
    vote_rejet_02739.push(vote_rejet);
    vote_macronpop_02739.push(vote_macronMediane);
    vote_lepenpop_02739.push(vote_lepenMediane);
    vote_rejetpop_02739.push(vote_rejetMediane);
    name_Commune_02739.push(nameCommune);
    Pourcentage_02739.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02739.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02739.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02739.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02739.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02739 = [];
const vote_lepen_02739 = [];
const vote_rejet_02739 = [];
const vote_macronpop_02739 = [];
const vote_lepenpop_02739 = [];
const vote_rejetpop_02739 = [];
const name_Commune_02739 = [];
const Pourcentage_02739 = [];
const Pourcentage_rejet_02739 = [];
const vote_gene_macron_02739 = [];
const vote_gene_lepen_02739 = [];
const vote_gene_rejet_02739 = [];

async function chartIt02739(){
    await GraphDATA02739();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02739-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02739
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02739
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02739-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02739,vote_lepen_02739,vote_rejet_02739]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02739-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02739,vote_lepenpop_02739,vote_rejetpop_02739]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02739"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02739
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02739
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02739
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02740*/
/*------------------------------------------------------------------ */
async function GraphDATA02740() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[739];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02740.push(vote_macron); 
    vote_lepen_02740.push(vote_lepen);
    vote_rejet_02740.push(vote_rejet);
    vote_macronpop_02740.push(vote_macronMediane);
    vote_lepenpop_02740.push(vote_lepenMediane);
    vote_rejetpop_02740.push(vote_rejetMediane);
    name_Commune_02740.push(nameCommune);
    Pourcentage_02740.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02740.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02740.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02740.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02740.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02740 = [];
const vote_lepen_02740 = [];
const vote_rejet_02740 = [];
const vote_macronpop_02740 = [];
const vote_lepenpop_02740 = [];
const vote_rejetpop_02740 = [];
const name_Commune_02740 = [];
const Pourcentage_02740 = [];
const Pourcentage_rejet_02740 = [];
const vote_gene_macron_02740 = [];
const vote_gene_lepen_02740 = [];
const vote_gene_rejet_02740 = [];

async function chartIt02740(){
    await GraphDATA02740();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02740-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02740
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02740
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02740-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02740,vote_lepen_02740,vote_rejet_02740]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02740-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02740,vote_lepenpop_02740,vote_rejetpop_02740]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02740"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02740
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02740
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02740
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02741*/
/*------------------------------------------------------------------ */
async function GraphDATA02741() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[740];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02741.push(vote_macron); 
    vote_lepen_02741.push(vote_lepen);
    vote_rejet_02741.push(vote_rejet);
    vote_macronpop_02741.push(vote_macronMediane);
    vote_lepenpop_02741.push(vote_lepenMediane);
    vote_rejetpop_02741.push(vote_rejetMediane);
    name_Commune_02741.push(nameCommune);
    Pourcentage_02741.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02741.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02741.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02741.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02741.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02741 = [];
const vote_lepen_02741 = [];
const vote_rejet_02741 = [];
const vote_macronpop_02741 = [];
const vote_lepenpop_02741 = [];
const vote_rejetpop_02741 = [];
const name_Commune_02741 = [];
const Pourcentage_02741 = [];
const Pourcentage_rejet_02741 = [];
const vote_gene_macron_02741 = [];
const vote_gene_lepen_02741 = [];
const vote_gene_rejet_02741 = [];

async function chartIt02741(){
    await GraphDATA02741();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02741-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02741
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02741
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02741-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02741,vote_lepen_02741,vote_rejet_02741]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02741-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02741,vote_lepenpop_02741,vote_rejetpop_02741]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02741"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02741
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02741
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02741
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02742*/
/*------------------------------------------------------------------ */
async function GraphDATA02742() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[741];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02742.push(vote_macron); 
    vote_lepen_02742.push(vote_lepen);
    vote_rejet_02742.push(vote_rejet);
    vote_macronpop_02742.push(vote_macronMediane);
    vote_lepenpop_02742.push(vote_lepenMediane);
    vote_rejetpop_02742.push(vote_rejetMediane);
    name_Commune_02742.push(nameCommune);
    Pourcentage_02742.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02742.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02742.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02742.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02742.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02742 = [];
const vote_lepen_02742 = [];
const vote_rejet_02742 = [];
const vote_macronpop_02742 = [];
const vote_lepenpop_02742 = [];
const vote_rejetpop_02742 = [];
const name_Commune_02742 = [];
const Pourcentage_02742 = [];
const Pourcentage_rejet_02742 = [];
const vote_gene_macron_02742 = [];
const vote_gene_lepen_02742 = [];
const vote_gene_rejet_02742 = [];

async function chartIt02742(){
    await GraphDATA02742();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02742-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02742
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02742
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02742-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02742,vote_lepen_02742,vote_rejet_02742]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02742-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02742,vote_lepenpop_02742,vote_rejetpop_02742]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02742"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02742
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02742
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02742
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02743*/
/*------------------------------------------------------------------ */
async function GraphDATA02743() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[742];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02743.push(vote_macron); 
    vote_lepen_02743.push(vote_lepen);
    vote_rejet_02743.push(vote_rejet);
    vote_macronpop_02743.push(vote_macronMediane);
    vote_lepenpop_02743.push(vote_lepenMediane);
    vote_rejetpop_02743.push(vote_rejetMediane);
    name_Commune_02743.push(nameCommune);
    Pourcentage_02743.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02743.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02743.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02743.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02743.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02743 = [];
const vote_lepen_02743 = [];
const vote_rejet_02743 = [];
const vote_macronpop_02743 = [];
const vote_lepenpop_02743 = [];
const vote_rejetpop_02743 = [];
const name_Commune_02743 = [];
const Pourcentage_02743 = [];
const Pourcentage_rejet_02743 = [];
const vote_gene_macron_02743 = [];
const vote_gene_lepen_02743 = [];
const vote_gene_rejet_02743 = [];

async function chartIt02743(){
    await GraphDATA02743();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02743-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02743
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02743
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02743-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02743,vote_lepen_02743,vote_rejet_02743]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02743-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02743,vote_lepenpop_02743,vote_rejetpop_02743]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02743"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02743
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02743
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02743
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02744*/
/*------------------------------------------------------------------ */
async function GraphDATA02744() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[743];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02744.push(vote_macron); 
    vote_lepen_02744.push(vote_lepen);
    vote_rejet_02744.push(vote_rejet);
    vote_macronpop_02744.push(vote_macronMediane);
    vote_lepenpop_02744.push(vote_lepenMediane);
    vote_rejetpop_02744.push(vote_rejetMediane);
    name_Commune_02744.push(nameCommune);
    Pourcentage_02744.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02744.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02744.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02744.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02744.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02744 = [];
const vote_lepen_02744 = [];
const vote_rejet_02744 = [];
const vote_macronpop_02744 = [];
const vote_lepenpop_02744 = [];
const vote_rejetpop_02744 = [];
const name_Commune_02744 = [];
const Pourcentage_02744 = [];
const Pourcentage_rejet_02744 = [];
const vote_gene_macron_02744 = [];
const vote_gene_lepen_02744 = [];
const vote_gene_rejet_02744 = [];

async function chartIt02744(){
    await GraphDATA02744();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02744-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02744
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02744
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02744-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02744,vote_lepen_02744,vote_rejet_02744]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02744-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02744,vote_lepenpop_02744,vote_rejetpop_02744]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02744"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02744
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02744
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02744
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02745*/
/*------------------------------------------------------------------ */
async function GraphDATA02745() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[744];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02745.push(vote_macron); 
    vote_lepen_02745.push(vote_lepen);
    vote_rejet_02745.push(vote_rejet);
    vote_macronpop_02745.push(vote_macronMediane);
    vote_lepenpop_02745.push(vote_lepenMediane);
    vote_rejetpop_02745.push(vote_rejetMediane);
    name_Commune_02745.push(nameCommune);
    Pourcentage_02745.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02745.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02745.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02745.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02745.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02745 = [];
const vote_lepen_02745 = [];
const vote_rejet_02745 = [];
const vote_macronpop_02745 = [];
const vote_lepenpop_02745 = [];
const vote_rejetpop_02745 = [];
const name_Commune_02745 = [];
const Pourcentage_02745 = [];
const Pourcentage_rejet_02745 = [];
const vote_gene_macron_02745 = [];
const vote_gene_lepen_02745 = [];
const vote_gene_rejet_02745 = [];

async function chartIt02745(){
    await GraphDATA02745();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02745-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02745
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02745
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02745-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02745,vote_lepen_02745,vote_rejet_02745]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02745-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02745,vote_lepenpop_02745,vote_rejetpop_02745]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02745"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02745
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02745
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02745
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02746*/
/*------------------------------------------------------------------ */
async function GraphDATA02746() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[745];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02746.push(vote_macron); 
    vote_lepen_02746.push(vote_lepen);
    vote_rejet_02746.push(vote_rejet);
    vote_macronpop_02746.push(vote_macronMediane);
    vote_lepenpop_02746.push(vote_lepenMediane);
    vote_rejetpop_02746.push(vote_rejetMediane);
    name_Commune_02746.push(nameCommune);
    Pourcentage_02746.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02746.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02746.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02746.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02746.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02746 = [];
const vote_lepen_02746 = [];
const vote_rejet_02746 = [];
const vote_macronpop_02746 = [];
const vote_lepenpop_02746 = [];
const vote_rejetpop_02746 = [];
const name_Commune_02746 = [];
const Pourcentage_02746 = [];
const Pourcentage_rejet_02746 = [];
const vote_gene_macron_02746 = [];
const vote_gene_lepen_02746 = [];
const vote_gene_rejet_02746 = [];

async function chartIt02746(){
    await GraphDATA02746();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02746-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02746
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02746
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02746-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02746,vote_lepen_02746,vote_rejet_02746]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02746-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02746,vote_lepenpop_02746,vote_rejetpop_02746]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02746"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02746
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02746
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02746
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02747*/
/*------------------------------------------------------------------ */
async function GraphDATA02747() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[746];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02747.push(vote_macron); 
    vote_lepen_02747.push(vote_lepen);
    vote_rejet_02747.push(vote_rejet);
    vote_macronpop_02747.push(vote_macronMediane);
    vote_lepenpop_02747.push(vote_lepenMediane);
    vote_rejetpop_02747.push(vote_rejetMediane);
    name_Commune_02747.push(nameCommune);
    Pourcentage_02747.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02747.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02747.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02747.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02747.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02747 = [];
const vote_lepen_02747 = [];
const vote_rejet_02747 = [];
const vote_macronpop_02747 = [];
const vote_lepenpop_02747 = [];
const vote_rejetpop_02747 = [];
const name_Commune_02747 = [];
const Pourcentage_02747 = [];
const Pourcentage_rejet_02747 = [];
const vote_gene_macron_02747 = [];
const vote_gene_lepen_02747 = [];
const vote_gene_rejet_02747 = [];

async function chartIt02747(){
    await GraphDATA02747();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02747-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02747
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02747
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02747-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02747,vote_lepen_02747,vote_rejet_02747]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02747-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02747,vote_lepenpop_02747,vote_rejetpop_02747]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02747"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02747
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02747
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02747
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02748*/
/*------------------------------------------------------------------ */
async function GraphDATA02748() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[747];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02748.push(vote_macron); 
    vote_lepen_02748.push(vote_lepen);
    vote_rejet_02748.push(vote_rejet);
    vote_macronpop_02748.push(vote_macronMediane);
    vote_lepenpop_02748.push(vote_lepenMediane);
    vote_rejetpop_02748.push(vote_rejetMediane);
    name_Commune_02748.push(nameCommune);
    Pourcentage_02748.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02748.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02748.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02748.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02748.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02748 = [];
const vote_lepen_02748 = [];
const vote_rejet_02748 = [];
const vote_macronpop_02748 = [];
const vote_lepenpop_02748 = [];
const vote_rejetpop_02748 = [];
const name_Commune_02748 = [];
const Pourcentage_02748 = [];
const Pourcentage_rejet_02748 = [];
const vote_gene_macron_02748 = [];
const vote_gene_lepen_02748 = [];
const vote_gene_rejet_02748 = [];

async function chartIt02748(){
    await GraphDATA02748();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02748-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02748
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02748
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02748-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02748,vote_lepen_02748,vote_rejet_02748]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02748-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02748,vote_lepenpop_02748,vote_rejetpop_02748]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02748"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02748
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02748
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02748
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02749*/
/*------------------------------------------------------------------ */
async function GraphDATA02749() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[748];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02749.push(vote_macron); 
    vote_lepen_02749.push(vote_lepen);
    vote_rejet_02749.push(vote_rejet);
    vote_macronpop_02749.push(vote_macronMediane);
    vote_lepenpop_02749.push(vote_lepenMediane);
    vote_rejetpop_02749.push(vote_rejetMediane);
    name_Commune_02749.push(nameCommune);
    Pourcentage_02749.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02749.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02749.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02749.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02749.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02749 = [];
const vote_lepen_02749 = [];
const vote_rejet_02749 = [];
const vote_macronpop_02749 = [];
const vote_lepenpop_02749 = [];
const vote_rejetpop_02749 = [];
const name_Commune_02749 = [];
const Pourcentage_02749 = [];
const Pourcentage_rejet_02749 = [];
const vote_gene_macron_02749 = [];
const vote_gene_lepen_02749 = [];
const vote_gene_rejet_02749 = [];

async function chartIt02749(){
    await GraphDATA02749();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02749-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02749
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02749
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02749-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02749,vote_lepen_02749,vote_rejet_02749]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02749-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02749,vote_lepenpop_02749,vote_rejetpop_02749]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02749"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02749
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02749
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02749
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02750*/
/*------------------------------------------------------------------ */
async function GraphDATA02750() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[749];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02750.push(vote_macron); 
    vote_lepen_02750.push(vote_lepen);
    vote_rejet_02750.push(vote_rejet);
    vote_macronpop_02750.push(vote_macronMediane);
    vote_lepenpop_02750.push(vote_lepenMediane);
    vote_rejetpop_02750.push(vote_rejetMediane);
    name_Commune_02750.push(nameCommune);
    Pourcentage_02750.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02750.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02750.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02750.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02750.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02750 = [];
const vote_lepen_02750 = [];
const vote_rejet_02750 = [];
const vote_macronpop_02750 = [];
const vote_lepenpop_02750 = [];
const vote_rejetpop_02750 = [];
const name_Commune_02750 = [];
const Pourcentage_02750 = [];
const Pourcentage_rejet_02750 = [];
const vote_gene_macron_02750 = [];
const vote_gene_lepen_02750 = [];
const vote_gene_rejet_02750 = [];

async function chartIt02750(){
    await GraphDATA02750();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02750-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02750
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02750
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02750-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02750,vote_lepen_02750,vote_rejet_02750]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02750-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02750,vote_lepenpop_02750,vote_rejetpop_02750]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02750"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02750
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02750
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02750
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02751*/
/*------------------------------------------------------------------ */
async function GraphDATA02751() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[750];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02751.push(vote_macron); 
    vote_lepen_02751.push(vote_lepen);
    vote_rejet_02751.push(vote_rejet);
    vote_macronpop_02751.push(vote_macronMediane);
    vote_lepenpop_02751.push(vote_lepenMediane);
    vote_rejetpop_02751.push(vote_rejetMediane);
    name_Commune_02751.push(nameCommune);
    Pourcentage_02751.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02751.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02751.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02751.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02751.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02751 = [];
const vote_lepen_02751 = [];
const vote_rejet_02751 = [];
const vote_macronpop_02751 = [];
const vote_lepenpop_02751 = [];
const vote_rejetpop_02751 = [];
const name_Commune_02751 = [];
const Pourcentage_02751 = [];
const Pourcentage_rejet_02751 = [];
const vote_gene_macron_02751 = [];
const vote_gene_lepen_02751 = [];
const vote_gene_rejet_02751 = [];

async function chartIt02751(){
    await GraphDATA02751();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02751-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02751
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02751
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02751-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02751,vote_lepen_02751,vote_rejet_02751]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02751-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02751,vote_lepenpop_02751,vote_rejetpop_02751]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02751"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02751
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02751
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02751
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02752*/
/*------------------------------------------------------------------ */
async function GraphDATA02752() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[751];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02752.push(vote_macron); 
    vote_lepen_02752.push(vote_lepen);
    vote_rejet_02752.push(vote_rejet);
    vote_macronpop_02752.push(vote_macronMediane);
    vote_lepenpop_02752.push(vote_lepenMediane);
    vote_rejetpop_02752.push(vote_rejetMediane);
    name_Commune_02752.push(nameCommune);
    Pourcentage_02752.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02752.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02752.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02752.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02752.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02752 = [];
const vote_lepen_02752 = [];
const vote_rejet_02752 = [];
const vote_macronpop_02752 = [];
const vote_lepenpop_02752 = [];
const vote_rejetpop_02752 = [];
const name_Commune_02752 = [];
const Pourcentage_02752 = [];
const Pourcentage_rejet_02752 = [];
const vote_gene_macron_02752 = [];
const vote_gene_lepen_02752 = [];
const vote_gene_rejet_02752 = [];

async function chartIt02752(){
    await GraphDATA02752();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02752-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02752
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02752
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02752-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02752,vote_lepen_02752,vote_rejet_02752]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02752-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02752,vote_lepenpop_02752,vote_rejetpop_02752]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02752"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02752
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02752
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02752
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02753*/
/*------------------------------------------------------------------ */
async function GraphDATA02753() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[752];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02753.push(vote_macron); 
    vote_lepen_02753.push(vote_lepen);
    vote_rejet_02753.push(vote_rejet);
    vote_macronpop_02753.push(vote_macronMediane);
    vote_lepenpop_02753.push(vote_lepenMediane);
    vote_rejetpop_02753.push(vote_rejetMediane);
    name_Commune_02753.push(nameCommune);
    Pourcentage_02753.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02753.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02753.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02753.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02753.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02753 = [];
const vote_lepen_02753 = [];
const vote_rejet_02753 = [];
const vote_macronpop_02753 = [];
const vote_lepenpop_02753 = [];
const vote_rejetpop_02753 = [];
const name_Commune_02753 = [];
const Pourcentage_02753 = [];
const Pourcentage_rejet_02753 = [];
const vote_gene_macron_02753 = [];
const vote_gene_lepen_02753 = [];
const vote_gene_rejet_02753 = [];

async function chartIt02753(){
    await GraphDATA02753();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02753-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02753
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02753
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02753-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02753,vote_lepen_02753,vote_rejet_02753]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02753-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02753,vote_lepenpop_02753,vote_rejetpop_02753]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02753"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02753
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02753
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02753
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02754*/
/*------------------------------------------------------------------ */
async function GraphDATA02754() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[753];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02754.push(vote_macron); 
    vote_lepen_02754.push(vote_lepen);
    vote_rejet_02754.push(vote_rejet);
    vote_macronpop_02754.push(vote_macronMediane);
    vote_lepenpop_02754.push(vote_lepenMediane);
    vote_rejetpop_02754.push(vote_rejetMediane);
    name_Commune_02754.push(nameCommune);
    Pourcentage_02754.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02754.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02754.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02754.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02754.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02754 = [];
const vote_lepen_02754 = [];
const vote_rejet_02754 = [];
const vote_macronpop_02754 = [];
const vote_lepenpop_02754 = [];
const vote_rejetpop_02754 = [];
const name_Commune_02754 = [];
const Pourcentage_02754 = [];
const Pourcentage_rejet_02754 = [];
const vote_gene_macron_02754 = [];
const vote_gene_lepen_02754 = [];
const vote_gene_rejet_02754 = [];

async function chartIt02754(){
    await GraphDATA02754();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02754-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02754
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02754
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02754-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02754,vote_lepen_02754,vote_rejet_02754]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02754-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02754,vote_lepenpop_02754,vote_rejetpop_02754]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02754"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02754
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02754
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02754
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02755*/
/*------------------------------------------------------------------ */
async function GraphDATA02755() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[754];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02755.push(vote_macron); 
    vote_lepen_02755.push(vote_lepen);
    vote_rejet_02755.push(vote_rejet);
    vote_macronpop_02755.push(vote_macronMediane);
    vote_lepenpop_02755.push(vote_lepenMediane);
    vote_rejetpop_02755.push(vote_rejetMediane);
    name_Commune_02755.push(nameCommune);
    Pourcentage_02755.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02755.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02755.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02755.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02755.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02755 = [];
const vote_lepen_02755 = [];
const vote_rejet_02755 = [];
const vote_macronpop_02755 = [];
const vote_lepenpop_02755 = [];
const vote_rejetpop_02755 = [];
const name_Commune_02755 = [];
const Pourcentage_02755 = [];
const Pourcentage_rejet_02755 = [];
const vote_gene_macron_02755 = [];
const vote_gene_lepen_02755 = [];
const vote_gene_rejet_02755 = [];

async function chartIt02755(){
    await GraphDATA02755();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02755-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02755
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02755
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02755-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02755,vote_lepen_02755,vote_rejet_02755]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02755-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02755,vote_lepenpop_02755,vote_rejetpop_02755]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02755"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02755
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02755
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02755
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02756*/
/*------------------------------------------------------------------ */
async function GraphDATA02756() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[755];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02756.push(vote_macron); 
    vote_lepen_02756.push(vote_lepen);
    vote_rejet_02756.push(vote_rejet);
    vote_macronpop_02756.push(vote_macronMediane);
    vote_lepenpop_02756.push(vote_lepenMediane);
    vote_rejetpop_02756.push(vote_rejetMediane);
    name_Commune_02756.push(nameCommune);
    Pourcentage_02756.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02756.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02756.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02756.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02756.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02756 = [];
const vote_lepen_02756 = [];
const vote_rejet_02756 = [];
const vote_macronpop_02756 = [];
const vote_lepenpop_02756 = [];
const vote_rejetpop_02756 = [];
const name_Commune_02756 = [];
const Pourcentage_02756 = [];
const Pourcentage_rejet_02756 = [];
const vote_gene_macron_02756 = [];
const vote_gene_lepen_02756 = [];
const vote_gene_rejet_02756 = [];

async function chartIt02756(){
    await GraphDATA02756();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02756-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02756
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02756
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02756-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02756,vote_lepen_02756,vote_rejet_02756]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02756-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02756,vote_lepenpop_02756,vote_rejetpop_02756]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02756"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02756
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02756
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02756
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02757*/
/*------------------------------------------------------------------ */
async function GraphDATA02757() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[756];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02757.push(vote_macron); 
    vote_lepen_02757.push(vote_lepen);
    vote_rejet_02757.push(vote_rejet);
    vote_macronpop_02757.push(vote_macronMediane);
    vote_lepenpop_02757.push(vote_lepenMediane);
    vote_rejetpop_02757.push(vote_rejetMediane);
    name_Commune_02757.push(nameCommune);
    Pourcentage_02757.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02757.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02757.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02757.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02757.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02757 = [];
const vote_lepen_02757 = [];
const vote_rejet_02757 = [];
const vote_macronpop_02757 = [];
const vote_lepenpop_02757 = [];
const vote_rejetpop_02757 = [];
const name_Commune_02757 = [];
const Pourcentage_02757 = [];
const Pourcentage_rejet_02757 = [];
const vote_gene_macron_02757 = [];
const vote_gene_lepen_02757 = [];
const vote_gene_rejet_02757 = [];

async function chartIt02757(){
    await GraphDATA02757();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02757-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02757
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02757
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02757-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02757,vote_lepen_02757,vote_rejet_02757]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02757-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02757,vote_lepenpop_02757,vote_rejetpop_02757]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02757"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02757
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02757
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02757
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02758*/
/*------------------------------------------------------------------ */
async function GraphDATA02758() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[757];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02758.push(vote_macron); 
    vote_lepen_02758.push(vote_lepen);
    vote_rejet_02758.push(vote_rejet);
    vote_macronpop_02758.push(vote_macronMediane);
    vote_lepenpop_02758.push(vote_lepenMediane);
    vote_rejetpop_02758.push(vote_rejetMediane);
    name_Commune_02758.push(nameCommune);
    Pourcentage_02758.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02758.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02758.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02758.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02758.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02758 = [];
const vote_lepen_02758 = [];
const vote_rejet_02758 = [];
const vote_macronpop_02758 = [];
const vote_lepenpop_02758 = [];
const vote_rejetpop_02758 = [];
const name_Commune_02758 = [];
const Pourcentage_02758 = [];
const Pourcentage_rejet_02758 = [];
const vote_gene_macron_02758 = [];
const vote_gene_lepen_02758 = [];
const vote_gene_rejet_02758 = [];

async function chartIt02758(){
    await GraphDATA02758();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02758-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02758
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02758
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02758-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02758,vote_lepen_02758,vote_rejet_02758]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02758-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02758,vote_lepenpop_02758,vote_rejetpop_02758]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02758"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02758
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02758
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02758
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02759*/
/*------------------------------------------------------------------ */
async function GraphDATA02759() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[758];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02759.push(vote_macron); 
    vote_lepen_02759.push(vote_lepen);
    vote_rejet_02759.push(vote_rejet);
    vote_macronpop_02759.push(vote_macronMediane);
    vote_lepenpop_02759.push(vote_lepenMediane);
    vote_rejetpop_02759.push(vote_rejetMediane);
    name_Commune_02759.push(nameCommune);
    Pourcentage_02759.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02759.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02759.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02759.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02759.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02759 = [];
const vote_lepen_02759 = [];
const vote_rejet_02759 = [];
const vote_macronpop_02759 = [];
const vote_lepenpop_02759 = [];
const vote_rejetpop_02759 = [];
const name_Commune_02759 = [];
const Pourcentage_02759 = [];
const Pourcentage_rejet_02759 = [];
const vote_gene_macron_02759 = [];
const vote_gene_lepen_02759 = [];
const vote_gene_rejet_02759 = [];

async function chartIt02759(){
    await GraphDATA02759();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02759-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02759
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02759
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02759-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02759,vote_lepen_02759,vote_rejet_02759]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02759-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02759,vote_lepenpop_02759,vote_rejetpop_02759]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02759"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02759
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02759
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02759
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02760*/
/*------------------------------------------------------------------ */
async function GraphDATA02760() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[759];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02760.push(vote_macron); 
    vote_lepen_02760.push(vote_lepen);
    vote_rejet_02760.push(vote_rejet);
    vote_macronpop_02760.push(vote_macronMediane);
    vote_lepenpop_02760.push(vote_lepenMediane);
    vote_rejetpop_02760.push(vote_rejetMediane);
    name_Commune_02760.push(nameCommune);
    Pourcentage_02760.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02760.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02760.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02760.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02760.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02760 = [];
const vote_lepen_02760 = [];
const vote_rejet_02760 = [];
const vote_macronpop_02760 = [];
const vote_lepenpop_02760 = [];
const vote_rejetpop_02760 = [];
const name_Commune_02760 = [];
const Pourcentage_02760 = [];
const Pourcentage_rejet_02760 = [];
const vote_gene_macron_02760 = [];
const vote_gene_lepen_02760 = [];
const vote_gene_rejet_02760 = [];

async function chartIt02760(){
    await GraphDATA02760();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02760-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02760
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02760
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02760-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02760,vote_lepen_02760,vote_rejet_02760]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02760-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02760,vote_lepenpop_02760,vote_rejetpop_02760]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02760"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02760
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02760
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02760
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02761*/
/*------------------------------------------------------------------ */
async function GraphDATA02761() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[760];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02761.push(vote_macron); 
    vote_lepen_02761.push(vote_lepen);
    vote_rejet_02761.push(vote_rejet);
    vote_macronpop_02761.push(vote_macronMediane);
    vote_lepenpop_02761.push(vote_lepenMediane);
    vote_rejetpop_02761.push(vote_rejetMediane);
    name_Commune_02761.push(nameCommune);
    Pourcentage_02761.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02761.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02761.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02761.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02761.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02761 = [];
const vote_lepen_02761 = [];
const vote_rejet_02761 = [];
const vote_macronpop_02761 = [];
const vote_lepenpop_02761 = [];
const vote_rejetpop_02761 = [];
const name_Commune_02761 = [];
const Pourcentage_02761 = [];
const Pourcentage_rejet_02761 = [];
const vote_gene_macron_02761 = [];
const vote_gene_lepen_02761 = [];
const vote_gene_rejet_02761 = [];

async function chartIt02761(){
    await GraphDATA02761();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02761-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02761
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02761
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02761-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02761,vote_lepen_02761,vote_rejet_02761]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02761-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02761,vote_lepenpop_02761,vote_rejetpop_02761]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02761"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02761
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02761
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02761
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02762*/
/*------------------------------------------------------------------ */
async function GraphDATA02762() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[761];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02762.push(vote_macron); 
    vote_lepen_02762.push(vote_lepen);
    vote_rejet_02762.push(vote_rejet);
    vote_macronpop_02762.push(vote_macronMediane);
    vote_lepenpop_02762.push(vote_lepenMediane);
    vote_rejetpop_02762.push(vote_rejetMediane);
    name_Commune_02762.push(nameCommune);
    Pourcentage_02762.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02762.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02762.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02762.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02762.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02762 = [];
const vote_lepen_02762 = [];
const vote_rejet_02762 = [];
const vote_macronpop_02762 = [];
const vote_lepenpop_02762 = [];
const vote_rejetpop_02762 = [];
const name_Commune_02762 = [];
const Pourcentage_02762 = [];
const Pourcentage_rejet_02762 = [];
const vote_gene_macron_02762 = [];
const vote_gene_lepen_02762 = [];
const vote_gene_rejet_02762 = [];

async function chartIt02762(){
    await GraphDATA02762();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02762-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02762
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02762
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02762-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02762,vote_lepen_02762,vote_rejet_02762]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02762-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02762,vote_lepenpop_02762,vote_rejetpop_02762]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02762"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02762
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02762
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02762
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02763*/
/*------------------------------------------------------------------ */
async function GraphDATA02763() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[762];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02763.push(vote_macron); 
    vote_lepen_02763.push(vote_lepen);
    vote_rejet_02763.push(vote_rejet);
    vote_macronpop_02763.push(vote_macronMediane);
    vote_lepenpop_02763.push(vote_lepenMediane);
    vote_rejetpop_02763.push(vote_rejetMediane);
    name_Commune_02763.push(nameCommune);
    Pourcentage_02763.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02763.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02763.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02763.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02763.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02763 = [];
const vote_lepen_02763 = [];
const vote_rejet_02763 = [];
const vote_macronpop_02763 = [];
const vote_lepenpop_02763 = [];
const vote_rejetpop_02763 = [];
const name_Commune_02763 = [];
const Pourcentage_02763 = [];
const Pourcentage_rejet_02763 = [];
const vote_gene_macron_02763 = [];
const vote_gene_lepen_02763 = [];
const vote_gene_rejet_02763 = [];

async function chartIt02763(){
    await GraphDATA02763();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02763-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02763
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02763
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02763-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02763,vote_lepen_02763,vote_rejet_02763]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02763-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02763,vote_lepenpop_02763,vote_rejetpop_02763]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02763"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02763
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02763
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02763
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02764*/
/*------------------------------------------------------------------ */
async function GraphDATA02764() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[763];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02764.push(vote_macron); 
    vote_lepen_02764.push(vote_lepen);
    vote_rejet_02764.push(vote_rejet);
    vote_macronpop_02764.push(vote_macronMediane);
    vote_lepenpop_02764.push(vote_lepenMediane);
    vote_rejetpop_02764.push(vote_rejetMediane);
    name_Commune_02764.push(nameCommune);
    Pourcentage_02764.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02764.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02764.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02764.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02764.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02764 = [];
const vote_lepen_02764 = [];
const vote_rejet_02764 = [];
const vote_macronpop_02764 = [];
const vote_lepenpop_02764 = [];
const vote_rejetpop_02764 = [];
const name_Commune_02764 = [];
const Pourcentage_02764 = [];
const Pourcentage_rejet_02764 = [];
const vote_gene_macron_02764 = [];
const vote_gene_lepen_02764 = [];
const vote_gene_rejet_02764 = [];

async function chartIt02764(){
    await GraphDATA02764();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02764-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02764
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02764
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02764-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02764,vote_lepen_02764,vote_rejet_02764]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02764-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02764,vote_lepenpop_02764,vote_rejetpop_02764]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02764"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02764
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02764
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02764
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02765*/
/*------------------------------------------------------------------ */
async function GraphDATA02765() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[764];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02765.push(vote_macron); 
    vote_lepen_02765.push(vote_lepen);
    vote_rejet_02765.push(vote_rejet);
    vote_macronpop_02765.push(vote_macronMediane);
    vote_lepenpop_02765.push(vote_lepenMediane);
    vote_rejetpop_02765.push(vote_rejetMediane);
    name_Commune_02765.push(nameCommune);
    Pourcentage_02765.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02765.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02765.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02765.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02765.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02765 = [];
const vote_lepen_02765 = [];
const vote_rejet_02765 = [];
const vote_macronpop_02765 = [];
const vote_lepenpop_02765 = [];
const vote_rejetpop_02765 = [];
const name_Commune_02765 = [];
const Pourcentage_02765 = [];
const Pourcentage_rejet_02765 = [];
const vote_gene_macron_02765 = [];
const vote_gene_lepen_02765 = [];
const vote_gene_rejet_02765 = [];

async function chartIt02765(){
    await GraphDATA02765();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02765-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02765
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02765
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02765-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02765,vote_lepen_02765,vote_rejet_02765]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02765-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02765,vote_lepenpop_02765,vote_rejetpop_02765]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02765"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02765
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02765
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02765
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02766*/
/*------------------------------------------------------------------ */
async function GraphDATA02766() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[765];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02766.push(vote_macron); 
    vote_lepen_02766.push(vote_lepen);
    vote_rejet_02766.push(vote_rejet);
    vote_macronpop_02766.push(vote_macronMediane);
    vote_lepenpop_02766.push(vote_lepenMediane);
    vote_rejetpop_02766.push(vote_rejetMediane);
    name_Commune_02766.push(nameCommune);
    Pourcentage_02766.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02766.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02766.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02766.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02766.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02766 = [];
const vote_lepen_02766 = [];
const vote_rejet_02766 = [];
const vote_macronpop_02766 = [];
const vote_lepenpop_02766 = [];
const vote_rejetpop_02766 = [];
const name_Commune_02766 = [];
const Pourcentage_02766 = [];
const Pourcentage_rejet_02766 = [];
const vote_gene_macron_02766 = [];
const vote_gene_lepen_02766 = [];
const vote_gene_rejet_02766 = [];

async function chartIt02766(){
    await GraphDATA02766();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02766-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02766
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02766
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02766-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02766,vote_lepen_02766,vote_rejet_02766]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02766-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02766,vote_lepenpop_02766,vote_rejetpop_02766]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02766"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02766
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02766
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02766
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02767*/
/*------------------------------------------------------------------ */
async function GraphDATA02767() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[766];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02767.push(vote_macron); 
    vote_lepen_02767.push(vote_lepen);
    vote_rejet_02767.push(vote_rejet);
    vote_macronpop_02767.push(vote_macronMediane);
    vote_lepenpop_02767.push(vote_lepenMediane);
    vote_rejetpop_02767.push(vote_rejetMediane);
    name_Commune_02767.push(nameCommune);
    Pourcentage_02767.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02767.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02767.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02767.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02767.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02767 = [];
const vote_lepen_02767 = [];
const vote_rejet_02767 = [];
const vote_macronpop_02767 = [];
const vote_lepenpop_02767 = [];
const vote_rejetpop_02767 = [];
const name_Commune_02767 = [];
const Pourcentage_02767 = [];
const Pourcentage_rejet_02767 = [];
const vote_gene_macron_02767 = [];
const vote_gene_lepen_02767 = [];
const vote_gene_rejet_02767 = [];

async function chartIt02767(){
    await GraphDATA02767();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02767-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02767
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02767
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02767-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02767,vote_lepen_02767,vote_rejet_02767]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02767-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02767,vote_lepenpop_02767,vote_rejetpop_02767]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02767"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02767
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02767
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02767
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02768*/
/*------------------------------------------------------------------ */
async function GraphDATA02768() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[767];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02768.push(vote_macron); 
    vote_lepen_02768.push(vote_lepen);
    vote_rejet_02768.push(vote_rejet);
    vote_macronpop_02768.push(vote_macronMediane);
    vote_lepenpop_02768.push(vote_lepenMediane);
    vote_rejetpop_02768.push(vote_rejetMediane);
    name_Commune_02768.push(nameCommune);
    Pourcentage_02768.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02768.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02768.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02768.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02768.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02768 = [];
const vote_lepen_02768 = [];
const vote_rejet_02768 = [];
const vote_macronpop_02768 = [];
const vote_lepenpop_02768 = [];
const vote_rejetpop_02768 = [];
const name_Commune_02768 = [];
const Pourcentage_02768 = [];
const Pourcentage_rejet_02768 = [];
const vote_gene_macron_02768 = [];
const vote_gene_lepen_02768 = [];
const vote_gene_rejet_02768 = [];

async function chartIt02768(){
    await GraphDATA02768();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02768-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02768
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02768
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02768-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02768,vote_lepen_02768,vote_rejet_02768]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02768-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02768,vote_lepenpop_02768,vote_rejetpop_02768]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02768"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02768
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02768
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02768
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02769*/
/*------------------------------------------------------------------ */
async function GraphDATA02769() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[768];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02769.push(vote_macron); 
    vote_lepen_02769.push(vote_lepen);
    vote_rejet_02769.push(vote_rejet);
    vote_macronpop_02769.push(vote_macronMediane);
    vote_lepenpop_02769.push(vote_lepenMediane);
    vote_rejetpop_02769.push(vote_rejetMediane);
    name_Commune_02769.push(nameCommune);
    Pourcentage_02769.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02769.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02769.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02769.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02769.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02769 = [];
const vote_lepen_02769 = [];
const vote_rejet_02769 = [];
const vote_macronpop_02769 = [];
const vote_lepenpop_02769 = [];
const vote_rejetpop_02769 = [];
const name_Commune_02769 = [];
const Pourcentage_02769 = [];
const Pourcentage_rejet_02769 = [];
const vote_gene_macron_02769 = [];
const vote_gene_lepen_02769 = [];
const vote_gene_rejet_02769 = [];

async function chartIt02769(){
    await GraphDATA02769();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02769-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02769
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02769
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02769-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02769,vote_lepen_02769,vote_rejet_02769]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02769-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02769,vote_lepenpop_02769,vote_rejetpop_02769]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02769"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02769
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02769
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02769
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02770*/
/*------------------------------------------------------------------ */
async function GraphDATA02770() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[769];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02770.push(vote_macron); 
    vote_lepen_02770.push(vote_lepen);
    vote_rejet_02770.push(vote_rejet);
    vote_macronpop_02770.push(vote_macronMediane);
    vote_lepenpop_02770.push(vote_lepenMediane);
    vote_rejetpop_02770.push(vote_rejetMediane);
    name_Commune_02770.push(nameCommune);
    Pourcentage_02770.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02770.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02770.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02770.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02770.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02770 = [];
const vote_lepen_02770 = [];
const vote_rejet_02770 = [];
const vote_macronpop_02770 = [];
const vote_lepenpop_02770 = [];
const vote_rejetpop_02770 = [];
const name_Commune_02770 = [];
const Pourcentage_02770 = [];
const Pourcentage_rejet_02770 = [];
const vote_gene_macron_02770 = [];
const vote_gene_lepen_02770 = [];
const vote_gene_rejet_02770 = [];

async function chartIt02770(){
    await GraphDATA02770();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02770-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02770
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02770
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02770-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02770,vote_lepen_02770,vote_rejet_02770]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02770-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02770,vote_lepenpop_02770,vote_rejetpop_02770]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02770"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02770
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02770
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02770
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02771*/
/*------------------------------------------------------------------ */
async function GraphDATA02771() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[770];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02771.push(vote_macron); 
    vote_lepen_02771.push(vote_lepen);
    vote_rejet_02771.push(vote_rejet);
    vote_macronpop_02771.push(vote_macronMediane);
    vote_lepenpop_02771.push(vote_lepenMediane);
    vote_rejetpop_02771.push(vote_rejetMediane);
    name_Commune_02771.push(nameCommune);
    Pourcentage_02771.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02771.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02771.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02771.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02771.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02771 = [];
const vote_lepen_02771 = [];
const vote_rejet_02771 = [];
const vote_macronpop_02771 = [];
const vote_lepenpop_02771 = [];
const vote_rejetpop_02771 = [];
const name_Commune_02771 = [];
const Pourcentage_02771 = [];
const Pourcentage_rejet_02771 = [];
const vote_gene_macron_02771 = [];
const vote_gene_lepen_02771 = [];
const vote_gene_rejet_02771 = [];

async function chartIt02771(){
    await GraphDATA02771();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02771-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02771
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02771
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02771-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02771,vote_lepen_02771,vote_rejet_02771]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02771-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02771,vote_lepenpop_02771,vote_rejetpop_02771]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02771"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02771
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02771
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02771
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02772*/
/*------------------------------------------------------------------ */
async function GraphDATA02772() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[771];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02772.push(vote_macron); 
    vote_lepen_02772.push(vote_lepen);
    vote_rejet_02772.push(vote_rejet);
    vote_macronpop_02772.push(vote_macronMediane);
    vote_lepenpop_02772.push(vote_lepenMediane);
    vote_rejetpop_02772.push(vote_rejetMediane);
    name_Commune_02772.push(nameCommune);
    Pourcentage_02772.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02772.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02772.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02772.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02772.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02772 = [];
const vote_lepen_02772 = [];
const vote_rejet_02772 = [];
const vote_macronpop_02772 = [];
const vote_lepenpop_02772 = [];
const vote_rejetpop_02772 = [];
const name_Commune_02772 = [];
const Pourcentage_02772 = [];
const Pourcentage_rejet_02772 = [];
const vote_gene_macron_02772 = [];
const vote_gene_lepen_02772 = [];
const vote_gene_rejet_02772 = [];

async function chartIt02772(){
    await GraphDATA02772();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02772-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02772
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02772
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02772-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02772,vote_lepen_02772,vote_rejet_02772]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02772-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02772,vote_lepenpop_02772,vote_rejetpop_02772]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02772"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02772
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02772
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02772
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02773*/
/*------------------------------------------------------------------ */
async function GraphDATA02773() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[772];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02773.push(vote_macron); 
    vote_lepen_02773.push(vote_lepen);
    vote_rejet_02773.push(vote_rejet);
    vote_macronpop_02773.push(vote_macronMediane);
    vote_lepenpop_02773.push(vote_lepenMediane);
    vote_rejetpop_02773.push(vote_rejetMediane);
    name_Commune_02773.push(nameCommune);
    Pourcentage_02773.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02773.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02773.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02773.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02773.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02773 = [];
const vote_lepen_02773 = [];
const vote_rejet_02773 = [];
const vote_macronpop_02773 = [];
const vote_lepenpop_02773 = [];
const vote_rejetpop_02773 = [];
const name_Commune_02773 = [];
const Pourcentage_02773 = [];
const Pourcentage_rejet_02773 = [];
const vote_gene_macron_02773 = [];
const vote_gene_lepen_02773 = [];
const vote_gene_rejet_02773 = [];

async function chartIt02773(){
    await GraphDATA02773();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02773-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02773
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02773
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02773-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02773,vote_lepen_02773,vote_rejet_02773]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02773-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02773,vote_lepenpop_02773,vote_rejetpop_02773]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02773"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02773
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02773
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02773
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02774*/
/*------------------------------------------------------------------ */
async function GraphDATA02774() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[773];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02774.push(vote_macron); 
    vote_lepen_02774.push(vote_lepen);
    vote_rejet_02774.push(vote_rejet);
    vote_macronpop_02774.push(vote_macronMediane);
    vote_lepenpop_02774.push(vote_lepenMediane);
    vote_rejetpop_02774.push(vote_rejetMediane);
    name_Commune_02774.push(nameCommune);
    Pourcentage_02774.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02774.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02774.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02774.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02774.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02774 = [];
const vote_lepen_02774 = [];
const vote_rejet_02774 = [];
const vote_macronpop_02774 = [];
const vote_lepenpop_02774 = [];
const vote_rejetpop_02774 = [];
const name_Commune_02774 = [];
const Pourcentage_02774 = [];
const Pourcentage_rejet_02774 = [];
const vote_gene_macron_02774 = [];
const vote_gene_lepen_02774 = [];
const vote_gene_rejet_02774 = [];

async function chartIt02774(){
    await GraphDATA02774();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02774-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02774
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02774
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02774-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02774,vote_lepen_02774,vote_rejet_02774]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02774-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02774,vote_lepenpop_02774,vote_rejetpop_02774]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02774"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02774
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02774
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02774
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02775*/
/*------------------------------------------------------------------ */
async function GraphDATA02775() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[774];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02775.push(vote_macron); 
    vote_lepen_02775.push(vote_lepen);
    vote_rejet_02775.push(vote_rejet);
    vote_macronpop_02775.push(vote_macronMediane);
    vote_lepenpop_02775.push(vote_lepenMediane);
    vote_rejetpop_02775.push(vote_rejetMediane);
    name_Commune_02775.push(nameCommune);
    Pourcentage_02775.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02775.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02775.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02775.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02775.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02775 = [];
const vote_lepen_02775 = [];
const vote_rejet_02775 = [];
const vote_macronpop_02775 = [];
const vote_lepenpop_02775 = [];
const vote_rejetpop_02775 = [];
const name_Commune_02775 = [];
const Pourcentage_02775 = [];
const Pourcentage_rejet_02775 = [];
const vote_gene_macron_02775 = [];
const vote_gene_lepen_02775 = [];
const vote_gene_rejet_02775 = [];

async function chartIt02775(){
    await GraphDATA02775();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02775-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02775
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02775
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02775-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02775,vote_lepen_02775,vote_rejet_02775]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02775-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02775,vote_lepenpop_02775,vote_rejetpop_02775]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02775"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02775
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02775
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02775
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02776*/
/*------------------------------------------------------------------ */
async function GraphDATA02776() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[775];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02776.push(vote_macron); 
    vote_lepen_02776.push(vote_lepen);
    vote_rejet_02776.push(vote_rejet);
    vote_macronpop_02776.push(vote_macronMediane);
    vote_lepenpop_02776.push(vote_lepenMediane);
    vote_rejetpop_02776.push(vote_rejetMediane);
    name_Commune_02776.push(nameCommune);
    Pourcentage_02776.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02776.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02776.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02776.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02776.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02776 = [];
const vote_lepen_02776 = [];
const vote_rejet_02776 = [];
const vote_macronpop_02776 = [];
const vote_lepenpop_02776 = [];
const vote_rejetpop_02776 = [];
const name_Commune_02776 = [];
const Pourcentage_02776 = [];
const Pourcentage_rejet_02776 = [];
const vote_gene_macron_02776 = [];
const vote_gene_lepen_02776 = [];
const vote_gene_rejet_02776 = [];

async function chartIt02776(){
    await GraphDATA02776();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02776-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02776
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02776
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02776-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02776,vote_lepen_02776,vote_rejet_02776]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02776-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02776,vote_lepenpop_02776,vote_rejetpop_02776]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02776"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02776
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02776
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02776
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02777*/
/*------------------------------------------------------------------ */
async function GraphDATA02777() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[776];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02777.push(vote_macron); 
    vote_lepen_02777.push(vote_lepen);
    vote_rejet_02777.push(vote_rejet);
    vote_macronpop_02777.push(vote_macronMediane);
    vote_lepenpop_02777.push(vote_lepenMediane);
    vote_rejetpop_02777.push(vote_rejetMediane);
    name_Commune_02777.push(nameCommune);
    Pourcentage_02777.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02777.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02777.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02777.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02777.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02777 = [];
const vote_lepen_02777 = [];
const vote_rejet_02777 = [];
const vote_macronpop_02777 = [];
const vote_lepenpop_02777 = [];
const vote_rejetpop_02777 = [];
const name_Commune_02777 = [];
const Pourcentage_02777 = [];
const Pourcentage_rejet_02777 = [];
const vote_gene_macron_02777 = [];
const vote_gene_lepen_02777 = [];
const vote_gene_rejet_02777 = [];

async function chartIt02777(){
    await GraphDATA02777();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02777-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02777
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02777
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02777-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02777,vote_lepen_02777,vote_rejet_02777]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02777-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02777,vote_lepenpop_02777,vote_rejetpop_02777]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02777"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02777
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02777
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02777
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02778*/
/*------------------------------------------------------------------ */
async function GraphDATA02778() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[777];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02778.push(vote_macron); 
    vote_lepen_02778.push(vote_lepen);
    vote_rejet_02778.push(vote_rejet);
    vote_macronpop_02778.push(vote_macronMediane);
    vote_lepenpop_02778.push(vote_lepenMediane);
    vote_rejetpop_02778.push(vote_rejetMediane);
    name_Commune_02778.push(nameCommune);
    Pourcentage_02778.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02778.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02778.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02778.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02778.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02778 = [];
const vote_lepen_02778 = [];
const vote_rejet_02778 = [];
const vote_macronpop_02778 = [];
const vote_lepenpop_02778 = [];
const vote_rejetpop_02778 = [];
const name_Commune_02778 = [];
const Pourcentage_02778 = [];
const Pourcentage_rejet_02778 = [];
const vote_gene_macron_02778 = [];
const vote_gene_lepen_02778 = [];
const vote_gene_rejet_02778 = [];

async function chartIt02778(){
    await GraphDATA02778();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02778-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02778
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02778
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02778-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02778,vote_lepen_02778,vote_rejet_02778]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02778-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02778,vote_lepenpop_02778,vote_rejetpop_02778]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02778"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02778
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02778
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02778
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02779*/
/*------------------------------------------------------------------ */
async function GraphDATA02779() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[778];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02779.push(vote_macron); 
    vote_lepen_02779.push(vote_lepen);
    vote_rejet_02779.push(vote_rejet);
    vote_macronpop_02779.push(vote_macronMediane);
    vote_lepenpop_02779.push(vote_lepenMediane);
    vote_rejetpop_02779.push(vote_rejetMediane);
    name_Commune_02779.push(nameCommune);
    Pourcentage_02779.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02779.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02779.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02779.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02779.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02779 = [];
const vote_lepen_02779 = [];
const vote_rejet_02779 = [];
const vote_macronpop_02779 = [];
const vote_lepenpop_02779 = [];
const vote_rejetpop_02779 = [];
const name_Commune_02779 = [];
const Pourcentage_02779 = [];
const Pourcentage_rejet_02779 = [];
const vote_gene_macron_02779 = [];
const vote_gene_lepen_02779 = [];
const vote_gene_rejet_02779 = [];

async function chartIt02779(){
    await GraphDATA02779();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02779-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02779
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02779
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02779-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02779,vote_lepen_02779,vote_rejet_02779]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02779-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02779,vote_lepenpop_02779,vote_rejetpop_02779]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02779"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02779
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02779
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02779
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02780*/
/*------------------------------------------------------------------ */
async function GraphDATA02780() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[779];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02780.push(vote_macron); 
    vote_lepen_02780.push(vote_lepen);
    vote_rejet_02780.push(vote_rejet);
    vote_macronpop_02780.push(vote_macronMediane);
    vote_lepenpop_02780.push(vote_lepenMediane);
    vote_rejetpop_02780.push(vote_rejetMediane);
    name_Commune_02780.push(nameCommune);
    Pourcentage_02780.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02780.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02780.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02780.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02780.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02780 = [];
const vote_lepen_02780 = [];
const vote_rejet_02780 = [];
const vote_macronpop_02780 = [];
const vote_lepenpop_02780 = [];
const vote_rejetpop_02780 = [];
const name_Commune_02780 = [];
const Pourcentage_02780 = [];
const Pourcentage_rejet_02780 = [];
const vote_gene_macron_02780 = [];
const vote_gene_lepen_02780 = [];
const vote_gene_rejet_02780 = [];

async function chartIt02780(){
    await GraphDATA02780();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02780-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02780
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02780
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02780-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02780,vote_lepen_02780,vote_rejet_02780]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02780-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02780,vote_lepenpop_02780,vote_rejetpop_02780]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02780"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02780
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02780
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02780
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02781*/
/*------------------------------------------------------------------ */
async function GraphDATA02781() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[780];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02781.push(vote_macron); 
    vote_lepen_02781.push(vote_lepen);
    vote_rejet_02781.push(vote_rejet);
    vote_macronpop_02781.push(vote_macronMediane);
    vote_lepenpop_02781.push(vote_lepenMediane);
    vote_rejetpop_02781.push(vote_rejetMediane);
    name_Commune_02781.push(nameCommune);
    Pourcentage_02781.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02781.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02781.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02781.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02781.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02781 = [];
const vote_lepen_02781 = [];
const vote_rejet_02781 = [];
const vote_macronpop_02781 = [];
const vote_lepenpop_02781 = [];
const vote_rejetpop_02781 = [];
const name_Commune_02781 = [];
const Pourcentage_02781 = [];
const Pourcentage_rejet_02781 = [];
const vote_gene_macron_02781 = [];
const vote_gene_lepen_02781 = [];
const vote_gene_rejet_02781 = [];

async function chartIt02781(){
    await GraphDATA02781();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02781-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02781
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02781
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02781-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02781,vote_lepen_02781,vote_rejet_02781]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02781-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02781,vote_lepenpop_02781,vote_rejetpop_02781]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02781"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02781
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02781
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02781
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02782*/
/*------------------------------------------------------------------ */
async function GraphDATA02782() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[781];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02782.push(vote_macron); 
    vote_lepen_02782.push(vote_lepen);
    vote_rejet_02782.push(vote_rejet);
    vote_macronpop_02782.push(vote_macronMediane);
    vote_lepenpop_02782.push(vote_lepenMediane);
    vote_rejetpop_02782.push(vote_rejetMediane);
    name_Commune_02782.push(nameCommune);
    Pourcentage_02782.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02782.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02782.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02782.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02782.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02782 = [];
const vote_lepen_02782 = [];
const vote_rejet_02782 = [];
const vote_macronpop_02782 = [];
const vote_lepenpop_02782 = [];
const vote_rejetpop_02782 = [];
const name_Commune_02782 = [];
const Pourcentage_02782 = [];
const Pourcentage_rejet_02782 = [];
const vote_gene_macron_02782 = [];
const vote_gene_lepen_02782 = [];
const vote_gene_rejet_02782 = [];

async function chartIt02782(){
    await GraphDATA02782();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02782-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02782
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02782
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02782-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02782,vote_lepen_02782,vote_rejet_02782]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02782-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02782,vote_lepenpop_02782,vote_rejetpop_02782]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02782"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02782
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02782
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02782
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02783*/
/*------------------------------------------------------------------ */
async function GraphDATA02783() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[782];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02783.push(vote_macron); 
    vote_lepen_02783.push(vote_lepen);
    vote_rejet_02783.push(vote_rejet);
    vote_macronpop_02783.push(vote_macronMediane);
    vote_lepenpop_02783.push(vote_lepenMediane);
    vote_rejetpop_02783.push(vote_rejetMediane);
    name_Commune_02783.push(nameCommune);
    Pourcentage_02783.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02783.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02783.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02783.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02783.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02783 = [];
const vote_lepen_02783 = [];
const vote_rejet_02783 = [];
const vote_macronpop_02783 = [];
const vote_lepenpop_02783 = [];
const vote_rejetpop_02783 = [];
const name_Commune_02783 = [];
const Pourcentage_02783 = [];
const Pourcentage_rejet_02783 = [];
const vote_gene_macron_02783 = [];
const vote_gene_lepen_02783 = [];
const vote_gene_rejet_02783 = [];

async function chartIt02783(){
    await GraphDATA02783();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02783-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02783
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02783
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02783-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02783,vote_lepen_02783,vote_rejet_02783]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02783-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02783,vote_lepenpop_02783,vote_rejetpop_02783]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02783"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02783
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02783
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02783
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02784*/
/*------------------------------------------------------------------ */
async function GraphDATA02784() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[783];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02784.push(vote_macron); 
    vote_lepen_02784.push(vote_lepen);
    vote_rejet_02784.push(vote_rejet);
    vote_macronpop_02784.push(vote_macronMediane);
    vote_lepenpop_02784.push(vote_lepenMediane);
    vote_rejetpop_02784.push(vote_rejetMediane);
    name_Commune_02784.push(nameCommune);
    Pourcentage_02784.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02784.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02784.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02784.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02784.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02784 = [];
const vote_lepen_02784 = [];
const vote_rejet_02784 = [];
const vote_macronpop_02784 = [];
const vote_lepenpop_02784 = [];
const vote_rejetpop_02784 = [];
const name_Commune_02784 = [];
const Pourcentage_02784 = [];
const Pourcentage_rejet_02784 = [];
const vote_gene_macron_02784 = [];
const vote_gene_lepen_02784 = [];
const vote_gene_rejet_02784 = [];

async function chartIt02784(){
    await GraphDATA02784();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02784-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02784
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02784
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02784-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02784,vote_lepen_02784,vote_rejet_02784]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02784-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02784,vote_lepenpop_02784,vote_rejetpop_02784]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02784"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02784
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02784
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02784
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02785*/
/*------------------------------------------------------------------ */
async function GraphDATA02785() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[784];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02785.push(vote_macron); 
    vote_lepen_02785.push(vote_lepen);
    vote_rejet_02785.push(vote_rejet);
    vote_macronpop_02785.push(vote_macronMediane);
    vote_lepenpop_02785.push(vote_lepenMediane);
    vote_rejetpop_02785.push(vote_rejetMediane);
    name_Commune_02785.push(nameCommune);
    Pourcentage_02785.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02785.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02785.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02785.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02785.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02785 = [];
const vote_lepen_02785 = [];
const vote_rejet_02785 = [];
const vote_macronpop_02785 = [];
const vote_lepenpop_02785 = [];
const vote_rejetpop_02785 = [];
const name_Commune_02785 = [];
const Pourcentage_02785 = [];
const Pourcentage_rejet_02785 = [];
const vote_gene_macron_02785 = [];
const vote_gene_lepen_02785 = [];
const vote_gene_rejet_02785 = [];

async function chartIt02785(){
    await GraphDATA02785();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02785-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02785
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02785
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02785-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02785,vote_lepen_02785,vote_rejet_02785]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02785-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02785,vote_lepenpop_02785,vote_rejetpop_02785]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02785"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02785
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02785
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02785
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02786*/
/*------------------------------------------------------------------ */
async function GraphDATA02786() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[785];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02786.push(vote_macron); 
    vote_lepen_02786.push(vote_lepen);
    vote_rejet_02786.push(vote_rejet);
    vote_macronpop_02786.push(vote_macronMediane);
    vote_lepenpop_02786.push(vote_lepenMediane);
    vote_rejetpop_02786.push(vote_rejetMediane);
    name_Commune_02786.push(nameCommune);
    Pourcentage_02786.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02786.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02786.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02786.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02786.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02786 = [];
const vote_lepen_02786 = [];
const vote_rejet_02786 = [];
const vote_macronpop_02786 = [];
const vote_lepenpop_02786 = [];
const vote_rejetpop_02786 = [];
const name_Commune_02786 = [];
const Pourcentage_02786 = [];
const Pourcentage_rejet_02786 = [];
const vote_gene_macron_02786 = [];
const vote_gene_lepen_02786 = [];
const vote_gene_rejet_02786 = [];

async function chartIt02786(){
    await GraphDATA02786();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02786-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02786
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02786
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02786-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02786,vote_lepen_02786,vote_rejet_02786]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02786-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02786,vote_lepenpop_02786,vote_rejetpop_02786]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02786"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02786
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02786
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02786
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02787*/
/*------------------------------------------------------------------ */
async function GraphDATA02787() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[786];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02787.push(vote_macron); 
    vote_lepen_02787.push(vote_lepen);
    vote_rejet_02787.push(vote_rejet);
    vote_macronpop_02787.push(vote_macronMediane);
    vote_lepenpop_02787.push(vote_lepenMediane);
    vote_rejetpop_02787.push(vote_rejetMediane);
    name_Commune_02787.push(nameCommune);
    Pourcentage_02787.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02787.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02787.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02787.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02787.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02787 = [];
const vote_lepen_02787 = [];
const vote_rejet_02787 = [];
const vote_macronpop_02787 = [];
const vote_lepenpop_02787 = [];
const vote_rejetpop_02787 = [];
const name_Commune_02787 = [];
const Pourcentage_02787 = [];
const Pourcentage_rejet_02787 = [];
const vote_gene_macron_02787 = [];
const vote_gene_lepen_02787 = [];
const vote_gene_rejet_02787 = [];

async function chartIt02787(){
    await GraphDATA02787();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02787-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02787
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02787
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02787-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02787,vote_lepen_02787,vote_rejet_02787]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02787-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02787,vote_lepenpop_02787,vote_rejetpop_02787]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02787"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02787
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02787
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02787
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02788*/
/*------------------------------------------------------------------ */
async function GraphDATA02788() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[787];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02788.push(vote_macron); 
    vote_lepen_02788.push(vote_lepen);
    vote_rejet_02788.push(vote_rejet);
    vote_macronpop_02788.push(vote_macronMediane);
    vote_lepenpop_02788.push(vote_lepenMediane);
    vote_rejetpop_02788.push(vote_rejetMediane);
    name_Commune_02788.push(nameCommune);
    Pourcentage_02788.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02788.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02788.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02788.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02788.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02788 = [];
const vote_lepen_02788 = [];
const vote_rejet_02788 = [];
const vote_macronpop_02788 = [];
const vote_lepenpop_02788 = [];
const vote_rejetpop_02788 = [];
const name_Commune_02788 = [];
const Pourcentage_02788 = [];
const Pourcentage_rejet_02788 = [];
const vote_gene_macron_02788 = [];
const vote_gene_lepen_02788 = [];
const vote_gene_rejet_02788 = [];

async function chartIt02788(){
    await GraphDATA02788();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02788-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02788
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02788
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02788-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02788,vote_lepen_02788,vote_rejet_02788]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02788-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02788,vote_lepenpop_02788,vote_rejetpop_02788]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02788"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02788
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02788
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02788
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02789*/
/*------------------------------------------------------------------ */
async function GraphDATA02789() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[788];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02789.push(vote_macron); 
    vote_lepen_02789.push(vote_lepen);
    vote_rejet_02789.push(vote_rejet);
    vote_macronpop_02789.push(vote_macronMediane);
    vote_lepenpop_02789.push(vote_lepenMediane);
    vote_rejetpop_02789.push(vote_rejetMediane);
    name_Commune_02789.push(nameCommune);
    Pourcentage_02789.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02789.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02789.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02789.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02789.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02789 = [];
const vote_lepen_02789 = [];
const vote_rejet_02789 = [];
const vote_macronpop_02789 = [];
const vote_lepenpop_02789 = [];
const vote_rejetpop_02789 = [];
const name_Commune_02789 = [];
const Pourcentage_02789 = [];
const Pourcentage_rejet_02789 = [];
const vote_gene_macron_02789 = [];
const vote_gene_lepen_02789 = [];
const vote_gene_rejet_02789 = [];

async function chartIt02789(){
    await GraphDATA02789();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02789-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02789
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02789
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02789-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02789,vote_lepen_02789,vote_rejet_02789]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02789-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02789,vote_lepenpop_02789,vote_rejetpop_02789]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02789"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02789
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02789
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02789
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02790*/
/*------------------------------------------------------------------ */
async function GraphDATA02790() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[789];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02790.push(vote_macron); 
    vote_lepen_02790.push(vote_lepen);
    vote_rejet_02790.push(vote_rejet);
    vote_macronpop_02790.push(vote_macronMediane);
    vote_lepenpop_02790.push(vote_lepenMediane);
    vote_rejetpop_02790.push(vote_rejetMediane);
    name_Commune_02790.push(nameCommune);
    Pourcentage_02790.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02790.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02790.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02790.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02790.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02790 = [];
const vote_lepen_02790 = [];
const vote_rejet_02790 = [];
const vote_macronpop_02790 = [];
const vote_lepenpop_02790 = [];
const vote_rejetpop_02790 = [];
const name_Commune_02790 = [];
const Pourcentage_02790 = [];
const Pourcentage_rejet_02790 = [];
const vote_gene_macron_02790 = [];
const vote_gene_lepen_02790 = [];
const vote_gene_rejet_02790 = [];

async function chartIt02790(){
    await GraphDATA02790();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02790-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02790
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02790
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02790-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02790,vote_lepen_02790,vote_rejet_02790]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02790-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02790,vote_lepenpop_02790,vote_rejetpop_02790]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02790"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02790
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02790
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02790
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02791*/
/*------------------------------------------------------------------ */
async function GraphDATA02791() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[790];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02791.push(vote_macron); 
    vote_lepen_02791.push(vote_lepen);
    vote_rejet_02791.push(vote_rejet);
    vote_macronpop_02791.push(vote_macronMediane);
    vote_lepenpop_02791.push(vote_lepenMediane);
    vote_rejetpop_02791.push(vote_rejetMediane);
    name_Commune_02791.push(nameCommune);
    Pourcentage_02791.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02791.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02791.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02791.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02791.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02791 = [];
const vote_lepen_02791 = [];
const vote_rejet_02791 = [];
const vote_macronpop_02791 = [];
const vote_lepenpop_02791 = [];
const vote_rejetpop_02791 = [];
const name_Commune_02791 = [];
const Pourcentage_02791 = [];
const Pourcentage_rejet_02791 = [];
const vote_gene_macron_02791 = [];
const vote_gene_lepen_02791 = [];
const vote_gene_rejet_02791 = [];

async function chartIt02791(){
    await GraphDATA02791();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02791-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02791
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02791
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02791-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02791,vote_lepen_02791,vote_rejet_02791]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02791-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02791,vote_lepenpop_02791,vote_rejetpop_02791]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02791"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02791
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02791
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02791
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02792*/
/*------------------------------------------------------------------ */
async function GraphDATA02792() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[791];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02792.push(vote_macron); 
    vote_lepen_02792.push(vote_lepen);
    vote_rejet_02792.push(vote_rejet);
    vote_macronpop_02792.push(vote_macronMediane);
    vote_lepenpop_02792.push(vote_lepenMediane);
    vote_rejetpop_02792.push(vote_rejetMediane);
    name_Commune_02792.push(nameCommune);
    Pourcentage_02792.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02792.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02792.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02792.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02792.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02792 = [];
const vote_lepen_02792 = [];
const vote_rejet_02792 = [];
const vote_macronpop_02792 = [];
const vote_lepenpop_02792 = [];
const vote_rejetpop_02792 = [];
const name_Commune_02792 = [];
const Pourcentage_02792 = [];
const Pourcentage_rejet_02792 = [];
const vote_gene_macron_02792 = [];
const vote_gene_lepen_02792 = [];
const vote_gene_rejet_02792 = [];

async function chartIt02792(){
    await GraphDATA02792();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02792-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02792
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02792
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02792-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02792,vote_lepen_02792,vote_rejet_02792]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02792-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02792,vote_lepenpop_02792,vote_rejetpop_02792]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02792"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02792
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02792
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02792
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02793*/
/*------------------------------------------------------------------ */
async function GraphDATA02793() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[792];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02793.push(vote_macron); 
    vote_lepen_02793.push(vote_lepen);
    vote_rejet_02793.push(vote_rejet);
    vote_macronpop_02793.push(vote_macronMediane);
    vote_lepenpop_02793.push(vote_lepenMediane);
    vote_rejetpop_02793.push(vote_rejetMediane);
    name_Commune_02793.push(nameCommune);
    Pourcentage_02793.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02793.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02793.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02793.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02793.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02793 = [];
const vote_lepen_02793 = [];
const vote_rejet_02793 = [];
const vote_macronpop_02793 = [];
const vote_lepenpop_02793 = [];
const vote_rejetpop_02793 = [];
const name_Commune_02793 = [];
const Pourcentage_02793 = [];
const Pourcentage_rejet_02793 = [];
const vote_gene_macron_02793 = [];
const vote_gene_lepen_02793 = [];
const vote_gene_rejet_02793 = [];

async function chartIt02793(){
    await GraphDATA02793();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02793-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02793
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02793
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02793-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02793,vote_lepen_02793,vote_rejet_02793]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02793-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02793,vote_lepenpop_02793,vote_rejetpop_02793]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02793"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02793
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02793
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02793
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02794*/
/*------------------------------------------------------------------ */
async function GraphDATA02794() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[793];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02794.push(vote_macron); 
    vote_lepen_02794.push(vote_lepen);
    vote_rejet_02794.push(vote_rejet);
    vote_macronpop_02794.push(vote_macronMediane);
    vote_lepenpop_02794.push(vote_lepenMediane);
    vote_rejetpop_02794.push(vote_rejetMediane);
    name_Commune_02794.push(nameCommune);
    Pourcentage_02794.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02794.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02794.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02794.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02794.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02794 = [];
const vote_lepen_02794 = [];
const vote_rejet_02794 = [];
const vote_macronpop_02794 = [];
const vote_lepenpop_02794 = [];
const vote_rejetpop_02794 = [];
const name_Commune_02794 = [];
const Pourcentage_02794 = [];
const Pourcentage_rejet_02794 = [];
const vote_gene_macron_02794 = [];
const vote_gene_lepen_02794 = [];
const vote_gene_rejet_02794 = [];

async function chartIt02794(){
    await GraphDATA02794();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02794-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02794
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02794
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02794-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02794,vote_lepen_02794,vote_rejet_02794]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02794-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02794,vote_lepenpop_02794,vote_rejetpop_02794]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02794"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02794
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02794
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02794
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02795*/
/*------------------------------------------------------------------ */
async function GraphDATA02795() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[794];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02795.push(vote_macron); 
    vote_lepen_02795.push(vote_lepen);
    vote_rejet_02795.push(vote_rejet);
    vote_macronpop_02795.push(vote_macronMediane);
    vote_lepenpop_02795.push(vote_lepenMediane);
    vote_rejetpop_02795.push(vote_rejetMediane);
    name_Commune_02795.push(nameCommune);
    Pourcentage_02795.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02795.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02795.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02795.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02795.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02795 = [];
const vote_lepen_02795 = [];
const vote_rejet_02795 = [];
const vote_macronpop_02795 = [];
const vote_lepenpop_02795 = [];
const vote_rejetpop_02795 = [];
const name_Commune_02795 = [];
const Pourcentage_02795 = [];
const Pourcentage_rejet_02795 = [];
const vote_gene_macron_02795 = [];
const vote_gene_lepen_02795 = [];
const vote_gene_rejet_02795 = [];

async function chartIt02795(){
    await GraphDATA02795();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02795-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02795
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02795
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02795-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02795,vote_lepen_02795,vote_rejet_02795]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02795-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02795,vote_lepenpop_02795,vote_rejetpop_02795]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02795"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02795
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02795
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02795
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02796*/
/*------------------------------------------------------------------ */
async function GraphDATA02796() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[795];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02796.push(vote_macron); 
    vote_lepen_02796.push(vote_lepen);
    vote_rejet_02796.push(vote_rejet);
    vote_macronpop_02796.push(vote_macronMediane);
    vote_lepenpop_02796.push(vote_lepenMediane);
    vote_rejetpop_02796.push(vote_rejetMediane);
    name_Commune_02796.push(nameCommune);
    Pourcentage_02796.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02796.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02796.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02796.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02796.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02796 = [];
const vote_lepen_02796 = [];
const vote_rejet_02796 = [];
const vote_macronpop_02796 = [];
const vote_lepenpop_02796 = [];
const vote_rejetpop_02796 = [];
const name_Commune_02796 = [];
const Pourcentage_02796 = [];
const Pourcentage_rejet_02796 = [];
const vote_gene_macron_02796 = [];
const vote_gene_lepen_02796 = [];
const vote_gene_rejet_02796 = [];

async function chartIt02796(){
    await GraphDATA02796();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02796-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02796
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02796
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02796-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02796,vote_lepen_02796,vote_rejet_02796]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02796-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02796,vote_lepenpop_02796,vote_rejetpop_02796]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02796"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02796
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02796
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02796
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02797*/
/*------------------------------------------------------------------ */
async function GraphDATA02797() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[796];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02797.push(vote_macron); 
    vote_lepen_02797.push(vote_lepen);
    vote_rejet_02797.push(vote_rejet);
    vote_macronpop_02797.push(vote_macronMediane);
    vote_lepenpop_02797.push(vote_lepenMediane);
    vote_rejetpop_02797.push(vote_rejetMediane);
    name_Commune_02797.push(nameCommune);
    Pourcentage_02797.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02797.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02797.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02797.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02797.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02797 = [];
const vote_lepen_02797 = [];
const vote_rejet_02797 = [];
const vote_macronpop_02797 = [];
const vote_lepenpop_02797 = [];
const vote_rejetpop_02797 = [];
const name_Commune_02797 = [];
const Pourcentage_02797 = [];
const Pourcentage_rejet_02797 = [];
const vote_gene_macron_02797 = [];
const vote_gene_lepen_02797 = [];
const vote_gene_rejet_02797 = [];

async function chartIt02797(){
    await GraphDATA02797();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02797-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02797
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02797
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02797-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02797,vote_lepen_02797,vote_rejet_02797]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02797-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02797,vote_lepenpop_02797,vote_rejetpop_02797]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02797"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02797
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02797
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02797
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02798*/
/*------------------------------------------------------------------ */
async function GraphDATA02798() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[797];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02798.push(vote_macron); 
    vote_lepen_02798.push(vote_lepen);
    vote_rejet_02798.push(vote_rejet);
    vote_macronpop_02798.push(vote_macronMediane);
    vote_lepenpop_02798.push(vote_lepenMediane);
    vote_rejetpop_02798.push(vote_rejetMediane);
    name_Commune_02798.push(nameCommune);
    Pourcentage_02798.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02798.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02798.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02798.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02798.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02798 = [];
const vote_lepen_02798 = [];
const vote_rejet_02798 = [];
const vote_macronpop_02798 = [];
const vote_lepenpop_02798 = [];
const vote_rejetpop_02798 = [];
const name_Commune_02798 = [];
const Pourcentage_02798 = [];
const Pourcentage_rejet_02798 = [];
const vote_gene_macron_02798 = [];
const vote_gene_lepen_02798 = [];
const vote_gene_rejet_02798 = [];

async function chartIt02798(){
    await GraphDATA02798();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02798-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02798
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02798
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02798-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02798,vote_lepen_02798,vote_rejet_02798]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02798-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02798,vote_lepenpop_02798,vote_rejetpop_02798]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02798"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02798
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02798
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02798
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02799*/
/*------------------------------------------------------------------ */
async function GraphDATA02799() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[798];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02799.push(vote_macron); 
    vote_lepen_02799.push(vote_lepen);
    vote_rejet_02799.push(vote_rejet);
    vote_macronpop_02799.push(vote_macronMediane);
    vote_lepenpop_02799.push(vote_lepenMediane);
    vote_rejetpop_02799.push(vote_rejetMediane);
    name_Commune_02799.push(nameCommune);
    Pourcentage_02799.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02799.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02799.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02799.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02799.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02799 = [];
const vote_lepen_02799 = [];
const vote_rejet_02799 = [];
const vote_macronpop_02799 = [];
const vote_lepenpop_02799 = [];
const vote_rejetpop_02799 = [];
const name_Commune_02799 = [];
const Pourcentage_02799 = [];
const Pourcentage_rejet_02799 = [];
const vote_gene_macron_02799 = [];
const vote_gene_lepen_02799 = [];
const vote_gene_rejet_02799 = [];

async function chartIt02799(){
    await GraphDATA02799();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02799-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02799
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02799
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02799-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02799,vote_lepen_02799,vote_rejet_02799]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02799-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02799,vote_lepenpop_02799,vote_rejetpop_02799]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02799"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02799
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02799
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02799
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02800*/
/*------------------------------------------------------------------ */
async function GraphDATA02800() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[799];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02800.push(vote_macron); 
    vote_lepen_02800.push(vote_lepen);
    vote_rejet_02800.push(vote_rejet);
    vote_macronpop_02800.push(vote_macronMediane);
    vote_lepenpop_02800.push(vote_lepenMediane);
    vote_rejetpop_02800.push(vote_rejetMediane);
    name_Commune_02800.push(nameCommune);
    Pourcentage_02800.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02800.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02800.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02800.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02800.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02800 = [];
const vote_lepen_02800 = [];
const vote_rejet_02800 = [];
const vote_macronpop_02800 = [];
const vote_lepenpop_02800 = [];
const vote_rejetpop_02800 = [];
const name_Commune_02800 = [];
const Pourcentage_02800 = [];
const Pourcentage_rejet_02800 = [];
const vote_gene_macron_02800 = [];
const vote_gene_lepen_02800 = [];
const vote_gene_rejet_02800 = [];

async function chartIt02800(){
    await GraphDATA02800();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02800-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02800
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02800
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02800-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02800,vote_lepen_02800,vote_rejet_02800]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02800-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02800,vote_lepenpop_02800,vote_rejetpop_02800]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02800"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02800
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02800
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02800
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}