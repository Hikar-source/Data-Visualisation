/********************************************************************** */
/*JS GRAPHIQUE FICHIER DATA */
/********************************************************************** */
chartIt01101();
chartIt01102();
chartIt01103();
chartIt01104();
chartIt01105();
chartIt01106();
chartIt01107();
chartIt01108();
chartIt01109();
chartIt01110();
chartIt01111();
chartIt01112();
chartIt01113();
chartIt01114();
chartIt01115();
chartIt01116();
chartIt01117();
chartIt01118();
chartIt01119();
chartIt01120();
chartIt01121();
chartIt01122();
chartIt01123();
chartIt01124();
chartIt01125();
chartIt01126();
chartIt01127();
chartIt01128();
chartIt01129();
chartIt01130();
chartIt01131();
chartIt01132();
chartIt01133();
chartIt01134();
chartIt01135();
chartIt01136();
chartIt01137();
chartIt01138();
chartIt01139();
chartIt01140();
chartIt01141();
chartIt01142();
chartIt01143();
chartIt01144();
chartIt01145();
chartIt01146();
chartIt01147();
chartIt01148();
chartIt01149();
chartIt01150();
chartIt01151();
chartIt01152();
chartIt01153();
chartIt01154();
chartIt01155();
chartIt01156();
chartIt01157();
chartIt01158();
chartIt01159();
chartIt01160();
chartIt01161();
chartIt01162();
chartIt01163();
chartIt01164();
chartIt01165();
chartIt01166();
chartIt01167();
chartIt01168();
chartIt01169();
chartIt01170();
chartIt01171();
chartIt01172();
chartIt01173();
chartIt01174();
chartIt01175();
chartIt01176();
chartIt01177();
chartIt01178();
chartIt01179();
chartIt01180();
chartIt01181();
chartIt01182();
chartIt01183();
chartIt01184();
chartIt01185();
chartIt01186();
chartIt01187();
chartIt01188();
chartIt01189();
chartIt01190();
chartIt01191();
chartIt01192();
chartIt01193();
chartIt01194();
chartIt01195();
chartIt01196();
chartIt01197();
chartIt01198();
chartIt01199();
/*------------------------------------------------------------------ */
/*COMMUNE 01101*/
/*------------------------------------------------------------------ */
async function GraphDATA01101() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01101.push(vote_macron); 
    vote_lepen_01101.push(vote_lepen);
    vote_rejet_01101.push(vote_rejet);
    vote_macronpop_01101.push(vote_macronMediane);
    vote_lepenpop_01101.push(vote_lepenMediane);
    vote_rejetpop_01101.push(vote_rejetMediane);
    name_Commune_01101.push(nameCommune);
    Pourcentage_01101.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01101.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01101.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01101.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01101.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01101 = [];
const vote_lepen_01101 = [];
const vote_rejet_01101 = [];
const vote_macronpop_01101 = [];
const vote_lepenpop_01101 = [];
const vote_rejetpop_01101 = [];
const name_Commune_01101 = [];
const Pourcentage_01101 = [];
const Pourcentage_rejet_01101 = [];
const vote_gene_macron_01101 = [];
const vote_gene_lepen_01101 = [];
const vote_gene_rejet_01101 = [];

async function chartIt01101(){
    await GraphDATA01101();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01101-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01101
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01101
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01101-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01101,vote_lepen_01101,vote_rejet_01101]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01101-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01101,vote_lepenpop_01101,vote_rejetpop_01101]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01101"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01101
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01101
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01101
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01102*/
/*------------------------------------------------------------------ */
async function GraphDATA01102() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01102.push(vote_macron); 
    vote_lepen_01102.push(vote_lepen);
    vote_rejet_01102.push(vote_rejet);
    vote_macronpop_01102.push(vote_macronMediane);
    vote_lepenpop_01102.push(vote_lepenMediane);
    vote_rejetpop_01102.push(vote_rejetMediane);
    name_Commune_01102.push(nameCommune);
    Pourcentage_01102.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01102.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01102.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01102.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01102.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01102 = [];
const vote_lepen_01102 = [];
const vote_rejet_01102 = [];
const vote_macronpop_01102 = [];
const vote_lepenpop_01102 = [];
const vote_rejetpop_01102 = [];
const name_Commune_01102 = [];
const Pourcentage_01102 = [];
const Pourcentage_rejet_01102 = [];
const vote_gene_macron_01102 = [];
const vote_gene_lepen_01102 = [];
const vote_gene_rejet_01102 = [];

async function chartIt01102(){
    await GraphDATA01102();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01102-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01102
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01102
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01102-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01102,vote_lepen_01102,vote_rejet_01102]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01102-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01102,vote_lepenpop_01102,vote_rejetpop_01102]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01102"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01102
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01102
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01102
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01103*/
/*------------------------------------------------------------------ */
async function GraphDATA01103() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01103.push(vote_macron); 
    vote_lepen_01103.push(vote_lepen);
    vote_rejet_01103.push(vote_rejet);
    vote_macronpop_01103.push(vote_macronMediane);
    vote_lepenpop_01103.push(vote_lepenMediane);
    vote_rejetpop_01103.push(vote_rejetMediane);
    name_Commune_01103.push(nameCommune);
    Pourcentage_01103.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01103.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01103.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01103.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01103.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01103 = [];
const vote_lepen_01103 = [];
const vote_rejet_01103 = [];
const vote_macronpop_01103 = [];
const vote_lepenpop_01103 = [];
const vote_rejetpop_01103 = [];
const name_Commune_01103 = [];
const Pourcentage_01103 = [];
const Pourcentage_rejet_01103 = [];
const vote_gene_macron_01103 = [];
const vote_gene_lepen_01103 = [];
const vote_gene_rejet_01103 = [];

async function chartIt01103(){
    await GraphDATA01103();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01103-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01103
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01103
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01103-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01103,vote_lepen_01103,vote_rejet_01103]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01103-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01103,vote_lepenpop_01103,vote_rejetpop_01103]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01103"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01103
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01103
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01103
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01104*/
/*------------------------------------------------------------------ */
async function GraphDATA01104() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01104.push(vote_macron); 
    vote_lepen_01104.push(vote_lepen);
    vote_rejet_01104.push(vote_rejet);
    vote_macronpop_01104.push(vote_macronMediane);
    vote_lepenpop_01104.push(vote_lepenMediane);
    vote_rejetpop_01104.push(vote_rejetMediane);
    name_Commune_01104.push(nameCommune);
    Pourcentage_01104.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01104.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01104.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01104.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01104.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01104 = [];
const vote_lepen_01104 = [];
const vote_rejet_01104 = [];
const vote_macronpop_01104 = [];
const vote_lepenpop_01104 = [];
const vote_rejetpop_01104 = [];
const name_Commune_01104 = [];
const Pourcentage_01104 = [];
const Pourcentage_rejet_01104 = [];
const vote_gene_macron_01104 = [];
const vote_gene_lepen_01104 = [];
const vote_gene_rejet_01104 = [];

async function chartIt01104(){
    await GraphDATA01104();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01104-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01104
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01104
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01104-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01104,vote_lepen_01104,vote_rejet_01104]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01104-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01104,vote_lepenpop_01104,vote_rejetpop_01104]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01104"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01104
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01104
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01104
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01105*/
/*------------------------------------------------------------------ */
async function GraphDATA01105() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01105.push(vote_macron); 
    vote_lepen_01105.push(vote_lepen);
    vote_rejet_01105.push(vote_rejet);
    vote_macronpop_01105.push(vote_macronMediane);
    vote_lepenpop_01105.push(vote_lepenMediane);
    vote_rejetpop_01105.push(vote_rejetMediane);
    name_Commune_01105.push(nameCommune);
    Pourcentage_01105.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01105.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01105.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01105.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01105.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01105 = [];
const vote_lepen_01105 = [];
const vote_rejet_01105 = [];
const vote_macronpop_01105 = [];
const vote_lepenpop_01105 = [];
const vote_rejetpop_01105 = [];
const name_Commune_01105 = [];
const Pourcentage_01105 = [];
const Pourcentage_rejet_01105 = [];
const vote_gene_macron_01105 = [];
const vote_gene_lepen_01105 = [];
const vote_gene_rejet_01105 = [];

async function chartIt01105(){
    await GraphDATA01105();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01105-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01105
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01105
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01105-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01105,vote_lepen_01105,vote_rejet_01105]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01105-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01105,vote_lepenpop_01105,vote_rejetpop_01105]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01105"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01105
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01105
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01105
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01106*/
/*------------------------------------------------------------------ */
async function GraphDATA01106() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01106.push(vote_macron); 
    vote_lepen_01106.push(vote_lepen);
    vote_rejet_01106.push(vote_rejet);
    vote_macronpop_01106.push(vote_macronMediane);
    vote_lepenpop_01106.push(vote_lepenMediane);
    vote_rejetpop_01106.push(vote_rejetMediane);
    name_Commune_01106.push(nameCommune);
    Pourcentage_01106.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01106.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01106.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01106.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01106.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01106 = [];
const vote_lepen_01106 = [];
const vote_rejet_01106 = [];
const vote_macronpop_01106 = [];
const vote_lepenpop_01106 = [];
const vote_rejetpop_01106 = [];
const name_Commune_01106 = [];
const Pourcentage_01106 = [];
const Pourcentage_rejet_01106 = [];
const vote_gene_macron_01106 = [];
const vote_gene_lepen_01106 = [];
const vote_gene_rejet_01106 = [];

async function chartIt01106(){
    await GraphDATA01106();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01106-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01106
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01106
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01106-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01106,vote_lepen_01106,vote_rejet_01106]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01106-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01106,vote_lepenpop_01106,vote_rejetpop_01106]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01106"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01106
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01106
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01106
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01107*/
/*------------------------------------------------------------------ */
async function GraphDATA01107() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01107.push(vote_macron); 
    vote_lepen_01107.push(vote_lepen);
    vote_rejet_01107.push(vote_rejet);
    vote_macronpop_01107.push(vote_macronMediane);
    vote_lepenpop_01107.push(vote_lepenMediane);
    vote_rejetpop_01107.push(vote_rejetMediane);
    name_Commune_01107.push(nameCommune);
    Pourcentage_01107.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01107.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01107.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01107.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01107.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01107 = [];
const vote_lepen_01107 = [];
const vote_rejet_01107 = [];
const vote_macronpop_01107 = [];
const vote_lepenpop_01107 = [];
const vote_rejetpop_01107 = [];
const name_Commune_01107 = [];
const Pourcentage_01107 = [];
const Pourcentage_rejet_01107 = [];
const vote_gene_macron_01107 = [];
const vote_gene_lepen_01107 = [];
const vote_gene_rejet_01107 = [];

async function chartIt01107(){
    await GraphDATA01107();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01107-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01107
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01107
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01107-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01107,vote_lepen_01107,vote_rejet_01107]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01107-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01107,vote_lepenpop_01107,vote_rejetpop_01107]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01107"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01107
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01107
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01107
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01108*/
/*------------------------------------------------------------------ */
async function GraphDATA01108() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01108.push(vote_macron); 
    vote_lepen_01108.push(vote_lepen);
    vote_rejet_01108.push(vote_rejet);
    vote_macronpop_01108.push(vote_macronMediane);
    vote_lepenpop_01108.push(vote_lepenMediane);
    vote_rejetpop_01108.push(vote_rejetMediane);
    name_Commune_01108.push(nameCommune);
    Pourcentage_01108.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01108.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01108.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01108.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01108.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01108 = [];
const vote_lepen_01108 = [];
const vote_rejet_01108 = [];
const vote_macronpop_01108 = [];
const vote_lepenpop_01108 = [];
const vote_rejetpop_01108 = [];
const name_Commune_01108 = [];
const Pourcentage_01108 = [];
const Pourcentage_rejet_01108 = [];
const vote_gene_macron_01108 = [];
const vote_gene_lepen_01108 = [];
const vote_gene_rejet_01108 = [];

async function chartIt01108(){
    await GraphDATA01108();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01108-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01108
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01108
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01108-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01108,vote_lepen_01108,vote_rejet_01108]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01108-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01108,vote_lepenpop_01108,vote_rejetpop_01108]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01108"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01108
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01108
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01108
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01109*/
/*------------------------------------------------------------------ */
async function GraphDATA01109() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01109.push(vote_macron); 
    vote_lepen_01109.push(vote_lepen);
    vote_rejet_01109.push(vote_rejet);
    vote_macronpop_01109.push(vote_macronMediane);
    vote_lepenpop_01109.push(vote_lepenMediane);
    vote_rejetpop_01109.push(vote_rejetMediane);
    name_Commune_01109.push(nameCommune);
    Pourcentage_01109.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01109.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01109.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01109.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01109.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01109 = [];
const vote_lepen_01109 = [];
const vote_rejet_01109 = [];
const vote_macronpop_01109 = [];
const vote_lepenpop_01109 = [];
const vote_rejetpop_01109 = [];
const name_Commune_01109 = [];
const Pourcentage_01109 = [];
const Pourcentage_rejet_01109 = [];
const vote_gene_macron_01109 = [];
const vote_gene_lepen_01109 = [];
const vote_gene_rejet_01109 = [];

async function chartIt01109(){
    await GraphDATA01109();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01109-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01109
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01109
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01109-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01109,vote_lepen_01109,vote_rejet_01109]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01109-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01109,vote_lepenpop_01109,vote_rejetpop_01109]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01109"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01109
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01109
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01109
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01110*/
/*------------------------------------------------------------------ */
async function GraphDATA01110() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01110.push(vote_macron); 
    vote_lepen_01110.push(vote_lepen);
    vote_rejet_01110.push(vote_rejet);
    vote_macronpop_01110.push(vote_macronMediane);
    vote_lepenpop_01110.push(vote_lepenMediane);
    vote_rejetpop_01110.push(vote_rejetMediane);
    name_Commune_01110.push(nameCommune);
    Pourcentage_01110.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01110.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01110.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01110.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01110.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01110 = [];
const vote_lepen_01110 = [];
const vote_rejet_01110 = [];
const vote_macronpop_01110 = [];
const vote_lepenpop_01110 = [];
const vote_rejetpop_01110 = [];
const name_Commune_01110 = [];
const Pourcentage_01110 = [];
const Pourcentage_rejet_01110 = [];
const vote_gene_macron_01110 = [];
const vote_gene_lepen_01110 = [];
const vote_gene_rejet_01110 = [];

async function chartIt01110(){
    await GraphDATA01110();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01110-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01110
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01110
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01110-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01110,vote_lepen_01110,vote_rejet_01110]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01110-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01110,vote_lepenpop_01110,vote_rejetpop_01110]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01110"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01110
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01110
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01110
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01111*/
/*------------------------------------------------------------------ */
async function GraphDATA01111() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01111.push(vote_macron); 
    vote_lepen_01111.push(vote_lepen);
    vote_rejet_01111.push(vote_rejet);
    vote_macronpop_01111.push(vote_macronMediane);
    vote_lepenpop_01111.push(vote_lepenMediane);
    vote_rejetpop_01111.push(vote_rejetMediane);
    name_Commune_01111.push(nameCommune);
    Pourcentage_01111.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01111.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01111.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01111.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01111.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01111 = [];
const vote_lepen_01111 = [];
const vote_rejet_01111 = [];
const vote_macronpop_01111 = [];
const vote_lepenpop_01111 = [];
const vote_rejetpop_01111 = [];
const name_Commune_01111 = [];
const Pourcentage_01111 = [];
const Pourcentage_rejet_01111 = [];
const vote_gene_macron_01111 = [];
const vote_gene_lepen_01111 = [];
const vote_gene_rejet_01111 = [];

async function chartIt01111(){
    await GraphDATA01111();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01111-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01111
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01111
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01111-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01111,vote_lepen_01111,vote_rejet_01111]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01111-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01111,vote_lepenpop_01111,vote_rejetpop_01111]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01111"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01111
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01111
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01111
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01112*/
/*------------------------------------------------------------------ */
async function GraphDATA01112() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01112.push(vote_macron); 
    vote_lepen_01112.push(vote_lepen);
    vote_rejet_01112.push(vote_rejet);
    vote_macronpop_01112.push(vote_macronMediane);
    vote_lepenpop_01112.push(vote_lepenMediane);
    vote_rejetpop_01112.push(vote_rejetMediane);
    name_Commune_01112.push(nameCommune);
    Pourcentage_01112.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01112.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01112.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01112.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01112.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01112 = [];
const vote_lepen_01112 = [];
const vote_rejet_01112 = [];
const vote_macronpop_01112 = [];
const vote_lepenpop_01112 = [];
const vote_rejetpop_01112 = [];
const name_Commune_01112 = [];
const Pourcentage_01112 = [];
const Pourcentage_rejet_01112 = [];
const vote_gene_macron_01112 = [];
const vote_gene_lepen_01112 = [];
const vote_gene_rejet_01112 = [];

async function chartIt01112(){
    await GraphDATA01112();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01112-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01112
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01112
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01112-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01112,vote_lepen_01112,vote_rejet_01112]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01112-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01112,vote_lepenpop_01112,vote_rejetpop_01112]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01112"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01112
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01112
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01112
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01113*/
/*------------------------------------------------------------------ */
async function GraphDATA01113() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01113.push(vote_macron); 
    vote_lepen_01113.push(vote_lepen);
    vote_rejet_01113.push(vote_rejet);
    vote_macronpop_01113.push(vote_macronMediane);
    vote_lepenpop_01113.push(vote_lepenMediane);
    vote_rejetpop_01113.push(vote_rejetMediane);
    name_Commune_01113.push(nameCommune);
    Pourcentage_01113.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01113.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01113.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01113.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01113.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01113 = [];
const vote_lepen_01113 = [];
const vote_rejet_01113 = [];
const vote_macronpop_01113 = [];
const vote_lepenpop_01113 = [];
const vote_rejetpop_01113 = [];
const name_Commune_01113 = [];
const Pourcentage_01113 = [];
const Pourcentage_rejet_01113 = [];
const vote_gene_macron_01113 = [];
const vote_gene_lepen_01113 = [];
const vote_gene_rejet_01113 = [];

async function chartIt01113(){
    await GraphDATA01113();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01113-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01113
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01113
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01113-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01113,vote_lepen_01113,vote_rejet_01113]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01113-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01113,vote_lepenpop_01113,vote_rejetpop_01113]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01113"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01113
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01113
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01113
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01114*/
/*------------------------------------------------------------------ */
async function GraphDATA01114() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01114.push(vote_macron); 
    vote_lepen_01114.push(vote_lepen);
    vote_rejet_01114.push(vote_rejet);
    vote_macronpop_01114.push(vote_macronMediane);
    vote_lepenpop_01114.push(vote_lepenMediane);
    vote_rejetpop_01114.push(vote_rejetMediane);
    name_Commune_01114.push(nameCommune);
    Pourcentage_01114.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01114.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01114.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01114.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01114.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01114 = [];
const vote_lepen_01114 = [];
const vote_rejet_01114 = [];
const vote_macronpop_01114 = [];
const vote_lepenpop_01114 = [];
const vote_rejetpop_01114 = [];
const name_Commune_01114 = [];
const Pourcentage_01114 = [];
const Pourcentage_rejet_01114 = [];
const vote_gene_macron_01114 = [];
const vote_gene_lepen_01114 = [];
const vote_gene_rejet_01114 = [];

async function chartIt01114(){
    await GraphDATA01114();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01114-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01114
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01114
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01114-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01114,vote_lepen_01114,vote_rejet_01114]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01114-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01114,vote_lepenpop_01114,vote_rejetpop_01114]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01114"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01114
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01114
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01114
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01115*/
/*------------------------------------------------------------------ */
async function GraphDATA01115() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01115.push(vote_macron); 
    vote_lepen_01115.push(vote_lepen);
    vote_rejet_01115.push(vote_rejet);
    vote_macronpop_01115.push(vote_macronMediane);
    vote_lepenpop_01115.push(vote_lepenMediane);
    vote_rejetpop_01115.push(vote_rejetMediane);
    name_Commune_01115.push(nameCommune);
    Pourcentage_01115.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01115.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01115.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01115.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01115.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01115 = [];
const vote_lepen_01115 = [];
const vote_rejet_01115 = [];
const vote_macronpop_01115 = [];
const vote_lepenpop_01115 = [];
const vote_rejetpop_01115 = [];
const name_Commune_01115 = [];
const Pourcentage_01115 = [];
const Pourcentage_rejet_01115 = [];
const vote_gene_macron_01115 = [];
const vote_gene_lepen_01115 = [];
const vote_gene_rejet_01115 = [];

async function chartIt01115(){
    await GraphDATA01115();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01115-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01115
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01115
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01115-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01115,vote_lepen_01115,vote_rejet_01115]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01115-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01115,vote_lepenpop_01115,vote_rejetpop_01115]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01115"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01115
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01115
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01115
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01116*/
/*------------------------------------------------------------------ */
async function GraphDATA01116() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01116.push(vote_macron); 
    vote_lepen_01116.push(vote_lepen);
    vote_rejet_01116.push(vote_rejet);
    vote_macronpop_01116.push(vote_macronMediane);
    vote_lepenpop_01116.push(vote_lepenMediane);
    vote_rejetpop_01116.push(vote_rejetMediane);
    name_Commune_01116.push(nameCommune);
    Pourcentage_01116.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01116.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01116.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01116.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01116.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01116 = [];
const vote_lepen_01116 = [];
const vote_rejet_01116 = [];
const vote_macronpop_01116 = [];
const vote_lepenpop_01116 = [];
const vote_rejetpop_01116 = [];
const name_Commune_01116 = [];
const Pourcentage_01116 = [];
const Pourcentage_rejet_01116 = [];
const vote_gene_macron_01116 = [];
const vote_gene_lepen_01116 = [];
const vote_gene_rejet_01116 = [];

async function chartIt01116(){
    await GraphDATA01116();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01116-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01116
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01116
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01116-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01116,vote_lepen_01116,vote_rejet_01116]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01116-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01116,vote_lepenpop_01116,vote_rejetpop_01116]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01116"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01116
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01116
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01116
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01117*/
/*------------------------------------------------------------------ */
async function GraphDATA01117() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01117.push(vote_macron); 
    vote_lepen_01117.push(vote_lepen);
    vote_rejet_01117.push(vote_rejet);
    vote_macronpop_01117.push(vote_macronMediane);
    vote_lepenpop_01117.push(vote_lepenMediane);
    vote_rejetpop_01117.push(vote_rejetMediane);
    name_Commune_01117.push(nameCommune);
    Pourcentage_01117.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01117.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01117.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01117.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01117.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01117 = [];
const vote_lepen_01117 = [];
const vote_rejet_01117 = [];
const vote_macronpop_01117 = [];
const vote_lepenpop_01117 = [];
const vote_rejetpop_01117 = [];
const name_Commune_01117 = [];
const Pourcentage_01117 = [];
const Pourcentage_rejet_01117 = [];
const vote_gene_macron_01117 = [];
const vote_gene_lepen_01117 = [];
const vote_gene_rejet_01117 = [];

async function chartIt01117(){
    await GraphDATA01117();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01117-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01117
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01117
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01117-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01117,vote_lepen_01117,vote_rejet_01117]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01117-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01117,vote_lepenpop_01117,vote_rejetpop_01117]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01117"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01117
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01117
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01117
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01118*/
/*------------------------------------------------------------------ */
async function GraphDATA01118() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01118.push(vote_macron); 
    vote_lepen_01118.push(vote_lepen);
    vote_rejet_01118.push(vote_rejet);
    vote_macronpop_01118.push(vote_macronMediane);
    vote_lepenpop_01118.push(vote_lepenMediane);
    vote_rejetpop_01118.push(vote_rejetMediane);
    name_Commune_01118.push(nameCommune);
    Pourcentage_01118.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01118.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01118.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01118.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01118.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01118 = [];
const vote_lepen_01118 = [];
const vote_rejet_01118 = [];
const vote_macronpop_01118 = [];
const vote_lepenpop_01118 = [];
const vote_rejetpop_01118 = [];
const name_Commune_01118 = [];
const Pourcentage_01118 = [];
const Pourcentage_rejet_01118 = [];
const vote_gene_macron_01118 = [];
const vote_gene_lepen_01118 = [];
const vote_gene_rejet_01118 = [];

async function chartIt01118(){
    await GraphDATA01118();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01118-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01118
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01118
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01118-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01118,vote_lepen_01118,vote_rejet_01118]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01118-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01118,vote_lepenpop_01118,vote_rejetpop_01118]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01118"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01118
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01118
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01118
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01119*/
/*------------------------------------------------------------------ */
async function GraphDATA01119() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01119.push(vote_macron); 
    vote_lepen_01119.push(vote_lepen);
    vote_rejet_01119.push(vote_rejet);
    vote_macronpop_01119.push(vote_macronMediane);
    vote_lepenpop_01119.push(vote_lepenMediane);
    vote_rejetpop_01119.push(vote_rejetMediane);
    name_Commune_01119.push(nameCommune);
    Pourcentage_01119.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01119.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01119.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01119.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01119.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01119 = [];
const vote_lepen_01119 = [];
const vote_rejet_01119 = [];
const vote_macronpop_01119 = [];
const vote_lepenpop_01119 = [];
const vote_rejetpop_01119 = [];
const name_Commune_01119 = [];
const Pourcentage_01119 = [];
const Pourcentage_rejet_01119 = [];
const vote_gene_macron_01119 = [];
const vote_gene_lepen_01119 = [];
const vote_gene_rejet_01119 = [];

async function chartIt01119(){
    await GraphDATA01119();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01119-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01119
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01119
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01119-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01119,vote_lepen_01119,vote_rejet_01119]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01119-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01119,vote_lepenpop_01119,vote_rejetpop_01119]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01119"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01119
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01119
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01119
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01120*/
/*------------------------------------------------------------------ */
async function GraphDATA01120() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01120.push(vote_macron); 
    vote_lepen_01120.push(vote_lepen);
    vote_rejet_01120.push(vote_rejet);
    vote_macronpop_01120.push(vote_macronMediane);
    vote_lepenpop_01120.push(vote_lepenMediane);
    vote_rejetpop_01120.push(vote_rejetMediane);
    name_Commune_01120.push(nameCommune);
    Pourcentage_01120.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01120.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01120.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01120.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01120.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01120 = [];
const vote_lepen_01120 = [];
const vote_rejet_01120 = [];
const vote_macronpop_01120 = [];
const vote_lepenpop_01120 = [];
const vote_rejetpop_01120 = [];
const name_Commune_01120 = [];
const Pourcentage_01120 = [];
const Pourcentage_rejet_01120 = [];
const vote_gene_macron_01120 = [];
const vote_gene_lepen_01120 = [];
const vote_gene_rejet_01120 = [];

async function chartIt01120(){
    await GraphDATA01120();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01120-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01120
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01120
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01120-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01120,vote_lepen_01120,vote_rejet_01120]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01120-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01120,vote_lepenpop_01120,vote_rejetpop_01120]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01120"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01120
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01120
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01120
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01121*/
/*------------------------------------------------------------------ */
async function GraphDATA01121() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01121.push(vote_macron); 
    vote_lepen_01121.push(vote_lepen);
    vote_rejet_01121.push(vote_rejet);
    vote_macronpop_01121.push(vote_macronMediane);
    vote_lepenpop_01121.push(vote_lepenMediane);
    vote_rejetpop_01121.push(vote_rejetMediane);
    name_Commune_01121.push(nameCommune);
    Pourcentage_01121.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01121.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01121.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01121.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01121.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01121 = [];
const vote_lepen_01121 = [];
const vote_rejet_01121 = [];
const vote_macronpop_01121 = [];
const vote_lepenpop_01121 = [];
const vote_rejetpop_01121 = [];
const name_Commune_01121 = [];
const Pourcentage_01121 = [];
const Pourcentage_rejet_01121 = [];
const vote_gene_macron_01121 = [];
const vote_gene_lepen_01121 = [];
const vote_gene_rejet_01121 = [];

async function chartIt01121(){
    await GraphDATA01121();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01121-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01121
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01121
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01121-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01121,vote_lepen_01121,vote_rejet_01121]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01121-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01121,vote_lepenpop_01121,vote_rejetpop_01121]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01121"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01121
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01121
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01121
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01122*/
/*------------------------------------------------------------------ */
async function GraphDATA01122() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01122.push(vote_macron); 
    vote_lepen_01122.push(vote_lepen);
    vote_rejet_01122.push(vote_rejet);
    vote_macronpop_01122.push(vote_macronMediane);
    vote_lepenpop_01122.push(vote_lepenMediane);
    vote_rejetpop_01122.push(vote_rejetMediane);
    name_Commune_01122.push(nameCommune);
    Pourcentage_01122.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01122.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01122.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01122.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01122.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01122 = [];
const vote_lepen_01122 = [];
const vote_rejet_01122 = [];
const vote_macronpop_01122 = [];
const vote_lepenpop_01122 = [];
const vote_rejetpop_01122 = [];
const name_Commune_01122 = [];
const Pourcentage_01122 = [];
const Pourcentage_rejet_01122 = [];
const vote_gene_macron_01122 = [];
const vote_gene_lepen_01122 = [];
const vote_gene_rejet_01122 = [];

async function chartIt01122(){
    await GraphDATA01122();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01122-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01122
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01122
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01122-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01122,vote_lepen_01122,vote_rejet_01122]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01122-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01122,vote_lepenpop_01122,vote_rejetpop_01122]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01122"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01122
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01122
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01122
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01123*/
/*------------------------------------------------------------------ */
async function GraphDATA01123() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01123.push(vote_macron); 
    vote_lepen_01123.push(vote_lepen);
    vote_rejet_01123.push(vote_rejet);
    vote_macronpop_01123.push(vote_macronMediane);
    vote_lepenpop_01123.push(vote_lepenMediane);
    vote_rejetpop_01123.push(vote_rejetMediane);
    name_Commune_01123.push(nameCommune);
    Pourcentage_01123.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01123.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01123.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01123.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01123.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01123 = [];
const vote_lepen_01123 = [];
const vote_rejet_01123 = [];
const vote_macronpop_01123 = [];
const vote_lepenpop_01123 = [];
const vote_rejetpop_01123 = [];
const name_Commune_01123 = [];
const Pourcentage_01123 = [];
const Pourcentage_rejet_01123 = [];
const vote_gene_macron_01123 = [];
const vote_gene_lepen_01123 = [];
const vote_gene_rejet_01123 = [];

async function chartIt01123(){
    await GraphDATA01123();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01123-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01123
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01123
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01123-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01123,vote_lepen_01123,vote_rejet_01123]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01123-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01123,vote_lepenpop_01123,vote_rejetpop_01123]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01123"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01123
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01123
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01123
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01124*/
/*------------------------------------------------------------------ */
async function GraphDATA01124() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01124.push(vote_macron); 
    vote_lepen_01124.push(vote_lepen);
    vote_rejet_01124.push(vote_rejet);
    vote_macronpop_01124.push(vote_macronMediane);
    vote_lepenpop_01124.push(vote_lepenMediane);
    vote_rejetpop_01124.push(vote_rejetMediane);
    name_Commune_01124.push(nameCommune);
    Pourcentage_01124.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01124.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01124.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01124.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01124.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01124 = [];
const vote_lepen_01124 = [];
const vote_rejet_01124 = [];
const vote_macronpop_01124 = [];
const vote_lepenpop_01124 = [];
const vote_rejetpop_01124 = [];
const name_Commune_01124 = [];
const Pourcentage_01124 = [];
const Pourcentage_rejet_01124 = [];
const vote_gene_macron_01124 = [];
const vote_gene_lepen_01124 = [];
const vote_gene_rejet_01124 = [];

async function chartIt01124(){
    await GraphDATA01124();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01124-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01124
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01124
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01124-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01124,vote_lepen_01124,vote_rejet_01124]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01124-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01124,vote_lepenpop_01124,vote_rejetpop_01124]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01124"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01124
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01124
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01124
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01125*/
/*------------------------------------------------------------------ */
async function GraphDATA01125() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01125.push(vote_macron); 
    vote_lepen_01125.push(vote_lepen);
    vote_rejet_01125.push(vote_rejet);
    vote_macronpop_01125.push(vote_macronMediane);
    vote_lepenpop_01125.push(vote_lepenMediane);
    vote_rejetpop_01125.push(vote_rejetMediane);
    name_Commune_01125.push(nameCommune);
    Pourcentage_01125.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01125.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01125.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01125.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01125.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01125 = [];
const vote_lepen_01125 = [];
const vote_rejet_01125 = [];
const vote_macronpop_01125 = [];
const vote_lepenpop_01125 = [];
const vote_rejetpop_01125 = [];
const name_Commune_01125 = [];
const Pourcentage_01125 = [];
const Pourcentage_rejet_01125 = [];
const vote_gene_macron_01125 = [];
const vote_gene_lepen_01125 = [];
const vote_gene_rejet_01125 = [];

async function chartIt01125(){
    await GraphDATA01125();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01125-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01125
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01125
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01125-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01125,vote_lepen_01125,vote_rejet_01125]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01125-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01125,vote_lepenpop_01125,vote_rejetpop_01125]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01125"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01125
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01125
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01125
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01126*/
/*------------------------------------------------------------------ */
async function GraphDATA01126() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01126.push(vote_macron); 
    vote_lepen_01126.push(vote_lepen);
    vote_rejet_01126.push(vote_rejet);
    vote_macronpop_01126.push(vote_macronMediane);
    vote_lepenpop_01126.push(vote_lepenMediane);
    vote_rejetpop_01126.push(vote_rejetMediane);
    name_Commune_01126.push(nameCommune);
    Pourcentage_01126.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01126.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01126.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01126.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01126.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01126 = [];
const vote_lepen_01126 = [];
const vote_rejet_01126 = [];
const vote_macronpop_01126 = [];
const vote_lepenpop_01126 = [];
const vote_rejetpop_01126 = [];
const name_Commune_01126 = [];
const Pourcentage_01126 = [];
const Pourcentage_rejet_01126 = [];
const vote_gene_macron_01126 = [];
const vote_gene_lepen_01126 = [];
const vote_gene_rejet_01126 = [];

async function chartIt01126(){
    await GraphDATA01126();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01126-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01126
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01126
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01126-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01126,vote_lepen_01126,vote_rejet_01126]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01126-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01126,vote_lepenpop_01126,vote_rejetpop_01126]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01126"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01126
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01126
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01126
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01127*/
/*------------------------------------------------------------------ */
async function GraphDATA01127() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01127.push(vote_macron); 
    vote_lepen_01127.push(vote_lepen);
    vote_rejet_01127.push(vote_rejet);
    vote_macronpop_01127.push(vote_macronMediane);
    vote_lepenpop_01127.push(vote_lepenMediane);
    vote_rejetpop_01127.push(vote_rejetMediane);
    name_Commune_01127.push(nameCommune);
    Pourcentage_01127.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01127.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01127.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01127.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01127.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01127 = [];
const vote_lepen_01127 = [];
const vote_rejet_01127 = [];
const vote_macronpop_01127 = [];
const vote_lepenpop_01127 = [];
const vote_rejetpop_01127 = [];
const name_Commune_01127 = [];
const Pourcentage_01127 = [];
const Pourcentage_rejet_01127 = [];
const vote_gene_macron_01127 = [];
const vote_gene_lepen_01127 = [];
const vote_gene_rejet_01127 = [];

async function chartIt01127(){
    await GraphDATA01127();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01127-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01127
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01127
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01127-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01127,vote_lepen_01127,vote_rejet_01127]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01127-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01127,vote_lepenpop_01127,vote_rejetpop_01127]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01127"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01127
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01127
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01127
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01128*/
/*------------------------------------------------------------------ */
async function GraphDATA01128() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01128.push(vote_macron); 
    vote_lepen_01128.push(vote_lepen);
    vote_rejet_01128.push(vote_rejet);
    vote_macronpop_01128.push(vote_macronMediane);
    vote_lepenpop_01128.push(vote_lepenMediane);
    vote_rejetpop_01128.push(vote_rejetMediane);
    name_Commune_01128.push(nameCommune);
    Pourcentage_01128.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01128.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01128.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01128.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01128.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01128 = [];
const vote_lepen_01128 = [];
const vote_rejet_01128 = [];
const vote_macronpop_01128 = [];
const vote_lepenpop_01128 = [];
const vote_rejetpop_01128 = [];
const name_Commune_01128 = [];
const Pourcentage_01128 = [];
const Pourcentage_rejet_01128 = [];
const vote_gene_macron_01128 = [];
const vote_gene_lepen_01128 = [];
const vote_gene_rejet_01128 = [];

async function chartIt01128(){
    await GraphDATA01128();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01128-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01128
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01128
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01128-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01128,vote_lepen_01128,vote_rejet_01128]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01128-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01128,vote_lepenpop_01128,vote_rejetpop_01128]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01128"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01128
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01128
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01128
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01129*/
/*------------------------------------------------------------------ */
async function GraphDATA01129() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01129.push(vote_macron); 
    vote_lepen_01129.push(vote_lepen);
    vote_rejet_01129.push(vote_rejet);
    vote_macronpop_01129.push(vote_macronMediane);
    vote_lepenpop_01129.push(vote_lepenMediane);
    vote_rejetpop_01129.push(vote_rejetMediane);
    name_Commune_01129.push(nameCommune);
    Pourcentage_01129.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01129.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01129.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01129.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01129.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01129 = [];
const vote_lepen_01129 = [];
const vote_rejet_01129 = [];
const vote_macronpop_01129 = [];
const vote_lepenpop_01129 = [];
const vote_rejetpop_01129 = [];
const name_Commune_01129 = [];
const Pourcentage_01129 = [];
const Pourcentage_rejet_01129 = [];
const vote_gene_macron_01129 = [];
const vote_gene_lepen_01129 = [];
const vote_gene_rejet_01129 = [];

async function chartIt01129(){
    await GraphDATA01129();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01129-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01129
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01129
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01129-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01129,vote_lepen_01129,vote_rejet_01129]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01129-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01129,vote_lepenpop_01129,vote_rejetpop_01129]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01129"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01129
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01129
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01129
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01130*/
/*------------------------------------------------------------------ */
async function GraphDATA01130() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01130.push(vote_macron); 
    vote_lepen_01130.push(vote_lepen);
    vote_rejet_01130.push(vote_rejet);
    vote_macronpop_01130.push(vote_macronMediane);
    vote_lepenpop_01130.push(vote_lepenMediane);
    vote_rejetpop_01130.push(vote_rejetMediane);
    name_Commune_01130.push(nameCommune);
    Pourcentage_01130.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01130.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01130.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01130.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01130.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01130 = [];
const vote_lepen_01130 = [];
const vote_rejet_01130 = [];
const vote_macronpop_01130 = [];
const vote_lepenpop_01130 = [];
const vote_rejetpop_01130 = [];
const name_Commune_01130 = [];
const Pourcentage_01130 = [];
const Pourcentage_rejet_01130 = [];
const vote_gene_macron_01130 = [];
const vote_gene_lepen_01130 = [];
const vote_gene_rejet_01130 = [];

async function chartIt01130(){
    await GraphDATA01130();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01130-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01130
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01130
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01130-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01130,vote_lepen_01130,vote_rejet_01130]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01130-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01130,vote_lepenpop_01130,vote_rejetpop_01130]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01130"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01130
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01130
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01130
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01131*/
/*------------------------------------------------------------------ */
async function GraphDATA01131() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01131.push(vote_macron); 
    vote_lepen_01131.push(vote_lepen);
    vote_rejet_01131.push(vote_rejet);
    vote_macronpop_01131.push(vote_macronMediane);
    vote_lepenpop_01131.push(vote_lepenMediane);
    vote_rejetpop_01131.push(vote_rejetMediane);
    name_Commune_01131.push(nameCommune);
    Pourcentage_01131.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01131.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01131.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01131.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01131.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01131 = [];
const vote_lepen_01131 = [];
const vote_rejet_01131 = [];
const vote_macronpop_01131 = [];
const vote_lepenpop_01131 = [];
const vote_rejetpop_01131 = [];
const name_Commune_01131 = [];
const Pourcentage_01131 = [];
const Pourcentage_rejet_01131 = [];
const vote_gene_macron_01131 = [];
const vote_gene_lepen_01131 = [];
const vote_gene_rejet_01131 = [];

async function chartIt01131(){
    await GraphDATA01131();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01131-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01131
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01131
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01131-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01131,vote_lepen_01131,vote_rejet_01131]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01131-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01131,vote_lepenpop_01131,vote_rejetpop_01131]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01131"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01131
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01131
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01131
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01132*/
/*------------------------------------------------------------------ */
async function GraphDATA01132() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01132.push(vote_macron); 
    vote_lepen_01132.push(vote_lepen);
    vote_rejet_01132.push(vote_rejet);
    vote_macronpop_01132.push(vote_macronMediane);
    vote_lepenpop_01132.push(vote_lepenMediane);
    vote_rejetpop_01132.push(vote_rejetMediane);
    name_Commune_01132.push(nameCommune);
    Pourcentage_01132.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01132.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01132.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01132.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01132.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01132 = [];
const vote_lepen_01132 = [];
const vote_rejet_01132 = [];
const vote_macronpop_01132 = [];
const vote_lepenpop_01132 = [];
const vote_rejetpop_01132 = [];
const name_Commune_01132 = [];
const Pourcentage_01132 = [];
const Pourcentage_rejet_01132 = [];
const vote_gene_macron_01132 = [];
const vote_gene_lepen_01132 = [];
const vote_gene_rejet_01132 = [];

async function chartIt01132(){
    await GraphDATA01132();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01132-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01132
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01132
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01132-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01132,vote_lepen_01132,vote_rejet_01132]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01132-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01132,vote_lepenpop_01132,vote_rejetpop_01132]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01132"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01132
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01132
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01132
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01133*/
/*------------------------------------------------------------------ */
async function GraphDATA01133() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01133.push(vote_macron); 
    vote_lepen_01133.push(vote_lepen);
    vote_rejet_01133.push(vote_rejet);
    vote_macronpop_01133.push(vote_macronMediane);
    vote_lepenpop_01133.push(vote_lepenMediane);
    vote_rejetpop_01133.push(vote_rejetMediane);
    name_Commune_01133.push(nameCommune);
    Pourcentage_01133.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01133.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01133.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01133.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01133.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01133 = [];
const vote_lepen_01133 = [];
const vote_rejet_01133 = [];
const vote_macronpop_01133 = [];
const vote_lepenpop_01133 = [];
const vote_rejetpop_01133 = [];
const name_Commune_01133 = [];
const Pourcentage_01133 = [];
const Pourcentage_rejet_01133 = [];
const vote_gene_macron_01133 = [];
const vote_gene_lepen_01133 = [];
const vote_gene_rejet_01133 = [];

async function chartIt01133(){
    await GraphDATA01133();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01133-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01133
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01133
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01133-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01133,vote_lepen_01133,vote_rejet_01133]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01133-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01133,vote_lepenpop_01133,vote_rejetpop_01133]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01133"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01133
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01133
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01133
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01134*/
/*------------------------------------------------------------------ */
async function GraphDATA01134() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01134.push(vote_macron); 
    vote_lepen_01134.push(vote_lepen);
    vote_rejet_01134.push(vote_rejet);
    vote_macronpop_01134.push(vote_macronMediane);
    vote_lepenpop_01134.push(vote_lepenMediane);
    vote_rejetpop_01134.push(vote_rejetMediane);
    name_Commune_01134.push(nameCommune);
    Pourcentage_01134.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01134.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01134.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01134.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01134.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01134 = [];
const vote_lepen_01134 = [];
const vote_rejet_01134 = [];
const vote_macronpop_01134 = [];
const vote_lepenpop_01134 = [];
const vote_rejetpop_01134 = [];
const name_Commune_01134 = [];
const Pourcentage_01134 = [];
const Pourcentage_rejet_01134 = [];
const vote_gene_macron_01134 = [];
const vote_gene_lepen_01134 = [];
const vote_gene_rejet_01134 = [];

async function chartIt01134(){
    await GraphDATA01134();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01134-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01134
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01134
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01134-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01134,vote_lepen_01134,vote_rejet_01134]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01134-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01134,vote_lepenpop_01134,vote_rejetpop_01134]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01134"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01134
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01134
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01134
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01135*/
/*------------------------------------------------------------------ */
async function GraphDATA01135() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01135.push(vote_macron); 
    vote_lepen_01135.push(vote_lepen);
    vote_rejet_01135.push(vote_rejet);
    vote_macronpop_01135.push(vote_macronMediane);
    vote_lepenpop_01135.push(vote_lepenMediane);
    vote_rejetpop_01135.push(vote_rejetMediane);
    name_Commune_01135.push(nameCommune);
    Pourcentage_01135.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01135.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01135.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01135.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01135.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01135 = [];
const vote_lepen_01135 = [];
const vote_rejet_01135 = [];
const vote_macronpop_01135 = [];
const vote_lepenpop_01135 = [];
const vote_rejetpop_01135 = [];
const name_Commune_01135 = [];
const Pourcentage_01135 = [];
const Pourcentage_rejet_01135 = [];
const vote_gene_macron_01135 = [];
const vote_gene_lepen_01135 = [];
const vote_gene_rejet_01135 = [];

async function chartIt01135(){
    await GraphDATA01135();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01135-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01135
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01135
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01135-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01135,vote_lepen_01135,vote_rejet_01135]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01135-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01135,vote_lepenpop_01135,vote_rejetpop_01135]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01135"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01135
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01135
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01135
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01136*/
/*------------------------------------------------------------------ */
async function GraphDATA01136() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01136.push(vote_macron); 
    vote_lepen_01136.push(vote_lepen);
    vote_rejet_01136.push(vote_rejet);
    vote_macronpop_01136.push(vote_macronMediane);
    vote_lepenpop_01136.push(vote_lepenMediane);
    vote_rejetpop_01136.push(vote_rejetMediane);
    name_Commune_01136.push(nameCommune);
    Pourcentage_01136.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01136.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01136.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01136.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01136.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01136 = [];
const vote_lepen_01136 = [];
const vote_rejet_01136 = [];
const vote_macronpop_01136 = [];
const vote_lepenpop_01136 = [];
const vote_rejetpop_01136 = [];
const name_Commune_01136 = [];
const Pourcentage_01136 = [];
const Pourcentage_rejet_01136 = [];
const vote_gene_macron_01136 = [];
const vote_gene_lepen_01136 = [];
const vote_gene_rejet_01136 = [];

async function chartIt01136(){
    await GraphDATA01136();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01136-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01136
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01136
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01136-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01136,vote_lepen_01136,vote_rejet_01136]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01136-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01136,vote_lepenpop_01136,vote_rejetpop_01136]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01136"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01136
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01136
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01136
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01137*/
/*------------------------------------------------------------------ */
async function GraphDATA01137() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01137.push(vote_macron); 
    vote_lepen_01137.push(vote_lepen);
    vote_rejet_01137.push(vote_rejet);
    vote_macronpop_01137.push(vote_macronMediane);
    vote_lepenpop_01137.push(vote_lepenMediane);
    vote_rejetpop_01137.push(vote_rejetMediane);
    name_Commune_01137.push(nameCommune);
    Pourcentage_01137.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01137.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01137.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01137.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01137.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01137 = [];
const vote_lepen_01137 = [];
const vote_rejet_01137 = [];
const vote_macronpop_01137 = [];
const vote_lepenpop_01137 = [];
const vote_rejetpop_01137 = [];
const name_Commune_01137 = [];
const Pourcentage_01137 = [];
const Pourcentage_rejet_01137 = [];
const vote_gene_macron_01137 = [];
const vote_gene_lepen_01137 = [];
const vote_gene_rejet_01137 = [];

async function chartIt01137(){
    await GraphDATA01137();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01137-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01137
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01137
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01137-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01137,vote_lepen_01137,vote_rejet_01137]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01137-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01137,vote_lepenpop_01137,vote_rejetpop_01137]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01137"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01137
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01137
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01137
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01138*/
/*------------------------------------------------------------------ */
async function GraphDATA01138() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01138.push(vote_macron); 
    vote_lepen_01138.push(vote_lepen);
    vote_rejet_01138.push(vote_rejet);
    vote_macronpop_01138.push(vote_macronMediane);
    vote_lepenpop_01138.push(vote_lepenMediane);
    vote_rejetpop_01138.push(vote_rejetMediane);
    name_Commune_01138.push(nameCommune);
    Pourcentage_01138.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01138.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01138.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01138.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01138.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01138 = [];
const vote_lepen_01138 = [];
const vote_rejet_01138 = [];
const vote_macronpop_01138 = [];
const vote_lepenpop_01138 = [];
const vote_rejetpop_01138 = [];
const name_Commune_01138 = [];
const Pourcentage_01138 = [];
const Pourcentage_rejet_01138 = [];
const vote_gene_macron_01138 = [];
const vote_gene_lepen_01138 = [];
const vote_gene_rejet_01138 = [];

async function chartIt01138(){
    await GraphDATA01138();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01138-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01138
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01138
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01138-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01138,vote_lepen_01138,vote_rejet_01138]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01138-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01138,vote_lepenpop_01138,vote_rejetpop_01138]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01138"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01138
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01138
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01138
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01139*/
/*------------------------------------------------------------------ */
async function GraphDATA01139() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01139.push(vote_macron); 
    vote_lepen_01139.push(vote_lepen);
    vote_rejet_01139.push(vote_rejet);
    vote_macronpop_01139.push(vote_macronMediane);
    vote_lepenpop_01139.push(vote_lepenMediane);
    vote_rejetpop_01139.push(vote_rejetMediane);
    name_Commune_01139.push(nameCommune);
    Pourcentage_01139.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01139.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01139.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01139.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01139.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01139 = [];
const vote_lepen_01139 = [];
const vote_rejet_01139 = [];
const vote_macronpop_01139 = [];
const vote_lepenpop_01139 = [];
const vote_rejetpop_01139 = [];
const name_Commune_01139 = [];
const Pourcentage_01139 = [];
const Pourcentage_rejet_01139 = [];
const vote_gene_macron_01139 = [];
const vote_gene_lepen_01139 = [];
const vote_gene_rejet_01139 = [];

async function chartIt01139(){
    await GraphDATA01139();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01139-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01139
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01139
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01139-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01139,vote_lepen_01139,vote_rejet_01139]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01139-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01139,vote_lepenpop_01139,vote_rejetpop_01139]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01139"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01139
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01139
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01139
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01140*/
/*------------------------------------------------------------------ */
async function GraphDATA01140() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01140.push(vote_macron); 
    vote_lepen_01140.push(vote_lepen);
    vote_rejet_01140.push(vote_rejet);
    vote_macronpop_01140.push(vote_macronMediane);
    vote_lepenpop_01140.push(vote_lepenMediane);
    vote_rejetpop_01140.push(vote_rejetMediane);
    name_Commune_01140.push(nameCommune);
    Pourcentage_01140.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01140.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01140.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01140.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01140.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01140 = [];
const vote_lepen_01140 = [];
const vote_rejet_01140 = [];
const vote_macronpop_01140 = [];
const vote_lepenpop_01140 = [];
const vote_rejetpop_01140 = [];
const name_Commune_01140 = [];
const Pourcentage_01140 = [];
const Pourcentage_rejet_01140 = [];
const vote_gene_macron_01140 = [];
const vote_gene_lepen_01140 = [];
const vote_gene_rejet_01140 = [];

async function chartIt01140(){
    await GraphDATA01140();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01140-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01140
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01140
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01140-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01140,vote_lepen_01140,vote_rejet_01140]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01140-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01140,vote_lepenpop_01140,vote_rejetpop_01140]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01140"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01140
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01140
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01140
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01141*/
/*------------------------------------------------------------------ */
async function GraphDATA01141() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01141.push(vote_macron); 
    vote_lepen_01141.push(vote_lepen);
    vote_rejet_01141.push(vote_rejet);
    vote_macronpop_01141.push(vote_macronMediane);
    vote_lepenpop_01141.push(vote_lepenMediane);
    vote_rejetpop_01141.push(vote_rejetMediane);
    name_Commune_01141.push(nameCommune);
    Pourcentage_01141.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01141.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01141.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01141.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01141.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01141 = [];
const vote_lepen_01141 = [];
const vote_rejet_01141 = [];
const vote_macronpop_01141 = [];
const vote_lepenpop_01141 = [];
const vote_rejetpop_01141 = [];
const name_Commune_01141 = [];
const Pourcentage_01141 = [];
const Pourcentage_rejet_01141 = [];
const vote_gene_macron_01141 = [];
const vote_gene_lepen_01141 = [];
const vote_gene_rejet_01141 = [];

async function chartIt01141(){
    await GraphDATA01141();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01141-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01141
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01141
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01141-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01141,vote_lepen_01141,vote_rejet_01141]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01141-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01141,vote_lepenpop_01141,vote_rejetpop_01141]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01141"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01141
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01141
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01141
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01142*/
/*------------------------------------------------------------------ */
async function GraphDATA01142() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01142.push(vote_macron); 
    vote_lepen_01142.push(vote_lepen);
    vote_rejet_01142.push(vote_rejet);
    vote_macronpop_01142.push(vote_macronMediane);
    vote_lepenpop_01142.push(vote_lepenMediane);
    vote_rejetpop_01142.push(vote_rejetMediane);
    name_Commune_01142.push(nameCommune);
    Pourcentage_01142.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01142.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01142.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01142.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01142.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01142 = [];
const vote_lepen_01142 = [];
const vote_rejet_01142 = [];
const vote_macronpop_01142 = [];
const vote_lepenpop_01142 = [];
const vote_rejetpop_01142 = [];
const name_Commune_01142 = [];
const Pourcentage_01142 = [];
const Pourcentage_rejet_01142 = [];
const vote_gene_macron_01142 = [];
const vote_gene_lepen_01142 = [];
const vote_gene_rejet_01142 = [];

async function chartIt01142(){
    await GraphDATA01142();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01142-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01142
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01142
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01142-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01142,vote_lepen_01142,vote_rejet_01142]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01142-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01142,vote_lepenpop_01142,vote_rejetpop_01142]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01142"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01142
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01142
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01142
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01143*/
/*------------------------------------------------------------------ */
async function GraphDATA01143() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01143.push(vote_macron); 
    vote_lepen_01143.push(vote_lepen);
    vote_rejet_01143.push(vote_rejet);
    vote_macronpop_01143.push(vote_macronMediane);
    vote_lepenpop_01143.push(vote_lepenMediane);
    vote_rejetpop_01143.push(vote_rejetMediane);
    name_Commune_01143.push(nameCommune);
    Pourcentage_01143.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01143.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01143.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01143.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01143.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01143 = [];
const vote_lepen_01143 = [];
const vote_rejet_01143 = [];
const vote_macronpop_01143 = [];
const vote_lepenpop_01143 = [];
const vote_rejetpop_01143 = [];
const name_Commune_01143 = [];
const Pourcentage_01143 = [];
const Pourcentage_rejet_01143 = [];
const vote_gene_macron_01143 = [];
const vote_gene_lepen_01143 = [];
const vote_gene_rejet_01143 = [];

async function chartIt01143(){
    await GraphDATA01143();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01143-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01143
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01143
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01143-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01143,vote_lepen_01143,vote_rejet_01143]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01143-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01143,vote_lepenpop_01143,vote_rejetpop_01143]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01143"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01143
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01143
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01143
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01144*/
/*------------------------------------------------------------------ */
async function GraphDATA01144() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01144.push(vote_macron); 
    vote_lepen_01144.push(vote_lepen);
    vote_rejet_01144.push(vote_rejet);
    vote_macronpop_01144.push(vote_macronMediane);
    vote_lepenpop_01144.push(vote_lepenMediane);
    vote_rejetpop_01144.push(vote_rejetMediane);
    name_Commune_01144.push(nameCommune);
    Pourcentage_01144.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01144.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01144.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01144.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01144.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01144 = [];
const vote_lepen_01144 = [];
const vote_rejet_01144 = [];
const vote_macronpop_01144 = [];
const vote_lepenpop_01144 = [];
const vote_rejetpop_01144 = [];
const name_Commune_01144 = [];
const Pourcentage_01144 = [];
const Pourcentage_rejet_01144 = [];
const vote_gene_macron_01144 = [];
const vote_gene_lepen_01144 = [];
const vote_gene_rejet_01144 = [];

async function chartIt01144(){
    await GraphDATA01144();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01144-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01144
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01144
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01144-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01144,vote_lepen_01144,vote_rejet_01144]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01144-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01144,vote_lepenpop_01144,vote_rejetpop_01144]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01144"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01144
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01144
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01144
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01145*/
/*------------------------------------------------------------------ */
async function GraphDATA01145() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01145.push(vote_macron); 
    vote_lepen_01145.push(vote_lepen);
    vote_rejet_01145.push(vote_rejet);
    vote_macronpop_01145.push(vote_macronMediane);
    vote_lepenpop_01145.push(vote_lepenMediane);
    vote_rejetpop_01145.push(vote_rejetMediane);
    name_Commune_01145.push(nameCommune);
    Pourcentage_01145.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01145.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01145.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01145.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01145.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01145 = [];
const vote_lepen_01145 = [];
const vote_rejet_01145 = [];
const vote_macronpop_01145 = [];
const vote_lepenpop_01145 = [];
const vote_rejetpop_01145 = [];
const name_Commune_01145 = [];
const Pourcentage_01145 = [];
const Pourcentage_rejet_01145 = [];
const vote_gene_macron_01145 = [];
const vote_gene_lepen_01145 = [];
const vote_gene_rejet_01145 = [];

async function chartIt01145(){
    await GraphDATA01145();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01145-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01145
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01145
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01145-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01145,vote_lepen_01145,vote_rejet_01145]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01145-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01145,vote_lepenpop_01145,vote_rejetpop_01145]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01145"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01145
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01145
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01145
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01146*/
/*------------------------------------------------------------------ */
async function GraphDATA01146() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01146.push(vote_macron); 
    vote_lepen_01146.push(vote_lepen);
    vote_rejet_01146.push(vote_rejet);
    vote_macronpop_01146.push(vote_macronMediane);
    vote_lepenpop_01146.push(vote_lepenMediane);
    vote_rejetpop_01146.push(vote_rejetMediane);
    name_Commune_01146.push(nameCommune);
    Pourcentage_01146.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01146.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01146.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01146.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01146.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01146 = [];
const vote_lepen_01146 = [];
const vote_rejet_01146 = [];
const vote_macronpop_01146 = [];
const vote_lepenpop_01146 = [];
const vote_rejetpop_01146 = [];
const name_Commune_01146 = [];
const Pourcentage_01146 = [];
const Pourcentage_rejet_01146 = [];
const vote_gene_macron_01146 = [];
const vote_gene_lepen_01146 = [];
const vote_gene_rejet_01146 = [];

async function chartIt01146(){
    await GraphDATA01146();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01146-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01146
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01146
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01146-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01146,vote_lepen_01146,vote_rejet_01146]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01146-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01146,vote_lepenpop_01146,vote_rejetpop_01146]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01146"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01146
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01146
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01146
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01147*/
/*------------------------------------------------------------------ */
async function GraphDATA01147() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01147.push(vote_macron); 
    vote_lepen_01147.push(vote_lepen);
    vote_rejet_01147.push(vote_rejet);
    vote_macronpop_01147.push(vote_macronMediane);
    vote_lepenpop_01147.push(vote_lepenMediane);
    vote_rejetpop_01147.push(vote_rejetMediane);
    name_Commune_01147.push(nameCommune);
    Pourcentage_01147.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01147.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01147.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01147.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01147.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01147 = [];
const vote_lepen_01147 = [];
const vote_rejet_01147 = [];
const vote_macronpop_01147 = [];
const vote_lepenpop_01147 = [];
const vote_rejetpop_01147 = [];
const name_Commune_01147 = [];
const Pourcentage_01147 = [];
const Pourcentage_rejet_01147 = [];
const vote_gene_macron_01147 = [];
const vote_gene_lepen_01147 = [];
const vote_gene_rejet_01147 = [];

async function chartIt01147(){
    await GraphDATA01147();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01147-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01147
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01147
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01147-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01147,vote_lepen_01147,vote_rejet_01147]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01147-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01147,vote_lepenpop_01147,vote_rejetpop_01147]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01147"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01147
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01147
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01147
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01148*/
/*------------------------------------------------------------------ */
async function GraphDATA01148() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01148.push(vote_macron); 
    vote_lepen_01148.push(vote_lepen);
    vote_rejet_01148.push(vote_rejet);
    vote_macronpop_01148.push(vote_macronMediane);
    vote_lepenpop_01148.push(vote_lepenMediane);
    vote_rejetpop_01148.push(vote_rejetMediane);
    name_Commune_01148.push(nameCommune);
    Pourcentage_01148.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01148.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01148.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01148.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01148.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01148 = [];
const vote_lepen_01148 = [];
const vote_rejet_01148 = [];
const vote_macronpop_01148 = [];
const vote_lepenpop_01148 = [];
const vote_rejetpop_01148 = [];
const name_Commune_01148 = [];
const Pourcentage_01148 = [];
const Pourcentage_rejet_01148 = [];
const vote_gene_macron_01148 = [];
const vote_gene_lepen_01148 = [];
const vote_gene_rejet_01148 = [];

async function chartIt01148(){
    await GraphDATA01148();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01148-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01148
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01148
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01148-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01148,vote_lepen_01148,vote_rejet_01148]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01148-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01148,vote_lepenpop_01148,vote_rejetpop_01148]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01148"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01148
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01148
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01148
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01149*/
/*------------------------------------------------------------------ */
async function GraphDATA01149() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01149.push(vote_macron); 
    vote_lepen_01149.push(vote_lepen);
    vote_rejet_01149.push(vote_rejet);
    vote_macronpop_01149.push(vote_macronMediane);
    vote_lepenpop_01149.push(vote_lepenMediane);
    vote_rejetpop_01149.push(vote_rejetMediane);
    name_Commune_01149.push(nameCommune);
    Pourcentage_01149.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01149.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01149.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01149.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01149.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01149 = [];
const vote_lepen_01149 = [];
const vote_rejet_01149 = [];
const vote_macronpop_01149 = [];
const vote_lepenpop_01149 = [];
const vote_rejetpop_01149 = [];
const name_Commune_01149 = [];
const Pourcentage_01149 = [];
const Pourcentage_rejet_01149 = [];
const vote_gene_macron_01149 = [];
const vote_gene_lepen_01149 = [];
const vote_gene_rejet_01149 = [];

async function chartIt01149(){
    await GraphDATA01149();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01149-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01149
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01149
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01149-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01149,vote_lepen_01149,vote_rejet_01149]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01149-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01149,vote_lepenpop_01149,vote_rejetpop_01149]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01149"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01149
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01149
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01149
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01150*/
/*------------------------------------------------------------------ */
async function GraphDATA01150() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01150.push(vote_macron); 
    vote_lepen_01150.push(vote_lepen);
    vote_rejet_01150.push(vote_rejet);
    vote_macronpop_01150.push(vote_macronMediane);
    vote_lepenpop_01150.push(vote_lepenMediane);
    vote_rejetpop_01150.push(vote_rejetMediane);
    name_Commune_01150.push(nameCommune);
    Pourcentage_01150.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01150.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01150.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01150.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01150.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01150 = [];
const vote_lepen_01150 = [];
const vote_rejet_01150 = [];
const vote_macronpop_01150 = [];
const vote_lepenpop_01150 = [];
const vote_rejetpop_01150 = [];
const name_Commune_01150 = [];
const Pourcentage_01150 = [];
const Pourcentage_rejet_01150 = [];
const vote_gene_macron_01150 = [];
const vote_gene_lepen_01150 = [];
const vote_gene_rejet_01150 = [];

async function chartIt01150(){
    await GraphDATA01150();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01150-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01150
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01150
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01150-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01150,vote_lepen_01150,vote_rejet_01150]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01150-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01150,vote_lepenpop_01150,vote_rejetpop_01150]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01150"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01150
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01150
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01150
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01151*/
/*------------------------------------------------------------------ */
async function GraphDATA01151() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01151.push(vote_macron); 
    vote_lepen_01151.push(vote_lepen);
    vote_rejet_01151.push(vote_rejet);
    vote_macronpop_01151.push(vote_macronMediane);
    vote_lepenpop_01151.push(vote_lepenMediane);
    vote_rejetpop_01151.push(vote_rejetMediane);
    name_Commune_01151.push(nameCommune);
    Pourcentage_01151.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01151.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01151.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01151.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01151.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01151 = [];
const vote_lepen_01151 = [];
const vote_rejet_01151 = [];
const vote_macronpop_01151 = [];
const vote_lepenpop_01151 = [];
const vote_rejetpop_01151 = [];
const name_Commune_01151 = [];
const Pourcentage_01151 = [];
const Pourcentage_rejet_01151 = [];
const vote_gene_macron_01151 = [];
const vote_gene_lepen_01151 = [];
const vote_gene_rejet_01151 = [];

async function chartIt01151(){
    await GraphDATA01151();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01151-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01151
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01151
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01151-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01151,vote_lepen_01151,vote_rejet_01151]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01151-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01151,vote_lepenpop_01151,vote_rejetpop_01151]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01151"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01151
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01151
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01151
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01152*/
/*------------------------------------------------------------------ */
async function GraphDATA01152() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01152.push(vote_macron); 
    vote_lepen_01152.push(vote_lepen);
    vote_rejet_01152.push(vote_rejet);
    vote_macronpop_01152.push(vote_macronMediane);
    vote_lepenpop_01152.push(vote_lepenMediane);
    vote_rejetpop_01152.push(vote_rejetMediane);
    name_Commune_01152.push(nameCommune);
    Pourcentage_01152.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01152.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01152.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01152.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01152.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01152 = [];
const vote_lepen_01152 = [];
const vote_rejet_01152 = [];
const vote_macronpop_01152 = [];
const vote_lepenpop_01152 = [];
const vote_rejetpop_01152 = [];
const name_Commune_01152 = [];
const Pourcentage_01152 = [];
const Pourcentage_rejet_01152 = [];
const vote_gene_macron_01152 = [];
const vote_gene_lepen_01152 = [];
const vote_gene_rejet_01152 = [];

async function chartIt01152(){
    await GraphDATA01152();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01152-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01152
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01152
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01152-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01152,vote_lepen_01152,vote_rejet_01152]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01152-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01152,vote_lepenpop_01152,vote_rejetpop_01152]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01152"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01152
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01152
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01152
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01153*/
/*------------------------------------------------------------------ */
async function GraphDATA01153() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01153.push(vote_macron); 
    vote_lepen_01153.push(vote_lepen);
    vote_rejet_01153.push(vote_rejet);
    vote_macronpop_01153.push(vote_macronMediane);
    vote_lepenpop_01153.push(vote_lepenMediane);
    vote_rejetpop_01153.push(vote_rejetMediane);
    name_Commune_01153.push(nameCommune);
    Pourcentage_01153.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01153.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01153.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01153.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01153.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01153 = [];
const vote_lepen_01153 = [];
const vote_rejet_01153 = [];
const vote_macronpop_01153 = [];
const vote_lepenpop_01153 = [];
const vote_rejetpop_01153 = [];
const name_Commune_01153 = [];
const Pourcentage_01153 = [];
const Pourcentage_rejet_01153 = [];
const vote_gene_macron_01153 = [];
const vote_gene_lepen_01153 = [];
const vote_gene_rejet_01153 = [];

async function chartIt01153(){
    await GraphDATA01153();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01153-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01153
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01153
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01153-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01153,vote_lepen_01153,vote_rejet_01153]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01153-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01153,vote_lepenpop_01153,vote_rejetpop_01153]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01153"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01153
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01153
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01153
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01154*/
/*------------------------------------------------------------------ */
async function GraphDATA01154() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01154.push(vote_macron); 
    vote_lepen_01154.push(vote_lepen);
    vote_rejet_01154.push(vote_rejet);
    vote_macronpop_01154.push(vote_macronMediane);
    vote_lepenpop_01154.push(vote_lepenMediane);
    vote_rejetpop_01154.push(vote_rejetMediane);
    name_Commune_01154.push(nameCommune);
    Pourcentage_01154.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01154.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01154.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01154.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01154.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01154 = [];
const vote_lepen_01154 = [];
const vote_rejet_01154 = [];
const vote_macronpop_01154 = [];
const vote_lepenpop_01154 = [];
const vote_rejetpop_01154 = [];
const name_Commune_01154 = [];
const Pourcentage_01154 = [];
const Pourcentage_rejet_01154 = [];
const vote_gene_macron_01154 = [];
const vote_gene_lepen_01154 = [];
const vote_gene_rejet_01154 = [];

async function chartIt01154(){
    await GraphDATA01154();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01154-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01154
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01154
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01154-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01154,vote_lepen_01154,vote_rejet_01154]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01154-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01154,vote_lepenpop_01154,vote_rejetpop_01154]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01154"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01154
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01154
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01154
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01155*/
/*------------------------------------------------------------------ */
async function GraphDATA01155() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01155.push(vote_macron); 
    vote_lepen_01155.push(vote_lepen);
    vote_rejet_01155.push(vote_rejet);
    vote_macronpop_01155.push(vote_macronMediane);
    vote_lepenpop_01155.push(vote_lepenMediane);
    vote_rejetpop_01155.push(vote_rejetMediane);
    name_Commune_01155.push(nameCommune);
    Pourcentage_01155.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01155.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01155.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01155.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01155.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01155 = [];
const vote_lepen_01155 = [];
const vote_rejet_01155 = [];
const vote_macronpop_01155 = [];
const vote_lepenpop_01155 = [];
const vote_rejetpop_01155 = [];
const name_Commune_01155 = [];
const Pourcentage_01155 = [];
const Pourcentage_rejet_01155 = [];
const vote_gene_macron_01155 = [];
const vote_gene_lepen_01155 = [];
const vote_gene_rejet_01155 = [];

async function chartIt01155(){
    await GraphDATA01155();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01155-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01155
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01155
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01155-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01155,vote_lepen_01155,vote_rejet_01155]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01155-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01155,vote_lepenpop_01155,vote_rejetpop_01155]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01155"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01155
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01155
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01155
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01156*/
/*------------------------------------------------------------------ */
async function GraphDATA01156() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01156.push(vote_macron); 
    vote_lepen_01156.push(vote_lepen);
    vote_rejet_01156.push(vote_rejet);
    vote_macronpop_01156.push(vote_macronMediane);
    vote_lepenpop_01156.push(vote_lepenMediane);
    vote_rejetpop_01156.push(vote_rejetMediane);
    name_Commune_01156.push(nameCommune);
    Pourcentage_01156.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01156.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01156.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01156.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01156.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01156 = [];
const vote_lepen_01156 = [];
const vote_rejet_01156 = [];
const vote_macronpop_01156 = [];
const vote_lepenpop_01156 = [];
const vote_rejetpop_01156 = [];
const name_Commune_01156 = [];
const Pourcentage_01156 = [];
const Pourcentage_rejet_01156 = [];
const vote_gene_macron_01156 = [];
const vote_gene_lepen_01156 = [];
const vote_gene_rejet_01156 = [];

async function chartIt01156(){
    await GraphDATA01156();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01156-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01156
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01156
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01156-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01156,vote_lepen_01156,vote_rejet_01156]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01156-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01156,vote_lepenpop_01156,vote_rejetpop_01156]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01156"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01156
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01156
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01156
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01157*/
/*------------------------------------------------------------------ */
async function GraphDATA01157() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01157.push(vote_macron); 
    vote_lepen_01157.push(vote_lepen);
    vote_rejet_01157.push(vote_rejet);
    vote_macronpop_01157.push(vote_macronMediane);
    vote_lepenpop_01157.push(vote_lepenMediane);
    vote_rejetpop_01157.push(vote_rejetMediane);
    name_Commune_01157.push(nameCommune);
    Pourcentage_01157.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01157.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01157.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01157.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01157.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01157 = [];
const vote_lepen_01157 = [];
const vote_rejet_01157 = [];
const vote_macronpop_01157 = [];
const vote_lepenpop_01157 = [];
const vote_rejetpop_01157 = [];
const name_Commune_01157 = [];
const Pourcentage_01157 = [];
const Pourcentage_rejet_01157 = [];
const vote_gene_macron_01157 = [];
const vote_gene_lepen_01157 = [];
const vote_gene_rejet_01157 = [];

async function chartIt01157(){
    await GraphDATA01157();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01157-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01157
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01157
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01157-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01157,vote_lepen_01157,vote_rejet_01157]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01157-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01157,vote_lepenpop_01157,vote_rejetpop_01157]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01157"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01157
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01157
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01157
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01158*/
/*------------------------------------------------------------------ */
async function GraphDATA01158() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01158.push(vote_macron); 
    vote_lepen_01158.push(vote_lepen);
    vote_rejet_01158.push(vote_rejet);
    vote_macronpop_01158.push(vote_macronMediane);
    vote_lepenpop_01158.push(vote_lepenMediane);
    vote_rejetpop_01158.push(vote_rejetMediane);
    name_Commune_01158.push(nameCommune);
    Pourcentage_01158.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01158.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01158.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01158.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01158.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01158 = [];
const vote_lepen_01158 = [];
const vote_rejet_01158 = [];
const vote_macronpop_01158 = [];
const vote_lepenpop_01158 = [];
const vote_rejetpop_01158 = [];
const name_Commune_01158 = [];
const Pourcentage_01158 = [];
const Pourcentage_rejet_01158 = [];
const vote_gene_macron_01158 = [];
const vote_gene_lepen_01158 = [];
const vote_gene_rejet_01158 = [];

async function chartIt01158(){
    await GraphDATA01158();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01158-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01158
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01158
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01158-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01158,vote_lepen_01158,vote_rejet_01158]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01158-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01158,vote_lepenpop_01158,vote_rejetpop_01158]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01158"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01158
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01158
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01158
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01159*/
/*------------------------------------------------------------------ */
async function GraphDATA01159() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01159.push(vote_macron); 
    vote_lepen_01159.push(vote_lepen);
    vote_rejet_01159.push(vote_rejet);
    vote_macronpop_01159.push(vote_macronMediane);
    vote_lepenpop_01159.push(vote_lepenMediane);
    vote_rejetpop_01159.push(vote_rejetMediane);
    name_Commune_01159.push(nameCommune);
    Pourcentage_01159.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01159.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01159.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01159.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01159.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01159 = [];
const vote_lepen_01159 = [];
const vote_rejet_01159 = [];
const vote_macronpop_01159 = [];
const vote_lepenpop_01159 = [];
const vote_rejetpop_01159 = [];
const name_Commune_01159 = [];
const Pourcentage_01159 = [];
const Pourcentage_rejet_01159 = [];
const vote_gene_macron_01159 = [];
const vote_gene_lepen_01159 = [];
const vote_gene_rejet_01159 = [];

async function chartIt01159(){
    await GraphDATA01159();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01159-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01159
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01159
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01159-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01159,vote_lepen_01159,vote_rejet_01159]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01159-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01159,vote_lepenpop_01159,vote_rejetpop_01159]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01159"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01159
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01159
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01159
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01160*/
/*------------------------------------------------------------------ */
async function GraphDATA01160() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01160.push(vote_macron); 
    vote_lepen_01160.push(vote_lepen);
    vote_rejet_01160.push(vote_rejet);
    vote_macronpop_01160.push(vote_macronMediane);
    vote_lepenpop_01160.push(vote_lepenMediane);
    vote_rejetpop_01160.push(vote_rejetMediane);
    name_Commune_01160.push(nameCommune);
    Pourcentage_01160.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01160.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01160.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01160.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01160.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01160 = [];
const vote_lepen_01160 = [];
const vote_rejet_01160 = [];
const vote_macronpop_01160 = [];
const vote_lepenpop_01160 = [];
const vote_rejetpop_01160 = [];
const name_Commune_01160 = [];
const Pourcentage_01160 = [];
const Pourcentage_rejet_01160 = [];
const vote_gene_macron_01160 = [];
const vote_gene_lepen_01160 = [];
const vote_gene_rejet_01160 = [];

async function chartIt01160(){
    await GraphDATA01160();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01160-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01160
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01160
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01160-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01160,vote_lepen_01160,vote_rejet_01160]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01160-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01160,vote_lepenpop_01160,vote_rejetpop_01160]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01160"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01160
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01160
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01160
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01161*/
/*------------------------------------------------------------------ */
async function GraphDATA01161() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01161.push(vote_macron); 
    vote_lepen_01161.push(vote_lepen);
    vote_rejet_01161.push(vote_rejet);
    vote_macronpop_01161.push(vote_macronMediane);
    vote_lepenpop_01161.push(vote_lepenMediane);
    vote_rejetpop_01161.push(vote_rejetMediane);
    name_Commune_01161.push(nameCommune);
    Pourcentage_01161.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01161.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01161.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01161.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01161.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01161 = [];
const vote_lepen_01161 = [];
const vote_rejet_01161 = [];
const vote_macronpop_01161 = [];
const vote_lepenpop_01161 = [];
const vote_rejetpop_01161 = [];
const name_Commune_01161 = [];
const Pourcentage_01161 = [];
const Pourcentage_rejet_01161 = [];
const vote_gene_macron_01161 = [];
const vote_gene_lepen_01161 = [];
const vote_gene_rejet_01161 = [];

async function chartIt01161(){
    await GraphDATA01161();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01161-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01161
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01161
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01161-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01161,vote_lepen_01161,vote_rejet_01161]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01161-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01161,vote_lepenpop_01161,vote_rejetpop_01161]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01161"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01161
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01161
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01161
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01162*/
/*------------------------------------------------------------------ */
async function GraphDATA01162() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01162.push(vote_macron); 
    vote_lepen_01162.push(vote_lepen);
    vote_rejet_01162.push(vote_rejet);
    vote_macronpop_01162.push(vote_macronMediane);
    vote_lepenpop_01162.push(vote_lepenMediane);
    vote_rejetpop_01162.push(vote_rejetMediane);
    name_Commune_01162.push(nameCommune);
    Pourcentage_01162.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01162.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01162.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01162.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01162.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01162 = [];
const vote_lepen_01162 = [];
const vote_rejet_01162 = [];
const vote_macronpop_01162 = [];
const vote_lepenpop_01162 = [];
const vote_rejetpop_01162 = [];
const name_Commune_01162 = [];
const Pourcentage_01162 = [];
const Pourcentage_rejet_01162 = [];
const vote_gene_macron_01162 = [];
const vote_gene_lepen_01162 = [];
const vote_gene_rejet_01162 = [];

async function chartIt01162(){
    await GraphDATA01162();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01162-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01162
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01162
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01162-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01162,vote_lepen_01162,vote_rejet_01162]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01162-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01162,vote_lepenpop_01162,vote_rejetpop_01162]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01162"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01162
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01162
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01162
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01163*/
/*------------------------------------------------------------------ */
async function GraphDATA01163() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01163.push(vote_macron); 
    vote_lepen_01163.push(vote_lepen);
    vote_rejet_01163.push(vote_rejet);
    vote_macronpop_01163.push(vote_macronMediane);
    vote_lepenpop_01163.push(vote_lepenMediane);
    vote_rejetpop_01163.push(vote_rejetMediane);
    name_Commune_01163.push(nameCommune);
    Pourcentage_01163.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01163.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01163.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01163.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01163.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01163 = [];
const vote_lepen_01163 = [];
const vote_rejet_01163 = [];
const vote_macronpop_01163 = [];
const vote_lepenpop_01163 = [];
const vote_rejetpop_01163 = [];
const name_Commune_01163 = [];
const Pourcentage_01163 = [];
const Pourcentage_rejet_01163 = [];
const vote_gene_macron_01163 = [];
const vote_gene_lepen_01163 = [];
const vote_gene_rejet_01163 = [];

async function chartIt01163(){
    await GraphDATA01163();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01163-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01163
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01163
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01163-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01163,vote_lepen_01163,vote_rejet_01163]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01163-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01163,vote_lepenpop_01163,vote_rejetpop_01163]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01163"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01163
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01163
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01163
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01164*/
/*------------------------------------------------------------------ */
async function GraphDATA01164() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01164.push(vote_macron); 
    vote_lepen_01164.push(vote_lepen);
    vote_rejet_01164.push(vote_rejet);
    vote_macronpop_01164.push(vote_macronMediane);
    vote_lepenpop_01164.push(vote_lepenMediane);
    vote_rejetpop_01164.push(vote_rejetMediane);
    name_Commune_01164.push(nameCommune);
    Pourcentage_01164.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01164.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01164.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01164.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01164.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01164 = [];
const vote_lepen_01164 = [];
const vote_rejet_01164 = [];
const vote_macronpop_01164 = [];
const vote_lepenpop_01164 = [];
const vote_rejetpop_01164 = [];
const name_Commune_01164 = [];
const Pourcentage_01164 = [];
const Pourcentage_rejet_01164 = [];
const vote_gene_macron_01164 = [];
const vote_gene_lepen_01164 = [];
const vote_gene_rejet_01164 = [];

async function chartIt01164(){
    await GraphDATA01164();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01164-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01164
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01164
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01164-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01164,vote_lepen_01164,vote_rejet_01164]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01164-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01164,vote_lepenpop_01164,vote_rejetpop_01164]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01164"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01164
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01164
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01164
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01165*/
/*------------------------------------------------------------------ */
async function GraphDATA01165() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01165.push(vote_macron); 
    vote_lepen_01165.push(vote_lepen);
    vote_rejet_01165.push(vote_rejet);
    vote_macronpop_01165.push(vote_macronMediane);
    vote_lepenpop_01165.push(vote_lepenMediane);
    vote_rejetpop_01165.push(vote_rejetMediane);
    name_Commune_01165.push(nameCommune);
    Pourcentage_01165.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01165.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01165.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01165.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01165.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01165 = [];
const vote_lepen_01165 = [];
const vote_rejet_01165 = [];
const vote_macronpop_01165 = [];
const vote_lepenpop_01165 = [];
const vote_rejetpop_01165 = [];
const name_Commune_01165 = [];
const Pourcentage_01165 = [];
const Pourcentage_rejet_01165 = [];
const vote_gene_macron_01165 = [];
const vote_gene_lepen_01165 = [];
const vote_gene_rejet_01165 = [];

async function chartIt01165(){
    await GraphDATA01165();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01165-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01165
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01165
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01165-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01165,vote_lepen_01165,vote_rejet_01165]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01165-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01165,vote_lepenpop_01165,vote_rejetpop_01165]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01165"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01165
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01165
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01165
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01166*/
/*------------------------------------------------------------------ */
async function GraphDATA01166() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01166.push(vote_macron); 
    vote_lepen_01166.push(vote_lepen);
    vote_rejet_01166.push(vote_rejet);
    vote_macronpop_01166.push(vote_macronMediane);
    vote_lepenpop_01166.push(vote_lepenMediane);
    vote_rejetpop_01166.push(vote_rejetMediane);
    name_Commune_01166.push(nameCommune);
    Pourcentage_01166.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01166.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01166.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01166.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01166.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01166 = [];
const vote_lepen_01166 = [];
const vote_rejet_01166 = [];
const vote_macronpop_01166 = [];
const vote_lepenpop_01166 = [];
const vote_rejetpop_01166 = [];
const name_Commune_01166 = [];
const Pourcentage_01166 = [];
const Pourcentage_rejet_01166 = [];
const vote_gene_macron_01166 = [];
const vote_gene_lepen_01166 = [];
const vote_gene_rejet_01166 = [];

async function chartIt01166(){
    await GraphDATA01166();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01166-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01166
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01166
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01166-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01166,vote_lepen_01166,vote_rejet_01166]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01166-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01166,vote_lepenpop_01166,vote_rejetpop_01166]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01166"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01166
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01166
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01166
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01167*/
/*------------------------------------------------------------------ */
async function GraphDATA01167() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01167.push(vote_macron); 
    vote_lepen_01167.push(vote_lepen);
    vote_rejet_01167.push(vote_rejet);
    vote_macronpop_01167.push(vote_macronMediane);
    vote_lepenpop_01167.push(vote_lepenMediane);
    vote_rejetpop_01167.push(vote_rejetMediane);
    name_Commune_01167.push(nameCommune);
    Pourcentage_01167.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01167.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01167.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01167.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01167.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01167 = [];
const vote_lepen_01167 = [];
const vote_rejet_01167 = [];
const vote_macronpop_01167 = [];
const vote_lepenpop_01167 = [];
const vote_rejetpop_01167 = [];
const name_Commune_01167 = [];
const Pourcentage_01167 = [];
const Pourcentage_rejet_01167 = [];
const vote_gene_macron_01167 = [];
const vote_gene_lepen_01167 = [];
const vote_gene_rejet_01167 = [];

async function chartIt01167(){
    await GraphDATA01167();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01167-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01167
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01167
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01167-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01167,vote_lepen_01167,vote_rejet_01167]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01167-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01167,vote_lepenpop_01167,vote_rejetpop_01167]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01167"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01167
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01167
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01167
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01168*/
/*------------------------------------------------------------------ */
async function GraphDATA01168() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01168.push(vote_macron); 
    vote_lepen_01168.push(vote_lepen);
    vote_rejet_01168.push(vote_rejet);
    vote_macronpop_01168.push(vote_macronMediane);
    vote_lepenpop_01168.push(vote_lepenMediane);
    vote_rejetpop_01168.push(vote_rejetMediane);
    name_Commune_01168.push(nameCommune);
    Pourcentage_01168.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01168.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01168.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01168.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01168.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01168 = [];
const vote_lepen_01168 = [];
const vote_rejet_01168 = [];
const vote_macronpop_01168 = [];
const vote_lepenpop_01168 = [];
const vote_rejetpop_01168 = [];
const name_Commune_01168 = [];
const Pourcentage_01168 = [];
const Pourcentage_rejet_01168 = [];
const vote_gene_macron_01168 = [];
const vote_gene_lepen_01168 = [];
const vote_gene_rejet_01168 = [];

async function chartIt01168(){
    await GraphDATA01168();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01168-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01168
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01168
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01168-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01168,vote_lepen_01168,vote_rejet_01168]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01168-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01168,vote_lepenpop_01168,vote_rejetpop_01168]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01168"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01168
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01168
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01168
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01169*/
/*------------------------------------------------------------------ */
async function GraphDATA01169() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01169.push(vote_macron); 
    vote_lepen_01169.push(vote_lepen);
    vote_rejet_01169.push(vote_rejet);
    vote_macronpop_01169.push(vote_macronMediane);
    vote_lepenpop_01169.push(vote_lepenMediane);
    vote_rejetpop_01169.push(vote_rejetMediane);
    name_Commune_01169.push(nameCommune);
    Pourcentage_01169.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01169.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01169.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01169.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01169.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01169 = [];
const vote_lepen_01169 = [];
const vote_rejet_01169 = [];
const vote_macronpop_01169 = [];
const vote_lepenpop_01169 = [];
const vote_rejetpop_01169 = [];
const name_Commune_01169 = [];
const Pourcentage_01169 = [];
const Pourcentage_rejet_01169 = [];
const vote_gene_macron_01169 = [];
const vote_gene_lepen_01169 = [];
const vote_gene_rejet_01169 = [];

async function chartIt01169(){
    await GraphDATA01169();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01169-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01169
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01169
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01169-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01169,vote_lepen_01169,vote_rejet_01169]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01169-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01169,vote_lepenpop_01169,vote_rejetpop_01169]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01169"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01169
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01169
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01169
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01170*/
/*------------------------------------------------------------------ */
async function GraphDATA01170() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01170.push(vote_macron); 
    vote_lepen_01170.push(vote_lepen);
    vote_rejet_01170.push(vote_rejet);
    vote_macronpop_01170.push(vote_macronMediane);
    vote_lepenpop_01170.push(vote_lepenMediane);
    vote_rejetpop_01170.push(vote_rejetMediane);
    name_Commune_01170.push(nameCommune);
    Pourcentage_01170.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01170.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01170.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01170.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01170.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01170 = [];
const vote_lepen_01170 = [];
const vote_rejet_01170 = [];
const vote_macronpop_01170 = [];
const vote_lepenpop_01170 = [];
const vote_rejetpop_01170 = [];
const name_Commune_01170 = [];
const Pourcentage_01170 = [];
const Pourcentage_rejet_01170 = [];
const vote_gene_macron_01170 = [];
const vote_gene_lepen_01170 = [];
const vote_gene_rejet_01170 = [];

async function chartIt01170(){
    await GraphDATA01170();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01170-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01170
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01170
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01170-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01170,vote_lepen_01170,vote_rejet_01170]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01170-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01170,vote_lepenpop_01170,vote_rejetpop_01170]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01170"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01170
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01170
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01170
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01171*/
/*------------------------------------------------------------------ */
async function GraphDATA01171() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01171.push(vote_macron); 
    vote_lepen_01171.push(vote_lepen);
    vote_rejet_01171.push(vote_rejet);
    vote_macronpop_01171.push(vote_macronMediane);
    vote_lepenpop_01171.push(vote_lepenMediane);
    vote_rejetpop_01171.push(vote_rejetMediane);
    name_Commune_01171.push(nameCommune);
    Pourcentage_01171.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01171.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01171.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01171.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01171.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01171 = [];
const vote_lepen_01171 = [];
const vote_rejet_01171 = [];
const vote_macronpop_01171 = [];
const vote_lepenpop_01171 = [];
const vote_rejetpop_01171 = [];
const name_Commune_01171 = [];
const Pourcentage_01171 = [];
const Pourcentage_rejet_01171 = [];
const vote_gene_macron_01171 = [];
const vote_gene_lepen_01171 = [];
const vote_gene_rejet_01171 = [];

async function chartIt01171(){
    await GraphDATA01171();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01171-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01171
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01171
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01171-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01171,vote_lepen_01171,vote_rejet_01171]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01171-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01171,vote_lepenpop_01171,vote_rejetpop_01171]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01171"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01171
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01171
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01171
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01172*/
/*------------------------------------------------------------------ */
async function GraphDATA01172() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01172.push(vote_macron); 
    vote_lepen_01172.push(vote_lepen);
    vote_rejet_01172.push(vote_rejet);
    vote_macronpop_01172.push(vote_macronMediane);
    vote_lepenpop_01172.push(vote_lepenMediane);
    vote_rejetpop_01172.push(vote_rejetMediane);
    name_Commune_01172.push(nameCommune);
    Pourcentage_01172.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01172.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01172.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01172.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01172.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01172 = [];
const vote_lepen_01172 = [];
const vote_rejet_01172 = [];
const vote_macronpop_01172 = [];
const vote_lepenpop_01172 = [];
const vote_rejetpop_01172 = [];
const name_Commune_01172 = [];
const Pourcentage_01172 = [];
const Pourcentage_rejet_01172 = [];
const vote_gene_macron_01172 = [];
const vote_gene_lepen_01172 = [];
const vote_gene_rejet_01172 = [];

async function chartIt01172(){
    await GraphDATA01172();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01172-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01172
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01172
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01172-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01172,vote_lepen_01172,vote_rejet_01172]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01172-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01172,vote_lepenpop_01172,vote_rejetpop_01172]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01172"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01172
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01172
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01172
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01173*/
/*------------------------------------------------------------------ */
async function GraphDATA01173() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01173.push(vote_macron); 
    vote_lepen_01173.push(vote_lepen);
    vote_rejet_01173.push(vote_rejet);
    vote_macronpop_01173.push(vote_macronMediane);
    vote_lepenpop_01173.push(vote_lepenMediane);
    vote_rejetpop_01173.push(vote_rejetMediane);
    name_Commune_01173.push(nameCommune);
    Pourcentage_01173.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01173.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01173.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01173.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01173.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01173 = [];
const vote_lepen_01173 = [];
const vote_rejet_01173 = [];
const vote_macronpop_01173 = [];
const vote_lepenpop_01173 = [];
const vote_rejetpop_01173 = [];
const name_Commune_01173 = [];
const Pourcentage_01173 = [];
const Pourcentage_rejet_01173 = [];
const vote_gene_macron_01173 = [];
const vote_gene_lepen_01173 = [];
const vote_gene_rejet_01173 = [];

async function chartIt01173(){
    await GraphDATA01173();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01173-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01173
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01173
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01173-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01173,vote_lepen_01173,vote_rejet_01173]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01173-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01173,vote_lepenpop_01173,vote_rejetpop_01173]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01173"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01173
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01173
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01173
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01174*/
/*------------------------------------------------------------------ */
async function GraphDATA01174() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01174.push(vote_macron); 
    vote_lepen_01174.push(vote_lepen);
    vote_rejet_01174.push(vote_rejet);
    vote_macronpop_01174.push(vote_macronMediane);
    vote_lepenpop_01174.push(vote_lepenMediane);
    vote_rejetpop_01174.push(vote_rejetMediane);
    name_Commune_01174.push(nameCommune);
    Pourcentage_01174.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01174.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01174.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01174.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01174.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01174 = [];
const vote_lepen_01174 = [];
const vote_rejet_01174 = [];
const vote_macronpop_01174 = [];
const vote_lepenpop_01174 = [];
const vote_rejetpop_01174 = [];
const name_Commune_01174 = [];
const Pourcentage_01174 = [];
const Pourcentage_rejet_01174 = [];
const vote_gene_macron_01174 = [];
const vote_gene_lepen_01174 = [];
const vote_gene_rejet_01174 = [];

async function chartIt01174(){
    await GraphDATA01174();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01174-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01174
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01174
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01174-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01174,vote_lepen_01174,vote_rejet_01174]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01174-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01174,vote_lepenpop_01174,vote_rejetpop_01174]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01174"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01174
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01174
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01174
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01175*/
/*------------------------------------------------------------------ */
async function GraphDATA01175() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01175.push(vote_macron); 
    vote_lepen_01175.push(vote_lepen);
    vote_rejet_01175.push(vote_rejet);
    vote_macronpop_01175.push(vote_macronMediane);
    vote_lepenpop_01175.push(vote_lepenMediane);
    vote_rejetpop_01175.push(vote_rejetMediane);
    name_Commune_01175.push(nameCommune);
    Pourcentage_01175.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01175.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01175.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01175.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01175.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01175 = [];
const vote_lepen_01175 = [];
const vote_rejet_01175 = [];
const vote_macronpop_01175 = [];
const vote_lepenpop_01175 = [];
const vote_rejetpop_01175 = [];
const name_Commune_01175 = [];
const Pourcentage_01175 = [];
const Pourcentage_rejet_01175 = [];
const vote_gene_macron_01175 = [];
const vote_gene_lepen_01175 = [];
const vote_gene_rejet_01175 = [];

async function chartIt01175(){
    await GraphDATA01175();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01175-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01175
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01175
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01175-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01175,vote_lepen_01175,vote_rejet_01175]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01175-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01175,vote_lepenpop_01175,vote_rejetpop_01175]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01175"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01175
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01175
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01175
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01176*/
/*------------------------------------------------------------------ */
async function GraphDATA01176() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01176.push(vote_macron); 
    vote_lepen_01176.push(vote_lepen);
    vote_rejet_01176.push(vote_rejet);
    vote_macronpop_01176.push(vote_macronMediane);
    vote_lepenpop_01176.push(vote_lepenMediane);
    vote_rejetpop_01176.push(vote_rejetMediane);
    name_Commune_01176.push(nameCommune);
    Pourcentage_01176.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01176.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01176.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01176.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01176.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01176 = [];
const vote_lepen_01176 = [];
const vote_rejet_01176 = [];
const vote_macronpop_01176 = [];
const vote_lepenpop_01176 = [];
const vote_rejetpop_01176 = [];
const name_Commune_01176 = [];
const Pourcentage_01176 = [];
const Pourcentage_rejet_01176 = [];
const vote_gene_macron_01176 = [];
const vote_gene_lepen_01176 = [];
const vote_gene_rejet_01176 = [];

async function chartIt01176(){
    await GraphDATA01176();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01176-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01176
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01176
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01176-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01176,vote_lepen_01176,vote_rejet_01176]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01176-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01176,vote_lepenpop_01176,vote_rejetpop_01176]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01176"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01176
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01176
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01176
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01177*/
/*------------------------------------------------------------------ */
async function GraphDATA01177() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01177.push(vote_macron); 
    vote_lepen_01177.push(vote_lepen);
    vote_rejet_01177.push(vote_rejet);
    vote_macronpop_01177.push(vote_macronMediane);
    vote_lepenpop_01177.push(vote_lepenMediane);
    vote_rejetpop_01177.push(vote_rejetMediane);
    name_Commune_01177.push(nameCommune);
    Pourcentage_01177.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01177.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01177.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01177.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01177.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01177 = [];
const vote_lepen_01177 = [];
const vote_rejet_01177 = [];
const vote_macronpop_01177 = [];
const vote_lepenpop_01177 = [];
const vote_rejetpop_01177 = [];
const name_Commune_01177 = [];
const Pourcentage_01177 = [];
const Pourcentage_rejet_01177 = [];
const vote_gene_macron_01177 = [];
const vote_gene_lepen_01177 = [];
const vote_gene_rejet_01177 = [];

async function chartIt01177(){
    await GraphDATA01177();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01177-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01177
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01177
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01177-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01177,vote_lepen_01177,vote_rejet_01177]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01177-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01177,vote_lepenpop_01177,vote_rejetpop_01177]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01177"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01177
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01177
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01177
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01178*/
/*------------------------------------------------------------------ */
async function GraphDATA01178() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01178.push(vote_macron); 
    vote_lepen_01178.push(vote_lepen);
    vote_rejet_01178.push(vote_rejet);
    vote_macronpop_01178.push(vote_macronMediane);
    vote_lepenpop_01178.push(vote_lepenMediane);
    vote_rejetpop_01178.push(vote_rejetMediane);
    name_Commune_01178.push(nameCommune);
    Pourcentage_01178.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01178.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01178.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01178.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01178.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01178 = [];
const vote_lepen_01178 = [];
const vote_rejet_01178 = [];
const vote_macronpop_01178 = [];
const vote_lepenpop_01178 = [];
const vote_rejetpop_01178 = [];
const name_Commune_01178 = [];
const Pourcentage_01178 = [];
const Pourcentage_rejet_01178 = [];
const vote_gene_macron_01178 = [];
const vote_gene_lepen_01178 = [];
const vote_gene_rejet_01178 = [];

async function chartIt01178(){
    await GraphDATA01178();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01178-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01178
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01178
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01178-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01178,vote_lepen_01178,vote_rejet_01178]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01178-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01178,vote_lepenpop_01178,vote_rejetpop_01178]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01178"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01178
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01178
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01178
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01179*/
/*------------------------------------------------------------------ */
async function GraphDATA01179() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01179.push(vote_macron); 
    vote_lepen_01179.push(vote_lepen);
    vote_rejet_01179.push(vote_rejet);
    vote_macronpop_01179.push(vote_macronMediane);
    vote_lepenpop_01179.push(vote_lepenMediane);
    vote_rejetpop_01179.push(vote_rejetMediane);
    name_Commune_01179.push(nameCommune);
    Pourcentage_01179.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01179.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01179.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01179.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01179.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01179 = [];
const vote_lepen_01179 = [];
const vote_rejet_01179 = [];
const vote_macronpop_01179 = [];
const vote_lepenpop_01179 = [];
const vote_rejetpop_01179 = [];
const name_Commune_01179 = [];
const Pourcentage_01179 = [];
const Pourcentage_rejet_01179 = [];
const vote_gene_macron_01179 = [];
const vote_gene_lepen_01179 = [];
const vote_gene_rejet_01179 = [];

async function chartIt01179(){
    await GraphDATA01179();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01179-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01179
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01179
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01179-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01179,vote_lepen_01179,vote_rejet_01179]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01179-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01179,vote_lepenpop_01179,vote_rejetpop_01179]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01179"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01179
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01179
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01179
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01180*/
/*------------------------------------------------------------------ */
async function GraphDATA01180() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01180.push(vote_macron); 
    vote_lepen_01180.push(vote_lepen);
    vote_rejet_01180.push(vote_rejet);
    vote_macronpop_01180.push(vote_macronMediane);
    vote_lepenpop_01180.push(vote_lepenMediane);
    vote_rejetpop_01180.push(vote_rejetMediane);
    name_Commune_01180.push(nameCommune);
    Pourcentage_01180.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01180.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01180.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01180.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01180.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01180 = [];
const vote_lepen_01180 = [];
const vote_rejet_01180 = [];
const vote_macronpop_01180 = [];
const vote_lepenpop_01180 = [];
const vote_rejetpop_01180 = [];
const name_Commune_01180 = [];
const Pourcentage_01180 = [];
const Pourcentage_rejet_01180 = [];
const vote_gene_macron_01180 = [];
const vote_gene_lepen_01180 = [];
const vote_gene_rejet_01180 = [];

async function chartIt01180(){
    await GraphDATA01180();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01180-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01180
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01180
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01180-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01180,vote_lepen_01180,vote_rejet_01180]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01180-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01180,vote_lepenpop_01180,vote_rejetpop_01180]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01180"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01180
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01180
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01180
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01181*/
/*------------------------------------------------------------------ */
async function GraphDATA01181() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01181.push(vote_macron); 
    vote_lepen_01181.push(vote_lepen);
    vote_rejet_01181.push(vote_rejet);
    vote_macronpop_01181.push(vote_macronMediane);
    vote_lepenpop_01181.push(vote_lepenMediane);
    vote_rejetpop_01181.push(vote_rejetMediane);
    name_Commune_01181.push(nameCommune);
    Pourcentage_01181.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01181.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01181.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01181.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01181.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01181 = [];
const vote_lepen_01181 = [];
const vote_rejet_01181 = [];
const vote_macronpop_01181 = [];
const vote_lepenpop_01181 = [];
const vote_rejetpop_01181 = [];
const name_Commune_01181 = [];
const Pourcentage_01181 = [];
const Pourcentage_rejet_01181 = [];
const vote_gene_macron_01181 = [];
const vote_gene_lepen_01181 = [];
const vote_gene_rejet_01181 = [];

async function chartIt01181(){
    await GraphDATA01181();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01181-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01181
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01181
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01181-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01181,vote_lepen_01181,vote_rejet_01181]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01181-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01181,vote_lepenpop_01181,vote_rejetpop_01181]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01181"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01181
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01181
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01181
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01182*/
/*------------------------------------------------------------------ */
async function GraphDATA01182() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01182.push(vote_macron); 
    vote_lepen_01182.push(vote_lepen);
    vote_rejet_01182.push(vote_rejet);
    vote_macronpop_01182.push(vote_macronMediane);
    vote_lepenpop_01182.push(vote_lepenMediane);
    vote_rejetpop_01182.push(vote_rejetMediane);
    name_Commune_01182.push(nameCommune);
    Pourcentage_01182.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01182.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01182.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01182.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01182.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01182 = [];
const vote_lepen_01182 = [];
const vote_rejet_01182 = [];
const vote_macronpop_01182 = [];
const vote_lepenpop_01182 = [];
const vote_rejetpop_01182 = [];
const name_Commune_01182 = [];
const Pourcentage_01182 = [];
const Pourcentage_rejet_01182 = [];
const vote_gene_macron_01182 = [];
const vote_gene_lepen_01182 = [];
const vote_gene_rejet_01182 = [];

async function chartIt01182(){
    await GraphDATA01182();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01182-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01182
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01182
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01182-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01182,vote_lepen_01182,vote_rejet_01182]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01182-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01182,vote_lepenpop_01182,vote_rejetpop_01182]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01182"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01182
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01182
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01182
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01183*/
/*------------------------------------------------------------------ */
async function GraphDATA01183() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01183.push(vote_macron); 
    vote_lepen_01183.push(vote_lepen);
    vote_rejet_01183.push(vote_rejet);
    vote_macronpop_01183.push(vote_macronMediane);
    vote_lepenpop_01183.push(vote_lepenMediane);
    vote_rejetpop_01183.push(vote_rejetMediane);
    name_Commune_01183.push(nameCommune);
    Pourcentage_01183.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01183.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01183.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01183.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01183.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01183 = [];
const vote_lepen_01183 = [];
const vote_rejet_01183 = [];
const vote_macronpop_01183 = [];
const vote_lepenpop_01183 = [];
const vote_rejetpop_01183 = [];
const name_Commune_01183 = [];
const Pourcentage_01183 = [];
const Pourcentage_rejet_01183 = [];
const vote_gene_macron_01183 = [];
const vote_gene_lepen_01183 = [];
const vote_gene_rejet_01183 = [];

async function chartIt01183(){
    await GraphDATA01183();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01183-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01183
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01183
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01183-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01183,vote_lepen_01183,vote_rejet_01183]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01183-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01183,vote_lepenpop_01183,vote_rejetpop_01183]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01183"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01183
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01183
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01183
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01184*/
/*------------------------------------------------------------------ */
async function GraphDATA01184() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01184.push(vote_macron); 
    vote_lepen_01184.push(vote_lepen);
    vote_rejet_01184.push(vote_rejet);
    vote_macronpop_01184.push(vote_macronMediane);
    vote_lepenpop_01184.push(vote_lepenMediane);
    vote_rejetpop_01184.push(vote_rejetMediane);
    name_Commune_01184.push(nameCommune);
    Pourcentage_01184.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01184.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01184.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01184.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01184.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01184 = [];
const vote_lepen_01184 = [];
const vote_rejet_01184 = [];
const vote_macronpop_01184 = [];
const vote_lepenpop_01184 = [];
const vote_rejetpop_01184 = [];
const name_Commune_01184 = [];
const Pourcentage_01184 = [];
const Pourcentage_rejet_01184 = [];
const vote_gene_macron_01184 = [];
const vote_gene_lepen_01184 = [];
const vote_gene_rejet_01184 = [];

async function chartIt01184(){
    await GraphDATA01184();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01184-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01184
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01184
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01184-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01184,vote_lepen_01184,vote_rejet_01184]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01184-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01184,vote_lepenpop_01184,vote_rejetpop_01184]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01184"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01184
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01184
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01184
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01185*/
/*------------------------------------------------------------------ */
async function GraphDATA01185() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01185.push(vote_macron); 
    vote_lepen_01185.push(vote_lepen);
    vote_rejet_01185.push(vote_rejet);
    vote_macronpop_01185.push(vote_macronMediane);
    vote_lepenpop_01185.push(vote_lepenMediane);
    vote_rejetpop_01185.push(vote_rejetMediane);
    name_Commune_01185.push(nameCommune);
    Pourcentage_01185.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01185.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01185.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01185.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01185.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01185 = [];
const vote_lepen_01185 = [];
const vote_rejet_01185 = [];
const vote_macronpop_01185 = [];
const vote_lepenpop_01185 = [];
const vote_rejetpop_01185 = [];
const name_Commune_01185 = [];
const Pourcentage_01185 = [];
const Pourcentage_rejet_01185 = [];
const vote_gene_macron_01185 = [];
const vote_gene_lepen_01185 = [];
const vote_gene_rejet_01185 = [];

async function chartIt01185(){
    await GraphDATA01185();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01185-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01185
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01185
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01185-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01185,vote_lepen_01185,vote_rejet_01185]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01185-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01185,vote_lepenpop_01185,vote_rejetpop_01185]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01185"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01185
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01185
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01185
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01186*/
/*------------------------------------------------------------------ */
async function GraphDATA01186() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01186.push(vote_macron); 
    vote_lepen_01186.push(vote_lepen);
    vote_rejet_01186.push(vote_rejet);
    vote_macronpop_01186.push(vote_macronMediane);
    vote_lepenpop_01186.push(vote_lepenMediane);
    vote_rejetpop_01186.push(vote_rejetMediane);
    name_Commune_01186.push(nameCommune);
    Pourcentage_01186.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01186.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01186.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01186.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01186.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01186 = [];
const vote_lepen_01186 = [];
const vote_rejet_01186 = [];
const vote_macronpop_01186 = [];
const vote_lepenpop_01186 = [];
const vote_rejetpop_01186 = [];
const name_Commune_01186 = [];
const Pourcentage_01186 = [];
const Pourcentage_rejet_01186 = [];
const vote_gene_macron_01186 = [];
const vote_gene_lepen_01186 = [];
const vote_gene_rejet_01186 = [];

async function chartIt01186(){
    await GraphDATA01186();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01186-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01186
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01186
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01186-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01186,vote_lepen_01186,vote_rejet_01186]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01186-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01186,vote_lepenpop_01186,vote_rejetpop_01186]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01186"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01186
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01186
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01186
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01187*/
/*------------------------------------------------------------------ */
async function GraphDATA01187() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01187.push(vote_macron); 
    vote_lepen_01187.push(vote_lepen);
    vote_rejet_01187.push(vote_rejet);
    vote_macronpop_01187.push(vote_macronMediane);
    vote_lepenpop_01187.push(vote_lepenMediane);
    vote_rejetpop_01187.push(vote_rejetMediane);
    name_Commune_01187.push(nameCommune);
    Pourcentage_01187.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01187.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01187.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01187.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01187.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01187 = [];
const vote_lepen_01187 = [];
const vote_rejet_01187 = [];
const vote_macronpop_01187 = [];
const vote_lepenpop_01187 = [];
const vote_rejetpop_01187 = [];
const name_Commune_01187 = [];
const Pourcentage_01187 = [];
const Pourcentage_rejet_01187 = [];
const vote_gene_macron_01187 = [];
const vote_gene_lepen_01187 = [];
const vote_gene_rejet_01187 = [];

async function chartIt01187(){
    await GraphDATA01187();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01187-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01187
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01187
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01187-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01187,vote_lepen_01187,vote_rejet_01187]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01187-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01187,vote_lepenpop_01187,vote_rejetpop_01187]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01187"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01187
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01187
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01187
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01188*/
/*------------------------------------------------------------------ */
async function GraphDATA01188() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01188.push(vote_macron); 
    vote_lepen_01188.push(vote_lepen);
    vote_rejet_01188.push(vote_rejet);
    vote_macronpop_01188.push(vote_macronMediane);
    vote_lepenpop_01188.push(vote_lepenMediane);
    vote_rejetpop_01188.push(vote_rejetMediane);
    name_Commune_01188.push(nameCommune);
    Pourcentage_01188.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01188.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01188.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01188.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01188.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01188 = [];
const vote_lepen_01188 = [];
const vote_rejet_01188 = [];
const vote_macronpop_01188 = [];
const vote_lepenpop_01188 = [];
const vote_rejetpop_01188 = [];
const name_Commune_01188 = [];
const Pourcentage_01188 = [];
const Pourcentage_rejet_01188 = [];
const vote_gene_macron_01188 = [];
const vote_gene_lepen_01188 = [];
const vote_gene_rejet_01188 = [];

async function chartIt01188(){
    await GraphDATA01188();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01188-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01188
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01188
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01188-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01188,vote_lepen_01188,vote_rejet_01188]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01188-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01188,vote_lepenpop_01188,vote_rejetpop_01188]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01188"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01188
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01188
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01188
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01189*/
/*------------------------------------------------------------------ */
async function GraphDATA01189() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01189.push(vote_macron); 
    vote_lepen_01189.push(vote_lepen);
    vote_rejet_01189.push(vote_rejet);
    vote_macronpop_01189.push(vote_macronMediane);
    vote_lepenpop_01189.push(vote_lepenMediane);
    vote_rejetpop_01189.push(vote_rejetMediane);
    name_Commune_01189.push(nameCommune);
    Pourcentage_01189.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01189.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01189.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01189.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01189.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01189 = [];
const vote_lepen_01189 = [];
const vote_rejet_01189 = [];
const vote_macronpop_01189 = [];
const vote_lepenpop_01189 = [];
const vote_rejetpop_01189 = [];
const name_Commune_01189 = [];
const Pourcentage_01189 = [];
const Pourcentage_rejet_01189 = [];
const vote_gene_macron_01189 = [];
const vote_gene_lepen_01189 = [];
const vote_gene_rejet_01189 = [];

async function chartIt01189(){
    await GraphDATA01189();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01189-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01189
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01189
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01189-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01189,vote_lepen_01189,vote_rejet_01189]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01189-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01189,vote_lepenpop_01189,vote_rejetpop_01189]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01189"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01189
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01189
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01189
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01190*/
/*------------------------------------------------------------------ */
async function GraphDATA01190() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01190.push(vote_macron); 
    vote_lepen_01190.push(vote_lepen);
    vote_rejet_01190.push(vote_rejet);
    vote_macronpop_01190.push(vote_macronMediane);
    vote_lepenpop_01190.push(vote_lepenMediane);
    vote_rejetpop_01190.push(vote_rejetMediane);
    name_Commune_01190.push(nameCommune);
    Pourcentage_01190.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01190.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01190.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01190.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01190.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01190 = [];
const vote_lepen_01190 = [];
const vote_rejet_01190 = [];
const vote_macronpop_01190 = [];
const vote_lepenpop_01190 = [];
const vote_rejetpop_01190 = [];
const name_Commune_01190 = [];
const Pourcentage_01190 = [];
const Pourcentage_rejet_01190 = [];
const vote_gene_macron_01190 = [];
const vote_gene_lepen_01190 = [];
const vote_gene_rejet_01190 = [];

async function chartIt01190(){
    await GraphDATA01190();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01190-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01190
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01190
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01190-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01190,vote_lepen_01190,vote_rejet_01190]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01190-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01190,vote_lepenpop_01190,vote_rejetpop_01190]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01190"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01190
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01190
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01190
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01191*/
/*------------------------------------------------------------------ */
async function GraphDATA01191() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01191.push(vote_macron); 
    vote_lepen_01191.push(vote_lepen);
    vote_rejet_01191.push(vote_rejet);
    vote_macronpop_01191.push(vote_macronMediane);
    vote_lepenpop_01191.push(vote_lepenMediane);
    vote_rejetpop_01191.push(vote_rejetMediane);
    name_Commune_01191.push(nameCommune);
    Pourcentage_01191.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01191.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01191.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01191.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01191.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01191 = [];
const vote_lepen_01191 = [];
const vote_rejet_01191 = [];
const vote_macronpop_01191 = [];
const vote_lepenpop_01191 = [];
const vote_rejetpop_01191 = [];
const name_Commune_01191 = [];
const Pourcentage_01191 = [];
const Pourcentage_rejet_01191 = [];
const vote_gene_macron_01191 = [];
const vote_gene_lepen_01191 = [];
const vote_gene_rejet_01191 = [];

async function chartIt01191(){
    await GraphDATA01191();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01191-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01191
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01191
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01191-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01191,vote_lepen_01191,vote_rejet_01191]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01191-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01191,vote_lepenpop_01191,vote_rejetpop_01191]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01191"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01191
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01191
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01191
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01192*/
/*------------------------------------------------------------------ */
async function GraphDATA01192() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01192.push(vote_macron); 
    vote_lepen_01192.push(vote_lepen);
    vote_rejet_01192.push(vote_rejet);
    vote_macronpop_01192.push(vote_macronMediane);
    vote_lepenpop_01192.push(vote_lepenMediane);
    vote_rejetpop_01192.push(vote_rejetMediane);
    name_Commune_01192.push(nameCommune);
    Pourcentage_01192.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01192.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01192.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01192.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01192.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01192 = [];
const vote_lepen_01192 = [];
const vote_rejet_01192 = [];
const vote_macronpop_01192 = [];
const vote_lepenpop_01192 = [];
const vote_rejetpop_01192 = [];
const name_Commune_01192 = [];
const Pourcentage_01192 = [];
const Pourcentage_rejet_01192 = [];
const vote_gene_macron_01192 = [];
const vote_gene_lepen_01192 = [];
const vote_gene_rejet_01192 = [];

async function chartIt01192(){
    await GraphDATA01192();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01192-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01192
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01192
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01192-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01192,vote_lepen_01192,vote_rejet_01192]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01192-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01192,vote_lepenpop_01192,vote_rejetpop_01192]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01192"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01192
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01192
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01192
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01193*/
/*------------------------------------------------------------------ */
async function GraphDATA01193() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01193.push(vote_macron); 
    vote_lepen_01193.push(vote_lepen);
    vote_rejet_01193.push(vote_rejet);
    vote_macronpop_01193.push(vote_macronMediane);
    vote_lepenpop_01193.push(vote_lepenMediane);
    vote_rejetpop_01193.push(vote_rejetMediane);
    name_Commune_01193.push(nameCommune);
    Pourcentage_01193.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01193.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01193.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01193.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01193.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01193 = [];
const vote_lepen_01193 = [];
const vote_rejet_01193 = [];
const vote_macronpop_01193 = [];
const vote_lepenpop_01193 = [];
const vote_rejetpop_01193 = [];
const name_Commune_01193 = [];
const Pourcentage_01193 = [];
const Pourcentage_rejet_01193 = [];
const vote_gene_macron_01193 = [];
const vote_gene_lepen_01193 = [];
const vote_gene_rejet_01193 = [];

async function chartIt01193(){
    await GraphDATA01193();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01193-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01193
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01193
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01193-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01193,vote_lepen_01193,vote_rejet_01193]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01193-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01193,vote_lepenpop_01193,vote_rejetpop_01193]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01193"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01193
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01193
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01193
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01194*/
/*------------------------------------------------------------------ */
async function GraphDATA01194() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01194.push(vote_macron); 
    vote_lepen_01194.push(vote_lepen);
    vote_rejet_01194.push(vote_rejet);
    vote_macronpop_01194.push(vote_macronMediane);
    vote_lepenpop_01194.push(vote_lepenMediane);
    vote_rejetpop_01194.push(vote_rejetMediane);
    name_Commune_01194.push(nameCommune);
    Pourcentage_01194.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01194.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01194.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01194.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01194.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01194 = [];
const vote_lepen_01194 = [];
const vote_rejet_01194 = [];
const vote_macronpop_01194 = [];
const vote_lepenpop_01194 = [];
const vote_rejetpop_01194 = [];
const name_Commune_01194 = [];
const Pourcentage_01194 = [];
const Pourcentage_rejet_01194 = [];
const vote_gene_macron_01194 = [];
const vote_gene_lepen_01194 = [];
const vote_gene_rejet_01194 = [];

async function chartIt01194(){
    await GraphDATA01194();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01194-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01194
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01194
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01194-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01194,vote_lepen_01194,vote_rejet_01194]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01194-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01194,vote_lepenpop_01194,vote_rejetpop_01194]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01194"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01194
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01194
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01194
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01195*/
/*------------------------------------------------------------------ */
async function GraphDATA01195() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01195.push(vote_macron); 
    vote_lepen_01195.push(vote_lepen);
    vote_rejet_01195.push(vote_rejet);
    vote_macronpop_01195.push(vote_macronMediane);
    vote_lepenpop_01195.push(vote_lepenMediane);
    vote_rejetpop_01195.push(vote_rejetMediane);
    name_Commune_01195.push(nameCommune);
    Pourcentage_01195.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01195.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01195.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01195.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01195.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01195 = [];
const vote_lepen_01195 = [];
const vote_rejet_01195 = [];
const vote_macronpop_01195 = [];
const vote_lepenpop_01195 = [];
const vote_rejetpop_01195 = [];
const name_Commune_01195 = [];
const Pourcentage_01195 = [];
const Pourcentage_rejet_01195 = [];
const vote_gene_macron_01195 = [];
const vote_gene_lepen_01195 = [];
const vote_gene_rejet_01195 = [];

async function chartIt01195(){
    await GraphDATA01195();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01195-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01195
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01195
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01195-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01195,vote_lepen_01195,vote_rejet_01195]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01195-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01195,vote_lepenpop_01195,vote_rejetpop_01195]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01195"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01195
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01195
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01195
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01196*/
/*------------------------------------------------------------------ */
async function GraphDATA01196() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01196.push(vote_macron); 
    vote_lepen_01196.push(vote_lepen);
    vote_rejet_01196.push(vote_rejet);
    vote_macronpop_01196.push(vote_macronMediane);
    vote_lepenpop_01196.push(vote_lepenMediane);
    vote_rejetpop_01196.push(vote_rejetMediane);
    name_Commune_01196.push(nameCommune);
    Pourcentage_01196.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01196.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01196.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01196.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01196.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01196 = [];
const vote_lepen_01196 = [];
const vote_rejet_01196 = [];
const vote_macronpop_01196 = [];
const vote_lepenpop_01196 = [];
const vote_rejetpop_01196 = [];
const name_Commune_01196 = [];
const Pourcentage_01196 = [];
const Pourcentage_rejet_01196 = [];
const vote_gene_macron_01196 = [];
const vote_gene_lepen_01196 = [];
const vote_gene_rejet_01196 = [];

async function chartIt01196(){
    await GraphDATA01196();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01196-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01196
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01196
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01196-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01196,vote_lepen_01196,vote_rejet_01196]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01196-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01196,vote_lepenpop_01196,vote_rejetpop_01196]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01196"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01196
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01196
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01196
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01197*/
/*------------------------------------------------------------------ */
async function GraphDATA01197() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01197.push(vote_macron); 
    vote_lepen_01197.push(vote_lepen);
    vote_rejet_01197.push(vote_rejet);
    vote_macronpop_01197.push(vote_macronMediane);
    vote_lepenpop_01197.push(vote_lepenMediane);
    vote_rejetpop_01197.push(vote_rejetMediane);
    name_Commune_01197.push(nameCommune);
    Pourcentage_01197.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01197.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01197.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01197.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01197.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01197 = [];
const vote_lepen_01197 = [];
const vote_rejet_01197 = [];
const vote_macronpop_01197 = [];
const vote_lepenpop_01197 = [];
const vote_rejetpop_01197 = [];
const name_Commune_01197 = [];
const Pourcentage_01197 = [];
const Pourcentage_rejet_01197 = [];
const vote_gene_macron_01197 = [];
const vote_gene_lepen_01197 = [];
const vote_gene_rejet_01197 = [];

async function chartIt01197(){
    await GraphDATA01197();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01197-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01197
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01197
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01197-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01197,vote_lepen_01197,vote_rejet_01197]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01197-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01197,vote_lepenpop_01197,vote_rejetpop_01197]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01197"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01197
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01197
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01197
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01198*/
/*------------------------------------------------------------------ */
async function GraphDATA01198() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01198.push(vote_macron); 
    vote_lepen_01198.push(vote_lepen);
    vote_rejet_01198.push(vote_rejet);
    vote_macronpop_01198.push(vote_macronMediane);
    vote_lepenpop_01198.push(vote_lepenMediane);
    vote_rejetpop_01198.push(vote_rejetMediane);
    name_Commune_01198.push(nameCommune);
    Pourcentage_01198.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01198.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01198.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01198.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01198.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01198 = [];
const vote_lepen_01198 = [];
const vote_rejet_01198 = [];
const vote_macronpop_01198 = [];
const vote_lepenpop_01198 = [];
const vote_rejetpop_01198 = [];
const name_Commune_01198 = [];
const Pourcentage_01198 = [];
const Pourcentage_rejet_01198 = [];
const vote_gene_macron_01198 = [];
const vote_gene_lepen_01198 = [];
const vote_gene_rejet_01198 = [];

async function chartIt01198(){
    await GraphDATA01198();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01198-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01198
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01198
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01198-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01198,vote_lepen_01198,vote_rejet_01198]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01198-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01198,vote_lepenpop_01198,vote_rejetpop_01198]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01198"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01198
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01198
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01198
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 01199*/
/*------------------------------------------------------------------ */
async function GraphDATA01199() {
    const response = await fetch('../JSON/Data_dep01.json');
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
    vote_macron_01199.push(vote_macron); 
    vote_lepen_01199.push(vote_lepen);
    vote_rejet_01199.push(vote_rejet);
    vote_macronpop_01199.push(vote_macronMediane);
    vote_lepenpop_01199.push(vote_lepenMediane);
    vote_rejetpop_01199.push(vote_rejetMediane);
    name_Commune_01199.push(nameCommune);
    Pourcentage_01199.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_01199.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_01199.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_01199.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_01199.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_01199 = [];
const vote_lepen_01199 = [];
const vote_rejet_01199 = [];
const vote_macronpop_01199 = [];
const vote_lepenpop_01199 = [];
const vote_rejetpop_01199 = [];
const name_Commune_01199 = [];
const Pourcentage_01199 = [];
const Pourcentage_rejet_01199 = [];
const vote_gene_macron_01199 = [];
const vote_gene_lepen_01199 = [];
const vote_gene_rejet_01199 = [];

async function chartIt01199(){
    await GraphDATA01199();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_01199-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_01199
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_01199
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_01199-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_01199,vote_lepen_01199,vote_rejet_01199]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_01199-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_01199,vote_lepenpop_01199,vote_rejetpop_01199]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_01199"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_01199
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_01199
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_01199
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}