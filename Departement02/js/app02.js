/********************************************************************** */
/*JS GRAPHIQUE FICHIER DATA */
/********************************************************************** */
chartIt02101();
chartIt02102();
chartIt02103();
chartIt02104();
chartIt02105();
chartIt02106();
chartIt02107();
chartIt02108();
chartIt02109();
chartIt02110();
chartIt02111();
chartIt02112();
chartIt02113();
chartIt02114();
chartIt02115();
chartIt02116();
chartIt02117();
chartIt02118();
chartIt02119();
chartIt02120();
chartIt02121();
chartIt02122();
chartIt02123();
chartIt02124();
chartIt02125();
chartIt02126();
chartIt02127();
chartIt02128();
chartIt02129();
chartIt02130();
chartIt02131();
chartIt02132();
chartIt02133();
chartIt02134();
chartIt02135();
chartIt02136();
chartIt02137();
chartIt02138();
chartIt02139();
chartIt02140();
chartIt02141();
chartIt02142();
chartIt02143();
chartIt02144();
chartIt02145();
chartIt02146();
chartIt02147();
chartIt02148();
chartIt02149();
chartIt02150();
chartIt02151();
chartIt02152();
chartIt02153();
chartIt02154();
chartIt02155();
chartIt02156();
chartIt02157();
chartIt02158();
chartIt02159();
chartIt02160();
chartIt02161();
chartIt02162();
chartIt02163();
chartIt02164();
chartIt02165();
chartIt02166();
chartIt02167();
chartIt02168();
chartIt02169();
chartIt02170();
chartIt02171();
chartIt02172();
chartIt02173();
chartIt02174();
chartIt02175();
chartIt02176();
chartIt02177();
chartIt02178();
chartIt02179();
chartIt02180();
chartIt02181();
chartIt02182();
chartIt02183();
chartIt02184();
chartIt02185();
chartIt02186();
chartIt02187();
chartIt02188();
chartIt02189();
chartIt02190();
chartIt02191();
chartIt02192();
chartIt02193();
chartIt02194();
chartIt02195();
chartIt02196();
chartIt02197();
chartIt02198();
chartIt02199();
/*------------------------------------------------------------------ */
/*COMMUNE 02101*/
/*------------------------------------------------------------------ */
async function GraphDATA02101() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02101.push(vote_macron); 
    vote_lepen_02101.push(vote_lepen);
    vote_rejet_02101.push(vote_rejet);
    vote_macronpop_02101.push(vote_macronMediane);
    vote_lepenpop_02101.push(vote_lepenMediane);
    vote_rejetpop_02101.push(vote_rejetMediane);
    name_Commune_02101.push(nameCommune);
    Pourcentage_02101.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02101.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02101.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02101.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02101.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02101 = [];
const vote_lepen_02101 = [];
const vote_rejet_02101 = [];
const vote_macronpop_02101 = [];
const vote_lepenpop_02101 = [];
const vote_rejetpop_02101 = [];
const name_Commune_02101 = [];
const Pourcentage_02101 = [];
const Pourcentage_rejet_02101 = [];
const vote_gene_macron_02101 = [];
const vote_gene_lepen_02101 = [];
const vote_gene_rejet_02101 = [];

async function chartIt02101(){
    await GraphDATA02101();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02101-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02101
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02101
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02101-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02101,vote_lepen_02101,vote_rejet_02101]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02101-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02101,vote_lepenpop_02101,vote_rejetpop_02101]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02101"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02101
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02101
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02101
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02102*/
/*------------------------------------------------------------------ */
async function GraphDATA02102() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02102.push(vote_macron); 
    vote_lepen_02102.push(vote_lepen);
    vote_rejet_02102.push(vote_rejet);
    vote_macronpop_02102.push(vote_macronMediane);
    vote_lepenpop_02102.push(vote_lepenMediane);
    vote_rejetpop_02102.push(vote_rejetMediane);
    name_Commune_02102.push(nameCommune);
    Pourcentage_02102.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02102.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02102.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02102.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02102.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02102 = [];
const vote_lepen_02102 = [];
const vote_rejet_02102 = [];
const vote_macronpop_02102 = [];
const vote_lepenpop_02102 = [];
const vote_rejetpop_02102 = [];
const name_Commune_02102 = [];
const Pourcentage_02102 = [];
const Pourcentage_rejet_02102 = [];
const vote_gene_macron_02102 = [];
const vote_gene_lepen_02102 = [];
const vote_gene_rejet_02102 = [];

async function chartIt02102(){
    await GraphDATA02102();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02102-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02102
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02102
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02102-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02102,vote_lepen_02102,vote_rejet_02102]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02102-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02102,vote_lepenpop_02102,vote_rejetpop_02102]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02102"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02102
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02102
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02102
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02103*/
/*------------------------------------------------------------------ */
async function GraphDATA02103() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02103.push(vote_macron); 
    vote_lepen_02103.push(vote_lepen);
    vote_rejet_02103.push(vote_rejet);
    vote_macronpop_02103.push(vote_macronMediane);
    vote_lepenpop_02103.push(vote_lepenMediane);
    vote_rejetpop_02103.push(vote_rejetMediane);
    name_Commune_02103.push(nameCommune);
    Pourcentage_02103.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02103.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02103.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02103.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02103.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02103 = [];
const vote_lepen_02103 = [];
const vote_rejet_02103 = [];
const vote_macronpop_02103 = [];
const vote_lepenpop_02103 = [];
const vote_rejetpop_02103 = [];
const name_Commune_02103 = [];
const Pourcentage_02103 = [];
const Pourcentage_rejet_02103 = [];
const vote_gene_macron_02103 = [];
const vote_gene_lepen_02103 = [];
const vote_gene_rejet_02103 = [];

async function chartIt02103(){
    await GraphDATA02103();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02103-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02103
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02103
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02103-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02103,vote_lepen_02103,vote_rejet_02103]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02103-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02103,vote_lepenpop_02103,vote_rejetpop_02103]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02103"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02103
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02103
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02103
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02104*/
/*------------------------------------------------------------------ */
async function GraphDATA02104() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02104.push(vote_macron); 
    vote_lepen_02104.push(vote_lepen);
    vote_rejet_02104.push(vote_rejet);
    vote_macronpop_02104.push(vote_macronMediane);
    vote_lepenpop_02104.push(vote_lepenMediane);
    vote_rejetpop_02104.push(vote_rejetMediane);
    name_Commune_02104.push(nameCommune);
    Pourcentage_02104.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02104.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02104.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02104.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02104.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02104 = [];
const vote_lepen_02104 = [];
const vote_rejet_02104 = [];
const vote_macronpop_02104 = [];
const vote_lepenpop_02104 = [];
const vote_rejetpop_02104 = [];
const name_Commune_02104 = [];
const Pourcentage_02104 = [];
const Pourcentage_rejet_02104 = [];
const vote_gene_macron_02104 = [];
const vote_gene_lepen_02104 = [];
const vote_gene_rejet_02104 = [];

async function chartIt02104(){
    await GraphDATA02104();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02104-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02104
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02104
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02104-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02104,vote_lepen_02104,vote_rejet_02104]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02104-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02104,vote_lepenpop_02104,vote_rejetpop_02104]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02104"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02104
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02104
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02104
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02105*/
/*------------------------------------------------------------------ */
async function GraphDATA02105() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02105.push(vote_macron); 
    vote_lepen_02105.push(vote_lepen);
    vote_rejet_02105.push(vote_rejet);
    vote_macronpop_02105.push(vote_macronMediane);
    vote_lepenpop_02105.push(vote_lepenMediane);
    vote_rejetpop_02105.push(vote_rejetMediane);
    name_Commune_02105.push(nameCommune);
    Pourcentage_02105.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02105.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02105.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02105.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02105.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02105 = [];
const vote_lepen_02105 = [];
const vote_rejet_02105 = [];
const vote_macronpop_02105 = [];
const vote_lepenpop_02105 = [];
const vote_rejetpop_02105 = [];
const name_Commune_02105 = [];
const Pourcentage_02105 = [];
const Pourcentage_rejet_02105 = [];
const vote_gene_macron_02105 = [];
const vote_gene_lepen_02105 = [];
const vote_gene_rejet_02105 = [];

async function chartIt02105(){
    await GraphDATA02105();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02105-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02105
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02105
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02105-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02105,vote_lepen_02105,vote_rejet_02105]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02105-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02105,vote_lepenpop_02105,vote_rejetpop_02105]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02105"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02105
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02105
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02105
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02106*/
/*------------------------------------------------------------------ */
async function GraphDATA02106() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02106.push(vote_macron); 
    vote_lepen_02106.push(vote_lepen);
    vote_rejet_02106.push(vote_rejet);
    vote_macronpop_02106.push(vote_macronMediane);
    vote_lepenpop_02106.push(vote_lepenMediane);
    vote_rejetpop_02106.push(vote_rejetMediane);
    name_Commune_02106.push(nameCommune);
    Pourcentage_02106.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02106.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02106.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02106.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02106.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02106 = [];
const vote_lepen_02106 = [];
const vote_rejet_02106 = [];
const vote_macronpop_02106 = [];
const vote_lepenpop_02106 = [];
const vote_rejetpop_02106 = [];
const name_Commune_02106 = [];
const Pourcentage_02106 = [];
const Pourcentage_rejet_02106 = [];
const vote_gene_macron_02106 = [];
const vote_gene_lepen_02106 = [];
const vote_gene_rejet_02106 = [];

async function chartIt02106(){
    await GraphDATA02106();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02106-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02106
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02106
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02106-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02106,vote_lepen_02106,vote_rejet_02106]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02106-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02106,vote_lepenpop_02106,vote_rejetpop_02106]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02106"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02106
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02106
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02106
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02107*/
/*------------------------------------------------------------------ */
async function GraphDATA02107() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02107.push(vote_macron); 
    vote_lepen_02107.push(vote_lepen);
    vote_rejet_02107.push(vote_rejet);
    vote_macronpop_02107.push(vote_macronMediane);
    vote_lepenpop_02107.push(vote_lepenMediane);
    vote_rejetpop_02107.push(vote_rejetMediane);
    name_Commune_02107.push(nameCommune);
    Pourcentage_02107.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02107.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02107.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02107.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02107.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02107 = [];
const vote_lepen_02107 = [];
const vote_rejet_02107 = [];
const vote_macronpop_02107 = [];
const vote_lepenpop_02107 = [];
const vote_rejetpop_02107 = [];
const name_Commune_02107 = [];
const Pourcentage_02107 = [];
const Pourcentage_rejet_02107 = [];
const vote_gene_macron_02107 = [];
const vote_gene_lepen_02107 = [];
const vote_gene_rejet_02107 = [];

async function chartIt02107(){
    await GraphDATA02107();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02107-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02107
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02107
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02107-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02107,vote_lepen_02107,vote_rejet_02107]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02107-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02107,vote_lepenpop_02107,vote_rejetpop_02107]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02107"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02107
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02107
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02107
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02108*/
/*------------------------------------------------------------------ */
async function GraphDATA02108() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02108.push(vote_macron); 
    vote_lepen_02108.push(vote_lepen);
    vote_rejet_02108.push(vote_rejet);
    vote_macronpop_02108.push(vote_macronMediane);
    vote_lepenpop_02108.push(vote_lepenMediane);
    vote_rejetpop_02108.push(vote_rejetMediane);
    name_Commune_02108.push(nameCommune);
    Pourcentage_02108.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02108.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02108.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02108.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02108.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02108 = [];
const vote_lepen_02108 = [];
const vote_rejet_02108 = [];
const vote_macronpop_02108 = [];
const vote_lepenpop_02108 = [];
const vote_rejetpop_02108 = [];
const name_Commune_02108 = [];
const Pourcentage_02108 = [];
const Pourcentage_rejet_02108 = [];
const vote_gene_macron_02108 = [];
const vote_gene_lepen_02108 = [];
const vote_gene_rejet_02108 = [];

async function chartIt02108(){
    await GraphDATA02108();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02108-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02108
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02108
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02108-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02108,vote_lepen_02108,vote_rejet_02108]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02108-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02108,vote_lepenpop_02108,vote_rejetpop_02108]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02108"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02108
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02108
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02108
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02109*/
/*------------------------------------------------------------------ */
async function GraphDATA02109() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02109.push(vote_macron); 
    vote_lepen_02109.push(vote_lepen);
    vote_rejet_02109.push(vote_rejet);
    vote_macronpop_02109.push(vote_macronMediane);
    vote_lepenpop_02109.push(vote_lepenMediane);
    vote_rejetpop_02109.push(vote_rejetMediane);
    name_Commune_02109.push(nameCommune);
    Pourcentage_02109.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02109.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02109.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02109.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02109.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02109 = [];
const vote_lepen_02109 = [];
const vote_rejet_02109 = [];
const vote_macronpop_02109 = [];
const vote_lepenpop_02109 = [];
const vote_rejetpop_02109 = [];
const name_Commune_02109 = [];
const Pourcentage_02109 = [];
const Pourcentage_rejet_02109 = [];
const vote_gene_macron_02109 = [];
const vote_gene_lepen_02109 = [];
const vote_gene_rejet_02109 = [];

async function chartIt02109(){
    await GraphDATA02109();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02109-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02109
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02109
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02109-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02109,vote_lepen_02109,vote_rejet_02109]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02109-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02109,vote_lepenpop_02109,vote_rejetpop_02109]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02109"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02109
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02109
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02109
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02110*/
/*------------------------------------------------------------------ */
async function GraphDATA02110() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02110.push(vote_macron); 
    vote_lepen_02110.push(vote_lepen);
    vote_rejet_02110.push(vote_rejet);
    vote_macronpop_02110.push(vote_macronMediane);
    vote_lepenpop_02110.push(vote_lepenMediane);
    vote_rejetpop_02110.push(vote_rejetMediane);
    name_Commune_02110.push(nameCommune);
    Pourcentage_02110.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02110.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02110.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02110.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02110.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02110 = [];
const vote_lepen_02110 = [];
const vote_rejet_02110 = [];
const vote_macronpop_02110 = [];
const vote_lepenpop_02110 = [];
const vote_rejetpop_02110 = [];
const name_Commune_02110 = [];
const Pourcentage_02110 = [];
const Pourcentage_rejet_02110 = [];
const vote_gene_macron_02110 = [];
const vote_gene_lepen_02110 = [];
const vote_gene_rejet_02110 = [];

async function chartIt02110(){
    await GraphDATA02110();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02110-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02110
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02110
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02110-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02110,vote_lepen_02110,vote_rejet_02110]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02110-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02110,vote_lepenpop_02110,vote_rejetpop_02110]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02110"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02110
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02110
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02110
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02111*/
/*------------------------------------------------------------------ */
async function GraphDATA02111() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02111.push(vote_macron); 
    vote_lepen_02111.push(vote_lepen);
    vote_rejet_02111.push(vote_rejet);
    vote_macronpop_02111.push(vote_macronMediane);
    vote_lepenpop_02111.push(vote_lepenMediane);
    vote_rejetpop_02111.push(vote_rejetMediane);
    name_Commune_02111.push(nameCommune);
    Pourcentage_02111.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02111.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02111.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02111.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02111.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02111 = [];
const vote_lepen_02111 = [];
const vote_rejet_02111 = [];
const vote_macronpop_02111 = [];
const vote_lepenpop_02111 = [];
const vote_rejetpop_02111 = [];
const name_Commune_02111 = [];
const Pourcentage_02111 = [];
const Pourcentage_rejet_02111 = [];
const vote_gene_macron_02111 = [];
const vote_gene_lepen_02111 = [];
const vote_gene_rejet_02111 = [];

async function chartIt02111(){
    await GraphDATA02111();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02111-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02111
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02111
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02111-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02111,vote_lepen_02111,vote_rejet_02111]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02111-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02111,vote_lepenpop_02111,vote_rejetpop_02111]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02111"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02111
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02111
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02111
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02112*/
/*------------------------------------------------------------------ */
async function GraphDATA02112() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02112.push(vote_macron); 
    vote_lepen_02112.push(vote_lepen);
    vote_rejet_02112.push(vote_rejet);
    vote_macronpop_02112.push(vote_macronMediane);
    vote_lepenpop_02112.push(vote_lepenMediane);
    vote_rejetpop_02112.push(vote_rejetMediane);
    name_Commune_02112.push(nameCommune);
    Pourcentage_02112.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02112.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02112.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02112.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02112.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02112 = [];
const vote_lepen_02112 = [];
const vote_rejet_02112 = [];
const vote_macronpop_02112 = [];
const vote_lepenpop_02112 = [];
const vote_rejetpop_02112 = [];
const name_Commune_02112 = [];
const Pourcentage_02112 = [];
const Pourcentage_rejet_02112 = [];
const vote_gene_macron_02112 = [];
const vote_gene_lepen_02112 = [];
const vote_gene_rejet_02112 = [];

async function chartIt02112(){
    await GraphDATA02112();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02112-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02112
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02112
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02112-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02112,vote_lepen_02112,vote_rejet_02112]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02112-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02112,vote_lepenpop_02112,vote_rejetpop_02112]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02112"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02112
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02112
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02112
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02113*/
/*------------------------------------------------------------------ */
async function GraphDATA02113() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02113.push(vote_macron); 
    vote_lepen_02113.push(vote_lepen);
    vote_rejet_02113.push(vote_rejet);
    vote_macronpop_02113.push(vote_macronMediane);
    vote_lepenpop_02113.push(vote_lepenMediane);
    vote_rejetpop_02113.push(vote_rejetMediane);
    name_Commune_02113.push(nameCommune);
    Pourcentage_02113.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02113.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02113.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02113.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02113.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02113 = [];
const vote_lepen_02113 = [];
const vote_rejet_02113 = [];
const vote_macronpop_02113 = [];
const vote_lepenpop_02113 = [];
const vote_rejetpop_02113 = [];
const name_Commune_02113 = [];
const Pourcentage_02113 = [];
const Pourcentage_rejet_02113 = [];
const vote_gene_macron_02113 = [];
const vote_gene_lepen_02113 = [];
const vote_gene_rejet_02113 = [];

async function chartIt02113(){
    await GraphDATA02113();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02113-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02113
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02113
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02113-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02113,vote_lepen_02113,vote_rejet_02113]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02113-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02113,vote_lepenpop_02113,vote_rejetpop_02113]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02113"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02113
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02113
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02113
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02114*/
/*------------------------------------------------------------------ */
async function GraphDATA02114() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02114.push(vote_macron); 
    vote_lepen_02114.push(vote_lepen);
    vote_rejet_02114.push(vote_rejet);
    vote_macronpop_02114.push(vote_macronMediane);
    vote_lepenpop_02114.push(vote_lepenMediane);
    vote_rejetpop_02114.push(vote_rejetMediane);
    name_Commune_02114.push(nameCommune);
    Pourcentage_02114.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02114.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02114.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02114.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02114.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02114 = [];
const vote_lepen_02114 = [];
const vote_rejet_02114 = [];
const vote_macronpop_02114 = [];
const vote_lepenpop_02114 = [];
const vote_rejetpop_02114 = [];
const name_Commune_02114 = [];
const Pourcentage_02114 = [];
const Pourcentage_rejet_02114 = [];
const vote_gene_macron_02114 = [];
const vote_gene_lepen_02114 = [];
const vote_gene_rejet_02114 = [];

async function chartIt02114(){
    await GraphDATA02114();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02114-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02114
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02114
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02114-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02114,vote_lepen_02114,vote_rejet_02114]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02114-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02114,vote_lepenpop_02114,vote_rejetpop_02114]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02114"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02114
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02114
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02114
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02115*/
/*------------------------------------------------------------------ */
async function GraphDATA02115() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02115.push(vote_macron); 
    vote_lepen_02115.push(vote_lepen);
    vote_rejet_02115.push(vote_rejet);
    vote_macronpop_02115.push(vote_macronMediane);
    vote_lepenpop_02115.push(vote_lepenMediane);
    vote_rejetpop_02115.push(vote_rejetMediane);
    name_Commune_02115.push(nameCommune);
    Pourcentage_02115.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02115.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02115.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02115.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02115.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02115 = [];
const vote_lepen_02115 = [];
const vote_rejet_02115 = [];
const vote_macronpop_02115 = [];
const vote_lepenpop_02115 = [];
const vote_rejetpop_02115 = [];
const name_Commune_02115 = [];
const Pourcentage_02115 = [];
const Pourcentage_rejet_02115 = [];
const vote_gene_macron_02115 = [];
const vote_gene_lepen_02115 = [];
const vote_gene_rejet_02115 = [];

async function chartIt02115(){
    await GraphDATA02115();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02115-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02115
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02115
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02115-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02115,vote_lepen_02115,vote_rejet_02115]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02115-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02115,vote_lepenpop_02115,vote_rejetpop_02115]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02115"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02115
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02115
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02115
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02116*/
/*------------------------------------------------------------------ */
async function GraphDATA02116() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02116.push(vote_macron); 
    vote_lepen_02116.push(vote_lepen);
    vote_rejet_02116.push(vote_rejet);
    vote_macronpop_02116.push(vote_macronMediane);
    vote_lepenpop_02116.push(vote_lepenMediane);
    vote_rejetpop_02116.push(vote_rejetMediane);
    name_Commune_02116.push(nameCommune);
    Pourcentage_02116.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02116.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02116.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02116.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02116.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02116 = [];
const vote_lepen_02116 = [];
const vote_rejet_02116 = [];
const vote_macronpop_02116 = [];
const vote_lepenpop_02116 = [];
const vote_rejetpop_02116 = [];
const name_Commune_02116 = [];
const Pourcentage_02116 = [];
const Pourcentage_rejet_02116 = [];
const vote_gene_macron_02116 = [];
const vote_gene_lepen_02116 = [];
const vote_gene_rejet_02116 = [];

async function chartIt02116(){
    await GraphDATA02116();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02116-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02116
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02116
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02116-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02116,vote_lepen_02116,vote_rejet_02116]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02116-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02116,vote_lepenpop_02116,vote_rejetpop_02116]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02116"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02116
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02116
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02116
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02117*/
/*------------------------------------------------------------------ */
async function GraphDATA02117() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02117.push(vote_macron); 
    vote_lepen_02117.push(vote_lepen);
    vote_rejet_02117.push(vote_rejet);
    vote_macronpop_02117.push(vote_macronMediane);
    vote_lepenpop_02117.push(vote_lepenMediane);
    vote_rejetpop_02117.push(vote_rejetMediane);
    name_Commune_02117.push(nameCommune);
    Pourcentage_02117.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02117.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02117.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02117.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02117.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02117 = [];
const vote_lepen_02117 = [];
const vote_rejet_02117 = [];
const vote_macronpop_02117 = [];
const vote_lepenpop_02117 = [];
const vote_rejetpop_02117 = [];
const name_Commune_02117 = [];
const Pourcentage_02117 = [];
const Pourcentage_rejet_02117 = [];
const vote_gene_macron_02117 = [];
const vote_gene_lepen_02117 = [];
const vote_gene_rejet_02117 = [];

async function chartIt02117(){
    await GraphDATA02117();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02117-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02117
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02117
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02117-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02117,vote_lepen_02117,vote_rejet_02117]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02117-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02117,vote_lepenpop_02117,vote_rejetpop_02117]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02117"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02117
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02117
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02117
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02118*/
/*------------------------------------------------------------------ */
async function GraphDATA02118() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02118.push(vote_macron); 
    vote_lepen_02118.push(vote_lepen);
    vote_rejet_02118.push(vote_rejet);
    vote_macronpop_02118.push(vote_macronMediane);
    vote_lepenpop_02118.push(vote_lepenMediane);
    vote_rejetpop_02118.push(vote_rejetMediane);
    name_Commune_02118.push(nameCommune);
    Pourcentage_02118.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02118.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02118.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02118.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02118.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02118 = [];
const vote_lepen_02118 = [];
const vote_rejet_02118 = [];
const vote_macronpop_02118 = [];
const vote_lepenpop_02118 = [];
const vote_rejetpop_02118 = [];
const name_Commune_02118 = [];
const Pourcentage_02118 = [];
const Pourcentage_rejet_02118 = [];
const vote_gene_macron_02118 = [];
const vote_gene_lepen_02118 = [];
const vote_gene_rejet_02118 = [];

async function chartIt02118(){
    await GraphDATA02118();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02118-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02118
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02118
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02118-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02118,vote_lepen_02118,vote_rejet_02118]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02118-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02118,vote_lepenpop_02118,vote_rejetpop_02118]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02118"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02118
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02118
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02118
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02119*/
/*------------------------------------------------------------------ */
async function GraphDATA02119() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02119.push(vote_macron); 
    vote_lepen_02119.push(vote_lepen);
    vote_rejet_02119.push(vote_rejet);
    vote_macronpop_02119.push(vote_macronMediane);
    vote_lepenpop_02119.push(vote_lepenMediane);
    vote_rejetpop_02119.push(vote_rejetMediane);
    name_Commune_02119.push(nameCommune);
    Pourcentage_02119.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02119.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02119.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02119.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02119.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02119 = [];
const vote_lepen_02119 = [];
const vote_rejet_02119 = [];
const vote_macronpop_02119 = [];
const vote_lepenpop_02119 = [];
const vote_rejetpop_02119 = [];
const name_Commune_02119 = [];
const Pourcentage_02119 = [];
const Pourcentage_rejet_02119 = [];
const vote_gene_macron_02119 = [];
const vote_gene_lepen_02119 = [];
const vote_gene_rejet_02119 = [];

async function chartIt02119(){
    await GraphDATA02119();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02119-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02119
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02119
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02119-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02119,vote_lepen_02119,vote_rejet_02119]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02119-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02119,vote_lepenpop_02119,vote_rejetpop_02119]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02119"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02119
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02119
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02119
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02120*/
/*------------------------------------------------------------------ */
async function GraphDATA02120() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02120.push(vote_macron); 
    vote_lepen_02120.push(vote_lepen);
    vote_rejet_02120.push(vote_rejet);
    vote_macronpop_02120.push(vote_macronMediane);
    vote_lepenpop_02120.push(vote_lepenMediane);
    vote_rejetpop_02120.push(vote_rejetMediane);
    name_Commune_02120.push(nameCommune);
    Pourcentage_02120.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02120.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02120.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02120.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02120.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02120 = [];
const vote_lepen_02120 = [];
const vote_rejet_02120 = [];
const vote_macronpop_02120 = [];
const vote_lepenpop_02120 = [];
const vote_rejetpop_02120 = [];
const name_Commune_02120 = [];
const Pourcentage_02120 = [];
const Pourcentage_rejet_02120 = [];
const vote_gene_macron_02120 = [];
const vote_gene_lepen_02120 = [];
const vote_gene_rejet_02120 = [];

async function chartIt02120(){
    await GraphDATA02120();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02120-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02120
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02120
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02120-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02120,vote_lepen_02120,vote_rejet_02120]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02120-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02120,vote_lepenpop_02120,vote_rejetpop_02120]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02120"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02120
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02120
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02120
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02121*/
/*------------------------------------------------------------------ */
async function GraphDATA02121() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02121.push(vote_macron); 
    vote_lepen_02121.push(vote_lepen);
    vote_rejet_02121.push(vote_rejet);
    vote_macronpop_02121.push(vote_macronMediane);
    vote_lepenpop_02121.push(vote_lepenMediane);
    vote_rejetpop_02121.push(vote_rejetMediane);
    name_Commune_02121.push(nameCommune);
    Pourcentage_02121.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02121.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02121.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02121.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02121.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02121 = [];
const vote_lepen_02121 = [];
const vote_rejet_02121 = [];
const vote_macronpop_02121 = [];
const vote_lepenpop_02121 = [];
const vote_rejetpop_02121 = [];
const name_Commune_02121 = [];
const Pourcentage_02121 = [];
const Pourcentage_rejet_02121 = [];
const vote_gene_macron_02121 = [];
const vote_gene_lepen_02121 = [];
const vote_gene_rejet_02121 = [];

async function chartIt02121(){
    await GraphDATA02121();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02121-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02121
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02121
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02121-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02121,vote_lepen_02121,vote_rejet_02121]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02121-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02121,vote_lepenpop_02121,vote_rejetpop_02121]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02121"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02121
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02121
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02121
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02122*/
/*------------------------------------------------------------------ */
async function GraphDATA02122() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02122.push(vote_macron); 
    vote_lepen_02122.push(vote_lepen);
    vote_rejet_02122.push(vote_rejet);
    vote_macronpop_02122.push(vote_macronMediane);
    vote_lepenpop_02122.push(vote_lepenMediane);
    vote_rejetpop_02122.push(vote_rejetMediane);
    name_Commune_02122.push(nameCommune);
    Pourcentage_02122.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02122.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02122.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02122.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02122.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02122 = [];
const vote_lepen_02122 = [];
const vote_rejet_02122 = [];
const vote_macronpop_02122 = [];
const vote_lepenpop_02122 = [];
const vote_rejetpop_02122 = [];
const name_Commune_02122 = [];
const Pourcentage_02122 = [];
const Pourcentage_rejet_02122 = [];
const vote_gene_macron_02122 = [];
const vote_gene_lepen_02122 = [];
const vote_gene_rejet_02122 = [];

async function chartIt02122(){
    await GraphDATA02122();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02122-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02122
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02122
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02122-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02122,vote_lepen_02122,vote_rejet_02122]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02122-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02122,vote_lepenpop_02122,vote_rejetpop_02122]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02122"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02122
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02122
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02122
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02123*/
/*------------------------------------------------------------------ */
async function GraphDATA02123() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02123.push(vote_macron); 
    vote_lepen_02123.push(vote_lepen);
    vote_rejet_02123.push(vote_rejet);
    vote_macronpop_02123.push(vote_macronMediane);
    vote_lepenpop_02123.push(vote_lepenMediane);
    vote_rejetpop_02123.push(vote_rejetMediane);
    name_Commune_02123.push(nameCommune);
    Pourcentage_02123.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02123.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02123.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02123.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02123.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02123 = [];
const vote_lepen_02123 = [];
const vote_rejet_02123 = [];
const vote_macronpop_02123 = [];
const vote_lepenpop_02123 = [];
const vote_rejetpop_02123 = [];
const name_Commune_02123 = [];
const Pourcentage_02123 = [];
const Pourcentage_rejet_02123 = [];
const vote_gene_macron_02123 = [];
const vote_gene_lepen_02123 = [];
const vote_gene_rejet_02123 = [];

async function chartIt02123(){
    await GraphDATA02123();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02123-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02123
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02123
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02123-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02123,vote_lepen_02123,vote_rejet_02123]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02123-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02123,vote_lepenpop_02123,vote_rejetpop_02123]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02123"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02123
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02123
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02123
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02124*/
/*------------------------------------------------------------------ */
async function GraphDATA02124() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02124.push(vote_macron); 
    vote_lepen_02124.push(vote_lepen);
    vote_rejet_02124.push(vote_rejet);
    vote_macronpop_02124.push(vote_macronMediane);
    vote_lepenpop_02124.push(vote_lepenMediane);
    vote_rejetpop_02124.push(vote_rejetMediane);
    name_Commune_02124.push(nameCommune);
    Pourcentage_02124.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02124.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02124.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02124.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02124.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02124 = [];
const vote_lepen_02124 = [];
const vote_rejet_02124 = [];
const vote_macronpop_02124 = [];
const vote_lepenpop_02124 = [];
const vote_rejetpop_02124 = [];
const name_Commune_02124 = [];
const Pourcentage_02124 = [];
const Pourcentage_rejet_02124 = [];
const vote_gene_macron_02124 = [];
const vote_gene_lepen_02124 = [];
const vote_gene_rejet_02124 = [];

async function chartIt02124(){
    await GraphDATA02124();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02124-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02124
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02124
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02124-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02124,vote_lepen_02124,vote_rejet_02124]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02124-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02124,vote_lepenpop_02124,vote_rejetpop_02124]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02124"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02124
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02124
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02124
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02125*/
/*------------------------------------------------------------------ */
async function GraphDATA02125() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02125.push(vote_macron); 
    vote_lepen_02125.push(vote_lepen);
    vote_rejet_02125.push(vote_rejet);
    vote_macronpop_02125.push(vote_macronMediane);
    vote_lepenpop_02125.push(vote_lepenMediane);
    vote_rejetpop_02125.push(vote_rejetMediane);
    name_Commune_02125.push(nameCommune);
    Pourcentage_02125.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02125.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02125.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02125.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02125.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02125 = [];
const vote_lepen_02125 = [];
const vote_rejet_02125 = [];
const vote_macronpop_02125 = [];
const vote_lepenpop_02125 = [];
const vote_rejetpop_02125 = [];
const name_Commune_02125 = [];
const Pourcentage_02125 = [];
const Pourcentage_rejet_02125 = [];
const vote_gene_macron_02125 = [];
const vote_gene_lepen_02125 = [];
const vote_gene_rejet_02125 = [];

async function chartIt02125(){
    await GraphDATA02125();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02125-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02125
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02125
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02125-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02125,vote_lepen_02125,vote_rejet_02125]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02125-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02125,vote_lepenpop_02125,vote_rejetpop_02125]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02125"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02125
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02125
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02125
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02126*/
/*------------------------------------------------------------------ */
async function GraphDATA02126() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02126.push(vote_macron); 
    vote_lepen_02126.push(vote_lepen);
    vote_rejet_02126.push(vote_rejet);
    vote_macronpop_02126.push(vote_macronMediane);
    vote_lepenpop_02126.push(vote_lepenMediane);
    vote_rejetpop_02126.push(vote_rejetMediane);
    name_Commune_02126.push(nameCommune);
    Pourcentage_02126.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02126.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02126.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02126.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02126.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02126 = [];
const vote_lepen_02126 = [];
const vote_rejet_02126 = [];
const vote_macronpop_02126 = [];
const vote_lepenpop_02126 = [];
const vote_rejetpop_02126 = [];
const name_Commune_02126 = [];
const Pourcentage_02126 = [];
const Pourcentage_rejet_02126 = [];
const vote_gene_macron_02126 = [];
const vote_gene_lepen_02126 = [];
const vote_gene_rejet_02126 = [];

async function chartIt02126(){
    await GraphDATA02126();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02126-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02126
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02126
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02126-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02126,vote_lepen_02126,vote_rejet_02126]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02126-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02126,vote_lepenpop_02126,vote_rejetpop_02126]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02126"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02126
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02126
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02126
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02127*/
/*------------------------------------------------------------------ */
async function GraphDATA02127() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02127.push(vote_macron); 
    vote_lepen_02127.push(vote_lepen);
    vote_rejet_02127.push(vote_rejet);
    vote_macronpop_02127.push(vote_macronMediane);
    vote_lepenpop_02127.push(vote_lepenMediane);
    vote_rejetpop_02127.push(vote_rejetMediane);
    name_Commune_02127.push(nameCommune);
    Pourcentage_02127.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02127.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02127.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02127.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02127.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02127 = [];
const vote_lepen_02127 = [];
const vote_rejet_02127 = [];
const vote_macronpop_02127 = [];
const vote_lepenpop_02127 = [];
const vote_rejetpop_02127 = [];
const name_Commune_02127 = [];
const Pourcentage_02127 = [];
const Pourcentage_rejet_02127 = [];
const vote_gene_macron_02127 = [];
const vote_gene_lepen_02127 = [];
const vote_gene_rejet_02127 = [];

async function chartIt02127(){
    await GraphDATA02127();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02127-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02127
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02127
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02127-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02127,vote_lepen_02127,vote_rejet_02127]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02127-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02127,vote_lepenpop_02127,vote_rejetpop_02127]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02127"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02127
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02127
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02127
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02128*/
/*------------------------------------------------------------------ */
async function GraphDATA02128() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02128.push(vote_macron); 
    vote_lepen_02128.push(vote_lepen);
    vote_rejet_02128.push(vote_rejet);
    vote_macronpop_02128.push(vote_macronMediane);
    vote_lepenpop_02128.push(vote_lepenMediane);
    vote_rejetpop_02128.push(vote_rejetMediane);
    name_Commune_02128.push(nameCommune);
    Pourcentage_02128.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02128.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02128.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02128.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02128.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02128 = [];
const vote_lepen_02128 = [];
const vote_rejet_02128 = [];
const vote_macronpop_02128 = [];
const vote_lepenpop_02128 = [];
const vote_rejetpop_02128 = [];
const name_Commune_02128 = [];
const Pourcentage_02128 = [];
const Pourcentage_rejet_02128 = [];
const vote_gene_macron_02128 = [];
const vote_gene_lepen_02128 = [];
const vote_gene_rejet_02128 = [];

async function chartIt02128(){
    await GraphDATA02128();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02128-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02128
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02128
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02128-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02128,vote_lepen_02128,vote_rejet_02128]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02128-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02128,vote_lepenpop_02128,vote_rejetpop_02128]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02128"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02128
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02128
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02128
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02129*/
/*------------------------------------------------------------------ */
async function GraphDATA02129() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02129.push(vote_macron); 
    vote_lepen_02129.push(vote_lepen);
    vote_rejet_02129.push(vote_rejet);
    vote_macronpop_02129.push(vote_macronMediane);
    vote_lepenpop_02129.push(vote_lepenMediane);
    vote_rejetpop_02129.push(vote_rejetMediane);
    name_Commune_02129.push(nameCommune);
    Pourcentage_02129.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02129.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02129.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02129.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02129.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02129 = [];
const vote_lepen_02129 = [];
const vote_rejet_02129 = [];
const vote_macronpop_02129 = [];
const vote_lepenpop_02129 = [];
const vote_rejetpop_02129 = [];
const name_Commune_02129 = [];
const Pourcentage_02129 = [];
const Pourcentage_rejet_02129 = [];
const vote_gene_macron_02129 = [];
const vote_gene_lepen_02129 = [];
const vote_gene_rejet_02129 = [];

async function chartIt02129(){
    await GraphDATA02129();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02129-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02129
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02129
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02129-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02129,vote_lepen_02129,vote_rejet_02129]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02129-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02129,vote_lepenpop_02129,vote_rejetpop_02129]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02129"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02129
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02129
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02129
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02130*/
/*------------------------------------------------------------------ */
async function GraphDATA02130() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02130.push(vote_macron); 
    vote_lepen_02130.push(vote_lepen);
    vote_rejet_02130.push(vote_rejet);
    vote_macronpop_02130.push(vote_macronMediane);
    vote_lepenpop_02130.push(vote_lepenMediane);
    vote_rejetpop_02130.push(vote_rejetMediane);
    name_Commune_02130.push(nameCommune);
    Pourcentage_02130.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02130.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02130.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02130.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02130.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02130 = [];
const vote_lepen_02130 = [];
const vote_rejet_02130 = [];
const vote_macronpop_02130 = [];
const vote_lepenpop_02130 = [];
const vote_rejetpop_02130 = [];
const name_Commune_02130 = [];
const Pourcentage_02130 = [];
const Pourcentage_rejet_02130 = [];
const vote_gene_macron_02130 = [];
const vote_gene_lepen_02130 = [];
const vote_gene_rejet_02130 = [];

async function chartIt02130(){
    await GraphDATA02130();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02130-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02130
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02130
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02130-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02130,vote_lepen_02130,vote_rejet_02130]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02130-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02130,vote_lepenpop_02130,vote_rejetpop_02130]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02130"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02130
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02130
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02130
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02131*/
/*------------------------------------------------------------------ */
async function GraphDATA02131() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02131.push(vote_macron); 
    vote_lepen_02131.push(vote_lepen);
    vote_rejet_02131.push(vote_rejet);
    vote_macronpop_02131.push(vote_macronMediane);
    vote_lepenpop_02131.push(vote_lepenMediane);
    vote_rejetpop_02131.push(vote_rejetMediane);
    name_Commune_02131.push(nameCommune);
    Pourcentage_02131.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02131.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02131.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02131.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02131.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02131 = [];
const vote_lepen_02131 = [];
const vote_rejet_02131 = [];
const vote_macronpop_02131 = [];
const vote_lepenpop_02131 = [];
const vote_rejetpop_02131 = [];
const name_Commune_02131 = [];
const Pourcentage_02131 = [];
const Pourcentage_rejet_02131 = [];
const vote_gene_macron_02131 = [];
const vote_gene_lepen_02131 = [];
const vote_gene_rejet_02131 = [];

async function chartIt02131(){
    await GraphDATA02131();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02131-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02131
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02131
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02131-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02131,vote_lepen_02131,vote_rejet_02131]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02131-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02131,vote_lepenpop_02131,vote_rejetpop_02131]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02131"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02131
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02131
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02131
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02132*/
/*------------------------------------------------------------------ */
async function GraphDATA02132() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02132.push(vote_macron); 
    vote_lepen_02132.push(vote_lepen);
    vote_rejet_02132.push(vote_rejet);
    vote_macronpop_02132.push(vote_macronMediane);
    vote_lepenpop_02132.push(vote_lepenMediane);
    vote_rejetpop_02132.push(vote_rejetMediane);
    name_Commune_02132.push(nameCommune);
    Pourcentage_02132.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02132.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02132.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02132.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02132.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02132 = [];
const vote_lepen_02132 = [];
const vote_rejet_02132 = [];
const vote_macronpop_02132 = [];
const vote_lepenpop_02132 = [];
const vote_rejetpop_02132 = [];
const name_Commune_02132 = [];
const Pourcentage_02132 = [];
const Pourcentage_rejet_02132 = [];
const vote_gene_macron_02132 = [];
const vote_gene_lepen_02132 = [];
const vote_gene_rejet_02132 = [];

async function chartIt02132(){
    await GraphDATA02132();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02132-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02132
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02132
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02132-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02132,vote_lepen_02132,vote_rejet_02132]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02132-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02132,vote_lepenpop_02132,vote_rejetpop_02132]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02132"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02132
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02132
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02132
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02133*/
/*------------------------------------------------------------------ */
async function GraphDATA02133() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02133.push(vote_macron); 
    vote_lepen_02133.push(vote_lepen);
    vote_rejet_02133.push(vote_rejet);
    vote_macronpop_02133.push(vote_macronMediane);
    vote_lepenpop_02133.push(vote_lepenMediane);
    vote_rejetpop_02133.push(vote_rejetMediane);
    name_Commune_02133.push(nameCommune);
    Pourcentage_02133.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02133.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02133.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02133.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02133.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02133 = [];
const vote_lepen_02133 = [];
const vote_rejet_02133 = [];
const vote_macronpop_02133 = [];
const vote_lepenpop_02133 = [];
const vote_rejetpop_02133 = [];
const name_Commune_02133 = [];
const Pourcentage_02133 = [];
const Pourcentage_rejet_02133 = [];
const vote_gene_macron_02133 = [];
const vote_gene_lepen_02133 = [];
const vote_gene_rejet_02133 = [];

async function chartIt02133(){
    await GraphDATA02133();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02133-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02133
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02133
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02133-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02133,vote_lepen_02133,vote_rejet_02133]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02133-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02133,vote_lepenpop_02133,vote_rejetpop_02133]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02133"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02133
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02133
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02133
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02134*/
/*------------------------------------------------------------------ */
async function GraphDATA02134() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02134.push(vote_macron); 
    vote_lepen_02134.push(vote_lepen);
    vote_rejet_02134.push(vote_rejet);
    vote_macronpop_02134.push(vote_macronMediane);
    vote_lepenpop_02134.push(vote_lepenMediane);
    vote_rejetpop_02134.push(vote_rejetMediane);
    name_Commune_02134.push(nameCommune);
    Pourcentage_02134.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02134.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02134.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02134.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02134.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02134 = [];
const vote_lepen_02134 = [];
const vote_rejet_02134 = [];
const vote_macronpop_02134 = [];
const vote_lepenpop_02134 = [];
const vote_rejetpop_02134 = [];
const name_Commune_02134 = [];
const Pourcentage_02134 = [];
const Pourcentage_rejet_02134 = [];
const vote_gene_macron_02134 = [];
const vote_gene_lepen_02134 = [];
const vote_gene_rejet_02134 = [];

async function chartIt02134(){
    await GraphDATA02134();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02134-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02134
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02134
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02134-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02134,vote_lepen_02134,vote_rejet_02134]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02134-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02134,vote_lepenpop_02134,vote_rejetpop_02134]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02134"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02134
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02134
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02134
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02135*/
/*------------------------------------------------------------------ */
async function GraphDATA02135() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02135.push(vote_macron); 
    vote_lepen_02135.push(vote_lepen);
    vote_rejet_02135.push(vote_rejet);
    vote_macronpop_02135.push(vote_macronMediane);
    vote_lepenpop_02135.push(vote_lepenMediane);
    vote_rejetpop_02135.push(vote_rejetMediane);
    name_Commune_02135.push(nameCommune);
    Pourcentage_02135.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02135.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02135.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02135.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02135.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02135 = [];
const vote_lepen_02135 = [];
const vote_rejet_02135 = [];
const vote_macronpop_02135 = [];
const vote_lepenpop_02135 = [];
const vote_rejetpop_02135 = [];
const name_Commune_02135 = [];
const Pourcentage_02135 = [];
const Pourcentage_rejet_02135 = [];
const vote_gene_macron_02135 = [];
const vote_gene_lepen_02135 = [];
const vote_gene_rejet_02135 = [];

async function chartIt02135(){
    await GraphDATA02135();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02135-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02135
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02135
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02135-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02135,vote_lepen_02135,vote_rejet_02135]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02135-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02135,vote_lepenpop_02135,vote_rejetpop_02135]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02135"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02135
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02135
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02135
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02136*/
/*------------------------------------------------------------------ */
async function GraphDATA02136() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02136.push(vote_macron); 
    vote_lepen_02136.push(vote_lepen);
    vote_rejet_02136.push(vote_rejet);
    vote_macronpop_02136.push(vote_macronMediane);
    vote_lepenpop_02136.push(vote_lepenMediane);
    vote_rejetpop_02136.push(vote_rejetMediane);
    name_Commune_02136.push(nameCommune);
    Pourcentage_02136.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02136.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02136.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02136.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02136.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02136 = [];
const vote_lepen_02136 = [];
const vote_rejet_02136 = [];
const vote_macronpop_02136 = [];
const vote_lepenpop_02136 = [];
const vote_rejetpop_02136 = [];
const name_Commune_02136 = [];
const Pourcentage_02136 = [];
const Pourcentage_rejet_02136 = [];
const vote_gene_macron_02136 = [];
const vote_gene_lepen_02136 = [];
const vote_gene_rejet_02136 = [];

async function chartIt02136(){
    await GraphDATA02136();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02136-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02136
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02136
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02136-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02136,vote_lepen_02136,vote_rejet_02136]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02136-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02136,vote_lepenpop_02136,vote_rejetpop_02136]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02136"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02136
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02136
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02136
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02137*/
/*------------------------------------------------------------------ */
async function GraphDATA02137() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02137.push(vote_macron); 
    vote_lepen_02137.push(vote_lepen);
    vote_rejet_02137.push(vote_rejet);
    vote_macronpop_02137.push(vote_macronMediane);
    vote_lepenpop_02137.push(vote_lepenMediane);
    vote_rejetpop_02137.push(vote_rejetMediane);
    name_Commune_02137.push(nameCommune);
    Pourcentage_02137.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02137.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02137.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02137.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02137.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02137 = [];
const vote_lepen_02137 = [];
const vote_rejet_02137 = [];
const vote_macronpop_02137 = [];
const vote_lepenpop_02137 = [];
const vote_rejetpop_02137 = [];
const name_Commune_02137 = [];
const Pourcentage_02137 = [];
const Pourcentage_rejet_02137 = [];
const vote_gene_macron_02137 = [];
const vote_gene_lepen_02137 = [];
const vote_gene_rejet_02137 = [];

async function chartIt02137(){
    await GraphDATA02137();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02137-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02137
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02137
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02137-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02137,vote_lepen_02137,vote_rejet_02137]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02137-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02137,vote_lepenpop_02137,vote_rejetpop_02137]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02137"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02137
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02137
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02137
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02138*/
/*------------------------------------------------------------------ */
async function GraphDATA02138() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02138.push(vote_macron); 
    vote_lepen_02138.push(vote_lepen);
    vote_rejet_02138.push(vote_rejet);
    vote_macronpop_02138.push(vote_macronMediane);
    vote_lepenpop_02138.push(vote_lepenMediane);
    vote_rejetpop_02138.push(vote_rejetMediane);
    name_Commune_02138.push(nameCommune);
    Pourcentage_02138.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02138.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02138.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02138.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02138.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02138 = [];
const vote_lepen_02138 = [];
const vote_rejet_02138 = [];
const vote_macronpop_02138 = [];
const vote_lepenpop_02138 = [];
const vote_rejetpop_02138 = [];
const name_Commune_02138 = [];
const Pourcentage_02138 = [];
const Pourcentage_rejet_02138 = [];
const vote_gene_macron_02138 = [];
const vote_gene_lepen_02138 = [];
const vote_gene_rejet_02138 = [];

async function chartIt02138(){
    await GraphDATA02138();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02138-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02138
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02138
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02138-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02138,vote_lepen_02138,vote_rejet_02138]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02138-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02138,vote_lepenpop_02138,vote_rejetpop_02138]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02138"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02138
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02138
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02138
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02139*/
/*------------------------------------------------------------------ */
async function GraphDATA02139() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02139.push(vote_macron); 
    vote_lepen_02139.push(vote_lepen);
    vote_rejet_02139.push(vote_rejet);
    vote_macronpop_02139.push(vote_macronMediane);
    vote_lepenpop_02139.push(vote_lepenMediane);
    vote_rejetpop_02139.push(vote_rejetMediane);
    name_Commune_02139.push(nameCommune);
    Pourcentage_02139.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02139.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02139.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02139.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02139.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02139 = [];
const vote_lepen_02139 = [];
const vote_rejet_02139 = [];
const vote_macronpop_02139 = [];
const vote_lepenpop_02139 = [];
const vote_rejetpop_02139 = [];
const name_Commune_02139 = [];
const Pourcentage_02139 = [];
const Pourcentage_rejet_02139 = [];
const vote_gene_macron_02139 = [];
const vote_gene_lepen_02139 = [];
const vote_gene_rejet_02139 = [];

async function chartIt02139(){
    await GraphDATA02139();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02139-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02139
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02139
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02139-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02139,vote_lepen_02139,vote_rejet_02139]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02139-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02139,vote_lepenpop_02139,vote_rejetpop_02139]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02139"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02139
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02139
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02139
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02140*/
/*------------------------------------------------------------------ */
async function GraphDATA02140() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02140.push(vote_macron); 
    vote_lepen_02140.push(vote_lepen);
    vote_rejet_02140.push(vote_rejet);
    vote_macronpop_02140.push(vote_macronMediane);
    vote_lepenpop_02140.push(vote_lepenMediane);
    vote_rejetpop_02140.push(vote_rejetMediane);
    name_Commune_02140.push(nameCommune);
    Pourcentage_02140.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02140.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02140.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02140.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02140.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02140 = [];
const vote_lepen_02140 = [];
const vote_rejet_02140 = [];
const vote_macronpop_02140 = [];
const vote_lepenpop_02140 = [];
const vote_rejetpop_02140 = [];
const name_Commune_02140 = [];
const Pourcentage_02140 = [];
const Pourcentage_rejet_02140 = [];
const vote_gene_macron_02140 = [];
const vote_gene_lepen_02140 = [];
const vote_gene_rejet_02140 = [];

async function chartIt02140(){
    await GraphDATA02140();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02140-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02140
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02140
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02140-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02140,vote_lepen_02140,vote_rejet_02140]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02140-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02140,vote_lepenpop_02140,vote_rejetpop_02140]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02140"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02140
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02140
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02140
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02141*/
/*------------------------------------------------------------------ */
async function GraphDATA02141() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02141.push(vote_macron); 
    vote_lepen_02141.push(vote_lepen);
    vote_rejet_02141.push(vote_rejet);
    vote_macronpop_02141.push(vote_macronMediane);
    vote_lepenpop_02141.push(vote_lepenMediane);
    vote_rejetpop_02141.push(vote_rejetMediane);
    name_Commune_02141.push(nameCommune);
    Pourcentage_02141.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02141.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02141.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02141.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02141.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02141 = [];
const vote_lepen_02141 = [];
const vote_rejet_02141 = [];
const vote_macronpop_02141 = [];
const vote_lepenpop_02141 = [];
const vote_rejetpop_02141 = [];
const name_Commune_02141 = [];
const Pourcentage_02141 = [];
const Pourcentage_rejet_02141 = [];
const vote_gene_macron_02141 = [];
const vote_gene_lepen_02141 = [];
const vote_gene_rejet_02141 = [];

async function chartIt02141(){
    await GraphDATA02141();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02141-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02141
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02141
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02141-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02141,vote_lepen_02141,vote_rejet_02141]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02141-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02141,vote_lepenpop_02141,vote_rejetpop_02141]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02141"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02141
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02141
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02141
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02142*/
/*------------------------------------------------------------------ */
async function GraphDATA02142() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02142.push(vote_macron); 
    vote_lepen_02142.push(vote_lepen);
    vote_rejet_02142.push(vote_rejet);
    vote_macronpop_02142.push(vote_macronMediane);
    vote_lepenpop_02142.push(vote_lepenMediane);
    vote_rejetpop_02142.push(vote_rejetMediane);
    name_Commune_02142.push(nameCommune);
    Pourcentage_02142.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02142.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02142.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02142.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02142.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02142 = [];
const vote_lepen_02142 = [];
const vote_rejet_02142 = [];
const vote_macronpop_02142 = [];
const vote_lepenpop_02142 = [];
const vote_rejetpop_02142 = [];
const name_Commune_02142 = [];
const Pourcentage_02142 = [];
const Pourcentage_rejet_02142 = [];
const vote_gene_macron_02142 = [];
const vote_gene_lepen_02142 = [];
const vote_gene_rejet_02142 = [];

async function chartIt02142(){
    await GraphDATA02142();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02142-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02142
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02142
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02142-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02142,vote_lepen_02142,vote_rejet_02142]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02142-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02142,vote_lepenpop_02142,vote_rejetpop_02142]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02142"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02142
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02142
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02142
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02143*/
/*------------------------------------------------------------------ */
async function GraphDATA02143() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02143.push(vote_macron); 
    vote_lepen_02143.push(vote_lepen);
    vote_rejet_02143.push(vote_rejet);
    vote_macronpop_02143.push(vote_macronMediane);
    vote_lepenpop_02143.push(vote_lepenMediane);
    vote_rejetpop_02143.push(vote_rejetMediane);
    name_Commune_02143.push(nameCommune);
    Pourcentage_02143.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02143.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02143.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02143.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02143.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02143 = [];
const vote_lepen_02143 = [];
const vote_rejet_02143 = [];
const vote_macronpop_02143 = [];
const vote_lepenpop_02143 = [];
const vote_rejetpop_02143 = [];
const name_Commune_02143 = [];
const Pourcentage_02143 = [];
const Pourcentage_rejet_02143 = [];
const vote_gene_macron_02143 = [];
const vote_gene_lepen_02143 = [];
const vote_gene_rejet_02143 = [];

async function chartIt02143(){
    await GraphDATA02143();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02143-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02143
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02143
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02143-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02143,vote_lepen_02143,vote_rejet_02143]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02143-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02143,vote_lepenpop_02143,vote_rejetpop_02143]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02143"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02143
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02143
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02143
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02144*/
/*------------------------------------------------------------------ */
async function GraphDATA02144() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02144.push(vote_macron); 
    vote_lepen_02144.push(vote_lepen);
    vote_rejet_02144.push(vote_rejet);
    vote_macronpop_02144.push(vote_macronMediane);
    vote_lepenpop_02144.push(vote_lepenMediane);
    vote_rejetpop_02144.push(vote_rejetMediane);
    name_Commune_02144.push(nameCommune);
    Pourcentage_02144.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02144.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02144.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02144.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02144.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02144 = [];
const vote_lepen_02144 = [];
const vote_rejet_02144 = [];
const vote_macronpop_02144 = [];
const vote_lepenpop_02144 = [];
const vote_rejetpop_02144 = [];
const name_Commune_02144 = [];
const Pourcentage_02144 = [];
const Pourcentage_rejet_02144 = [];
const vote_gene_macron_02144 = [];
const vote_gene_lepen_02144 = [];
const vote_gene_rejet_02144 = [];

async function chartIt02144(){
    await GraphDATA02144();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02144-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02144
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02144
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02144-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02144,vote_lepen_02144,vote_rejet_02144]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02144-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02144,vote_lepenpop_02144,vote_rejetpop_02144]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02144"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02144
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02144
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02144
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02145*/
/*------------------------------------------------------------------ */
async function GraphDATA02145() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02145.push(vote_macron); 
    vote_lepen_02145.push(vote_lepen);
    vote_rejet_02145.push(vote_rejet);
    vote_macronpop_02145.push(vote_macronMediane);
    vote_lepenpop_02145.push(vote_lepenMediane);
    vote_rejetpop_02145.push(vote_rejetMediane);
    name_Commune_02145.push(nameCommune);
    Pourcentage_02145.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02145.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02145.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02145.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02145.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02145 = [];
const vote_lepen_02145 = [];
const vote_rejet_02145 = [];
const vote_macronpop_02145 = [];
const vote_lepenpop_02145 = [];
const vote_rejetpop_02145 = [];
const name_Commune_02145 = [];
const Pourcentage_02145 = [];
const Pourcentage_rejet_02145 = [];
const vote_gene_macron_02145 = [];
const vote_gene_lepen_02145 = [];
const vote_gene_rejet_02145 = [];

async function chartIt02145(){
    await GraphDATA02145();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02145-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02145
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02145
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02145-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02145,vote_lepen_02145,vote_rejet_02145]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02145-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02145,vote_lepenpop_02145,vote_rejetpop_02145]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02145"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02145
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02145
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02145
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02146*/
/*------------------------------------------------------------------ */
async function GraphDATA02146() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02146.push(vote_macron); 
    vote_lepen_02146.push(vote_lepen);
    vote_rejet_02146.push(vote_rejet);
    vote_macronpop_02146.push(vote_macronMediane);
    vote_lepenpop_02146.push(vote_lepenMediane);
    vote_rejetpop_02146.push(vote_rejetMediane);
    name_Commune_02146.push(nameCommune);
    Pourcentage_02146.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02146.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02146.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02146.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02146.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02146 = [];
const vote_lepen_02146 = [];
const vote_rejet_02146 = [];
const vote_macronpop_02146 = [];
const vote_lepenpop_02146 = [];
const vote_rejetpop_02146 = [];
const name_Commune_02146 = [];
const Pourcentage_02146 = [];
const Pourcentage_rejet_02146 = [];
const vote_gene_macron_02146 = [];
const vote_gene_lepen_02146 = [];
const vote_gene_rejet_02146 = [];

async function chartIt02146(){
    await GraphDATA02146();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02146-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02146
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02146
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02146-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02146,vote_lepen_02146,vote_rejet_02146]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02146-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02146,vote_lepenpop_02146,vote_rejetpop_02146]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02146"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02146
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02146
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02146
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02147*/
/*------------------------------------------------------------------ */
async function GraphDATA02147() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02147.push(vote_macron); 
    vote_lepen_02147.push(vote_lepen);
    vote_rejet_02147.push(vote_rejet);
    vote_macronpop_02147.push(vote_macronMediane);
    vote_lepenpop_02147.push(vote_lepenMediane);
    vote_rejetpop_02147.push(vote_rejetMediane);
    name_Commune_02147.push(nameCommune);
    Pourcentage_02147.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02147.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02147.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02147.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02147.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02147 = [];
const vote_lepen_02147 = [];
const vote_rejet_02147 = [];
const vote_macronpop_02147 = [];
const vote_lepenpop_02147 = [];
const vote_rejetpop_02147 = [];
const name_Commune_02147 = [];
const Pourcentage_02147 = [];
const Pourcentage_rejet_02147 = [];
const vote_gene_macron_02147 = [];
const vote_gene_lepen_02147 = [];
const vote_gene_rejet_02147 = [];

async function chartIt02147(){
    await GraphDATA02147();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02147-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02147
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02147
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02147-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02147,vote_lepen_02147,vote_rejet_02147]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02147-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02147,vote_lepenpop_02147,vote_rejetpop_02147]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02147"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02147
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02147
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02147
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02148*/
/*------------------------------------------------------------------ */
async function GraphDATA02148() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02148.push(vote_macron); 
    vote_lepen_02148.push(vote_lepen);
    vote_rejet_02148.push(vote_rejet);
    vote_macronpop_02148.push(vote_macronMediane);
    vote_lepenpop_02148.push(vote_lepenMediane);
    vote_rejetpop_02148.push(vote_rejetMediane);
    name_Commune_02148.push(nameCommune);
    Pourcentage_02148.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02148.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02148.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02148.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02148.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02148 = [];
const vote_lepen_02148 = [];
const vote_rejet_02148 = [];
const vote_macronpop_02148 = [];
const vote_lepenpop_02148 = [];
const vote_rejetpop_02148 = [];
const name_Commune_02148 = [];
const Pourcentage_02148 = [];
const Pourcentage_rejet_02148 = [];
const vote_gene_macron_02148 = [];
const vote_gene_lepen_02148 = [];
const vote_gene_rejet_02148 = [];

async function chartIt02148(){
    await GraphDATA02148();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02148-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02148
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02148
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02148-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02148,vote_lepen_02148,vote_rejet_02148]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02148-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02148,vote_lepenpop_02148,vote_rejetpop_02148]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02148"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02148
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02148
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02148
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02149*/
/*------------------------------------------------------------------ */
async function GraphDATA02149() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02149.push(vote_macron); 
    vote_lepen_02149.push(vote_lepen);
    vote_rejet_02149.push(vote_rejet);
    vote_macronpop_02149.push(vote_macronMediane);
    vote_lepenpop_02149.push(vote_lepenMediane);
    vote_rejetpop_02149.push(vote_rejetMediane);
    name_Commune_02149.push(nameCommune);
    Pourcentage_02149.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02149.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02149.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02149.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02149.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02149 = [];
const vote_lepen_02149 = [];
const vote_rejet_02149 = [];
const vote_macronpop_02149 = [];
const vote_lepenpop_02149 = [];
const vote_rejetpop_02149 = [];
const name_Commune_02149 = [];
const Pourcentage_02149 = [];
const Pourcentage_rejet_02149 = [];
const vote_gene_macron_02149 = [];
const vote_gene_lepen_02149 = [];
const vote_gene_rejet_02149 = [];

async function chartIt02149(){
    await GraphDATA02149();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02149-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02149
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02149
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02149-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02149,vote_lepen_02149,vote_rejet_02149]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02149-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02149,vote_lepenpop_02149,vote_rejetpop_02149]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02149"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02149
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02149
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02149
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02150*/
/*------------------------------------------------------------------ */
async function GraphDATA02150() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02150.push(vote_macron); 
    vote_lepen_02150.push(vote_lepen);
    vote_rejet_02150.push(vote_rejet);
    vote_macronpop_02150.push(vote_macronMediane);
    vote_lepenpop_02150.push(vote_lepenMediane);
    vote_rejetpop_02150.push(vote_rejetMediane);
    name_Commune_02150.push(nameCommune);
    Pourcentage_02150.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02150.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02150.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02150.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02150.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02150 = [];
const vote_lepen_02150 = [];
const vote_rejet_02150 = [];
const vote_macronpop_02150 = [];
const vote_lepenpop_02150 = [];
const vote_rejetpop_02150 = [];
const name_Commune_02150 = [];
const Pourcentage_02150 = [];
const Pourcentage_rejet_02150 = [];
const vote_gene_macron_02150 = [];
const vote_gene_lepen_02150 = [];
const vote_gene_rejet_02150 = [];

async function chartIt02150(){
    await GraphDATA02150();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02150-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02150
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02150
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02150-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02150,vote_lepen_02150,vote_rejet_02150]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02150-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02150,vote_lepenpop_02150,vote_rejetpop_02150]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02150"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02150
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02150
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02150
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02151*/
/*------------------------------------------------------------------ */
async function GraphDATA02151() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02151.push(vote_macron); 
    vote_lepen_02151.push(vote_lepen);
    vote_rejet_02151.push(vote_rejet);
    vote_macronpop_02151.push(vote_macronMediane);
    vote_lepenpop_02151.push(vote_lepenMediane);
    vote_rejetpop_02151.push(vote_rejetMediane);
    name_Commune_02151.push(nameCommune);
    Pourcentage_02151.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02151.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02151.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02151.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02151.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02151 = [];
const vote_lepen_02151 = [];
const vote_rejet_02151 = [];
const vote_macronpop_02151 = [];
const vote_lepenpop_02151 = [];
const vote_rejetpop_02151 = [];
const name_Commune_02151 = [];
const Pourcentage_02151 = [];
const Pourcentage_rejet_02151 = [];
const vote_gene_macron_02151 = [];
const vote_gene_lepen_02151 = [];
const vote_gene_rejet_02151 = [];

async function chartIt02151(){
    await GraphDATA02151();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02151-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02151
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02151
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02151-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02151,vote_lepen_02151,vote_rejet_02151]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02151-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02151,vote_lepenpop_02151,vote_rejetpop_02151]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02151"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02151
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02151
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02151
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02152*/
/*------------------------------------------------------------------ */
async function GraphDATA02152() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02152.push(vote_macron); 
    vote_lepen_02152.push(vote_lepen);
    vote_rejet_02152.push(vote_rejet);
    vote_macronpop_02152.push(vote_macronMediane);
    vote_lepenpop_02152.push(vote_lepenMediane);
    vote_rejetpop_02152.push(vote_rejetMediane);
    name_Commune_02152.push(nameCommune);
    Pourcentage_02152.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02152.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02152.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02152.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02152.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02152 = [];
const vote_lepen_02152 = [];
const vote_rejet_02152 = [];
const vote_macronpop_02152 = [];
const vote_lepenpop_02152 = [];
const vote_rejetpop_02152 = [];
const name_Commune_02152 = [];
const Pourcentage_02152 = [];
const Pourcentage_rejet_02152 = [];
const vote_gene_macron_02152 = [];
const vote_gene_lepen_02152 = [];
const vote_gene_rejet_02152 = [];

async function chartIt02152(){
    await GraphDATA02152();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02152-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02152
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02152
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02152-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02152,vote_lepen_02152,vote_rejet_02152]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02152-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02152,vote_lepenpop_02152,vote_rejetpop_02152]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02152"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02152
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02152
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02152
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02153*/
/*------------------------------------------------------------------ */
async function GraphDATA02153() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02153.push(vote_macron); 
    vote_lepen_02153.push(vote_lepen);
    vote_rejet_02153.push(vote_rejet);
    vote_macronpop_02153.push(vote_macronMediane);
    vote_lepenpop_02153.push(vote_lepenMediane);
    vote_rejetpop_02153.push(vote_rejetMediane);
    name_Commune_02153.push(nameCommune);
    Pourcentage_02153.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02153.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02153.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02153.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02153.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02153 = [];
const vote_lepen_02153 = [];
const vote_rejet_02153 = [];
const vote_macronpop_02153 = [];
const vote_lepenpop_02153 = [];
const vote_rejetpop_02153 = [];
const name_Commune_02153 = [];
const Pourcentage_02153 = [];
const Pourcentage_rejet_02153 = [];
const vote_gene_macron_02153 = [];
const vote_gene_lepen_02153 = [];
const vote_gene_rejet_02153 = [];

async function chartIt02153(){
    await GraphDATA02153();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02153-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02153
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02153
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02153-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02153,vote_lepen_02153,vote_rejet_02153]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02153-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02153,vote_lepenpop_02153,vote_rejetpop_02153]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02153"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02153
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02153
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02153
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02154*/
/*------------------------------------------------------------------ */
async function GraphDATA02154() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02154.push(vote_macron); 
    vote_lepen_02154.push(vote_lepen);
    vote_rejet_02154.push(vote_rejet);
    vote_macronpop_02154.push(vote_macronMediane);
    vote_lepenpop_02154.push(vote_lepenMediane);
    vote_rejetpop_02154.push(vote_rejetMediane);
    name_Commune_02154.push(nameCommune);
    Pourcentage_02154.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02154.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02154.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02154.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02154.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02154 = [];
const vote_lepen_02154 = [];
const vote_rejet_02154 = [];
const vote_macronpop_02154 = [];
const vote_lepenpop_02154 = [];
const vote_rejetpop_02154 = [];
const name_Commune_02154 = [];
const Pourcentage_02154 = [];
const Pourcentage_rejet_02154 = [];
const vote_gene_macron_02154 = [];
const vote_gene_lepen_02154 = [];
const vote_gene_rejet_02154 = [];

async function chartIt02154(){
    await GraphDATA02154();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02154-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02154
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02154
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02154-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02154,vote_lepen_02154,vote_rejet_02154]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02154-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02154,vote_lepenpop_02154,vote_rejetpop_02154]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02154"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02154
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02154
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02154
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02155*/
/*------------------------------------------------------------------ */
async function GraphDATA02155() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02155.push(vote_macron); 
    vote_lepen_02155.push(vote_lepen);
    vote_rejet_02155.push(vote_rejet);
    vote_macronpop_02155.push(vote_macronMediane);
    vote_lepenpop_02155.push(vote_lepenMediane);
    vote_rejetpop_02155.push(vote_rejetMediane);
    name_Commune_02155.push(nameCommune);
    Pourcentage_02155.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02155.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02155.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02155.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02155.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02155 = [];
const vote_lepen_02155 = [];
const vote_rejet_02155 = [];
const vote_macronpop_02155 = [];
const vote_lepenpop_02155 = [];
const vote_rejetpop_02155 = [];
const name_Commune_02155 = [];
const Pourcentage_02155 = [];
const Pourcentage_rejet_02155 = [];
const vote_gene_macron_02155 = [];
const vote_gene_lepen_02155 = [];
const vote_gene_rejet_02155 = [];

async function chartIt02155(){
    await GraphDATA02155();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02155-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02155
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02155
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02155-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02155,vote_lepen_02155,vote_rejet_02155]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02155-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02155,vote_lepenpop_02155,vote_rejetpop_02155]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02155"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02155
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02155
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02155
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02156*/
/*------------------------------------------------------------------ */
async function GraphDATA02156() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02156.push(vote_macron); 
    vote_lepen_02156.push(vote_lepen);
    vote_rejet_02156.push(vote_rejet);
    vote_macronpop_02156.push(vote_macronMediane);
    vote_lepenpop_02156.push(vote_lepenMediane);
    vote_rejetpop_02156.push(vote_rejetMediane);
    name_Commune_02156.push(nameCommune);
    Pourcentage_02156.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02156.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02156.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02156.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02156.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02156 = [];
const vote_lepen_02156 = [];
const vote_rejet_02156 = [];
const vote_macronpop_02156 = [];
const vote_lepenpop_02156 = [];
const vote_rejetpop_02156 = [];
const name_Commune_02156 = [];
const Pourcentage_02156 = [];
const Pourcentage_rejet_02156 = [];
const vote_gene_macron_02156 = [];
const vote_gene_lepen_02156 = [];
const vote_gene_rejet_02156 = [];

async function chartIt02156(){
    await GraphDATA02156();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02156-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02156
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02156
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02156-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02156,vote_lepen_02156,vote_rejet_02156]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02156-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02156,vote_lepenpop_02156,vote_rejetpop_02156]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02156"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02156
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02156
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02156
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02157*/
/*------------------------------------------------------------------ */
async function GraphDATA02157() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02157.push(vote_macron); 
    vote_lepen_02157.push(vote_lepen);
    vote_rejet_02157.push(vote_rejet);
    vote_macronpop_02157.push(vote_macronMediane);
    vote_lepenpop_02157.push(vote_lepenMediane);
    vote_rejetpop_02157.push(vote_rejetMediane);
    name_Commune_02157.push(nameCommune);
    Pourcentage_02157.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02157.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02157.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02157.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02157.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02157 = [];
const vote_lepen_02157 = [];
const vote_rejet_02157 = [];
const vote_macronpop_02157 = [];
const vote_lepenpop_02157 = [];
const vote_rejetpop_02157 = [];
const name_Commune_02157 = [];
const Pourcentage_02157 = [];
const Pourcentage_rejet_02157 = [];
const vote_gene_macron_02157 = [];
const vote_gene_lepen_02157 = [];
const vote_gene_rejet_02157 = [];

async function chartIt02157(){
    await GraphDATA02157();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02157-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02157
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02157
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02157-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02157,vote_lepen_02157,vote_rejet_02157]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02157-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02157,vote_lepenpop_02157,vote_rejetpop_02157]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02157"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02157
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02157
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02157
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02158*/
/*------------------------------------------------------------------ */
async function GraphDATA02158() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02158.push(vote_macron); 
    vote_lepen_02158.push(vote_lepen);
    vote_rejet_02158.push(vote_rejet);
    vote_macronpop_02158.push(vote_macronMediane);
    vote_lepenpop_02158.push(vote_lepenMediane);
    vote_rejetpop_02158.push(vote_rejetMediane);
    name_Commune_02158.push(nameCommune);
    Pourcentage_02158.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02158.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02158.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02158.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02158.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02158 = [];
const vote_lepen_02158 = [];
const vote_rejet_02158 = [];
const vote_macronpop_02158 = [];
const vote_lepenpop_02158 = [];
const vote_rejetpop_02158 = [];
const name_Commune_02158 = [];
const Pourcentage_02158 = [];
const Pourcentage_rejet_02158 = [];
const vote_gene_macron_02158 = [];
const vote_gene_lepen_02158 = [];
const vote_gene_rejet_02158 = [];

async function chartIt02158(){
    await GraphDATA02158();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02158-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02158
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02158
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02158-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02158,vote_lepen_02158,vote_rejet_02158]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02158-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02158,vote_lepenpop_02158,vote_rejetpop_02158]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02158"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02158
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02158
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02158
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02159*/
/*------------------------------------------------------------------ */
async function GraphDATA02159() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02159.push(vote_macron); 
    vote_lepen_02159.push(vote_lepen);
    vote_rejet_02159.push(vote_rejet);
    vote_macronpop_02159.push(vote_macronMediane);
    vote_lepenpop_02159.push(vote_lepenMediane);
    vote_rejetpop_02159.push(vote_rejetMediane);
    name_Commune_02159.push(nameCommune);
    Pourcentage_02159.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02159.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02159.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02159.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02159.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02159 = [];
const vote_lepen_02159 = [];
const vote_rejet_02159 = [];
const vote_macronpop_02159 = [];
const vote_lepenpop_02159 = [];
const vote_rejetpop_02159 = [];
const name_Commune_02159 = [];
const Pourcentage_02159 = [];
const Pourcentage_rejet_02159 = [];
const vote_gene_macron_02159 = [];
const vote_gene_lepen_02159 = [];
const vote_gene_rejet_02159 = [];

async function chartIt02159(){
    await GraphDATA02159();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02159-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02159
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02159
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02159-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02159,vote_lepen_02159,vote_rejet_02159]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02159-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02159,vote_lepenpop_02159,vote_rejetpop_02159]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02159"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02159
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02159
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02159
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02160*/
/*------------------------------------------------------------------ */
async function GraphDATA02160() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02160.push(vote_macron); 
    vote_lepen_02160.push(vote_lepen);
    vote_rejet_02160.push(vote_rejet);
    vote_macronpop_02160.push(vote_macronMediane);
    vote_lepenpop_02160.push(vote_lepenMediane);
    vote_rejetpop_02160.push(vote_rejetMediane);
    name_Commune_02160.push(nameCommune);
    Pourcentage_02160.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02160.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02160.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02160.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02160.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02160 = [];
const vote_lepen_02160 = [];
const vote_rejet_02160 = [];
const vote_macronpop_02160 = [];
const vote_lepenpop_02160 = [];
const vote_rejetpop_02160 = [];
const name_Commune_02160 = [];
const Pourcentage_02160 = [];
const Pourcentage_rejet_02160 = [];
const vote_gene_macron_02160 = [];
const vote_gene_lepen_02160 = [];
const vote_gene_rejet_02160 = [];

async function chartIt02160(){
    await GraphDATA02160();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02160-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02160
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02160
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02160-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02160,vote_lepen_02160,vote_rejet_02160]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02160-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02160,vote_lepenpop_02160,vote_rejetpop_02160]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02160"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02160
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02160
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02160
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02161*/
/*------------------------------------------------------------------ */
async function GraphDATA02161() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02161.push(vote_macron); 
    vote_lepen_02161.push(vote_lepen);
    vote_rejet_02161.push(vote_rejet);
    vote_macronpop_02161.push(vote_macronMediane);
    vote_lepenpop_02161.push(vote_lepenMediane);
    vote_rejetpop_02161.push(vote_rejetMediane);
    name_Commune_02161.push(nameCommune);
    Pourcentage_02161.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02161.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02161.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02161.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02161.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02161 = [];
const vote_lepen_02161 = [];
const vote_rejet_02161 = [];
const vote_macronpop_02161 = [];
const vote_lepenpop_02161 = [];
const vote_rejetpop_02161 = [];
const name_Commune_02161 = [];
const Pourcentage_02161 = [];
const Pourcentage_rejet_02161 = [];
const vote_gene_macron_02161 = [];
const vote_gene_lepen_02161 = [];
const vote_gene_rejet_02161 = [];

async function chartIt02161(){
    await GraphDATA02161();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02161-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02161
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02161
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02161-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02161,vote_lepen_02161,vote_rejet_02161]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02161-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02161,vote_lepenpop_02161,vote_rejetpop_02161]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02161"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02161
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02161
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02161
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02162*/
/*------------------------------------------------------------------ */
async function GraphDATA02162() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
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
    vote_macron_02162.push(vote_macron); 
    vote_lepen_02162.push(vote_lepen);
    vote_rejet_02162.push(vote_rejet);
    vote_macronpop_02162.push(vote_macronMediane);
    vote_lepenpop_02162.push(vote_lepenMediane);
    vote_rejetpop_02162.push(vote_rejetMediane);
    name_Commune_02162.push(nameCommune);
    Pourcentage_02162.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02162.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02162.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02162.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02162.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02162 = [];
const vote_lepen_02162 = [];
const vote_rejet_02162 = [];
const vote_macronpop_02162 = [];
const vote_lepenpop_02162 = [];
const vote_rejetpop_02162 = [];
const name_Commune_02162 = [];
const Pourcentage_02162 = [];
const Pourcentage_rejet_02162 = [];
const vote_gene_macron_02162 = [];
const vote_gene_lepen_02162 = [];
const vote_gene_rejet_02162 = [];

async function chartIt02162(){
    await GraphDATA02162();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02162-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02162
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02162
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02162-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02162,vote_lepen_02162,vote_rejet_02162]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02162-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02162,vote_lepenpop_02162,vote_rejetpop_02162]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02162"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02162
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02162
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02162
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02163*/
/*------------------------------------------------------------------ */
async function GraphDATA02163() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[162];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02163.push(vote_macron); 
    vote_lepen_02163.push(vote_lepen);
    vote_rejet_02163.push(vote_rejet);
    vote_macronpop_02163.push(vote_macronMediane);
    vote_lepenpop_02163.push(vote_lepenMediane);
    vote_rejetpop_02163.push(vote_rejetMediane);
    name_Commune_02163.push(nameCommune);
    Pourcentage_02163.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02163.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02163.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02163.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02163.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02163 = [];
const vote_lepen_02163 = [];
const vote_rejet_02163 = [];
const vote_macronpop_02163 = [];
const vote_lepenpop_02163 = [];
const vote_rejetpop_02163 = [];
const name_Commune_02163 = [];
const Pourcentage_02163 = [];
const Pourcentage_rejet_02163 = [];
const vote_gene_macron_02163 = [];
const vote_gene_lepen_02163 = [];
const vote_gene_rejet_02163 = [];

async function chartIt02163(){
    await GraphDATA02163();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02163-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02163
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02163
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02163-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02163,vote_lepen_02163,vote_rejet_02163]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02163-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02163,vote_lepenpop_02163,vote_rejetpop_02163]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02163"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02163
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02163
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02163
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02164*/
/*------------------------------------------------------------------ */
async function GraphDATA02164() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[163];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02164.push(vote_macron); 
    vote_lepen_02164.push(vote_lepen);
    vote_rejet_02164.push(vote_rejet);
    vote_macronpop_02164.push(vote_macronMediane);
    vote_lepenpop_02164.push(vote_lepenMediane);
    vote_rejetpop_02164.push(vote_rejetMediane);
    name_Commune_02164.push(nameCommune);
    Pourcentage_02164.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02164.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02164.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02164.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02164.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02164 = [];
const vote_lepen_02164 = [];
const vote_rejet_02164 = [];
const vote_macronpop_02164 = [];
const vote_lepenpop_02164 = [];
const vote_rejetpop_02164 = [];
const name_Commune_02164 = [];
const Pourcentage_02164 = [];
const Pourcentage_rejet_02164 = [];
const vote_gene_macron_02164 = [];
const vote_gene_lepen_02164 = [];
const vote_gene_rejet_02164 = [];

async function chartIt02164(){
    await GraphDATA02164();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02164-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02164
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02164
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02164-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02164,vote_lepen_02164,vote_rejet_02164]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02164-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02164,vote_lepenpop_02164,vote_rejetpop_02164]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02164"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02164
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02164
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02164
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02165*/
/*------------------------------------------------------------------ */
async function GraphDATA02165() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[164];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02165.push(vote_macron); 
    vote_lepen_02165.push(vote_lepen);
    vote_rejet_02165.push(vote_rejet);
    vote_macronpop_02165.push(vote_macronMediane);
    vote_lepenpop_02165.push(vote_lepenMediane);
    vote_rejetpop_02165.push(vote_rejetMediane);
    name_Commune_02165.push(nameCommune);
    Pourcentage_02165.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02165.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02165.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02165.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02165.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02165 = [];
const vote_lepen_02165 = [];
const vote_rejet_02165 = [];
const vote_macronpop_02165 = [];
const vote_lepenpop_02165 = [];
const vote_rejetpop_02165 = [];
const name_Commune_02165 = [];
const Pourcentage_02165 = [];
const Pourcentage_rejet_02165 = [];
const vote_gene_macron_02165 = [];
const vote_gene_lepen_02165 = [];
const vote_gene_rejet_02165 = [];

async function chartIt02165(){
    await GraphDATA02165();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02165-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02165
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02165
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02165-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02165,vote_lepen_02165,vote_rejet_02165]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02165-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02165,vote_lepenpop_02165,vote_rejetpop_02165]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02165"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02165
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02165
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02165
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02166*/
/*------------------------------------------------------------------ */
async function GraphDATA02166() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[165];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02166.push(vote_macron); 
    vote_lepen_02166.push(vote_lepen);
    vote_rejet_02166.push(vote_rejet);
    vote_macronpop_02166.push(vote_macronMediane);
    vote_lepenpop_02166.push(vote_lepenMediane);
    vote_rejetpop_02166.push(vote_rejetMediane);
    name_Commune_02166.push(nameCommune);
    Pourcentage_02166.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02166.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02166.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02166.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02166.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02166 = [];
const vote_lepen_02166 = [];
const vote_rejet_02166 = [];
const vote_macronpop_02166 = [];
const vote_lepenpop_02166 = [];
const vote_rejetpop_02166 = [];
const name_Commune_02166 = [];
const Pourcentage_02166 = [];
const Pourcentage_rejet_02166 = [];
const vote_gene_macron_02166 = [];
const vote_gene_lepen_02166 = [];
const vote_gene_rejet_02166 = [];

async function chartIt02166(){
    await GraphDATA02166();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02166-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02166
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02166
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02166-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02166,vote_lepen_02166,vote_rejet_02166]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02166-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02166,vote_lepenpop_02166,vote_rejetpop_02166]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02166"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02166
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02166
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02166
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02167*/
/*------------------------------------------------------------------ */
async function GraphDATA02167() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[166];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02167.push(vote_macron); 
    vote_lepen_02167.push(vote_lepen);
    vote_rejet_02167.push(vote_rejet);
    vote_macronpop_02167.push(vote_macronMediane);
    vote_lepenpop_02167.push(vote_lepenMediane);
    vote_rejetpop_02167.push(vote_rejetMediane);
    name_Commune_02167.push(nameCommune);
    Pourcentage_02167.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02167.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02167.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02167.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02167.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02167 = [];
const vote_lepen_02167 = [];
const vote_rejet_02167 = [];
const vote_macronpop_02167 = [];
const vote_lepenpop_02167 = [];
const vote_rejetpop_02167 = [];
const name_Commune_02167 = [];
const Pourcentage_02167 = [];
const Pourcentage_rejet_02167 = [];
const vote_gene_macron_02167 = [];
const vote_gene_lepen_02167 = [];
const vote_gene_rejet_02167 = [];

async function chartIt02167(){
    await GraphDATA02167();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02167-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02167
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02167
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02167-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02167,vote_lepen_02167,vote_rejet_02167]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02167-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02167,vote_lepenpop_02167,vote_rejetpop_02167]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02167"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02167
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02167
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02167
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02168*/
/*------------------------------------------------------------------ */
async function GraphDATA02168() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[167];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02168.push(vote_macron); 
    vote_lepen_02168.push(vote_lepen);
    vote_rejet_02168.push(vote_rejet);
    vote_macronpop_02168.push(vote_macronMediane);
    vote_lepenpop_02168.push(vote_lepenMediane);
    vote_rejetpop_02168.push(vote_rejetMediane);
    name_Commune_02168.push(nameCommune);
    Pourcentage_02168.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02168.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02168.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02168.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02168.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02168 = [];
const vote_lepen_02168 = [];
const vote_rejet_02168 = [];
const vote_macronpop_02168 = [];
const vote_lepenpop_02168 = [];
const vote_rejetpop_02168 = [];
const name_Commune_02168 = [];
const Pourcentage_02168 = [];
const Pourcentage_rejet_02168 = [];
const vote_gene_macron_02168 = [];
const vote_gene_lepen_02168 = [];
const vote_gene_rejet_02168 = [];

async function chartIt02168(){
    await GraphDATA02168();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02168-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02168
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02168
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02168-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02168,vote_lepen_02168,vote_rejet_02168]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02168-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02168,vote_lepenpop_02168,vote_rejetpop_02168]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02168"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02168
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02168
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02168
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02169*/
/*------------------------------------------------------------------ */
async function GraphDATA02169() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[168];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02169.push(vote_macron); 
    vote_lepen_02169.push(vote_lepen);
    vote_rejet_02169.push(vote_rejet);
    vote_macronpop_02169.push(vote_macronMediane);
    vote_lepenpop_02169.push(vote_lepenMediane);
    vote_rejetpop_02169.push(vote_rejetMediane);
    name_Commune_02169.push(nameCommune);
    Pourcentage_02169.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02169.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02169.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02169.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02169.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02169 = [];
const vote_lepen_02169 = [];
const vote_rejet_02169 = [];
const vote_macronpop_02169 = [];
const vote_lepenpop_02169 = [];
const vote_rejetpop_02169 = [];
const name_Commune_02169 = [];
const Pourcentage_02169 = [];
const Pourcentage_rejet_02169 = [];
const vote_gene_macron_02169 = [];
const vote_gene_lepen_02169 = [];
const vote_gene_rejet_02169 = [];

async function chartIt02169(){
    await GraphDATA02169();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02169-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02169
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02169
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02169-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02169,vote_lepen_02169,vote_rejet_02169]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02169-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02169,vote_lepenpop_02169,vote_rejetpop_02169]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02169"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02169
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02169
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02169
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02170*/
/*------------------------------------------------------------------ */
async function GraphDATA02170() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[169];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02170.push(vote_macron); 
    vote_lepen_02170.push(vote_lepen);
    vote_rejet_02170.push(vote_rejet);
    vote_macronpop_02170.push(vote_macronMediane);
    vote_lepenpop_02170.push(vote_lepenMediane);
    vote_rejetpop_02170.push(vote_rejetMediane);
    name_Commune_02170.push(nameCommune);
    Pourcentage_02170.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02170.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02170.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02170.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02170.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02170 = [];
const vote_lepen_02170 = [];
const vote_rejet_02170 = [];
const vote_macronpop_02170 = [];
const vote_lepenpop_02170 = [];
const vote_rejetpop_02170 = [];
const name_Commune_02170 = [];
const Pourcentage_02170 = [];
const Pourcentage_rejet_02170 = [];
const vote_gene_macron_02170 = [];
const vote_gene_lepen_02170 = [];
const vote_gene_rejet_02170 = [];

async function chartIt02170(){
    await GraphDATA02170();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02170-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02170
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02170
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02170-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02170,vote_lepen_02170,vote_rejet_02170]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02170-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02170,vote_lepenpop_02170,vote_rejetpop_02170]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02170"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02170
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02170
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02170
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02171*/
/*------------------------------------------------------------------ */
async function GraphDATA02171() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[170];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02171.push(vote_macron); 
    vote_lepen_02171.push(vote_lepen);
    vote_rejet_02171.push(vote_rejet);
    vote_macronpop_02171.push(vote_macronMediane);
    vote_lepenpop_02171.push(vote_lepenMediane);
    vote_rejetpop_02171.push(vote_rejetMediane);
    name_Commune_02171.push(nameCommune);
    Pourcentage_02171.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02171.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02171.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02171.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02171.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02171 = [];
const vote_lepen_02171 = [];
const vote_rejet_02171 = [];
const vote_macronpop_02171 = [];
const vote_lepenpop_02171 = [];
const vote_rejetpop_02171 = [];
const name_Commune_02171 = [];
const Pourcentage_02171 = [];
const Pourcentage_rejet_02171 = [];
const vote_gene_macron_02171 = [];
const vote_gene_lepen_02171 = [];
const vote_gene_rejet_02171 = [];

async function chartIt02171(){
    await GraphDATA02171();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02171-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02171
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02171
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02171-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02171,vote_lepen_02171,vote_rejet_02171]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02171-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02171,vote_lepenpop_02171,vote_rejetpop_02171]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02171"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02171
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02171
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02171
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02172*/
/*------------------------------------------------------------------ */
async function GraphDATA02172() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[171];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02172.push(vote_macron); 
    vote_lepen_02172.push(vote_lepen);
    vote_rejet_02172.push(vote_rejet);
    vote_macronpop_02172.push(vote_macronMediane);
    vote_lepenpop_02172.push(vote_lepenMediane);
    vote_rejetpop_02172.push(vote_rejetMediane);
    name_Commune_02172.push(nameCommune);
    Pourcentage_02172.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02172.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02172.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02172.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02172.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02172 = [];
const vote_lepen_02172 = [];
const vote_rejet_02172 = [];
const vote_macronpop_02172 = [];
const vote_lepenpop_02172 = [];
const vote_rejetpop_02172 = [];
const name_Commune_02172 = [];
const Pourcentage_02172 = [];
const Pourcentage_rejet_02172 = [];
const vote_gene_macron_02172 = [];
const vote_gene_lepen_02172 = [];
const vote_gene_rejet_02172 = [];

async function chartIt02172(){
    await GraphDATA02172();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02172-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02172
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02172
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02172-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02172,vote_lepen_02172,vote_rejet_02172]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02172-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02172,vote_lepenpop_02172,vote_rejetpop_02172]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02172"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02172
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02172
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02172
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02173*/
/*------------------------------------------------------------------ */
async function GraphDATA02173() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[172];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02173.push(vote_macron); 
    vote_lepen_02173.push(vote_lepen);
    vote_rejet_02173.push(vote_rejet);
    vote_macronpop_02173.push(vote_macronMediane);
    vote_lepenpop_02173.push(vote_lepenMediane);
    vote_rejetpop_02173.push(vote_rejetMediane);
    name_Commune_02173.push(nameCommune);
    Pourcentage_02173.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02173.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02173.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02173.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02173.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02173 = [];
const vote_lepen_02173 = [];
const vote_rejet_02173 = [];
const vote_macronpop_02173 = [];
const vote_lepenpop_02173 = [];
const vote_rejetpop_02173 = [];
const name_Commune_02173 = [];
const Pourcentage_02173 = [];
const Pourcentage_rejet_02173 = [];
const vote_gene_macron_02173 = [];
const vote_gene_lepen_02173 = [];
const vote_gene_rejet_02173 = [];

async function chartIt02173(){
    await GraphDATA02173();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02173-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02173
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02173
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02173-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02173,vote_lepen_02173,vote_rejet_02173]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02173-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02173,vote_lepenpop_02173,vote_rejetpop_02173]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02173"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02173
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02173
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02173
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02174*/
/*------------------------------------------------------------------ */
async function GraphDATA02174() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[173];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02174.push(vote_macron); 
    vote_lepen_02174.push(vote_lepen);
    vote_rejet_02174.push(vote_rejet);
    vote_macronpop_02174.push(vote_macronMediane);
    vote_lepenpop_02174.push(vote_lepenMediane);
    vote_rejetpop_02174.push(vote_rejetMediane);
    name_Commune_02174.push(nameCommune);
    Pourcentage_02174.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02174.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02174.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02174.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02174.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02174 = [];
const vote_lepen_02174 = [];
const vote_rejet_02174 = [];
const vote_macronpop_02174 = [];
const vote_lepenpop_02174 = [];
const vote_rejetpop_02174 = [];
const name_Commune_02174 = [];
const Pourcentage_02174 = [];
const Pourcentage_rejet_02174 = [];
const vote_gene_macron_02174 = [];
const vote_gene_lepen_02174 = [];
const vote_gene_rejet_02174 = [];

async function chartIt02174(){
    await GraphDATA02174();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02174-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02174
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02174
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02174-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02174,vote_lepen_02174,vote_rejet_02174]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02174-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02174,vote_lepenpop_02174,vote_rejetpop_02174]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02174"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02174
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02174
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02174
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02175*/
/*------------------------------------------------------------------ */
async function GraphDATA02175() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[174];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02175.push(vote_macron); 
    vote_lepen_02175.push(vote_lepen);
    vote_rejet_02175.push(vote_rejet);
    vote_macronpop_02175.push(vote_macronMediane);
    vote_lepenpop_02175.push(vote_lepenMediane);
    vote_rejetpop_02175.push(vote_rejetMediane);
    name_Commune_02175.push(nameCommune);
    Pourcentage_02175.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02175.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02175.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02175.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02175.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02175 = [];
const vote_lepen_02175 = [];
const vote_rejet_02175 = [];
const vote_macronpop_02175 = [];
const vote_lepenpop_02175 = [];
const vote_rejetpop_02175 = [];
const name_Commune_02175 = [];
const Pourcentage_02175 = [];
const Pourcentage_rejet_02175 = [];
const vote_gene_macron_02175 = [];
const vote_gene_lepen_02175 = [];
const vote_gene_rejet_02175 = [];

async function chartIt02175(){
    await GraphDATA02175();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02175-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02175
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02175
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02175-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02175,vote_lepen_02175,vote_rejet_02175]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02175-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02175,vote_lepenpop_02175,vote_rejetpop_02175]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02175"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02175
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02175
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02175
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02176*/
/*------------------------------------------------------------------ */
async function GraphDATA02176() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[175];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02176.push(vote_macron); 
    vote_lepen_02176.push(vote_lepen);
    vote_rejet_02176.push(vote_rejet);
    vote_macronpop_02176.push(vote_macronMediane);
    vote_lepenpop_02176.push(vote_lepenMediane);
    vote_rejetpop_02176.push(vote_rejetMediane);
    name_Commune_02176.push(nameCommune);
    Pourcentage_02176.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02176.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02176.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02176.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02176.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02176 = [];
const vote_lepen_02176 = [];
const vote_rejet_02176 = [];
const vote_macronpop_02176 = [];
const vote_lepenpop_02176 = [];
const vote_rejetpop_02176 = [];
const name_Commune_02176 = [];
const Pourcentage_02176 = [];
const Pourcentage_rejet_02176 = [];
const vote_gene_macron_02176 = [];
const vote_gene_lepen_02176 = [];
const vote_gene_rejet_02176 = [];

async function chartIt02176(){
    await GraphDATA02176();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02176-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02176
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02176
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02176-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02176,vote_lepen_02176,vote_rejet_02176]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02176-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02176,vote_lepenpop_02176,vote_rejetpop_02176]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02176"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02176
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02176
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02176
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02177*/
/*------------------------------------------------------------------ */
async function GraphDATA02177() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[176];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02177.push(vote_macron); 
    vote_lepen_02177.push(vote_lepen);
    vote_rejet_02177.push(vote_rejet);
    vote_macronpop_02177.push(vote_macronMediane);
    vote_lepenpop_02177.push(vote_lepenMediane);
    vote_rejetpop_02177.push(vote_rejetMediane);
    name_Commune_02177.push(nameCommune);
    Pourcentage_02177.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02177.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02177.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02177.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02177.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02177 = [];
const vote_lepen_02177 = [];
const vote_rejet_02177 = [];
const vote_macronpop_02177 = [];
const vote_lepenpop_02177 = [];
const vote_rejetpop_02177 = [];
const name_Commune_02177 = [];
const Pourcentage_02177 = [];
const Pourcentage_rejet_02177 = [];
const vote_gene_macron_02177 = [];
const vote_gene_lepen_02177 = [];
const vote_gene_rejet_02177 = [];

async function chartIt02177(){
    await GraphDATA02177();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02177-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02177
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02177
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02177-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02177,vote_lepen_02177,vote_rejet_02177]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02177-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02177,vote_lepenpop_02177,vote_rejetpop_02177]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02177"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02177
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02177
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02177
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02178*/
/*------------------------------------------------------------------ */
async function GraphDATA02178() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[177];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02178.push(vote_macron); 
    vote_lepen_02178.push(vote_lepen);
    vote_rejet_02178.push(vote_rejet);
    vote_macronpop_02178.push(vote_macronMediane);
    vote_lepenpop_02178.push(vote_lepenMediane);
    vote_rejetpop_02178.push(vote_rejetMediane);
    name_Commune_02178.push(nameCommune);
    Pourcentage_02178.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02178.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02178.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02178.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02178.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02178 = [];
const vote_lepen_02178 = [];
const vote_rejet_02178 = [];
const vote_macronpop_02178 = [];
const vote_lepenpop_02178 = [];
const vote_rejetpop_02178 = [];
const name_Commune_02178 = [];
const Pourcentage_02178 = [];
const Pourcentage_rejet_02178 = [];
const vote_gene_macron_02178 = [];
const vote_gene_lepen_02178 = [];
const vote_gene_rejet_02178 = [];

async function chartIt02178(){
    await GraphDATA02178();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02178-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02178
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02178
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02178-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02178,vote_lepen_02178,vote_rejet_02178]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02178-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02178,vote_lepenpop_02178,vote_rejetpop_02178]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02178"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02178
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02178
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02178
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02179*/
/*------------------------------------------------------------------ */
async function GraphDATA02179() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[178];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02179.push(vote_macron); 
    vote_lepen_02179.push(vote_lepen);
    vote_rejet_02179.push(vote_rejet);
    vote_macronpop_02179.push(vote_macronMediane);
    vote_lepenpop_02179.push(vote_lepenMediane);
    vote_rejetpop_02179.push(vote_rejetMediane);
    name_Commune_02179.push(nameCommune);
    Pourcentage_02179.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02179.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02179.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02179.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02179.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02179 = [];
const vote_lepen_02179 = [];
const vote_rejet_02179 = [];
const vote_macronpop_02179 = [];
const vote_lepenpop_02179 = [];
const vote_rejetpop_02179 = [];
const name_Commune_02179 = [];
const Pourcentage_02179 = [];
const Pourcentage_rejet_02179 = [];
const vote_gene_macron_02179 = [];
const vote_gene_lepen_02179 = [];
const vote_gene_rejet_02179 = [];

async function chartIt02179(){
    await GraphDATA02179();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02179-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02179
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02179
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02179-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02179,vote_lepen_02179,vote_rejet_02179]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02179-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02179,vote_lepenpop_02179,vote_rejetpop_02179]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02179"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02179
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02179
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02179
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02180*/
/*------------------------------------------------------------------ */
async function GraphDATA02180() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[179];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02180.push(vote_macron); 
    vote_lepen_02180.push(vote_lepen);
    vote_rejet_02180.push(vote_rejet);
    vote_macronpop_02180.push(vote_macronMediane);
    vote_lepenpop_02180.push(vote_lepenMediane);
    vote_rejetpop_02180.push(vote_rejetMediane);
    name_Commune_02180.push(nameCommune);
    Pourcentage_02180.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02180.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02180.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02180.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02180.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02180 = [];
const vote_lepen_02180 = [];
const vote_rejet_02180 = [];
const vote_macronpop_02180 = [];
const vote_lepenpop_02180 = [];
const vote_rejetpop_02180 = [];
const name_Commune_02180 = [];
const Pourcentage_02180 = [];
const Pourcentage_rejet_02180 = [];
const vote_gene_macron_02180 = [];
const vote_gene_lepen_02180 = [];
const vote_gene_rejet_02180 = [];

async function chartIt02180(){
    await GraphDATA02180();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02180-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02180
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02180
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02180-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02180,vote_lepen_02180,vote_rejet_02180]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02180-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02180,vote_lepenpop_02180,vote_rejetpop_02180]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02180"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02180
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02180
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02180
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02181*/
/*------------------------------------------------------------------ */
async function GraphDATA02181() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[180];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02181.push(vote_macron); 
    vote_lepen_02181.push(vote_lepen);
    vote_rejet_02181.push(vote_rejet);
    vote_macronpop_02181.push(vote_macronMediane);
    vote_lepenpop_02181.push(vote_lepenMediane);
    vote_rejetpop_02181.push(vote_rejetMediane);
    name_Commune_02181.push(nameCommune);
    Pourcentage_02181.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02181.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02181.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02181.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02181.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02181 = [];
const vote_lepen_02181 = [];
const vote_rejet_02181 = [];
const vote_macronpop_02181 = [];
const vote_lepenpop_02181 = [];
const vote_rejetpop_02181 = [];
const name_Commune_02181 = [];
const Pourcentage_02181 = [];
const Pourcentage_rejet_02181 = [];
const vote_gene_macron_02181 = [];
const vote_gene_lepen_02181 = [];
const vote_gene_rejet_02181 = [];

async function chartIt02181(){
    await GraphDATA02181();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02181-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02181
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02181
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02181-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02181,vote_lepen_02181,vote_rejet_02181]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02181-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02181,vote_lepenpop_02181,vote_rejetpop_02181]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02181"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02181
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02181
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02181
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02182*/
/*------------------------------------------------------------------ */
async function GraphDATA02182() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[181];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02182.push(vote_macron); 
    vote_lepen_02182.push(vote_lepen);
    vote_rejet_02182.push(vote_rejet);
    vote_macronpop_02182.push(vote_macronMediane);
    vote_lepenpop_02182.push(vote_lepenMediane);
    vote_rejetpop_02182.push(vote_rejetMediane);
    name_Commune_02182.push(nameCommune);
    Pourcentage_02182.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02182.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02182.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02182.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02182.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02182 = [];
const vote_lepen_02182 = [];
const vote_rejet_02182 = [];
const vote_macronpop_02182 = [];
const vote_lepenpop_02182 = [];
const vote_rejetpop_02182 = [];
const name_Commune_02182 = [];
const Pourcentage_02182 = [];
const Pourcentage_rejet_02182 = [];
const vote_gene_macron_02182 = [];
const vote_gene_lepen_02182 = [];
const vote_gene_rejet_02182 = [];

async function chartIt02182(){
    await GraphDATA02182();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02182-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02182
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02182
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02182-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02182,vote_lepen_02182,vote_rejet_02182]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02182-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02182,vote_lepenpop_02182,vote_rejetpop_02182]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02182"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02182
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02182
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02182
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02183*/
/*------------------------------------------------------------------ */
async function GraphDATA02183() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[182];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02183.push(vote_macron); 
    vote_lepen_02183.push(vote_lepen);
    vote_rejet_02183.push(vote_rejet);
    vote_macronpop_02183.push(vote_macronMediane);
    vote_lepenpop_02183.push(vote_lepenMediane);
    vote_rejetpop_02183.push(vote_rejetMediane);
    name_Commune_02183.push(nameCommune);
    Pourcentage_02183.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02183.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02183.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02183.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02183.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02183 = [];
const vote_lepen_02183 = [];
const vote_rejet_02183 = [];
const vote_macronpop_02183 = [];
const vote_lepenpop_02183 = [];
const vote_rejetpop_02183 = [];
const name_Commune_02183 = [];
const Pourcentage_02183 = [];
const Pourcentage_rejet_02183 = [];
const vote_gene_macron_02183 = [];
const vote_gene_lepen_02183 = [];
const vote_gene_rejet_02183 = [];

async function chartIt02183(){
    await GraphDATA02183();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02183-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02183
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02183
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02183-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02183,vote_lepen_02183,vote_rejet_02183]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02183-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02183,vote_lepenpop_02183,vote_rejetpop_02183]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02183"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02183
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02183
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02183
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02184*/
/*------------------------------------------------------------------ */
async function GraphDATA02184() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[183];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02184.push(vote_macron); 
    vote_lepen_02184.push(vote_lepen);
    vote_rejet_02184.push(vote_rejet);
    vote_macronpop_02184.push(vote_macronMediane);
    vote_lepenpop_02184.push(vote_lepenMediane);
    vote_rejetpop_02184.push(vote_rejetMediane);
    name_Commune_02184.push(nameCommune);
    Pourcentage_02184.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02184.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02184.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02184.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02184.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02184 = [];
const vote_lepen_02184 = [];
const vote_rejet_02184 = [];
const vote_macronpop_02184 = [];
const vote_lepenpop_02184 = [];
const vote_rejetpop_02184 = [];
const name_Commune_02184 = [];
const Pourcentage_02184 = [];
const Pourcentage_rejet_02184 = [];
const vote_gene_macron_02184 = [];
const vote_gene_lepen_02184 = [];
const vote_gene_rejet_02184 = [];

async function chartIt02184(){
    await GraphDATA02184();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02184-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02184
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02184
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02184-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02184,vote_lepen_02184,vote_rejet_02184]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02184-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02184,vote_lepenpop_02184,vote_rejetpop_02184]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02184"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02184
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02184
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02184
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02185*/
/*------------------------------------------------------------------ */
async function GraphDATA02185() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[184];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02185.push(vote_macron); 
    vote_lepen_02185.push(vote_lepen);
    vote_rejet_02185.push(vote_rejet);
    vote_macronpop_02185.push(vote_macronMediane);
    vote_lepenpop_02185.push(vote_lepenMediane);
    vote_rejetpop_02185.push(vote_rejetMediane);
    name_Commune_02185.push(nameCommune);
    Pourcentage_02185.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02185.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02185.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02185.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02185.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02185 = [];
const vote_lepen_02185 = [];
const vote_rejet_02185 = [];
const vote_macronpop_02185 = [];
const vote_lepenpop_02185 = [];
const vote_rejetpop_02185 = [];
const name_Commune_02185 = [];
const Pourcentage_02185 = [];
const Pourcentage_rejet_02185 = [];
const vote_gene_macron_02185 = [];
const vote_gene_lepen_02185 = [];
const vote_gene_rejet_02185 = [];

async function chartIt02185(){
    await GraphDATA02185();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02185-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02185
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02185
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02185-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02185,vote_lepen_02185,vote_rejet_02185]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02185-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02185,vote_lepenpop_02185,vote_rejetpop_02185]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02185"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02185
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02185
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02185
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02186*/
/*------------------------------------------------------------------ */
async function GraphDATA02186() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[185];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02186.push(vote_macron); 
    vote_lepen_02186.push(vote_lepen);
    vote_rejet_02186.push(vote_rejet);
    vote_macronpop_02186.push(vote_macronMediane);
    vote_lepenpop_02186.push(vote_lepenMediane);
    vote_rejetpop_02186.push(vote_rejetMediane);
    name_Commune_02186.push(nameCommune);
    Pourcentage_02186.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02186.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02186.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02186.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02186.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02186 = [];
const vote_lepen_02186 = [];
const vote_rejet_02186 = [];
const vote_macronpop_02186 = [];
const vote_lepenpop_02186 = [];
const vote_rejetpop_02186 = [];
const name_Commune_02186 = [];
const Pourcentage_02186 = [];
const Pourcentage_rejet_02186 = [];
const vote_gene_macron_02186 = [];
const vote_gene_lepen_02186 = [];
const vote_gene_rejet_02186 = [];

async function chartIt02186(){
    await GraphDATA02186();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02186-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02186
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02186
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02186-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02186,vote_lepen_02186,vote_rejet_02186]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02186-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02186,vote_lepenpop_02186,vote_rejetpop_02186]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02186"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02186
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02186
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02186
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02187*/
/*------------------------------------------------------------------ */
async function GraphDATA02187() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[186];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02187.push(vote_macron); 
    vote_lepen_02187.push(vote_lepen);
    vote_rejet_02187.push(vote_rejet);
    vote_macronpop_02187.push(vote_macronMediane);
    vote_lepenpop_02187.push(vote_lepenMediane);
    vote_rejetpop_02187.push(vote_rejetMediane);
    name_Commune_02187.push(nameCommune);
    Pourcentage_02187.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02187.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02187.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02187.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02187.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02187 = [];
const vote_lepen_02187 = [];
const vote_rejet_02187 = [];
const vote_macronpop_02187 = [];
const vote_lepenpop_02187 = [];
const vote_rejetpop_02187 = [];
const name_Commune_02187 = [];
const Pourcentage_02187 = [];
const Pourcentage_rejet_02187 = [];
const vote_gene_macron_02187 = [];
const vote_gene_lepen_02187 = [];
const vote_gene_rejet_02187 = [];

async function chartIt02187(){
    await GraphDATA02187();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02187-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02187
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02187
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02187-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02187,vote_lepen_02187,vote_rejet_02187]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02187-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02187,vote_lepenpop_02187,vote_rejetpop_02187]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02187"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02187
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02187
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02187
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02188*/
/*------------------------------------------------------------------ */
async function GraphDATA02188() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[187];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02188.push(vote_macron); 
    vote_lepen_02188.push(vote_lepen);
    vote_rejet_02188.push(vote_rejet);
    vote_macronpop_02188.push(vote_macronMediane);
    vote_lepenpop_02188.push(vote_lepenMediane);
    vote_rejetpop_02188.push(vote_rejetMediane);
    name_Commune_02188.push(nameCommune);
    Pourcentage_02188.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02188.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02188.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02188.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02188.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02188 = [];
const vote_lepen_02188 = [];
const vote_rejet_02188 = [];
const vote_macronpop_02188 = [];
const vote_lepenpop_02188 = [];
const vote_rejetpop_02188 = [];
const name_Commune_02188 = [];
const Pourcentage_02188 = [];
const Pourcentage_rejet_02188 = [];
const vote_gene_macron_02188 = [];
const vote_gene_lepen_02188 = [];
const vote_gene_rejet_02188 = [];

async function chartIt02188(){
    await GraphDATA02188();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02188-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02188
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02188
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02188-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02188,vote_lepen_02188,vote_rejet_02188]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02188-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02188,vote_lepenpop_02188,vote_rejetpop_02188]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02188"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02188
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02188
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02188
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02189*/
/*------------------------------------------------------------------ */
async function GraphDATA02189() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[188];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02189.push(vote_macron); 
    vote_lepen_02189.push(vote_lepen);
    vote_rejet_02189.push(vote_rejet);
    vote_macronpop_02189.push(vote_macronMediane);
    vote_lepenpop_02189.push(vote_lepenMediane);
    vote_rejetpop_02189.push(vote_rejetMediane);
    name_Commune_02189.push(nameCommune);
    Pourcentage_02189.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02189.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02189.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02189.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02189.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02189 = [];
const vote_lepen_02189 = [];
const vote_rejet_02189 = [];
const vote_macronpop_02189 = [];
const vote_lepenpop_02189 = [];
const vote_rejetpop_02189 = [];
const name_Commune_02189 = [];
const Pourcentage_02189 = [];
const Pourcentage_rejet_02189 = [];
const vote_gene_macron_02189 = [];
const vote_gene_lepen_02189 = [];
const vote_gene_rejet_02189 = [];

async function chartIt02189(){
    await GraphDATA02189();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02189-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02189
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02189
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02189-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02189,vote_lepen_02189,vote_rejet_02189]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02189-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02189,vote_lepenpop_02189,vote_rejetpop_02189]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02189"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02189
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02189
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02189
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02190*/
/*------------------------------------------------------------------ */
async function GraphDATA02190() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[189];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02190.push(vote_macron); 
    vote_lepen_02190.push(vote_lepen);
    vote_rejet_02190.push(vote_rejet);
    vote_macronpop_02190.push(vote_macronMediane);
    vote_lepenpop_02190.push(vote_lepenMediane);
    vote_rejetpop_02190.push(vote_rejetMediane);
    name_Commune_02190.push(nameCommune);
    Pourcentage_02190.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02190.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02190.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02190.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02190.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02190 = [];
const vote_lepen_02190 = [];
const vote_rejet_02190 = [];
const vote_macronpop_02190 = [];
const vote_lepenpop_02190 = [];
const vote_rejetpop_02190 = [];
const name_Commune_02190 = [];
const Pourcentage_02190 = [];
const Pourcentage_rejet_02190 = [];
const vote_gene_macron_02190 = [];
const vote_gene_lepen_02190 = [];
const vote_gene_rejet_02190 = [];

async function chartIt02190(){
    await GraphDATA02190();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02190-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02190
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02190
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02190-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02190,vote_lepen_02190,vote_rejet_02190]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02190-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02190,vote_lepenpop_02190,vote_rejetpop_02190]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02190"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02190
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02190
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02190
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02191*/
/*------------------------------------------------------------------ */
async function GraphDATA02191() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[190];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02191.push(vote_macron); 
    vote_lepen_02191.push(vote_lepen);
    vote_rejet_02191.push(vote_rejet);
    vote_macronpop_02191.push(vote_macronMediane);
    vote_lepenpop_02191.push(vote_lepenMediane);
    vote_rejetpop_02191.push(vote_rejetMediane);
    name_Commune_02191.push(nameCommune);
    Pourcentage_02191.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02191.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02191.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02191.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02191.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02191 = [];
const vote_lepen_02191 = [];
const vote_rejet_02191 = [];
const vote_macronpop_02191 = [];
const vote_lepenpop_02191 = [];
const vote_rejetpop_02191 = [];
const name_Commune_02191 = [];
const Pourcentage_02191 = [];
const Pourcentage_rejet_02191 = [];
const vote_gene_macron_02191 = [];
const vote_gene_lepen_02191 = [];
const vote_gene_rejet_02191 = [];

async function chartIt02191(){
    await GraphDATA02191();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02191-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02191
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02191
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02191-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02191,vote_lepen_02191,vote_rejet_02191]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02191-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02191,vote_lepenpop_02191,vote_rejetpop_02191]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02191"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02191
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02191
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02191
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02192*/
/*------------------------------------------------------------------ */
async function GraphDATA02192() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[191];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02192.push(vote_macron); 
    vote_lepen_02192.push(vote_lepen);
    vote_rejet_02192.push(vote_rejet);
    vote_macronpop_02192.push(vote_macronMediane);
    vote_lepenpop_02192.push(vote_lepenMediane);
    vote_rejetpop_02192.push(vote_rejetMediane);
    name_Commune_02192.push(nameCommune);
    Pourcentage_02192.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02192.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02192.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02192.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02192.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02192 = [];
const vote_lepen_02192 = [];
const vote_rejet_02192 = [];
const vote_macronpop_02192 = [];
const vote_lepenpop_02192 = [];
const vote_rejetpop_02192 = [];
const name_Commune_02192 = [];
const Pourcentage_02192 = [];
const Pourcentage_rejet_02192 = [];
const vote_gene_macron_02192 = [];
const vote_gene_lepen_02192 = [];
const vote_gene_rejet_02192 = [];

async function chartIt02192(){
    await GraphDATA02192();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02192-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02192
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02192
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02192-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02192,vote_lepen_02192,vote_rejet_02192]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02192-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02192,vote_lepenpop_02192,vote_rejetpop_02192]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02192"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02192
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02192
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02192
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02193*/
/*------------------------------------------------------------------ */
async function GraphDATA02193() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[192];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02193.push(vote_macron); 
    vote_lepen_02193.push(vote_lepen);
    vote_rejet_02193.push(vote_rejet);
    vote_macronpop_02193.push(vote_macronMediane);
    vote_lepenpop_02193.push(vote_lepenMediane);
    vote_rejetpop_02193.push(vote_rejetMediane);
    name_Commune_02193.push(nameCommune);
    Pourcentage_02193.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02193.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02193.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02193.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02193.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02193 = [];
const vote_lepen_02193 = [];
const vote_rejet_02193 = [];
const vote_macronpop_02193 = [];
const vote_lepenpop_02193 = [];
const vote_rejetpop_02193 = [];
const name_Commune_02193 = [];
const Pourcentage_02193 = [];
const Pourcentage_rejet_02193 = [];
const vote_gene_macron_02193 = [];
const vote_gene_lepen_02193 = [];
const vote_gene_rejet_02193 = [];

async function chartIt02193(){
    await GraphDATA02193();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02193-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02193
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02193
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02193-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02193,vote_lepen_02193,vote_rejet_02193]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02193-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02193,vote_lepenpop_02193,vote_rejetpop_02193]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02193"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02193
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02193
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02193
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02194*/
/*------------------------------------------------------------------ */
async function GraphDATA02194() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[193];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02194.push(vote_macron); 
    vote_lepen_02194.push(vote_lepen);
    vote_rejet_02194.push(vote_rejet);
    vote_macronpop_02194.push(vote_macronMediane);
    vote_lepenpop_02194.push(vote_lepenMediane);
    vote_rejetpop_02194.push(vote_rejetMediane);
    name_Commune_02194.push(nameCommune);
    Pourcentage_02194.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02194.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02194.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02194.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02194.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02194 = [];
const vote_lepen_02194 = [];
const vote_rejet_02194 = [];
const vote_macronpop_02194 = [];
const vote_lepenpop_02194 = [];
const vote_rejetpop_02194 = [];
const name_Commune_02194 = [];
const Pourcentage_02194 = [];
const Pourcentage_rejet_02194 = [];
const vote_gene_macron_02194 = [];
const vote_gene_lepen_02194 = [];
const vote_gene_rejet_02194 = [];

async function chartIt02194(){
    await GraphDATA02194();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02194-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02194
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02194
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02194-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02194,vote_lepen_02194,vote_rejet_02194]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02194-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02194,vote_lepenpop_02194,vote_rejetpop_02194]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02194"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02194
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02194
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02194
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02195*/
/*------------------------------------------------------------------ */
async function GraphDATA02195() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[194];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02195.push(vote_macron); 
    vote_lepen_02195.push(vote_lepen);
    vote_rejet_02195.push(vote_rejet);
    vote_macronpop_02195.push(vote_macronMediane);
    vote_lepenpop_02195.push(vote_lepenMediane);
    vote_rejetpop_02195.push(vote_rejetMediane);
    name_Commune_02195.push(nameCommune);
    Pourcentage_02195.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02195.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02195.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02195.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02195.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02195 = [];
const vote_lepen_02195 = [];
const vote_rejet_02195 = [];
const vote_macronpop_02195 = [];
const vote_lepenpop_02195 = [];
const vote_rejetpop_02195 = [];
const name_Commune_02195 = [];
const Pourcentage_02195 = [];
const Pourcentage_rejet_02195 = [];
const vote_gene_macron_02195 = [];
const vote_gene_lepen_02195 = [];
const vote_gene_rejet_02195 = [];

async function chartIt02195(){
    await GraphDATA02195();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02195-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02195
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02195
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02195-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02195,vote_lepen_02195,vote_rejet_02195]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02195-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02195,vote_lepenpop_02195,vote_rejetpop_02195]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02195"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02195
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02195
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02195
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02196*/
/*------------------------------------------------------------------ */
async function GraphDATA02196() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[195];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02196.push(vote_macron); 
    vote_lepen_02196.push(vote_lepen);
    vote_rejet_02196.push(vote_rejet);
    vote_macronpop_02196.push(vote_macronMediane);
    vote_lepenpop_02196.push(vote_lepenMediane);
    vote_rejetpop_02196.push(vote_rejetMediane);
    name_Commune_02196.push(nameCommune);
    Pourcentage_02196.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02196.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02196.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02196.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02196.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02196 = [];
const vote_lepen_02196 = [];
const vote_rejet_02196 = [];
const vote_macronpop_02196 = [];
const vote_lepenpop_02196 = [];
const vote_rejetpop_02196 = [];
const name_Commune_02196 = [];
const Pourcentage_02196 = [];
const Pourcentage_rejet_02196 = [];
const vote_gene_macron_02196 = [];
const vote_gene_lepen_02196 = [];
const vote_gene_rejet_02196 = [];

async function chartIt02196(){
    await GraphDATA02196();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02196-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02196
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02196
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02196-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02196,vote_lepen_02196,vote_rejet_02196]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02196-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02196,vote_lepenpop_02196,vote_rejetpop_02196]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02196"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02196
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02196
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02196
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02197*/
/*------------------------------------------------------------------ */
async function GraphDATA02197() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[196];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02197.push(vote_macron); 
    vote_lepen_02197.push(vote_lepen);
    vote_rejet_02197.push(vote_rejet);
    vote_macronpop_02197.push(vote_macronMediane);
    vote_lepenpop_02197.push(vote_lepenMediane);
    vote_rejetpop_02197.push(vote_rejetMediane);
    name_Commune_02197.push(nameCommune);
    Pourcentage_02197.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02197.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02197.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02197.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02197.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02197 = [];
const vote_lepen_02197 = [];
const vote_rejet_02197 = [];
const vote_macronpop_02197 = [];
const vote_lepenpop_02197 = [];
const vote_rejetpop_02197 = [];
const name_Commune_02197 = [];
const Pourcentage_02197 = [];
const Pourcentage_rejet_02197 = [];
const vote_gene_macron_02197 = [];
const vote_gene_lepen_02197 = [];
const vote_gene_rejet_02197 = [];

async function chartIt02197(){
    await GraphDATA02197();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02197-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02197
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02197
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02197-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02197,vote_lepen_02197,vote_rejet_02197]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02197-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02197,vote_lepenpop_02197,vote_rejetpop_02197]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02197"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02197
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02197
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02197
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02198*/
/*------------------------------------------------------------------ */
async function GraphDATA02198() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[197];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02198.push(vote_macron); 
    vote_lepen_02198.push(vote_lepen);
    vote_rejet_02198.push(vote_rejet);
    vote_macronpop_02198.push(vote_macronMediane);
    vote_lepenpop_02198.push(vote_lepenMediane);
    vote_rejetpop_02198.push(vote_rejetMediane);
    name_Commune_02198.push(nameCommune);
    Pourcentage_02198.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02198.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02198.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02198.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02198.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02198 = [];
const vote_lepen_02198 = [];
const vote_rejet_02198 = [];
const vote_macronpop_02198 = [];
const vote_lepenpop_02198 = [];
const vote_rejetpop_02198 = [];
const name_Commune_02198 = [];
const Pourcentage_02198 = [];
const Pourcentage_rejet_02198 = [];
const vote_gene_macron_02198 = [];
const vote_gene_lepen_02198 = [];
const vote_gene_rejet_02198 = [];

async function chartIt02198(){
    await GraphDATA02198();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02198-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02198
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02198
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02198-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02198,vote_lepen_02198,vote_rejet_02198]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02198-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02198,vote_lepenpop_02198,vote_rejetpop_02198]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02198"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02198
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02198
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02198
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 02199*/
/*------------------------------------------------------------------ */
async function GraphDATA02199() {
    const response = await fetch('../Departement02/Json/Data_dep02.json');
    const data = await response.json();
    /* Récupére le 1er groupe du fichier Data*/
    const rows = data[198];
    /*Récupere les données que je veut de la Commune */
    const nameCommune = rows.Libellé_de_la_commune;
    const nbr_Abs = rows.Abs_Ins;
    const nbr_Blc = rows.Blancs_Ins;
    const nbr_Nul = rows.Nuls_Ins;
    const vote_macron = rows.Voix_Ins_Macron;
    const vote_lepen = rows.Voix_Ins_Lepen;
    const vote_rejet = rows.Rejet_Pop_Officiel;
    const vote_macronMediane = rows.Pop_Médiane_Voix_Ins_Macron;
    const vote_lepenMediane = rows.Pop_Médiane_Voix_Ins_Lepen;
    const vote_rejetMediane = rows.Rejet_Pop_Médiane;
    vote_macron_02199.push(vote_macron); 
    vote_lepen_02199.push(vote_lepen);
    vote_rejet_02199.push(vote_rejet);
    vote_macronpop_02199.push(vote_macronMediane);
    vote_lepenpop_02199.push(vote_lepenMediane);
    vote_rejetpop_02199.push(vote_rejetMediane);
    name_Commune_02199.push(nameCommune);
    Pourcentage_02199.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_02199.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_02199.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_02199.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_02199.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_02199 = [];
const vote_lepen_02199 = [];
const vote_rejet_02199 = [];
const vote_macronpop_02199 = [];
const vote_lepenpop_02199 = [];
const vote_rejetpop_02199 = [];
const name_Commune_02199 = [];
const Pourcentage_02199 = [];
const Pourcentage_rejet_02199 = [];
const vote_gene_macron_02199 = [];
const vote_gene_lepen_02199 = [];
const vote_gene_rejet_02199 = [];

async function chartIt02199(){
    await GraphDATA02199();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_02199-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_02199
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_02199
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_02199-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_02199,vote_lepen_02199,vote_rejet_02199]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_02199-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_02199,vote_lepenpop_02199,vote_rejetpop_02199]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_02199"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_02199
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_02199
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_02199
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}