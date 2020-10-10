/********************************************************************** */
/*JS GRAPHIQUE FICHIER DATA */
/********************************************************************** */
chartIt04101();
chartIt04102();
chartIt04103();
chartIt04104();
chartIt04105();
chartIt04106();
chartIt04107();
chartIt04108();
chartIt04109();
chartIt04110();
chartIt04111();
chartIt04112();
chartIt04113();
chartIt04114();
chartIt04115();
chartIt04116();
chartIt04117();
chartIt04118();
chartIt04119();
chartIt04120();
chartIt04121();
chartIt04122();
chartIt04123();
chartIt04124();
chartIt04125();
chartIt04126();
chartIt04127();
chartIt04128();
chartIt04129();
chartIt04130();
chartIt04131();
chartIt04132();
chartIt04133();
chartIt04134();
chartIt04135();
chartIt04136();
chartIt04137();
chartIt04138();
chartIt04139();
chartIt04140();
chartIt04141();
chartIt04142();
chartIt04143();
chartIt04144();
chartIt04145();
chartIt04146();
chartIt04147();
chartIt04148();
chartIt04149();
chartIt04150();
chartIt04151();
chartIt04152();
chartIt04153();
chartIt04154();
chartIt04155();
chartIt04156();
chartIt04157();
chartIt04158();
chartIt04159();
chartIt04160();
chartIt04161();
chartIt04162();
chartIt04163();
chartIt04164();
chartIt04165();
chartIt04166();
chartIt04167();
chartIt04168();
chartIt04169();
chartIt04170();
chartIt04171();
chartIt04172();
chartIt04173();
chartIt04174();
chartIt04175();
chartIt04176();
chartIt04177();
chartIt04178();
chartIt04179();
chartIt04180();
chartIt04181();
chartIt04182();
chartIt04183();
chartIt04184();
chartIt04185();
chartIt04186();
chartIt04187();
chartIt04188();
chartIt04189();
chartIt04190();
chartIt04191();
chartIt04192();
chartIt04193();
chartIt04194();
chartIt04195();
chartIt04196();
chartIt04197();
chartIt04198();
/*------------------------------------------------------------------ */
/*COMMUNE 04101*/
/*------------------------------------------------------------------ */
async function GraphDATA04101() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04101.push(vote_macron); 
    vote_lepen_04101.push(vote_lepen);
    vote_rejet_04101.push(vote_rejet);
    vote_macronpop_04101.push(vote_macronMediane);
    vote_lepenpop_04101.push(vote_lepenMediane);
    vote_rejetpop_04101.push(vote_rejetMediane);
    name_Commune_04101.push(nameCommune);
    Pourcentage_04101.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04101.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04101.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04101.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04101.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04101 = [];
const vote_lepen_04101 = [];
const vote_rejet_04101 = [];
const vote_macronpop_04101 = [];
const vote_lepenpop_04101 = [];
const vote_rejetpop_04101 = [];
const name_Commune_04101 = [];
const Pourcentage_04101 = [];
const Pourcentage_rejet_04101 = [];
const vote_gene_macron_04101 = [];
const vote_gene_lepen_04101 = [];
const vote_gene_rejet_04101 = [];

async function chartIt04101(){
    await GraphDATA04101();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04101-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04101
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04101
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04101-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04101,vote_lepen_04101,vote_rejet_04101]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04101-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04101,vote_lepenpop_04101,vote_rejetpop_04101]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04101"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04101
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04101
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04101
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04102*/
/*------------------------------------------------------------------ */
async function GraphDATA04102() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04102.push(vote_macron); 
    vote_lepen_04102.push(vote_lepen);
    vote_rejet_04102.push(vote_rejet);
    vote_macronpop_04102.push(vote_macronMediane);
    vote_lepenpop_04102.push(vote_lepenMediane);
    vote_rejetpop_04102.push(vote_rejetMediane);
    name_Commune_04102.push(nameCommune);
    Pourcentage_04102.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04102.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04102.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04102.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04102.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04102 = [];
const vote_lepen_04102 = [];
const vote_rejet_04102 = [];
const vote_macronpop_04102 = [];
const vote_lepenpop_04102 = [];
const vote_rejetpop_04102 = [];
const name_Commune_04102 = [];
const Pourcentage_04102 = [];
const Pourcentage_rejet_04102 = [];
const vote_gene_macron_04102 = [];
const vote_gene_lepen_04102 = [];
const vote_gene_rejet_04102 = [];

async function chartIt04102(){
    await GraphDATA04102();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04102-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04102
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04102
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04102-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04102,vote_lepen_04102,vote_rejet_04102]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04102-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04102,vote_lepenpop_04102,vote_rejetpop_04102]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04102"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04102
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04102
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04102
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04103*/
/*------------------------------------------------------------------ */
async function GraphDATA04103() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04103.push(vote_macron); 
    vote_lepen_04103.push(vote_lepen);
    vote_rejet_04103.push(vote_rejet);
    vote_macronpop_04103.push(vote_macronMediane);
    vote_lepenpop_04103.push(vote_lepenMediane);
    vote_rejetpop_04103.push(vote_rejetMediane);
    name_Commune_04103.push(nameCommune);
    Pourcentage_04103.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04103.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04103.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04103.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04103.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04103 = [];
const vote_lepen_04103 = [];
const vote_rejet_04103 = [];
const vote_macronpop_04103 = [];
const vote_lepenpop_04103 = [];
const vote_rejetpop_04103 = [];
const name_Commune_04103 = [];
const Pourcentage_04103 = [];
const Pourcentage_rejet_04103 = [];
const vote_gene_macron_04103 = [];
const vote_gene_lepen_04103 = [];
const vote_gene_rejet_04103 = [];

async function chartIt04103(){
    await GraphDATA04103();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04103-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04103
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04103
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04103-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04103,vote_lepen_04103,vote_rejet_04103]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04103-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04103,vote_lepenpop_04103,vote_rejetpop_04103]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04103"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04103
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04103
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04103
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04104*/
/*------------------------------------------------------------------ */
async function GraphDATA04104() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04104.push(vote_macron); 
    vote_lepen_04104.push(vote_lepen);
    vote_rejet_04104.push(vote_rejet);
    vote_macronpop_04104.push(vote_macronMediane);
    vote_lepenpop_04104.push(vote_lepenMediane);
    vote_rejetpop_04104.push(vote_rejetMediane);
    name_Commune_04104.push(nameCommune);
    Pourcentage_04104.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04104.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04104.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04104.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04104.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04104 = [];
const vote_lepen_04104 = [];
const vote_rejet_04104 = [];
const vote_macronpop_04104 = [];
const vote_lepenpop_04104 = [];
const vote_rejetpop_04104 = [];
const name_Commune_04104 = [];
const Pourcentage_04104 = [];
const Pourcentage_rejet_04104 = [];
const vote_gene_macron_04104 = [];
const vote_gene_lepen_04104 = [];
const vote_gene_rejet_04104 = [];

async function chartIt04104(){
    await GraphDATA04104();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04104-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04104
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04104
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04104-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04104,vote_lepen_04104,vote_rejet_04104]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04104-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04104,vote_lepenpop_04104,vote_rejetpop_04104]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04104"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04104
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04104
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04104
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04105*/
/*------------------------------------------------------------------ */
async function GraphDATA04105() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04105.push(vote_macron); 
    vote_lepen_04105.push(vote_lepen);
    vote_rejet_04105.push(vote_rejet);
    vote_macronpop_04105.push(vote_macronMediane);
    vote_lepenpop_04105.push(vote_lepenMediane);
    vote_rejetpop_04105.push(vote_rejetMediane);
    name_Commune_04105.push(nameCommune);
    Pourcentage_04105.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04105.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04105.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04105.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04105.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04105 = [];
const vote_lepen_04105 = [];
const vote_rejet_04105 = [];
const vote_macronpop_04105 = [];
const vote_lepenpop_04105 = [];
const vote_rejetpop_04105 = [];
const name_Commune_04105 = [];
const Pourcentage_04105 = [];
const Pourcentage_rejet_04105 = [];
const vote_gene_macron_04105 = [];
const vote_gene_lepen_04105 = [];
const vote_gene_rejet_04105 = [];

async function chartIt04105(){
    await GraphDATA04105();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04105-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04105
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04105
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04105-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04105,vote_lepen_04105,vote_rejet_04105]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04105-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04105,vote_lepenpop_04105,vote_rejetpop_04105]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04105"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04105
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04105
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04105
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04106*/
/*------------------------------------------------------------------ */
async function GraphDATA04106() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04106.push(vote_macron); 
    vote_lepen_04106.push(vote_lepen);
    vote_rejet_04106.push(vote_rejet);
    vote_macronpop_04106.push(vote_macronMediane);
    vote_lepenpop_04106.push(vote_lepenMediane);
    vote_rejetpop_04106.push(vote_rejetMediane);
    name_Commune_04106.push(nameCommune);
    Pourcentage_04106.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04106.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04106.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04106.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04106.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04106 = [];
const vote_lepen_04106 = [];
const vote_rejet_04106 = [];
const vote_macronpop_04106 = [];
const vote_lepenpop_04106 = [];
const vote_rejetpop_04106 = [];
const name_Commune_04106 = [];
const Pourcentage_04106 = [];
const Pourcentage_rejet_04106 = [];
const vote_gene_macron_04106 = [];
const vote_gene_lepen_04106 = [];
const vote_gene_rejet_04106 = [];

async function chartIt04106(){
    await GraphDATA04106();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04106-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04106
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04106
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04106-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04106,vote_lepen_04106,vote_rejet_04106]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04106-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04106,vote_lepenpop_04106,vote_rejetpop_04106]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04106"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04106
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04106
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04106
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04107*/
/*------------------------------------------------------------------ */
async function GraphDATA04107() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04107.push(vote_macron); 
    vote_lepen_04107.push(vote_lepen);
    vote_rejet_04107.push(vote_rejet);
    vote_macronpop_04107.push(vote_macronMediane);
    vote_lepenpop_04107.push(vote_lepenMediane);
    vote_rejetpop_04107.push(vote_rejetMediane);
    name_Commune_04107.push(nameCommune);
    Pourcentage_04107.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04107.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04107.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04107.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04107.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04107 = [];
const vote_lepen_04107 = [];
const vote_rejet_04107 = [];
const vote_macronpop_04107 = [];
const vote_lepenpop_04107 = [];
const vote_rejetpop_04107 = [];
const name_Commune_04107 = [];
const Pourcentage_04107 = [];
const Pourcentage_rejet_04107 = [];
const vote_gene_macron_04107 = [];
const vote_gene_lepen_04107 = [];
const vote_gene_rejet_04107 = [];

async function chartIt04107(){
    await GraphDATA04107();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04107-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04107
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04107
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04107-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04107,vote_lepen_04107,vote_rejet_04107]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04107-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04107,vote_lepenpop_04107,vote_rejetpop_04107]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04107"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04107
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04107
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04107
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04108*/
/*------------------------------------------------------------------ */
async function GraphDATA04108() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04108.push(vote_macron); 
    vote_lepen_04108.push(vote_lepen);
    vote_rejet_04108.push(vote_rejet);
    vote_macronpop_04108.push(vote_macronMediane);
    vote_lepenpop_04108.push(vote_lepenMediane);
    vote_rejetpop_04108.push(vote_rejetMediane);
    name_Commune_04108.push(nameCommune);
    Pourcentage_04108.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04108.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04108.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04108.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04108.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04108 = [];
const vote_lepen_04108 = [];
const vote_rejet_04108 = [];
const vote_macronpop_04108 = [];
const vote_lepenpop_04108 = [];
const vote_rejetpop_04108 = [];
const name_Commune_04108 = [];
const Pourcentage_04108 = [];
const Pourcentage_rejet_04108 = [];
const vote_gene_macron_04108 = [];
const vote_gene_lepen_04108 = [];
const vote_gene_rejet_04108 = [];

async function chartIt04108(){
    await GraphDATA04108();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04108-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04108
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04108
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04108-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04108,vote_lepen_04108,vote_rejet_04108]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04108-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04108,vote_lepenpop_04108,vote_rejetpop_04108]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04108"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04108
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04108
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04108
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04109*/
/*------------------------------------------------------------------ */
async function GraphDATA04109() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04109.push(vote_macron); 
    vote_lepen_04109.push(vote_lepen);
    vote_rejet_04109.push(vote_rejet);
    vote_macronpop_04109.push(vote_macronMediane);
    vote_lepenpop_04109.push(vote_lepenMediane);
    vote_rejetpop_04109.push(vote_rejetMediane);
    name_Commune_04109.push(nameCommune);
    Pourcentage_04109.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04109.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04109.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04109.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04109.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04109 = [];
const vote_lepen_04109 = [];
const vote_rejet_04109 = [];
const vote_macronpop_04109 = [];
const vote_lepenpop_04109 = [];
const vote_rejetpop_04109 = [];
const name_Commune_04109 = [];
const Pourcentage_04109 = [];
const Pourcentage_rejet_04109 = [];
const vote_gene_macron_04109 = [];
const vote_gene_lepen_04109 = [];
const vote_gene_rejet_04109 = [];

async function chartIt04109(){
    await GraphDATA04109();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04109-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04109
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04109
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04109-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04109,vote_lepen_04109,vote_rejet_04109]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04109-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04109,vote_lepenpop_04109,vote_rejetpop_04109]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04109"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04109
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04109
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04109
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04110*/
/*------------------------------------------------------------------ */
async function GraphDATA04110() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04110.push(vote_macron); 
    vote_lepen_04110.push(vote_lepen);
    vote_rejet_04110.push(vote_rejet);
    vote_macronpop_04110.push(vote_macronMediane);
    vote_lepenpop_04110.push(vote_lepenMediane);
    vote_rejetpop_04110.push(vote_rejetMediane);
    name_Commune_04110.push(nameCommune);
    Pourcentage_04110.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04110.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04110.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04110.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04110.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04110 = [];
const vote_lepen_04110 = [];
const vote_rejet_04110 = [];
const vote_macronpop_04110 = [];
const vote_lepenpop_04110 = [];
const vote_rejetpop_04110 = [];
const name_Commune_04110 = [];
const Pourcentage_04110 = [];
const Pourcentage_rejet_04110 = [];
const vote_gene_macron_04110 = [];
const vote_gene_lepen_04110 = [];
const vote_gene_rejet_04110 = [];

async function chartIt04110(){
    await GraphDATA04110();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04110-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04110
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04110
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04110-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04110,vote_lepen_04110,vote_rejet_04110]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04110-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04110,vote_lepenpop_04110,vote_rejetpop_04110]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04110"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04110
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04110
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04110
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04111*/
/*------------------------------------------------------------------ */
async function GraphDATA04111() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04111.push(vote_macron); 
    vote_lepen_04111.push(vote_lepen);
    vote_rejet_04111.push(vote_rejet);
    vote_macronpop_04111.push(vote_macronMediane);
    vote_lepenpop_04111.push(vote_lepenMediane);
    vote_rejetpop_04111.push(vote_rejetMediane);
    name_Commune_04111.push(nameCommune);
    Pourcentage_04111.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04111.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04111.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04111.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04111.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04111 = [];
const vote_lepen_04111 = [];
const vote_rejet_04111 = [];
const vote_macronpop_04111 = [];
const vote_lepenpop_04111 = [];
const vote_rejetpop_04111 = [];
const name_Commune_04111 = [];
const Pourcentage_04111 = [];
const Pourcentage_rejet_04111 = [];
const vote_gene_macron_04111 = [];
const vote_gene_lepen_04111 = [];
const vote_gene_rejet_04111 = [];

async function chartIt04111(){
    await GraphDATA04111();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04111-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04111
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04111
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04111-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04111,vote_lepen_04111,vote_rejet_04111]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04111-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04111,vote_lepenpop_04111,vote_rejetpop_04111]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04111"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04111
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04111
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04111
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04112*/
/*------------------------------------------------------------------ */
async function GraphDATA04112() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04112.push(vote_macron); 
    vote_lepen_04112.push(vote_lepen);
    vote_rejet_04112.push(vote_rejet);
    vote_macronpop_04112.push(vote_macronMediane);
    vote_lepenpop_04112.push(vote_lepenMediane);
    vote_rejetpop_04112.push(vote_rejetMediane);
    name_Commune_04112.push(nameCommune);
    Pourcentage_04112.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04112.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04112.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04112.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04112.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04112 = [];
const vote_lepen_04112 = [];
const vote_rejet_04112 = [];
const vote_macronpop_04112 = [];
const vote_lepenpop_04112 = [];
const vote_rejetpop_04112 = [];
const name_Commune_04112 = [];
const Pourcentage_04112 = [];
const Pourcentage_rejet_04112 = [];
const vote_gene_macron_04112 = [];
const vote_gene_lepen_04112 = [];
const vote_gene_rejet_04112 = [];

async function chartIt04112(){
    await GraphDATA04112();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04112-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04112
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04112
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04112-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04112,vote_lepen_04112,vote_rejet_04112]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04112-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04112,vote_lepenpop_04112,vote_rejetpop_04112]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04112"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04112
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04112
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04112
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04113*/
/*------------------------------------------------------------------ */
async function GraphDATA04113() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04113.push(vote_macron); 
    vote_lepen_04113.push(vote_lepen);
    vote_rejet_04113.push(vote_rejet);
    vote_macronpop_04113.push(vote_macronMediane);
    vote_lepenpop_04113.push(vote_lepenMediane);
    vote_rejetpop_04113.push(vote_rejetMediane);
    name_Commune_04113.push(nameCommune);
    Pourcentage_04113.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04113.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04113.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04113.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04113.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04113 = [];
const vote_lepen_04113 = [];
const vote_rejet_04113 = [];
const vote_macronpop_04113 = [];
const vote_lepenpop_04113 = [];
const vote_rejetpop_04113 = [];
const name_Commune_04113 = [];
const Pourcentage_04113 = [];
const Pourcentage_rejet_04113 = [];
const vote_gene_macron_04113 = [];
const vote_gene_lepen_04113 = [];
const vote_gene_rejet_04113 = [];

async function chartIt04113(){
    await GraphDATA04113();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04113-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04113
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04113
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04113-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04113,vote_lepen_04113,vote_rejet_04113]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04113-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04113,vote_lepenpop_04113,vote_rejetpop_04113]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04113"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04113
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04113
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04113
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04114*/
/*------------------------------------------------------------------ */
async function GraphDATA04114() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04114.push(vote_macron); 
    vote_lepen_04114.push(vote_lepen);
    vote_rejet_04114.push(vote_rejet);
    vote_macronpop_04114.push(vote_macronMediane);
    vote_lepenpop_04114.push(vote_lepenMediane);
    vote_rejetpop_04114.push(vote_rejetMediane);
    name_Commune_04114.push(nameCommune);
    Pourcentage_04114.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04114.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04114.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04114.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04114.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04114 = [];
const vote_lepen_04114 = [];
const vote_rejet_04114 = [];
const vote_macronpop_04114 = [];
const vote_lepenpop_04114 = [];
const vote_rejetpop_04114 = [];
const name_Commune_04114 = [];
const Pourcentage_04114 = [];
const Pourcentage_rejet_04114 = [];
const vote_gene_macron_04114 = [];
const vote_gene_lepen_04114 = [];
const vote_gene_rejet_04114 = [];

async function chartIt04114(){
    await GraphDATA04114();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04114-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04114
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04114
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04114-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04114,vote_lepen_04114,vote_rejet_04114]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04114-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04114,vote_lepenpop_04114,vote_rejetpop_04114]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04114"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04114
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04114
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04114
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04115*/
/*------------------------------------------------------------------ */
async function GraphDATA04115() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04115.push(vote_macron); 
    vote_lepen_04115.push(vote_lepen);
    vote_rejet_04115.push(vote_rejet);
    vote_macronpop_04115.push(vote_macronMediane);
    vote_lepenpop_04115.push(vote_lepenMediane);
    vote_rejetpop_04115.push(vote_rejetMediane);
    name_Commune_04115.push(nameCommune);
    Pourcentage_04115.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04115.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04115.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04115.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04115.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04115 = [];
const vote_lepen_04115 = [];
const vote_rejet_04115 = [];
const vote_macronpop_04115 = [];
const vote_lepenpop_04115 = [];
const vote_rejetpop_04115 = [];
const name_Commune_04115 = [];
const Pourcentage_04115 = [];
const Pourcentage_rejet_04115 = [];
const vote_gene_macron_04115 = [];
const vote_gene_lepen_04115 = [];
const vote_gene_rejet_04115 = [];

async function chartIt04115(){
    await GraphDATA04115();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04115-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04115
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04115
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04115-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04115,vote_lepen_04115,vote_rejet_04115]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04115-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04115,vote_lepenpop_04115,vote_rejetpop_04115]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04115"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04115
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04115
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04115
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04116*/
/*------------------------------------------------------------------ */
async function GraphDATA04116() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04116.push(vote_macron); 
    vote_lepen_04116.push(vote_lepen);
    vote_rejet_04116.push(vote_rejet);
    vote_macronpop_04116.push(vote_macronMediane);
    vote_lepenpop_04116.push(vote_lepenMediane);
    vote_rejetpop_04116.push(vote_rejetMediane);
    name_Commune_04116.push(nameCommune);
    Pourcentage_04116.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04116.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04116.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04116.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04116.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04116 = [];
const vote_lepen_04116 = [];
const vote_rejet_04116 = [];
const vote_macronpop_04116 = [];
const vote_lepenpop_04116 = [];
const vote_rejetpop_04116 = [];
const name_Commune_04116 = [];
const Pourcentage_04116 = [];
const Pourcentage_rejet_04116 = [];
const vote_gene_macron_04116 = [];
const vote_gene_lepen_04116 = [];
const vote_gene_rejet_04116 = [];

async function chartIt04116(){
    await GraphDATA04116();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04116-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04116
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04116
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04116-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04116,vote_lepen_04116,vote_rejet_04116]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04116-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04116,vote_lepenpop_04116,vote_rejetpop_04116]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04116"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04116
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04116
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04116
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04117*/
/*------------------------------------------------------------------ */
async function GraphDATA04117() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04117.push(vote_macron); 
    vote_lepen_04117.push(vote_lepen);
    vote_rejet_04117.push(vote_rejet);
    vote_macronpop_04117.push(vote_macronMediane);
    vote_lepenpop_04117.push(vote_lepenMediane);
    vote_rejetpop_04117.push(vote_rejetMediane);
    name_Commune_04117.push(nameCommune);
    Pourcentage_04117.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04117.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04117.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04117.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04117.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04117 = [];
const vote_lepen_04117 = [];
const vote_rejet_04117 = [];
const vote_macronpop_04117 = [];
const vote_lepenpop_04117 = [];
const vote_rejetpop_04117 = [];
const name_Commune_04117 = [];
const Pourcentage_04117 = [];
const Pourcentage_rejet_04117 = [];
const vote_gene_macron_04117 = [];
const vote_gene_lepen_04117 = [];
const vote_gene_rejet_04117 = [];

async function chartIt04117(){
    await GraphDATA04117();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04117-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04117
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04117
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04117-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04117,vote_lepen_04117,vote_rejet_04117]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04117-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04117,vote_lepenpop_04117,vote_rejetpop_04117]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04117"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04117
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04117
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04117
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04118*/
/*------------------------------------------------------------------ */
async function GraphDATA04118() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04118.push(vote_macron); 
    vote_lepen_04118.push(vote_lepen);
    vote_rejet_04118.push(vote_rejet);
    vote_macronpop_04118.push(vote_macronMediane);
    vote_lepenpop_04118.push(vote_lepenMediane);
    vote_rejetpop_04118.push(vote_rejetMediane);
    name_Commune_04118.push(nameCommune);
    Pourcentage_04118.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04118.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04118.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04118.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04118.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04118 = [];
const vote_lepen_04118 = [];
const vote_rejet_04118 = [];
const vote_macronpop_04118 = [];
const vote_lepenpop_04118 = [];
const vote_rejetpop_04118 = [];
const name_Commune_04118 = [];
const Pourcentage_04118 = [];
const Pourcentage_rejet_04118 = [];
const vote_gene_macron_04118 = [];
const vote_gene_lepen_04118 = [];
const vote_gene_rejet_04118 = [];

async function chartIt04118(){
    await GraphDATA04118();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04118-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04118
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04118
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04118-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04118,vote_lepen_04118,vote_rejet_04118]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04118-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04118,vote_lepenpop_04118,vote_rejetpop_04118]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04118"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04118
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04118
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04118
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04119*/
/*------------------------------------------------------------------ */
async function GraphDATA04119() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04119.push(vote_macron); 
    vote_lepen_04119.push(vote_lepen);
    vote_rejet_04119.push(vote_rejet);
    vote_macronpop_04119.push(vote_macronMediane);
    vote_lepenpop_04119.push(vote_lepenMediane);
    vote_rejetpop_04119.push(vote_rejetMediane);
    name_Commune_04119.push(nameCommune);
    Pourcentage_04119.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04119.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04119.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04119.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04119.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04119 = [];
const vote_lepen_04119 = [];
const vote_rejet_04119 = [];
const vote_macronpop_04119 = [];
const vote_lepenpop_04119 = [];
const vote_rejetpop_04119 = [];
const name_Commune_04119 = [];
const Pourcentage_04119 = [];
const Pourcentage_rejet_04119 = [];
const vote_gene_macron_04119 = [];
const vote_gene_lepen_04119 = [];
const vote_gene_rejet_04119 = [];

async function chartIt04119(){
    await GraphDATA04119();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04119-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04119
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04119
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04119-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04119,vote_lepen_04119,vote_rejet_04119]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04119-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04119,vote_lepenpop_04119,vote_rejetpop_04119]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04119"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04119
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04119
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04119
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04120*/
/*------------------------------------------------------------------ */
async function GraphDATA04120() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04120.push(vote_macron); 
    vote_lepen_04120.push(vote_lepen);
    vote_rejet_04120.push(vote_rejet);
    vote_macronpop_04120.push(vote_macronMediane);
    vote_lepenpop_04120.push(vote_lepenMediane);
    vote_rejetpop_04120.push(vote_rejetMediane);
    name_Commune_04120.push(nameCommune);
    Pourcentage_04120.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04120.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04120.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04120.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04120.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04120 = [];
const vote_lepen_04120 = [];
const vote_rejet_04120 = [];
const vote_macronpop_04120 = [];
const vote_lepenpop_04120 = [];
const vote_rejetpop_04120 = [];
const name_Commune_04120 = [];
const Pourcentage_04120 = [];
const Pourcentage_rejet_04120 = [];
const vote_gene_macron_04120 = [];
const vote_gene_lepen_04120 = [];
const vote_gene_rejet_04120 = [];

async function chartIt04120(){
    await GraphDATA04120();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04120-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04120
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04120
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04120-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04120,vote_lepen_04120,vote_rejet_04120]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04120-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04120,vote_lepenpop_04120,vote_rejetpop_04120]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04120"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04120
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04120
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04120
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04121*/
/*------------------------------------------------------------------ */
async function GraphDATA04121() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04121.push(vote_macron); 
    vote_lepen_04121.push(vote_lepen);
    vote_rejet_04121.push(vote_rejet);
    vote_macronpop_04121.push(vote_macronMediane);
    vote_lepenpop_04121.push(vote_lepenMediane);
    vote_rejetpop_04121.push(vote_rejetMediane);
    name_Commune_04121.push(nameCommune);
    Pourcentage_04121.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04121.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04121.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04121.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04121.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04121 = [];
const vote_lepen_04121 = [];
const vote_rejet_04121 = [];
const vote_macronpop_04121 = [];
const vote_lepenpop_04121 = [];
const vote_rejetpop_04121 = [];
const name_Commune_04121 = [];
const Pourcentage_04121 = [];
const Pourcentage_rejet_04121 = [];
const vote_gene_macron_04121 = [];
const vote_gene_lepen_04121 = [];
const vote_gene_rejet_04121 = [];

async function chartIt04121(){
    await GraphDATA04121();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04121-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04121
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04121
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04121-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04121,vote_lepen_04121,vote_rejet_04121]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04121-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04121,vote_lepenpop_04121,vote_rejetpop_04121]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04121"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04121
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04121
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04121
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04122*/
/*------------------------------------------------------------------ */
async function GraphDATA04122() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04122.push(vote_macron); 
    vote_lepen_04122.push(vote_lepen);
    vote_rejet_04122.push(vote_rejet);
    vote_macronpop_04122.push(vote_macronMediane);
    vote_lepenpop_04122.push(vote_lepenMediane);
    vote_rejetpop_04122.push(vote_rejetMediane);
    name_Commune_04122.push(nameCommune);
    Pourcentage_04122.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04122.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04122.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04122.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04122.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04122 = [];
const vote_lepen_04122 = [];
const vote_rejet_04122 = [];
const vote_macronpop_04122 = [];
const vote_lepenpop_04122 = [];
const vote_rejetpop_04122 = [];
const name_Commune_04122 = [];
const Pourcentage_04122 = [];
const Pourcentage_rejet_04122 = [];
const vote_gene_macron_04122 = [];
const vote_gene_lepen_04122 = [];
const vote_gene_rejet_04122 = [];

async function chartIt04122(){
    await GraphDATA04122();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04122-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04122
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04122
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04122-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04122,vote_lepen_04122,vote_rejet_04122]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04122-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04122,vote_lepenpop_04122,vote_rejetpop_04122]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04122"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04122
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04122
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04122
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04123*/
/*------------------------------------------------------------------ */
async function GraphDATA04123() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04123.push(vote_macron); 
    vote_lepen_04123.push(vote_lepen);
    vote_rejet_04123.push(vote_rejet);
    vote_macronpop_04123.push(vote_macronMediane);
    vote_lepenpop_04123.push(vote_lepenMediane);
    vote_rejetpop_04123.push(vote_rejetMediane);
    name_Commune_04123.push(nameCommune);
    Pourcentage_04123.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04123.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04123.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04123.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04123.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04123 = [];
const vote_lepen_04123 = [];
const vote_rejet_04123 = [];
const vote_macronpop_04123 = [];
const vote_lepenpop_04123 = [];
const vote_rejetpop_04123 = [];
const name_Commune_04123 = [];
const Pourcentage_04123 = [];
const Pourcentage_rejet_04123 = [];
const vote_gene_macron_04123 = [];
const vote_gene_lepen_04123 = [];
const vote_gene_rejet_04123 = [];

async function chartIt04123(){
    await GraphDATA04123();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04123-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04123
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04123
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04123-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04123,vote_lepen_04123,vote_rejet_04123]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04123-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04123,vote_lepenpop_04123,vote_rejetpop_04123]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04123"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04123
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04123
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04123
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04124*/
/*------------------------------------------------------------------ */
async function GraphDATA04124() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04124.push(vote_macron); 
    vote_lepen_04124.push(vote_lepen);
    vote_rejet_04124.push(vote_rejet);
    vote_macronpop_04124.push(vote_macronMediane);
    vote_lepenpop_04124.push(vote_lepenMediane);
    vote_rejetpop_04124.push(vote_rejetMediane);
    name_Commune_04124.push(nameCommune);
    Pourcentage_04124.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04124.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04124.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04124.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04124.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04124 = [];
const vote_lepen_04124 = [];
const vote_rejet_04124 = [];
const vote_macronpop_04124 = [];
const vote_lepenpop_04124 = [];
const vote_rejetpop_04124 = [];
const name_Commune_04124 = [];
const Pourcentage_04124 = [];
const Pourcentage_rejet_04124 = [];
const vote_gene_macron_04124 = [];
const vote_gene_lepen_04124 = [];
const vote_gene_rejet_04124 = [];

async function chartIt04124(){
    await GraphDATA04124();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04124-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04124
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04124
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04124-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04124,vote_lepen_04124,vote_rejet_04124]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04124-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04124,vote_lepenpop_04124,vote_rejetpop_04124]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04124"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04124
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04124
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04124
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04125*/
/*------------------------------------------------------------------ */
async function GraphDATA04125() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04125.push(vote_macron); 
    vote_lepen_04125.push(vote_lepen);
    vote_rejet_04125.push(vote_rejet);
    vote_macronpop_04125.push(vote_macronMediane);
    vote_lepenpop_04125.push(vote_lepenMediane);
    vote_rejetpop_04125.push(vote_rejetMediane);
    name_Commune_04125.push(nameCommune);
    Pourcentage_04125.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04125.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04125.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04125.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04125.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04125 = [];
const vote_lepen_04125 = [];
const vote_rejet_04125 = [];
const vote_macronpop_04125 = [];
const vote_lepenpop_04125 = [];
const vote_rejetpop_04125 = [];
const name_Commune_04125 = [];
const Pourcentage_04125 = [];
const Pourcentage_rejet_04125 = [];
const vote_gene_macron_04125 = [];
const vote_gene_lepen_04125 = [];
const vote_gene_rejet_04125 = [];

async function chartIt04125(){
    await GraphDATA04125();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04125-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04125
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04125
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04125-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04125,vote_lepen_04125,vote_rejet_04125]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04125-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04125,vote_lepenpop_04125,vote_rejetpop_04125]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04125"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04125
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04125
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04125
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04126*/
/*------------------------------------------------------------------ */
async function GraphDATA04126() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04126.push(vote_macron); 
    vote_lepen_04126.push(vote_lepen);
    vote_rejet_04126.push(vote_rejet);
    vote_macronpop_04126.push(vote_macronMediane);
    vote_lepenpop_04126.push(vote_lepenMediane);
    vote_rejetpop_04126.push(vote_rejetMediane);
    name_Commune_04126.push(nameCommune);
    Pourcentage_04126.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04126.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04126.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04126.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04126.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04126 = [];
const vote_lepen_04126 = [];
const vote_rejet_04126 = [];
const vote_macronpop_04126 = [];
const vote_lepenpop_04126 = [];
const vote_rejetpop_04126 = [];
const name_Commune_04126 = [];
const Pourcentage_04126 = [];
const Pourcentage_rejet_04126 = [];
const vote_gene_macron_04126 = [];
const vote_gene_lepen_04126 = [];
const vote_gene_rejet_04126 = [];

async function chartIt04126(){
    await GraphDATA04126();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04126-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04126
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04126
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04126-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04126,vote_lepen_04126,vote_rejet_04126]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04126-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04126,vote_lepenpop_04126,vote_rejetpop_04126]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04126"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04126
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04126
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04126
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04127*/
/*------------------------------------------------------------------ */
async function GraphDATA04127() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04127.push(vote_macron); 
    vote_lepen_04127.push(vote_lepen);
    vote_rejet_04127.push(vote_rejet);
    vote_macronpop_04127.push(vote_macronMediane);
    vote_lepenpop_04127.push(vote_lepenMediane);
    vote_rejetpop_04127.push(vote_rejetMediane);
    name_Commune_04127.push(nameCommune);
    Pourcentage_04127.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04127.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04127.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04127.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04127.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04127 = [];
const vote_lepen_04127 = [];
const vote_rejet_04127 = [];
const vote_macronpop_04127 = [];
const vote_lepenpop_04127 = [];
const vote_rejetpop_04127 = [];
const name_Commune_04127 = [];
const Pourcentage_04127 = [];
const Pourcentage_rejet_04127 = [];
const vote_gene_macron_04127 = [];
const vote_gene_lepen_04127 = [];
const vote_gene_rejet_04127 = [];

async function chartIt04127(){
    await GraphDATA04127();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04127-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04127
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04127
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04127-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04127,vote_lepen_04127,vote_rejet_04127]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04127-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04127,vote_lepenpop_04127,vote_rejetpop_04127]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04127"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04127
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04127
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04127
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04128*/
/*------------------------------------------------------------------ */
async function GraphDATA04128() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04128.push(vote_macron); 
    vote_lepen_04128.push(vote_lepen);
    vote_rejet_04128.push(vote_rejet);
    vote_macronpop_04128.push(vote_macronMediane);
    vote_lepenpop_04128.push(vote_lepenMediane);
    vote_rejetpop_04128.push(vote_rejetMediane);
    name_Commune_04128.push(nameCommune);
    Pourcentage_04128.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04128.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04128.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04128.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04128.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04128 = [];
const vote_lepen_04128 = [];
const vote_rejet_04128 = [];
const vote_macronpop_04128 = [];
const vote_lepenpop_04128 = [];
const vote_rejetpop_04128 = [];
const name_Commune_04128 = [];
const Pourcentage_04128 = [];
const Pourcentage_rejet_04128 = [];
const vote_gene_macron_04128 = [];
const vote_gene_lepen_04128 = [];
const vote_gene_rejet_04128 = [];

async function chartIt04128(){
    await GraphDATA04128();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04128-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04128
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04128
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04128-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04128,vote_lepen_04128,vote_rejet_04128]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04128-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04128,vote_lepenpop_04128,vote_rejetpop_04128]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04128"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04128
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04128
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04128
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04129*/
/*------------------------------------------------------------------ */
async function GraphDATA04129() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04129.push(vote_macron); 
    vote_lepen_04129.push(vote_lepen);
    vote_rejet_04129.push(vote_rejet);
    vote_macronpop_04129.push(vote_macronMediane);
    vote_lepenpop_04129.push(vote_lepenMediane);
    vote_rejetpop_04129.push(vote_rejetMediane);
    name_Commune_04129.push(nameCommune);
    Pourcentage_04129.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04129.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04129.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04129.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04129.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04129 = [];
const vote_lepen_04129 = [];
const vote_rejet_04129 = [];
const vote_macronpop_04129 = [];
const vote_lepenpop_04129 = [];
const vote_rejetpop_04129 = [];
const name_Commune_04129 = [];
const Pourcentage_04129 = [];
const Pourcentage_rejet_04129 = [];
const vote_gene_macron_04129 = [];
const vote_gene_lepen_04129 = [];
const vote_gene_rejet_04129 = [];

async function chartIt04129(){
    await GraphDATA04129();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04129-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04129
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04129
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04129-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04129,vote_lepen_04129,vote_rejet_04129]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04129-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04129,vote_lepenpop_04129,vote_rejetpop_04129]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04129"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04129
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04129
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04129
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04130*/
/*------------------------------------------------------------------ */
async function GraphDATA04130() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04130.push(vote_macron); 
    vote_lepen_04130.push(vote_lepen);
    vote_rejet_04130.push(vote_rejet);
    vote_macronpop_04130.push(vote_macronMediane);
    vote_lepenpop_04130.push(vote_lepenMediane);
    vote_rejetpop_04130.push(vote_rejetMediane);
    name_Commune_04130.push(nameCommune);
    Pourcentage_04130.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04130.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04130.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04130.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04130.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04130 = [];
const vote_lepen_04130 = [];
const vote_rejet_04130 = [];
const vote_macronpop_04130 = [];
const vote_lepenpop_04130 = [];
const vote_rejetpop_04130 = [];
const name_Commune_04130 = [];
const Pourcentage_04130 = [];
const Pourcentage_rejet_04130 = [];
const vote_gene_macron_04130 = [];
const vote_gene_lepen_04130 = [];
const vote_gene_rejet_04130 = [];

async function chartIt04130(){
    await GraphDATA04130();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04130-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04130
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04130
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04130-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04130,vote_lepen_04130,vote_rejet_04130]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04130-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04130,vote_lepenpop_04130,vote_rejetpop_04130]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04130"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04130
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04130
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04130
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04131*/
/*------------------------------------------------------------------ */
async function GraphDATA04131() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04131.push(vote_macron); 
    vote_lepen_04131.push(vote_lepen);
    vote_rejet_04131.push(vote_rejet);
    vote_macronpop_04131.push(vote_macronMediane);
    vote_lepenpop_04131.push(vote_lepenMediane);
    vote_rejetpop_04131.push(vote_rejetMediane);
    name_Commune_04131.push(nameCommune);
    Pourcentage_04131.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04131.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04131.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04131.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04131.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04131 = [];
const vote_lepen_04131 = [];
const vote_rejet_04131 = [];
const vote_macronpop_04131 = [];
const vote_lepenpop_04131 = [];
const vote_rejetpop_04131 = [];
const name_Commune_04131 = [];
const Pourcentage_04131 = [];
const Pourcentage_rejet_04131 = [];
const vote_gene_macron_04131 = [];
const vote_gene_lepen_04131 = [];
const vote_gene_rejet_04131 = [];

async function chartIt04131(){
    await GraphDATA04131();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04131-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04131
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04131
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04131-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04131,vote_lepen_04131,vote_rejet_04131]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04131-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04131,vote_lepenpop_04131,vote_rejetpop_04131]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04131"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04131
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04131
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04131
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04132*/
/*------------------------------------------------------------------ */
async function GraphDATA04132() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04132.push(vote_macron); 
    vote_lepen_04132.push(vote_lepen);
    vote_rejet_04132.push(vote_rejet);
    vote_macronpop_04132.push(vote_macronMediane);
    vote_lepenpop_04132.push(vote_lepenMediane);
    vote_rejetpop_04132.push(vote_rejetMediane);
    name_Commune_04132.push(nameCommune);
    Pourcentage_04132.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04132.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04132.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04132.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04132.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04132 = [];
const vote_lepen_04132 = [];
const vote_rejet_04132 = [];
const vote_macronpop_04132 = [];
const vote_lepenpop_04132 = [];
const vote_rejetpop_04132 = [];
const name_Commune_04132 = [];
const Pourcentage_04132 = [];
const Pourcentage_rejet_04132 = [];
const vote_gene_macron_04132 = [];
const vote_gene_lepen_04132 = [];
const vote_gene_rejet_04132 = [];

async function chartIt04132(){
    await GraphDATA04132();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04132-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04132
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04132
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04132-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04132,vote_lepen_04132,vote_rejet_04132]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04132-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04132,vote_lepenpop_04132,vote_rejetpop_04132]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04132"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04132
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04132
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04132
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04133*/
/*------------------------------------------------------------------ */
async function GraphDATA04133() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04133.push(vote_macron); 
    vote_lepen_04133.push(vote_lepen);
    vote_rejet_04133.push(vote_rejet);
    vote_macronpop_04133.push(vote_macronMediane);
    vote_lepenpop_04133.push(vote_lepenMediane);
    vote_rejetpop_04133.push(vote_rejetMediane);
    name_Commune_04133.push(nameCommune);
    Pourcentage_04133.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04133.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04133.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04133.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04133.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04133 = [];
const vote_lepen_04133 = [];
const vote_rejet_04133 = [];
const vote_macronpop_04133 = [];
const vote_lepenpop_04133 = [];
const vote_rejetpop_04133 = [];
const name_Commune_04133 = [];
const Pourcentage_04133 = [];
const Pourcentage_rejet_04133 = [];
const vote_gene_macron_04133 = [];
const vote_gene_lepen_04133 = [];
const vote_gene_rejet_04133 = [];

async function chartIt04133(){
    await GraphDATA04133();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04133-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04133
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04133
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04133-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04133,vote_lepen_04133,vote_rejet_04133]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04133-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04133,vote_lepenpop_04133,vote_rejetpop_04133]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04133"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04133
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04133
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04133
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04134*/
/*------------------------------------------------------------------ */
async function GraphDATA04134() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04134.push(vote_macron); 
    vote_lepen_04134.push(vote_lepen);
    vote_rejet_04134.push(vote_rejet);
    vote_macronpop_04134.push(vote_macronMediane);
    vote_lepenpop_04134.push(vote_lepenMediane);
    vote_rejetpop_04134.push(vote_rejetMediane);
    name_Commune_04134.push(nameCommune);
    Pourcentage_04134.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04134.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04134.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04134.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04134.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04134 = [];
const vote_lepen_04134 = [];
const vote_rejet_04134 = [];
const vote_macronpop_04134 = [];
const vote_lepenpop_04134 = [];
const vote_rejetpop_04134 = [];
const name_Commune_04134 = [];
const Pourcentage_04134 = [];
const Pourcentage_rejet_04134 = [];
const vote_gene_macron_04134 = [];
const vote_gene_lepen_04134 = [];
const vote_gene_rejet_04134 = [];

async function chartIt04134(){
    await GraphDATA04134();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04134-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04134
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04134
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04134-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04134,vote_lepen_04134,vote_rejet_04134]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04134-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04134,vote_lepenpop_04134,vote_rejetpop_04134]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04134"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04134
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04134
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04134
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04135*/
/*------------------------------------------------------------------ */
async function GraphDATA04135() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04135.push(vote_macron); 
    vote_lepen_04135.push(vote_lepen);
    vote_rejet_04135.push(vote_rejet);
    vote_macronpop_04135.push(vote_macronMediane);
    vote_lepenpop_04135.push(vote_lepenMediane);
    vote_rejetpop_04135.push(vote_rejetMediane);
    name_Commune_04135.push(nameCommune);
    Pourcentage_04135.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04135.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04135.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04135.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04135.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04135 = [];
const vote_lepen_04135 = [];
const vote_rejet_04135 = [];
const vote_macronpop_04135 = [];
const vote_lepenpop_04135 = [];
const vote_rejetpop_04135 = [];
const name_Commune_04135 = [];
const Pourcentage_04135 = [];
const Pourcentage_rejet_04135 = [];
const vote_gene_macron_04135 = [];
const vote_gene_lepen_04135 = [];
const vote_gene_rejet_04135 = [];

async function chartIt04135(){
    await GraphDATA04135();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04135-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04135
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04135
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04135-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04135,vote_lepen_04135,vote_rejet_04135]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04135-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04135,vote_lepenpop_04135,vote_rejetpop_04135]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04135"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04135
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04135
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04135
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04136*/
/*------------------------------------------------------------------ */
async function GraphDATA04136() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04136.push(vote_macron); 
    vote_lepen_04136.push(vote_lepen);
    vote_rejet_04136.push(vote_rejet);
    vote_macronpop_04136.push(vote_macronMediane);
    vote_lepenpop_04136.push(vote_lepenMediane);
    vote_rejetpop_04136.push(vote_rejetMediane);
    name_Commune_04136.push(nameCommune);
    Pourcentage_04136.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04136.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04136.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04136.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04136.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04136 = [];
const vote_lepen_04136 = [];
const vote_rejet_04136 = [];
const vote_macronpop_04136 = [];
const vote_lepenpop_04136 = [];
const vote_rejetpop_04136 = [];
const name_Commune_04136 = [];
const Pourcentage_04136 = [];
const Pourcentage_rejet_04136 = [];
const vote_gene_macron_04136 = [];
const vote_gene_lepen_04136 = [];
const vote_gene_rejet_04136 = [];

async function chartIt04136(){
    await GraphDATA04136();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04136-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04136
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04136
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04136-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04136,vote_lepen_04136,vote_rejet_04136]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04136-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04136,vote_lepenpop_04136,vote_rejetpop_04136]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04136"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04136
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04136
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04136
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04137*/
/*------------------------------------------------------------------ */
async function GraphDATA04137() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04137.push(vote_macron); 
    vote_lepen_04137.push(vote_lepen);
    vote_rejet_04137.push(vote_rejet);
    vote_macronpop_04137.push(vote_macronMediane);
    vote_lepenpop_04137.push(vote_lepenMediane);
    vote_rejetpop_04137.push(vote_rejetMediane);
    name_Commune_04137.push(nameCommune);
    Pourcentage_04137.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04137.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04137.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04137.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04137.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04137 = [];
const vote_lepen_04137 = [];
const vote_rejet_04137 = [];
const vote_macronpop_04137 = [];
const vote_lepenpop_04137 = [];
const vote_rejetpop_04137 = [];
const name_Commune_04137 = [];
const Pourcentage_04137 = [];
const Pourcentage_rejet_04137 = [];
const vote_gene_macron_04137 = [];
const vote_gene_lepen_04137 = [];
const vote_gene_rejet_04137 = [];

async function chartIt04137(){
    await GraphDATA04137();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04137-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04137
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04137
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04137-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04137,vote_lepen_04137,vote_rejet_04137]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04137-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04137,vote_lepenpop_04137,vote_rejetpop_04137]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04137"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04137
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04137
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04137
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04138*/
/*------------------------------------------------------------------ */
async function GraphDATA04138() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04138.push(vote_macron); 
    vote_lepen_04138.push(vote_lepen);
    vote_rejet_04138.push(vote_rejet);
    vote_macronpop_04138.push(vote_macronMediane);
    vote_lepenpop_04138.push(vote_lepenMediane);
    vote_rejetpop_04138.push(vote_rejetMediane);
    name_Commune_04138.push(nameCommune);
    Pourcentage_04138.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04138.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04138.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04138.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04138.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04138 = [];
const vote_lepen_04138 = [];
const vote_rejet_04138 = [];
const vote_macronpop_04138 = [];
const vote_lepenpop_04138 = [];
const vote_rejetpop_04138 = [];
const name_Commune_04138 = [];
const Pourcentage_04138 = [];
const Pourcentage_rejet_04138 = [];
const vote_gene_macron_04138 = [];
const vote_gene_lepen_04138 = [];
const vote_gene_rejet_04138 = [];

async function chartIt04138(){
    await GraphDATA04138();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04138-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04138
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04138
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04138-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04138,vote_lepen_04138,vote_rejet_04138]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04138-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04138,vote_lepenpop_04138,vote_rejetpop_04138]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04138"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04138
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04138
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04138
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04139*/
/*------------------------------------------------------------------ */
async function GraphDATA04139() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04139.push(vote_macron); 
    vote_lepen_04139.push(vote_lepen);
    vote_rejet_04139.push(vote_rejet);
    vote_macronpop_04139.push(vote_macronMediane);
    vote_lepenpop_04139.push(vote_lepenMediane);
    vote_rejetpop_04139.push(vote_rejetMediane);
    name_Commune_04139.push(nameCommune);
    Pourcentage_04139.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04139.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04139.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04139.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04139.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04139 = [];
const vote_lepen_04139 = [];
const vote_rejet_04139 = [];
const vote_macronpop_04139 = [];
const vote_lepenpop_04139 = [];
const vote_rejetpop_04139 = [];
const name_Commune_04139 = [];
const Pourcentage_04139 = [];
const Pourcentage_rejet_04139 = [];
const vote_gene_macron_04139 = [];
const vote_gene_lepen_04139 = [];
const vote_gene_rejet_04139 = [];

async function chartIt04139(){
    await GraphDATA04139();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04139-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04139
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04139
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04139-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04139,vote_lepen_04139,vote_rejet_04139]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04139-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04139,vote_lepenpop_04139,vote_rejetpop_04139]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04139"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04139
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04139
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04139
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04140*/
/*------------------------------------------------------------------ */
async function GraphDATA04140() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04140.push(vote_macron); 
    vote_lepen_04140.push(vote_lepen);
    vote_rejet_04140.push(vote_rejet);
    vote_macronpop_04140.push(vote_macronMediane);
    vote_lepenpop_04140.push(vote_lepenMediane);
    vote_rejetpop_04140.push(vote_rejetMediane);
    name_Commune_04140.push(nameCommune);
    Pourcentage_04140.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04140.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04140.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04140.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04140.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04140 = [];
const vote_lepen_04140 = [];
const vote_rejet_04140 = [];
const vote_macronpop_04140 = [];
const vote_lepenpop_04140 = [];
const vote_rejetpop_04140 = [];
const name_Commune_04140 = [];
const Pourcentage_04140 = [];
const Pourcentage_rejet_04140 = [];
const vote_gene_macron_04140 = [];
const vote_gene_lepen_04140 = [];
const vote_gene_rejet_04140 = [];

async function chartIt04140(){
    await GraphDATA04140();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04140-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04140
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04140
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04140-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04140,vote_lepen_04140,vote_rejet_04140]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04140-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04140,vote_lepenpop_04140,vote_rejetpop_04140]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04140"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04140
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04140
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04140
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04141*/
/*------------------------------------------------------------------ */
async function GraphDATA04141() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04141.push(vote_macron); 
    vote_lepen_04141.push(vote_lepen);
    vote_rejet_04141.push(vote_rejet);
    vote_macronpop_04141.push(vote_macronMediane);
    vote_lepenpop_04141.push(vote_lepenMediane);
    vote_rejetpop_04141.push(vote_rejetMediane);
    name_Commune_04141.push(nameCommune);
    Pourcentage_04141.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04141.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04141.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04141.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04141.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04141 = [];
const vote_lepen_04141 = [];
const vote_rejet_04141 = [];
const vote_macronpop_04141 = [];
const vote_lepenpop_04141 = [];
const vote_rejetpop_04141 = [];
const name_Commune_04141 = [];
const Pourcentage_04141 = [];
const Pourcentage_rejet_04141 = [];
const vote_gene_macron_04141 = [];
const vote_gene_lepen_04141 = [];
const vote_gene_rejet_04141 = [];

async function chartIt04141(){
    await GraphDATA04141();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04141-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04141
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04141
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04141-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04141,vote_lepen_04141,vote_rejet_04141]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04141-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04141,vote_lepenpop_04141,vote_rejetpop_04141]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04141"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04141
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04141
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04141
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04142*/
/*------------------------------------------------------------------ */
async function GraphDATA04142() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04142.push(vote_macron); 
    vote_lepen_04142.push(vote_lepen);
    vote_rejet_04142.push(vote_rejet);
    vote_macronpop_04142.push(vote_macronMediane);
    vote_lepenpop_04142.push(vote_lepenMediane);
    vote_rejetpop_04142.push(vote_rejetMediane);
    name_Commune_04142.push(nameCommune);
    Pourcentage_04142.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04142.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04142.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04142.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04142.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04142 = [];
const vote_lepen_04142 = [];
const vote_rejet_04142 = [];
const vote_macronpop_04142 = [];
const vote_lepenpop_04142 = [];
const vote_rejetpop_04142 = [];
const name_Commune_04142 = [];
const Pourcentage_04142 = [];
const Pourcentage_rejet_04142 = [];
const vote_gene_macron_04142 = [];
const vote_gene_lepen_04142 = [];
const vote_gene_rejet_04142 = [];

async function chartIt04142(){
    await GraphDATA04142();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04142-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04142
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04142
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04142-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04142,vote_lepen_04142,vote_rejet_04142]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04142-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04142,vote_lepenpop_04142,vote_rejetpop_04142]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04142"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04142
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04142
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04142
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04143*/
/*------------------------------------------------------------------ */
async function GraphDATA04143() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04143.push(vote_macron); 
    vote_lepen_04143.push(vote_lepen);
    vote_rejet_04143.push(vote_rejet);
    vote_macronpop_04143.push(vote_macronMediane);
    vote_lepenpop_04143.push(vote_lepenMediane);
    vote_rejetpop_04143.push(vote_rejetMediane);
    name_Commune_04143.push(nameCommune);
    Pourcentage_04143.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04143.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04143.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04143.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04143.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04143 = [];
const vote_lepen_04143 = [];
const vote_rejet_04143 = [];
const vote_macronpop_04143 = [];
const vote_lepenpop_04143 = [];
const vote_rejetpop_04143 = [];
const name_Commune_04143 = [];
const Pourcentage_04143 = [];
const Pourcentage_rejet_04143 = [];
const vote_gene_macron_04143 = [];
const vote_gene_lepen_04143 = [];
const vote_gene_rejet_04143 = [];

async function chartIt04143(){
    await GraphDATA04143();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04143-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04143
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04143
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04143-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04143,vote_lepen_04143,vote_rejet_04143]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04143-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04143,vote_lepenpop_04143,vote_rejetpop_04143]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04143"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04143
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04143
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04143
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04144*/
/*------------------------------------------------------------------ */
async function GraphDATA04144() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04144.push(vote_macron); 
    vote_lepen_04144.push(vote_lepen);
    vote_rejet_04144.push(vote_rejet);
    vote_macronpop_04144.push(vote_macronMediane);
    vote_lepenpop_04144.push(vote_lepenMediane);
    vote_rejetpop_04144.push(vote_rejetMediane);
    name_Commune_04144.push(nameCommune);
    Pourcentage_04144.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04144.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04144.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04144.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04144.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04144 = [];
const vote_lepen_04144 = [];
const vote_rejet_04144 = [];
const vote_macronpop_04144 = [];
const vote_lepenpop_04144 = [];
const vote_rejetpop_04144 = [];
const name_Commune_04144 = [];
const Pourcentage_04144 = [];
const Pourcentage_rejet_04144 = [];
const vote_gene_macron_04144 = [];
const vote_gene_lepen_04144 = [];
const vote_gene_rejet_04144 = [];

async function chartIt04144(){
    await GraphDATA04144();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04144-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04144
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04144
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04144-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04144,vote_lepen_04144,vote_rejet_04144]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04144-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04144,vote_lepenpop_04144,vote_rejetpop_04144]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04144"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04144
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04144
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04144
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04145*/
/*------------------------------------------------------------------ */
async function GraphDATA04145() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04145.push(vote_macron); 
    vote_lepen_04145.push(vote_lepen);
    vote_rejet_04145.push(vote_rejet);
    vote_macronpop_04145.push(vote_macronMediane);
    vote_lepenpop_04145.push(vote_lepenMediane);
    vote_rejetpop_04145.push(vote_rejetMediane);
    name_Commune_04145.push(nameCommune);
    Pourcentage_04145.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04145.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04145.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04145.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04145.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04145 = [];
const vote_lepen_04145 = [];
const vote_rejet_04145 = [];
const vote_macronpop_04145 = [];
const vote_lepenpop_04145 = [];
const vote_rejetpop_04145 = [];
const name_Commune_04145 = [];
const Pourcentage_04145 = [];
const Pourcentage_rejet_04145 = [];
const vote_gene_macron_04145 = [];
const vote_gene_lepen_04145 = [];
const vote_gene_rejet_04145 = [];

async function chartIt04145(){
    await GraphDATA04145();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04145-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04145
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04145
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04145-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04145,vote_lepen_04145,vote_rejet_04145]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04145-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04145,vote_lepenpop_04145,vote_rejetpop_04145]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04145"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04145
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04145
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04145
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04146*/
/*------------------------------------------------------------------ */
async function GraphDATA04146() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04146.push(vote_macron); 
    vote_lepen_04146.push(vote_lepen);
    vote_rejet_04146.push(vote_rejet);
    vote_macronpop_04146.push(vote_macronMediane);
    vote_lepenpop_04146.push(vote_lepenMediane);
    vote_rejetpop_04146.push(vote_rejetMediane);
    name_Commune_04146.push(nameCommune);
    Pourcentage_04146.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04146.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04146.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04146.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04146.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04146 = [];
const vote_lepen_04146 = [];
const vote_rejet_04146 = [];
const vote_macronpop_04146 = [];
const vote_lepenpop_04146 = [];
const vote_rejetpop_04146 = [];
const name_Commune_04146 = [];
const Pourcentage_04146 = [];
const Pourcentage_rejet_04146 = [];
const vote_gene_macron_04146 = [];
const vote_gene_lepen_04146 = [];
const vote_gene_rejet_04146 = [];

async function chartIt04146(){
    await GraphDATA04146();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04146-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04146
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04146
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04146-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04146,vote_lepen_04146,vote_rejet_04146]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04146-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04146,vote_lepenpop_04146,vote_rejetpop_04146]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04146"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04146
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04146
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04146
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04147*/
/*------------------------------------------------------------------ */
async function GraphDATA04147() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04147.push(vote_macron); 
    vote_lepen_04147.push(vote_lepen);
    vote_rejet_04147.push(vote_rejet);
    vote_macronpop_04147.push(vote_macronMediane);
    vote_lepenpop_04147.push(vote_lepenMediane);
    vote_rejetpop_04147.push(vote_rejetMediane);
    name_Commune_04147.push(nameCommune);
    Pourcentage_04147.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04147.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04147.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04147.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04147.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04147 = [];
const vote_lepen_04147 = [];
const vote_rejet_04147 = [];
const vote_macronpop_04147 = [];
const vote_lepenpop_04147 = [];
const vote_rejetpop_04147 = [];
const name_Commune_04147 = [];
const Pourcentage_04147 = [];
const Pourcentage_rejet_04147 = [];
const vote_gene_macron_04147 = [];
const vote_gene_lepen_04147 = [];
const vote_gene_rejet_04147 = [];

async function chartIt04147(){
    await GraphDATA04147();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04147-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04147
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04147
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04147-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04147,vote_lepen_04147,vote_rejet_04147]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04147-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04147,vote_lepenpop_04147,vote_rejetpop_04147]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04147"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04147
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04147
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04147
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04148*/
/*------------------------------------------------------------------ */
async function GraphDATA04148() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04148.push(vote_macron); 
    vote_lepen_04148.push(vote_lepen);
    vote_rejet_04148.push(vote_rejet);
    vote_macronpop_04148.push(vote_macronMediane);
    vote_lepenpop_04148.push(vote_lepenMediane);
    vote_rejetpop_04148.push(vote_rejetMediane);
    name_Commune_04148.push(nameCommune);
    Pourcentage_04148.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04148.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04148.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04148.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04148.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04148 = [];
const vote_lepen_04148 = [];
const vote_rejet_04148 = [];
const vote_macronpop_04148 = [];
const vote_lepenpop_04148 = [];
const vote_rejetpop_04148 = [];
const name_Commune_04148 = [];
const Pourcentage_04148 = [];
const Pourcentage_rejet_04148 = [];
const vote_gene_macron_04148 = [];
const vote_gene_lepen_04148 = [];
const vote_gene_rejet_04148 = [];

async function chartIt04148(){
    await GraphDATA04148();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04148-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04148
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04148
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04148-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04148,vote_lepen_04148,vote_rejet_04148]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04148-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04148,vote_lepenpop_04148,vote_rejetpop_04148]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04148"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04148
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04148
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04148
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04149*/
/*------------------------------------------------------------------ */
async function GraphDATA04149() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04149.push(vote_macron); 
    vote_lepen_04149.push(vote_lepen);
    vote_rejet_04149.push(vote_rejet);
    vote_macronpop_04149.push(vote_macronMediane);
    vote_lepenpop_04149.push(vote_lepenMediane);
    vote_rejetpop_04149.push(vote_rejetMediane);
    name_Commune_04149.push(nameCommune);
    Pourcentage_04149.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04149.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04149.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04149.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04149.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04149 = [];
const vote_lepen_04149 = [];
const vote_rejet_04149 = [];
const vote_macronpop_04149 = [];
const vote_lepenpop_04149 = [];
const vote_rejetpop_04149 = [];
const name_Commune_04149 = [];
const Pourcentage_04149 = [];
const Pourcentage_rejet_04149 = [];
const vote_gene_macron_04149 = [];
const vote_gene_lepen_04149 = [];
const vote_gene_rejet_04149 = [];

async function chartIt04149(){
    await GraphDATA04149();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04149-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04149
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04149
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04149-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04149,vote_lepen_04149,vote_rejet_04149]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04149-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04149,vote_lepenpop_04149,vote_rejetpop_04149]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04149"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04149
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04149
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04149
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04150*/
/*------------------------------------------------------------------ */
async function GraphDATA04150() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04150.push(vote_macron); 
    vote_lepen_04150.push(vote_lepen);
    vote_rejet_04150.push(vote_rejet);
    vote_macronpop_04150.push(vote_macronMediane);
    vote_lepenpop_04150.push(vote_lepenMediane);
    vote_rejetpop_04150.push(vote_rejetMediane);
    name_Commune_04150.push(nameCommune);
    Pourcentage_04150.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04150.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04150.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04150.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04150.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04150 = [];
const vote_lepen_04150 = [];
const vote_rejet_04150 = [];
const vote_macronpop_04150 = [];
const vote_lepenpop_04150 = [];
const vote_rejetpop_04150 = [];
const name_Commune_04150 = [];
const Pourcentage_04150 = [];
const Pourcentage_rejet_04150 = [];
const vote_gene_macron_04150 = [];
const vote_gene_lepen_04150 = [];
const vote_gene_rejet_04150 = [];

async function chartIt04150(){
    await GraphDATA04150();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04150-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04150
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04150
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04150-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04150,vote_lepen_04150,vote_rejet_04150]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04150-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04150,vote_lepenpop_04150,vote_rejetpop_04150]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04150"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04150
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04150
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04150
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04151*/
/*------------------------------------------------------------------ */
async function GraphDATA04151() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04151.push(vote_macron); 
    vote_lepen_04151.push(vote_lepen);
    vote_rejet_04151.push(vote_rejet);
    vote_macronpop_04151.push(vote_macronMediane);
    vote_lepenpop_04151.push(vote_lepenMediane);
    vote_rejetpop_04151.push(vote_rejetMediane);
    name_Commune_04151.push(nameCommune);
    Pourcentage_04151.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04151.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04151.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04151.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04151.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04151 = [];
const vote_lepen_04151 = [];
const vote_rejet_04151 = [];
const vote_macronpop_04151 = [];
const vote_lepenpop_04151 = [];
const vote_rejetpop_04151 = [];
const name_Commune_04151 = [];
const Pourcentage_04151 = [];
const Pourcentage_rejet_04151 = [];
const vote_gene_macron_04151 = [];
const vote_gene_lepen_04151 = [];
const vote_gene_rejet_04151 = [];

async function chartIt04151(){
    await GraphDATA04151();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04151-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04151
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04151
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04151-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04151,vote_lepen_04151,vote_rejet_04151]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04151-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04151,vote_lepenpop_04151,vote_rejetpop_04151]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04151"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04151
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04151
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04151
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04152*/
/*------------------------------------------------------------------ */
async function GraphDATA04152() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04152.push(vote_macron); 
    vote_lepen_04152.push(vote_lepen);
    vote_rejet_04152.push(vote_rejet);
    vote_macronpop_04152.push(vote_macronMediane);
    vote_lepenpop_04152.push(vote_lepenMediane);
    vote_rejetpop_04152.push(vote_rejetMediane);
    name_Commune_04152.push(nameCommune);
    Pourcentage_04152.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04152.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04152.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04152.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04152.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04152 = [];
const vote_lepen_04152 = [];
const vote_rejet_04152 = [];
const vote_macronpop_04152 = [];
const vote_lepenpop_04152 = [];
const vote_rejetpop_04152 = [];
const name_Commune_04152 = [];
const Pourcentage_04152 = [];
const Pourcentage_rejet_04152 = [];
const vote_gene_macron_04152 = [];
const vote_gene_lepen_04152 = [];
const vote_gene_rejet_04152 = [];

async function chartIt04152(){
    await GraphDATA04152();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04152-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04152
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04152
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04152-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04152,vote_lepen_04152,vote_rejet_04152]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04152-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04152,vote_lepenpop_04152,vote_rejetpop_04152]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04152"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04152
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04152
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04152
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04153*/
/*------------------------------------------------------------------ */
async function GraphDATA04153() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04153.push(vote_macron); 
    vote_lepen_04153.push(vote_lepen);
    vote_rejet_04153.push(vote_rejet);
    vote_macronpop_04153.push(vote_macronMediane);
    vote_lepenpop_04153.push(vote_lepenMediane);
    vote_rejetpop_04153.push(vote_rejetMediane);
    name_Commune_04153.push(nameCommune);
    Pourcentage_04153.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04153.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04153.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04153.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04153.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04153 = [];
const vote_lepen_04153 = [];
const vote_rejet_04153 = [];
const vote_macronpop_04153 = [];
const vote_lepenpop_04153 = [];
const vote_rejetpop_04153 = [];
const name_Commune_04153 = [];
const Pourcentage_04153 = [];
const Pourcentage_rejet_04153 = [];
const vote_gene_macron_04153 = [];
const vote_gene_lepen_04153 = [];
const vote_gene_rejet_04153 = [];

async function chartIt04153(){
    await GraphDATA04153();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04153-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04153
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04153
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04153-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04153,vote_lepen_04153,vote_rejet_04153]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04153-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04153,vote_lepenpop_04153,vote_rejetpop_04153]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04153"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04153
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04153
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04153
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04154*/
/*------------------------------------------------------------------ */
async function GraphDATA04154() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04154.push(vote_macron); 
    vote_lepen_04154.push(vote_lepen);
    vote_rejet_04154.push(vote_rejet);
    vote_macronpop_04154.push(vote_macronMediane);
    vote_lepenpop_04154.push(vote_lepenMediane);
    vote_rejetpop_04154.push(vote_rejetMediane);
    name_Commune_04154.push(nameCommune);
    Pourcentage_04154.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04154.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04154.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04154.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04154.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04154 = [];
const vote_lepen_04154 = [];
const vote_rejet_04154 = [];
const vote_macronpop_04154 = [];
const vote_lepenpop_04154 = [];
const vote_rejetpop_04154 = [];
const name_Commune_04154 = [];
const Pourcentage_04154 = [];
const Pourcentage_rejet_04154 = [];
const vote_gene_macron_04154 = [];
const vote_gene_lepen_04154 = [];
const vote_gene_rejet_04154 = [];

async function chartIt04154(){
    await GraphDATA04154();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04154-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04154
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04154
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04154-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04154,vote_lepen_04154,vote_rejet_04154]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04154-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04154,vote_lepenpop_04154,vote_rejetpop_04154]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04154"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04154
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04154
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04154
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04155*/
/*------------------------------------------------------------------ */
async function GraphDATA04155() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04155.push(vote_macron); 
    vote_lepen_04155.push(vote_lepen);
    vote_rejet_04155.push(vote_rejet);
    vote_macronpop_04155.push(vote_macronMediane);
    vote_lepenpop_04155.push(vote_lepenMediane);
    vote_rejetpop_04155.push(vote_rejetMediane);
    name_Commune_04155.push(nameCommune);
    Pourcentage_04155.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04155.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04155.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04155.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04155.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04155 = [];
const vote_lepen_04155 = [];
const vote_rejet_04155 = [];
const vote_macronpop_04155 = [];
const vote_lepenpop_04155 = [];
const vote_rejetpop_04155 = [];
const name_Commune_04155 = [];
const Pourcentage_04155 = [];
const Pourcentage_rejet_04155 = [];
const vote_gene_macron_04155 = [];
const vote_gene_lepen_04155 = [];
const vote_gene_rejet_04155 = [];

async function chartIt04155(){
    await GraphDATA04155();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04155-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04155
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04155
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04155-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04155,vote_lepen_04155,vote_rejet_04155]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04155-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04155,vote_lepenpop_04155,vote_rejetpop_04155]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04155"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04155
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04155
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04155
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04156*/
/*------------------------------------------------------------------ */
async function GraphDATA04156() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04156.push(vote_macron); 
    vote_lepen_04156.push(vote_lepen);
    vote_rejet_04156.push(vote_rejet);
    vote_macronpop_04156.push(vote_macronMediane);
    vote_lepenpop_04156.push(vote_lepenMediane);
    vote_rejetpop_04156.push(vote_rejetMediane);
    name_Commune_04156.push(nameCommune);
    Pourcentage_04156.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04156.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04156.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04156.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04156.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04156 = [];
const vote_lepen_04156 = [];
const vote_rejet_04156 = [];
const vote_macronpop_04156 = [];
const vote_lepenpop_04156 = [];
const vote_rejetpop_04156 = [];
const name_Commune_04156 = [];
const Pourcentage_04156 = [];
const Pourcentage_rejet_04156 = [];
const vote_gene_macron_04156 = [];
const vote_gene_lepen_04156 = [];
const vote_gene_rejet_04156 = [];

async function chartIt04156(){
    await GraphDATA04156();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04156-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04156
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04156
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04156-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04156,vote_lepen_04156,vote_rejet_04156]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04156-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04156,vote_lepenpop_04156,vote_rejetpop_04156]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04156"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04156
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04156
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04156
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04157*/
/*------------------------------------------------------------------ */
async function GraphDATA04157() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04157.push(vote_macron); 
    vote_lepen_04157.push(vote_lepen);
    vote_rejet_04157.push(vote_rejet);
    vote_macronpop_04157.push(vote_macronMediane);
    vote_lepenpop_04157.push(vote_lepenMediane);
    vote_rejetpop_04157.push(vote_rejetMediane);
    name_Commune_04157.push(nameCommune);
    Pourcentage_04157.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04157.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04157.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04157.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04157.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04157 = [];
const vote_lepen_04157 = [];
const vote_rejet_04157 = [];
const vote_macronpop_04157 = [];
const vote_lepenpop_04157 = [];
const vote_rejetpop_04157 = [];
const name_Commune_04157 = [];
const Pourcentage_04157 = [];
const Pourcentage_rejet_04157 = [];
const vote_gene_macron_04157 = [];
const vote_gene_lepen_04157 = [];
const vote_gene_rejet_04157 = [];

async function chartIt04157(){
    await GraphDATA04157();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04157-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04157
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04157
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04157-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04157,vote_lepen_04157,vote_rejet_04157]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04157-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04157,vote_lepenpop_04157,vote_rejetpop_04157]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04157"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04157
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04157
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04157
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04158*/
/*------------------------------------------------------------------ */
async function GraphDATA04158() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04158.push(vote_macron); 
    vote_lepen_04158.push(vote_lepen);
    vote_rejet_04158.push(vote_rejet);
    vote_macronpop_04158.push(vote_macronMediane);
    vote_lepenpop_04158.push(vote_lepenMediane);
    vote_rejetpop_04158.push(vote_rejetMediane);
    name_Commune_04158.push(nameCommune);
    Pourcentage_04158.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04158.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04158.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04158.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04158.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04158 = [];
const vote_lepen_04158 = [];
const vote_rejet_04158 = [];
const vote_macronpop_04158 = [];
const vote_lepenpop_04158 = [];
const vote_rejetpop_04158 = [];
const name_Commune_04158 = [];
const Pourcentage_04158 = [];
const Pourcentage_rejet_04158 = [];
const vote_gene_macron_04158 = [];
const vote_gene_lepen_04158 = [];
const vote_gene_rejet_04158 = [];

async function chartIt04158(){
    await GraphDATA04158();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04158-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04158
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04158
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04158-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04158,vote_lepen_04158,vote_rejet_04158]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04158-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04158,vote_lepenpop_04158,vote_rejetpop_04158]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04158"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04158
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04158
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04158
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04159*/
/*------------------------------------------------------------------ */
async function GraphDATA04159() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04159.push(vote_macron); 
    vote_lepen_04159.push(vote_lepen);
    vote_rejet_04159.push(vote_rejet);
    vote_macronpop_04159.push(vote_macronMediane);
    vote_lepenpop_04159.push(vote_lepenMediane);
    vote_rejetpop_04159.push(vote_rejetMediane);
    name_Commune_04159.push(nameCommune);
    Pourcentage_04159.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04159.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04159.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04159.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04159.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04159 = [];
const vote_lepen_04159 = [];
const vote_rejet_04159 = [];
const vote_macronpop_04159 = [];
const vote_lepenpop_04159 = [];
const vote_rejetpop_04159 = [];
const name_Commune_04159 = [];
const Pourcentage_04159 = [];
const Pourcentage_rejet_04159 = [];
const vote_gene_macron_04159 = [];
const vote_gene_lepen_04159 = [];
const vote_gene_rejet_04159 = [];

async function chartIt04159(){
    await GraphDATA04159();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04159-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04159
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04159
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04159-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04159,vote_lepen_04159,vote_rejet_04159]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04159-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04159,vote_lepenpop_04159,vote_rejetpop_04159]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04159"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04159
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04159
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04159
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04160*/
/*------------------------------------------------------------------ */
async function GraphDATA04160() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04160.push(vote_macron); 
    vote_lepen_04160.push(vote_lepen);
    vote_rejet_04160.push(vote_rejet);
    vote_macronpop_04160.push(vote_macronMediane);
    vote_lepenpop_04160.push(vote_lepenMediane);
    vote_rejetpop_04160.push(vote_rejetMediane);
    name_Commune_04160.push(nameCommune);
    Pourcentage_04160.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04160.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04160.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04160.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04160.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04160 = [];
const vote_lepen_04160 = [];
const vote_rejet_04160 = [];
const vote_macronpop_04160 = [];
const vote_lepenpop_04160 = [];
const vote_rejetpop_04160 = [];
const name_Commune_04160 = [];
const Pourcentage_04160 = [];
const Pourcentage_rejet_04160 = [];
const vote_gene_macron_04160 = [];
const vote_gene_lepen_04160 = [];
const vote_gene_rejet_04160 = [];

async function chartIt04160(){
    await GraphDATA04160();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04160-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04160
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04160
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04160-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04160,vote_lepen_04160,vote_rejet_04160]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04160-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04160,vote_lepenpop_04160,vote_rejetpop_04160]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04160"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04160
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04160
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04160
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04161*/
/*------------------------------------------------------------------ */
async function GraphDATA04161() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04161.push(vote_macron); 
    vote_lepen_04161.push(vote_lepen);
    vote_rejet_04161.push(vote_rejet);
    vote_macronpop_04161.push(vote_macronMediane);
    vote_lepenpop_04161.push(vote_lepenMediane);
    vote_rejetpop_04161.push(vote_rejetMediane);
    name_Commune_04161.push(nameCommune);
    Pourcentage_04161.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04161.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04161.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04161.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04161.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04161 = [];
const vote_lepen_04161 = [];
const vote_rejet_04161 = [];
const vote_macronpop_04161 = [];
const vote_lepenpop_04161 = [];
const vote_rejetpop_04161 = [];
const name_Commune_04161 = [];
const Pourcentage_04161 = [];
const Pourcentage_rejet_04161 = [];
const vote_gene_macron_04161 = [];
const vote_gene_lepen_04161 = [];
const vote_gene_rejet_04161 = [];

async function chartIt04161(){
    await GraphDATA04161();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04161-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04161
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04161
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04161-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04161,vote_lepen_04161,vote_rejet_04161]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04161-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04161,vote_lepenpop_04161,vote_rejetpop_04161]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04161"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04161
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04161
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04161
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04162*/
/*------------------------------------------------------------------ */
async function GraphDATA04162() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04162.push(vote_macron); 
    vote_lepen_04162.push(vote_lepen);
    vote_rejet_04162.push(vote_rejet);
    vote_macronpop_04162.push(vote_macronMediane);
    vote_lepenpop_04162.push(vote_lepenMediane);
    vote_rejetpop_04162.push(vote_rejetMediane);
    name_Commune_04162.push(nameCommune);
    Pourcentage_04162.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04162.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04162.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04162.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04162.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04162 = [];
const vote_lepen_04162 = [];
const vote_rejet_04162 = [];
const vote_macronpop_04162 = [];
const vote_lepenpop_04162 = [];
const vote_rejetpop_04162 = [];
const name_Commune_04162 = [];
const Pourcentage_04162 = [];
const Pourcentage_rejet_04162 = [];
const vote_gene_macron_04162 = [];
const vote_gene_lepen_04162 = [];
const vote_gene_rejet_04162 = [];

async function chartIt04162(){
    await GraphDATA04162();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04162-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04162
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04162
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04162-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04162,vote_lepen_04162,vote_rejet_04162]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04162-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04162,vote_lepenpop_04162,vote_rejetpop_04162]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04162"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04162
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04162
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04162
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04163*/
/*------------------------------------------------------------------ */
async function GraphDATA04163() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04163.push(vote_macron); 
    vote_lepen_04163.push(vote_lepen);
    vote_rejet_04163.push(vote_rejet);
    vote_macronpop_04163.push(vote_macronMediane);
    vote_lepenpop_04163.push(vote_lepenMediane);
    vote_rejetpop_04163.push(vote_rejetMediane);
    name_Commune_04163.push(nameCommune);
    Pourcentage_04163.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04163.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04163.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04163.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04163.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04163 = [];
const vote_lepen_04163 = [];
const vote_rejet_04163 = [];
const vote_macronpop_04163 = [];
const vote_lepenpop_04163 = [];
const vote_rejetpop_04163 = [];
const name_Commune_04163 = [];
const Pourcentage_04163 = [];
const Pourcentage_rejet_04163 = [];
const vote_gene_macron_04163 = [];
const vote_gene_lepen_04163 = [];
const vote_gene_rejet_04163 = [];

async function chartIt04163(){
    await GraphDATA04163();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04163-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04163
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04163
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04163-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04163,vote_lepen_04163,vote_rejet_04163]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04163-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04163,vote_lepenpop_04163,vote_rejetpop_04163]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04163"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04163
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04163
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04163
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04164*/
/*------------------------------------------------------------------ */
async function GraphDATA04164() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04164.push(vote_macron); 
    vote_lepen_04164.push(vote_lepen);
    vote_rejet_04164.push(vote_rejet);
    vote_macronpop_04164.push(vote_macronMediane);
    vote_lepenpop_04164.push(vote_lepenMediane);
    vote_rejetpop_04164.push(vote_rejetMediane);
    name_Commune_04164.push(nameCommune);
    Pourcentage_04164.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04164.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04164.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04164.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04164.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04164 = [];
const vote_lepen_04164 = [];
const vote_rejet_04164 = [];
const vote_macronpop_04164 = [];
const vote_lepenpop_04164 = [];
const vote_rejetpop_04164 = [];
const name_Commune_04164 = [];
const Pourcentage_04164 = [];
const Pourcentage_rejet_04164 = [];
const vote_gene_macron_04164 = [];
const vote_gene_lepen_04164 = [];
const vote_gene_rejet_04164 = [];

async function chartIt04164(){
    await GraphDATA04164();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04164-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04164
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04164
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04164-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04164,vote_lepen_04164,vote_rejet_04164]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04164-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04164,vote_lepenpop_04164,vote_rejetpop_04164]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04164"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04164
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04164
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04164
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04165*/
/*------------------------------------------------------------------ */
async function GraphDATA04165() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04165.push(vote_macron); 
    vote_lepen_04165.push(vote_lepen);
    vote_rejet_04165.push(vote_rejet);
    vote_macronpop_04165.push(vote_macronMediane);
    vote_lepenpop_04165.push(vote_lepenMediane);
    vote_rejetpop_04165.push(vote_rejetMediane);
    name_Commune_04165.push(nameCommune);
    Pourcentage_04165.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04165.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04165.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04165.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04165.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04165 = [];
const vote_lepen_04165 = [];
const vote_rejet_04165 = [];
const vote_macronpop_04165 = [];
const vote_lepenpop_04165 = [];
const vote_rejetpop_04165 = [];
const name_Commune_04165 = [];
const Pourcentage_04165 = [];
const Pourcentage_rejet_04165 = [];
const vote_gene_macron_04165 = [];
const vote_gene_lepen_04165 = [];
const vote_gene_rejet_04165 = [];

async function chartIt04165(){
    await GraphDATA04165();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04165-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04165
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04165
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04165-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04165,vote_lepen_04165,vote_rejet_04165]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04165-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04165,vote_lepenpop_04165,vote_rejetpop_04165]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04165"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04165
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04165
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04165
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04166*/
/*------------------------------------------------------------------ */
async function GraphDATA04166() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04166.push(vote_macron); 
    vote_lepen_04166.push(vote_lepen);
    vote_rejet_04166.push(vote_rejet);
    vote_macronpop_04166.push(vote_macronMediane);
    vote_lepenpop_04166.push(vote_lepenMediane);
    vote_rejetpop_04166.push(vote_rejetMediane);
    name_Commune_04166.push(nameCommune);
    Pourcentage_04166.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04166.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04166.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04166.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04166.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04166 = [];
const vote_lepen_04166 = [];
const vote_rejet_04166 = [];
const vote_macronpop_04166 = [];
const vote_lepenpop_04166 = [];
const vote_rejetpop_04166 = [];
const name_Commune_04166 = [];
const Pourcentage_04166 = [];
const Pourcentage_rejet_04166 = [];
const vote_gene_macron_04166 = [];
const vote_gene_lepen_04166 = [];
const vote_gene_rejet_04166 = [];

async function chartIt04166(){
    await GraphDATA04166();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04166-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04166
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04166
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04166-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04166,vote_lepen_04166,vote_rejet_04166]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04166-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04166,vote_lepenpop_04166,vote_rejetpop_04166]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04166"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04166
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04166
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04166
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04167*/
/*------------------------------------------------------------------ */
async function GraphDATA04167() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04167.push(vote_macron); 
    vote_lepen_04167.push(vote_lepen);
    vote_rejet_04167.push(vote_rejet);
    vote_macronpop_04167.push(vote_macronMediane);
    vote_lepenpop_04167.push(vote_lepenMediane);
    vote_rejetpop_04167.push(vote_rejetMediane);
    name_Commune_04167.push(nameCommune);
    Pourcentage_04167.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04167.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04167.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04167.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04167.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04167 = [];
const vote_lepen_04167 = [];
const vote_rejet_04167 = [];
const vote_macronpop_04167 = [];
const vote_lepenpop_04167 = [];
const vote_rejetpop_04167 = [];
const name_Commune_04167 = [];
const Pourcentage_04167 = [];
const Pourcentage_rejet_04167 = [];
const vote_gene_macron_04167 = [];
const vote_gene_lepen_04167 = [];
const vote_gene_rejet_04167 = [];

async function chartIt04167(){
    await GraphDATA04167();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04167-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04167
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04167
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04167-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04167,vote_lepen_04167,vote_rejet_04167]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04167-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04167,vote_lepenpop_04167,vote_rejetpop_04167]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04167"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04167
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04167
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04167
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04168*/
/*------------------------------------------------------------------ */
async function GraphDATA04168() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04168.push(vote_macron); 
    vote_lepen_04168.push(vote_lepen);
    vote_rejet_04168.push(vote_rejet);
    vote_macronpop_04168.push(vote_macronMediane);
    vote_lepenpop_04168.push(vote_lepenMediane);
    vote_rejetpop_04168.push(vote_rejetMediane);
    name_Commune_04168.push(nameCommune);
    Pourcentage_04168.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04168.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04168.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04168.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04168.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04168 = [];
const vote_lepen_04168 = [];
const vote_rejet_04168 = [];
const vote_macronpop_04168 = [];
const vote_lepenpop_04168 = [];
const vote_rejetpop_04168 = [];
const name_Commune_04168 = [];
const Pourcentage_04168 = [];
const Pourcentage_rejet_04168 = [];
const vote_gene_macron_04168 = [];
const vote_gene_lepen_04168 = [];
const vote_gene_rejet_04168 = [];

async function chartIt04168(){
    await GraphDATA04168();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04168-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04168
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04168
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04168-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04168,vote_lepen_04168,vote_rejet_04168]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04168-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04168,vote_lepenpop_04168,vote_rejetpop_04168]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04168"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04168
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04168
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04168
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04169*/
/*------------------------------------------------------------------ */
async function GraphDATA04169() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04169.push(vote_macron); 
    vote_lepen_04169.push(vote_lepen);
    vote_rejet_04169.push(vote_rejet);
    vote_macronpop_04169.push(vote_macronMediane);
    vote_lepenpop_04169.push(vote_lepenMediane);
    vote_rejetpop_04169.push(vote_rejetMediane);
    name_Commune_04169.push(nameCommune);
    Pourcentage_04169.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04169.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04169.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04169.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04169.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04169 = [];
const vote_lepen_04169 = [];
const vote_rejet_04169 = [];
const vote_macronpop_04169 = [];
const vote_lepenpop_04169 = [];
const vote_rejetpop_04169 = [];
const name_Commune_04169 = [];
const Pourcentage_04169 = [];
const Pourcentage_rejet_04169 = [];
const vote_gene_macron_04169 = [];
const vote_gene_lepen_04169 = [];
const vote_gene_rejet_04169 = [];

async function chartIt04169(){
    await GraphDATA04169();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04169-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04169
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04169
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04169-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04169,vote_lepen_04169,vote_rejet_04169]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04169-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04169,vote_lepenpop_04169,vote_rejetpop_04169]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04169"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04169
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04169
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04169
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04170*/
/*------------------------------------------------------------------ */
async function GraphDATA04170() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04170.push(vote_macron); 
    vote_lepen_04170.push(vote_lepen);
    vote_rejet_04170.push(vote_rejet);
    vote_macronpop_04170.push(vote_macronMediane);
    vote_lepenpop_04170.push(vote_lepenMediane);
    vote_rejetpop_04170.push(vote_rejetMediane);
    name_Commune_04170.push(nameCommune);
    Pourcentage_04170.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04170.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04170.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04170.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04170.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04170 = [];
const vote_lepen_04170 = [];
const vote_rejet_04170 = [];
const vote_macronpop_04170 = [];
const vote_lepenpop_04170 = [];
const vote_rejetpop_04170 = [];
const name_Commune_04170 = [];
const Pourcentage_04170 = [];
const Pourcentage_rejet_04170 = [];
const vote_gene_macron_04170 = [];
const vote_gene_lepen_04170 = [];
const vote_gene_rejet_04170 = [];

async function chartIt04170(){
    await GraphDATA04170();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04170-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04170
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04170
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04170-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04170,vote_lepen_04170,vote_rejet_04170]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04170-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04170,vote_lepenpop_04170,vote_rejetpop_04170]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04170"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04170
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04170
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04170
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04171*/
/*------------------------------------------------------------------ */
async function GraphDATA04171() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04171.push(vote_macron); 
    vote_lepen_04171.push(vote_lepen);
    vote_rejet_04171.push(vote_rejet);
    vote_macronpop_04171.push(vote_macronMediane);
    vote_lepenpop_04171.push(vote_lepenMediane);
    vote_rejetpop_04171.push(vote_rejetMediane);
    name_Commune_04171.push(nameCommune);
    Pourcentage_04171.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04171.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04171.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04171.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04171.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04171 = [];
const vote_lepen_04171 = [];
const vote_rejet_04171 = [];
const vote_macronpop_04171 = [];
const vote_lepenpop_04171 = [];
const vote_rejetpop_04171 = [];
const name_Commune_04171 = [];
const Pourcentage_04171 = [];
const Pourcentage_rejet_04171 = [];
const vote_gene_macron_04171 = [];
const vote_gene_lepen_04171 = [];
const vote_gene_rejet_04171 = [];

async function chartIt04171(){
    await GraphDATA04171();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04171-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04171
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04171
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04171-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04171,vote_lepen_04171,vote_rejet_04171]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04171-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04171,vote_lepenpop_04171,vote_rejetpop_04171]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04171"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04171
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04171
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04171
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04172*/
/*------------------------------------------------------------------ */
async function GraphDATA04172() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04172.push(vote_macron); 
    vote_lepen_04172.push(vote_lepen);
    vote_rejet_04172.push(vote_rejet);
    vote_macronpop_04172.push(vote_macronMediane);
    vote_lepenpop_04172.push(vote_lepenMediane);
    vote_rejetpop_04172.push(vote_rejetMediane);
    name_Commune_04172.push(nameCommune);
    Pourcentage_04172.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04172.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04172.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04172.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04172.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04172 = [];
const vote_lepen_04172 = [];
const vote_rejet_04172 = [];
const vote_macronpop_04172 = [];
const vote_lepenpop_04172 = [];
const vote_rejetpop_04172 = [];
const name_Commune_04172 = [];
const Pourcentage_04172 = [];
const Pourcentage_rejet_04172 = [];
const vote_gene_macron_04172 = [];
const vote_gene_lepen_04172 = [];
const vote_gene_rejet_04172 = [];

async function chartIt04172(){
    await GraphDATA04172();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04172-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04172
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04172
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04172-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04172,vote_lepen_04172,vote_rejet_04172]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04172-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04172,vote_lepenpop_04172,vote_rejetpop_04172]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04172"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04172
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04172
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04172
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04173*/
/*------------------------------------------------------------------ */
async function GraphDATA04173() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04173.push(vote_macron); 
    vote_lepen_04173.push(vote_lepen);
    vote_rejet_04173.push(vote_rejet);
    vote_macronpop_04173.push(vote_macronMediane);
    vote_lepenpop_04173.push(vote_lepenMediane);
    vote_rejetpop_04173.push(vote_rejetMediane);
    name_Commune_04173.push(nameCommune);
    Pourcentage_04173.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04173.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04173.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04173.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04173.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04173 = [];
const vote_lepen_04173 = [];
const vote_rejet_04173 = [];
const vote_macronpop_04173 = [];
const vote_lepenpop_04173 = [];
const vote_rejetpop_04173 = [];
const name_Commune_04173 = [];
const Pourcentage_04173 = [];
const Pourcentage_rejet_04173 = [];
const vote_gene_macron_04173 = [];
const vote_gene_lepen_04173 = [];
const vote_gene_rejet_04173 = [];

async function chartIt04173(){
    await GraphDATA04173();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04173-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04173
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04173
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04173-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04173,vote_lepen_04173,vote_rejet_04173]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04173-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04173,vote_lepenpop_04173,vote_rejetpop_04173]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04173"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04173
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04173
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04173
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04174*/
/*------------------------------------------------------------------ */
async function GraphDATA04174() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04174.push(vote_macron); 
    vote_lepen_04174.push(vote_lepen);
    vote_rejet_04174.push(vote_rejet);
    vote_macronpop_04174.push(vote_macronMediane);
    vote_lepenpop_04174.push(vote_lepenMediane);
    vote_rejetpop_04174.push(vote_rejetMediane);
    name_Commune_04174.push(nameCommune);
    Pourcentage_04174.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04174.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04174.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04174.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04174.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04174 = [];
const vote_lepen_04174 = [];
const vote_rejet_04174 = [];
const vote_macronpop_04174 = [];
const vote_lepenpop_04174 = [];
const vote_rejetpop_04174 = [];
const name_Commune_04174 = [];
const Pourcentage_04174 = [];
const Pourcentage_rejet_04174 = [];
const vote_gene_macron_04174 = [];
const vote_gene_lepen_04174 = [];
const vote_gene_rejet_04174 = [];

async function chartIt04174(){
    await GraphDATA04174();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04174-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04174
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04174
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04174-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04174,vote_lepen_04174,vote_rejet_04174]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04174-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04174,vote_lepenpop_04174,vote_rejetpop_04174]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04174"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04174
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04174
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04174
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04175*/
/*------------------------------------------------------------------ */
async function GraphDATA04175() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04175.push(vote_macron); 
    vote_lepen_04175.push(vote_lepen);
    vote_rejet_04175.push(vote_rejet);
    vote_macronpop_04175.push(vote_macronMediane);
    vote_lepenpop_04175.push(vote_lepenMediane);
    vote_rejetpop_04175.push(vote_rejetMediane);
    name_Commune_04175.push(nameCommune);
    Pourcentage_04175.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04175.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04175.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04175.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04175.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04175 = [];
const vote_lepen_04175 = [];
const vote_rejet_04175 = [];
const vote_macronpop_04175 = [];
const vote_lepenpop_04175 = [];
const vote_rejetpop_04175 = [];
const name_Commune_04175 = [];
const Pourcentage_04175 = [];
const Pourcentage_rejet_04175 = [];
const vote_gene_macron_04175 = [];
const vote_gene_lepen_04175 = [];
const vote_gene_rejet_04175 = [];

async function chartIt04175(){
    await GraphDATA04175();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04175-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04175
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04175
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04175-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04175,vote_lepen_04175,vote_rejet_04175]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04175-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04175,vote_lepenpop_04175,vote_rejetpop_04175]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04175"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04175
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04175
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04175
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04176*/
/*------------------------------------------------------------------ */
async function GraphDATA04176() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04176.push(vote_macron); 
    vote_lepen_04176.push(vote_lepen);
    vote_rejet_04176.push(vote_rejet);
    vote_macronpop_04176.push(vote_macronMediane);
    vote_lepenpop_04176.push(vote_lepenMediane);
    vote_rejetpop_04176.push(vote_rejetMediane);
    name_Commune_04176.push(nameCommune);
    Pourcentage_04176.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04176.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04176.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04176.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04176.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04176 = [];
const vote_lepen_04176 = [];
const vote_rejet_04176 = [];
const vote_macronpop_04176 = [];
const vote_lepenpop_04176 = [];
const vote_rejetpop_04176 = [];
const name_Commune_04176 = [];
const Pourcentage_04176 = [];
const Pourcentage_rejet_04176 = [];
const vote_gene_macron_04176 = [];
const vote_gene_lepen_04176 = [];
const vote_gene_rejet_04176 = [];

async function chartIt04176(){
    await GraphDATA04176();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04176-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04176
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04176
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04176-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04176,vote_lepen_04176,vote_rejet_04176]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04176-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04176,vote_lepenpop_04176,vote_rejetpop_04176]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04176"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04176
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04176
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04176
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04177*/
/*------------------------------------------------------------------ */
async function GraphDATA04177() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04177.push(vote_macron); 
    vote_lepen_04177.push(vote_lepen);
    vote_rejet_04177.push(vote_rejet);
    vote_macronpop_04177.push(vote_macronMediane);
    vote_lepenpop_04177.push(vote_lepenMediane);
    vote_rejetpop_04177.push(vote_rejetMediane);
    name_Commune_04177.push(nameCommune);
    Pourcentage_04177.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04177.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04177.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04177.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04177.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04177 = [];
const vote_lepen_04177 = [];
const vote_rejet_04177 = [];
const vote_macronpop_04177 = [];
const vote_lepenpop_04177 = [];
const vote_rejetpop_04177 = [];
const name_Commune_04177 = [];
const Pourcentage_04177 = [];
const Pourcentage_rejet_04177 = [];
const vote_gene_macron_04177 = [];
const vote_gene_lepen_04177 = [];
const vote_gene_rejet_04177 = [];

async function chartIt04177(){
    await GraphDATA04177();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04177-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04177
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04177
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04177-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04177,vote_lepen_04177,vote_rejet_04177]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04177-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04177,vote_lepenpop_04177,vote_rejetpop_04177]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04177"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04177
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04177
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04177
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04178*/
/*------------------------------------------------------------------ */
async function GraphDATA04178() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04178.push(vote_macron); 
    vote_lepen_04178.push(vote_lepen);
    vote_rejet_04178.push(vote_rejet);
    vote_macronpop_04178.push(vote_macronMediane);
    vote_lepenpop_04178.push(vote_lepenMediane);
    vote_rejetpop_04178.push(vote_rejetMediane);
    name_Commune_04178.push(nameCommune);
    Pourcentage_04178.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04178.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04178.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04178.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04178.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04178 = [];
const vote_lepen_04178 = [];
const vote_rejet_04178 = [];
const vote_macronpop_04178 = [];
const vote_lepenpop_04178 = [];
const vote_rejetpop_04178 = [];
const name_Commune_04178 = [];
const Pourcentage_04178 = [];
const Pourcentage_rejet_04178 = [];
const vote_gene_macron_04178 = [];
const vote_gene_lepen_04178 = [];
const vote_gene_rejet_04178 = [];

async function chartIt04178(){
    await GraphDATA04178();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04178-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04178
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04178
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04178-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04178,vote_lepen_04178,vote_rejet_04178]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04178-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04178,vote_lepenpop_04178,vote_rejetpop_04178]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04178"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04178
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04178
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04178
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04179*/
/*------------------------------------------------------------------ */
async function GraphDATA04179() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04179.push(vote_macron); 
    vote_lepen_04179.push(vote_lepen);
    vote_rejet_04179.push(vote_rejet);
    vote_macronpop_04179.push(vote_macronMediane);
    vote_lepenpop_04179.push(vote_lepenMediane);
    vote_rejetpop_04179.push(vote_rejetMediane);
    name_Commune_04179.push(nameCommune);
    Pourcentage_04179.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04179.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04179.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04179.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04179.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04179 = [];
const vote_lepen_04179 = [];
const vote_rejet_04179 = [];
const vote_macronpop_04179 = [];
const vote_lepenpop_04179 = [];
const vote_rejetpop_04179 = [];
const name_Commune_04179 = [];
const Pourcentage_04179 = [];
const Pourcentage_rejet_04179 = [];
const vote_gene_macron_04179 = [];
const vote_gene_lepen_04179 = [];
const vote_gene_rejet_04179 = [];

async function chartIt04179(){
    await GraphDATA04179();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04179-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04179
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04179
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04179-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04179,vote_lepen_04179,vote_rejet_04179]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04179-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04179,vote_lepenpop_04179,vote_rejetpop_04179]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04179"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04179
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04179
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04179
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04180*/
/*------------------------------------------------------------------ */
async function GraphDATA04180() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04180.push(vote_macron); 
    vote_lepen_04180.push(vote_lepen);
    vote_rejet_04180.push(vote_rejet);
    vote_macronpop_04180.push(vote_macronMediane);
    vote_lepenpop_04180.push(vote_lepenMediane);
    vote_rejetpop_04180.push(vote_rejetMediane);
    name_Commune_04180.push(nameCommune);
    Pourcentage_04180.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04180.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04180.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04180.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04180.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04180 = [];
const vote_lepen_04180 = [];
const vote_rejet_04180 = [];
const vote_macronpop_04180 = [];
const vote_lepenpop_04180 = [];
const vote_rejetpop_04180 = [];
const name_Commune_04180 = [];
const Pourcentage_04180 = [];
const Pourcentage_rejet_04180 = [];
const vote_gene_macron_04180 = [];
const vote_gene_lepen_04180 = [];
const vote_gene_rejet_04180 = [];

async function chartIt04180(){
    await GraphDATA04180();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04180-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04180
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04180
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04180-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04180,vote_lepen_04180,vote_rejet_04180]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04180-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04180,vote_lepenpop_04180,vote_rejetpop_04180]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04180"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04180
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04180
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04180
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04181*/
/*------------------------------------------------------------------ */
async function GraphDATA04181() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04181.push(vote_macron); 
    vote_lepen_04181.push(vote_lepen);
    vote_rejet_04181.push(vote_rejet);
    vote_macronpop_04181.push(vote_macronMediane);
    vote_lepenpop_04181.push(vote_lepenMediane);
    vote_rejetpop_04181.push(vote_rejetMediane);
    name_Commune_04181.push(nameCommune);
    Pourcentage_04181.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04181.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04181.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04181.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04181.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04181 = [];
const vote_lepen_04181 = [];
const vote_rejet_04181 = [];
const vote_macronpop_04181 = [];
const vote_lepenpop_04181 = [];
const vote_rejetpop_04181 = [];
const name_Commune_04181 = [];
const Pourcentage_04181 = [];
const Pourcentage_rejet_04181 = [];
const vote_gene_macron_04181 = [];
const vote_gene_lepen_04181 = [];
const vote_gene_rejet_04181 = [];

async function chartIt04181(){
    await GraphDATA04181();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04181-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04181
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04181
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04181-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04181,vote_lepen_04181,vote_rejet_04181]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04181-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04181,vote_lepenpop_04181,vote_rejetpop_04181]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04181"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04181
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04181
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04181
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04182*/
/*------------------------------------------------------------------ */
async function GraphDATA04182() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04182.push(vote_macron); 
    vote_lepen_04182.push(vote_lepen);
    vote_rejet_04182.push(vote_rejet);
    vote_macronpop_04182.push(vote_macronMediane);
    vote_lepenpop_04182.push(vote_lepenMediane);
    vote_rejetpop_04182.push(vote_rejetMediane);
    name_Commune_04182.push(nameCommune);
    Pourcentage_04182.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04182.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04182.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04182.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04182.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04182 = [];
const vote_lepen_04182 = [];
const vote_rejet_04182 = [];
const vote_macronpop_04182 = [];
const vote_lepenpop_04182 = [];
const vote_rejetpop_04182 = [];
const name_Commune_04182 = [];
const Pourcentage_04182 = [];
const Pourcentage_rejet_04182 = [];
const vote_gene_macron_04182 = [];
const vote_gene_lepen_04182 = [];
const vote_gene_rejet_04182 = [];

async function chartIt04182(){
    await GraphDATA04182();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04182-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04182
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04182
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04182-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04182,vote_lepen_04182,vote_rejet_04182]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04182-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04182,vote_lepenpop_04182,vote_rejetpop_04182]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04182"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04182
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04182
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04182
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04183*/
/*------------------------------------------------------------------ */
async function GraphDATA04183() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04183.push(vote_macron); 
    vote_lepen_04183.push(vote_lepen);
    vote_rejet_04183.push(vote_rejet);
    vote_macronpop_04183.push(vote_macronMediane);
    vote_lepenpop_04183.push(vote_lepenMediane);
    vote_rejetpop_04183.push(vote_rejetMediane);
    name_Commune_04183.push(nameCommune);
    Pourcentage_04183.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04183.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04183.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04183.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04183.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04183 = [];
const vote_lepen_04183 = [];
const vote_rejet_04183 = [];
const vote_macronpop_04183 = [];
const vote_lepenpop_04183 = [];
const vote_rejetpop_04183 = [];
const name_Commune_04183 = [];
const Pourcentage_04183 = [];
const Pourcentage_rejet_04183 = [];
const vote_gene_macron_04183 = [];
const vote_gene_lepen_04183 = [];
const vote_gene_rejet_04183 = [];

async function chartIt04183(){
    await GraphDATA04183();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04183-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04183
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04183
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04183-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04183,vote_lepen_04183,vote_rejet_04183]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04183-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04183,vote_lepenpop_04183,vote_rejetpop_04183]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04183"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04183
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04183
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04183
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04184*/
/*------------------------------------------------------------------ */
async function GraphDATA04184() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04184.push(vote_macron); 
    vote_lepen_04184.push(vote_lepen);
    vote_rejet_04184.push(vote_rejet);
    vote_macronpop_04184.push(vote_macronMediane);
    vote_lepenpop_04184.push(vote_lepenMediane);
    vote_rejetpop_04184.push(vote_rejetMediane);
    name_Commune_04184.push(nameCommune);
    Pourcentage_04184.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04184.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04184.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04184.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04184.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04184 = [];
const vote_lepen_04184 = [];
const vote_rejet_04184 = [];
const vote_macronpop_04184 = [];
const vote_lepenpop_04184 = [];
const vote_rejetpop_04184 = [];
const name_Commune_04184 = [];
const Pourcentage_04184 = [];
const Pourcentage_rejet_04184 = [];
const vote_gene_macron_04184 = [];
const vote_gene_lepen_04184 = [];
const vote_gene_rejet_04184 = [];

async function chartIt04184(){
    await GraphDATA04184();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04184-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04184
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04184
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04184-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04184,vote_lepen_04184,vote_rejet_04184]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04184-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04184,vote_lepenpop_04184,vote_rejetpop_04184]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04184"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04184
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04184
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04184
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04185*/
/*------------------------------------------------------------------ */
async function GraphDATA04185() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04185.push(vote_macron); 
    vote_lepen_04185.push(vote_lepen);
    vote_rejet_04185.push(vote_rejet);
    vote_macronpop_04185.push(vote_macronMediane);
    vote_lepenpop_04185.push(vote_lepenMediane);
    vote_rejetpop_04185.push(vote_rejetMediane);
    name_Commune_04185.push(nameCommune);
    Pourcentage_04185.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04185.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04185.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04185.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04185.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04185 = [];
const vote_lepen_04185 = [];
const vote_rejet_04185 = [];
const vote_macronpop_04185 = [];
const vote_lepenpop_04185 = [];
const vote_rejetpop_04185 = [];
const name_Commune_04185 = [];
const Pourcentage_04185 = [];
const Pourcentage_rejet_04185 = [];
const vote_gene_macron_04185 = [];
const vote_gene_lepen_04185 = [];
const vote_gene_rejet_04185 = [];

async function chartIt04185(){
    await GraphDATA04185();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04185-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04185
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04185
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04185-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04185,vote_lepen_04185,vote_rejet_04185]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04185-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04185,vote_lepenpop_04185,vote_rejetpop_04185]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04185"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04185
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04185
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04185
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04186*/
/*------------------------------------------------------------------ */
async function GraphDATA04186() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04186.push(vote_macron); 
    vote_lepen_04186.push(vote_lepen);
    vote_rejet_04186.push(vote_rejet);
    vote_macronpop_04186.push(vote_macronMediane);
    vote_lepenpop_04186.push(vote_lepenMediane);
    vote_rejetpop_04186.push(vote_rejetMediane);
    name_Commune_04186.push(nameCommune);
    Pourcentage_04186.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04186.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04186.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04186.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04186.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04186 = [];
const vote_lepen_04186 = [];
const vote_rejet_04186 = [];
const vote_macronpop_04186 = [];
const vote_lepenpop_04186 = [];
const vote_rejetpop_04186 = [];
const name_Commune_04186 = [];
const Pourcentage_04186 = [];
const Pourcentage_rejet_04186 = [];
const vote_gene_macron_04186 = [];
const vote_gene_lepen_04186 = [];
const vote_gene_rejet_04186 = [];

async function chartIt04186(){
    await GraphDATA04186();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04186-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04186
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04186
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04186-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04186,vote_lepen_04186,vote_rejet_04186]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04186-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04186,vote_lepenpop_04186,vote_rejetpop_04186]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04186"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04186
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04186
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04186
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04187*/
/*------------------------------------------------------------------ */
async function GraphDATA04187() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04187.push(vote_macron); 
    vote_lepen_04187.push(vote_lepen);
    vote_rejet_04187.push(vote_rejet);
    vote_macronpop_04187.push(vote_macronMediane);
    vote_lepenpop_04187.push(vote_lepenMediane);
    vote_rejetpop_04187.push(vote_rejetMediane);
    name_Commune_04187.push(nameCommune);
    Pourcentage_04187.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04187.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04187.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04187.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04187.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04187 = [];
const vote_lepen_04187 = [];
const vote_rejet_04187 = [];
const vote_macronpop_04187 = [];
const vote_lepenpop_04187 = [];
const vote_rejetpop_04187 = [];
const name_Commune_04187 = [];
const Pourcentage_04187 = [];
const Pourcentage_rejet_04187 = [];
const vote_gene_macron_04187 = [];
const vote_gene_lepen_04187 = [];
const vote_gene_rejet_04187 = [];

async function chartIt04187(){
    await GraphDATA04187();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04187-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04187
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04187
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04187-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04187,vote_lepen_04187,vote_rejet_04187]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04187-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04187,vote_lepenpop_04187,vote_rejetpop_04187]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04187"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04187
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04187
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04187
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04188*/
/*------------------------------------------------------------------ */
async function GraphDATA04188() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04188.push(vote_macron); 
    vote_lepen_04188.push(vote_lepen);
    vote_rejet_04188.push(vote_rejet);
    vote_macronpop_04188.push(vote_macronMediane);
    vote_lepenpop_04188.push(vote_lepenMediane);
    vote_rejetpop_04188.push(vote_rejetMediane);
    name_Commune_04188.push(nameCommune);
    Pourcentage_04188.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04188.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04188.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04188.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04188.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04188 = [];
const vote_lepen_04188 = [];
const vote_rejet_04188 = [];
const vote_macronpop_04188 = [];
const vote_lepenpop_04188 = [];
const vote_rejetpop_04188 = [];
const name_Commune_04188 = [];
const Pourcentage_04188 = [];
const Pourcentage_rejet_04188 = [];
const vote_gene_macron_04188 = [];
const vote_gene_lepen_04188 = [];
const vote_gene_rejet_04188 = [];

async function chartIt04188(){
    await GraphDATA04188();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04188-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04188
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04188
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04188-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04188,vote_lepen_04188,vote_rejet_04188]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04188-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04188,vote_lepenpop_04188,vote_rejetpop_04188]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04188"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04188
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04188
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04188
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04189*/
/*------------------------------------------------------------------ */
async function GraphDATA04189() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04189.push(vote_macron); 
    vote_lepen_04189.push(vote_lepen);
    vote_rejet_04189.push(vote_rejet);
    vote_macronpop_04189.push(vote_macronMediane);
    vote_lepenpop_04189.push(vote_lepenMediane);
    vote_rejetpop_04189.push(vote_rejetMediane);
    name_Commune_04189.push(nameCommune);
    Pourcentage_04189.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04189.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04189.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04189.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04189.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04189 = [];
const vote_lepen_04189 = [];
const vote_rejet_04189 = [];
const vote_macronpop_04189 = [];
const vote_lepenpop_04189 = [];
const vote_rejetpop_04189 = [];
const name_Commune_04189 = [];
const Pourcentage_04189 = [];
const Pourcentage_rejet_04189 = [];
const vote_gene_macron_04189 = [];
const vote_gene_lepen_04189 = [];
const vote_gene_rejet_04189 = [];

async function chartIt04189(){
    await GraphDATA04189();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04189-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04189
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04189
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04189-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04189,vote_lepen_04189,vote_rejet_04189]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04189-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04189,vote_lepenpop_04189,vote_rejetpop_04189]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04189"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04189
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04189
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04189
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04190*/
/*------------------------------------------------------------------ */
async function GraphDATA04190() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04190.push(vote_macron); 
    vote_lepen_04190.push(vote_lepen);
    vote_rejet_04190.push(vote_rejet);
    vote_macronpop_04190.push(vote_macronMediane);
    vote_lepenpop_04190.push(vote_lepenMediane);
    vote_rejetpop_04190.push(vote_rejetMediane);
    name_Commune_04190.push(nameCommune);
    Pourcentage_04190.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04190.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04190.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04190.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04190.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04190 = [];
const vote_lepen_04190 = [];
const vote_rejet_04190 = [];
const vote_macronpop_04190 = [];
const vote_lepenpop_04190 = [];
const vote_rejetpop_04190 = [];
const name_Commune_04190 = [];
const Pourcentage_04190 = [];
const Pourcentage_rejet_04190 = [];
const vote_gene_macron_04190 = [];
const vote_gene_lepen_04190 = [];
const vote_gene_rejet_04190 = [];

async function chartIt04190(){
    await GraphDATA04190();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04190-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04190
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04190
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04190-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04190,vote_lepen_04190,vote_rejet_04190]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04190-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04190,vote_lepenpop_04190,vote_rejetpop_04190]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04190"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04190
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04190
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04190
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04191*/
/*------------------------------------------------------------------ */
async function GraphDATA04191() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04191.push(vote_macron); 
    vote_lepen_04191.push(vote_lepen);
    vote_rejet_04191.push(vote_rejet);
    vote_macronpop_04191.push(vote_macronMediane);
    vote_lepenpop_04191.push(vote_lepenMediane);
    vote_rejetpop_04191.push(vote_rejetMediane);
    name_Commune_04191.push(nameCommune);
    Pourcentage_04191.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04191.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04191.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04191.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04191.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04191 = [];
const vote_lepen_04191 = [];
const vote_rejet_04191 = [];
const vote_macronpop_04191 = [];
const vote_lepenpop_04191 = [];
const vote_rejetpop_04191 = [];
const name_Commune_04191 = [];
const Pourcentage_04191 = [];
const Pourcentage_rejet_04191 = [];
const vote_gene_macron_04191 = [];
const vote_gene_lepen_04191 = [];
const vote_gene_rejet_04191 = [];

async function chartIt04191(){
    await GraphDATA04191();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04191-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04191
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04191
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04191-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04191,vote_lepen_04191,vote_rejet_04191]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04191-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04191,vote_lepenpop_04191,vote_rejetpop_04191]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04191"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04191
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04191
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04191
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04192*/
/*------------------------------------------------------------------ */
async function GraphDATA04192() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04192.push(vote_macron); 
    vote_lepen_04192.push(vote_lepen);
    vote_rejet_04192.push(vote_rejet);
    vote_macronpop_04192.push(vote_macronMediane);
    vote_lepenpop_04192.push(vote_lepenMediane);
    vote_rejetpop_04192.push(vote_rejetMediane);
    name_Commune_04192.push(nameCommune);
    Pourcentage_04192.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04192.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04192.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04192.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04192.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04192 = [];
const vote_lepen_04192 = [];
const vote_rejet_04192 = [];
const vote_macronpop_04192 = [];
const vote_lepenpop_04192 = [];
const vote_rejetpop_04192 = [];
const name_Commune_04192 = [];
const Pourcentage_04192 = [];
const Pourcentage_rejet_04192 = [];
const vote_gene_macron_04192 = [];
const vote_gene_lepen_04192 = [];
const vote_gene_rejet_04192 = [];

async function chartIt04192(){
    await GraphDATA04192();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04192-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04192
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04192
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04192-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04192,vote_lepen_04192,vote_rejet_04192]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04192-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04192,vote_lepenpop_04192,vote_rejetpop_04192]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04192"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04192
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04192
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04192
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04193*/
/*------------------------------------------------------------------ */
async function GraphDATA04193() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04193.push(vote_macron); 
    vote_lepen_04193.push(vote_lepen);
    vote_rejet_04193.push(vote_rejet);
    vote_macronpop_04193.push(vote_macronMediane);
    vote_lepenpop_04193.push(vote_lepenMediane);
    vote_rejetpop_04193.push(vote_rejetMediane);
    name_Commune_04193.push(nameCommune);
    Pourcentage_04193.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04193.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04193.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04193.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04193.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04193 = [];
const vote_lepen_04193 = [];
const vote_rejet_04193 = [];
const vote_macronpop_04193 = [];
const vote_lepenpop_04193 = [];
const vote_rejetpop_04193 = [];
const name_Commune_04193 = [];
const Pourcentage_04193 = [];
const Pourcentage_rejet_04193 = [];
const vote_gene_macron_04193 = [];
const vote_gene_lepen_04193 = [];
const vote_gene_rejet_04193 = [];

async function chartIt04193(){
    await GraphDATA04193();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04193-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04193
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04193
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04193-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04193,vote_lepen_04193,vote_rejet_04193]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04193-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04193,vote_lepenpop_04193,vote_rejetpop_04193]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04193"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04193
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04193
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04193
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04194*/
/*------------------------------------------------------------------ */
async function GraphDATA04194() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04194.push(vote_macron); 
    vote_lepen_04194.push(vote_lepen);
    vote_rejet_04194.push(vote_rejet);
    vote_macronpop_04194.push(vote_macronMediane);
    vote_lepenpop_04194.push(vote_lepenMediane);
    vote_rejetpop_04194.push(vote_rejetMediane);
    name_Commune_04194.push(nameCommune);
    Pourcentage_04194.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04194.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04194.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04194.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04194.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04194 = [];
const vote_lepen_04194 = [];
const vote_rejet_04194 = [];
const vote_macronpop_04194 = [];
const vote_lepenpop_04194 = [];
const vote_rejetpop_04194 = [];
const name_Commune_04194 = [];
const Pourcentage_04194 = [];
const Pourcentage_rejet_04194 = [];
const vote_gene_macron_04194 = [];
const vote_gene_lepen_04194 = [];
const vote_gene_rejet_04194 = [];

async function chartIt04194(){
    await GraphDATA04194();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04194-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04194
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04194
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04194-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04194,vote_lepen_04194,vote_rejet_04194]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04194-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04194,vote_lepenpop_04194,vote_rejetpop_04194]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04194"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04194
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04194
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04194
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04195*/
/*------------------------------------------------------------------ */
async function GraphDATA04195() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04195.push(vote_macron); 
    vote_lepen_04195.push(vote_lepen);
    vote_rejet_04195.push(vote_rejet);
    vote_macronpop_04195.push(vote_macronMediane);
    vote_lepenpop_04195.push(vote_lepenMediane);
    vote_rejetpop_04195.push(vote_rejetMediane);
    name_Commune_04195.push(nameCommune);
    Pourcentage_04195.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04195.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04195.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04195.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04195.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04195 = [];
const vote_lepen_04195 = [];
const vote_rejet_04195 = [];
const vote_macronpop_04195 = [];
const vote_lepenpop_04195 = [];
const vote_rejetpop_04195 = [];
const name_Commune_04195 = [];
const Pourcentage_04195 = [];
const Pourcentage_rejet_04195 = [];
const vote_gene_macron_04195 = [];
const vote_gene_lepen_04195 = [];
const vote_gene_rejet_04195 = [];

async function chartIt04195(){
    await GraphDATA04195();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04195-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04195
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04195
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04195-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04195,vote_lepen_04195,vote_rejet_04195]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04195-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04195,vote_lepenpop_04195,vote_rejetpop_04195]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04195"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04195
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04195
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04195
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04196*/
/*------------------------------------------------------------------ */
async function GraphDATA04196() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04196.push(vote_macron); 
    vote_lepen_04196.push(vote_lepen);
    vote_rejet_04196.push(vote_rejet);
    vote_macronpop_04196.push(vote_macronMediane);
    vote_lepenpop_04196.push(vote_lepenMediane);
    vote_rejetpop_04196.push(vote_rejetMediane);
    name_Commune_04196.push(nameCommune);
    Pourcentage_04196.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04196.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04196.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04196.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04196.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04196 = [];
const vote_lepen_04196 = [];
const vote_rejet_04196 = [];
const vote_macronpop_04196 = [];
const vote_lepenpop_04196 = [];
const vote_rejetpop_04196 = [];
const name_Commune_04196 = [];
const Pourcentage_04196 = [];
const Pourcentage_rejet_04196 = [];
const vote_gene_macron_04196 = [];
const vote_gene_lepen_04196 = [];
const vote_gene_rejet_04196 = [];

async function chartIt04196(){
    await GraphDATA04196();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04196-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04196
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04196
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04196-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04196,vote_lepen_04196,vote_rejet_04196]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04196-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04196,vote_lepenpop_04196,vote_rejetpop_04196]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04196"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04196
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04196
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04196
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04197*/
/*------------------------------------------------------------------ */
async function GraphDATA04197() {
    const response = await fetch('../Departement04/Json/Data_dep04.json');
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
    vote_macron_04197.push(vote_macron); 
    vote_lepen_04197.push(vote_lepen);
    vote_rejet_04197.push(vote_rejet);
    vote_macronpop_04197.push(vote_macronMediane);
    vote_lepenpop_04197.push(vote_lepenMediane);
    vote_rejetpop_04197.push(vote_rejetMediane);
    name_Commune_04197.push(nameCommune);
    Pourcentage_04197.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
    Pourcentage_rejet_04197.push(vote_macron, vote_lepen, vote_rejet);
    vote_gene_macron_04197.push(vote_macron, vote_macronMediane);
    vote_gene_lepen_04197.push(vote_lepen, vote_lepenMediane);
    vote_gene_rejet_04197.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04197 = [];
const vote_lepen_04197 = [];
const vote_rejet_04197 = [];
const vote_macronpop_04197 = [];
const vote_lepenpop_04197 = [];
const vote_rejetpop_04197 = [];
const name_Commune_04197 = [];
const Pourcentage_04197 = [];
const Pourcentage_rejet_04197 = [];
const vote_gene_macron_04197 = [];
const vote_gene_lepen_04197 = [];
const vote_gene_rejet_04197 = [];

async function chartIt04197(){
    await GraphDATA04197();
// Bar chart
    const myChart = new Chart(document.getElementById("bar-chart_04197-01"), {  
        type: 'bar',
        data: {
        labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
        datasets: [
            {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: Pourcentage_04197
            }
         ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
          legend: { display: false },
          title: {
            display: true,
            text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04197
        
        }
        }
    });
    const myChart02 = new Chart(document.getElementById("polar-chart_04197-01"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macron_04197,vote_lepen_04197,vote_rejet_04197]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const myChart04 = new Chart(document.getElementById("polar-chart_04197-03"), {
        type: 'polarArea',
        data: {
          labels: [name_macron, name_lepen, name_rejete],
          datasets: [
            {
              label: "%",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
              data: [vote_macronpop_04197,vote_lepenpop_04197,vote_rejetpop_04197]
            }
          ]
        },
        options: {
          scale: {
            reverse: false,
            ticks: {
              min: 0,
              max: 100
            }
          }
        }
    });
    const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04197"), {
        type: 'bar',
        data: {
            labels: ["Officiel", "Moyenne Population"],
            datasets: [
            {
                label: name_macron,
                backgroundColor: "#3e95cd",
                data: vote_gene_macron_04197
            }, {
                label: name_lepen,
                backgroundColor: "#8e5ea2",
                data: vote_gene_lepen_04197
            },{
                label: name_rejete,
                backgroundColor: "#c45850",
                data: vote_gene_rejet_04197
                }
            ]
        },
        options: {
          scales: { 
            yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
            }, 
        }
    });
}
/*------------------------------------------------------------------ */
/*COMMUNE 04198*/
/*------------------------------------------------------------------ */
async function GraphDATA04198() {
  const response = await fetch('../Departement04/Json/Data_dep04.json');
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
  vote_macron_04198.push(vote_macron); 
  vote_lepen_04198.push(vote_lepen);
  vote_rejet_04198.push(vote_rejet);
  vote_macronpop_04198.push(vote_macronMediane);
  vote_lepenpop_04198.push(vote_lepenMediane);
  vote_rejetpop_04198.push(vote_rejetMediane);
  name_Commune_04198.push(nameCommune);
  Pourcentage_04198.push(vote_macron, vote_lepen, nbr_Abs, nbr_Blc, nbr_Nul);
  Pourcentage_rejet_04198.push(vote_macron, vote_lepen, vote_rejet);
  vote_gene_macron_04198.push(vote_macron, vote_macronMediane);
  vote_gene_lepen_04198.push(vote_lepen, vote_lepenMediane);
  vote_gene_rejet_04198.push(vote_rejet, vote_rejetMediane);
}
const vote_macron_04198 = [];
const vote_lepen_04198 = [];
const vote_rejet_04198 = [];
const vote_macronpop_04198 = [];
const vote_lepenpop_04198 = [];
const vote_rejetpop_04198 = [];
const name_Commune_04198 = [];
const Pourcentage_04198 = [];
const Pourcentage_rejet_04198 = [];
const vote_gene_macron_04198 = [];
const vote_gene_lepen_04198 = [];
const vote_gene_rejet_04198 = [];

async function chartIt04198(){
  await GraphDATA04198();
// Bar chart
  const myChart = new Chart(document.getElementById("bar-chart_04198-01"), {  
      type: 'bar',
      data: {
      labels: [name_macron, name_lepen, name_abs, name_Blancs, name_Nul],
      datasets: [
          {
          label: "%",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: Pourcentage_04197
          }
       ]
      },
      options: {
        scales: { 
          yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
          }, 
        legend: { display: false },
        title: {
          display: true,
          text: 'Resultat 2éme Tour éléction présidencielle : ' + name_Commune_04197
      
      }
      }
  });
  const myChart02 = new Chart(document.getElementById("polar-chart_04198-01"), {
      type: 'polarArea',
      data: {
        labels: [name_macron, name_lepen, name_rejete],
        datasets: [
          {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
            data: [vote_macron_04197,vote_lepen_04197,vote_rejet_04197]
          }
        ]
      },
      options: {
        scale: {
          reverse: false,
          ticks: {
            min: 0,
            max: 100
          }
        }
      }
  });
  const myChart04 = new Chart(document.getElementById("polar-chart_04198-03"), {
      type: 'polarArea',
      data: {
        labels: [name_macron, name_lepen, name_rejete],
        datasets: [
          {
            label: "%",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#c45850"],
            data: [vote_macronpop_04197,vote_lepenpop_04197,vote_rejetpop_04197]
          }
        ]
      },
      options: {
        scale: {
          reverse: false,
          ticks: {
            min: 0,
            max: 100
          }
        }
      }
  });
  const mybargrouped = new Chart(document.getElementById("bar-chart-grouped_04198"), {
      type: 'bar',
      data: {
          labels: ["Officiel", "Moyenne Population"],
          datasets: [
          {
              label: name_macron,
              backgroundColor: "#3e95cd",
              data: vote_gene_macron_04197
          }, {
              label: name_lepen,
              backgroundColor: "#8e5ea2",
              data: vote_gene_lepen_04197
          },{
              label: name_rejete,
              backgroundColor: "#c45850",
              data: vote_gene_rejet_04197
              }
          ]
      },
      options: {
        scales: { 
          yAxes: [{id: 'y-axis-1', ticks: {min: 0, max:100}}] 
          }, 
      }
  });
}
